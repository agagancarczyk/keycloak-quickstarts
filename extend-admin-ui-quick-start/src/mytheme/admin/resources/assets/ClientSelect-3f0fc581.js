import{u as T,a as b,r as i,d as y,n as A,j as s,F as G,G as O,C as q}from"./index-a3421f29.js";import{S as E,a as L,b as x}from"./Select-0f56a9cc.js";const _=({name:a,label:n,helpText:f,defaultValue:h,namespace:c,isDisabled:S=!1,required:d=!1})=>{const{t:r}=T(c),{control:C,formState:{errors:j}}=b(),[v,u]=i.useState(!1),[p,I]=i.useState([]),[o,g]=i.useState(""),{adminClient:F}=y();A(()=>{const e={max:20};return o&&(e.clientId=o,e.search=!0),F.clients.find(e)},e=>I(e),[o]);const m=e=>[s.jsx(x,{value:"",children:r("common:none")},"empty"),...e.map(t=>s.jsx(x,{value:t.clientId},t.id))];return s.jsx(G,{label:r(n),isRequired:d,labelIcon:s.jsx(O,{helpText:r(f),fieldLabelId:`${c}:${n}`}),fieldId:a,validated:j[a]?"error":"default",helperTextInvalid:r("common:required"),children:s.jsx(q,{name:a,defaultValue:h||"",control:C,rules:d?{required:!0}:{},render:({field:e})=>s.jsx(E,{toggleId:a,variant:L.typeahead,onToggle:t=>u(t),isOpen:v,isDisabled:S,selections:e.value,onFilter:(t,l)=>(g(l),m(p)),onSelect:(t,l)=>{e.onChange(l.toString()),u(!1)},typeAheadAriaLabel:r(n),children:m(p)})})})};export{_ as C};
//# sourceMappingURL=ClientSelect-3f0fc581.js.map
