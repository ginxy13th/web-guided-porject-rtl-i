import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalForm from "./AnimalForm";
test("Renders form without errors", () => {
  render(<AnimalForm />);
});
test("Adds animal to list when form is filled out and submitted", () => {
  // render AnimalForm
  render(<AnimalForm />);
  // query for the different inputs
  const speciesInput = screen.getByLabelText(/species:/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes:/i);
  // fill out the inputs
  fireEvent.change(speciesInput, { target: { value: "tiger" } });
  fireEvent.change(ageInput, { target: { value: 3 } });
  fireEvent.change(notesInput, { target: { value: "some notes" } });
  // query for the submit button
  const submitBtn = screen.getByRole("button", { name: /submit!/i });
  // click on the submit button
  fireEvent.click(submitBtn);
  // make our assertions
  expect(screen.getByText(/tiger/i)).toBeInTheDocument();
});
test("Adds animal to list when form is filled out and submitted", async () => {
  // render AnimalForm
  render(<AnimalForm />);
  // query for the different inputs
  const speciesInput = screen.getByLabelText(/species:/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes:/i);
  // fill out the inputs
  fireEvent.change(speciesInput, { target: { value: "tiger" } });
  fireEvent.change(ageInput, { target: { value: 3 } });
  fireEvent.change(notesInput, { target: { value: "some notes" } });
  // query for the submit button
  const submitBtn = screen.getByRole("button", { name: /submit!/i });
  // click on the submit button
  fireEvent.click(submitBtn);
  // make our assertions
  expect(await screen.findByText(/tiger/i)).toBeInTheDocument();
});