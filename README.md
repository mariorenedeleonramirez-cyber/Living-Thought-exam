<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Living Thought</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="img/Logo.jpg" type="image/x-icon">
</head>
<body>
   
<header>
    <img class="logo-circular" src="IMG/logo3.png" alt="Buggati" title="Buggati">
    <h1>Pensamiento Vivo</h1>
    <button id="modoOscuroBtn">🌙 Modo Oscuro</button>
    <button id="cambiarIdiomaBtn">🇬🇧 Inglés</button> <!-- Botón para cambiar idioma -->

    <nav>  
        <ul>
            <li><a href="index.html" class="nav-item">Inicio</a></li>
            <li><a href="Reportajes.html" class="nav-item">Reportajes</a></li>
            <li><a href="Noticias.html" class="nav-item">Noticias</a></li>
            <li><a href="Entrevistas.html" class="nav-item">Entrevistas</a></li>
            <li class="dropdown">  
                <a href="javascript:void(0)" class="dropbtn" id="menuFilosofia">Filosofía</a>
                <div class="dropdown-content" id="dropdownFilosofia">
                    <a href="Karl.html">Karl Marx</a>
                    <a href="Sócrates.html">Sócrates</a>
                    <a href="Immanuel.html">Immanuel Kant</a>
                    <a href="Friedrich.html">Friedrich Nietzsche</a>
                </div>
            </li>
            <li class="dropdown">  
                <a href="javascript:void(0)" class="dropbtn" id="menuEnglish">English</a>
                <div class="dropdown-content" id="dropdownEnglish">
                    <a href="MLKJR.html">Martin Luther King Jr</a>
                    <a href="Platón.html">Platón</a>
                    <a href="Mary.html">Mary Wollstonecraft</a>
                    <a href="Cesare.html">Cesare Beccaria</a>
                </div>
            </li>
            <li><a href="Reseñas.html" class="nav-item">Reseñas</a></li>
            <li><a href="Opiniones.html" class="nav-item">Opiniones</a></li>
        </ul>
    </nav>
</header>

<section>
    <h2>INTRODUCCIÓN</h2>  
    <p>La filosofía y el inglés son dos herramientas que nos permiten comprender mejor el mundo en el que vivimos. 
        La primera nos enseña a pensar críticamente, a cuestionar lo establecido y a buscar respuestas profundas sobre la verdad, 
        la justicia, la felicidad y la sociedad. El inglés, por su parte, abre las puertas a un diálogo global, permitiéndonos acceder a nuevas ideas y participar en conversaciones universales sobre temas como los derechos humanos, la paz, el gobierno y los movimientos sociales.</p>
    <p>Más que una recopilación de información, este trabajo busca invitar a la reflexión y al diálogo, para que podamos reconocer la importancia de pensar críticamente y de comunicarnos en un mundo cada vez más conectado.</p>
    <center><img width="880" height="480" src="IMG/Inicio.webp" alt="Filosofia" title="Filosofia"></center> 
</section>

<section>
    <h2>INTRODUCTION</h2>  
    <p>In this magazine, we will explore great philosophers whose ideas remain relevant today, and we will see how their reflections can help us face the challenges of the present. At the same time, in the English section, we will address essential concepts related to justice, freedom, and coexistence, showing that the concerns of classical thinkers are still relevant in contemporary debates.</p>
</section>

<footer>
    <p>Integrantes/Members:<br>Mario De León y Andrés Quiñónez<br> &copy;2025</p>
</footer>

<script>
const btnModoOscuro = document.getElementById('modoOscuroBtn');
const btnIdioma = document.getElementById('cambiarIdiomaBtn');
const navItems = document.querySelectorAll('.nav-item');
const menuFilosofia = document.getElementById('menuFilosofia');
const dropdownFilosofia = document.getElementById('dropdownFilosofia');
const titulo = document.querySelector('header h1');

// ===== Modo oscuro =====
if (localStorage.getItem('modoOscuro') === 'activado') {
    document.body.classList.add('modo-oscuro');
}

btnModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
    if (document.body.classList.contains('modo-oscuro')) {
        localStorage.setItem('modoOscuro', 'activado');
        btnModoOscuro.textContent = '☀️';
    } else {
        localStorage.setItem('modoOscuro', 'desactivado');
        btnModoOscuro.textContent = '🌙';
    }
});
btnModoOscuro.textContent = document.body.classList.contains('modo-oscuro') ? '☀️' : '🌙';

// ===== Cambio de idioma =====
let idiomaEspañol = true;
btnIdioma.addEventListener('click', () => {
    if (idiomaEspañol) {
        // Menú principal
        navItems[0].textContent = 'Home';
        navItems[1].textContent = 'Reports';
        navItems[2].textContent = 'News';
        navItems[3].textContent = 'Interviews';
        navItems[4].textContent = 'Reviews';
        navItems[5].textContent = 'Opinions';
        // Menú Filosofía
        menuFilosofia.textContent = 'Philosophy';
        dropdownFilosofia.children[0].textContent = 'Karl Marx';
        dropdownFilosofia.children[1].textContent = 'Socrates';
        dropdownFilosofia.children[2].textContent = 'Immanuel Kant';
        dropdownFilosofia.children[3].textContent = 'Friedrich Nietzsche';
        // Título
        titulo.textContent = 'Living Thought';
        // Botón
        btnIdioma.textContent = '🇪🇸 Español';
        idiomaEspañol = false;
    } else {
        // Menú principal
        navItems[0].textContent = 'Inicio';
        navItems[1].textContent = 'Reportajes';
        navItems[2].textContent = 'Noticias';
        navItems[3].textContent = 'Entrevistas';
        navItems[4].textContent = 'Reseñas';
        navItems[5].textContent = 'Opiniones';
        // Menú Filosofía
        menuFilosofia.textContent = 'Filosofía';
        dropdownFilosofia.children[0].textContent = 'Karl Marx';
        dropdownFilosofia.children[1].textContent = 'Sócrates';
        dropdownFilosofia.children[2].textContent = 'Immanuel Kant';
        dropdownFilosofia.children[3].textContent = 'Friedrich Nietzsche';
        // Título
        titulo.textContent = 'Pensamiento Vivo';
        // Botón
        btnIdioma.textContent = '🇬🇧 Inglés';
        idiomaEspañol = true;
    }
});
</script>

</body>
</html>
