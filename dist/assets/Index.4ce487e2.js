var a=Object.assign;import{d as s,r as n,t as d,u as o,p as e,a as t,o as i,c as l,b as r,F as c,w as h,e as f}from"./index.88203beb.js";import{_ as g,g as u}from"./index.44561013.js";var p=s({name:"Home",components:{List:g},setup:()=>{const s=o();let e=1;const t=n({list:[],loading:!1,finished:!1});return a(a({},d(t)),{onLoad:async()=>{const{data:a}=await u(e);if(a.length>0)for(let s=0;s<a.length;s++)t.list.push(a[s]);else t.finished=!0;t.loading=!1,e++},goSearch:()=>{s.push("/search")}})}});const m=h("data-v-3dd6d6f6");e("data-v-3dd6d6f6");const v=r("h4",null,"全部内容",-1);t();const L=m(((a,s,n,d,o,e)=>{const t=f("van-search"),h=f("List"),g=f("van-list");return i(),l(c,null,[r(t,{disabled:"",placeholder:"点击搜索",onClick:a.goSearch},null,8,["onClick"]),v,r(g,{loading:a.loading,"onUpdate:loading":s[1]||(s[1]=s=>a.loading=s),finished:a.finished,"finished-text":"没有更多了",onLoad:a.onLoad},{default:m((()=>[r(h,{list:a.list},null,8,["list"])])),_:1},8,["loading","finished","onLoad"])],64)}));p.render=L,p.__scopeId="data-v-3dd6d6f6";export default p;
