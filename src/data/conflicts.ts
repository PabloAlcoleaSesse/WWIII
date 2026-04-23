export interface Source {
  name: string;
  ideo: 'left' | 'cleft' | 'center' | 'cright' | 'right';
  geo: 'atlantist' | 'multipolar' | 'statal' | 'nonalign';
  headline: string;
  take: string;
}

export interface Conflict {
  id: string;
  title: string;
  region: string;
  intensity: 'critical' | 'high' | 'moderate';
  type: string;
  summary: string;
  sources: Source[];
}

export const IDEO_LABEL: Record<string, string> = {
  left: 'IZQUIERDA',
  cleft: 'CENTRO-IZQ',
  center: 'CENTRO',
  cright: 'CENTRO-DER',
  right: 'DERECHA',
};

export const GEO_LABEL: Record<string, string> = {
  atlantist: 'ATLANTISTA',
  multipolar: 'MULTIPOLAR',
  statal: 'ESTATAL',
  nonalign: 'NO ALINEADO',
};

export const INTENSITY_LABEL: Record<string, string> = {
  critical: 'CRÍTICO',
  high: 'ALTO',
  moderate: 'MODERADO',
};

export const CONFLICTS: Record<string, Conflict> = {
  ukraine: {
    id: 'OG-UA-2026-014',
    title: 'Ucrania – Rusia',
    region: 'Europa Oriental',
    intensity: 'critical',
    type: 'Bélico · Convencional',
    summary:
      'En abril de 2026 el conflicto entra en una fase de desgaste prolongado. Rusia ha reiterado el control de Luhansk y mantiene presión en los frentes oriental y sur, mientras Ucrania logra contraataques significativos. El debate internacional gira en torno a una posible "congelación" del conflicto y al papel de la administración Trump en una eventual negociación.',
    sources: [
      { name: 'CNN', ideo: 'cleft', geo: 'atlantist', headline: 'Rusia vuelve a afirmar la toma completa de Luhansk en abril de 2026', take: 'Cobertura factual destacando que la afirmación rusa contrasta con análisis del terreno y con voces militares prorrusas que reconocen contraataques ucranianos exitosos.' },
      { name: 'Agenda Pública', ideo: 'cleft', geo: 'atlantist', headline: 'Ucrania 2026: el conflicto entra en una fase de desgaste prolongado', take: 'Análisis académico (Ferrero-Turrión, UCM) que apunta a una congelación favorable a Moscú y a una UE limitada por divisiones internas.' },
      { name: 'RT', ideo: 'right', geo: 'statal', headline: 'Moscú consolida posiciones y denuncia presión occidental sostenida', take: 'Encuadre oficial centrado en avances militares rusos y crítica a la implicación de la OTAN.' },
      { name: 'Stratfor', ideo: 'center', geo: 'atlantist', headline: 'Forecast 2026: Ucrania entre la financiación europea y los activos rusos congelados', take: 'Análisis de inteligencia estratégica con foco en el debate sobre fondos europeos y sostenibilidad bélica.' },
    ],
  },
  israel: {
    id: 'OG-IL-2026-022',
    title: 'Israel – Palestina · Gaza',
    region: 'Oriente Medio',
    intensity: 'critical',
    type: 'Bélico · Asimétrico',
    summary:
      'Tras la entrada en vigor del alto el fuego el 10 de octubre de 2025, la oficina de medios de Gaza documentó hasta el 14 de abril de 2026 unas 2.400 violaciones del acuerdo, con 754 fallecidos y 2.100 heridos según fuentes palestinas. La ONU califica de "crítica" la fase actual de implementación.',
    sources: [
      { name: 'Telesur', ideo: 'left', geo: 'multipolar', headline: 'Gaza denuncia 2.400 violaciones del alto el fuego entre octubre y abril', take: 'Foco en las cifras de víctimas civiles documentadas por la oficina de medios gazatí y demanda de presión internacional.' },
      { name: 'Wikipedia · Guerra de Gaza', ideo: 'center', geo: 'atlantist', headline: 'Cronología: del alto el fuego de enero al actual de octubre de 2025', take: 'Resumen factual del recorrido del conflicto, los acuerdos rotos y los términos del actual pacto.' },
      { name: 'Noticias ONU', ideo: 'center', geo: 'atlantist', headline: 'La segunda fase del alto el fuego es "crítica" y afronta múltiples desafíos', take: 'Resumen institucional del Consejo de Seguridad: más de 500 muertos en territorios palestinos desde el acuerdo y demoliciones en Cisjordania.' },
      { name: 'La Voz de San Justo', ideo: 'center', geo: 'nonalign', headline: 'Gaza: una puerta a la esperanza tras el acuerdo de alto el fuego', take: 'Lectura analítica latinoamericana que valora oportunidades de pacificación pero advierte de fragilidad estructural.' },
    ],
  },
  sudan: {
    id: 'OG-SD-2026-018',
    title: 'Sudán · Guerra civil',
    region: 'Cuerno de África',
    intensity: 'critical',
    type: 'Bélico · Civil',
    summary:
      'Tres años después del inicio de la guerra (15 de abril de 2023), Sudán acumula más de 150.000 muertos y 14 millones de desplazados. Las RSF tomaron El Fasher en octubre de 2025 y han avanzado en Kordofán; las SAF mantienen Jartum y Port Sudan. Sin visos de acuerdo y con una de las peores crisis humanitarias de las últimas décadas.',
    sources: [
      { name: 'Infobae', ideo: 'center', geo: 'atlantist', headline: 'Sudán cumple tres años de guerra marcada por la internacionalización', take: 'Análisis del estancamiento militar, la toma de El Fasher y el avance de las RSF en Kordofán con apoyo del SPLM/N-Al Hilu.' },
      { name: 'Amnistía Internacional', ideo: 'cleft', geo: 'nonalign', headline: 'Tres años de brutal guerra contra la población civil sudanesa', take: 'Documentación de transferencias de armas (incluida implicación de EAU con las RSF) y violaciones del derecho internacional por ambas partes.' },
      { name: 'Noticias ONU', ideo: 'center', geo: 'atlantist', headline: 'Sudán cumple mil días de guerra mientras millones siguen sufriendo', take: 'Llamamiento humanitario: 34 millones necesitan asistencia, plan de OCHA de 2.900 millones de dólares para 2026.' },
      { name: 'TeleSUR', ideo: 'left', geo: 'multipolar', headline: 'Las RSF declaran un gobierno paralelo en Nyala, Darfur Sur', take: 'Cobertura del Consejo Presidencial de 15 miembros liderado por Hemedti y la fragmentación del Estado sudanés.' },
    ],
  },
  sahel: {
    id: 'OG-SH-2026-009',
    title: 'Sahel · Mali, Níger, Burkina Faso',
    region: 'África Occidental',
    intensity: 'high',
    type: 'Bélico · Híbrido',
    summary:
      'El Sahel atraviesa una reconfiguración geopolítica con la consolidación de gobiernos militares en Mali, Burkina Faso y Níger, y la salida progresiva de fuerzas occidentales. La Alianza de Estados del Sahel (AES) busca autonomía estratégica con apoyo creciente de Rusia, mientras la inseguridad yihadista persiste en amplias zonas rurales.',
    sources: [
      { name: 'Le Monde', ideo: 'cleft', geo: 'atlantist', headline: 'El Sahel se redibuja: análisis del nuevo eje militar regional', take: 'Lectura analítica del cambio de paradigma y consecuencias para la presencia francesa y europea.' },
      { name: 'TASS', ideo: 'right', geo: 'statal', headline: 'Cooperación rusa con países del Sahel se amplía a nuevos sectores', take: 'Encuadre positivo sobre la consolidación de relaciones bilaterales en defensa, energía e infraestructuras.' },
      { name: 'Daily Maverick', ideo: 'cleft', geo: 'nonalign', headline: 'Las voces africanas reclaman protagonismo en su propia agenda de seguridad', take: 'Perspectiva continental con énfasis en soberanía, autodeterminación y crítica al paternalismo occidental.' },
    ],
  },
  yemen: {
    id: 'OG-YE-2026-011',
    title: 'Yemen · Mar Rojo',
    region: 'Península Arábiga',
    intensity: 'high',
    type: 'Híbrido · Marítimo',
    summary:
      'Los ataques en el Mar Rojo afectan al tráfico marítimo internacional y reconfiguran rutas comerciales globales. El cierre de facto del Estrecho de Ormuz tras los ataques contra Irán a finales de febrero de 2026 ha disparado el Brent y vuelve a Yemen un nodo crítico del eje regional.',
    sources: [
      { name: 'Reuters', ideo: 'center', geo: 'atlantist', headline: 'Nuevos incidentes en el Mar Rojo afectan al comercio internacional', take: 'Cobertura técnica sobre rutas, costes logísticos y respuesta naval multinacional.' },
      { name: 'PressTV', ideo: 'right', geo: 'statal', headline: 'Yemen reafirma su postura en el frente regional contra Israel', take: 'Encuadre político del conflicto como parte de un eje regional ampliado, vinculado al alto el fuego de Gaza.' },
      { name: 'Arab News', ideo: 'cright', geo: 'multipolar', headline: 'El Golfo busca soluciones diplomáticas para estabilizar la región', take: 'Perspectiva regional con énfasis en mediación y estabilidad económica del comercio marítimo.' },
    ],
  },
  caucaso: {
    id: 'OG-CA-2026-005',
    title: 'Cáucaso · Armenia – Azerbaiyán',
    region: 'Cáucaso Sur',
    intensity: 'moderate',
    type: 'Diplomático · Territorial',
    summary:
      'Las negociaciones entre Ereván y Bakú avanzan con altibajos en un contexto en el que Rusia, Turquía y la UE compiten por el papel de mediador principal. La fase actual es predominantemente diplomática pero con riesgo latente, y se enmarca en la reconfiguración general del espacio postsoviético.',
    sources: [
      { name: 'BBC', ideo: 'cleft', geo: 'atlantist', headline: 'Nueva ronda diplomática en Ginebra entre Armenia y Azerbaiyán', take: 'Cobertura factual de la diplomacia y posiciones de las delegaciones.' },
      { name: 'TASS', ideo: 'right', geo: 'statal', headline: 'Moscú reitera su disposición a actuar como mediador en el Cáucaso', take: 'Énfasis en el papel histórico y actual de Rusia como garante regional.' },
      { name: 'Al Jazeera', ideo: 'cleft', geo: 'multipolar', headline: 'El Cáucaso, escenario de competencia entre potencias regionales', take: 'Análisis del juego geopolítico ampliado entre Rusia, Turquía y la UE.' },
    ],
  },
  taiwan: {
    id: 'OG-TW-2026-019',
    title: 'Taiwán – China',
    region: 'Estrecho de Taiwán',
    intensity: 'high',
    type: 'Híbrido · Estratégico',
    summary:
      'Tras los ejercicios "Misión Justicia 2025" de fin de año, en marzo de 2026 China rompió su breve "tregua" militar con una incursión masiva de 26 aviones y 7 buques simulando bloqueo. El presidente Lai Ching-te ha prometido elevar el gasto en defensa al 5% del PIB y construir el sistema "Cúpula de Taiwán" (40.000 M$ en 8 años).',
    sources: [
      { name: 'Infobae', ideo: 'center', geo: 'atlantist', headline: 'EE.UU. acusa a China de elevar "innecesariamente" las tensiones', take: 'El Departamento de Estado pide a Pekín cesar la presión militar; Lai advierte que 2026 será un año crucial.' },
      { name: 'Euronews', ideo: 'cleft', geo: 'atlantist', headline: 'Taiwán promete defender su soberanía frente a las "ambiciones expansionistas" de China', take: 'Cobertura del discurso de Año Nuevo de Lai y del presupuesto especial de defensa de 40.000 millones de dólares.' },
      { name: 'Moncloa', ideo: 'cright', geo: 'atlantist', headline: 'Alerta máxima: China rompe su "tregua" militar con incursión masiva', take: 'Análisis del simulacro de bloqueo y la lectura del Estrecho como termostato diplomático de Pekín.' },
      { name: 'Valora Analitik', ideo: 'center', geo: 'nonalign', headline: 'La presión de China sobre Taiwán y los límites del statu quo', take: 'Perspectiva histórica y estratégica desde América Latina sobre el conflicto abierto desde 1949.' },
    ],
  },
  'south-china': {
    id: 'OG-SC-2026-013',
    title: 'Mar de China Meridional',
    region: 'Asia-Pacífico',
    intensity: 'high',
    type: 'Diplomático · Marítimo',
    summary:
      'Las disputas territoriales y los incidentes navales se multiplican en una zona clave para el comercio global. Las posiciones de Filipinas, Vietnam y China articulan narrativas opuestas sobre soberanía y libertad de navegación, en un escenario de creciente competencia estratégica con AUKUS y el eje Indo-Pacífico.',
    sources: [
      { name: 'Xinhua', ideo: 'left', geo: 'statal', headline: 'China defiende sus derechos históricos en el Mar Meridional', take: 'Encuadre oficial basado en derechos históricos y soberanía nacional.' },
      { name: 'Reuters', ideo: 'center', geo: 'atlantist', headline: 'Filipinas denuncia nuevos incidentes con la guardia costera china', take: 'Cobertura factual con énfasis en el cumplimiento del derecho marítimo internacional.' },
      { name: 'Nikkei Asia', ideo: 'cright', geo: 'atlantist', headline: 'El Indo-Pacífico consolida una arquitectura de seguridad ampliada', take: 'Perspectiva regional con foco en alianzas defensivas multilaterales y AUKUS.' },
    ],
  },
  korea: {
    id: 'OG-KP-2026-007',
    title: 'Corea del Norte',
    region: 'Península Coreana',
    intensity: 'moderate',
    type: 'Diplomático · Estratégico',
    summary:
      'La actividad balística y la diplomacia paralela mantienen a la península coreana en una alerta sostenida. La cobertura se polariza entre la lectura de provocación y la lectura de respuesta a maniobras conjuntas regionales entre Seúl, Tokio y Washington.',
    sources: [
      { name: 'Korea Herald', ideo: 'center', geo: 'atlantist', headline: 'Seúl y Tokio revisan su cooperación en inteligencia ante actividad norcoreana', take: 'Cobertura institucional centrada en la respuesta defensiva regional.' },
      { name: 'Xinhua', ideo: 'left', geo: 'statal', headline: 'Pekín llama a la calma y a la reanudación del diálogo a seis bandas', take: 'Énfasis en la diplomacia regional y la desescalada controlada.' },
      { name: 'BBC', ideo: 'cleft', geo: 'atlantist', headline: 'La península coreana mantiene un nivel de tensión sostenido', take: 'Análisis equilibrado de las dinámicas regionales y los riesgos asociados.' },
    ],
  },
  esequibo: {
    id: 'OG-VE-2026-003',
    title: 'Venezuela · Esequibo',
    region: 'América del Sur',
    intensity: 'moderate',
    type: 'Diplomático · Territorial',
    summary:
      'La disputa por el Esequibo entre Venezuela y Guyana ha escalado al plano diplomático regional, con implicación de Brasil como mediador y atención de Washington. El componente petrolero añade una capa estratégica al contencioso.',
    sources: [
      { name: 'The New York Times', ideo: 'cleft', geo: 'atlantist', headline: 'Washington revisa su estrategia hemisférica ante el repunte del Esequibo', take: 'Lectura desde el interés estratégico estadounidense en la región.' },
      { name: 'Telesur', ideo: 'left', geo: 'statal', headline: 'Caracas defiende la soberanía sobre el Esequibo en la CELAC', take: 'Encuadre nacionalista con énfasis en la legitimidad histórica.' },
      { name: 'Folha de S.Paulo', ideo: 'cleft', geo: 'nonalign', headline: 'Brasil ofrece mediación regional para evitar escalada en la frontera', take: 'Perspectiva regional con foco en la estabilidad y vías diplomáticas.' },
    ],
  },
};

