import{B as b}from"./TableImg.ad206529.js";import{l as g}from"./BasicForm.28f6c720.js";import{u as C}from"./useTable.43ef225c.js";import{b as T}from"./system.f65dbfaf.js";import{u as _}from"./index.65efabc7.js";import{M as w,c as D,s as S}from"./MenuDrawer.c519d756.js";import{aw as B,a as k,ay as r,o as h,h as M,n as c,z as l,j as y,l as F,al as E,B as A,E as R}from"./index.6d5ffb3c.js";import{d as v}from"./system.25327fac.js";import"./index.c60489a3.js";import"./Checkbox.8ab5f7ef.js";import"./index.1b39e503.js";import"./index.d8c90d25.js";import"./eagerComputed.f5fa6b6f.js";import"./useForm.f505a74c.js";import"./index.16a58b52.js";import"./index.e4e7d69e.js";import"./index.bc3d8a41.js";import"./useSize.8bac651c.js";import"./useWindowSizeFn.504c208c.js";import"./useContentViewHeight.cac99c13.js";import"./ArrowLeftOutlined.239c57ee.js";import"./index.6a43d095.js";import"./transButton.c4b11b16.js";import"./index.f0c2d15a.js";import"./index.43d1122f.js";import"./index.f261a1da.js";import"./uuid.2b29000c.js";import"./index.ba1d4d41.js";import"./_baseIteratee.6754c99a.js";import"./get.098fcac7.js";import"./DeleteOutlined.c20733d9.js";import"./index.a236503a.js";import"./useRefs.6ba305d2.js";import"./Form.fd2e6f71.js";import"./Col.f246898c.js";import"./useFlexGapSupport.bc19674b.js";import"./index.a81ad07d.js";import"./FullscreenOutlined.5f1618bd.js";import"./index.89c4fe79.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c52e10c5.js";import"./index.f430bb82.js";import"./fromPairs.84aabb58.js";import"./scrollTo.36984f1f.js";import"./index.bef13255.js";/* empty css              *//* empty css              */import"./index.759fdad3.js";import"./index.96a2e21a.js";import"./index.9f6d757a.js";import"./download.412b6d2d.js";import"./base64Conver.08b9f4ec.js";import"./index.1285e471.js";import"./index.b90c478c.js";import"./uniqBy.be8e46f8.js";import"./index.5cc8d0b1.js";const x=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:w,TableAction:g},setup(){const[e,{openDrawer:i}]=_(),[u,{reload:n,expandAll:d}]=C({title:"\u83DC\u5355\u5217\u8868",api:T,columns:D,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function f(){i(!0,{isUpdate:!1})}function a(o){i(!0,{record:o,isUpdate:!0})}function s(o){const{createMessage:t}=R();v(o.id).then(()=>{t.success("1")}).catch(()=>{t.error("0")}).finally(()=>{n()})}function m(){n()}function p(){E(d)}return{registerTable:u,registerDrawer:e,handleCreate:f,handleEdit:a,handleDelete:s,handleSuccess:m,onFetchSuccess:p}}}),$=A(" \u65B0\u589E\u83DC\u5355 ");function N(e,i,u,n,d,f){const a=r("a-button"),s=r("TableAction"),m=r("BasicTable"),p=r("MenuDrawer");return h(),M("div",null,[c(m,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[c(a,{type:"primary",onClick:e.handleCreate},{default:l(()=>[$]),_:1},8,["onClick"])]),bodyCell:l(({column:o,record:t})=>[o.key==="action"?(h(),y(s,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),c(p,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ie=B(x,[["render",N]]);export{Ie as default};
