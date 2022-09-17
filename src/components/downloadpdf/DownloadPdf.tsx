import React, { useContext, useRef, useState } from "react";
import AppContext from "../../context/Contex";
import { AllDataTogether } from "../../types/types";
import "./downloadPdf.css";
//@ts-ignore
import Pdf from "react-to-pdf";
import PdfPart from "./pdfPart";

const DownloadPdf = () => {
  const ref = React.createRef();

  return (
    <React.Fragment>
      <PdfPart ref={ref} />
      <Pdf targetRef={ref} filename="your-details.pdf">
        {({ toPdf }: any) => <button onClick={toPdf}>Download pdf</button>}
      </Pdf>
    </React.Fragment>
  );
};

export default DownloadPdf;
