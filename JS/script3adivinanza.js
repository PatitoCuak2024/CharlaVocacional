const riddles = [
    {
        riddle: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.",
        answers: ["La pera", "El plátano", "La manzana", "El coco"],
        correct: 0
    },
    {
        riddle: "Largo, largo como un camino, pero no tiene pies, ni manos, ni costado, ni cabeza.",
        answers: ["El río", "El tren", "El avión", "El viento"],
        correct: 0
    },
    {
        riddle: "Siempre quieto y nunca camina, pero marca el tiempo cada día.",
        answers: ["El reloj", "El sol", "El calendario", "La sombra"],
        correct: 0
    },
    {
        riddle: "Adivina adivinanza: un perro negro y blanco. Si te lo comes, llorarás.",
        answers: ["La cebolla", "El ajo", "El chile", "El perro"],
        correct: 0
    },
    {
        riddle: "Tengo agujas y no sé coser, tengo números y no sé leer.",
        answers: ["El reloj", "El calendario", "La brújula", "El sol"],
        correct: 0
    },
    {
        riddle: "Vuelo sin alas, lloro sin ojos.",
        answers: ["El viento", "La nube", "La lluvia", "La sombra"],
        correct: 2
    },
    {
        riddle: "Cae al agua y no se moja.",
        answers: ["La sombra", "El sol", "El hielo", "La nube"],
        correct: 0
    },
    {
        riddle: "Paso por el agua y no me mojo, paso por el fuego y no me quemo.",
        answers: ["El arco iris", "El vapor", "La luz", "El viento"],
        correct: 2
    },
    {
        riddle: "Tengo patas y no camino, tengo ojos y no veo.",
        answers: ["El dado", "El caracol", "La mesa", "El reloj"],
        correct: 0
    },
    {
        riddle: "Sube llena y baja vacía.",
        answers: ["La marea", "El balde", "La escalera", "El globo"],
        correct: 1
    },
    {
        riddle: "Cuanto más grande menos se ve.",
        answers: ["La oscuridad", "La niebla", "El miedo", "El viento"],
        correct: 0
    },
    {
        riddle: "Tengo dientes pero no como, tengo barba pero no me afeito.",
        answers: ["El maíz", "El sol", "El ajo", "El reloj"],
        correct: 0
    },
    {
        riddle: "Si me nombras, desaparezco. ¿Qué soy?",
        answers: ["El silencio", "El eco", "La sombra", "El viento"],
        correct: 0
    },
    {
        riddle: "Todos pasan por mí, pero yo nunca paso por nadie.",
        answers: ["El puente", "La sombra", "El reloj", "El sol"],
        correct: 0
    },
    {
        riddle: "Tiene corona pero no es rey, tiene escamas pero no es pez.",
        answers: ["El pino", "La piña", "El dragón", "El sol"],
        correct: 1
    },
    {
        riddle: "Siempre va delante de ti, pero nunca podrás alcanzarla.",
        answers: ["La sombra", "El viento", "La luz", "El tiempo"],
        correct: 0
    },
    {
        riddle: "Cuando sube, nunca baja.",
        answers: ["La edad", "El sol", "El humo", "La temperatura"],
        correct: 0
    },
    {
        riddle: "Tiene ojos, pero no puede ver; tiene boca, pero no puede hablar.",
        answers: ["La máscara", "El muñeco", "La calavera", "El reloj"],
        correct: 1
    },
    {
        riddle: "Ni vivo ni muerto, pero siempre quieto. ¿Qué es?",
        answers: ["El espejo", "La sombra", "El reloj", "El retrato"],
        correct: 3
    },
    {
        riddle: "Siempre estoy en el medio, pero también al principio y al final.",
        answers: ["La letra 'e'", "El círculo", "La sombra", "El infinito"],
        correct: 0
    },
    {
        riddle: "Cuantos más quitas, más grande se hace.",
        answers: ["El agujero", "El silencio", "La oscuridad", "El misterio"],
        correct: 0
    },
    {
        riddle: "Aunque me veas en el agua, no soy pez. ¿Qué soy?",
        answers: ["El reflejo", "La sombra", "El sol", "El pez"],
        correct: 0
    },
    {
        riddle: "Me puedes tener, pero si me compartes, me pierdes.",
        answers: ["El secreto", "La sombra", "El dinero", "El tiempo"],
        correct: 0
    },
    {
        riddle: "Va al banco todos los días, pero nunca tiene dinero.",
        answers: ["El río", "El banquero", "El pez", "El árbol"],
        correct: 0
    },
    {
        riddle: "Vuelo alto, pero no soy pájaro. Y cuando caigo, no me levanto. ¿Qué soy?",
        answers: ["La lluvia", "El avión", "La hoja", "La pluma"],
        correct: 2
    },
    {
        riddle: "Oro parece, plata no es. Quien no lo adivine, bien tonto es.",
        answers: ["El plátano", "La naranja", "El limón", "El huevo"],
        correct: 3
    },
    {
        riddle: "Si lo tienes, lo compartes. Si no lo tienes, no importa.",
        answers: ["El tiempo", "El amor", "El secreto", "La sombra"],
        correct: 2
    },
    {
        riddle: "Tiene un ojo y todo lo ve.",
        answers: ["La aguja", "El espejo", "El sol", "El ciclón"],
        correct: 0
    },
    {
        riddle: "Lo ves pasar pero no puedes detenerlo. ¿Qué es?",
        answers: ["El tiempo", "El tren", "El viento", "El río"],
        correct: 0
    },
    {
        riddle: "Si me dejas, te sigo. Si me tomas, te pierdo.",
        answers: ["El camino", "La sombra", "El río", "El eco"],
        correct: 1
    },
    {
        riddle: "Es tuyo, pero lo usan los demás más que tú.",
        answers: ["Tu nombre", "Tu sombra", "Tu casa", "Tu reflejo"],
        correct: 0
    },
    {
        riddle: "Tiene dientes pero no come. ¿Qué es?",
        answers: ["El peine", "El serrucho", "El reloj", "El perro"],
        correct: 0
    },
    {
        riddle: "Vivo sin estar vivo, y aunque no te muevo, me sigues.",
        answers: ["El eco", "La sombra", "El viento", "La brisa"],
        correct: 1
    },
    {
        riddle: "Sin alas, puedo volar. Sin ojos, puedo llorar.",
        answers: ["El viento", "La nube", "La cometa", "El avión"],
        correct: 0
    },
    {
        riddle: "Sin manos te peino, sin pies te acompaño.",
        answers: ["El viento", "La sombra", "El peine", "El río"],
        correct: 0
    },
    {
        riddle: "Tengo cuatro patas, pero no puedo caminar.",
        answers: ["La silla", "El reloj", "La cama", "La mesa"],
        correct: 3
    },
    {
        riddle: "Aunque tiene cuatro patas, no puede correr ni caminar.",
        answers: ["La mesa", "El perro", "El gato", "La cama"],
        correct: 0
    },
    {
        riddle: "Aunque lo veas todos los días, nunca sabrás dónde va.",
        answers: ["El río", "El tren", "El sol", "El tiempo"],
        correct: 3
    },
    {
        riddle: "No tengo vida, pero puedo crecer. No tengo ojos, pero puedo ver.",
        answers: ["El fuego", "La sombra", "El árbol", "El reloj"],
        correct: 0
    },
    {
        riddle: "Si me quieres comer, crudo no soy bueno. Si me pones al fuego, es mi final.",
        answers: ["El huevo", "El pan", "La papa", "El pollo"],
        correct: 0
    },
    {
        riddle: "En la mesa soy plato, en el mar soy pez. ¿Qué soy?",
        answers: ["El pez espada", "El tiburón", "El atún", "La ballena"],
        correct: 2
    },
    {
        riddle: "Tiene una pierna y baila sin cesar, y nunca se cansa de trabajar.",
        answers: ["El trompo", "La lavadora", "La peonza", "El reloj"],
        correct: 0
    },
    {
        riddle: "Adivina adivinanza: cuanto más limpio, más sucio.",
        answers: ["El agua", "El espejo", "El jabón", "El coche"],
        correct: 1
    },
    {
        riddle: "Nunca se moja, aunque siempre está en el agua.",
        answers: ["El pez", "El reflejo", "El barco", "La sal"],
        correct: 1
    },
    {
        riddle: "Aunque no soy humano, puedo pensar.",
        answers: ["El ordenador", "El robot", "La calculadora", "El libro"],
        correct: 0
    },
    {
        riddle: "Vuelo sin alas, pero puedo subir y bajar sin parar.",
        answers: ["El avión", "El ascensor", "El globo", "El cohete"],
        correct: 1
    },
    {
        riddle: "Tiene patas pero no camina, tiene brazos pero no te abraza.",
        answers: ["El sofá", "La mesa", "El reloj", "El tren"],
        correct: 0
    },
    {
        riddle: "Aunque no soy semilla, si me plantas, crezco. ¿Qué soy?",
        answers: ["El árbol", "El libro", "El conocimiento", "El fuego"],
        correct: 2
    },
    {
        riddle: "Si me nombras, rompo. ¿Qué soy?",
        answers: ["El silencio", "El eco", "El viento", "El cristal"],
        correct: 0
    },
    {
        riddle: "Cuanto más trabajo, más delgado me vuelvo.",
        answers: ["El lápiz", "El papel", "La goma", "El hilo"],
        correct: 0
    },
    {
        riddle: "Tiene cuerdas pero no ata. Si la tocas, canta.",
        answers: ["La guitarra", "El piano", "El violín", "El arpa"],
        correct: 0
    },
    {
        riddle: "Doy calor, pero no soy el sol. Si me enciendes, ilumino tu hogar.",
        answers: ["La chimenea", "El fuego", "La bombilla", "La vela"],
        correct: 3
    },
    {
        riddle: "Me muevo lentamente, pero siempre llego a tiempo.",
        answers: ["El caracol", "El reloj", "El tren", "El sol"],
        correct: 1
    },
    {
        riddle: "Te ayudo a subir, pero nunca me verás moverse.",
        answers: ["La escalera", "El ascensor", "El camino", "El puente"],
        correct: 0
    }
];



