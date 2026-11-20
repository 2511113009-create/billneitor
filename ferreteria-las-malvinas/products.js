const products = [
 {
  "id": 1,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-001",
  "name": "Foco LED 7W luz blanca E27",
  "description": "Emite luz blanca fría de 6500 K para iluminación general. Compatible con rosca E27 y alimentación de 220 V.",
  "price": 3.8,
  "unit": "unidad"
 },
 {
  "id": 2,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-002",
  "name": "Foco LED 9W luz blanca E27",
  "description": "Emite luz blanca fría de 6500 K para iluminación general. Compatible con rosca E27 y alimentación de 220 V.",
  "price": 4.2,
  "unit": "unidad"
 },
 {
  "id": 3,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-003",
  "name": "Foco LED 9W luz cálida E27",
  "description": "Emite luz cálida de 3000 K para salas y dormitorios. Usa rosca E27 y trabaja a 220 V.",
  "price": 4.2,
  "unit": "unidad"
 },
 {
  "id": 4,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-004",
  "name": "Foco LED 12W luz blanca E27",
  "description": "Emite luz blanca fría de 6500 K para iluminación general. Compatible con rosca E27 y alimentación de 220 V.",
  "price": 5.9,
  "unit": "unidad"
 },
 {
  "id": 5,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-005",
  "name": "Foco LED 15W luz blanca E27",
  "description": "Emite luz blanca fría de 6500 K para iluminación general. Compatible con rosca E27 y alimentación de 220 V.",
  "price": 7.5,
  "unit": "unidad"
 },
 {
  "id": 6,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-006",
  "name": "Foco LED 20W alta potencia E27",
  "description": "Foco de alta potencia con luz blanca fría de 6500 K y rosca E27.",
  "price": 10.5,
  "unit": "unidad"
 },
 {
  "id": 7,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-007",
  "name": "Foco LED 30W alta potencia E27",
  "description": "Foco de alta potencia con luz blanca fría de 6500 K y rosca E27.",
  "price": 15.8,
  "unit": "unidad"
 },
 {
  "id": 8,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-008",
  "name": "Foco LED vela 5W E14 luz cálida",
  "description": "Su forma de vela y luz cálida combinan con lámparas decorativas de rosca E14.",
  "price": 4.6,
  "unit": "unidad"
 },
 {
  "id": 9,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-009",
  "name": "Tubo LED T8 18W 1.20 m",
  "description": "Tubo LED de 1,20 m para luminarias T8, con luz fría de 6500 K.",
  "price": 14.5,
  "unit": "unidad"
 },
 {
  "id": 10,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-010",
  "name": "Foco LED dicroico GU10 7W",
  "description": "Foco con base GU10 para dirigir la luz desde un spot empotrado.",
  "price": 6.8,
  "unit": "unidad"
 },
 {
  "id": 11,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-011",
  "name": "Foco LED filamento vintage 6W",
  "description": "Filamento visible y luz cálida para lámparas de estilo vintage.",
  "price": 12,
  "unit": "unidad"
 },
 {
  "id": 12,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-012",
  "name": "Foco LED RGB 10W con control remoto",
  "description": "Permite elegir entre 16 colores con el control remoto incluido.",
  "price": 18.5,
  "unit": "unidad"
 },
 {
  "id": 13,
  "category": 1,
  "group": "Focos LED",
  "code": "LED-013",
  "name": "Foco LED recargable de emergencia 12W",
  "description": "La batería recargable incorporada proporciona iluminación de emergencia.",
  "price": 22,
  "unit": "unidad"
 },
 {
  "id": 14,
  "category": 1,
  "group": "Bombillas y ahorradores",
  "code": "BOM-001",
  "name": "Bombilla incandescente 60W E27",
  "description": "Bombilla incandescente de luz cálida para portalámparas E27 de 220 V.",
  "price": 2.2,
  "unit": "unidad"
 },
 {
  "id": 15,
  "category": 1,
  "group": "Bombillas y ahorradores",
  "code": "BOM-002",
  "name": "Bombilla incandescente 100W E27",
  "description": "Bombilla incandescente de luz cálida para portalámparas E27 de 220 V.",
  "price": 2.6,
  "unit": "unidad"
 },
 {
  "id": 16,
  "category": 1,
  "group": "Bombillas y ahorradores",
  "code": "BOM-003",
  "name": "Foco ahorrador espiral 25W E27",
  "description": "Fluorescente compacto en espiral para portalámparas E27.",
  "price": 6.8,
  "unit": "unidad"
 },
 {
  "id": 17,
  "category": 1,
  "group": "Reflectores",
  "code": "REF-001",
  "name": "Reflector LED 10W luz blanca",
  "description": "Reflector de luz blanca con protección IP65 para iluminar espacios exteriores.",
  "price": 14,
  "unit": "unidad"
 },
 {
  "id": 18,
  "category": 1,
  "group": "Reflectores",
  "code": "REF-002",
  "name": "Reflector LED 20W luz blanca",
  "description": "Reflector de luz blanca con protección IP65 para iluminar espacios exteriores.",
  "price": 22,
  "unit": "unidad"
 },
 {
  "id": 19,
  "category": 1,
  "group": "Reflectores",
  "code": "REF-003",
  "name": "Reflector LED 30W luz blanca",
  "description": "Reflector de luz blanca con protección IP65 para iluminar espacios exteriores.",
  "price": 29,
  "unit": "unidad"
 },
 {
  "id": 20,
  "category": 1,
  "group": "Reflectores",
  "code": "REF-004",
  "name": "Reflector LED 50W luz blanca",
  "description": "Reflector de luz blanca con protección IP65 para iluminar espacios exteriores.",
  "price": 42,
  "unit": "unidad"
 },
 {
  "id": 21,
  "category": 1,
  "group": "Reflectores",
  "code": "REF-005",
  "name": "Reflector LED 100W luz blanca",
  "description": "Reflector de luz blanca con protección IP65 para iluminar espacios exteriores.",
  "price": 68,
  "unit": "unidad"
 },
 {
  "id": 22,
  "category": 1,
  "group": "Reflectores",
  "code": "REF-006",
  "name": "Reflector LED 200W luz blanca",
  "description": "Reflector de luz blanca con protección IP65 para iluminar espacios exteriores.",
  "price": 125,
  "unit": "unidad"
 },
 {
  "id": 23,
  "category": 1,
  "group": "Reflectores",
  "code": "REF-007",
  "name": "Reflector LED solar 100W con control",
  "description": "Incluye panel solar y control remoto para manejar el reflector a distancia.",
  "price": 78,
  "unit": "unidad"
 },
 {
  "id": 24,
  "category": 1,
  "group": "Reflectores",
  "code": "REF-008",
  "name": "Reflector LED RGB 30W con control",
  "description": "El control remoto permite cambiar el color de la iluminación.",
  "price": 38,
  "unit": "unidad"
 },
 {
  "id": 25,
  "category": 1,
  "group": "Lámparas decorativas",
  "code": "LAM-001",
  "name": "Lámpara colgante moderna con control remoto",
  "description": "Lámpara colgante con brillo regulable y tres tonos de luz.",
  "price": 85,
  "unit": "unidad"
 },
 {
  "id": 26,
  "category": 1,
  "group": "Lámparas decorativas",
  "code": "LAM-002",
  "name": "Lámpara de techo LED redonda 24W",
  "description": "Se monta sobre la superficie del techo y emite luz blanca fría de 6500 K.",
  "price": 42,
  "unit": "unidad"
 },
 {
  "id": 27,
  "category": 1,
  "group": "Lámparas decorativas",
  "code": "LAM-003",
  "name": "Plafón LED cuadrado 18W",
  "description": "Se monta sobre la superficie del techo y emite luz blanca fría de 6500 K.",
  "price": 28,
  "unit": "unidad"
 },
 {
  "id": 28,
  "category": 1,
  "group": "Lámparas decorativas",
  "code": "LAM-004",
  "name": "Lámpara de mesa decorativa",
  "description": "La base cerámica y la pantalla de tela aportan luz decorativa a una mesa o velador.",
  "price": 35,
  "unit": "unidad"
 },
 {
  "id": 29,
  "category": 1,
  "group": "Lámparas decorativas",
  "code": "LAM-005",
  "name": "Lámpara tipo araña con control remoto",
  "description": "Lámpara de cristal con ocho luces y control remoto.",
  "price": 160,
  "unit": "unidad"
 },
 {
  "id": 30,
  "category": 1,
  "group": "Lámparas decorativas",
  "code": "LAM-006",
  "name": "Aplique de pared LED 12W",
  "description": "Se instala en la pared y aporta luz cálida a ambientes interiores.",
  "price": 32,
  "unit": "unidad"
 },
 {
  "id": 31,
  "category": 1,
  "group": "Lámparas decorativas",
  "code": "LAM-007",
  "name": "Panel LED empotrable 18W cuadrado",
  "description": "Panel cuadrado para instalar empotrado en el cielo raso.",
  "price": 19.5,
  "unit": "unidad"
 },
 {
  "id": 32,
  "category": 1,
  "group": "Lámparas decorativas",
  "code": "LAM-008",
  "name": "Lámpara solar de jardín",
  "description": "Se carga con energía solar y cuenta con sensor crepuscular para el encendido al anochecer.",
  "price": 16,
  "unit": "unidad"
 },
 {
  "id": 33,
  "category": 1,
  "group": "Tiras y luces LED",
  "code": "TIR-001",
  "name": "Tira LED 5 m luz blanca 12V",
  "description": "Tira autoadhesiva con 300 LED blancos para iluminación lineal a 12 V.",
  "price": 25,
  "unit": "unidad"
 },
 {
  "id": 34,
  "category": 1,
  "group": "Tiras y luces LED",
  "code": "TIR-002",
  "name": "Tira LED RGB 5 m con control remoto",
  "description": "Tira multicolor a 12 V con control remoto para cambiar la iluminación.",
  "price": 38,
  "unit": "unidad"
 },
 {
  "id": 35,
  "category": 1,
  "group": "Tiras y luces LED",
  "code": "TIR-003",
  "name": "Manguera LED 10 m luz cálida",
  "description": "Manguera de luz cálida para decoración exterior a 220 V.",
  "price": 32,
  "unit": "unidad"
 },
 {
  "id": 36,
  "category": 1,
  "group": "Tiras y luces LED",
  "code": "TIR-004",
  "name": "Guirnalda luces navideñas 100 LED",
  "description": "Guirnalda multicolor con ocho funciones para decoración navideña.",
  "price": 18,
  "unit": "unidad"
 },
 {
  "id": 37,
  "category": 1,
  "group": "Tiras y luces LED",
  "code": "TIR-005",
  "name": "Cortina LED 3 x 3 m luz cálida",
  "description": "Cortina de luces cálidas para decorar fondos y ventanas. Funciona a 220 V.",
  "price": 45,
  "unit": "unidad"
 },
 {
  "id": 38,
  "category": 1,
  "group": "Accesorios de iluminación",
  "code": "ACC-001",
  "name": "Socket de porcelana E27",
  "description": "Portalámparas de porcelana para focos con rosca E27.",
  "price": 3.5,
  "unit": "unidad"
 },
 {
  "id": 39,
  "category": 1,
  "group": "Accesorios de iluminación",
  "code": "ACC-002",
  "name": "Socket de plástico E27 con cable",
  "description": "Portalámparas de plástico con rosca E27 y un metro de cable.",
  "price": 4.5,
  "unit": "unidad"
 },
 {
  "id": 40,
  "category": 1,
  "group": "Accesorios de iluminación",
  "code": "ACC-003",
  "name": "Fotocélula 220V 10A",
  "description": "Controla el encendido de la iluminación según la luz ambiental.",
  "price": 14,
  "unit": "unidad"
 },
 {
  "id": 41,
  "category": 1,
  "group": "Accesorios de iluminación",
  "code": "ACC-004",
  "name": "Sensor de movimiento 180°",
  "description": "Detecta movimiento en un ángulo de 180° para controlar una luminaria.",
  "price": 24,
  "unit": "unidad"
 },
 {
  "id": 42,
  "category": 1,
  "group": "Accesorios de iluminación",
  "code": "ACC-005",
  "name": "Fuente de poder 12V 5A",
  "description": "Alimenta tiras LED compatibles con una salida de 12 V y 5 A.",
  "price": 22,
  "unit": "unidad"
 },
 {
  "id": 43,
  "category": 1,
  "group": "Accesorios de iluminación",
  "code": "ACC-006",
  "name": "Driver LED 36W para panel",
  "description": "Driver para alimentar un panel LED de 36 W desde una entrada de 220 V.",
  "price": 18,
  "unit": "unidad"
 },
 {
  "id": 44,
  "category": 2,
  "group": "Cable THW",
  "code": "CAB-001",
  "name": "Cable THW 14 AWG (por metro)",
  "description": "Conductor de cobre para 600 V. Se vende por metro en varios colores.",
  "price": 1.9,
  "unit": "metro"
 },
 {
  "id": 45,
  "category": 2,
  "group": "Cable THW",
  "code": "CAB-002",
  "name": "Cable THW 12 AWG (por metro)",
  "description": "Conductor de cobre para 600 V. Se vende por metro en varios colores.",
  "price": 2.6,
  "unit": "metro"
 },
 {
  "id": 46,
  "category": 2,
  "group": "Cable THW",
  "code": "CAB-003",
  "name": "Cable THW 10 AWG (por metro)",
  "description": "Conductor de cobre para 600 V. Se vende por metro en varios colores.",
  "price": 4.1,
  "unit": "metro"
 },
 {
  "id": 47,
  "category": 2,
  "group": "Cable THW",
  "code": "CAB-004",
  "name": "Rollo cable THW 14 AWG 100 m",
  "description": "Presentación de 100 metros de cable de cobre THW para 600 V.",
  "price": 175,
  "unit": "rollo"
 },
 {
  "id": 48,
  "category": 2,
  "group": "Cable mellizo",
  "code": "CAB-005",
  "name": "Cable mellizo 2x16 AWG (por metro)",
  "description": "Cable mellizo de dos conductores para uso doméstico, vendido por metro.",
  "price": 1.8,
  "unit": "metro"
 },
 {
  "id": 49,
  "category": 2,
  "group": "Cable mellizo",
  "code": "CAB-006",
  "name": "Cable mellizo 2x14 AWG (por metro)",
  "description": "Cable mellizo de dos conductores para uso doméstico, vendido por metro.",
  "price": 2.8,
  "unit": "metro"
 },
 {
  "id": 50,
  "category": 2,
  "group": "Cable mellizo",
  "code": "CAB-007",
  "name": "Cable vulcanizado 3x16 AWG (por metro)",
  "description": "Cable vulcanizado de tres conductores para uso rudo. Se vende por metro.",
  "price": 3.6,
  "unit": "metro"
 },
 {
  "id": 51,
  "category": 3,
  "group": "Llaves térmicas",
  "code": "LLT-001",
  "name": "Llave térmica monofásica 1x16A",
  "description": "Llave térmica para montar en el riel DIN de un tablero eléctrico.",
  "price": 18,
  "unit": "unidad"
 },
 {
  "id": 52,
  "category": 3,
  "group": "Llaves térmicas",
  "code": "LLT-002",
  "name": "Llave térmica monofásica 1x20A",
  "description": "Llave térmica para montar en el riel DIN de un tablero eléctrico.",
  "price": 18.5,
  "unit": "unidad"
 },
 {
  "id": 53,
  "category": 3,
  "group": "Llaves térmicas",
  "code": "LLT-003",
  "name": "Llave térmica bipolar 2x32A",
  "description": "Llave térmica para montar en el riel DIN de un tablero eléctrico.",
  "price": 38,
  "unit": "unidad"
 },
 {
  "id": 54,
  "category": 3,
  "group": "Llaves térmicas",
  "code": "LLT-004",
  "name": "Llave térmica bipolar 2x40A",
  "description": "Llave térmica para montar en el riel DIN de un tablero eléctrico.",
  "price": 40,
  "unit": "unidad"
 },
 {
  "id": 55,
  "category": 3,
  "group": "Llaves térmicas",
  "code": "LLT-005",
  "name": "Llave térmica trifásica 3x32A",
  "description": "Llave térmica para montar en el riel DIN de un tablero eléctrico.",
  "price": 82,
  "unit": "unidad"
 },
 {
  "id": 56,
  "category": 3,
  "group": "Llaves térmicas",
  "code": "LLT-006",
  "name": "Llave térmica trifásica 3x63A",
  "description": "Llave térmica para montar en el riel DIN de un tablero eléctrico.",
  "price": 128,
  "unit": "unidad"
 },
 {
  "id": 57,
  "category": 3,
  "group": "Llaves térmicas",
  "code": "LLT-007",
  "name": "Interruptor diferencial 2x40A 30mA",
  "description": "Interruptor diferencial bipolar con sensibilidad de 30 mA para protección ante fugas de corriente.",
  "price": 118,
  "unit": "unidad"
 },
 {
  "id": 58,
  "category": 2,
  "group": "Cable THW",
  "code": "CAB-008",
  "name": "Cable THW 16 AWG (por metro)",
  "description": "Conductor de cobre para 600 V. Se vende por metro en varios colores.",
  "price": 1.5,
  "unit": "metro"
 },
 {
  "id": 59,
  "category": 2,
  "group": "Cable THW",
  "code": "CAB-009",
  "name": "Cable THW 8 AWG (por metro)",
  "description": "Conductor de cobre para 600 V. Se vende por metro en varios colores.",
  "price": 7,
  "unit": "metro"
 },
 {
  "id": 60,
  "category": 2,
  "group": "Cable flexible",
  "code": "CAB-010",
  "name": "Cable flexible 2x1.5 mm² (por metro)",
  "description": "Cable flexible de dos conductores para extensiones y artefactos.",
  "price": 3,
  "unit": "metro"
 },
 {
  "id": 61,
  "category": 2,
  "group": "Cable flexible",
  "code": "CAB-011",
  "name": "Cable flexible 3x1.5 mm² (por metro)",
  "description": "Cable flexible de tres conductores con línea a tierra, vendido por metro.",
  "price": 4.2,
  "unit": "metro"
 },
 {
  "id": 62,
  "category": 2,
  "group": "Cable flexible",
  "code": "CAB-012",
  "name": "Cable flexible 3x2.5 mm² (por metro)",
  "description": "Cable flexible de tres conductores con línea a tierra, vendido por metro.",
  "price": 6.3,
  "unit": "metro"
 },
 {
  "id": 63,
  "category": 2,
  "group": "Cable NYY",
  "code": "CAB-013",
  "name": "Cable NYY 2x4 mm² (por metro)",
  "description": "Cable NYY para tendidos exteriores y subterráneos. Se vende por metro.",
  "price": 9.2,
  "unit": "metro"
 },
 {
  "id": 64,
  "category": 2,
  "group": "Cable NYY",
  "code": "CAB-014",
  "name": "Cable NYY 3x6 mm² (por metro)",
  "description": "Cable NYY para tendidos exteriores y subterráneos. Se vende por metro.",
  "price": 16.5,
  "unit": "metro"
 },
 {
  "id": 65,
  "category": 2,
  "group": "Cable coaxial y de red",
  "code": "CAB-015",
  "name": "Cable coaxial RG6 (por metro)",
  "description": "Cable coaxial RG6 para llevar la señal de televisión por cable.",
  "price": 2,
  "unit": "metro"
 },
 {
  "id": 66,
  "category": 2,
  "group": "Cable coaxial y de red",
  "code": "CAB-016",
  "name": "Cable de red UTP Cat5e (por metro)",
  "description": "Cable de red categoría 5e para conexiones de red y cámaras.",
  "price": 1.5,
  "unit": "metro"
 },
 {
  "id": 67,
  "category": 3,
  "group": "Interruptores simples, dobles y triples",
  "code": "INT-001",
  "name": "Interruptor simple 10A empotrable",
  "description": "Interruptor de un módulo con placa de pared para controlar un punto de luz.",
  "price": 5,
  "unit": "unidad"
 },
 {
  "id": 68,
  "category": 3,
  "group": "Interruptores simples, dobles y triples",
  "code": "INT-002",
  "name": "Interruptor doble 10A empotrable",
  "description": "Dos interruptores en una placa para controlar dos circuitos por separado.",
  "price": 8.2,
  "unit": "unidad"
 },
 {
  "id": 69,
  "category": 3,
  "group": "Interruptores simples, dobles y triples",
  "code": "INT-003",
  "name": "Interruptor triple 10A empotrable",
  "description": "Tres interruptores en una placa para controlar circuitos independientes.",
  "price": 11.5,
  "unit": "unidad"
 },
 {
  "id": 70,
  "category": 3,
  "group": "Interruptores simples, dobles y triples",
  "code": "INT-004",
  "name": "Interruptor simple sobrepuesto",
  "description": "Se monta sobre la superficie de la pared para instalaciones a la vista.",
  "price": 6.2,
  "unit": "unidad"
 },
 {
  "id": 71,
  "category": 3,
  "group": "Interruptores simples, dobles y triples",
  "code": "INT-005",
  "name": "Pulsador de timbre",
  "description": "Pulsador con placa para accionar un timbre desde la entrada.",
  "price": 4.8,
  "unit": "unidad"
 },
 {
  "id": 72,
  "category": 3,
  "group": "Interruptores conmutables y dimmer",
  "code": "INT-006",
  "name": "Interruptor conmutable simple (3 vías)",
  "description": "Módulo conmutable para controlar la luz de escaleras o pasillos desde dos puntos.",
  "price": 7.5,
  "unit": "unidad"
 },
 {
  "id": 73,
  "category": 3,
  "group": "Interruptores conmutables y dimmer",
  "code": "INT-007",
  "name": "Interruptor conmutable doble",
  "description": "Placa con dos módulos conmutables de tres vías.",
  "price": 12.5,
  "unit": "unidad"
 },
 {
  "id": 74,
  "category": 3,
  "group": "Interruptores conmutables y dimmer",
  "code": "INT-008",
  "name": "Interruptor dimmer regulable 300W",
  "description": "Regula la intensidad de luminarias compatibles hasta 300 W.",
  "price": 26,
  "unit": "unidad"
 },
 {
  "id": 75,
  "category": 3,
  "group": "Tomacorrientes",
  "code": "INT-009",
  "name": "Tomacorriente simple 10A empotrable",
  "description": "Placa empotrable de una toma para conectar un artefacto.",
  "price": 5.8,
  "unit": "unidad"
 },
 {
  "id": 76,
  "category": 3,
  "group": "Tomacorrientes",
  "code": "INT-010",
  "name": "Tomacorriente doble 16A empotrable",
  "description": "Placa empotrable con dos tomas para conectar dos equipos.",
  "price": 8.6,
  "unit": "unidad"
 },
 {
  "id": 77,
  "category": 3,
  "group": "Tomacorrientes",
  "code": "INT-011",
  "name": "Tomacorriente doble con línea a tierra 16A",
  "description": "Placa de dos tomas con conexión a tierra para instalación empotrada.",
  "price": 12,
  "unit": "unidad"
 },
 {
  "id": 78,
  "category": 3,
  "group": "Tomacorrientes",
  "code": "INT-012",
  "name": "Tomacorriente doble sobrepuesto",
  "description": "Se monta sobre la superficie de la pared para instalaciones a la vista.",
  "price": 9.5,
  "unit": "unidad"
 },
 {
  "id": 79,
  "category": 3,
  "group": "Tomacorrientes",
  "code": "INT-013",
  "name": "Interruptor con tomacorriente combinado",
  "description": "Reúne un interruptor y un tomacorriente en una sola placa de pared.",
  "price": 13.5,
  "unit": "unidad"
 },
 {
  "id": 80,
  "category": 3,
  "group": "Tomacorrientes",
  "code": "INT-014",
  "name": "Toma de TV coaxial empotrable",
  "description": "Placa de pared con salida coaxial para la señal de televisión.",
  "price": 6.8,
  "unit": "unidad"
 },
 {
  "id": 81,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-001",
  "name": "Alicate universal 8\" aislado",
  "description": "Alicate universal con mangos aislados. Tensión indicada en el catálogo: 1000 V.",
  "price": 22,
  "unit": "unidad"
 },
 {
  "id": 82,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-002",
  "name": "Alicate de corte diagonal 6\"",
  "description": "Alicate de corte diagonal con mangos aislados para cortar conductores.",
  "price": 17,
  "unit": "unidad"
 },
 {
  "id": 83,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-003",
  "name": "Pelacables automático",
  "description": "Retira el aislamiento de cables con secciones de 0,5 a 6 mm².",
  "price": 28,
  "unit": "unidad"
 },
 {
  "id": 84,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-004",
  "name": "Destornillador plano 6\" aislado",
  "description": "Destornillador con aislamiento y punta plana para tornillos ranurados.",
  "price": 8.5,
  "unit": "unidad"
 },
 {
  "id": 85,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-005",
  "name": "Destornillador estrella 6\" aislado",
  "description": "Destornillador con aislamiento y punta Phillips para tornillos de cruz.",
  "price": 8.5,
  "unit": "unidad"
 },
 {
  "id": 86,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-006",
  "name": "Juego de destornilladores aislados 6 piezas",
  "description": "Juego de seis destornilladores aislados con puntas planas y de estrella.",
  "price": 38,
  "unit": "unidad"
 },
 {
  "id": 87,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-007",
  "name": "Probador de voltaje tipo lápiz",
  "description": "Detector de tensión en formato de lápiz para identificar la presencia de voltaje.",
  "price": 6,
  "unit": "unidad"
 },
 {
  "id": 88,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-008",
  "name": "Multímetro digital",
  "description": "Mide voltaje y corriente, y permite comprobar la continuidad de un circuito.",
  "price": 42,
  "unit": "unidad"
 },
 {
  "id": 89,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-009",
  "name": "Wincha de 5 metros",
  "description": "Cinta métrica metálica de cinco metros para medir distancias en obra o en el taller.",
  "price": 14,
  "unit": "unidad"
 },
 {
  "id": 90,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-010",
  "name": "Guía pasacable de acero 10 m",
  "description": "Guía de acero para pasar cables a través de tuberías.",
  "price": 25,
  "unit": "unidad"
 },
 {
  "id": 91,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-011",
  "name": "Taladro percutor 650W",
  "description": "Taladro percutor de 650 W para trabajos de perforación. Incluye maletín de transporte.",
  "price": 195,
  "unit": "unidad"
 },
 {
  "id": 92,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-012",
  "name": "Juego de brocas para concreto 5 piezas",
  "description": "Juego de cinco brocas para perforar concreto al instalar tarugos y fijaciones.",
  "price": 19,
  "unit": "unidad"
 },
 {
  "id": 93,
  "category": 4,
  "group": "Herramientas de instalación",
  "code": "HER-013",
  "name": "Cautín eléctrico 40W",
  "description": "Cautín de 40 W para trabajos de soldadura en cables.",
  "price": 22,
  "unit": "unidad"
 },
 {
  "id": 94,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-001",
  "name": "Cinta aislante negra 18 m",
  "description": "Rollo de cinta negra para cubrir y aislar conexiones eléctricas.",
  "price": 4,
  "unit": "unidad"
 },
 {
  "id": 95,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-002",
  "name": "Caja rectangular plástica empotrable",
  "description": "Caja rectangular para empotrar interruptores o tomacorrientes en la pared.",
  "price": 1.5,
  "unit": "unidad"
 },
 {
  "id": 96,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-003",
  "name": "Caja octogonal plástica",
  "description": "Caja octogonal para alojar conexiones en un punto de luz.",
  "price": 1.4,
  "unit": "unidad"
 },
 {
  "id": 97,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-004",
  "name": "Tubo conduit PVC 3/4\" (3 m)",
  "description": "Tramo de tres metros para canalizar conductores en instalaciones empotradas.",
  "price": 5.5,
  "unit": "unidad"
 },
 {
  "id": 98,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-005",
  "name": "Curva PVC 3/4\"",
  "description": "Curva de PVC para cambiar la dirección de una canalización conduit.",
  "price": 1,
  "unit": "unidad"
 },
 {
  "id": 99,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-006",
  "name": "Grapas para cable (bolsa 100 unid.)",
  "description": "Bolsa de 100 grapas para sujetar cables sobre una superficie.",
  "price": 7.5,
  "unit": "unidad"
 },
 {
  "id": 100,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-007",
  "name": "Canaleta plástica 20x10 mm (2 m)",
  "description": "Tramo de dos metros para ordenar y cubrir cables en instalaciones a la vista.",
  "price": 5,
  "unit": "unidad"
 },
 {
  "id": 101,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-008",
  "name": "Conectores de empalme 3 vías (pack 10)",
  "description": "Diez conectores de tres vías para realizar empalmes sin soldadura.",
  "price": 12.5,
  "unit": "unidad"
 },
 {
  "id": 102,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-009",
  "name": "Terminales de ojo para cable (pack 50)",
  "description": "Paquete de 50 terminales de cobre estañado con ojo para conexiones de cable.",
  "price": 8,
  "unit": "unidad"
 },
 {
  "id": 103,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-010",
  "name": "Extensión eléctrica 5 tomas 3 m",
  "description": "Extensión con cable de tres metros, cinco tomas y protección incorporada.",
  "price": 34,
  "unit": "unidad"
 },
 {
  "id": 104,
  "category": 4,
  "group": "Accesorios de instalación",
  "code": "ACI-011",
  "name": "Enchufe macho 10A",
  "description": "Enchufe macho de clavijas planas para colocar en el extremo de un cable.",
  "price": 2.2,
  "unit": "unidad"
 },
 {
  "id": 105,
  "category": 5,
  "group": "Clavos y fijaciones",
  "code": "CLA-001",
  "name": "Clavo con cabeza 1\" (por kg)",
  "description": "Clavo de acero con cabeza para fijaciones. Se vende por kilogramo.",
  "price": 8,
  "unit": "kg"
 },
 {
  "id": 106,
  "category": 5,
  "group": "Clavos y fijaciones",
  "code": "CLA-002",
  "name": "Clavo con cabeza 1½\" (por kg)",
  "description": "Clavo de acero con cabeza para fijaciones. Se vende por kilogramo.",
  "price": 7.5,
  "unit": "kg"
 },
 {
  "id": 107,
  "category": 5,
  "group": "Clavos y fijaciones",
  "code": "CLA-003",
  "name": "Clavo con cabeza 2\" (por kg)",
  "description": "Clavo de acero con cabeza para fijaciones. Se vende por kilogramo.",
  "price": 7.2,
  "unit": "kg"
 },
 {
  "id": 108,
  "category": 5,
  "group": "Clavos y fijaciones",
  "code": "CLA-004",
  "name": "Clavo con cabeza 2½\" (por kg)",
  "description": "Clavo de acero con cabeza para fijaciones. Se vende por kilogramo.",
  "price": 7.2,
  "unit": "kg"
 },
 {
  "id": 109,
  "category": 5,
  "group": "Clavos y fijaciones",
  "code": "CLA-005",
  "name": "Clavo con cabeza 3\" (por kg)",
  "description": "Clavo de acero con cabeza para fijaciones. Se vende por kilogramo.",
  "price": 7,
  "unit": "kg"
 },
 {
  "id": 110,
  "category": 5,
  "group": "Clavos y fijaciones",
  "code": "CLA-006",
  "name": "Clavo con cabeza 4\" (por kg)",
  "description": "Clavo de acero con cabeza para fijaciones. Se vende por kilogramo.",
  "price": 7,
  "unit": "kg"
 },
 {
  "id": 111,
  "category": 5,
  "group": "Clavos y fijaciones",
  "code": "CLA-007",
  "name": "Clavo de acero para concreto 2\" (por kg)",
  "description": "Clavo de acero templado para fijaciones en concreto. Se vende por kilogramo.",
  "price": 16,
  "unit": "kg"
 },
 {
  "id": 112,
  "category": 5,
  "group": "Clavos y fijaciones",
  "code": "CLA-008",
  "name": "Clavo para calamina con arandela (por kg)",
  "description": "Clavo con arandela de jebe para fijar calaminas. Se vende por kilogramo.",
  "price": 12,
  "unit": "kg"
 },
 {
  "id": 113,
  "category": 5,
  "group": "Clavos y fijaciones",
  "code": "CLA-009",
  "name": "Tarugo plástico 6 mm (bolsa 100 unid.)",
  "description": "Bolsa de cien tarugos plásticos para fijaciones en concreto y ladrillo.",
  "price": 6,
  "unit": "unidad"
 },
 {
  "id": 114,
  "category": 5,
  "group": "Clavos y fijaciones",
  "code": "CLA-010",
  "name": "Tornillo autorroscante 1½\" (caja 100 unid.)",
  "description": "Caja de cien tornillos autorroscantes con cabeza de estrella.",
  "price": 10,
  "unit": "unidad"
 }
];
