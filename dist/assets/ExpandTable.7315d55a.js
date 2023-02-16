import{B as d}from"./TableImg.3408e1a1.js";import{l as F}from"./BasicForm.c5e66a6c.js";import{u as B}from"./useTable.4289d9c7.js";import{P as C}from"./index.c4931ba9.js";import{getBasicColumns as f}from"./tableData.9dd8f71d.js";import{d as b}from"./table.25ed4546.js";import{aw as E,a as g,ay as i,o as a,j as m,z as r,n as _,i as T,t as w,l as A}from"./index.aef79208.js";import"./index.83ab6671.js";import"./Checkbox.1d2d0a80.js";import"./index.29676f2b.js";import"./index.cdf63b6f.js";import"./eagerComputed.1c9ed21e.js";import"./useForm.84254c51.js";import"./index.7d383180.js";import"./index.a5a7b8ac.js";import"./index.ba19ca66.js";import"./uuid.2b29000c.js";import"./index.278bbb02.js";import"./_baseIteratee.ee88bd48.js";import"./get.083c96ca.js";import"./DeleteOutlined.692f9018.js";import"./index.3f0fd92d.js";import"./useRefs.66483b8f.js";import"./Form.1bdfcb04.js";import"./Col.cde1cdc2.js";import"./useFlexGapSupport.b65cfcab.js";import"./useSize.8e5c3633.js";import"./useWindowSizeFn.17123558.js";import"./index.88d64ff1.js";import"./FullscreenOutlined.e6006c69.js";import"./index.a57c6656.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.e2185902.js";import"./index.208aa57a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.58c6edf0.js";import"./index.8691811c.js";/* empty css              *//* empty css              */import"./index.f4413102.js";import"./transButton.f4117c01.js";import"./index.353a0fda.js";import"./index.a9c6cbef.js";import"./download.27427d73.js";import"./base64Conver.08b9f4ec.js";import"./index.5cebee16.js";import"./index.f85c5520.js";import"./uniqBy.c8253166.js";import"./index.59391880.js";import"./index.218ca60e.js";import"./useContentViewHeight.ce900a42.js";import"./ArrowLeftOutlined.ab1f1b5a.js";import"./index.f922794d.js";import"./select.58567255.js";const D=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function p(t){}function n(t){}return{registerTable:o,handleDelete:p,handleOpen:n}}});function y(o,p,n,t,h,k){const l=i("TableAction"),s=i("BasicTable"),c=i("PageWrapper");return a(),m(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:r(()=>[_(s,{onRegister:o.registerTable},{expandedRowRender:r(({record:e})=>[T("span",null,"No: "+w(e.no),1)]),bodyCell:r(({column:e,record:u})=>[e.key==="action"?(a(),m(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):A("",!0)]),_:1},8,["onRegister"])]),_:1})}var Ro=E(D,[["render",y]]);export{Ro as default};
