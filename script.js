const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const container = document.querySelector('.container');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    container.classList.toggle('sidebar-hidden');
});