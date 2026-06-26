/* ==========================================================================
   DALIL DATABASE
   ========================================================================== */
const dalilData = [
    {
        id: 1,
        title: "Shalat Adalah Tiang Agama",
        category: "wajib",
        badge: "Tiang Agama",
        arabic: "رَأْسُ الْأَمْرِ الْإِسْلَامُ، وَعَمُودُهُ الصَّلَاةُ",
        translation: "Inti dari segala perkara adalah Islam, dan tiang penyangganya adalah shalat.",
        reference: "HR. Tirmidzi no. 2616 (Shahih)"
    },
    {
        id: 2,
        title: "Penghapus Dosa Laksana Sungai Mengalir",
        category: "wajib",
        badge: "Pembersih Dosa",
        arabic: "أَرَأَيْتُمْ لَوْ أَنَّ نَهْرًا بِبَابِ أَحَدِكُمْ يَغْتَسِلُ مِنْهُ كُلَّ يَوْمٍ خَمْسَ مَرَّاتٍ، هَلْ يَبْقَىٰ مِنْ دَرَنِهِ شَيْءٌ؟ ... فَذَٰلِكَ مَثَلُ الصَّلَوَاتِ الْخَمْسِ، يَمْحُو اللَّهُ بِهِنَّ الْخَطَايَا",
        translation: "Tahukah kalian, seandainya ada sebuah sungai di dekat pintu salah seorang di antara kalian, lalu ia mandi di situ lima kali sehari, apakah ada kotoran yang tersisa? Para sahabat menjawab: Tidak ada. Beliau bersabda: Begitulah perumpamaan shalat lima waktu, dengan shalat itu Allah menghapus dosa-dosa.",
        reference: "HR. Bukhari no. 528 & Muslim no. 667"
    },
    {
        id: 3,
        title: "Cahaya dan Keselamatan Hari Kiamat",
        category: "wajib",
        badge: "Cahaya Kiamat",
        arabic: "مَنْ حَافَظَ عَلَيْهَا كَانَتْ لَهُ نُورًا وَبُرْهَانًا وَنَجَاةً يَوْمَ الْقِيَامَةِ",
        translation: "Siapa saja yang menjaga shalat lima waktu, maka shalat itu akan menjadi cahaya, bukti nyata, dan keselamatan baginya di hari kiamat.",
        reference: "HR. Ahmad (Sanad Jayyid)"
    },
    {
        id: 4,
        title: "Amalan Pertama yang Dihisab",
        category: "wajib",
        badge: "Kunci Hisab",
        arabic: "إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ",
        translation: "Sesungguhnya amalan hamba yang pertama kali dihisab pada hari kiamat adalah shalatnya. Jika shalatnya baik, maka sungguh ia telah beruntung dan berhasil.",
        reference: "HR. Tirmidzi no. 413 (Hasan)"
    },
    {
        id: 5,
        title: "Mencegah Perbuatan Keji dan Munkar",
        category: "wajib",
        badge: "Perisai Diri",
        arabic: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ",
        translation: "Sesungguhnya shalat itu mencegah dari (perbuatan) keji dan mungkar.",
        reference: "QS. Al-Ankabut: 45"
    },
    {
        id: 6,
        title: "Kunci Surga Melalui Rawatib",
        category: "sunnah",
        badge: "Istana Surga",
        arabic: "مَا مِنْ عَبْدٍ مُسْلِمٍ يُصَلِّي لِلَّهِ كُلَّ يَوْمٍ ثِنْتَيْ عَشْرَةَ رَكْعَةً تَطَوُّعًا إِلَّا بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ",
        translation: "Tidaklah seorang hamba muslim mendirikan shalat sunnah karena Allah setiap hari sebanyak dua belas rakaat (Rawatib) di luar shalat fardhu, melainkan Allah akan membangunkan baginya sebuah rumah di surga.",
        reference: "HR. Muslim no. 728"
    },
    {
        id: 7,
        title: "Keutamaan Sholat Tahajjud (Lail)",
        category: "sunnah",
        badge: "Kemuliaan Malam",
        arabic: "أَفْضَلُ الصَّلَاةِ بَعْدَ الصَّلَاةِ الْمَكْتُوبَةِ صَلَاةُ اللَّيْلِ",
        translation: "Shalat yang paling utama setelah shalat fardhu adalah shalat malam (Tahajjud).",
        reference: "HR. Muslim no. 1163"
    },
    {
        id: 8,
        title: "Shalat Duha Pengganti Sedekah Persendian",
        category: "sunnah",
        badge: "Sedekah Tubuh",
        arabic: "يُصْبِحُ عَلَىٰ كُلِّ سُلَامَىٰ مِنْ أَحَدِكُمْ صَدَقَةٌ... وَيُجْزِئُ مِنْ ذَٰلِكَ رَكْعَتَانِ يَرْكَعُهُمَا مِنَ الضُّحَىٰ",
        translation: "Setiap persendian tubuh salah seorang dari kalian membutuhkan sedekah setiap paginya... dan semua kewajiban sedekah itu cukup digantikan dengan mendirikan dua rakaat shalat Duha.",
        reference: "HR. Muslim no. 720"
    },
    {
        id: 9,
        title: "Meninggalkan Shalat Batas Kekafiran",
        category: "ancaman",
        badge: "Peringatan Keras",
        arabic: "بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلَاةِ",
        translation: "Batas pembatas antara seseorang dengan kesyirikan dan kekafiran adalah meninggalkan shalat.",
        reference: "HR. Muslim no. 82"
    },
    {
        id: 10,
        title: "Ancaman Lalai Mengabaikan Shalat",
        category: "ancaman",
        badge: "Kesesatan Nyata",
        arabic: "فَخَلَفَ مِنْ بَعْدِهِمْ خَلْفٌ أَضَاعُوا الصَّلَاةَ وَاتَّبَعُوا الشَّهَوَاتِ ۖ فَسَوْفَ يَلْقَوْنَ غَيًّا",
        translation: "Maka datanglah setelah mereka suatu generasi pengganti yang mengabaikan shalat dan memperturutkan hawa nafsu, maka kelak mereka akan menemui kesesatan (siksaan di neraka).",
        reference: "QS. Maryam: 59"
    },
    {
        id: 11,
        title: "Jaminan Surga dengan Ayat Kursi Bakda Shalat",
        category: "dzikir",
        badge: "Jalan Pintas Surga",
        arabic: "مَنْ قَرَأَ آيَةَ الْكُرْسِيِّ دُبُرَ كُلِّ صَلَاةٍ مَكْتُوبَةٍ لَمْ يَمْنَعْهُ مِنْ دُخُولِ الْجَنَّةِ إِلَّا أَنْ يَمُوتَ",
        translation: "Barangsiapa membaca Ayat Kursi di setiap akhir shalat wajib, maka tidak ada penghalang baginya untuk masuk surga kecuali kematian.",
        reference: "HR. An-Nasa'i (Shahih)"
    },
    {
        id: 12,
        title: "Istighfar dan Memohon Keselamatan",
        category: "dzikir",
        badge: "Dzikir Utama",
        arabic: "أَسْتَغْفِرُ اللهَ (ثَلَاثًا) ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ ، تَبَارَكْتَ ذَا الْجَلَالِ وَالْإِكْرَامِ",
        translation: "Aku memohon ampunan kepada Allah (dibaca 3x). Ya Allah, Engkau-lah keselamatan dan dari-Mu keselamatan, Maha Suci Engkau Wahai Rabb yang memiliki keagungan dan kemuliaan.",
        reference: "HR. Muslim no. 591"
    }
];

