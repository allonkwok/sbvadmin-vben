import{B as l}from"./TableImg.3408e1a1.js";import"./BasicForm.c5e66a6c.js";import{u as n}from"./useTable.4289d9c7.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.9dd8f71d.js";import{aw as _,a as b,ay as a,o as f,h as C,n as t,z as r,B as s}from"./index.aef79208.js";import"./index.83ab6671.js";import"./Checkbox.1d2d0a80.js";import"./index.29676f2b.js";import"./index.cdf63b6f.js";import"./eagerComputed.1c9ed21e.js";import"./useForm.84254c51.js";import"./index.c4931ba9.js";import"./index.59391880.js";import"./index.218ca60e.js";import"./useSize.8e5c3633.js";import"./useWindowSizeFn.17123558.js";import"./useContentViewHeight.ce900a42.js";import"./ArrowLeftOutlined.ab1f1b5a.js";import"./index.f922794d.js";import"./transButton.f4117c01.js";import"./index.7d383180.js";import"./index.a5a7b8ac.js";import"./index.ba19ca66.js";import"./uuid.2b29000c.js";import"./index.278bbb02.js";import"./_baseIteratee.ee88bd48.js";import"./get.083c96ca.js";import"./DeleteOutlined.692f9018.js";import"./index.3f0fd92d.js";import"./useRefs.66483b8f.js";import"./Form.1bdfcb04.js";import"./Col.cde1cdc2.js";import"./useFlexGapSupport.b65cfcab.js";import"./index.88d64ff1.js";import"./FullscreenOutlined.e6006c69.js";import"./index.a57c6656.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.e2185902.js";import"./index.208aa57a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.58c6edf0.js";import"./index.8691811c.js";/* empty css              *//* empty css              */import"./index.f4413102.js";import"./index.353a0fda.js";import"./index.a9c6cbef.js";import"./download.27427d73.js";import"./base64Conver.08b9f4ec.js";import"./index.5cebee16.js";import"./index.f85c5520.js";import"./uniqBy.c8253166.js";import"./select.58567255.js";const T=b({components:{BasicTable:l},setup(){const[o,{expandAll:e,collapseAll:i}]=n({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:o,expandAll:e,collapseAll:i}}}),B={class:"p-4"};function g(o,e,i,p,k,E){const m=a("a-button"),u=a("BasicTable");return f(),C("div",B,[t(u,{onRegister:o.register},{toolbar:r(()=>[t(m,{type:"primary",onClick:o.expandAll},{default:r(()=>[s("\u5C55\u5F00\u5168\u90E8")]),_:1},8,["onClick"]),t(m,{type:"primary",onClick:o.collapseAll},{default:r(()=>[s("\u6298\u53E0\u5168\u90E8")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var Fo=_(T,[["render",g]]);export{Fo as default};
