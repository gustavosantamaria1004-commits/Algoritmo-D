/**
 * Lógica de Controladora 'Crear Aplicaciones WEB'
 * Maneja el cambio de secciones sin recargar la página.
 */

function showSection(sectionId) {
    // 1. Obtener todas las secciones y botones
    const sections = document.querySelectorAll('.tab-section');
    const navLinks = document.querySelectorAll('.nav-link');

    // 2. Ocultar todas las secciones
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 3. Quitar estado activo de los botones
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 4. Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 5. Marcar el botón clickeado como activo
    // Buscamos el botón que tiene el atributo de evento que coincide
    event.currentTarget.classList.add('active');

    // 6. Feedback visual en consola (Opcional para desarrollo)
    console.log(`Navegando a: ${sectionId}`);
}

// Asegurar que la primera pestaña cargue correctamente
window.onload = () => {
    console.log("Sistema QuimiLab 8.º Iniciado.");
};