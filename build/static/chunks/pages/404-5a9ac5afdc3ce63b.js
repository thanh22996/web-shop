(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{7942:function(e,n,t){"use strict";var r=t(5696);n.default=void 0;var c,a=(c=t(7294))&&c.__esModule?c:{default:c},i=t(4957),s=t(9898),o=t(639);var l={};function u(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,c=s.useRouter(),f=a.default.useMemo((function(){var n=i.resolveHref(c,e.href,!0),t=r(n,2),a=t[0],s=t[1];return{href:a,as:e.as?i.resolveHref(c,e.as):s||a}}),[c,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,x=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var j=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,y=o.useIntersection({rootMargin:"200px"}),N=r(y,2),b=N[0],_=N[1],k=a.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);a.default.useEffect((function(){var e=_&&t&&i.isLocalURL(d),n="undefined"!==typeof g?g:c&&c.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(c,d,h,{locale:n})}),[h,d,_,g,t,c]);var C={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,a,s,o){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),n[c?"replace":"push"](t,r,{shallow:a,locale:o,scroll:s}))}(e,c,d,h,v,m,x,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&u(c,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof g?g:c&&c.locale,I=c&&c.isLocaleDomain&&i.getDomainLocale(h,E,c&&c.locales,c&&c.domainLocales);C.href=I||i.addBasePath(i.addLocale(h,E,c&&c.defaultLocale))}return a.default.cloneElement(n,C)};n.default=f},639:function(e,n,t){"use strict";var r=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,l=e.disabled||!i,u=c.useRef(),f=c.useState(!1),d=r(f,2),h=d[0],p=d[1],v=c.useState(n?n.current:null),m=r(v,2),x=m[0],g=m[1],j=c.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||h||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=o.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=s.get(r):(n=s.get(t),o.push(t));if(n)return n;var c=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=c.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(t,n={id:t,observer:a,elements:c}),n}(t),c=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),s.delete(c);var n=o.findIndex((function(e){return e.root===c.root&&e.margin===c.margin}));n>-1&&o.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:x,rootMargin:t}))}),[l,x,t,h]);return c.useEffect((function(){if(!i&&!h){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[h]),c.useEffect((function(){n&&g(n.current)}),[n]),[j,h]};var c=t(7294),a=t(6286),i="undefined"!==typeof IntersectionObserver;var s=new Map,o=[]},6547:function(e,n,t){"use strict";t.r(n);t(7294);var r=t(1664),c=t(7411),a=t(5893);n.default=function(){return(0,a.jsx)(c.Z,{children:(0,a.jsxs)("div",{style:{height:"500px",backgroundColor:"#EBEBEB",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,a.jsx)("h1",{style:{fontSize:"150px",fontWeight:"400",marginRight:"40px"},children:"404"}),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,a.jsx)("span",{style:{fontSize:"30px",color:"#808081",maxWidth:"400px"},children:"Xin l\u1ed7i, trang b\u1ea1n \u0111ang t\xecm ki\u1ebfm kh\xf4ng t\u1ed3n t\u1ea1i!"}),(0,a.jsx)(r.default,{style:{marginTop:"15px",fontSize:"25px",color:"#f32723"},href:"/",children:"< Quay l\u1ea1i trang ch\u1ee7"})]})]})})}},7411:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(7294),c=t(2145),a=t(1664),i=t(1163),s=t(6577),o=t(5893);var l=function(){var e=(0,c.v9)((function(e){return e.listCart.listCart})),n=(0,i.useRouter)(),t=(0,c.I0)();return(0,r.useEffect)((function(){localStorage.getItem("products")&&t((0,s.FP)(JSON.parse(localStorage.getItem("products"))))}),[]),(0,o.jsx)(r.Fragment,{children:(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"header container",children:[(0,o.jsx)(a.default,{href:"/",className:"header__logo",children:"Y\u1ebeN VUA"}),(0,o.jsxs)("div",{className:"header__search",children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"header__search-main",children:[(0,o.jsx)("input",{type:"text",placeholder:"T\xecm ki\u1ebfm y\u1ebfn vua..."}),(0,o.jsxs)("button",{type:"submit",children:[(0,o.jsx)("i",{className:"fas fa-search"}),(0,o.jsx)("span",{children:"T\xecm ki\u1ebfm"})]})]}),(0,o.jsx)("div",{className:"header__search-product",children:(0,o.jsx)("div",{children:"T\u1ea5t c\u1ea3"})})]}),(0,o.jsxs)("div",{className:"header__cart",onClick:function(){n.push("/gio-hang")},children:[(0,o.jsx)("span",{className:"cart__noti-number",children:e.length}),(0,o.jsx)("i",{className:"fas fa-shopping-cart"}),(0,o.jsx)("p",{children:"Gi\u1ecf h\xe0ng"})]})]})})})};function u(){return(0,o.jsx)("div",{className:"footer",children:(0,o.jsx)("div",{className:"wrap-footer",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-md-4",children:[(0,o.jsx)("p",{className:"title",children:"V\u1ec0 Y\u1ebeN S\xc0O Y\u1ebeN VUA"}),(0,o.jsx)("p",{children:"Chuy\xean cung c\u1ea5p y\u1ebfn th\xf4 v\xe0 y\u1ebfn ch\u01b0ng cao c\u1ea5p Y\u1ebfn nh\xe0 nu\xf4i 100% kh\xf4ng qua trung gian. Y\u1ebfn s\u1ea1ch, kh\xf4ng pha, kh\xf4ng tr\u1ed9n"})]}),(0,o.jsxs)("div",{className:"col-md-4",children:[(0,o.jsx)("p",{className:"title",children:"TH\xd4NG TIN LI\xcaN H\u1ec6"}),(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"\u0110\u1ecba ch\u1ec9: "}),"15/4 \u0111\u01b0\u1eddng 98, ph\u01b0\u1eddng ph\u01b0\u1edbc long A, qu\u1eadn 9. TPHCM"]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"\u0110i\u1ec7n tho\u1ea1i: "}),"0934888078"]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"Th\u1eddi gian l\xe0m vi\u1ec7c: "}),"8h00 - 20h00"]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"Email: "}),"nhungngocnguyen58@gmail.com"]})]}),(0,o.jsxs)("div",{className:"col-md-4",children:[(0,o.jsx)("p",{className:"title",children:"CH\xcdNH S\xc1CH MUA H\xc0NG"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Cam k\u1ebft 100% ch\xednh h\xe3ng"}),(0,o.jsx)("li",{children:"Giao h\xe0ng d\u1ef1 ki\u1ebfn: Th\u1ee9 2 - Th\u1ee9 6 t\u1eeb 9h00 - 17h00"}),(0,o.jsx)("li",{children:"H\u1ed7 tr\u1ee3 24/7 v\u1edbi c\xe1c k\xeanh chat, email & phone"})]}),(0,o.jsx)("p",{className:"title",children:"LI\xcaN H\u1ebeT CH\xdaNG T\xd4I"})]})]})})})})}function f(e){return(0,o.jsxs)("div",{className:"container-box",children:[(0,o.jsx)(l,{}),e.children,(0,o.jsx)(u,{})]})}},6577:function(e,n,t){"use strict";t.d(n,{xH:function(){return c},dw:function(){return a},FP:function(){return i},y:function(){return s},RZ:function(){return o},Dg:function(){return l}});var r=t(3322),c=function(e,n){return{type:r.Ly,payload:e,callback:n}},a=function(e,n){return{type:r.NP,payload:e,callback:n}},i=function(e){return{type:r.uy,payload:e}},s=function(e,n){return{type:r.ym,payload:e,callback:n}},o=function(e,n){return{type:r.et,payload:e,callback:n}},l=function(e,n){return{type:r.sv,payload:e,callback:n}}},2448:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(6547)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=2448,e(e.s=n);var n}));var n=e.O();_N_E=n}]);