(()=>{var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e),t.d(e,{discussions:()=>Ht,extend:()=>ce,modals:()=>Ft});const n=flarum.core.compat["forum/app"];var o=t.n(n);const r=flarum.core.compat["common/extend"],s=flarum.core.compat["forum/components/SettingsPage"];var i=t.n(s);const a=flarum.core.compat["common/components/Switch"];var c=t.n(a);const u=flarum.core.compat["common/components/Badge"];var l=t.n(u);const p=flarum.core.compat["common/models/Discussion"];var f=t.n(p);const d=flarum.core.compat["common/models/User"];var h=t.n(d);const b=flarum.core.compat["common/models/Group"];var v=t.n(b);const y=flarum.core.compat["common/components/Button"];var g=t.n(y);const _=flarum.core.compat["forum/components/DiscussionListItem"];var P=t.n(_);const w=flarum.core.compat["forum/components/DiscussionHero"];var R=t.n(w);const S=flarum.core.compat["forum/states/DiscussionListState"];var D=t.n(S);function x(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}const k=flarum.core.compat["common/utils/classList"];var N=t.n(k);function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function A(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,U(t,e)}const I=flarum.core.compat["common/helpers/username"];var C=t.n(I);const M=flarum.core.compat["common/components/LinkButton"];var L=t.n(M);const j=flarum.core.compat["common/Component"];var O=["recipient","link"],G=function(t){function e(){return t.apply(this,arguments)||this}return A(e,t),e.prototype.view=function(t){var e,n=this.attrs,r=n.recipient,s=n.link,i=x(n,O);if(i.style=i.style||{},i.className=N()("RecipientLabel",null==i?void 0:i.className),s&&r instanceof h()&&(i.href=o().route.user(r)),r instanceof h()){var a,c;e=C()(r),i.href||r.id()===(null==o()||null==(a=o().session)||null==(c=a.user)?void 0:c.id())||(i.href=o().route.user(r))}else{if(r instanceof v())return m("span",{class:i.className},r.namePlural());i.className+=" none",e=o().translator.trans("core.lib.username.deleted_text")}return m(L(),i,e)},e}(t.n(j)()),T=["link","className"];function B(t,e){void 0===e&&(e={});var n=e,o=n.link,r=n.className,s=x(n,T);return s.className=N()("RecipientsLabel",r),m("span",s,null==t?void 0:t.map((function(t,e){var n=t instanceof h()?"u":"g";return m(G,{key:n+"-"+e,recipient:t,link:o})})),!t&&m(G,null))}const q=flarum.core.compat["forum/utils/DiscussionControls"];var E=t.n(q);const V=flarum.core.compat["common/utils/ItemList"];var K=t.n(V);const F=flarum.core.compat["common/components/Modal"];var W=t.n(F);const z=flarum.core.compat["forum/components/DiscussionPage"];var H=t.n(z);const J=flarum.core.compat["common/utils/Stream"];var Q=t.n(J);const X=flarum.core.compat["forum/states/SearchState"];var Y=t.n(X);const Z=flarum.core.compat["forum/components/Search"];var tt=t.n(Z);function et(){return et=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},et.apply(this,arguments)}const nt=flarum.core.compat["common/helpers/highlight"];var ot=t.n(nt);const rt=flarum.core.compat["common/helpers/avatar"];var st=t.n(rt),it=function(){function t(){}var e=t.prototype;return e.view=function(t){var e=this;if(!(t.length<3||this.loading)){if(o().cache.byobuResults||(o().cache.byobuResults=[]),this.query=t,o().cache.byobuResults[this.query])return[m("li",{className:"Dropdown-header"},o().translator.trans("core.forum.search.users_heading")),o().cache.byobuResults[this.query].map((function(t){var n=C()(t),o=[ot()(n.text,e.query)];return m("li",{className:"SearchResult","data-index":"users:"+t.id()},m("a",{"data-index":"users:"+t.id()},st()(t),et({},n,{text:void 0,children:o})))}))];this.loading=!0,o().cache.byobuResults[this.query]=[],o().store.find("users",{filter:{q:this.query+" allows-pd"},page:{limit:5}}).then(this.pushResults.bind(this))}},e.pushResults=function(t){var e=this;t.payload.data.map((function(t){var n=o().store.getById("users",t.id);o().cache.byobuResults[e.query].push(n)})),this.loading=!1,m.redraw()},t}(),at=function(){function t(){}var e=t.prototype;return e.search=function(t){return o().store.find("groups",{filter:{q:t},page:{limit:5}})},e.view=function(t){t=t.toLowerCase();var e=o().store.all("groups").filter((function(e){return e.namePlural().toLowerCase().substr(0,t.length)===t}));return e.length?[m("li",{className:"Dropdown-header"},o().translator.trans("fof-byobu.forum.search.headings.groups")),e.map((function(e){var n=e.namePlural(),o=ot()(n,t);return m("li",{className:"SearchResult","data-index":"groups:"+e.id()},m("a",{"data-index":"groups:"+e.id()},m("span",{class:"groupName"},o)))}))]:""},t}();const ct=flarum.core.compat["common/utils/extractText"];var ut=t.n(ct);const lt=flarum.core.compat["common/components/LoadingIndicator"];var pt=t.n(lt);const ft=flarum.core.compat["common/components/Tooltip"];var mt=t.n(ft),dt=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).inputUuid=void 0,e}A(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.inputUuid=Math.random().toString(36).substring(2)},n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e);var o=this;this.$(".Search-results").on("click",(function(t){var e=n.$(".SearchResult.active");o.addRecipient(e.data("index")),o.$(".RecipientsInput").focus()})),this.$(".Search-results").on("touchstart",(function(t){var e=n.$(t.target.parentNode);o.addRecipient(e.data("index")),o.$(".RecipientsInput").focus()})),$(".RecipientsInput").on("input",(function(){clearTimeout(n.typingTimer),n.doSearch=!1,n.typingTimer=setTimeout((function(){n.doSearch=!0,m.redraw()}),900)})).on("keydown",(function(){clearTimeout(n.typingTimer)})),t.prototype.oncreate.call(this,e)},n.view=function(){var t=this;void 0===this.searchState.getValue()&&this.searchState.setValue("");var e=this.searchState.getValue()&&this.searchState.getValue().length>=3;return this.sources||(this.sources=this.sourceItems().toArray()),m("div",{role:"search",className:"Search"},m("div",{className:"RecipientsInput-selected RecipientsLabel","aria-live":"polite"},m("h4",null,o().translator.trans("fof-byobu.forum.modal.labels.selected_users")),m("p",null,o().translator.trans("fof-byobu.forum.modal.help.selected_users")),this.attrs.selected().toArray().map((function(e){return m(mt(),{text:o().translator.trans("fof-byobu.forum.modal.help.click_user_to_remove_tooltip")},m(G,{"data-container":"[data-modal-number]",recipient:e,onclick:function(n){return t.removeRecipient(e,n)}}))}))),m("div",{className:"Form-group"},m("label",{for:"byobu-addrecipient-search-input-"+this.inputUuid},o().translator.trans("fof-byobu.forum.modal.labels.search_field")),m("div",{className:"AddRecipientModal-form-input Search-input"},m("input",{id:"byobu-addrecipient-search-input-"+this.inputUuid,className:N()("RecipientsInput","FormControl",{open:!!this.searchState.getValue(),focused:!!this.searchState.getValue(),active:!!this.searchState.getValue(),loading:!!this.loadingSources}),oncreate:function(t){return t.dom.focus()},type:"search",placeholder:ut()(o().translator.trans("fof-byobu.forum.input.search_recipients")),value:this.searchState.getValue(),oninput:function(e){return t.searchState.setValue(e.target.value)},onfocus:function(){return t.hasFocus=!0},onblur:function(){return t.hasFocus=!1}}),m("ul",{className:N()("Dropdown-menu","Search-results","fade",{in:!!e})},this.doSearch?this.sources.map((function(e){return e.view(t.searchState.getValue())})):pt().component({size:"tiny",className:"Button Button--icon Button--link"})))))},n.sourceItems=function(){var t=new(K());return(!this.attrs.discussion&&o().forum.attribute("canStartPrivateDiscussionWithUsers")||this.attrs.discussion&&this.attrs.discussion.canEditUserRecipients())&&t.add("users",new it),(!this.attrs.discussion&&o().forum.attribute("canStartPrivateDiscussionWithGroups")||this.attrs.discussion&&this.attrs.discussion.canEditGroupRecipients())&&t.add("groups",new at),t},n.addRecipient=function(t){var e=this,n=t.split(":"),r=n[0],s=n[1],i=this.findRecipient(r,s);"users"!==r||o().forum.attribute("canAddMoreThanTwoUserRecipients")||this.attrs.selected().toArray().forEach((function(t){var n;t instanceof h()&&t.id()!==(null==(n=o().session.user)?void 0:n.id())&&e.attrs.selected().remove("users:"+t.id())})),this.attrs.selected().add(t,i),this.searchState.clear()},n.removeRecipient=function(t,e){var n;e.preventDefault(),t instanceof h()&&(n="users"),t instanceof v()&&(n="groups"),this.attrs.selected().remove(n+":"+t.id())},n.findRecipient=function(t,e){return o().store.getById(t,e)},e}(tt()),ht=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.selected=Q()(new(K())),this.attrs.discussion?this.assignInitialRecipients(this.attrs.discussion):this.attrs.selectedRecipients&&this.attrs.selectedRecipients.toArray().length>0?this.selected().merge(this.attrs.selectedRecipients):this.selected().add("users:"+o().session.user.id(),o().session.user),this.recipientSearch=new(Y())},n.isDismissible=function(){return!1},n.assignInitialRecipients=function(t){var e=this;t.recipientUsers().map((function(t){e.selected().add("users:"+t.id(),t)})),t.recipientGroups().map((function(t){e.selected().add("groups:"+t.id(),t)}))},n.className=function(){return"AddRecipientModal"},n.title=function(){return this.attrs.discussion?o().translator.trans("fof-byobu.forum.modal.titles.update_recipients",{title:m("em",null,this.attrs.discussion.title())}):o().translator.trans("fof-byobu.forum.modal.titles.add_recipients")},n.helpText=function(){return this.attrs.discussion?o().translator.trans("fof-byobu.forum.modal.help.update_recipients"):o().translator.trans("fof-byobu.forum.modal.help.add_recipients")},n.content=function(){return[m("div",{className:"Modal-body"},m("div",{class:"AddRecipientModal-help"},this.helpText()),m("div",{className:"AddRecipientModal-form"},dt.component({state:this.recipientSearch,selected:this.selected,discussion:this.attrs.discussion}),m("div",{className:"AddRecipientModal-form-submit App-primaryControl"},g().component({type:"submit",className:"Button Button--primary",icon:"fas fa-check"},o().translator.trans("fof-byobu.forum.buttons.submit")),g().component({onclick:this.hide.bind(this),className:"Button Button--cancel"},o().translator.trans("fof-byobu.forum.buttons.cancel")))))]},n.select=function(t){(t.metaKey||t.ctrlKey||-1!==this.selected.indexOf(this.index))&&this.selected().length&&this.$("form").submit()},n.onsubmit=function(t){t.preventDefault();var e=this.attrs.discussion,n=this.selected(),r=[],s=[];n.toArray().forEach((function(t){t instanceof h()&&s.push(t),t instanceof v()&&r.push(t)})),e&&e.save({relationships:{recipientUsers:s,recipientGroups:r}}).then((function(){o().current instanceof H()&&o().current.stream.update(),m.redraw()})),this.attrs.onsubmit&&this.attrs.onsubmit(n),o().modal.close(),this.attrs.discussion||o().composer.show(),t.redraw=!1},e}(W());const bt=flarum.core.compat["tags/components/TagDiscussionModal"];var vt=function(t){function e(){return t.apply(this,arguments)||this}return A(e,t),e.prototype.onsubmit=function(t){t.preventDefault();var e=this.selected;this.attrs.resolve&&this.attrs.resolve(e),this.hide()},e}(t.n(bt)());vt.isDismissible=!1;const yt=flarum.core.compat["components/DiscussionPage"];var gt=t.n(yt);var _t=function(t,e,n){var o=[];t.recipientUsers().length&&(o=o.concat(t.recipientUsers())),t.recipientGroups().length&&(o=o.concat(t.recipientGroups())),o&&o.length&&(n?e.add("recipients",B(o),10):e.add("recipients",B(o,{link:!0}),4))};const Pt=flarum.core.compat["forum/utils/UserControls"];var wt=t.n(Pt);const Rt=flarum.core.compat["forum/components/DiscussionComposer"];var St=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this)._isByobuComposer=!0,e}A(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.titlePlaceholder=o().translator.trans("fof-byobu.forum.composer_private_discussion.title_placeholder"),e.submitLabel=o().translator.trans("fof-byobu.forum.composer_private_discussion.submit_button")};var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.composer.fields.recipients=this.attrs.recipients||new(K()),this.composer.fields.recipientUsers=this.attrs.recipientUsers||[],this.composer.fields.recipientGroups=this.attrs.recipientGroups||[];var n=m.route.param("username");void 0!==n&&this.addDefaultRecipients(n)},n.data=function(){var e=t.prototype.data.call(this),n=[],o=[];return void 0!==this.composer.fields.recipients&&this.composer.fields.recipients.toArray().forEach((function(t){t instanceof h()&&n.push(t),t instanceof v()&&o.push(t)})),e.relationships=e.relationships||{},n.length&&(e.relationships.recipientUsers=n),o.length&&(e.relationships.recipientGroups=o),delete e.relationships.tags,e},n.chooseRecipients=function(){var t=this;o().modal.show(ht,{selectedRecipients:this.composer.fields.recipients,onsubmit:function(e){t.composer.fields.recipients=e,t.$(".RecipientsInput").focus()}})},n.headerItems=function(){var e=t.prototype.headerItems.call(this);if(e.remove("tags"),o().session.user&&o().forum.attribute("canStartPrivateDiscussion")){var n=this.composer.fields.recipients.toArray();e.add("recipients",m("a",{className:"PrivateDiscussionComposer-changeRecipients",onclick:this.chooseRecipients.bind(this)},n.length?function(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="RecipientLabel "+(e.className||"");var n=o().translator.trans("fof-byobu.forum.labels.recipients",{count:t});return m("span",e,m("span",{className:"RecipientLabel-text"},n))}(n.length):m("span",{className:"RecipientLabel none"},o().translator.trans("fof-byobu.forum.buttons.add_recipients"))),5)}return e},n.addDefaultRecipients=function(t){var e=o().store.getBy("users","slug",t);this.composer.fields.recipients.add("users:"+o().session.user.id(),o().session.user),e.id()!==o().session.user.id()&&this.composer.fields.recipients.add("users:"+e.id(),e)},n.onsubmit=function(){if(this.loading=!0,this.composer.fields.recipients.toArray().length<2)this.chooseRecipients(),this.loading=!1;else{var t=this.data();o().store.createRecord("discussions").save(t).then((function(t){o().cache.discussionList&&o().cache.discussionList.refresh(),m.route.set(o().route.discussion(t)),o().composer.hide()}),this.loaded.bind(this))}},e}(t.n(Rt)());const Dt=flarum.core.compat["forum/components/UserPage"];var xt=t.n(Dt);function kt(t){return o().session.user&&o().session.user.id()!==t.id()&&o().forum.attribute("canStartPrivateDiscussion")&&(!t.blocksPd()||o().forum.attribute("canStartPrivateDiscussionWithBlockers"))}const Nt=flarum.core.compat["forum/components/IndexPage"];var Ut=t.n(Nt);function At(t){return At="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},At(t)}function It(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(r=o.key,s=void 0,s=function(t,e){if("object"!==At(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!==At(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r,"string"),"symbol"===At(s)?s:String(s)),o)}var r,s}const Ct=flarum.core.compat["forum/components/LogInModal"];var Mt=t.n(Ct),Lt=function(){function t(t){this.recipient=t}var e,n,r=t.prototype;return r.action=function(t){var e=this;return t.preventDefault(),new Promise((function(t,n){if(o().session.user){var r=new(K());return r.add("users:"+o().session.user.id(),o().session.user),e.recipient&&o().session.user.id()!==e.recipient.id()&&r.add("users:"+e.recipient.id(),e.recipient),o().composer.load(St,{user:o().session.user,recipients:r,recipientUsers:r}),o().composer.show(),t()}return o().modal.show(Mt()),n()}))},r.component=function(){return g().component({icon:"fas fa-pen",className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"App-primaryControl fof-byobu_primaryControl",onclick:this.action.bind(this),disabled:!this.canStartDiscussion},o().translator.trans(this.canStartDiscussion?"fof-byobu.forum.nav.start_button":"core.forum.index.cannot_start_discussion_button"))},e=t,(n=[{key:"canStartDiscussion",get:function(){return o().session.user&&o().forum.attribute("canStartPrivateDiscussion")}}])&&It(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const jt=flarum.core.compat["forum/components/NotificationGrid"];var Ot=t.n(jt);const Gt=flarum.core.compat["forum/components/Notification"];var Tt=t.n(Gt),Bt=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.icon=function(){return o().forum.attribute("byobu.icon-badge")},n.href=function(){var t=this.attrs.notification.subject();return o().route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return o().translator.trans("fof-byobu.forum.notifications.pd_text",{user:t})},n.excerpt=function(){return null},e}(Tt()),qt=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-reply"},n.href=function(){var t=this.attrs.notification,e=t.subject(),n=t.content()||{};return o().route.discussion(e,n.postNumber)},n.content=function(){var t=this.attrs.notification.fromUser();return o().translator.trans("fof-byobu.forum.notifications.pd_reply_text",{user:t})},n.excerpt=function(){return null},e}(Tt()),Et=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.icon=function(){return o().forum.attribute("byobu.icon-badge")},n.href=function(){var t=this.attrs.notification.subject();return o().route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return o().translator.trans("fof-byobu.forum.notifications.pd_user_left_text",{user:t})},n.excerpt=function(){return null},e}(Tt()),Vt=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.icon=function(){return o().forum.attribute("byobu.icon-badge")},n.href=function(){var t=this.attrs.notification.subject();return o().route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return o().translator.trans("fof-byobu.forum.notifications.pd_added_text",{user:t})},n.excerpt=function(){return null},e}(Tt());const $t=flarum.core.compat["components/Notification"];var Kt=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.icon=function(){return o().forum.attribute("byobu.icon-badge")},n.href=function(){var t=this.props.notification.subject();return o().route.discussion(t)},n.content=function(){var t=this.props.notification.fromUser();return o().translator.trans("fof-byobu.forum.notifications.pd_made_public_text",{user:t})},n.excerpt=function(){return null},e}(t.n($t)());var Ft={AddRecipientModal:ht};const Wt=flarum.core.compat["forum/components/DiscussionList"];var zt=function(t){function e(){return t.apply(this,arguments)||this}return A(e,t),e}(t.n(Wt)()),Ht={PrivateDiscussionComposer:St,PrivateDiscussionList:zt};const Jt=flarum.core.compat["common/extenders"];var Qt=t.n(Jt);const Xt=flarum.core.compat["forum/components/EventPost"];var Yt=t.n(Xt),Zt=function(t){function e(){return t.apply(this,arguments)||this}A(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e)};var n=e.prototype;return n.icon=function(){return o().forum.attribute("byobu.icon-postAction")},n.descriptionKey=function(){return"fof-byobu.forum.post.recipients_modified.made_public"},e}(Yt()),te=function(t){function e(){return t.apply(this,arguments)||this}A(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e)};var n=e.prototype;return n.icon=function(){return o().forum.attribute("byobu.icon-postAction")},n.descriptionKey=function(){return"fof-byobu.forum.post.recipients_modified.removed_self"},e}(Yt()),ee=function(t){function e(){return t.apply(this,arguments)||this}A(e,t),e.initAttrs=function(e){function n(t,e,n){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return o().store.getById(n,t)}))}t.initAttrs.call(this,e);var r=e.post.content();if(r.new||2!=r.length){var s=n(r.new.users,r.old.users,"users"),i=n(r.old.users,r.new.users,"users"),a=n(r.new.groups,r.old.groups,"groups"),c=n(r.old.groups,r.new.groups,"groups");e.added=s.concat(a),e.removed=i.concat(c)}else{var u=e.post.content()[0],l=e.post.content()[1];e.added=n(l,u,"users"),e.removed=n(u,l,"users")}};var n=e.prototype;return n.icon=function(){return o().forum.attribute("byobu.icon-postAction")},n.descriptionKey=function(){var t="fof-byobu.forum.post.recipients_modified.";return this.attrs.added.length?this.attrs.removed.length?t+"added_and_removed":t+"added":t+"removed"},n.descriptionData=function(){var t={};return this.attrs.added.length&&(t.added=B(this.attrs.added,{link:!0})),this.attrs.removed.length&&(t.removed=B(this.attrs.removed,{link:!0})),t},e}(Yt()),ne=function(t){function e(){return t.apply(this,arguments)||this}return A(e,t),e}(D());const oe=flarum.core.compat["common/components/Dropdown"];var re=t.n(oe);const se=flarum.core.compat["common/helpers/listItems"];var ie=t.n(se),ae=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.changeSort("latest")},n.show=function(e){this.list=new ne({q:"byobu:"+e.slug()+" is:private",sort:this.sort}),this.list.refresh(),t.prototype.show.call(this,e)},n.handleChangeSort=function(t,e){e.preventDefault(),this.changeSort(t)},n.changeSort=function(t){this.sort=t,this.loadUser(m.route.param("username"))},n.content=function(){return m("div",{className:"DiscussionsUserPage"},m("div",{className:"DiscussionsUserPage-toolbar"},m("ul",{className:"DiscussionsUserPage-toolbar-action"},ie()(this.actionItems().toArray())),m("ul",{className:"DiscussionsUserPage-toolbar-view"},ie()(this.viewItems().toArray()))),m(zt,{state:this.list}))},n.actionItems=function(){var t=new Lt(this.user),e=new(K());return kt(this.user)&&e.add("start_private",t.component()),e},n.viewItems=function(){var t=this,e=new(K()),n=this.list.sortMap(),r={};for(var s in n)r[s]=o().translator.trans("core.forum.index_sort."+s+"_button");return e.add("sort",re().component({buttonClassName:"Button",label:r[this.sort]||Object.keys(n).map((function(t){return r[t]}))[0]},Object.keys(r).map((function(e){var o=r[e],s=(t.sort||Object.keys(n)[0])===e;return g().component({icon:!s||"fas fa-check",onclick:t.handleChangeSort.bind(t,e),active:s},o)})))),e},e}(xt());const ce=[(new(Qt().PostTypes)).add("recipientsModified",ee).add("recipientLeft",te).add("madePublic",Zt),(new(Qt().Routes)).add("byobuUserPrivate","/u/:username/private",ae).add("byobuPrivate","/private",Ut()),new(Qt().Model)(f()).hasMany("recipientUsers").hasMany("oldRecipientUsers").hasMany("recipientGroups").hasMany("oldRecipientGroups").attribute("canEditRecipients").attribute("canEditUserRecipients").attribute("canEditGroupRecipients").attribute("canMakePublic").attribute("isPrivateDiscussion"),new(Qt().Model)(h()).attribute("blocksPd").attribute("unreadPrivateMessagesCount")];o().initializers.add("fof-byobu",(function(){(0,r.extend)(f().prototype,"badges",(function(t){(this.recipientUsers().length||this.recipientGroups().length)&&t.add("private",l().component({type:"private",label:o().translator.trans("fof-byobu.forum.badges.is_private.tooltip"),icon:o().forum.data.attributes["byobu.icon-badge"]}),10)})),(0,r.extend)(P().prototype,"infoItems",(function(t){var e=this.attrs.discussion;_t(e,t,!0)})),(0,r.extend)(R().prototype,"items",(function(t){var e=this.attrs.discussion;_t(e,t,!1)})),(0,r.extend)(D().prototype,"requestParams",(function(t){t.include.push("recipientUsers"),t.include.push("recipientGroups")})),(0,r.extend)(E(),"moderationControls",(function(t,e){e.canEditRecipients()&&t.add("recipients",g().component({icon:o().forum.data.attributes["byobu.icon-badge"],onclick:function(){return o().modal.show(ht,{discussion:e,onsubmit:function(t){t.isEmpty()&&o().store.find("discussions",e.id(),{},{errorHandler:function(t){404===t.status&&m.route.set(o().route("byobuPrivate"))}}).catch((function(t){console.error(t)}))}})}},o().translator.trans("fof-byobu.forum.buttons.edit_recipients"))),e&&e.recipientUsers().find((function(t){var e;return(null==t?void 0:t.id())===(null==(e=o().session.user)?void 0:e.id())}))&&(t.add("remove",g().component({icon:"fas fa-user-slash",onclick:function(){if(e){var t=new(K());e.recipientUsers().map((function(e){o().session.user.id()!==e.id()&&t.add("users:"+e.id(),e)}));var n=[],r=[];t.toArray().forEach((function(t){t instanceof h()&&r.push(t),t instanceof v()&&n.push(t)})),e.save({relationships:{recipientUsers:r,recipientGroups:n}}).then((function(){return o().history.back()}))}}},o().translator.trans("fof-byobu.forum.buttons.remove_from_discussion"))),null!=e&&null!=e.isPrivateDiscussion&&e.isPrivateDiscussion()&&null!=e&&null!=e.canMakePublic&&e.canMakePublic()&&t.add("transform-public",m(g(),{icon:"far fa-eye",onclick:function(){if(e&&confirm(o().translator.trans("fof-byobu.forum.confirm.make_public"))){var t=[],n=[];flarum.extensions["flarum-tags"]?new Promise((function(t,n){o().modal.show(vt,{discussion:e,resolve:t,reject:n})})).then((function(r){e.save({relationships:{recipientUsers:n,recipientGroups:t},public:e.id()}).then((function(){e.save({relationships:{tags:r}}).then((function(){o().current.matches(gt())&&o().current.get("stream").update(),m.redraw()}))}))})):e.save({relationships:{recipientUsers:n,recipientGroups:t},public:e.id()}).then((function(){return m.redraw()}))}}},o().translator.trans("fof-byobu.forum.buttons.make_public"))))})),(0,r.extend)(i().prototype,"privacyItems",(function(t){var e=this;t.add("byobu-block-dm",c().component({state:this.user.blocksPd(),onchange:function(t){e.blocksPdLoading=!0,e.user.save({blocksPd:t}).then((function(){e.blocksPdLoading=!1,m.redraw()}))},loading:this.blocksPdLoading},o().translator.trans("fof-byobu.forum.user.settings.block_pd")))})),(0,r.extend)(wt(),"userControls",(function(t,e){return kt(e)&&t.add("private-discussion",g().component({icon:o().forum.attribute("byobu.icon-badge"),onclick:function(t){return t.preventDefault(),new Promise((function(t){var n=new(K());return n.add("users:"+o().session.user.id(),o().session.user),n.add("users:"+e.id(),e),St.prototype.recipients=n,o().composer.load(St,{user:o().session.user,recipients:n,recipientUsers:n,titlePlaceholder:o().translator.trans("fof-byobu.forum.composer_private_discussion.title_placeholder"),submitLabel:o().translator.trans("fof-byobu.forum.composer_private_discussion.submit_button")}),o().composer.show(),t(o().composer)}))}},o().translator.trans("fof-byobu.forum.buttons.send_pd",{username:e.displayName()}))),t})),(0,r.extend)(xt().prototype,"navItems",(function(t){var e=o().route("byobuUserPrivate",{username:this.user.slug()});(o().session.user||m.route.get()===e)&&o().session.user!==this.user&&t.add("byobu",L().component({href:e,icon:o().forum.attribute("byobu.icon-badge")},o().translator.trans("fof-byobu.forum.user.byobu_link")),85)})),(0,r.extend)(Ut().prototype,"navItems",(function(t){o().session.user&&t.add("privateDiscussions",L().component({icon:o().forum.data.attributes["byobu.icon-badge"],href:o().route("byobuPrivate")},o().translator.trans("fof-byobu.forum.nav.nav_item")),75)})),(0,r.extend)(Ut().prototype,"setTitle",(function(){"byobuPrivate"===o().current.get("routeName")&&o().setTitle(o().translator.trans("fof-byobu.forum.user.dropdown_label"))})),(0,r.extend)(D().prototype,"requestParams",(function(t){"byobuPrivate"===o().current.get("routeName")&&(t.filter.q=(t.filter.q||"")+" is:private",t.include.push("recipientUsers"),t.include.push("recipientGroups"))})),(0,r.extend)(Ut().prototype,"sidebarItems",(function(t){if("byobuPrivate"===o().current.get("routeName")){var e=new Lt;t.setContent("newDiscussion",e.component())}})),o().notificationComponents.byobuPrivateDiscussionCreated=Bt,o().notificationComponents.byobuPrivateDiscussionReplied=qt,o().notificationComponents.byobuRecipientRemoved=Et,o().notificationComponents.byobuPrivateDiscussionAdded=Vt,o().notificationComponents.byobuPrivateDiscussionMadePubic=Kt,(0,r.extend)(Ot().prototype,"notificationTypes",(function(t){t.add("byobuPrivateDiscussionCreated",{name:"byobuPrivateDiscussionCreated",icon:o().forum.data.attributes["byobu.icon-badge"],label:o().translator.trans("fof-byobu.forum.notifications.pd_label")}),t.add("byobuPrivateDiscussionReplied",{name:"byobuPrivateDiscussionReplied",icon:o().forum.data.attributes["byobu.icon-badge"],label:o().translator.trans("fof-byobu.forum.notifications.pd_reply_label")}),t.add("byobuPrivateDiscussionAdded",{name:"byobuPrivateDiscussionAdded",icon:o().forum.data.attributes["byobu.icon-badge"],label:o().translator.trans("fof-byobu.forum.notifications.pd_added_label")}),t.add("byobuRecipientRemoved",{name:"byobuRecipientRemoved",icon:o().forum.data.attributes["byobu.icon-badge"],label:o().translator.trans("fof-byobu.forum.notifications.pd_user_left_label")})}))}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map