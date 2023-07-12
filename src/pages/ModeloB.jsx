import React, { useState } from "react";
import { jsPDF } from "jspdf/dist/jspdf.umd.min.js";

const ModeloA = () => {
  const [universidad, setUniversidad] = useState("");

  const handleInputChange = (event) => {
    setUniversidad(event.target.value);
  };
  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    // Crear instancia de jsPDF

    doc.addFont("times", "normal", "WinAnsiEncoding");
    // Definir el estilo de fuente
    doc.setFont("times", "bold");

    // Añadir titulo parte arriba
    doc.setFontSize(15);
    doc.text(
        `UNIVERSIDAD NACIONAL DE EDUCACIÓN  ${universidad}`,
      doc.internal.pageSize.getWidth() / 2,
      20,
      { align: "center" }
    );

    

    // Guardar el PDF
    doc.save("mi_pdf.pdf");
  };

  return (
    <div>
      <label htmlFor="universidad">Nombre de la universidad:</label>
      <input
        type="text"
        id="universidad"
        value={universidad}
        onChange={handleInputChange}
      />
      <button onClick={handleGeneratePDF}>Generar PDF B</button>
    </div>
  );
};

export default ModeloA;