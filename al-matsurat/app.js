/* ==========================================================================
   AL-MA'TSURAT DATABASE
   ========================================================================== */
const dzikirDb = [
    {
        id: 1,
        title: "Membaca Ayat Kursi",
        target: 1,
        arabic: {
            pagi: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۚ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۚ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۚ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
            sore: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۚ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۚ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۚ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُ'' الْعَظِيمُ"
        },
        transliteration: {
            pagi: "Allahu la ilaha illa huwal hayyul qayyum, la ta'khudhuhu sinatuw wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay'im min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzuhuma, wa huwal 'aliyyul 'adhim.",
            sore: "Allahu la ilaha illa huwal hayyul qayyum, la ta'khudhuhu sinatuw wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay'im min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzuhuma, wa huwal 'aliyyul 'adhim."
        },
        translation: {
            pagi: "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya? Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar.",
            sore: "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya? Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar."
        },
        fadhilah: "Membaca ayat ini di pagi hari akan dilindungi dari gangguan setan hingga sore hari. Membaca di sore hari melindungi dari setan hingga pagi hari. (HR. Al-Hakim)",
    },
    {
        id: 2,
        title: "Membaca Surah Al-Ikhlas, Al-Falaq, & An-Nas",
        target: 3,
        arabic: {
            pagi: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ هُوَ اللَّهُ أَحَدٌ... قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ... قُل *أَعُوذُ بِرَبِّ النَّاسِ...",
            sore: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ هُوَ اللَّهُ أَحَدٌ... قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ... قُل *أَعُوذُ بِرَبِّ النَّاسِ..."
        },
        transliteration: {
            pagi: "Membaca Qul Huwallahu Ahad, Qul A'udhu bi Rabbil Falaq, dan Qul A'udhu bi Rabbin Nas (Masing-masing 3 kali)",
            sore: "Membaca Qul Huwallahu Ahad, Qul A'udhu bi Rabbil Falaq, dan Qul A'udhu bi Rabbin Nas (Masing-masing 3 kali)"
        },
        translation: {
            pagi: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa... Katakanlah: Aku berlindung kepada Tuhan Yang Menguasai subuh... Katakanlah: Aku berlindung kepada Tuhan (yang memelihara) manusia...",
            sore: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa... Katakanlah: Aku berlindung kepada Tuhan Yang Menguasai subuh... Katakanlah: Aku berlindung kepada Tuhan (yang memelihara) manusia..."
        },
        fadhilah: "Membaca tiga surah ini tiga kali setiap pagi dan sore hari akan mencukupkanmu dari segala sesuatu. (HR. Abu Dawud & Tirmidzi)",
    },
    {
        id: 3,
        title: "Dzikir Perlindungan & Kekuasaan Allah",
        target: 1,
        arabic: {
            pagi: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
            sore: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ"
        },
        transliteration: {
            pagi: "Asbahna wa asbahal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. Rabbi as'aluka khayra ma fi hadhal-yawmi wa khayra ma ba'dahu, wa a'udhu bika min sharri ma fi hadhal-yawmi wa sharri ma ba'dahu, Rabbi a'udhu bika minal-kasali wa su'il-kibar, Rabbi a'udhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr.",
            sore: "Amsayna wa amsal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. Rabbi as'aluka khayra ma fi hadhihil-laylati wa khayra ma ba'daha, wa a'udhu bika min sharri ma fi hadhihil-laylati wa sharri ma ba'daha, Rabbi a'udhu bika minal-kasali wa su'il-kibar, Rabbi a'udhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr."
        },
        translation: {
            pagi: "Kami memasuki waktu pagi dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada Tuhan yang berhak disembah selain Allah Yang Maha Esa, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya pujian. Dia Maha Kuasa atas segala sesuatu. Ya Tuhanku, aku mohon kebaikan di hari ini dan kebaikan sesudahnya, dan berlindung kepada-Mu dari keburukan hari ini dan keburukan sesudahnya. Ya Tuhanku, aku berlindung dari kemalasan dan buruknya masa tua, serta siksaan api neraka dan azab kubur.",
            sore: "Kami memasuki waktu sore dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada Tuhan yang berhak disembah selain Allah Yang Maha Esa, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya pujian. Dia Maha Kuasa atas segala sesuatu. Ya Tuhanku, aku mohon kebaikan malam ini dan kebaikan sesudahnya, dan berlindung kepada-Mu dari keburukan malam ini dan keburukan sesudahnya. Ya Tuhanku, aku berlindung dari kemalasan dan buruknya masa tua, serta siksaan api neraka dan azab kubur."
        },
        fadhilah: "Mengingat kekuasaan Allah, mensyukuri nikmat hari/malam ini, serta berlindung dari kefasikan dan azab kubur. (HR. Muslim)",
    },
    {
        id: 4,
        title: "Dzikir Keteguhan Fitrah Islam",
        target: 1,
        arabic: {
            pagi: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
            sore: "أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ"
        },
        transliteration: {
            pagi: "Asbahna 'ala fitratil-Islam, wa 'ala kalimatil-ikhlas, wa 'ala dini nabiyyina Muhammadin sallallahu 'alayhi wa sallama, wa 'ala millati abina Ibrahima hanifan musliman wa ma kana minal-mushrikin.",
            sore: "Amsayna 'ala fitratil-Islam, wa 'ala kalimatil-ikhlas, wa 'ala dini nabiyyina Muhammadin sallallahu 'alayhi wa sallama, wa 'ala millati abina Ibrahima hanifan musliman wa ma kana minal-mushrikin."
        },
        translation: {
            pagi: "Kami memasuki waktu pagi di atas fitrah Islam, di atas kalimat ikhlas (tauhid), di atas agama Nabi kami Muhammad SAW, dan di atas millah bapak kami Ibrahim yang lurus lagi berserah diri, dan dia bukanlah termasuk golongan orang musyrik.",
            sore: "Kami memasuki waktu sore di atas fitrah Islam, di atas kalimat ikhlas (tauhid), di atas agama Nabi kami Muhammad SAW, dan di atas millah bapak kami Ibrahim yang lurus lagi berserah diri, dan dia bukanlah termasuk golongan orang musyrik."
        },
        fadhilah: "Menjaga komitmen keislaman dan tauhid yang bersih sejak awal hari hingga berganti malam. (HR. Ahmad)",
    },
    {
        id: 5,
        title: "Dzikir Syukur atas Keselamatan",
        target: 1,
        arabic: {
            pagi: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
            sore: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ"
        },
        transliteration: {
            pagi: "Allahumma ma asbaha bi min ni'matin aw bi-ahadin min khalqika fa-minka wahdaka la sharika laka falakal-hamdu wa lakash-shukr.",
            sore: "Allahumma ma amsa bi min ni'matin aw bi-ahadin min khalqika fa-minka wahdaka la sharika laka falakal-hamdu wa lakash-shukr."
        },
        translation: {
            pagi: "Ya Allah, nikmat apa pun yang menyertaiku di waktu pagi ini atau menyertai salah seorang dari makhluk-Mu, maka itu hanya dari-Mu semata, tiada sekutu bagi-Mu. Bagi-Mu lah segala puji dan syukur.",
            sore: "Ya Allah, nikmat apa pun yang menyertaiku di waktu sore ini atau menyertai salah seorang dari makhluk-Mu, maka itu hanya dari-Mu semata, tiada sekutu bagi-Mu. Bagi-Mu lah segala puji dan syukur."
        },
        fadhilah: "Barangsiapa membaca dzikir ini di pagi hari, ia telah menunaikan syukur harinya. Siapa yang membaca di sore hari, ia menunaikan syukur malamnya. (HR. Abu Dawud)",
    },
    {
        id: 6,
        title: "Bismillah Perlindungan Musibah",
        target: 3,
        arabic: {
            pagi: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
            sore: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ"
        },
        transliteration: {
            pagi: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim.",
            sore: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim."
        },
        translation: {
            pagi: "Dengan nama Allah yang bila nama-Nya disebut, segala sesuatu di bumi dan langit tidak akan berbahaya, dan Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.",
            sore: "Dengan nama Allah yang bila nama-Nya disebut, segala sesuatu di bumi dan langit tidak akan berbahaya, dan Dia-lah Yang Maha Mendengar lagi Maha Mengetahui."
        },
        fadhilah: "Membaca doa ini 3x di pagi/sore hari akan menjamin keselamatan dari marabahaya atau musibah yang datang mendadak. (HR. Abu Dawud & Tirmidzi)",
    },
    {
        id: 7,
        title: "Sayyidul Istighfar (Rajanya Istighfar)",
        target: 1,
        arabic: {
            pagi: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
            sore: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ"
        },
        transliteration: {
            pagi: "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bi-ni'matika 'alayya wa abu'u laka bi-dhanbi faghfir li, fa-innahu la yaghfirudh-dhunuba illa anta.",
            sore: "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bi-ni'matika 'alayya wa abu'u laka bi-dhanbi faghfir li, fa-innahu la yaghfirudh-dhunuba illa anta."
        },
        translation: {
            pagi: "Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan yang berhak disembah kecuali Engkau. Engkau yang menciptakanku dan aku adalah hamba-Mu. Aku menetapi perjanjian-Mu dan janji-Mu sesuai dengan kemampuanku. Aku berlindung kepada-Mu dari keburukan perbuatanku. Aku mengakui nikmat-Mu kepadaku dan mengakui dosaku, maka ampunilah aku. Sebab tidak ada yang dapat mengampuni dosa-dosa selain Engkau.",
            sore: "Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan yang berhak disembah kecuali Engkau. Engkau yang menciptakanku dan aku adalah hamba-Mu. Aku menetapi perjanjian-Mu dan janji-Mu sesuai dengan kemampuanku. Aku berlindung kepada-Mu dari keburukan perbuatanku. Aku mengakui nikmat-Mu kepadaku dan mengakui dosaku, maka ampunilah aku. Sebab tidak ada yang dapat mengampuni dosa-dosa selain Engkau."
        },
        fadhilah: "Barangsiapa membacanya di siang hari penuh keyakinan lalu wafat sebelum sore, ia termasuk ahli surga. Begitu pula jika dibaca di malam hari dan wafat sebelum pagi. (HR. Bukhari)",
    },
    {
        id: 8,
        title: "Keridhaan Ibadah & Tauhid",
        target: 3,
        arabic: {
            pagi: "رَضِيتُ بِاللَّهِ رَبَّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
            sore: "رَضِيتُ بِاللَّهِ رَبَّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا"
        },
        transliteration: {
            pagi: "Raditu billahi Rabba, wa bil-Islami dina, wa bi-Muhammadin sallallahu 'alayhi wa sallama nabiyya.",
            sore: "Raditu billahi Rabba, wa bil-Islami dina, wa bi-Muhammadin sallallahu 'alayhi wa sallama nabiyya."
        },
        translation: {
            pagi: "Aku rida Allah sebagai Tuhanku, Islam sebagai agamaku, dan Muhammad SAW sebagai Nabiku.",
            sore: "Aku rida Allah sebagai Tuhanku, Islam sebagai agamaku, dan Muhammad SAW sebagai Nabiku."
        },
        fadhilah: "Barangsiapa membaca doa ini tiga kali di pagi dan sore hari, maka Allah berhak untuk meridhai orang tersebut pada hari Kiamat. (HR. Abu Dawud & Tirmidzi)",
    },
    {
        id: 9,
        title: "Hasbiyallah Penolak Kesusahan",
        target: 7,
        arabic: {
            pagi: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
            sore: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ"
        },
        transliteration: {
            pagi: "Hasbiyallahu la ilaha illa huwa, 'alayhi tawakkaltu, wa huwa Rabbul-'arshil-'adhim.",
            sore: "Hasbiyallahu la ilaha illa huwa, 'alayhi tawakkaltu, wa huwa Rabbul-'arshil-'adhim."
        },
        translation: {
            pagi: "Cukuplah Allah bagiku; tidak ada Tuhan selain Dia. Hanya kepada-Nya aku bertawakal, dan Dia adalah Tuhan pemilik 'Arsy yang agung.",
            sore: "Cukuplah Allah bagiku; tidak ada Tuhan selain Dia. Hanya kepada-Nya aku bertawakal, dan Dia adalah Tuhan pemilik 'Arsy yang agung."
        },
        fadhilah: "Barangsiapa membacanya 7x di pagi/sore hari, Allah akan mencukupkan baginya urusan dunia dan akhirat yang menyusahkannya. (HR. Ibnu Asakir)",
    },
    {
        id: 10,
        title: "Tasbih & Tahmid (Pembersih Dosa)",
        target: 100,
        arabic: {
            pagi: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
            sore: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ"
        },
        transliteration: {
            pagi: "Subhanallahi wa bi-hamdih.",
            sore: "Subhanallahi wa bi-hamdih."
        },
        translation: {
            pagi: "Maha Suci Allah dengan segala puji bagi-Nya.",
            sore: "Maha Suci Allah dengan segala puji bagi-Nya."
        },
        fadhilah: "Membaca kalimat ini 100x setiap hari akan menghapuskan seluruh dosa pembacanya meskipun sebanyak buih di lautan. (HR. Bukhari & Muslim)",
    }
];

