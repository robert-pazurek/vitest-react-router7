import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router";
import App from "./App.tsx";

describe('test', () => {
  it('should do', () => {
    render(<MemoryRouter><App /></MemoryRouter>)
  });
});