/* ==========================================================================
   APP STATE MANAGEMENT
   ========================================================================== */
const state = {
    activeTab: 'dashboard',
    searchQuery: '',
    selectedCategory: 'all',
    viewMode: 'grid', // 'grid' | 'list'
    favorites: JSON.parse(localStorage.getItem('fadhilah_favorites')) || [],
    tasbih: {
        count: parseInt(localStorage.getItem('tasbih_count')) || 0,
        rounds: parseInt(localStorage.getItem('tasbih_rounds')) || 0,
        preset: localStorage.getItem('tasbih_preset') || 'Subhanallah',
        target: parseInt(localStorage.getItem('tasbih_target')) || 33,
        soundEnabled: JSON.parse(localStorage.getItem('tasbih_sound')) ?? true,
        customDzikir: localStorage.getItem('tasbih_custom_dzikir') || ''
    },
    trackerDate: new Date(),
    trackerData: JSON.parse(localStorage.getItem('prayer_tracker_data')) || {}
};

// Dzikir Presets Translation & Arabic Mapping
const dzikirPresets = {
    "Subhanallah": { arabic: "سُبْحَانَ ٱللَّٰهِ", target: 33 },
    "Alhamdulillah": { arabic: "ٱلْحَمْدُ لِلَّٰهِ", target: 33 },
    "Allahu Akbar": { arabic: "ٱللَّٰهُ أَكْبَرُ", target: 33 },
    "La ilaha illallah": { arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ", target: 100 },
    "Astaghfirullah": { arabic: "أَسْتَغْفِرُ ٱللَّٰهَ", target: 100 },
    "custom": { arabic: "ذِكْرٌ للهِ", target: 33 }
};

// Default setup for a tracker day
const defaultDayTracker = () => ({
    subuh: { completed: false, tepatWaktu: false, berjamaah: false, rawatib: false },
    dzuhur: { completed: false, tepatWaktu: false, berjamaah: false, rawatib: false },
    ashar: { completed: false, tepatWaktu: false, berjamaah: false, rawatib: false },
    maghrib: { completed: false, tepatWaktu: false, berjamaah: false, rawatib: false },
    isya: { completed: false, tepatWaktu: false, berjamaah: false, rawatib: false },
    sunnah: { tahajjud: false, duha: false, witir: false }
});

/* ==========================================================================
   WEB AUDIO API SYNTHESIZER FOR DIGITAL TASBIH
   ========================================================================== */
let audioCtx = null;

function playBeep(type = 'click') {
    if (!state.tasbih.soundEnabled) return;
    
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Resume context if suspended (browser security policies)
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        if (type === 'click') {
            // Warm wooden/ticking tone
            osc.frequency.setValueAtTime(800, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.06);
        } else if (type === 'target') {
            // High beautiful metallic chime
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
            osc.frequency.setValueAtTime(1320, audioCtx.currentTime + 0.08); // E6 harmonizer
            gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.6);
        }
    } catch (e) {
        console.warn("Audio Context not supported or interaction required: ", e);
    }
}

