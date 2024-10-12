function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Hide the sidebar
    } else {
        sidebar.style.left = '0px'; // Show the sidebar
    }
}
