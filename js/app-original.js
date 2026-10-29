/* Lógica del catálogo. Normalmente no hace falta tocar este archivo. */
(function(){
  var categorias = ["Todos"].concat(PRODUCTOS.map(function(p){return p.cat})
    .filter(function(c,i,a){return a.indexOf(c)===i}));
  var actual = "Todos";

  function esc(s){
    return String(s).replace(/[&<>"']/g,function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }
  function precio(n){ return "$ " + n.toLocaleString("es-AR"); }
  function linkWhatsApp(p){
    return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(CONFIG.mensaje + p.nombre);
  }

  function textos(){
    document.title = CONFIG.nombre + " · Catálogo";
    document.getElementById("nombre").textContent = CONFIG.nombre;
    document.getElementById("intro").textContent = CONFIG.intro;
    document.getElementById("notas").innerHTML =
      CONFIG.notas.map(function(t){return "<p>"+esc(t)+"</p>"}).join("");
  }

  function pintar(){
    var f = document.getElementById("filters");
    f.innerHTML = "";
    categorias.forEach(function(c){
      var b = document.createElement("button");
      b.className = "chip";
      b.textContent = c;
      b.setAttribute("aria-pressed", c === actual);
      b.onclick = function(){ actual = c; pintar(); };
      f.appendChild(b);
    });

    var g = document.getElementById("grid");
    g.innerHTML = "";
    PRODUCTOS.filter(function(p){ return actual === "Todos" || p.cat === actual; })
      .forEach(function(p){
        var a = document.createElement("article");
        a.className = "card";
        var foto = p.img
          ? '<img src="'+esc(p.img)+'" alt="'+esc(p.nombre)+'" loading="lazy">'
          : '<div class="ph" aria-hidden="true"></div>';
        a.innerHTML =
          '<div class="photo">'+foto+(p.tag?'<span class="tag">'+esc(p.tag)+'</span>':'')+'</div>'+
          '<div class="body">'+
            '<h2 class="name">'+esc(p.nombre)+'</h2>'+
            '<p class="desc">'+esc(p.desc)+'</p>'+
            '<div class="price">'+(p.desde?'<small>desde </small>':'')+precio(p.precio)+'</div>'+
            '<a class="btn" target="_blank" rel="noopener" href="'+linkWhatsApp(p)+'">'+esc(CONFIG.boton)+'</a>'+
          '</div>';
        g.appendChild(a);
      });
  }

  textos();
  pintar();
})();
