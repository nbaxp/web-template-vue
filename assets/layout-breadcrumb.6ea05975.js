import{C as f,ag as w,i as k,j as y,k as h,U as N,m as P,o as a,p as d,q as B,n as c,e as r,_ as g,N as S,D as x,aq as j,J as b,b as l,w as p,r as q,E as D,Z as v,al as V,z,B as A,a1 as K,d as M,f as T,M as F,h as J}from"./index.70f90e7f.js";import{_ as L}from"./svg-icon.5594b61b.js";/* empty css                */const C=Symbol("breadcrumbKey"),O=f({separator:{type:String,default:"/"},separatorIcon:{type:w,default:""}}),R={name:"ElBreadcrumb"},U=k({...R,props:O,setup(u){const t=u,o=y("breadcrumb"),n=h();return N(C,t),P(()=>{const e=n.value.querySelectorAll(`.${o.e("item")}`);e.length&&e[e.length-1].setAttribute("aria-current","page")}),(e,m)=>(a(),d("div",{ref_key:"breadcrumb",ref:n,class:c(r(o).b()),"aria-label":"Breadcrumb",role:"navigation"},[B(e.$slots,"default")],2))}});var Z=g(U,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const G=f({to:{type:S([String,Object]),default:""},replace:{type:Boolean,default:!1}}),H={name:"ElBreadcrumbItem"},Q=k({...H,props:G,setup(u){const t=u,o=V(),n=x(C,void 0),e=y("breadcrumb"),{separator:m,separatorIcon:s}=j(n),i=o.appContext.config.globalProperties.$router,$=h(),E=()=>{!t.to||!i||(t.replace?i.replace(t.to):i.push(t.to))};return(_,ee)=>(a(),d("span",{class:c(r(e).e("item"))},[b("span",{ref_key:"link",ref:$,class:c([r(e).e("inner"),r(e).is("link",!!_.to)]),role:"link",onClick:E},[B(_.$slots,"default")],2),r(s)?(a(),l(r(D),{key:0,class:c(r(e).e("separator"))},{default:p(()=>[(a(),l(q(r(s))))]),_:1},8,["class"])):(a(),d("span",{key:1,class:c(r(e).e("separator")),role:"presentation"},v(r(m)),3))],2))}});var I=g(Q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const W=z(Z,{BreadcrumbItem:I}),X=A(I);const Y={class:"center"},se={__name:"layout-breadcrumb",setup(u){return(t,o)=>{const n=J("router-link"),e=X,m=W;return a(),l(m,{class:"mb-3"},{default:p(()=>[(a(!0),d(F,null,K(t.$route.matched,s=>(a(),l(e,{key:s.path},{default:p(()=>[M(n,{to:s.path},{default:p(()=>[b("div",Y,[s.meta?.icon?(a(),l(L,{key:0,name:s.meta.icon},null,8,["name"])):T("",!0),b("span",null,v(s.meta?.title),1)])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})}}};export{se as default};
