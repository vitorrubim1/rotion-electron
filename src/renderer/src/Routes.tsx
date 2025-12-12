import { Fragment } from "react";
import { Route } from "react-router-dom";

import { Router } from "../../lib/electron-router-dom";

// Default
import { Default } from "./pages/layouts/default";

import { BlankPage } from "./pages/blank";
import { DocumentPage } from "./pages/document";

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<BlankPage />} />
          <Route path="/document" element={<DocumentPage />} />
        </Route>
      }
    />
  );
}
