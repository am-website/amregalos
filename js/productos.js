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
  {nombre:"Llavero 3D multicolor - Oso", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0774.jpeg"},
  {nombre:"Llavero 3D multicolor - Vaso café, cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:4000, img:"./img/IMG_0771.jpeg"},
  {nombre:"Llavero 3D multicolor - Salchicha flexy", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0775.jpeg"},
  {nombre:"Llavero 3D multicolor - Celular 17 Pro", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:4000, img:"./img/IMG_0776.jpeg"},
  {nombre:"Llavero 3D multicolor - Crocs naranja", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0790.jpeg"},
  {nombre:"Llavero 3D multicolor - Yamaha", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0789.jpeg"},
  {nombre:"Llavero 3D multicolor - Renault", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0783.jpeg"},
  {nombre:"Llavero 3D multicolor - Ford", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0787.jpeg"},
  {nombre:"Llavero 3D multicolor - Caniche pelo negro", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0781.jpeg"},
  {nombre:"Llavero 3D multicolor - Dragon Flexy efecto seda duo", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:12000, img:"./img/IMG_0800.jpeg"},
  {nombre:"Llavero de madera grabado", cat:"Llaveros", desc:"Diseño grabado a elección de la lista.", precio:3500, img:""},
  {nombre:"Llavero 3D multicolor - Bandera Argentina", cat:"Llaveros", desc:"Impreso en PLA, varios colores en una pieza.", precio:5000, img:"./img/IMG_0779.jpeg"},
  {nombre:"Llavero 3D multicolor - Casa Rosada", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0806.png"},
  {nombre:"Imán 3D multicolor - Coyote HELP", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:4000, img:"./img/IMG_0798.jpeg"},
  {nombre:"Pieza 3D Multicolor - Mate Messi 10", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:13500, img:"./img/IMG_0799.png"},
  {nombre:"Llavero 3D multicolor - Labrador", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:4000, img:"./img/IMG_0802.jpeg"},
  {nombre:"Llavero y soporte Celular 3D multicolor - CARP", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:6000, img:"./img/IMG_0609.jpeg"},
  {nombre:"Llavero y soporte Celular 3D multicolor - CABJ", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:6000, img:"./img/IMG_0621.jpeg"},
  {nombre:"Llavero 3D multicolor - Panda", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:5000, img:"./img/IMG_0804.jpeg"},
  {nombre:"Llavero 3D multicolor - Palta x 2 con imán ", cat:"Llaveros", desc:"Impreso en PLA, dos o más colores en una pieza.", precio:15000, img:"./img/palta.jpg.webp"},
 
 
  {nombre:"Llavero con tu nombre", cat:"Personalizados", desc:"Escribís el nombre y lo hacemos en madera o 3D.", precio:4500, desde:true, tag:"Personalizado", img:"./img/IMG_0470.jpeg"},
  {nombre:"Llavero 3D personalizado", cat:"Personalizados", desc:"Trae tu imagen (hasta 3 colores) y lo hacemos llavero.", precio:9000, desde:true, tag:"Personalizado", img:"./img/IMG_0693.jpeg"},
  {nombre:"Pack x10 para eventos", cat:"Personalizados", desc:"Ideal souvenirs. Mismo diseño, 10 unidades.", precio:30000, img:""},
 
 
 
  {nombre:"Figura 3D decorativa - Shawn el cordero ", cat:"Decoración", desc:"Pieza impresa para escritorio o estanteria.", precio:9000, desde:true, img:"./img/IMG_0678.jpeg"},
  {nombre:"Figura 3D decorativa - Batman el caballero de la noche", cat:"Decoración", desc:"Pieza impresa para escritorio o estantería.", precio:12000, desde:true, img:"./img/IMG_0807.jpeg"}
];