export interface MapMarker {
  key: string;
  label: string;
  intensity: 'critical' | 'high' | 'moderate';
  type: string;
  region: string;
  tooltipId: string;
  tooltipTitle: string;
  tooltipMeta: string;
  // Real geographic coordinates for Leaflet
  lat: number;
  lng: number;
}

export const MAP_MARKERS: MapMarker[] = [
  { key: 'ukraine', label: 'UCRANIA', intensity: 'critical', type: 'belico', region: 'europa', tooltipId: 'OG-UA-2026-014', tooltipTitle: 'Ucrania – Rusia', tooltipMeta: 'CRÍTICO · BÉLICO', lat: 49.0, lng: 32.0 },
  { key: 'israel', label: 'GAZA', intensity: 'critical', type: 'belico', region: 'oriente', tooltipId: 'OG-IL-2026-022', tooltipTitle: 'Israel – Palestina · Gaza', tooltipMeta: 'CRÍTICO · BÉLICO', lat: 31.5, lng: 34.8 },
  { key: 'sudan', label: 'SUDÁN', intensity: 'critical', type: 'belico', region: 'africa', tooltipId: 'OG-SD-2026-018', tooltipTitle: 'Sudán · Guerra civil', tooltipMeta: 'CRÍTICO · BÉLICO', lat: 15.5, lng: 32.5 },
  { key: 'sahel', label: 'SAHEL', intensity: 'high', type: 'belico', region: 'africa', tooltipId: 'OG-SH-2026-009', tooltipTitle: 'Sahel · Mali, Níger, Burkina', tooltipMeta: 'ALTO · BÉLICO', lat: 16.0, lng: 0.0 },
  { key: 'yemen', label: 'YEMEN', intensity: 'high', type: 'hibrido', region: 'oriente', tooltipId: 'OG-YE-2026-011', tooltipTitle: 'Yemen · Mar Rojo', tooltipMeta: 'ALTO · HÍBRIDO', lat: 15.5, lng: 48.0 },
  { key: 'caucaso', label: 'CÁUCASO', intensity: 'moderate', type: 'diplomatico', region: 'europa', tooltipId: 'OG-CA-2026-005', tooltipTitle: 'Cáucaso · Armenia – Azerbaiyán', tooltipMeta: 'MODERADO · DIPLOMÁTICO', lat: 40.5, lng: 47.0 },
  { key: 'taiwan', label: 'TAIWÁN', intensity: 'high', type: 'hibrido', region: 'asia', tooltipId: 'OG-TW-2026-019', tooltipTitle: 'Taiwán – China', tooltipMeta: 'ALTO · HÍBRIDO', lat: 23.5, lng: 121.0 },
  { key: 'south-china', label: 'MAR CHINA', intensity: 'high', type: 'diplomatico', region: 'asia', tooltipId: 'OG-SC-2026-013', tooltipTitle: 'Mar de China Meridional', tooltipMeta: 'ALTO · DIPLOMÁTICO', lat: 12.0, lng: 114.0 },
  { key: 'korea', label: 'COREA N.', intensity: 'moderate', type: 'diplomatico', region: 'asia', tooltipId: 'OG-KP-2026-007', tooltipTitle: 'Corea del Norte', tooltipMeta: 'MODERADO · DIPLOMÁTICO', lat: 40.0, lng: 127.0 },
  { key: 'esequibo', label: 'ESEQUIBO', intensity: 'moderate', type: 'diplomatico', region: 'america', tooltipId: 'OG-VE-2026-003', tooltipTitle: 'Venezuela · Esequibo', tooltipMeta: 'MODERADO · DIPLOMÁTICO', lat: 6.0, lng: -60.0 },
];
