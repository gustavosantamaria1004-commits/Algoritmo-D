function navegar(event, idSeccion) {
    // 1. Ocultar todas las secciones
    const secciones = document.querySelectorAll('.tab-section');
    secciones.forEach(sec => {
        sec.classList.remove('active');
    });

    // 2. Quitar el color azul a todos los botones
    const botones = document.querySelectorAll('.nav-link');
    botones.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Mostrar la sección que elegimos
    document.getElementById(idSeccion).classList.add('active');

    // 4. Poner el botón que tocamos en color azul/activo
    event.currentTarget.classList.add('active');
}