/* ==========================================================================
   APP STATE MANAGEMENT
   ========================================================================== */
const state = {
    mode: 'pagi', // 'pagi' | 'sore'
    searchQuery: '',
    soundEnabled: JSON.parse(localStorage.getItem('matsurat_sound')) ?? true,
    focusMode: false,
    focusIndex: 0,
    // Counters storage structure: { pagi: { id_1: 0, id_2: 0 }, sore: { id_1: 0 } }
    counters: JSON.parse(localStorage.getItem('matsurat_counters')) || { pagi: {}, sore: {} }
};

/* ==========================================================================
   WEB AUDIO API SYNTHESIZER
   ========================================================================== */
let audioCtx = null;

function playAudioTick(type = 'tick') {
    if (!state.soundEnabled) return;
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'tick') {
            // High woodblock tick
            osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.04);
            gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.05);
        } else if (type === 'chime') {
            // Double metallic chime
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(987.77, audioCtx.currentTime); // B5
            osc.frequency.setValueAtTime(1318.51, audioCtx.currentTime + 0.06); // E6
            gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.5);
        }
    } catch (e) {
        console.warn("AudioContext interaction required: ", e);
    }
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Determine automatic time of day (04:00 - 15:00 = Morning, otherwise Evening)
    const hour = new Date().getHours();
    if (hour >= 15 || hour < 4) {
        state.mode = 'sore';
        document.getElementById('tab-pagi').classList.remove('active');
        document.getElementById('tab-sore').classList.add('active');
    }
    
    // Set headers
    updateHeaderTime();
    
    // Setup event handlers
    initEventListeners();
    
    // Set Theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Set Sound icon status
    updateSoundIcon();

    // Render list
    renderDzikirList();
    updateProgress();
    
    lucide.createIcons();
});

