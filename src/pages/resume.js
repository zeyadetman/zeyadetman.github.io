import React, { useEffect } from "react";
import { Document, Page } from "react-pdf";

const Resume = () => {
  return (
    <div>
      <Document file="somefile.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default Resume;
