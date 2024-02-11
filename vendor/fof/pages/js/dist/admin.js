(()=>{var t={n:e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},d:(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}t.r(e);const s=flarum.core.compat.app;var o=t.n(s);const i=flarum.core.compat["common/Model"];var r=t.n(i);const l=flarum.core.compat["common/utils/computed"];var c=t.n(l);const p=flarum.core.compat["common/utils/string"],d=flarum.core.compat["common/utils/ItemList"];var u=t.n(d);const g=flarum.core.compat["common/components/Badge"];var f=t.n(g),h=function(t){function e(){for(var e,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).title=r().attribute("title"),e.time=r().attribute("time",r().transformDate),e.editTime=r().attribute("editTime",r().transformDate),e.content=r().attribute("content"),e.contentHtml=r().attribute("contentHtml"),e.contentPlain=c()("contentHtml",p.getPlainContent),e.slug=r().attribute("slug"),e.isHidden=r().attribute("isHidden"),e.isRestricted=r().attribute("isRestricted"),e.isHtml=r().attribute("isHtml"),e}return n(e,t),e.prototype.badges=function(){var t=new(u());return this.isHidden()&&t.add("hidden",f().component({type:"hidden",icon:"fas fa-trash",label:o().translator.trans("fof-pages.admin.badges.hidden")})),this.isRestricted()&&t.add("restricted",f().component({type:"restricted",icon:"fas fa-user-shield",label:o().translator.trans("fof-pages.admin.badges.restricted")})),t},e}(r());const v=flarum.core.compat["admin/components/ExtensionPage"];var b=t.n(v);const _=flarum.core.compat["common/components/Button"];var y=t.n(_);const N=flarum.core.compat["common/components/Modal"];var P=t.n(N);const R=flarum.core.compat["common/utils/Stream"];var k=t.n(R);const x=flarum.core.compat["common/utils/withAttr"];var H=t.n(x);const B=flarum.core.compat["common/utils/setRouteWithForcedRefresh"];var w=t.n(B),F=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.page=this.attrs.page||app.store.createRecord("pages"),this.pageTitle=k()(this.page.title()||""),this.slug=k()(this.page.slug()||""),this.pageContent=k()(this.page.content()||""),this.isHidden=k()(this.page.isHidden()),this.isRestricted=k()(this.page.isRestricted()),this.isHtml=k()(this.page.isHtml())},a.className=function(){return"EditPageModal Modal--large"},a.title=function(){return this.pageTitle()||app.translator.trans("fof-pages.admin.edit_page.title")},a.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-pages.admin.edit_page.title_label")),m("input",{className:"FormControl",placeholder:app.translator.trans("fof-pages.admin.edit_page.title_placeholder"),value:this.pageTitle(),oninput:function(e){t.pageTitle(e.target.value),t.slug((0,p.slug)(e.target.value))}})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-pages.admin.edit_page.slug_label")),m("input",{className:"FormControl",placeholder:app.translator.trans("fof-pages.admin.edit_page.slug_placeholder"),value:this.slug(),oninput:function(e){t.slug(e.target.value)}})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-pages.admin.edit_page.content_label")),m("textarea",{className:"FormControl",rows:"5",value:this.pageContent(),onchange:H()("value",this.pageContent),placeholder:app.translator.trans("fof-pages.admin.edit_page.content_placeholder")})),m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",checked:this.isHidden(),onchange:H()("checked",this.isHidden)}),app.translator.trans("fof-pages.admin.edit_page.hidden_label")))),m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",checked:this.isRestricted(),onchange:H()("checked",this.isRestricted)}),app.translator.trans("fof-pages.admin.edit_page.restricted_label")))),m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",checked:this.isHtml(),onchange:H()("checked",this.isHtml)}),app.translator.trans("fof-pages.admin.edit_page.html_label")))),m("div",{className:"Form-group"},y().component({type:"submit",className:"Button Button--primary EditPageModal-save",loading:this.loading},app.translator.trans("fof-pages.admin.edit_page.submit_button")),this.page.exists?m("button",{type:"button",className:"Button EditPageModal-delete",onclick:this.delete.bind(this)},app.translator.trans("fof-pages.admin.edit_page.delete_page_button")):"")))},a.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.page.save({title:this.pageTitle(),slug:this.slug(),content:this.pageContent(),isHidden:this.isHidden(),isRestricted:this.isRestricted(),isHtml:this.isHtml()},{errorHandler:this.onerror.bind(this)}).then(this.hideAndRefresh.bind(this)).catch((function(){e.loading=!1,m.redraw()}))},a.hideAndRefresh=function(){this.hide(),w()(app.route("extension",{id:"fof-pages"}))},a.delete=function(){var t=this;this.loading=!0,confirm(app.translator.trans("fof-pages.admin.edit_page.delete_page_confirmation"))&&this.page.delete().then(this.hideAndRefresh.bind(this)).catch((function(){t.loading=!1,m.redraw()}))},e}(P());const L=flarum.core.compat["common/Component"];var O=t.n(L);const A=flarum.core.compat["common/components/LoadingIndicator"];var M=t.n(A);const C=flarum.core.compat["common/components/Placeholder"];var T=t.n(C);const j=flarum.core.compat["admin/utils/saveSettings"];var S=t.n(j);const D=flarum.core.compat["common/helpers/listItems"];var E=t.n(D),I=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var a=e.prototype;return a.view=function(){var t=this.attrs.page,e=app.forum.attribute("baseUrl")+"/p/"+t.id()+"-"+t.slug(),a=t.badges().toArray();return m("tr",{key:t.id()},m("th",null,t.title(),a.length?m("ul",{className:"badges"},E()(t.badges().toArray())):null),m("td",{className:"Pages-actions"},m("div",{className:"ButtonGroup"},y().component({className:"Button Button--page-edit",icon:"fas fa-pencil-alt",onclick:function(){return app.modal.show(F,{page:t})}}),y().component({className:"Button Button--page-edit",icon:"fas fa-home",onclick:this.setAsHomePage.bind(this),disabled:app.data.settings.pages_home===t.id()&&"/pages/home"===app.data.settings.default_route}),y().component({className:"Button Button--page-view",icon:"fas fa-eye fa-sm",onclick:function(){return window.open(e,"_blank")}}),y().component({className:"Button Button--danger Button--page-delete",icon:"fas fa-times",onclick:this.delete.bind(this)}))))},a.setAsHomePage=function(){var t=this;if(app.alerts.dismiss(this.successAlert),confirm(app.translator.trans("fof-pages.admin.edit_page.set_as_home_page_confirmation"))){var e=this.attrs.page;S()({default_route:"/pages/home",pages_home:e.id()}).then((function(){app.alerts.show({type:"success"},app.translator.trans("fof-pages.admin.edit_page.set_as_home_page_done"))})).catch((function(){})).then((function(){t.loading=!1,m.redraw()}))}},a.delete=function(){confirm(app.translator.trans("fof-pages.admin.edit_page.delete_page_confirmation"))&&this.attrs.page.delete().then((function(){w()(app.route("extension",{id:"fof-pages"}))}))},e}(O()),z=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0,this.pages=[],this.page=0,this.loadLimit=20,this.refresh()},a.view=function(){if(this.loading)return m("div",{className:"PageList-loading"},M().component());if(0===this.pages.length){var t=app.translator.trans("fof-pages.admin.pages_list.empty_text");return T().component({text:t})}var e,a;return!0===this.nextResults&&(e=y().component({className:"Button Button--PageList-next",icon:"fas fa-angle-right",onclick:this.loadNext.bind(this)})),!0===this.prevResults&&(a=y().component({className:"Button Button--PageList-prev",icon:"fas fa-angle-left",onclick:this.loadPrev.bind(this)})),m("div",{className:"PageList"},m("table",{className:"PageList-results"},m("thead",null,m("tr",null,m("th",null,app.translator.trans("fof-pages.admin.pages_list.title")),m("th",null))),m("tbody",null,this.pages.map((function(t){return I.component({page:t})})))),m("div",{className:"PageList-pagination"},e,a))},a.refresh=function(t){return void 0===t&&(t=!0),t&&(this.loading=!0,this.pages=[]),this.loadResults().then(this.parseResults.bind(this))},a.loadResults=function(){var t=this.page*this.loadLimit;return app.store.find("pages",{page:{offset:t,limit:this.loadLimit},sort:"-time"})},a.loadNext=function(){!0===this.nextResults&&(this.page++,this.refresh())},a.loadPrev=function(){!0===this.prevResults&&(this.page--,this.refresh())},a.parseResults=function(t){return[].push.apply(this.pages,t),this.loading=!1,this.nextResults=!!t.payload.links.next,this.prevResults=!!t.payload.links.prev,m.redraw(),t},e}(O()),G=function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e.prototype.content=function(){return m("div",{className:"PagesPage"},m("div",{className:"PagesPage-header"},m("div",{className:"container"},y().component({className:"Button Button--primary",icon:"fas fa-plus",onclick:function(){return app.modal.show(F)}},app.translator.trans("fof-pages.admin.pages.create_button")))),m("div",{className:"PagesPage-list"},m("div",{className:"container"},z.component())))},e}(b());const U=flarum.core.compat["common/extend"],W=flarum.core.compat["admin/components/BasicsPage"];var q=t.n(W);app.initializers.add("fof-pages",(function(t){t.store.models.pages=h,t.extensionData.for("fof-pages").registerPage(G).registerPermission({icon:"fas fa-file-alt",label:t.translator.trans("fof-pages.admin.permissions.restricted"),permission:"fof-pages.viewRestricted"},"view"),(0,U.extend)(q().prototype,"homePageItems",(function(t){t.add("fof-pages",{path:"/pages/home",label:"FriendsOfFlarum Pages"})}))}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map