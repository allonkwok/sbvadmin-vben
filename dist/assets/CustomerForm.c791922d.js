import{B as C}from"./BasicForm.e0e0ece8.js";import"./componentMap.467f5056.js";import{u as B}from"./useForm.01b01243.js";import"./RadioButtonGroup.58e80efc.js";import{au as E,a as g,cD as F,I as n,aw as e,o as h,j as b,z as p,n as i,bS as v,E as A}from"./index.a3482497.js";import{P}from"./index.4415217c.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.ed1df8ed.js";import"./index.6d61c417.js";import"./index.45d53aba.js";import"./_baseIteratee.cc596e32.js";import"./get.48b724f1.js";import"./DeleteOutlined.feb25f86.js";import"./index.d63ee733.js";import"./useRefs.bb17924d.js";import"./Form.a6fc1c44.js";import"./Col.06363816.js";import"./useFlexGapSupport.c0d68dd8.js";import"./useSize.133c759a.js";import"./index.7da124a4.js";import"./uniqBy.97c3dc88.js";import"./index.4724000a.js";import"./useWindowSizeFn.d7251f20.js";import"./FullscreenOutlined.92f2efed.js";import"./index.0cd2b4d5.js";import"./index.8d5d3503.js";import"./Checkbox.0bdd2b18.js";import"./index.9376db74.js";import"./index.0b7f07db.js";import"./index.c7a1afab.js";import"./index.2e8c53a3.js";import"./index.5ffffb17.js";import"./index.83536ca6.js";import"./useFormItem.9bc81bfa.js";import"./index.e280e2bf.js";import"./eagerComputed.fd853f3b.js";import"./transButton.d716ac6c.js";import"./index.7b4fe9fb.js";import"./index.f0aeca6f.js";import"./index.f68b4e73.js";import"./isNumber.db25cdd5.js";import"./uuid.2b29000c.js";import"./download.4bece761.js";import"./base64Conver.08b9f4ec.js";import"./index.ca00f92f.js";import"./index.6b9bae6c.js";import"./index.92d5dc6e.js";import"./index.1da7c209.js";import"./useContentViewHeight.487104cf.js";import"./ArrowLeftOutlined.e079358b.js";import"./index.37b1674c.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:m=>{o.success("click search,values:"+JSON.stringify(m))},setProps:r}}});function I(o,t,r,m,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:a,field:s})=>[i(l,{value:a[s],"onUpdate:value":_=>a[s]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Wo=E(S,[["render",I]]);export{Wo as default};
