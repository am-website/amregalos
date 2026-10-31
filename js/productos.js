/* ===== TUS PRODUCTOS: copiá una línea para agregar uno nuevo =====
   nombre : título del producto
   cat    : categoría (se crea sola en los filtros)
   desc   : descripción corta
   precio : número sin puntos ni signo (ej: 4500)
   desde  : true si el precio es "desde" (opcional)
   tag    : etiqueta sobre la foto (opcional)
   img    : ruta de la foto, ej: "img/llavero-nombre.jpg" (vacío = recuadro gris)
*/
var PRODUCTOS = [
  {nombre:"Llavero - Oso", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0774.jpeg"},
  {nombre:"Llavero - Vaso café" , cat:"Llaveros", desc:"Material ecologico, amigable con el medio ambiente.", precio:4000, img:"./img/IMG_0771.jpeg"},
  {nombre:"Llavero - Salchicha flexy", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0775.jpeg"},
  {nombre:"Llavero - Celular 17 Pro", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:4000, img:"./img/IMG_0776.jpeg"},
  {nombre:"Llavero - Crocs naranja", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0790.jpeg"},
  {nombre:"Llavero - Yamaha", cat:"Llaveros", desc:"Material ecologico,amigable con el medio ambiente.  dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0789.jpeg"},
  {nombre:"Llavero - Renault", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0783.jpeg"},
  {nombre:"Llavero - Ford", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0787.jpeg"},
  {nombre:"Llavero - Caniche pelo negro", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0781.jpeg"},
  {nombre:"Anti estrés dragón flexy efecto seda", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:12000, img:"./img/IMG_0818.jpeg"},
 // {nombre:"Llavero de madera grabado", cat:"Llaveros", desc:"Diseño grabado a elección de la lista.", precio:3500, img:""},
  {nombre:"Llavero - Bandera Argentina", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, varios colores en una pieza.", precio:5000, img:"./img/IMG_0779.jpeg"},
  {nombre:"Llavero - Casa Rosada", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0806.png"},
  {nombre:"Imán - Coyote HELP", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:7000, img:"./img/IMG_0798.jpeg"},
  {nombre:"Mate Messi 10", cat:"A pedido", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", tag:"A pedido", precio:13500, img:"./img/IMG_0799.png"},
  {nombre:"Llavero - Labrador", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0821.jpeg"},
  {nombre:"Llavero y soporte Celular- CARP", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:6000, img:"./img/IMG_0609.jpeg"},
  {nombre:"Llavero y soporte Celular - CABJ", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:6000, img:"./img/IMG_0621.jpeg"},
  {nombre:"Llavero - Panda", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0804.jpeg"},
  {nombre:"Llavero - Palta x 2 con imán (ideal parejas) ", cat:"A pedido", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:15000, tag:"A pedido" , img:"./img/palta.jpg.webp"},
  {nombre:"Llavero - La Renga ", cat:"Llaveros", desc:"Material ecológico, amigable con el medio ambiente, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0828.jpeg"},
  {nombre:"Llavero - Snoopy ", cat:"Llaveros", desc:" Calidez de madera unico", precio:5000, img:"./img/IMG_0822.jpeg"},
  {nombre:"Llavero - Batman ", cat:"Llaveros", desc:"Calidez de madera único, pintado a mano", precio:5000, img:"./img/IMG_0827.jpeg"},
  {nombre:"Llavero - CARP ", cat:"Llaveros", desc:"Calidez de madera único, pintado a mano", precio:5000, img:"./img/IMG_0825.jpeg"},
  {nombre:"Llavero - CABJ ", cat:"Llaveros", desc:"Calidez de madera único, pintado a mano", precio:5000, img:"./img/IMG_0823.jpeg"},
 
 
  {nombre:"Llavero con tu nombre", cat:"Personalizados", desc:"¿Querés tener tu nombre en un llavero de madera? Nosotros lo hacemos... pedilo!", precio:4500, desde:true, tag:"Personalizado", img:"./img/IMG_0470.jpeg"},
  {nombre:"Llavero de material ecológico personalizado", cat:"Personalizados", desc:"Traé tu imágen (hasta 3 colores) y nosotros lo hacemos... pedilo! (sujeto a evaluación).", precio:9000, desde:true, tag:"Personalizado", img:"./img/IMG_0693.jpeg"},
  {nombre:"Pack x10 para eventos", cat:"Personalizados", desc:"¿Tenés una fiesta/evento? Mismo diseño, 10 unidades.", precio:30000, img:""},
 
 
 
  {nombre:"Figura decorativa - Shawn el cordero ", cat:"Decoración", desc:"Pieza para escritorio o estanteria (no apto para el juego de niños).", precio:9000, desde:true, tag:"A pedido", img:"./img/IMG_0678.jpeg"},
  {nombre:"Figura decorativa - Batman el caballero de la noche", cat:"Decoración", desc:"Pieza para escritorio o estantería (no apto para el juego de niños).", precio:12000, desde:true, img:"./img/IMG_0807.jpeg"}
];
