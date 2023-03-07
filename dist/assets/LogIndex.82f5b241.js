import{B as b}from"./TableImg.4c6ba9af.js";import{k as C}from"./componentMap.467f5056.js";import{u as T}from"./useTable.3020f5dd.js";import{b as _}from"./index.4724000a.js";import{L as B,g as M,c as S,s as k,d as I}from"./LogModal.0273af2d.js";import{au as L,a as y,w,aw as r,o as g,h as E,n as c,z as u,B as F,j as R,l as A,E as D}from"./index.a3482497.js";import"./index.8d5d3503.js";import"./Checkbox.0bdd2b18.js";import"./index.9376db74.js";import"./index.e280e2bf.js";import"./eagerComputed.fd853f3b.js";import"./BasicForm.e0e0ece8.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.ed1df8ed.js";import"./index.6d61c417.js";import"./index.45d53aba.js";import"./_baseIteratee.cc596e32.js";import"./get.48b724f1.js";import"./DeleteOutlined.feb25f86.js";import"./index.d63ee733.js";import"./useRefs.bb17924d.js";import"./Form.a6fc1c44.js";import"./Col.06363816.js";import"./useFlexGapSupport.c0d68dd8.js";import"./useSize.133c759a.js";import"./index.7da124a4.js";import"./uniqBy.97c3dc88.js";import"./index.0cd2b4d5.js";import"./useForm.01b01243.js";import"./RadioButtonGroup.58e80efc.js";import"./useFormItem.9bc81bfa.js";import"./index.4415217c.js";import"./index.92d5dc6e.js";import"./index.1da7c209.js";import"./useWindowSizeFn.d7251f20.js";import"./useContentViewHeight.487104cf.js";import"./ArrowLeftOutlined.e079358b.js";import"./index.37b1674c.js";import"./transButton.d716ac6c.js";import"./index.2e8c53a3.js";import"./index.5ffffb17.js";import"./index.c7a1afab.js";import"./index.0b7f07db.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.bee57f5b.js";import"./FullscreenOutlined.92f2efed.js";import"./index.f68b4e73.js";import"./isNumber.db25cdd5.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f5f1ebde.js";import"./index.0d05a749.js";import"./index.83536ca6.js";import"./index.7b4fe9fb.js";import"./index.f0aeca6f.js";import"./download.4bece761.js";import"./base64Conver.08b9f4ec.js";import"./index.ca00f92f.js";import"./index.6b9bae6c.js";const $=y({name:"LogManagement",components:{BasicTable:b,LogModal:B,TableAction:C},setup(){const{createMessage:o}=D(),[d,{openModal:i}]=_(),f=w({}),[h,{reload:n,updateTableDataRecord:a}]=T({title:"\u5217\u8868",api:M,rowKey:"id",columns:S,formConfig:{labelWidth:120,schemas:k,autoSubmitOnEnter:!0},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return e},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function s(){i(!0,{isUpdate:!1})}function m(e){i(!0,{record:e,isUpdate:!0})}function l(e){I(e.id).then(t=>{o.success(t)}).catch(t=>{o.error(t)}).finally(()=>{n()})}function p({isUpdate:e,values:t}){if(e){const N=a(t.id,t)}else n()}return{registerTable:h,registerModal:d,handleCreate:s,handleEdit:m,handleDelete:l,handleSuccess:p,searchInfo:f}}});function v(o,d,i,f,h,n){const a=r("a-button"),s=r("TableAction"),m=r("BasicTable"),l=r("LogModal");return g(),E("div",null,[c(m,{onRegister:o.registerTable,searchInfo:o.searchInfo},{toolbar:u(()=>[c(a,{type:"primary",onClick:o.handleCreate},{default:u(()=>[F(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:u(({column:p,record:e})=>[p.key==="action"?(g(),R(s,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,e)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","searchInfo"]),c(l,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Wo=L($,[["render",v]]);export{Wo as default};
