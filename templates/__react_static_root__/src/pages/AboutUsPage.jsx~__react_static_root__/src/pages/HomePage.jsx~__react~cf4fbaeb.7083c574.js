(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var l=function(){var e=$(".slider-active");e.on("init",(function(e,a){var t=$(".single-slider:first-child").find("[data-animation]");n(t)})),e.on("beforeChange",(function(e,a,t,l){var s=$('.single-slider[data-slick-index="'+l+'"]').find("[data-animation]");n(s)}));try{e.slick({autoplay:!0,autoplaySpeed:2e3,dots:!1,fade:!0,arrows:!1,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]})}catch(a){}},n=function(e){e.each((function(){var e=$(this),a=e.data("delay"),t="animated "+e.data("animation");e.css({"animation-delay":a,"-webkit-animation-delay":a}),e.addClass(t).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){e.removeClass(t)}))}))}},139:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.text1,t=e.text2,l=e.text3;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"about-low-area about-bg pt-padding"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-xl-9 col-lg-9"},n.a.createElement("div",{className:"section-tittle text-center mb-60"},n.a.createElement("h2",null,a)))),n.a.createElement("div",{className:"row justify-content-between align-items-center"},n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6"},n.a.createElement("div",{className:"about-caption"},n.a.createElement("div",{className:"section-tittle section-tittle2"},n.a.createElement("h2",null,t),n.a.createElement("p",null,l),n.a.createElement("a",{href:"sobrenosotros",className:"btn"},"Saber más")))),n.a.createElement("div",{className:"col-xl-7 col-lg-7 col-md-6"},n.a.createElement("div",{className:"about-img "},n.a.createElement("div",{className:"about-font-img"},n.a.createElement("img",{className:"images-about-us",width:"600px",src:"/images/salto-del-agrio.jpg",alt:""})),n.a.createElement("div",{className:"about-back-img"},n.a.createElement("img",{className:"images-about-us",src:"/images/hotel-estructura.jpg",alt:""}))))))))}},140:function(e,a,t){"use strict";var l=t(58),n=t.n(l),s=t(0),c=t.n(s);a.a=function(){return Object(s.useEffect)((function(){tns({container:".my-slider-photos",autoplay:!0,autoplayTimeout:4e3,swipeAngle:!1,speed:600,items:2,mouseDrag:!0,nav:!1,controls:!1,autoplayButtonOutput:!1,responsive:n()({640:{edgePadding:20,gutter:20,items:2},700:{gutter:30},900:{items:3}},"900",{items:5})})}),[]),c.a.createElement("div",{className:"instagram-area fix"},c.a.createElement("div",{className:"container-fluid p-0"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("div",{className:"instagram-active"},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"my-slider-photos"},c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas-invierno.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/laguna-verde.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas-2.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas-3.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/salto-del-agrio.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas-nevadas.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/copahue-verano.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas-4.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/salto-del-gigante.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas-cartel.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas-puente.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas-5.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas-nieve.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/cartel-bienvenida.jpg",alt:""}),c.a.createElement("img",{className:"image-gallery",src:"/images/carousel/termas-6.jpg",alt:""}))))))))}},141:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(){return Object(l.useEffect)((function(){$(".popup-video").magnificPopup({type:"iframe",closeOnContentClick:!0})}),[]),n.a.createElement("div",{className:"video-area"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"video-wrap video-height-bg section-bg2 position-relative","data-background":"https://www.neuqueninforma.gob.ar/wp-content/uploads/2018/11/Web...El-complejo-termal-de-Copahue-abre-sus-puertas-_2015_efraindavila.com-70.jpg",style:{backgroundImage:"url(https://www.neuqueninforma.gob.ar/wp-content/uploads/2018/11/Web...El-complejo-termal-de-Copahue-abre-sus-puertas-_2015_efraindavila.com-70.jpg)"}},n.a.createElement("div",{className:"video-icon"},n.a.createElement("a",{className:"popup-video btn-icon",href:"https://www.youtube.com/watch?v=QUOV5ktvtY0"},n.a.createElement("img",{src:"images/play-button.svg",alt:""})),n.a.createElement("h5",null,"Video Copahue")))))}},142:function(e,a,t){"use strict";var l=t(0),n=t.n(l),s=t(134),c=t.n(s),i=function(e){var a=e.title,t=e.image,l=e.price,s=e.description;return n.a.createElement("div",{className:"col-4 "+c.a.room},n.a.createElement("div",{className:"single-items"},n.a.createElement("div",{className:"items-img"},n.a.createElement("img",{className:"image-rooms",src:t,alt:""})),n.a.createElement("div",{className:"items-cap"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("h5",null,n.a.createElement("a",{href:"#"},a)),n.a.createElement("span",null,"$",n.a.createElement("span",{id:"precio-jornada-sin-pension"},l),"/Noche")),n.a.createElement("p",null,s))))};a.a=function(e){var a=e.prices;return console.log("prices"),console.log(a),n.a.createElement("section",{className:"popular-item-area fix"},n.a.createElement("div",{className:"container-fluid p-0"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-xl-4 col-lg-4"},n.a.createElement("div",{className:"section-tittle text-center mb-60"},n.a.createElement("h2",null,"Nuestros Precios")))),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"row"},n.a.createElement(i,{title:"Jornada sin pensión",image:"/images/rooms/habitacion.jpg",price:null==a?void 0:a.filter((function(e){return 3==e.type}))[0].amount,description:"Alojamiento con unicamente desayuno y merienda"}),n.a.createElement(i,{title:"Jornada con pesión completa",image:"/images/rooms/comedor.jpg",price:null==a?void 0:a.filter((function(e){return 1==e.type}))[0].amount,description:"Alojamiento con las 4 comidas!"}),n.a.createElement(i,{title:"Jornada con media pensión",image:"/images/rooms/sala.jpg",price:null==a?void 0:a.filter((function(e){return 2==e.type}))[0].amount,description:"Alojamiento con almuerzo o cena."})))))}},143:function(e,a,t){"use strict";var l=t(0),n=t.n(l),s=t(10),c=function(e){var a=e.title,t=e.image,l=e.description;return n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6"},n.a.createElement("div",{className:"single-blogs mb-30"},n.a.createElement("div",{className:"blog-img"},n.a.createElement("img",{className:"image-blog",src:t,alt:"Miniatura "+a})),n.a.createElement("div",{className:"blogs-cap"},n.a.createElement("h5",null,n.a.createElement(s.Link,{to:"blog/"+a.replace(/ /g,"")},a)),n.a.createElement("p",null,l))))};a.a=function(e){var a=e.posts;return n.a.createElement("section",{className:"home-blog section-padding40 fix"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-xl-4 col-lg-4"},n.a.createElement("div",{className:"section-tittle text-center mb-60"},n.a.createElement("h2",null,"Nuestro Blog")))),n.a.createElement("div",{className:"row"},null==a?void 0:a.map((function(e,a){return n.a.createElement(c,{key:a,title:e.title,image:e.image,description:e.description})})))))}},144:function(e,a,t){"use strict";var l=t(0),n=t.n(l),s=function(){return n.a.createElement("div",{className:"client-caption",style:{width:"585px"}},n.a.createElement("h3",null,n.a.createElement("a",{href:"https://preview.colorlib.com/theme/ecoho/index.html#"},"Nice Accommodation")),n.a.createElement("p",null,'"Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.'),n.a.createElement("span",null,"- Omeka Lotus"))};a.a=function(){return Object(l.useEffect)((function(){tns({container:".my-slider-clients",autoplay:!1,autoplayTimeout:2e3,swipeAngle:!1,speed:200,items:2,mouseDrag:!0,nav:!1,autoplayButtonOutput:!1,prevButton:"#prevbutton",nextButton:"#nextbutton",responsive:{640:{edgePadding:20,gutter:20,items:2},700:{gutter:30}}})}),[]),n.a.createElement("section",{className:"client-say"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"my-slider-clients"},n.a.createElement(s,null),n.a.createElement(s,null),n.a.createElement(s,null),n.a.createElement(s,null),n.a.createElement(s,null),n.a.createElement(s,null),n.a.createElement(s,null),n.a.createElement(s,null)),n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("i",{id:"prevbutton",className:"fas fa-arrow-left"}),n.a.createElement("i",{id:"nextbutton",className:"fas fa-arrow-right"}))))}}}]);