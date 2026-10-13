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
        city: "USA &bull; HARVARD UNIVERSITY &amp; CAMBRIDGE ACADEMIC NETWORK",
        shows: `&bull; <b>Harvard University Academic Directorate:</b> Multi-departmental research exchange spanning the International Arts + Mind Lab, Dept. of Molecular &amp; Cellular Biology, Dept. of East Asian Languages &amp; Civilizations, Faculty of Arts &amp; Sciences (Transnational Repression &amp; Rupture Research), Weatherhead Center for International Affairs, Office of the President Emeritus, Dept. of Anthropology, Dept. of Psychology, Graduate School of Design, Harvard Medical School, Harvard Divinity School, Harvard Law School, and the T.H. Chan School of Public Health.<br>
&bull; <b>Academic &amp; Curatorial Scope:</b> Interdisciplinary inquiry into neuro-aesthetics, historical trauma, urban design topologies, cognitive freedom, and public policy mediation translated into monumental canvas structures.`
    },
    usa_east: {
        city: "USA &bull; EAST COAST &amp; IVY LEAGUE ACADEMIC DIRECTORATES",
        shows: `&bull; <b>Yale University Academic Directorate (New Haven, CT):</b> Scholarly engagement with the Faculty of Arts &amp; Sciences, Dept. of Astronomy, Dept. of Philosophy, Dept. of Comparative Literature, and Yale Divinity School regarding liminal astrophysics, Persian literary traditions, and systematic theology.<br>
&bull; <b>Columbia University &amp; New York Intellectual Archives (New York, NY):</b> Academic exchange with the Dept. of History, Dept. of Middle Eastern, South Asian &amp; African Studies (MESAAS), and Dept. of Political Science on American Jewish history, historical empathy, and classical socio-cultural etiquette.<br>
&bull; <b>Princeton University &amp; Middle East Studies Nodes (Princeton, NJ):</b> High-level dialogue with the Dept. of Religion, Dept. of Politics, and Center for Jewish Life / Princeton Hillel addressing systemic cooperation, human values, and existential vitality.<br>
&bull; <b>Massachusetts Institute of Technology — MIT (Cambridge, MA):</b> Interdisciplinary collaboration with the Dept. of Philosophy, Women’s &amp; Gender Studies, and Comparative Media Studies/Writing (MITHIC) on technological ethics and media integrity.<br>
&bull; <b>Brown University &amp; Rhode Island Academic Exchange (Providence, RI):</b> Research dialogue with the Center for Middle East Studies and Dept. of History of Art &amp; Architecture on entangled histories, political defiance, and historical trauma.<br>
&bull; <b>Johns Hopkins University &amp; Ecological Design Collective (Baltimore, MD):</b> Academic research with the Krieger-Eisenhower Chair of Anthropology and ecological research units on environmental regeneration and sustainable futures.<br>
&bull; <b>Georgetown &amp; George Washington Universities (Washington, D.C.):</b> Strategic exchange with the Institute for Middle East Studies, Art &amp; Museum Studies Program, and national broadcasting archives on international affairs, public media archives, and geopolitical astonishment.<br>
&bull; <b>University of Pennsylvania &amp; Swarthmore College Network (PA):</b> Scholarly dialogue with cognitive science, linguistics, and religious studies departments regarding indigenous language preservation and cognitive limits.`
    },
    usa_west: {
        city: "USA &bull; WEST COAST &amp; PACIFIC RIM INSTITUTIONS",
        shows: `&bull; <b>University of California System (CA):</b> Multi-tier research network spanning the Magnes Collection of Jewish Art &amp; Life (UC Berkeley), Samuel Jordan Center for Persian Studies &amp; Culture (UC Irvine), Dept. of Art &amp; Architectural History (UC Davis), Dept. of Visual Arts (UC San Diego), and Armenian Studies Programs on Middle Eastern visual histories, archipelagic displacement, and sociopolitical disturbance.<br>
&bull; <b>Stanford University &amp; Bay Area Contemporary Repositories (CA):</b> Collaborative engagement with Stanford Dept. of Linguistics, Urgent Action Fund, and Altman Siegel Gallery on structural linguistics, human rights advocacy, and commercial curatorial dynamics.<br>
&bull; <b>Skirball Cultural Center &amp; Los Angeles Philosophical Repositories (CA):</b> Curatorial dialogue with Jewish cultural institutions, American Jewish University, and the Institute for Art and Olfaction on sensory perception, sacred presence, and olfactory aesthetics.<br>
&bull; <b>University of Washington &amp; Pacific Northwest Repositories (Seattle, WA):</b> Collaborative research with the Dept. of Anthropology, Burke Museum of Natural History &amp; Culture, Center for the Study of the Pacific Northwest, and 3D4M Program on Indigenous North American heritage, coastal topologies, and urban sociology.<br>
&bull; <b>Reed College &amp; Willamette University (Oregon):</b> Academic dialogue with anthropology and art history directorates focusing on counter-genocidal discourse, political resistance, and ethnographic ethics.<br>
&bull; <b>University of Hawaii at Mānoa &amp; Kauai Cultural Repositories (Hawaii):</b> Cross-cultural exchange with the Dept. of Art &amp; Art History, Asian Art History Directorates, and regional monastic centers on Pacific Rim material traditions and indigenous Hawaiian philosophies.<br>
&bull; <b>University of Alaska Anchorage (ISER Node, Alaska):</b> Academic research with social and economic research institutes on Arctic environmental vulnerability and Northern community resilience.`
    },
    usa_midwest_south: {
        city: "USA &bull; MIDWEST, MOUNTAIN &amp; SUNBELT INSTITUTIONS",
        shows: `&bull; <b>University of Chicago &amp; Northwestern University (IL):</b> High-level academic engagement with the Dept. of History, Dept. of Art History, South Asian Languages &amp; Civilizations, and Dept. of Psychology &amp; Education on post-colonial historiography, war weariness, and cognitive biodiversity.<br>
&bull; <b>University of Colorado Boulder &amp; Eco-Cycle Networks (CO):</b> Collaborative dialogue with the Artnauts International Curatorial Collective, Dept. of Art &amp; Art History, and national eco-cycle networks on art as geopolitical intervention.<br>
&bull; <b>Indiana University Bloomington &amp; Eskenazi School of Art (IN):</b> Scholarly dialogue with senior fine arts and sculpture faculty on surrealist history, somnambulistic creative states, and linguistic incantation.<br>
&bull; <b>Boise State University &amp; Idaho Academic Network (ID):</b> Multi-faculty exchange across the Dept. of Art, Design &amp; Visual Studies, Art Jewelry &amp; Metalsmithing Program, and CLEAR Global on linguistic accessibility and human resilience.<br>
&bull; <b>University of Utah &amp; Southern Utah University (UT):</b> Academic engagement with philosophy, filmmaking, and visual arts directorates on existential instability, cinema semantics, and structural freedom.<br>
&bull; <b>University of Texas at Austin (TX):</b> Academic collaboration with Middle Eastern Studies, Media Studies, and Persian Program Directorates on classical Iranian cultural heritage, traditional poetic endurance, and Middle Eastern media analysis.<br>
&bull; <b>Equal Justice Initiative &amp; Civil Rights Repositories (Montgomery, AL):</b> High-level institutional alignment with civil rights directorates, legal defense organizations, and social justice networks focusing on racial justice, historic reconciliation, and systemic grace.<br>
&bull; <b>Arizona State University (Herberger Institute, Tempe, AZ):</b> Cross-disciplinary dialogue with Indigenous Studies, School of Art, and Regents' Professors Emeriti on Indigenous ecological medicine, desert photography traditions, and scalable visual systems.`
    },
    au_brisbane_qld: {
        city: "AUSTRALIA &bull; BRISBANE &amp; QUEENSLAND",
        shows: `&bull; <b>University of Queensland Art Museum &amp; Outer Space Directorate:</b> Academic &amp; Curatorial Dialogue on Ephemeral Dynamics &amp; Institutional Visibility &mdash; <i>SEEN</i> | <i>FLUX</i><br>
&bull; <b>Curatorial Scope:</b> Scholarly inquiry into perpetual fluid movement and perceptual recognition within contemporary South Pacific exhibition spaces.`
    },
    au_sydney_nsw: {
        city: "AUSTRALIA &bull; SYDNEY &amp; NEW SOUTH WALES",
        shows: `&bull; <b>University of Sydney:</b> Faculty of Arts &amp; Social Sciences (Holocaust Studies &amp; Academic Excellence) &mdash; <i>FRAILTY</i> | <i>MIASMA</i><br>
&bull; <b>Academic &amp; Curatorial Focus:</b> Research into historical vulnerability and atmospheric strain, exploring how collective trauma and memory inform structural abstraction.<br>
&bull; <b>Global Youth Depth Psychology (I AM Project):</b> Sydney Student Network Participation in the international educational initiative linking Australian youth with peer archives in Stockholm, London, Boston, Prague, Toronto, and Dubai.`
    },
    au_melbourne: {
        city: "AUSTRALIA &bull; MELBOURNE &amp; VICTORIA",
        shows: `&bull; <b>The University of Melbourne:</b> School of Culture and Communication &mdash; <i>HUMANITIES</i><br>
&bull; <b>Academic &amp; Curatorial Focus:</b> Interdisciplinary dialogue on language as an intellectual vessel, examining how humanistic critical theory integrates into large-scale visual execution.`
    },
    au_canberra: {
        city: "AUSTRALIA &bull; CANBERRA (ACT)",
        shows: `&bull; <b>M16 Artspace Executive Directorate:</b> Institutional Dialogue on Spatial Autonomy &mdash; <i>UNGOVERNABLE</i><br>
&bull; <b>Curatorial Scope:</b> Exploration of creative autonomy and unrestricted expression beyond formal regulatory boundaries.`
    },
    ws_samoa: {
        city: "SAMOA &bull; APIA",
        shows: `&bull; <b>National University of Samoa:</b> Faculty of Arts &amp; Pacific Studies Directorate.<br>
&bull; <b>Academic &amp; Curatorial Exchange:</b> Interdisciplinary dialogue examining South Pacific philosophy, emotional equilibrium, and communal resilience within modern Pacific educational frameworks. Research anchored in the triple conceptual foundation of <i>Steady</i>, <i>Content</i>, and <i>Optimistic</i> as visual anchors for internal stability.<br>
&bull; <b>Curatorial Focus:</b> Exploration of Pacific spatial balance and ocean topologies translated into layered material research and structural canvas compositions.`
    },
    fj_suva: {
        city: "FIJI &bull; SUVA",
        shows: `&bull; <b>The University of the South Pacific:</b> School of Language, Arts &amp; Media.<br>
&bull; <b>Academic &amp; Curatorial Exchange:</b> Scholarly dialogue on South Pacific literary traditions, linguistic nuance, and post-colonial island narratives. Conceptual research focusing on cultural idiosyncrasy and structural language patterns within the broader Oceania region.<br>
&bull; <b>Curatorial Focus:</b> Fluid gestural studies examining maritime heritage, oral narrative structures, and regional identity transformed into large-scale canvas research.`
    },
    vu_vanuatu: {
        city: "VANUATU &bull; PORT-VILA",
        shows: `&bull; <b>Vanuatu Cultural Centre (VKS):</b> National Cultural Directorate &amp; Intangible Heritage Council.<br>
&bull; <b>Academic &amp; Curatorial Exchange:</b> High-level cultural dialogue addressing global crisis response, human unity, and community solidarity. Research centering on the universal imperative of <i>Love</i> as a primary catalyst for individual agency and collective restoration during pivotal periods.<br>
&bull; <b>Curatorial Focus:</b> Intimate textural and color-field compositions exploring human empathy, social cohesion, and the preservation of indigenous Pacific heritage.`
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
        shows: `&bull; <b>Chulalongkorn University:</b> Faculty of Fine and Applied Arts.<br>
&bull; <b>Institutional Exchange:</b> Academic engagement with fine arts leadership on Southeast Asian aesthetic heritage, performance methodologies, and sensory resonance in modern practice.<br>
&bull; <b>Curatorial Focus:</b> Structural research into spatial cadence, ritual geometry, and fluid material traditions across East Asian contemporary art networks.`
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
        shows: `&bull; <b>University of the Philippines Diliman:</b> College of Fine Arts.<br>
&bull; <b>Institutional Exchange:</b> Institutional exchange with academic directorates focusing on archipelagic visual histories, community-grounded creative discourse, and post-colonial artistic identity.<br>
&bull; <b>Curatorial Focus:</b> Exploration of island cartography, collective memory, and the material vernacular of Southeast Asian island networks.`
    },
    ar_buenosaires: {
        city: "ARGENTINA &bull; BUENOS AIRES",
        shows: `&bull; <b>Centre for Genocide Studies (UNTREF):</b> National University of Tres de Febrero &mdash; Academic Directorate &amp; Research Program on Cultural Diversity.<br>
&bull; <b>Historical Trauma &amp; Research Exchange:</b> Scholarly dialogue on historical rupture, memory, and the Yiddish concept of <i>Khurbn</i> (Destruction / Historical Watershed), serving as foundational conceptual research for the upcoming 2027 retrospective series at the Jewish Museum.<br>
&bull; <b>Curatorial Focus:</b> Exploration of exile, historical continuity, and global Jewish heritage transformed into large-scale canvas research.`
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
        city: "NEW ZEALAND &bull; AUCKLAND, WAITANGI, DUNEDIN, WELLINGTON &amp; TARANAKI",
        shows: `&bull; <b>Academic &amp; Ethnographic Collaboration:</b> University of Auckland &mdash; Department of Social Anthropology &amp; Te Wānanga o Waipapa (School of Indigenous Studies). Research dialogues and personal correspondence on social existence and cultural memory.<br>
&bull; <b>Ecological Material Patrons (Life of a Box):</b> Te Kōngahu Museum of Waitangi (Waitangi Treaty Grounds) &amp; Tūhura Otago Museum (Dunedin North).<br>
&bull; <b>Transformed Museum Sculpture Holdings:</b> Recycled material preservation series accessioned into <i>From Out of the Blue Studio Gallery</i> (Ōpunakē, Taranaki).<br>
&bull; <b>Global Youth Depth Psychology (I AM Project):</b> Wellington student participation in the global online educational initiative linking youth perspectives with peer networks in Stockholm, London, Boston, Prague, Sydney, and Dubai.`
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
    cn_changsha: {
        city: "CHANGSHA &bull; CHINA",
        shows: `&bull; <b>Hunan Normal University (HCTS) &amp; University Art Museum Directorate:</b><br>
&bull; <b>Institutional Exchange:</b> Transcultural research dialogue spanning comparative literature institutes and museum leadership, analyzing expansive world-literary perspectives, global horizon models, and cross-border museum curation.<br>
&bull; <b>Curatorial Focus:</b> Monumental compositions exploring transcultural poetic structures, multi-perspective narrative arcs, and the visual translation of literary theory.`
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
        shows: `&bull; <b>Universidad de los Andes:</b> Academic &amp; Humanities Faculties.<br>
&bull; <b>Institutional Exchange:</b> Scholarly dialogue with senior academic faculty regarding South American socio-cultural historiography, pedagogical frameworks, and the convergence of academic research with visual expression.<br>
&bull; <b>Curatorial Focus:</b> Canvas studies analyzing memory landscapes, institutional knowledge transfer, and urban Andean spatial dynamics.`
    },
    vn_hanoi: {
        city: "VIETNAM &bull; HANOI",
        shows: `&bull; <b>Blue Dragon Children's Foundation:</b> Dedicated Monographic Tribute &amp; Participatory Archive.<br>
&bull; <b>Human-Centered &amp; Dialogic Exchange:</b> Multi-stage narrative dialogue, field correspondence, and child-led art therapy recordings exploring trauma recovery, emotional expression, and cognitive freedom.<br>
&bull; <b>Curatorial Focus:</b> Intimate documentation of lived childhood experiences, personal resilience, and human dignity transformed into dedicated canvas research.`
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
        shows: `&bull; <b>Fundación Ars TEOR/éTica &amp; Global Environmental Leadership Initiatives:</b><br>
&bull; <b>Institutional Exchange:</b> High-level dialogue with climate governance leadership and regional contemporary art institutions, examining systemic paradigm shifts, ecological resilience, and institutional co-reliance within Central American art ecosystems.<br>
&bull; <b>Curatorial Focus:</b> Visual frameworks investigating collective responsibility, environmental optimism, and the multi-layered synthesis of systemic transition.`
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
        city: "GREENLAND &bull; NUUK",
        shows: `&bull; <b>Greenland National Museum &amp; Archives (Nunatta Katersugaasivia Allagaateqarfialu):</b> Dept. of Intangible Cultural Heritage &amp; Archaeology &mdash; <i>SILA</i> | <i>ATAQQEQATIGIINNEQ</i><br>
&bull; <b>Nuuk Art Museum:</b> Material Patrons &mdash; Structural Canvas Components (<i>Life of a Box</i>)<br>
&bull; <b>Sipineq+:</b> Human Rights &amp; Civil Society Directorate &mdash; <i>INOOQATIGIINNEQ</i><br>
&bull; <b>Diocese of Greenland &amp; Language Secretariat:</b> Ecclesiastical &amp; Linguistic Dialogue &mdash; <i>AKAAREQATIGIINNEQ</i> | <i>EQQISSINEQ</i>`
    },
    gl_ilulissat: {
        city: "GREENLAND &bull; ILULISSAT &amp; AVANNAATA REGION",
        shows: `&bull; <b>The Museums in North-Greenland (Kalaallit Nunaata Avannaani):</b> Directorate of Regional Museums (Ilulissat, Upernavik, Uummannaq, Qaanaaq) &mdash; <i>EQQUMIITSULIORTOQ</i><br>
&bull; <b>Municipality of Avannaata &amp; Katuaq Cultural Centre:</b> Civic &amp; Cultural Directorate &mdash; <i>UAGUT NUNARPUT</i> | <i>ATAATSIMOORNEQ</i>`
    },
    gl_aalborg: {
        city: "GREENLAND (DIASPORA) &bull; AALBORG",
        shows: `&bull; <b>Det Grønlandske Hus i Aalborg:</b> Education Department (Skoletjenesten) &mdash; <i>TASSA</i>`
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
        city: "INDIA &bull; GOA, MUMBAI &amp; NATIONAL ARCHIVES",
        shows: `&bull; <b>Ecclesiastical &amp; Theological Discourse:</b> Monographic dialogue on aesthetics and sacred beauty with Most Rev. Felix Machado; research-led manuscript canvas resulting from interfaith inquiry with Rabbi Ezekiel Isaac (Judah Hyam Synagogue, New Delhi).<br>
&bull; <b>Selected Solo Monographs:</b> Recurring multi-year exhibition series at Carpe Diem Gallery (including <i>Mukha</i>, <i>Ganesha</i>, <i>Samay</i>, and <i>Aliferous</i>, among others).<br>
&bull; <b>Institutional Collections:</b> Accessioned into the permanent collection of Sala de Arte.<br>
&bull; <b>Contemporary Gallery Provenance:</b> Conceptual and linguistic archive donor node supported by Chatterjee &amp; Lal (Mumbai).<br>
&bull; <b>Humanitarian &amp; Crisis Provenance:</b> Dedicated solo monograph <i>Goa COVID</i> and benefit initiatives supporting pediatric neurodevelopmental research at the Sethu Centre.`
    },
    pakistan: {
        city: "PAKISTAN &bull; PESHAWAR &amp; ARCHIVAL NODES",
        shows: `&bull; <b>University of Peshawar (Dept. of Environmental Sciences) / Mohatta Palace Museum:</b> Archival &amp; Field Research Directorate.<br>
&bull; <b>Academic &amp; Ethnographic Research:</b> Multi-stage field study across autonomous tribal territories (<i>Ilaqa-e-Ghair</i>), investigating indigenous tribal justice systems, agrarian self-reliance, armaments as social security icons, and ecological realities along borderland corridors. Material partnership with national museum repositories providing repurposed industrial packaging for global sustainability initiatives displayed at the Museum of Papermaking in Duszniki-Zdrój.<br>
&bull; <b>Curatorial Focus:</b> Photographic documentation, ecological material preservation, and raw monochromatic canvas research dissecting borderland autonomy, tribal honor codes, and environmental endurance.`
    },
    malaysia: {
        city: "KUALA LUMPUR &bull; MALAYSIA",
        shows: `&bull; <b>Contemporary Visual Art Directorate:</b> Retrospective Monograph Archives`
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
    germany: {
        city: "GERMANY &bull; BERLIN &amp; FRANKFURT",
        shows: `&bull; <b>Jewish Museum Frankfurt &amp; Hamburger Kunsthalle:</b> Historical Archives`
    },
    // --- REFINED AFRICAN CULTURAL & RESEARCH NODES ---
    af_pretoria: {
        city: "SOUTH AFRICA &bull; PRETORIA",
        shows: `&bull; <b>Centre for Human Rights — University of Pretoria:</b> Academic Directorate &amp; Legal Philosophy Program.<br>
&bull; <b>Interdisciplinary Dialogue:</b> Research on human rights frameworks, systemic dignity, and the unexpected intersections of fate within institutional spaces. Conceptual research anchored in the linguistic exploration of <i>Serendipity</i> as a catalyst for social justice.<br>
&bull; <b>Curatorial Focus:</b> Large-scale canvas studies examining human agency, institutional protection, and structural resilience within contemporary African civil society.`
    },
    af_johannesburg: {
        city: "SOUTH AFRICA &bull; JOHANNESBURG",
        shows: `&bull; <b>The TEARS Foundation:</b> Social Advocacy &amp; Structural Power Research Initiative.<br>
&bull; <b>Institutional Dialogue:</b> Academic exchange addressing systemic power structures, survivor advocacy, and social justice. Research examining the sociopolitical mechanics of <i>Hegemony</i> and the transformation of collective trauma into institutional empowerment.<br>
&bull; <b>Curatorial Focus:</b> High-contrast gestural abstraction exploring power dynamics, body memory, and the recovery of individual voice within fragmented societies.`
    },
    af_nairobi: {
        city: "KENYA &bull; NAIROBI",
        shows: `&bull; <b>PAWA Initiative (PAWA254):</b> Center for Social Change &amp; Visual Arts.<br>
&bull; <b>Collaborative Dialogue:</b> Academic inquiry into civic engagement, creative activism, and youth movement politics. Conceptual research into <i>Artivism</i> as a legitimate historical and visual methodology for societal transformation across East Africa.<br>
&bull; <b>Curatorial Focus:</b> Monumental canvas research connecting street-level civil discourse with formal abstraction, focusing on public memory and community agency.`
    },
    af_lagos: {
        city: "NIGERIA &bull; LAGOS",
        shows: `&bull; <b>Department of Art History &amp; Visual Arts — University of Lagos / Omenka Foundation:</b> Academic Directorate.<br>
&bull; <b>High-Level Scholarly Dialogue:</b> Exchange on West African art histories, curatorial stewardship, and post-colonial visual traditions. Research examining institutional continuity, cultural endurance, and the linguistic weight of <i>Resilience</i> and <i>Peace</i>.<br>
&bull; <b>Curatorial Focus:</b> Multi-layered canvas research probing historical memory, bronze and sculptural traditions, and the enduring strength of West African urban centers.`
    },
    af_naija_vernacular: {
        city: "NIGERIA &bull; VERNACULAR &amp; COMMUNITY DIALOGUES",
        shows: `&bull; <b>Regional Linguistic Forum &amp; Intangible Cultural Heritage Network:</b> Pidgin Visual Idioms &amp; Informal Community Structures.<br>
&bull; <b>Sociolinguistic Exchange:</b> Deep ethnographic research into indigenous micro-economic solidarity networks, spatial proximity, and body memory within urban labor spaces (*Odeshi*, *One-Love*, *Yanga*, *Hustle*, *Ajo/Esusu*).<br>
&bull; <b>Curatorial Focus:</b> Raw textural and figurative canvas studies capturing collective wealth systems, unbreakable identity, and the unwritten social contracts of daily endurance.`
    },
    af_gaborone: {
        city: "BOTSWANA &bull; GABORONE",
        shows: `&bull; <b>Thapong Visual Arts Centre:</b> National Cultural Directorate.<br>
&bull; <b>Institutional Exchange:</b> Scholarly dialogue on regional visual arts management, Southern African abstraction, and linguistic hermeneutics (*Interpretation*) as a bridge between indigenous symbol systems and international contemporary art networks.<br>
&bull; <b>Curatorial Focus:</b> Structural compositions investigating semiotic systems, spatial light, and the fluidity of cultural translation across borders.`
    },
    af_madagascar: {
        city: "MADAGASCAR &bull; ANTANANARIVO",
        shows: `&bull; <b>American School of Antananarivo:</b> International Cultural Exchange Program.<br>
&bull; <b>Cross-Cultural Initiative:</b> Inquiry examining Malagasy heritage, island ecology, and social wellbeing. Conceptual focus anchored in the Malagasy concept of <i>Sambatra</i> (blessedness / systemic well-being) within global educational structures.<br>
&bull; <b>Curatorial Focus:</b> Tonal and environmental canvas research investigating island isolation, ancestral memory, and communal balance.`
    },
    af_congo: {
        city: "DEMOCRATIC REPUBLIC OF CONGO &bull; BRAZZAVILLE / KINSHASA",
        shows: `&bull; <b>Congo Children’s Trust:</b> Humanitarian &amp; Youth Educational Initiative.<br>
&bull; <b>Field Research:</b> Academic inquiry on vulnerable youth populations, post-conflict reconciliation, and institutional child advocacy. Conceptual focus on the historical depth and geographical identity embodied in the name <i>Congo</i>.<br>
&bull; <b>Curatorial Focus:</b> Expressive figurative studies probing vulnerability, resilience, and the historical continuity of human dignity in Central Africa.`
    },
    af_bahamas: {
        city: "THE BAHAMAS &bull; NASSAU (DIASPORA EXCHANGE)",
        shows: `&bull; <b>Government Cultural Directorate &amp; National Heritage Exchange:</b> Transatlantic Heritage Directorate.<br>
&bull; <b>Institutional Dialogue:</b> Strategic exchange on diaspora heritage, maritime history, and island sovereignty, centering on <i>Grace</i> as an overarching philosophical frame for historical endurance and cultural survival.<br>
&bull; <b>Curatorial Focus:</b> Luminous color theory and expansive canvas research examining ocean topologies, migration narratives, and spiritual continuity.`
    },
    af_pan_african_research: {
        city: "PAN-AFRICAN FIELD RESEARCH &bull; REGIONAL TRIBAL TERRITORIES",
        shows: `&bull; <b>Regional Anthropological &amp; Ethnographic Expeditions:</b> Regional Museum &amp; Cultural Networks.<br>
&bull; <b>Multi-Year Field Research:</b> In-depth study across indigenous tribal territories focusing on oral traditions, disappearing dialects, mythologies, and human-nature reciprocity grounded in the Swahili concept of <i>Kuumba</i> (leaving a legacy more beautiful and beneficial than inherited).<br>
&bull; <b>Curatorial Focus:</b> Monumental canvas retrospectives and sensory installations integrating tribal folklore, fauna iconographies, and human proximity into global museum narratives.`
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
        body: "Artas Foundation (Swiss Foundation for Art in Regions of Conflict). Created using heavy earth pigments and presented at the Museum of West Bohemia. It translates the term 'Equanimity' along with others into a multi-layered visual field exploring calm resilience amidst geopolitical tension."
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
