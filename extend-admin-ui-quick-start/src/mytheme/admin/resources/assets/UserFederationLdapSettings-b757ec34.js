import{b as R,u as C,d as D,e as A,r as m,z as P,n as E,k as B,A as k,j as e,B as w,L as K,f as I,c as U,X as V,g as z,P as L,dn as M,dp as F}from"./index-a3421f29.js";import{R as N,u as H}from"./RoutableTabs-7f56b0c5.js";import{u as O}from"./ConfirmDialog-09ff7a12.js";import{L as X}from"./PaginatingTableToolbar-08ca9efb.js";import{K as q}from"./KeycloakDataTable-10a62d94.js";import{u as G,m as J}from"./useLocaleSort-3efc7c31.js";import{b as Q}from"./ToolbarContent-7b435752.js";import{E as W}from"./ExtendedHeader-d25be090.js";import{U as Y,s as Z}from"./UserFederationLdapForm-17767f2d.js";import{a as T,b as v}from"./Tabs-5beaba80.js";import"./Modal-21c37af7.js";import"./plus-circle-icon-cb854796.js";import"./EmptyStateBody-7b4fcee1.js";import"./EmptyStateSecondaryActions-08edafb5.js";import"./TableToolbar-ee0c86ef.js";import"./Form-518a2cf2.js";import"./Td-6d4ab209.js";import"./star-icon-6a7e7d25.js";import"./check-fc57dbe1.js";import"./grip-vertical-icon-cbeff50f.js";import"./Checkbox-d00621d8.js";import"./SettingsCache-d185f52c.js";import"./ViewHeader-832ec56e.js";import"./Text-564bf299.js";import"./FormAccess-1cceaef6.js";import"./copy-icon-a4fe01af.js";import"./GridItem-d34dae2e.js";import"./useToggle-a9cb2c55.js";import"./isEqual-69fbe00f.js";import"./Select-0f56a9cc.js";import"./NumberInput-85f36a0d.js";import"./minus-icon-16876c86.js";import"./plus-icon-2a767bad.js";import"./ScrollForm-a21fd695.js";import"./FormPanel-11cb7e22.js";import"./CardHeader-457352d1.js";import"./Card-aa3ba03c.js";import"./CardTitle-9175b04a.js";import"./CardBody-519f6395.js";import"./KeycloakTextInput-e7f6e917.js";import"./PasswordInput-85f9399f.js";import"./MenuList-e3786b59.js";const _=({toDetail:n,...s})=>e.jsx(K,{to:n(s.id),children:s.name}),$=({toCreate:n,toDetail:s})=>{const p=R(),{t:o}=C("user-federation"),{adminClient:r}=D(),{addAlert:f,addError:g}=A(),[i,y]=m.useState(0),h=()=>y(i+1),[x,j]=m.useState([]),c=G(),{id:b}=P(),[d,l]=m.useState();E(()=>r.components.find({parent:b,type:"org.keycloak.storage.ldap.mappers.LDAPStorageMapper"}),a=>{j(c(a.map(S=>({...S,name:S.name,type:S.providerId})),J("name")))},[i]);const[u,t]=O({titleKey:o("common:deleteMappingTitle",{mapperId:d?.id}),messageKey:"common:deleteMappingConfirm",continueButtonLabel:"common:delete",continueButtonVariant:B.danger,onConfirm:async()=>{try{await r.components.del({id:d.id}),h(),f(o("common:mappingDeletedSuccess"),k.success),l(void 0)}catch(a){g("common:mappingDeletedError",a)}}});return e.jsxs(e.Fragment,{children:[e.jsx(t,{}),e.jsx(q,{loader:x,ariaLabelKey:"ldapMappersList",searchPlaceholderKey:"common:searchForMapper",toolbarItem:e.jsx(Q,{children:e.jsx(w,{"data-testid":"add-mapper-btn",variant:"primary",component:a=>e.jsx(K,{...a,to:n}),children:o("common:addMapper")})}),actions:[{title:o("common:delete"),onRowClick:a=>{l(a),u()}}],columns:[{name:"name",cellRenderer:a=>e.jsx(_,{...a,toDetail:s})},{name:"type"}],emptyState:e.jsx(X,{message:o("common:emptyMappers"),instructions:o("common:emptyMappersInstructions"),primaryActionText:o("common:emptyPrimaryAction"),onPrimaryAction:()=>p(n)})},i)]})};function He(){const{t:n}=C("user-federation"),s=I({mode:"onChange"}),{adminClient:p}=D(),{realm:o}=U(),{id:r}=P(),{addAlert:f,addError:g}=A(),[i,y]=m.useState(),[h,x]=m.useState(0),j=()=>x(t=>t+1);E(()=>p.components.findOne({id:r}),t=>{if(!t)throw new Error(n("common:notFound"));y(t),l(t)},[r,h]);const c=t=>H(M({realm:o,id:r,tab:t})),b=c("settings"),d=c("mappers"),l=t=>{s.reset(t),s.setValue("config.periodicChangedUsersSync",t.config?.changedSyncPeriod?.[0]!=="-1"),s.setValue("config.periodicFullSync",t.config?.fullSyncPeriod?.[0]!=="-1")},u=async t=>{try{await p.components.update({id:r},Z(t)),f(n("saveSuccess"),k.success),j()}catch(a){g("user-federation:saveError",a)}};return i?e.jsxs(z,{...s,children:[e.jsx(W,{provider:"LDAP",noDivider:!0,editMode:i.config?.editMode,save:()=>s.handleSubmit(u)()}),e.jsx(L,{variant:"light",className:"pf-u-p-0",children:e.jsxs(N,{defaultLocation:M({realm:o,id:r,tab:"settings"}),isBox:!0,children:[e.jsx(T,{id:"settings",title:e.jsx(v,{children:n("common:settings")}),...b,children:e.jsx(L,{variant:"light",children:e.jsx(Y,{id:r,onSubmit:u})})}),e.jsx(T,{id:"mappers",title:e.jsx(v,{children:n("common:mappers")}),"data-testid":"ldap-mappers-tab",...d,children:e.jsx($,{toCreate:F({realm:o,id:r,mapperId:"new"}),toDetail:t=>F({realm:o,id:r,mapperId:t})})})]})})]}):e.jsx(V,{})}export{He as default};
//# sourceMappingURL=UserFederationLdapSettings-b757ec34.js.map
