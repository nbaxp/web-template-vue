import{H as f,ai as w,i as k,j as y,k as h,Y as P,m as S,o as a,p as i,q as B,n as c,e as r,_ as g,R as N,I as x,ao as j,O as b,b as l,w as p,r as V,E as q,a2 as v,am as z,z as A,B as D,a5 as K,d as O,f as R,Q as T,h as F}from"./index.1e692261.js";import{_ as H}from"./svg-icon.a3d9bbaf.js";/* empty css                */const I=Symbol("breadcrumbKey"),L=f({separator:{type:String,default:"/"},separatorIcon:{type:w}}),M={name:"ElBreadcrumb"},Q=k({...M,props:L,setup(u){const t=u,o=y("breadcrumb"),n=h();return P(I,t),S(()=>{const e=n.value.querySelectorAll(`.${o.e("item")}`);e.length&&e[e.length-1].setAttribute("aria-current","page")}),(e,m)=>(a(),i("div",{ref_key:"breadcrumb",ref:n,class:c(r(o).b()),"aria-label":"Breadcrumb",role:"navigation"},[B(e.$slots,"default")],2))}});var Y=g(Q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const G=f({to:{type:N([String,Object]),default:""},replace:{type:Boolean,default:!1}}),J={name:"ElBreadcrumbItem"},U=k({...J,props:G,setup(u){const t=u,o=z(),n=x(I,void 0),e=y("breadcrumb"),{separator:m,separatorIcon:s}=j(n),d=o.appContext.config.globalProperties.$router,$=h(),E=()=>{!t.to||!d||(t.replace?d.replace(t.to):d.push(t.to))};return(_,ee)=>(a(),i("span",{class:c(r(e).e("item"))},[b("span",{ref_key:"link",ref:$,class:c([r(e).e("inner"),r(e).is("link",!!_.to)]),role:"link",onClick:E},[B(_.$slots,"default")],2),r(s)?(a(),l(r(q),{key:0,class:c(r(e).e("separator"))},{default:p(()=>[(a(),l(V(r(s))))]),_:1},8,["class"])):(a(),i("span",{key:1,class:c(r(e).e("separator")),role:"presentation"},v(r(m)),3))],2))}});var C=g(U,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const W=A(Y,{BreadcrumbItem:C}),X=D(C);const Z={class:"center"},se={__name:"layout-breadcrumb",setup(u){return(t,o)=>{const n=F("router-link"),e=X,m=W;return a(),l(m,{class:"mb-3"},{default:p(()=>[(a(!0),i(T,null,K(t.$route.matched,s=>(a(),l(e,{key:s.path},{default:p(()=>[O(n,{to:s.path},{default:p(()=>[b("div",Z,[s.meta?.icon?(a(),l(H,{key:0,name:s.meta.icon},null,8,["name"])):R("",!0),b("span",null,v(s.meta?.title),1)])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})}}};export{se as default};