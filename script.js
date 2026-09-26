/* =====================================================
   BTS SAKURA WORLD
   JAVASCRIPT
===================================================== */


/* =====================================================
   PÉTALOS DE SAKURA
===================================================== */

const petalsContainer =
    document.getElementById("petals");


function createPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add("petal");

    const size =
        Math.random() * 8 + 8;

    const left =
        Math.random() * 100;

    const duration =
        Math.random() * 7 + 7;

    const delay =
        Math.random() * 4;

    petal.style.left =
        left + "%";

    petal.style.width =
        size + "px";

    petal.style.height =
        size * .75 + "px";

    petal.style.animationDuration =
        duration + "s";

    petal.style.animationDelay =
        delay + "s";

    petal.style.opacity =
        Math.random() * .5 + .3;

    petalsContainer.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, (duration + delay) * 1000);
}


/*
   Creamos varios pétalos al iniciar.
*/

for (let i = 0; i < 18; i++) {

    createPetal();

}


/*
   Después siguen apareciendo
   automáticamente.
*/

setInterval(() => {

    createPetal();

}, 500);


/* =====================================================
   NAVEGACIÓN
===================================================== */

function showTab(tabId, button) {

    const tabs =
        document.querySelectorAll(".tab");

    const buttons =
        document.querySelectorAll(".nav-button");


    /*
       Ocultamos todas las secciones.
    */

    tabs.forEach(tab => {

        tab.classList.remove("active");

    });


    /*
       Quitamos el estado activo
       de los botones.
    */

    buttons.forEach(btn => {

        btn.classList.remove("active");

    });


    /*
       Mostramos la sección seleccionada.
    */

    const selectedTab =
        document.getElementById(tabId);

    selectedTab.classList.add("active");


    /*
       Activamos el botón.
    */

    button.classList.add("active");


    /*
       Volvemos suavemente al principio.
    */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}


/* =====================================================
   CARRUSEL
===================================================== */

let currentSlide = 0;


const slides =
    document.querySelectorAll(".slide");


const dots =
    document.querySelectorAll(".dot");


function setSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    currentSlide = index;


    slides[currentSlide]
        .classList.add("active");


    dots[currentSlide]
        .classList.add("active");
}


function moveSlide(direction) {

    currentSlide += direction;


    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }


    if (currentSlide < 0) {

        currentSlide =
            slides.length - 1;

    }


    setSlide(currentSlide);
}


/*
   Cambio automático.
*/

setInterval(() => {

    moveSlide(1);

}, 5000);


/* =====================================================
   MÚSICA
===================================================== */


/*
   IMPORTANTE:

   Estos son los nombres de los archivos
   que debes colocar dentro de:

   musica/
*/

const songs = [

    {
        title: "Spring Day",
        album: "You Never Walk Alone",
        vibe:
            "Una canción sobre nostalgia, esperanza y volver a encontrarnos.",
        file:
            "musica/spring-day.mp3"
    },


    {
        title: "Dynamite",
        album: "Dynamite",
        vibe:
            "Una canción brillante y energética que marcó una etapa internacional.",
        file:
            "musica/dynamite.mp3"
    },


    {
        title: "Butter",
        album: "Butter",
        vibe:
            "Un tema pop en inglés con una vibra ligera y dinámica.",
        file:
            "musica/butter.mp3"
    },


    {
        title: "Life Goes On",
        album: "BE",
        vibe:
            "Una canción relacionada con seguir adelante a pesar de los cambios.",
        file:
            "musica/life-goes-on.mp3"
    },


    {
        title: "Boy With Luv",
        album: "Map of the Soul: Persona",
        vibe:
            "Una canción alegre sobre el cariño y la energía positiva.",
        file:
            "musica/boy-with-luv.mp3"
    },


    {
        title: "DNA",
        album: "Love Yourself 承 Her",
        vibe:
            "Un tema de la etapa Love Yourself con una identidad visual muy reconocible.",
        file:
            "musica/dna.mp3"
    },


    {
        title: "Fake Love",
        album: "Love Yourself 轉 Tear",
        vibe:
            "Una canción de una etapa más intensa y conceptual de BTS.",
        file:
            "musica/fake-love.mp3"
    },


    {
        title: "Black Swan",
        album: "Map of the Soul: 7",
        vibe:
            "Una propuesta más artística y reflexiva sobre la relación con la música.",
        file:
            "musica/black-swan.mp3"
    }

];


/*
   Guardamos la última canción
   para evitar repetirla inmediatamente.
*/

let lastSong = -1;


/*
   Función para elegir una canción
   aleatoria.
*/

