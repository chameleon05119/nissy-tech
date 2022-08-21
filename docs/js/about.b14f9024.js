"use strict";(self["webpackChunknissy_tech"]=self["webpackChunknissy_tech"]||[]).push([[443],{8155:function(t,e,r){r.r(e),r.d(e,{default:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"heat-map-3d"},[e("h1",{staticClass:"page-title"},[t._v("グリグリを使った3Dヒートマップ")]),e("section",{staticClass:"introduction"},[e("h2",[t._v("技術紹介")]),e("div",{staticClass:"introduction-top-wrapper"},[e("div",[t.isMounted?e("model-viewer",{staticClass:"model-viewer",attrs:{id:"heat-map-3d-demo",src:t.modelSrc,"camera-controls":""}}):t._e(),e("div",{staticClass:"introduction-btn-wrapper"},[e("button",{staticClass:"introduction-btn",on:{click:function(e){return t.startMeasuremunt()}}},[t._v("計測を開始")]),e("button",{staticClass:"introduction-btn",attrs:{id:"stop-btn"},on:{click:function(e){return t.stopMeasuremunt()}}},[t._v("計測を終了")])])],1),e("ul",{staticClass:"introduction-score-list"},t._l(t.scores,(function(r){return e("li",{key:r.key,class:`introduction-score-itme-${r.key}`},[e("style",{tag:"component"},[t._v(" .introduction-score-itme-"+t._s(r.key)+"{ color: rgb("+t._s(r.color[0])+","+t._s(r.color[1])+","+t._s(r.color[2])+"); } ")]),t._v(" "+t._s(r.name)+"："+t._s(r.value)+" % ")],1)})),0)])])])},s=[],o={name:"HeatMap3d",data(){return{isMounted:!1,modelSrc:"/assets/models/cube.glb",timer:null,deltaTime:100,thetaArray:[],phiArray:[],scores:[{key:"front",name:"正面",value:0,color:[0,0,0]},{key:"back",name:"裏面",value:0,color:[0,0,0]},{key:"right",name:"右面",value:0,color:[0,0,0]},{key:"left",name:"左面",value:0,color:[0,0,0]},{key:"up",name:"上面",value:0,color:[0,0,0]},{key:"down",name:"下面",value:0,color:[0,0,0]}]}},methods:{startMeasuremunt(){this.timer=window.setInterval((()=>{this.getCameraLocation()}),100)},stopMeasuremunt(){clearInterval(this.timer),this.time=null,this.scores[0].value=this.calculateFrontScore(),this.scores[1].value=this.calculateBackScore(),this.scores[2].value=this.calculateRightScore(),this.scores[3].value=this.calculateLeftScore(),[this.scores[4].value,this.scores[5].value]=this.calculateUpDownScore(),this.scoreToColor(),this.setMaterialColor(),this.NormalizeScore(),this.thetaArray=[],this.phiArray=[]},getCameraLocation(){const t=document.querySelector("model-viewer#heat-map-3d-demo"),e=t.getCameraOrbit().theta,r=t.getCameraOrbit().phi,a=this.convertAngle(e),s=this.convertAngle(r);this.thetaArray.push(a),this.phiArray.push(s)},convertAngle(t){let e=Math.abs(t/Math.PI);return e=2*(e/2-Math.floor(e/2)),e>1&&(e-=2),e=Math.floor(100*e)/100,e},calculateFrontScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let r=0,a=0;Math.abs(this.thetaArray[e])<.5&&(r=Math.cos(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(a=Math.sin(this.phiArray[e]*Math.PI)),t+=r*a}return t/=this.thetaArray.length,t},calculateBackScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let r=0,a=0;Math.abs(this.thetaArray[e])>.5&&(r=-Math.cos(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(a=Math.sin(this.phiArray[e]*Math.PI)),t+=r*a}return t/=this.thetaArray.length,t},calculateRightScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let r=0,a=0;this.thetaArray[e]>0&&(r=Math.sin(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(a=Math.sin(this.phiArray[e]*Math.PI)),t+=r*a}return t/=this.thetaArray.length,t},calculateLeftScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let r=0,a=0;this.thetaArray[e]<0&&(r=-Math.sin(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(a=Math.sin(this.phiArray[e]*Math.PI)),t+=r*a,console.log(this.thetaArray[e])}return t/=this.thetaArray.length,t},calculateUpDownScore(){let t=0,e=0;for(let r=0;r<this.phiArray.length;r++)Math.abs(this.phiArray[r])<.5?t+=Math.cos(this.phiArray[r]*Math.PI):e-=Math.cos(this.phiArray[r]*Math.PI);return t/=this.phiArray.length,e/=this.phiArray.length,[t,e]},scoreToColor(){const t=Math.max(this.scores[0].value,this.scores[1].value,this.scores[2].value,this.scores[3].value,this.scores[4].value,this.scores[5].value);for(let e=0;e<this.scores.length;e++){const r=this.scores[e].value/t;let a=0,s=0,o=0;r>=.5&&(a=255*(2*r-1)),r>=.25&&r<=.5?s=510*r:r>.5&&r<=.75&&(s=255*(-2*r+2)),r<=.5&&(o=255*(-2*r+1)),this.scores[e].color=[Math.floor(a),Math.floor(s),Math.floor(o)]}},setMaterialColor(){const t=document.querySelector("model-viewer#heat-map-3d-demo");for(let e=0;e<t.model.materials.length;e++){const r=t.model.materials[e];r.pbrMetallicRoughness.setBaseColorFactor([this.scores[e].color[0]/255,this.scores[e].color[1]/255,this.scores[e].color[2]/255])}},NormalizeScore(){let t=0;for(let e=0;e<this.scores.length;e++)t+=this.scores[e].value;for(let e=0;e<this.scores.length;e++)this.scores[e].value=Math.floor(this.scores[e].value/t*100)}},mounted(){this.isMounted=!0,this.loadComponent()},computed:{loadComponent(){return()=>r.e(25).then(r.bind(r,5025))}}},h=o,i=r(1001),l=(0,i.Z)(h,a,s,!1,null,"e388464e",null),c=l.exports}}]);
//# sourceMappingURL=about.b14f9024.js.map