import{u as g,e as h,b as x,d as j,c as U,f as v,r as P,j as r,P as i,g as A,A as C,aN as E}from"./index-a3421f29.js";import{V as F}from"./ViewHeader-832ec56e.js";import{U as N}from"./UserProfileContext-1adc9dc8.js";import{U as b,i as w,u as y}from"./UserForm-4d660c10.js";import"./user-section-4ed993c7.js";import"./Text-564bf299.js";import"./ToolbarContent-7b435752.js";import"./FormAccess-1cceaef6.js";import"./copy-icon-a4fe01af.js";import"./Form-518a2cf2.js";import"./GridItem-d34dae2e.js";import"./GroupPickerDialog-caf8c38d.js";import"./PaginatingTableToolbar-08ca9efb.js";import"./plus-circle-icon-cb854796.js";import"./EmptyStateBody-7b4fcee1.js";import"./EmptyStateSecondaryActions-08edafb5.js";import"./TableToolbar-ee0c86ef.js";import"./DataListItemRow-75e02946.js";import"./data-list-7d55714c.js";import"./grip-vertical-icon-cbeff50f.js";import"./Modal-21c37af7.js";import"./KeycloakTextInput-e7f6e917.js";import"./useFormatDate-7fddef56.js";import"./useIsFeatureEnabled-1df1a04b.js";import"./ScrollForm-a21fd695.js";import"./FormPanel-11cb7e22.js";import"./CardHeader-457352d1.js";import"./Card-aa3ba03c.js";import"./CardTitle-9175b04a.js";import"./CardBody-519f6395.js";import"./useToggle-a9cb2c55.js";import"./Select-0f56a9cc.js";import"./check-fc57dbe1.js";import"./star-icon-6a7e7d25.js";function dr(){const{t}=g("users"),{addAlert:a,addError:s}=h(),m=x(),{adminClient:p}=j(),{realm:n}=U(),d=v({mode:"onChange"}),[u,c]=P.useState([]),l=async o=>{try{const e=await p.users.create({...o,username:o.username?.trim(),groups:u.map(f=>f.path),enabled:!0});a(t("userCreated"),C.success),m(E({id:e.id,realm:n,tab:"settings"}))}catch(e){w(e)?s(y(e),e):s("users:userCreateError",e)}};return r.jsxs(r.Fragment,{children:[r.jsx(F,{titleKey:t("createUser"),className:"kc-username-view-header"}),r.jsx(i,{variant:"light",className:"pf-u-p-0",children:r.jsx(N,{children:r.jsx(A,{...d,children:r.jsx(i,{variant:"light",children:r.jsx(b,{onGroupsUpdate:c,save:l})})})})})]})}export{dr as default};
//# sourceMappingURL=CreateUser-965d895d.js.map
