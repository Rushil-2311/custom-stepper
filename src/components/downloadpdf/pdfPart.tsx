import React, { useContext, useState } from "react";
import AppContext from "../../context/Contex";
import { AllDataTogether } from "../../types/types";
import "./downloadPdf.css";

const PdfPart = (props: any, ref: any) => {
  const myContext: any = useContext(AppContext);
  const updateContext = myContext.userDetails;
  const [mergeAllData, setMergeAllData] = useState<AllDataTogether | any>({
    ...updateContext.personalDetails.details,
    ...updateContext.education.details,
    ...updateContext.professional.details,
  });
  return (
    <div className="rowContainer" ref={ref}>
      {Object.keys(mergeAllData).map((data: any, key: any) => {
        return (
          <div key={key} className="container_main">
            <div>{data}: </div> <span>{mergeAllData[data]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default React.forwardRef(PdfPart);
