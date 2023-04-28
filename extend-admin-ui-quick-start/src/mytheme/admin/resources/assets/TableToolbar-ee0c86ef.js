import{m as be,r as e,_ as C,i as b,ak as Oe,B as R,F as se,aw as le,bA as ke,k as O,aj as me,ax as fe,M as K,bd as Me,ah as Fe,aW as He,u as Ve,j as N,U as Ue}from"./index-a3421f29.js";import{T as ie,a as he,b as We}from"./ToolbarContent-7b435752.js";import{F as qe,A as ze,a as Ke}from"./Form-518a2cf2.js";const Qe={name:"AngleUpIcon",height:512,width:320,svgPath:"M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z",yOffset:0,xOffset:0},Je=be(Qe),Xe=Je,Ye={name:"ArrowRightIcon",height:512,width:448,svgPath:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",yOffset:0,xOffset:0},Ze=be(Ye),et=Ze;const k={modifiers:{bordered:"pf-m-bordered",raised:"pf-m-raised",scrollable:"pf-m-scrollable"},panel:"pf-c-panel",panelFooter:"pf-c-panel__footer",panelHeader:"pf-c-panel__header",panelMain:"pf-c-panel__main",panelMainBody:"pf-c-panel__main-body"},tt=a=>{var{className:n,children:r,variant:s,isScrollable:m,innerRef:f}=a,h=C(a,["className","children","variant","isScrollable","innerRef"]);return e.createElement("div",Object.assign({className:b(k.panel,s==="raised"&&k.modifiers.raised,s==="bordered"&&k.modifiers.bordered,m&&k.modifiers.scrollable,n),ref:f},h),r)},ge=e.forwardRef((a,n)=>e.createElement(tt,Object.assign({innerRef:n},a)));ge.displayName="Panel";const ve=a=>{var{className:n,children:r,maxHeight:s}=a,m=C(a,["className","children","maxHeight"]);return e.createElement("div",Object.assign({className:b(k.panelMain,n),style:{"--pf-c-panel__main--MaxHeight":s}},m),r)};ve.displayName="PanelMain";const xe=a=>{var{className:n,children:r}=a,s=C(a,["className","children"]);return e.createElement("div",Object.assign({className:b(k.panelMainBody,n)},s),r)};xe.displayName="PanelMainBody";const Ee=({className:a,parentRef:n,parentInputRef:r,value:s="",attributes:m=[],formAdditionalItems:f,hasWordsAttrLabel:h="Has words",advancedSearchDelimiter:E,getAttrValueMap:I,onChange:g,onSearch:p,onClear:v,resetButtonLabel:A="Reset",submitSearchButtonLabel:w="Search",isSearchMenuOpen:d,onToggleAdvancedMenu:G})=>{const T=e.useRef(null),[M,j]=e.useState(!1);e.useEffect(()=>{m.length>0&&!E&&console.error("AdvancedSearchMenu: An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop")}),e.useEffect(()=>{d&&T&&T.current?(T.current.focus(),j(!0)):!d&&M&&r&&r.current&&r.current.focus()},[d]),e.useEffect(()=>(document.addEventListener("mousedown",_),document.addEventListener("touchstart",_),document.addEventListener("keydown",F),function(){document.removeEventListener("mousedown",_),document.removeEventListener("touchstart",_),document.removeEventListener("keydown",F)}));const _=i=>{const o=n&&n.current.contains(i.target);d&&!o&&G(i)},F=i=>{d&&i.key===Oe.Escape&&n&&n.current.contains(i.target)&&(G(i),r&&r.current.focus())},Q=i=>{i.preventDefault(),p&&p(i,s,I()),d&&G(i)},H=(i,o,c)=>{const B=I();B[i]=o;let u="";Object.entries(B).forEach(([P,D])=>{if(D.trim()!==""){const z=D.includes(" ")?`'${D.replace(/(^'|'$)/g,"")}'`:D;P!=="haswords"?u=`${u} ${P}${E}${z}`:u=`${u} ${z}`}}),g&&g(c,u.replace(/^\s+/g,""))},V=i=>{const o=I();return o.hasOwnProperty(i)?o[i]:""},J=()=>{const i=[];return m.forEach((o,c)=>{const B=typeof o=="string"?o:o.display,u=typeof o=="string"?o:o.attr;c===0?i.push(e.createElement(se,{label:B,fieldId:`${u}_${c}`,key:`${o}_${c}`},e.createElement(le,{ref:T,type:"text",id:`${u}_${c}`,value:V(u),onChange:(P,D)=>H(u,P,D)}))):i.push(e.createElement(se,{label:B,fieldId:`${u}_${c}`,key:`${o}_${c}`},e.createElement(le,{type:"text",id:`${u}_${c}`,value:V(u),onChange:(P,D)=>H(u,P,D)})))}),i.push(e.createElement(ke,{key:"hasWords"},o=>e.createElement(se,{label:h,fieldId:o},e.createElement(le,{type:"text",id:o,value:V("haswords"),onChange:(c,B)=>H("haswords",c,B)})))),i};return d?e.createElement(ge,{variant:"raised",className:b(a)},e.createElement(ve,null,e.createElement(xe,null,e.createElement(qe,null,J(),f||null,e.createElement(ze,null,e.createElement(R,{variant:"primary",type:"submit",onClick:Q,isDisabled:!s},w),!!v&&e.createElement(R,{variant:"link",type:"reset",onClick:v},A)))))):null};Ee.displayName="SearchInput";const S={button:"pf-c-button",chipGroupMain:"pf-c-chip-group__main",modifiers:{disabled:"pf-m-disabled",plain:"pf-m-plain",icon:"pf-m-icon",hint:"pf-m-hint"},textInputGroup:"pf-c-text-input-group",textInputGroupGroup:"pf-c-text-input-group__group",textInputGroupIcon:"pf-c-text-input-group__icon",textInputGroupMain:"pf-c-text-input-group__main",textInputGroupText:"pf-c-text-input-group__text",textInputGroupTextInput:"pf-c-text-input-group__text-input",textInputGroupUtilities:"pf-c-text-input-group__utilities"},Ie=e.createContext({isDisabled:!1}),ye=a=>{var{children:n,className:r,isDisabled:s,isPlain:m,innerRef:f}=a,h=C(a,["children","className","isDisabled","isPlain","innerRef"]);const E=e.useRef(null),I=f||E;return e.createElement(Ie.Provider,{value:{isDisabled:s}},e.createElement("div",Object.assign({ref:I,className:b(S.textInputGroup,s&&S.modifiers.disabled,m&&S.modifiers.plain,r)},h),n))};ye.displayName="TextInputGroup";const Ne=a=>{var{children:n,className:r,icon:s,type:m="text",hint:f,onChange:h=()=>{},onFocus:E,onBlur:I,"aria-label":g="Type to filter",value:p,placeholder:v,innerRef:A,name:w}=a,d=C(a,["children","className","icon","type","hint","onChange","onFocus","onBlur","aria-label","value","placeholder","innerRef","name"]);const{isDisabled:G}=e.useContext(Ie),T=e.useRef(null),M=A||T,j=_=>{h(_,_.currentTarget.value)};return e.createElement("div",Object.assign({className:b(S.textInputGroupMain,s&&S.modifiers.icon,r)},d),n,e.createElement("span",{className:b(S.textInputGroupText)},f&&e.createElement("input",{className:b(S.textInputGroupTextInput,S.modifiers.hint),type:"text",disabled:!0,"aria-hidden":"true",value:f}),s&&e.createElement("span",{className:b(S.textInputGroupIcon)},s),e.createElement("input",{ref:M,type:m,className:b(S.textInputGroupTextInput),"aria-label":g,disabled:G,onChange:j,onFocus:E,onBlur:I,value:p||"",placeholder:v,name:w})))};Ne.displayName="TextInputGroupMain";const Se=a=>{var{children:n,className:r}=a,s=C(a,["children","className"]);return e.createElement("div",Object.assign({className:b(S.textInputGroupUtilities,r)},s),n)};Se.displayName="TextInputGroupUtilities";const Ce=a=>{var{className:n,value:r="",attributes:s=[],formAdditionalItems:m,hasWordsAttrLabel:f="Has words",advancedSearchDelimiter:h,placeholder:E,hint:I,onChange:g,onSearch:p,onClear:v,onToggleAdvancedSearch:A,isAdvancedSearchOpen:w,resultsCount:d,onNextClick:G,onPreviousClick:T,innerRef:M,expandableInput:j,"aria-label":_="Search input",resetButtonLabel:F="Reset",openMenuButtonAriaLabel:Q="Open advanced search",previousNavigationButtonAriaLabel:H="Previous",isPreviousNavigationButtonDisabled:V=!1,isNextNavigationButtonDisabled:J=!1,nextNavigationButtonAriaLabel:i="Next",submitSearchButtonLabel:o="Search",isDisabled:c=!1,appendTo:B,removeFindDomNode:u=!1,zIndex:P=9999,type:D="text",name:z}=a,X=C(a,["className","value","attributes","formAdditionalItems","hasWordsAttrLabel","advancedSearchDelimiter","placeholder","hint","onChange","onSearch","onClear","onToggleAdvancedSearch","isAdvancedSearchOpen","resultsCount","onNextClick","onPreviousClick","innerRef","expandableInput","aria-label","resetButtonLabel","openMenuButtonAriaLabel","previousNavigationButtonAriaLabel","isPreviousNavigationButtonDisabled","isNextNavigationButtonDisabled","nextNavigationButtonAriaLabel","submitSearchButtonLabel","isDisabled","appendTo","removeFindDomNode","zIndex","type","name"]);const[U,Y]=e.useState(!1),[Z,ee]=e.useState(r),W=e.useRef(null),Te=e.useRef(null),L=M||Te,q=e.useRef(null),[oe,ce]=e.useState(!1),{isExpanded:$,onToggleExpand:je,toggleAriaLabel:Be}=j||{};e.useEffect(()=>{var t,l;if(oe)$?(t=L?.current)===null||t===void 0||t.focus():(l=q?.current)===null||l===void 0||l.focus();else return;ce(!1)},[oe,$,L,q]),e.useEffect(()=>{ee(r)},[r]),e.useEffect(()=>{s.length>0&&!h&&console.error("An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop")}),e.useEffect(()=>{Y(w)},[w]);const De=(t,l)=>{g&&g(t,l),ee(l)},ue=t=>{const l=!U;Y(l),A&&A(t,l)},pe=t=>{t.preventDefault(),p&&p(t,r,de()),Y(!1)},we=t=>{let l;return t.match(/\\?.|^$/g).reduce((y,x)=>(x==="'"||x==='"'?(l||(l=x),x===l&&(y.quote=!y.quote)):!y.quote&&x===" "?y.a.push(""):y.a[y.a.length-1]+=x.replace(/\\(.)/,"$1"),y),{a:[""]}).a},de=()=>{const t={};return we(Z).map(y=>{const x=y.split(h);x.length===2?t[x[0]]=x[1].replace(/(^'|'$)/g,""):x.length===1&&(t.haswords=t.hasOwnProperty("haswords")?`${t.haswords} ${x[0]}`:x[0])}),t},Ge=t=>{t.key==="Enter"&&pe(t)},_e=t=>{v&&v(t),L&&L.current&&L.current.focus()},Le=t=>{ee(""),je(t,$),ce(!0)},Pe=r&&(d||!!G&&!!T||!!v&&!j),te=(t={})=>{var l=C(t,[]);return e.createElement(ye,Object.assign({isDisabled:c},l),e.createElement(Ne,{hint:I,icon:e.createElement(fe,null),innerRef:L,value:Z,placeholder:E,"aria-label":_,onKeyDown:Ge,onChange:De,type:D,name:z}),Pe&&e.createElement(Se,null,d&&e.createElement(He,{isRead:!0},d),!!G&&!!T&&e.createElement("div",{className:"pf-c-text-input-group__group"},e.createElement(R,{variant:O.plain,"aria-label":H,isDisabled:c||V,onClick:T},e.createElement(Xe,null)),e.createElement(R,{variant:O.plain,"aria-label":i,isDisabled:c||J,onClick:G},e.createElement(Ke,null))),!!v&&!j&&e.createElement(R,{variant:O.plain,isDisabled:c,"aria-label":F,onClick:_e},e.createElement(me,null))))},ae=e.createElement(R,{variant:O.plain,"aria-label":Be,"aria-expanded":$,icon:$?e.createElement(me,null):e.createElement(fe,null),onClick:Le,ref:q}),Re=(t={})=>{var l=C(t,[]);return e.createElement(K,Object.assign({},l),te(),ae)},$e=(t={})=>{var l=C(t,[]);return j?Re(Object.assign({},l)):te(Object.assign({},l))},ne=(t={})=>{var l=C(t,[]);return e.createElement(K,Object.assign({},l),te(),(s.length>0||A)&&e.createElement(R,{className:U&&"pf-m-expanded",variant:O.control,"aria-label":Q,onClick:ue,isDisabled:c,"aria-expanded":U},e.createElement(Fe,null)),!!p&&e.createElement(R,{type:"submit",variant:O.control,"aria-label":o,onClick:pe,isDisabled:c||!Z},e.createElement(et,null)),j&&ae)},re=Object.assign(Object.assign({},X),{className:n&&b(n),innerRef:W});if(j&&!$)return e.createElement(K,Object.assign({},re),ae);if(p||s.length>0||A){if(s.length>0){const t=e.createElement("div",null,e.createElement(Ee,{value:r,parentRef:W,parentInputRef:L,onSearch:p,onClear:v,onChange:g,onToggleAdvancedMenu:ue,resetButtonLabel:F,submitSearchButtonLabel:o,attributes:s,formAdditionalItems:m,hasWordsAttrLabel:f,advancedSearchDelimiter:h,getAttrValueMap:de,isSearchMenuOpen:U})),l=e.createElement("div",Object.assign({className:b(n),ref:W},X),e.createElement(Me,{trigger:ne(),popper:t,isVisible:U,enableFlip:!0,appendTo:()=>B||W.current,removeFindDomNode:u,zIndex:P})),y=e.createElement("div",Object.assign({className:b(n),ref:W},X),ne(),t);return B!=="inline"?l:y}return ne(Object.assign({},re))}return $e(re)};Ce.displayName="SearchInputBase";const Ae=e.forwardRef((a,n)=>e.createElement(Ce,Object.assign({},a,{innerRef:n})));Ae.displayName="SearchInput";const st=({toolbarItem:a,subToolbar:n,toolbarItemFooter:r,children:s,searchTypeComponent:m,inputGroupName:f,inputGroupPlaceholder:h,inputGroupOnEnter:E})=>{const{t:I}=Ve(),[g,p]=e.useState(""),v=()=>{g!==""?(p(g),E?.(g)):(p(""),E?.(""))},A=w=>{w.key==="Enter"&&v()};return N.jsxs(N.Fragment,{children:[N.jsx(ie,{children:N.jsxs(he,{children:[f&&N.jsx(We,{children:N.jsxs(K,{"data-testid":f,children:[m,h&&N.jsx(Ae,{placeholder:h,"aria-label":I("search"),value:g,onChange:(w,d)=>{p(d)},onSearch:v,onKeyDown:A,onClear:()=>{p(""),E?.("")}})]})}),a]})}),n&&N.jsx(ie,{children:N.jsx(he,{children:n})}),N.jsx(Ue,{}),s,N.jsx(ie,{children:r})]})};export{Ae as S,st as T};
//# sourceMappingURL=TableToolbar-ee0c86ef.js.map
