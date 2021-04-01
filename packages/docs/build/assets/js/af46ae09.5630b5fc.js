(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{1348:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),o=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=o(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=o(a),u=r,m=l["".concat(b,".").concat(u)]||l[u]||s[u]||c;return a?n.a.createElement(m,i(i({ref:t},d),{},{components:a})):n.a.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var d=2;d<c;d++)b[d]=a[d];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},931:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),c=(a(0),a(1348)),b={id:"redux_party_actions",title:"Module: redux/party/actions",sidebar_label:"redux/party/actions",custom_edit_url:null,hide_title:!0},i={unversionedId:"docs-client/modules/redux_party_actions",id:"docs-client/modules/redux_party_actions",isDocsHomePage:!1,title:"Module: redux/party/actions",description:"Module: redux/party/actions",source:"@site/docs/docs-client/modules/redux_party_actions.md",slug:"/docs-client/modules/redux_party_actions",permalink:"/build/docs/docs-client/modules/redux_party_actions",editUrl:null,version:"current",sidebar_label:"redux/party/actions",sidebar:"sidebar",previous:{title:"Module: redux/mediastream/service",permalink:"/build/docs/docs-client/modules/redux_mediastream_service"},next:{title:"Module: redux/party/reducers",permalink:"/build/docs/docs-client/modules/redux_party_reducers"}},p=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Interfaces",id:"interfaces",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"PartyAction",id:"partyaction",children:[]},{value:"PartyUserAction",id:"partyuseraction",children:[]}]},{value:"Functions",id:"functions",children:[{value:"createdParty",id:"createdparty",children:[]},{value:"createdPartyUser",id:"createdpartyuser",children:[]},{value:"invitedPartyUser",id:"invitedpartyuser",children:[]},{value:"leftParty",id:"leftparty",children:[]},{value:"loadedParty",id:"loadedparty",children:[]},{value:"patchedParty",id:"patchedparty",children:[]},{value:"patchedPartyUser",id:"patchedpartyuser",children:[]},{value:"removedParty",id:"removedparty",children:[]},{value:"removedPartyUser",id:"removedpartyuser",children:[]}]}],d={toc:p};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"module-reduxpartyactions"},"Module: redux/party/actions"),Object(c.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.createdpartyaction"},"CreatedPartyAction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.createdpartyuseraction"},"CreatedPartyUserAction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.invitedpartyuseraction"},"InvitedPartyUserAction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.leftpartyaction"},"LeftPartyAction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.loadedpartyaction"},"LoadedPartyAction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.loadedpartyusersaction"},"LoadedPartyUsersAction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.loadedselfpartyuseraction"},"LoadedSelfPartyUserAction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.patchedpartyaction"},"PatchedPartyAction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.patchedpartyuseraction"},"PatchedPartyUserAction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.removedpartyaction"},"RemovedPartyAction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_party_actions.removedpartyuseraction"},"RemovedPartyUserAction"))),Object(c.b)("h2",{id:"type-aliases"},"Type aliases"),Object(c.b)("h3",{id:"partyaction"},"PartyAction"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"PartyAction"),": ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.loadedpartyaction"},Object(c.b)("em",{parentName:"a"},"LoadedPartyAction"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.createdpartyaction"},Object(c.b)("em",{parentName:"a"},"CreatedPartyAction"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.patchedpartyaction"},Object(c.b)("em",{parentName:"a"},"PatchedPartyAction"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.removedpartyaction"},Object(c.b)("em",{parentName:"a"},"RemovedPartyAction"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.leftpartyaction"},Object(c.b)("em",{parentName:"a"},"LeftPartyAction"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.createdpartyuseraction"},Object(c.b)("em",{parentName:"a"},"CreatedPartyUserAction"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.patchedpartyuseraction"},Object(c.b)("em",{parentName:"a"},"PatchedPartyUserAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L60"},"packages/client-core/redux/party/actions.ts:60")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"partyuseraction"},"PartyUserAction"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"PartyUserAction"),": ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.loadedpartyusersaction"},Object(c.b)("em",{parentName:"a"},"LoadedPartyUsersAction"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.removedpartyuseraction"},Object(c.b)("em",{parentName:"a"},"RemovedPartyUserAction"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.loadedselfpartyuseraction"},Object(c.b)("em",{parentName:"a"},"LoadedSelfPartyUserAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L127"},"packages/client-core/redux/party/actions.ts:127")),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"createdparty"},"createdParty"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createdParty"),"(",Object(c.b)("inlineCode",{parentName:"p"},"party"),": Party): ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.createdpartyaction"},Object(c.b)("em",{parentName:"a"},"CreatedPartyAction"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"party")),Object(c.b)("td",{parentName:"tr",align:"left"},"Party")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.createdpartyaction"},Object(c.b)("em",{parentName:"a"},"CreatedPartyAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L76"},"packages/client-core/redux/party/actions.ts:76")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createdpartyuser"},"createdPartyUser"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createdPartyUser"),"(",Object(c.b)("inlineCode",{parentName:"p"},"partyUser"),": PartyUser): ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.createdpartyuseraction"},Object(c.b)("em",{parentName:"a"},"CreatedPartyUserAction"))),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"partyUser")),Object(c.b)("td",{parentName:"tr",align:"left"},"PartyUser")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.createdpartyuseraction"},Object(c.b)("em",{parentName:"a"},"CreatedPartyUserAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L133"},"packages/client-core/redux/party/actions.ts:133")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"invitedpartyuser"},"invitedPartyUser"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"invitedPartyUser"),"(): ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.invitedpartyuseraction"},Object(c.b)("em",{parentName:"a"},"InvitedPartyUserAction"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.invitedpartyuseraction"},Object(c.b)("em",{parentName:"a"},"InvitedPartyUserAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L97"},"packages/client-core/redux/party/actions.ts:97")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"leftparty"},"leftParty"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"leftParty"),"(): ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.leftpartyaction"},Object(c.b)("em",{parentName:"a"},"LeftPartyAction"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.leftpartyaction"},Object(c.b)("em",{parentName:"a"},"LeftPartyAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L103"},"packages/client-core/redux/party/actions.ts:103")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadedparty"},"loadedParty"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadedParty"),"(",Object(c.b)("inlineCode",{parentName:"p"},"partyResult"),": PartyResult): ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/modules/redux_party_actions#partyaction"},Object(c.b)("em",{parentName:"a"},"PartyAction"))),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"partyResult")),Object(c.b)("td",{parentName:"tr",align:"left"},"PartyResult")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/modules/redux_party_actions#partyaction"},Object(c.b)("em",{parentName:"a"},"PartyAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L69"},"packages/client-core/redux/party/actions.ts:69")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"patchedparty"},"patchedParty"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"patchedParty"),"(",Object(c.b)("inlineCode",{parentName:"p"},"party"),": Party): ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.patchedpartyaction"},Object(c.b)("em",{parentName:"a"},"PatchedPartyAction"))),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"party")),Object(c.b)("td",{parentName:"tr",align:"left"},"Party")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.patchedpartyaction"},Object(c.b)("em",{parentName:"a"},"PatchedPartyAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L83"},"packages/client-core/redux/party/actions.ts:83")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"patchedpartyuser"},"patchedPartyUser"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"patchedPartyUser"),"(",Object(c.b)("inlineCode",{parentName:"p"},"partyUser"),": PartyUser): ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.patchedpartyuseraction"},Object(c.b)("em",{parentName:"a"},"PatchedPartyUserAction"))),Object(c.b)("h4",{id:"parameters-4"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"partyUser")),Object(c.b)("td",{parentName:"tr",align:"left"},"PartyUser")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.patchedpartyuseraction"},Object(c.b)("em",{parentName:"a"},"PatchedPartyUserAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L140"},"packages/client-core/redux/party/actions.ts:140")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"removedparty"},"removedParty"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"removedParty"),"(",Object(c.b)("inlineCode",{parentName:"p"},"party"),": Party): ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.removedpartyaction"},Object(c.b)("em",{parentName:"a"},"RemovedPartyAction"))),Object(c.b)("h4",{id:"parameters-5"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"party")),Object(c.b)("td",{parentName:"tr",align:"left"},"Party")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.removedpartyaction"},Object(c.b)("em",{parentName:"a"},"RemovedPartyAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L90"},"packages/client-core/redux/party/actions.ts:90")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"removedpartyuser"},"removedPartyUser"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"removedPartyUser"),"(",Object(c.b)("inlineCode",{parentName:"p"},"partyUser"),": PartyUser): ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.removedpartyuseraction"},Object(c.b)("em",{parentName:"a"},"RemovedPartyUserAction"))),Object(c.b)("h4",{id:"parameters-6"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"partyUser")),Object(c.b)("td",{parentName:"tr",align:"left"},"PartyUser")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_party_actions.removedpartyuseraction"},Object(c.b)("em",{parentName:"a"},"RemovedPartyUserAction"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/party/actions.ts#L147"},"packages/client-core/redux/party/actions.ts:147")))}o.isMDXComponent=!0}}]);