import { jsPDF } from "jspdf";

function App() {
   
// Crear instancia de jsPDF
const doc = new jsPDF();
doc.addFont("times.ttf", "times", "normal", "WinAnsiEncoding");
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
doc.setFont("times");
doc.text("Hoja de Envío N°: 1612-2023-R-UNE", doc.internal.pageSize.getWidth() / 2, 58, { align: "center" });








// Guardar el PDF
doc.save("mi_pdf.pdf"); 
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

export default App
