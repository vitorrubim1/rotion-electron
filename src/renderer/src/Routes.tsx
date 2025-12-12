import { Fragment } from "react";
import { Route } from "react-router-dom";

import { Router } from "../../lib/electron-router-dom";

import { BlankPage } from "./pages/blank";
import { DocumentPage } from "./pages/document";

export function Routes() {
  return (
    <Router
      main={
        <Fragment>
          <Route path="/" element={<BlankPage />} />
          <Route path="/document" element={<DocumentPage />} />
        </Fragment>
      }
    />
  );
}
