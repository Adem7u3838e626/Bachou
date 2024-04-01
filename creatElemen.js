// في ملف creatElemen.js

var json = {
    "language": [
        {
            "id": "1",
            "language": "Arabic",
            "native": "العربية",
            "surah": "https://www.mp3quran.net/api/v3/suwar?language=ar",
            "rewayah": "https://www.mp3quran.net/api/v3/riwayat?language=ar",
            "rewayah": "https://www.mp3quran.net/api/v3/moshaf?language=ar",
            "reciters": "https://www.mp3quran.net/api/v3/reciters?language=ar",
            "radios": "https://www.mp3quran.net/api/v3/radios?language=ar",
            "tafasir": "https://www.mp3quran.net/api/v3/tafasir?language=ar"
        },
        {
            "id": "2",
            "language": "English",
            "native": "English",
            "surah": "https://www.mp3quran.net/api/v3/suwar?language=eng",
            "rewayah": "https://www.mp3quran.net/api/v3/riwayat?language=eng",
            "rewayah": "https://www.mp3quran.net/api/v3/moshaf?language=eng",
            "reciters": "https://www.mp3quran.net/api/v3/reciters?language=eng",
            "radios": "https://www.mp3quran.net/api/v3/radios?language=eng",
            "tafasir": "https://www.mp3quran.net/api/v3/tafasir?language=eng"
        }
    ]
};

var sd = {}; 

var languageButtonsDiv = document.getElementById('languageButtons');

json.language.forEach(function(lang) {
    var button = document.createElement('button');
    button.textContent = lang.native;
    button.addEventListener('click', function() {
        sd = {
            id: lang.id,
            language: lang.language,
            native: lang.native,
            surah: lang.surah,
            rewayah: lang.rewayah,
            reciters: lang.reciters,
            radios: lang.radios,
            tafasir: lang.tafasir
        };
        console.log(sd);
        languageButtonsDiv.style.display = 'none';
    });
    languageButtonsDiv.appendChild(button);
});

module.exports = sd;