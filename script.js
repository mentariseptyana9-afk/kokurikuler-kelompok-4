// Data-data yang akan digunakan untuk mengisi konten secara dinamis
const dataEnsiklopedia = [
    { id: 'seni', judul: 'Seni Pertunjukan', deskripsi: 'Tari, Musik, dan Teater Tradisional.', ikon: '🎭' },
    { id: 'artefak', judul: 'Artefak & Kriya', deskripsi: 'Batik, Tenun, dan Kerajinan Lokal.', ikon: '🏺' },
    { id: 'tradisi', judul: 'Tradisi & Ritual', deskripsi: 'Upacara Adat dan Kearifan Lokal.', ikon: '🕯️' },
    { id: 'kuliner', judul: 'Kuliner Khas', deskripsi: 'Resep dan Filosofi Makanan Daerah.', ikon: '🍜' }
];

const faktaMenarik = [
    "Batik diakui oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi sejak 2009.",
    "Tari Saman (Aceh) hanya boleh ditarikan oleh laki-laki dan harus genap, melambangkan kebersamaan.",
    "Angklung (Jawa Barat) adalah alat musik yang dimainkan dengan digoyangkan, setiap alat hanya menghasilkan satu nada.",
    "Wayang Kulit dapat mementaskan kisah yang berlangsung hingga semalaman suntuk tanpa henti, dipimpin oleh Dalang.",
    "Rumah Adat Tongkonan (Toraja) memiliki atap yang melengkung seperti perahu, melambangkan perjalanan nenek moyang mereka.",
];

let FaktaSaatIni= 0;

// =========================================================================
// 1. FUNGSI UNTUK MENGISI KATEGORI ENSIKLOPEDIA (Dinamis)
// =========================================================================
function renderEnsiklopedia() {
    const gridContainer = document.querySelector('.kategori-grid');
    if (!gridContainer) return; // Keluar jika elemen tidak ditemukan

    // Bersihkan konten placeholder (jika ada)
    gridContainer.innerHTML = '';

    dataEnsiklopedia.forEach(data => {
        const card = document.createElement('div');
        card.classList.add('card', `${data.id}-card`);
        
        // Menggunakan ikon emoji atau font icon
        card.innerHTML = `
            <h3>${data.ikon} ${data.judul}</h3>
            <p>${data.deskripsi}</p>
        `;
        
        // Menambahkan event listener sederhana
        card.addEventListener('click', () => {
            alert(`Anda memilih kategori: ${data.judul}.`);
            // Di implementasi nyata, ini akan mengarahkan ke halaman kategori
        });

        gridContainer.appendChild(card);
    });
}

// =========================================================================
// 2. FUNGSI UNTUK FITUR INTERAKTIF (Fakta Budaya Acak)
// =========================================================================
function tampilkanFaktaAcak() {
    const faktaArea = document.getElementById('leaderboard-preview');
    if (!faktaArea) return;

    // Pastikan tombol CTA Kuis ada untuk mendapatkan referensi
    const tombolKuis = document.querySelector('.arena-section .cta-button');

    // Mengganti teks placeholder dengan fakta menarik
    faktaArea.innerHTML = `
        <p><strong>[Fakta Budaya Hari Ini]:</strong></p>
        <p class="fakta-text">${faktaMenarik[faktaSaatIni]}</p>
    `;

    // Pindah ke fakta berikutnya untuk klik selanjutnya (looping)
    faktaSaatIni = (faktaSaatIni + 1) % faktaMenarik.length;
}

