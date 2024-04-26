import * as React from "react";

import {
  codeStyles,
  headingStyles,
  pageStyles,
  paragraphStyles,
} from "./404styles";

export default function NotFoundPage() {
  const isDevelopment =
    (process.env.NODE_ENV || "development") === "development";

  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn't find what you were looking for.
        <br />
        {isDevelopment ? (
          <>
            <br />
            Try creating a page in{" "}
            <code style={codeStyles}>src/stories/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <a href="/" to="/">
          Go home
        </a>
        .
      </p>
    </main>
  );
}
