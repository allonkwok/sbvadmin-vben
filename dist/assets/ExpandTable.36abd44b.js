import{B as d}from"./TableImg.ad206529.js";import{l as F}from"./BasicForm.28f6c720.js";import{u as B}from"./useTable.43ef225c.js";import{P as C}from"./index.16a58b52.js";import{getBasicColumns as f}from"./tableData.0902c609.js";import{d as b}from"./table.98dd51b2.js";import{aw as E,a as g,ay as i,o as a,j as m,z as r,n as _,i as T,t as w,l as A}from"./index.6d5ffb3c.js";import"./index.c60489a3.js";import"./Checkbox.8ab5f7ef.js";import"./index.1b39e503.js";import"./index.d8c90d25.js";import"./eagerComputed.f5fa6b6f.js";import"./useForm.f505a74c.js";import"./index.f0c2d15a.js";import"./index.43d1122f.js";import"./index.f261a1da.js";import"./uuid.2b29000c.js";import"./index.ba1d4d41.js";import"./_baseIteratee.6754c99a.js";import"./get.098fcac7.js";import"./DeleteOutlined.c20733d9.js";import"./index.a236503a.js";import"./useRefs.6ba305d2.js";import"./Form.fd2e6f71.js";import"./Col.f246898c.js";import"./useFlexGapSupport.bc19674b.js";import"./useSize.8bac651c.js";import"./useWindowSizeFn.504c208c.js";import"./index.a81ad07d.js";import"./FullscreenOutlined.5f1618bd.js";import"./index.89c4fe79.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c52e10c5.js";import"./index.f430bb82.js";import"./fromPairs.84aabb58.js";import"./scrollTo.36984f1f.js";import"./index.bef13255.js";/* empty css              *//* empty css              */import"./index.759fdad3.js";import"./transButton.c4b11b16.js";import"./index.96a2e21a.js";import"./index.9f6d757a.js";import"./download.412b6d2d.js";import"./base64Conver.08b9f4ec.js";import"./index.1285e471.js";import"./index.b90c478c.js";import"./uniqBy.be8e46f8.js";import"./index.e4e7d69e.js";import"./index.bc3d8a41.js";import"./useContentViewHeight.cac99c13.js";import"./ArrowLeftOutlined.239c57ee.js";import"./index.6a43d095.js";const D=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function p(t){}function n(t){}return{registerTable:o,handleDelete:p,handleOpen:n}}});function y(o,p,n,t,h,k){const l=i("TableAction"),s=i("BasicTable"),c=i("PageWrapper");return a(),m(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:r(()=>[_(s,{onRegister:o.registerTable},{expandedRowRender:r(({record:e})=>[T("span",null,"No: "+w(e.no),1)]),bodyCell:r(({column:e,record:u})=>[e.key==="action"?(a(),m(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):A("",!0)]),_:1},8,["onRegister"])]),_:1})}var xo=E(D,[["render",y]]);export{xo as default};
