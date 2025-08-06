document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.querySelector('.main-content');
  const navLinks = document.querySelectorAll('.sidebar a'); // Selecciona todos los enlaces dentro del sidebar

  // Función para cerrar el sidebar
  function closeSidebar() {
    sidebar.classList.remove('open');
    mainContent.classList.remove('pushed');
  }

  // 1. Ocultar el sidebar al hacer clic en el botón de toggle
  toggleBtn.addEventListener('click', () => {
    // Si el sidebar está abierto, lo cierra; si está cerrado, lo abre.
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('pushed');
  });

  // 2. Ocultar el sidebar al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Usamos la función que creamos para cerrar el sidebar
      closeSidebar();
    });
  });
});