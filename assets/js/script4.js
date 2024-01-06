window.onload = function() {
    // Mendapatkan alamat URL halaman saat ini
    var currentURL = window.location.href;

    // Menemukan semua tautan dengan kelas "nav-link"
    var navLinks = document.querySelectorAll(".nav-link");

    // Menghapus kelas "active" dari semua tautan
    navLinks.forEach(function(link) {
        link.classList.remove("active");
    });

    // Menambahkan kelas "active" pada tautan yang sesuai dengan URL
    navLinks.forEach(function(link) {
        if (currentURL.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });
};
