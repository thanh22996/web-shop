(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{9120:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return j}});var c=s(7294),r=s(6687),t=s(9499),i=s(1163),a=s(6577),l=s(2145),o=s(5538),d=s(5893);function h(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,c)}return s}function u(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?h(Object(s),!0).forEach((function(n){(0,t.Z)(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}var m=function(e){var n=(0,i.useRouter)(),s=(0,l.I0)(),t=n.query,h=(0,c.useState)({}),m=h[0],p=h[1],j=(0,c.useState)(1),x=j[0],f=j[1],g=(0,c.useState)([]),N=g[0],v=g[1],b=(0,c.useState)(0),y=b[0],_=b[1],O=c.useRef(null),k=function(e){1===e?x>1&&f(x-1):f(x+1)};return(0,c.useEffect)((function(){s((0,a.FP)(N)),localStorage.setItem("products",JSON.stringify(N))}),[y]),(0,c.useEffect)((function(){localStorage.getItem("products")&&v(JSON.parse(localStorage.getItem("products")))}),[]),(0,c.useEffect)((function(){s((0,a.RZ)(t,(function(e,n){e&&p(n.product)})))}),[n]),(0,d.jsxs)("div",{className:"detail-page mt-4",children:[m&&(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-5",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-sm-12",children:(0,d.jsx)("div",{className:"bl-main-img",children:(0,d.jsx)("img",{width:"100%",src:m.image?m.image:"/assets/imgs/san-pham-2.png",alt:"yenvua"})})})})}),(0,d.jsx)("div",{className:"col-md-7",children:(0,d.jsxs)("div",{className:"bl-infor-product",children:[(0,d.jsxs)("div",{className:"top-info",children:[(0,d.jsx)("p",{className:"title",children:m.name&&m.name}),(0,d.jsxs)("div",{className:"category-code d-flex",children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{className:"title__name",children:"Danh m\u1ee5c s\u1ea3n ph\u1ea9m: "}),(0,d.jsx)("span",{children:"Y\u1ebfn vua"})]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{className:"title__name",children:"M\xe3 s\u1ea3n ph\u1ea9m: "}),(0,d.jsx)("span",{style:{color:"#f32723",fontWeight:"600"},children:t.code})]})]})]}),(0,d.jsxs)("p",{className:"bl-price",children:[(0,d.jsx)("span",{className:"title__name mr-2",children:"Gi\xe1:"}),(0,d.jsxs)("span",{children:[m.price&&new Intl.NumberFormat("de-DE").format(m.price)," ","\u0111"]})]}),(0,d.jsxs)("p",{className:"bl-status",children:[(0,d.jsx)("span",{className:"title__name",children:"T\xecnh tr\u1ea1ng: "}),(0,d.jsx)("span",{children:m.isActive?"C\xf2n h\xe0ng":"H\u1ebft h\xe0ng"})]}),(0,d.jsxs)("div",{className:"bl-booking d-flex",children:[(0,d.jsxs)("div",{className:"d-flex bl-quantity mr-4",children:[(0,d.jsx)("button",{onClick:function(){return k(1)},children:"-"}),(0,d.jsx)("span",{className:"px-3",children:x}),(0,d.jsx)("button",{onClick:function(){return k(2)},children:"+"})]}),(0,d.jsx)("button",{className:"btn-book",onClick:function(){return function(e){var n=u(u({},e),{},{quantity:x});v([].concat((0,r.Z)(N),[n])),_(y+1),o.Am.isActive(O.current)||(O.current=o.Am.success("Th\xeam v\xe0o gi\u1ecf h\xe0ng th\xe0nh c\xf4ng.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}))}(m)},children:"Ch\u1ecdn mua"})]})]})})]}),(0,d.jsx)("div",{className:"mt-5 bl-more-info",children:(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(m.description)}})})]}),(0,d.jsx)(o.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1})]})},p=s(7411);var j=function(e){return(0,d.jsx)(p.Z,{children:(0,d.jsx)(m,{})})}},7411:function(e,n,s){"use strict";s.d(n,{Z:function(){return h}});var c=s(7294),r=s(2145),t=s(1664),i=s(1163),a=s(6577),l=s(5893);var o=function(){var e=(0,r.v9)((function(e){return e.listCart.listCart})),n=(0,i.useRouter)(),s=(0,r.I0)();return(0,c.useEffect)((function(){localStorage.getItem("products")&&s((0,a.FP)(JSON.parse(localStorage.getItem("products"))))}),[]),(0,l.jsx)(c.Fragment,{children:(0,l.jsx)("header",{children:(0,l.jsxs)("div",{className:"header container",children:[(0,l.jsx)(t.default,{href:"/",className:"header__logo",children:"Y\u1ebeN VUA"}),(0,l.jsxs)("div",{className:"header__search",children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"header__search-main",children:[(0,l.jsx)("input",{type:"text",placeholder:"T\xecm ki\u1ebfm y\u1ebfn vua..."}),(0,l.jsxs)("button",{type:"submit",children:[(0,l.jsx)("i",{className:"fas fa-search"}),(0,l.jsx)("span",{children:"T\xecm ki\u1ebfm"})]})]}),(0,l.jsx)("div",{className:"header__search-product",children:(0,l.jsx)("div",{children:"T\u1ea5t c\u1ea3"})})]}),(0,l.jsxs)("div",{className:"header__cart",onClick:function(){n.push("/gio-hang")},children:[(0,l.jsx)("span",{className:"cart__noti-number",children:e.length}),(0,l.jsx)("i",{className:"fas fa-shopping-cart"}),(0,l.jsx)("p",{children:"Gi\u1ecf h\xe0ng"})]})]})})})};function d(){return(0,l.jsx)("div",{className:"footer",children:(0,l.jsx)("div",{className:"wrap-footer",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-md-4",children:[(0,l.jsx)("p",{className:"title",children:"V\u1ec0 Y\u1ebeN S\xc0O Y\u1ebeN VUA"}),(0,l.jsx)("p",{children:"Chuy\xean cung c\u1ea5p y\u1ebfn th\xf4 v\xe0 y\u1ebfn ch\u01b0ng cao c\u1ea5p Y\u1ebfn nh\xe0 nu\xf4i 100% kh\xf4ng qua trung gian. Y\u1ebfn s\u1ea1ch, kh\xf4ng pha, kh\xf4ng tr\u1ed9n"})]}),(0,l.jsxs)("div",{className:"col-md-4",children:[(0,l.jsx)("p",{className:"title",children:"TH\xd4NG TIN LI\xcaN H\u1ec6"}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"\u0110\u1ecba ch\u1ec9: "}),"15/4 \u0111\u01b0\u1eddng 98, ph\u01b0\u1eddng ph\u01b0\u1edbc long A, qu\u1eadn 9. TPHCM"]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"\u0110i\u1ec7n tho\u1ea1i: "}),"0934888078"]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Th\u1eddi gian l\xe0m vi\u1ec7c: "}),"8h00 - 20h00"]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Email: "}),"nhungngocnguyen58@gmail.com"]})]}),(0,l.jsxs)("div",{className:"col-md-4",children:[(0,l.jsx)("p",{className:"title",children:"CH\xcdNH S\xc1CH MUA H\xc0NG"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Cam k\u1ebft 100% ch\xednh h\xe3ng"}),(0,l.jsx)("li",{children:"Giao h\xe0ng d\u1ef1 ki\u1ebfn: Th\u1ee9 2 - Th\u1ee9 6 t\u1eeb 9h00 - 17h00"}),(0,l.jsx)("li",{children:"H\u1ed7 tr\u1ee3 24/7 v\u1edbi c\xe1c k\xeanh chat, email & phone"})]}),(0,l.jsx)("p",{className:"title",children:"LI\xcaN H\u1ebeT CH\xdaNG T\xd4I"})]})]})})})})}function h(e){return(0,l.jsxs)("div",{className:"container-box",children:[(0,l.jsx)(o,{}),e.children,(0,l.jsx)(d,{})]})}},6577:function(e,n,s){"use strict";s.d(n,{xH:function(){return r},dw:function(){return t},FP:function(){return i},y:function(){return a},RZ:function(){return l},Dg:function(){return o}});var c=s(3322),r=function(e,n){return{type:c.Ly,payload:e,callback:n}},t=function(e,n){return{type:c.NP,payload:e,callback:n}},i=function(e){return{type:c.uy,payload:e}},a=function(e,n){return{type:c.ym,payload:e,callback:n}},l=function(e,n){return{type:c.et,payload:e,callback:n}},o=function(e,n){return{type:c.sv,payload:e,callback:n}}},4174:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chi-tiet",function(){return s(9120)}])}},function(e){e.O(0,[799,774,888,179],(function(){return n=4174,e(e.s=n);var n}));var n=e.O();_N_E=n}]);