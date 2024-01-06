// Ambil nilai query parameter 'category' dari URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Fungsi untuk menampilkan produk berdasarkan kategori
function showProductsByCategory(category) {
    // Dapatkan semua elemen produk yang ada
    const productItems = document.querySelectorAll('.grid-item');

    // Loop melalui setiap elemen produk
    productItems.forEach(item => {
        const productCategory = item.getAttribute('data-category');
        
        // Jika kategori produk cocok dengan kategori yang dipilih, tampilkan
        if (productCategory === category || category === null) {
            item.style.display = 'block'; // Tampilkan elemen
        } else {
            item.style.display = 'none'; // Sembunyikan elemen
        }
    });
}

// Panggil fungsi pertama kali saat halaman dimuat
showProductsByCategory(category);

// Ambil semua elemen item sidebar
const sidebarItems = document.querySelectorAll('.sidebar-item');

// Loop melalui setiap elemen dan tambahkan event listener untuk menangani klik
sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
        const target = item.getAttribute('data-target');
        const currentURL = new URL(window.location.href);
        currentURL.searchParams.set('category', target);
        window.history.replaceState({}, '', currentURL);

        // Panggil kembali fungsi untuk menampilkan produk berdasarkan kategori yang dipilih
        showProductsByCategory(target);
    });
});

