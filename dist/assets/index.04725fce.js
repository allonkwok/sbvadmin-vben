import{B as b}from"./TableImg.ad206529.js";import{l as C}from"./BasicForm.28f6c720.js";import{u as g}from"./useTable.43ef225c.js";import{c as _}from"./system.f65dbfaf.js";import{b as T}from"./index.a81ad07d.js";import{D as B,c as D,s as E}from"./DeptModal.d08d841b.js";import{aw as k,a as M,ay as e,o as d,h as y,n as a,z as m,j as S,l as w,B as R}from"./index.6d5ffb3c.js";import"./index.c60489a3.js";import"./Checkbox.8ab5f7ef.js";import"./index.1b39e503.js";import"./index.d8c90d25.js";import"./eagerComputed.f5fa6b6f.js";import"./useForm.f505a74c.js";import"./index.16a58b52.js";import"./index.e4e7d69e.js";import"./index.bc3d8a41.js";import"./useSize.8bac651c.js";import"./useWindowSizeFn.504c208c.js";import"./useContentViewHeight.cac99c13.js";import"./ArrowLeftOutlined.239c57ee.js";import"./index.6a43d095.js";import"./transButton.c4b11b16.js";import"./index.f0c2d15a.js";import"./index.43d1122f.js";import"./index.f261a1da.js";import"./uuid.2b29000c.js";import"./index.ba1d4d41.js";import"./_baseIteratee.6754c99a.js";import"./get.098fcac7.js";import"./DeleteOutlined.c20733d9.js";import"./index.a236503a.js";import"./useRefs.6ba305d2.js";import"./Form.fd2e6f71.js";import"./Col.f246898c.js";import"./useFlexGapSupport.bc19674b.js";import"./index.89c4fe79.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c52e10c5.js";import"./FullscreenOutlined.5f1618bd.js";import"./index.f430bb82.js";import"./fromPairs.84aabb58.js";import"./scrollTo.36984f1f.js";import"./index.bef13255.js";/* empty css              *//* empty css              */import"./index.759fdad3.js";import"./index.96a2e21a.js";import"./index.9f6d757a.js";import"./download.412b6d2d.js";import"./base64Conver.08b9f4ec.js";import"./index.1285e471.js";import"./index.b90c478c.js";import"./uniqBy.be8e46f8.js";const v=M({name:"DeptManagement",components:{BasicTable:b,DeptModal:B,TableAction:C},setup(){const[o,{openModal:i}]=T(),[p,{reload:s}]=g({title:"\u90E8\u95E8\u5217\u8868",api:_,columns:D,formConfig:{labelWidth:120,schemas:E},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function r(t){}function n(){s()}return{registerTable:p,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:r,handleSuccess:n}}}),A=R(" \u65B0\u589E\u90E8\u95E8 ");function F(o,i,p,s,l,c){const r=e("a-button"),n=e("TableAction"),t=e("BasicTable"),f=e("DeptModal");return d(),y("div",null,[a(t,{onRegister:o.registerTable},{toolbar:m(()=>[a(r,{type:"primary",onClick:o.handleCreate},{default:m(()=>[A]),_:1},8,["onClick"])]),bodyCell:m(({column:h,record:u})=>[h.key==="action"?(d(),S(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):w("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var $o=k(v,[["render",F]]);export{$o as default};
