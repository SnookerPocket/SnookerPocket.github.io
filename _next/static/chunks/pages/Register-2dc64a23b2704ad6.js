(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{7664:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Register",function(){return a(4854)}])},2459:function(e,r,a){"use strict";a.d(r,{Z:function(){return u}});var t=a(5893),n=a(7294);a(9664);var s=a(1664),o=a.n(s),l=()=>{let[e,r]=(0,n.useState)(""),[a,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{r(localStorage.getItem("userMail")||""),s("true"===localStorage.getItem("admin"))},[]),(0,t.jsx)(t.Fragment,{children:e&&(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("a",{href:"#index",className:"logo",children:"Snooker Pocket"}),(0,t.jsxs)("div",{className:"header-right",children:[(0,t.jsx)(o(),{href:{pathname:"/"},children:"Home"}),a&&(0,t.jsx)(o(),{href:{pathname:"/admin"},children:"Admin Page"}),e&&(0,t.jsx)("p",{children:e}),(0,t.jsx)("a",{onClick:()=>{localStorage.removeItem("userMail"),localStorage.removeItem("userID"),localStorage.removeItem("admin"),r(""),window.location.href="/login"},children:"Log uit"})]})]})})},i=a(5675),c=a.n(i),d={src:"/_next/static/media/snooker.65360a99.png",height:159,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAkklEQVR42mOAgf///zP+efNG4N+fPzv+/fv3AshnhUk4AbElmINQ3Pb3xw8hMAeo+v+/v3+DgYIiH/JyQt4wMCR9P3LYFsjXAJpmAFIQAsQeP06dSvk8e1bFh8L8pu/HjroCFaj/+/3bCGYk8/uYKG0gLQjEtkAcimwf859XrxgZgABopPe/v3//A3ESmP/3LysAYh5tgNvaLGAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6};function h(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("footer",{children:[(0,t.jsxs)("div",{className:"footerFlex",children:[(0,t.jsx)("div",{className:"imageFooter",children:(0,t.jsx)(c(),{src:d,width:110,alt:"Picture of the author"})}),(0,t.jsxs)("div",{id:"address",children:[(0,t.jsx)("h3",{children:"Snooker Pocket"}),(0,t.jsx)("p",{children:"Hoogstraat 78"}),(0,t.jsx)("p",{children:"8540 Deerlijk"}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"tel:0473 79 73 50",children:"0473 79 73 50"})})]}),(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("h3",{children:"Volg ons"}),(0,t.jsxs)("p",{children:["Via onze",(0,t.jsx)("a",{href:"https://www.facebook.com/Snooker-Pocket-790776524369943",target:"_blank",children:" facebookpagina "}),"houden we je op de hoogte van alle updates en nieuwtjes"]})]})]}),(0,t.jsx)("div",{className:"subfooter",children:(0,t.jsx)("div",{className:"uk-container",children:(0,t.jsx)("div",{className:"uk-grid",children:(0,t.jsx)("div",{className:"uk-width-1-2@s uk-text-left@s",children:(0,t.jsx)("p",{children:"\xa9 2020 Snooker Pocket"})})})})})]})})}function u(e){let{children:r}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{}),r,(0,t.jsx)(h,{})]})}},4854:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return c}});var t=a(5893),n=a(2459),s=a(7294);a(1616);var o=a(1664),l=a.n(o);function i(){let[e,r]=(0,s.useState)(""),[a,n]=(0,s.useState)(""),[o,i]=(0,s.useState)(""),[c,d]=(0,s.useState)(""),[h,u]=(0,s.useState)(""),[m,j]=(0,s.useState)(!0),[x,g]=(0,s.useState)(""),p=async r=>{if(r.preventDefault(),c===h&&c&&a&&e)g(null),j(!0);else{j(!1),g("Gegeven velden moeten ingevuld zijn");return}try{let r=await fetch("https://app.snookerpocket.online:443/api/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({admin:!1,username:e,email:a.toLowerCase(),password:c})});r.ok?(await r.json(),window.location.href="/login"):(g("Dit gebruikersnaam of e-mailadres is bezet"),console.log("Registratie is NIET GELUKT"))}catch(e){g("Geen reactie van de server"),console.log("Error met de server"),console.error("Error:",e)}};return(0,t.jsxs)("form",{onSubmit:p,className:"mainContainer",children:[(0,t.jsx)("label",{className:"errorLabel",children:x}),(0,t.jsx)("div",{className:"titleContainer",children:(0,t.jsx)("div",{children:"Register"})}),(0,t.jsx)("br",{}),(0,t.jsx)("label",{htmlFor:"username",children:"Username"}),(0,t.jsx)("input",{id:"username",value:e,placeholder:"username",onChange:e=>r(e.target.value),className:"inputBox",type:"text"}),(0,t.jsx)("label",{htmlFor:"email",children:"Email"}),(0,t.jsx)("input",{value:a,placeholder:"Geef je e-mailadres",onChange:e=>n(e.target.value.toLowerCase()),className:"inputBox",type:"email"}),o&&(0,t.jsx)("label",{className:"errorLabel",children:o}),(0,t.jsx)("label",{htmlFor:"wachtwoord",children:"Wachtwoord"}),(0,t.jsx)("input",{style:{borderColor:m?"grey":"red"},id:"wachtwoord",value:c,placeholder:"Typ je wachtwoord",onChange:e=>d(e.target.value),className:"inputBox",type:"password"}),(0,t.jsx)("label",{htmlFor:"wachtwoord2",children:"Herhaal wachtwoord"}),(0,t.jsx)("input",{style:{borderColor:m?"grey":"red"},id:"wachtwoord2",value:h,placeholder:"Typ je wachtwoord",onChange:e=>u(e.target.value),className:"inputBox",type:"password"}),(0,t.jsx)("br",{}),(0,t.jsx)("button",{className:"button",type:"submit",children:"Registreer"}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{children:["Terug naar de login pagina ",(0,t.jsx)(l(),{href:"/login",children:"Klik hier"})]})]})}function c(){return(0,t.jsx)(n.Z,{children:(0,t.jsx)(i,{})})}},9664:function(){},1616:function(){}},function(e){e.O(0,[61,888,774,179],function(){return e(e.s=7664)}),_N_E=e.O()}]);