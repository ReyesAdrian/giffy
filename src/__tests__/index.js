import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

// test("home work as expected", async () => {
//   const { container } = render(<App />);
//   const gifLink = await waitForElement(() =>
//     container.querySelector(".Gif-link")
//   );
//   expect(gifLink).toBeVisible();
// });

test("search form could be used", async () => {
  render(<App />);
  const input = await screen.findByPlaceholderText("Search a gif here...");
  fireEvent.change(input, { target: { value: "panda" } });

  const button = await screen.findByRole("button");
  fireEvent.click(button);

  const title = await screen.findByText("panda");
  expect(title).toBeVisible();
});
