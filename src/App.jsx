import { jsPDF } from "jspdf/dist/jspdf.umd.min.js";
import ModeloA from "./pages/ModeloA";
import ModeloB from "./pages/ModeloB";

function App() {
    
    return(
    <>
    <h1>Elegir entre estos dos modelos</h1>

    <h3>Este es modelo A</h3>
    <ModeloA/>
    
    <h3>Este es modelo B</h3>
    <ModeloB/>
    </>

    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

export default App