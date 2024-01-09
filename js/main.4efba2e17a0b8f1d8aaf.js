(()=>{"use strict";var e,t={545:(e,t,l)=>{var s=l(254),a=l(440),o=l(40);const i={class:"card vld-parent mb-3"},n=(0,a._)("h3",null,"Loading ...",-1),r={class:"card-body"},c=(0,a._)("h5",{class:"card-title"},"Use as component",-1),u={class:"form-group m-0"},d=(0,a._)("label",null,"Loader shape",-1),h={class:"custom-control custom-checkbox"},p=(0,a._)("label",{class:"custom-control-label",for:"input-full-page-1"},"Full page?",-1),m={class:"custom-control custom-checkbox"},g=(0,a._)("label",{class:"custom-control-label",for:"input-cancel-1"},"User can cancel?",-1),b={class:"custom-control custom-checkbox"},y=(0,a._)("label",{class:"custom-control-label",for:"input-slot-1"},"Use slot? (replace shape)",-1),v={class:"form-group m-0"},f=(0,a._)("label",null,"Color",-1),w={class:"form-group m-0"},_=(0,a._)("label",null,"Background color",-1),k={class:"form-group"},S=(0,a._)("label",null,"Height",-1),x={class:"text-muted"},C={class:"form-group"},j=(0,a._)("label",null,"Width",-1),$={class:"text-muted"},z={class:"form-group mt-3"};const L="undefined"!=typeof window?window.HTMLElement:Object,V=["aria-busy"],q={class:"vl-icon"};const N={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(e){if(!this.isActive)return;if(e.target===this.$el||this.$el.contains(e.target))return;let t=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||t&&t.contains(e.target))&&(e.preventDefault(),this.$el.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}};const U=(0,a.aZ)({name:"RotateSquare",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}},computed:{styles(){return{backgroundColor:this.color,width:`${this.width}px`,height:`${this.height}px`}}}});var Z=l(878);const D=(0,Z.Z)(U,[["render",function(e,t,l,s,i,n){return(0,a.wg)(),(0,a.iD)("div",{style:(0,o.j5)([e.styles,{"animation-duration":"1.2s"}]),class:"spinner spinner--rotate-square"},null,4)}],["__scopeId","data-v-13550558"]]);const P=(0,a.aZ)({name:"RotateSquare2",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}},computed:{styles(){return{width:`${this.width}px`,height:`${this.height}px`}}}}),I=()=>{(0,s.sj)((e=>({"6210c84b":e.color})))},R=P.setup;P.setup=R?(e,t)=>(I(),R(e,t)):I;const H=P,M=(0,Z.Z)(H,[["render",function(e,t,l,s,i,n){return(0,a.wg)(),(0,a.iD)("div",{style:(0,o.j5)(e.styles),class:"spinner spinner--rotate-square-2"},null,4)}],["__scopeId","data-v-4a37cc2c"]]),F=["fill"],O=[(0,a.uE)('<path class="b0" d="M66.734 66.734v366.533h366.532V66.734H66.734zm15 15h336.532v336.533H81.734V81.734z" data-v-1c12b9f2></path><path class="b2" d="M354.16 2.5v143.34H497.5V2.5H354.16zm10 10H487.5v123.34H364.16V12.5z" data-v-1c12b9f2></path><path class="b1" d="M0 2.5v143.34h143.34V2.5H0zm10 10h123.34v123.34H10V12.5z" data-v-1c12b9f2></path><path class="b3" d="M354.16 356.66V500H497.5V356.66H354.16zm10 10H487.5V490H364.16V366.66z" data-v-1c12b9f2></path><path class="b4" d="M0 356.66V500h143.34V356.66H0zm10 10h123.34V490H10V366.66z" data-v-1c12b9f2></path>',5)];const W=(0,a.aZ)({name:"RotateSquare3",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}},computed:{styles(){return{width:`${this.width}px`,height:`${this.height}px`}}}}),E=(0,Z.Z)(W,[["render",function(e,t,l,s,i,n){return(0,a.wg)(),(0,a.iD)("svg",{style:(0,o.j5)(e.styles),class:"spinner spinner--cube",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500.00001 500.00001"},[(0,a._)("g",{fill:e.color},O,8,F)],4)}],["__scopeId","data-v-1c12b9f2"]]),A=e=>((0,a.dD)("data-v-f6c07100"),e=e(),(0,a.Cn)(),e),B=[A((()=>(0,a._)("span",{class:"load3 one"},null,-1))),A((()=>(0,a._)("span",{class:"load3 two"},null,-1))),A((()=>(0,a._)("span",{class:"load3-center"},null,-1)))];const T=(0,a.aZ)({name:"RotateSquare4",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}},computed:{size(){return Math.max(this.width,this.height)},innerStyles(){return{transform:`scale('${+parseInt(this.size)/80}')`,"--bg-color":this.color}},styles(){return{width:`${this.size}px`,height:`${this.size}px`}}}}),G=(0,Z.Z)(T,[["render",function(e,t,l,s,i,n){return(0,a.wg)(),(0,a.iD)("div",{style:(0,o.j5)(e.styles),class:"spinner spinner--rotate-square-5"},[(0,a._)("div",{style:(0,o.j5)(e.innerStyles),class:"spinner-inner"},B,4)],4)}],["__scopeId","data-v-f6c07100"]]);const Y=(0,a.aZ)({name:"RotateSquare5",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}},computed:{size(){return Math.max(this.width,this.height)},outerWidth(){let e=parseInt(this.size);return this.calcWidth(e)},outerStyles(){let e=this.outerWidth+"px";return{border:"2px solid "+this.color,width:e,height:e}},innerStyles(){let e=this.calcWidth(this.outerWidth)+"px";return{border:"2px solid "+this.color,width:e,height:e}},styles(){return{width:`${this.size}px`,height:`${this.size}px`}}},methods:{calcWidth(e){let t=45*Math.PI/180,l=Math.abs(Math.cos(t)),s=Math.abs(Math.sin(t));return(e*s-e*l)/(Math.pow(s,2)-Math.pow(l,2))}}}),K=(0,Z.Z)(Y,[["render",function(e,t,l,s,i,n){return(0,a.wg)(),(0,a.iD)("div",{style:(0,o.j5)(e.styles),class:"spinner spinner--rotate-square-6"},[(0,a._)("div",{style:(0,o.j5)(e.outerStyles),class:"inner-square inner-square-1"},null,4),(0,a._)("div",{style:(0,o.j5)(e.innerStyles),class:"inner-square inner-square-2"},null,4)],4)}],["__scopeId","data-v-f35a6b0c"]]);const J=(0,a.aZ)({name:"CubeShadow",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}},computed:{styles(){return{backgroundColor:this.color,width:`${this.width}px`,height:`${this.height}px`}}}}),Q=(0,Z.Z)(J,[["render",function(e,t,l,s,i,n){return(0,a.wg)(),(0,a.iD)("div",{style:(0,o.j5)(e.styles),class:"spinner spinner--cube-shadow"},null,4)}],["__scopeId","data-v-8b62f026"]]);const X=(0,a.aZ)({name:"Grid",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}},computed:{cubeStyles(){return{backgroundColor:this.color,animationDuration:"1.3s"}},styles(){return{width:`${this.width}px`,height:`${this.height}px`}}}}),ee=(0,Z.Z)(X,[["render",function(e,t,l,s,i,n){return(0,a.wg)(),(0,a.iD)("div",{style:(0,o.j5)(e.styles),class:"spinner spinner--square-grid"},[(0,a._)("div",{style:(0,o.j5)(e.cubeStyles),class:"sk-cube sk-cube1"},null,4),(0,a._)("div",{style:(0,o.j5)(e.cubeStyles),class:"sk-cube sk-cube2"},null,4),(0,a._)("div",{style:(0,o.j5)(e.cubeStyles),class:"sk-cube sk-cube3"},null,4),(0,a._)("div",{style:(0,o.j5)(e.cubeStyles),class:"sk-cube sk-cube4"},null,4),(0,a._)("div",{style:(0,o.j5)(e.cubeStyles),class:"sk-cube sk-cube5"},null,4),(0,a._)("div",{style:(0,o.j5)(e.cubeStyles),class:"sk-cube sk-cube6"},null,4),(0,a._)("div",{style:(0,o.j5)(e.cubeStyles),class:"sk-cube sk-cube7"},null,4),(0,a._)("div",{style:(0,o.j5)(e.cubeStyles),class:"sk-cube sk-cube8"},null,4),(0,a._)("div",{style:(0,o.j5)(e.cubeStyles),class:"sk-cube sk-cube9"},null,4)],4)}],["__scopeId","data-v-1aeebd3f"]]);const te=(0,a.aZ)({name:"Stretch",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}},computed:{rectStyles(){return{backgroundColor:this.color,animationDuration:"1.2s"}},styles(){return{width:`${this.width}px`,height:`${this.height}px`}}}}),le=(0,Z.Z)(te,[["render",function(e,t,l,s,i,n){return(0,a.wg)(),(0,a.iD)("div",{style:(0,o.j5)(e.styles),class:"spinner spinner--stretch"},[(0,a._)("div",{style:(0,o.j5)(e.rectStyles),class:"rect rect-1"},null,4),(0,a._)("div",{style:(0,o.j5)(e.rectStyles),class:"rect rect-2"},null,4),(0,a._)("div",{style:(0,o.j5)(e.rectStyles),class:"rect rect-3"},null,4),(0,a._)("div",{style:(0,o.j5)(e.rectStyles),class:"rect rect-4"},null,4),(0,a._)("div",{style:(0,o.j5)(e.rectStyles),class:"rect rect-5"},null,4)],4)}],["__scopeId","data-v-03576fb8"]]),se={class:"anim-0"},ae=["fill"],oe=(0,a.uE)('<g class="anim-1"><circle cx="50" cy="50" r="5" fill="white"></circle></g><g class="anim-2"><circle cx="75" cy="50" r="5" fill="white"></circle><line x1="25" y1="50" x2="75" y2="50" stroke="white" stroke-width="3"></line></g><g class="anim-3"><circle cx="50" cy="25" r="5" fill="white"></circle><line x1="50" y1="25" x2="25" y2="75" stroke="white" stroke-width="3"></line><line x1="50" y1="25" x2="75" y2="75" stroke="white" stroke-width="3"></line></g><g class="anim-4"><circle cx="75" cy="25" r="5" fill="white"></circle><line x1="75" y1="25" x2="25" y2="25" stroke="white" stroke-width="3"></line></g>',4);const ie=(0,a.aZ)({name:"Circle",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}},computed:{styles(){return{width:`${this.width}px`,height:`${this.height}px`}}}}),ne=(0,Z.Z)(ie,[["render",function(e,t,l,s,i,n){return(0,a.wg)(),(0,a.iD)("div",null,[((0,a.wg)(),(0,a.iD)("svg",{style:(0,o.j5)(e.styles),class:"spinner spinner--circle-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},[(0,a._)("g",se,[(0,a._)("circle",{cx:"50",cy:"50",r:"50",fill:e.color},null,8,ae)]),oe],4))])}]]),re={class:"cube panelLoad"};const ce=(0,a.aZ)({name:"LetterCube",props:{height:{type:Number,default:40},width:{type:Number,default:40},letters:{type:Array,default:()=>["L","O","A","D","I","N"],validator:e=>6===e.length},color:{default:"#41b883"}},computed:{size(){return Math.max(this.width,this.height)},innerStyles(){return{transform:"scale("+parseInt(this.size)/2/75+")","--bg-color":this.color}},styles(){return{width:`${this.size}px`,height:`${this.size}px`}},faces(){return["front","back","left","right","bottom","top"].map(((e,t)=>({side:e,letter:this.letters[t]})))}}}),ue={RotateSquare:D,RotateSquare2:M,RotateSquare3:E,RotateSquare4:G,RotateSquare5:K,CubeShadow:Q,Grid:ee,Stretch:le,Circle:ne,LetterCube:(0,Z.Z)(ce,[["render",function(e,t,l,s,i,n){return(0,a.wg)(),(0,a.iD)("div",{style:(0,o.j5)(e.styles),class:"spinner spinner--socker"},[(0,a._)("div",{style:(0,o.j5)(e.innerStyles),class:"spinner-inner"},[(0,a._)("div",re,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.faces,(e=>{let{side:t,letter:l}=e;return(0,a.wg)(),(0,a.iD)("div",{key:t,class:(0,o.C_)(`cube-face cube-face-${t}`)},(0,o.zw)(l),3)})),128))])],4)],4)}],["__scopeId","data-v-149dc218"]])},de=(0,a.aZ)({name:"VueLoading",mixins:[N],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,L],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:Boolean,transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"RotateSquare"}},components:ue,emits:["hide","update:active"],data(){return{isActive:this.active}},mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((()=>{const e=this.$el;var t;void 0!==(t=e).remove?t.remove():t.parentNode?.removeChild(t)}),150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vl-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vl-shown")},keyPress(e){27===e.keyCode&&this.cancel()}},watch:{active(e){this.isActive=e},isActive:{handler(e){e?this.disableScroll():this.enableScroll()},immediate:!0}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),he=(0,Z.Z)(de,[["render",function(e,t,l,i,n,r){return(0,a.wg)(),(0,a.j4)(s.uT,{name:e.transition},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",{tabindex:"0",class:(0,o.C_)(["vl-overlay vl-active",{"vl-full-page":e.isFullPage}]),"aria-busy":e.isActive,"aria-label":"Loading",style:(0,o.j5)({zIndex:e.zIndex})},[(0,a._)("div",{class:"vl-background",onClick:t[0]||(t[0]=(0,s.iM)((function(){return e.cancel&&e.cancel(...arguments)}),["prevent"])),style:(0,o.j5)(e.bgStyle)},null,4),(0,a._)("div",q,[(0,a.WI)(e.$slots,"before"),(0,a.WI)(e.$slots,"default",{},(()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e.loader),{color:e.color,width:e.width,height:e.height},null,8,["color","width","height"]))])),(0,a.WI)(e.$slots,"after")])],14,V),[[s.F8,e.isActive]])])),_:3},8,["name"])}]]);function pe(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{show(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;const n={...t,...o,programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0};let r=n.container;n.container||(r=document.body,n.isFullPage=!0);const c={...l,...i};return e=function(e,t,l){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=(0,a.h)(e,t,o),n=document.createElement("div");return n.classList.add("vld-container"),l.appendChild(n),(0,s.sY)(i,n),i.component}(he,n,r,c),{hide:e.ctx.hide}},hide(){e.ctx.hide()}}}const me=he,ge=["RotateSquare","RotateSquare2","RotateSquare3","RotateSquare4","RotateSquare5","CubeShadow","Grid","Stretch","Circle","LetterCube"];let be=null;const ye=(0,a.aZ)({data:()=>({loadersList:ge,isLoading:!1,fullPage:!0,canCancel:!0,useSlot:!1,loader:"RotateSquare",color:"#007bff",bgColor:"#ffffff",height:128,width:128,timeout:3e3}),components:{Loading:me},methods:{simulate(){this.isLoading=!0,be=setTimeout((()=>{this.isLoading=!1}),this.timeout)},whenCancelled(){clearTimeout(be)}}}),ve=(0,Z.Z)(ye,[["render",function(e,t,l,L,V,q){const N=(0,a.up)("loading");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(N,{active:e.isLoading,"onUpdate:active":t[0]||(t[0]=t=>e.isLoading=t),"can-cancel":e.canCancel,"on-cancel":e.whenCancelled,"is-full-page":e.fullPage,height:e.height,width:e.width,color:e.color,loader:e.loader,"background-color":e.bgColor},(0,a.Nv)({_:2},[e.useSlot?{name:"default",fn:(0,a.w5)((()=>[n])),key:"0"}:void 0]),1032,["active","can-cancel","on-cancel","is-full-page","height","width","color","loader","background-color"]),(0,a._)("div",r,[c,(0,a._)("div",u,[d,(0,a.wy)((0,a._)("select",{class:"form-control-sm text-capitalize","onUpdate:modelValue":t[1]||(t[1]=t=>e.loader=t)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.loadersList,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{key:t},(0,o.zw)(e),1)))),128))],512),[[s.bM,e.loader]])]),(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"custom-control-input",id:"input-full-page-1","onUpdate:modelValue":t[2]||(t[2]=t=>e.fullPage=t)},null,512),[[s.e8,e.fullPage]]),p]),(0,a._)("div",m,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"custom-control-input",id:"input-cancel-1","onUpdate:modelValue":t[3]||(t[3]=t=>e.canCancel=t)},null,512),[[s.e8,e.canCancel]]),g]),(0,a._)("div",b,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"custom-control-input",id:"input-slot-1","onUpdate:modelValue":t[4]||(t[4]=t=>e.useSlot=t)},null,512),[[s.e8,e.useSlot]]),y]),(0,a._)("div",v,[f,(0,a.wy)((0,a._)("input",{type:"color","onUpdate:modelValue":t[5]||(t[5]=t=>e.color=t)},null,512),[[s.nr,e.color]])]),(0,a._)("div",w,[_,(0,a.wy)((0,a._)("input",{type:"color","onUpdate:modelValue":t[6]||(t[6]=t=>e.bgColor=t)},null,512),[[s.nr,e.bgColor]])]),(0,a._)("div",k,[S,(0,a.wy)((0,a._)("input",{type:"range",min:"10",step:"5",max:"256","onUpdate:modelValue":t[7]||(t[7]=t=>e.height=t)},null,512),[[s.nr,e.height,void 0,{number:!0}]]),(0,a._)("span",x,(0,o.zw)(e.height),1)]),(0,a._)("div",C,[j,(0,a.wy)((0,a._)("input",{type:"range",min:"10",step:"5",max:"256","onUpdate:modelValue":t[8]||(t[8]=t=>e.width=t)},null,512),[[s.nr,e.width,void 0,{number:!0}]]),(0,a._)("span",$,(0,o.zw)(e.width),1)]),(0,a._)("div",z,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t[9]||(t[9]=(0,s.iM)((function(){return e.simulate&&e.simulate(...arguments)}),["prevent"]))}," Show loader ")])])])}]]),fe={class:"card vld-parent mb-3",ref:"formContainer"},we={class:"card-body"},_e=(0,a._)("h5",{class:"card-title"},"Use as plugin",-1),ke={class:"form-group m-0"},Se=(0,a._)("label",null,"Loader shape",-1),xe={class:"custom-control custom-checkbox"},Ce=(0,a._)("label",{class:"custom-control-label",for:"input-full-page-2"},"Full page?",-1),je={class:"custom-control custom-checkbox"},$e=(0,a._)("label",{class:"custom-control-label",for:"input-cancel-2"},"User can cancel?",-1),ze={class:"custom-control custom-checkbox"},Le=(0,a._)("label",{class:"custom-control-label",for:"input-slot-2"},"Use slot? (replace shape)",-1),Ve={class:"form-group m-0"},qe=(0,a._)("label",null,"Color",-1),Ne={class:"form-group m-0"},Ue=(0,a._)("label",null,"Background color",-1),Ze={class:"form-group"},De=(0,a._)("label",null,"Height",-1),Pe={class:"text-muted"},Ie={class:"form-group"},Re=(0,a._)("label",null,"Width",-1),He={class:"text-muted"},Me={class:"form-group mt-3"};let Fe=null;const Oe=(0,a.aZ)({data:()=>({loadersList:ge,fullPage:!0,canCancel:!0,useSlot:!1,loader:"RotateSquare",timeout:3e3,color:"#00ab00",bgColor:"#4b4b4b",height:64,width:64}),mounted(){},methods:{simulate(){let e=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:this.canCancel,onCancel:this.whenCancelled,color:this.color,backgroundColor:this.bgColor,height:this.height,width:this.width,loader:this.loader,opacity:.3,lockScroll:!0},this.exampleSlots);Fe=setTimeout((()=>{e&&e.hide()}),this.timeout)},whenCancelled(){clearTimeout(Fe)}},computed:{exampleSlots(){return this.useSlot?{default:(0,a.h)("h3",{class:"custom-slot"},"Please Wait ...")}:{}}}}),We=(0,Z.Z)(Oe,[["render",function(e,t,l,i,n,r){return(0,a.wg)(),(0,a.iD)("div",fe,[(0,a._)("div",we,[_e,(0,a._)("div",ke,[Se,(0,a.wy)((0,a._)("select",{class:"form-control-sm text-capitalize","onUpdate:modelValue":t[0]||(t[0]=t=>e.loader=t)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.loadersList,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{key:t},(0,o.zw)(e),1)))),128))],512),[[s.bM,e.loader]])]),(0,a._)("div",xe,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"custom-control-input",id:"input-full-page-2","onUpdate:modelValue":t[1]||(t[1]=t=>e.fullPage=t)},null,512),[[s.e8,e.fullPage]]),Ce]),(0,a._)("div",je,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"custom-control-input",id:"input-cancel-2","onUpdate:modelValue":t[2]||(t[2]=t=>e.canCancel=t)},null,512),[[s.e8,e.canCancel]]),$e]),(0,a._)("div",ze,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"custom-control-input",id:"input-slot-2","onUpdate:modelValue":t[3]||(t[3]=t=>e.useSlot=t)},null,512),[[s.e8,e.useSlot]]),Le]),(0,a._)("div",Ve,[qe,(0,a.wy)((0,a._)("input",{type:"color","onUpdate:modelValue":t[4]||(t[4]=t=>e.color=t)},null,512),[[s.nr,e.color]])]),(0,a._)("div",Ne,[Ue,(0,a.wy)((0,a._)("input",{type:"color","onUpdate:modelValue":t[5]||(t[5]=t=>e.bgColor=t)},null,512),[[s.nr,e.bgColor]])]),(0,a._)("div",Ze,[De,(0,a.wy)((0,a._)("input",{type:"range",min:"10",step:"5",max:"256","onUpdate:modelValue":t[6]||(t[6]=t=>e.height=t)},null,512),[[s.nr,e.height,void 0,{number:!0}]]),(0,a._)("span",Pe,(0,o.zw)(e.height),1)]),(0,a._)("div",Ie,[Re,(0,a.wy)((0,a._)("input",{type:"range",min:"10",step:"5",max:"256","onUpdate:modelValue":t[7]||(t[7]=t=>e.width=t)},null,512),[[s.nr,e.width,void 0,{number:!0}]]),(0,a._)("span",He,(0,o.zw)(e.width),1)]),(0,a._)("div",Me,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t[8]||(t[8]=(0,s.iM)((function(){return e.simulate&&e.simulate(...arguments)}),["prevent"]))}," Show loader ")])])],512)}]]),Ee=(0,a.uE)('<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark shadow-sm mb-3"><span class="navbar-brand mb-0">Vue.js Loading Overlay</span><ul class="navbar-nav ml-auto"><li class="nav-item active"><a class="nav-link" href="https://github.com/Rascal-Coder/vue-loading" target="_blank"> GitHub</a></li></ul></nav>',1),Ae={class:"container"},Be={class:"row"},Te={class:"col-md-8"},Ge=(0,a.uE)('<aside class="col-md-4 mb-3"><div class="card"><div class="card-header"> Links</div><div class="card-body"><ul><li><a href="https://github.com/Rascal-Coder/vue-loading" target="_blank">GitHub</a></li><li><a href="https://www.npmjs.com/package/@rascoder/vue-loading" target="_blank">npm</a></li></ul></div></div></aside>',1),Ye=(0,a._)("footer",{class:"text-center text-muted small mb-3"},[(0,a.Uk)(" Created by "),(0,a._)("a",{href:"https://twitter.com/ankurk91",target:"_blank",rel:"noopener"},"@ankurk91"),(0,a.Uk)(", loaders reverted by "),(0,a._)("a",{href:"https://github.com/Rascal-Coder/Rascal-Coder",target:"_blank",rel:"noopener"},"@Rascal_Coder")],-1),Ke={__name:"App",setup:e=>(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[Ee,(0,a._)("main",Ae,[(0,a._)("div",Be,[(0,a._)("div",Te,[(0,a.Wm)(ve),(0,a.Wm)(We)]),Ge])]),Ye]))},Je=(0,s.ri)(Ke);Je.use((function(e){const t=pe(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});e.config.globalProperties.$loading=t,e.provide("$loading",t)})),Je.mount("#app")}},l={};function s(e){var a=l[e];if(void 0!==a)return a.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,s),o.exports}s.m=t,e=[],s.O=(t,l,a,o)=>{if(!l){var i=1/0;for(u=0;u<e.length;u++){for(var[l,a,o]=e[u],n=!0,r=0;r<l.length;r++)(!1&o||i>=o)&&Object.keys(s.O).every((e=>s.O[e](l[r])))?l.splice(r--,1):(n=!1,o<i&&(i=o));if(n){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,a,o]},s.d=(e,t)=>{for(var l in t)s.o(t,l)&&!s.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,l)=>{var a,o,[i,n,r]=l,c=0;if(i.some((t=>0!==e[t]))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(r)var u=r(s)}for(t&&t(l);c<i.length;c++)o=i[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},l=self.webpackChunk_rascoder_vue_loading=self.webpackChunk_rascoder_vue_loading||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=s.O(void 0,[127],(()=>s(545)));a=s.O(a)})();