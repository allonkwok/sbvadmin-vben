import{B as n}from"./BasicForm.28f6c720.js";import{aw as u,a as l,cD as c,ay as r,o as d,j as f,z as p,n as i,bS as C,E as _}from"./index.6d5ffb3c.js";import{M as h}from"./index.61bf732a.js";import{P as b}from"./index.16a58b52.js";/* empty css              *//* empty css              */import"./index.89c4fe79.js";import"./index.c60489a3.js";import"./Checkbox.8ab5f7ef.js";import"./index.1b39e503.js";import"./index.f261a1da.js";import"./index.f0c2d15a.js";import"./index.43d1122f.js";import"./index.759fdad3.js";import"./get.098fcac7.js";import"./index.d8c90d25.js";import"./eagerComputed.f5fa6b6f.js";import"./index.ba1d4d41.js";import"./_baseIteratee.6754c99a.js";import"./DeleteOutlined.c20733d9.js";import"./index.a236503a.js";import"./useRefs.6ba305d2.js";import"./Form.fd2e6f71.js";import"./Col.f246898c.js";import"./useFlexGapSupport.bc19674b.js";import"./useSize.8bac651c.js";import"./transButton.c4b11b16.js";import"./index.96a2e21a.js";import"./index.a81ad07d.js";import"./useWindowSizeFn.504c208c.js";import"./FullscreenOutlined.5f1618bd.js";import"./index.9f6d757a.js";import"./index.f430bb82.js";import"./uuid.2b29000c.js";import"./download.412b6d2d.js";import"./base64Conver.08b9f4ec.js";import"./index.1285e471.js";import"./index.b90c478c.js";import"./uniqBy.be8e46f8.js";import"./index.e4e7d69e.js";import"./index.bc3d8a41.js";import"./useContentViewHeight.cac99c13.js";import"./ArrowLeftOutlined.239c57ee.js";import"./index.6a43d095.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>C(h,{value:o[t],onChange:e=>{o[t]=e}})}],k=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:o}=_();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function w(o,t,e,B,F,M){const a=r("BasicForm"),m=r("CollapseContainer"),s=r("PageWrapper");return d(),f(s,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:p(()=>[i(m,{title:"MarkDown\u8868\u5355"},{default:p(()=>[i(a,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var _o=u(k,[["render",w]]);export{_o as default};