function updateHeaderTime() {
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const label = state.mode === 'pagi' ? 'Pagi Hari' : 'Sore Hari';
    document.getElementById('header-time-lbl').innerText = `Dzikir ${label} • ${today.toLocaleDateString('id-ID', options)}`;
}

function initEventListeners() {
    // Mode switcher buttons
    document.getElementById('tab-pagi').addEventListener('click', () => switchMode('pagi'));
    document.getElementById('tab-sore').addEventListener('click', () => switchMode('sore'));

    // Sound toggle
    document.getElementById('sound-toggle').addEventListener('click', toggleSound);

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Search bar
    document.getElementById('dzikir-search').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderDzikirList();
    });

    // Reset button
    document.getElementById('btn-reset-all').addEventListener('click', resetAllCounters);

    // Focus mode controls
    document.getElementById('btn-focus-mode').addEventListener('click', openFocusMode);
    document.getElementById('btn-close-focus').addEventListener('click', closeFocusMode);
    document.getElementById('slider-prev').addEventListener('click', prevFocusCard);
    document.getElementById('slider-next').addEventListener('click', nextFocusCard);
    document.getElementById('focus-tap-area').addEventListener('click', tapFocusArea);
    
    // Keyboard navigation in focus mode
    document.addEventListener('keydown', (e) => {
        if (!state.focusMode) return;
        if (e.code === 'Space') {
            e.preventDefault();
            tapFocusArea();
        } else if (e.code === 'ArrowLeft') {
            prevFocusCard();
        } else if (e.code === 'ArrowRight') {
            nextFocusCard();
        } else if (e.code === 'Escape') {
            closeFocusMode();
        }
    });
}

