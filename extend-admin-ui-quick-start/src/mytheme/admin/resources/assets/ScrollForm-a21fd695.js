import{_ as A,r as e,i as g,bB as q,by as Q,B as Y,l as Z,j as m,T as ee,u as ne,P as te,cS as le}from"./index-a3421f29.js";import{F as se}from"./FormPanel-11cb7e22.js";import{G as ie,a as H}from"./GridItem-d34dae2e.js";const l={button:"pf-c-button",jumpLinks:"pf-c-jump-links",jumpLinksItem:"pf-c-jump-links__item",jumpLinksLabel:"pf-c-jump-links__label",jumpLinksLink:"pf-c-jump-links__link",jumpLinksLinkText:"pf-c-jump-links__link-text",jumpLinksList:"pf-c-jump-links__list",jumpLinksMain:"pf-c-jump-links__main",jumpLinksToggle:"pf-c-jump-links__toggle",jumpLinksToggleIcon:"pf-c-jump-links__toggle-icon",jumpLinksToggleText:"pf-c-jump-links__toggle-text",modifiers:{center:"pf-m-center",vertical:"pf-m-vertical",expandable:"pf-m-expandable",nonExpandable:"pf-m-non-expandable",expandableOnSm:"pf-m-expandable-on-sm",nonExpandableOnSm:"pf-m-non-expandable-on-sm",expandableOnMd:"pf-m-expandable-on-md",nonExpandableOnMd:"pf-m-non-expandable-on-md",expandableOnLg:"pf-m-expandable-on-lg",nonExpandableOnLg:"pf-m-non-expandable-on-lg",expandableOnXl:"pf-m-expandable-on-xl",nonExpandableOnXl:"pf-m-non-expandable-on-xl",expandableOn_2xl:"pf-m-expandable-on-2xl",nonExpandableOn_2xl:"pf-m-non-expandable-on-2xl",expanded:"pf-m-expanded",current:"pf-m-current"}};const ae={modifiers:{gutter:"pf-m-gutter",panelRight:"pf-m-panel-right",stack:"pf-m-stack",split:"pf-m-split",sticky:"pf-m-sticky",static:"pf-m-static",noBackground:"pf-m-no-background",widthDefault:"pf-m-width-default",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",width_100:"pf-m-width-100",widthDefaultOnSm:"pf-m-width-default-on-sm",width_25OnSm:"pf-m-width-25-on-sm",width_33OnSm:"pf-m-width-33-on-sm",width_50OnSm:"pf-m-width-50-on-sm",width_66OnSm:"pf-m-width-66-on-sm",width_75OnSm:"pf-m-width-75-on-sm",width_100OnSm:"pf-m-width-100-on-sm",widthDefaultOnMd:"pf-m-width-default-on-md",width_25OnMd:"pf-m-width-25-on-md",width_33OnMd:"pf-m-width-33-on-md",width_50OnMd:"pf-m-width-50-on-md",width_66OnMd:"pf-m-width-66-on-md",width_75OnMd:"pf-m-width-75-on-md",width_100OnMd:"pf-m-width-100-on-md",widthDefaultOnLg:"pf-m-width-default-on-lg",width_25OnLg:"pf-m-width-25-on-lg",width_33OnLg:"pf-m-width-33-on-lg",width_50OnLg:"pf-m-width-50-on-lg",width_66OnLg:"pf-m-width-66-on-lg",width_75OnLg:"pf-m-width-75-on-lg",width_100OnLg:"pf-m-width-100-on-lg",widthDefaultOnXl:"pf-m-width-default-on-xl",width_25OnXl:"pf-m-width-25-on-xl",width_33OnXl:"pf-m-width-33-on-xl",width_50OnXl:"pf-m-width-50-on-xl",width_66OnXl:"pf-m-width-66-on-xl",width_75OnXl:"pf-m-width-75-on-xl",width_100OnXl:"pf-m-width-100-on-xl",widthDefaultOn_2xl:"pf-m-width-default-on-2xl",width_25On_2xl:"pf-m-width-25-on-2xl",width_33On_2xl:"pf-m-width-33-on-2xl",width_50On_2xl:"pf-m-width-50-on-2xl",width_66On_2xl:"pf-m-width-66-on-2xl",width_75On_2xl:"pf-m-width-75-on-2xl",width_100On_2xl:"pf-m-width-100-on-2xl"},sidebar:"pf-c-sidebar",sidebarContent:"pf-c-sidebar__content",sidebarMain:"pf-c-sidebar__main",sidebarPanel:"pf-c-sidebar__panel"},b=n=>{var{children:s,className:a}=n,t=A(n,["children","className"]);return e.createElement("ul",Object.assign({className:g(l.jumpLinksList,a)},t),s)};b.displayName="JumpLinksList";const L=n=>{var{isActive:s,href:a,node:t,children:o,onClick:r,className:p}=n,w=A(n,["isActive","href","node","children","onClick","className"]);const f=e.Children.toArray(o),j=f.filter(u=>u.type===b);return o=f.filter(u=>u.type!==b),e.createElement("li",Object.assign({className:g(l.jumpLinksItem,s&&l.modifiers.current,p)},s&&{"aria-current":"location"},w),e.createElement("a",{className:l.jumpLinksLink,href:a,onClick:r},e.createElement("span",{className:l.jumpLinksLinkText},o)),j)};L.displayName="JumpLinksItem";const oe={name:"--pf-c-jump-links__toggle--Display",value:"none",var:"var(--pf-c-jump-links__toggle--Display)"},re=oe,v=(n,s)=>(e.Children.forEach(n,a=>{if(q&&document.getElementById&&document.querySelector&&a.type===L){const t=a.props.node||a.props.href;typeof t=="string"?t.startsWith("#")?s.push(document.getElementById(t.substr(1))):s.push(document.querySelector(t)):t instanceof HTMLElement&&s.push(t)}[e.Fragment,b,L].includes(a.type)&&v(a.props.children,s)}),s);function me(n){return n&&getComputedStyle(n).getPropertyValue(re.name).includes("block")}const V=n=>{var{isCentered:s,isVertical:a,children:t,label:o,"aria-label":r=typeof o=="string"?o:null,scrollableSelector:p,activeIndex:w=0,offset:f=0,expandable:j,isExpanded:u=!1,alwaysShowLabel:G=!0,toggleAriaLabel:$="Toggle jump links",className:z}=n,U=A(n,["isCentered","isVertical","children","label","aria-label","scrollableSelector","activeIndex","offset","expandable","isExpanded","alwaysShowLabel","toggleAriaLabel","className"]);const O=!!p,[I,D]=e.useState(O?v(t,[]):[]),[W,F]=e.useState(w),[N,T]=e.useState(u),C=e.useRef(!1);e.useEffect(()=>T(u),[u]);const x=e.useRef();let h;const E=e.useCallback(()=>{if(!q||!O||!(h instanceof HTMLElement))return;if(C.current){C.current=!1;return}const k=Math.ceil(h.scrollTop+f);window.requestAnimationFrame(()=>{let i=I;(!i[0]||i.includes(null))&&(i=v(t,[]),D(i));const S=i.map((c,d)=>({y:c?c.offsetTop:null,index:d})).filter(({y:c})=>c!==null).sort((c,d)=>d.y-c.y);for(const{y:c,index:d}of S)if(k>=c)return F(d)})},[I,O,h,f]);e.useEffect(()=>{if(h=document.querySelector(p),h instanceof HTMLElement)return h.addEventListener("scroll",E),()=>h.removeEventListener("scroll",E)},[p,E]),e.useEffect(()=>{E()},[]);let K=0;const y=k=>O?e.Children.map(k,i=>{if(i.type===L){const{onClick:S,isActive:c}=i.props,d=K++,X=I[d];return e.cloneElement(i,{onClick(B){C.current=!0;let M;X||(M=v(k,[]),D(M));const P=X||M[d];if(P){const R=document.querySelector(p);if(R instanceof HTMLElement){if(me(x.current)){x.current&&x.current.classList.remove(l.modifiers.expanded);let _=x.current&&x.current.parentElement;for(;_&&!_.classList.contains(ae.modifiers.sticky);)_=_.parentElement;T(!1),_&&(f+=_.scrollHeight)}R.scrollTo(0,P.offsetTop-f)}P.focus(),B.preventDefault(),F(d)}S&&S(B)},isActive:c||W===d,children:y(i.props.children)})}else{if(i.type===e.Fragment)return y(i.props.children);if(i.type===b)return e.cloneElement(i,{children:y(i.props.children)})}return i}):k;return e.createElement("nav",Object.assign({className:g(l.jumpLinks,s&&l.modifiers.center,a&&l.modifiers.vertical,Q(j,l),N&&l.modifiers.expanded,z),"aria-label":r,ref:x},U),e.createElement("div",{className:l.jumpLinksMain},e.createElement("div",{className:g("pf-c-jump-links__header")},j&&e.createElement("div",{className:l.jumpLinksToggle},e.createElement(Y,{variant:"plain",onClick:()=>T(!N),"aria-label":$,"aria-expanded":N},e.createElement("span",{className:l.jumpLinksToggleIcon},e.createElement(Z,null)),o&&e.createElement("span",{className:g(l.jumpLinksToggleText)}," ",o," "))),o&&G&&e.createElement("div",{className:g(l.jumpLinksLabel)},o)),e.createElement("ul",{className:l.jumpLinksList},y(t))))};V.displayName="JumpLinks";const pe=n=>{const{title:s,children:a,scrollId:t,...o}=n;return m.jsx("section",{...o,className:"kc-form-panel__panel",children:m.jsxs(m.Fragment,{children:[m.jsx(ee,{headingLevel:"h1",size:"xl",className:"kc-form-panel__title",id:t,tabIndex:0,children:s}),a]})})};const J=n=>n.replace(/\s+/g,"-"),ue=({sections:n,borders:s=!1,...a})=>{const{t}=ne("common"),o=e.useMemo(()=>n.filter(({isHidden:r})=>!r),[n]);return m.jsxs(ie,{hasGutter:!0,...a,children:[m.jsx(H,{span:8,children:o.map(({title:r,panel:p})=>{const w=J(r.toLowerCase());return m.jsx(e.Fragment,{children:s?m.jsx(se,{scrollId:w,title:r,className:"kc-form-panel__panel",children:p}):m.jsx(pe,{scrollId:w,title:r,children:p})},r)})}),m.jsx(H,{span:4,children:m.jsx(te,{className:"kc-scroll-form--sticky",children:m.jsx(V,{isVertical:!0,scrollableSelector:`#${le}`,label:t("jumpToSection"),offset:100,children:o.map(({title:r})=>{const p=J(r.toLowerCase());return m.jsx(L,{href:`#${p}`,"data-testid":`jump-link-${p}`,children:r},r)})})})})]})};export{ue as S};
//# sourceMappingURL=ScrollForm-a21fd695.js.map
