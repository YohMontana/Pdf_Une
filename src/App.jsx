import { jsPDF } from "jspdf/dist/jspdf.umd.min.js";

function App() {
   
// Crear instancia de jsPDF
const doc = new jsPDF();
doc.addFont("times", "normal", "WinAnsiEncoding");
// Definir el estilo de fuente
doc.setFont("times", "bold");

// Añadir titulo parte arriba
doc.setFontSize(15);
doc.text("UNIVERSIDAD NACIONAL DE EDUCACIÓN", doc.internal.pageSize.getWidth() / 2, 20, { align: "center" });

doc.setFontSize(14);
doc.text("Enrique Guzmán y Valle", doc.internal.pageSize.getWidth() / 2, 25, { align: "center" });

doc.setFontSize(14);
doc.setFont("times", "bolditalic");
doc.text(`"Alma Máter del Magisterio Nacional"`, doc.internal.pageSize.getWidth() / 2, 30, { align: "center" });

doc.setFontSize(14);
doc.setFont("times", "bold");
doc.text("RECTORADO", doc.internal.pageSize.getWidth() / 2, 35, { align: "center" });
//Añadir imagen 
let imgData = "https://upload.wikimedia.org/wikipedia/commons/0/08/Escudo_UNE.png";
doc.addImage(imgData, "PNG", 102, 36, 8, 12, { align: "center" });
//Añadir linea
doc.setLineWidth(0.5);
doc.line(20, 50, 190, 50); 


doc.setFontSize(12);
doc.setFont("times", "normal");
doc.text("Hoja de Envío N°: 1612-2023-R-UNE", doc.internal.pageSize.getWidth() / 2, 58, { align: "center" });

doc.setFontSize(12);
doc.setFont("times", "normal");
doc.text("FECHA: 22 junio", 20, 70);

doc.setFontSize(12);
doc.setFont("times", "normal");
doc.text("N° DE FOLIOS: 03", 130, 70);

doc.setFontSize(12);
doc.setFont("times", "normal");
doc.text("DOCUMENTO: OFICIO No 2001-2023-MINEDU/VMGI-DRELM-UGEL05-ARH.", 20, 80);

doc.setFontSize(12);
doc.setFont("times", "normal");
doc.text("MPV-EPP-740-23.", 20, 85);

doc.setFontSize(12);
doc.setFont("times", "normal");
doc.text("REMITIDO POR: Área de Recursos Humanos - UGEL 05", 20, 95);

doc.setFontSize(12);
doc.setFont("times", "normal");
doc.text("ASUNTO: Procedimiento de fiscalización posterior - Carmen Rosa Castillo Ojeda", 20, 105);


// Guardar el PDF
doc.save("mi_pdf.pdf"); 
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

export default App
