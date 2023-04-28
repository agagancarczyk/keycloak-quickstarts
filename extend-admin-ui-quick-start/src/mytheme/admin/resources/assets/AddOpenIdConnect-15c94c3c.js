import{u as v,d as h,c as g,a as j,j as e,T as b,F as I,G as F,a0 as S,a1 as k,b as E,a_ as A,f as C,e as D,P as O,g as P,B as f,L as T,bK as w,A as L,bL as G}from"./index-a3421f29.js";import{F as U}from"./FormAccess-1cceaef6.js";import{V}from"./ViewHeader-832ec56e.js";import{D as K,O as $,a as z}from"./OIDCGeneralSettings-a93cb3b6.js";import{J as B}from"./JsonFileUpload-a913d52f.js";import{D as H}from"./DiscoveryEndpointField-1ac4d0ed.js";import{A as J}from"./Form-518a2cf2.js";import"./copy-icon-a4fe01af.js";import"./GridItem-d34dae2e.js";import"./Text-564bf299.js";import"./ToolbarContent-7b435752.js";import"./KeycloakTextArea-1b518857.js";import"./KeycloakTextInput-e7f6e917.js";import"./discovery-settings-095f2617.js";import"./ExpandableSection-15721cb7.js";import"./Select-0f56a9cc.js";import"./check-fc57dbe1.js";import"./star-icon-6a7e7d25.js";import"./ClientIdSecret-f71639f8.js";import"./PasswordInput-85f9399f.js";import"./DisplayOrder-43d5f15a.js";import"./FileUploadForm-96efeae2.js";import"./FileUpload-ca37c1a6.js";import"./CodeEditor-2fb93648.js";import"./EmptyStateBody-7b4fcee1.js";import"./EmptyStateSecondaryActions-08edafb5.js";import"./Modal-21c37af7.js";const N=()=>{const{t}=v("identity-providers"),m="oidc",{adminClient:c}=h(),{realm:l}=g(),{setValue:a,setError:n,clearErrors:p,formState:{errors:d}}=j(),u=r=>{Object.keys(r).map(i=>a(`config.${i}`,r[i]))},y=async r=>{if(p("discoveryError"),!r)return;const i=new FormData;i.append("providerId",m),i.append("file",new Blob([JSON.stringify(r)]));try{const o=await fetch(`${S(c.baseUrl)}admin/realms/${l}/identity-provider/import-config`,{method:"POST",body:i,headers:k(await c.getAccessToken())});if(o.ok){const s=await o.json();u(s)}else n("discoveryError",{type:"manual",message:o.statusText})}catch(o){n("discoveryError",{type:"manual",message:o.message})}};return e.jsxs(e.Fragment,{children:[e.jsx(b,{headingLevel:"h4",size:"xl",className:"kc-form-panel__title",children:t("oidcSettings")}),e.jsx(H,{id:"oidc",fileUpload:e.jsx(I,{label:t("importConfig"),fieldId:"kc-import-config",labelIcon:e.jsx(F,{helpText:t("identity-providers-help:importConfig"),fieldLabelId:"identity-providers:importConfig"}),validated:d.discoveryError?"error":"default",helperTextInvalid:d.discoveryError?.message,children:e.jsx(B,{id:"kc-import-config",helpText:t("identity=providers-help:jsonFileUpload"),hideDefaultPreview:!0,unWrap:!0,validated:d.discoveryError?"error":"default",onChange:r=>y(r)})}),children:r=>e.jsx(K,{readOnly:r})})]})};function ge(){const{t}=v("identity-providers"),m=E(),{pathname:c}=A(),l=c.includes("keycloak-oidc"),a=`${l?"keycloak-":""}oidc`,n=C({defaultValues:{alias:a}}),{handleSubmit:p,formState:{isDirty:d}}=n,{adminClient:u}=h(),{addAlert:y,addError:r}=D(),{realm:i}=g(),o=async s=>{delete s.discoveryEndpoint;try{await u.identityProviders.create({...s,providerId:a}),y(t("createSuccess"),L.success),m(G({realm:i,providerId:a,alias:s.alias,tab:"settings"}))}catch(x){r("identity-providers:createError",x)}};return e.jsxs(e.Fragment,{children:[e.jsx(V,{titleKey:t(l?"addKeycloakOpenIdProvider":"addOpenIdProvider")}),e.jsx(O,{variant:"light",children:e.jsx(P,{...n,children:e.jsxs(U,{role:"manage-identity-providers",isHorizontal:!0,onSubmit:p(o),children:[e.jsx($,{id:a}),e.jsx(N,{}),e.jsx(z,{}),e.jsxs(J,{children:[e.jsx(f,{isDisabled:!d,variant:"primary",type:"submit","data-testid":"createProvider",children:t("common:add")}),e.jsx(f,{variant:"link","data-testid":"cancel",component:s=>e.jsx(T,{...s,to:w({realm:i})}),children:t("common:cancel")})]})]})})})]})}export{ge as default};
//# sourceMappingURL=AddOpenIdConnect-15c94c3c.js.map
