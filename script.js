// Language translations
const translations = {
    id: {
        "title": "Arca Ganesha",
        "select-lang": "Select Language",
        "origin-label": "Primary Info :",
        "origin-value": "Asal & Periode: Sejumlah arca Ganesha di Museum Nasional berasal dari periode klasik Jawa (abad ke-8 sampai ke-13). Salah satu arca terkenal berasal dari Candi Banon (abad ke-8/9).",
        "function-label": "Makna & Fungsi:",
        "function-value": "Ganesha—berkepala gajah—adalah dewa Hindu yang identik dengan pengetahuan, kebijaksanaan, dan penghapusan rintangan. Arca semacam ini sering ditempatkan di pintu atau tepi tempat suci untuk kemudahan dan kesuksesan dalam beribadah.",
        "collection-label": "Catatan koleksi:",
        "collection-value": "Arca Ganesha Candi Banon dianggap karya agung seni pahat Jawa Kuno. Museum Nasional menyimpan beberapa arca Ganesha yang lain dengan berbagai ragam bentuk dan gaya, menampilkan kekayaan budaya Hindu-Buddha di Nusantara.",
        "history-question": "Apakah anda ingin mendengarkan sejarahnya lebih lanjut ?",
        "history-question-en": "Would you like to hear more about the history?",
        "no": "No",
        "yes": "Yes",
        "history-title": "Sejarah Arca Ganesha",
        "history-paragraph-1": "Arca Ganesha ini berasal dari periode Jawa Klasik (abad 8-15 M), sebuah era ketika agama Hindu dan Buddha berkembang pesat di Nusantara. Patung ini ditemukan di situs arkeologi di Jawa Tengah dan sekarang menjadi koleksi berharga Museum Nasional Indonesia.",
        "history-paragraph-2": "Ganesha, yang juga dikenal sebagai Ganapati atau Vinayaka, adalah salah satu dewa yang paling dihormati dalam agama Hindu. Ia adalah putra dari Dewa Siwa dan Dewi Parvati, dan dikenal sebagai dewa pengetahuan, kebijaksanaan, dan penghapusan rintangan.",
        "history-paragraph-3": "Ciri khas Arca Ganesha ini adalah kepala gajah dengan satu taring yang patah, yang melambangkan pengorbanan untuk menulis kitab suci Mahabharata. Patung ini dibuat dari batu andesit dengan teknik pahatan yang halus, menunjukkan keahlian tinggi pengrajin pada masa itu."
    },
    en: {
        "title": "Ganesha Statue",
        "select-lang": "Select Language",
        "origin-label": "Primary Info:",
        "origin-value": "Origin & Period: A number of Ganesha statues at the National Museum originate from the classical Javanese period (8th to 13th century). One famous statue comes from Candi Banon (8th/9th century).",
        "function-label": "Meaning & Function:",
        "function-value": "Ganesha—elephant-headed—is a Hindu deity synonymous with knowledge, wisdom, and the removal of obstacles. Such statues were often placed at doors or edges of sacred places for ease and success in worship.",
        "collection-label": "Collection Notes:",
        "collection-value": "The Ganesha statue from Candi Banon is considered a masterpiece of ancient Javanese sculpture. The National Museum keeps several other Ganesha statues with various forms and styles, showcasing the richness of Hindu-Buddhist culture in the archipelago.",
        "history-question": "Apakah anda ingin mendengarkan sejarahnya lebih lanjut ?",
        "history-question-en": "Would you like to hear more about the history?",
        "no": "No",
        "yes": "Yes",
        "history-title": "History of Ganesha Statue",
        "history-paragraph-1": "This Ganesha statue originates from the Classical Java period (8th-15th century AD), an era when Hindu and Buddhist religions flourished in the archipelago. The statue was discovered at an archaeological site in Central Java and is now a valuable collection of the National Museum of Indonesia.",
        "history-paragraph-2": "Ganesha, also known as Ganapati or Vinayaka, is one of the most revered deities in Hinduism. He is the son of Lord Shiva and Goddess Parvati, and is known as the god of knowledge, wisdom, and the remover of obstacles.",
        "history-paragraph-3": "The distinctive feature of this Ganesha statue is the elephant head with one broken tusk, symbolizing the sacrifice for writing the sacred Mahabharata scripture. The statue is made of andesite stone with fine carving techniques, showing the high skill of craftsmen at that time."
    }
};

// DOM elements
const langButtons = document.querySelectorAll('.lang-btn');
const yesButton = document.querySelector('.btn-yes');
const noButton = document.querySelector('.btn-no');

// Language switching
let currentLang = 'id';

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        if (lang !== currentLang) {
            // Update active button
            document.querySelector('.lang-btn.active').classList.remove('active');
            button.classList.add('active');
            
            // Update language
            currentLang = lang;
            updateLanguage();
        }
    });
});

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Modal functionality using Bootstrap
const historyModal = new bootstrap.Modal(document.getElementById('historyModal'));

yesButton.addEventListener('click', () => {
    historyModal.show();
});

noButton.addEventListener('click', () => {
    const message = currentLang === 'id' 
        ? 'Terima kasih telah melihat informasi ini!' 
        : 'Thank you for viewing this information!';
    alert(message);
});

// Initialize with Indonesian language
updateLanguage();