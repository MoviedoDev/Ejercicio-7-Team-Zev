import empresaCL from "./CL_empresa.js";
import personalCL from "./CL_personal.js";
const empresa = new empresaCL();
const Juan = new personalCL("Juan", 1, 100);
const Ana = new personalCL("Ana", 1, 120);
const Lin = new personalCL("Lin", 2, 200);
const Mary = new personalCL("Mary", 1, 50);
const Carlos = new personalCL("Carlos", 2, 150);
empresa.procesarPersonal(Juan);
empresa.procesarPersonal(Ana);
empresa.procesarPersonal(Lin);
empresa.procesarPersonal(Mary);
empresa.procesarPersonal(Carlos);
console.log("El monto adicional que debe pagar para Juan es de: " + Juan.aumento());
console.log("El monto adicional que debe pagar para Ana es de: " + Ana.aumento());
console.log("El monto adicional que debe pagar para Lin es de: " + Lin.aumento());
console.log("El monto adicional que debe pagar para Mary es de: " + Mary.aumento());
console.log("El monto adicional que debe pagar para Carlos es de: " + Carlos.aumento());
console.log("El total del monto adicional que debe pagar la empresa es de: " + empresa.totalAdicional());
const salida = document.getElementById("reporte");
if (salida) {
    salida.innerHTML = `
        Monto adicional Juan: $${Juan.aumento()}<br>
        Monto adicional Ana: $${Ana.aumento()}<br>
        Monto adicional Lin: $${Lin.aumento()}<br>
        Monto adicional Mary: $${Mary.aumento()}<br>
        Monto adicional Carlos: $${Carlos.aumento()}<br>
        <hr>
        <strong>Total a pagar por la empresa: $${empresa.totalAdicional()}</strong>
    `;
}
//# sourceMappingURL=principal.js.map