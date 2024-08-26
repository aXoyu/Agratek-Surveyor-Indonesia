document.addEventListener('DOMContentLoaded', function () {
    const blogPosts = [
        {
            title: "Kerja Sama Nasional Hingga Internasional Agratek Surveyor Indonesia",
            date: "August 25, 2024",
            description: "Inovasi dan komitmen untuk menyediakan layanan yang paling akurat dan dapat diandalkan, Agratek Surveyor Indonesia siap untuk melayani lebih banyak klien di berbagai belahan dunia.",
            image: "/images/design_blog-agratek-kerja-sama.jpg",
            category: "All",
            link: "blog-agratek_gointernasional.html"
        },
        {
            title: "Tentang Bathymetri Agratek Surveyor Indonesia",
            date: "August 7, 2024",
            description: "Survey Bathymetri Untuk Menggali Informasi dari Dalamnya Lautan",
            image: "/images/design_blog-bathymetri.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-bathymetri.html"
        },
        {
            title: "Penggunaan Automatic Level, Tripod, Theodolite dan Rambu Ukur dalam Pekerjaan Lapangan",
            date: "August 4, 2024",
            description: "Tentang Beberapa Peralatan Survey, Automatic Level Waterpass, Tripod dan Rambu Ukur",
            image: "/images/design_blog-automatic_level-tripod-rambu_ukur.png",
            category: "Topografi",
            link: "blog-automatic_level.html"
        },
        {
            title: "Keunggulan Flowatch sebagai Flowmeter-Thermometer dalam Pemantauan Lingkungan",
            date: "August 1, 2024",
            description: "Memahami Pengukuran Aliran dan Suhu Air dengan Flowatch: Alat Multifungsi untuk Pemantauan Lingkungan",
            image: "/images/design_blog-flowatch.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-current_meter.html"
        },
        {
            title: "Valeport Tide Master Sebagai Inovasi Terkini dalam Pengukuran Pasang Surut Otomatis",
            date: "July 28, 2024",
            description: "Mengapa Valeport TideMaster Unggul dalam Pengukuran Pasang Surut?",
            image: "/images/design_blog-valeport.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-valeport_tide_master.html"
        },
        {
            title: "Pemetaan Laut yang Akurat dengan Side Scan Sonar",
            date: "July 27, 2024",
            description: "Pentingkah Side Scan Sonar? Simak Jawabannya di Sini!",
            image: "/images/design_blog-starfish.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-side_scan_sonar.html"
        },
        {
            title: "Rahasia Di Balik Data Bawah Permukaan Laut",
            date: "July 25, 2024",
            description: "Mengapa Sub Bottom Profil Penting? Temukan Jawabannya di Sini!",
            image: "/images/design_blog-SBP.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-sub_bottom_profil.html"
        },
        {
            title: "Apasih GPS RTK itu?",
            date: "July 22, 2024",
            description: "Sedikit pembahasan tentang alat GPS RTK",
            image: "/images/design_blog-GPSRTK.jpg",
            category: "GPS/GNSS",
            link: "blog-gpsrtk.html"
        },
        {
            title: "Barcheck Apakah Itu?",
            date: "July 21, 2024",
            description: "Apa yang Dimaksud Dengan Prinsip Barcheck?",
            image: "/images/design_blog-barcheck.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-barcheck-apakah-itu.html"
        },
        {
            title: "Alat Ukur Kedalaman Echosounder",
            date: "July 11, 2024",
            description: "Apa kegunaan dari alat ukur kedalaman (echosounder)?",
            image: "/images/design_blog-echosounder.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-alat-ukur-kedalaman-echosounder.html"
        },
        // Tambahkan post blog lainnya di sini
    ];

    const recentPosts = [
        {
            title: "Kerja Sama Nasional Hingga Internasional Agratek Surveyor Indonesia",
            date: "August 25, 2024",
            description: "Inovasi dan komitmen untuk menyediakan layanan yang paling akurat dan dapat diandalkan, Agratek Surveyor Indonesia siap untuk melayani lebih banyak klien di berbagai belahan dunia.",
            image: "/images/design_blog-agratek-kerja-sama.jpg",
            category: "All",
            link: "blog-agratek_gointernasional.html"
        },
        {
            title: "Tentang Bathymetri Agratek Surveyor Indonesia",
            date: "August 7, 2024",
            description: "Survey Bathymetri Untuk Menggali Informasi dari Dalamnya Lautan",
            image: "/images/design_blog-bathymetri.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-bathymetri.html"
        },
        {
            title: "Penggunaan Automatic Level, Tripod, Theodolite dan Rambu Ukur dalam Pekerjaan Lapangan",
            date: "August 4, 2024",
            description: "Tentang Beberapa Peralatan Survey, Automatic Level Waterpass, Tripod dan Rambu Ukur",
            image: "/images/design_blog-automatic_level-tripod-rambu_ukur.png",
            category: "Topografi",
            link: "blog-automatic_level.html"
        },
        {
            title: "Keunggulan Flowatch sebagai Flowmeter-Thermometer dalam Pemantauan Lingkungan",
            date: "August 1, 2024",
            description: "Memahami Pengukuran Aliran dan Suhu Air dengan Flowatch: Alat Multifungsi untuk Pemantauan Lingkungan",
            image: "/images/design_blog-flowatch.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-current_meter.html"
        },
        {
            title: "Valeport Tide Master Sebagai Inovasi Terkini dalam Pengukuran Pasang Surut Otomatis",
            date: "July 28, 2024",
            description: "Mengapa Valeport TideMaster Unggul dalam Pengukuran Pasang Surut?",
            image: "/images/design_blog-valeport.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-valeport_tide_master.html"
        },
        {
            title: "Pemetaan Laut yang Akurat dengan Side Scan Sonar",
            date: "July 27, 2024",
            description: "Pentingkah Side Scan Sonar? Simak Jawabannya di Sini!",
            image: "/images/design_blog-starfish.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-side_scan_sonar.html"
        },
        {
            title: "Rahasia Di Balik Data Bawah Permukaan Laut",
            date: "July 25, 2024",
            description: "Mengapa Sub Bottom Profil Penting? Temukan Jawabannya di Sini!",
            image: "/images/design_blog-SBP.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-sub_bottom_profil.html"
        },
        {
            title: "Apasih GPS RTK itu?",
            date: "July 22, 2024",
            description: "Sedikit pembahasan tentang alat GPS RTK",
            image: "/images/design_blog-GPSRTK.jpg",
            category: "GPS/GNSS",
            link: "blog-gpsrtk.html"
        },
        {
            title: "Barcheck Apakah Itu?",
            date: "July 21, 2024",
            description: "Apa yang Dimaksud Dengan Prinsip Barcheck?",
            image: "/images/design_blog-barcheck.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-barcheck-apakah-itu.html"
        },
        {
            title: "Alat Ukur Kedalaman Echosounder",
            date: "July 11, 2024",
            description: "Apa kegunaan dari alat ukur kedalaman (echosounder)?",
            image: "/images/design_blog-echosounder.jpg",
            category: "Batimetri & Hidrografi",
            link: "blog-alat-ukur-kedalaman-echosounder.html"
        },
        // Tambahkan recent posts lainnya di sini
    ];

    const blogGrid = document.getElementById('blog-grid');
    const recentPostsContainer = document.querySelector('.recent-posts ul');
    const searchInput = document.querySelector('.search-container input');
    const filterButtons = document.querySelectorAll('.btns li');
    const searchForm = document.getElementById('search-form');


    function renderBlogPosts(posts) {
        blogGrid.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'blog-card';
            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-card-content">
                    <h3>${post.title}</h3>
                    <p class="date">${post.date}</p>
                    <p>${post.description}</p>
                    <a href="${post.link}" class="read-more">Read more →</a>
                </div>
            `;
            blogGrid.appendChild(postElement);
        });
    }

    function renderRecentPosts(posts) {
        recentPostsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('li');
            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <div>
                    <a href="${post.link}">${post.title}</a>
                    <span class="date">${post.date}</span>
                </div>
            `;
            recentPostsContainer.appendChild(postElement);
        });
    }

    function filterPosts(category) {
        let filteredBlogPosts;
        let filteredRecentPosts;

        if (category === 'All Posts') {
            filteredBlogPosts = blogPosts;
            filteredRecentPosts = recentPosts;
        } else {
            filteredBlogPosts = blogPosts.filter(post => post.category === category);
            filteredRecentPosts = recentPosts.filter(post => post.category === category);
        }

        renderBlogPosts(filteredBlogPosts);
        renderRecentPosts(filteredRecentPosts);
    }

    function searchPosts(event) {
        if (event) {
            event.preventDefault();
        }
        const searchTerm = searchInput.value.toLowerCase();
        
        const filteredBlogPosts = blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.description.toLowerCase().includes(searchTerm)
        );
        renderBlogPosts(filteredBlogPosts);

        const filteredRecentPosts = recentPosts.filter(post =>
            post.title.toLowerCase().includes(searchTerm)
        );
        renderRecentPosts(filteredRecentPosts);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterPosts(this.textContent.trim());
        });
    });


    searchInput.addEventListener('input', searchPosts);
    searchForm.addEventListener('submit', searchPosts);

    // Initial render
    renderBlogPosts(blogPosts);
    renderRecentPosts(recentPosts);


    // Inisialisasi AOS jika digunakan
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});
