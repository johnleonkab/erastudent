(()=>{var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const o=flarum.core.compat["common/extend"];function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}const a=flarum.core.compat["common/Component"];var n=e.n(a);flarum.core.compat["common/components/Link"];var s=function(e){var t,o;function a(){return e.apply(this,arguments)||this}o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,r(t,o);var n=a.prototype;return n.view=function(){return this.hasLinks()||this.hasDescription()||this.hasBottomLine()?m("div",{className:"ThemeBaseFooter"},this.separator(),m("div",{className:"ThemeBaseFooter-container container"},this.upper(),app.forum.attribute("afrux-theme-base.footerBottomLine")&&this.lower()||"")):""},n.separator=function(){},n.upper=function(){var e=(app.forum.attribute("afrux-theme-base.footerLinks")||[]).filter((function(e){return null!==e})).map((function(e){return e.links&&(e.links=e.links.filter((function(e){return null!==e}))),e}));return m("div",{className:"ThemeBaseFooter-upper"},m("div",{className:["ThemeBaseFooter-about",this.hasLinks()?"":"ThemeBaseFooter-about--large"].join(" ")},m("div",{className:["ThemeBaseFooter-logo",this.hasDescription()?"":"ThemeBaseFooter-logo--large"].join(" ")},app.forum.attribute("logoUrl")?m("img",{src:app.forum.attribute("logoUrl"),alt:"logo"}):m("h1",{className:"ThemeBaseFooter-title"},app.forum.attribute("title"))),this.hasDescription()?m("p",{className:"ThemeBaseFooter-logo-description"},app.forum.attribute("afrux-theme-base.footerDescription")):""),this.hasLinks()?m("div",{className:"ThemeBaseFooter-links"},e.map((function(e){return m("div",{className:"ThemeBaseFooter-linkGroup"},m("h6",{className:"ThemeBaseFooter-linkGroup-title"},e.title),m("ul",null,e.links.map((function(e){return m("li",{className:"ThemeBaseFooter-links-item"},m("a",{href:e.url,rel:"noopener"},e.label))}))))}))):"")},n.lower=function(){return m("div",{className:"ThemeBaseFooter-lower"},m("p",{className:"ThemeBaseFooter-bottomLine"},app.forum.attribute("afrux-theme-base.footerBottomLine")))},n.hasLinks=function(){return app.forum.attribute("afrux-theme-base.footerLinks")&&app.forum.attribute("afrux-theme-base.footerLinks").length},n.hasDescription=function(){return Boolean(app.forum.attribute("afrux-theme-base.footerDescription"))},n.hasBottomLine=function(){return Boolean(app.forum.attribute("afrux-theme-base.footerBottomLine"))},a}(n());const i=flarum.core.compat["forum/ForumApplication"];var u=e.n(i);const p=flarum.core.compat["forum/components/WelcomeHero"];var l=e.n(p);const c={"extensions/afrux-theme-base/forum/components/Footer":s},f=flarum.core;app.initializers.add("afrux-theme-base",(function(){(0,o.extend)(u().prototype,"mount",(function(){app.forum.attribute("afrux-theme-base.footerHooked")&&m.mount(document.getElementById("footer"),s)})),(0,o.extend)(l().prototype,"view",(function(e){app.forum.attribute("afruxHeroBanner")&&e&&"object"==typeof e&&"attrs"in e&&(e.attrs.className+=" Hero--banner",e.attrs.style=e.attrs.style||{},e.attrs.style["--banner-url"]='url("'+app.forum.attribute("afruxHeroBanner")+'")',app.forum.attribute("afruxHeroBannerPosition")&&(e.attrs.style["--banner-position"]=app.forum.attribute("afruxHeroBannerPosition")))}))})),Object.assign(f.compat,c)})(),module.exports=t})();
//# sourceMappingURL=forum.js.map