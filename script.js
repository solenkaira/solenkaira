document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Tema değiştirme fonksiyonu
    const toggleTheme = () => {
        body.classList.toggle('light-mode');
        
        // İkonu değiştirme
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    };

    // Kayıtlı temayı yükle
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        icon.classList.remove('fa-sun'); // Varsayılan güneş ikonu yerine ay ikonu
        icon.classList.add('fa-moon');
    } else {
        // Varsayılan olarak dark mode (görseldeki gibi)
        body.classList.remove('light-mode');
        icon.classList.remove('fa-moon'); // Varsayılan ay ikonu yerine güneş ikonu
        icon.classList.add('fa-sun');
    }

    // Buton tıklama olayı
    themeToggle.addEventListener('click', toggleTheme);
});