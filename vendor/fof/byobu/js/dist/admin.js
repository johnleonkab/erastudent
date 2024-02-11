(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var s in o)t.o(o,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const o=flarum.core.compat["admin/app"];var s=t.n(o);const i=flarum.core.compat["common/models/User"];var a=t.n(i);function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}const r=flarum.core.compat["admin/components/ExtensionPage"];var l=t.n(r);const p=flarum.core.compat["common/components/Badge"];var c=t.n(p);const f=flarum.core.compat["common/helpers/icon"];var u=t.n(f),b=function(t){var e,o;function i(){return t.apply(this,arguments)||this}o=t,(e=i).prototype=Object.create(o.prototype),e.prototype.constructor=e,n(e,o);var a=i.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.badgeDefault="fas fa-map",this.postActionDefault="far fa-map"},a.content=function(){var t=flarum.extensions["flarum-tags"]?s().translator.trans("flarum-tags.admin.edit_tag.icon_text",{a:m("a",{href:"https://fontawesome.com/icons?m=free",tabindex:"-1"})}):"";return[m("div",{className:"ByobuSettingsPage"},m("div",{className:"container"},m("div",{className:"Form"},m("div",{className:"Form-group"},this.buildSettingComponent({type:"string",setting:"fof-byobu.icon-badge",label:s().translator.trans("fof-byobu.admin.settings.badge-icon"),help:m("div",null,m(c(),{icon:this.setting("fof-byobu.icon-badge").toJSON()||this.badgeDefault})," ",t),placeholder:this.badgeDefault}),this.buildSettingComponent({type:"string",setting:"fof-byobu.icon-postAction",label:s().translator.trans("fof-byobu.admin.settings.post-event-icon"),help:m("div",null,u()(this.setting("fof-byobu.icon-postAction").toJSON()||this.postActionDefault)," ",t),placeholder:this.postActionDefault}),this.buildSettingComponent({type:"boolean",setting:"fof-byobu.makePublic",label:s().translator.trans("fof-byobu.admin.settings.enable-make-public-option"),help:s().translator.trans("fof-byobu.admin.settings.enable-make-public-option-help")}),this.buildSettingComponent({type:"boolean",setting:"fof-byobu.delete_on_last_recipient_left",label:s().translator.trans("fof-byobu.admin.settings.delete_on_last_recipient_left"),help:s().translator.trans("fof-byobu.admin.settings.delete_on_last_recipient_left_help")}),this.buildSettingComponent({type:"boolean",setting:"fof-byobu.hide_from_all_discussions_page",label:s().translator.trans("fof-byobu.admin.settings.hide_from_all_discussions_page"),help:s().translator.trans("fof-byobu.admin.settings.hide_from_all_discussions_page_help")})),m("div",{className:"Form-group"},this.submitButton()))))]},i}(l());s().initializers.add("fof-byobu",(function(){var t;s().store.models.recipients=a(),s().extensionData.for("fof-byobu").registerPage(b),(t=s().extensionData.for("fof-byobu")).registerPermission({icon:"far fa-map",label:s().translator.trans("fof-byobu.admin.permission.create_private_discussions_with_users"),permission:"discussion.startPrivateDiscussionWithUsers",tagScoped:!1},"start",95).registerPermission({icon:"far fa-map",label:s().translator.trans("fof-byobu.admin.permission.add_more_than_two_user_recipients"),permission:"discussion.addMoreThanTwoUserRecipients",tagScoped:!1},"start",95).registerPermission({icon:"far fa-map",label:s().translator.trans("fof-byobu.admin.permission.create_private_discussions_with_groups"),permission:"discussion.startPrivateDiscussionWithGroups",tagScoped:!1},"start",95).registerPermission({icon:"far fa-map",label:s().translator.trans("fof-byobu.admin.permission.create_private_discussions_with_blocking_users"),permission:"discussion.startPrivateDiscussionWithBlockers",tagScoped:!1},"start",95).registerPermission({icon:"far fa-map",label:s().translator.trans("fof-byobu.admin.permission.edit_user_recipients"),permission:"discussion.editUserRecipients",tagScoped:!1},"moderate",95).registerPermission({icon:"far fa-map",label:s().translator.trans("fof-byobu.admin.permission.edit_group_recipients"),permission:"discussion.editGroupRecipients",tagScoped:!1},"moderate",95).registerPermission({icon:"fas fa-flag",label:s().translator.trans("fof-byobu.admin.permission.view_private_discussions-when-flagged"),permission:"user.viewPrivateDiscussionsWhenFlagged",tagScoped:!1},"moderate",95),s().data.settings["fof-byobu.makePublic"]&&t.registerPermission({icon:"far fa-map",label:s().translator.trans("fof-byobu.admin.permission.make_private_into_public"),permission:"discussion.makePublic",tagScoped:!1},"reply",95)}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map