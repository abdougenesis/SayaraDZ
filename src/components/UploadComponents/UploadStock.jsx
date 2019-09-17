import React from "react";
import UploadHeader from "./UploadHeader";
import DragAndDrop from "./DragAndDrop";
import DragComp from "./DragComp";

const handleDrop = file => {
  console.log("file pushed");
};

export default function UploadStock(props) {
  return (
    <div className="managIndex">
      <UploadHeader />
      <div className="uploadTextDragContainer">
        <div className="uploadText">
          <h3>Uploader fichier stock</h3>
          <div>
            Upload de la liste des véhicules actuellement disponibles. Ce
            fichier est au format CSV et contient les informations telles que
            numéro de châssis, version et options
          </div>
        </div>
        <DragAndDrop handleDrop={handleDrop}>
          <DragComp />
        </DragAndDrop>
      </div>
    </div>
  );
}
