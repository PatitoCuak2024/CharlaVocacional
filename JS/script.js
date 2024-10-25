let selectedGender = 'male'; // Valor inicial, por defecto varón

function updateGender() {
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;

    if (male) {
        selectedGender = 'male';
    } else if (female) {
        selectedGender = 'female';
    }

    calcularIMC(); // Recalcular IMC según el género seleccionado
}

function updateAltura() {
    const altura = document.getElementById("altura").value;
    document.getElementById("alturaNumber").value = altura;
    calcularIMC();
}

function updateAlturaFromInput() {
    const altura = document.getElementById("alturaNumber").value;
    document.getElementById("altura").value = altura;
    calcularIMC();
}

function updatePeso() {
    const peso = document.getElementById("peso").value;
    document.getElementById("pesoNumber").value = peso;
    calcularIMC();
}

function updatePesoFromInput() {
    const peso = document.getElementById("pesoNumber").value;
    document.getElementById("peso").value = peso;
    calcularIMC();
}

function calcularIMC() {
    const altura = document.getElementById("altura").value / 100;
    const peso = document.getElementById("peso").value;

    let imc = (peso / (altura * altura)).toFixed(1);

    // Si quieres ajustar el IMC de acuerdo al género, puedes hacerlo aquí
    if (selectedGender === 'female') {
        // Ajustar el cálculo del IMC para mujeres (si es necesario)
        imc = (peso / (altura * altura) * 0.95).toFixed(1); // Ejemplo: ajustar por 0.95 para mujeres
    }

    document.getElementById("imcResultado").innerText = imc;
    clasificarIMC(imc);
    actualizarTermometro(imc); // Llamar a la función para actualizar el termómetro
}

function clasificarIMC(imc) {
    let clasificacion = '';
    let recomendacion = '';
    let imagenSrc = '';
    const clasificacionResultadoDiv = document.querySelector('.clasificacion-resultado');

    // Clasificación y recomendaciones basadas en IMC
    if (imc < 18) {
        clasificacion = "Bajo peso";
        recomendacion = "¡No te preocupes! Con una alimentación balanceada y rica en nutrientes, puedes mejorar tu estado físico. Prueba incluir proteínas, carbohidratos y grasas saludables en tu dieta.";
        imagenSrc = selectedGender === 'male' ? 'images/indice/Varon/bajo_peso.png' : 'images/indice/Mujer/bajo_peso.png';
        clasificacionResultadoDiv.style.backgroundColor = "#ffcccb";
    } else if (imc >= 18 && imc < 25) {
        clasificacion = "Peso normal";
        recomendacion = "¡Excelente! Estás en un buen camino. Sigue así con una alimentación equilibrada y actividades físicas que disfrutes para mantenerte saludable.";
        imagenSrc = selectedGender === 'male' ? 'images/indice/Varon/peso_normal.png' : 'images/indice/Mujer/peso_normal.png';
        clasificacionResultadoDiv.style.backgroundColor = "#a4f1a1";
    } else if (imc >= 25 && imc < 30) {
        clasificacion = "Exceso de peso";
        recomendacion = "¡Estás a un paso de alcanzar tu mejor versión! Reduce los alimentos procesados y aumenta las comidas caseras llenas de verduras, proteínas magras, y grasas saludables. ¡Puedes lograrlo!";
        imagenSrc = selectedGender === 'male' ? 'images/indice/Varon/exceso_peso.png' : 'images/indice/Mujer/exceso_peso.png';
        clasificacionResultadoDiv.style.backgroundColor = "#f8d86a";
    } else if (imc >= 30 && imc < 35) {
        clasificacion = "Obesidad Grado I";
        recomendacion = "Es momento de tomar decisiones importantes para tu salud. Un plan de nutrición balanceado junto con actividades físicas ligeras como caminar puede marcar la diferencia.";
        imagenSrc = selectedGender === 'male' ? 'images/indice/Varon/obesidad_grado_1.png' : 'images/indice/Mujer/obesidad_grado_1.png';
        clasificacionResultadoDiv.style.backgroundColor = "#f39c12";
    } else if (imc >= 35 && imc < 40) {
        clasificacion = "Obesidad Grado II";
        recomendacion = "Tu salud es lo primero. Es hora de realizar cambios significativos, consulta a un nutricionista y comienza con ejercicios de bajo impacto para mejorar tu bienestar.";
        imagenSrc = selectedGender === 'male' ? 'images/indice/Varon/obesidad_grado_2.png' : 'images/indice/Mujer/obesidad_grado_2.png';
        clasificacionResultadoDiv.style.backgroundColor = "#e74c3c";
    } else {
        clasificacion = "Obesidad Grado III";
        recomendacion = "¡No estás solo en esto! Es importante buscar ayuda profesional para recibir orientación adecuada y personal. Pequeños pasos pueden llevarte muy lejos.";
        imagenSrc = selectedGender === 'male' ? 'images/indice/Varon/obesidad_grado_3.png' : 'images/indice/Mujer/obesidad_grado_3.png';
        clasificacionResultadoDiv.style.backgroundColor = "#d32714";
    }

    document.getElementById("clasificacion").innerText = `Clasificación: ${clasificacion}`;
    mostrarRecomendaciones(recomendacion);
    const imagenIMC = document.getElementById("imagenIMC");
    imagenIMC.src = imagenSrc;
    imagenIMC.style.display = 'block';
}



function mostrarRecomendaciones(recomendacion) {
    const recomendacionDiv = document.getElementById("recomendaciones");
    const recomendacionTexto = document.getElementById("recomendacionTexto");

    recomendacionTexto.innerText = recomendacion;
    recomendacionDiv.style.display = "block"; // Mostrar las recomendaciones
}

// Iniciar con un cálculo de IMC por defecto
calcularIMC();
