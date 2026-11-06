// =====================================================
// DATA DETAIL UNIT USAHA
// =====================================================

const unitDetails = {

    fnb: {
        title: "Makanan & Minuman",
        category: "FOOD & DRINK",

        content: `
            <p>
                Unit F&B menyediakan berbagai pilihan makanan
                dan minuman yang cocok untuk menemani aktivitas
                mahasiswa di kampus.
            </p>

            <br>

            <p><strong>Contoh produk:</strong></p>

            <ul>
                <li>Ichitan</li>
                <li>Good Day</li>
                <li>Floridina</li>
                <li>Teh Pucuk</li>
                <li>Golda</li>
                <li>Ultramilk</li>
                <li>Berbagai makanan ringan</li>
            </ul>

            <br>

            <p>
                Untuk informasi stok dan harga terbaru,
                silakan hubungi pengelola unit usaha.
            </p>
        `
    },


    print: {
        title: "Percetakan & Dokumen",
        category: "PRINTING & DOCUMENT",

        content: `
            <p>
                Unit percetakan membantu mahasiswa dalam
                memenuhi kebutuhan dokumen perkuliahan
                dan administrasi.
            </p>

            <br>

            <p><strong>Layanan yang tersedia:</strong></p>

            <ul>
                <li>Print hitam putih</li>
                <li>Print warna</li>
                <li>Fotokopi</li>
                <li>Print sertifikat</li>
                <li>Print amplop</li>
                <li>Penjilidan</li>
                <li>Pengetikan dokumen</li>
                <li>Print stiker</li>
            </ul>
        `
    },


    consign: {
        title: "Konsinyasi",
        category: "STUDENT MARKETPLACE",

        content: `
            <p>
                Unit konsinyasi menjadi wadah bagi mahasiswa
                yang ingin menitipkan produk untuk dijual.
            </p>

            <br>

            <p><strong>Manfaat konsinyasi:</strong></p>

            <ul>
                <li>Memasarkan produk mahasiswa</li>
                <li>Memperkenalkan produk kepada mahasiswa</li>
                <li>Membantu mengembangkan usaha mahasiswa</li>
                <li>Menjadi tempat promosi produk</li>
            </ul>

            <br>

            <p>
                Untuk informasi mengenai ketentuan penitipan
                produk, silakan menghubungi pengelola.
            </p>
        `
    },


    creative: {
        title: "Jasa Kreatif",
        category: "CREATIVE SERVICE",

        content: `
            <p>
                Unit jasa kreatif menyediakan layanan untuk
                membantu kebutuhan visual dan dokumentasi.
            </p>

            <br>

            <p><strong>Layanan kreatif:</strong></p>

            <ul>
                <li>Desain grafis</li>
                <li>Fotografi</li>
                <li>Videografi</li>
                <li>Editing foto</li>
                <li>Editing video</li>
                <li>Konten visual</li>
            </ul>

            <br>

            <p>
                Detail harga dan jenis layanan dapat
                dikonfirmasi kepada pengelola unit usaha.
            </p>
        `
    }

};


// =====================================================
// MASUK KE WEBSITE DARI COVER
// =====================================================

function enterWebsite() {

    const cover = document.getElementById("cover");
    const siteContent = document.getElementById("siteContent");

    if (!cover || !siteContent) {
        return;
    }

    // Hilangkan cover
    cover.classList.add("hide");

    // Tampilkan website utama setelah animasi
    setTimeout(function () {

        siteContent.classList.add("show");

        // Pastikan halaman yang muncul adalah Beranda
        showPage("beranda");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 400);
}


// =====================================================
// PINDAH HALAMAN
// =====================================================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll(".nav-link");

    // ---------------------------------------------
    // Sembunyikan semua halaman
    // ---------------------------------------------

    pages.forEach(function (page) {

        page.classList.remove("active-page");

    });


    // ---------------------------------------------
    // Tampilkan halaman yang dipilih
    // ---------------------------------------------

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    // ---------------------------------------------
    // Update menu aktif
    // ---------------------------------------------

    navLinks.forEach(function (link) {

        link.classList.remove("active");

    });


    // Cocokkan berdasarkan onclick
    navLinks.forEach(function (link) {

        const onclickValue = link.getAttribute("onclick");

        if (
            onclickValue &&
            onclickValue.includes(`showPage('${pageId}')`)
        ) {

            link.classList.add("active");

        }

    });


    // ---------------------------------------------
    // Kembali ke bagian atas
    // ---------------------------------------------

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================================
// DETAIL UNIT USAHA
// =====================================================

function showDetail(unit) {

    const data = unitDetails[unit];

    if (!data) {
        return;
    }


    const modal = document.getElementById("detailModal");
    const modalContent = document.getElementById("modalContent");


    if (!modal || !modalContent) {
        return;
    }


    // Isi modal
    modalContent.innerHTML = `

        <span class="modal-tag">
            ${data.category}
        </span>

        <h2>
            ${data.title}
        </h2>

        <div class="modal-description">
            ${data.content}
        </div>

    `;


    // Tampilkan modal
    modal.classList.add("active");

    // Cegah halaman belakang ikut scroll
    document.body.classList.add("modal-open");
}


// =====================================================
// TUTUP MODAL
// =====================================================

function closeModal() {

    const modal = document.getElementById("detailModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    // Aktifkan kembali scroll halaman
    document.body.classList.remove("modal-open");
}


// =====================================================
// KLIK DI LUAR MODAL
// =====================================================

document.addEventListener("click", function (event) {

    const modal = document.getElementById("detailModal");

    if (!modal) {
        return;
    }

    // Jika yang diklik adalah area overlay
    if (event.target.classList.contains("modal-overlay")) {

        closeModal();

    }

});


// =====================================================
// TUTUP MODAL DENGAN ESC
// =====================================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal();

    }

});

// =====================================================
// HALAMAN AWAL
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const cover = document.getElementById("cover");
    const siteContent = document.getElementById("siteContent");
    // ---------------------------------------------
    // Cover ditampilkan pertama kali
    // ---------------------------------------------

    if (cover) {

        cover.classList.remove("hide");

    }

    // ---------------------------------------------
    // Website utama disembunyikan dulu
    // ---------------------------------------------

    if (siteContent) {

        siteContent.classList.remove("show");

    }

    // ---------------------------------------------
    // Beranda menjadi halaman default
    // ---------------------------------------------

    showPage("beranda");

});