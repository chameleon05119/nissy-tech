(function(){"use strict";var t={2370:function(t,e,a){var i=a(6369),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-nav-wrapper",attrs:{id:"app"}},[e("nav",{staticClass:"home-nav"},[e("router-link",{attrs:{to:"/"}},[t._v("ホーム")]),e("router-link",{attrs:{to:"/model-viewer/demo"}},[t._v("3D家具グリグリ")]),e("router-link",{attrs:{to:"/model-viewer/heat-map-3d"}},[t._v("グリグリを使った3Dヒートマップ")])],1),e("router-view")],1)},n=[],s=a(1001),r={},l=(0,s.Z)(r,o,n,!1,null,null,null),c=l.exports,d=a(2631),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h1",[t._v("にっしーの技術ノート")]),e("ul",{staticClass:"page-box-list"},t._l(t.pages,(function(a){return e("li",{key:`page-${a.key}`},[e("router-link",{attrs:{to:a.to}},[e("div",{staticClass:"page-box"},[e("img",{staticClass:"page-box-img",attrs:{src:a.thumbnail,alt:a.key,width:"250",height:"250"}}),e("div",[e("h2",{staticClass:"page-box-title"},[t._v(t._s(a.title))]),e("p",{staticClass:"page-box-text"},[t._v(t._s(a.detail))])])])])],1)})),0)])},h=[],m={name:"HomeView",data(){return{pages:[{key:"model-viewer-demo",to:"/model-viewer/demo",thumbnail:"assets/images/thumbnail-model-viewer.jpg",title:"3D家具グリグリ",detail:"お客さんが家具を360度自由に見られる技術を紹介！\n購買意欲を搔き立てること間違いなし！"},{key:"heat-map-3d",to:"/model-viewer/heat-map-3d",thumbnail:"assets/images/thumbnail-heat-map-3d.jpg",title:"グリグリを使った3Dヒートマップ",detail:"お客さんが家具のどこを注目しているか分析するための技術を紹介！\n商品開発の助けになるかも？"}]}}},p=m,v=(0,s.Z)(p,u,h,!1,null,null,null),f=v.exports,b=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"introduction"},[e("h1",{staticClass:"page-title"},[t._v("グリグリを使った3Dヒートマップ")]),e("h2",{staticClass:"introduction-title"},[t._v("技術紹介")]),e("div",{staticClass:"introduction-top-wrapper"},[e("div",{staticClass:"introduction-top-inner"},[t.isMounted?e("model-viewer",{staticClass:"model-viewer",attrs:{id:"heat-map-3d-demo",src:"assets/models/cube.glb","camera-controls":""}}):t._e(),e("p",{staticClass:"introduction-top-text",attrs:{id:"search-text",hidden:""}},[t._v("計測中..")]),e("div",{staticClass:"introduction-btn-wrapper"},[e("button",{staticClass:"introduction-btn",attrs:{id:"start-btn"},on:{click:function(e){return t.startMeasuremunt()}}},[t._v("計測を開始")]),e("button",{staticClass:"introduction-btn",attrs:{id:"stop-btn",disabled:""},on:{click:function(e){return t.stopMeasuremunt()}}},[t._v("計測を終了")])])],1),t._m(0),e("div",{staticClass:"introduction-score-wrapper"},[e("h3",[t._v("ユーザーが閲覧した割合")]),e("ul",{staticClass:"introduction-score-list"},t._l(t.scores,(function(a){return e("li",{key:a.key,class:`introduction-score-itme-${a.key}`},[e("style",{tag:"component"},[t._v(" .introduction-score-itme-"+t._s(a.key)+"{ color: rgb("+t._s(a.color[0])+","+t._s(a.color[1])+","+t._s(a.color[2])+"); } ")]),t._v(" "+t._s(a.name)+"："+t._s(a.value)+" % ")],1)})),0),t._m(1)])])])])},g=[function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{src:"assets/images/color-bar.png",alt:"color-bar",width:"30",height:"400"}})])},function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("操作説明")]),e("ul",{staticClass:"introduction-detail-list"},[e("li",[t._v(" 計測を開始ボタンを押す ")]),e("li",[t._v(" 好きなだけキューブをグリグリする ")]),e("li",[t._v(" 計測を終了ボタンを押す ")]),e("li",[t._v(" キューブの面に、その面を見た時間の長さに応じたヒートマップが生成される ")])])])}],_={name:"HeatMap3d",data(){return{isMounted:!1,timer:null,deltaTime:100,thetaArray:[],phiArray:[],scores:[{key:"front",name:"正面",value:0,color:[0,0,0]},{key:"back",name:"裏面",value:0,color:[0,0,0]},{key:"right",name:"右面",value:0,color:[0,0,0]},{key:"left",name:"左面",value:0,color:[0,0,0]},{key:"up",name:"上面",value:0,color:[0,0,0]},{key:"down",name:"下面",value:0,color:[0,0,0]}]}},methods:{startMeasuremunt(){document.getElementById("start-btn").disabled=!0,document.getElementById("stop-btn").disabled=!1,document.getElementById("search-text").hidden=!1,this.resetMaterialColor(),this.timer=window.setInterval((()=>{this.getCameraLocation()}),100)},stopMeasuremunt(){document.getElementById("start-btn").disabled=!1,document.getElementById("stop-btn").disabled=!0,document.getElementById("search-text").hidden=!0,clearInterval(this.timer),this.time=null,this.scores[0].value=this.calculateFrontScore(),this.scores[1].value=this.calculateBackScore(),this.scores[2].value=this.calculateRightScore(),this.scores[3].value=this.calculateLeftScore(),[this.scores[4].value,this.scores[5].value]=this.calculateUpDownScore(),this.scoreToColor(),this.setMaterialColor(),this.NormalizeScore(),this.thetaArray=[],this.phiArray=[]},getCameraLocation(){const t=document.querySelector("model-viewer#heat-map-3d-demo"),e=t.getCameraOrbit().theta,a=t.getCameraOrbit().phi,i=this.convertTheta(e),o=this.convertPhi(a);this.thetaArray.push(i),this.phiArray.push(o)},convertTheta(t){let e=2-2*(t/Math.PI/2-Math.floor(t/Math.PI/2));return e>1&&(e-=2),e=Math.floor(100*e)/100,e},convertPhi(t){let e=2*(t/Math.PI/2-Math.floor(t/Math.PI/2));return e>1&&(e-=2),e=Math.floor(100*e)/100,e},calculateFrontScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let a=0,i=0;Math.abs(this.thetaArray[e])<.5&&(a=Math.cos(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(i=Math.sin(this.phiArray[e]*Math.PI)),t+=a*i}return t/=this.thetaArray.length,t},calculateBackScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let a=0,i=0;Math.abs(this.thetaArray[e])>.5&&(a=-Math.cos(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(i=Math.sin(this.phiArray[e]*Math.PI)),t+=a*i}return t/=this.thetaArray.length,t},calculateRightScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let a=0,i=0;this.thetaArray[e]>0&&(a=Math.sin(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(i=Math.sin(this.phiArray[e]*Math.PI)),t+=a*i}return t/=this.thetaArray.length,t},calculateLeftScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let a=0,i=0;this.thetaArray[e]<0&&(a=-Math.sin(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(i=Math.sin(this.phiArray[e]*Math.PI)),t+=a*i}return t/=this.thetaArray.length,t},calculateUpDownScore(){let t=0,e=0;for(let a=0;a<this.phiArray.length;a++)Math.abs(this.phiArray[a])<.5?t+=Math.cos(this.phiArray[a]*Math.PI):e-=Math.cos(this.phiArray[a]*Math.PI);return t/=this.phiArray.length,e/=this.phiArray.length,[t,e]},scoreToColor(){const t=Math.max(this.scores[0].value,this.scores[1].value,this.scores[2].value,this.scores[3].value,this.scores[4].value,this.scores[5].value);for(let e=0;e<this.scores.length;e++){const a=this.scores[e].value/t;let i=0,o=0,n=0;a>=.5&&(i=255*(2*a-1)),a>=.25&&a<=.5?o=510*a:a>.5&&a<=.75&&(o=255*(-2*a+2)),a<=.5&&(n=255*(-2*a+1)),this.scores[e].color=[Math.floor(i),Math.floor(o),Math.floor(n)]}},setMaterialColor(){const t=document.querySelector("model-viewer#heat-map-3d-demo");for(let e=0;e<t.model.materials.length;e++){const a=t.model.materials[e];a.pbrMetallicRoughness.setBaseColorFactor([this.scores[e].color[0]/255,this.scores[e].color[1]/255,this.scores[e].color[2]/255])}},resetMaterialColor(){const t=document.querySelector("model-viewer#heat-map-3d-demo");for(let e=0;e<t.model.materials.length;e++){const a=t.model.materials[e];a.pbrMetallicRoughness.setBaseColorFactor([.5,.5,.5])}},NormalizeScore(){let t=0;for(let e=0;e<this.scores.length;e++)t+=this.scores[e].value;for(let e=0;e<this.scores.length;e++)this.scores[e].value=Math.floor(this.scores[e].value/t*100)}},mounted(){this.isMounted=!0,this.loadComponent()},computed:{loadComponent(){return()=>a.e(25).then(a.bind(a,5025))}}},y=_,C=(0,s.Z)(y,b,g,!1,null,"35bd1d68",null),w=C.exports,M=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"introduction"},[e("h1",{staticClass:"page-title"},[t._v("3D家具グリグリ")]),e("h2",{staticClass:"introduction-title"},[t._v("家具の3Dモデルを表示してユーザーが操作可能！")]),e("div",{staticClass:"introduction-top-wrapper"},[t.isMounted?e("model-viewer",{staticClass:"model-viewer",attrs:{id:"furniture-demo",src:"assets/models/model.glb","camera-controls":"","enable-pan":"",exposure:"0.7","touch-action":"none"}}):t._e(),t._m(0)],1),e("div",{staticClass:"introduction-top-wrapper"},[t.isMounted?e("model-viewer",{staticClass:"model-viewer",attrs:{id:"room-demo",src:"assets/models/room1.glb","camera-controls":"","enable-pan":"",exposure:"0.7","touch-action":"none","camera-target":"0.7m 1m -0.5m","camera-orbit":"60deg 70deg 90%"}}):t._e(),t._m(1)],1),e("div",{staticClass:"introduction-top-wrapper"},[t.isMounted?e("model-viewer",{staticClass:"model-viewer",attrs:{id:"turn-table-demo",src:"assets/models/model.glb","auto-rotate":"",exposure:"0.7","rotation-per-second":t.rotateSpeed*Math.PI+"rad"}},[e("div",{staticClass:"model-viewer-rotation-range-bar"},[e("p",{staticClass:"range-bar-text"},[t._v("回転速度: "+t._s(t.rotateSpeed))]),e("input",{attrs:{type:"range",id:"rotation-speed-bar",min:"-1.2",max:"1.2",step:"0.01"}})])]):t._e(),t._m(2)],1),e("div",{staticClass:"introduction-top-wrapper"},[t.isMounted?e("model-viewer",{staticClass:"model-viewer",attrs:{id:"exposure-demo",src:"assets/models/model.glb","camera-controls":"","enable-pan":"","touch-action":"none",exposure:t.exposure}},[e("div",{staticClass:"model-viewer-rotation-range-bar"},[e("p",{staticClass:"range-bar-text"},[t._v("光の強さ(露出):"+t._s(t.exposure))]),e("input",{attrs:{type:"range",id:"exposure-bar",min:"0",max:"1",step:"0.01",value:"0.7"}})])]):t._e(),t._m(3)],1),e("div",{staticClass:"introduction-top-wrapper"},[t.isMounted?e("model-viewer",{staticClass:"model-viewer",attrs:{id:"annotation-demo-01",src:"assets/models/3HWFL_LXMS8V.glb","camera-controls":"","enable-pan":"","touch-action":"none",exposure:"0.7","camera-orbit":"0deg 90deg 80%","camera-target":"0m 0.4m 0.2m"}},[e("button",{attrs:{slot:"hotspot-point1","data-position":"0.38m 0.15m -0.18m","data-normal":"0 0 -1","data-orbit":"150deg 60deg 50%"},on:{click:function(e){t.annotations[0].detailOpen=!t.annotations[0].detailOpen}},slot:"hotspot-point1"},[t.annotations[0].detailOpen?e("span",{staticClass:"annotation1-detail"},[e("span",{staticClass:"annotation1-detail-ttl"},[t._v(t._s(t.annotations[0].ttl))]),e("span",{staticClass:"annotation1-detail-text"},[t._v(t._s(t.annotations[0].detailText))])]):e("span",{staticClass:"annotation1"},[t._v(t._s(t.annotations[0].ttl))])]),e("button",{attrs:{slot:"hotspot-point2","data-position":"0m 0.6m 0.2m","data-normal":"0 0 1","data-orbit":"0deg 90deg"},on:{click:function(e){t.annotations[1].detailOpen=!t.annotations[1].detailOpen}},slot:"hotspot-point2"},[t.annotations[1].detailOpen?e("span",{staticClass:"annotation2-detail"},[e("span",{staticClass:"annotation2-detail-ttl"},[t._v(t._s(t.annotations[1].ttl))]),e("img",{attrs:{src:"assets/images/detail-img01.jpg",alt:"中までテラゾー柄",width:"200",height:"200"}})]):e("span",{staticClass:"annotation2"},[t._v(t._s(t.annotations[1].ttl))])]),e("button",{attrs:{slot:"hotspot-point3","data-position":"0.25m 0.7m -0.18m","data-normal":"0 0 -1","data-orbit":"150deg 60deg 50%"},on:{click:function(e){t.annotations[2].detailOpen=!t.annotations[2].detailOpen}},slot:"hotspot-point3"},[e("div",{staticClass:"annotation-point"}),t.annotations[2].detailOpen?e("span",{staticClass:"annotation1-detail"},[e("span",{staticClass:"annotation1-detail-ttl"},[t._v(t._s(t.annotations[2].ttl))])]):t._e()])]):t._e(),t._m(4)],1),e("div",{staticClass:"introduction-top-wrapper"},[t.isMounted?e("model-viewer",{staticClass:"model-viewer",attrs:{id:"animation-demo-01",src:"assets/models/3HWFL_LXMS8V.glb","camera-controls":"","enable-pan":"","touch-action":"none",exposure:"0.7","camera-target":"0m 0.5m 0m","camera-orbit":"0deg 90deg 100%","animation-crossfade-duration":"0"}}):t._e(),e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("様々なアニメーションを追加可能")]),e("ul",{staticClass:"introduction-button-list"},[e("li",[e("button",{staticClass:"animation-play-btn",attrs:{id:"animation-play-btn-0"},on:{click:function(e){return t.playAnimation(0)}}},[t._v("中央ドアを開く")])]),e("li",[e("button",{staticClass:"animation-play-btn",attrs:{id:"animation-play-btn-1"},on:{click:function(e){return t.playAnimation(1)}}},[t._v("左ドアを開く")])]),e("li",[e("button",{staticClass:"animation-play-btn",attrs:{id:"animation-play-btn-2"},on:{click:function(e){return t.playAnimation(2)}}},[t._v("右ドアを開く")])]),e("li",[e("button",{staticClass:"animation-reset-btn",on:{click:function(e){return t.resetAnimation()}}},[t._v("ドアを閉じる")])])])])],1),e("div",{staticClass:"introduction-top-wrapper"},[t.isMounted?e("model-viewer",{staticClass:"model-viewer",attrs:{id:"animation-demo-01",src:"assets/models/cupboard02.glb","camera-controls":"","enable-pan":"",exposure:"0.7","touch-action":"none","camera-target":"0m 1m 0m","camera-orbit":"30deg 80deg 10%",autoplay:""}}):t._e(),t._m(5)],1)])])},A=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("操作説明")]),e("h4",[t._v("-PCの場合-")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" マウスの左クリックをホールドしながら、上下左右に動かすことで家具を回転 ")]),e("li",[t._v(" マウスの右クリックをホールドしながら、上下左右に動かすことで家具を平行移動 ")]),e("li",[t._v(" マウスのホイールで拡大縮小が可能 ")])]),e("h4",[t._v("-スマホの場合-")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" スワイプ操作で家具を回転させることができる ")]),e("li",[t._v(" 2本指で拡大縮小が可能 ")])])])},function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("部屋を丸ごと表示することも可能！")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" コーディネートを丸ごと3Dにしてお部屋を覗くことも ")])])])},function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("ターンテーブル")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" 回転・拡縮・移動など永続的な動きを加えられる ")]),e("li",[t._v(" この動きはglbファイル内に埋め込まなくとも、model viewer側で設定可能 ")])])])},function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("光の強さ(露出)")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" 家具に当たる光の強さを調整することができる ")])])])},function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("注釈追加")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" 3Dモデル上に注釈を追加でき、家具を回転させると注釈が隠れる ")])])])},function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("家具の利用方法もアニメーションに")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" 機能性を推したい家具では、アニメーションを使うことでその用途を効果的に説明可能 ")])])])}],x={name:"ModelViewerDemo",data(){return{isMounted:!1,rotateSpeed:1,exposure:.7,annotations:[{detailOpen:!1,ttl:"コードリール付き！",detailText:"背面のコード穴近くにはコードリールを設け、コード類をスッキリ巻き付けることが出来ます。配線を見せない、美しいリビングづくりに一役買うポイントです。"},{detailOpen:!1,ttl:"中までテラゾー柄！",detailText:"扉収納の内側まで、余すことなくテラゾー柄を使用。表面だけではなく、細かいところまで美しく仕上げました。"},{detailOpen:!1,ttl:"コードスリット付き！",detailText:"天板は飾り棚として使用したり、よく使う小物を置くスペースとして使うのもオススメ！スマホの充電やスタンドライトなどの家電も置けるよう、天板奥にはコードスリットを設けました。"}]}},methods:{async setIsMounted(){this.isMounted=!0},setRotationSpeed(t){this.rotateSpeed=t},setExposure(t){this.exposure=t},async hotspotSettings(){const t=document.querySelector("model-viewer#annotation-demo-01"),e=e=>{let a=e.dataset;t.cameraTarget=a.position,t.cameraOrbit=a.orbit,t.fieldOfView="45deg"};t.querySelectorAll("button").forEach((t=>{t.addEventListener("click",(()=>e(t)))}))},playAnimation(t){for(let i=0;i<3;i++)this.disableBtnById("animation-play-btn-"+i);this.resetAnimation();const e=document.querySelector("model-viewer#animation-demo-01");e.animationName=e.availableAnimations[t],e.play();const a=1e3*e.duration/2;setTimeout((()=>{e.pause();for(let t=0;t<3;t++)this.enableBtnById("animation-play-btn-"+t)}),a)},resetAnimation(){const t=document.querySelector("model-viewer#animation-demo-01");t.currentTime=0},disableBtnById(t){document.getElementById(t).disabled=!0},enableBtnById(t){document.getElementById(t).disabled=!1}},async mounted(){await this.loadComponent(),await this.setIsMounted(),window.onload=()=>{const t=document.getElementById("rotation-speed-bar"),e=document.getElementById("exposure-bar");t.addEventListener("input",(t=>{this.setRotationSpeed(t.target.value)})),e.addEventListener("input",(t=>{this.setExposure(t.target.value)}))},await this.hotspotSettings()},created(){},computed:{loadComponent(){return()=>a.e(25).then(a.bind(a,5025))}}},k=x,S=(0,s.Z)(k,M,A,!1,null,"22fd25a2",null),I=S.exports;i.ZP.use(d.Z);const O=[{path:"/",name:"home",component:f},{path:"/model-viewer/heat-map-3d",name:"model-viewer.heat-map-3d",component:w},{path:"/model-viewer/demo",name:"model-viewer.demo",component:I}],P=new d.Z({base:"",routes:O});var B=P;i.ZP.config.productionTip=!1,new i.ZP({router:B,render:t=>t(c)}).$mount("#app")}},e={};function a(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,i,o,n){if(!i){var s=1/0;for(d=0;d<t.length;d++){i=t[d][0],o=t[d][1],n=t[d][2];for(var r=!0,l=0;l<i.length;l++)(!1&n||s>=n)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(r=!1,n<s&&(s=n));if(r){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[i,o,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,i){return a.f[i](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+".cf0b8c78.js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="nissy-tech:";a.l=function(i,o,n,s){if(t[i])t[i].push(o);else{var r,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+n){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",e+n),r.src=i),t[i]=[o];var h=function(e,a){r.onerror=r.onload=null,clearTimeout(m);var o=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(t){return t(a)})),e)return e(a)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var t={143:0};a.f.j=function(e,i){var o=a.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else{var n=new Promise((function(a,i){o=t[e]=[a,i]}));i.push(o[2]=n);var s=a.p+a.u(e),r=new Error,l=function(i){if(a.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var n=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",r.name="ChunkLoadError",r.type=n,r.request=s,o[1](r)}};a.l(s,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,n,s=i[0],r=i[1],l=i[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(l)var d=l(a)}for(e&&e(i);c<s.length;c++)n=s[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},i=self["webpackChunknissy_tech"]=self["webpackChunknissy_tech"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(2370)}));i=a.O(i)})();
//# sourceMappingURL=app.70604bbd.js.map