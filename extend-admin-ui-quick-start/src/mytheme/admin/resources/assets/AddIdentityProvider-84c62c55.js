import{u as x,f as y,d as j,e as f,b as h,c as P,j as t,as as b,P as g,g as A,B as o,L as F,bK as S,A as E,bL as I}from"./index-a3421f29.js";import{F as C}from"./FormAccess-1cceaef6.js";import{V as G}from"./ViewHeader-832ec56e.js";import{u as L}from"./useParams-5abeab7d.js";import{G as V,E as k}from"./GeneralSettings-eaaddf99.js";import{A as w}from"./Form-518a2cf2.js";import"./copy-icon-a4fe01af.js";import"./GridItem-d34dae2e.js";import"./Text-564bf299.js";import"./ToolbarContent-7b435752.js";import"./KeycloakTextInput-e7f6e917.js";import"./DisplayOrder-43d5f15a.js";import"./ClientIdSecret-f71639f8.js";import"./PasswordInput-85f9399f.js";function W(){const{t:e}=x("identity-providers"),{providerId:r}=L(),i=y(),{handleSubmit:n,formState:{isDirty:d}}=i,{adminClient:m}=j(),{addAlert:c,addError:l}=f(),p=h(),{realm:a}=P(),u=async s=>{try{await m.identityProviders.create({...s,providerId:r,alias:r}),c(e("createSuccess"),E.success),p(I({realm:a,providerId:r,alias:r,tab:"settings"}))}catch(v){l("identity-providers:createError",v)}};return t.jsxs(t.Fragment,{children:[t.jsx(G,{titleKey:e("addIdentityProvider",{provider:b(r)})}),t.jsx(g,{variant:"light",children:t.jsxs(C,{role:"manage-identity-providers",isHorizontal:!0,onSubmit:n(u),children:[t.jsxs(A,{...i,children:[t.jsx(V,{id:r}),t.jsx(k,{providerId:r})]}),t.jsxs(w,{children:[t.jsx(o,{isDisabled:!d,variant:"primary",type:"submit","data-testid":"createProvider",children:e("common:add")}),t.jsx(o,{variant:"link","data-testid":"cancel",component:s=>t.jsx(F,{...s,to:S({realm:a})}),children:e("common:cancel")})]})]})})]})}export{W as default};
//# sourceMappingURL=AddIdentityProvider-84c62c55.js.map
