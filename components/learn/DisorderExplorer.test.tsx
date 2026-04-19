import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DisorderExplorer } from "@/components/learn/DisorderExplorer";
import { DISORDER_SPOTLIGHTS, PSYCHOTIC_SYMPTOM_DOMAINS } from "@/lib/learnContent";

const replaceMock = vi.fn();
const searchParamsRef = {
  current: new URLSearchParams(),
};

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: replaceMock,
  }),
  usePathname: () => "/learn",
  useSearchParams: () => searchParamsRef.current,
}));

describe("DisorderExplorer URL sync", () => {
  beforeEach(() => {
    replaceMock.mockClear();
    searchParamsRef.current = new URLSearchParams();
  });

  it("keeps selected family after click even before URL params rehydrate", async () => {
    render(
      <DisorderExplorer
        profiles={DISORDER_SPOTLIGHTS}
        psychoticDomains={PSYCHOTIC_SYMPTOM_DOMAINS}
      />
    );

    expect(screen.getByText("Showing 10 of 10 spotlight entries.")).toBeInTheDocument();

    const bipolarTab = screen.getByRole("button", {
      name: /Bipolar and related \(2\)/i,
    });

    await userEvent.click(bipolarTab);

    await waitFor(() => {
      expect(
        screen.getByText("Showing 2 of 10 spotlight entries.")
      ).toBeInTheDocument();
    });

    expect(replaceMock).toHaveBeenCalled();
    expect(replaceMock).toHaveBeenLastCalledWith(
      expect.stringContaining("family=Bipolar+and+related"),
      { scroll: false }
    );
  });

  it("preserves search query when selecting a family filter", async () => {
    render(
      <DisorderExplorer
        profiles={DISORDER_SPOTLIGHTS}
        psychoticDomains={PSYCHOTIC_SYMPTOM_DOMAINS}
      />
    );

    const searchInput = screen.getByRole("searchbox", {
      name: /Search by disorder name or keyword/i,
    });

    await userEvent.type(searchInput, "bipolar");

    await waitFor(() => {
      expect(
        screen.getByText("Showing 2 of 10 spotlight entries.")
      ).toBeInTheDocument();
    });

    const bipolarTab = screen.getByRole("button", {
      name: /Bipolar and related \(2\)/i,
    });

    await userEvent.click(bipolarTab);

    await waitFor(() => {
      expect(searchInput).toHaveValue("bipolar");
    });

    expect(replaceMock).toHaveBeenLastCalledWith(
      expect.stringContaining("family=Bipolar+and+related&q=bipolar"),
      { scroll: false }
    );
  });
});
