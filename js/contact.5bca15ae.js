(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"02f4":function(e,t,r){var a=r("4588"),o=r("be13");e.exports=function(e){return function(t,r){var l,n,s=String(o(t)),i=a(r),c=s.length;return i<0||i>=c?e?"":void 0:(l=s.charCodeAt(i),l<55296||l>56319||i+1===c||(n=s.charCodeAt(i+1))<56320||n>57343?e?s.charAt(i):l:e?s.slice(i,i+2):n-56320+(l-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var a=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var a=r("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var a=r("2aba"),o=r("32e9"),l=r("79e5"),n=r("be13"),s=r("2b4c"),i=r("520a"),c=s("species"),u=!l(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),m=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var p=s(e),d=!l(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),f=d?!l(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[c]=function(){return r}),r[p](""),!t}):void 0;if(!d||!f||"replace"===e&&!u||"split"===e&&!m){var g=/./[p],h=r(n,p,""[e],function(e,t,r,a,o){return t.exec===i?d&&!o?{done:!0,value:g.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),v=h[0],b=h[1];a(String.prototype,e,v),o(RegExp.prototype,p,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"410a":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contact"},[r("el-container",[r("el-header",[r("h1",[e._v("お問い合わせ")])]),r("el-main",[r("el-row",{staticClass:"hidden-xl-only hidden-lg-only"},[r("el-col",{attrs:{span:22,offset:1}},[r("el-steps",{attrs:{active:e.stepActive,"finish-status":"success"}},[r("el-step",{attrs:{title:"Step 1",description:"お問い合わせの入力"}}),r("el-step",{attrs:{title:"Step 2",description:"お問い合わせの確認"}}),r("el-step",{attrs:{title:"Step 3",description:"送信完了"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{xs:24,sm:24,md:24,lg:15,xl:15}},[r("router-view")],1),r("el-col",{staticClass:"hidden-md-and-down",attrs:{"hidden-xl-only":"",span:6,offset:3}},[r("div",{staticStyle:{height:"300px"}},[r("el-steps",{attrs:{direction:"vertical",active:e.stepActive,"finish-status":"success"}},[r("el-step",{attrs:{title:"Step 1",description:"お問い合わせの入力"}}),r("el-step",{attrs:{title:"Step 2",description:"お問い合わせの確認"}}),r("el-step",{attrs:{title:"Step 3",description:"送信完了"}})],1)],1)])],1)],1)],1)],1)},o=[],l=(r("e05f"),{name:"contact",computed:{stepActive:function(){return this.$store.state.contact.stepActive}},components:{},methods:{}}),n=l,s=r("2877"),i=Object(s["a"])(n,a,o,!1,null,null,null);t["default"]=i.exports},4917:function(e,t,r){"use strict";var a=r("cb7c"),o=r("9def"),l=r("0390"),n=r("5f1b");r("214f")("match",1,function(e,t,r,s){return[function(r){var a=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,a):new RegExp(r)[t](String(a))},function(e){var t=s(r,e,this);if(t.done)return t.value;var i=a(e),c=String(this);if(!i.global)return n(i,c);var u=i.unicode;i.lastIndex=0;var m,p=[],d=0;while(null!==(m=n(i,c))){var f=String(m[0]);p[d]=f,""===f&&(i.lastIndex=l(c,o(i.lastIndex),u)),d++}return 0===d?null:p}]})},"520a":function(e,t,r){"use strict";var a=r("0bfb"),o=RegExp.prototype.exec,l=String.prototype.replace,n=o,s="lastIndex",i=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[s]||0!==t[s]}(),c=void 0!==/()??/.exec("")[1],u=i||c;u&&(n=function(e){var t,r,n,u,m=this;return c&&(r=new RegExp("^"+m.source+"$(?!\\s)",a.call(m))),i&&(t=m[s]),n=o.call(m,e),i&&n&&(m[s]=m.global?n.index+n[0].length:t),c&&n&&n.length>1&&l.call(n[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(n[u]=void 0)}),n}),e.exports=n},"5f1b":function(e,t,r){"use strict";var a=r("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var l=r.call(e,t);if("object"!==typeof l)throw new TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"65bb":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{xs:"",model:e.ruleForm,rules:e.rules,"status-icon":"","validate-on-rule-change":""}},[r("el-form-item",{attrs:{label:"名前(姓名)",prop:"name"}},[r("el-input",{attrs:{id:"name"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"ふりがな(姓名)",prop:"kana"}},[r("el-input",{model:{value:e.ruleForm.kana,callback:function(t){e.$set(e.ruleForm,"kana",t)},expression:"ruleForm.kana"}})],1),r("el-form-item",{attrs:{label:"社名"}},[r("el-input",{model:{value:e.ruleForm.company,callback:function(t){e.$set(e.ruleForm,"company",t)},expression:"ruleForm.company"}})],1),r("el-form-item",{attrs:{label:"メールアドレス",prop:"mailaddress"}},[r("el-input",{model:{value:e.ruleForm.mailaddress,callback:function(t){e.$set(e.ruleForm,"mailaddress",t)},expression:"ruleForm.mailaddress"}})],1),r("el-form-item",{attrs:{label:"郵便番号",prop:"postal"}},[r("el-input",{model:{value:e.ruleForm.postal,callback:function(t){e.$set(e.ruleForm,"postal",t)},expression:"ruleForm.postal"}})],1),r("el-form-item",{attrs:{label:"住所"}},[r("el-input",{model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1),r("el-form-item",{attrs:{label:"どの製品について",prop:"productKey"}},[r("el-select",{attrs:{placeholder:"どの製品について"},model:{value:e.ruleForm.productKey,callback:function(t){e.$set(e.ruleForm,"productKey",t)},expression:"ruleForm.productKey"}},e._l(e.products,function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1),r("el-form-item",{attrs:{label:"問い合わせ件名",prop:"title"}},[r("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"問い合わせ内容",prop:"contactBody"}},[r("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.ruleForm.contactBody,callback:function(t){e.$set(e.ruleForm,"contactBody",t)},expression:"ruleForm.contactBody"}})],1),r("el-form-item",{attrs:{label:"",prop:"agree"}},[r("el-checkbox",{attrs:{label:"個人情報の保持の同意",name:"agree",required:""},model:{value:e.ruleForm.agree,callback:function(t){e.$set(e.ruleForm,"agree",t)},expression:"ruleForm.agree"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("送信内容確認")]),r("el-button",{on:{click:e.cancelClick}},[e._v("Cancel")])],1)],1)},o=[],l=(r("7f7f"),r("4917"),r("ac6a"),{name:"contact-form",data:function(){var e=this.$store.state.contact.values,t={name:"",kana:"",company:"",mailaddress:"",postal:"",address:"",productKey:"",title:"",contactBody:"",agree:!1},r=function(e,t,r){var a=t.match(/^[ぁ-ん　 ]+$/);null===a?r(new Error("ひらがなで入力してください")):r()},a=function(e,t,r){if(!t)return r();var a=t.match(/^\d{3}[-]\d{4}$/);null===a?r(new Error("ハイフンを入れて７桁で入力してください")):r()};return{products:this.$store.getters["contact/products"],ruleForm:null===e?t:e,rules:{name:[{required:!0,message:"名前を入力してください",trigger:"blur"},{min:2,max:100,message:"名前は２文字以上、100文字以下で入力してください",trigger:"blur"}],kana:[{required:!0,message:"ふりがなを入力してください",trigger:"blur"},{min:2,max:100,message:"ふりがなは２文字以上、100文字以下で入力してください",trigger:"blur"},{validator:r,trigger:"blur"}],postal:[{required:!1,message:"postalを入力してください",trigger:"blur"},{validator:a,trigger:"blur"}],mailaddress:[{required:!0,message:"メールアドレスを入力してください",trigger:"blur"},{type:"email",message:"有効なメールアドレスを入力してください",trigger:"blur"}],title:[{required:!0,message:"問い合わせ件名を入力してください",trigger:"blur"},{min:5,max:100,message:"件名は5文字以上、100文字以下で入力してください",trigger:"blur"}],contactBody:[{required:!0,message:"問い合わせ内容を入力してください",trigger:"blur"},{min:5,max:1e3,message:"内容は5文字以上、1000文字以下で入力してください",trigger:"blur"}],agree:[{required:!0,message:"個人情報の保持の同意をお願いします",trigger:"change"}]}}},components:{},props:{},created:function(){this.$store.commit("contact/stepActive",0)},methods:{cancelClick:function(){this.$store.dispatch("contact/clearContactValues",this.ruleForm),this.$router.push("/")},submitForm:function(e){var t=this;if(0==this.ruleForm.agree)return this.$message({showClose:!0,message:"個人情報の保持の同意をお願いします",type:"error"}),!1;this.ruleForm.name=this.$sanitize(this.ruleForm.name),this.ruleForm.kana=this.$sanitize(this.ruleForm.kana),this.ruleForm.company=this.$sanitize(this.ruleForm.company),this.ruleForm.mailaddress=this.$sanitize(this.ruleForm.mailaddress),this.ruleForm.postal=this.$sanitize(this.ruleForm.postal),this.ruleForm.address=this.$sanitize(this.ruleForm.address),this.ruleForm.title=this.$sanitize(this.ruleForm.title),this.ruleForm.contactBody=this.$sanitize(this.ruleForm.contactBody),this.$refs[e].validate(function(e){if(!e)return t.$message({showClose:!0,message:"必須項目を入力してください",type:"error"}),!1;t.$store.dispatch("contact/setContactValues",t.ruleForm),t.$router.push("contact/cofirm")})}}}),n=l,s=r("2877"),i=Object(s["a"])(n,a,o,!1,null,null,null);t["default"]=i.exports},"7f7f":function(e,t,r){var a=r("86cc").f,o=Function.prototype,l=/^\s*function ([^ (]*)/,n="name";n in o||r("9e1e")&&a(o,n,{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},b0c5:function(e,t,r){"use strict";var a=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},e05f:function(e,t,r){}}]);
//# sourceMappingURL=contact.5bca15ae.js.map