/* ==========================================================================
   INITIALIZATION & TAB SWITCHER
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Set Gregorian and Hijri dates
    updateDatesInUI();
    
    // Set random Hadith of the Day
    setHadithOfTheDay();
    
    // Setup event listeners
    initEventListeners();
    
    // Render initial data
    renderDalilCards();
    renderDashboardFeatured();
    renderQuickChecklist();
    renderDetailedChecklist();
    updateFavoritesBadge();
    updateTasbihUI();
    updateWeeklyTrackerChart();
    
    // Sync initial theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
});

function updateDatesInUI() {
    const today = new Date();
    
    // Simple Gregorian format
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('current-date-gregorian').innerText = today.toLocaleDateString('id-ID', options);
    
    // Approximate Hijri Calendar simulation (Accurate for June 2026 / Muharram-Safar 1448)
    // June 26, 2026 corresponds to roughly 11 Dzulhijjah 1447 Hijriah (Tasyrik Day)
    // Let's compute Hijri simulation:
    const baseGregorian = new Date("2026-06-26T00:00:00Z");
    const diffDays = Math.floor((today - baseGregorian) / (1000 * 60 * 60 * 24));
    
    let hijriDay = 11 + diffDays;
    let hijriMonth = "Dzulhijjah";
    let hijriYear = 1447;
    
    if (hijriDay > 29) {
        hijriDay = hijriDay - 29;
        hijriMonth = "Muharram";
        hijriYear = 1448;
    }
    
    document.getElementById('current-day-hijri').innerText = `${hijriDay} ${hijriMonth} ${hijriYear} H`;
}

function initEventListeners() {
    // Tab switching
    document.querySelectorAll(".nav-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            switchTab(tabId);
        });
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Search input (Global & local)
    document.getElementById('global-search').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.activeTab !== 'dalil') {
            switchTab('dalil');
        }
        renderDalilCards();
    });

    // Category Tabs filtering
    document.querySelectorAll(".category-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            state.selectedCategory = tab.getAttribute("data-category");
            renderDalilCards();
        });
    });

    // View Toggles (Grid vs List)
    document.getElementById('grid-view-btn').addEventListener('click', () => toggleViewMode('grid'));
    document.getElementById('list-view-btn').addEventListener('click', () => toggleViewMode('list'));

    // Dashboard "View All" Button
    document.getElementById('view-all-dalil-btn').addEventListener('click', () => switchTab('dalil'));

    // Tasbih elements
    document.getElementById('dzikir-preset').addEventListener('change', changeDzikirPreset);
    document.getElementById('btn-tasbih-tap').addEventListener('click', tapTasbih);
    document.getElementById('btn-tasbih-reset').addEventListener('click', resetTasbih);
    document.getElementById('btn-tasbih-sound').addEventListener('click', toggleTasbihSound);
    
    // Support spacebar tapping in Tasbih tab
    document.addEventListener('keydown', (e) => {
        if (state.activeTab === 'tasbih' && e.code === 'Space') {
            e.preventDefault();
            tapTasbih();
        }
    });

    // Tracker Date selectors
    document.getElementById('tracker-prev-day').addEventListener('click', () => shiftTrackerDate(-1));
    document.getElementById('tracker-next-day').addEventListener('click', () => shiftTrackerDate(1));
    document.getElementById('btn-reset-tracker').addEventListener('click', resetAllTrackerData);

    // Hadith of the Day TTS
    document.getElementById('btn-tts-daily').addEventListener('click', readHadithDailyText);
    document.getElementById('btn-share-daily').addEventListener('click', () => {
        const dailyHadith = dalilData[0]; // Primary highlighted Hadith
        openShareModal(dailyHadith.id);
    });

    // Modal Close
    document.getElementById('btn-close-modal').addEventListener('click', closeShareModal);
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('share-modal');
        if (e.target === modal) closeShareModal();
    });
}

function switchTab(tabId) {
    state.activeTab = tabId;
    
    // Update active nav button
    document.querySelectorAll(".nav-item").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });
    
    // Update active section
    document.querySelectorAll(".tab-content").forEach(section => {
        section.classList.toggle("active", section.id === `tab-${tabId}`);
    });
    
    // Trigger special renders if necessary
    if (tabId === 'favorites') {
        renderFavorites();
    } else if (tabId === 'tracker') {
        renderDetailedChecklist();
        updateWeeklyTrackerChart();
    } else if (tabId === 'dashboard') {
        renderQuickChecklist();
        renderDashboardFeatured();
        updateStatsCounters();
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    showToast("Tema berhasil diubah!", "sun");
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (theme === 'light') {
        icon.setAttribute('data-lucide', 'sun');
    } else {
        icon.setAttribute('data-lucide', 'moon');
    }
    lucide.createIcons();
}

/* ==========================================================================
   HADITH OF THE DAY RENDERER & ACTIONS
   ========================================================================== */
