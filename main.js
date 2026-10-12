/* ==========================================================================
   HESHAM MALIK — SOVEREIGN MONOGRAPHIC PORTAL
   Flagship Interactive Engine (main.js)
   ========================================================================== */

// --- 1. MOMBASA ESSAY TOGGLE ---
function toggleMombasaEssay() {
    const essay = document.getElementById('mombasa-essay');
    const icon = document.getElementById('mombasa-toggle-icon');
    if (!essay || !icon) return;

    if (essay.style.display === 'none' || essay.style.display === '') {
        essay.style.display = 'block';
        icon.innerHTML = '&#8722;'; // Minus sign
    } else {
        essay.style.display = 'none';
        icon.innerHTML = '+';
    }
}

// --- 2. GLOBAL FOOTPRINT MAP DATA REPOSITORY ---
const mapCityData = {
    harvard: {
        city: "USA &bull; HARVARD UNIVERSITY &amp; CAMBRIDGE, MA",
        shows: `&bull; <b>Harvard International Arts + Mind Lab:</b> <i>JOY</i><br>
&bull; <b>Harvard Dept. of Molecular Biology:</b> <i>COGNITION</i><br>
&bull; <b>Harvard Dept. of East Asian Languages:</b> <i>INEPTITUDE</i><br>
&bull; <b>Harvard Faculty of Arts &amp; Sciences:</b> <i>GENOCIDE AND TRANSNATIONAL REPRESSION</i> | <i>RUPTURE</i><br>
&bull; <b>Harvard Weatherhead Center:</b> <i>DISRUPTION</i> | <i>CAFUNÉ</i><br>
&bull; <b>Harvard Office of the President Emeritus:</b> <i>DECENCY</i><br>
&bull; <b>Harvard Dept. of Anthropology:</b> <i>GRIEF</i> | <i>NOWHERESVILLE</i><br>
&bull; <b>Harvard Dept. of Psychology:</b> <i>ENLIGHTENMENT</i> | <i>RIGAMAROLE</i><br>
&bull; <b>Harvard Graduate School of Design:</b> <i>XENOPHILIA</i> | <i>SERENDIPITY</i> | <i>LUMINOUS</i> | <i>CARE</i> | <i>DESPONDENT</i> | <i>SUPERPOSITION</i> | <i>RESTORATION</i> | <i>SERENITY (שלווה)</i><br>
&bull; <b>Harvard Medical School / Mass General &amp; Boston Children's:</b> <i>SPICE/SPICES</i> | <i>CONCERNED</i><br>
&bull; <b>Harvard NeuroBusiness Group:</b> <i>SATCHITANANDA</i><br>
&bull; <b>Harvard T.H. Chan School of Public Health:</b> <i>TOGETHER</i><br>
&bull; <b>Harvard Forest:</b> <i>UNSURE</i> | <i>HOPE</i><br>
&bull; <b>Harvard Divinity School &amp; Law School:</b> <i>COMPLEXITY</i> | <i>DILEMMA</i><br>
&bull; <b>Harvard Dept. of Philosophy &amp; AFVS:</b> <i>PRAISEWORTHINESS</i> | <i>THINK</i> | <i>GRAFT</i><br>
&bull; <b>Harvard Gender &amp; Sexuality Caucus:</b> <i>LOVE</i><br>
&bull; <b>Harvard Dept. of History, Art &amp; Architecture:</b> <i>SYMBIONTS</i><br>
&bull; <b>Harvard Graduate School of Education:</b> <i>METAMORPHOSIS</i> | <i>BETTER</i> | <i>PERSISTING</i> | <i>BĪ-GHARĀRĪ (بی‌قراری)</i><br>
&bull; <b>Harvard Democratic Knowledge Project &amp; Wiener Center:</b> <i>RENOVATE</i> | <i>PURPOSE</i><br>
&bull; <b>Harvard College (Dean's Office):</b> <i>AMALGAMATION</i>`
    },
    usa_east: {
        city: "USA &bull; EAST COAST INSTITUTIONS",
        shows: `&bull; <b>UNICEF (New York):</b> Ecological Material Patrons<br>
&bull; <b>New York Public Library (New York):</b> Ecological Material Patrons<br>
&bull; <b>Elmira College (New York):</b> Ecological Material Patrons<br>
&bull; <b>Suffolk University Gallery (Boston, MA):</b> Ecological Material Patrons<br>
&bull; <b>Bethany House (Baldwin, NY):</b> <i>EMPATHY</i><br>
&bull; <b>National Art Education Association (Virginia):</b> <i>GRATIFIED</i><br>
&bull; <b>Artists at Risk Connection - ARC (New York):</b> <i>RESILIENCE</i><br>
&bull; <b>National Public Radio - NPR (Washington, D.C.):</b> <i>TURMOIL</i><br>
&bull; <b>Jane Goodall Institute (Washington, D.C.):</b> <i>HOPE</i><br>
&bull; <b>Princeton Hillel &amp; Princeton University (NJ):</b> <i>FLOURISHING</i> | <i>ALIVE</i> | <i>COOPERATION</i><br>
&bull; <b>Yale University (New Haven, CT):</b> <i>LIMINAL</i> | <i>RESPECT</i> | <i>AIR</i> | <i>JUSTICE</i> | <i>BELOVED</i> | <i>Persian Poetic Line</i><br>
&bull; <b>Columbia University (New York):</b> <i>RACHMONES (רחמנות)</i> | <i>ADAB</i> | <i>COMPASSION</i><br>
&bull; <b>MIT (Cambridge, MA):</b> <i>HOPE</i> | <i>INTEGRITY</i><br>
&bull; <b>Brown University (Providence, RI):</b> <i>TROTZDEM</i> | <i>SQUEEZE</i><br>
&bull; <b>NYU &amp; Jewish Theological Seminary (NY):</b> <i>PRESENCE</i> | <i>DIALECTICAL</i> | <i>LOVE</i> | <i>RESPONSIBILITY</i><br>
&bull; <b>Cornell University (Ithaca, NY):</b> <i>WITNESS</i> | <i>MIND</i><br>
&bull; <b>Johns Hopkins University (Baltimore, MD):</b> <i>REGENERATION</i><br>
&bull; <b>Georgetown &amp; George Washington University (D.C.):</b> <i>ALMOST</i> | <i>ASTONISHMENT</i>`
    },
    usa_west: {
        city: "USA &bull; WEST COAST &amp; PACIFIC INSTITUTIONS",
        shows: `&bull; <b>Urgent Action Fund (San Francisco, CA):</b> <i>LIBERATION</i><br>
&bull; <b>Skirball Cultural Center &amp; Sinai Temple (Los Angeles, CA):</b> <i>PROPINQUITY</i> | <i>HINENI</i><br>
&bull; <b>Institute for Art and Olfaction (Los Angeles, CA):</b> <i>SENSUAL</i><br>
&bull; <b>UC Berkeley &amp; Magnes Collection (Berkeley, CA):</b> <i>MISHPOKHE (משפחה)</i> | <i>HUMBLE</i><br>
&bull; <b>UC Davis (Davis, CA):</b> <i>JAN (جان / Ջان)</i><br>
&bull; <b>UC Irvine (Irvine, CA):</b> <i>COURAGE</i> | <i>Persian Cultural Expression</i> | <i>PEYVAND / ARMENI</i><br>
&bull; <b>UC San Diego (La Jolla, CA):</b> <i>DISTURBANCE</i><br>
&bull; <b>Altman Siegel Gallery (San Francisco, CA):</b> <i>SIGNS</i><br>
&bull; <b>Stanford University (Stanford, CA):</b> <i>LIMPID</i><br>
&bull; <b>University of Washington (Seattle, WA):</b> <i>ARINARTUQ</i> | <i>BURGEONING</i> | <i>FATHOM</i> | <i>HOMEWATERS</i> | <i>IMAGINE</i><br>
&bull; <b>Reed College &amp; Willamette University (Oregon):</b> <i>COURAGE</i> | <i>COUNTER-GENOCIDAL</i><br>
&bull; <b>University of Hawaii at Manoa &amp; Kauai Hindu Monastery (Hawaii):</b> <i>SPENT</i> | <i>ZÀO (造)</i> | <i>HOT</i> | <i>ENSTASY</i> | <i>ALOHA</i><br>
&bull; <b>University of Alaska Anchorage (Alaska):</b> <i>TREPIDATION</i>`
    },
    usa_midwest_south: {
        city: "USA &bull; MIDWEST, SOUTH &amp; MOUNTAIN INSTITUTIONS",
        shows: `&bull; <b>Eco-Cycle (Denver, CO):</b> Ecological Material Patrons<br>
&bull; <b>Georgia Tech (Atlanta, GA) &amp; FGCU (Florida):</b> Ecological Material Patrons<br>
&bull; <b>Victory Afghanistan (Illinois):</b> <i>RESONANCE</i><br>
&bull; <b>The Phoenix (Colorado):</b> <i>UNSUBSCRIBE</i><br>
&bull; <b>Equal Justice Initiative (Montgomery, AL):</b> <i>GRACE</i><br>
&bull; <b>Hillel at Florida State University (Tallahassee, FL):</b> <i>BLESSING</i><br>
&bull; <b>West Texas A&amp;M University &amp; Keiko Davidson School (Texas):</b> <i>SUCCESS</i> | <i>CHEESE</i><br>
&bull; <b>University of Texas at Austin (Texas):</b> <i>SEKANJEBIN</i> | <i>Persian Instruction Line</i><br>
&bull; <b>University of Chicago &amp; Northwestern University (Illinois):</b> <i>WAR-WEARY</i> | <i>AND</i> | <i>BIODIVERSITY</i><br>
&bull; <b>Arizona State University (Tempe, AZ):</b> <i>RENEWAL / MASHKIKI</i> | <i>GRATITUDE</i> | <i>SCALABLE</i><br>
&bull; <b>Boise State University &amp; Idaho State (Idaho):</b> <i>PRECARIOUS</i> | <i>SHADOWS</i> | <i>PERSEVERANCE</i> | <i>PENDING</i> | <i>INCREDULITY</i><br>
&bull; <b>Indiana University Bloomington (Indiana):</b> <i>SOMNAMBULISTIC</i> | <i>ABRACADABRA</i><br>
&bull; <b>University of Utah &amp; Southern Utah University (Utah):</b> <i>MEANING</i> | <i>INSTABILITY</i> | <i>FREEDOM</i><br>
&bull; <b>University of Colorado Boulder (Colorado):</b> <i>ARTNAUTS</i>`
    },
    it_bologna_florence: {
        city: "ITALY &bull; BOLOGNA &amp; FLORENCE",
        shows: `&bull; <b>University of Bologna:</b> Dip. di Filosofia &mdash; <i>RESONANCE</i><br>
&bull; <b>European University Institute (Florence):</b> Academic Directorate &mdash; <i>SOLIDARITY</i>`
    },
    fr_paris_guadeloupe: {
        city: "FRANCE &bull; PARIS &amp; GUADELOUPE",
        shows: `&bull; <b>Arts au Pluriailes (Guadeloupe):</b> Curatorial Directorate &mdash; <i>SERENDIPITY</i><br>
&bull; <b>IDDRI (Paris):</b> Institute for Sustainable Development &mdash; <i>HUMAN(E)</i>`
    },
    ps_gaza_jenin: {
        city: "PALESTINE &bull; GAZA &amp; JENIN",
        shows: `&bull; <b>Culture and Free Thought Association (Gaza):</b> Executive Directorate &mdash; <i>صَبابة (LONGING &amp; BELONGING)</i><br>
&bull; <b>The Freedom Theatre (Jenin Camp):</b> Cultural Directorate &mdash; <i>SUMUD</i>`
    },
    is_reykjavik: {
        city: "ICELAND &bull; REYKJAVÍK",
        shows: `&bull; <b>University of Iceland (Anthropology):</b> Academic Directorate &mdash; <i>ÓÞOL (INTOLERANCE)</i><br>
&bull; <b>University of Iceland (Cultural Studies):</b> Academic Directorate &mdash; <i>BLESSUN</i>`
    },
    th_bangkok: {
        city: "THAILAND &bull; BANGKOK",
        shows: `&bull; <b>Chulalongkorn University:</b> Faculty of Fine &amp; Applied Arts &mdash; <i>ABUSIVE</i>`
    },
    fj_suva: {
        city: "FIJI &bull; SUVA",
        shows: `&bull; <b>University of the South Pacific:</b> Academic Directorate &mdash; <i>QUIRK</i>`
    },
    gy_georgetown: {
        city: "GUYANA &bull; GEORGETOWN",
        shows: `&bull; <b>University of Guyana:</b> Dept. of Language &amp; Cultural Studies &mdash; <i>QUIETUDE</i>`
    },
    jo_amman: {
        city: "JORDAN &bull; AMMAN",
        shows: `&bull; <b>The University of Jordan (Design &amp; Visual Communication):</b> <i>BLESSING (البركة)</i><br>
&bull; <b>The University of Jordan (Dept. of Music):</b> <i>UNCERTAINTY</i>`
    },
    mu_mauritius: {
        city: "MAURITIUS &bull; REDUIT",
        shows: `&bull; <b>University of Mauritius:</b> Vice-Chancellor Directorate &mdash; <i>EMPATHY</i>`
    },
    om_muscat: {
        city: "OMAN &bull; MUSCAT",
        shows: `&bull; <b>Sultan Qaboos University (Art Education):</b> <i>ALLAH</i><br>
&bull; <b>Sultan Qaboos University (Post-Graduate Studies):</b> <i>BECOMING</i>`
    },
    ph_quezon: {
        city: "PHILIPPINES &bull; QUEZON CITY",
        shows: `&bull; <b>University of the Philippines Diliman:</b> College of Fine Arts &mdash; <i>KAPWA</i>`
    },
    ar_buenosaires: {
        city: "ARGENTINA &bull; BUENOS AIRES",
        shows: `&bull; <b>UNTREF (Centre for Genocide Studies):</b> Directorate &mdash; <i>KHURBN</i>`
    },
    brussels: {
        city: "BELGIUM &bull; BRUSSELS &amp; LEUVEN",
        shows: `&bull; <b>Brussels Expo:</b> Europe’s Creative Industries &mdash; <i>Life of a Box Exhibition</i><br>
&bull; <b>KU Leuven:</b> Division Forest, Nature &amp; Landscape &mdash; <i>BUFFERWORLD</i><br>
&bull; <b>Vrije Universiteit Brussel:</b> Dept. of Art History &amp; Archaeology &mdash; <i>GRATITUDE</i>`
    },
    poland: {
        city: "POLAND &bull; DUSZNIKI-ZDRÓJ, POZNAŃ, WARSAW &amp; KRAKOW",
        shows: `&bull; <b>Museum of Papermaking (Duszniki-Zdrój):</b> First Public Exhibit &mdash; <i>Life of a Box</i><br>
&bull; <b>Magdalena Abakanowicz University of Arts (Poznań):</b> <i>NEON GREEN</i><br>
&bull; <b>University of Warsaw:</b> Institute of the Americas &amp; Europe &mdash; <i>BREEZE</i><br>
&bull; <b>Jan Matejko Academy of Fine Arts (Krakow):</b> <i>HAPAX</i>`
    },
    si_ljubljana_koper: {
        city: "SLOVENIA &bull; LJUBLJANA &amp; KOPER",
        shows: `&bull; <b>University of Ljubljana:</b> Dept. of Art History &mdash; <i>SHAKING</i><br>
&bull; <b>University of Primorska (Koper):</b> Faculty of Humanities &mdash; <i>INDECISION</i>`
    },
    nz_auckland: {
        city: "NEW ZEALAND &bull; AUCKLAND",
        shows: `&bull; <b>University of Auckland (Social Anthropology):</b> <i>MOŽNOST (POSSIBILITY)</i><br>
&bull; <b>University of Auckland (Te Wānanga o Waipapa):</b> <i>MATEMATEĀONE</i>`
    },
    hr_zagreb: {
        city: "CROATIA &bull; ZAGREB",
        shows: `&bull; <b>University of Zagreb:</b> Academy of Fine Arts &mdash; <i>DECEIVED</i>`
    },
    athens: {
        city: "GREECE &bull; ATHENS",
        shows: `&bull; <b>Athens School of Fine Arts:</b> Dept. of Theory &amp; History of Art &mdash; <i>OBLIVION</i>`
    },
    pt_lisbon: {
        city: "LISBON &bull; PORTUGAL",
        shows: `&bull; <b>On the Move Directorate:</b> Cultural Mobility Archive &mdash; <i>SAUDADE</i><br>
&bull; <b>Casa Oxente:</b> Curatorial Directorate &mdash; <i>MEMÓRIA</i>`
    },
    ua_kyiv: {
        city: "KYIV &bull; UKRAINE",
        shows: `&bull; <b>National Museum of the History of Ukraine:</b> Ecological Material Patron<br>
&bull; <b>Cultprojector NGO:</b> Executive Directorate &mdash; <i>VICTORY</i>`
    },
    sk_sered_bratislava: {
        city: "SEREĎ &amp; BRATISLAVA &bull; SLOVAKIA",
        shows: `&bull; <b>Slovak National Museum (Sereď):</b> Institutional Partner &mdash; <i>MEMORY</i><br>
&bull; <b>Slovak National Gallery (Bratislava):</b> Curatorial Directorate &mdash; <i>BELIEF</i> | <i>CHŌRA</i>`
    },
    ru_volgograd: {
        city: "VOLGOGRAD &bull; RUSSIA",
        shows: `&bull; <b>Volgograd State University:</b> Academic Directorate &mdash; <i>LIBRARY</i>`
    },
    ee_tartu_tallinn: {
        city: "TARTU &amp; TALLINN &bull; ESTONIA",
        shows: `&bull; <b>University of Tartu:</b> UNESCO Chair &mdash; <i>CRISOGENIC</i><br>
&bull; <b>Estonian National Museum:</b> Research Directorate &mdash; <i>SHIP</i><br>
&bull; <b>Pop and Contemporary Art Museum:</b> Founding Directorate &mdash; <i>UNAVAILABLE</i>`
    },
    li_vaduz: {
        city: "VADUZ &bull; LIECHTENSTEIN",
        shows: `&bull; <b>The Princely Collections:</b> Art History Library &mdash; <i>INGENUITY</i>`
    },
    hu_budapest: {
        city: "BUDAPEST &bull; HUNGARY",
        shows: `&bull; <b>Ludwig Museum:</b> Museum Directorate &mdash; <i>COMPULSORY</i> | <i>COMPLIANCE</i><br>
&bull; <b>CEU Romani Studies Program:</b> <i>REPAIR</i>`
    },
    ae_abudhabi_dubai: {
        city: "ABU DHABI &amp; DUBAI &bull; UAE",
        shows: `&bull; <b>The Arts Center at NYU Abu Dhabi:</b> <i>RECONCILIATION</i><br>
&bull; <b>American University in Dubai:</b> <i>YOU</i><br>
&bull; <b>Abu Dhabi University:</b> <i>INTERDEPENDENCE</i>`
    },
    cn_shenzhen_hk: {
        city: "SHENZHEN &amp; HONG KONG &bull; CHINA",
        shows: `&bull; <b>CUHK Art Museum:</b> Museum Directorate &mdash; <i>ZEN</i><br>
&bull; <b>CUHK Academic Directorate:</b> <i>BREATH</i>`
    },
    lt_vilnius: {
        city: "VILNIUS &bull; LITHUANIA",
        shows: `&bull; <b>National Museum of Lithuania:</b> Executive Directorate &mdash; <i>RESILIENCE</i><br>
&bull; <b>Vilnius Academy of Arts:</b> Exhibition Halls "Titanikas" &mdash; <i>FEELING</i>`
    },
    kg_bishkek: {
        city: "BISHKEK &bull; KYRGYZSTAN",
        shows: `&bull; <b>American University of Central Asia:</b> Academic Directorate &mdash; <i>RESILIENCE</i>`
    },
    me_ljesevici: {
        city: "LJEŠEVIĆI &bull; MONTENEGRO",
        shows: `&bull; <b>ORATIO:</b> Executive Directorate &mdash; <i>GRATEFUL</i>`
    },
    cy_nicosia: {
        city: "NICOSIA &bull; CYPRUS",
        shows: `&bull; <b>Ministry of Culture:</b> Cultural Directorate &mdash; <i>VISION</i>`
    },
    co_bogota: {
        city: "BOGOTÁ &bull; COLOMBIA",
        shows: `&bull; <b>Universidad de los Andes:</b> Academic Directorate &mdash; <i>EGO</i>`
    },
    vn_hanoi: {
        city: "HANOI &bull; VIETNAM",
        shows: `&bull; <b>Blue Dragon Children's Foundation:</b> <i>JOY</i> | <i>PEACEFUL</i> | <i>ADRIFT</i> | <i>TOGETHERNESS</i>`
    },
    svalbard: {
        city: "SVALBARD &amp; SPITSBERGEN &bull; NORWAY",
        shows: `&bull; <b>Svalbard Global Seed Vault:</b> <i>PHOTOSYNTHESIS</i>`
    },
    no_oslo: {
        city: "OSLO &bull; NORWAY",
        shows: `&bull; <b>Innovation Norway:</b> Editorial Directorate &mdash; <i>WELTSCHMERTZ</i>`
    },
    cr_sanjose: {
        city: "SAN JOSÉ &bull; COSTA RICA",
        shows: `&bull; <b>Fundación ARS TEOR/éTica:</b> Curatorial Directorate &mdash; <i>INTERDEPENDENCIA</i>`
    },
    vu_vanuatu: {
        city: "PORT-VILA &bull; VANUATU",
        shows: `&bull; <b>Vanuatu Cultural Centre (VKS):</b> Executive Directorate &mdash; <i>LOVE</i>`
    },
    sy_damascus: {
        city: "DAMASCUS &bull; SYRIA",
        shows: `&bull; <b>Cultural Heritage Archive Node:</b> <i>DIGNITY</i>`
    },
    fi_helsinki: {
        city: "HELSINKI &bull; FINLAND",
        shows: `&bull; <b>University of Helsinki:</b> <i>LOCATION</i> | <i>MUSCLE</i> | <i>ADMIRATION</i> | <i>FRUSTRATION</i>`
    },
    fi_oulu: {
        city: "OULU &bull; CAPITAL OF CULTURE 2026",
        shows: `&bull; <b>Retrospective &amp; Galleria MABD:</b> <i>KINDNESS</i>`
    },
    gl_nuuk: {
        city: "NUUK &bull; GREENLAND",
        shows: `&bull; <b>Bishop Office &amp; National Museum:</b> <i>AKAAREQATIGIINNEQ</i> | <i>SILA</i>`
    },
    gl_ilulissat: {
        city: "ILULISSAT &bull; GREENLAND",
        shows: `&bull; <b>Mayor Office, Avannaata:</b> <i>Uagut nunarput</i>`
    },
    uk_london: {
        city: "LONDON &bull; UK",
        shows: `&bull; <b>Tate, Courtauld, UCL, SOAS, LSE:</b> Institutional Provenance Partners`
    },
    cz_prague: {
        city: "PRAGUE &bull; CZECH REPUBLIC",
        shows: `&bull; <b>Ministry of Environment &amp; State Galleries:</b> Retrospectives`
    },
    goa: {
        city: "GOA &amp; MUMBAI &bull; INDIA",
        shows: `&bull; <b>Carpe Diem Gallery:</b> Monographic Archives`
    },
    pakistan: {
        city: "PAKISTAN ARCHIVAL NODES",
        shows: `&bull; <b>Cultural &amp; Academic Heritage Repositories</b>`
    },
    malaysia: {
        city: "KUALA LUMPUR &bull; MALAYSIA",
        shows: `&bull; <b>Contemporary Visual Art Directorate:</b> Retrospective Monograph Archives`
    },
    mombasa: {
        city: "NAIROBI &amp; MOMBASA &bull; KENYA",
        shows: `&bull; <b>PAWA254 &amp; Chronicles of Mombasa Archive:</b> <i>ARTIVISM</i>`
    },
    bc_vancouver: {
        city: "VANCOUVER &amp; BC &bull; CANADA",
        shows: `&bull; <b>British Columbia Fine Arts Repositories</b>`
    },
    alberta_calgary: {
        city: "ALBERTA NODES &bull; CANADA",
        shows: `&bull; <b>Alberta Visual Arts Heritage Repositories</b>`
    },
    toronto_waterloo: {
        city: "TORONTO &amp; ON &bull; CANADA",
        shows: `&bull; <b>Ontario Cultural &amp; Academic Monographic Archives</b>`
    },
    ottawa_kingston: {
        city: "OTTAWA &amp; KINGSTON &bull; CANADA",
        shows: `&bull; <b>National Gallery of Canada Knowledge Keepers</b> &mdash; <i>MOWICHA / ANKOSÉ</i>`
    },
    montreal_qc: {
        city: "MONTREAL &amp; QC &bull; CANADA",
        shows: `&bull; <b>Quebec Cultural &amp; Academic Monographic Archives</b>`
    },
    yukon_atlantic: {
        city: "YUKON &amp; ATLANTIC &bull; CANADA",
        shows: `&bull; <b>Indigenous Heritage &amp; Territorial Archives</b>`
    },
    ch_zurich: {
        city: "ZURICH &bull; SWITZERLAND",
        shows: `&bull; <b>ETH Zurich:</b> Chair of Architecture &amp; History &mdash; <i>PRIJATELJSTVO</i> | <i>TOGETHER</i>`
    },
    ch_geneva: {
        city: "GENEVA &bull; SWITZERLAND",
        shows: `&bull; <b>International Red Cross:</b> Ecological Material Patron`
    },
    ch_bern: {
        city: "BERN &bull; SWITZERLAND",
        shows: `&bull; <b>Artas Foundation:</b> <i>EQUANIMITY / GELASSENHEIT</i>`
    },
    ch_ballenberg: {
        city: "BALLENBERG &bull; SWITZERLAND",
        shows: `&bull; <b>Ballenberg Open-Air Museum:</b> Heritage Material Patron`
    },
    af_kinshasa: {
        city: "KINSHASA &bull; DEMOCRATIC REPUBLIC OF CONGO",
        shows: `&bull; <b>Congo Children Trust:</b> Humanitarian Advocacy`
    },
    af_johannesburg: {
        city: "JOHANNESBURG &bull; SOUTH AFRICA",
        shows: `&bull; <b>Wits School of Arts &amp; TEARS Foundation:</b> <i>SYNERGY</i> | <i>HEGEMONY</i>`
    },
    af_pretoria: {
        city: "PRETORIA &bull; SOUTH AFRICA",
        shows: `&bull; <b>Centre for Human Rights (University of Pretoria):</b> <i>SERENDIPITY</i>`
    },
    af_gaborone: {
        city: "GABORONE &bull; BOTSWANA",
        shows: `&bull; <b>Thapong Visual Arts Centre:</b> <i>INTERPRETATION</i>`
    },
    af_lagos: {
        city: "LAGOS &bull; NIGERIA",
        shows: `&bull; <b>University of Lagos &amp; Omenka Gallery:</b> <i>PEACE</i> | <i>RESILIENCE</i>`
    },
    germany: {
        city: "BERLIN &amp; FRANKFURT &bull; GERMANY",
        shows: `&bull; <b>Jewish Museum Frankfurt &amp; Hamburger Kunsthalle:</b> Historical Archives`
    }
};

