// Definimos la clase Potencia
class Potencia {
    constructor(base, exponente) {
        this.base = base;
        this.exponente = exponente;
    }

    calcular() {
        return Math.pow(this.base, this.exponente);
    }
}

// Función para calcular y mostrar la potencia
function calcularPotencia() {
    // Obtener los valores del formulario
    const base = parseFloat(document.getElementById("base").value);
    const exponente = parseInt(document.getElementById("exponente").value);

    // Crear una instancia de la clase Potencia
    const calculadora = new Potencia(base, exponente);

    // Calcular la potencia
    const resultado = calculadora.calcular();

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = resultado;
}

// Asociar la función calcularPotencia al botón "Calcular Potencia"
document.getElementById("calcularBtn").addEventListener("click", calcularPotencia);
