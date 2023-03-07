import{au as M,a as U,cG as $,b7 as k,bs as b,aE as N,aZ as O,b as S,s as A,f as E,aw as r,o as t,h as P,n,z as m,j as h,l as g,i as a,q as s,t as R,F as V,c as z,aN as B}from"./index.fd607933.js";import{D as T}from"./siteSetting.68e5b367.js";import{c as C,u as F}from"./index.b6e8abe7.js";import{b as G}from"./index.e25bbbe7.js";import{h as j}from"./header.d801b988.js";import"./FullscreenOutlined.fcd749e0.js";import"./index.c754dfd9.js";import"./useWindowSizeFn.3f90297d.js";import"./useContentViewHeight.c000af9b.js";import"./uniqBy.4a44bbbc.js";import"./_baseIteratee.b40e6eda.js";import"./get.3f90d58a.js";import"./index.8ca3f7d2.js";import"./index.3f46b9f8.js";import"./useRefs.74f2c964.js";import"./PlusOutlined.be90832a.js";import"./RedoOutlined.cf2729a4.js";import"./index.9e7c78cd.js";import"./lock.16d2e853.js";const q=U({name:"UserDropdown",components:{Dropdown:$,Menu:k,MenuItem:C(()=>b(()=>import("./DropMenuItem.2c8a823c.js"),["assets/DropMenuItem.2c8a823c.js","assets/index.fd607933.js","assets/index.3e9a5c09.css"])),MenuDivider:k.Divider,LockAction:C(()=>b(()=>import("./LockModal.03252be0.js"),["assets/LockModal.03252be0.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.fd607933.js","assets/index.3e9a5c09.css","assets/index.e25bbbe7.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.3f90297d.js","assets/FullscreenOutlined.fcd749e0.js","assets/BasicForm.487dcdb3.js","assets/BasicForm.fca7963c.css","assets/FormItem.vue_vue_type_script_lang.6de668b2.js","assets/index.f7287486.js","assets/index.3a3c1369.css","assets/componentMap.f7ad5fcd.js","assets/componentMap.08c8b028.css","assets/index.8fadb3a1.js","assets/index.cb0992d5.css","assets/Checkbox.c69cd213.js","assets/index.9ff4adc5.js","assets/index.695a0c50.css","assets/index.fe7fc01f.js","assets/index.9a4d3b51.css","assets/index.35074e10.js","assets/index.49ada229.css","assets/index.cae5315f.js","assets/index.47f7c782.css","assets/index.bd73961c.js","assets/index.579bd49e.css","assets/index.600d6d22.js","assets/index.ff4ce442.css","assets/useFormItem.4c54f273.js","assets/RadioButtonGroup.31fe683a.js","assets/get.3f90d58a.js","assets/index.78ef151a.js","assets/index.560eb672.css","assets/eagerComputed.04145c6f.js","assets/index.99b1969b.js","assets/index.aeeee80c.css","assets/_baseIteratee.b40e6eda.js","assets/DeleteOutlined.fe36862c.js","assets/index.ed90e99b.js","assets/index.8f5fe29a.css","assets/useRefs.74f2c964.js","assets/Form.d51c38ac.js","assets/Col.36cdc9bf.js","assets/useFlexGapSupport.06a0420f.js","assets/useSize.3e437db8.js","assets/transButton.688fd0ae.js","assets/index.c6d60ee9.js","assets/index.cd256673.css","assets/index.6dd958ab.js","assets/index.9d09be4d.css","assets/index.d0273064.js","assets/index.b1363280.css","assets/isNumber.a9cd6fbe.js","assets/uuid.2b29000c.js","assets/download.0725302e.js","assets/base64Conver.08b9f4ec.js","assets/index.14f64395.js","assets/index.cb030764.css","assets/index.8973fcff.js","assets/index.7b8b5e30.css","assets/index.4d5bcc35.js","assets/uniqBy.4a44bbbc.js","assets/index.a30e6e53.js","assets/useForm.677d6921.js","assets/lock.16d2e853.js","assets/header.d801b988.js"]))},props:{theme:N.oneOf(["dark","light"])},setup(){const e=O(),{prefixCls:f}=S("header-user-dropdown"),{t:_}=z(),{getShowDoc:v,getUseLockPage:w}=F(),d=A(),o=E(()=>{const{realName:u="",avatar:I,desc:L}=d.getUserInfo||{};return{realName:u,avatar:I||j,desc:L}}),[i,{openModal:p}]=G();function l(){p(!0)}function c(){d.confirmLoginOut()}function y(){B(T)}function D(){e("/user-center")}function x(u){switch(u.key){case"logout":c();break;case"doc":y();break;case"lock":l();break;case"user":D();break}}return{prefixCls:f,t:_,getUserInfo:o,handleMenuClick:x,getShowDoc:v,register:i,getUseLockPage:w}}}),H=["src"];function W(e,f,_,v,w,d){const o=r("MenuItem"),i=r("MenuDivider"),p=r("Menu"),l=r("Dropdown"),c=r("LockAction");return t(),P(V,null,[n(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[n(p,{onClick:e.handleMenuClick},{default:m(()=>[n(o,{key:"user",text:e.t("layout.header.dropdownItemUserCenter"),icon:"ant-design:user-outlined"},null,8,["text"]),e.getShowDoc?(t(),h(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(t(),h(i,{key:1})):g("",!0),e.getUseLockPage?(t(),h(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),n(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},R(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),n(c,{onRegister:e.register},null,8,["onRegister"])],64)}var me=M(q,[["render",W]]);export{me as default};