let correctCount = 0;
let incorrectCount = 0;
let remainingRiddles = [...riddles]; // Copia de las adivinanzas para seleccionarlas aleatoriamente

function loadRiddle() {
    const randomIndex = Math.floor(Math.random() * remainingRiddles.length);
    const riddleObj = remainingRiddles[randomIndex];
    document.getElementById('riddle').textContent = riddleObj.riddle;
    document.getElementById('btn0').textContent = riddleObj.answers[0];
    document.getElementById('btn1').textContent = riddleObj.answers[1];
    document.getElementById('btn2').textContent = riddleObj.answers[2];
    document.getElementById('btn3').textContent = riddleObj.answers[3];
    document.getElementById('result').textContent = '';
    remainingRiddles.splice(randomIndex, 1); // Remueve la adivinanza seleccionada de las disponibles
}

function checkAnswer(selected) {
    const correctAnswer = riddles.find(r => r.riddle === document.getElementById('riddle').textContent).correct;
    if (selected === correctAnswer) {
        document.getElementById('result').textContent = "¡Correcto!";
        document.getElementById('result').style.color = "green";
        correctCount++;
        if (remainingRiddles.length > 0) {
            nextQuestion();
        } else {
            showFinalResult();
        }
    } else {
        document.getElementById('result').textContent = "¡Perdiste! La respuesta correcta es: " + riddles.find(r => r.riddle === document.getElementById('riddle').textContent).answers[correctAnswer];
        document.getElementById('result').style.color = "red";
        incorrectCount++;
        showFinalResult();
    }
    updateCounter();
}

function nextQuestion() {
    if (remainingRiddles.length > 0) {
        loadRiddle();
    } else {
        showFinalResult();
    }
}

function updateCounter() {
    document.getElementById('correct-incorrect-counter').textContent = `Correctas: ${correctCount} | Incorrectas: ${incorrectCount}`;
}

function showFinalResult() {
    document.getElementById('riddle').textContent = `Juego terminado. Acertaste ${correctCount} preguntas y fallaste ${incorrectCount}.`;
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('retry-btn').style.display = "inline"; // Mostrar botón de jugar de nuevo
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.style.display = 'none');
}

function resetGame() {
    // Restablece el juego
    correctCount = 0;
    incorrectCount = 0;
    remainingRiddles = [...riddles]; // Restaura todas las adivinanzas
    document.getElementById('retry-btn').style.display = "none";
    document.getElementById('next-btn').style.display = "inline";
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.style.display = 'inline'); // Muestra botones de respuesta
    updateCounter();
    loadRiddle();
}

// Carga la primera adivinanza al iniciar
window.onload = loadRiddle;