// --- 3. MAP POPUP & NAVIGATION ENGINE ---
function openMapDetails(key, event) {
    if (event) event.stopPropagation();

    document.querySelectorAll('.map-node').forEach(n => n.classList.remove('active-node'));

    const data = mapCityData[key];
    const nodeElem = document.getElementById('node_' + key);
    const popup = document.getElementById('mapPopupCard');
    const frame = document.getElementById('mapCanvasFrame');

    if (data && popup && frame) {
        if (nodeElem) nodeElem.classList.add('active-node');

        document.getElementById('popupCityTitle').innerHTML = data.city;
        document.getElementById('popupCityBody').innerHTML = data.shows;

        popup.classList.add('active');

        if (nodeElem) {
            const nodeRect = nodeElem.getBoundingClientRect();
            const frameRect = frame.getBoundingClientRect();

            let leftPos = (nodeRect.left - frameRect.left) + 20;
            let topPos = (nodeRect.top - frameRect.top) - 20;

            // Viewport & Mobile Safe Boundary Calculations
            if (leftPos + 300 > frameRect.width) {
                leftPos = Math.max(10, (nodeRect.left - frameRect.left) - 310);
            }
            if (leftPos < 10) leftPos = 10;

            if (topPos + 220 > frameRect.height) {
                topPos = Math.max(10, frameRect.height - 230);
            }
            if (topPos < 10) topPos = 10;

            popup.style.left = leftPos + 'px';
            popup.style.top = topPos + 'px';
        }
    }
}

