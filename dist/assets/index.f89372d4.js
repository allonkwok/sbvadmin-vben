var k=(h,s,t)=>new Promise((e,n)=>{var f=r=>{try{i(t.next(r))}catch(a){n(a)}},d=r=>{try{i(t.throw(r))}catch(a){n(a)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(f,d);i((t=t.apply(h,s)).next())});import{dB as x,a as T,v as w,c as B,fw as D,a7 as A,al as R,ah as V,aw as I,o as u,h as _,F as S,az as j,x as M,y as N,n as m,k as o,z as p,B as y,t as b,j as z,l as F}from"./index.a3482497.js";import $ from"./DetailModal.62aa7fda.js";import{B as H}from"./TableImg.4c6ba9af.js";import{k as q}from"./componentMap.467f5056.js";import{u as G}from"./useTable.3020f5dd.js";import{b as J}from"./index.4724000a.js";import{getColumns as K}from"./data.44344138.js";import"./index.687b750e.js";import"./index.9cd9b69b.js";import"./get.48b724f1.js";import"./useDescription.b42e58bd.js";import"./index.8d5d3503.js";import"./Checkbox.0bdd2b18.js";import"./index.9376db74.js";import"./index.e280e2bf.js";import"./eagerComputed.fd853f3b.js";import"./BasicForm.e0e0ece8.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.ed1df8ed.js";import"./index.6d61c417.js";import"./index.45d53aba.js";import"./_baseIteratee.cc596e32.js";import"./DeleteOutlined.feb25f86.js";import"./index.d63ee733.js";import"./useRefs.bb17924d.js";import"./Form.a6fc1c44.js";import"./Col.06363816.js";import"./useFlexGapSupport.c0d68dd8.js";import"./useSize.133c759a.js";import"./index.7da124a4.js";import"./uniqBy.97c3dc88.js";import"./index.0cd2b4d5.js";import"./useForm.01b01243.js";import"./RadioButtonGroup.58e80efc.js";import"./useFormItem.9bc81bfa.js";import"./index.4415217c.js";import"./index.92d5dc6e.js";import"./index.1da7c209.js";import"./useWindowSizeFn.d7251f20.js";import"./useContentViewHeight.487104cf.js";import"./ArrowLeftOutlined.e079358b.js";import"./index.37b1674c.js";import"./transButton.d716ac6c.js";import"./index.2e8c53a3.js";import"./index.5ffffb17.js";import"./index.c7a1afab.js";import"./index.0b7f07db.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.bee57f5b.js";import"./FullscreenOutlined.92f2efed.js";import"./index.f68b4e73.js";import"./isNumber.db25cdd5.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f5f1ebde.js";import"./index.0d05a749.js";import"./index.83536ca6.js";import"./index.7b4fe9fb.js";import"./index.f0aeca6f.js";import"./download.4bece761.js";import"./base64Conver.08b9f4ec.js";import"./index.ca00f92f.js";import"./index.6b9bae6c.js";const O=()=>x.get({url:"/error"}),P={class:"p-4"},Q=["src"],po=T({__name:"index",setup(h){const s=w(),t=w([]),{t:e}=B(),n=D(),[f,{setTableData:d}]=G({title:e("sys.errorLog.tableTitle"),columns:K(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=J();A(()=>n.getErrorLogInfoList,l=>{R(()=>{d(V(l))})},{immediate:!0});function a(l){s.value=l,r(!0)}function C(){throw new Error("fire vue error!")}function E(){t.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield O()})}return(l,U)=>{const g=I("a-button");return u(),_("div",P,[(u(!0),_(S,null,j(t.value,c=>M((u(),_("img",{key:c,src:c,alt:""},null,8,Q)),[[N,!1]])),128)),m($,{info:s.value,onRegister:o(i)},null,8,["info","onRegister"]),m(o(H),{onRegister:o(f),class:"error-handle-table"},{toolbar:p(()=>[m(g,{onClick:C,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),m(g,{onClick:E,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),m(g,{onClick:L,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:p(({column:c,record:v})=>[c.key==="action"?(u(),z(o(q),{key:0,actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,v)}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"])])}}});export{po as default};