function nextSong() {

    let randomIndex;


    do {

        randomIndex =
            Math.floor(
                Math.random() * songs.length
            );

    } while (
        randomIndex === lastSong &&
        songs.length > 1
    );


    lastSong = randomIndex;


    const song =
        songs[randomIndex];


    /*
       Cambiamos el texto.
    */

    document.getElementById("song-title")
        .textContent =
        song.title;


    document.getElementById("song-album")
        .textContent =
        song.album;


    document.getElementById("song-vibe")
        .textContent =
        song.vibe;


    /*
       Cambiamos el archivo de audio.
    */

    const audio =
        document.getElementById("bts-audio");


    const source =
        document.getElementById("audio-source");


    source.src =
        song.file;


    /*
       Obligamos al navegador
       a cargar la nueva canción.
    */

    audio.load();


    /*
       Intentamos reproducir.
       Si el navegador bloquea el autoplay,
       no pasa nada: el usuario puede
       presionar Play.
    */

    audio.play().catch(() => {

        console.log(
            "El navegador requiere interacción para reproducir el audio."
        );

    });


    /*
       Pequeña animación del vinilo.
    */

    const vinyl =
        document.querySelector(".vinyl");


    vinyl.style.animation =
        "none";


    setTimeout(() => {

        vinyl.style.animation =
            "vinylSpin 9s linear infinite";

    }, 20);
}


/*
   Elegimos una canción aleatoria
   al abrir la página.
*/

window.addEventListener(
    "load",
    () => {

        nextSong();

    }
);


/* =====================================================
   MURO DE MENSAJES
===================================================== */

const messageForm =
    document.getElementById("messageForm");


const messagesContainer =
    document.getElementById("messages");


messageForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const author =
            document.getElementById("author")
                .value
                .trim();


        const message =
            document.getElementById("message")
                .value
                .trim();


        if (
            author === "" ||
            message === ""
        ) {

            return;

        }


        /*
           Creamos el mensaje.
        */

        const messageElement =
            document.createElement("div");


        messageElement.className =
            "message-item";


        /*
           textContent evita que el usuario
           pueda introducir HTML.
        */

        const nameElement =
            document.createElement("strong");


        nameElement.textContent =
            "♡ " + author;


        const textElement =
            document.createElement("p");


        textElement.textContent =
            message;


        messageElement.appendChild(
            nameElement
        );


        messageElement.appendChild(
            textElement
        );


        messagesContainer.prepend(
            messageElement
        );


        /*
           Limpiamos el formulario.
        */

        messageForm.reset();

    }
);


/* =====================================================
   BIAS
===================================================== */

const biasDescriptions = {

    "RM":
        "Tu respuesta coincide con una personalidad reflexiva, curiosa y orientada a aprender. Tu resultado es RM.",

    "Jin":
        "Tu respuesta coincide con una personalidad divertida, cariñosa y con sentido del humor. Tu resultado es Jin.",

    "SUGA":
        "Tu respuesta coincide con una personalidad reservada, creativa y muy relacionada con la producción musical. Tu resultado es SUGA.",

    "J-Hope":
        "Tu respuesta coincide con una personalidad energética, positiva y relacionada con la danza. Tu resultado es J-Hope.",

    "Jimin":
        "Tu respuesta coincide con una personalidad sensible, atenta y expresiva. Tu resultado es Jimin.",

    "V":
        "Tu respuesta coincide con una personalidad artística, creativa y particular. Tu resultado es V.",

    "Jungkook":
        "Tu respuesta coincide con una personalidad curiosa, dedicada y determinada. Tu resultado es Jungkook."

};


function answerBias(member) {

    const result =
        document.getElementById(
            "bias-result"
        );


    result.innerHTML = `

        <div class="bias-result-icon">
            ♡
        </div>

        <h3>
            Tu resultado: ${member}
        </h3>

        <p>
            ${biasDescriptions[member]}
        </p>

        <button
            class="cute-button"
            onclick="resetBias()">

            Volver a intentarlo

        </button>

    `;


    result.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });
}


function resetBias() {

    document.getElementById(
        "bias-result"
    ).innerHTML = `

        <div class="bias-result-icon">
            ♡
        </div>

        <h3>
            Tu resultado aparecerá aquí
        </h3>

        <p>
            Elige una opción para comenzar.
        </p>

    `;

}


/* =====================================================
   EFECTO EXTRA:
   CORAZONES AL HACER CLICK
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        /*
           No hacemos el efecto en botones
           para no recargar visualmente
           demasiado la página.
        */

        if (
            event.target.closest("button") ||
            event.target.closest("input")
        ) {

            return;

        }


        const heart =
            document.createElement("span");


        heart.textContent =
            "♡";


        heart.style.position =
            "fixed";


        heart.style.left =
            event.clientX + "px";


        heart.style.top =
            event.clientY + "px";


        heart.style.zIndex =
            "2000";


        heart.style.pointerEvents =
            "none";


        heart.style.color =
            "#e889b3";


        heart.style.fontSize =
            "20px";


        heart.style.animation =
            "clickHeart 1s ease forwards";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 1000);

    }
);


/*
   Agregamos dinámicamente la animación
   de los corazones.
*/

const clickHeartStyle =
    document.createElement("style");


clickHeartStyle.textContent = `

    @keyframes clickHeart {

        0% {

            opacity: 1;

            transform:
                translate(-50%, -50%)
                scale(.5);

        }

        100% {

            opacity: 0;

            transform:
                translate(-50%, -120px)
                scale(1.5);

        }

    }

`;


document.head.appendChild(
    clickHeartStyle
);