!function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],m=0,d=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);d.length;)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;s.push([54,1]),n()}({53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(16),o=n.n(s),c=n(2),i=n(32),l=new(n.n(i).a),u=n(12),m=n(33),d={user:null},f=n(10),p=n.n(f);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={isFullScreen:!1,requestFieldWidth:"calc(50% - 1rem)"},v=n(34),_=n.n(v),h=n(9),y=function(e){return e.sort((function(e,t){return e.createdAt<t.createdAt?1:-1}))},O=Object(h.a)([function(e){return e.history}],(function(e){return y(e)}));function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={requestText:"",responseText:"",errors:[],isRequestTextValid:!1,isSuccess:!0},q=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{user:t.user};case"LOGOUT":return{user:null};default:return e}},viewSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_SCREEN_MODE":return g(g({},e),{},{isFullScreen:!e.isFullScreen});case"SET_FIELD_WIDTH":return g(g({},e),{},{requestFieldWidth:t.requestFieldWidth});case"RESET_SETTINGS":return b;default:return e}},history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HISTORY":return t.history;case"REMOVE_REQUEST":return e.filter((function(e){return e.id!==t.id}));case"ADD_REQUEST":return[].concat(_()(y(e).slice(0,14)),[t.request]);case"UPDATE_REQUEST":return e.map((function(e){return e.id===t.id?S(S({},e),t.updates):e}));case"CLEAR_HISTORY":return[];default:return e}},consoleForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FIELDS":return t.request;case"UPDATE_FIELDS":return T(T({},e),t.updates);case"CLEAR_FIELDS":return j;default:return e}}}),x="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,F=function(){return Object(u.e)(q,x(Object(u.a)(m.a)))},D=n(56),R=n(7),I=n.n(R),L=function(e){return{type:"UPDATE_FIELDS",updates:e}},P=n(24),A=n.n(P),k=function(e,t){var n=e.login,r=e.sublogin,a=r?"".concat(n,":").concat(r):n;localStorage.setItem(a,JSON.stringify(t))},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.login,n=e.sublogin,r=n?"".concat(t,":").concat(n):t;try{var a=JSON.parse(localStorage.getItem(r));return a||[]}catch(e){return[]}},C=function(e){return{type:"SET_HISTORY",history:e}},W=function(e){return{type:"REMOVE_REQUEST",id:e}},V=function(e){return function(t,n){var r=n().auth.user,a=r.session,s=n().history.find((function(t){return function e(t,n){if(t===n)return!0;if(null==t||"object"!=A()(t)||null==n||"object"!=A()(n))return!1;var r=Object.keys(t),a=Object.keys(n);if(r.length!=a.length)return!1;for(var s=0,o=r;s<o.length;s++){var c=o[s];if(!a.includes(c)||!e(t[c],n[c]))return!1}return!0}(JSON.parse(t.requestText),e)}));return l.setSession(a),l.request(e).then((function(a){t(s?M(s.id,{responseText:JSON.stringify(a),createdAt:Date.now(),isSuccess:!0}):H({id:Object(D.a)(),requestText:JSON.stringify(e),responseText:JSON.stringify(a),createdAt:Date.now(),isSuccess:!0})),t(L({responseText:I()(JSON.stringify(a)),isSuccess:!0})),k(r,n().history)})).catch((function(a){t(s?M(s.id,{responseText:JSON.stringify(a),createdAt:Date.now(),isSuccess:!1}):H({id:Object(D.a)(),requestText:JSON.stringify(e),responseText:JSON.stringify(a),createdAt:Date.now(),isSuccess:!1})),t(L({responseText:I()(JSON.stringify(a)),isSuccess:!1})),k(r,n().history)}))}},H=function(e){return{type:"ADD_REQUEST",request:e}},M=function(e,t){return{type:"UPDATE_REQUEST",id:e,updates:t}},U=function(){return{type:"CLEAR_HISTORY"}},G=function(e){return{type:"SET_FIELD_WIDTH",requestFieldWidth:e}},Y=function(){return{type:"RESET_SETTINGS"}},z=function(e){return{type:"LOGIN",user:e}},Q=function(){return function(e,t){var n=t().auth.user.session;return l.setSession(n),l.request({action:"logout"}).then((function(t){l.setSession(void 0),l.auth=void 0,localStorage.removeItem("sendsay_user"),e(U()),e({type:"CLEAR_FIELDS"}),e((function(e){localStorage.removeItem("viewSettings"),e(Y())})),e(X())}))}},X=function(){return{type:"LOGOUT"}},$=n(15),B=n(3),Z={login:{required:!0,rules:[{test:function(e){return/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(e)||/^[a-zA-Z0-9_]+$/.test(e)},message:"Некорректный формат: введите валидный E-mail или имя аккаунта (допустимы латинские символы, цифры и подчеркивания)"}]},sublogin:{required:!1,rules:[{test:function(e){return/^[a-zA-Z0-9_]+$/.test(e)},message:"Некорректный формат: допустимы латинские символы, цифры и подчеркивания"}]},password:{required:!0,rules:[{test:function(e){return!/[а-яА-Я]/.test(e)},message:"Пароль не может содержать кириллицу"}]}},K=function(e){var t=e.className;return a.a.createElement("div",{className:t?"logo ".concat(t):"logo"},a.a.createElement("img",{src:"/assets/img/logo.png",alt:"logo",className:"logo__img"}))},ee=n(13),te=n.n(ee);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e,t){switch(t.type){case"SET_FIELD":return re(re({},e),{},p()({},t.updates.name,t.updates.data));case"SET_FORM_VALIDITY":return re(re({},e),{},{isFormValid:t.isFormValid});case"SET_LOGIN_ERROR":return re(re({},e),{},{loginErr:t.loginErr});case"SET_FETCHING_STATUS":return re(re({},e),{},{isFetching:t.isFetching});default:return e}},se=function(e){return{type:"SET_FORM_VALIDITY",isFormValid:e}},oe=function(e){return{type:"SET_LOGIN_ERROR",loginErr:e}},ce=function(e){return{type:"SET_FETCHING_STATUS",isFetching:e}},ie=n(19),le=n.n(ie),ue=n(11),me=n.n(ue),de=function(e){var t=e.id,n=e.labelText,r=e.labelHint,s=e.className,o=e.errors,c=me()(e,["id","labelText","labelHint","className","errors"]);return a.a.createElement("div",{className:s?"input ".concat(s):"input"},n&&a.a.createElement("label",{htmlFor:t,className:"input__label"},a.a.createElement("span",{className:"input__label-text"},n),r&&a.a.createElement("span",{className:"input__label-hint"},r)),a.a.createElement("input",le()({id:t,className:"input__field"},c)),o&&o.length>0&&o.map((function(e,t){return a.a.createElement("p",{key:t,className:"input__error"},e)})))},fe=function(e){var t="/assets/img/icon-sprite.svg#".concat(e.iconId?e.iconId:"");return a.a.createElement("svg",{className:e.className,style:{width:e.iconWidth,height:e.iconHeight}},a.a.createElement("use",{xlinkHref:t}))},pe=function(e){var t=e.title,n=e.text;return a.a.createElement("div",{className:"form-alert"},a.a.createElement("div",{className:"form-alert__icon-box"},a.a.createElement(fe,{iconId:"icon-fail",iconWidth:20,iconHeight:20})),a.a.createElement("div",{className:"form-alert__content"},a.a.createElement("h5",{className:"form-alert__title"},t),a.a.createElement("p",{className:"form-alert__text"},n)))},Ee=function(e){var t=e.size;return a.a.createElement("div",{className:"spinner center",style:{fontSize:t}},a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}),a.a.createElement("div",{className:"spinner-blade"}))},ge={login:{value:"",errors:[],isValid:!1},sublogin:{value:"",errors:[],isValid:!0},password:{value:"",errors:[],isValid:!1},isFormValid:!1,isFetching:!1,loginErr:""},be=Object(c.b)(void 0,(function(e){return{startLogIn:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.sublogin;return l.auth=e,l.request({action:"pong"}).then((function(e){var r={login:e.account,sublogin:n,session:l.session};localStorage.setItem("sendsay_user",JSON.stringify(r));var a=J(r);t(z(r)),t(C(a))}))}}(t))}}}))((function(e){var t=e.validationSchema,n=e.startLogIn,s=Object(r.useReducer)(ae,ge),o=te()(s,2),c=o[0],i=o[1];Object(r.useEffect)((function(){c.login.isValid&&c.sublogin.isValid&&c.password.isValid?i(se(!0)):i(se(!1))}),[c.password,c.login,c.sublogin]);var l=function(e){c.loginErr&&i(oe(""));var n=e.target.name,r=e.target.value.trim(),a=function(e,t,n){var r=[];if(n[e])return n[e].required&&!t&&r.push("Обязательное поле"),t&&n[e].rules.length>0&&n[e].rules.forEach((function(e){e.test(t)||r.push(e.message)})),r}(n,r,t);i({type:"SET_FIELD",updates:{name:n,data:{value:r,errors:a,isValid:!(a.length>0)}}})};return a.a.createElement("div",{className:"login-form"},a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(ce(!0)),n({login:c.login.value,sublogin:c.sublogin.value,password:c.password.value}).catch((function(e){i(ce(!1));var t=JSON.stringify({id:e.id,explain:e.explain});i(oe(t))}))},className:"login-form__form"},a.a.createElement("h1",{className:"login-form__heading"},"API - консолька"),c.loginErr&&a.a.createElement(pe,{title:"Вход не вышел",text:c.loginErr}),a.a.createElement(de,{className:c.login.errors.length>0?"input--invalid":"",id:"login",name:"login",labelText:"Логин",type:"text",errors:c.login.errors,onChange:l,value:c.login.value}),a.a.createElement(de,{className:c.sublogin.errors.length>0?"input--invalid":"",id:"sublogin",name:"sublogin",labelText:"Сублогин",labelHint:"Опционально",type:"text",errors:c.sublogin.errors,onChange:l,value:c.sublogin.value}),a.a.createElement(de,{className:c.password.errors.length>0?"input--invalid":"",id:"password",name:"password",labelText:"Пароль",type:"password",errors:c.password.errors,onChange:l,value:c.password.value}),a.a.createElement("button",{disabled:!(c.isFormValid&&!c.isFetching&&!c.loginErr),className:c.isFormValid&&!c.loginErr?"btn-primary":"btn-primary btn-primary--disabled",type:"submit"},c.isFetching?a.a.createElement(Ee,{size:20}):"Войти")))})),ve=function(){return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"login"},a.a.createElement(K,{className:"login__logo"}),a.a.createElement(be,{validationSchema:Z}),a.a.createElement("a",{href:"https://github.com/AMisnikov/sendsay-test",target:"_blank",className:"link login__link"},"@AMisnikov")))},_e=function(e){return e.viewSettings},he=Object(h.a)([_e],(function(e){return e.isFullScreen})),ye=Object(h.a)([_e],(function(e){return e.requestFieldWidth})),Oe=function(e){return e.auth},Ne=Object(h.a)([Oe],(function(e){return e.user})),Se=Object(h.a)([Oe],(function(e){return!!e.user})),we=Object(c.b)((function(e){return{user:Ne(e)}}))((function(e){var t=e.user,n=e.className;return a.a.createElement("div",{className:n?"user ".concat(n):"user"},a.a.createElement("span",{className:"user__login"},t.login),t.sublogin&&a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"user__colon"},":"),a.a.createElement("span",{className:"user__sublogin"},t.sublogin)))})),Te=Object(c.b)(void 0,(function(e){return{startLogOut:function(){return e(Q())}}}))((function(e){var t=e.startLogOut,n=e.className;return a.a.createElement("button",{onClick:t,className:n?"btn-secondary ".concat(n):"btn-secondary"},a.a.createElement(fe,{className:"btn-secondary__icon",iconId:"icon-logout",iconWidth:24,iconHeight:24}),a.a.createElement("span",null,"Выйти"))})),je=Object(c.b)((function(e){return{isFullScreen:he(e)}}),(function(e){return{toggleScreenMode:function(){return e({type:"TOGGLE_SCREEN_MODE"})}}}))((function(e){var t=e.isFullScreen,n=e.toggleScreenMode,r=e.className;return a.a.createElement("button",{onClick:n,className:r?"btn-secondary ".concat(r):"btn-secondary"},t?a.a.createElement(fe,{className:"btn-secondary__icon",iconId:"icon-defaultscreen",iconWidth:18,iconHeight:18}):a.a.createElement(fe,{className:"btn-secondary__icon",iconId:"icon-fullscreen",iconWidth:18,iconHeight:18}))})),qe=function(){return a.a.createElement("header",{className:"header"},a.a.createElement(K,{className:"header__logo"}),a.a.createElement("h1",{className:"main-heading"},"API - консолька"),a.a.createElement("div",{className:"header__actions"},a.a.createElement(we,null),a.a.createElement(Te,{className:"header__btn-logout"}),a.a.createElement(je,{className:"header__btn-toggle-screen"})))},xe=a.a.forwardRef((function(e,t){var n=e.className,r=e.onRun,s=e.onCopy,o=e.onRemove,c=me()(e,["className","onRun","onCopy","onRemove"]);return a.a.createElement("div",le()({ref:t,className:n?"dropdown ".concat(n):"dropdown"},c),a.a.createElement("ul",{className:"dropdown__list"},a.a.createElement("li",{className:"dropdown__item"},a.a.createElement("button",{className:"dropdown__action",onClick:r},"Выполнить")),a.a.createElement("li",{className:"dropdown__item"},a.a.createElement("button",{className:"dropdown__action",onClick:s},"Скопировать")),a.a.createElement("li",{className:"dropdown__item",onClick:o},a.a.createElement("button",{className:"dropdown__action dropdown__action--red-hover"},"Удалить"))))})),Fe=Object(c.b)(void 0,(function(e){return{setFields:function(t){return e(function(e){return{type:"SET_FIELDS",request:e}}(t))},removeRequest:function(t){return e(function(e){return function(t,n){var r=n().auth.user;t(W(e)),k(r,n().history)}}(t))},runRequest:function(t,n){return e(function(e,t){return function(n,r){var a=r().auth.user,s=a.session;l.setSession(s),l.request(t).then((function(s){n(M(e,{responseText:JSON.stringify(s),createdAt:Date.now(),isSuccess:!0})),n(L({requestText:I()(JSON.stringify(t)),responseText:I()(JSON.stringify(s)),isSuccess:!0})),k(a,r().history)})).catch((function(s){n(M(e,{responseText:JSON.stringify(s),createdAt:Date.now(),isSuccess:!1})),n(L({requestText:I()(JSON.stringify(t)),responseText:I()(JSON.stringify(s)),isSuccess:!1})),k(a,r().history)}))}}(t,n))}}}))((function(e){var t=e.request,n=e.removeRequest,s=e.runRequest,o=e.setFields,c=Object(r.useRef)(null),i=Object(r.useRef)(null),l=Object(r.useState)(!1),u=te()(l,2),m=u[0],d=u[1],f=Object(r.useState)(!1),p=te()(f,2),E=p[0],g=p[1],b=function(e){var t=e.target;t!==i.current&&!i.current.contains(t)&&E&&g(!1)};Object(r.useEffect)((function(){return document.addEventListener("click",b),function(){document.removeEventListener("click",b)}}));return a.a.createElement("div",{ref:c,className:"request"},a.a.createElement("div",{onClick:function(){o({requestText:I()(t.requestText),responseText:I()(t.responseText),errors:[],isRequestTextValid:!0,isSuccess:t.isSuccess})},className:"request__wrapper"},a.a.createElement("div",{className:t.isSuccess?"request__status-icon request__status-icon--success":"request__status-icon request__status-icon--fail"}),a.a.createElement("div",{className:"request__title"},JSON.parse(t.requestText).action),m&&a.a.createElement("span",{className:"request__copied-message"},"Скопировано")),a.a.createElement("div",{onClick:function(){var e,t,n;e=c.current.parentNode,t=e.parentNode,n=c.current.getBoundingClientRect(),document.documentElement.clientHeight-(n.top+n.height)<151?(i.current.style.top="auto",i.current.style.bottom="4rem"):(i.current.style.top="4rem",i.current.style.bottom="auto"),i.current.style.left=e.offsetLeft-t.scrollLeft+(e.offsetWidth-128)+"px",g(!E)},className:"request__actions"},a.a.createElement("button",{className:"btn-actions"},a.a.createElement("span",null)),a.a.createElement(xe,{ref:i,className:E?"request__dropdown request__dropdown--open":"request__dropdown",onRun:function(){s(t.id,JSON.parse(t.requestText))},onCopy:function(){navigator.clipboard.writeText(t.requestText).then((function(){d(!0),setTimeout((function(){d(!1)}),1e3)}))},onRemove:function(){n(t.id)}})))})),De=Object(c.b)((function(e){return{history:O(e)}}),(function(e){return{clearHistory:function(){return e((function(e,t){var n=t().auth.user,r=n.login,a=n.sublogin,s=a?"".concat(r,":").concat(a):r;e(U()),localStorage.removeItem(s)}))}}}))((function(e){var t=e.history,n=e.clearHistory,s=Object(r.useRef)(null),o=function(e){var t=s.current.scrollLeft;e.deltaY>0?s.current.scrollLeft=t+100:s.current.scrollLeft=t-100};return a.a.createElement("div",{className:"history"},t.length>0?a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:"history__list",ref:s,onScroll:function(e){var t=e.target.querySelector(".request__dropdown--open");if(t){var n=t.parentNode.parentNode.parentNode,r=t.offsetWidth,a=n.offsetLeft-e.target.scrollLeft+(n.offsetWidth-r);t.style.left=a+"px",a<0||a>e.target.offsetWidth-t.offsetWidth+10?(t.style.opacity=0,t.style.visibility="hidden"):(t.style.opacity=1,t.style.visibility="visible")}},onMouseEnter:function(){window.addEventListener("wheel",o)},onMouseLeave:function(){window.removeEventListener("wheel",o)}},t.map((function(e){return a.a.createElement("li",{key:e.id,className:"history__item"},a.a.createElement(Fe,{request:e}))}))),a.a.createElement("div",{className:"history__btn-delete-box"},a.a.createElement("button",{onClick:n,className:"btn-delete"}))):a.a.createElement("p",{className:"history__empty-message"},"История запросов пуста. Добавьте запрос, используя форму ниже"))})),Re=Object(h.a)([function(e){return e.consoleForm}],(function(e){return e})),Ie=Object(c.b)((function(e){return{formData:Re(e),fieldWidth:ye(e)}}),(function(e){return{sendRequest:function(t){return e(V(t))},updateFields:function(t){return e(L(t))},saveSettings:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.requestFieldWidth,r=void 0===n?"calc(50% - 1rem)":n;localStorage.setItem("viewSettings",JSON.stringify({requestFieldWidth:r})),t(G(r))}}(t))}}}))((function(e){var t=e.formData,n=e.sendRequest,s=e.updateFields,o=e.saveSettings,c=e.fieldWidth,i=Object(r.useRef)(null),l=Object(r.useState)(!1),u=te()(l,2),m=u[0],d=u[1];Object(r.useEffect)((function(){i.current.style.width=c}),[]);var f=function(e){var t=i.current;t.style.width=e.clientX-t.offsetLeft+"px"},p=function e(){var t=i.current.style.width;o({requestFieldWidth:t}),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",e)};return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(!0),n(JSON.parse(e.target.elements.requestText.value)).then((function(){d(!1)}))},className:"console__form console-form"},a.a.createElement("div",{className:"console-form__fields"},a.a.createElement("div",{ref:i,className:t.errors.length>0?"console-form__field console-form__field--request console-field console-field--invalid":"console-form__field console-form__field--request  console-field"},a.a.createElement("label",{htmlFor:"req",className:"console-field__label"},"Запрос:"),a.a.createElement("textarea",{name:"requestText",id:"req",onChange:function(e){var t=[];try{JSON.parse(e.target.value).action||t.push("Запрос должен содержать параметр action")}catch(e){t.push("Введите валидный JSON")}s({requestText:e.target.value,errors:t,responseText:"",isSuccess:!0,isRequestTextValid:!(t.length>0)})},className:"console-field__editor",value:t.requestText})),a.a.createElement("div",{onMouseDown:function(){window.addEventListener("mousemove",f),window.addEventListener("mouseup",p)},className:"console-form__separator"},a.a.createElement("span",null)),a.a.createElement("div",{className:!t.isSuccess>0?"console-form__field console-form__field--response console-field console-field--invalid":"console-form__field console-form__field--response  console-field"},a.a.createElement("label",{htmlFor:"res",className:"console-field__label"},"Ответ:"),a.a.createElement("textarea",{readOnly:!0,name:"responseText",id:"res",className:"console-field__editor",value:t.responseText}))),t.errors.length>0&&a.a.createElement("div",{className:"console-form__errors"},t.errors.map((function(e,t){return a.a.createElement("p",{key:t},e)}))),a.a.createElement("div",{className:"console-form__actions"},a.a.createElement("button",{className:t.isRequestTextValid?"btn-primary":"btn-primary btn-primary--disabled",type:"submit",disabled:!(t.isRequestTextValid&&!m)},m?a.a.createElement(Ee,{size:20}):"Отправить"),a.a.createElement("a",{href:"https://github.com/AMisnikov/sendsay-test",target:"_blank",className:"link"},"@AMisnikov"),a.a.createElement("button",{onClick:function(){s({requestText:I()(t.requestText)})},type:"button",className:"btn-secondary"},a.a.createElement(fe,{className:"btn-secondary__icon",iconId:"icon-format",iconWidth:24,iconHeight:24}),a.a.createElement("span",null,"Форматировать"))))})),Le=function(){return a.a.createElement("main",{className:"console"},a.a.createElement(De,null),a.a.createElement(Ie,null))},Pe=Object(c.b)((function(e){return{isFullScreen:he(e)}}))((function(e){var t=e.isFullScreen;return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:t?"console-container console-container--fullscreen":"console-container"},a.a.createElement(qe,null),a.a.createElement(Le,null)))})),Ae=Object(c.b)((function(e){return{isAuth:Se(e)}}))((function(e){var t=e.isAuth,n=e.children,r=me()(e,["isAuth","children"]);return a.a.createElement(B.b,r,t?a.a.createElement(B.a,{to:"/app"}):n)})),ke=Object(c.b)((function(e){return{isAuth:Se(e)}}))((function(e){var t=e.isAuth,n=e.children,r=me()(e,["isAuth","children"]);return a.a.createElement(B.b,r,t?n:a.a.createElement(B.a,{to:"/"}))})),Je=function(){return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"not-found"},a.a.createElement("div",{className:"not-found__top"},"404"),a.a.createElement("div",{className:"not-found__bottom"},"Страница не найдена"),a.a.createElement($.b,{to:"/",className:"btn-primary"},"Вернуться на главную")))},Ce=function(){return a.a.createElement($.a,null,a.a.createElement(B.d,null,a.a.createElement(Ae,{path:"/",exact:!0},a.a.createElement(ve,null)),a.a.createElement(ke,{path:"/app"},a.a.createElement(Pe,null)),a.a.createElement(B.b,null,a.a.createElement(Je,null))))},We=function(){return a.a.createElement("div",{className:"wrapper"},a.a.createElement(Ee,null))},Ve=(n(52),n(53),document.getElementById("root"));o.a.render(a.a.createElement(We,null),Ve);var He=F(),Me=a.a.createElement(c.a,{store:He},a.a.createElement(Ce,null)),Ue=function(){o.a.render(Me,Ve)},Ge=JSON.parse(localStorage.getItem("sendsay_user"));Ge?(l.setSession(Ge.session),l.request({action:"pong"}).then((function(e){var t=J(Ge),n=JSON.parse(localStorage.getItem("viewSettings"));He.dispatch(z(Ge)),He.dispatch(C(t)),n&&n.requestFieldWidth&&He.dispatch(G(n.requestFieldWidth)),Ue()})).catch((function(e){localStorage.removeItem("sendsay_user"),l.setSession(void 0),He.dispatch(X()),Ue()}))):(He.dispatch(X()),Ue())}});