function setHadithOfTheDay() {
    // Generate static or daily changing index
    const dateCode = new Date().getDate();
    const idx = dateCode % dalilData.length;
    const dailyHadith = dalilData[idx];

    document.getElementById('daily-hadith-title').innerText = dailyHadith.title;
    document.getElementById('daily-hadith-arabic').innerText = dailyHadith.arabic;
    document.getElementById('daily-hadith-translation').innerText = `"${dailyHadith.translation}" (${dailyHadith.reference})`;
    
    // Save daily index reference
    document.getElementById('btn-share-daily').onclick = () => openShareModal(dailyHadith.id);
    document.getElementById('btn-tts-daily').onclick = () => readText(dailyHadith.translation + " Hadits riwayat " + dailyHadith.reference);
}

/* ==========================================================================
   SPEECH SYNTHESIS (TTS)
   ========================================================================== */
let isSpeaking = false;
function readText(text) {
    if ('speechSynthesis' in window) {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            showToast("Bicara dihentikan", "volume-x");
            return;
        }
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'id-ID';
        utterance.rate = 0.95;
        
        utterance.onend = () => {
            isSpeaking = false;
        };

        utterance.onerror = () => {
            isSpeaking = false;
        };

        window.speechSynthesis.speak(utterance);
        isSpeaking = true;
        showToast("Membaca terjemah...", "volume-2");
    } else {
        showToast("Fitur suara tidak didukung di browser ini.", "volume-x");
    }
}

function readHadithDailyText() {
    const translation = document.getElementById('daily-hadith-translation').innerText;
    readText(translation);
}

/* ==========================================================================
   DALIL RENDERING, BOOKMARKS, AND SEARCH
   ========================================================================== */
