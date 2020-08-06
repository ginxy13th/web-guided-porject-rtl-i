import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";


test("App component renders without errors", () => {
  // RTL - render a component, then make some assertions
  render(<App />);
});
/******** HOW TEST FAIL ********/
// test("test title", () => {
//   // any test will fail if an error is "thrown" anywhere inside this callback function
//   throw new Error("this test failed because we manually threw an error");
// });
test("app renders the header", () => {
render(<App />);
const header = screen.getByText(/Add New Animal/i);
expect(header).toBeInTheDocument()
});