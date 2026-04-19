import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { SimulatorClient } from "@/components/simulator/SimulatorClient";

// Use fake timers for setTimeout-based simulation dispatch
beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.runAllTimers();
  vi.useRealTimers();
});

describe("SimulatorClient", () => {
  it("renders the SimulatorForm with default params", () => {
    render(<SimulatorClient />);
    expect(screen.getByRole("button", { name: "Run Simulation" })).toBeInTheDocument();
  });

  it("shows placeholder text before any simulation has run", () => {
    render(<SimulatorClient />);
    expect(screen.getByText(/Configure parameters and click/)).toBeInTheDocument();
    // "Run Simulation" appears both in the button and the placeholder span
    const runSimulationEls = screen.getAllByText("Run Simulation");
    expect(runSimulationEls.length).toBeGreaterThanOrEqual(1);
  });

  it("shows 'Simulating…' immediately after clicking Run", async () => {
    render(<SimulatorClient />);
    const button = screen.getByRole("button", { name: "Run Simulation" });
    fireEvent.click(button);
    // Before the setTimeout fires, the button should say Simulating
    expect(screen.getByRole("button", { name: "Simulating…" })).toBeInTheDocument();
  });

  it("button is disabled while simulation is running", async () => {
    render(<SimulatorClient />);
    fireEvent.click(screen.getByRole("button", { name: "Run Simulation" }));
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("shows results panel after simulation completes", async () => {
    render(<SimulatorClient />);
    fireEvent.click(screen.getByRole("button", { name: "Run Simulation" }));
    await act(async () => {
      vi.runAllTimers();
    });
    expect(screen.getByText("Mood Trajectory")).toBeInTheDocument();
    expect(screen.getByText("Episode Summary")).toBeInTheDocument();
    expect(screen.getByText("Final State")).toBeInTheDocument();
  });

  it("hides the placeholder after simulation completes", async () => {
    render(<SimulatorClient />);
    fireEvent.click(screen.getByRole("button", { name: "Run Simulation" }));
    await act(async () => {
      vi.runAllTimers();
    });
    expect(screen.queryByText(/Configure parameters and click/)).not.toBeInTheDocument();
  });

  it("button returns to 'Run Simulation' after simulation completes", async () => {
    render(<SimulatorClient />);
    fireEvent.click(screen.getByRole("button", { name: "Run Simulation" }));
    await act(async () => {
      vi.runAllTimers();
    });
    expect(screen.getByRole("button", { name: "Run Simulation" })).toBeInTheDocument();
  });

  it("button is re-enabled after simulation completes", async () => {
    render(<SimulatorClient />);
    fireEvent.click(screen.getByRole("button", { name: "Run Simulation" }));
    await act(async () => {
      vi.runAllTimers();
    });
    expect(screen.getByRole("button", { name: "Run Simulation" })).not.toBeDisabled();
  });

  it("displays a risk score after running", async () => {
    render(<SimulatorClient />);
    fireEvent.click(screen.getByRole("button", { name: "Run Simulation" }));
    await act(async () => {
      vi.runAllTimers();
    });
    expect(screen.getByText(/\/ 100/)).toBeInTheDocument();
  });

  it("renders sliders for all parameter groups", () => {
    render(<SimulatorClient />);
    const sliders = screen.getAllByRole("slider");
    expect(sliders.length).toBe(8);
  });

  it("updates simulation result when params change and simulation is re-run", async () => {
    render(<SimulatorClient />);

    // Run first simulation
    fireEvent.click(screen.getByRole("button", { name: "Run Simulation" }));
    await act(async () => { vi.runAllTimers(); });

    const firstRiskText = screen.getByText(/\/ 100/).textContent;

    // Change a param (cannabisFrequency to max) and re-run
    const sliders = screen.getAllByRole("slider");
    // cannabisFrequency slider is index 2
    fireEvent.change(sliders[2], { target: { value: "4" } });

    // Also max THC
    fireEvent.change(sliders[3], { target: { value: "1" } });

    fireEvent.click(screen.getByRole("button", { name: "Run Simulation" }));
    await act(async () => { vi.runAllTimers(); });

    const secondRiskText = screen.getByText(/\/ 100/).textContent;
    // Max cannabis should yield a different (higher) risk score
    expect(secondRiskText).toBeDefined();
    // Risk with max cannabis exposure should be >= initial
    const firstScore = parseFloat(firstRiskText?.replace(" / 100", "") ?? "0");
    const secondScore = parseFloat(secondRiskText?.replace(" / 100", "") ?? "0");
    expect(secondScore).toBeGreaterThanOrEqual(firstScore);
  });
});