import{q as e,G as t,k as a,u as s,a as i,c as l,b as o,H as c,e as n,x as r,d as v,I as d,p as f,j as u,F as m,D as k,h as p,g as h,J as g}from"./app.b171a7c5.js";f("data-v-0cb9fda2");const x={key:0,class:"home-hero"},y={key:0,class:"figure"},I=["src","alt"],_={key:1,id:"main-title",class:"title"},T={key:2,class:"description"};u();var b=e({setup(e){const{site:f,frontmatter:u}=t(),m=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=u.value;return e||t||a||s&&i})),k=a((()=>u.value.heroText||f.value.title));return(e,t)=>s(m)?(i(),l("header",x,[s(u).heroImage?(i(),l("figure",y,[o("img",{class:"image",src:s(c)(s(u).heroImage),alt:s(u).heroAlt},null,8,I)])):n("v-if",!0),s(k)?(i(),l("h1",_,r(s(k)),1)):n("v-if",!0),s(u).tagline?(i(),l("p",T,r(s(u).tagline),1)):n("v-if",!0),s(u).actionLink&&s(u).actionText?(i(),v(d,{key:3,item:{link:s(u).actionLink,text:s(u).actionText},class:"action"},null,8,["item"])):n("v-if",!0),s(u).altActionLink&&s(u).altActionText?(i(),v(d,{key:4,item:{link:s(u).altActionLink,text:s(u).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)}});b.__scopeId="data-v-0cb9fda2",f("data-v-e39c13e0");const A={key:0,class:"home-features"},L={class:"wrapper"},$={class:"container"},j={class:"features"},q={key:0,class:"title"},w={key:1,class:"details"};u();var C=e({setup(e){const{frontmatter:c}=t(),v=a((()=>c.value.features&&c.value.features.length>0)),d=a((()=>c.value.features?c.value.features:[]));return(e,t)=>s(v)?(i(),l("div",A,[o("div",L,[o("div",$,[o("div",j,[(i(!0),l(m,null,k(s(d),((e,t)=>(i(),l("section",{key:t,class:"feature"},[e.title?(i(),l("h2",q,r(e.title),1)):n("v-if",!0),e.details?(i(),l("p",w,r(e.details),1)):n("v-if",!0)])))),128))])])])])):n("v-if",!0)}});C.__scopeId="data-v-e39c13e0",f("data-v-30918238");const D={key:0,class:"footer"},F={class:"container"},G={class:"text"};u();var H=e({setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(i(),l("footer",D,[o("div",F,[o("p",G,r(s(a).footer),1)])])):n("v-if",!0)}});H.__scopeId="data-v-30918238",f("data-v-32eddf2f");const J={class:"home","aria-labelledby":"main-title"},z={class:"home-content"};u();var B=e({setup:e=>(e,t)=>{const a=p("Content");return i(),l("main",J,[h(b),g(e.$slots,"hero",{},void 0,!0),h(C),o("div",z,[h(a)]),g(e.$slots,"features",{},void 0,!0),h(H),g(e.$slots,"footer",{},void 0,!0)])}});B.__scopeId="data-v-32eddf2f";export{B as default};