function closeMapDetails() {
    const popup = document.getElementById('mapPopupCard');
    if (popup) popup.classList.remove('active');
    document.querySelectorAll('.map-node').forEach(n => n.classList.remove('active-node'));
}

function selectCityFromDropdown(key) {
    if (key) {
        openMapDetails(key, null);
        const frame = document.getElementById('mapCanvasFrame');
        if (frame) {
            frame.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } else {
        closeMapDetails();
    }
}

// Close map popup when clicking outside the canvas frame
document.addEventListener('click', function(e) {
    const frame = document.getElementById('mapCanvasFrame');
    if (frame && !frame.contains(e.target)) {
        closeMapDetails();
    }
});


// --- 4. MATERIAL LIFECYCLE SCRUBBER ---
const scrubberImages = {
    "1": "land-texture-2.jpg",
    "2": "words-texture-1.jpg",
    "3": "box-texture-1.jpg"
};

function updateScrubberView(val) {
    const img = document.getElementById('scrubberImage');
    if (img && scrubberImages[val]) {
        img.style.transition = 'opacity 0.2s ease';
        img.style.opacity = '0.3';
        
        setTimeout(() => {
            img.src = scrubberImages[val];
            img.style.opacity = '1';
        }, 120);
    }
}


// --- 5. PROVENANCE DOSSIER & LIGHTBOX MODAL ---
const dossierData = {
    equanimity: {
        code: "PROVENANCE DOSSIER · WORDS PROJECT",
        title: "Equanimity / Gelassenheit",
        body: "Donated by Artas Foundation, a Swiss foundation operating in regions of conflict. Created using heavy earth pigments and presented at the Museum of West Bohemia. It translates the donated term 'Equanimity' along with others into a multi-layered visual field exploring calm resilience amidst geopolitical tension."
    },
    box_monograph: {
        code: "PROVENANCE DOSSIER · LIFE OF A BOX",
        title: "Monumental Packaging Sculpture",
        body: "A flagship ecological installation utilizing cardboard packaging collected from the National Museum of the History of Ukraine, National Museum of Denmark, Museum of Basel, Nobel Prize Museum, City Museum Nuremberg, and many more. Exhibited across state museums and documented in official catalogues from the first public display at the Museum of Paper in Duszniki-Zdrój, Poland."
    },
    mowicha: {
        code: "PROVENANCE DOSSIER · VOICES OF THE LAND",
        title: "Mowicha (Living Wisdom)",
        body: "In collaboration with National Gallery of Canada, Burke Museum, Endangered Languages - Oregon USA, University of Victoria, University of Alberta, and many other Knowledge Keepers. This work incorporates the Anishinaabemowin concept 'Ankosé' ('everything is connected'). Prepared using earth pigmentation/Mix media to preserve indigenous oral philosophy into permanent fine art."
    }
};

function openDossier(key) {
    const data = dossierData[key];
    if (data) {
        document.getElementById('modalCode').innerText = data.code;
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalBody').innerText = data.body;
        document.getElementById('dossierModal').classList.add('active');
    }
}

function openLightbox(imageSrc, title) {
    document.getElementById('modalCode').innerText = "CHRONICLES OF MOMBASA · PORTRAIT ARCHIVE";
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalBody').innerHTML = `
        <div style="text-align: center;">
            <img src="${imageSrc}" style="max-width: 100%; max-height: 60vh; border: 1px solid var(--border-gold); margin-bottom: 15px;">
            <p style="font-size: 0.8rem; color: var(--text-secondary);">Mombasa Series · Natural Expression Study</p>
        </div>
    `;
    document.getElementById('dossierModal').classList.add('active');
}

function closeDossier() {
    const modal = document.getElementById('dossierModal');
    if (modal) modal.classList.remove('active');
}


// --- 6. LIVE WORD MATRIX FILTER (WITH DEBOUNCE) ---
let filterTimeout;
function filterWords() {
    clearTimeout(filterTimeout);
    filterTimeout = setTimeout(() => {
        const input = document.getElementById('wordSearchInput').value.toLowerCase().trim();
        const pills = document.querySelectorAll('.word-pill-item');
        
        pills.forEach(pill => {
            const text = pill.innerText.toLowerCase();
            pill.style.display = text.includes(input) ? 'inline-block' : 'none';
        });
    }, 150);
}


// --- 7. MASTERWORK LEDGER CATEGORY FILTER ---
function filterLedger(category, event) {
    const buttons = document.querySelectorAll('.ledger-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');

    const rows = document.querySelectorAll('.ledger-row');
    rows.forEach(row => {
        if (category === 'all' || row.dataset.category === category) {
            row.style.display = ''; // Reverts to stylesheet rule (grid/flex)
        } else {
            row.style.display = 'none';
        }
    });
}


// --- 8. GLOBAL ACCESSIBILITY & KEYBOARD HANDLERS ---
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDossier();
        closeMapDetails();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('dossierModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeDossier();
            }
        });
    }
});
