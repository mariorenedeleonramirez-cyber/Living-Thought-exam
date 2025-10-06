
    const botonModoOscuro = document.getElementById('modoOscuroBtn');

    // Verifica si el usuario ya activó el modo oscuro antes
    if (localStorage.getItem('modoOscuro') === 'activado') {
        document.body.classList.add('modo-oscuro');
    }

    botonModoOscuro.addEventListener('click', () => {
        document.body.classList.toggle('modo-oscuro');

        // Guarda preferencia en localStorage
        if (document.body.classList.contains('modo-oscuro')) {
            localStorage.setItem('modoOscuro', 'activado');
        } else {
            localStorage.setItem('modoOscuro', 'desactivado');
        }
    });

