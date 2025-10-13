export const content = {
    id: {
        questionText: 'Apakah anda ingin mendengarkan sejarahnya lebih lanjut ?',
        questionLink: 'Would you like to hear more about the history?',
        yesButton: 'Yes',
        modelLabel: '3D Model (Sentuh untuk eksplorasi)',
        title: 'Arca Ganesha',
        primaryInfo: '<span class="info-label">Primary Info ;</span>',
        origin: '<span class="info-label">Asal & Periode:</span> Sejumlah arca Ganesha di Museum Nasional berasal dari periode klasik Jawa (abad ke-8 sampai ke-13). Salah satu arca terkenal berasal dari Candi Banon (abad ke-8/9).',
        meaning: '<span class="info-label">Makna & fungsi:</span> Ganesha—berkepala gajah—adalah dewa penghalau rintangan dan pelindung ilmu pengetahuan. Arca semacam ini sering diletakkan di pintu atau tempat suci untuk melindungi tempat dari bahaya dan sekaligus dipuja oleh komunitas.',
        collection: '<span class="info-label">Catatan koleksi:</span> Arca Ganesha Candi Banon dianggap karya adikarya karena mutu pahatnya; Museum Nasional menyimpan beberapa arca Ganesha yang kini menjadi',
        modelTitle: '3D Model (Sentuh untuk eksplorasi)'
    },
    en: {
        questionText: 'Would you like to hear more about its history?',
        questionLink: 'Apakah anda ingin mendengarkan sejarahnya lebih lanjut ?',
        yesButton: 'Yes',
        modelLabel: '3D Model (Touch to explore)',
        title: 'Ganesha Statue',
        primaryInfo: '<span class="info-label">Primary Info ;</span>',
        origin: '<span class="info-label">Origin & Period:</span> Several Ganesha statues in the National Museum originated from the classical Javanese period (8th to 13th century). One famous statue comes from Candi Banon (8th/9th century).',
        meaning: '<span class="info-label">Meaning & Function:</span> Ganesha—the elephant-headed deity—is the remover of obstacles and protector of knowledge. Such statues were often placed at doorways or sacred places to protect from danger and were worshipped by the community.',
        collection: '<span class="info-label">Collection Notes:</span> The Ganesha statue from Candi Banon is considered a masterpiece due to its sculpting quality; the National Museum houses several Ganesha statues that have now become',
        modelTitle: '3D Model (Touch to explore)'
    }
};

let currentLang = 'id';

export function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-flag').forEach(flag => flag.classList.remove('active'));
    document.querySelectorAll('.lang-flag')[lang === 'id' ? 0 : 1].classList.add('active');
    
    document.getElementById('question-text').textContent = content[lang].questionText;
    document.getElementById('question-link').textContent = content[lang].questionLink;
    document.getElementById('yes-button').textContent = content[lang].yesButton;
    document.getElementById('model-title').textContent = content[lang].modelTitle;
    
    // Update model label
    const modelLabel = document.getElementById('model-label-text');
    if (modelLabel) {
        modelLabel.textContent = content[lang].modelLabel;
    }
    
    document.getElementById('info-content').innerHTML = `
        <h3 style="text-align: center; margin-bottom: 15px; font-size: 16px; color: #8b6f3f;">${content[lang].title}</h3>
        <div class="info-block">${content[lang].primaryInfo}</div>
        <div class="info-block">${content[lang].origin}</div>
        <div class="info-block">${content[lang].meaning}</div>
        <div class="info-block">${content[lang].collection}</div>
    `;
}

export function getCurrentLang() {
    return currentLang;
}

export function initLanguage() {
    switchLanguage('id');
}