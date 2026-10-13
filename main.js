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
    // --- UNITED KINGDOM CITIES ---
    uk_london: {
        city: "UNITED KINGDOM &bull; LONDON",
        shows: `&bull; <b>Institutional Anchor:</b> Tate; Amazon UK; Index on Censorship; Courtauld Institute of Art; University College London (UCL); SOAS University of London; Queen Mary University of London; London School of Economics (LSE); Peace Direct; Conciliation Resources.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Interdisciplinary dialogue spanning neuroaesthetics, ecosystem dynamics, global thought, post-colonial geography, and conflict resolution, focusing on movement, historical rupture, and civic agency.<br>
&bull; <b>Curatorial Focus:</b> Reclaiming reclaimed paper mediums and vast linguistic lexicons to transform critical socio-political theory into large-scale canvas series probing power and human endurance.`
    },
    oxford: {
        city: "UNITED KINGDOM &bull; OXFORD",
        shows: `&bull; <b>Institutional Anchor:</b> University of Oxford; The Ruskin School of Art; Environmental Change Institute.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Scholarly exchanges focused on ecosystem dynamics, ethics, modern Middle Eastern history, and fine art theory, examining environmental shifts and human resilience.<br>
&bull; <b>Curatorial Focus:</b> Deep earth and organic material studies mapping biodiversity, systemic change, and the philosophical foundations of biological flourishing.`
    },
    cambridge: {
        city: "UNITED KINGDOM &bull; CAMBRIDGE",
        shows: `&bull; <b>Institutional Anchor:</b> University of Cambridge.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Academic collaboration surrounding comparative linguistics, migratory ethics, and core philosophical concepts framing global human experience.<br>
&bull; <b>Curatorial Focus:</b> Textual and linguistic visual structures translating complex semantic structures and philosophical movement into minimalist canvas compositions.`
    },
    edinburgh: {
        city: "UNITED KINGDOM &bull; EDINBURGH",
        shows: `&bull; <b>Institutional Anchor:</b> National Galleries Scotland; University of Edinburgh.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Anthropological research and historical art curation examining social anthropology, historical art curation, and regional cultural memory across major Scottish cultural centers.<br>
&bull; <b>Curatorial Focus:</b> Textural paint application and historical paper research reflecting Northern European heritage, institutional memory, and structural social anthropology.`
    },
    aberdeen: {
        city: "UNITED KINGDOM &bull; ABERDEEN",
        shows: `&bull; <b>Institutional Anchor:</b> University of Aberdeen.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Social anthropology studies exploring human correspondence, environmental perception, and lived experience in coastal ecosystems.<br>
&bull; <b>Curatorial Focus:</b> Organic pigment studies investigating tactile engagement with natural landscapes and human connectivity across isolated environments.`
    },
    birmingham: {
        city: "UNITED KINGDOM &bull; BIRMINGHAM",
        shows: `&bull; <b>Institutional Anchor:</b> University of Birmingham.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Philosophical and sociological research focusing on human agency, superdiversity, international migration, and forced displacement.<br>
&bull; <b>Curatorial Focus:</b> Figurative and structural canvas compositions capturing human movement, moral agency, and urban social integration.`
    },
    leeds: {
        city: "UNITED KINGDOM &bull; LEEDS",
        shows: `&bull; <b>Institutional Anchor:</b> University of Leeds.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Archival research and library sciences inquiry into information preservation, civic concern, and institutional stewardship of historical knowledge.<br>
&bull; <b>Curatorial Focus:</b> Deep monochromatic canvas works exploring quiet contemplation, textual archival structures, and civic responsibility.`
    },
    lincoln: {
        city: "UNITED KINGDOM &bull; LINCOLN",
        shows: `&bull; <b>Institutional Anchor:</b> University of Lincoln.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Visual arts research focusing on environmental aesthetics, color theory, and regional artistic practices in the East Midlands.<br>
&bull; <b>Curatorial Focus:</b> Luminous aquatic and tonal studies probing fluid dynamics, spatial color theory, and material expression.`
    },
    manchester: {
        city: "UNITED KINGDOM &bull; MANCHESTER",
        shows: `&bull; <b>Institutional Anchor:</b> University of Manchester.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Visual anthropology and acoustic research investigating soundscapes, social integrity, and sensory human environments.<br>
&bull; <b>Curatorial Focus:</b> Textured tonal compositions capturing acoustic resonance, structural integrity, and urban human interaction.`
    },
    exeter: {
        city: "UNITED KINGDOM &bull; EXETER",
        shows: `&bull; <b>Institutional Anchor:</b> University of Exeter; Institute of Arab and Islamic Studies.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Climate system dynamics, post-colonial Middle Eastern geography, and environmental tipping point research.<br>
&bull; <b>Curatorial Focus:</b> Layered climate-inspired landscapes exploring global ecological vulnerability, planetary dynamics, and atmospheric shifts.`
    },
    kent: {
        city: "UNITED KINGDOM &bull; KENT",
        shows: `&bull; <b>Institutional Anchor:</b> University of Kent; Hawk Conservancy Trust.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Interdisciplinary focus spanning eco-material conservation, film aesthetics, philosophy of art, and avian ecosystem stewardship.<br>
&bull; <b>Curatorial Focus:</b> Dynamic feathered visual textures and light studies examining natural conservation, crepuscular light, and aesthetic philosophy.`
    },

    // --- SWITZERLAND CITIES ---
    ch_geneva: {
        city: "SWITZERLAND &bull; GENEVA",
        shows: `&bull; <b>Institutional Anchor:</b> International Committee of the Red Cross.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Humanitarian history, international protection, and the physical conservation of conflict archives and material culture.<br>
&bull; <b>Curatorial Focus:</b> Reclaimed material studies integrated with historical documentation, honoring neutral humanitarian action and structural human dignity.`
    },
    ch_bern: {
        city: "SWITZERLAND &bull; BERN",
        shows: `&bull; <b>Institutional Anchor:</b> International Cartographic Association.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Spatial mapping, linguistic cartography, and global geographical representation of human knowledge.<br>
&bull; <b>Curatorial Focus:</b> Cartographic symbolism and geometric canvas structures mapping world heritage, spatial relations, and cultural topography.`
    },
    ch_ballenberg: {
        city: "SWITZERLAND &bull; BALLENBERG",
        shows: `&bull; <b>Institutional Anchor:</b> Swiss Open-Air Museum Ballenberg.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Alpine architecture preservation, traditional craftsmanship, and ecological material provenance in rural European heritage.<br>
&bull; <b>Curatorial Focus:</b> Tactile wood and paper sculptural installations probing historical shelter, rural craftsmanship, and material conservation.`
    },
    ch_zurich: {
        city: "SWITZERLAND &bull; ZURICH",
        shows: `&bull; <b>Institutional Anchor:</b> ETH Zurich (Dept. of Architecture &amp; Institute of History and Theory of Architecture); Artas Foundation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Spatial mapping, territorial research, architectural history, and conflict transformation dialogue through visual arts and urban planning.<br>
&bull; <b>Curatorial Focus:</b> Reclaimed ecological material studies paired with architectural canvas research examining social cohesion, spatial continuity, and peacebuilding.`
    },

    // --- ITALY CITIES ---
    it_bologna: {
        city: "ITALY &bull; BOLOGNA",
        shows: `&bull; <b>Institutional Anchor:</b> University of Bologna (Department of Philosophy).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Philosophical inquiry into structural aesthetics, perceptual resonance, and the historical evolution of European artistic theory.<br>
&bull; <b>Curatorial Focus:</b> Canvas investigations probing visual harmony, acoustic frequencies, and the sensory resonance of human thought.`
    },
    it_florence: {
        city: "ITALY &bull; FLORENCE",
        shows: `&bull; <b>Institutional Anchor:</b> European University Institute.<br>
&bull; <b>Field &amp; Conceptual Research:</b> European governance, historical political philosophy, and civic solidarity within the Mediterranean basin.<br>
&bull; <b>Curatorial Focus:</b> Deep Renaissance-inspired color palettes and structured geometric compositions addressing European unity and historical solidarity.`
    },

    // --- FRANCE CITIES ---
    fr_paris: {
        city: "FRANCE &bull; PARIS",
        shows: `&bull; <b>Institutional Anchor:</b> Institute for Sustainable Development and International Relations (IDDRI).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Environmental transition policy, international climate stewardship, and human-centered ecological responsibility.<br>
&bull; <b>Curatorial Focus:</b> Lyrical eco-material canvas works exploring global climate sustainability, natural balance, and planetary stewardship.`
    },
    fr_guadeloupe: {
        city: "FRANCE &bull; GUADELOUPE",
        shows: `&bull; <b>Institutional Anchor:</b> Arts au Pluriel.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Caribbean contemporary art platforms, Francophone Atlantic dialogue, and multi-layered island cultural heritage.<br>
&bull; <b>Curatorial Focus:</b> Vibrant tropical compositions probing serendipitous creative encounters, island topography, and post-colonial artistic identity.`
    },

    // --- PALESTINE CITIES ---
    ps_gaza: {
        city: "PALESTINE &bull; GAZA",
        shows: `&bull; <b>Institutional Anchor:</b> Culture and Free Thought Association.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Grassroots community advocacy, youth empowerment, and cultural preservation under extreme socio-political conditions.<br>
&bull; <b>Curatorial Focus:</b> Deeply emotional and tactile canvas research capturing unyielding love, rooted belonging, and intergenerational cultural endurance.`
    },
    ps_jenin: {
        city: "PALESTINE &bull; JENIN CAMP",
        shows: `&bull; <b>Institutional Anchor:</b> The Freedom Theatre.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Cultural resistance, theatrical expression, and community resilience (<i>Sumud</i>) within refugee camp environments.<br>
&bull; <b>Curatorial Focus:</b> Monochromatic and high-contrast structural studies translating physical theater and collective memory into quiet testaments to endurance.`
    },

    // --- ICELAND CITIES ---
    is_reykjavik: {
        city: "ICELAND &bull; REYKJAVÍK",
        shows: `&bull; <b>Institutional Anchor:</b> University of Iceland (Dept. of Anthropology &amp; Cultural Studies).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Sub-arctic human survival, environmental tolerance, medieval literature, and the linguistic heritage of Nordic sagas facing rapid modernization.<br>
&bull; <b>Curatorial Focus:</b> Volcanic mineral textures and sparse abstract compositions translating old Norse linguistic structures into stark visual landscapes.`
    },

    // --- GUYANA CITIES ---
    gy_georgetown: {
        city: "GUYANA &bull; GEORGETOWN",
        shows: `&bull; <b>Institutional Anchor:</b> University of Guyana (Dept. of Language and Cultural Studies).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Caribbean and Amazonian linguistic identity, quietude, interiority, and the oral histories of the Guiana Shield.<br>
&bull; <b>Curatorial Focus:</b> Atmospheric figurative and lush landscape studies capturing the quiet depth, rainforest stillness, and rich post-colonial heritage of Northern South America.`
    },

    // --- JORDAN CITIES ---
    jo_amman: {
        city: "JORDAN &bull; AMMAN",
        shows: `&bull; <b>Institutional Anchor:</b> The University of Jordan (School of Arts &amp; Design &amp; Dept. of Music).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Levantine visual typography, sacred geometry, uncertainty, and Middle Eastern sonic traditions across ancient trade routes.<br>
&bull; <b>Curatorial Focus:</b> Calligraphic abstraction and tonal canvas research translating traditional Levantine musical structures and spiritual concepts into fluid visual rhythms.`
    },

    // --- MAURITIUS CITIES ---
    mu_reduit: {
        city: "MAURITIUS &bull; RÉDUIT",
        shows: `&bull; <b>Institutional Anchor:</b> University of Mauritius.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Island biodiversity, environmental ethics, oceanographic isolation, and inter-ethnic empathy within multicultural island topologies.<br>
&bull; <b>Curatorial Focus:</b> Vibrant, light-filled color studies probing ecological fragility, Indian Ocean marine heritage, and island interconnectedness.`
    },

    // --- OMAN CITIES ---
    om_muscat: {
        city: "OMAN &bull; MUSCAT",
        shows: `&bull; <b>Institutional Anchor:</b> Sultan Qaboos University (Dept. of Art Education &amp; Graphic Design).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Contemporary Arab visual arts, sacred ontology, coastal trade history, Middle Eastern typography, and continuous ontological transformation.<br>
&bull; <b>Curatorial Focus:</b> Architectural canvas works utilizing desert pigments and luminous tones to explore spiritual continuity, Gulf heritage, and contemporary Arabian visual identity.`
    },

    // --- ARGENTINA CITIES ---
    ar_buenosaires: {
        city: "ARGENTINA &bull; BUENOS AIRES",
        shows: `&bull; <b>Institutional Anchor:</b> National University of Tres de Febrero (UNTREF), Centre for Genocide Studies.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Scholarly dialogue on historical rupture, memory, and the Yiddish concept of <i>Khurbn</i> (Destruction / Historical Watershed), serving as conceptual research for upcoming retrospectives.<br>
&bull; <b>Curatorial Focus:</b> Exploration of exile, historical continuity, and global Jewish heritage transformed into large-scale canvas research.`
    },

    // --- BELGIUM CITIES ---
    be_brussels: {
        city: "BELGIUM &bull; BRUSSELS",
        shows: `&bull; <b>Institutional Anchor:</b> Brussels Expo; Vrije Universiteit Brussel (Dept. of Art History &amp; Archaeology).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Major public exhibition platforms for eco-sculptural works, integrated with academic research into Northern Renaissance art history and urban heritage.<br>
&bull; <b>Curatorial Focus:</b> Retrospective displays of eco-sculptural box works alongside large-scale canvas research examining human gratitude and spatial containment.`
    },
    be_leuven: {
        city: "BELGIUM &bull; LEUVEN",
        shows: `&bull; <b>Institutional Anchor:</b> KU Leuven (Division Forest, Nature &amp; Landscape).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Forest canopy ecology, landscape buffer zones, and environmental conservation in Western Europe.<br>
&bull; <b>Curatorial Focus:</b> Organic green and earth-toned canvas compositions exploring ecological protection zones, forest balance, and environmental stewardship.`
    },

    // --- POLAND CITIES ---
    pl_duszniki: {
        city: "POLAND &bull; DUSZNIKI-ZDRÓJ",
        shows: `&bull; <b>Institutional Anchor:</b> Museum of Papermaking.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Historical paper manufacturing, raw material conservation, and physical paper craft as a repository for European cultural memory.<br>
&bull; <b>Curatorial Focus:</b> First public exhibition site for <i>Life of a Box</i>, presenting physical paper sculptures and historical paper conservation studies.`
    },
    pl_poznan: {
        city: "POLAND &bull; POZNAŃ",
        shows: `&bull; <b>Institutional Anchor:</b> Magdalena Abakanowicz University of Arts in Poznań.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Contemporary curatorial theory, radical spatial installation, and modern Eastern European art criticism.<br>
&bull; <b>Curatorial Focus:</b> Bold, high-contrast chromatic canvases probing spatial installations, vibrant visual accents, and modern curatorial practice.`
    },
    pl_warsaw: {
        city: "POLAND &bull; WARSAW",
        shows: `&bull; <b>Institutional Anchor:</b> University of Warsaw (Institute of the Americas and Europe).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Transatlantic cultural studies, socio-political history, and regional Eastern European literary traditions.<br>
&bull; <b>Curatorial Focus:</b> Atmospheric, airy canvas works capturing lightness, historical transitions, and European diplomatic dialogue.`
    },
    pl_krakow: {
        city: "POLAND &bull; KRAKOW",
        shows: `&bull; <b>Institutional Anchor:</b> Jan Matejko Academy of Fine Arts.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Classical painterly rigor, historical fine art pedagogy, and rare linguistic concepts in contemporary visual art.<br>
&bull; <b>Curatorial Focus:</b> Precision-driven canvas works utilizing classical glazing methods to explore unique linguistic events, painterly discipline, and historical memory.`
    },

    // --- SLOVENIA CITIES ---
    si_ljubljana: {
        city: "SLOVENIA &bull; LJUBLJANA",
        shows: `&bull; <b>Institutional Anchor:</b> University of Ljubljana (Department of Art History).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Contemporary European art curation, bodily movement in visual media, and post-socialist cultural transitions.<br>
&bull; <b>Curatorial Focus:</b> Dynamic kinetic brushwork studies investigating physical tension, bodily presence, and the visual representation of movement.`
    },
    si_koper: {
        city: "SLOVENIA &bull; KOPER",
        shows: `&bull; <b>Institutional Anchor:</b> University of Primorska (Faculty of Humanities).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Adriatic humanism, coastal philosophical traditions, and political hesitation in modern social structures.<br>
&bull; <b>Curatorial Focus:</b> Coastal light studies and balanced abstract canvases probing psychological uncertainty, space, and Mediterranean philosophy.`
    },

    // --- CROATIA CITIES ---
    hr_zagreb: {
        city: "CROATIA &bull; ZAGREB",
        shows: `&bull; <b>Institutional Anchor:</b> University of Zagreb (Academy of Fine Arts).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Balkan contemporary art pedagogy, visual perception, and structural criticism in historical fine art training.<br>
&bull; <b>Curatorial Focus:</b> Layered figurative canvases utilizing chiaroscuro techniques to unpack perception, illusion, and structural narrative integrity.`
    },

    // --- GREECE CITIES ---
    gr_athens: {
        city: "GREECE &bull; ATHENS",
        shows: `&bull; <b>Institutional Anchor:</b> Athens School of Fine Arts (Dept. of Theory and History of Art).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Classical aesthetic theory, Mediterranean cultural memory, and the philosophy of oblivion versus historical preservation.<br>
&bull; <b>Curatorial Focus:</b> Monochromatic, stone-textured canvases exploring archaeological memory, classical myth structures, and the persistence of light through decay.`
    },

    // --- NORWAY CITIES ---
    no_longyearbyen: {
        city: "NORWAY &bull; LONGYEARBYEN (SVALBARD)",
        shows: `&bull; <b>Institutional Anchor:</b> Svalbard Global Seed Vault (Spitsbergen).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Arctic biodiversity preservation, agricultural heritage, and global bio-security against ecological crisis.<br>
&bull; <b>Curatorial Focus:</b> Deep green and icy tonal studies reflecting biological resilience, light capture, and humanity's collective bio-archive.`
    },
    no_oslo: {
        city: "NORWAY &bull; OSLO",
        shows: `&bull; <b>Institutional Anchor:</b> Innovation Norway.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Nordic cultural editing, existential philosophical concepts, and Scandinavian public media curation.<br>
&bull; <b>Curatorial Focus:</b> Somber, atmospheric landscapes capturing Northern light, existential reflection, and Nordic emotional geography.`
    },

    // --- FINLAND CITIES ---
    fi_oulu: {
        city: "FINLAND &bull; OULU (CAPITAL OF CULTURE 2026)",
        shows: `&bull; <b>Institutional Anchor:</b> Oulu European Capital of Culture 2026; Galleria MABD.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Solo institutional museum programming for Oulu 2026, exploring Northern European cultural identity, community warmth, and regional art platforms.<br>
&bull; <b>Curatorial Focus:</b> Major solo retrospective series featuring tactile, arctic-inspired canvases probing human kindness, social resilience, and Nordic landscape philosophy.`
    },
    fi_helsinki: {
        city: "FINLAND &bull; HELSINKI",
        shows: `&bull; <b>Institutional Anchor:</b> University of Helsinki (Social &amp; Cultural Anthropology, Theoretical Philosophy, Economic History).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Economic history, theoretical philosophy, spatial location theory, and social anthropology in extreme climates.<br>
&bull; <b>Curatorial Focus:</b> Structural and spatial canvas research reflecting northern economic resilience, physical endurance, and philosophy of mind.`
    },

    // --- SYRIA CITIES ---
    sy_damascus: {
        city: "SYRIA &bull; DAMASCUS",
        shows: `&bull; <b>Institutional Anchor:</b> Syrian Cultural &amp; Diplomatic Representation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Archival research on Levant architectural history, civil dignity under severe adversity, and ancient trade route craftsmanship.<br>
&bull; <b>Curatorial Focus:</b> Richly textured golden and earth-toned canvases honoring the enduring dignity, architectural elegance, and historical permanence of Syrian cultural heritage.`
    },

    // --- PORTUGAL CITIES ---
    pt_lisbon: {
        city: "PORTUGAL &bull; LISBON",
        shows: `&bull; <b>Institutional Anchor:</b> On the Move; Casa Oxente.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Lusophone diaspora narratives, maritime migration, emotional geography, and the untranslatable state of longing (<i>Saudade</i>).<br>
&bull; <b>Curatorial Focus:</b> Fluid, oceanic canvas works incorporating deep indigo and raw linen textures to capture memory, distance, and Atlantic cultural connections.`
    },

    // --- UKRAINE CITIES ---
    ua_kyiv: {
        city: "UKRAINE &bull; KYIV",
        shows: `&bull; <b>Institutional Anchor:</b> National Museum of the History of Ukraine; Cultprojector NGO.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Urgent field inquiry into monument preservation during conflict, civic defense of art, and national identity defense through material culture.<br>
&bull; <b>Curatorial Focus:</b> Stark, powerful compositions utilizing reclaimed museum-grade paper and dramatic color contrasts to visually express resilience, victory, and preservation.`
    },

    // --- SLOVAKIA CITIES ---
    sk_bratislava: {
        city: "SLOVAKIA &bull; BRATISLAVA",
        shows: `&bull; <b>Institutional Anchor:</b> Slovak National Gallery.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Historical art collection curation, sacred spatial theory (<i>Chōra</i>), and Central European art preservation.<br>
&bull; <b>Curatorial Focus:</b> Architectural canvas studies probing spatial philosophy, personal conviction, and classical art conservation.`
    },
    sk_sered: {
        city: "SLOVAKIA &bull; SEREĎ",
        shows: `&bull; <b>Institutional Anchor:</b> Slovak National Museum.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Historical memory, Holocaust research, and civil rights history in Central Europe.<br>
&bull; <b>Curatorial Focus:</b> Somber, reflective paper and canvas works dedicated to historical trauma, memory retention, and human rights advocacy.`
    },

    // --- RUSSIA CITIES ---
    ru_volgograd: {
        city: "RUSSIA &bull; VOLGOGRAD",
        shows: `&bull; <b>Institutional Anchor:</b> Volgograd State University.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Archival literature studies, textual preservation, and language history along the Volga basin.<br>
&bull; <b>Curatorial Focus:</b> Layered textual and calligraphic paintings probing the weight of archived knowledge, quiet contemplation, and historical document preservation.`
    },

    // --- ESTONIA CITIES ---
    ee_tartu: {
        city: "ESTONIA &bull; TARTU",
        shows: `&bull; <b>Institutional Anchor:</b> University of Tartu (Dept. of Ethnology &amp; UNESCO Chair); Estonian National Museum.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Finno-Ugric ethnographic heritage, maritime history, and social crisis dynamics.<br>
&bull; <b>Curatorial Focus:</b> Finno-Ugric cultural motifs and cold light hues reflecting maritime traditions, archival preservation, and Baltic history.`
    },
    ee_tallinn: {
        city: "ESTONIA &bull; TALLINN",
        shows: `&bull; <b>Institutional Anchor:</b> Pop and Contemporary Art Museum.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Modern Baltic art platforms, digital social structures, and contemporary European curation.<br>
&bull; <b>Curatorial Focus:</b> Clean, minimal visual structures incorporating modern technological metaphors and Baltic contemporary art aesthetics.`
    },

    // --- LIECHTENSTEIN CITIES ---
    li_vaduz: {
        city: "LIECHTENSTEIN &bull; VADUZ",
        shows: `&bull; <b>Institutional Anchor:</b> The Princely Collections – Art History Library.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Masterwork archival analysis, historical patronage systems, and technical innovation in classical European painting.<br>
&bull; <b>Curatorial Focus:</b> Intricate visual studies drawing on Renaissance and Baroque material techniques, exploring intellectual ingenuity and fine art collecting.`
    },

    // --- HUNGARY CITIES ---
    hu_budapest: {
        city: "HUNGARY &bull; BUDAPEST",
        shows: `&bull; <b>Institutional Anchor:</b> Ludwig Museum; Central European University (Romani Studies Program).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Contemporary museum curation, institutional compliance, minority visibility, post-communist cultural shifts, and societal repair.<br>
&bull; <b>Curatorial Focus:</b> Bold, contrasting canvas works confronting institutional structures while honoring marginalized oral histories and Romani visual traditions.`
    },

    // --- UNITED ARAB EMIRATES CITIES ---
    ae_abudhabi: {
        city: "UNITED ARAB EMIRATES &bull; ABU DHABI",
        shows: `&bull; <b>Institutional Anchor:</b> The Arts Center at NYU Abu Dhabi; Abu Dhabi University.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Global migration corridors, cross-cultural reconciliation, human interdependence, and international performing arts curation.<br>
&bull; <b>Curatorial Focus:</b> Dynamic, large-format canvases exploring desert light, global interdependence, and modern Gulf cultural crossroads.`
    },
    ae_dubai: {
        city: "UNITED ARAB EMIRATES &bull; DUBAI",
        shows: `&bull; <b>Institutional Anchor:</b> American University in Dubai.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Contemporary Middle Eastern cultural studies, urban development, and humanistic philosophy in modern Gulf hubs.<br>
&bull; <b>Curatorial Focus:</b> Architectural canvas research probing modern identity, urban topography, and human connection in fast-evolving metropolises.`
    },

    // --- LITHUANIA CITIES ---
    lt_vilnius: {
        city: "LITHUANIA &bull; VILNIUS",
        shows: `&bull; <b>Institutional Anchor:</b> National Museum of Lithuania; Vilnius Academy of Arts (VAA Exhibition Halls "Titanikas").<br>
&bull; <b>Field &amp; Conceptual Research:</b> Baltic historical defense, raw emotional expression in fine art pedagogy, and the preservation of national folklore.<br>
&bull; <b>Curatorial Focus:</b> Expressive, highly textured figurative and spatial works capturing Baltic perseverance, raw human feeling, and historical continuity.`
    },

    // --- KYRGYZSTAN CITIES ---
    kg_bishkek: {
        city: "KYRGYZSTAN &bull; BISHKEK",
        shows: `&bull; <b>Institutional Anchor:</b> American University of Central Asia.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Nomadic heritage studies, high-altitude environmental adaptability, Silk Road historical preservation, and post-Soviet identity.<br>
&bull; <b>Curatorial Focus:</b> Earth-pigment paintings and woven-texture studies reflecting mountain topographies, nomadic resilience, and Central Asian cultural history.`
    },

    // --- MONTENEGRO CITIES ---
    me_ljesevici: {
        city: "MONTENEGRO &bull; LJEŠEVIĆI",
        shows: `&bull; <b>Institutional Anchor:</b> ORATIO Foundation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Mediterranean coastal history, civic gratitude, and the role of quiet reflection in modern Balkan dialogue.<br>
&bull; <b>Curatorial Focus:</b> Luminous coastal landscapes and meditative abstract canvases reflecting Adriatic light, peace, and human connection.`
    },

    // --- CYPRUS CITIES ---
    cy_nicosia: {
        city: "CYPRUS &bull; NICOSIA",
        shows: `&bull; <b>Institutional Anchor:</b> Ministry of Culture.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Island division dynamics, Levant trade history, and long-term strategic visions for Mediterranean art preservation.<br>
&bull; <b>Curatorial Focus:</b> Architectural and historical canvas research examining vision, cultural crossroads, and the preservation of Levantine archaeological heritage.`
    },

    // --- NORTH AMERICA NODES ---
    harvard: {
        city: "USA &bull; CAMBRIDGE &amp; HARVARD ACADEMIC NETWORK",
        shows: `&bull; <b>Institutional Anchor:</b> Harvard University Academic Directorate (Arts + Mind Lab, Dept. of Anthropology, Graduate School of Design, Harvard Divinity School, Law School, Public Health).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Interdisciplinary inquiry into neuro-aesthetics, historical trauma, urban design topologies, cognitive freedom, and public policy mediation.<br>
&bull; <b>Curatorial Focus:</b> Monumental canvas structures examining human cognitive limits, historical memory, and legal human rights frameworks.`
    },
    usa_east: {
        city: "USA &bull; EAST COAST &amp; IVY LEAGUE ACADEMIC DIRECTORATES",
        shows: `&bull; <b>Institutional Anchor:</b> Yale University (New Haven); Columbia University (New York); Princeton University (NJ); MIT (Cambridge); Brown University (Providence); Johns Hopkins (Baltimore); Georgetown (D.C.); UPenn (PA).<br>
&bull; <b>Field &amp; Conceptual Research:</b> High-level dialogue covering liminal astrophysics, Persian literary archives, technological ethics, environmental regeneration, and political defiance.<br>
&bull; <b>Curatorial Focus:</b> Reclaimed packaging installations and dense calligraphic canvases dissecting human empathy, civic history, and systemic grace.`
    },
    usa_west: {
        city: "USA &bull; WEST COAST &amp; PACIFIC RIM INSTITUTIONS",
        shows: `&bull; <b>Institutional Anchor:</b> UC System (Berkeley, Irvine, Davis, San Diego); Stanford University; Skirball Cultural Center; University of Washington (Seattle); Reed College (OR); Univ. of Hawaii; Univ. of Alaska Anchorage.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Pacific Rim material traditions, structural linguistics, counter-genocidal discourse, Olfactory aesthetics, and Indigenous North American heritage.<br>
&bull; <b>Curatorial Focus:</b> Coastal topologies, sensory perception canvases, and environmental vulnerability studies across sub-arctic and Pacific regions.`
    },
    usa_midwest_south: {
        city: "USA &bull; MIDWEST, MOUNTAIN &amp; SUNBELT INSTITUTIONS",
        shows: `&bull; <b>Institutional Anchor:</b> University of Chicago; Northwestern; Univ. of Colorado Boulder; Indiana Univ. Bloomington; Boise State; Univ. of Utah; UT Austin; Equal Justice Initiative (Montgomery, AL); Arizona State Univ.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Post-colonial historiography, geopolitical art interventions, Indigenous ecological medicine, surrealist history, and racial justice reconciliation.<br>
&bull; <b>Curatorial Focus:</b> Scalable visual systems, desert photography research, and expressive canvases addressing historical reconciliation and community resilience.`
    },

    // --- OTHER GLOBAL CITIES ---
    au_brisbane_qld: {
        city: "AUSTRALIA &bull; BRISBANE",
        shows: `&bull; <b>Institutional Anchor:</b> University of Queensland Art Museum &amp; Outer Space Directorate.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Ephemeral dynamics, institutional visibility, and fluid movement within South Pacific exhibition spaces.<br>
&bull; <b>Curatorial Focus:</b> Perceptual recognition studies and dynamic fluid abstraction on canvas.`
    },
    au_sydney_nsw: {
        city: "AUSTRALIA &bull; SYDNEY",
        shows: `&bull; <b>Institutional Anchor:</b> University of Sydney (Faculty of Arts &amp; Social Sciences).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Holocaust studies, historical vulnerability, atmospheric strain, and global youth depth psychology networks.<br>
&bull; <b>Curatorial Focus:</b> Structural abstraction examining collective trauma, human vulnerability, and historical memory.`
    },
    au_melbourne: {
        city: "AUSTRALIA &bull; MELBOURNE",
        shows: `&bull; <b>Institutional Anchor:</b> The University of Melbourne (School of Culture and Communication).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Humanistic critical theory, language as an intellectual vessel, and contemporary Australian cultural studies.<br>
&bull; <b>Curatorial Focus:</b> Integration of linguistic philosophy into large-scale visual execution and canvas research.`
    },
    au_canberra: {
        city: "AUSTRALIA &bull; CANBERRA",
        shows: `&bull; <b>Institutional Anchor:</b> M16 Artspace Executive Directorate.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Spatial autonomy, creative independence, and unrestricted artistic expression beyond regulatory boundaries.<br>
&bull; <b>Curatorial Focus:</b> Raw gestural canvas studies exploring ungovernable creative freedom and spatial dynamics.`
    },
    ws_samoa: {
        city: "SAMOA &bull; APIA",
        shows: `&bull; <b>Institutional Anchor:</b> National University of Samoa.<br>
&bull; <b>Field &amp; Conceptual Research:</b> South Pacific philosophy, emotional equilibrium, and ocean topologies within modern educational frameworks.<br>
&bull; <b>Curatorial Focus:</b> Layered material research and structural canvas compositions capturing Pacific spatial balance and stability.`
    },
    fj_suva: {
        city: "FIJI &bull; SUVA",
        shows: `&bull; <b>Institutional Anchor:</b> The University of the South Pacific.<br>
&bull; <b>Field &amp; Conceptual Research:</b> South Pacific literary traditions, linguistic nuance, and post-colonial island narratives across Oceania.<br>
&bull; <b>Curatorial Focus:</b> Fluid gestural studies examining maritime heritage, oral narrative structures, and regional identity.`
    },
    vu_vanuatu: {
        city: "VANUATU &bull; PORT-VILA",
        shows: `&bull; <b>Institutional Anchor:</b> Vanuatu Cultural Centre (VKS).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Global crisis response, human unity, and the universal imperative of empathy as a catalyst for restoration.<br>
&bull; <b>Curatorial Focus:</b> Intimate textural and color-field compositions exploring social cohesion and Indigenous Pacific heritage preservation.`
    },
    th_bangkok: {
        city: "THAILAND &bull; BANGKOK",
        shows: `&bull; <b>Institutional Anchor:</b> Chulalongkorn University (Faculty of Fine and Applied Arts).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Southeast Asian aesthetic heritage, performance methodologies, and ritual geometry in contemporary practice.<br>
&bull; <b>Curatorial Focus:</b> Structural research into spatial cadence, ritual geometry, and fluid material traditions across East Asian art networks.`
    },
    ph_quezon: {
        city: "PHILIPPINES &bull; QUEZON CITY",
        shows: `&bull; <b>Institutional Anchor:</b> University of the Philippines Diliman (College of Fine Arts).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Archipelagic visual histories, community-grounded creative discourse, and post-colonial artistic identity.<br>
&bull; <b>Curatorial Focus:</b> Visual cartography, island memory, and material vernacular studies across Southeast Asian networks.`
    },
    nz_auckland: {
        city: "NEW ZEALAND &bull; AUCKLAND &amp; REGIONAL NODES",
        shows: `&bull; <b>Institutional Anchor:</b> Univ. of Auckland; Waitangi Treaty Grounds; Tūhura Otago Museum (Dunedin); Wellington Youth Network; Taranaki Gallery.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Indigenous studies (Te Wānanga o Waipapa), social existence, youth psychology, and ecological packaging preservation.<br>
&bull; <b>Curatorial Focus:</b> Recycled material sculptures and canvas research probing land memory, Indigenous identity, and youth perspective archives.`
    },
    cz_prague: {
        city: "CZECH REPUBLIC &bull; PRAGUE",
        shows: `&bull; <b>Institutional Anchor:</b> Ministry of Environment &amp; State Gallery Networks.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Ecological state retrospectives, Central European artistic heritage, and environmental policy mediation.<br>
&bull; <b>Curatorial Focus:</b> Monumental retrospective series mapping environmental consciousness and European institutional memory.`
    },
    goa: {
        city: "INDIA &bull; GOA, MUMBAI &amp; NEW DELHI",
        shows: `&bull; <b>Institutional Anchor:</b> Carpe Diem Gallery (Goa); Sala de Arte; Chatterjee &amp; Lal (Mumbai); Judah Hyam Synagogue (New Delhi); Sethu Centre.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Sacred beauty, interfaith theological inquiry, pediatrics neurodevelopment benefit series, and Indian visual traditions.<br>
&bull; <b>Curatorial Focus:</b> Monographic solo series (<i>Mukha</i>, <i>Samay</i>, <i>Aliferous</i>) and benefit canvases addressing pediatric neurodevelopment.`
    },
    pakistan: {
        city: "PAKISTAN &bull; PESHAWAR &amp; KARACHI",
        shows: `&bull; <b>Institutional Anchor:</b> University of Peshawar (Dept. of Environmental Sciences); Mohatta Palace Museum (Karachi).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Borderland autonomy, Indigenous tribal justice systems, agrarian self-reliance, and packaging sustainability.<br>
&bull; <b>Curatorial Focus:</b> Photographic documentation and raw monochromatic canvas research dissecting tribal honor codes and environmental endurance.`
    },
    malaysia: {
        city: "MALAYSIA &bull; KUALA LUMPUR",
        shows: `&bull; <b>Institutional Anchor:</b> Contemporary Visual Art Directorate.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Retrospective monographic archives and Southeast Asian urban visual culture.<br>
&bull; <b>Curatorial Focus:</b> Large-scale retrospective canvas research mapping transcultural exchanges in Southeast Asia.`
    },
    bc_vancouver: {
        city: "CANADA &bull; VANCOUVER &amp; PACIFIC COAST",
        shows: `&bull; <b>Institutional Anchor:</b> Museum of Anthropology (MOA); Univ. of British Columbia; Univ. of Victoria; JASCO Applied Sciences.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Coast Salish land memory, Indigenous language endangerment, and underwater marine acoustic research.<br>
&bull; <b>Curatorial Focus:</b> Recycled packaging grounds for <i>Life of a Box</i> and marine acoustic visual translations.`
    },
    alberta_calgary: {
        city: "CANADA &bull; EDMONTON &amp; CALGARY",
        shows: `&bull; <b>Institutional Anchor:</b> Univ. of Alberta (Edmonton); Univ. of Calgary; Medalta Historic District.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Nehiyaw (Cree) relational philosophy (<i>Sâkihitowin</i>), spatial acoustics, and industrial packaging heritage.<br>
&bull; <b>Curatorial Focus:</b> Prairie monographic studio research and industrial material packaging preservation.`
    },
    toronto_waterloo: {
        city: "CANADA &bull; TORONTO &amp; WATERLOO",
        shows: `&bull; <b>Institutional Anchor:</b> Seneca Polytechnic; Univ. of Waterloo; TMU; Trent Univ.; UJA Federation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Anishinaabe peace frameworks (<i>Skén:nen</i>), youth psychology archives, and social cohesion legal frameworks.<br>
&bull; <b>Curatorial Focus:</b> Ecological packaging preservation and visual research into human rights and Indigenous governance.`
    },
    ottawa_kingston: {
        city: "CANADA &bull; OTTAWA &amp; KINGSTON",
        shows: `&bull; <b>Institutional Anchor:</b> National Gallery of Canada; Carleton University; Queen's University.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Anishinaabemowin framework <i>Ankosé</i> ('everything is connected'), matriarchal concepts, and cosmic energy physics.<br>
&bull; <b>Curatorial Focus:</b> Territorially grounded canvases and cosmological transformation studies.`
    },
    montreal_qc: {
        city: "CANADA &bull; MONTREAL &amp; HALIFAX",
        shows: `&bull; <b>Institutional Anchor:</b> McGill University; Native Women's Shelter of Montreal; Arteria Gallery; Dalhousie Univ. (Halifax).<br>
&bull; <b>Field &amp; Conceptual Research:</b> First Nations rights, medical humanities, temporal perception, and maritime sanctuary research.<br>
&bull; <b>Curatorial Focus:</b> Bicultural philosophical canvases, Atlantic ocean studies, and recycled packaging art.`
    },
    yukon_atlantic: {
        city: "CANADA &bull; DAWSON CITY &amp; WINNIPEG",
        shows: `&bull; <b>Institutional Anchor:</b> ODD Gallery (Klondike Institute of Art); Univ. of Manitoba; Univ. of Saskatchewan.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Sub-Arctic ecological material research, Inuit existential philosophy, and prairie landscape scale.<br>
&bull; <b>Curatorial Focus:</b> Northern recycled packaging research and wide-format prairie landscape compositions.`
    },
    germany: {
        city: "GERMANY &bull; BERLIN &amp; FRANKFURT",
        shows: `&bull; <b>Institutional Anchor:</b> Jewish Museum Frankfurt; Hamburger Kunsthalle.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Historical archives preservation, European cultural memory, and post-war visual theory.<br>
&bull; <b>Curatorial Focus:</b> Historical archival canvas research and structural paper installations.`
    },

    // --- AFRICAN CITIES ---
    af_pretoria: {
        city: "SOUTH AFRICA &bull; PRETORIA",
        shows: `&bull; <b>Institutional Anchor:</b> Centre for Human Rights — University of Pretoria.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Human rights legal philosophy, systemic dignity, and unexpected intersections of fate within institutional spaces.<br>
&bull; <b>Curatorial Focus:</b> Large-scale canvas studies examining human agency, institutional protection, and structural resilience in African civil society.`
    },
    af_johannesburg: {
        city: "SOUTH AFRICA &bull; JOHANNESBURG",
        shows: `&bull; <b>Institutional Anchor:</b> The TEARS Foundation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Systemic power structures, survivor advocacy, social justice, and the sociopolitical mechanics of hegemony.<br>
&bull; <b>Curatorial Focus:</b> High-contrast gestural abstraction exploring body memory, power dynamics, and individual voice recovery.`
    },
    af_nairobi: {
        city: "KENYA &bull; NAIROBI",
        shows: `&bull; <b>Institutional Anchor:</b> PAWA Initiative (PAWA254).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Civic engagement, creative activism, and youth movement politics as visual methodologies for societal shift.<br>
&bull; <b>Curatorial Focus:</b> Monumental canvas research connecting street-level civil discourse with formal abstraction and public memory.`
    },
    af_lagos: {
        city: "NIGERIA &bull; LAGOS",
        shows: `&bull; <b>Institutional Anchor:</b> Dept. of Art History — University of Lagos; Omenka Foundation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> West African art histories, curatorial stewardship, post-colonial visual traditions, and cultural endurance.<br>
&bull; <b>Curatorial Focus:</b> Multi-layered canvas research probing bronze sculptural traditions, institutional memory, and West African urban strength.`
    },
    af_naija_vernacular: {
        city: "NIGERIA &bull; VERNACULAR DIALOGUES",
        shows: `&bull; <b>Institutional Anchor:</b> Regional Linguistic Forum &amp; Intangible Cultural Heritage Network.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Pidgin visual idioms, informal micro-economic solidarity networks, and body memory in urban labor spaces.<br>
&bull; <b>Curatorial Focus:</b> Textural and figurative canvas studies capturing collective wealth systems, identity, and daily endurance.`
    },
    af_gaborone: {
        city: "BOTSWANA &bull; GABORONE",
        shows: `&bull; <b>Institutional Anchor:</b> Thapong Visual Arts Centre.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Regional visual arts management, Southern African abstraction, and linguistic hermeneutics.<br>
&bull; <b>Curatorial Focus:</b> Structural compositions investigating semiotic systems, spatial light, and cultural translation across borders.`
    },
    af_madagascar: {
        city: "MADAGASCAR &bull; ANTANANARIVO",
        shows: `&bull; <b>Institutional Anchor:</b> American School of Antananarivo.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Malagasy heritage, island ecology, ancestral memory, and systemic social well-being (<i>Sambatra</i>).<br>
&bull; <b>Curatorial Focus:</b> Tonal and environmental canvas research investigating island isolation, ancestral balance, and communal health.`
    },
    af_congo: {
        city: "DEMOCRATIC REPUBLIC OF CONGO &bull; KINSHASA / BRAZZAVILLE",
        shows: `&bull; <b>Institutional Anchor:</b> Congo Children’s Trust.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Vulnerable youth populations, post-conflict reconciliation, institutional child advocacy, and historical identity.<br>
&bull; <b>Curatorial Focus:</b> Expressive figurative studies probing vulnerability, resilience, and the historical continuity of human dignity in Central Africa.`
    },
    af_bahamas: {
        city: "THE BAHAMAS &bull; NASSAU",
        shows: `&bull; <b>Institutional Anchor:</b> Government Cultural Directorate &amp; National Heritage Exchange.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Diaspora heritage, maritime history, and island sovereignty as frames for historical endurance.<br>
&bull; <b>Curatorial Focus:</b> Luminous color theory and expansive canvas research examining ocean topologies, migration narratives, and spiritual continuity.`
    },
    af_pan_african_research: {
        city: "PAN-AFRICAN FIELD RESEARCH &bull; REGIONAL TERRITORIES",
        shows: `&bull; <b>Institutional Anchor:</b> Regional Anthropological &amp; Ethnographic Expeditions.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Indigenous oral traditions, disappearing dialects, mythologies, and human-nature reciprocity (<i>Kuumba</i>).<br>
&bull; <b>Curatorial Focus:</b> Monumental canvas retrospectives and sensory installations integrating tribal folklore and fauna iconographies.`
    },
    cn_changsha: {
        city: "CHINA &bull; CHANGSHA",
        shows: `&bull; <b>Institutional Anchor:</b> Hunan Normal University (HCTS) &amp; University Art Museum Directorate.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Transcultural research dialogue analyzing expansive world-literary perspectives and cross-border curation.<br>
&bull; <b>Curatorial Focus:</b> Monumental compositions exploring transcultural poetic structures, narrative arcs, and literary theory.`
    },
    co_bogota: {
        city: "COLOMBIA &bull; BOGOTÁ",
        shows: `&bull; <b>Institutional Anchor:</b> Universidad de los Andes (Academic &amp; Humanities Faculties).<br>
&bull; <b>Field &amp; Conceptual Research:</b> South American socio-cultural historiography, pedagogical frameworks, and memory landscapes.<br>
&bull; <b>Curatorial Focus:</b> Canvas studies analyzing memory landscapes, institutional knowledge transfer, and urban Andean spatial dynamics.`
    },
    vn_hanoi: {
        city: "VIETNAM &bull; HANOI",
        shows: `&bull; <b>Institutional Anchor:</b> Blue Dragon Children's Foundation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Multi-stage narrative dialogue, trauma recovery, child-led art therapy recordings, and cognitive freedom.<br>
&bull; <b>Curatorial Focus:</b> Documentation of lived childhood experiences, personal resilience, and human dignity transformed into canvas research.`
    },
    cr_sanjose: {
        city: "COSTA RICA &bull; SAN JOSÉ",
        shows: `&bull; <b>Institutional Anchor:</b> Fundación Ars TEOR/éTica &amp; Environmental Leadership Initiatives.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Climate governance, systemic paradigm shifts, ecological resilience, and institutional co-reliance.<br>
&bull; <b>Curatorial Focus:</b> Visual frameworks investigating collective responsibility, environmental optimism, and systemic transition.`
    },
    gl_nuuk: {
        city: "GREENLAND &bull; NUUK",
        shows: `&bull; <b>Institutional Anchor:</b> Greenland National Museum &amp; Archives; Nuuk Art Museum; Sipineq+; Diocese of Greenland.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Intangible cultural heritage, Arctic archaeology, human rights advocacy, and ecclesiastical linguistics.<br>
&bull; <b>Curatorial Focus:</b> Reclaimed packaging components for <i>Life of a Box</i> and arctic environmental light research.`
    },
    gl_ilulissat: {
        city: "GREENLAND &bull; ILULISSAT",
        shows: `&bull; <b>Institutional Anchor:</b> Regional Museums of North-Greenland; Katuaq Cultural Centre.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Avannaata regional heritage, coastal arctic identity, and civic community cohesion.<br>
&bull; <b>Curatorial Focus:</b> Cold-climate visual textures, ice topologies, and communal arctic heritage studies.`
    },
    gl_aalborg: {
        city: "GREENLAND (DIASPORA) &bull; AALBORG",
        shows: `&bull; <b>Institutional Anchor:</b> Det Grønlandske Hus i Aalborg.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Educational outreach, Inuit diaspora studies, and cross-cultural Northern European integration.<br>
&bull; <b>Curatorial Focus:</b> Migration canvases, memory retention, and educational cultural archives.`
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
            row.style.display = ''; // Reverts to stylesheet rule
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
