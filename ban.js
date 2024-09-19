// Fungsi untuk animasi fade-in saat halaman dimuat
window.onload = function() {
    document.body.style.opacity = '0'; // Set opacity awal ke 0
    document.body.style.transition = 'opacity 1s'; // Durasi transisi fade-in 1 detik
    setTimeout(function() {
        document.body.style.opacity = '1'; // Setelah 100ms, opacity menjadi 1
    }, 100); // Penundaan kecil untuk memastikan halaman sepenuhnya dimuat sebelum animasi
};

// Fungsi untuk animasi fade-out saat pengguna berpindah halaman
window.addEventListener("beforeunload", function(event) {
    document.body.style.transition = 'opacity 0.5s'; // Transisi fade-out lebih cepat, 0.5 detik
    document.body.style.opacity = '0'; // Mengurangi opacity ke 0 (efek fade-out)
});
