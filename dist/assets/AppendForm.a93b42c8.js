var v=(r,i,a)=>new Promise((l,m)=>{var e=o=>{try{p(a.next(o))}catch(t){m(t)}},n=o=>{try{p(a.throw(o))}catch(t){m(t)}},p=o=>o.done?l(o.value):Promise.resolve(o.value).then(e,n);p((a=a.apply(r,i)).next())});import{B as $}from"./BasicForm.487dcdb3.js";import"./componentMap.f7ad5fcd.js";import{u as h}from"./useForm.677d6921.js";import"./RadioButtonGroup.31fe683a.js";import{au as k,a as F,cD as I,I as C,cW as g,v as y,aw as d,o as c,j as f,z as u,n as _,B,l as b}from"./index.fd607933.js";import{P as q}from"./index.f1677d87.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.6de668b2.js";import"./index.f7287486.js";import"./index.99b1969b.js";import"./_baseIteratee.b40e6eda.js";import"./get.3f90d58a.js";import"./DeleteOutlined.fe36862c.js";import"./index.ed90e99b.js";import"./useRefs.74f2c964.js";import"./Form.d51c38ac.js";import"./Col.36cdc9bf.js";import"./useFlexGapSupport.06a0420f.js";import"./useSize.3e437db8.js";import"./index.4d5bcc35.js";import"./uniqBy.4a44bbbc.js";import"./index.e25bbbe7.js";import"./useWindowSizeFn.3f90297d.js";import"./FullscreenOutlined.fcd749e0.js";import"./index.a30e6e53.js";import"./index.8fadb3a1.js";import"./Checkbox.c69cd213.js";import"./index.9ff4adc5.js";import"./index.fe7fc01f.js";import"./index.35074e10.js";import"./index.cae5315f.js";import"./index.bd73961c.js";import"./index.600d6d22.js";import"./useFormItem.4c54f273.js";import"./index.78ef151a.js";import"./eagerComputed.04145c6f.js";import"./transButton.688fd0ae.js";import"./index.c6d60ee9.js";import"./index.6dd958ab.js";import"./index.d0273064.js";import"./isNumber.a9cd6fbe.js";import"./uuid.2b29000c.js";import"./download.0725302e.js";import"./base64Conver.08b9f4ec.js";import"./index.14f64395.js";import"./index.8973fcff.js";import"./index.b71c5540.js";import"./index.af5a653a.js";import"./useContentViewHeight.c000af9b.js";import"./ArrowLeftOutlined.8c15a711.js";import"./index.8900aab6.js";const S=F({components:{BasicForm:$,CollapseContainer:I,PageWrapper:q,[C.name]:C,Button:g},setup(){const[r,{appendSchemaByField:i,removeSchemaByField:a,validate:l}]=h({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",required:!0},{field:"0",component:"Input",label:" ",slot:"add"}],labelWidth:100,actionColOptions:{span:24},baseColProps:{span:8}});function m(){return v(this,null,function*(){try{const t=yield l()}catch(t){}})}const e=y(1);function n(){i({field:`field${e.value}a`,component:"Input",label:"\u5B57\u6BB5"+e.value,required:!0},""),i({field:`field${e.value}b`,component:"Input",label:"\u5B57\u6BB5"+e.value,required:!0},""),i({field:`${e.value}`,component:"Input",label:" ",slot:"add"},""),e.value++}function p(){i([{field:`field${e.value}a`,component:"Input",label:"\u5B57\u6BB5"+e.value,required:!0},{field:`field${e.value}b`,component:"Input",label:"\u5B57\u6BB5"+e.value,required:!0},{field:`${e.value}`,component:"Input",label:" ",slot:"add"}],""),e.value++}function o(t){a([`field${t}a`,`field${t}b`,`${t}`]),e.value--}return{register:r,handleSubmit:m,add:n,del:o,batchAdd:p}}});function A(r,i,a,l,m,e){const n=d("Button"),p=d("BasicForm"),o=d("CollapseContainer"),t=d("PageWrapper");return c(),f(t,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:u(()=>[_(o,{title:"\u8868\u5355\u589E\u5220"},{default:u(()=>[_(p,{onRegister:r.register,onSubmit:r.handleSubmit},{add:u(({field:s})=>[Number(s)===0?(c(),f(n,{key:0,onClick:r.add},{default:u(()=>[B("+")]),_:1},8,["onClick"])):b("",!0),Number(s)===0?(c(),f(n,{key:1,class:"ml-2",onClick:r.batchAdd},{default:u(()=>[B(" \u6279\u91CF\u6DFB\u52A0\u8868\u5355\u914D\u7F6E ")]),_:1},8,["onClick"])):b("",!0),s>0?(c(),f(n,{key:2,onClick:N=>r.del(s)},{default:u(()=>[B("-")]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Ne=k(S,[["render",A]]);export{Ne as default};