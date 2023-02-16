import{B as C}from"./TableImg.3408e1a1.js";import{l as T}from"./BasicForm.c5e66a6c.js";import{u as _}from"./useTable.4289d9c7.js";import{b as B}from"./index.88d64ff1.js";import{L as M,g as S,c as y,s as I,d as L}from"./LogModal.dc0852fb.js";import{aw as k,a as w,w as E,ay as r,o as g,h as F,n as c,z as u,B as R,j as A,l as D,E as $}from"./index.aef79208.js";import"./index.83ab6671.js";import"./Checkbox.1d2d0a80.js";import"./index.29676f2b.js";import"./index.cdf63b6f.js";import"./eagerComputed.1c9ed21e.js";import"./useForm.84254c51.js";import"./index.c4931ba9.js";import"./index.59391880.js";import"./index.218ca60e.js";import"./useSize.8e5c3633.js";import"./useWindowSizeFn.17123558.js";import"./useContentViewHeight.ce900a42.js";import"./ArrowLeftOutlined.ab1f1b5a.js";import"./index.f922794d.js";import"./transButton.f4117c01.js";import"./index.7d383180.js";import"./index.a5a7b8ac.js";import"./index.ba19ca66.js";import"./uuid.2b29000c.js";import"./index.278bbb02.js";import"./_baseIteratee.ee88bd48.js";import"./get.083c96ca.js";import"./DeleteOutlined.692f9018.js";import"./index.3f0fd92d.js";import"./useRefs.66483b8f.js";import"./Form.1bdfcb04.js";import"./Col.cde1cdc2.js";import"./useFlexGapSupport.b65cfcab.js";import"./index.a57c6656.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.e2185902.js";import"./FullscreenOutlined.e6006c69.js";import"./index.208aa57a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.58c6edf0.js";import"./index.8691811c.js";/* empty css              *//* empty css              */import"./index.f4413102.js";import"./index.353a0fda.js";import"./index.a9c6cbef.js";import"./download.27427d73.js";import"./base64Conver.08b9f4ec.js";import"./index.5cebee16.js";import"./index.f85c5520.js";import"./uniqBy.c8253166.js";const v=w({name:"LogManagement",components:{BasicTable:C,LogModal:M,TableAction:T},setup(){const{createMessage:e}=$(),[d,{openModal:n}]=B(),f=E({}),[h,{reload:i,updateTableDataRecord:a}]=_({title:"\u5217\u8868",api:S,rowKey:"id",columns:y,formConfig:{labelWidth:120,schemas:I,autoSubmitOnEnter:!0},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function s(){n(!0,{isUpdate:!1})}function l(o){n(!0,{record:o,isUpdate:!0})}function m(o){o.id,L(o.id).then(t=>{e.success(t)}).catch(t=>{e.error(t)}).finally(()=>{i()})}function p({isUpdate:o,values:t}){if(o){const b=a(t.id,t)}else i()}return{registerTable:h,registerModal:d,handleCreate:s,handleEdit:l,handleDelete:m,handleSuccess:p,searchInfo:f}}});function N(e,d,n,f,h,i){const a=r("a-button"),s=r("TableAction"),l=r("BasicTable"),m=r("LogModal");return g(),F("div",null,[c(l,{onRegister:e.registerTable,searchInfo:e.searchInfo},{toolbar:u(()=>[c(a,{type:"primary",onClick:e.handleCreate},{default:u(()=>[R(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:u(({column:p,record:o})=>[p.key==="action"?(g(),A(s,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])):D("",!0)]),_:1},8,["onRegister","searchInfo"]),c(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var No=k(v,[["render",N]]);export{No as default};
