var m=(i,u,o)=>new Promise((n,l)=>{var r=t=>{try{a(o.next(t))}catch(e){l(e)}},p=t=>{try{a(o.throw(t))}catch(e){l(e)}},a=t=>t.done?n(t.value):Promise.resolve(t.value).then(r,p);a((o=o.apply(i,u)).next())});import{B as w}from"./TableImg.c4bb2332.js";import{k as E}from"./componentMap.f7ad5fcd.js";import{u as h}from"./useTable.d94d9db6.js";import{o as F}from"./select.5c4a37cc.js";import{d as D}from"./table.db812cb8.js";import{t as b}from"./tree.c74b79ea.js";import{au as B,a as v,v as R,aw as c,o as C,h as g,n as x,z as A,j as I,l as k,ah as y,E as T}from"./index.fd607933.js";import"./index.8fadb3a1.js";import"./Checkbox.c69cd213.js";import"./index.9ff4adc5.js";import"./index.78ef151a.js";import"./eagerComputed.04145c6f.js";import"./BasicForm.487dcdb3.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.6de668b2.js";import"./index.f7287486.js";import"./index.99b1969b.js";import"./_baseIteratee.b40e6eda.js";import"./get.3f90d58a.js";import"./DeleteOutlined.fe36862c.js";import"./index.ed90e99b.js";import"./useRefs.74f2c964.js";import"./Form.d51c38ac.js";import"./Col.36cdc9bf.js";import"./useFlexGapSupport.06a0420f.js";import"./useSize.3e437db8.js";import"./index.4d5bcc35.js";import"./uniqBy.4a44bbbc.js";import"./index.e25bbbe7.js";import"./useWindowSizeFn.3f90297d.js";import"./FullscreenOutlined.fcd749e0.js";import"./index.a30e6e53.js";import"./useForm.677d6921.js";import"./RadioButtonGroup.31fe683a.js";import"./useFormItem.4c54f273.js";import"./index.f1677d87.js";import"./index.b71c5540.js";import"./index.af5a653a.js";import"./useContentViewHeight.c000af9b.js";import"./ArrowLeftOutlined.8c15a711.js";import"./index.8900aab6.js";import"./transButton.688fd0ae.js";import"./index.cae5315f.js";import"./index.bd73961c.js";import"./index.35074e10.js";import"./index.fe7fc01f.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.cf2729a4.js";import"./index.d0273064.js";import"./isNumber.a9cd6fbe.js";import"./fromPairs.84aabb58.js";import"./scrollTo.53697b5f.js";import"./index.9c5279a1.js";import"./index.600d6d22.js";import"./index.c6d60ee9.js";import"./index.6dd958ab.js";import"./download.0725302e.js";import"./base64Conver.08b9f4ec.js";import"./index.14f64395.js";import"./index.8973fcff.js";const _=[{title:"\u8F93\u5165\u6846",dataIndex:"name-group",editRow:!0,children:[{title:"\u8F93\u5165\u6846",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",editRow:!0,width:150},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",editRow:!0,align:"right",editRule:i=>m(void 0,null,function*(){return i==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""})},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150}]},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:F,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:b,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"\u52FE\u9009\u6846",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:i=>i?"\u662F":"\u5426",width:100},{title:"\u5F00\u5173",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:i=>i?"\u5F00":"\u5173",width:100},{title:"\u5355\u9009\u6846",dataIndex:"radio1",editRow:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u5355\u9009\u6309\u94AE\u6846",dataIndex:"radio2",editRow:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u5355\u9009\u6846",dataIndex:"radio3",editRow:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:F,resultField:"list",labelField:"name",valueField:"id"},width:200}],P=v({components:{BasicTable:w,TableAction:E},setup(){const{createMessage:i}=T(),u=R(""),[o]=h({title:"\u53EF\u7F16\u8F91\u884C\u793A\u4F8B",titleHelpMessage:["\u672C\u4F8B\u4E2D\u4FEE\u6539[\u6570\u5B57\u8F93\u5165\u6846]\u8FD9\u4E00\u5217\u65F6\uFF0C\u540C\u4E00\u884C\u7684[\u8FDC\u7A0B\u4E0B\u62C9]\u5217\u7684\u5F53\u524D\u7F16\u8F91\u6570\u636E\u4E5F\u4F1A\u540C\u6B65\u53D1\u751F\u6539\u53D8"],api:D,columns:_,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action"}});function n(t){var e;u.value=t.key,(e=t.onEdit)==null||e.call(t,!0)}function l(t){var e;u.value="",(e=t.onEdit)==null||e.call(t,!1,!1)}function r(t){return m(this,null,function*(){var d,s;if(i.loading({content:"\u6B63\u5728\u4FDD\u5B58...",duration:0,key:"saving"}),yield(d=t.onValid)==null?void 0:d.call(t))try{const f=y(t.editValueRefs);(yield(s=t.onEdit)==null?void 0:s.call(t,!1,!0))&&(u.value=""),i.success({content:"\u6570\u636E\u5DF2\u4FDD\u5B58",key:"saving"})}catch(f){i.error({content:"\u4FDD\u5B58\u5931\u8D25",key:"saving"})}else i.error({content:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u6570\u636E",key:"saving"})})}function p(t,e){return t.editable?[{label:"\u4FDD\u5B58",onClick:r.bind(null,t,e)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,e)}}]:[{label:"\u7F16\u8F91",disabled:u.value?u.value!==t.key:!1,onClick:n.bind(null,t)}]}function a({column:t,value:e,record:d}){t.dataIndex==="id"&&(d.editValueRefs.name4.value=`${e}`)}return{registerTable:o,handleEdit:n,createActions:p,onEditChange:a}}}),M={class:"p-4"};function S(i,u,o,n,l,r){const p=c("TableAction"),a=c("BasicTable");return C(),g("div",M,[x(a,{onRegister:i.registerTable,onEditChange:i.onEditChange},{bodyCell:A(({column:t,record:e})=>[t.key==="action"?(C(),I(p,{key:0,actions:i.createActions(e,t)},null,8,["actions"])):k("",!0)]),_:1},8,["onRegister","onEditChange"])])}var Kt=B(P,[["render",S]]);export{Kt as default};