function renderDalilCards() {
    const container = document.getElementById('dalil-cards-container');
    container.innerHTML = '';
    
    const filtered = dalilData.filter(item => {
        const matchesCategory = state.selectedCategory === 'all' || item.category === state.selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                              item.translation.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                              item.reference.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i data-lucide="search"></i>
                <h3>Pencarian Tidak Ditemukan</h3>
                <p>Maaf, kami tidak dapat menemukan dalil dengan kata kunci "${state.searchQuery}". Silakan coba kata kunci lain.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filtered.forEach(item => {
        const isFav = state.favorites.includes(item.id);
        const card = document.createElement('div');
        card.className = `dalil-card`;
        
        card.innerHTML = `
            <div class="dalil-card-top">
                <span class="dalil-category-badge">${item.badge || item.category}</span>
                <div class="card-actions">
                    <button class="btn-icon-action ${isFav ? 'active' : ''}" title="Simpan sebagai Favorit" onclick="toggleFavorite(${item.id})">
                        <i data-lucide="heart"></i>
                    </button>
                    <button class="btn-icon-action" title="Bagikan Dalil" onclick="openShareModal(${item.id})">
                        <i data-lucide="share-2"></i>
                    </button>
                </div>
            </div>
            <h3 class="dalil-card-title">${item.title}</h3>
            <p class="dalil-card-arabic">${item.arabic}</p>
            <p class="dalil-card-translation">"${item.translation}"</p>
            <div class="dalil-card-footer">
                <span class="dalil-ref">${item.reference}</span>
                <button class="btn-listen-card" onclick="readText('${item.title}. ${item.translation}. Hadits riwayat ${item.reference}')">
                    <i data-lucide="volume-2"></i>
                    <span>Dengarkan</span>
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    lucide.createIcons();
}

function renderDashboardFeatured() {
    const container = document.getElementById('featured-carousel');
    container.innerHTML = '';
    
    // Show 3 random virtues on dashboard
    const randomItems = [...dalilData].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    randomItems.forEach(item => {
        const miniCard = document.createElement('div');
        miniCard.className = 'mini-card';
        miniCard.innerHTML = `
            <div class="mini-card-header">
                <span class="mini-card-title">${item.title}</span>
                <span class="mini-card-badge">${item.badge}</span>
            </div>
            <p class="mini-card-arabic">${item.arabic}</p>
            <p class="mini-card-translation">"${item.translation}"</p>
        `;
        container.appendChild(miniCard);
    });
}

function renderFavorites() {
    const container = document.getElementById('favorites-cards-container');
    const emptyState = document.getElementById('fav-empty-state');
    
    // Clear everything except empty state
    const cards = container.querySelectorAll('.dalil-card');
    cards.forEach(c => c.remove());

    if (state.favorites.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    const savedDalils = dalilData.filter(d => state.favorites.includes(d.id));

    savedDalils.forEach(item => {
        const card = document.createElement('div');
        card.className = 'dalil-card';
        
        card.innerHTML = `
            <div class="dalil-card-top">
                <span class="dalil-category-badge">${item.badge || item.category}</span>
                <div class="card-actions">
                    <button class="btn-icon-action active" title="Hapus dari Favorit" onclick="toggleFavorite(${item.id})">
                        <i data-lucide="heart"></i>
                    </button>
                    <button class="btn-icon-action" title="Bagikan Dalil" onclick="openShareModal(${item.id})">
                        <i data-lucide="share-2"></i>
                    </button>
                </div>
            </div>
            <h3 class="dalil-card-title">${item.title}</h3>
            <p class="dalil-card-arabic">${item.arabic}</p>
            <p class="dalil-card-translation">"${item.translation}"</p>
            <div class="dalil-card-footer">
                <span class="dalil-ref">${item.reference}</span>
                <button class="btn-listen-card" onclick="readText('${item.translation}')">
                    <i data-lucide="volume-2"></i>
                    <span>Dengarkan</span>
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    lucide.createIcons();
}

function toggleFavorite(id) {
    const index = state.favorites.indexOf(id);
    if (index === -1) {
        state.favorites.push(id);
        showToast("Disimpan ke favorit Anda!", "heart");
    } else {
        state.favorites.splice(index, 1);
        showToast("Dihapus dari favorit.", "trash-2");
    }
    
    localStorage.setItem('fadhilah_favorites', JSON.stringify(state.favorites));
    updateFavoritesBadge();
    
    // Re-render wherever necessary
    if (state.activeTab === 'dalil') renderDalilCards();
    if (state.activeTab === 'favorites') renderFavorites();
}

function updateFavoritesBadge() {
    const badge = document.getElementById('fav-count');
    badge.innerText = state.favorites.length;
    badge.style.display = state.favorites.length > 0 ? 'inline-block' : 'none';
}

function toggleViewMode(mode) {
    state.viewMode = mode;
    document.getElementById('grid-view-btn').classList.toggle('active', mode === 'grid');
    document.getElementById('list-view-btn').classList.toggle('active', mode === 'list');
    
    const grid = document.getElementById('dalil-cards-container');
    if (mode === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
}

/* ==========================================================================
   DIGITAL TASBIH LOGIC
   ========================================================================== */
function changeDzikirPreset(e) {
    const val = e.target.value;
    const input = document.getElementById('custom-dzikir-input');
    
    if (val === 'custom') {
        input.classList.remove('hidden');
        state.tasbih.preset = "Kustom";
        state.tasbih.target = 33;
    } else {
        input.classList.add('hidden');
        state.tasbih.preset = val;
        state.tasbih.target = dzikirPresets[val].target;
    }
    
    state.tasbih.count = 0;
    state.tasbih.rounds = 0;
    
    saveTasbihState();
    updateTasbihUI();
}

function tapTasbih() {
    // If it's custom, fetch custom input text
    if (state.tasbih.preset === 'Kustom') {
        const textVal = document.getElementById('custom-dzikir-input').value.trim();
        state.tasbih.customDzikir = textVal || 'Dzikir';
    }

    state.tasbih.count++;
    
    // Check if target reached
    if (state.tasbih.count >= state.tasbih.target) {
        state.tasbih.rounds++;
        state.tasbih.count = 0;
        playBeep('target');
        
        // Notify user via toast
        const label = state.tasbih.preset === 'Kustom' ? state.tasbih.customDzikir : state.tasbih.preset;
        showToast(`Target putaran ${state.tasbih.rounds} selesai: ${label}!`, "award");
        
        // Update general stats
        addDzikirToStats(state.tasbih.target);
    } else {
        playBeep('click');
    }

    saveTasbihState();
    updateTasbihUI();
}

function resetTasbih() {
    state.tasbih.count = 0;
    state.tasbih.rounds = 0;
    saveTasbihState();
    updateTasbihUI();
    showToast("Hitungan tasbih telah di-reset.", "rotate-ccw");
}

function toggleTasbihSound() {
    state.tasbih.soundEnabled = !state.tasbih.soundEnabled;
    localStorage.setItem('tasbih_sound', JSON.stringify(state.tasbih.soundEnabled));
    
    const icon = document.getElementById('sound-icon');
    if (state.tasbih.soundEnabled) {
        icon.setAttribute('data-lucide', 'volume-2');
        showToast("Suara tasbih diaktifkan.", "volume-2");
    } else {
        icon.setAttribute('data-lucide', 'volume-x');
        showToast("Suara tasbih dimatikan.", "volume-x");
    }
    lucide.createIcons();
}

function saveTasbihState() {
    localStorage.setItem('tasbih_count', state.tasbih.count);
    localStorage.setItem('tasbih_rounds', state.tasbih.rounds);
    localStorage.setItem('tasbih_preset', state.tasbih.preset);
    localStorage.setItem('tasbih_target', state.tasbih.target);
    if (state.tasbih.preset === 'Kustom') {
        localStorage.setItem('tasbih_custom_dzikir', state.tasbih.customDzikir);
    }
}

function updateTasbihUI() {
    // Select Arabic text representation
    let arabic = "";
    let name = "";
    
    if (state.tasbih.preset === 'Kustom') {
        arabic = "ذِكْرُ اللهِ";
        name = state.tasbih.customDzikir || "Dzikir Kustom";
    } else {
        arabic = dzikirPresets[state.tasbih.preset].arabic;
        name = state.tasbih.preset;
    }
    
    document.getElementById('tasbih-current-arabic').innerText = arabic;
    document.getElementById('tasbih-preset-lbl').innerText = name;
    document.getElementById('tasbih-count-num').innerText = state.tasbih.count;
    document.getElementById('tasbih-target').innerText = state.tasbih.target;
    document.getElementById('tasbih-rounds').innerText = state.tasbih.rounds;

    // Update preset selector if tab re-opened
    const select = document.getElementById('dzikir-preset');
    if (select) {
        if (state.tasbih.preset === 'Kustom') {
            select.value = 'custom';
            document.getElementById('custom-dzikir-input').classList.remove('hidden');
            document.getElementById('custom-dzikir-input').value = state.tasbih.customDzikir;
        } else {
            select.value = state.tasbih.preset;
        }
    }

    // Circular progress updating
    const circle = document.getElementById('progress-ring-circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    
    // Percent complete
    const pct = state.tasbih.count / state.tasbih.target;
    const offset = circumference - (pct * circumference);
    circle.style.strokeDashoffset = offset;
}

function addDzikirToStats(amount) {
    const todayStr = getLocalDateString(new Date());
    let stats = JSON.parse(localStorage.getItem('dhikr_daily_stats')) || {};
    stats[todayStr] = (stats[todayStr] || 0) + amount;
    localStorage.setItem('dhikr_daily_stats', JSON.stringify(stats));
    updateStatsCounters();
}

/* ==========================================================================
   PRAYER TRACKER JOURNAL (DETAILED & DASHBOARD CHECKLISTS)
   ========================================================================== */
function getLocalDateString(date) {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();
    return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
}

function shiftTrackerDate(days) {
    state.trackerDate.setDate(state.trackerDate.getDate() + days);
    
    // Block tracking in future
    const today = new Date();
    today.setHours(23,59,59,999);
    if (state.trackerDate > today) {
        state.trackerDate = today;
        showToast("Tidak bisa mencatat ibadah hari esok.", "alert-triangle");
        return;
    }
    
    renderDetailedChecklist();
}

function getOrCreateDayData(dateStr) {
    if (!state.trackerData[dateStr]) {
        state.trackerData[dateStr] = defaultDayTracker();
    }
    return state.trackerData[dateStr];
}

// Render the checklist on the main Dashboard
function renderQuickChecklist() {
    const container = document.getElementById('quick-checklist-list');
    container.innerHTML = '';
    
    const todayStr = getLocalDateString(new Date());
    const dayData = getOrCreateDayData(todayStr);
    const fardPrayers = ['subuh', 'dzuhur', 'ashar', 'maghrib', 'isya'];
    
    const times = {
        subuh: '04:42 WIB',
        dzuhur: '12:02 WIB',
        ashar: '15:23 WIB',
        maghrib: '17:55 WIB',
        isya: '19:10 WIB'
    };

    fardPrayers.forEach(prayer => {
        const item = dayData[prayer];
        const isChecked = item.completed;
        const card = document.createElement('div');
        card.className = `checklist-quick-item ${isChecked ? 'checked' : ''}`;
        
        card.innerHTML = `
            <label class="checklist-checkbox-wrapper">
                <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleQuickPrayer('${prayer}', this.checked)">
                <span class="checkmark">
                    <i data-lucide="check"></i>
                </span>
            </label>
            <div class="prayer-name-container">
                <span class="prayer-name">${capitalizeFirstLetter(prayer)}</span>
                <span class="prayer-time-lbl">${times[prayer]}</span>
            </div>
        `;
        container.appendChild(card);
    });

    lucide.createIcons();
    updateStatsCounters();
}

function toggleQuickPrayer(prayer, completed) {
    const todayStr = getLocalDateString(new Date());
    const dayData = getOrCreateDayData(todayStr);
    
    dayData[prayer].completed = completed;
    if (completed) {
        dayData[prayer].tepatWaktu = true; // Auto check default
    } else {
        dayData[prayer].tepatWaktu = false;
        dayData[prayer].berjamaah = false;
        dayData[prayer].rawatib = false;
    }

    localStorage.setItem('prayer_tracker_data', JSON.stringify(state.trackerData));
    
    showToast(`${capitalizeFirstLetter(prayer)} diperbarui!`, "check-square");
    renderQuickChecklist();
    updateStatsCounters();
}

// Render the big journal checklist
function renderDetailedChecklist() {
    const container = document.getElementById('detailed-checklist-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const dateStr = getLocalDateString(state.trackerDate);
    const dayData = getOrCreateDayData(dateStr);
    
    // Header label
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateLabel = state.trackerDate.toDateString() === new Date().toDateString() 
        ? "Hari Ini, " + state.trackerDate.toLocaleDateString('id-ID', options)
        : state.trackerDate.toLocaleDateString('id-ID', options);
        
    document.getElementById('tracker-current-date-display').innerText = dateLabel;

    const fardPrayers = ['subuh', 'dzuhur', 'ashar', 'maghrib', 'isya'];

    // Render Fard prayers rows
    fardPrayers.forEach(prayer => {
        const item = dayData[prayer];
        const row = document.createElement('div');
        row.className = `checklist-detailed-item ${item.completed ? 'checked' : ''}`;
        
        row.innerHTML = `
            <div class="detailed-item-header">
                <label class="checklist-checkbox-wrapper">
                    <input type="checkbox" ${item.completed ? 'checked' : ''} 
                           onchange="updateDetailedPrayer('${prayer}', 'completed', this.checked)">
                    <span class="checkmark">
                        <i data-lucide="check"></i>
                    </span>
                </label>
                <div class="prayer-title-badge-row">
                    <span class="detailed-prayer-name">${capitalizeFirstLetter(prayer)}</span>
                    <span class="prayer-type-badge wajib">Wajib</span>
                </div>
            </div>
            
            <div class="sub-checklist-options ${item.completed ? '' : 'hidden'}">
                <label class="sub-option-checkbox">
                    <input type="checkbox" ${item.tepatWaktu ? 'checked' : ''} 
                           onchange="updateDetailedPrayer('${prayer}', 'tepatWaktu', this.checked)">
                    <span>Tepat Waktu</span>
                </label>
                <label class="sub-option-checkbox">
                    <input type="checkbox" ${item.berjamaah ? 'checked' : ''} 
                           onchange="updateDetailedPrayer('${prayer}', 'berjamaah', this.checked)">
                    <span>Berjamaah</span>
                </label>
                <label class="sub-option-checkbox">
                    <input type="checkbox" ${item.rawatib ? 'checked' : ''} 
                           onchange="updateDetailedPrayer('${prayer}', 'rawatib', this.checked)">
                    <span>Sunnah Rawatib</span>
                </label>
            </div>
        `;
        container.appendChild(row);
    });

    // Render Sunnah section
    const sunnahItem = dayData.sunnah;
    const sunnahRow = document.createElement('div');
    sunnahRow.className = 'checklist-detailed-item';
    
    sunnahRow.innerHTML = `
        <div class="detailed-item-header">
            <div class="prayer-title-badge-row">
                <span class="detailed-prayer-name">Amalan Sunnah Pilihan</span>
                <span class="prayer-type-badge sunnah">Sunnah</span>
            </div>
        </div>
        <div class="sub-checklist-options">
            <label class="sub-option-checkbox">
                <input type="checkbox" ${sunnahItem.tahajjud ? 'checked' : ''} 
                       onchange="updateDetailedSunnah('tahajjud', this.checked)">
                <span>Shalat Tahajjud (Malam)</span>
            </label>
            <label class="sub-option-checkbox">
                <input type="checkbox" ${sunnahItem.duha ? 'checked' : ''} 
                       onchange="updateDetailedSunnah('duha', this.checked)">
                <span>Shalat Duha</span>
            </label>
            <label class="sub-option-checkbox">
                <input type="checkbox" ${sunnahItem.witir ? 'checked' : ''} 
                       onchange="updateDetailedSunnah('witir', this.checked)">
                <span>Shalat Witir</span>
            </label>
        </div>
    `;
    container.appendChild(sunnahRow);

    lucide.createIcons();
    updateWeeklyTrackerChart();
}

function updateDetailedPrayer(prayer, field, val) {
    const dateStr = getLocalDateString(state.trackerDate);
    const dayData = getOrCreateDayData(dateStr);
    
    dayData[prayer][field] = val;
    
    // Auto behavior
    if (field === 'completed') {
        if (val) {
            dayData[prayer].tepatWaktu = true;
        } else {
            dayData[prayer].tepatWaktu = false;
            dayData[prayer].berjamaah = false;
            dayData[prayer].rawatib = false;
        }
    }

    localStorage.setItem('prayer_tracker_data', JSON.stringify(state.trackerData));
    renderDetailedChecklist();
    updateWeeklyTrackerChart();
}

function updateDetailedSunnah(field, val) {
    const dateStr = getLocalDateString(state.trackerDate);
    const dayData = getOrCreateDayData(dateStr);
    
    dayData.sunnah[field] = val;
    
    localStorage.setItem('prayer_tracker_data', JSON.stringify(state.trackerData));
    renderDetailedChecklist();
    updateWeeklyTrackerChart();
}

function resetAllTrackerData() {
    if (confirm("Apakah Anda yakin ingin menghapus seluruh data jurnal sholat Anda? Tindakan ini tidak bisa dibatalkan.")) {
        state.trackerData = {};
        localStorage.removeItem('prayer_tracker_data');
        renderDetailedChecklist();
        updateWeeklyTrackerChart();
        showToast("Jurnal sholat berhasil dikosongkan.", "trash-2");
    }
}

/* ==========================================================================
   STATISTICS & CHARTS GRAPHICS
   ========================================================================== */
function calculateDayProgress(dateStr) {
    const dayData = state.trackerData[dateStr];
    if (!dayData) return 0;
    
    const fardPrayers = ['subuh', 'dzuhur', 'ashar', 'maghrib', 'isya'];
    let totalItems = fardPrayers.length * 4; // Completed, Tepat Waktu, Berjamaah, Rawatib
    let checkedItems = 0;
    
    fardPrayers.forEach(p => {
        if (dayData[p].completed) checkedItems++;
        if (dayData[p].tepatWaktu) checkedItems++;
        if (dayData[p].berjamaah) checkedItems++;
        if (dayData[p].rawatib) checkedItems++;
    });

    // Sunnah multipliers
    totalItems += 3;
    if (dayData.sunnah.tahajjud) checkedItems++;
    if (dayData.sunnah.duha) checkedItems++;
    if (dayData.sunnah.witir) checkedItems++;

    return Math.round((checkedItems / totalItems) * 100);
}

function updateStatsCounters() {
    // Total Dalil
    document.getElementById('stat-total-dalil').innerText = dalilData.length;
    
    // Dzikir Today
    const todayStr = getLocalDateString(new Date());
    const stats = JSON.parse(localStorage.getItem('dhikr_daily_stats')) || {};
    const dhikrTodayCount = stats[todayStr] || 0;
    document.getElementById('stat-dhikr-today').innerText = dhikrTodayCount;
    
    // Today's tracker progress
    const pct = calculateDayProgress(todayStr);
    document.getElementById('stat-tracker-progress').innerText = `${pct}%`;
    document.getElementById('stat-tracker-progress').style.color = pct > 75 ? 'var(--emerald-light)' : 'var(--gold)';
}

function updateWeeklyTrackerChart() {
    const weeklyPctOverlay = document.getElementById('weekly-progress-pct');
    const chartContainer = document.getElementById('weekly-chart-bars');
    const weeklyRing = document.getElementById('weekly-progress-ring');
    
    if (!weeklyPctOverlay || !chartContainer) return;

    chartContainer.innerHTML = '';
    
    // Construct last 7 days keys
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        last7Days.push(d);
    }

    let overallSum = 0;
    
    const dayShortNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

    last7Days.forEach(date => {
        const dateStr = getLocalDateString(date);
        const progress = calculateDayProgress(dateStr);
        const dayLabel = dayShortNames[date.getDay()];
        
        overallSum += progress;

        const barWrapper = document.createElement('div');
        barWrapper.className = 'chart-bar-wrapper';
        barWrapper.innerHTML = `
            <div class="bar-container" title="Progress: ${progress}% pada ${date.toLocaleDateString('id-ID')}">
                <div class="bar-fill" style="height: ${progress}%"></div>
            </div>
            <span class="chart-day">${dayLabel}</span>
        `;
        chartContainer.appendChild(barWrapper);
    });

    const averageWeekly = Math.round(overallSum / 7);
    weeklyPctOverlay.innerText = `${averageWeekly}%`;

    // Update SVG Ring
    const radius = weeklyRing.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - ((averageWeekly / 100) * circumference);
    weeklyRing.style.strokeDashoffset = offset;
}

/* ==========================================================================
   SHARE MODAL & SYSTEM TOASTS
   ========================================================================== */
function openShareModal(id) {
    const item = dalilData.find(d => d.id === id);
    if (!item) return;

    document.getElementById('modal-arabic').innerText = item.arabic;
    document.getElementById('modal-translation').innerText = `"${item.translation}"`;
    document.getElementById('modal-reference').innerText = item.reference;
    
    const modal = document.getElementById('share-modal');
    modal.classList.remove('hidden');

    // Share buttons logic
    const fullText = `🕌 *Keutamaan Sholat: ${item.title}*\n\n"${item.arabic}"\n\n_"${item.translation}"_\n\nSource: *${item.reference}*\n_FadhilahSholat App_`;
    
    document.getElementById('btn-copy-link').onclick = () => {
        navigator.clipboard.writeText(fullText);
        showToast("Teks dalil berhasil disalin!", "copy");
    };

    document.getElementById('btn-share-wa').onclick = () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
        window.open(url, '_blank');
    };

    document.getElementById('btn-share-twitter').onclick = () => {
        const tweetText = `🕌 Keutamaan Sholat: ${item.title}\n\n"${item.translation}" (${item.reference})\n#sholat #islam`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(url, '_blank');
    };
}

function closeShareModal() {
    document.getElementById('share-modal').classList.add('hidden');
}

function showToast(message, iconName = 'info') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    const toastIcon = document.getElementById('toast-icon');

    toastMsg.innerText = message;
    toastIcon.setAttribute('data-lucide', iconName);
    lucide.createIcons();

    toast.classList.remove('hidden');
    
    // Auto close
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

/* ==========================================================================
   HELPER UTILS
   ========================================================================== */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