/* ==========================================================================
   MODE AND THEME CHANGING
   ========================================================================== */
function switchMode(newMode) {
    state.mode = newMode;
    document.getElementById('tab-pagi').classList.toggle('active', newMode === 'pagi');
    document.getElementById('tab-sore').classList.toggle('active', newMode === 'sore');
    
    // Update headers and lists
    updateHeaderTime();
    renderDzikirList();
    updateProgress();
    
    showToast(`Beralih ke Dzikir ${newMode === 'pagi' ? 'Pagi' : 'Sore'}.`, newMode === 'pagi' ? 'sunrise' : 'sunset');
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

function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem('matsurat_sound', JSON.stringify(state.soundEnabled));
    updateSoundIcon();
    showToast(`Suara ketukan ${state.soundEnabled ? 'diaktifkan' : 'dimatikan'}.`, state.soundEnabled ? 'volume-2' : 'volume-x');
}

function updateSoundIcon() {
    const icon = document.getElementById('sound-icon');
    icon.setAttribute('data-lucide', state.soundEnabled ? 'volume-2' : 'volume-x');
    lucide.createIcons();
}

/* ==========================================================================
   DZIKIR LIST RENDERING & TAP EVENTS
   ========================================================================== */
function renderDzikirList() {
    const container = document.getElementById('dzikir-list-container');
    container.innerHTML = '';

    const filtered = dzikirDb.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(state.searchQuery.toLowerCase());
        const translitMatch = item.transliteration[state.mode].toLowerCase().includes(state.searchQuery.toLowerCase());
        const translationMatch = item.translation[state.mode].toLowerCase().includes(state.searchQuery.toLowerCase());
        return titleMatch || translitMatch || translationMatch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i data-lucide="search"></i>
                <h3>Hasil tidak ditemukan</h3>
                <p>Tidak ada doa atau dzikir yang cocok dengan kata kunci "${state.searchQuery}".</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filtered.forEach(item => {
        const count = state.counters[state.mode][item.id] || 0;
        const isCompleted = count >= item.target;
        
        const card = document.createElement('div');
        card.className = `dzikir-card ${isCompleted ? 'completed' : ''}`;
        
        card.innerHTML = `
            <div class="card-header-bar">
                <div class="card-title-badge-row">
                    <h3>${item.title}</h3>
                    <span class="read-badge">${item.target}x</span>
                </div>
                <div class="card-top-actions">
                    <button class="icon-action-btn" title="Dengarkan Pembacaan" onclick="readDua(${item.id})">
                        <i data-lucide="volume-2"></i>
                    </button>
                    <button class="icon-action-btn" title="Salin Teks" onclick="copyDzikirText(${item.id})">
                        <i data-lucide="copy"></i>
                    </button>
                </div>
            </div>
            
            <div class="arabic-wrapper">
                <p class="arabic-text">${item.arabic[state.mode]}</p>
            </div>
            
            <p class="transliteration">${item.transliteration[state.mode]}</p>
            <p class="translation">"${item.translation[state.mode]}"</p>
            
            <div class="fadhilah-panel">
                <h4>Fadhilah Keutamaan</h4>
                <p>${item.fadhilah}</p>
            </div>
            
            <div class="card-counter-row">
                <span class="counter-label-text">Perkembangan: <span id="label-count-${item.id}">${count}</span> / ${item.target}</span>
                <button class="counter-interactive-btn ${isCompleted ? 'done' : ''}" id="btn-count-${item.id}" onclick="tapDzikir(${item.id})">
                    <i data-lucide="${isCompleted ? 'check-circle' : 'plus'}"></i>
                    <span id="btn-text-${item.id}">${isCompleted ? 'Selesai' : 'Ketuk'}</span>
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    lucide.createIcons();
}

function tapDzikir(id) {
    const item = dzikirDb.find(d => d.id === id);
    if (!item) return;

    let current = state.counters[state.mode][id] || 0;
    if (current < item.target) {
        current++;
        state.counters[state.mode][id] = current;
        saveCounters();
        
        // Audio tick or chime
        if (current === item.target) {
            playAudioTick('chime');
            showToast(`Dzikir "${item.title}" selesai dibaca!`, "check-circle");
        } else {
            playAudioTick('tick');
        }

        // Update list card UI
        document.getElementById(`label-count-${id}`).innerText = current;
        if (current >= item.target) {
            const btn = document.getElementById(`btn-count-${id}`);
            btn.classList.add('done');
            btn.innerHTML = `<i data-lucide="check-circle"></i><span>Selesai</span>`;
            btn.closest('.dzikir-card').classList.add('completed');
            lucide.createIcons();
        }

        updateProgress();
    }
}

function resetAllCounters() {
    if (confirm("Apakah Anda yakin ingin me-reset seluruh hitungan dzikir untuk sesi ini?")) {
        state.counters[state.mode] = {};
        saveCounters();
        renderDzikirList();
        updateProgress();
        showToast("Seluruh hitungan dzikir di-reset.", "rotate-ccw");
    }
}

function saveCounters() {
    localStorage.setItem('matsurat_counters', JSON.stringify(state.counters));
}

function updateProgress() {
    const total = dzikirDb.length;
    let completed = 0;
    
    dzikirDb.forEach(item => {
        const count = state.counters[state.mode][item.id] || 0;
        if (count >= item.target) completed++;
    });

    const pct = Math.round((completed / total) * 100);
    
    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-text');
    
    if (fill) fill.style.width = `${pct}%`;
    if (text) text.innerText = `${completed} / ${total} Selesai (${pct}%)`;
}

/* ==========================================================================
   FOCUS / FOCUS CARD SLIDER MODE
   ========================================================================== */
function openFocusMode() {
    state.focusMode = true;
    state.focusIndex = 0;
    
    const screen = document.getElementById('focus-overlay-screen');
    screen.classList.remove('hidden');
    
    // Add layout modifiers
    const badge = document.getElementById('focus-mode-badge');
    badge.closest('.focus-brand').classList.toggle('sore-mode', state.mode === 'sore');
    badge.innerText = state.mode === 'pagi' ? 'Dzikir Pagi' : 'Dzikir Sore';

    renderFocusCard();
    lucide.createIcons();
}

function closeFocusMode() {
    state.focusMode = false;
    document.getElementById('focus-overlay-screen').classList.add('hidden');
    renderDzikirList(); // Refresh normal list screen
}

function renderFocusCard() {
    const container = document.getElementById('focus-card-content');
    container.innerHTML = '';
    
    const item = dzikirDb[state.focusIndex];
    if (!item) return;

    // Progress
    document.getElementById('focus-progress-badge').innerText = `${state.focusIndex + 1} / ${dzikirDb.length}`;

    // Load body content
    container.innerHTML = `
        <h3>${item.title}</h3>
        <p class="arabic-text">${item.arabic[state.mode]}</p>
        <p class="transliteration">${item.transliteration[state.mode]}</p>
        <p class="translation">"${item.translation[state.mode]}"</p>
    `;

    // Reset circle and tap display
    const count = state.counters[state.mode][item.id] || 0;
    const isCompleted = count >= item.target;
    
    const tapCircle = document.getElementById('focus-tap-circle');
    const countTxt = document.getElementById('focus-tap-count');
    const targetTxt = document.getElementById('focus-tap-target');

    countTxt.innerText = count;
    targetTxt.innerText = `Target: ${item.target}x`;

    tapCircle.className = `tap-circle ${isCompleted ? 'done' : ''}`;
    tapCircle.querySelector('.tap-label').innerText = isCompleted ? 'SELESAI' : 'KETUK DI SINI';
}

function tapFocusArea() {
    const item = dzikirDb[state.focusIndex];
    if (!item) return;

    let current = state.counters[state.mode][item.id] || 0;
    
    if (current < item.target) {
        current++;
        state.counters[state.mode][item.id] = current;
        saveCounters();

        if (current === item.target) {
            playAudioTick('chime');
            showToast(`Dzikir "${item.title}" selesai!`, "check-circle");
        } else {
            playAudioTick('tick');
        }

        renderFocusCard();
        updateProgress();
    }
}

function prevFocusCard() {
    if (state.focusIndex > 0) {
        state.focusIndex--;
        renderFocusCard();
    } else {
        showToast("Ini adalah dzikir pertama.", "info");
    }
}

function nextFocusCard() {
    if (state.focusIndex < dzikirDb.length - 1) {
        state.focusIndex++;
        renderFocusCard();
    } else {
        showToast("Anda sudah berada di akhir sesi dzikir.", "award");
    }
}

/* ==========================================================================
   TEXT TO SPEECH (TTS) & SHARING
   ========================================================================== */
let speechUtterance = null;

function readDua(id) {
    const item = dzikirDb.find(d => d.id === id);
    if (!item) return;

    if ('speechSynthesis' in window) {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            showToast("Pembacaan suara dihentikan.", "volume-x");
            return;
        }

        const readingText = `${item.title}. Terjemahan: ${item.translation[state.mode]}`;
        speechUtterance = new SpeechSynthesisUtterance(readingText);
        speechUtterance.lang = 'id-ID';
        speechUtterance.rate = 0.95;

        window.speechSynthesis.speak(speechUtterance);
        showToast("Membaca terjemah...", "volume-2");
    } else {
        showToast("Fitur suara tidak didukung browser.", "volume-x");
    }
}

function copyDzikirText(id) {
    const item = dzikirDb.find(d => d.id === id);
    if (!item) return;

    const shareTxt = `✨ *Dzikir ${state.mode === 'pagi' ? 'Pagi' : 'Sore'} Al-Ma'tsurat: ${item.title}* (${item.target}x)\n\n"${item.arabic[state.mode]}"\n\n_Artinya: "${item.translation[state.mode]}"_\n\n*Keutamaan:* ${item.fadhilah}\n\n_Aplikasi Al-Ma'tsurat Interaktif_`;

    navigator.clipboard.writeText(shareTxt).then(() => {
        showToast("Teks dzikir disalin!", "copy");
    }).catch(err => {
        console.error("Gagal menyalin: ", err);
    });
}

/* ==========================================================================
   TOAST SYSTEM
   ========================================================================== */
function showToast(message, iconName = 'info') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    const toastIcon = document.getElementById('toast-icon');

    toastMsg.innerText = message;
    toastIcon.setAttribute('data-lucide', iconName);
    lucide.createIcons();

    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2800);
}
