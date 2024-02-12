import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { getCurrenPath } from "../utils/getCurrentPath.js";
import Router from "./Router.jsx";
import Route from "./Route.jsx";
import Link from "./Link.jsx";

vi.mock("../utils/getCurrentPath.js", () => ({
  getCurrenPath: vi.fn(),
}));

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("should render without problems", () => {
    render(<Router routes={[]} />);
    expect(true).toBe(true);
  });

  it("should show 404 page when no router match", () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    expect(screen.getByText("404")).toBeTruthy();
  });

  it("when path to be some the page should include the neme of path", () => {
    getCurrenPath.mockReturnValue("/about");
    const paths = [
      {
        path: "/",
        Component: () => <h1>Home</h1>,
      },
      {
        path: "/about",
        Component: () => <h1>About</h1>,
      },
    ];

    render(<Router routes={paths} />);
    expect(screen.getByText("About")).toBeTruthy();
  });

  it("when click to Link, the page should change a new page", () => {
    getCurrenPath.mockReturnValueOnce("/");

    render(
      <Router>
        <Route
          path="/"
          Component={() => (
            <>
              <h1>Home</h1>
              <Link to="/about">Go to About</Link>
            </>
          )}
        />
        <Route path="/about" Component={() => <h1>About</h1>} />
      </Router>
    );

    const link = screen.getByText("Go to About");
    fireEvent.click(link);

    const titleAbout = screen.getByText("About");

    expect(titleAbout).toBeTruthy();
  });
});
