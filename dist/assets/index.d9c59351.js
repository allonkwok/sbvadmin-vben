import{m as c,B as l}from"./BasicForm.28f6c720.js";import{aw as d,a as g,ay as r,o as f,j as B,z as F,n as t,E as _}from"./index.6d5ffb3c.js";import{u as A}from"./useForm.f505a74c.js";import{P as C}from"./index.16a58b52.js";import{A as a}from"./index.9f6d757a.js";import{u as m}from"./upload.0a234d44.js";/* empty css              *//* empty css              */import"./index.89c4fe79.js";import"./index.c60489a3.js";import"./Checkbox.8ab5f7ef.js";import"./index.1b39e503.js";import"./index.f261a1da.js";import"./index.f0c2d15a.js";import"./index.43d1122f.js";import"./index.759fdad3.js";import"./get.098fcac7.js";import"./index.d8c90d25.js";import"./eagerComputed.f5fa6b6f.js";import"./index.ba1d4d41.js";import"./_baseIteratee.6754c99a.js";import"./DeleteOutlined.c20733d9.js";import"./index.a236503a.js";import"./useRefs.6ba305d2.js";import"./Form.fd2e6f71.js";import"./Col.f246898c.js";import"./useFlexGapSupport.bc19674b.js";import"./useSize.8bac651c.js";import"./transButton.c4b11b16.js";import"./index.96a2e21a.js";import"./index.a81ad07d.js";import"./useWindowSizeFn.504c208c.js";import"./FullscreenOutlined.5f1618bd.js";import"./index.f430bb82.js";import"./uuid.2b29000c.js";import"./download.412b6d2d.js";import"./base64Conver.08b9f4ec.js";import"./index.1285e471.js";import"./index.b90c478c.js";import"./uniqBy.be8e46f8.js";import"./index.e4e7d69e.js";import"./index.bc3d8a41.js";import"./useContentViewHeight.cac99c13.js";import"./ArrowLeftOutlined.239c57ee.js";import"./index.6a43d095.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:m}}],E=g({components:{BasicUpload:c,BasicForm:l,PageWrapper:C,[a.name]:a},setup(){const{createMessage:o}=_(),[e]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:p=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(p)}`)},uploadApi:m,register:e}}});function P(o,e,p,$,x,y){const i=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return f(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:F(()=>[t(i,{message:"\u57FA\u7840\u793A\u4F8B"}),t(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),t(i,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),t(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var Ao=d(E,[["render",P]]);export{Ao as default};
