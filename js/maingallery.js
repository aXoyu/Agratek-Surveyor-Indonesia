// Ambil semua elemen filter dan kartu
var allFilters = document.querySelectorAll('section.btns li.btn');
var allCards = document.querySelectorAll('section.gallery div.card');

// Tambahkan event click ke setiap filter
for (var i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener('click', myFunction);
}

// Definisikan fungsi
function myFunction() {
    var currenTab = document.querySelector('section.btns .active');
    if (currenTab) {
        currenTab.classList.remove('active');
    }

    this.classList.add('active');

    var filter = this.getAttribute('data-filter').toLowerCase();

    if (filter != 'all') {
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.add('hide');
            allCards[i].classList.remove('active');

            var currentItem = allCards[i].getAttribute('data-item').toLowerCase();
            if (currentItem == filter) {
                allCards[i].classList.add('active');
                allCards[i].classList.remove('hide');
            }
        }
    } else {
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.remove('hide');
            allCards[i].classList.add('active');
        }
    }
}
