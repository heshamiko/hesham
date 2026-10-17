/* ==========================================================================
   HESHAM MALIK — STUDIO ARCHIVE & CATALOGUE RAISONNÉ
   Flagship Interactive Engine (main.js)
   ========================================================================== */

// --- 1. MOMBASA ESSAY ACCORDION TOGGLE ---
function toggleMombasaEssay() {
    const essay = document.getElementById('mombasa-essay');
    const icon = document.getElementById('mombasa-toggle-icon');
    const trigger = document.getElementById('mombasa-trigger');
    if (!essay || !icon || !trigger) return;

    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        essay.hidden = true;
        icon.innerHTML = '+';
    } else {
        trigger.setAttribute('aria-expanded', 'true');
        essay.hidden = false;
        icon.innerHTML = '&#8722;'; // Minus sign
    }
}

// --- 2. GLOBAL FOOTPRINT MAP DATA REPOSITORY ---
const mapCityData = {
    uk_london: {
        city: "UNITED KINGDOM &bull; LONDON",
        shows: `&bull; <b>Institutional Anchor:</b> Tate; Amazon UK; Index on Censorship; Courtauld Institute of Art; University College London (UCL); SOAS University of London; Queen Mary University of London; London School of Economics (LSE); Peace Direct; Conciliation Resources.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Interdisciplinary dialogue spanning neuroaesthetics, ecosystem dynamics, global thought, post-colonial geography, and conflict resolution.<br>
&bull; <b>Curatorial Focus:</b> Reclaiming paper mediums and vast linguistic lexicons to transform critical socio-political theory into large-scale canvas series probing power and human endurance.`
    },
    oxford: {
        city: "UNITED KINGDOM &bull; OXFORD",
        shows: `&bull; <b>Institutional Anchor:</b> University of Oxford; The Ruskin School of Art; Environmental Change Institute.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Scholarly exchanges focused on ecosystem dynamics, ethics, modern Middle Eastern history, and fine art theory.<br>
&bull; <b>Curatorial Focus:</b> Deep earth and organic material studies mapping biodiversity, systemic change, and the philosophical foundations of biological flourishing.`
    },
    cambridge: {
        city: "UNITED KINGDOM &bull; CAMBRIDGE",
        shows: `&bull; <b>Institutional Anchor:</b> University of Cambridge.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Academic collaboration surrounding comparative linguistics, migratory ethics, and core philosophical concepts.<br>
&bull; <b>Curatorial Focus:</b> Textual and linguistic visual structures translating complex semantic structures into minimalist canvas compositions.`
    },
    edinburgh: {
        city: "UNITED KINGDOM &bull; EDINBURGH",
        shows: `&bull; <b>Institutional Anchor:</b> Strathallan Academic Platform &amp; Scottish Material Culture Project (<i>Life of a Box</i> Initiative); National Galleries Scotland; University of Edinburgh.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Transformative material cycles, educational transit, physical metamorphosis, and historical art curation.<br>
&bull; <b>Curatorial Focus:</b> Structural box assemblage, tactile paper studies, and material relocation research detailing form transformation.`
    },
    aberdeen: {
        city: "UNITED KINGDOM &bull; ABERDEEN",
        shows: `&bull; <b>Institutional Anchor:</b> University of Aberdeen.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Social anthropology studies exploring human correspondence, environmental perception, and lived experience in coastal ecosystems.<br>
&bull; <b>Curatorial Focus:</b> Organic pigment studies investigating tactile engagement with natural landscapes and human connectivity.`
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
&bull; <b>Field &amp; Conceptual Research:</b> Archival research and library sciences inquiry into information preservation, civic concern, and institutional stewardship.<br>
&bull; <b>Curatorial Focus:</b> Deep monochromatic canvas works exploring quiet contemplation, textual archival structures, and civic responsibility.`
    },
    lincoln: {
        city: "UNITED KINGDOM &bull; LINCOLN",
        shows: `&bull; <b>Institutional Anchor:</b> University of Lincoln.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Visual arts research focusing on environmental aesthetics, color theory, and regional artistic practices.<br>
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
&bull; <b>Curatorial Focus:</b> Layered climate-inspired landscapes exploring global ecological vulnerability and planetary dynamics.`
    },
    kent: {
        city: "UNITED KINGDOM &bull; KENT",
        shows: `&bull; <b>Institutional Anchor:</b> University of Kent; Hawk Conservancy Trust.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Interdisciplinary focus spanning eco-material conservation, film aesthetics, philosophy of art, and avian ecosystem stewardship.<br>
&bull; <b>Curatorial Focus:</b> Dynamic feathered visual textures and light studies examining natural conservation, crepuscular light, and aesthetic philosophy.`
    },
    sa_riyadh: {
        city: "SAUDI ARABIA &bull; RIYADH",
        shows: `&bull; <b>Institutional Anchor:</b> Qiddiya Cultural &amp; Development Authority, Riyadh Development Zone.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Spatial transformation, mega-scale urban transitions, and shifting cultural topographies in the Arabian Peninsula.<br>
&bull; <b>Curatorial Focus:</b> Strategic exploration of architectural evolution and geographic turning points integrated into dynamic canvas studies.`
    },
    ch_geneva: {
        city: "SWITZERLAND &bull; GENEVA",
        shows: `&bull; <b>Institutional Anchor:</b> International Committee of the Red Cross.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Humanitarian history, international protection, and the physical conservation of conflict archives and material culture.<br>
&bull; <b>Curatorial Focus:</b> Reclaimed material studies integrated with historical documentation, honoring neutral humanitarian action and structural human dignity.`
    },
    ch_bern: {
        city: "SWITZERLAND &bull; BERN",
        shows: `&bull; <b>Institutional Anchor:</b> International Cartographic Association.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Spatial mapping, linguistic cartography, cartographic theory, and global geographical representation of human knowledge.<br>
&bull; <b>Curatorial Focus:</b> Topographical canvas mapping, cartographic symbolism, and geometric canvas structures mapping world heritage.`
    },
    ch_ballenberg: {
        city: "SWITZERLAND &bull; BALLENBERG &amp; BASEL",
        shows: `&bull; <b>Institutional Anchor:</b> Swiss Open-Air Museum Ballenberg; Museum of Basel (<i>Life of a Box</i> Initiative).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Alpine architecture preservation, traditional craftsmanship, ecological material provenance, and archival packaging containment.<br>
&bull; <b>Curatorial Focus:</b> Tactile wood, paper, and card sculptural installations probing historical shelter, rural craftsmanship, and material conservation.`
    },
    ch_zurich: {
        city: "SWITZERLAND &bull; ZURICH",
        shows: `&bull; <b>Institutional Anchor:</b> ETH Zurich (Dept. of Architecture &amp; Institute of History and Theory of Architecture); Natural History Museum Zurich (<i>Life of a Box</i> Initiative); Artas Foundation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Territorial planning, architectural history, conflict transformation, equanimity, and spatial togetherness.<br>
&bull; <b>Curatorial Focus:</b> Architectural grid structures, warm territorial earth tones, and reclaimed ecological material studies examining social cohesion.`
    },
    it_bologna: {
        city: "ITALY &bull; BOLOGNA",
        shows: `&bull; <b>Institutional Anchor:</b> University of Bologna (Department of Philosophy).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Philosophical inquiry into structural aesthetics, perceptual resonance, and the historical evolution of European artistic theory.<br>
&bull; <b>Curatorial Focus:</b> Harmonic tonal frequencies and canvas investigations probing visual balance, acoustic dynamics, and sensory resonance.`
    },
    it_florence: {
        city: "ITALY &bull; FLORENCE",
        shows: `&bull; <b>Institutional Anchor:</b> European University Institute.<br>
&bull; <b>Field &amp; Conceptual Research:</b> European governance, historical political philosophy, civic solidarity, and continental unity within the Mediterranean basin.<br>
&bull; <b>Curatorial Focus:</b> Structured geometric compositions and deep Renaissance-inspired color palettes addressing historical solidarity.`
    },
    it_fabriano_rome: {
        city: "ITALY &bull; FABRIANO &amp; ROME",
        shows: `&bull; <b>Institutional Anchor:</b> Cotroceni National Museum; Paper and Watermark Museum, Fabriano (UNESCO Creative City - <i>Life of a Box</i> Initiative).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Historical papermaking technologies, watermark embedding, and archival packaging preservation.<br>
&bull; <b>Curatorial Focus:</b> Fibrous paper-pulp textures, watermark transparency studies, and tactile canvas aging techniques.`
    },
    fr_paris: {
        city: "FRANCE &bull; PARIS",
        shows: `&bull; <b>Institutional Anchor:</b> Sorbonne University; Université Paris Cité; Sorbonne Business School; Amnesty International "Art for Amnesty" Platform; American School of Paris; IDDRI.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Urban proximity dynamics, Enlightenment literary traditions, civil resistance, human rights activism, and fortuitous discovery.<br>
&bull; <b>Curatorial Focus:</b> High-contrast activist iconography, luminescent Enlightenment light studies, and urban proximity mapping on canvas.`
    },
    fr_toulouse: {
        city: "FRANCE &bull; TOULOUSE",
        shows: `&bull; <b>Institutional Anchor:</b> Musée des Augustins (<i>Life of a Box</i> Initiative).<br>
&bull; <b>Field &amp; Conceptual Research:</b> French provincial museum archives, packaging preservation, and regional artistic heritage.<br>
&bull; <b>Curatorial Focus:</b> Textural cardboard transformations and historical paper-ground panel studies.`
    },
    fr_guadeloupe: {
        city: "FRANCE &bull; GUADELOUPE",
        shows: `&bull; <b>Institutional Anchor:</b> Arts au Pluriel.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Caribbean contemporary art platforms, Francophone Atlantic dialogue, serendipitous artistic practices, and multi-layered island cultural heritage.<br>
&bull; <b>Curatorial Focus:</b> Tropical color chance-operations, vibrant island topographies, and post-colonial artistic identity.`
    },
    ps_gaza: {
        city: "PALESTINE &bull; GAZA",
        shows: `&bull; <b>Institutional Anchor:</b> Culture and Free Thought Association.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Grassroots community advocacy, youth empowerment, and cultural preservation under extreme socio-political conditions.<br>
&bull; <b>Curatorial Focus:</b> Deeply emotional and tactile canvas research capturing unyielding love, rooted belonging, and intergenerational cultural endurance.`
    },
    ps_jenin: {
        city: "PALESTINE &bull; JENIN CAMP",
        shows: `&bull; <b>Institutional Anchor:</b> The Freedom Theatre.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Cultural resistance, theatrical expression, and community resilience within refugee camp environments.<br>
&bull; <b>Curatorial Focus:</b> Monochromatic and high-contrast structural studies translating physical theater and collective memory into quiet testaments to endurance.`
    },
    is_reykjavik: {
        city: "ICELAND &bull; REYKJAVÍK",
        shows: `&bull; <b>Institutional Anchor:</b> University of Iceland (Faculty of Icelandic &amp; Comparative Cultural Studies &amp; Dept. of Anthropology).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Nordic island blessings, social friction, human survival, and saga literature.<br>
&bull; <b>Curatorial Focus:</b> Volcanic mineral textures, stark high-latitude color contrasts, and sparse abstract compositions mapping environmental harshness.`
    },
    gy_georgetown: {
        city: "GUYANA &bull; GEORGETOWN",
        shows: `&bull; <b>Institutional Anchor:</b> University of Guyana (Dept. of Language and Cultural Studies).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Caribbean and Amazonian linguistic identity, quietude, post-colonial silence, interiority, and oral histories.<br>
&bull; <b>Curatorial Focus:</b> Subdued color palettes, rainforest stillness, and atmospheric landscape studies capturing Northern South American cultural depth.`
    },
    jo_amman: {
        city: "JORDAN &bull; AMMAN",
        shows: `&bull; <b>Institutional Anchor:</b> The University of Jordan (School of Arts &amp; Design &amp; Dept. of Music).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Levantine sacred grace, sonic uncertainty, Levantine typography, and Middle Eastern visual communication frameworks.<br>
&bull; <b>Curatorial Focus:</b> Calligraphic abstraction, harmonic tension, and fluid visual rhythms translating traditional Levantine musical structures.`
    },
    mu_reduit: {
        city: "MAURITIUS &bull; RÉDUIT",
        shows: `&bull; <b>Institutional Anchor:</b> University of Mauritius.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Island biodiversity, environmental ethics, oceanographic isolation, and inter-ethnic empathy within multicultural island topologies.<br>
&bull; <b>Curatorial Focus:</b> Vibrant, light-filled color studies probing ecological fragility, Indian Ocean marine heritage, and island interconnectedness.`
    },
    om_muscat: {
        city: "OMAN &bull; MUSCAT",
        shows: `&bull; <b>Institutional Anchor:</b> Sultan Qaboos University (Dept. of Art Education &amp; Graphic Design).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Sacred geometry, ontological evolution, Gulf visual arts pedagogy, and coastal trade history.<br>
&bull; <b>Curatorial Focus:</b> Spiritual minimalism, continuous line work, and architectural canvas treatments utilizing desert pigments and luminous tones.`
    },
    ar_buenosaires: {
        city: "ARGENTINA &bull; BUENOS AIRES",
        shows: `&bull; <b>Institutional Anchor:</b> National University of Tres de Febrero (UNTREF), Centre for Genocide Studies.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Scholarly dialogue on historical rupture, memory, and destruction/historical watersheds.<br>
&bull; <b>Curatorial Focus:</b> Exploration of exile, historical continuity, and global Jewish heritage transformed into large-scale canvas research.`
    },
    be_brussels: {
        city: "BELGIUM &bull; BRUSSELS",
        shows: `&bull; <b>Institutional Anchor:</b> Brussels Expo; Vrije Universiteit Brussel (Dept. of Art History &amp; Archaeology); CEPS; Green Door Gallery.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Major public exhibition platforms for eco-sculptural works, Northern Renaissance art history, and European policy frameworks.<br>
&bull; <b>Curatorial Focus:</b> Retrospective displays of eco-sculptural box works alongside large-scale canvas research examining human gratitude and spatial containment.`
    },
    be_leuven: {
        city: "BELGIUM &bull; LEUVEN",
        shows: `&bull; <b>Institutional Anchor:</b> KU Leuven (Division Forest, Nature &amp; Landscape &amp; Dept. of Social Anthropology).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Forest canopy ecology, landscape buffer zones, human conviviality, and European environmental conservation.<br>
&bull; <b>Curatorial Focus:</b> Organic green canopy palettes, earth-toned canvas compositions, and soft transitional glazes representing sanctuary zones.`
    },
    be_ghent_bruges: {
        city: "BELGIUM &bull; GHENT &amp; BRUGES",
        shows: `&bull; <b>Institutional Anchor:</b> Museum Voor Schone Kunsten; Museum Brugge (<i>Life of a Box</i> Initiative); Ghent University.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Flemish art conservation, aesthetic theory, and municipal packaging preservation in historic Belgian centers.<br>
&bull; <b>Curatorial Focus:</b> Cardboard-ground panel compositions and natural color fields reflecting Flemish painterly traditions and archival protection.`
    },
    pl_duszniki: {
        city: "POLAND &bull; DUSZNIKI-ZDRÓJ",
        shows: `&bull; <b>Institutional Anchor:</b> Museum of Papermaking (<i>Life of a Box</i> Initiative).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Historical paper manufacturing, raw material conservation, fluid dynamics, and physical paper craft.<br>
&bull; <b>Curatorial Focus:</b> Inaugural public exhibition site for <i>Life of a Box</i>, presenting fibrous paper-pulp sculptures and paper conservation studies.`
    },
    pl_poznan: {
        city: "POLAND &bull; POZNAŃ",
        shows: `&bull; <b>Institutional Anchor:</b> Magdalena Abakanowicz University of Arts in Poznań.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Contemporary curatorial theory, synthetic color field theory, radical spatial installation, and modern art criticism.<br>
&bull; <b>Curatorial Focus:</b> Bold, high-contrast chromatic canvases probing synthetic tones, spatial installations, and modern curatorial practice.`
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
&bull; <b>Curatorial Focus:</b> Precision-driven canvas works utilizing classical glazing methods to explore unique linguistic events and historical memory.`
    },
    si_ljubljana: {
        city: "SLOVENIA &bull; LJUBLJANA",
        shows: `&bull; <b>Institutional Anchor:</b> Rog Creative Center (<i>Life of a Box</i> Initiative); University of Ljubljana (Department of Art History).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Contemporary European art curation, structural physical tremors, bodily movement in visual media, and packaging recycling cycles.<br>
&bull; <b>Curatorial Focus:</b> Dynamic kinetic brushwork studies, unstable geometric compositions, and sculptural cardboard transformations.`
    },
    si_koper: {
        city: "SLOVENIA &bull; KOPER",
        shows: `&bull; <b>Institutional Anchor:</b> University of Primorska (Faculty of Humanities).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Adriatic humanism, coastal philosophical traditions, and political hesitation in modern social structures.<br>
&bull; <b>Curatorial Focus:</b> Coastal light studies and balanced abstract canvases probing psychological uncertainty and Mediterranean philosophy.`
    },
    hr_zagreb: {
        city: "CROATIA &bull; ZAGREB",
        shows: `&bull; <b>Institutional Anchor:</b> University of Zagreb, Academy of Fine Arts &amp; International Academic Directorate.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Balkan fine arts heritage, institutional exchange, and narratives of systemic disillusionment.<br>
&bull; <b>Curatorial Focus:</b> Structural canvas compositions addressing fragmented perceptions, narrative shifts, chiaroscuro techniques, and visual history.`
    },
    am_yerevan: {
        city: "ARMENIA &bull; YEREVAN",
        shows: `&bull; <b>Institutional Anchor:</b> Sexual Assault Crisis Center / Human Rights Advocacy Axis, Yerevan.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Trauma studies, social defense mechanisms, bodily autonomy, recovery frameworks, and support systems.<br>
&bull; <b>Curatorial Focus:</b> Raw tactile canvas research investigating resilience, personal boundary protection, and societal restoration.`
    },
    by_minsk: {
        city: "BELARUS &bull; MINSK",
        shows: `&bull; <b>Institutional Anchor:</b> ICOMOS Belarusian National Committee, Historical Preservation Forum.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Heritage conservation under institutional restraint, architectural sovereignty, and human agency.<br>
&bull; <b>Curatorial Focus:</b> Layered material research probing the limits of preservation, structural memory, and cultural persistence.`
    },
    bg_sofia: {
        city: "BULGARIA &bull; SOFIA",
        shows: `&bull; <b>Institutional Anchor:</b> BlueLink Environmental Foundation &amp; American College of Sofia Cultural Axis.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Civil society dynamics, ecological equilibrium, absolute educational structures, and civic balance in Southeast Europe.<br>
&bull; <b>Curatorial Focus:</b> Studies in tension, harmonic proportions, and binary balance applied to large-scale mixed-media panels.`
    },
    kw_kuwaitcity: {
        city: "KUWAIT &bull; KUWAIT CITY",
        shows: `&bull; <b>Institutional Anchor:</b> Gulf Independent Culinary &amp; Commercial Heritage Archives, Kuwait City.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Domestic tranquility, interior sanctuary, and peaceful family continuity amid rapid Arabian Gulf urbanism.<br>
&bull; <b>Curatorial Focus:</b> Minimalist spatial research focusing on silence, interior stillness, and private domestic geometry.`
    },
    lv_riga: {
        city: "LATVIA &bull; RIGA",
        shows: `&bull; <b>Institutional Anchor:</b> Baltic Cultural Heritage &amp; Tourism Guild, Riga Bureau.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Post-Baltic historical tranquility, urban memory preservation, and public spatial calm.<br>
&bull; <b>Curatorial Focus:</b> Tonal color field studies reflecting Baltic atmospheric clarity, silence, and civic equilibrium.`
    },
    es_madrid: {
        city: "SPAIN &bull; MADRID",
        shows: `&bull; <b>Institutional Anchor:</b> Mapfre Cultural Foundation (<i>Life of a Box</i> Initiative) &amp; Ecosistema Urbano Architectural Lab.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Urban aesthetics, sustainable architectural design, classical visual proportions, and packaging recycling in Iberian contexts.<br>
&bull; <b>Curatorial Focus:</b> Harmony, urban surface tension, cardboard structural installations, and geometric elegance mapped onto multi-panel canvases.`
    },
    lt_vilnius: {
        city: "LITHUANIA &bull; VILNIUS",
        shows: `&bull; <b>Institutional Anchor:</b> National Museum of Lithuania; Vilnius Academy of Arts (VAA Exhibition Halls 'Titanikas').<br>
&bull; <b>Field &amp; Conceptual Research:</b> Baltic historical defense, raw emotional feeling in fine art pedagogy, collective endurance, and aesthetic theory.<br>
&bull; <b>Curatorial Focus:</b> Heavy-texture impasto works and expressive gestural brushwork evaluating psychological toughness, raw human emotion, and historical continuity.`
    },
    cy_nicosia: {
        city: "CYPRUS &bull; NICOSIA",
        shows: `&bull; <b>Institutional Anchor:</b> Ministry of Culture, Division of Arts &amp; Historical Heritage, Republic of Cyprus.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Island division dynamics, Levant trade history, strategic cultural horizons, and long-term Mediterranean art preservation.<br>
&bull; <b>Curatorial Focus:</b> Horizon-line studies, focal perspective, and visual clarity across complex geographic histories.`
    },
    sk_bratislava: {
        city: "SLOVAKIA &bull; BRATISLAVA",
        shows: `&bull; <b>Institutional Anchor:</b> Slovak National Gallery (Old Art Collections &amp; Modern Curatorial Division).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Historical art collection curation, sacred spatial theory, philosophical conviction, and Central European art preservation.<br>
&bull; <b>Curatorial Focus:</b> Abstract spatial research probing empty space, belief systems, architectural canvas studies, and classical art conservation.`
    },
    sk_sered: {
        city: "SLOVAKIA &bull; SEREĎ",
        shows: `&bull; <b>Institutional Anchor:</b> Slovak National Museum, Sereď Holocaust Museum Preservation Site.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Historical memory, memorial architecture, Holocaust research, and the ethics of remembrance in Central Europe.<br>
&bull; <b>Curatorial Focus:</b> Somber, reflective paper and canvas works dedicated to historical trauma, memory retention, and human rights advocacy.`
    },
    sk_senec: {
        city: "SLOVAKIA &bull; SENEC",
        shows: `&bull; <b>Institutional Anchor:</b> Ministry of Culture Regional Network, City of Senec (<i>Life of a Box</i> Initiative).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Municipal packaging cycles, civic art integration, and regional Slovak transit lines.<br>
&bull; <b>Curatorial Focus:</b> Cardboard packaging reconstruction and material reuse in modern sculpture.`
    },
    at_linz: {
        city: "AUSTRIA &bull; LINZ",
        shows: `&bull; <b>Institutional Anchor:</b> Lentos Art Museum (<i>Life of a Box</i> Initiative), Department of Sculpture &amp; Painting.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Mirroring, psychological reflection, self-obsession, and modern European museum collections.<br>
&bull; <b>Curatorial Focus:</b> Reflective surface studies, recycled packaging structures, and self-referential iconography.`
    },
    at_vienna: {
        city: "AUSTRIA &bull; VIENNA",
        shows: `&bull; <b>Institutional Anchor:</b> University of Vienna (Dept. of Art History &amp; Dept. of Sociology); Academy of Fine Arts Vienna (Akbild).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Visual perception, eye movement dynamics, diaspora aesthetics, and socio-spatial networks.<br>
&bull; <b>Curatorial Focus:</b> Kinetic sightline mapping, fragmented visual pathways, and displacement narratives on canvas.`
    },
    at_innsbruck: {
        city: "AUSTRIA &bull; INNSBRUCK",
        shows: `&bull; <b>Institutional Anchor:</b> University of Innsbruck, Chair of Practical Philosophy.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Alpine philosophical traditions, ethical certainty, practical philosophy, and institutional trust structures.<br>
&bull; <b>Curatorial Focus:</b> Structural balance and grounded color fields reflecting philosophical stability.`
    },
    il_jerusalem: {
        city: "ISRAEL &bull; JERUSALEM",
        shows: `&bull; <b>Institutional Anchor:</b> The Hebrew University of Jerusalem &amp; Pardes Institute of Jewish Studies.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Artistic creation, Jewish historiography, and enduring cultural hope.<br>
&bull; <b>Curatorial Focus:</b> Scriptural layerings, genesis motifs, and luminous golden-toned canvas studies.`
    },
    hu_budapest: {
        city: "HUNGARY &bull; BUDAPEST",
        shows: `&bull; <b>Institutional Anchor:</b> Ludwig Museum of Contemporary Art &amp; Central European University (Romani Studies Program).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Institutional compliance, systemic mandates, minority visibility, post-communist cultural shifts, and social repair.<br>
&bull; <b>Curatorial Focus:</b> Grid-locked geometric tension juxtaposed with mended, stitched-canvas repair techniques.`
    },
    de_hamburg: {
        city: "GERMANY &bull; HAMBURG",
        shows: `&bull; <b>Institutional Anchor:</b> Hamburger Kunsthalle (Contemporary Art Department).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Institutional amnesia, repressed emotional tension, memory suppression, and contemporary curation.<br>
&bull; <b>Curatorial Focus:</b> Submerged tones, heavy grey-scale glazing, and tense gestural mark-making.`
    },
    de_stuttgart: {
        city: "GERMANY &bull; STUTTGART",
        shows: `&bull; <b>Institutional Anchor:</b> State Academy of Fine Arts Stuttgart, Fine Arts &amp; Painting Department.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Painterly apprehension, material hesitation, and German fine arts pedagogy.<br>
&bull; <b>Curatorial Focus:</b> Gestural color applications analyzing apprehension, surface tension, and painterly discipline.`
    },
    de_frankfurt: {
        city: "GERMANY &bull; FRANKFURT",
        shows: `&bull; <b>Institutional Anchor:</b> German Library Frankfurt (<i>Life of a Box</i> Initiative); Jewish Museum Frankfurt; Goethe University Frankfurt.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Historical archives preservation, European cultural memory, future courage, resilience, and post-war visual theory.<br>
&bull; <b>Curatorial Focus:</b> Historical archival canvas research, forward-looking color fields, and structural paper installations.`
    },
    de_leipzig: {
        city: "GERMANY &bull; LEIPZIG",
        shows: `&bull; <b>Institutional Anchor:</b> Max Planck Institute for Evolutionary Anthropology (Dept. of Linguistic &amp; Cultural Evolution).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Human linguistic evolution, tactile sensory contact, and cultural transformation.<br>
&bull; <b>Curatorial Focus:</b> Tactile touch-based textures and evolutionary linguistic maps on canvas.`
    },
    de_potsdam_berlin: {
        city: "GERMANY &bull; BERLIN &amp; POTSDAM",
        shows: `&bull; <b>Institutional Anchor:</b> Potsdam Institute for Climate Impact Research; Humboldt University Berlin; University of Potsdam; ERIAC; Prinzessinnengarten Berlin.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Urban farming communities, climate skillcraft, Earth system dynamics, Jewish intellectual history, and Roma cultural identity.<br>
&bull; <b>Curatorial Focus:</b> Organic pigment applications, intricate community networks, and high-intensity chromatic studies.`
    },
    de_gottingen: {
        city: "GERMANY &bull; GÖTTINGEN",
        shows: `&bull; <b>Institutional Anchor:</b> University of Göttingen, Iranian Studies Department.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Oriental manuscripts, ancient poetic truth traditions, and Middle Eastern linguistic archives.<br>
&bull; <b>Curatorial Focus:</b> Scriptural calligraphic layers, archival manuscript glazes, and textual preservation.`
    },
    de_mainz: {
        city: "GERMANY &bull; MAINZ",
        shows: `&bull; <b>Institutional Anchor:</b> Johannes Gutenberg University Mainz, Department of Theoretical Philosophy.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Consciousness studies, empty cognition, and the philosophy of mind.<br>
&bull; <b>Curatorial Focus:</b> Subdued minimalist canvases probing pure cognitive awareness and visual clarity.`
    },
    de_nuremberg: {
        city: "GERMANY &bull; NUREMBERG",
        shows: `&bull; <b>Institutional Anchor:</b> City Museum Nuremberg; Albrecht Dürer’s House (<i>Life of a Box</i> Initiative).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Northern Renaissance printmaking legacies, master craft traditions, and historical box packaging preservation.<br>
&bull; <b>Curatorial Focus:</b> Precision line work, woodcut-inspired canvas etching, and historic material recycling.`
    },
    nl_amsterdam: {
        city: "NETHERLANDS &bull; AMSTERDAM",
        shows: `&bull; <b>Institutional Anchor:</b> Greenpeace International Secretariat; University of Amsterdam (Dept. of Philosophy, Film, &amp; Performance).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Ecological unity, non-linear cinematic flow, theatrical performance, and political resistance.<br>
&bull; <b>Curatorial Focus:</b> Fluid-mechanics paint pouring, environmental green-palette studies, and theatrical lighting dynamics.`
    },
    nl_leiden: {
        city: "NETHERLANDS &bull; LEIDEN",
        shows: `&bull; <b>Institutional Anchor:</b> Leiden University (LUCAS, NICA, &amp; African Linguistics Department).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Communal resource sharing, linguistic rare terms, digital disconnection, and world art studies.<br>
&bull; <b>Curatorial Focus:</b> Network-node abstraction, fragmented digital motifs, and collaborative multi-layer canvases.`
    },
    nl_utrecht: {
        city: "NETHERLANDS &bull; UTRECHT",
        shows: `&bull; <b>Institutional Anchor:</b> Utrecht University (Logic &amp; AI Divisions &amp; Department of Linguistics).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Logic-based methods, AI ethics, theoretical philosophy, linguistic negation, and human regret.<br>
&bull; <b>Curatorial Focus:</b> Algorithmic geometric systems, structural binary canvas maps, and subdued tonal grids.`
    },
    se_stockholm: {
        city: "SWEDEN &bull; STOCKHOLM",
        shows: `&bull; <b>Institutional Anchor:</b> Stockholm Resilience Centre (<i>Life of a Box</i> Initiative); Stockholm University (Anthropology Dept); Södertörn University.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Ecosystem transformation, universalist philosophy, social anthropology, and atmospheric cloud patterns.<br>
&bull; <b>Curatorial Focus:</b> Atmospheric diffuse glazing, ecological metamorphosis charts, recycled packaging structures, and sky-tone fields.`
    },
    fi_oulu: {
        city: "FINLAND &bull; OULU (CAPITAL OF CULTURE 2026)",
        shows: `&bull; <b>Institutional Anchor:</b> Oulu European Capital of Culture 2026; Galleria MABD.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Solo institutional museum programming for Oulu 2026, exploring Northern European cultural identity, community warmth, and regional art platforms.<br>
&bull; <b>Curatorial Focus:</b> Major solo retrospective series featuring tactile, arctic-inspired canvases probing human kindness, social resilience, and Nordic landscape philosophy.`
    },
    fi_helsinki: {
        city: "FINLAND &bull; HELSINKI",
        shows: `&bull; <b>Institutional Anchor:</b> University of Helsinki; Åland Islands Platform (<i>Life of a Box</i> Initiative).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Physical resistance, geographic placement, economic frustration, consumer society ethics, and sub-arctic material transit.<br>
&bull; <b>Curatorial Focus:</b> Heavy physical paint application, spatial coordinate grids, recycled packaging components, and tactile surface resistance.`
    },
    ee_tallinn: {
        city: "ESTONIA &bull; TALLINN",
        shows: `&bull; <b>Institutional Anchor:</b> Pop and Contemporary Art Museum (PoCo).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Digital unavailability, modern Baltic art platforms, technological metaphors, and contemporary European curation.<br>
&bull; <b>Curatorial Focus:</b> Blocked spatial views, stark minimalist voids, clean visual structures, and Baltic contemporary art aesthetics.`
    },
    ee_tartu: {
        city: "ESTONIA &bull; TARTU",
        shows: `&bull; <b>Institutional Anchor:</b> University of Tartu (Dept. of Ethnology &amp; UNESCO Chair); Estonian National Museum.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Finno-Ugric ethnographic heritage, systemic crisis generation, and Baltic social crisis dynamics.<br>
&bull; <b>Curatorial Focus:</b> Finno-Ugric cultural motifs, cold light hues, and maritime archival preservation studies.`
    },
    cz_prague: {
        city: "CZECH REPUBLIC &bull; PRAGUE",
        shows: `&bull; <b>Institutional Anchor:</b> National Gallery Prague; Museum of Czech Literature; City Gallery Prague; KAMPA Museum; Charles University; Ministry of Environment.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Philosophical nothingness, parallel social worlds, European solidarity, literary heritage, and ecological state retrospectives.<br>
&bull; <b>Curatorial Focus:</b> Monochromatic void studies, overlapping parallel spatial planes, literary text-based canvas washes, and retrospective box installations.`
    },
    cz_pilsen_regional: {
        city: "CZECH REPUBLIC &bull; MARIÁNSKÁ TÝNICE, PILSEN &amp; REGIONAL MUSEUMS",
        shows: `&bull; <b>Institutional Anchor:</b> Museum and Gallery of the Northern Plzeň Region in Mariánská Týnice; Bishopric of Pilsen; Museum of West Bohemia (Pilsen); Regional Museum in Most; GAMPA Pardubice; Schubert Center UPOL Olomouc.<br>
&bull; <b>Exhibition History:</b> Solo retrospective featuring masterwork canvas holdings including <i>"Conviviality"</i>.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Architectural dialogue within monumental Baroque sites, regional Czech heritage, compressed spatial forms, and historical memory.<br>
&bull; <b>Curatorial Focus:</b> Sacred light contrasts, nest-like woven paint structures, and multi-layered canvas masterworks housed across historic regional museums.`
    },
    dk_copenhagen: {
        city: "DENMARK &bull; COPENHAGEN",
        shows: `&bull; <b>Institutional Anchor:</b> National Museum of Denmark (<i>Life of a Box</i> Initiative); Foundation for Environmental Education; University of Copenhagen.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Mathematical probability models, civic volunteering, environmental education networks, and packaging preservation.<br>
&bull; <b>Curatorial Focus:</b> Algorithmic grid patterns, accessible high-contrast color arrangements, and systemic packaging sculptures.`
    },
    gr_athens: {
        city: "GREECE &bull; ATHENS",
        shows: `&bull; <b>Institutional Anchor:</b> Athens School of Fine Arts (Dept. of Theory and History of Art).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Classical aesthetic theory, Mediterranean cultural memory, and the philosophy of oblivion versus historical preservation.<br>
&bull; <b>Curatorial Focus:</b> Monochromatic, stone-textured canvases exploring archaeological memory, classical myth structures, and the persistence of light through decay.`
    },
    sy_damascus: {
        city: "SYRIA &bull; DAMASCUS",
        shows: `&bull; <b>Institutional Anchor:</b> Syrian Cultural &amp; Diplomatic Representation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Archival research on Levant architectural history, civil dignity under severe adversity, and ancient trade route craftsmanship.<br>
&bull; <b>Curatorial Focus:</b> Richly textured golden and earth-toned canvases honoring the enduring dignity and historical permanence of Syrian cultural heritage.`
    },
    pt_lisbon: {
        city: "PORTUGAL &bull; LISBON",
        shows: `&bull; <b>Institutional Anchor:</b> On the Move; Casa Oxente.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Lusophone diaspora narratives, maritime migration, emotional geography, and the untranslatable state of longing (<i>Saudade</i>).<br>
&bull; <b>Curatorial Focus:</b> Fluid, oceanic canvas works incorporating deep indigo and raw linen textures to capture memory, distance, and Atlantic cultural connections.`
    },
    ua_kyiv: {
        city: "UKRAINE &bull; KYIV",
        shows: `&bull; <b>Institutional Anchor:</b> National Museum of the History of Ukraine (<i>Life of a Box</i> Initiative); Cultprojector NGO.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Urgent field inquiry into monument preservation during conflict, civic defense of art, triumph over disruption, and national identity defense.<br>
&bull; <b>Curatorial Focus:</b> High-intensity monochromatic compositions, reclaimed museum-grade packaging paper, and dramatic color contrasts expressing victory.`
    },
    ru_volgograd: {
        city: "RUSSIA &bull; VOLGOGRAD",
        shows: `&bull; <b>Institutional Anchor:</b> Volgograd State University.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Archival literature studies, textual preservation, and language history along the Volga basin.<br>
&bull; <b>Curatorial Focus:</b> Layered textual and calligraphic paintings probing the weight of archived knowledge, quiet contemplation, and document preservation.`
    },
    li_vaduz: {
        city: "LIECHTENSTEIN &bull; VADUZ",
        shows: `&bull; <b>Institutional Anchor:</b> The Princely Collections – Art History Library.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Masterwork archival analysis, historical patronage systems, and technical innovation in classical European painting.<br>
&bull; <b>Curatorial Focus:</b> Intricate visual studies drawing on Renaissance and Baroque material techniques, exploring intellectual ingenuity and fine art collecting.`
    },
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
    kg_bishkek: {
        city: "KYRGYZSTAN &bull; BISHKEK",
        shows: `&bull; <b>Institutional Anchor:</b> American University of Central Asia.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Nomadic heritage studies, high-altitude environmental adaptability, Silk Road historical preservation, and post-Soviet identity.<br>
&bull; <b>Curatorial Focus:</b> Earth-pigment paintings and woven-texture studies reflecting mountain topographies, nomadic resilience, and Central Asian cultural history.`
    },
    me_ljesevici: {
        city: "MONTENEGRO &bull; LJEŠEVIĆI",
        shows: `&bull; <b>Institutional Anchor:</b> ORATIO Foundation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Mediterranean coastal history, civic gratitude, and the role of quiet reflection in modern Balkan dialogue.<br>
&bull; <b>Curatorial Focus:</b> Luminous coastal landscapes and meditative abstract canvases reflecting Adriatic light, peace, and human connection.`
    },
    harvard: {
        city: "USA &bull; CAMBRIDGE &amp; HARVARD ACADEMIC NETWORK",
        shows: `&bull; <b>Institutional Anchor:</b> Harvard University Academic Directorate (Arts + Mind Lab, Dept. of Anthropology, Graduate School of Design, Harvard Divinity School, Law School, Public Health).<br>
&bull; <b>Field &amp; Conceptual Research:</b> Interdisciplinary inquiry into neuro-aesthetics, historical trauma, urban design topologies, cognitive freedom, and public policy mediation.<br>
&bull; <b>Curatorial Focus:</b> Monumental canvas structures examining human cognitive limits, historical memory, and legal human rights frameworks.`
    },
    usa_east: {
        city: "USA &bull; EAST COAST &amp; IVY LEAGUE ACADEMIC DIRECTORATES",
        shows: `&bull; <b>Institutional Anchor:</b> Yale University; Columbia University; Princeton University; MIT; Brown University; Johns Hopkins; Georgetown; UPenn.<br>
&bull; <b>Field &amp; Conceptual Research:</b> High-level dialogue covering liminal astrophysics, Persian literary archives, technological ethics, environmental regeneration, and political defiance.<br>
&bull; <b>Curatorial Focus:</b> Reclaimed packaging installations and dense calligraphic canvases dissecting human empathy, civic history, and systemic grace.`
    },
    usa_west: {
        city: "USA &bull; WEST COAST &amp; PACIFIC RIM INSTITUTIONS",
        shows: `&bull; <b>Institutional Anchor:</b> UC System; Stanford University; Skirball Cultural Center; University of Washington; Reed College; Univ. of Hawaii; Univ. of Alaska Anchorage.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Pacific Rim material traditions, structural linguistics, counter-genocidal discourse, Olfactory aesthetics, and Indigenous North American heritage.<br>
&bull; <b>Curatorial Focus:</b> Coastal topologies, sensory perception canvases, and environmental vulnerability studies across sub-arctic and Pacific regions.`
    },
    usa_midwest_south: {
        city: "USA &bull; MIDWEST, MOUNTAIN &amp; SUNBELT INSTITUTIONS",
        shows: `&bull; <b>Institutional Anchor:</b> University of Chicago; Northwestern; Univ. of Colorado Boulder; Indiana Univ. Bloomington; Boise State; Univ. of Utah; UT Austin; Equal Justice Initiative; Arizona State Univ.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Post-colonial historiography, geopolitical art interventions, Indigenous ecological medicine, surrealist history, and racial justice reconciliation.<br>
&bull; <b>Curatorial Focus:</b> Scalable visual systems, desert photography research, and expressive canvases addressing historical reconciliation.`
    },
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
        shows: `&bull; <b>Institutional Anchor:</b> Univ. of Auckland; Waitangi Treaty Grounds; Tūhura Otago Museum; Wellington Youth Network; Taranaki Gallery.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Indigenous studies, social existence, youth psychology, and ecological packaging preservation.<br>
&bull; <b>Curatorial Focus:</b> Recycled material sculptures and canvas research probing land memory, Indigenous identity, and youth perspective archives.`
    },
    goa: {
        city: "INDIA &bull; GOA, MUMBAI &amp; NEW DELHI",
        shows: `&bull; <b>Institutional Anchor:</b> Sala de Arte (Goa); Chatterjee &amp; Lal (Mumbai); Judah Hyam Synagogue (New Delhi); Sethu Centre.<br>
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
&bull; <b>Field &amp; Conceptual Research:</b> Nehiyaw (Cree) relational philosophy, spatial acoustics, and industrial packaging heritage.<br>
&bull; <b>Curatorial Focus:</b> Prairie monographic studio research and industrial material packaging preservation.`
    },
    toronto_waterloo: {
        city: "CANADA &bull; TORONTO &amp; WATERLOO",
        shows: `&bull; <b>Institutional Anchor:</b> Seneca Polytechnic; Univ. of Waterloo; TMU; Trent Univ.; UJA Federation.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Anishinaabe peace frameworks, youth psychology archives, and social cohesion legal frameworks.<br>
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
        shows: `&bull; <b>Institutional Anchor:</b> McGill University; Native Women's Shelter of Montreal; Arteria Gallery; Dalhousie Univ.<br>
&bull; <b>Field &amp; Conceptual Research:</b> First Nations rights, medical humanities, temporal perception, and maritime sanctuary research.<br>
&bull; <b>Curatorial Focus:</b> Bicultural philosophical canvases, Atlantic ocean studies, and recycled packaging art.`
    },
    yukon_atlantic: {
        city: "CANADA &bull; DAWSON CITY &amp; WINNIPEG",
        shows: `&bull; <b>Institutional Anchor:</b> ODD Gallery (Klondike Institute of Art); Univ. of Manitoba; Univ. of Saskatchewan.<br>
&bull; <b>Field &amp; Conceptual Research:</b> Sub-Arctic ecological material research, Inuit existential philosophy, and prairie landscape scale.<br>
&bull; <b>Curatorial Focus:</b> Northern recycled packaging research and wide-format prairie landscape compositions.`
    },
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
&bull; <b>Field &amp; Conceptual Research:</b> Malagasy heritage, island ecology, ancestral memory, and systemic social well-being.<br>
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
&bull; <b>Field &amp; Conceptual Research:</b> Indigenous oral traditions, disappearing dialects, mythologies, and human-nature reciprocity.<br>
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

    const allNodes = document.querySelectorAll('.map-node');
    const data = mapCityData[key];
    const nodeElem = document.getElementById('node_' + key);
    const popup = document.getElementById('mapPopupCard');
    const frame = document.getElementById('mapCanvasFrame');

    if (data && popup && frame) {
        allNodes.forEach(n => {
            n.classList.remove('active-node');
            n.style.opacity = '0.25';
        });

        if (nodeElem) {
            nodeElem.classList.add('active-node');
            nodeElem.style.opacity = '1';
        }

        document.getElementById('popupCityTitle').innerHTML = data.city;
        document.getElementById('popupCityBody').innerHTML = data.shows;

        popup.classList.add('active');

        if (nodeElem) {
            const nodeRect = nodeElem.getBoundingClientRect();
            const frameRect = frame.getBoundingClientRect();
            const isMobile = window.innerWidth <= 768;

            if (isMobile) {
                popup.style.left = '10px';
                popup.style.right = '10px';
                popup.style.top = 'auto';
                popup.style.bottom = '10px';
                popup.style.width = 'calc(100% - 20px)';
            } else {
                popup.style.right = 'auto';
                popup.style.bottom = 'auto';
                popup.style.width = '320px';

                let leftPos = (nodeRect.left - frameRect.left) + 20;
                let topPos = (nodeRect.top - frameRect.top) - 20;

                if (leftPos + 320 > frameRect.width) {
                    leftPos = Math.max(10, (nodeRect.left - frameRect.left) - 330);
                }
                if (leftPos < 10) leftPos = 10;

                if (topPos + 240 > frameRect.height) {
                    topPos = Math.max(10, frameRect.height - 250);
                }
                if (topPos < 10) topPos = 10;

                popup.style.left = leftPos + 'px';
                popup.style.top = topPos + 'px';
            }
        }
    }
}

function closeMapDetails() {
    const popup = document.getElementById('mapPopupCard');
    if (popup) popup.classList.remove('active');

    document.querySelectorAll('.map-node').forEach(n => {
        n.classList.remove('active-node');
        n.style.opacity = '1';
    });

    const selector = document.getElementById('citySelector');
    if (selector) selector.value = '';
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

// --- 4. AUTHORITATIVE PROVENANCE DOSSIER REPOSITORY ---
const dossierData = {
    equanimity: {
        code: "PROVENANCE DOSSIER · THE GLOBAL WORDS PROJECT",
        title: "The Global Words Project (A Global Collective Inspiration)",
        body: `A Multi-Decade Global Participatory Initiative:
The Words Project is an expansive, decentralized artistic archive spanning over three decades. It operates on a singular mechanism of unified human consciousness: individuals, scholars, and communities from all over the world contribute single words to a global collective reservoir.

- The Collective Alchemy: Words donated across 500+ global institutions and thousands of participants are gathered into a shared pool. From this global reservoir, words are drawn and woven into a narrative puzzle—a description that serves as the conceptual blueprint for a monumental canvas. Every painting is a physical record of pure global collective inspiration.

- Unprecedented Global Network: Built upon thousands of direct word contributions spanning state repositories, national archives, academic faculties, cultural research centers, and grass-roots communities across Europe, Asia, Africa, and the Americas.

- Museum & Archival Provenance: Documented and exhibited across major international solo retrospectives, state museum collections, and public research archives worldwide.

- Sovereign Philosophy: Each painting stands as proof that diverse global voices, when gathered without boundary or hierarchy, form a harmonious and permanent visual document of shared human experience.`
    },
    box_monograph: {
        code: "PROVENANCE DOSSIER · LIFE OF A BOX",
        title: "Life of a Box (The Beauty of Sustainability & Global Material Memory)",
        body: `A Monumental Ecological & Archival Installation:
Life of a Box is an internationally acclaimed fine art initiative that redefines recycled industrial packaging into monumental sculptural works and tactile canvas panels. The project explores the journey of ordinary objects through human hands—transforming discarded commercial materials into permanent symbols of sustainability, memory, and interconnectedness.

- The Core Philosophy: Every box carries a hidden trajectory of travel, human labor, and environmental impact. By embedding real packaging into high-art compositions alongside natural earth pigments and gold leaf, the project bridges industrial utility with timeless aesthetic grace.

- Global Institutional Coverage: Featured and analyzed across major international media platforms, environmental essays, and corporate-cultural archives—including official features by Amazon, global sustainability leadership forums, state libraries, and international art periodicals.

- State Museum Provenance: Documented in official museum catalogues and exhibited across prestigious European state repositories and cultural institutions—tracing its public journey from its inaugural presentation at the Museum of Papermaking in Duszniki-Zdrój, Poland, through national library networks, municipal museums, and global environmental summits.

- Sovereign Impact: The project challenges how contemporary society perceives waste, proving that utility and beauty can coexist when material memory is honored through mastercraft.`
    },
    mowicha: {
        code: "PROVENANCE DOSSIER · VOICES OF THE LAND",
        title: "Voices of the Land (Indigenous Wisdom & Sacred Oral Heritage)",
        body: `A Living Tribute to Indigenous Wisdom & Sacred Linguistic Heritage:
Voices of the Land is a monumental fine art initiative designed to honor, preserve, and share an ancient lineage of Indigenous philosophy with the global community. Approached with profound reverence, cultural sensitivity, and deep care, the project transforms hundreds of sacred oral traditions, ancestral myths, land memories, and donated linguistic fragments into permanent fine art masterworks.

- A Classic Bridge of Respect: The initiative creates a respectful sanctuary where timeless ancestral knowledge connects with the modern world. By engaging with profound philosophies donated by Knowledge Keepers across continents—such as concepts of total universal interconnectedness—each work serves not merely as an artwork, but as a living act of honor, grace, and cultural preservation.

- Authenticity & Land Connection: Every concept and linguistic nuance inspiring the series is rooted in an authentic understanding of human connection to the land, cosmos, and community. Prepared using natural earth pigments and mixed media, the tactile surfaces embody the physical earth and spiritual energy of the territories they honor.

- Global Institutional & Academic Network: Developed in collaboration with, and drawing from, distinguished cultural institutions, research platforms, and advocates across the globe—including Harvard University, National Gallery of Canada, Burke Museum (Seattle), University of Auckland, Na'kuset - Native Women’s Shelter of Montreal, Endangered Languages Project, University of Queensland Art Museum, National University of Samoa, University of Alberta, Swarthmore College, Trent University, Arizona State University, University of Wisconsin-Milwaukee, University of Manitoba, and Indigenous Knowledge Keepers.

- Sovereign Impact: A living tribute to First Nations heritage that transcends traditional artistic boundaries—inviting the world to witness the profound depth, care, and classic elegance of Indigenous traditions.`
    },
    rooh_nawaz: {
        code: "PROVENANCE DOSSIER · ROOH-NAWAZ",
        title: "Rooh-Nawaz (Persian Heritage, Memory & Collective Testament)",
        body: `A Living Archive of Persian Culture, Memory & Poetic Wisdom:
Rooh-Nawaz (روح‌نواز)—inspired by the classical concept of that which soothes the spirit—is an expansive ethnographic and fine art initiative dedicated to honoring Persian cultural heritage. By gathering contributions, memories, and poetic reflections from scholars, educators, and leaders worldwide, the project transforms personal recollections into a permanent visual testament to collective memory.

- The Poetic Synthesis: Disparate linguistic fragments, verses, and philosophical donations are pooled and woven into a singular visual narrative. Every painting serves as a living composition, proving that cultural memory is an active, evolving dialogue.

- Authenticity & Sacred Depth: Deeply rooted in Persian literature, classical poetry, and historical memory, each masterwork is realized through natural earth pigments, luminous glazes, and expressive brushwork to forge a timeless bridge between ancient heritage and modern global thought.

- Global Academic & Cultural Network: Built upon direct contributions pooled across world-renowned universities and centers for Middle Eastern and Persian studies—including UC, Harvard University, Yale University, UT Austin, Uppsala University, Samuel Jordan Center for Persian Studies, The Courtauld Institute of Art, Göttingen University, Masaryk University, Central Asia Initiative, and the MacMillan Center.

- Sovereign Impact: A living archive for cultural preservation that offers the international art world a dignified visual record of Persian heritage, crafted through global scholarly exchange.`
    }
};

// --- MOMBASA FIELD RECORDS MATRIX ---
const mombasaInscriptions = {
    "mombasa-01.webp": {
        code: "FIELD RECORD: MBA-2008-042",
        title: "Chronicles of Mombasa · The Transport Pilot / The Jet Aviator",
        obs: "Close crop on a quiet, direct expression with soft, wide eyes looking straight ahead.",
        cog: "He began by declaring he wanted to drive big transport trucks. Moments later, looking at a bird landing nearby, his expression shifted to total wonder as he announced he would fly passenger jets around the world instead."
    },
    "mombasa-02.webp": {
        code: "FIELD RECORD: MBA-2008-118",
        title: "Chronicles of Mombasa · The Shopkeeper / The Boatbuilder",
        obs: "Wide-eyed and attentive posture, caught in a moment of bright curiosity.",
        cog: "He initially said he wanted to work in a shop like his uncle. When asked what he loved doing most on weekends, his face lit up and he immediately decided he wanted to build big wooden boats for fishermen."
    },
    "mombasa-03.webp": {
        code: "FIELD RECORD: MBA-2008-204",
        title: "Chronicles of Mombasa · The Teacher / The Stage Actor",
        obs: "Caught in motion, with a sleeve or scarf pulled loosely across his face in a spontaneous gesture.",
        cog: "Shy at first, he whispered that he wanted to be a teacher. After giggling behind his sweater, he pulled it down and announced boldly that he was going to be a stage actor and make people laugh."
    },
    "mombasa-04.webp": {
        code: "FIELD RECORD: MBA-2008-083",
        title: "Chronicles of Mombasa · The Gardener / The Children's Poet",
        obs: "Gentle, downward glance with a calm and deeply thoughtful expression.",
        cog: "She spoke quietly about helping her mother in the garden. After a brief silence, she looked up and added with complete confidence that she also wanted to write books of poetry for children."
    },
    "mombasa-05.webp": {
        code: "FIELD RECORD: MBA-2008-167",
        title: "Chronicles of Mombasa · The Doctor / The Football Captain",
        obs: "Composed, formal stance in a school sweater, looking straight into the lens with quiet pride.",
        cog: "He stated very formally that he was going to be a doctor. Re-interviewed five minutes later, he smiled and admitted he'd actually prefer to be a football captain who leads his team to victory."
    },
    "mombasa-06.webp": {
        code: "FIELD RECORD: MBA-2008-289",
        title: "Chronicles of Mombasa · The Auto Mechanic / The Rocket Engineer",
        obs: "Profile view looking upward alongside classmates, caught mid-smile with genuine excitement.",
        cog: "He originally said he wanted to fix cars. Watching a plane pass overhead with his friends, he pointed up and decided on the spot that he was going to build rockets that travel to the moon."
    },
    "mombasa-07.webp": {
        code: "FIELD RECORD: MBA-2008-312",
        title: "Chronicles of Mombasa · The Wildlife Protector / The Lead Guitarist",
        obs: "Close-up showing an inquisitive glance to the side, wearing a beaded neckpiece.",
        cog: "He said his dream was to protect wild animals in the forest. A moment later, hearing music from a nearby radio, he grinned and said he might also play the guitar in a famous band."
    },
    "mombasa-08.webp": {
        code: "FIELD RECORD: MBA-2008-056",
        title: "Chronicles of Mombasa · The Champion Runner / The Village Baker",
        obs: "A big, joyful smile showing teeth, full of infectious warmth and energy.",
        cog: "He laughed and said he was going to be a famous runner. When asked what he'd do after winning his races, he grinned even wider and said, 'I'll open a bakery and give free cakes to everyone!'"
    },
    "mombasa-09.webp": {
        code: "FIELD RECORD: MBA-2008-391",
        title: "Chronicles of Mombasa · The Grain Farmer / The Ocean Diver",
        obs: "Soft profile against a natural backdrop, looking calmly toward the horizon.",
        cog: "He spoke about wanting to work on a farm growing corn. After looking out at the open landscape for a moment, he turned back and said he wanted to study the ocean and dive deep under water."
    },
    "mombasa-10.webp": {
        code: "FIELD RECORD: MBA-2008-472",
        title: "Chronicles of Mombasa · The Medical Researcher / The Mural Artist",
        obs: "High-contrast, cinematic close-up with light highlighting one side of the face in intense focus.",
        cog: "She spoke with deep seriousness about wanting to study medicine to cure illnesses. Re-engaged a few minutes later, her face softened and she added that she also wanted to paint large color murals on city walls."
    },
    "mombasa-11.webp": {
        code: "FIELD RECORD: MBA-2008-143",
        title: "Chronicles of Mombasa · The School Principal / The Transoceanic Pilot",
        obs: "Direct, attentive portrait in a crisp collared shirt, holding a steady expression.",
        cog: "He started by saying he was going to be a school principal. Moments later, after watching a bird soar over the trees, he turned back with a smile and decided he would rather pilot airplanes across the ocean."
    },
    "mombasa-12.webp": {
        code: "FIELD RECORD: MBA-2008-225",
        title: "Chronicles of Mombasa · The Motorbike Mechanic / The Bridge Architect",
        obs: "Close-up portrait with eyes looking slightly downward in deep concentration.",
        cog: "He spoke first about repairing motorbikes in his town. After thinking quietly for a moment, he looked up and said he wanted to design giant bridges that connect islands."
    },
    "mombasa-13.webp": {
        code: "FIELD RECORD: MBA-2008-097",
        title: "Chronicles of Mombasa · The Sprinter / The Bicycle Craftsman",
        obs: "Profile view in soft outdoor light, looking toward the side with an open posture.",
        cog: "He announced he was going to be a competitive runner. Re-interviewed shortly after, he laughed and said he would rather open a shop that builds bicycles for everyone in his village."
    },
    "mombasa-14.webp": {
        code: "FIELD RECORD: MBA-2008-331",
        title: "Chronicles of Mombasa · The Structural Engineer / The Band Drummer",
        obs: "Sharp, direct gaze toward the camera with an open collar and a confident expression.",
        cog: "He declared he was going to be a structural engineer. Within minutes, hearing music nearby, he grinned and added that he also wanted to learn the drums and play in a band."
    },
    "mombasa-15.webp": {
        code: "FIELD RECORD: MBA-2008-182",
        title: "Chronicles of Mombasa · The Home Gardener / The City Muralist",
        obs: "High-contrast, moody close-up in deep shadow, showing a quiet expression.",
        cog: "She spoke softly about growing a flower garden behind her house. Re-engaged a few moments later, her face brightened as she decided she actually wanted to paint giant murals on city buildings."
    },
    "mombasa-16.webp": {
        code: "FIELD RECORD: MBA-2008-415",
        title: "Chronicles of Mombasa · The Farm Hand / The Astronomer",
        obs: "Gentle portrait in a dark sweater, looking down with a contemplative expression.",
        cog: "He originally thought about working on a farm. After a brief silence, he looked up and said with total enthusiasm that he wanted to study the stars and become an astronomer."
    },
    "mombasa-17.webp": {
        code: "FIELD RECORD: MBA-2008-264",
        title: "Chronicles of Mombasa · The Footballer / The Radio Broadcaster",
        obs: "Side profile caught mid-motion, hands raised as if explaining an idea with excitement.",
        cog: "He spoke animatedly about playing professional football. Mid-sentence, he paused, laughed, and said, 'Actually, I want to be the announcer on the radio who shouts when someone scores!'"
    },
    "mombasa-18.webp": {
        code: "FIELD RECORD: MBA-2008-109",
        title: "Chronicles of Mombasa · The Apprentice Carpenter / The Author",
        obs: "Frontal portrait against a textured grassy background, with an open expression.",
        cog: "He mentioned wanting to be a carpenter like his uncle. Moments later, seeing someone writing in a journal, he decided he wanted to write stories and publish books instead."
    },
    "mombasa-19.webp": {
        code: "FIELD RECORD: MBA-2008-378",
        title: "Chronicles of Mombasa · The Physician / The Solar Boat Designer",
        obs: "Composed, formal portrait wearing a school emblem, looking directly at the camera.",
        cog: "He stated clearly that he was going to be a doctor. Re-interviewed five minutes later, he smiled and said he might also like to build solar-powered boats for fishermen."
    },
    "mombasa-20.webp": {
        code: "FIELD RECORD: MBA-2008-451",
        title: "Chronicles of Mombasa · The Courtroom Judge / The Sanctuary Founder",
        obs: "Profile view with braided hair, looking intently with a focused expression.",
        cog: "She initially said she wanted to be a judge in a courtroom. After looking out across the schoolyard, her expression softened and she said she would rather run a sanctuary to care for wild animals."
    },
    "mombasa-21.webp": {
        code: "FIELD RECORD: MBA-2008-418",
        title: "Chronicles of Mombasa · The Educator / The Naval Architect",
        obs: "Over-the-shoulder glance with an intense, questioning expression caught in a crowd.",
        cog: "He initially stated he wanted to be a school teacher. Moments later, turning back toward the photographer, he reconsidered and said he wanted to design large ocean ships instead."
    },
    "mombasa-22.webp": {
        code: "FIELD RECORD: MBA-2008-088",
        title: "Chronicles of Mombasa · The Radio Host / The Comedian",
        obs: "Soft, joyful grin caught slightly out of focus, radiating warmth and spontaneous energy.",
        cog: "He laughed and said he was going to be a radio host. When asked what music he would play, he grinned even wider and said he would just tell jokes between songs to make everyone happy."
    },
    "mombasa-23.webp": {
        code: "FIELD RECORD: MBA-2008-042 (SECONDARY FRAME)",
        title: "Chronicles of Mombasa · The Jet Aviator / The Silent Engine Inventor",
        obs: "Downward-angled portrait showing a quiet expression (a second study of the child in Photo 01).",
        cog: "In this second recording taken shortly after his first answer, he looked down in thought. Having previously mentioned piloting jets, he quietly added that he also wanted to invent engines that don't make noise."
    },
    "mombasa-24.webp": {
        code: "FIELD RECORD: MBA-2008-362",
        title: "Chronicles of Mombasa · The Librarian / The Adventure Writer",
        obs: "Cropped profile view highlighting an ear and patterned collar, caught in a serene moment.",
        cog: "He spoke softly about working in a library. Re-interviewed moments later, he smiled and said he’d actually rather write the adventure stories that go on the shelves."
    },
    "mombasa-25.webp": {
        code: "FIELD RECORD: MBA-2008-209",
        title: "Chronicles of Mombasa · The Builder / The Tire Technician",
        obs: "Direct gaze from a young child standing in a group, holding a serious, steady expression.",
        cog: "He declared he was going to be a builder. A few minutes later, seeing a passing bicycle, he decided he would rather own a shop that repairs tires for his friends."
    },
    "mombasa-26.webp": {
        code: "FIELD RECORD: MBA-2008-485",
        title: "Chronicles of Mombasa · The Pediatrician / The Oil Painter",
        obs: "Close portrait of a young girl wearing a hooded sweater, with wide eyes peering out from beneath.",
        cog: "She said she wanted to be a doctor to care for sick children. Looking out from her hood moments later, she added with equal conviction that she also wanted to learn how to paint large oil canvases."
    },
    "mombasa-27.webp": {
        code: "FIELD RECORD: MBA-2008-161",
        title: "Chronicles of Mombasa · The Crop Farmer / The Meteorologist",
        obs: "Inquisitive face looking upward, with wide eyes and a curious posture.",
        cog: "He started out saying he wanted to grow vegetables on a farm. Looking up at the open sky, he shifted his dream to studying weather patterns and predicting rain."
    },
    "mombasa-28.webp": {
        code: "FIELD RECORD: MBA-2008-298",
        title: "Chronicles of Mombasa · The Electrician / The Software Programmer",
        obs: "Soft portrait with another child visible in the background, showing a quiet face.",
        cog: "He initially whispered that he wanted to be an electrician. After seeing his classmate smile behind him, he turned and said he'd rather learn how to program computers."
    },
    "mombasa-29.webp": {
        code: "FIELD RECORD: MBA-2008-327",
        title: "Chronicles of Mombasa · The Coastal Captain / The Marine Biologist",
        obs: "Open, expressive face set against outdoor foliage, caught mid-phrase.",
        cog: "He spoke passionately about becoming a boat captain along the coast. Re-interviewed five minutes later, he decided he would rather study marine life and protect sea turtles."
    },
    "mombasa-30.webp": {
        code: "FIELD RECORD: MBA-2008-264 (INVERTED PERSPECTIVE)",
        title: "Chronicles of Mombasa · The Footballer-Broadcaster Dualist",
        obs: "Horizontally mirrored study of Photo 17, capturing the child's expressive hand gesture.",
        cog: "This mirrored print visualizes the child's repeated reversal of answers during the encounter. After switching from football player to sports announcer, a third inquiry prompted him to conclude that he would simply do both."
    }
};

const masterworkProvenance = {
    "rooh-nawaz-1.jpg": "Exhibited at the Museum of Prague West, an institutional repository founded in 1891 by Leopold Čihák.",
    "land-spatial-2.jpg": "Exhibited at the Museum of The Pilgrimage Church of the Visitation of Virgin Mary, a 13th-century landmark and Northern Bohemia's premier Baroque museum.",
    "box-spatial-1.jpg": "Exhibited at the Museum of Ecclesiastical Art, housed within Plzeň’s 14th-century former Franciscan monastery.",
    "words-canvas-main.jpg": "Presented as part of the prominent international showcase, Brussels Expo: Empowering Europe’s Creative Industries."
};

// --- 5. MODAL & LIGHTBOX ENGINE ---
function openDossier(key) {
    const data = dossierData[key];
    const modal = document.getElementById('dossierModal');
    if (data && modal) {
        document.getElementById('modalCode').innerText = data.code;
        document.getElementById('modalTitle').innerText = data.title;
        
        const formattedBody = data.body
            .split('\n\n')
            .map(paragraph => `<p style="margin-bottom: 15px; line-height: 1.8;">${paragraph.replace(/\n/g, '<br>')}</p>`)
            .join('');

        document.getElementById('modalBody').innerHTML = formattedBody;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function openLightbox(imageSrc, fallbackTitle) {
    const filename = imageSrc.split('/').pop().split('?')[0]; // Strip query parameters if present
    const baseFilename = filename.replace(/\.[^/.]+$/, ""); // Get name without extension
    
    // Find matching inscription by exact filename or base name match
    let item = mombasaInscriptions[filename];
    if (!item) {
        const matchingKey = Object.keys(mombasaInscriptions).find(key => key.replace(/\.[^/.]+$/, "") === baseFilename);
        if (matchingKey) {
            item = mombasaInscriptions[matchingKey];
        }
    }

    const modal = document.getElementById('dossierModal');
    if (!modal) return;

    if (item) {
        document.getElementById('modalCode').innerText = item.code;
        document.getElementById('modalTitle').innerText = item.title;
        document.getElementById('modalBody').innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="${imageSrc}" alt="${item.title}" style="max-width: 100%; max-height: 50vh; border: 1px solid var(--accent-gold, #d4af37); margin-bottom: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.8); object-fit: contain;">
            </div>
            <div style="text-align: left; font-size: 0.85rem; line-height: 1.8; color: var(--text-secondary, #888888); background: rgba(255,255,255,0.02); padding: 18px; border-left: 2px solid var(--accent-gold, #d4af37);">
                <p style="margin-top: 0; margin-bottom: 10px;"><strong style="color: #fff;">Field Observation:</strong> ${item.obs}</p>
                <p style="margin-bottom: 0;"><strong style="color: #fff;">The Conversation:</strong> ${item.cog}</p>
            </div>
        `;
    } else {
        const provenanceCaption = masterworkProvenance[filename] || masterworkProvenance[baseFilename + ".jpg"] || (fallbackTitle ? `Exhibition Record: ${fallbackTitle}` : "Hesham Malik Studio Archive");

        document.getElementById('modalCode').innerText = "FULL-SCREEN MASTERWORK VIEW";
        document.getElementById('modalTitle').innerText = fallbackTitle || "Hesham Malik Studio Archive";
        document.getElementById('modalBody').innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="${imageSrc}" alt="${fallbackTitle}" style="max-width: 100%; max-height: 58vh; border: 1px solid var(--accent-gold, #d4af37); box-shadow: 0 15px 40px rgba(0,0,0,0.9); object-fit: contain;">
            </div>
            <div style="text-align: center; font-size: 0.85rem; line-height: 1.8; color: var(--text-secondary, #888888); background: rgba(255,255,255,0.02); padding: 15px 20px; border-top: 1px solid rgba(212, 175, 55, 0.3);">
                <p style="margin: 0; color: #ffffff; font-weight: 300;">${provenanceCaption}</p>
            </div>
        `;
    }
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeDossier() {
    const modal = document.getElementById('dossierModal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }
}

// --- 6. MASTERWORK LEDGER FILTER ---
function filterLedger(category, targetBtn) {
    const buttons = document.querySelectorAll('.ledger-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    
    if (targetBtn) {
        targetBtn.classList.add('active');
        targetBtn.setAttribute('aria-selected', 'true');
    }

    const cards = document.querySelectorAll('.series-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// --- 7. SURFACE & TEXTURE MACRO DETAIL VIEWER ENGINE ---
function initMacroViewerEngine() {
    const macroWindow = document.getElementById('macroWindow') || document.querySelector('.macro-view-window');
    const macroImg = document.getElementById('macroImage') || (macroWindow ? macroWindow.querySelector('img') : null);
    
    // Guard clause to prevent errors if elements don't exist
    if (!macroWindow || !macroImg) return;

    let scale = 1;
    let pointX = 0;
    let pointY = 0;

    let isPanning = false;
    let startX = 0;
    let startY = 0;

    let initialPinchDistance = null;
    let initialScale = 1;

    function clampBoundaries() {
        const windowRect = macroWindow.getBoundingClientRect();
        
        const maxPanX = Math.max(0, ((windowRect.width * scale) - windowRect.width) / 2);
        const maxPanY = Math.max(0, ((windowRect.height * scale) - windowRect.height) / 2);

        if (scale > 1) {
            pointX = Math.min(Math.max(pointX, -maxPanX), maxPanX);
            pointY = Math.min(Math.max(pointY, -maxPanY), maxPanY);
        } else {
            pointX = 0;
            pointY = 0;
        }
    }

    function renderTransform(animate = false) {
        clampBoundaries();
        macroImg.style.transition = animate ? 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)' : 'none';
        macroImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
        macroWindow.style.cursor = isPanning ? 'grabbing' : 'grab';
    }

    // Mouse Pan Controls
    macroWindow.addEventListener('mousedown', function(e) {
        e.preventDefault();
        isPanning = true;
        startX = e.clientX - pointX;
        startY = e.clientY - pointY;
        renderTransform(false);
    });

    window.addEventListener('mousemove', function(e) {
        if (!isPanning) return;
        e.preventDefault();
        pointX = e.clientX - startX;
        pointY = e.clientY - startY;
        renderTransform(false);
    });

    window.addEventListener('mouseup', function() {
        if (isPanning) {
            isPanning = false;
            renderTransform(true);
        }
    });

    // Double Click Zoom
    macroWindow.addEventListener('dblclick', function(e) {
        e.preventDefault();
        if (scale > 1) {
            scale = 1;
            pointX = 0;
            pointY = 0;
        } else {
            const rect = macroWindow.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;
            scale = 2.5;
            pointX = -mouseX * 1.5;
            pointY = -mouseY * 1.5;
        }
        renderTransform(true);
    });

    // Wheel Zoom Controls
    macroWindow.addEventListener('wheel', function(e) {
        e.preventDefault();

        const rect = macroWindow.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        const zoomFactor = e.deltaY < 0 ? 1.2 : 0.83;
        const targetScale = Math.min(Math.max(scale * zoomFactor, 1), 5.0);

        if (targetScale !== scale) {
            pointX += (mouseX - pointX) * (1 - targetScale / scale);
            pointY += (mouseY - pointY) * (1 - targetScale / scale);
            scale = targetScale;
            renderTransform(false);
        }
    }, { passive: false });

    // Touch & Pinch Gestures
    macroWindow.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1) {
            isPanning = true;
            startX = e.touches[0].clientX - pointX;
            startY = e.touches[0].clientY - pointY;
        } else if (e.touches.length === 2) {
            isPanning = false;
            initialPinchDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            initialScale = scale;
        }
    }, { passive: true });

    macroWindow.addEventListener('touchmove', function(e) {
        if (e.touches.length === 1 && isPanning) {
            pointX = e.touches[0].clientX - startX;
            pointY = e.touches[0].clientY - startY;
            renderTransform(false);
        } else if (e.touches.length === 2 && initialPinchDistance) {
            const currentDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            scale = Math.min(Math.max(initialScale * (currentDistance / initialPinchDistance), 1), 5.0);
            renderTransform(false);
        }
    }, { passive: true });

    macroWindow.addEventListener('touchend', function() {
        isPanning = false;
        initialPinchDistance = null;
        renderTransform(true);
    });

    window.resetMacroView = function() {
        scale = 1;
        pointX = 0;
        pointY = 0;
        isPanning = false;
        renderTransform(true);
    };
}

// --- 8. INITIALIZATION & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', function() {
    const mombasaTrigger = document.getElementById('mombasa-trigger');
    if (mombasaTrigger) {
        mombasaTrigger.addEventListener('click', toggleMombasaEssay);
    }

    document.querySelectorAll('[data-dossier]').forEach(btn => {
        btn.addEventListener('click', function() {
            openDossier(this.getAttribute('data-dossier'));
        });
    });

    document.querySelectorAll('[data-lightbox-src]').forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-lightbox-src');
            const caption = this.getAttribute('data-caption') || '';
            openLightbox(src, caption);
        });
    });

    document.querySelectorAll('.map-node').forEach(node => {
        node.addEventListener('click', function(e) {
            const key = this.getAttribute('data-node');
            openMapDetails(key, e);
        });
    });

    const citySelector = document.getElementById('citySelector');
    if (citySelector) {
        citySelector.addEventListener('change', function() {
            selectCityFromDropdown(this.value);
        });
    }

    const closeMapBtn = document.getElementById('closeMapPopupBtn');
    if (closeMapBtn) {
        closeMapBtn.addEventListener('click', closeMapDetails);
    }

    const closeDossierBtn = document.getElementById('closeDossierBtn');
    if (closeDossierBtn) {
        closeDossierBtn.addEventListener('click', closeDossier);
    }

    document.querySelectorAll('.ledger-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterLedger(filter, this);
        });
    });

    const dossierModal = document.getElementById('dossierModal');
    if (dossierModal) {
        dossierModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeDossier();
            }
        });
    }

    const resetMacroBtn = document.getElementById('resetMacroBtn');
    if (resetMacroBtn) {
        resetMacroBtn.addEventListener('click', function() {
            if (typeof window.resetMacroView === 'function') {
                window.resetMacroView();
            }
        });
    }

    // Initialize Surface Macro Viewer Engine
    initMacroViewerEngine();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDossier();
        closeMapDetails();
    }
});

document.addEventListener('click', function(e) {
    const frame = document.getElementById('mapCanvasFrame');
    const selector = document.getElementById('citySelector');
    if (frame && !frame.contains(e.target) && selector && !selector.contains(e.target)) {
        closeMapDetails();
    }
});
