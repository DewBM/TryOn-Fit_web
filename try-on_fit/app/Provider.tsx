// Import React and NextUIProvider
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./page";

// Define Provider component
export default function Provider() {
  // Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <Home/>
    </NextUIProvider>
  );
}