// =========================================================================
// 3. FUNGSI UNTUK EFEK ANIMASI SCROLL (Intersection Observer)
// =========================================================================
function setupScrollAnimation() {
    const sections = document.querySelectorAll('.content-section');
    
    // Konfigurasi observer
    const observerOptions = {
        root: null, // viewport
        threshold: 0.2 // trigger saat 20% section masuk viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas 'is-visible' untuk memicu animasi CSS
                entry.target.classList.add('is-visible');
                // Hentikan pengamatan setelah animasi dipicu
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Amati setiap section
    sections.forEach(section => {
        section.classList.add('fade-in'); // Tambahkan kelas dasar CSS animasi
        observer.observe(section);
    });
}

// =========================================================================
// 4. INISIALISASI UTAMA (DOM Loaded)
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render konten Ensiklopedia
    renderEnsiklopedia();
    
    // 2. Tampilkan fakta pertama dan atur interval perubahan fakta (misalnya setiap 8 detik)
    tampilkanFaktaAcak();
    setInterval(tampilkanFaktaAcak, 8000); // Ganti fakta setiap 8 detik
    
    // 3. Atur animasi scroll
    setupScrollAnimation();
    
    // Optional: Tambahkan fungsionalitas tombol CTA ke URL dummy
    const ctaButton = document.querySelector('.hero-content .cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Animasi scroll halus ke section Peta
            document.getElementById('peta').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
// Data-data yang sudah ada (dataEnsiklopedia dan faktaMenarik)

// ... (Kode dataEnsiklopedia dan faktaMenarik di sini) ...

let faktaSaatIni = 0;

// =========================================================================
// 1. FUNGSI UNTUK MENGISI KATEGORI ENSIKLOPEDIA (Sama seperti sebelumnya)
// =========================================================================
function renderEnsiklopedia() {
    const gridContainer = document.querySelector('.kategori-grid');
    if (!gridContainer) return; 
    gridContainer.innerHTML = '';
    
    dataEnsiklopedia.forEach(data => {
        const card = document.createElement('div');
        card.classList.add('card', `${data.id}-card`, 'fade-in'); 
        card.innerHTML = `
            <h3>${data.ikon} ${data.judul}</h3>
            <p>${data.deskripsi}</p>
        `;
        card.addEventListener('click', () => {
            alert(`Anda memilih kategori: ${data.judul}.`);
        });
        gridContainer.appendChild(card);
    });
}

// =========================================================================
// 2. FUNGSI UNTUK FITUR INTERAKTIF (Fakta Budaya Acak) (Sama seperti sebelumnya)
// =========================================================================
function tampilkanFaktaAcak() {
    const faktaArea = document.getElementById('leaderboard-preview');
    if (!faktaArea) return;

    faktaArea.innerHTML = `
        <p><strong>[Fakta Budaya Hari Ini]:</strong></p>
        <p class="fakta-text">${faktaMenarik[faktaSaatIni]}</p>
    `;
    faktaSaatIni = (faktaSaatIni + 1) % faktaMenarik.length;
}

// =========================================================================
// 3. FUNGSI BARU: LOGIKA MODAL KUIS
// =========================================================================
function setupQuizModal() {
    const modal = document.getElementById('quiz-modal');
    const btnBuka = document.getElementById('buka-kuis-button');
    const btnTutup = document.querySelector('.close-button');
    const btnMulaiKuis = document.getElementById('start-quiz');

    // Ketika tombol "Mainkan Kuis Sekarang!" diklik
    btnBuka.onclick = function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Nonaktifkan scroll utama
    }

    // Ketika tombol 'x' diklik
    btnTutup.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Aktifkan kembali scroll
    }

    // Ketika pengguna mengklik di luar modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // Ketika tombol "Mulai Kuis!" di dalam modal diklik
    btnMulaiKuis.onclick = function() {
        alert('Memulai Kuis! Di implementasi nyata, fungsi ini akan memuat soal kuis dari server.');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// =========================================================================
// 4. FUNGSI UNTUK EFEK ANIMASI SCROLL (Intersection Observer) (Sama seperti sebelumnya)
// =========================================================================
function setupScrollAnimation() {
    const sections = document.querySelectorAll('.content-section');
    const observerOptions = { root: null, threshold: 0.2 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// =========================================================================
// 5. INISIALISASI UTAMA (DOM Loaded)
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render konten Ensiklopedia
    renderEnsiklopedia();
    
    // 2. Tampilkan fakta pertama dan atur interval perubahan fakta
    tampilkanFaktaAcak();
    setInterval(tampilkanFaktaAcak, 8000); 
    
    // 3. Setup logika Modal Kuis
    setupQuizModal();
    
    // 4. Atur animasi scroll
    setupScrollAnimation();
    
    // 5. Scroll ke Peta
    const scrollToPetaBtn = document.getElementById('scroll-to-peta');
    if (scrollToPetaBtn) {
        scrollToPetaBtn.addEventListener('click', () => {
            document.getElementById('peta').scrollIntoView({ behavior: 'smooth' });
        });
    }
});