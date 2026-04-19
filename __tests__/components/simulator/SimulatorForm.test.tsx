import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { SimulatorForm } from "@/components/simulator/SimulatorForm";
import type { SimulationParams } from "@/lib/types";

const defaultParams: SimulationParams = {
  durationDays: 365,
  dt: 0.1,
  cannabisFrequency: 1,
  thcPotency: 0.5,
  cbdPotency: 0.1,
  cannabisDaysElapsed: 0,
  geneticLoci: [],
  polygenicRiskScore: 0.3,
  priorEpisodes: 2,
  onsetAge: 22,
  initialDopamine: 0.5,
  initialSerotonin: 0.5,
  initialGaba: 0.5,
  noiseLevel: 0.03,
  seed: 42,
};

describe("SimulatorForm", () => {
  it("renders the Run Simulation button", () => {
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={vi.fn()}
        onRun={vi.fn()}
        isRunning={false}
      />
    );
    expect(screen.getByRole("button", { name: "Run Simulation" })).toBeInTheDocument();
  });

  it("shows 'Simulating…' when isRunning is true", () => {
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={vi.fn()}
        onRun={vi.fn()}
        isRunning={true}
      />
    );
    expect(screen.getByRole("button", { name: "Simulating…" })).toBeInTheDocument();
  });

  it("disables the Run button when isRunning is true", () => {
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={vi.fn()}
        onRun={vi.fn()}
        isRunning={true}
      />
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("enables the Run button when isRunning is false", () => {
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={vi.fn()}
        onRun={vi.fn()}
        isRunning={false}
      />
    );
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  it("calls onRun when the button is clicked", () => {
    const onRun = vi.fn();
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={vi.fn()}
        onRun={onRun}
        isRunning={false}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onRun).toHaveBeenCalledTimes(1);
  });

  it("does not call onRun when button is disabled", () => {
    const onRun = vi.fn();
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={vi.fn()}
        onRun={onRun}
        isRunning={true}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onRun).not.toHaveBeenCalled();
  });

  it("renders section headings for all parameter groups", () => {
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={vi.fn()}
        onRun={vi.fn()}
        isRunning={false}
      />
    );
    expect(screen.getByText("Simulation")).toBeInTheDocument();
    expect(screen.getByText("Cannabis Exposure")).toBeInTheDocument();
    expect(screen.getByText("Polygenic Risk")).toBeInTheDocument();
    expect(screen.getByText("Clinical History")).toBeInTheDocument();
  });

  it("renders slider labels for all parameters", () => {
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={vi.fn()}
        onRun={vi.fn()}
        isRunning={false}
      />
    );
    expect(screen.getByText("Duration")).toBeInTheDocument();
    expect(screen.getByText("Noise level")).toBeInTheDocument();
    expect(screen.getByText("Use frequency")).toBeInTheDocument();
    expect(screen.getByText("THC potency")).toBeInTheDocument();
    expect(screen.getByText("CBD potency")).toBeInTheDocument();
    expect(screen.getByText("Polygenic risk score")).toBeInTheDocument();
    expect(screen.getByText("Prior episodes")).toBeInTheDocument();
    expect(screen.getByText("Onset age")).toBeInTheDocument();
  });

  it("displays durationDays value with 'days' unit", () => {
    render(
      <SimulatorForm
        params={{ ...defaultParams, durationDays: 180 }}
        onChange={vi.fn()}
        onRun={vi.fn()}
        isRunning={false}
      />
    );
    expect(screen.getByText("180 days")).toBeInTheDocument();
  });

  it("calls onChange with updated durationDays when slider changes", () => {
    const onChange = vi.fn();
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={onChange}
        onRun={vi.fn()}
        isRunning={false}
      />
    );
    // Find the Duration slider by its accessible name
    const durationSlider = screen.getByRole("slider", { name: "Duration" });
    fireEvent.change(durationSlider, { target: { value: "200" } });
    expect(onChange).toHaveBeenCalledWith({ durationDays: 200 });
  });

  it("calls onChange with updated cannabisFrequency when slider changes", () => {
    const onChange = vi.fn();
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={onChange}
        onRun={vi.fn()}
        isRunning={false}
      />
    );
    // Find the cannabisFrequency slider by scoping to the Cannabis Exposure section
    const cannabisSection = screen.getByText("Cannabis Exposure").closest("section")!;
    const cannabisSlider = within(cannabisSection).getByRole("slider", { name: "Use frequency" });
    fireEvent.change(cannabisSlider, { target: { value: "2.5" } });
    expect(onChange).toHaveBeenCalledWith({ cannabisFrequency: 2.5 });
  });

  it("renders all range inputs", () => {
    render(
      <SimulatorForm
        params={defaultParams}
        onChange={vi.fn()}
        onRun={vi.fn()}
        isRunning={false}
      />
    );
    const sliders = screen.getAllByRole("slider");
    // duration, noiseLevel, cannabisFreq, thcPotency, cbdPotency, prs, priorEpisodes, onsetAge = 8
    expect(sliders.length).toBe(8);
  });

  it("displays prior episodes without decimal", () => {
    render(
      <SimulatorForm
        params={{ ...defaultParams, priorEpisodes: 5 }}
        onChange={vi.fn()}
        onRun={vi.fn()}
        isRunning={false}
      />
    );
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("displays onset age with 'yrs' unit", () => {
    render(
      <SimulatorForm
        params={{ ...defaultParams, onsetAge: 30 }}
        onChange={vi.fn()}
        onRun={vi.fn()}
        isRunning={false}
      />
    );
    expect(screen.getByText("30 yrs")).toBeInTheDocument();
  });
});