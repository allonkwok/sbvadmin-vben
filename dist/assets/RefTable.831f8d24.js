import{B as E}from"./TableImg.c4bb2332.js";import"./componentMap.f7ad5fcd.js";import{getBasicColumns as p,getBasicShortColumns as R}from"./tableData.867891d4.js";import{au as T,a as w,v as D,aw as f,o as _,h as S,i as g,n as e,z as u,B as i,E as h,k as L}from"./index.fd607933.js";import{d as y}from"./table.db812cb8.js";import"./index.8fadb3a1.js";import"./Checkbox.c69cd213.js";import"./index.9ff4adc5.js";import"./index.78ef151a.js";import"./eagerComputed.04145c6f.js";import"./BasicForm.487dcdb3.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.6de668b2.js";import"./index.f7287486.js";import"./index.99b1969b.js";import"./_baseIteratee.b40e6eda.js";import"./get.3f90d58a.js";import"./DeleteOutlined.fe36862c.js";import"./index.ed90e99b.js";import"./useRefs.74f2c964.js";import"./Form.d51c38ac.js";import"./Col.36cdc9bf.js";import"./useFlexGapSupport.06a0420f.js";import"./useSize.3e437db8.js";import"./index.4d5bcc35.js";import"./uniqBy.4a44bbbc.js";import"./index.e25bbbe7.js";import"./useWindowSizeFn.3f90297d.js";import"./FullscreenOutlined.fcd749e0.js";import"./index.a30e6e53.js";import"./useForm.677d6921.js";import"./RadioButtonGroup.31fe683a.js";import"./useFormItem.4c54f273.js";import"./index.f1677d87.js";import"./index.b71c5540.js";import"./index.af5a653a.js";import"./useContentViewHeight.c000af9b.js";import"./ArrowLeftOutlined.8c15a711.js";import"./index.8900aab6.js";import"./transButton.688fd0ae.js";import"./index.cae5315f.js";import"./index.bd73961c.js";import"./index.35074e10.js";import"./index.fe7fc01f.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.cf2729a4.js";import"./index.d0273064.js";import"./isNumber.a9cd6fbe.js";import"./fromPairs.84aabb58.js";import"./scrollTo.53697b5f.js";import"./index.9c5279a1.js";import"./index.600d6d22.js";import"./index.c6d60ee9.js";import"./index.6dd958ab.js";import"./download.0725302e.js";import"./base64Conver.08b9f4ec.js";import"./index.14f64395.js";import"./index.8973fcff.js";import"./select.5c4a37cc.js";const K=w({components:{BasicTable:E},setup(){const o=D(null),{createMessage:a}=h();function n(){const m=L(o);if(!m)throw new Error("tableAction is null");return m}function s(){n().setLoading(!0),setTimeout(()=>{n().setLoading(!1)},1e3)}function r(){n().setColumns(R())}function c(){n().setColumns(p()),n().reload({page:1})}function t(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function l(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function C(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function d(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function F(){n().setPagination({current:2}),n().reload()}function B(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function k(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function b(){n().setSelectedRowKeys(["0","1","2"])}function A(){n().clearSelectedRowKeys()}return{tableRef:o,api:y,columns:p(),changeLoading:s,changeColumns:r,reloadTable:c,getColumn:t,getTableData:l,getTableRawData:C,getPagination:d,setPaginationInfo:F,getSelectRowList:B,getSelectRowKeyList:k,setSelectedRowKeyList:b,clearSelect:A}}}),v={class:"p-4"},P={class:"mb-4"},$={class:"mb-4"};function M(o,a,n,s,r,c){const t=f("a-button"),l=f("BasicTable");return _(),S("div",v,[g("div",P,[e(t,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[i(" \u8FD8\u539F ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[i(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[i(" \u66F4\u6539Columns ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[i(" \u83B7\u53D6Columns ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[i(" \u83B7\u53D6\u8868\u683C\u6570\u636E ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ")]),_:1},8,["onClick"])]),g("div",$,[e(t,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[i(" \u83B7\u53D6\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[i(" \u83B7\u53D6\u9009\u4E2D\u884CKey ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[i(" \u8BBE\u7F6E\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[i(" \u6E05\u7A7A\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ")]),_:1},8,["onClick"])]),e(l,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Jo=T(K,[["render",M]]);export{Jo as default};