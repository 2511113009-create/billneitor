const categories = {
  "1": "Iluminación",
  "2": "Cables eléctricos",
  "3": "Interruptores",
  "4": "Herramientas y accesorios eléctricos",
  "5": "Ferretería general"
};
const products = [
  {
    "code": "LED-001",
    "name": "Foco LED 7W luz blanca E27",
    "description": "Rosca E27, 6500K, 220V",
    "category": 1,
    "family": "Focos LED",
    "cents": 380,
    "unit": "unidad"
  },
  {
    "code": "LED-002",
    "name": "Foco LED 9W luz blanca E27",
    "description": "Rosca E27, 6500K, 220V",
    "category": 1,
    "family": "Focos LED",
    "cents": 420,
    "unit": "unidad"
  },
  {
    "code": "LED-003",
    "name": "Foco LED 9W luz cálida E27",
    "description": "Rosca E27, 3000K, 220V",
    "category": 1,
    "family": "Focos LED",
    "cents": 420,
    "unit": "unidad"
  },
  {
    "code": "LED-004",
    "name": "Foco LED 12W luz blanca E27",
    "description": "Rosca E27, 6500K, 220V",
    "category": 1,
    "family": "Focos LED",
    "cents": 590,
    "unit": "unidad"
  },
  {
    "code": "LED-005",
    "name": "Foco LED 15W luz blanca E27",
    "description": "Rosca E27, 6500K, 220V",
    "category": 1,
    "family": "Focos LED",
    "cents": 750,
    "unit": "unidad"
  },
  {
    "code": "LED-006",
    "name": "Foco LED 20W alta potencia E27",
    "description": "Alta potencia, 6500K",
    "category": 1,
    "family": "Focos LED",
    "cents": 1050,
    "unit": "unidad"
  },
  {
    "code": "LED-007",
    "name": "Foco LED 30W alta potencia E27",
    "description": "Alta potencia, 6500K",
    "category": 1,
    "family": "Focos LED",
    "cents": 1580,
    "unit": "unidad"
  },
  {
    "code": "LED-008",
    "name": "Foco LED vela 5W E14 luz cálida",
    "description": "Tipo vela, rosca E14",
    "category": 1,
    "family": "Focos LED",
    "cents": 460,
    "unit": "unidad"
  },
  {
    "code": "LED-009",
    "name": "Tubo LED T8 18W 1.20 m",
    "description": "Tubo fluorescente LED 6500K",
    "category": 1,
    "family": "Focos LED",
    "cents": 1450,
    "unit": "unidad"
  },
  {
    "code": "LED-010",
    "name": "Foco LED dicroico GU10 7W",
    "description": "Para spot empotrable",
    "category": 1,
    "family": "Focos LED",
    "cents": 680,
    "unit": "unidad"
  },
  {
    "code": "LED-011",
    "name": "Foco LED filamento vintage 6W",
    "description": "Estilo decorativo, luz cálida",
    "category": 1,
    "family": "Focos LED",
    "cents": 1200,
    "unit": "unidad"
  },
  {
    "code": "LED-012",
    "name": "Foco LED RGB 10W con control remoto",
    "description": "16 colores, control remoto",
    "category": 1,
    "family": "Focos LED",
    "cents": 1850,
    "unit": "unidad"
  },
  {
    "code": "LED-013",
    "name": "Foco LED recargable de emergencia 12W",
    "description": "Batería recargable incorporada",
    "category": 1,
    "family": "Focos LED",
    "cents": 2200,
    "unit": "unidad"
  },
  {
    "code": "BOM-001",
    "name": "Bombilla incandescente 60W E27",
    "description": "Luz cálida, 220V",
    "category": 1,
    "family": "Bombillas y ahorradores",
    "cents": 220,
    "unit": "unidad"
  },
  {
    "code": "BOM-002",
    "name": "Bombilla incandescente 100W E27",
    "description": "Luz cálida, 220V",
    "category": 1,
    "family": "Bombillas y ahorradores",
    "cents": 260,
    "unit": "unidad"
  },
  {
    "code": "BOM-003",
    "name": "Foco ahorrador espiral 25W E27",
    "description": "Fluorescente compacto",
    "category": 1,
    "family": "Bombillas y ahorradores",
    "cents": 680,
    "unit": "unidad"
  },
  {
    "code": "REF-001",
    "name": "Reflector LED 10W luz blanca",
    "description": "IP65, uso exterior",
    "category": 1,
    "family": "Reflectores",
    "cents": 1400,
    "unit": "unidad"
  },
  {
    "code": "REF-002",
    "name": "Reflector LED 20W luz blanca",
    "description": "IP65, uso exterior",
    "category": 1,
    "family": "Reflectores",
    "cents": 2200,
    "unit": "unidad"
  },
  {
    "code": "REF-003",
    "name": "Reflector LED 30W luz blanca",
    "description": "IP65, uso exterior",
    "category": 1,
    "family": "Reflectores",
    "cents": 2900,
    "unit": "unidad"
  },
  {
    "code": "REF-004",
    "name": "Reflector LED 50W luz blanca",
    "description": "IP65, uso exterior",
    "category": 1,
    "family": "Reflectores",
    "cents": 4200,
    "unit": "unidad"
  },
  {
    "code": "REF-005",
    "name": "Reflector LED 100W luz blanca",
    "description": "IP65, uso exterior",
    "category": 1,
    "family": "Reflectores",
    "cents": 6800,
    "unit": "unidad"
  },
  {
    "code": "REF-006",
    "name": "Reflector LED 200W luz blanca",
    "description": "IP65, alta potencia",
    "category": 1,
    "family": "Reflectores",
    "cents": 12500,
    "unit": "unidad"
  },
  {
    "code": "REF-007",
    "name": "Reflector LED solar 100W con control",
    "description": "Panel solar y control remoto",
    "category": 1,
    "family": "Reflectores",
    "cents": 7800,
    "unit": "unidad"
  },
  {
    "code": "REF-008",
    "name": "Reflector LED RGB 30W con control",
    "description": "Multicolor, control remoto",
    "category": 1,
    "family": "Reflectores",
    "cents": 3800,
    "unit": "unidad"
  },
  {
    "code": "LAM-001",
    "name": "Lámpara colgante moderna con control remoto",
    "description": "Luz regulable, 3 tonos",
    "category": 1,
    "family": "Lámparas decorativas",
    "cents": 8500,
    "unit": "unidad"
  },
  {
    "code": "LAM-002",
    "name": "Lámpara de techo LED redonda 24W",
    "description": "Sobreponer, 6500K",
    "category": 1,
    "family": "Lámparas decorativas",
    "cents": 4200,
    "unit": "unidad"
  },
  {
    "code": "LAM-003",
    "name": "Plafón LED cuadrado 18W",
    "description": "Sobreponer, 6500K",
    "category": 1,
    "family": "Lámparas decorativas",
    "cents": 2800,
    "unit": "unidad"
  },
  {
    "code": "LAM-004",
    "name": "Lámpara de mesa decorativa",
    "description": "Base cerámica, pantalla de tela",
    "category": 1,
    "family": "Lámparas decorativas",
    "cents": 3500,
    "unit": "unidad"
  },
  {
    "code": "LAM-005",
    "name": "Lámpara tipo araña con control remoto",
    "description": "Cristal, 8 luces",
    "category": 1,
    "family": "Lámparas decorativas",
    "cents": 16000,
    "unit": "unidad"
  },
  {
    "code": "LAM-006",
    "name": "Aplique de pared LED 12W",
    "description": "Uso interior, luz cálida",
    "category": 1,
    "family": "Lámparas decorativas",
    "cents": 3200,
    "unit": "unidad"
  },
  {
    "code": "LAM-007",
    "name": "Panel LED empotrable 18W cuadrado",
    "description": "Para cielo raso",
    "category": 1,
    "family": "Lámparas decorativas",
    "cents": 1950,
    "unit": "unidad"
  },
  {
    "code": "LAM-008",
    "name": "Lámpara solar de jardín",
    "description": "Carga solar, sensor crepuscular",
    "category": 1,
    "family": "Lámparas decorativas",
    "cents": 1600,
    "unit": "unidad"
  },
  {
    "code": "TIR-001",
    "name": "Tira LED 5 m luz blanca 12V",
    "description": "Autoadhesiva, 300 LED",
    "category": 1,
    "family": "Tiras y luces LED",
    "cents": 2500,
    "unit": "unidad"
  },
  {
    "code": "TIR-002",
    "name": "Tira LED RGB 5 m con control remoto",
    "description": "Multicolor, 12V",
    "category": 1,
    "family": "Tiras y luces LED",
    "cents": 3800,
    "unit": "unidad"
  },
  {
    "code": "TIR-003",
    "name": "Manguera LED 10 m luz cálida",
    "description": "Uso exterior, 220V",
    "category": 1,
    "family": "Tiras y luces LED",
    "cents": 3200,
    "unit": "unidad"
  },
  {
    "code": "TIR-004",
    "name": "Guirnalda luces navideñas 100 LED",
    "description": "Multicolor, 8 funciones",
    "category": 1,
    "family": "Tiras y luces LED",
    "cents": 1800,
    "unit": "unidad"
  },
  {
    "code": "TIR-005",
    "name": "Cortina LED 3 x 3 m luz cálida",
    "description": "Decorativa, 220V",
    "category": 1,
    "family": "Tiras y luces LED",
    "cents": 4500,
    "unit": "unidad"
  },
  {
    "code": "ACC-001",
    "name": "Socket de porcelana E27",
    "description": "Para foco rosca E27",
    "category": 1,
    "family": "Accesorios de iluminación",
    "cents": 350,
    "unit": "unidad"
  },
  {
    "code": "ACC-002",
    "name": "Socket de plástico E27 con cable",
    "description": "Con 1 m de cable",
    "category": 1,
    "family": "Accesorios de iluminación",
    "cents": 450,
    "unit": "unidad"
  },
  {
    "code": "ACC-003",
    "name": "Fotocélula 220V 10A",
    "description": "Encendido automático",
    "category": 1,
    "family": "Accesorios de iluminación",
    "cents": 1400,
    "unit": "unidad"
  },
  {
    "code": "ACC-004",
    "name": "Sensor de movimiento 180°",
    "description": "Para reflector o pared",
    "category": 1,
    "family": "Accesorios de iluminación",
    "cents": 2400,
    "unit": "unidad"
  },
  {
    "code": "ACC-005",
    "name": "Fuente de poder 12V 5A",
    "description": "Para tiras LED",
    "category": 1,
    "family": "Accesorios de iluminación",
    "cents": 2200,
    "unit": "unidad"
  },
  {
    "code": "ACC-006",
    "name": "Driver LED 36W para panel",
    "description": "Entrada 220V",
    "category": 1,
    "family": "Accesorios de iluminación",
    "cents": 1800,
    "unit": "unidad"
  },
  {
    "code": "CAB-001",
    "name": "Cable THW 14 AWG (por metro)",
    "description": "Cobre, 600V, varios colores",
    "category": 2,
    "family": "Cable THW",
    "cents": 190,
    "unit": "metro"
  },
  {
    "code": "CAB-002",
    "name": "Cable THW 12 AWG (por metro)",
    "description": "Cobre, 600V, varios colores",
    "category": 2,
    "family": "Cable THW",
    "cents": 260,
    "unit": "metro"
  },
  {
    "code": "CAB-003",
    "name": "Cable THW 10 AWG (por metro)",
    "description": "Cobre, 600V, varios colores",
    "category": 2,
    "family": "Cable THW",
    "cents": 410,
    "unit": "metro"
  },
  {
    "code": "CAB-004",
    "name": "Rollo cable THW 14 AWG 100 m",
    "description": "Cobre, 600V",
    "category": 2,
    "family": "Cable THW",
    "cents": 17500,
    "unit": "rollo"
  },
  {
    "code": "CAB-005",
    "name": "Cable mellizo 2x16 AWG (por metro)",
    "description": "Uso doméstico",
    "category": 2,
    "family": "Cable mellizo",
    "cents": 180,
    "unit": "metro"
  },
  {
    "code": "CAB-006",
    "name": "Cable mellizo 2x14 AWG (por metro)",
    "description": "Uso doméstico",
    "category": 2,
    "family": "Cable mellizo",
    "cents": 280,
    "unit": "metro"
  },
  {
    "code": "CAB-007",
    "name": "Cable vulcanizado 3x16 AWG (por metro)",
    "description": "Uso rudo",
    "category": 2,
    "family": "Cable mellizo",
    "cents": 360,
    "unit": "metro"
  },
  {
    "code": "LLT-001",
    "name": "Llave térmica monofásica 1x16A",
    "description": "Riel DIN",
    "category": 3,
    "family": "Llaves térmicas",
    "cents": 1800,
    "unit": "unidad"
  },
  {
    "code": "LLT-002",
    "name": "Llave térmica monofásica 1x20A",
    "description": "Riel DIN",
    "category": 3,
    "family": "Llaves térmicas",
    "cents": 1850,
    "unit": "unidad"
  },
  {
    "code": "LLT-003",
    "name": "Llave térmica bipolar 2x32A",
    "description": "Riel DIN",
    "category": 3,
    "family": "Llaves térmicas",
    "cents": 3800,
    "unit": "unidad"
  },
  {
    "code": "LLT-004",
    "name": "Llave térmica bipolar 2x40A",
    "description": "Riel DIN",
    "category": 3,
    "family": "Llaves térmicas",
    "cents": 4000,
    "unit": "unidad"
  },
  {
    "code": "LLT-005",
    "name": "Llave térmica trifásica 3x32A",
    "description": "Riel DIN",
    "category": 3,
    "family": "Llaves térmicas",
    "cents": 8200,
    "unit": "unidad"
  },
  {
    "code": "LLT-006",
    "name": "Llave térmica trifásica 3x63A",
    "description": "Riel DIN",
    "category": 3,
    "family": "Llaves térmicas",
    "cents": 12800,
    "unit": "unidad"
  },
  {
    "code": "LLT-007",
    "name": "Interruptor diferencial 2x40A 30mA",
    "description": "Protección contra fugas",
    "category": 3,
    "family": "Llaves térmicas",
    "cents": 11800,
    "unit": "unidad"
  },
  {
    "code": "CAB-008",
    "name": "Cable THW 16 AWG (por metro)",
    "description": "Cobre, 600V, varios colores",
    "category": 2,
    "family": "Cable THW",
    "cents": 150,
    "unit": "metro"
  },
  {
    "code": "CAB-009",
    "name": "Cable THW 8 AWG (por metro)",
    "description": "Cobre, 600V, varios colores",
    "category": 2,
    "family": "Cable THW",
    "cents": 700,
    "unit": "metro"
  },
  {
    "code": "CAB-010",
    "name": "Cable flexible 2x1.5 mm² (por metro)",
    "description": "Cable para extensiones y artefactos",
    "category": 2,
    "family": "Cable flexible",
    "cents": 300,
    "unit": "metro"
  },
  {
    "code": "CAB-011",
    "name": "Cable flexible 3x1.5 mm² (por metro)",
    "description": "Con línea a tierra",
    "category": 2,
    "family": "Cable flexible",
    "cents": 420,
    "unit": "metro"
  },
  {
    "code": "CAB-012",
    "name": "Cable flexible 3x2.5 mm² (por metro)",
    "description": "Con línea a tierra",
    "category": 2,
    "family": "Cable flexible",
    "cents": 630,
    "unit": "metro"
  },
  {
    "code": "CAB-013",
    "name": "Cable NYY 2x4 mm² (por metro)",
    "description": "Uso subterráneo y exterior",
    "category": 2,
    "family": "Cable NYY",
    "cents": 920,
    "unit": "metro"
  },
  {
    "code": "CAB-014",
    "name": "Cable NYY 3x6 mm² (por metro)",
    "description": "Uso subterráneo y exterior",
    "category": 2,
    "family": "Cable NYY",
    "cents": 1650,
    "unit": "metro"
  },
  {
    "code": "CAB-015",
    "name": "Cable coaxial RG6 (por metro)",
    "description": "Para TV por cable",
    "category": 2,
    "family": "Cable coaxial y de red",
    "cents": 200,
    "unit": "metro"
  },
  {
    "code": "CAB-016",
    "name": "Cable de red UTP Cat5e (por metro)",
    "description": "Para redes y cámaras",
    "category": 2,
    "family": "Cable coaxial y de red",
    "cents": 150,
    "unit": "metro"
  },
  {
    "code": "INT-001",
    "name": "Interruptor simple 10A empotrable",
    "description": "Con placa, 1 módulo",
    "category": 3,
    "family": "Interruptores simples, dobles y triples",
    "cents": 500,
    "unit": "unidad"
  },
  {
    "code": "INT-002",
    "name": "Interruptor doble 10A empotrable",
    "description": "Con placa, 2 módulos",
    "category": 3,
    "family": "Interruptores simples, dobles y triples",
    "cents": 820,
    "unit": "unidad"
  },
  {
    "code": "INT-003",
    "name": "Interruptor triple 10A empotrable",
    "description": "Con placa, 3 módulos",
    "category": 3,
    "family": "Interruptores simples, dobles y triples",
    "cents": 1150,
    "unit": "unidad"
  },
  {
    "code": "INT-004",
    "name": "Interruptor simple sobrepuesto",
    "description": "Para instalación externa",
    "category": 3,
    "family": "Interruptores simples, dobles y triples",
    "cents": 620,
    "unit": "unidad"
  },
  {
    "code": "INT-005",
    "name": "Pulsador de timbre",
    "description": "Con placa",
    "category": 3,
    "family": "Interruptores simples, dobles y triples",
    "cents": 480,
    "unit": "unidad"
  },
  {
    "code": "INT-006",
    "name": "Interruptor conmutable simple (3 vías)",
    "description": "Para escaleras y pasillos",
    "category": 3,
    "family": "Interruptores conmutables y dimmer",
    "cents": 750,
    "unit": "unidad"
  },
  {
    "code": "INT-007",
    "name": "Interruptor conmutable doble",
    "description": "2 módulos, 3 vías",
    "category": 3,
    "family": "Interruptores conmutables y dimmer",
    "cents": 1250,
    "unit": "unidad"
  },
  {
    "code": "INT-008",
    "name": "Interruptor dimmer regulable 300W",
    "description": "Regulador de intensidad",
    "category": 3,
    "family": "Interruptores conmutables y dimmer",
    "cents": 2600,
    "unit": "unidad"
  },
  {
    "code": "INT-009",
    "name": "Tomacorriente simple 10A empotrable",
    "description": "Con placa",
    "category": 3,
    "family": "Tomacorrientes",
    "cents": 580,
    "unit": "unidad"
  },
  {
    "code": "INT-010",
    "name": "Tomacorriente doble 16A empotrable",
    "description": "Con placa",
    "category": 3,
    "family": "Tomacorrientes",
    "cents": 860,
    "unit": "unidad"
  },
  {
    "code": "INT-011",
    "name": "Tomacorriente doble con línea a tierra 16A",
    "description": "Con placa",
    "category": 3,
    "family": "Tomacorrientes",
    "cents": 1200,
    "unit": "unidad"
  },
  {
    "code": "INT-012",
    "name": "Tomacorriente doble sobrepuesto",
    "description": "Para instalación externa",
    "category": 3,
    "family": "Tomacorrientes",
    "cents": 950,
    "unit": "unidad"
  },
  {
    "code": "INT-013",
    "name": "Interruptor con tomacorriente combinado",
    "description": "Módulo combinado con placa",
    "category": 3,
    "family": "Tomacorrientes",
    "cents": 1350,
    "unit": "unidad"
  },
  {
    "code": "INT-014",
    "name": "Toma de TV coaxial empotrable",
    "description": "Con placa",
    "category": 3,
    "family": "Tomacorrientes",
    "cents": 680,
    "unit": "unidad"
  },
  {
    "code": "HER-001",
    "name": "Alicate universal 8\" aislado",
    "description": "1000V",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 2200,
    "unit": "unidad"
  },
  {
    "code": "HER-002",
    "name": "Alicate de corte diagonal 6\"",
    "description": "Mango aislado",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 1700,
    "unit": "unidad"
  },
  {
    "code": "HER-003",
    "name": "Pelacables automático",
    "description": "Para cable de 0.5 a 6 mm²",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 2800,
    "unit": "unidad"
  },
  {
    "code": "HER-004",
    "name": "Destornillador plano 6\" aislado",
    "description": "Punta plana",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 850,
    "unit": "unidad"
  },
  {
    "code": "HER-005",
    "name": "Destornillador estrella 6\" aislado",
    "description": "Punta Phillips",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 850,
    "unit": "unidad"
  },
  {
    "code": "HER-006",
    "name": "Juego de destornilladores aislados 6 piezas",
    "description": "Planos y estrella",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 3800,
    "unit": "unidad"
  },
  {
    "code": "HER-007",
    "name": "Probador de voltaje tipo lápiz",
    "description": "Detector de tensión",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 600,
    "unit": "unidad"
  },
  {
    "code": "HER-008",
    "name": "Multímetro digital",
    "description": "Mide voltaje, corriente y continuidad",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 4200,
    "unit": "unidad"
  },
  {
    "code": "HER-009",
    "name": "Wincha de 5 metros",
    "description": "Cinta métrica metálica",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 1400,
    "unit": "unidad"
  },
  {
    "code": "HER-010",
    "name": "Guía pasacable de acero 10 m",
    "description": "Para pasar cables por tubería",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 2500,
    "unit": "unidad"
  },
  {
    "code": "HER-011",
    "name": "Taladro percutor 650W",
    "description": "Con maletín",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 19500,
    "unit": "unidad"
  },
  {
    "code": "HER-012",
    "name": "Juego de brocas para concreto 5 piezas",
    "description": "Para tarugos y fijaciones",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 1900,
    "unit": "unidad"
  },
  {
    "code": "HER-013",
    "name": "Cautín eléctrico 40W",
    "description": "Para soldar cables",
    "category": 4,
    "family": "Herramientas de instalación",
    "cents": 2200,
    "unit": "unidad"
  },
  {
    "code": "ACI-001",
    "name": "Cinta aislante negra 18 m",
    "description": "Aislamiento eléctrico",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 400,
    "unit": "unidad"
  },
  {
    "code": "ACI-002",
    "name": "Caja rectangular plástica empotrable",
    "description": "Para interruptores y tomacorrientes",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 150,
    "unit": "unidad"
  },
  {
    "code": "ACI-003",
    "name": "Caja octogonal plástica",
    "description": "Para puntos de luz",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 140,
    "unit": "unidad"
  },
  {
    "code": "ACI-004",
    "name": "Tubo conduit PVC 3/4\" (3 m)",
    "description": "Para instalación empotrada",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 550,
    "unit": "unidad"
  },
  {
    "code": "ACI-005",
    "name": "Curva PVC 3/4\"",
    "description": "Accesorio para conduit",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 100,
    "unit": "unidad"
  },
  {
    "code": "ACI-006",
    "name": "Grapas para cable (bolsa 100 unid.)",
    "description": "Fijación de cable",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 750,
    "unit": "unidad"
  },
  {
    "code": "ACI-007",
    "name": "Canaleta plástica 20x10 mm (2 m)",
    "description": "Para instalación visible",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 500,
    "unit": "unidad"
  },
  {
    "code": "ACI-008",
    "name": "Conectores de empalme 3 vías (pack 10)",
    "description": "Sin soldadura",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 1250,
    "unit": "unidad"
  },
  {
    "code": "ACI-009",
    "name": "Terminales de ojo para cable (pack 50)",
    "description": "Cobre estañado",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 800,
    "unit": "unidad"
  },
  {
    "code": "ACI-010",
    "name": "Extensión eléctrica 5 tomas 3 m",
    "description": "Con protección",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 3400,
    "unit": "unidad"
  },
  {
    "code": "ACI-011",
    "name": "Enchufe macho 10A",
    "description": "Tipo plano",
    "category": 4,
    "family": "Accesorios de instalación",
    "cents": 220,
    "unit": "unidad"
  },
  {
    "code": "CLA-001",
    "name": "Clavo con cabeza 1\" (por kg)",
    "description": "Acero",
    "category": 5,
    "family": "Clavos y fijaciones",
    "cents": 800,
    "unit": "kg"
  },
  {
    "code": "CLA-002",
    "name": "Clavo con cabeza 1½\" (por kg)",
    "description": "Acero",
    "category": 5,
    "family": "Clavos y fijaciones",
    "cents": 750,
    "unit": "kg"
  },
  {
    "code": "CLA-003",
    "name": "Clavo con cabeza 2\" (por kg)",
    "description": "Acero",
    "category": 5,
    "family": "Clavos y fijaciones",
    "cents": 720,
    "unit": "kg"
  },
  {
    "code": "CLA-004",
    "name": "Clavo con cabeza 2½\" (por kg)",
    "description": "Acero",
    "category": 5,
    "family": "Clavos y fijaciones",
    "cents": 720,
    "unit": "kg"
  },
  {
    "code": "CLA-005",
    "name": "Clavo con cabeza 3\" (por kg)",
    "description": "Acero",
    "category": 5,
    "family": "Clavos y fijaciones",
    "cents": 700,
    "unit": "kg"
  },
  {
    "code": "CLA-006",
    "name": "Clavo con cabeza 4\" (por kg)",
    "description": "Acero",
    "category": 5,
    "family": "Clavos y fijaciones",
    "cents": 700,
    "unit": "kg"
  },
  {
    "code": "CLA-007",
    "name": "Clavo de acero para concreto 2\" (por kg)",
    "description": "Acero templado",
    "category": 5,
    "family": "Clavos y fijaciones",
    "cents": 1600,
    "unit": "kg"
  },
  {
    "code": "CLA-008",
    "name": "Clavo para calamina con arandela (por kg)",
    "description": "Con arandela de jebe",
    "category": 5,
    "family": "Clavos y fijaciones",
    "cents": 1200,
    "unit": "kg"
  },
  {
    "code": "CLA-009",
    "name": "Tarugo plástico 6 mm (bolsa 100 unid.)",
    "description": "Para concreto y ladrillo",
    "category": 5,
    "family": "Clavos y fijaciones",
    "cents": 600,
    "unit": "unidad"
  },
  {
    "code": "CLA-010",
    "name": "Tornillo autorroscante 1½\" (caja 100 unid.)",
    "description": "Cabeza estrella",
    "category": 5,
    "family": "Clavos y fijaciones",
    "cents": 1000,
    "unit": "unidad"
  }
];
