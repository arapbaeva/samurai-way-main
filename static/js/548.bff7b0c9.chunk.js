"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[548],{2589:function(e,n,r){r.d(n,{C:function(){return s},D:function(){return t}});var s=function(e){if(!e)return"Field is required"},t=function(e){return function(n){if(n.length>e)return"Max length is ".concat(e," symbols")}}},3787:function(e,n,r){r.d(n,{II:function(){return u},Kx:function(){return o}});var s=r(1413),t=r(7351),a=r(184),i=function(e){var n=e.meta.touched&&e.meta.error;return(0,a.jsxs)("div",{className:t.Z.formControl+" "+(n?t.Z.error:""),children:[(0,a.jsx)("div",{children:(0,a.jsx)(e.element,(0,s.Z)((0,s.Z)({},e.input),e))}),n&&(0,a.jsx)("span",{children:e.meta.error})]})},o=function(e){return(0,a.jsx)(i,(0,s.Z)((0,s.Z)({},e),{},{element:"textarea"}))},u=function(e){return(0,a.jsx)(i,(0,s.Z)((0,s.Z)({},e),{},{element:"input"}))}},5548:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});r(2791);var s=r(1087),t=r(184),a=function(e){var n=e.name,r="/dialogs/"+e.id;return(0,t.jsx)("div",{children:(0,t.jsx)(s.rU,{to:r,children:n})})},i={dialogs:"Dialogs_dialogs__W7IBH",dialogItem:"Dialogs_dialogItem__09FN2",message:"Dialogs_message__w0gyr",messageBlock:"Dialogs_messageBlock__o5xMY"},o=function(e){e.id;var n=e.message;return(0,t.jsx)("div",{children:n})},u=r(6139),l=r(704),c=r(3787),d=r(2589),m=(0,d.D)(50),f=(0,l.Z)({form:"addMessage"})((function(e){return(0,t.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,t.jsx)(u.Z,{component:c.Kx,name:"newMessageBody",label:"Print message here",placeholder:"Placeholder",validate:[d.C,m]}),(0,t.jsx)("div",{className:i.messageButton,children:(0,t.jsx)("button",{children:"send message"})})]})})),g=r(5685),h=r(7781),x=r(2177),j=r(5571),v=(0,h.qC)((0,x.$j)((function(e){return{message:e.dialogsReducer.newMessageText,messages:e.dialogsReducer.messages,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(n){e((0,g.C)(n))}}})),j.e)((function(e){var n=e.messages.map((function(e,n){return(0,t.jsx)("div",{children:(0,t.jsx)(o,{id:e.id,message:e.message})},n)}));return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:i.message,children:n}),(0,t.jsx)("div",{className:i.messageBlock,children:(0,t.jsx)("div",{className:i.messageInput,children:(0,t.jsx)(f,{onSubmit:function(n){e.addMessage(n.newMessageBody)}})})})]})})),_=r(3743),p=function(){var e=_.h.getState().dialogsReducer.dialogsData.map((function(e){return(0,t.jsx)(a,{name:e.name,id:e.id},e.id)}));return(0,t.jsxs)("div",{className:i.dialogs,children:[(0,t.jsx)("div",{className:i.dialogItem,children:e}),(0,t.jsx)(v,{})]})}},5571:function(e,n,r){r.d(n,{e:function(){return c}});var s=r(1413),t=r(3366);r(2791);var a=r(7689),i=r(2177),o=r(184),u=["isAuth"],l=function(e){return{isAuth:e.auth.isAuth}};function c(e){return(0,i.$j)(l,{})((function(n){var r=n.isAuth,i=function(e,n){if(null==e)return{};var r,s,a=(0,t.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(n,u);return r?(0,o.jsx)(e,(0,s.Z)({},i)):(0,o.jsx)(a.Fg,{replace:!0,to:"/login"})}))}},7351:function(e,n){n.Z={formControl:"FormControls_formControl__3zalB",error:"FormControls_error__zx6fp",formSummaryError:"FormControls_formSummaryError__Y07zz"}}}]);
//# sourceMappingURL=548.bff7b0c9.chunk.js.map