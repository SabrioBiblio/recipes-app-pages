(this["webpackJsonprecipes-app"]=this["webpackJsonprecipes-app"]||[]).push([[0],{11:function(e,t,r){e.exports={wishlistCardWrapper:"RecipeCardWishlist_wishlistCardWrapper__E8J7a",wishlistCardImage:"RecipeCardWishlist_wishlistCardImage__XIQXB",wishlistCardTitle:"RecipeCardWishlist_wishlistCardTitle__NM-dj",wishlistCardDescription:"RecipeCardWishlist_wishlistCardDescription__BbMib"}},12:function(e,t,r){e.exports={addRecipeFormWrapper:"AddRecipeForm_addRecipeFormWrapper__3F7bt",inputTitle:"AddRecipeForm_inputTitle__1ZJkA",textDescription:"AddRecipeForm_textDescription__Wi44V",buttonAddRecipe:"AddRecipeForm_buttonAddRecipe__1fHqy",formValidate:"AddRecipeForm_formValidate__3MXUA"}},17:function(e,t,r){e.exports={headerWrapper:"Header_headerWrapper__7qMsP",headerLink:"Header_headerLink__3-nNs",btnAddRecipe:"Header_btnAddRecipe__3fSso"}},20:function(e,t,r){e.exports={modalWrapper:"Modal_modalWrapper__3YQyg",modalBackdrop:"Modal_modalBackdrop__3XWFB",isOpen:"Modal_isOpen__3Rkg7"}},21:function(e,t,r){},23:function(e,t,r){e.exports={spinner:"Spinner_spinner__3GFrR"}},3:function(e,t,r){e.exports={recipeWrapper:"Recipe_recipeWrapper__1sirs",recipeMainTags:"Recipe_recipeMainTags__6ViKR",recipeTag:"Recipe_recipeTag__3HE0S",recipeMain:"Recipe_recipeMain__t38LY",recipeMainProps:"Recipe_recipeMainProps__qM3Ik",recipeMainImage:"Recipe_recipeMainImage__gyTme",recipeHeadWishlist:"Recipe_recipeHeadWishlist__3XG59",recipeHead:"Recipe_recipeHead__2IwRV",recipeHeadHeart:"Recipe_recipeHeadHeart__2LhVs",recipeInstruction:"Recipe_recipeInstruction__2nr7g",recipeMainIngredients:"Recipe_recipeMainIngredients__2XSlB",uncovered:"Recipe_uncovered__2dKid",covered:"Recipe_covered__14FIQ",recipeRandom:"Recipe_recipeRandom__11zLG"}},37:function(e,t,r){"use strict";r.r(t);var i,c,n=r(0),a=r.n(n),s=r(14),l=r.n(s),o=(r(21),r(5)),d=r(2),p=r(7),j=function(){return function(e){return fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(t){return e(h(t))}))}},h=function(e){return{type:"SET_RECIPE",payload:e}},u=function(e){return{type:"ADD_TO_WISHLIST",payload:e}},b=r(15),O=r(10),m=function(e,t){return Object(O.a)(Object(O.a)({},e),t)},_=function(e){var t=JSON.parse(localStorage.getItem("wishlist")||"[]");if(0===t.filter((function(t){return t.idMeal===e.idMeal})).length)localStorage.setItem("wishlist",JSON.stringify([].concat(Object(b.a)(t),[e])));else{var r=t.filter((function(t){return t.idMeal!==e.idMeal}));localStorage.setItem("wishlist",JSON.stringify(r))}},f=r(3),x=r.n(f),g=["title","titleId"];function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},v.apply(this,arguments)}function w(e,t){if(null==e)return{};var r,i,c=function(e,t){if(null==e)return{};var r,i,c={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function R(e,t){var r=e.title,a=e.titleId,s=w(e,g);return n.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:256,height:256,viewBox:"0 0 256 256",xmlSpace:"preserve",ref:t,"aria-labelledby":a},s),r?n.createElement("title",{id:a},r):null,i||(i=n.createElement("desc",null,"Created with Fabric.js 1.7.22")),c||(c=n.createElement("defs",null)),n.createElement("g",{transform:"translate(128 128) scale(0.72 0.72)",style:{}},n.createElement("g",{style:{stroke:"none",strokeWidth:0,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"none",fillRule:"nonzero",opacity:1},transform:"translate(-175.05 -175.05000000000004) scale(3.89 3.89)"},n.createElement("path",{d:"M 83.627 13.423 L 83.627 13.423 c -8.498 -8.498 -22.403 -8.498 -30.901 0 L 45 21.148 l -7.725 -7.725 c -8.498 -8.498 -22.403 -8.498 -30.901 0 s -8.498 22.403 0 30.901 l 13.247 13.247 c 0 0 0 0 0 0 L 45 82.951 l 25.379 -25.379 l 13.248 -13.248 C 92.124 35.826 92.124 21.921 83.627 13.423 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(0,0,0)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}))))}var I=n.forwardRef(R),M=(r.p,r.p+"static/media/image_placeholder.5b4e5f67.jpg"),y=r.p+"static/media/spinner.dd9fc9f1.svg",N=r(23),C=r.n(N),k=r(1),S=function(){return Object(k.jsx)("div",{className:C.a.spinner,children:Object(k.jsx)("img",{src:y,alt:""})})},W=function(){var e=Object(p.b)(),t=Object(n.useState)(!1),r=Object(o.a)(t,2),i=r[0],c=r[1],a=Object(n.useState)(!1),s=Object(o.a)(a,2),l=s[0],d=s[1],h=[],b=[],O=Object(p.c)((function(e){return e.recipe}));if(0===O.length)return Object(k.jsx)(S,{});for(var m=O[0],f=m.strMeal,g=m.strTags,v=m.strMealThumb,w=m.strCategory,R=m.strArea,y=m.strInstructions,N=1;N<=20;N++)O[0]["strIngredient".concat(N)]&&b.push(Object(k.jsx)("p",{children:O[0]["strIngredient".concat(N)]+": "+O[0]["strMeasure".concat(N)]},O[0]["strIngredient".concat(N)]));g&&(h=g.split(",").map((function(e){return Object(k.jsx)("span",{className:x.a.recipeTag,children:e},e)})));return Object(k.jsxs)("div",{className:x.a.recipeWrapper,children:[Object(k.jsxs)("div",{className:x.a.recipeHead,children:[Object(k.jsx)("h1",{children:f}),Object(k.jsx)("div",{className:x.a.recipeHeadWishlist,children:Object(k.jsx)(I,{className:x.a.recipeHeadHeart,onClick:function(){e(u(O[0])),_(O[0])}})})]}),Object(k.jsxs)("div",{className:x.a.recipeMain,children:[Object(k.jsxs)("div",{className:x.a.recipeMainProps,children:[!!g&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h4",{children:"Tags:"}),Object(k.jsx)("div",{className:x.a.recipeMainTags,children:h})]}),Object(k.jsxs)("h4",{children:["Category: ",Object(k.jsx)("span",{children:w})]}),Object(k.jsxs)("h4",{children:["Area: ",Object(k.jsx)("span",{children:R})]}),Object(k.jsxs)("div",{onClick:function(){return d(!l)},className:"".concat(x.a.recipeMainIngredients," ").concat(l?x.a.uncovered:x.a.covered),children:[Object(k.jsx)("h4",{children:"Ingredients:"}),b]})]}),Object(k.jsx)("div",{className:x.a.recipeMainImage,children:Object(k.jsx)("img",{src:v||M,alt:""})})]}),Object(k.jsxs)("div",{className:"".concat(x.a.recipeInstruction," ").concat(i?x.a.uncovered:x.a.covered),onClick:function(){return c(!i)},children:[Object(k.jsx)("h2",{children:"Instruction"}),Object(k.jsx)("p",{children:y})]}),Object(k.jsx)("button",{className:x.a.recipeRandom,onClick:function(){return e(j())},children:"Next recipe"})]})},T=function(){return Object(k.jsx)("div",{className:"container d-flex d-flex-wrap",children:Object(k.jsx)(W,{})})},A=r(11),H=r.n(A),E=function(e){var t=e.recipe,r=t.strInstructions,i=t.strMeal,c=t.strMealThumb;return Object(k.jsxs)("div",{className:H.a.wishlistCardWrapper,children:[Object(k.jsx)("div",{className:H.a.wishlistCardImage,children:Object(k.jsx)("img",{className:H.a.wishlistCardImage,src:c||M,alt:""})}),Object(k.jsxs)("div",{className:H.a.wishlistCardDescription,children:[Object(k.jsx)("h1",{className:H.a.wishlistCardTitle,children:i}),Object(k.jsx)("p",{children:r.length>200?r.slice(0,220)+"...":r})]})]})},F=function(){var e=JSON.parse(localStorage.getItem("wishlist"))||[];return 0===e.length?Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("h1",{children:"Empty wishlist"})}):Object(k.jsx)("div",{className:"container d-flex d-flex-wrap",children:e.map((function(e){return Object(k.jsx)(E,{recipe:e},e.idMeal)}))})},L=r(9),D=r(17),P=r.n(D),B=function(e){var t=e.setIsOpen;return Object(k.jsx)("header",{children:Object(k.jsxs)("div",{className:P.a.headerWrapper,children:[Object(k.jsxs)("ul",{className:P.a.headerLink,children:[Object(k.jsx)("li",{children:Object(k.jsx)(L.b,{to:"/",children:"Home"})}),Object(k.jsx)("li",{children:Object(k.jsx)(L.b,{to:"/favorite",children:"Favorite"})})]}),Object(k.jsx)("button",{className:P.a.btnAddRecipe,onClick:function(){return t(!0)},children:"Add new recipe"})]})})},J=r(12),V=r.n(J),X=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),r=t[0],i=t[1],c=Object(n.useState)(""),a=Object(o.a)(c,2),s=a[0],l=a[1],d=Object(n.useState)(""),j=Object(o.a)(d,2),h=j[0],b=j[1],O={strMeal:r,strArea:"",strCategory:"",strInstructions:s,strMealThumb:"",idMeal:Math.floor(999999*Math.random()).toString(),strTags:""},m=Object(p.b)();return Object(k.jsxs)("div",{className:V.a.addRecipeFormWrapper,onClick:function(e){return e.stopPropagation()},children:[Object(k.jsx)("h2",{children:"Add custom recipe"}),Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.length<=5||s.length<=5?b("Title and description might have length more than 5 symbols"):(i(""),l(""),m(u(O)),_(O),b("Your recipe has been added to favorite"))},children:[Object(k.jsx)("input",{className:V.a.inputTitle,onChange:function(e){return i(e.target.value)},type:"text",value:r,placeholder:"Recipe title"}),Object(k.jsx)("textarea",{className:V.a.textDescription,onChange:function(e){return l(e.target.value)},value:s,placeholder:"Recipe instruction"}),Object(k.jsx)("button",{className:V.a.buttonAddRecipe,type:"submit",children:"Create recipe"}),Object(k.jsx)("div",{className:V.a.formValidate,children:h})]})]})},z=r(20),q=r.n(z),G=function(e){var t=e.children,r=e.isOpen,i=e.setIsOpen;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{onClick:function(){i(!1)},className:"".concat(q.a.modalWrapper," ").concat(r&&q.a.isOpen),children:t})})},Q=function(){var e=Object(p.b)(),t=Object(n.useState)(!1),r=Object(o.a)(t,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){e(j())}),[]),Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(B,{setIsOpen:c}),Object(k.jsx)(G,{isOpen:i,setIsOpen:c,children:Object(k.jsx)(X,{})}),Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{path:"/",element:Object(k.jsx)(T,{})}),Object(k.jsx)(d.a,{path:"/favorite",element:Object(k.jsx)(F,{})})]})]})},Y=r(16),K=r(24),U=r(25),Z={recipe:[],wishlist:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RECIPE":return m(e,{recipe:Object(O.a)(Object(O.a)({},e.recipe),t.payload.meals)});case"ADD_TO_WISHLIST":return m(e,{wishlist:[].concat(Object(b.a)(e.wishlist),[t.payload])});default:return e}},ee=Object(Y.createStore)($,Object(K.composeWithDevTools)(Object(Y.applyMiddleware)(U.a)));l.a.render(Object(k.jsx)(p.a,{store:ee,children:Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(L.a,{children:Object(k.jsx)(Q,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.70e2a779.chunk.js.map