import{u as y,b as F,d as C,c as b,f as v,r as A,e as w,j as t,P as S,g as T,F as k,B as c,L as E,al as I,q as V,a0 as P,a1 as K,s as L,A as O,ab as H}from"./index-a3421f29.js";import{F as R}from"./FormAccess-1cceaef6.js";import{F as U}from"./FileUploadForm-96efeae2.js";import{K as $}from"./KeycloakTextInput-e7f6e917.js";import{V as z}from"./ViewHeader-832ec56e.js";import{C as B,a as G}from"./ClientDescription-be494204.js";import{L as N}from"./CodeEditor-2fb93648.js";import{A as q}from"./Form-518a2cf2.js";import"./copy-icon-a4fe01af.js";import"./GridItem-d34dae2e.js";import"./FileUpload-ca37c1a6.js";import"./Modal-21c37af7.js";import"./Text-564bf299.js";import"./ToolbarContent-7b435752.js";import"./Checkbox-d00621d8.js";import"./check-fc57dbe1.js";import"./EmptyStateBody-7b4fcee1.js";import"./EmptyStateSecondaryActions-08edafb5.js";const D=s=>s.match(/(<.[^(><.)]+>)/g);function mt(){const{t:s}=y("clients"),l=F(),{adminClient:a}=C(),{realm:o}=b(),i=v(),{register:m,handleSubmit:p,setValue:d}=i,[u,h]=A.useState({}),{addAlert:x,addError:n}=w(),g=async r=>{try{const e=await f(r);V(e,d),h(e)}catch(e){n("clients:importParseError",e)}};async function f(r){if(!D(r))return JSON.parse(r);const e=await fetch(`${P(a.baseUrl)}admin/realms/${o}/client-description-converter`,{method:"POST",body:r,headers:K(await a.getAccessToken())});if(!e.ok)throw new Error(`Server responded with invalid status: ${e.statusText}`);return e.json()}const j=async r=>{try{const e=await a.clients.create({...u,...L({...r,attributes:r.attributes||{}})});x(s("clientImportSuccess"),O.success),l(H({realm:o,clientId:e.id,tab:"settings"}))}catch(e){n("clients:clientImportError",e)}};return t.jsxs(t.Fragment,{children:[t.jsx(z,{titleKey:"clients:importClient",subKey:"clients:clientsExplain"}),t.jsx(S,{variant:"light",children:t.jsx(R,{isHorizontal:!0,onSubmit:p(j),role:"manage-clients",children:t.jsxs(T,{...i,children:[t.jsx(U,{id:"realm-file",language:N.json,extension:".json,.xml",helpText:s("common-help:helpFileUploadClient"),onChange:g}),t.jsx(B,{hasConfigureAccess:!0}),t.jsx(k,{label:s("common:type"),fieldId:"kc-type",children:t.jsx($,{id:"kc-type",isReadOnly:!0,...m("protocol")})}),t.jsx(G,{unWrap:!0}),t.jsxs(q,{children:[t.jsx(c,{variant:"primary",type:"submit",children:s("common:save")}),t.jsx(c,{variant:"link",component:r=>t.jsx(E,{...r,to:I({realm:o})}),children:s("common:cancel")})]})]})})})]})}export{mt as default};
//# sourceMappingURL=ImportForm-b73e5ddf.js.map
