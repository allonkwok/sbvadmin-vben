import{B as b}from"./TableImg.793288a8.js";import{l as g}from"./BasicForm.79959a07.js";import{u as C}from"./useTable.4c24b03a.js";import{g as T,d as w}from"./System.cd35bada.js";import{u as D}from"./index.df0c3a0c.js";import{M as _,c as S,s as B}from"./MenuDrawer.477a8787.js";import{aw as k,a as M,ay as r,o as h,h as y,n as c,z as l,B as F,j as E,l as A,al as R,E as v}from"./index.872999b3.js";import"./index.013e814a.js";import"./Checkbox.bb87bcae.js";import"./index.c9ae0d51.js";import"./index.cd6b0659.js";import"./eagerComputed.e574acb2.js";import"./useForm.5cc0ce64.js";import"./index.592fb16f.js";import"./index.e427e784.js";import"./index.bc5a74e8.js";import"./useSize.a5fd0ec1.js";import"./useWindowSizeFn.0873b5ce.js";import"./useContentViewHeight.96785685.js";import"./ArrowLeftOutlined.fbbf87b6.js";import"./index.aea73539.js";import"./transButton.a981ddbf.js";import"./index.4bb4bcb7.js";import"./index.88fca66f.js";import"./index.e07f44c0.js";import"./uuid.2b29000c.js";import"./index.f4f266b1.js";import"./_baseIteratee.95e56b74.js";import"./get.556a1b26.js";import"./DeleteOutlined.b6130a3a.js";import"./index.05381eef.js";import"./useRefs.4d2241f2.js";import"./Form.66ee2d29.js";import"./Col.1e985536.js";import"./useFlexGapSupport.c2d20f1f.js";import"./index.c734e83b.js";import"./FullscreenOutlined.8fe49e48.js";import"./index.1edc138e.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.7c1fc6c1.js";import"./index.e6cdfd8e.js";import"./fromPairs.84aabb58.js";import"./scrollTo.239f8d25.js";import"./index.7c621418.js";/* empty css              *//* empty css              */import"./index.0b7a2b9f.js";import"./index.3b391897.js";import"./index.2b5424e1.js";import"./download.a691d56c.js";import"./base64Conver.08b9f4ec.js";import"./index.76783c30.js";import"./index.55e189a8.js";import"./uniqBy.8293d542.js";import"./index.0683c534.js";const x=M({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:_,TableAction:g},setup(){const[e,{openDrawer:i}]=D(),[u,{reload:n,expandAll:d}]=C({title:"\u83DC\u5355\u5217\u8868",api:T,columns:S,formConfig:{labelWidth:120,schemas:B},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function f(){i(!0,{isUpdate:!1})}function a(o){i(!0,{record:o,isUpdate:!0})}function s(o){const{createMessage:t}=v();w(o.id).then(()=>{t.success("1")}).catch(()=>{t.error("0")}).finally(()=>{n()})}function m(){n()}function p(){R(d)}return{registerTable:u,registerDrawer:e,handleCreate:f,handleEdit:a,handleDelete:s,handleSuccess:m,onFetchSuccess:p}}});function $(e,i,u,n,d,f){const a=r("a-button"),s=r("TableAction"),m=r("BasicTable"),p=r("MenuDrawer");return h(),y("div",null,[c(m,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[c(a,{type:"primary",onClick:e.handleCreate},{default:l(()=>[F(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:l(({column:o,record:t})=>[o.key==="action"?(h(),E(s,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),c(p,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ne=k(x,[["render",$]]);export{Ne as default};
