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
  {nombre:"Llavero de madera personalizado", cat:"Llaveros", desc:"Contrachapado de caoba de 3 mm, corte láser.", precio:5000, img:""},
  {nombre:"Llavero de madera grabado", cat:"Llaveros", desc:"Diseño grabado a elección de la lista.", precio:3500, img:""},
  {nombre:"Llavero 3D multicolor - Bandera Argentina", cat:"Llaveros", desc:"Impreso en PLA, varios colores en una pieza.", precio:5000, img:""},
  {nombre:"Llavero con nombre", cat:"Personalizados", desc:"Escribís el nombre y lo hacemos en madera o 3D.", precio:4500, desde:true, tag:"Personalizado", img:""},
  {nombre:"Llavero 3D personalizado", cat:"Personalizados", desc:"Grabado con imagen o la de tu marca.", precio:9000, desde:true, tag:"Personalizado", img:""},
  {nombre:"Pack x10 para eventos", cat:"Personalizados", desc:"Ideal souvenirs. Mismo diseño, 10 unidades.", precio:30000, img:""},
  {nombre:"Cartel decorativo", cat:"Decoración", desc:"Frase o nombre en madera para colgar o apoyar.", precio:9000, desde:true, img:""},
  {nombre:"Figura 3D decorativa", cat:"Decoración", desc:"Pieza impresa para escritorio o estantería.", precio:8000, desde:true, img:""}
];
