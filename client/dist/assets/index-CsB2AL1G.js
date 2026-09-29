var Nc=Object.defineProperty;var Oc=(i,t,e)=>t in i?Nc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var te=(i,t,e)=>Oc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ea="164",Fc=0,ha=1,Bc=2,Xo=1,qo=2,dn=3,Pn=0,De=1,pn=2,wn=0,yi=1,ua=2,fa=3,da=4,zc=5,Gn=100,Hc=101,kc=102,Vc=103,Gc=104,Wc=200,$c=201,Xc=202,qc=203,Ws=204,$s=205,Yc=206,jc=207,Kc=208,Zc=209,Jc=210,Qc=211,tl=212,el=213,nl=214,il=0,rl=1,sl=2,Ur=3,al=4,ol=5,cl=6,ll=7,Yo=0,hl=1,ul=2,bn=0,fl=1,dl=2,pl=3,ml=4,gl=5,_l=6,vl=7,jo=300,wi=301,bi=302,Xs=303,qs=304,Gr=306,Ys=1e3,$n=1001,js=1002,Ve=1003,xl=1004,nr=1005,Xe=1006,ss=1007,Xn=1008,Ln=1009,Ml=1010,Sl=1011,Ko=1012,Zo=1013,Ri=1014,Tn=1015,Wr=1016,Jo=1017,Qo=1018,ji=1020,El=35902,yl=1021,Al=1022,rn=1023,Tl=1024,wl=1025,Ai=1026,Yi=1027,bl=1028,tc=1029,Rl=1030,ec=1031,nc=1033,as=33776,os=33777,cs=33778,ls=33779,pa=35840,ma=35841,ga=35842,_a=35843,va=36196,xa=37492,Ma=37496,Sa=37808,Ea=37809,ya=37810,Aa=37811,Ta=37812,wa=37813,ba=37814,Ra=37815,Ca=37816,Pa=37817,La=37818,Da=37819,Ia=37820,Ua=37821,hs=36492,Na=36494,Oa=36495,Cl=36283,Fa=36284,Ba=36285,za=36286,Pl=3200,Ll=3201,ic=0,Dl=1,An="",tn="srgb",In="srgb-linear",na="display-p3",$r="display-p3-linear",Nr="linear",ce="srgb",Or="rec709",Fr="p3",Qn=7680,Ha=519,Il=512,Ul=513,Nl=514,rc=515,Ol=516,Fl=517,Bl=518,zl=519,Ks=35044,ka="300 es",mn=2e3,Br=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],us=Math.PI/180,Zs=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function Hl(i,t){return(i%t+t)%t}function fs(i,t,e){return(1-e)*i+e*t}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,r,s,a,o,l,h){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,h)}set(t,e,n,r,s,a,o,l,h){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],u=n[4],m=n[7],g=n[2],v=n[5],S=n[8],y=r[0],_=r[3],p=r[6],R=r[1],w=r[4],C=r[7],V=r[2],I=r[5],D=r[8];return s[0]=a*y+o*R+l*V,s[3]=a*_+o*w+l*I,s[6]=a*p+o*C+l*D,s[1]=h*y+u*R+m*V,s[4]=h*_+u*w+m*I,s[7]=h*p+u*C+m*D,s[2]=g*y+v*R+S*V,s[5]=g*_+v*w+S*I,s[8]=g*p+v*C+S*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*s*u+n*o*l+r*s*h-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],m=u*a-o*h,g=o*l-u*s,v=h*s-a*l,S=e*m+n*g+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return t[0]=m*y,t[1]=(r*h-u*n)*y,t[2]=(o*n-r*a)*y,t[3]=g*y,t[4]=(u*e-r*l)*y,t[5]=(r*s-o*e)*y,t[6]=v*y,t[7]=(n*l-h*e)*y,t[8]=(a*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-r*h,r*l,-r*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ds.makeScale(t,e)),this}rotate(t){return this.premultiply(ds.makeRotation(-t)),this}translate(t,e){return this.premultiply(ds.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new Vt;function sc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kl(){const i=zr("canvas");return i.style.display="block",i}const Va={};function ac(i){i in Va||(Va[i]=!0,console.warn(i))}const Ga=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wa=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[In]:{transfer:Nr,primaries:Or,toReference:i=>i,fromReference:i=>i},[tn]:{transfer:ce,primaries:Or,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$r]:{transfer:Nr,primaries:Fr,toReference:i=>i.applyMatrix3(Wa),fromReference:i=>i.applyMatrix3(Ga)},[na]:{transfer:ce,primaries:Fr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wa),fromReference:i=>i.applyMatrix3(Ga).convertLinearToSRGB()}},Vl=new Set([In,$r]),ie={enabled:!0,_workingColorSpace:In,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ir[t].toReference,r=ir[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ir[i].primaries},getTransfer:function(i){return i===An?Nr:ir[i].transfer}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ti;class Gl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=zr("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ti(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wl=0;class oc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ms(r[a].image)):s.push(ms(r[a]))}else s=ms(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $l=0;class Pe extends Ii{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=$n,r=$n,s=Xe,a=Xn,o=rn,l=Ln,h=Pe.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Rn(),this.name="",this.source=new oc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ys:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case js:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ys:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case js:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=jo;Pe.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,r=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,h=l[0],u=l[4],m=l[8],g=l[1],v=l[5],S=l[9],y=l[2],_=l[6],p=l[10];if(Math.abs(u-g)<.01&&Math.abs(m-y)<.01&&Math.abs(S-_)<.01){if(Math.abs(u+g)<.1&&Math.abs(m+y)<.1&&Math.abs(S+_)<.1&&Math.abs(h+v+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(h+1)/2,C=(v+1)/2,V=(p+1)/2,I=(u+g)/4,D=(m+y)/4,q=(S+_)/4;return w>C&&w>V?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=I/n,s=D/n):C>V?C<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),n=I/r,s=q/r):V<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),n=D/s,r=q/s),this.set(n,r,s,e),this}let R=Math.sqrt((_-S)*(_-S)+(m-y)*(m-y)+(g-u)*(g-u));return Math.abs(R)<.001&&(R=1),this.x=(_-S)/R,this.y=(m-y)/R,this.z=(g-u)/R,this.w=Math.acos((h+v+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xl extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Pe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new oc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lc extends Pe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql extends Pe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],h=n[r+1],u=n[r+2],m=n[r+3];const g=s[a+0],v=s[a+1],S=s[a+2],y=s[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=m;return}if(o===1){t[e+0]=g,t[e+1]=v,t[e+2]=S,t[e+3]=y;return}if(m!==y||l!==g||h!==v||u!==S){let _=1-o;const p=l*g+h*v+u*S+m*y,R=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const V=Math.sqrt(w),I=Math.atan2(V,p*R);_=Math.sin(_*I)/V,o=Math.sin(o*I)/V}const C=o*R;if(l=l*_+g*C,h=h*_+v*C,u=u*_+S*C,m=m*_+y*C,_===1-o){const V=1/Math.sqrt(l*l+h*h+u*u+m*m);l*=V,h*=V,u*=V,m*=V}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],h=n[r+2],u=n[r+3],m=s[a],g=s[a+1],v=s[a+2],S=s[a+3];return t[e]=o*S+u*m+l*v-h*g,t[e+1]=l*S+u*g+h*m-o*v,t[e+2]=h*S+u*v+o*g-l*m,t[e+3]=u*S-o*m-l*g-h*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(r/2),m=o(s/2),g=l(n/2),v=l(r/2),S=l(s/2);switch(a){case"XYZ":this._x=g*u*m+h*v*S,this._y=h*v*m-g*u*S,this._z=h*u*S+g*v*m,this._w=h*u*m-g*v*S;break;case"YXZ":this._x=g*u*m+h*v*S,this._y=h*v*m-g*u*S,this._z=h*u*S-g*v*m,this._w=h*u*m+g*v*S;break;case"ZXY":this._x=g*u*m-h*v*S,this._y=h*v*m+g*u*S,this._z=h*u*S+g*v*m,this._w=h*u*m-g*v*S;break;case"ZYX":this._x=g*u*m-h*v*S,this._y=h*v*m+g*u*S,this._z=h*u*S-g*v*m,this._w=h*u*m+g*v*S;break;case"YZX":this._x=g*u*m+h*v*S,this._y=h*v*m+g*u*S,this._z=h*u*S-g*v*m,this._w=h*u*m-g*v*S;break;case"XZY":this._x=g*u*m-h*v*S,this._y=h*v*m-g*u*S,this._z=h*u*S+g*v*m,this._w=h*u*m+g*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],h=e[2],u=e[6],m=e[10],g=n+o+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(u-l)*v,this._y=(s-h)*v,this._z=(a-r)*v}else if(n>o&&n>m){const v=2*Math.sqrt(1+n-o-m);this._w=(u-l)/v,this._x=.25*v,this._y=(r+a)/v,this._z=(s+h)/v}else if(o>m){const v=2*Math.sqrt(1+o-n-m);this._w=(s-h)/v,this._x=(r+a)/v,this._y=.25*v,this._z=(l+u)/v}else{const v=2*Math.sqrt(1+m-n-o);this._w=(a-r)/v,this._x=(s+h)/v,this._y=(l+u)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+r*h-s*l,this._y=r*u+a*l+s*o-n*h,this._z=s*u+a*h+n*l-r*o,this._w=a*u-n*o-r*l-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const v=1-e;return this._w=v*a+e*this._w,this._x=v*n+e*this._x,this._y=v*r+e*this._y,this._z=v*s+e*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,o),m=Math.sin((1-e)*u)/h,g=Math.sin(e*u)/h;return this._w=a*m+this._w*g,this._x=n*m+this._x*g,this._y=r*m+this._y*g,this._z=s*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*r-o*n),u=2*(o*e-s*r),m=2*(s*n-a*e);return this.x=e+l*h+a*m-o*u,this.y=n+l*u+o*h-s*m,this.z=r+l*m+s*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gs.copy(this).projectOnVector(t),this.sub(gs)}reflect(t){return this.sub(gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gs=new H,$a=new Ki;class Zi{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(s,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),sr.subVectors(this.max,Oi),ei.subVectors(t.a,Oi),ni.subVectors(t.b,Oi),ii.subVectors(t.c,Oi),_n.subVectors(ni,ei),vn.subVectors(ii,ni),Un.subVectors(ei,ii);let e=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Un.z,Un.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Un.z,0,-Un.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Un.y,Un.x,0];return!_s(e,ei,ni,ii,sr)||(e=[1,0,0,0,1,0,0,0,1],!_s(e,ei,ni,ii,sr))?!1:(ar.crossVectors(_n,vn),e=[ar.x,ar.y,ar.z],_s(e,ei,ni,ii,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new H,new H,new H,new H,new H,new H,new H,new H],Ge=new H,rr=new Zi,ei=new H,ni=new H,ii=new H,_n=new H,vn=new H,Un=new H,Oi=new H,sr=new H,ar=new H,Nn=new H;function _s(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Nn.fromArray(i,s);const o=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),l=t.dot(Nn),h=e.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}const Yl=new Zi,Fi=new H,vs=new H;class Xr{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yl.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fi.subVectors(t,this.center);const e=Fi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Fi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fi.copy(t.center).add(vs)),this.expandByPoint(Fi.copy(t.center).sub(vs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new H,xs=new H,or=new H,xn=new H,Ms=new H,cr=new H,Ss=new H;class hc{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){xs.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(xs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(or),o=xn.dot(this.direction),l=-xn.dot(or),h=xn.lengthSq(),u=Math.abs(1-a*a);let m,g,v,S;if(u>0)if(m=a*l-o,g=a*o-l,S=s*u,m>=0)if(g>=-S)if(g<=S){const y=1/u;m*=y,g*=y,v=m*(m+a*g+2*o)+g*(a*m+g+2*l)+h}else g=s,m=Math.max(0,-(a*g+o)),v=-m*m+g*(g+2*l)+h;else g=-s,m=Math.max(0,-(a*g+o)),v=-m*m+g*(g+2*l)+h;else g<=-S?(m=Math.max(0,-(-a*s+o)),g=m>0?-s:Math.min(Math.max(-s,-l),s),v=-m*m+g*(g+2*l)+h):g<=S?(m=0,g=Math.min(Math.max(-s,-l),s),v=g*(g+2*l)+h):(m=Math.max(0,-(a*s+o)),g=m>0?s:Math.min(Math.max(-s,-l),s),v=-m*m+g*(g+2*l)+h);else g=a>0?-s:s,m=Math.max(0,-(a*g+o)),v=-m*m+g*(g+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(xs).addScaledVector(or,g),v}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),r=ln.dot(ln)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const h=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(n=(t.min.x-g.x)*h,r=(t.max.x-g.x)*h):(n=(t.max.x-g.x)*h,r=(t.min.x-g.x)*h),u>=0?(s=(t.min.y-g.y)*u,a=(t.max.y-g.y)*u):(s=(t.max.y-g.y)*u,a=(t.min.y-g.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(t.min.z-g.z)*m,l=(t.max.z-g.z)*m):(o=(t.max.z-g.z)*m,l=(t.min.z-g.z)*m),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,r,s){Ms.subVectors(e,t),cr.subVectors(n,t),Ss.crossVectors(Ms,cr);let a=this.direction.dot(Ss),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,t);const l=o*this.direction.dot(cr.crossVectors(xn,cr));if(l<0)return null;const h=o*this.direction.dot(Ms.cross(xn));if(h<0||l+h>a)return null;const u=-o*xn.dot(Ss);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,r,s,a,o,l,h,u,m,g,v,S,y,_){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,h,u,m,g,v,S,y,_)}set(t,e,n,r,s,a,o,l,h,u,m,g,v,S,y,_){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=u,p[10]=m,p[14]=g,p[3]=v,p[7]=S,p[11]=y,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ri.setFromMatrixColumn(t,0).length(),s=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),h=Math.sin(r),u=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const g=a*u,v=a*m,S=o*u,y=o*m;e[0]=l*u,e[4]=-l*m,e[8]=h,e[1]=v+S*h,e[5]=g-y*h,e[9]=-o*l,e[2]=y-g*h,e[6]=S+v*h,e[10]=a*l}else if(t.order==="YXZ"){const g=l*u,v=l*m,S=h*u,y=h*m;e[0]=g+y*o,e[4]=S*o-v,e[8]=a*h,e[1]=a*m,e[5]=a*u,e[9]=-o,e[2]=v*o-S,e[6]=y+g*o,e[10]=a*l}else if(t.order==="ZXY"){const g=l*u,v=l*m,S=h*u,y=h*m;e[0]=g-y*o,e[4]=-a*m,e[8]=S+v*o,e[1]=v+S*o,e[5]=a*u,e[9]=y-g*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const g=a*u,v=a*m,S=o*u,y=o*m;e[0]=l*u,e[4]=S*h-v,e[8]=g*h+y,e[1]=l*m,e[5]=y*h+g,e[9]=v*h-S,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const g=a*l,v=a*h,S=o*l,y=o*h;e[0]=l*u,e[4]=y-g*m,e[8]=S*m+v,e[1]=m,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=v*m+S,e[10]=g-y*m}else if(t.order==="XZY"){const g=a*l,v=a*h,S=o*l,y=o*h;e[0]=l*u,e[4]=-m,e[8]=h*u,e[1]=g*m+y,e[5]=a*u,e[9]=v*m-S,e[2]=S*m-v,e[6]=o*u,e[10]=y*m+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jl,t,Kl)}lookAt(t,e,n){const r=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Mn.crossVectors(n,Ie),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Mn.crossVectors(n,Ie)),Mn.normalize(),lr.crossVectors(Ie,Mn),r[0]=Mn.x,r[4]=lr.x,r[8]=Ie.x,r[1]=Mn.y,r[5]=lr.y,r[9]=Ie.y,r[2]=Mn.z,r[6]=lr.z,r[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],u=n[1],m=n[5],g=n[9],v=n[13],S=n[2],y=n[6],_=n[10],p=n[14],R=n[3],w=n[7],C=n[11],V=n[15],I=r[0],D=r[4],q=r[8],T=r[12],A=r[1],k=r[5],J=r[9],B=r[13],tt=r[2],Z=r[6],lt=r[10],it=r[14],W=r[3],ht=r[7],ct=r[11],Et=r[15];return s[0]=a*I+o*A+l*tt+h*W,s[4]=a*D+o*k+l*Z+h*ht,s[8]=a*q+o*J+l*lt+h*ct,s[12]=a*T+o*B+l*it+h*Et,s[1]=u*I+m*A+g*tt+v*W,s[5]=u*D+m*k+g*Z+v*ht,s[9]=u*q+m*J+g*lt+v*ct,s[13]=u*T+m*B+g*it+v*Et,s[2]=S*I+y*A+_*tt+p*W,s[6]=S*D+y*k+_*Z+p*ht,s[10]=S*q+y*J+_*lt+p*ct,s[14]=S*T+y*B+_*it+p*Et,s[3]=R*I+w*A+C*tt+V*W,s[7]=R*D+w*k+C*Z+V*ht,s[11]=R*q+w*J+C*lt+V*ct,s[15]=R*T+w*B+C*it+V*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],h=t[13],u=t[2],m=t[6],g=t[10],v=t[14],S=t[3],y=t[7],_=t[11],p=t[15];return S*(+s*l*m-r*h*m-s*o*g+n*h*g+r*o*v-n*l*v)+y*(+e*l*v-e*h*g+s*a*g-r*a*v+r*h*u-s*l*u)+_*(+e*h*m-e*o*v-s*a*m+n*a*v+s*o*u-n*h*u)+p*(-r*o*u-e*l*m+e*o*g+r*a*m-n*a*g+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],m=t[9],g=t[10],v=t[11],S=t[12],y=t[13],_=t[14],p=t[15],R=m*_*h-y*g*h+y*l*v-o*_*v-m*l*p+o*g*p,w=S*g*h-u*_*h-S*l*v+a*_*v+u*l*p-a*g*p,C=u*y*h-S*m*h+S*o*v-a*y*v-u*o*p+a*m*p,V=S*m*l-u*y*l-S*o*g+a*y*g+u*o*_-a*m*_,I=e*R+n*w+r*C+s*V;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return t[0]=R*D,t[1]=(y*g*s-m*_*s-y*r*v+n*_*v+m*r*p-n*g*p)*D,t[2]=(o*_*s-y*l*s+y*r*h-n*_*h-o*r*p+n*l*p)*D,t[3]=(m*l*s-o*g*s-m*r*h+n*g*h+o*r*v-n*l*v)*D,t[4]=w*D,t[5]=(u*_*s-S*g*s+S*r*v-e*_*v-u*r*p+e*g*p)*D,t[6]=(S*l*s-a*_*s-S*r*h+e*_*h+a*r*p-e*l*p)*D,t[7]=(a*g*s-u*l*s+u*r*h-e*g*h-a*r*v+e*l*v)*D,t[8]=C*D,t[9]=(S*m*s-u*y*s-S*n*v+e*y*v+u*n*p-e*m*p)*D,t[10]=(a*y*s-S*o*s+S*n*h-e*y*h-a*n*p+e*o*p)*D,t[11]=(u*o*s-a*m*s-u*n*h+e*m*h+a*n*v-e*o*v)*D,t[12]=V*D,t[13]=(u*y*r-S*m*r+S*n*g-e*y*g-u*n*_+e*m*_)*D,t[14]=(S*o*r-a*y*r-S*n*l+e*y*l+a*n*_-e*o*_)*D,t[15]=(a*m*r-u*o*r+u*n*l-e*m*l-a*n*g+e*o*g)*D,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,h=s*a,u=s*o;return this.set(h*a+n,h*o-r*l,h*l+r*o,0,h*o+r*l,u*o+n,u*l-r*a,0,h*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,h=s+s,u=a+a,m=o+o,g=s*h,v=s*u,S=s*m,y=a*u,_=a*m,p=o*m,R=l*h,w=l*u,C=l*m,V=n.x,I=n.y,D=n.z;return r[0]=(1-(y+p))*V,r[1]=(v+C)*V,r[2]=(S-w)*V,r[3]=0,r[4]=(v-C)*I,r[5]=(1-(g+p))*I,r[6]=(_+R)*I,r[7]=0,r[8]=(S+w)*D,r[9]=(_-R)*D,r[10]=(1-(g+y))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ri.set(r[0],r[1],r[2]).length();const a=ri.set(r[4],r[5],r[6]).length(),o=ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],We.copy(this);const h=1/s,u=1/a,m=1/o;return We.elements[0]*=h,We.elements[1]*=h,We.elements[2]*=h,We.elements[4]*=u,We.elements[5]*=u,We.elements[6]*=u,We.elements[8]*=m,We.elements[9]*=m,We.elements[10]*=m,e.setFromRotationMatrix(We),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=mn){const l=this.elements,h=2*s/(e-t),u=2*s/(n-r),m=(e+t)/(e-t),g=(n+r)/(n-r);let v,S;if(o===mn)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Br)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=u,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=mn){const l=this.elements,h=1/(e-t),u=1/(n-r),m=1/(a-s),g=(e+t)*h,v=(n+r)*u;let S,y;if(o===mn)S=(a+s)*m,y=-2*m;else if(o===Br)S=s*m,y=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-g,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=y,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new H,We=new fe,jl=new H(0,0,0),Kl=new H(1,1,1),Mn=new H,lr=new H,Ie=new H,Xa=new fe,qa=new Ki;class sn{constructor(t=0,e=0,n=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],h=r[5],u=r[9],m=r[2],g=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Le(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qa.setFromEuler(this),this.setFromQuaternion(qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zl=0;const Ya=new H,si=new Ki,hn=new fe,hr=new H,Bi=new H,Jl=new H,Ql=new Ki,ja=new H(1,0,0),Ka=new H(0,1,0),Za=new H(0,0,1),Ja={type:"added"},th={type:"removed"},ai={type:"childadded",child:null},Es={type:"childremoved",child:null};class ye extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new H,e=new sn,n=new Ki,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fe},normalMatrix:{value:new Vt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(ja,t)}rotateY(t){return this.rotateOnAxis(Ka,t)}rotateZ(t){return this.rotateOnAxis(Za,t)}translateOnAxis(t,e){return Ya.copy(t).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ja,t)}translateY(t){return this.translateOnAxis(Ka,t)}translateZ(t){return this.translateOnAxis(Za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Bi,hr,this.up):hn.lookAt(hr,Bi,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),si.setFromRotationMatrix(hn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ja),ai.child=t,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(th),Es.child=t,this.dispatchEvent(Es),Es.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ja),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,Jl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const m=l[h];s(t.shapes,m)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),m=a(t.shapes),g=a(t.skeletons),v=a(t.animations),S=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),S.length>0&&(n.nodes=S)}return n.object=r,n;function a(o){const l=[];for(const h in o){const u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ye.DEFAULT_UP=new H(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new H,un=new H,ys=new H,fn=new H,oi=new H,ci=new H,Qa=new H,As=new H,Ts=new H,ws=new H;class qe{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),$e.subVectors(t,e),r.cross($e);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){$e.subVectors(r,e),un.subVectors(n,e),ys.subVectors(t,e);const a=$e.dot($e),o=$e.dot(un),l=$e.dot(ys),h=un.dot(un),u=un.dot(ys),m=a*h-o*o;if(m===0)return s.set(0,0,0),null;const g=1/m,v=(h*l-o*u)*g,S=(a*u-o*l)*g;return s.set(1-v-S,S,v)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static isFrontFacing(t,e,n,r){return $e.subVectors(n,e),un.subVectors(t,e),$e.cross(un).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),un.subVectors(this.a,this.b),$e.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;oi.subVectors(r,n),ci.subVectors(s,n),As.subVectors(t,n);const l=oi.dot(As),h=ci.dot(As);if(l<=0&&h<=0)return e.copy(n);Ts.subVectors(t,r);const u=oi.dot(Ts),m=ci.dot(Ts);if(u>=0&&m<=u)return e.copy(r);const g=l*m-u*h;if(g<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(oi,a);ws.subVectors(t,s);const v=oi.dot(ws),S=ci.dot(ws);if(S>=0&&v<=S)return e.copy(s);const y=v*h-l*S;if(y<=0&&h>=0&&S<=0)return o=h/(h-S),e.copy(n).addScaledVector(ci,o);const _=u*S-v*m;if(_<=0&&m-u>=0&&v-S>=0)return Qa.subVectors(s,r),o=(m-u)/(m-u+(v-S)),e.copy(r).addScaledVector(Qa,o);const p=1/(_+y+g);return a=y*p,o=g*p,e.copy(n).addScaledVector(oi,a).addScaledVector(ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function bs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ie.workingColorSpace){if(t=Hl(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=bs(a,s,t+1/3),this.g=bs(a,s,t),this.b=bs(a,s,t-1/3)}return ie.toWorkingColorSpace(this,r),this}setStyle(t,e=tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=fc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ie.fromWorkingColorSpace(we.copy(this),t),Math.round(Le(we.r*255,0,255))*65536+Math.round(Le(we.g*255,0,255))*256+Math.round(Le(we.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(we.copy(this),e);const n=we.r,r=we.g,s=we.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,h;const u=(o+a)/2;if(o===a)l=0,h=0;else{const m=a-o;switch(h=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-n)/m+2;break;case s:l=(n-r)/m+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=tn){ie.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,r=we.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(ur);const n=fs(Sn.h,ur.h,e),r=fs(Sn.s,ur.s,e),s=fs(Sn.l,ur.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new jt;jt.NAMES=fc;let eh=0;class jn extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=yi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ws,this.blendDst=$s,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ws&&(n.blendSrc=this.blendSrc),this.blendDst!==$s&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qr extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new H,fr=new Gt;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ks,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ac("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ks&&(t.usage=this.usage),t}}class dc extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pc extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ke extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nh=0;const He=new fe,Rs=new ye,li=new H,Ue=new Zi,zi=new Zi,Se=new H;class an extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sc(t)?pc:dc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Rs.lookAt(t),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Ue.min,zi.min),Ue.expandByPoint(Se),Se.addVectors(Ue.max,zi.max),Ue.expandByPoint(Se)):(Ue.expandByPoint(zi.min),Ue.expandByPoint(zi.max))}Ue.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Se));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Se.fromBufferAttribute(o,h),l&&(li.fromBufferAttribute(t,h),Se.add(li)),r=Math.max(r,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let q=0;q<n.count;q++)o[q]=new H,l[q]=new H;const h=new H,u=new H,m=new H,g=new Gt,v=new Gt,S=new Gt,y=new H,_=new H;function p(q,T,A){h.fromBufferAttribute(n,q),u.fromBufferAttribute(n,T),m.fromBufferAttribute(n,A),g.fromBufferAttribute(s,q),v.fromBufferAttribute(s,T),S.fromBufferAttribute(s,A),u.sub(h),m.sub(h),v.sub(g),S.sub(g);const k=1/(v.x*S.y-S.x*v.y);isFinite(k)&&(y.copy(u).multiplyScalar(S.y).addScaledVector(m,-v.y).multiplyScalar(k),_.copy(m).multiplyScalar(v.x).addScaledVector(u,-S.x).multiplyScalar(k),o[q].add(y),o[T].add(y),o[A].add(y),l[q].add(_),l[T].add(_),l[A].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let q=0,T=R.length;q<T;++q){const A=R[q],k=A.start,J=A.count;for(let B=k,tt=k+J;B<tt;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const w=new H,C=new H,V=new H,I=new H;function D(q){V.fromBufferAttribute(r,q),I.copy(V);const T=o[q];w.copy(T),w.sub(V.multiplyScalar(V.dot(T))).normalize(),C.crossVectors(I,T);const k=C.dot(l[q])<0?-1:1;a.setXYZW(q,w.x,w.y,w.z,k)}for(let q=0,T=R.length;q<T;++q){const A=R[q],k=A.start,J=A.count;for(let B=k,tt=k+J;B<tt;B+=3)D(t.getX(B+0)),D(t.getX(B+1)),D(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,h=new H,u=new H,m=new H;if(t)for(let g=0,v=t.count;g<v;g+=3){const S=t.getX(g+0),y=t.getX(g+1),_=t.getX(g+2);r.fromBufferAttribute(e,S),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,_),u.subVectors(a,s),m.subVectors(r,s),u.cross(m),o.fromBufferAttribute(n,S),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,_),o.add(u),l.add(u),h.add(u),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let g=0,v=e.count;g<v;g+=3)r.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),u.subVectors(a,s),m.subVectors(r,s),u.cross(m),n.setXYZ(g+0,u.x,u.y,u.z),n.setXYZ(g+1,u.x,u.y,u.z),n.setXYZ(g+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const h=o.array,u=o.itemSize,m=o.normalized,g=new h.constructor(l.length*u);let v=0,S=0;for(let y=0,_=l.length;y<_;y++){o.isInterleavedBufferAttribute?v=l[y]*o.data.stride+o.offset:v=l[y]*u;for(let p=0;p<u;p++)g[S++]=h[v++]}return new je(g,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],h=t(l,n);e.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let u=0,m=h.length;u<m;u++){const g=h[u],v=t(g,n);l.push(v)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let m=0,g=h.length;m<g;m++){const v=h[m];u.push(v.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(e))}const s=t.morphAttributes;for(const h in s){const u=[],m=s[h];for(let g=0,v=m.length;g<v;g++)u.push(m[g].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const m=a[h];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new fe,On=new hc,dr=new Xr,eo=new H,hi=new H,ui=new H,fi=new H,Cs=new H,pr=new H,mr=new Gt,gr=new Gt,_r=new Gt,no=new H,io=new H,ro=new H,vr=new H,xr=new H;class ge extends ye{constructor(t=new an,e=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){pr.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const u=o[l],m=s[l];u!==0&&(Cs.fromBufferAttribute(m,t),a?pr.addScaledVector(Cs,u):pr.addScaledVector(Cs.sub(e),u))}e.add(pr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(s),On.copy(t.ray).recast(t.near),!(dr.containsPoint(On.origin)===!1&&(On.intersectSphere(dr,eo)===null||On.origin.distanceToSquared(eo)>(t.far-t.near)**2))&&(to.copy(s).invert(),On.copy(t.ray).applyMatrix4(to),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,m=s.attributes.normal,g=s.groups,v=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,y=g.length;S<y;S++){const _=g[S],p=a[_.materialIndex],R=Math.max(_.start,v.start),w=Math.min(o.count,Math.min(_.start+_.count,v.start+v.count));for(let C=R,V=w;C<V;C+=3){const I=o.getX(C),D=o.getX(C+1),q=o.getX(C+2);r=Mr(this,p,t,n,h,u,m,I,D,q),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const S=Math.max(0,v.start),y=Math.min(o.count,v.start+v.count);for(let _=S,p=y;_<p;_+=3){const R=o.getX(_),w=o.getX(_+1),C=o.getX(_+2);r=Mr(this,a,t,n,h,u,m,R,w,C),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let S=0,y=g.length;S<y;S++){const _=g[S],p=a[_.materialIndex],R=Math.max(_.start,v.start),w=Math.min(l.count,Math.min(_.start+_.count,v.start+v.count));for(let C=R,V=w;C<V;C+=3){const I=C,D=C+1,q=C+2;r=Mr(this,p,t,n,h,u,m,I,D,q),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const S=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let _=S,p=y;_<p;_+=3){const R=_,w=_+1,C=_+2;r=Mr(this,a,t,n,h,u,m,R,w,C),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function ih(i,t,e,n,r,s,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Pn,o),l===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(xr);return h<e.near||h>e.far?null:{distance:h,point:xr.clone(),object:i}}function Mr(i,t,e,n,r,s,a,o,l,h){i.getVertexPosition(o,hi),i.getVertexPosition(l,ui),i.getVertexPosition(h,fi);const u=ih(i,t,e,n,hi,ui,fi,vr);if(u){r&&(mr.fromBufferAttribute(r,o),gr.fromBufferAttribute(r,l),_r.fromBufferAttribute(r,h),u.uv=qe.getInterpolation(vr,hi,ui,fi,mr,gr,_r,new Gt)),s&&(mr.fromBufferAttribute(s,o),gr.fromBufferAttribute(s,l),_r.fromBufferAttribute(s,h),u.uv1=qe.getInterpolation(vr,hi,ui,fi,mr,gr,_r,new Gt)),a&&(no.fromBufferAttribute(a,o),io.fromBufferAttribute(a,l),ro.fromBufferAttribute(a,h),u.normal=qe.getInterpolation(vr,hi,ui,fi,no,io,ro,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const m={a:o,b:l,c:h,normal:new H,materialIndex:0};qe.getNormal(hi,ui,fi,m.normal),u.face=m}return u}class Ye extends an{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],u=[],m=[];let g=0,v=0;S("z","y","x",-1,-1,n,e,t,a,s,0),S("z","y","x",1,-1,n,e,-t,a,s,1),S("x","z","y",1,1,t,n,e,r,a,2),S("x","z","y",1,-1,t,n,-e,r,a,3),S("x","y","z",1,-1,t,e,n,r,s,4),S("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(m,2));function S(y,_,p,R,w,C,V,I,D,q,T){const A=C/D,k=V/q,J=C/2,B=V/2,tt=I/2,Z=D+1,lt=q+1;let it=0,W=0;const ht=new H;for(let ct=0;ct<lt;ct++){const Et=ct*k-B;for(let $t=0;$t<Z;$t++){const ee=$t*A-J;ht[y]=ee*R,ht[_]=Et*w,ht[p]=tt,h.push(ht.x,ht.y,ht.z),ht[y]=0,ht[_]=0,ht[p]=I>0?1:-1,u.push(ht.x,ht.y,ht.z),m.push($t/D),m.push(1-ct/q),it+=1}}for(let ct=0;ct<q;ct++)for(let Et=0;Et<D;Et++){const $t=g+Et+Z*ct,ee=g+Et+Z*(ct+1),Y=g+(Et+1)+Z*(ct+1),ut=g+(Et+1)+Z*ct;l.push($t,ee,ut),l.push(ee,Y,ut),W+=6}o.addGroup(v,W,T),v+=W,g+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Ci(i[e]);for(const r in n)t[r]=n[r]}return t}function rh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const sh={clone:Ci,merge:Ce};var ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ah,this.fragmentShader=oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gc extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new H,so=new Gt,ao=new Gt;class ke extends gc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,so,ao),e.subVectors(ao,so)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/h,r*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const di=-90,pi=1;class ch extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ke(di,pi,t,e);r.layers=this.layers,this.add(r);const s=new ke(di,pi,t,e);s.layers=this.layers,this.add(s);const a=new ke(di,pi,t,e);a.layers=this.layers,this.add(a);const o=new ke(di,pi,t,e);o.layers=this.layers,this.add(o);const l=new ke(di,pi,t,e);l.layers=this.layers,this.add(l);const h=new ke(di,pi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const h of e)this.remove(h);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,h,u]=this.children,m=t.getRenderTarget(),g=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,h),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(m,g,v),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class _c extends Pe{constructor(t,e,n,r,s,a,o,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:wi,super(t,e,n,r,s,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lh extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new _c(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ye(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:wn});s.uniforms.tEquirect.value=e;const a=new ge(r,s),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=Xe),new ch(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Ps=new H,hh=new H,uh=new Vt;class kn{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ps.subVectors(n,e).cross(hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ps),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uh.getNormalMatrix(t),r=this.coplanarPoint(Ps).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Xr,Sr=new H;class ia{constructor(t=new kn,e=new kn,n=new kn,r=new kn,s=new kn,a=new kn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],h=r[4],u=r[5],m=r[6],g=r[7],v=r[8],S=r[9],y=r[10],_=r[11],p=r[12],R=r[13],w=r[14],C=r[15];if(n[0].setComponents(l-s,g-h,_-v,C-p).normalize(),n[1].setComponents(l+s,g+h,_+v,C+p).normalize(),n[2].setComponents(l+a,g+u,_+S,C+R).normalize(),n[3].setComponents(l-a,g-u,_-S,C-R).normalize(),n[4].setComponents(l-o,g-m,_-y,C-w).normalize(),e===mn)n[5].setComponents(l+o,g+m,_+y,C+w).normalize();else if(e===Br)n[5].setComponents(o,m,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Sr.x=r.normal.x>0?t.max.x:t.min.x,Sr.y=r.normal.y>0?t.max.y:t.min.y,Sr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function fh(i){const t=new WeakMap;function e(o,l){const h=o.array,u=o.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(l,g),i.bufferData(l,h,u),o.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,h){const u=l.array,m=l._updateRange,g=l.updateRanges;if(i.bindBuffer(h,o),m.count===-1&&g.length===0&&i.bufferSubData(h,0,u),g.length!==0){for(let v=0,S=g.length;v<S;v++){const y=g[v];i.bufferSubData(h,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}m.count!==-1&&(i.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count),m.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:r,remove:s,update:a}}class Ji extends an{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),h=o+1,u=l+1,m=t/o,g=e/l,v=[],S=[],y=[],_=[];for(let p=0;p<u;p++){const R=p*g-a;for(let w=0;w<h;w++){const C=w*m-s;S.push(C,-R,0),y.push(0,0,1),_.push(w/o),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<o;R++){const w=R+h*p,C=R+h*(p+1),V=R+1+h*(p+1),I=R+1+h*p;v.push(w,C,I),v.push(C,V,I)}this.setIndex(v),this.setAttribute("position",new Ke(S,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.widthSegments,t.heightSegments)}}var dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ph=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Eh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Th=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,su=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ou=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,du=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ku=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ef=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ef=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$f=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:dh,alphahash_pars_fragment:ph,alphamap_fragment:mh,alphamap_pars_fragment:gh,alphatest_fragment:_h,alphatest_pars_fragment:vh,aomap_fragment:xh,aomap_pars_fragment:Mh,batching_pars_vertex:Sh,batching_vertex:Eh,begin_vertex:yh,beginnormal_vertex:Ah,bsdfs:Th,iridescence_fragment:wh,bumpmap_pars_fragment:bh,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Lh,color_fragment:Dh,color_pars_fragment:Ih,color_pars_vertex:Uh,color_vertex:Nh,common:Oh,cube_uv_reflection_fragment:Fh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:zh,displacementmap_vertex:Hh,emissivemap_fragment:kh,emissivemap_pars_fragment:Vh,colorspace_fragment:Gh,colorspace_pars_fragment:Wh,envmap_fragment:$h,envmap_common_pars_fragment:Xh,envmap_pars_fragment:qh,envmap_pars_vertex:Yh,envmap_physical_pars_fragment:su,envmap_vertex:jh,fog_vertex:Kh,fog_pars_vertex:Zh,fog_fragment:Jh,fog_pars_fragment:Qh,gradientmap_pars_fragment:tu,lightmap_pars_fragment:eu,lights_lambert_fragment:nu,lights_lambert_pars_fragment:iu,lights_pars_begin:ru,lights_toon_fragment:au,lights_toon_pars_fragment:ou,lights_phong_fragment:cu,lights_phong_pars_fragment:lu,lights_physical_fragment:hu,lights_physical_pars_fragment:uu,lights_fragment_begin:fu,lights_fragment_maps:du,lights_fragment_end:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:gu,logdepthbuf_pars_vertex:_u,logdepthbuf_vertex:vu,map_fragment:xu,map_pars_fragment:Mu,map_particle_fragment:Su,map_particle_pars_fragment:Eu,metalnessmap_fragment:yu,metalnessmap_pars_fragment:Au,morphinstance_vertex:Tu,morphcolor_vertex:wu,morphnormal_vertex:bu,morphtarget_pars_vertex:Ru,morphtarget_vertex:Cu,normal_fragment_begin:Pu,normal_fragment_maps:Lu,normal_pars_fragment:Du,normal_pars_vertex:Iu,normal_vertex:Uu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Ou,clearcoat_normal_fragment_maps:Fu,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:zu,opaque_fragment:Hu,packing:ku,premultiplied_alpha_fragment:Vu,project_vertex:Gu,dithering_fragment:Wu,dithering_pars_fragment:$u,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:qu,shadowmap_pars_fragment:Yu,shadowmap_pars_vertex:ju,shadowmap_vertex:Ku,shadowmask_pars_fragment:Zu,skinbase_vertex:Ju,skinning_pars_vertex:Qu,skinning_vertex:tf,skinnormal_vertex:ef,specularmap_fragment:nf,specularmap_pars_fragment:rf,tonemapping_fragment:sf,tonemapping_pars_fragment:af,transmission_fragment:of,transmission_pars_fragment:cf,uv_pars_fragment:lf,uv_pars_vertex:hf,uv_vertex:uf,worldpos_vertex:ff,background_vert:df,background_frag:pf,backgroundCube_vert:mf,backgroundCube_frag:gf,cube_vert:_f,cube_frag:vf,depth_vert:xf,depth_frag:Mf,distanceRGBA_vert:Sf,distanceRGBA_frag:Ef,equirect_vert:yf,equirect_frag:Af,linedashed_vert:Tf,linedashed_frag:wf,meshbasic_vert:bf,meshbasic_frag:Rf,meshlambert_vert:Cf,meshlambert_frag:Pf,meshmatcap_vert:Lf,meshmatcap_frag:Df,meshnormal_vert:If,meshnormal_frag:Uf,meshphong_vert:Nf,meshphong_frag:Of,meshphysical_vert:Ff,meshphysical_frag:Bf,meshtoon_vert:zf,meshtoon_frag:Hf,points_vert:kf,points_frag:Vf,shadow_vert:Gf,shadow_frag:Wf,sprite_vert:$f,sprite_frag:Xf},gt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},en={basic:{uniforms:Ce([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ce([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ce([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ce([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ce([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ce([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ce([gt.points,gt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ce([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ce([gt.common,gt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ce([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ce([gt.sprite,gt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ce([gt.common,gt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ce([gt.lights,gt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};en.physical={uniforms:Ce([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Er={r:0,b:0,g:0},Bn=new sn,qf=new fe;function Yf(i,t,e,n,r,s,a){const o=new jt(0);let l=s===!0?0:1,h,u,m=null,g=0,v=null;function S(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?e:t).get(w)),w}function y(R){let w=!1;const C=S(R);C===null?p(o,l):C&&C.isColor&&(p(C,1),w=!0);const V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function _(R,w){const C=S(w);C&&(C.isCubeTexture||C.mapping===Gr)?(u===void 0&&(u=new ge(new Ye(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ci(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(V,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Bn.copy(w.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(Bn)),u.material.toneMapped=ie.getTransfer(C.colorSpace)!==ce,(m!==C||g!==C.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,m=C,g=C.version,v=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new ge(new Ji(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ci(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=ie.getTransfer(C.colorSpace)!==ce,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||g!==C.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,m=C,g=C.version,v=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function p(R,w){R.getRGB(Er,mc(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(R,w=1){o.set(R),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,p(o,l)},render:y,addToRenderList:_}}function jf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,a=!1;function o(A,k,J,B,tt){let Z=!1;const lt=m(B,J,k);s!==lt&&(s=lt,h(s.object)),Z=v(A,B,J,tt),Z&&S(A,B,J,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,C(A,k,J,B),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return i.createVertexArray()}function h(A){return i.bindVertexArray(A)}function u(A){return i.deleteVertexArray(A)}function m(A,k,J){const B=J.wireframe===!0;let tt=n[A.id];tt===void 0&&(tt={},n[A.id]=tt);let Z=tt[k.id];Z===void 0&&(Z={},tt[k.id]=Z);let lt=Z[B];return lt===void 0&&(lt=g(l()),Z[B]=lt),lt}function g(A){const k=[],J=[],B=[];for(let tt=0;tt<e;tt++)k[tt]=0,J[tt]=0,B[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:B,object:A,attributes:{},index:null}}function v(A,k,J,B){const tt=s.attributes,Z=k.attributes;let lt=0;const it=J.getAttributes();for(const W in it)if(it[W].location>=0){const ct=tt[W];let Et=Z[W];if(Et===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(Et=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(Et=A.instanceColor)),ct===void 0||ct.attribute!==Et||Et&&ct.data!==Et.data)return!0;lt++}return s.attributesNum!==lt||s.index!==B}function S(A,k,J,B){const tt={},Z=k.attributes;let lt=0;const it=J.getAttributes();for(const W in it)if(it[W].location>=0){let ct=Z[W];ct===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(ct=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(ct=A.instanceColor));const Et={};Et.attribute=ct,ct&&ct.data&&(Et.data=ct.data),tt[W]=Et,lt++}s.attributes=tt,s.attributesNum=lt,s.index=B}function y(){const A=s.newAttributes;for(let k=0,J=A.length;k<J;k++)A[k]=0}function _(A){p(A,0)}function p(A,k){const J=s.newAttributes,B=s.enabledAttributes,tt=s.attributeDivisors;J[A]=1,B[A]===0&&(i.enableVertexAttribArray(A),B[A]=1),tt[A]!==k&&(i.vertexAttribDivisor(A,k),tt[A]=k)}function R(){const A=s.newAttributes,k=s.enabledAttributes;for(let J=0,B=k.length;J<B;J++)k[J]!==A[J]&&(i.disableVertexAttribArray(J),k[J]=0)}function w(A,k,J,B,tt,Z,lt){lt===!0?i.vertexAttribIPointer(A,k,J,tt,Z):i.vertexAttribPointer(A,k,J,B,tt,Z)}function C(A,k,J,B){y();const tt=B.attributes,Z=J.getAttributes(),lt=k.defaultAttributeValues;for(const it in Z){const W=Z[it];if(W.location>=0){let ht=tt[it];if(ht===void 0&&(it==="instanceMatrix"&&A.instanceMatrix&&(ht=A.instanceMatrix),it==="instanceColor"&&A.instanceColor&&(ht=A.instanceColor)),ht!==void 0){const ct=ht.normalized,Et=ht.itemSize,$t=t.get(ht);if($t===void 0)continue;const ee=$t.buffer,Y=$t.type,ut=$t.bytesPerElement,Mt=Y===i.INT||Y===i.UNSIGNED_INT||ht.gpuType===Zo;if(ht.isInterleavedBufferAttribute){const mt=ht.data,qt=mt.stride,Xt=ht.offset;if(mt.isInstancedInterleavedBuffer){for(let z=0;z<W.locationSize;z++)p(W.location+z,mt.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let z=0;z<W.locationSize;z++)_(W.location+z);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let z=0;z<W.locationSize;z++)w(W.location+z,Et/W.locationSize,Y,ct,qt*ut,(Xt+Et/W.locationSize*z)*ut,Mt)}else{if(ht.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)p(W.location+mt,ht.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let mt=0;mt<W.locationSize;mt++)_(W.location+mt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let mt=0;mt<W.locationSize;mt++)w(W.location+mt,Et/W.locationSize,Y,ct,Et*ut,Et/W.locationSize*mt*ut,Mt)}}else if(lt!==void 0){const ct=lt[it];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(W.location,ct);break;case 3:i.vertexAttrib3fv(W.location,ct);break;case 4:i.vertexAttrib4fv(W.location,ct);break;default:i.vertexAttrib1fv(W.location,ct)}}}}R()}function V(){q();for(const A in n){const k=n[A];for(const J in k){const B=k[J];for(const tt in B)u(B[tt].object),delete B[tt];delete k[J]}delete n[A]}}function I(A){if(n[A.id]===void 0)return;const k=n[A.id];for(const J in k){const B=k[J];for(const tt in B)u(B[tt].object),delete B[tt];delete k[J]}delete n[A.id]}function D(A){for(const k in n){const J=n[k];if(J[A.id]===void 0)continue;const B=J[A.id];for(const tt in B)u(B[tt].object),delete B[tt];delete J[A.id]}}function q(){T(),a=!0,s!==r&&(s=r,h(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:q,resetDefaultState:T,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:_,disableUnusedAttributes:R}}function Kf(i,t,e){let n;function r(h){n=h}function s(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,m){m!==0&&(i.drawArraysInstanced(n,h,u,m),e.update(u,n,m))}function o(h,u,m){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<m;v++)this.render(h[v],u[v]);else{g.multiDrawArraysWEBGL(n,h,0,u,0,m);let v=0;for(let S=0;S<m;S++)v+=u[S];e.update(v,n,1)}}function l(h,u,m,g){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<h.length;S++)a(h[S],u[S],g[S]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,u,0,g,0,m);let S=0;for(let y=0;y<m;y++)S+=u[y];for(let y=0;y<g.length;y++)e.update(S,n,g[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zf(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==rn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const D=I===Wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ln&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Tn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const m=e.logarithmicDepthBuffer===!0,g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,V=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:p,maxVaryings:R,maxFragmentUniforms:w,vertexTextures:C,maxSamples:V}}function Jf(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new kn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||r;return r=g,n=m.length,v},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,g){e=u(m,g,0)},this.setState=function(m,g,v){const S=m.clippingPlanes,y=m.clipIntersection,_=m.clipShadows,p=i.get(m);if(!r||S===null||S.length===0||s&&!_)s?u(null):h();else{const R=s?0:n,w=R*4;let C=p.clippingState||null;l.value=C,C=u(S,g,w,v);for(let V=0;V!==w;++V)C[V]=e[V];p.clippingState=C,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(m,g,v,S){const y=m!==null?m.length:0;let _=null;if(y!==0){if(_=l.value,S!==!0||_===null){const p=v+y*4,R=g.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<p)&&(_=new Float32Array(p));for(let w=0,C=v;w!==y;++w,C+=4)a.copy(m[w]).applyMatrix4(R,o),a.normal.toArray(_,C),_[C+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,_}}function Qf(i){let t=new WeakMap;function e(a,o){return o===Xs?a.mapping=wi:o===qs&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xs||o===qs)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new lh(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",r),e(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class xc extends gc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ei=4,oo=[.125,.215,.35,.446,.526,.582],Wn=20,Ls=new xc,co=new jt;let Ds=null,Is=0,Us=0,Ns=!1;const Vn=(1+Math.sqrt(5))/2,mi=1/Vn,lo=[new H(-Vn,mi,0),new H(Vn,mi,0),new H(-mi,0,Vn),new H(mi,0,Vn),new H(0,Vn,-mi),new H(0,Vn,mi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class ho{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ds=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),Ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ds,Is,Us),this._renderer.xr.enabled=Ns,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ds=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),Ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Wr,format:rn,colorSpace:In,depthBuffer:!1},r=uo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=td(s)),this._blurMaterial=ed(s,t,e)}return r}_compileMaterial(t){const e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,Ls)}_sceneToCubeUV(t,e,n,r){const o=new ke(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,g=u.toneMapping;u.getClearColor(co),u.toneMapping=bn,u.autoClear=!1;const v=new qr({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),S=new ge(new Ye,v);let y=!1;const _=t.background;_?_.isColor&&(v.color.copy(_),t.background=null,y=!0):(v.color.copy(co),y=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):R===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));const w=this._cubeSize;yr(r,R*w,p>2?w:0,w,w),u.setRenderTarget(r),y&&u.render(S,o),u.render(t,o)}S.geometry.dispose(),S.material.dispose(),u.toneMapping=g,u.autoClear=m,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===wi||t.mapping===bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ls)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=lo[(r-s-1)%lo.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,m=new ge(this._lodPlanes[r],h),g=h.uniforms,v=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Wn-1),y=s/S,_=isFinite(s)?1+Math.floor(u*y):Wn;_>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Wn}`);const p=[];let R=0;for(let D=0;D<Wn;++D){const q=D/y,T=Math.exp(-q*q/2);p.push(T),D===0?R+=T:D<_&&(R+=2*T)}for(let D=0;D<p.length;D++)p[D]=p[D]/R;g.envMap.value=t.texture,g.samples.value=_,g.weights.value=p,g.latitudinal.value=a==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:w}=this;g.dTheta.value=S,g.mipInt.value=w-n;const C=this._sizeLods[r],V=3*C*(r>w-Ei?r-w+Ei:0),I=4*(this._cubeSize-C);yr(e,V,I,3*C,2*C),l.setRenderTarget(e),l.render(m,Ls)}}function td(i){const t=[],e=[],n=[];let r=i;const s=i-Ei+1+oo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Ei?l=oo[a-i+Ei-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),u=-h,m=1+h,g=[u,u,m,u,m,m,u,u,m,m,u,m],v=6,S=6,y=3,_=2,p=1,R=new Float32Array(y*S*v),w=new Float32Array(_*S*v),C=new Float32Array(p*S*v);for(let I=0;I<v;I++){const D=I%3*2/3-1,q=I>2?0:-1,T=[D,q,0,D+2/3,q,0,D+2/3,q+1,0,D,q,0,D+2/3,q+1,0,D,q+1,0];R.set(T,y*S*I),w.set(g,_*S*I);const A=[I,I,I,I,I,I];C.set(A,p*S*I)}const V=new an;V.setAttribute("position",new je(R,y)),V.setAttribute("uv",new je(w,_)),V.setAttribute("faceIndex",new je(C,p)),t.push(V),r>Ei&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uo(i,t,e){const n=new qn(i,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ed(i,t,e){const n=new Float32Array(Wn),r=new H(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function fo(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function po(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Xs||l===qs,u=l===wi||l===bi;if(h||u){let m=t.get(o);const g=m!==void 0?m.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return e===null&&(e=new ho(i)),m=h?e.fromEquirectangular(o,m):e.fromCubemap(o,m),m.texture.pmremVersion=o.pmremVersion,t.set(o,m),m.texture;if(m!==void 0)return m.texture;{const v=o.image;return h&&v&&v.height>0||u&&v&&r(v)?(e===null&&(e=new ho(i)),m=h?e.fromEquirectangular(o):e.fromCubemap(o),m.texture.pmremVersion=o.pmremVersion,t.set(o,m),o.addEventListener("dispose",s),m.texture):null}}}return o}function r(o){let l=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function s(o){const l=o.target;l.removeEventListener("dispose",s);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function id(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rd(i,t,e,n){const r={},s=new WeakMap;function a(m){const g=m.target;g.index!==null&&t.remove(g.index);for(const S in g.attributes)t.remove(g.attributes[S]);for(const S in g.morphAttributes){const y=g.morphAttributes[S];for(let _=0,p=y.length;_<p;_++)t.remove(y[_])}g.removeEventListener("dispose",a),delete r[g.id];const v=s.get(g);v&&(t.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function o(m,g){return r[g.id]===!0||(g.addEventListener("dispose",a),r[g.id]=!0,e.memory.geometries++),g}function l(m){const g=m.attributes;for(const S in g)t.update(g[S],i.ARRAY_BUFFER);const v=m.morphAttributes;for(const S in v){const y=v[S];for(let _=0,p=y.length;_<p;_++)t.update(y[_],i.ARRAY_BUFFER)}}function h(m){const g=[],v=m.index,S=m.attributes.position;let y=0;if(v!==null){const R=v.array;y=v.version;for(let w=0,C=R.length;w<C;w+=3){const V=R[w+0],I=R[w+1],D=R[w+2];g.push(V,I,I,D,D,V)}}else if(S!==void 0){const R=S.array;y=S.version;for(let w=0,C=R.length/3-1;w<C;w+=3){const V=w+0,I=w+1,D=w+2;g.push(V,I,I,D,D,V)}}else return;const _=new(sc(g)?pc:dc)(g,1);_.version=y;const p=s.get(m);p&&t.remove(p),s.set(m,_)}function u(m){const g=s.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&h(m)}else h(m);return s.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function sd(i,t,e){let n;function r(g){n=g}let s,a;function o(g){s=g.type,a=g.bytesPerElement}function l(g,v){i.drawElements(n,v,s,g*a),e.update(v,n,1)}function h(g,v,S){S!==0&&(i.drawElementsInstanced(n,v,s,g*a,S),e.update(v,n,S))}function u(g,v,S){if(S===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S;_++)this.render(g[_]/a,v[_]);else{y.multiDrawElementsWEBGL(n,v,0,s,g,0,S);let _=0;for(let p=0;p<S;p++)_+=v[p];e.update(_,n,1)}}function m(g,v,S,y){if(S===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g.length;p++)h(g[p]/a,v[p],y[p]);else{_.multiDrawElementsInstancedWEBGL(n,v,0,s,g,0,y,0,S);let p=0;for(let R=0;R<S;R++)p+=v[R];for(let R=0;R<y.length;R++)e.update(p,n,y[R])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=m}function ad(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function od(i,t,e){const n=new WeakMap,r=new Ee;function s(a,o,l){const h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0;let g=n.get(o);if(g===void 0||g.count!==m){let A=function(){q.dispose(),n.delete(o),o.removeEventListener("dispose",A)};var v=A;g!==void 0&&g.texture.dispose();const S=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let C=0;S===!0&&(C=1),y===!0&&(C=2),_===!0&&(C=3);let V=o.attributes.position.count*C,I=1;V>t.maxTextureSize&&(I=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const D=new Float32Array(V*I*4*m),q=new lc(D,V,I,m);q.type=Tn,q.needsUpdate=!0;const T=C*4;for(let k=0;k<m;k++){const J=p[k],B=R[k],tt=w[k],Z=V*I*4*k;for(let lt=0;lt<J.count;lt++){const it=lt*T;S===!0&&(r.fromBufferAttribute(J,lt),D[Z+it+0]=r.x,D[Z+it+1]=r.y,D[Z+it+2]=r.z,D[Z+it+3]=0),y===!0&&(r.fromBufferAttribute(B,lt),D[Z+it+4]=r.x,D[Z+it+5]=r.y,D[Z+it+6]=r.z,D[Z+it+7]=0),_===!0&&(r.fromBufferAttribute(tt,lt),D[Z+it+8]=r.x,D[Z+it+9]=r.y,D[Z+it+10]=r.z,D[Z+it+11]=tt.itemSize===4?r.w:1)}}g={count:m,texture:q,size:new Gt(V,I)},n.set(o,g),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let S=0;for(let _=0;_<h.length;_++)S+=h[_];const y=o.morphTargetsRelative?1:1-S;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function cd(i,t,e,n){let r=new WeakMap;function s(l){const h=n.render.frame,u=l.geometry,m=t.get(l,u);if(r.get(m)!==h&&(t.update(m),r.set(m,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const g=l.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return m}function a(){r=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}class Mc extends Pe{constructor(t,e,n,r,s,a,o,l,h,u){if(u=u!==void 0?u:Ai,u!==Ai&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ai&&(n=Ri),n===void 0&&u===Yi&&(n=ji),super(null,r,s,a,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sc=new Pe,Ec=new Mc(1,1);Ec.compareFunction=rc;const yc=new lc,Ac=new ql,Tc=new _c,mo=[],go=[],_o=new Float32Array(16),vo=new Float32Array(9),xo=new Float32Array(4);function Ui(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=mo[r];if(s===void 0&&(s=new Float32Array(r),mo[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yr(i,t){let e=go[t];e===void 0&&(e=new Int32Array(t),go[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ld(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function dd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;xo.set(n),i.uniformMatrix2fv(this.addr,!1,xo),ve(e,n)}}function pd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;vo.set(n),i.uniformMatrix3fv(this.addr,!1,vo),ve(e,n)}}function md(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;_o.set(n),i.uniformMatrix4fv(this.addr,!1,_o),ve(e,n)}}function gd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Md(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Ed(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Ad(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Ec:Sc;e.setTexture2D(t||s,r)}function Td(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ac,r)}function wd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Tc,r)}function bd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||yc,r)}function Rd(i){switch(i){case 5126:return ld;case 35664:return hd;case 35665:return ud;case 35666:return fd;case 35674:return dd;case 35675:return pd;case 35676:return md;case 5124:case 35670:return gd;case 35667:case 35671:return _d;case 35668:case 35672:return vd;case 35669:case 35673:return xd;case 5125:return Md;case 36294:return Sd;case 36295:return Ed;case 36296:return yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ad;case 35679:case 36299:case 36307:return Td;case 35680:case 36300:case 36308:case 36293:return wd;case 36289:case 36303:case 36311:case 36292:return bd}}function Cd(i,t){i.uniform1fv(this.addr,t)}function Pd(i,t){const e=Ui(t,this.size,2);i.uniform2fv(this.addr,e)}function Ld(i,t){const e=Ui(t,this.size,3);i.uniform3fv(this.addr,e)}function Dd(i,t){const e=Ui(t,this.size,4);i.uniform4fv(this.addr,e)}function Id(i,t){const e=Ui(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ud(i,t){const e=Ui(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nd(i,t){const e=Ui(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Od(i,t){i.uniform1iv(this.addr,t)}function Fd(i,t){i.uniform2iv(this.addr,t)}function Bd(i,t){i.uniform3iv(this.addr,t)}function zd(i,t){i.uniform4iv(this.addr,t)}function Hd(i,t){i.uniform1uiv(this.addr,t)}function kd(i,t){i.uniform2uiv(this.addr,t)}function Vd(i,t){i.uniform3uiv(this.addr,t)}function Gd(i,t){i.uniform4uiv(this.addr,t)}function Wd(i,t,e){const n=this.cache,r=t.length,s=Yr(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Sc,s[a])}function $d(i,t,e){const n=this.cache,r=t.length,s=Yr(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ac,s[a])}function Xd(i,t,e){const n=this.cache,r=t.length,s=Yr(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Tc,s[a])}function qd(i,t,e){const n=this.cache,r=t.length,s=Yr(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||yc,s[a])}function Yd(i){switch(i){case 5126:return Cd;case 35664:return Pd;case 35665:return Ld;case 35666:return Dd;case 35674:return Id;case 35675:return Ud;case 35676:return Nd;case 5124:case 35670:return Od;case 35667:case 35671:return Fd;case 35668:case 35672:return Bd;case 35669:case 35673:return zd;case 5125:return Hd;case 36294:return kd;case 36295:return Vd;case 36296:return Gd;case 35678:case 36198:case 36298:case 36306:case 35682:return Wd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return qd}}class jd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rd(e.type)}}class Kd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yd(e.type)}}class Zd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Os=/(\w+)(\])?(\[|\.)?/g;function Mo(i,t){i.seq.push(t),i.map[t.id]=t}function Jd(i,t,e){const n=i.name,r=n.length;for(Os.lastIndex=0;;){const s=Os.exec(n),a=Os.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===r){Mo(e,h===void 0?new jd(o,i,t):new Kd(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Zd(o),Mo(e,m)),e=m}}}class Pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Jd(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function So(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qd=37297;let tp=0;function ep(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function np(i){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(i);let n;switch(t===e?n="":t===Fr&&e===Or?n="LinearDisplayP3ToLinearSRGB":t===Or&&e===Fr&&(n="LinearSRGBToLinearDisplayP3"),i){case In:case $r:return[n,"LinearTransferOETF"];case tn:case na:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Eo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ep(i.getShaderSource(t),a)}else return r}function ip(i,t){const e=np(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rp(i,t){let e;switch(t){case fl:e="Linear";break;case dl:e="Reinhard";break;case pl:e="OptimizedCineon";break;case ml:e="ACESFilmic";break;case _l:e="AgX";break;case vl:e="Neutral";break;case gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function sp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function ap(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function op(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Xi(i){return i!==""}function yo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ao(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Js(i){return i.replace(cp,hp)}const lp=new Map;function hp(i,t){let e=kt[t];if(e===void 0){const n=lp.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Js(e)}const up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(i){return i.replace(up,fp)}function fp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function pp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wi:case bi:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function gp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yo:t="ENVMAP_BLENDING_MULTIPLY";break;case hl:t="ENVMAP_BLENDING_MIX";break;case ul:t="ENVMAP_BLENDING_ADD";break}return t}function _p(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vp(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=dp(e),h=pp(e),u=mp(e),m=gp(e),g=_p(e),v=sp(e),S=ap(s),y=r.createProgram();let _,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Xi).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Xi).join(`
`),p.length>0&&(p+=`
`)):(_=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),p=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?kt.tonemapping_pars_fragment:"",e.toneMapping!==bn?rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,ip("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xi).join(`
`)),a=Js(a),a=yo(a,e),a=Ao(a,e),o=Js(o),o=yo(o,e),o=Ao(o,e),a=To(a),o=To(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=R+_+a,C=R+p+o,V=So(r,r.VERTEX_SHADER,w),I=So(r,r.FRAGMENT_SHADER,C);r.attachShader(y,V),r.attachShader(y,I),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function D(k){if(i.debug.checkShaderErrors){const J=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(V).trim(),tt=r.getShaderInfoLog(I).trim();let Z=!0,lt=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,V,I);else{const it=Eo(r,V,"vertex"),W=Eo(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+it+`
`+W)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(B===""||tt==="")&&(lt=!1);lt&&(k.diagnostics={runnable:Z,programLog:J,vertexShader:{log:B,prefix:_},fragmentShader:{log:tt,prefix:p}})}r.deleteShader(V),r.deleteShader(I),q=new Pr(r,y),T=op(r,y)}let q;this.getUniforms=function(){return q===void 0&&D(this),q};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(y,Qd)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tp++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=V,this.fragmentShader=I,this}let xp=0;class Mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sp(t),e.set(t,n)),n}}class Sp{constructor(t){this.id=xp++,this.code=t,this.usedTimes=0}}function Ep(i,t,e,n,r,s,a){const o=new uc,l=new Mp,h=new Set,u=[],m=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return h.add(T),T===0?"uv":`uv${T}`}function _(T,A,k,J,B){const tt=J.fog,Z=B.geometry,lt=T.isMeshStandardMaterial?J.environment:null,it=(T.isMeshStandardMaterial?e:t).get(T.envMap||lt),W=it&&it.mapping===Gr?it.image.height:null,ht=S[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=ct!==void 0?ct.length:0;let $t=0;Z.morphAttributes.position!==void 0&&($t=1),Z.morphAttributes.normal!==void 0&&($t=2),Z.morphAttributes.color!==void 0&&($t=3);let ee,Y,ut,Mt;if(ht){const Qt=en[ht];ee=Qt.vertexShader,Y=Qt.fragmentShader}else ee=T.vertexShader,Y=T.fragmentShader,l.update(T),ut=l.getVertexShaderID(T),Mt=l.getFragmentShaderID(T);const mt=i.getRenderTarget(),qt=B.isInstancedMesh===!0,Xt=B.isBatchedMesh===!0,z=!!T.map,re=!!T.matcap,Rt=!!it,Ft=!!T.aoMap,Lt=!!T.lightMap,Kt=!!T.bumpMap,Bt=!!T.normalMap,Ht=!!T.displacementMap,ae=!!T.emissiveMap,b=!!T.metalnessMap,E=!!T.roughnessMap,G=T.anisotropy>0,Q=T.clearcoat>0,st=T.dispersion>0,at=T.iridescence>0,Tt=T.sheen>0,dt=T.transmission>0,vt=G&&!!T.anisotropyMap,zt=Q&&!!T.clearcoatMap,ft=Q&&!!T.clearcoatNormalMap,At=Q&&!!T.clearcoatRoughnessMap,Jt=at&&!!T.iridescenceMap,Pt=at&&!!T.iridescenceThicknessMap,St=Tt&&!!T.sheenColorMap,It=Tt&&!!T.sheenRoughnessMap,Yt=!!T.specularMap,le=!!T.specularColorMap,Nt=!!T.specularIntensityMap,O=dt&&!!T.transmissionMap,et=dt&&!!T.thicknessMap,j=!!T.gradientMap,_t=!!T.alphaMap,xt=T.alphaTest>0,Zt=!!T.alphaHash,se=!!T.extensions;let oe=bn;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(oe=i.toneMapping);const xe={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:ee,fragmentShader:Y,defines:T.defines,customVertexShaderID:ut,customFragmentShaderID:Mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Xt,instancing:qt,instancingColor:qt&&B.instanceColor!==null,instancingMorph:qt&&B.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:In,alphaToCoverage:!!T.alphaToCoverage,map:z,matcap:re,envMap:Rt,envMapMode:Rt&&it.mapping,envMapCubeUVHeight:W,aoMap:Ft,lightMap:Lt,bumpMap:Kt,normalMap:Bt,displacementMap:g&&Ht,emissiveMap:ae,normalMapObjectSpace:Bt&&T.normalMapType===Dl,normalMapTangentSpace:Bt&&T.normalMapType===ic,metalnessMap:b,roughnessMap:E,anisotropy:G,anisotropyMap:vt,clearcoat:Q,clearcoatMap:zt,clearcoatNormalMap:ft,clearcoatRoughnessMap:At,dispersion:st,iridescence:at,iridescenceMap:Jt,iridescenceThicknessMap:Pt,sheen:Tt,sheenColorMap:St,sheenRoughnessMap:It,specularMap:Yt,specularColorMap:le,specularIntensityMap:Nt,transmission:dt,transmissionMap:O,thicknessMap:et,gradientMap:j,opaque:T.transparent===!1&&T.blending===yi&&T.alphaToCoverage===!1,alphaMap:_t,alphaTest:xt,alphaHash:Zt,combine:T.combine,mapUv:z&&y(T.map.channel),aoMapUv:Ft&&y(T.aoMap.channel),lightMapUv:Lt&&y(T.lightMap.channel),bumpMapUv:Kt&&y(T.bumpMap.channel),normalMapUv:Bt&&y(T.normalMap.channel),displacementMapUv:Ht&&y(T.displacementMap.channel),emissiveMapUv:ae&&y(T.emissiveMap.channel),metalnessMapUv:b&&y(T.metalnessMap.channel),roughnessMapUv:E&&y(T.roughnessMap.channel),anisotropyMapUv:vt&&y(T.anisotropyMap.channel),clearcoatMapUv:zt&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:ft&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:St&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(T.sheenRoughnessMap.channel),specularMapUv:Yt&&y(T.specularMap.channel),specularColorMapUv:le&&y(T.specularColorMap.channel),specularIntensityMapUv:Nt&&y(T.specularIntensityMap.channel),transmissionMapUv:O&&y(T.transmissionMap.channel),thicknessMapUv:et&&y(T.thicknessMap.channel),alphaMapUv:_t&&y(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Bt||G),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(z||_t),fog:!!tt,useFog:T.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:$t,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:z&&T.map.isVideoTexture===!0&&ie.getTransfer(T.map.colorSpace)===ce,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pn,flipSided:T.side===De,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:se&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:se&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return xe.vertexUv1s=h.has(1),xe.vertexUv2s=h.has(2),xe.vertexUv3s=h.has(3),h.clear(),xe}function p(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)A.push(k),A.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(R(A,T),w(A,T),A.push(i.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function R(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.numLightProbes),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function w(T,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),T.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),T.push(o.mask)}function C(T){const A=S[T.type];let k;if(A){const J=en[A];k=sh.clone(J.uniforms)}else k=T.uniforms;return k}function V(T,A){let k;for(let J=0,B=u.length;J<B;J++){const tt=u[J];if(tt.cacheKey===A){k=tt,++k.usedTimes;break}}return k===void 0&&(k=new vp(i,A,T,s),u.push(k)),k}function I(T){if(--T.usedTimes===0){const A=u.indexOf(T);u[A]=u[u.length-1],u.pop(),T.destroy()}}function D(T){l.remove(T)}function q(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:C,acquireProgram:V,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:q}}function yp(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Ap(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ro(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(m,g,v,S,y,_){let p=i[t];return p===void 0?(p={id:m.id,object:m,geometry:g,material:v,groupOrder:S,renderOrder:m.renderOrder,z:y,group:_},i[t]=p):(p.id=m.id,p.object=m,p.geometry=g,p.material=v,p.groupOrder=S,p.renderOrder=m.renderOrder,p.z=y,p.group=_),t++,p}function o(m,g,v,S,y,_){const p=a(m,g,v,S,y,_);v.transmission>0?n.push(p):v.transparent===!0?r.push(p):e.push(p)}function l(m,g,v,S,y,_){const p=a(m,g,v,S,y,_);v.transmission>0?n.unshift(p):v.transparent===!0?r.unshift(p):e.unshift(p)}function h(m,g){e.length>1&&e.sort(m||Ap),n.length>1&&n.sort(g||bo),r.length>1&&r.sort(g||bo)}function u(){for(let m=t,g=i.length;m<g;m++){const v=i[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:h}}function Tp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ro,i.set(n,[a])):r>=s.length?(a=new Ro,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function wp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new jt};break;case"SpotLight":e={position:new H,direction:new H,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function bp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rp=0;function Cp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pp(i){const t=new wp,e=bp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new H);const r=new H,s=new fe,a=new fe;function o(h,u){let m=0,g=0,v=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let S=0,y=0,_=0,p=0,R=0,w=0,C=0,V=0,I=0,D=0,q=0;h.sort(Cp);const T=u===!0?Math.PI:1;for(let k=0,J=h.length;k<J;k++){const B=h[k],tt=B.color,Z=B.intensity,lt=B.distance,it=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=tt.r*Z*T,g+=tt.g*Z*T,v+=tt.b*Z*T;else if(B.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(B.sh.coefficients[W],Z);q++}else if(B.isDirectionalLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*T),B.castShadow){const ht=B.shadow,ct=e.get(B);ct.shadowBias=ht.bias,ct.shadowNormalBias=ht.normalBias,ct.shadowRadius=ht.radius,ct.shadowMapSize=ht.mapSize,n.directionalShadow[S]=ct,n.directionalShadowMap[S]=it,n.directionalShadowMatrix[S]=B.shadow.matrix,w++}n.directional[S]=W,S++}else if(B.isSpotLight){const W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(tt).multiplyScalar(Z*T),W.distance=lt,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,n.spot[_]=W;const ht=B.shadow;if(B.map&&(n.spotLightMap[I]=B.map,I++,ht.updateMatrices(B),B.castShadow&&D++),n.spotLightMatrix[_]=ht.matrix,B.castShadow){const ct=e.get(B);ct.shadowBias=ht.bias,ct.shadowNormalBias=ht.normalBias,ct.shadowRadius=ht.radius,ct.shadowMapSize=ht.mapSize,n.spotShadow[_]=ct,n.spotShadowMap[_]=it,V++}_++}else if(B.isRectAreaLight){const W=t.get(B);W.color.copy(tt).multiplyScalar(Z),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),n.rectArea[p]=W,p++}else if(B.isPointLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*T),W.distance=B.distance,W.decay=B.decay,B.castShadow){const ht=B.shadow,ct=e.get(B);ct.shadowBias=ht.bias,ct.shadowNormalBias=ht.normalBias,ct.shadowRadius=ht.radius,ct.shadowMapSize=ht.mapSize,ct.shadowCameraNear=ht.camera.near,ct.shadowCameraFar=ht.camera.far,n.pointShadow[y]=ct,n.pointShadowMap[y]=it,n.pointShadowMatrix[y]=B.shadow.matrix,C++}n.point[y]=W,y++}else if(B.isHemisphereLight){const W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(Z*T),W.groundColor.copy(B.groundColor).multiplyScalar(Z*T),n.hemi[R]=W,R++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=v;const A=n.hash;(A.directionalLength!==S||A.pointLength!==y||A.spotLength!==_||A.rectAreaLength!==p||A.hemiLength!==R||A.numDirectionalShadows!==w||A.numPointShadows!==C||A.numSpotShadows!==V||A.numSpotMaps!==I||A.numLightProbes!==q)&&(n.directional.length=S,n.spot.length=_,n.rectArea.length=p,n.point.length=y,n.hemi.length=R,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=V,n.spotShadowMap.length=V,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=V+I-D,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=q,A.directionalLength=S,A.pointLength=y,A.spotLength=_,A.rectAreaLength=p,A.hemiLength=R,A.numDirectionalShadows=w,A.numPointShadows=C,A.numSpotShadows=V,A.numSpotMaps=I,A.numLightProbes=q,n.version=Rp++)}function l(h,u){let m=0,g=0,v=0,S=0,y=0;const _=u.matrixWorldInverse;for(let p=0,R=h.length;p<R;p++){const w=h[p];if(w.isDirectionalLight){const C=n.directional[m];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(_),m++}else if(w.isSpotLight){const C=n.spot[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(_),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(_),v++}else if(w.isRectAreaLight){const C=n.rectArea[S];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(_),a.identity(),s.copy(w.matrixWorld),s.premultiply(_),a.extractRotation(s),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),S++}else if(w.isPointLight){const C=n.point[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(_),g++}else if(w.isHemisphereLight){const C=n.hemi[y];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(_),y++}}}return{setup:o,setupView:l,state:n}}function Co(i){const t=new Pp(i),e=[],n=[];function r(u){h.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(u){t.setup(e,u)}function l(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Lp(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Co(i),t.set(r,[o])):s>=a.length?(o=new Co(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Dp extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ip extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Up=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Op(i,t,e){let n=new ia;const r=new Gt,s=new Gt,a=new Ee,o=new Dp({depthPacking:Ll}),l=new Ip,h={},u=e.maxTextureSize,m={[Pn]:De,[De]:Pn,[pn]:pn},g=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Up,fragmentShader:Np}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const S=new an;S.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ge(S,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let p=this.type;this.render=function(I,D,q){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;const T=i.getRenderTarget(),A=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),J=i.state;J.setBlending(wn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const B=p!==dn&&this.type===dn,tt=p===dn&&this.type!==dn;for(let Z=0,lt=I.length;Z<lt;Z++){const it=I[Z],W=it.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ht=W.getFrameExtents();if(r.multiply(ht),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ht.x),r.x=s.x*ht.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ht.y),r.y=s.y*ht.y,W.mapSize.y=s.y)),W.map===null||B===!0||tt===!0){const Et=this.type!==dn?{minFilter:Ve,magFilter:Ve}:{};W.map!==null&&W.map.dispose(),W.map=new qn(r.x,r.y,Et),W.map.texture.name=it.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ct=W.getViewportCount();for(let Et=0;Et<ct;Et++){const $t=W.getViewport(Et);a.set(s.x*$t.x,s.y*$t.y,s.x*$t.z,s.y*$t.w),J.viewport(a),W.updateMatrices(it,Et),n=W.getFrustum(),C(D,q,W.camera,it,this.type)}W.isPointLightShadow!==!0&&this.type===dn&&R(W,q),W.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(T,A,k)};function R(I,D){const q=t.update(y);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,v.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new qn(r.x,r.y)),g.uniforms.shadow_pass.value=I.map.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(D,null,q,g,y,null),v.uniforms.shadow_pass.value=I.mapPass.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(D,null,q,v,y,null)}function w(I,D,q,T){let A=null;const k=q.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)A=k;else if(A=q.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const J=A.uuid,B=D.uuid;let tt=h[J];tt===void 0&&(tt={},h[J]=tt);let Z=tt[B];Z===void 0&&(Z=A.clone(),tt[B]=Z,D.addEventListener("dispose",V)),A=Z}if(A.visible=D.visible,A.wireframe=D.wireframe,T===dn?A.side=D.shadowSide!==null?D.shadowSide:D.side:A.side=D.shadowSide!==null?D.shadowSide:m[D.side],A.alphaMap=D.alphaMap,A.alphaTest=D.alphaTest,A.map=D.map,A.clipShadows=D.clipShadows,A.clippingPlanes=D.clippingPlanes,A.clipIntersection=D.clipIntersection,A.displacementMap=D.displacementMap,A.displacementScale=D.displacementScale,A.displacementBias=D.displacementBias,A.wireframeLinewidth=D.wireframeLinewidth,A.linewidth=D.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const J=i.properties.get(A);J.light=q}return A}function C(I,D,q,T,A){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===dn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld);const B=t.update(I),tt=I.material;if(Array.isArray(tt)){const Z=B.groups;for(let lt=0,it=Z.length;lt<it;lt++){const W=Z[lt],ht=tt[W.materialIndex];if(ht&&ht.visible){const ct=w(I,ht,T,A);I.onBeforeShadow(i,I,D,q,B,ct,W),i.renderBufferDirect(q,null,B,ct,I,W),I.onAfterShadow(i,I,D,q,B,ct,W)}}}else if(tt.visible){const Z=w(I,tt,T,A);I.onBeforeShadow(i,I,D,q,B,Z,null),i.renderBufferDirect(q,null,B,Z,I,null),I.onAfterShadow(i,I,D,q,B,Z,null)}}const J=I.children;for(let B=0,tt=J.length;B<tt;B++)C(J[B],D,q,T,A)}function V(I){I.target.removeEventListener("dispose",V);for(const q in h){const T=h[q],A=I.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function Fp(i){function t(){let O=!1;const et=new Ee;let j=null;const _t=new Ee(0,0,0,0);return{setMask:function(xt){j!==xt&&!O&&(i.colorMask(xt,xt,xt,xt),j=xt)},setLocked:function(xt){O=xt},setClear:function(xt,Zt,se,oe,xe){xe===!0&&(xt*=oe,Zt*=oe,se*=oe),et.set(xt,Zt,se,oe),_t.equals(et)===!1&&(i.clearColor(xt,Zt,se,oe),_t.copy(et))},reset:function(){O=!1,j=null,_t.set(-1,0,0,0)}}}function e(){let O=!1,et=null,j=null,_t=null;return{setTest:function(xt){xt?Mt(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(xt){et!==xt&&!O&&(i.depthMask(xt),et=xt)},setFunc:function(xt){if(j!==xt){switch(xt){case il:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case ol:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=xt}},setLocked:function(xt){O=xt},setClear:function(xt){_t!==xt&&(i.clearDepth(xt),_t=xt)},reset:function(){O=!1,et=null,j=null,_t=null}}}function n(){let O=!1,et=null,j=null,_t=null,xt=null,Zt=null,se=null,oe=null,xe=null;return{setTest:function(Qt){O||(Qt?Mt(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(Qt){et!==Qt&&!O&&(i.stencilMask(Qt),et=Qt)},setFunc:function(Qt,he,Ae){(j!==Qt||_t!==he||xt!==Ae)&&(i.stencilFunc(Qt,he,Ae),j=Qt,_t=he,xt=Ae)},setOp:function(Qt,he,Ae){(Zt!==Qt||se!==he||oe!==Ae)&&(i.stencilOp(Qt,he,Ae),Zt=Qt,se=he,oe=Ae)},setLocked:function(Qt){O=Qt},setClear:function(Qt){xe!==Qt&&(i.clearStencil(Qt),xe=Qt)},reset:function(){O=!1,et=null,j=null,_t=null,xt=null,Zt=null,se=null,oe=null,xe=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let h={},u={},m=new WeakMap,g=[],v=null,S=!1,y=null,_=null,p=null,R=null,w=null,C=null,V=null,I=new jt(0,0,0),D=0,q=!1,T=null,A=null,k=null,J=null,B=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,lt=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(it)[1]),Z=lt>=1):it.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),Z=lt>=2);let W=null,ht={};const ct=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),$t=new Ee().fromArray(ct),ee=new Ee().fromArray(Et);function Y(O,et,j,_t){const xt=new Uint8Array(4),Zt=i.createTexture();i.bindTexture(O,Zt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<j;se++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(et+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return Zt}const ut={};ut[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),s.setFunc(Ur),Kt(!1),Bt(ha),Mt(i.CULL_FACE),Ft(wn);function Mt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function mt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function qt(O,et){return u[O]!==et?(i.bindFramebuffer(O,et),u[O]=et,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=et),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=et),!0):!1}function Xt(O,et){let j=g,_t=!1;if(O){j=m.get(et),j===void 0&&(j=[],m.set(et,j));const xt=O.textures;if(j.length!==xt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Zt=0,se=xt.length;Zt<se;Zt++)j[Zt]=i.COLOR_ATTACHMENT0+Zt;j.length=xt.length,_t=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,_t=!0);_t&&i.drawBuffers(j)}function z(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const re={[Gn]:i.FUNC_ADD,[Hc]:i.FUNC_SUBTRACT,[kc]:i.FUNC_REVERSE_SUBTRACT};re[Vc]=i.MIN,re[Gc]=i.MAX;const Rt={[Wc]:i.ZERO,[$c]:i.ONE,[Xc]:i.SRC_COLOR,[Ws]:i.SRC_ALPHA,[Jc]:i.SRC_ALPHA_SATURATE,[Kc]:i.DST_COLOR,[Yc]:i.DST_ALPHA,[qc]:i.ONE_MINUS_SRC_COLOR,[$s]:i.ONE_MINUS_SRC_ALPHA,[Zc]:i.ONE_MINUS_DST_COLOR,[jc]:i.ONE_MINUS_DST_ALPHA,[Qc]:i.CONSTANT_COLOR,[tl]:i.ONE_MINUS_CONSTANT_COLOR,[el]:i.CONSTANT_ALPHA,[nl]:i.ONE_MINUS_CONSTANT_ALPHA};function Ft(O,et,j,_t,xt,Zt,se,oe,xe,Qt){if(O===wn){S===!0&&(mt(i.BLEND),S=!1);return}if(S===!1&&(Mt(i.BLEND),S=!0),O!==zc){if(O!==y||Qt!==q){if((_!==Gn||w!==Gn)&&(i.blendEquation(i.FUNC_ADD),_=Gn,w=Gn),Qt)switch(O){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ua:i.blendFunc(i.ONE,i.ONE);break;case fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case da:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ua:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case da:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}p=null,R=null,C=null,V=null,I.set(0,0,0),D=0,y=O,q=Qt}return}xt=xt||et,Zt=Zt||j,se=se||_t,(et!==_||xt!==w)&&(i.blendEquationSeparate(re[et],re[xt]),_=et,w=xt),(j!==p||_t!==R||Zt!==C||se!==V)&&(i.blendFuncSeparate(Rt[j],Rt[_t],Rt[Zt],Rt[se]),p=j,R=_t,C=Zt,V=se),(oe.equals(I)===!1||xe!==D)&&(i.blendColor(oe.r,oe.g,oe.b,xe),I.copy(oe),D=xe),y=O,q=!1}function Lt(O,et){O.side===pn?mt(i.CULL_FACE):Mt(i.CULL_FACE);let j=O.side===De;et&&(j=!j),Kt(j),O.blending===yi&&O.transparent===!1?Ft(wn):Ft(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const _t=O.stencilWrite;a.setTest(_t),_t&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ae(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(O){T!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),T=O)}function Bt(O){O!==Fc?(Mt(i.CULL_FACE),O!==A&&(O===ha?i.cullFace(i.BACK):O===Bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),A=O}function Ht(O){O!==k&&(Z&&i.lineWidth(O),k=O)}function ae(O,et,j){O?(Mt(i.POLYGON_OFFSET_FILL),(J!==et||B!==j)&&(i.polygonOffset(et,j),J=et,B=j)):mt(i.POLYGON_OFFSET_FILL)}function b(O){O?Mt(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function E(O){O===void 0&&(O=i.TEXTURE0+tt-1),W!==O&&(i.activeTexture(O),W=O)}function G(O,et,j){j===void 0&&(W===null?j=i.TEXTURE0+tt-1:j=W);let _t=ht[j];_t===void 0&&(_t={type:void 0,texture:void 0},ht[j]=_t),(_t.type!==O||_t.texture!==et)&&(W!==j&&(i.activeTexture(j),W=j),i.bindTexture(O,et||ut[O]),_t.type=O,_t.texture=et)}function Q(){const O=ht[W];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Jt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(O){$t.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),$t.copy(O))}function It(O){ee.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Yt(O,et){let j=l.get(et);j===void 0&&(j=new WeakMap,l.set(et,j));let _t=j.get(O);_t===void 0&&(_t=i.getUniformBlockIndex(et,O.name),j.set(O,_t))}function le(O,et){const _t=l.get(et).get(O);o.get(et)!==_t&&(i.uniformBlockBinding(et,_t,O.__bindingPointIndex),o.set(et,_t))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,ht={},u={},m=new WeakMap,g=[],v=null,S=!1,y=null,_=null,p=null,R=null,w=null,C=null,V=null,I=new jt(0,0,0),D=0,q=!1,T=null,A=null,k=null,J=null,B=null,$t.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Mt,disable:mt,bindFramebuffer:qt,drawBuffers:Xt,useProgram:z,setBlending:Ft,setMaterial:Lt,setFlipSided:Kt,setCullFace:Bt,setLineWidth:Ht,setPolygonOffset:ae,setScissorTest:b,activeTexture:E,bindTexture:G,unbindTexture:Q,compressedTexImage2D:st,compressedTexImage3D:at,texImage2D:Jt,texImage3D:Pt,updateUBOMapping:Yt,uniformBlockBinding:le,texStorage2D:ft,texStorage3D:At,texSubImage2D:Tt,texSubImage3D:dt,compressedTexSubImage2D:vt,compressedTexSubImage3D:zt,scissor:St,viewport:It,reset:Nt}}function Bp(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Gt,u=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,E){return v?new OffscreenCanvas(b,E):zr("canvas")}function y(b,E,G){let Q=1;const st=ae(b);if((st.width>G||st.height>G)&&(Q=G/Math.max(st.width,st.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const at=Math.floor(Q*st.width),Tt=Math.floor(Q*st.height);m===void 0&&(m=S(at,Tt));const dt=E?S(at,Tt):m;return dt.width=at,dt.height=Tt,dt.getContext("2d").drawImage(b,0,0,at,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+at+"x"+Tt+")."),dt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),b;return b}function _(b){return b.generateMipmaps&&b.minFilter!==Ve&&b.minFilter!==Xe}function p(b){i.generateMipmap(b)}function R(b,E,G,Q,st=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let at=E;if(E===i.RED&&(G===i.FLOAT&&(at=i.R32F),G===i.HALF_FLOAT&&(at=i.R16F),G===i.UNSIGNED_BYTE&&(at=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.R8UI),G===i.UNSIGNED_SHORT&&(at=i.R16UI),G===i.UNSIGNED_INT&&(at=i.R32UI),G===i.BYTE&&(at=i.R8I),G===i.SHORT&&(at=i.R16I),G===i.INT&&(at=i.R32I)),E===i.RG&&(G===i.FLOAT&&(at=i.RG32F),G===i.HALF_FLOAT&&(at=i.RG16F),G===i.UNSIGNED_BYTE&&(at=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RG8UI),G===i.UNSIGNED_SHORT&&(at=i.RG16UI),G===i.UNSIGNED_INT&&(at=i.RG32UI),G===i.BYTE&&(at=i.RG8I),G===i.SHORT&&(at=i.RG16I),G===i.INT&&(at=i.RG32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),E===i.RGBA){const Tt=st?Nr:ie.getTransfer(Q);G===i.FLOAT&&(at=i.RGBA32F),G===i.HALF_FLOAT&&(at=i.RGBA16F),G===i.UNSIGNED_BYTE&&(at=Tt===ce?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function w(b,E){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ve&&b.minFilter!==Xe?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function C(b){const E=b.target;E.removeEventListener("dispose",C),I(E),E.isVideoTexture&&u.delete(E)}function V(b){const E=b.target;E.removeEventListener("dispose",V),q(E)}function I(b){const E=n.get(b);if(E.__webglInit===void 0)return;const G=b.source,Q=g.get(G);if(Q){const st=Q[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(b),Object.keys(Q).length===0&&g.delete(G)}n.remove(b)}function D(b){const E=n.get(b);i.deleteTexture(E.__webglTexture);const G=b.source,Q=g.get(G);delete Q[E.__cacheKey],a.memory.textures--}function q(b){const E=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let st=0;st<E.__webglFramebuffer[Q].length;st++)i.deleteFramebuffer(E.__webglFramebuffer[Q][st]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=b.textures;for(let Q=0,st=G.length;Q<st;Q++){const at=n.get(G[Q]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(G[Q])}n.remove(b)}let T=0;function A(){T=0}function k(){const b=T;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),T+=1,b}function J(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function B(b,E){const G=n.get(b);if(b.isVideoTexture&&Bt(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(G,b,E);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function tt(b,E){const G=n.get(b);if(b.version>0&&G.__version!==b.version){$t(G,b,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function Z(b,E){const G=n.get(b);if(b.version>0&&G.__version!==b.version){$t(G,b,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function lt(b,E){const G=n.get(b);if(b.version>0&&G.__version!==b.version){ee(G,b,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}const it={[Ys]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[js]:i.MIRRORED_REPEAT},W={[Ve]:i.NEAREST,[xl]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[ss]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},ht={[Il]:i.NEVER,[zl]:i.ALWAYS,[Ul]:i.LESS,[rc]:i.LEQUAL,[Nl]:i.EQUAL,[Bl]:i.GEQUAL,[Ol]:i.GREATER,[Fl]:i.NOTEQUAL};function ct(b,E){if(E.type===Tn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Xe||E.magFilter===ss||E.magFilter===nr||E.magFilter===Xn||E.minFilter===Xe||E.minFilter===ss||E.minFilter===nr||E.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,it[E.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,it[E.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,it[E.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,W[E.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,W[E.minFilter]),E.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ht[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ve||E.minFilter!==nr&&E.minFilter!==Xn||E.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Et(b,E){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",C));const Q=E.source;let st=g.get(Q);st===void 0&&(st={},g.set(Q,st));const at=J(E);if(at!==b.__cacheKey){st[at]===void 0&&(st[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),st[at].usedTimes++;const Tt=st[b.__cacheKey];Tt!==void 0&&(st[b.__cacheKey].usedTimes--,Tt.usedTimes===0&&D(E)),b.__cacheKey=at,b.__webglTexture=st[at].texture}return G}function $t(b,E,G){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);const st=Et(b,E),at=E.source;e.bindTexture(Q,b.__webglTexture,i.TEXTURE0+G);const Tt=n.get(at);if(at.version!==Tt.__version||st===!0){e.activeTexture(i.TEXTURE0+G);const dt=ie.getPrimaries(ie.workingColorSpace),vt=E.colorSpace===An?null:ie.getPrimaries(E.colorSpace),zt=E.colorSpace===An||dt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let ft=y(E.image,!1,r.maxTextureSize);ft=Ht(E,ft);const At=s.convert(E.format,E.colorSpace),Jt=s.convert(E.type);let Pt=R(E.internalFormat,At,Jt,E.colorSpace,E.isVideoTexture);ct(Q,E);let St;const It=E.mipmaps,Yt=E.isVideoTexture!==!0,le=Tt.__version===void 0||st===!0,Nt=at.dataReady,O=w(E,ft);if(E.isDepthTexture)Pt=i.DEPTH_COMPONENT16,E.type===Tn?Pt=i.DEPTH_COMPONENT32F:E.type===Ri?Pt=i.DEPTH_COMPONENT24:E.type===ji&&(Pt=i.DEPTH24_STENCIL8),le&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Pt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ft.width,ft.height,0,At,Jt,null));else if(E.isDataTexture)if(It.length>0){Yt&&le&&e.texStorage2D(i.TEXTURE_2D,O,Pt,It[0].width,It[0].height);for(let et=0,j=It.length;et<j;et++)St=It[et],Yt?Nt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,St.width,St.height,At,Jt,St.data):e.texImage2D(i.TEXTURE_2D,et,Pt,St.width,St.height,0,At,Jt,St.data);E.generateMipmaps=!1}else Yt?(le&&e.texStorage2D(i.TEXTURE_2D,O,Pt,ft.width,ft.height),Nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,At,Jt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,ft.width,ft.height,0,At,Jt,ft.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Yt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,O,Pt,It[0].width,It[0].height,ft.depth);for(let et=0,j=It.length;et<j;et++)St=It[et],E.format!==rn?At!==null?Yt?Nt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,St.width,St.height,ft.depth,At,St.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Pt,St.width,St.height,ft.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?Nt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,St.width,St.height,ft.depth,At,Jt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Pt,St.width,St.height,ft.depth,0,At,Jt,St.data)}else{Yt&&le&&e.texStorage2D(i.TEXTURE_2D,O,Pt,It[0].width,It[0].height);for(let et=0,j=It.length;et<j;et++)St=It[et],E.format!==rn?At!==null?Yt?Nt&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,St.width,St.height,At,St.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Pt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?Nt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,St.width,St.height,At,Jt,St.data):e.texImage2D(i.TEXTURE_2D,et,Pt,St.width,St.height,0,At,Jt,St.data)}else if(E.isDataArrayTexture)Yt?(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,O,Pt,ft.width,ft.height,ft.depth),Nt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,At,Jt,ft.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ft.width,ft.height,ft.depth,0,At,Jt,ft.data);else if(E.isData3DTexture)Yt?(le&&e.texStorage3D(i.TEXTURE_3D,O,Pt,ft.width,ft.height,ft.depth),Nt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,At,Jt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ft.width,ft.height,ft.depth,0,At,Jt,ft.data);else if(E.isFramebufferTexture){if(le)if(Yt)e.texStorage2D(i.TEXTURE_2D,O,Pt,ft.width,ft.height);else{let et=ft.width,j=ft.height;for(let _t=0;_t<O;_t++)e.texImage2D(i.TEXTURE_2D,_t,Pt,et,j,0,At,Jt,null),et>>=1,j>>=1}}else if(It.length>0){if(Yt&&le){const et=ae(It[0]);e.texStorage2D(i.TEXTURE_2D,O,Pt,et.width,et.height)}for(let et=0,j=It.length;et<j;et++)St=It[et],Yt?Nt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,At,Jt,St):e.texImage2D(i.TEXTURE_2D,et,Pt,At,Jt,St);E.generateMipmaps=!1}else if(Yt){if(le){const et=ae(ft);e.texStorage2D(i.TEXTURE_2D,O,Pt,et.width,et.height)}Nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Jt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Pt,At,Jt,ft);_(E)&&p(Q),Tt.__version=at.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ee(b,E,G){if(E.image.length!==6)return;const Q=Et(b,E),st=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+G);const at=n.get(st);if(st.version!==at.__version||Q===!0){e.activeTexture(i.TEXTURE0+G);const Tt=ie.getPrimaries(ie.workingColorSpace),dt=E.colorSpace===An?null:ie.getPrimaries(E.colorSpace),vt=E.colorSpace===An||Tt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const zt=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,At=[];for(let j=0;j<6;j++)!zt&&!ft?At[j]=y(E.image[j],!0,r.maxCubemapSize):At[j]=ft?E.image[j].image:E.image[j],At[j]=Ht(E,At[j]);const Jt=At[0],Pt=s.convert(E.format,E.colorSpace),St=s.convert(E.type),It=R(E.internalFormat,Pt,St,E.colorSpace),Yt=E.isVideoTexture!==!0,le=at.__version===void 0||Q===!0,Nt=st.dataReady;let O=w(E,Jt);ct(i.TEXTURE_CUBE_MAP,E);let et;if(zt){Yt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,O,It,Jt.width,Jt.height);for(let j=0;j<6;j++){et=At[j].mipmaps;for(let _t=0;_t<et.length;_t++){const xt=et[_t];E.format!==rn?Pt!==null?Yt?Nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,xt.width,xt.height,Pt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,xt.width,xt.height,Pt,St,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,It,xt.width,xt.height,0,Pt,St,xt.data)}}}else{if(et=E.mipmaps,Yt&&le){et.length>0&&O++;const j=ae(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,O,It,j.width,j.height)}for(let j=0;j<6;j++)if(ft){Yt?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At[j].width,At[j].height,Pt,St,At[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,It,At[j].width,At[j].height,0,Pt,St,At[j].data);for(let _t=0;_t<et.length;_t++){const Zt=et[_t].image[j].image;Yt?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Zt.width,Zt.height,Pt,St,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,It,Zt.width,Zt.height,0,Pt,St,Zt.data)}}else{Yt?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,St,At[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,It,Pt,St,At[j]);for(let _t=0;_t<et.length;_t++){const xt=et[_t];Yt?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Pt,St,xt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,It,Pt,St,xt.image[j])}}}_(E)&&p(i.TEXTURE_CUBE_MAP),at.__version=st.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Y(b,E,G,Q,st,at){const Tt=s.convert(G.format,G.colorSpace),dt=s.convert(G.type),vt=R(G.internalFormat,Tt,dt,G.colorSpace);if(!n.get(E).__hasExternalTextures){const ft=Math.max(1,E.width>>at),At=Math.max(1,E.height>>at);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,at,vt,ft,At,E.depth,0,Tt,dt,null):e.texImage2D(st,at,vt,ft,At,0,Tt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Kt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,st,n.get(G).__webglTexture,0,Lt(E)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,st,n.get(G).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(b,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let Q=i.DEPTH_COMPONENT24;if(G||Kt(E)){const st=E.depthTexture;st&&st.isDepthTexture&&(st.type===Tn?Q=i.DEPTH_COMPONENT32F:st.type===Ri&&(Q=i.DEPTH_COMPONENT24));const at=Lt(E);Kt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Q,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Q,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){const Q=Lt(E);G&&Kt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,E.width,E.height):Kt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const Q=E.textures;for(let st=0;st<Q.length;st++){const at=Q[st],Tt=s.convert(at.format,at.colorSpace),dt=s.convert(at.type),vt=R(at.internalFormat,Tt,dt,at.colorSpace),zt=Lt(E);G&&Kt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,vt,E.width,E.height):Kt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,vt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,vt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const Q=n.get(E.depthTexture).__webglTexture,st=Lt(E);if(E.depthTexture.format===Ai)Kt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Yi)Kt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function mt(b){const E=n.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Mt(E.__webglFramebuffer,b)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=i.createRenderbuffer(),ut(E.__webglDepthbuffer[Q],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),ut(E.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(b,E,G){const Q=n.get(b);E!==void 0&&Y(Q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&mt(b)}function Xt(b){const E=b.texture,G=n.get(b),Q=n.get(E);b.addEventListener("dispose",V);const st=b.textures,at=b.isWebGLCubeRenderTarget===!0,Tt=st.length>1;if(Tt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,a.memory.textures++),at){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let vt=0;vt<E.mipmaps.length;vt++)G.__webglFramebuffer[dt][vt]=i.createFramebuffer()}else G.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<E.mipmaps.length;dt++)G.__webglFramebuffer[dt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let dt=0,vt=st.length;dt<vt;dt++){const zt=n.get(st[dt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Kt(b)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<st.length;dt++){const vt=st[dt];G.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);const zt=s.convert(vt.format,vt.colorSpace),ft=s.convert(vt.type),At=R(vt.internalFormat,zt,ft,vt.colorSpace,b.isXRRenderTarget===!0),Jt=Lt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,At,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(G.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ct(i.TEXTURE_CUBE_MAP,E);for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)Y(G.__webglFramebuffer[dt][vt],b,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else Y(G.__webglFramebuffer[dt],b,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);_(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,vt=st.length;dt<vt;dt++){const zt=st[dt],ft=n.get(zt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),ct(i.TEXTURE_2D,zt),Y(G.__webglFramebuffer,b,zt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),_(zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(dt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Q.__webglTexture),ct(dt,E),E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)Y(G.__webglFramebuffer[vt],b,E,i.COLOR_ATTACHMENT0,dt,vt);else Y(G.__webglFramebuffer,b,E,i.COLOR_ATTACHMENT0,dt,0);_(E)&&p(dt),e.unbindTexture()}b.depthBuffer&&mt(b)}function z(b){const E=b.textures;for(let G=0,Q=E.length;G<Q;G++){const st=E[G];if(_(st)){const at=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Tt=n.get(st).__webglTexture;e.bindTexture(at,Tt),p(at),e.unbindTexture()}}}const re=[],Rt=[];function Ft(b){if(b.samples>0){if(Kt(b)===!1){const E=b.textures,G=b.width,Q=b.height;let st=i.COLOR_BUFFER_BIT;const at=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(b),dt=E.length>1;if(dt)for(let vt=0;vt<E.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let vt=0;vt<E.length;vt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const zt=n.get(E[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,G,Q,0,0,G,Q,st,i.NEAREST),l===!0&&(re.length=0,Rt.length=0,re.push(i.COLOR_ATTACHMENT0+vt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(re.push(at),Rt.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<E.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const zt=n.get(E[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Lt(b){return Math.min(r.maxSamples,b.samples)}function Kt(b){const E=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(b){const E=a.render.frame;u.get(b)!==E&&(u.set(b,E),b.update())}function Ht(b,E){const G=b.colorSpace,Q=b.format,st=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==In&&G!==An&&(ie.getTransfer(G)===ce?(Q!==rn||st!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=A,this.setTexture2D=B,this.setTexture2DArray=tt,this.setTexture3D=Z,this.setTextureCube=lt,this.rebindTextures=qt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Kt}function zp(i,t){function e(n,r=An){let s;const a=ie.getTransfer(r);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return i.BYTE;if(n===Sl)return i.SHORT;if(n===Ko)return i.UNSIGNED_SHORT;if(n===Zo)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Wr)return i.HALF_FLOAT;if(n===yl)return i.ALPHA;if(n===Al)return i.RGB;if(n===rn)return i.RGBA;if(n===Tl)return i.LUMINANCE;if(n===wl)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===Rl)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===as||n===os||n===cs||n===ls)if(a===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===as)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===as)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===_a)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===xa||n===Ma)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===va||n===xa)return a===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===Ea||n===ya||n===Aa||n===Ta||n===wa||n===ba||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Sa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hs||n===Na||n===Oa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===hs)return a===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Fa||n===Ba||n===za)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===hs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Hp extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qi extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kp={type:"move"};class Fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const y of t.hand.values()){const _=e.getJointPose(y,n),p=this._getHandJoint(h,y);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=u.position.distanceTo(m.position),v=.02,S=.005;h.inputState.pinching&&g>v+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=v-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Vp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Pe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new Dn({vertexShader:Vp,fragmentShader:Gp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ge(new Ji(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class $p extends Ii{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,h=null,u=null,m=null,g=null,v=null,S=null;const y=new Wp,_=e.getContextAttributes();let p=null,R=null;const w=[],C=[],V=new Gt;let I=null;const D=new ke;D.layers.enable(1),D.viewport=new Ee;const q=new ke;q.layers.enable(2),q.viewport=new Ee;const T=[D,q],A=new Hp;A.layers.enable(1),A.layers.enable(2);let k=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ut=w[Y];return ut===void 0&&(ut=new Fs,w[Y]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Y){let ut=w[Y];return ut===void 0&&(ut=new Fs,w[Y]=ut),ut.getGripSpace()},this.getHand=function(Y){let ut=w[Y];return ut===void 0&&(ut=new Fs,w[Y]=ut),ut.getHandSpace()};function B(Y){const ut=C.indexOf(Y.inputSource);if(ut===-1)return;const Mt=w[ut];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,h||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function tt(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",tt),r.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<w.length;Y++){const ut=C[Y];ut!==null&&(C[Y]=null,w[Y].disconnect(ut))}k=null,J=null,y.reset(),t.setRenderTarget(p),v=null,g=null,m=null,r=null,R=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",tt),r.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(V),r.renderState.layers===void 0){const ut={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),R=new qn(v.framebufferWidth,v.framebufferHeight,{format:rn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ut=null,Mt=null,mt=null;_.depth&&(mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=_.stencil?Yi:Ai,Mt=_.stencil?ji:Ri);const qt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};m=new XRWebGLBinding(r,e),g=m.createProjectionLayer(qt),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new qn(g.textureWidth,g.textureHeight,{format:rn,type:Ln,depthTexture:new Mc(g.textureWidth,g.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(Y){for(let ut=0;ut<Y.removed.length;ut++){const Mt=Y.removed[ut],mt=C.indexOf(Mt);mt>=0&&(C[mt]=null,w[mt].disconnect(Mt))}for(let ut=0;ut<Y.added.length;ut++){const Mt=Y.added[ut];let mt=C.indexOf(Mt);if(mt===-1){for(let Xt=0;Xt<w.length;Xt++)if(Xt>=C.length){C.push(Mt),mt=Xt;break}else if(C[Xt]===null){C[Xt]=Mt,mt=Xt;break}if(mt===-1)break}const qt=w[mt];qt&&qt.connect(Mt)}}const lt=new H,it=new H;function W(Y,ut,Mt){lt.setFromMatrixPosition(ut.matrixWorld),it.setFromMatrixPosition(Mt.matrixWorld);const mt=lt.distanceTo(it),qt=ut.projectionMatrix.elements,Xt=Mt.projectionMatrix.elements,z=qt[14]/(qt[10]-1),re=qt[14]/(qt[10]+1),Rt=(qt[9]+1)/qt[5],Ft=(qt[9]-1)/qt[5],Lt=(qt[8]-1)/qt[0],Kt=(Xt[8]+1)/Xt[0],Bt=z*Lt,Ht=z*Kt,ae=mt/(-Lt+Kt),b=ae*-Lt;ut.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(b),Y.translateZ(ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const E=z+ae,G=re+ae,Q=Bt-b,st=Ht+(mt-b),at=Rt*re/G*E,Tt=Ft*re/G*E;Y.projectionMatrix.makePerspective(Q,st,at,Tt,E,G),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ht(Y,ut){ut===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ut.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;y.texture!==null&&(Y.near=y.depthNear,Y.far=y.depthFar),A.near=q.near=D.near=Y.near,A.far=q.far=D.far=Y.far,(k!==A.near||J!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,J=A.far,D.near=k,D.far=J,q.near=k,q.far=J,D.updateProjectionMatrix(),q.updateProjectionMatrix(),Y.updateProjectionMatrix());const ut=Y.parent,Mt=A.cameras;ht(A,ut);for(let mt=0;mt<Mt.length;mt++)ht(Mt[mt],ut);Mt.length===2?W(A,D,q):A.projectionMatrix.copy(D.projectionMatrix),ct(Y,A,ut)};function ct(Y,ut,Mt){Mt===null?Y.matrix.copy(ut.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ut.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Zs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(g===null&&v===null))return l},this.setFoveation=function(Y){l=Y,g!==null&&(g.fixedFoveation=Y),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null};let Et=null;function $t(Y,ut){if(u=ut.getViewerPose(h||a),S=ut,u!==null){const Mt=u.views;v!==null&&(t.setRenderTargetFramebuffer(R,v.framebuffer),t.setRenderTarget(R));let mt=!1;Mt.length!==A.cameras.length&&(A.cameras.length=0,mt=!0);for(let Xt=0;Xt<Mt.length;Xt++){const z=Mt[Xt];let re=null;if(v!==null)re=v.getViewport(z);else{const Ft=m.getViewSubImage(g,z);re=Ft.viewport,Xt===0&&(t.setRenderTargetTextures(R,Ft.colorTexture,g.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(R))}let Rt=T[Xt];Rt===void 0&&(Rt=new ke,Rt.layers.enable(Xt),Rt.viewport=new Ee,T[Xt]=Rt),Rt.matrix.fromArray(z.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(z.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(re.x,re.y,re.width,re.height),Xt===0&&(A.matrix.copy(Rt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),mt===!0&&A.cameras.push(Rt)}const qt=r.enabledFeatures;if(qt&&qt.includes("depth-sensing")){const Xt=m.getDepthInformation(Mt[0]);Xt&&Xt.isValid&&Xt.texture&&y.init(t,Xt,r.renderState)}}for(let Mt=0;Mt<w.length;Mt++){const mt=C[Mt],qt=w[Mt];mt!==null&&qt!==void 0&&qt.update(mt,ut,h||a)}y.render(t,A),Et&&Et(Y,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),S=null}const ee=new vc;ee.setAnimationLoop($t),this.setAnimationLoop=function(Y){Et=Y},this.dispose=function(){}}}const zn=new sn,Xp=new fe;function qp(i,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,mc(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,R,w,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),m(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p)):p.isMeshStandardMaterial?(s(_,p),g(_,p),p.isMeshPhysicalMaterial&&v(_,p,C)):p.isMeshMatcapMaterial?(s(_,p),S(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),y(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&o(_,p)):p.isPointsMaterial?l(_,p,R,w):p.isSpriteMaterial?h(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===De&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===De&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const R=t.get(p),w=R.envMap,C=R.envMapRotation;if(w&&(_.envMap.value=w,zn.copy(C),zn.x*=-1,zn.y*=-1,zn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),_.envMapRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(zn)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const V=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*V,e(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function o(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,R,w){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*R,_.scale.value=w*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function m(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function g(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function v(_,p,R){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,p){p.matcap&&(_.matcap.value=p.matcap)}function y(_,p){const R=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Yp(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,w){const C=w.program;n.uniformBlockBinding(R,C)}function h(R,w){let C=r[R.id];C===void 0&&(S(R),C=u(R),r[R.id]=C,R.addEventListener("dispose",_));const V=w.program;n.updateUBOMapping(R,V);const I=t.render.frame;s[R.id]!==I&&(g(R),s[R.id]=I)}function u(R){const w=m();R.__bindingPointIndex=w;const C=i.createBuffer(),V=R.__size,I=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,V,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,C),C}function m(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const w=r[R.id],C=R.uniforms,V=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let I=0,D=C.length;I<D;I++){const q=Array.isArray(C[I])?C[I]:[C[I]];for(let T=0,A=q.length;T<A;T++){const k=q[T];if(v(k,I,T,V)===!0){const J=k.__offset,B=Array.isArray(k.value)?k.value:[k.value];let tt=0;for(let Z=0;Z<B.length;Z++){const lt=B[Z],it=y(lt);typeof lt=="number"||typeof lt=="boolean"?(k.__data[0]=lt,i.bufferSubData(i.UNIFORM_BUFFER,J+tt,k.__data)):lt.isMatrix3?(k.__data[0]=lt.elements[0],k.__data[1]=lt.elements[1],k.__data[2]=lt.elements[2],k.__data[3]=0,k.__data[4]=lt.elements[3],k.__data[5]=lt.elements[4],k.__data[6]=lt.elements[5],k.__data[7]=0,k.__data[8]=lt.elements[6],k.__data[9]=lt.elements[7],k.__data[10]=lt.elements[8],k.__data[11]=0):(lt.toArray(k.__data,tt),tt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(R,w,C,V){const I=R.value,D=w+"_"+C;if(V[D]===void 0)return typeof I=="number"||typeof I=="boolean"?V[D]=I:V[D]=I.clone(),!0;{const q=V[D];if(typeof I=="number"||typeof I=="boolean"){if(q!==I)return V[D]=I,!0}else if(q.equals(I)===!1)return q.copy(I),!0}return!1}function S(R){const w=R.uniforms;let C=0;const V=16;for(let D=0,q=w.length;D<q;D++){const T=Array.isArray(w[D])?w[D]:[w[D]];for(let A=0,k=T.length;A<k;A++){const J=T[A],B=Array.isArray(J.value)?J.value:[J.value];for(let tt=0,Z=B.length;tt<Z;tt++){const lt=B[tt],it=y(lt),W=C%V;W!==0&&V-W<it.boundary&&(C+=V-W),J.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=C,C+=it.storage}}}const I=C%V;return I>0&&(C+=V-I),R.__size=C,R.__cache={},this}function y(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function _(R){const w=R.target;w.removeEventListener("dispose",_);const C=a.indexOf(w.__bindingPointIndex);a.splice(C,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:l,update:h,dispose:p}}class jp{constructor(t={}){const{canvas:e=kl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=new Uint32Array(4),S=new Int32Array(4);let y=null,_=null;const p=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const w=this;let C=!1,V=0,I=0,D=null,q=-1,T=null;const A=new Ee,k=new Ee;let J=null;const B=new jt(0);let tt=0,Z=e.width,lt=e.height,it=1,W=null,ht=null;const ct=new Ee(0,0,Z,lt),Et=new Ee(0,0,Z,lt);let $t=!1;const ee=new ia;let Y=!1,ut=!1;const Mt=new fe,mt=new H,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xt(){return D===null?it:1}let z=n;function re(x,P){return e.getContext(x,P)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ea}`),e.addEventListener("webglcontextlost",O,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",j,!1),z===null){const P="webgl2";if(z=re(P,x),z===null)throw re(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Rt,Ft,Lt,Kt,Bt,Ht,ae,b,E,G,Q,st,at,Tt,dt,vt,zt,ft,At,Jt,Pt,St,It,Yt;function le(){Rt=new id(z),Rt.init(),St=new zp(z,Rt),Ft=new Zf(z,Rt,t,St),Lt=new Fp(z),Kt=new ad(z),Bt=new yp,Ht=new Bp(z,Rt,Lt,Bt,Ft,St,Kt),ae=new Qf(w),b=new nd(w),E=new fh(z),It=new jf(z,E),G=new rd(z,E,Kt,It),Q=new cd(z,G,E,Kt),At=new od(z,Ft,Ht),vt=new Jf(Bt),st=new Ep(w,ae,b,Rt,Ft,It,vt),at=new qp(w,Bt),Tt=new Tp,dt=new Lp(Rt),ft=new Yf(w,ae,b,Lt,Q,g,l),zt=new Op(w,Q,Ft),Yt=new Yp(z,Kt,Ft,Lt),Jt=new Kf(z,Rt,Kt),Pt=new sd(z,Rt,Kt),Kt.programs=st.programs,w.capabilities=Ft,w.extensions=Rt,w.properties=Bt,w.renderLists=Tt,w.shadowMap=zt,w.state=Lt,w.info=Kt}le();const Nt=new $p(w,z);this.xr=Nt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const x=Rt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Rt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(x){x!==void 0&&(it=x,this.setSize(Z,lt,!1))},this.getSize=function(x){return x.set(Z,lt)},this.setSize=function(x,P,F=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,lt=P,e.width=Math.floor(x*it),e.height=Math.floor(P*it),F===!0&&(e.style.width=x+"px",e.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(Z*it,lt*it).floor()},this.setDrawingBufferSize=function(x,P,F){Z=x,lt=P,it=F,e.width=Math.floor(x*F),e.height=Math.floor(P*F),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(ct)},this.setViewport=function(x,P,F,L){x.isVector4?ct.set(x.x,x.y,x.z,x.w):ct.set(x,P,F,L),Lt.viewport(A.copy(ct).multiplyScalar(it).round())},this.getScissor=function(x){return x.copy(Et)},this.setScissor=function(x,P,F,L){x.isVector4?Et.set(x.x,x.y,x.z,x.w):Et.set(x,P,F,L),Lt.scissor(k.copy(Et).multiplyScalar(it).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(x){Lt.setScissorTest($t=x)},this.setOpaqueSort=function(x){W=x},this.setTransparentSort=function(x){ht=x},this.getClearColor=function(x){return x.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(x=!0,P=!0,F=!0){let L=0;if(x){let U=!1;if(D!==null){const $=D.texture.format;U=$===nc||$===ec||$===tc}if(U){const $=D.texture.type,rt=$===Ln||$===Ri||$===Ko||$===ji||$===Jo||$===Qo,nt=ft.getClearColor(),ot=ft.getClearAlpha(),X=nt.r,pt=nt.g,Ct=nt.b;rt?(v[0]=X,v[1]=pt,v[2]=Ct,v[3]=ot,z.clearBufferuiv(z.COLOR,0,v)):(S[0]=X,S[1]=pt,S[2]=Ct,S[3]=ot,z.clearBufferiv(z.COLOR,0,S))}else L|=z.COLOR_BUFFER_BIT}P&&(L|=z.DEPTH_BUFFER_BIT),F&&(L|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",j,!1),Tt.dispose(),dt.dispose(),Bt.dispose(),ae.dispose(),b.dispose(),Q.dispose(),It.dispose(),Yt.dispose(),st.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Qt),Nt.removeEventListener("sessionend",he),Ae.stop()};function O(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const x=Kt.autoReset,P=zt.enabled,F=zt.autoUpdate,L=zt.needsUpdate,U=zt.type;le(),Kt.autoReset=x,zt.enabled=P,zt.autoUpdate=F,zt.needsUpdate=L,zt.type=U}function j(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function _t(x){const P=x.target;P.removeEventListener("dispose",_t),xt(P)}function xt(x){Zt(x),Bt.remove(x)}function Zt(x){const P=Bt.get(x).programs;P!==void 0&&(P.forEach(function(F){st.releaseProgram(F)}),x.isShaderMaterial&&st.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,F,L,U,$){P===null&&(P=qt);const rt=U.isMesh&&U.matrixWorld.determinant()<0,nt=N(x,P,F,L,U);Lt.setMaterial(L,rt);let ot=F.index,X=1;if(L.wireframe===!0){if(ot=G.getWireframeAttribute(F),ot===void 0)return;X=2}const pt=F.drawRange,Ct=F.attributes.position;let Ot=pt.start*X,wt=(pt.start+pt.count)*X;$!==null&&(Ot=Math.max(Ot,$.start*X),wt=Math.min(wt,($.start+$.count)*X)),ot!==null?(Ot=Math.max(Ot,0),wt=Math.min(wt,ot.count)):Ct!=null&&(Ot=Math.max(Ot,0),wt=Math.min(wt,Ct.count));const Dt=wt-Ot;if(Dt<0||Dt===1/0)return;It.setup(U,L,nt,F,ot);let Me,Wt=Jt;if(ot!==null&&(Me=E.get(ot),Wt=Pt,Wt.setIndex(Me)),U.isMesh)L.wireframe===!0?(Lt.setLineWidth(L.wireframeLinewidth*Xt()),Wt.setMode(z.LINES)):Wt.setMode(z.TRIANGLES);else if(U.isLine){let bt=L.linewidth;bt===void 0&&(bt=1),Lt.setLineWidth(bt*Xt()),U.isLineSegments?Wt.setMode(z.LINES):U.isLineLoop?Wt.setMode(z.LINE_LOOP):Wt.setMode(z.LINE_STRIP)}else U.isPoints?Wt.setMode(z.POINTS):U.isSprite&&Wt.setMode(z.TRIANGLES);if(U.isBatchedMesh)U._multiDrawInstances!==null?Wt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances):Wt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Wt.renderInstances(Ot,Dt,U.count);else if(F.isInstancedBufferGeometry){const bt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ue=Math.min(F.instanceCount,bt);Wt.renderInstances(Ot,Dt,ue)}else Wt.render(Ot,Dt)};function se(x,P,F){x.transparent===!0&&x.side===pn&&x.forceSinglePass===!1?(x.side=De,x.needsUpdate=!0,c(x,P,F),x.side=Pn,x.needsUpdate=!0,c(x,P,F),x.side=pn):c(x,P,F)}this.compile=function(x,P,F=null){F===null&&(F=x),_=dt.get(F),_.init(P),R.push(_),F.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),x!==F&&x.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),_.setupLights(w._useLegacyLights);const L=new Set;return x.traverse(function(U){const $=U.material;if($)if(Array.isArray($))for(let rt=0;rt<$.length;rt++){const nt=$[rt];se(nt,F,U),L.add(nt)}else se($,F,U),L.add($)}),R.pop(),_=null,L},this.compileAsync=function(x,P,F=null){const L=this.compile(x,P,F);return new Promise(U=>{function $(){if(L.forEach(function(rt){Bt.get(rt).currentProgram.isReady()&&L.delete(rt)}),L.size===0){U(x);return}setTimeout($,10)}Rt.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let oe=null;function xe(x){oe&&oe(x)}function Qt(){Ae.stop()}function he(){Ae.start()}const Ae=new vc;Ae.setAnimationLoop(xe),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(x){oe=x,Nt.setAnimationLoop(x),x===null?Ae.stop():Ae.start()},Nt.addEventListener("sessionstart",Qt),Nt.addEventListener("sessionend",he),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(P),P=Nt.getCamera()),x.isScene===!0&&x.onBeforeRender(w,x,P,D),_=dt.get(x,R.length),_.init(P),R.push(_),Mt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),ee.setFromProjectionMatrix(Mt),ut=this.localClippingEnabled,Y=vt.init(this.clippingPlanes,ut),y=Tt.get(x,p.length),y.init(),p.push(y),Je(x,P,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(W,ht);const F=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1;F&&ft.addToRenderList(y,x),this.info.render.frame++,Y===!0&&vt.beginShadows();const L=_.state.shadowsArray;zt.render(L,x,P),Y===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=y.opaque,$=y.transmissive;if(_.setupLights(w._useLegacyLights),P.isArrayCamera){const rt=P.cameras;if($.length>0)for(let nt=0,ot=rt.length;nt<ot;nt++){const X=rt[nt];Zn(U,$,x,X)}F&&ft.render(x);for(let nt=0,ot=rt.length;nt<ot;nt++){const X=rt[nt];Kn(y,x,X,X.viewport)}}else $.length>0&&Zn(U,$,x,P),F&&ft.render(x),Kn(y,x,P);D!==null&&(Ht.updateMultisampleRenderTarget(D),Ht.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(w,x,P),It.resetDefaultState(),q=-1,T=null,R.pop(),R.length>0?(_=R[R.length-1],Y===!0&&vt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Je(x,P,F,L){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)_.pushLight(x),x.castShadow&&_.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ee.intersectsSprite(x)){L&&mt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Mt);const rt=Q.update(x),nt=x.material;nt.visible&&y.push(x,rt,nt,F,mt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ee.intersectsObject(x))){const rt=Q.update(x),nt=x.material;if(L&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),mt.copy(x.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),mt.copy(rt.boundingSphere.center)),mt.applyMatrix4(x.matrixWorld).applyMatrix4(Mt)),Array.isArray(nt)){const ot=rt.groups;for(let X=0,pt=ot.length;X<pt;X++){const Ct=ot[X],Ot=nt[Ct.materialIndex];Ot&&Ot.visible&&y.push(x,rt,Ot,F,mt.z,Ct)}}else nt.visible&&y.push(x,rt,nt,F,mt.z,null)}}const $=x.children;for(let rt=0,nt=$.length;rt<nt;rt++)Je($[rt],P,F,L)}function Kn(x,P,F,L){const U=x.opaque,$=x.transmissive,rt=x.transparent;_.setupLightsView(F),Y===!0&&vt.setGlobalState(w.clippingPlanes,F),L&&Lt.viewport(A.copy(L)),U.length>0&&Jn(U,P,F),$.length>0&&Jn($,P,F),rt.length>0&&Jn(rt,P,F),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Zn(x,P,F,L){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[L.id]===void 0&&(_.state.transmissionRenderTarget[L.id]=new qn(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?Wr:Ln,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const $=_.state.transmissionRenderTarget[L.id],rt=L.viewport||A;$.setSize(rt.z,rt.w);const nt=w.getRenderTarget();w.setRenderTarget($),w.getClearColor(B),tt=w.getClearAlpha(),tt<1&&w.setClearColor(16777215,.5),w.clear();const ot=w.toneMapping;w.toneMapping=bn;const X=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),_.setupLightsView(L),Y===!0&&vt.setGlobalState(w.clippingPlanes,L),Jn(x,F,L),Ht.updateMultisampleRenderTarget($),Ht.updateRenderTargetMipmap($),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Ct=0,Ot=P.length;Ct<Ot;Ct++){const wt=P[Ct],Dt=wt.object,Me=wt.geometry,Wt=wt.material,bt=wt.group;if(Wt.side===pn&&Dt.layers.test(L.layers)){const ue=Wt.side;Wt.side=De,Wt.needsUpdate=!0,f(Dt,F,L,Me,Wt,bt),Wt.side=ue,Wt.needsUpdate=!0,pt=!0}}pt===!0&&(Ht.updateMultisampleRenderTarget($),Ht.updateRenderTargetMipmap($))}w.setRenderTarget(nt),w.setClearColor(B,tt),X!==void 0&&(L.viewport=X),w.toneMapping=ot}function Jn(x,P,F){const L=P.isScene===!0?P.overrideMaterial:null;for(let U=0,$=x.length;U<$;U++){const rt=x[U],nt=rt.object,ot=rt.geometry,X=L===null?rt.material:L,pt=rt.group;nt.layers.test(F.layers)&&f(nt,P,F,ot,X,pt)}}function f(x,P,F,L,U,$){x.onBeforeRender(w,P,F,L,U,$),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(w,P,F,L,x,$),U.transparent===!0&&U.side===pn&&U.forceSinglePass===!1?(U.side=De,U.needsUpdate=!0,w.renderBufferDirect(F,P,L,U,x,$),U.side=Pn,U.needsUpdate=!0,w.renderBufferDirect(F,P,L,U,x,$),U.side=pn):w.renderBufferDirect(F,P,L,U,x,$),x.onAfterRender(w,P,F,L,U,$)}function c(x,P,F){P.isScene!==!0&&(P=qt);const L=Bt.get(x),U=_.state.lights,$=_.state.shadowsArray,rt=U.state.version,nt=st.getParameters(x,U.state,$,P,F),ot=st.getProgramCacheKey(nt);let X=L.programs;L.environment=x.isMeshStandardMaterial?P.environment:null,L.fog=P.fog,L.envMap=(x.isMeshStandardMaterial?b:ae).get(x.envMap||L.environment),L.envMapRotation=L.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,X===void 0&&(x.addEventListener("dispose",_t),X=new Map,L.programs=X);let pt=X.get(ot);if(pt!==void 0){if(L.currentProgram===pt&&L.lightsStateVersion===rt)return M(x,nt),pt}else nt.uniforms=st.getUniforms(x),x.onBuild(F,nt,w),x.onBeforeCompile(nt,w),pt=st.acquireProgram(nt,ot),X.set(ot,pt),L.uniforms=nt.uniforms;const Ct=L.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ct.clippingPlanes=vt.uniform),M(x,nt),L.needsLights=yt(x),L.lightsStateVersion=rt,L.needsLights&&(Ct.ambientLightColor.value=U.state.ambient,Ct.lightProbe.value=U.state.probe,Ct.directionalLights.value=U.state.directional,Ct.directionalLightShadows.value=U.state.directionalShadow,Ct.spotLights.value=U.state.spot,Ct.spotLightShadows.value=U.state.spotShadow,Ct.rectAreaLights.value=U.state.rectArea,Ct.ltc_1.value=U.state.rectAreaLTC1,Ct.ltc_2.value=U.state.rectAreaLTC2,Ct.pointLights.value=U.state.point,Ct.pointLightShadows.value=U.state.pointShadow,Ct.hemisphereLights.value=U.state.hemi,Ct.directionalShadowMap.value=U.state.directionalShadowMap,Ct.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ct.spotShadowMap.value=U.state.spotShadowMap,Ct.spotLightMatrix.value=U.state.spotLightMatrix,Ct.spotLightMap.value=U.state.spotLightMap,Ct.pointShadowMap.value=U.state.pointShadowMap,Ct.pointShadowMatrix.value=U.state.pointShadowMatrix),L.currentProgram=pt,L.uniformsList=null,pt}function d(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=Pr.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function M(x,P){const F=Bt.get(x);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function N(x,P,F,L,U){P.isScene!==!0&&(P=qt),Ht.resetTextureUnits();const $=P.fog,rt=L.isMeshStandardMaterial?P.environment:null,nt=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:In,ot=(L.isMeshStandardMaterial?b:ae).get(L.envMap||rt),X=L.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pt=!!F.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Ct=!!F.morphAttributes.position,Ot=!!F.morphAttributes.normal,wt=!!F.morphAttributes.color;let Dt=bn;L.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Dt=w.toneMapping);const Me=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Wt=Me!==void 0?Me.length:0,bt=Bt.get(L),ue=_.state.lights;if(Y===!0&&(ut===!0||x!==T)){const ze=x===T&&L.id===q;vt.setState(L,x,ze)}let Ut=!1;L.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ue.state.version||bt.outputColorSpace!==nt||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==ot||L.fog===!0&&bt.fog!==$||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==vt.numPlanes||bt.numIntersection!==vt.numIntersection)||bt.vertexAlphas!==X||bt.vertexTangents!==pt||bt.morphTargets!==Ct||bt.morphNormals!==Ot||bt.morphColors!==wt||bt.toneMapping!==Dt||bt.morphTargetsCount!==Wt)&&(Ut=!0):(Ut=!0,bt.__version=L.version);let Oe=bt.currentProgram;Ut===!0&&(Oe=c(L,P,U));let Fe=!1,on=!1,Be=!1;const pe=Oe.getUniforms(),gn=bt.uniforms;if(Lt.useProgram(Oe.program)&&(Fe=!0,on=!0,Be=!0),L.id!==q&&(q=L.id,on=!0),Fe||T!==x){pe.setValue(z,"projectionMatrix",x.projectionMatrix),pe.setValue(z,"viewMatrix",x.matrixWorldInverse);const ze=pe.map.cameraPosition;ze!==void 0&&ze.setValue(z,mt.setFromMatrixPosition(x.matrixWorld)),Ft.logarithmicDepthBuffer&&pe.setValue(z,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&pe.setValue(z,"isOrthographic",x.isOrthographicCamera===!0),T!==x&&(T=x,on=!0,Be=!0)}if(U.isSkinnedMesh){pe.setOptional(z,U,"bindMatrix"),pe.setOptional(z,U,"bindMatrixInverse");const ze=U.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),pe.setValue(z,"boneTexture",ze.boneTexture,Ht))}U.isBatchedMesh&&(pe.setOptional(z,U,"batchingTexture"),pe.setValue(z,"batchingTexture",U._matricesTexture,Ht));const is=F.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&At.update(U,F,Oe),(on||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,pe.setValue(z,"receiveShadow",U.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(gn.envMap.value=ot,gn.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&P.environment!==null&&(gn.envMapIntensity.value=P.environmentIntensity),on&&(pe.setValue(z,"toneMappingExposure",w.toneMappingExposure),bt.needsLights&&K(gn,Be),$&&L.fog===!0&&at.refreshFogUniforms(gn,$),at.refreshMaterialUniforms(gn,L,it,lt,_.state.transmissionRenderTarget[x.id]),Pr.upload(z,d(bt),gn,Ht)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Pr.upload(z,d(bt),gn,Ht),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&pe.setValue(z,"center",U.center),pe.setValue(z,"modelViewMatrix",U.modelViewMatrix),pe.setValue(z,"normalMatrix",U.normalMatrix),pe.setValue(z,"modelMatrix",U.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const ze=L.uniformsGroups;for(let rs=0,Uc=ze.length;rs<Uc;rs++){const la=ze[rs];Yt.update(la,Oe),Yt.bind(la,Oe)}}return Oe}function K(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function yt(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,P,F){Bt.get(x.texture).__webglTexture=P,Bt.get(x.depthTexture).__webglTexture=F;const L=Bt.get(x);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=F===void 0,L.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,P){const F=Bt.get(x);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,F=0){D=x,V=P,I=F;let L=!0,U=null,$=!1,rt=!1;if(x){const ot=Bt.get(x);ot.__useDefaultFramebuffer!==void 0?(Lt.bindFramebuffer(z.FRAMEBUFFER,null),L=!1):ot.__webglFramebuffer===void 0?Ht.setupRenderTarget(x):ot.__hasExternalTextures&&Ht.rebindTextures(x,Bt.get(x.texture).__webglTexture,Bt.get(x.depthTexture).__webglTexture);const X=x.texture;(X.isData3DTexture||X.isDataArrayTexture||X.isCompressedArrayTexture)&&(rt=!0);const pt=Bt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(pt[P])?U=pt[P][F]:U=pt[P],$=!0):x.samples>0&&Ht.useMultisampledRTT(x)===!1?U=Bt.get(x).__webglMultisampledFramebuffer:Array.isArray(pt)?U=pt[F]:U=pt,A.copy(x.viewport),k.copy(x.scissor),J=x.scissorTest}else A.copy(ct).multiplyScalar(it).floor(),k.copy(Et).multiplyScalar(it).floor(),J=$t;if(Lt.bindFramebuffer(z.FRAMEBUFFER,U)&&L&&Lt.drawBuffers(x,U),Lt.viewport(A),Lt.scissor(k),Lt.setScissorTest(J),$){const ot=Bt.get(x.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+P,ot.__webglTexture,F)}else if(rt){const ot=Bt.get(x.texture),X=P||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ot.__webglTexture,F||0,X)}q=-1},this.readRenderTargetPixels=function(x,P,F,L,U,$,rt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=Bt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(nt=nt[rt]),nt){Lt.bindFramebuffer(z.FRAMEBUFFER,nt);try{const ot=x.texture,X=ot.format,pt=ot.type;if(!Ft.textureFormatReadable(X)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-L&&F>=0&&F<=x.height-U&&z.readPixels(P,F,L,U,St.convert(X),St.convert(pt),$)}finally{const ot=D!==null?Bt.get(D).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,ot)}}},this.copyFramebufferToTexture=function(x,P,F=0){const L=Math.pow(2,-F),U=Math.floor(P.image.width*L),$=Math.floor(P.image.height*L);Ht.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,F,0,0,x.x,x.y,U,$),Lt.unbindTexture()},this.copyTextureToTexture=function(x,P,F,L=0){const U=P.image.width,$=P.image.height,rt=St.convert(F.format),nt=St.convert(F.type);Ht.setTexture2D(F,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment),P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,L,x.x,x.y,U,$,rt,nt,P.image.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,L,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,rt,P.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,L,x.x,x.y,rt,nt,P.image),L===0&&F.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Lt.unbindTexture()},this.copyTextureToTexture3D=function(x,P,F,L,U=0){const $=x.max.x-x.min.x,rt=x.max.y-x.min.y,nt=x.max.z-x.min.z,ot=St.convert(L.format),X=St.convert(L.type);let pt;if(L.isData3DTexture)Ht.setTexture3D(L,0),pt=z.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Ht.setTexture2DArray(L,0),pt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,L.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,L.unpackAlignment);const Ct=z.getParameter(z.UNPACK_ROW_LENGTH),Ot=z.getParameter(z.UNPACK_IMAGE_HEIGHT),wt=z.getParameter(z.UNPACK_SKIP_PIXELS),Dt=z.getParameter(z.UNPACK_SKIP_ROWS),Me=z.getParameter(z.UNPACK_SKIP_IMAGES),Wt=F.isCompressedTexture?F.mipmaps[U]:F.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Wt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,x.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,x.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?z.texSubImage3D(pt,U,P.x,P.y,P.z,$,rt,nt,ot,X,Wt.data):L.isCompressedArrayTexture?z.compressedTexSubImage3D(pt,U,P.x,P.y,P.z,$,rt,nt,ot,Wt.data):z.texSubImage3D(pt,U,P.x,P.y,P.z,$,rt,nt,ot,X,Wt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ct),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Dt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Me),U===0&&L.generateMipmaps&&z.generateMipmap(pt),Lt.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?Ht.setTextureCube(x,0):x.isData3DTexture?Ht.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ht.setTexture2DArray(x,0):Ht.setTexture2D(x,0),Lt.unbindTexture()},this.resetState=function(){V=0,I=0,D=null,Lt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===na?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===$r?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class sa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new sa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kp extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ks,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ac("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new H;class Hr{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wc extends jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gi;const Hi=new H,_i=new H,vi=new H,xi=new Gt,ki=new Gt,bc=new fe,Ar=new H,Vi=new H,Tr=new H,Po=new Gt,Bs=new Gt,Lo=new Gt;class Jp extends ye{constructor(t=new wc){if(super(),this.isSprite=!0,this.type="Sprite",gi===void 0){gi=new an;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zp(e,5);gi.setIndex([0,1,2,0,2,3]),gi.setAttribute("position",new Hr(n,3,0,!1)),gi.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=gi,this.material=t,this.center=new Gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_i.setFromMatrixScale(this.matrixWorld),bc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_i.multiplyScalar(-vi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;wr(Ar.set(-.5,-.5,0),vi,a,_i,r,s),wr(Vi.set(.5,-.5,0),vi,a,_i,r,s),wr(Tr.set(.5,.5,0),vi,a,_i,r,s),Po.set(0,0),Bs.set(1,0),Lo.set(1,1);let o=t.ray.intersectTriangle(Ar,Vi,Tr,!1,Hi);if(o===null&&(wr(Vi.set(-.5,.5,0),vi,a,_i,r,s),Bs.set(0,1),o=t.ray.intersectTriangle(Ar,Tr,Vi,!1,Hi),o===null))return;const l=t.ray.origin.distanceTo(Hi);l<t.near||l>t.far||e.push({distance:l,point:Hi.clone(),uv:qe.getInterpolation(Hi,Ar,Vi,Tr,Po,Bs,Lo,new Gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function wr(i,t,e,n,r,s){xi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(ki.x=s*xi.x-r*xi.y,ki.y=r*xi.x+s*xi.y):ki.copy(xi),i.copy(t),i.x+=ki.x,i.y+=ki.y,i.applyMatrix4(bc)}class Rc extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kr=new H,Vr=new H,Do=new fe,Gi=new hc,br=new Xr,zs=new H,Io=new H;class Qp extends ye{constructor(t=new an,e=new Rc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)kr.fromBufferAttribute(e,r-1),Vr.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=kr.distanceTo(Vr);t.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),br.radius+=s,t.ray.intersectsSphere(br)===!1)return;Do.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(Do);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,u=n.index,g=n.attributes.position;if(u!==null){const v=Math.max(0,a.start),S=Math.min(u.count,a.start+a.count);for(let y=v,_=S-1;y<_;y+=h){const p=u.getX(y),R=u.getX(y+1),w=Rr(this,t,Gi,l,p,R);w&&e.push(w)}if(this.isLineLoop){const y=u.getX(S-1),_=u.getX(v),p=Rr(this,t,Gi,l,y,_);p&&e.push(p)}}else{const v=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let y=v,_=S-1;y<_;y+=h){const p=Rr(this,t,Gi,l,y,y+1);p&&e.push(p)}if(this.isLineLoop){const y=Rr(this,t,Gi,l,S-1,v);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rr(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(kr.fromBufferAttribute(a,r),Vr.fromBufferAttribute(a,s),e.distanceSqToSegment(kr,Vr,zs,Io)>n)return;zs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(zs);if(!(l<t.near||l>t.far))return{distance:l,point:Io.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Uo=new H,No=new H;class tm extends Qp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Uo.fromBufferAttribute(e,r),No.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Uo.distanceTo(No);t.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class em extends Pe{constructor(t,e,n,r,s,a,o,l,h){super(t,e,n,r,s,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lr extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cc extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Hs=new fe,Oo=new H,Fo=new H;class nm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Oo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oo),Fo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fo),e.updateMatrixWorld(),Hs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class im extends nm{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bo extends Cc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new im}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rm extends Cc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zo(){return(typeof performance>"u"?Date:performance).now()}class am extends tm{constructor(t=10,e=10,n=4473924,r=8947848){n=new jt(n),r=new jt(r);const s=e/2,a=t/e,o=t/2,l=[],h=[];for(let g=0,v=0,S=-o;g<=e;g++,S+=a){l.push(-o,0,S,o,0,S),l.push(S,0,-o,S,0,o);const y=g===s?n:r;y.toArray(h,v),v+=3,y.toArray(h,v),v+=3,y.toArray(h,v),v+=3,y.toArray(h,v),v+=3}const u=new an;u.setAttribute("position",new Ke(l,3)),u.setAttribute("color",new Ke(h,3));const m=new Rc({vertexColors:!0,toneMapped:!1});super(u,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);class om{constructor(t,e,n=!1,r=3900150){te(this,"group");te(this,"isLocal");te(this,"id");te(this,"torso");te(this,"head");te(this,"leftArm");te(this,"rightArm");te(this,"leftLeg");te(this,"rightLeg");te(this,"targetPosition");te(this,"targetRotationY",0);te(this,"animTimer",0);te(this,"isMoving",!1);this.id=t,this.isLocal=n,this.group=new qi;const s=n?1920728:1096065,a=2042167,o=16638023,l=new Lr({color:s,roughness:.4}),h=new Lr({color:o,roughness:.3}),u=new Lr({color:a,roughness:.5}),m=new qr({color:0}),g=new Ye(.9,1.1,.5);this.torso=new ge(g,l),this.torso.position.y=1.15,this.torso.castShadow=!0,this.torso.receiveShadow=!0,this.group.add(this.torso);const v=new Ye(.7,.7,.7);this.head=new ge(v,h),this.head.position.y=.9,this.head.castShadow=!0,this.torso.add(this.head);const S=new Ye(.12,.12,.05),y=new ge(S,m);y.position.set(-.18,.08,.36);const _=new ge(S,m);_.position.set(.18,.08,.36),this.head.add(y,_);const p=new Ye(.38,1,.38);p.translate(0,-.4,0),this.leftArm=new ge(p,h),this.leftArm.position.set(-.68,.45,0),this.leftArm.castShadow=!0,this.torso.add(this.leftArm),this.rightArm=new ge(p,h),this.rightArm.position.set(.68,.45,0),this.rightArm.castShadow=!0,this.torso.add(this.rightArm);const R=new Ye(.42,1,.42);R.translate(0,-.45,0),this.leftLeg=new ge(R,u),this.leftLeg.position.set(-.24,-.55,0),this.leftLeg.castShadow=!0,this.torso.add(this.leftLeg),this.rightLeg=new ge(R,u),this.rightLeg.position.set(.24,-.55,0),this.rightLeg.castShadow=!0,this.torso.add(this.rightLeg);const w=this.createNameTagSprite(e,n);w.position.set(0,2.3,0),this.group.add(w),this.targetPosition=new H}setPosition(t,e,n){const r=new H(t,e,n);this.group.position.lengthSq()===0?(this.group.position.copy(r),this.targetPosition.copy(r)):(this.isMoving=this.group.position.distanceTo(r)>.05,this.targetPosition.copy(r))}setRotationY(t){this.targetRotationY=t}update(t){const e=this.isLocal?.3:.2;this.group.position.lerp(this.targetPosition,e);let n=this.targetRotationY-this.group.rotation.y;if(n=Math.atan2(Math.sin(n),Math.cos(n)),this.group.rotation.y+=n*.25,this.isMoving){this.animTimer+=t*10;const r=Math.sin(this.animTimer)*.6;this.leftArm.rotation.x=r,this.rightArm.rotation.x=-r,this.leftLeg.rotation.x=-r,this.rightLeg.rotation.x=r}else this.leftArm.rotation.x*=.8,this.rightArm.rotation.x*=.8,this.leftLeg.rotation.x*=.8,this.rightLeg.rotation.x*=.8,this.animTimer=0}createNameTagSprite(t,e){const n=document.createElement("canvas");n.width=256,n.height=64;const r=n.getContext("2d");r.fillStyle="rgba(0, 0, 0, 0.6)",r.roundRect(8,8,240,48,12),r.fill(),r.font="Bold 24px 'Segoe UI', sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e?"#60a5fa":"#ffffff",r.fillText(t,128,32);const s=new em(n),a=new wc({map:s,transparent:!0}),o=new Jp(a);return o.scale.set(2.4,.6,1),o}}class cm{constructor(t){te(this,"scene");te(this,"camera");te(this,"renderer");te(this,"avatars",new Map);te(this,"localAvatarId",null);this.scene=new Kp,this.scene.background=new jt(988970),this.scene.fog=new sa(988970,.012),this.camera=new ke(60,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,10,15),this.renderer=new jp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qo,t.appendChild(this.renderer.domElement),this.setupEnvironment(),this.setupLighting(),window.addEventListener("resize",()=>this.onWindowResize())}setupEnvironment(){const t=new Ji(100,100),e=new Lr({color:1976635,roughness:.8,metalness:.2}),n=new ge(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n);const r=new am(100,50,3900150,3359061);r.position.y=.01,this.scene.add(r);const s=new qr({color:3900150,wireframe:!0,transparent:!0,opacity:.15}),a=new Ye(100,4,100),o=new ge(a,s);o.position.y=2,this.scene.add(o)}setupLighting(){const t=new rm(16777215,.6);this.scene.add(t);const e=new Bo(16775917,1.2);e.position.set(30,45,20),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=150;const n=40;e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,this.scene.add(e);const r=new Bo(6333946,.4);r.position.set(-20,20,-20),this.scene.add(r)}setLocalAvatarId(t){this.localAvatarId=t}addAvatar(t,e,n){const r=[15680580,1096065,9133302,16096779,15485081,440020],s=r[Math.abs(this.hashCode(t))%r.length],a=new om(t,e,n,s);return this.avatars.set(t,a),this.scene.add(a.group),n&&(this.localAvatarId=t),a}removeAvatar(t){const e=this.avatars.get(t);e&&(this.scene.remove(e.group),this.avatars.delete(t))}getAvatar(t){return this.avatars.get(t)}getAvatarIds(){return Array.from(this.avatars.keys())}getAvatarCount(){return this.avatars.size}updateAvatarState(t,e,n,r,s){const a=this.avatars.get(t);a&&(a.setPosition(e,n,r),a.setRotationY(s))}update(t){if(this.avatars.forEach(e=>e.update(t)),this.localAvatarId){const e=this.avatars.get(this.localAvatarId);if(e){const n=e.group.position.clone().add(new H(0,7.5,11)),r=e.group.position.clone().add(new H(0,1.5,0));this.camera.position.lerp(n,.1),this.camera.lookAt(r)}}this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}hashCode(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return e}}class lm{constructor(){te(this,"keys",{});window.addEventListener("keydown",t=>{this.keys[t.code]=!0}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),window.addEventListener("blur",()=>{this.keys={}})}getMovement(t){let e=0,n=0;if((this.keys.KeyW||this.keys.ArrowUp)&&(e+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(e-=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(n-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(n+=1),e===0&&n===0)return{moveX:0,moveZ:0,rotationY:0};const r=Math.hypot(e,n),s=e/r,a=n/r,o=Math.cos(t),l=Math.sin(t),h=a*o+s*l,u=-s*o+a*l,m=Math.atan2(h,u);return{moveX:h,moveZ:u,rotationY:m}}}var de=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hm(i){if(i.__esModule)return i;var t=i.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),e}var Pc={};ArrayBuffer.isView||(ArrayBuffer.isView=i=>i!==null&&typeof i=="object"&&i.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Pi={},jr={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.ServerError=i.CloseCode=void 0,function(e){e[e.CONSENTED=4e3]="CONSENTED",e[e.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(i.CloseCode||(i.CloseCode={}));class t extends Error{constructor(n,r){super(r),this.name="ServerError",this.code=n}}i.ServerError=t})(jr);var Qi={},Li={};Object.defineProperty(Li,"__esModule",{value:!0});Li.decode=Li.encode=void 0;function Ni(i,t){if(this._offset=t,i instanceof ArrayBuffer)this._buffer=i,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(i))this._buffer=i.buffer,this._view=new DataView(this._buffer,i.byteOffset,i.byteLength);else throw new Error("Invalid argument")}function um(i,t,e){for(var n="",r=0,s=t,a=t+e;s<a;s++){var o=i.getUint8(s);if(!(o&128)){n+=String.fromCharCode(o);continue}if((o&224)===192){n+=String.fromCharCode((o&31)<<6|i.getUint8(++s)&63);continue}if((o&240)===224){n+=String.fromCharCode((o&15)<<12|(i.getUint8(++s)&63)<<6|(i.getUint8(++s)&63)<<0);continue}if((o&248)===240){r=(o&7)<<18|(i.getUint8(++s)&63)<<12|(i.getUint8(++s)&63)<<6|(i.getUint8(++s)&63)<<0,r>=65536?(r-=65536,n+=String.fromCharCode((r>>>10)+55296,(r&1023)+56320)):n+=String.fromCharCode(r);continue}throw new Error("Invalid byte "+o.toString(16))}return n}Ni.prototype._array=function(i){for(var t=new Array(i),e=0;e<i;e++)t[e]=this._parse();return t};Ni.prototype._map=function(i){for(var t="",e={},n=0;n<i;n++)t=this._parse(),e[t]=this._parse();return e};Ni.prototype._str=function(i){var t=um(this._view,this._offset,i);return this._offset+=i,t};Ni.prototype._bin=function(i){var t=this._buffer.slice(this._offset,this._offset+i);return this._offset+=i,t};Ni.prototype._parse=function(){var i=this._view.getUint8(this._offset++),t,e=0,n=0,r=0,s=0;if(i<192)return i<128?i:i<144?this._map(i&15):i<160?this._array(i&15):this._str(i&31);if(i>223)return(255-i+1)*-1;switch(i){case 192:return null;case 194:return!1;case 195:return!0;case 196:return e=this._view.getUint8(this._offset),this._offset+=1,this._bin(e);case 197:return e=this._view.getUint16(this._offset),this._offset+=2,this._bin(e);case 198:return e=this._view.getUint32(this._offset),this._offset+=4,this._bin(e);case 199:if(e=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var a=this._view.getUint32(this._offset);return r=this._view.getInt32(this._offset+4),s=this._view.getUint32(this._offset+8),this._offset+=12,new Date((r*4294967296+s)*1e3+a/1e6)}return[n,this._bin(e)];case 200:return e=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(e)];case 201:return e=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(e)];case 202:return t=this._view.getFloat32(this._offset),this._offset+=4,t;case 203:return t=this._view.getFloat64(this._offset),this._offset+=8,t;case 204:return t=this._view.getUint8(this._offset),this._offset+=1,t;case 205:return t=this._view.getUint16(this._offset),this._offset+=2,t;case 206:return t=this._view.getUint32(this._offset),this._offset+=4,t;case 207:return r=this._view.getUint32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,r+s;case 208:return t=this._view.getInt8(this._offset),this._offset+=1,t;case 209:return t=this._view.getInt16(this._offset),this._offset+=2,t;case 210:return t=this._view.getInt32(this._offset),this._offset+=4,t;case 211:return r=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,r+s;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(t=this._view.getUint32(this._offset),this._offset+=4,new Date(t*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return r=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,new Date(r+s);if(n===-1){r=this._view.getUint32(this._offset),s=this._view.getUint32(this._offset+4),this._offset+=8;var o=(r&3)*4294967296+s;return new Date(o*1e3+(r>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return e=this._view.getUint8(this._offset),this._offset+=1,this._str(e);case 218:return e=this._view.getUint16(this._offset),this._offset+=2,this._str(e);case 219:return e=this._view.getUint32(this._offset),this._offset+=4,this._str(e);case 220:return e=this._view.getUint16(this._offset),this._offset+=2,this._array(e);case 221:return e=this._view.getUint32(this._offset),this._offset+=4,this._array(e);case 222:return e=this._view.getUint16(this._offset),this._offset+=2,this._map(e);case 223:return e=this._view.getUint32(this._offset),this._offset+=4,this._map(e)}throw new Error("Could not parse")};function fm(i,t=0){var e=new Ni(i,t),n=e._parse();if(e._offset!==i.byteLength)throw new Error(i.byteLength-e._offset+" trailing bytes");return n}Li.decode=fm;var dm=4294967296-1,pm=17179869184-1;function mm(i,t,e){for(var n=0,r=0,s=e.length;r<s;r++)n=e.charCodeAt(r),n<128?i.setUint8(t++,n):n<2048?(i.setUint8(t++,192|n>>6),i.setUint8(t++,128|n&63)):n<55296||n>=57344?(i.setUint8(t++,224|n>>12),i.setUint8(t++,128|n>>6&63),i.setUint8(t++,128|n&63)):(r++,n=65536+((n&1023)<<10|e.charCodeAt(r)&1023),i.setUint8(t++,240|n>>18),i.setUint8(t++,128|n>>12&63),i.setUint8(t++,128|n>>6&63),i.setUint8(t++,128|n&63))}function gm(i){for(var t=0,e=0,n=0,r=i.length;n<r;n++)t=i.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Si(i,t,e){var n=typeof e,r=0,s=0,a=0,o=0,l=0,h=0;if(n==="string"){if(l=gm(e),l<32)i.push(l|160),h=1;else if(l<256)i.push(217,l),h=2;else if(l<65536)i.push(218,l>>8,l),h=3;else if(l<4294967296)i.push(219,l>>24,l>>16,l>>8,l),h=5;else throw new Error("String too long");return t.push({_str:e,_length:l,_offset:i.length}),h+l}if(n==="number")return Math.floor(e)!==e||!isFinite(e)?(i.push(203),t.push({_float:e,_length:8,_offset:i.length}),9):e>=0?e<128?(i.push(e),1):e<256?(i.push(204,e),2):e<65536?(i.push(205,e>>8,e),3):e<4294967296?(i.push(206,e>>24,e>>16,e>>8,e),5):(a=e/Math.pow(2,32)>>0,o=e>>>0,i.push(207,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),9):e>=-32?(i.push(e),1):e>=-128?(i.push(208,e),2):e>=-32768?(i.push(209,e>>8,e),3):e>=-2147483648?(i.push(210,e>>24,e>>16,e>>8,e),5):(a=Math.floor(e/Math.pow(2,32)),o=e>>>0,i.push(211,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),9);if(n==="object"){if(e===null)return i.push(192),1;if(Array.isArray(e)){if(l=e.length,l<16)i.push(l|144),h=1;else if(l<65536)i.push(220,l>>8,l),h=3;else if(l<4294967296)i.push(221,l>>24,l>>16,l>>8,l),h=5;else throw new Error("Array too large");for(r=0;r<l;r++)h+=Si(i,t,e[r]);return h}if(e instanceof Date){var u=e.getTime(),m=Math.floor(u/1e3),g=(u-m*1e3)*1e6;return m>=0&&g>=0&&m<=pm?g===0&&m<=dm?(i.push(214,255,m>>24,m>>16,m>>8,m),6):(a=m/4294967296,o=m&4294967295,i.push(215,255,g>>22,g>>14,g>>6,a,o>>24,o>>16,o>>8,o),10):(a=Math.floor(m/4294967296),o=m>>>0,i.push(199,12,255,g>>24,g>>16,g>>8,g,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),15)}if(e instanceof ArrayBuffer){if(l=e.byteLength,l<256)i.push(196,l),h=2;else if(l<65536)i.push(197,l>>8,l),h=3;else if(l<4294967296)i.push(198,l>>24,l>>16,l>>8,l),h=5;else throw new Error("Buffer too large");return t.push({_bin:e,_length:l,_offset:i.length}),h+l}if(typeof e.toJSON=="function")return Si(i,t,e.toJSON());var v=[],S="",y=Object.keys(e);for(r=0,s=y.length;r<s;r++)S=y[r],e[S]!==void 0&&typeof e[S]!="function"&&v.push(S);if(l=v.length,l<16)i.push(l|128),h=1;else if(l<65536)i.push(222,l>>8,l),h=3;else if(l<4294967296)i.push(223,l>>24,l>>16,l>>8,l),h=5;else throw new Error("Object too large");for(r=0;r<l;r++)S=v[r],h+=Si(i,t,S),h+=Si(i,t,e[S]);return h}if(n==="boolean")return i.push(e?195:194),1;if(n==="undefined")return i.push(192),1;if(typeof e.toJSON=="function")return Si(i,t,e.toJSON());throw new Error("Could not encode")}function _m(i){var t=[],e=[],n=Si(t,e,i),r=new ArrayBuffer(n),s=new DataView(r),a=0,o=0,l=-1;e.length>0&&(l=e[0]._offset);for(var h,u=0,m=0,g=0,v=t.length;g<v;g++)if(s.setUint8(o+g,t[g]),g+1===l){if(h=e[a],u=h._length,m=o+l,h._bin)for(var S=new Uint8Array(h._bin),y=0;y<u;y++)s.setUint8(m+y,S[y]);else h._str?mm(s,m,h._str):h._float!==void 0&&s.setFloat64(m,h._float);a++,o+=u,e[a]&&(l=e[a]._offset)}return r}Li.encode=_m;var Kr={},Zr={},vm=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},xm=de&&de.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Zr,"__esModule",{value:!0});Zr.WebSocketTransport=void 0;const Mm=xm(vm),ks=globalThis.WebSocket||Mm.default;class Sm{constructor(t){this.events=t}send(t){t instanceof ArrayBuffer?this.ws.send(t):Array.isArray(t)&&this.ws.send(new Uint8Array(t).buffer)}connect(t,e){try{this.ws=new ks(t,{headers:e,protocols:this.protocols})}catch{this.ws=new ks(t,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(t,e){this.ws.close(t,e)}get isOpen(){return this.ws.readyState===ks.OPEN}}Zr.WebSocketTransport=Sm;Object.defineProperty(Kr,"__esModule",{value:!0});Kr.Connection=void 0;const Em=Zr;class ym{constructor(){this.events={},this.transport=new Em.WebSocketTransport(this.events)}send(t){this.transport.send(t)}connect(t,e){this.transport.connect(t,e)}close(t,e){this.transport.close(t,e)}get isOpen(){return this.transport.isOpen}}Kr.Connection=ym;var aa={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.utf8Length=i.utf8Read=i.ErrorCode=i.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(i.Protocol||(i.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(i.ErrorCode||(i.ErrorCode={}));function t(n,r){const s=n[r++];for(var a="",o=0,l=r,h=r+s;l<h;l++){var u=n[l];if(!(u&128)){a+=String.fromCharCode(u);continue}if((u&224)===192){a+=String.fromCharCode((u&31)<<6|n[++l]&63);continue}if((u&240)===224){a+=String.fromCharCode((u&15)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0);continue}if((u&248)===240){o=(u&7)<<18|(n[++l]&63)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0,o>=65536?(o-=65536,a+=String.fromCharCode((o>>>10)+55296,(o&1023)+56320)):a+=String.fromCharCode(o);continue}throw new Error("Invalid byte "+u.toString(16))}return a}i.utf8Read=t;function e(n=""){let r=0,s=0;for(let a=0,o=n.length;a<o;a++)r=n.charCodeAt(a),r<128?s+=1:r<2048?s+=2:r<55296||r>=57344?s+=3:(a++,s+=4);return s+1}i.utf8Length=e})(aa);var Yn={};Object.defineProperty(Yn,"__esModule",{value:!0});Yn.getSerializer=Yn.registerSerializer=void 0;const Lc={};function Am(i,t){Lc[i]=t}Yn.registerSerializer=Am;function Tm(i){const t=Lc[i];if(!t)throw new Error("missing serializer: "+i);return t}Yn.getSerializer=Tm;var tr={};Object.defineProperty(tr,"__esModule",{value:!0});tr.createNanoEvents=void 0;const wm=()=>({emit(i,...t){let e=this.events[i]||[];for(let n=0,r=e.length;n<r;n++)e[n](...t)},events:{},on(i,t){var e;return!((e=this.events[i])===null||e===void 0)&&e.push(t)||(this.events[i]=[t]),()=>{var n;this.events[i]=(n=this.events[i])===null||n===void 0?void 0:n.filter(r=>t!==r)}}});tr.createNanoEvents=wm;var Di={};Object.defineProperty(Di,"__esModule",{value:!0});Di.createSignal=Di.EventEmitter=void 0;class Dc{constructor(){this.handlers=[]}register(t,e=!1){return this.handlers.push(t),this}invoke(...t){this.handlers.forEach(e=>e.apply(this,t))}invokeAsync(...t){return Promise.all(this.handlers.map(e=>e.apply(this,t)))}remove(t){const e=this.handlers.indexOf(t);this.handlers[e]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Di.EventEmitter=Dc;function bm(){const i=new Dc;function t(e){return i.register(e,this===null)}return t.once=e=>{const n=function(...r){e.apply(this,r),i.remove(n)};i.register(n)},t.remove=e=>i.remove(e),t.invoke=(...e)=>i.invoke(...e),t.invokeAsync=(...e)=>i.invokeAsync(...e),t.clear=()=>i.clear(),t}Di.createSignal=bm;var Qs={exports:{}};(function(i,t){(function(e,n){n(t)})(de,function(e){var n=function(f,c){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,M){d.__proto__=M}||function(d,M){for(var N in M)Object.prototype.hasOwnProperty.call(M,N)&&(d[N]=M[N])},n(f,c)};function r(f,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");n(f,c);function d(){this.constructor=f}f.prototype=c===null?Object.create(c):(d.prototype=c.prototype,new d)}function s(f,c,d,M){var N=arguments.length,K=N<3?c:M,yt;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")K=Reflect.decorate(f,c,d,M);else for(var x=f.length-1;x>=0;x--)(yt=f[x])&&(K=(N<3?yt(K):N>3?yt(c,d,K):yt(c,d))||K);return N>3&&K&&Object.defineProperty(c,d,K),K}function a(f,c,d){if(arguments.length===2)for(var M=0,N=c.length,K;M<N;M++)(K||!(M in c))&&(K||(K=Array.prototype.slice.call(c,0,M)),K[M]=c[M]);return f.concat(K||Array.prototype.slice.call(c))}typeof SuppressedError=="function"&&SuppressedError;var o=255,l=213;e.OPERATION=void 0,function(f){f[f.ADD=128]="ADD",f[f.REPLACE=0]="REPLACE",f[f.DELETE=64]="DELETE",f[f.DELETE_AND_ADD=192]="DELETE_AND_ADD",f[f.TOUCH=1]="TOUCH",f[f.CLEAR=10]="CLEAR"}(e.OPERATION||(e.OPERATION={}));var h=function(){function f(c,d,M){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=c,this.setParent(d,M)}return f.prototype.setParent=function(c,d,M){var N=this;if(this.indexes||(this.indexes=this.ref instanceof he?this.ref._definition.indexes:{}),this.parent=c,this.parentIndex=M,!!d)if(this.root=d,this.ref instanceof he){var K=this.ref._definition;for(var yt in K.schema){var x=this.ref[yt];if(x&&x.$changes){var P=K.indexes[yt];x.$changes.setParent(this.ref,d,P)}}}else typeof this.ref=="object"&&this.ref.forEach(function(F,L){if(F instanceof he){var U=F.$changes,$=N.ref.$changes.indexes[L];U.setParent(N.ref,N.root,$)}})},f.prototype.operation=function(c){this.changes.set(--this.currentCustomOperation,c)},f.prototype.change=function(c,d){d===void 0&&(d=e.OPERATION.ADD);var M=typeof c=="number"?c:this.indexes[c];this.assertValidIndex(M,c);var N=this.changes.get(M);(!N||N.op===e.OPERATION.DELETE||N.op===e.OPERATION.TOUCH)&&this.changes.set(M,{op:N&&N.op===e.OPERATION.DELETE?e.OPERATION.DELETE_AND_ADD:d,index:M}),this.allChanges.add(M),this.changed=!0,this.touchParents()},f.prototype.touch=function(c){var d=typeof c=="number"?c:this.indexes[c];this.assertValidIndex(d,c),this.changes.has(d)||this.changes.set(d,{op:e.OPERATION.TOUCH,index:d}),this.allChanges.add(d),this.touchParents()},f.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},f.prototype.getType=function(c){if(this.ref._definition){var d=this.ref._definition;return d.schema[d.fieldsByIndex[c]]}else{var d=this.parent._definition,M=d.schema[d.fieldsByIndex[this.parentIndex]];return Object.values(M)[0]}},f.prototype.getChildrenFilter=function(){var c=this.parent._definition.childFilters;return c&&c[this.parentIndex]},f.prototype.getValue=function(c){return this.ref.getByIndex(c)},f.prototype.delete=function(c){var d=typeof c=="number"?c:this.indexes[c];if(d===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(c," (").concat(d,")"));return}var M=this.getValue(d);this.changes.set(d,{op:e.OPERATION.DELETE,index:d}),this.allChanges.delete(d),delete this.caches[d],M&&M.$changes&&(M.$changes.parent=void 0),this.changed=!0,this.touchParents()},f.prototype.discard=function(c,d){var M=this;c===void 0&&(c=!1),d===void 0&&(d=!1),this.ref instanceof he||this.changes.forEach(function(N){if(N.op===e.OPERATION.DELETE){var K=M.ref.getIndex(N.index);delete M.indexes[K]}}),this.changes.clear(),this.changed=c,d&&this.allChanges.clear(),this.currentCustomOperation=0},f.prototype.discardAll=function(){var c=this;this.changes.forEach(function(d){var M=c.getValue(d.index);M&&M.$changes&&M.$changes.discardAll()}),this.discard()},f.prototype.cache=function(c,d){this.caches[c]=d},f.prototype.clone=function(){return new f(this.ref,this.parent,this.root)},f.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},f.prototype.assertValidIndex=function(c,d){if(c===void 0)throw new Error('ChangeTree: missing index for field "'.concat(d,'"'))},f}();function u(f,c,d,M){return f[c]||(f[c]=[]),f[c].push(d),M==null||M.forEach(function(N,K){return d(N,K)}),function(){return g(f[c],f[c].indexOf(d))}}function m(f){var c=this,d=typeof this.$changes.getType()!="string";this.$items.forEach(function(M,N){f.push({refId:c.$changes.refId,op:e.OPERATION.DELETE,field:N,value:void 0,previousValue:M}),d&&c.$changes.root.removeRef(M.$changes.refId)})}function g(f,c){if(c===-1||c>=f.length)return!1;for(var d=f.length-1,M=c;M<d;M++)f[M]=f[M+1];return f.length=d,!0}var v=function(f,c){var d=f.toString(),M=c.toString();return d<M?-1:d>M?1:0};function S(f){return f.$proxy=!0,f=new Proxy(f,{get:function(c,d){return typeof d!="symbol"&&!isNaN(d)?c.at(d):c[d]},set:function(c,d,M){if(typeof d!="symbol"&&!isNaN(d)){var N=Array.from(c.$items.keys()),K=parseInt(N[d]||d);M==null?c.deleteAt(K):c.setAt(K,M)}else c[d]=M;return!0},deleteProperty:function(c,d){return typeof d=="number"?c.deleteAt(d):delete c[d],!0},has:function(c,d){return typeof d!="symbol"&&!isNaN(Number(d))?c.$items.has(Number(d)):Reflect.has(c,d)}}),f}var y=function(){function f(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,c)}return f.prototype.onAdd=function(c,d){return d===void 0&&(d=!0),u(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,c,d?this.$items:void 0)},f.prototype.onRemove=function(c){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,c)},f.prototype.onChange=function(c){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,c)},f.is=function(c){return Array.isArray(c)||c.array!==void 0},Object.defineProperty(f.prototype,"length",{get:function(){return this.$items.size},set:function(c){c===0?this.clear():this.splice(c,this.length-c)},enumerable:!1,configurable:!0}),f.prototype.push=function(){for(var c=this,d=[],M=0;M<arguments.length;M++)d[M]=arguments[M];var N;return d.forEach(function(K){N=c.$refId++,c.setAt(N,K)}),N},f.prototype.pop=function(){var c=Array.from(this.$indexes.values()).pop();if(c!==void 0){this.$changes.delete(c),this.$indexes.delete(c);var d=this.$items.get(c);return this.$items.delete(c),d}},f.prototype.at=function(c){if(c=Math.trunc(c)||0,c<0&&(c+=this.length),!(c<0||c>=this.length)){var d=Array.from(this.$items.keys())[c];return this.$items.get(d)}},f.prototype.setAt=function(c,d){var M,N;if(d==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(c)!==d){d.$changes!==void 0&&d.$changes.setParent(this,this.$changes.root,c);var K=(N=(M=this.$changes.indexes[c])===null||M===void 0?void 0:M.op)!==null&&N!==void 0?N:e.OPERATION.ADD;this.$changes.indexes[c]=c,this.$indexes.set(c,c),this.$items.set(c,d),this.$changes.change(c,K)}},f.prototype.deleteAt=function(c){var d=Array.from(this.$items.keys())[c];return d===void 0?!1:this.$deleteAt(d)},f.prototype.$deleteAt=function(c){return this.$changes.delete(c),this.$indexes.delete(c),this.$items.delete(c)},f.prototype.clear=function(c){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),c&&m.call(this,c),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},f.prototype.concat=function(){for(var c,d=[],M=0;M<arguments.length;M++)d[M]=arguments[M];return new(f.bind.apply(f,a([void 0],(c=Array.from(this.$items.values())).concat.apply(c,d),!1)))},f.prototype.join=function(c){return Array.from(this.$items.values()).join(c)},f.prototype.reverse=function(){var c=this,d=Array.from(this.$items.keys()),M=Array.from(this.$items.values()).reverse();return M.forEach(function(N,K){c.setAt(d[K],N)}),this},f.prototype.shift=function(){var c=Array.from(this.$items.keys()),d=c.shift();if(d!==void 0){var M=this.$items.get(d);return this.$deleteAt(d),M}},f.prototype.slice=function(c,d){var M=new f;return M.push.apply(M,Array.from(this.$items.values()).slice(c,d)),M},f.prototype.sort=function(c){var d=this;c===void 0&&(c=v);var M=Array.from(this.$items.keys()),N=Array.from(this.$items.values()).sort(c);return N.forEach(function(K,yt){d.setAt(M[yt],K)}),this},f.prototype.splice=function(c,d){d===void 0&&(d=this.length-c);for(var M=[],N=2;N<arguments.length;N++)M[N-2]=arguments[N];for(var K=Array.from(this.$items.keys()),yt=[],x=c;x<c+d;x++)yt.push(this.$items.get(K[x])),this.$deleteAt(K[x]);for(var x=0;x<M.length;x++)this.setAt(c+x,M[x]);return yt},f.prototype.unshift=function(){for(var c=this,d=[],M=0;M<arguments.length;M++)d[M]=arguments[M];var N=this.length,K=d.length,yt=Array.from(this.$items.values());return d.forEach(function(x,P){c.setAt(P,x)}),yt.forEach(function(x,P){c.setAt(K+P,x)}),N+K},f.prototype.indexOf=function(c,d){return Array.from(this.$items.values()).indexOf(c,d)},f.prototype.lastIndexOf=function(c,d){return d===void 0&&(d=this.length-1),Array.from(this.$items.values()).lastIndexOf(c,d)},f.prototype.every=function(c,d){return Array.from(this.$items.values()).every(c,d)},f.prototype.some=function(c,d){return Array.from(this.$items.values()).some(c,d)},f.prototype.forEach=function(c,d){Array.from(this.$items.values()).forEach(c,d)},f.prototype.map=function(c,d){return Array.from(this.$items.values()).map(c,d)},f.prototype.filter=function(c,d){return Array.from(this.$items.values()).filter(c,d)},f.prototype.reduce=function(c,d){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},f.prototype.reduceRight=function(c,d){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},f.prototype.find=function(c,d){return Array.from(this.$items.values()).find(c,d)},f.prototype.findIndex=function(c,d){return Array.from(this.$items.values()).findIndex(c,d)},f.prototype.fill=function(c,d,M){throw new Error("ArraySchema#fill() not implemented")},f.prototype.copyWithin=function(c,d,M){throw new Error("ArraySchema#copyWithin() not implemented")},f.prototype.toString=function(){return this.$items.toString()},f.prototype.toLocaleString=function(){return this.$items.toLocaleString()},f.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(f,Symbol.species,{get:function(){return f},enumerable:!1,configurable:!0}),f.prototype.entries=function(){return this.$items.entries()},f.prototype.keys=function(){return this.$items.keys()},f.prototype.values=function(){return this.$items.values()},f.prototype.includes=function(c,d){return Array.from(this.$items.values()).includes(c,d)},f.prototype.flatMap=function(c,d){throw new Error("ArraySchema#flatMap() is not supported.")},f.prototype.flat=function(c){throw new Error("ArraySchema#flat() is not supported.")},f.prototype.findLast=function(){var c=Array.from(this.$items.values());return c.findLast.apply(c,arguments)},f.prototype.findLastIndex=function(){var c=Array.from(this.$items.values());return c.findLastIndex.apply(c,arguments)},f.prototype.with=function(c,d){var M=Array.from(this.$items.values());return M[c]=d,new(f.bind.apply(f,a([void 0],M,!1)))},f.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},f.prototype.toSorted=function(c){return Array.from(this.$items.values()).sort(c)},f.prototype.toSpliced=function(c,d){var M=Array.from(this.$items.values());return M.toSpliced.apply(M,arguments)},f.prototype.setIndex=function(c,d){this.$indexes.set(c,d)},f.prototype.getIndex=function(c){return this.$indexes.get(c)},f.prototype.getByIndex=function(c){return this.$items.get(this.$indexes.get(c))},f.prototype.deleteByIndex=function(c){var d=this.$indexes.get(c);this.$items.delete(d),this.$indexes.delete(c)},f.prototype.toArray=function(){return Array.from(this.$items.values())},f.prototype.toJSON=function(){return this.toArray().map(function(c){return typeof c.toJSON=="function"?c.toJSON():c})},f.prototype.clone=function(c){var d;return c?d=new(f.bind.apply(f,a([void 0],Array.from(this.$items.values()),!1))):d=new(f.bind.apply(f,a([void 0],this.map(function(M){return M.$changes?M.clone():M}),!1))),d},f}();function _(f){return f.$proxy=!0,f=new Proxy(f,{get:function(c,d){return typeof d!="symbol"&&typeof c[d]>"u"?c.get(d):c[d]},set:function(c,d,M){return typeof d!="symbol"&&d.indexOf("$")===-1&&d!=="onAdd"&&d!=="onRemove"&&d!=="onChange"?c.set(d,M):c[d]=M,!0},deleteProperty:function(c,d){return c.delete(d),!0}}),f}var p=function(){function f(c){var d=this;if(this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,c)if(c instanceof Map||c instanceof f)c.forEach(function(N,K){return d.set(K,N)});else for(var M in c)this.set(M,c[M])}return f.prototype.onAdd=function(c,d){return d===void 0&&(d=!0),u(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,c,d?this.$items:void 0)},f.prototype.onRemove=function(c){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,c)},f.prototype.onChange=function(c){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,c)},f.is=function(c){return c.map!==void 0},f.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(f.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(f,Symbol.species,{get:function(){return f},enumerable:!1,configurable:!0}),f.prototype.set=function(c,d){if(d==null)throw new Error("MapSchema#set('".concat(c,"', ").concat(d,"): trying to set ").concat(d," value on '").concat(c,"'."));c=c.toString();var M=typeof this.$changes.indexes[c]<"u",N=M?this.$changes.indexes[c]:this.$refId++,K=M?e.OPERATION.REPLACE:e.OPERATION.ADD,yt=d.$changes!==void 0;if(yt&&d.$changes.setParent(this,this.$changes.root,N),!M)this.$changes.indexes[c]=N,this.$indexes.set(N,c);else{if(!yt&&this.$items.get(c)===d)return;yt&&this.$items.get(c)!==d&&(K=e.OPERATION.ADD)}return this.$items.set(c,d),this.$changes.change(c,K),this},f.prototype.get=function(c){return this.$items.get(c)},f.prototype.delete=function(c){return this.$changes.delete(c.toString()),this.$items.delete(c)},f.prototype.clear=function(c){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),c&&m.call(this,c),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},f.prototype.has=function(c){return this.$items.has(c)},f.prototype.forEach=function(c){this.$items.forEach(c)},f.prototype.entries=function(){return this.$items.entries()},f.prototype.keys=function(){return this.$items.keys()},f.prototype.values=function(){return this.$items.values()},Object.defineProperty(f.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),f.prototype.setIndex=function(c,d){this.$indexes.set(c,d)},f.prototype.getIndex=function(c){return this.$indexes.get(c)},f.prototype.getByIndex=function(c){return this.$items.get(this.$indexes.get(c))},f.prototype.deleteByIndex=function(c){var d=this.$indexes.get(c);this.$items.delete(d),this.$indexes.delete(c)},f.prototype.toJSON=function(){var c={};return this.forEach(function(d,M){c[M]=typeof d.toJSON=="function"?d.toJSON():d}),c},f.prototype.clone=function(c){var d;return c?d=Object.assign(new f,this):(d=new f,this.forEach(function(M,N){M.$changes?d.set(N,M.clone()):d.set(N,M)})),d},f}(),R={};function w(f,c){R[f]=c}function C(f){return R[f]}var V=function(){function f(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return f.create=function(c){var d=new f;return d.schema=Object.assign({},c&&c.schema||{}),d.indexes=Object.assign({},c&&c.indexes||{}),d.fieldsByIndex=Object.assign({},c&&c.fieldsByIndex||{}),d.descriptors=Object.assign({},c&&c.descriptors||{}),d.deprecated=Object.assign({},c&&c.deprecated||{}),d},f.prototype.addField=function(c,d){var M=this.getNextFieldIndex();this.fieldsByIndex[M]=c,this.indexes[c]=M,this.schema[c]=Array.isArray(d)?{array:d[0]}:d},f.prototype.hasField=function(c){return this.indexes[c]!==void 0},f.prototype.addFilter=function(c,d){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[c]]=d,this.indexesWithFilters.push(this.indexes[c]),!0},f.prototype.addChildrenFilter=function(c,d){var M=this.indexes[c],N=this.schema[c];if(C(Object.keys(N)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[M]=d,!0;console.warn("@filterChildren: field '".concat(c,"' can't have children. Ignoring filter."))},f.prototype.getChildrenFilter=function(c){return this.childFilters&&this.childFilters[this.indexes[c]]},f.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},f}();function I(f){return f._context&&f._context.useFilters}var D=function(){function f(){this.types={},this.schemas=new Map,this.useFilters=!1}return f.prototype.has=function(c){return this.schemas.has(c)},f.prototype.get=function(c){return this.types[c]},f.prototype.add=function(c,d){d===void 0&&(d=this.schemas.size),c._definition=V.create(c._definition),c._typeid=d,this.types[d]=c,this.schemas.set(c,d)},f.create=function(c){return c===void 0&&(c={}),function(d){return c.context||(c.context=new f),T(d,c)}},f}(),q=new D;function T(f,c){return c===void 0&&(c={}),function(d,M){var N=c.context||q,K=d.constructor;if(K._context=N,!f)throw new Error("".concat(K.name,': @type() reference provided for "').concat(M,`" is undefined. Make sure you don't have any circular dependencies.`));N.has(K)||N.add(K);var yt=K._definition;if(yt.addField(M,f),yt.descriptors[M]){if(yt.deprecated[M])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(M,"' definition on '").concat(K.name,`'.
Check @type() annotation`))}catch($){var x=$.stack.split(`
`)[4].trim();throw new Error("".concat($.message," ").concat(x))}}var P=y.is(f),F=!P&&p.is(f);if(typeof f!="string"&&!he.is(f)){var L=Object.values(f)[0];typeof L!="string"&&!N.has(L)&&N.add(L)}if(c.manual){yt.descriptors[M]={enumerable:!0,configurable:!0,writable:!0};return}var U="_".concat(M);yt.descriptors[U]={enumerable:!1,configurable:!1,writable:!0},yt.descriptors[M]={get:function(){return this[U]},set:function($){$!==this[U]&&($!=null?(P&&!($ instanceof y)&&($=new(y.bind.apply(y,a([void 0],$,!1)))),F&&!($ instanceof p)&&($=new p($)),$.$proxy===void 0&&(F?$=_($):P&&($=S($))),this.$changes.change(M),$.$changes&&$.$changes.setParent(this,this.$changes.root,this._definition.indexes[M])):this[U]!==void 0&&this.$changes.delete(M),this[U]=$)},enumerable:!0,configurable:!0}}}function A(f){return function(c,d){var M=c.constructor,N=M._definition;N.addFilter(d,f)&&(M._context.useFilters=!0)}}function k(f){return function(c,d){var M=c.constructor,N=M._definition;N.addChildrenFilter(d,f)&&(M._context.useFilters=!0)}}function J(f){return f===void 0&&(f=!0),function(c,d){var M=c.constructor,N=M._definition;N.deprecated[d]=!0,f&&(N.descriptors[d]={get:function(){throw new Error("".concat(d," is deprecated."))},set:function(K){},enumerable:!1,configurable:!0})}}function B(f,c,d){d===void 0&&(d={}),d.context||(d.context=f._context||d.context||q);for(var M in c)T(c[M],d)(f.prototype,M);return f}function tt(f){for(var c=0,d=0,M=0,N=f.length;M<N;M++)c=f.charCodeAt(M),c<128?d+=1:c<2048?d+=2:c<55296||c>=57344?d+=3:(M++,d+=4);return d}function Z(f,c,d){for(var M=0,N=0,K=d.length;N<K;N++)M=d.charCodeAt(N),M<128?f[c++]=M:M<2048?(f[c++]=192|M>>6,f[c++]=128|M&63):M<55296||M>=57344?(f[c++]=224|M>>12,f[c++]=128|M>>6&63,f[c++]=128|M&63):(N++,M=65536+((M&1023)<<10|d.charCodeAt(N)&1023),f[c++]=240|M>>18,f[c++]=128|M>>12&63,f[c++]=128|M>>6&63,f[c++]=128|M&63)}function lt(f,c){f.push(c&255)}function it(f,c){f.push(c&255)}function W(f,c){f.push(c&255),f.push(c>>8&255)}function ht(f,c){f.push(c&255),f.push(c>>8&255)}function ct(f,c){f.push(c&255),f.push(c>>8&255),f.push(c>>16&255),f.push(c>>24&255)}function Et(f,c){var d=c>>24,M=c>>16,N=c>>8,K=c;f.push(K&255),f.push(N&255),f.push(M&255),f.push(d&255)}function $t(f,c){var d=Math.floor(c/Math.pow(2,32)),M=c>>>0;Et(f,M),Et(f,d)}function ee(f,c){var d=c/Math.pow(2,32)>>0,M=c>>>0;Et(f,M),Et(f,d)}function Y(f,c){Xt(f,c)}function ut(f,c){z(f,c)}var Mt=new Int32Array(2),mt=new Float32Array(Mt.buffer),qt=new Float64Array(Mt.buffer);function Xt(f,c){mt[0]=c,ct(f,Mt[0])}function z(f,c){qt[0]=c,ct(f,Mt[0]),ct(f,Mt[1])}function re(f,c){return it(f,c?1:0)}function Rt(f,c){c||(c="");var d=tt(c),M=0;if(d<32)f.push(d|160),M=1;else if(d<256)f.push(217),it(f,d),M=2;else if(d<65536)f.push(218),ht(f,d),M=3;else if(d<4294967296)f.push(219),Et(f,d),M=5;else throw new Error("String too long");return Z(f,f.length,c),M+d}function Ft(f,c){if(isNaN(c))return Ft(f,0);if(isFinite(c)){if(c!==(c|0))return f.push(203),z(f,c),9}else return Ft(f,c>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return c>=0?c<128?(it(f,c),1):c<256?(f.push(204),it(f,c),2):c<65536?(f.push(205),ht(f,c),3):c<4294967296?(f.push(206),Et(f,c),5):(f.push(207),ee(f,c),9):c>=-32?(f.push(224|c+32),1):c>=-128?(f.push(208),lt(f,c),2):c>=-32768?(f.push(209),W(f,c),3):c>=-2147483648?(f.push(210),ct(f,c),5):(f.push(211),$t(f,c),9)}var Lt=Object.freeze({__proto__:null,boolean:re,float32:Y,float64:ut,int16:W,int32:ct,int64:$t,int8:lt,number:Ft,string:Rt,uint16:ht,uint32:Et,uint64:ee,uint8:it,utf8Write:Z,writeFloat32:Xt,writeFloat64:z});function Kt(f,c,d){for(var M="",N=0,K=c,yt=c+d;K<yt;K++){var x=f[K];if(!(x&128)){M+=String.fromCharCode(x);continue}if((x&224)===192){M+=String.fromCharCode((x&31)<<6|f[++K]&63);continue}if((x&240)===224){M+=String.fromCharCode((x&15)<<12|(f[++K]&63)<<6|(f[++K]&63)<<0);continue}if((x&248)===240){N=(x&7)<<18|(f[++K]&63)<<12|(f[++K]&63)<<6|(f[++K]&63)<<0,N>=65536?(N-=65536,M+=String.fromCharCode((N>>>10)+55296,(N&1023)+56320)):M+=String.fromCharCode(N);continue}console.error("Invalid byte "+x.toString(16))}return M}function Bt(f,c){return Ht(f,c)<<24>>24}function Ht(f,c){return f[c.offset++]}function ae(f,c){return b(f,c)<<16>>16}function b(f,c){return f[c.offset++]|f[c.offset++]<<8}function E(f,c){return f[c.offset++]|f[c.offset++]<<8|f[c.offset++]<<16|f[c.offset++]<<24}function G(f,c){return E(f,c)>>>0}function Q(f,c){return ft(f,c)}function st(f,c){return At(f,c)}function at(f,c){var d=G(f,c),M=E(f,c)*Math.pow(2,32);return M+d}function Tt(f,c){var d=G(f,c),M=G(f,c)*Math.pow(2,32);return M+d}var dt=new Int32Array(2),vt=new Float32Array(dt.buffer),zt=new Float64Array(dt.buffer);function ft(f,c){return dt[0]=E(f,c),vt[0]}function At(f,c){return dt[0]=E(f,c),dt[1]=E(f,c),zt[0]}function Jt(f,c){return Ht(f,c)>0}function Pt(f,c){var d=f[c.offset++],M;d<192?M=d&31:d===217?M=Ht(f,c):d===218?M=b(f,c):d===219&&(M=G(f,c));var N=Kt(f,c.offset,M);return c.offset+=M,N}function St(f,c){var d=f[c.offset];return d<192&&d>160||d===217||d===218||d===219}function It(f,c){var d=f[c.offset++];if(d<128)return d;if(d===202)return ft(f,c);if(d===203)return At(f,c);if(d===204)return Ht(f,c);if(d===205)return b(f,c);if(d===206)return G(f,c);if(d===207)return Tt(f,c);if(d===208)return Bt(f,c);if(d===209)return ae(f,c);if(d===210)return E(f,c);if(d===211)return at(f,c);if(d>223)return(255-d+1)*-1}function Yt(f,c){var d=f[c.offset];return d<128||d>=202&&d<=211}function le(f,c){return f[c.offset]<160}function Nt(f,c){return f[c.offset-1]===o&&(f[c.offset]<128||f[c.offset]>=202&&f[c.offset]<=211)}var O=Object.freeze({__proto__:null,arrayCheck:le,boolean:Jt,float32:Q,float64:st,int16:ae,int32:E,int64:at,int8:Bt,number:It,numberCheck:Yt,readFloat32:ft,readFloat64:At,string:Pt,stringCheck:St,switchStructureCheck:Nt,uint16:b,uint32:G,uint64:Tt,uint8:Ht}),et=function(){function f(c){var d=this;this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,c&&c.forEach(function(M){return d.add(M)})}return f.prototype.onAdd=function(c,d){return d===void 0&&(d=!0),u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,c,d?this.$items:void 0)},f.prototype.onRemove=function(c){return u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,c)},f.prototype.onChange=function(c){return u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,c)},f.is=function(c){return c.collection!==void 0},f.prototype.add=function(c){var d=this.$refId++,M=c.$changes!==void 0;return M&&c.$changes.setParent(this,this.$changes.root,d),this.$changes.indexes[d]=d,this.$indexes.set(d,d),this.$items.set(d,c),this.$changes.change(d),d},f.prototype.at=function(c){var d=Array.from(this.$items.keys())[c];return this.$items.get(d)},f.prototype.entries=function(){return this.$items.entries()},f.prototype.delete=function(c){for(var d=this.$items.entries(),M,N;(N=d.next())&&!N.done;)if(c===N.value[1]){M=N.value[0];break}return M===void 0?!1:(this.$changes.delete(M),this.$indexes.delete(M),this.$items.delete(M))},f.prototype.clear=function(c){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),c&&m.call(this,c),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},f.prototype.has=function(c){return Array.from(this.$items.values()).some(function(d){return d===c})},f.prototype.forEach=function(c){var d=this;this.$items.forEach(function(M,N,K){return c(M,N,d)})},f.prototype.values=function(){return this.$items.values()},Object.defineProperty(f.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),f.prototype.setIndex=function(c,d){this.$indexes.set(c,d)},f.prototype.getIndex=function(c){return this.$indexes.get(c)},f.prototype.getByIndex=function(c){return this.$items.get(this.$indexes.get(c))},f.prototype.deleteByIndex=function(c){var d=this.$indexes.get(c);this.$items.delete(d),this.$indexes.delete(c)},f.prototype.toArray=function(){return Array.from(this.$items.values())},f.prototype.toJSON=function(){var c=[];return this.forEach(function(d,M){c.push(typeof d.toJSON=="function"?d.toJSON():d)}),c},f.prototype.clone=function(c){var d;return c?d=Object.assign(new f,this):(d=new f,this.forEach(function(M){M.$changes?d.add(M.clone()):d.add(M)})),d},f}(),j=function(){function f(c){var d=this;this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,c&&c.forEach(function(M){return d.add(M)})}return f.prototype.onAdd=function(c,d){return d===void 0&&(d=!0),u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,c,d?this.$items:void 0)},f.prototype.onRemove=function(c){return u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,c)},f.prototype.onChange=function(c){return u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,c)},f.is=function(c){return c.set!==void 0},f.prototype.add=function(c){var d,M;if(this.has(c))return!1;var N=this.$refId++;c.$changes!==void 0&&c.$changes.setParent(this,this.$changes.root,N);var K=(M=(d=this.$changes.indexes[N])===null||d===void 0?void 0:d.op)!==null&&M!==void 0?M:e.OPERATION.ADD;return this.$changes.indexes[N]=N,this.$indexes.set(N,N),this.$items.set(N,c),this.$changes.change(N,K),N},f.prototype.entries=function(){return this.$items.entries()},f.prototype.delete=function(c){for(var d=this.$items.entries(),M,N;(N=d.next())&&!N.done;)if(c===N.value[1]){M=N.value[0];break}return M===void 0?!1:(this.$changes.delete(M),this.$indexes.delete(M),this.$items.delete(M))},f.prototype.clear=function(c){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),c&&m.call(this,c),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},f.prototype.has=function(c){for(var d=this.$items.values(),M=!1,N;(N=d.next())&&!N.done;)if(c===N.value){M=!0;break}return M},f.prototype.forEach=function(c){var d=this;this.$items.forEach(function(M,N,K){return c(M,N,d)})},f.prototype.values=function(){return this.$items.values()},Object.defineProperty(f.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),f.prototype.setIndex=function(c,d){this.$indexes.set(c,d)},f.prototype.getIndex=function(c){return this.$indexes.get(c)},f.prototype.getByIndex=function(c){return this.$items.get(this.$indexes.get(c))},f.prototype.deleteByIndex=function(c){var d=this.$indexes.get(c);this.$items.delete(d),this.$indexes.delete(c)},f.prototype.toArray=function(){return Array.from(this.$items.values())},f.prototype.toJSON=function(){var c=[];return this.forEach(function(d,M){c.push(typeof d.toJSON=="function"?d.toJSON():d)}),c},f.prototype.clone=function(c){var d;return c?d=Object.assign(new f,this):(d=new f,this.forEach(function(M){M.$changes?d.add(M.clone()):d.add(M)})),d},f}(),_t=function(){function f(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return f.prototype.addRefId=function(c){this.refIds.has(c)||(this.refIds.add(c),this.containerIndexes.set(c,new Set))},f.get=function(c){return c.$filterState===void 0&&(c.$filterState=new f),c.$filterState},f}(),xt=function(){function f(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return f.prototype.getNextUniqueId=function(){return this.nextUniqueId++},f.prototype.addRef=function(c,d,M){M===void 0&&(M=!0),this.refs.set(c,d),M&&(this.refCounts[c]=(this.refCounts[c]||0)+1)},f.prototype.removeRef=function(c){var d=this.refCounts[c];if(d===void 0){console.warn("trying to remove reference ".concat(c," that doesn't exist"));return}if(d===0){console.warn("trying to remove reference ".concat(c," with 0 refCount"));return}this.refCounts[c]=d-1,this.deletedRefs.add(c)},f.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},f.prototype.garbageCollectDeletedRefs=function(){var c=this;this.deletedRefs.forEach(function(d){if(!(c.refCounts[d]>0)){var M=c.refs.get(d);if(M instanceof he)for(var N in M._definition.schema)typeof M._definition.schema[N]!="string"&&M[N]&&M[N].$changes&&c.removeRef(M[N].$changes.refId);else{var K=M.$changes.parent._definition,yt=K.schema[K.fieldsByIndex[M.$changes.parentIndex]];typeof Object.values(yt)[0]=="function"&&Array.from(M.values()).forEach(function(x){return c.removeRef(x.$changes.refId)})}c.refs.delete(d),delete c.refCounts[d]}}),this.deletedRefs.clear()},f}(),Zt=function(f){r(c,f);function c(){return f!==null&&f.apply(this,arguments)||this}return c}(Error);function se(f,c,d,M){var N,K=!1;switch(c){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":N="number",isNaN(f)&&console.log('trying to encode "NaN" in '.concat(d.constructor.name,"#").concat(M));break;case"string":N="string",K=!0;break;case"boolean":return}if(typeof f!==N&&(!K||K&&f!==null)){var yt="'".concat(JSON.stringify(f),"'").concat(f&&f.constructor&&" (".concat(f.constructor.name,")")||"");throw new Zt("a '".concat(N,"' was expected, but ").concat(yt," was provided in ").concat(d.constructor.name,"#").concat(M))}}function oe(f,c,d,M){if(!(f instanceof c))throw new Zt("a '".concat(c.name,"' was expected, but '").concat(f.constructor.name,"' was provided in ").concat(d.constructor.name,"#").concat(M))}function xe(f,c,d,M,N){se(d,f,M,N);var K=Lt[f];if(K)K(c,d);else throw new Zt("a '".concat(f,"' was expected, but ").concat(d," was provided in ").concat(M.constructor.name,"#").concat(N))}function Qt(f,c,d){return O[f](c,d)}var he=function(){function f(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];Object.defineProperties(this,{$changes:{value:new h(this,void 0,new xt),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var M=this._definition.descriptors;M&&Object.defineProperties(this,M),c[0]&&this.assign(c[0])}return f.onError=function(c){console.error(c)},f.is=function(c){return c._definition&&c._definition.schema!==void 0},f.prototype.onChange=function(c){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,c)},f.prototype.onRemove=function(c){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,c)},f.prototype.assign=function(c){return Object.assign(this,c),this},Object.defineProperty(f.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),f.prototype.setDirty=function(c,d){this.$changes.change(c,d)},f.prototype.listen=function(c,d,M){var N=this;return M===void 0&&(M=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[c]||(this.$callbacks[c]=[]),this.$callbacks[c].push(d),M&&this[c]!==void 0&&d(this[c],void 0),function(){return g(N.$callbacks[c],N.$callbacks[c].indexOf(d))}},f.prototype.decode=function(c,d,M){d===void 0&&(d={offset:0}),M===void 0&&(M=this);var N=[],K=this.$changes.root,yt=c.length,x=0;for(K.refs.set(x,this);d.offset<yt;){var P=c[d.offset++];if(P==o){x=It(c,d);var F=K.refs.get(x);if(!F)throw new Error('"refId" not found: '.concat(x));M=F;continue}var L=M.$changes,U=M._definition!==void 0,$=U?P>>6<<6:P;if($===e.OPERATION.CLEAR){M.clear(N);continue}var rt=U?P%($||255):It(c,d),nt=U?M._definition.fieldsByIndex[rt]:"",ot=L.getType(rt),X=void 0,pt=void 0,Ct=void 0;if(U?pt=M["_".concat(nt)]:(pt=M.getByIndex(rt),($&e.OPERATION.ADD)===e.OPERATION.ADD?(Ct=M instanceof p?Pt(c,d):rt,M.setIndex(rt,Ct)):Ct=M.getIndex(rt)),($&e.OPERATION.DELETE)===e.OPERATION.DELETE&&($!==e.OPERATION.DELETE_AND_ADD&&M.deleteByIndex(rt),pt&&pt.$changes&&K.removeRef(pt.$changes.refId),X=null),nt===void 0){console.warn("@colyseus/schema: definition mismatch");for(var Ot={offset:d.offset};d.offset<yt&&!(Nt(c,d)&&(Ot.offset=d.offset+1,K.refs.has(It(c,Ot))));)d.offset++;continue}else if($!==e.OPERATION.DELETE)if(f.is(ot)){var wt=It(c,d);if(X=K.refs.get(wt),$!==e.OPERATION.REPLACE){var Dt=this.getSchemaType(c,d,ot);X||(X=this.createTypeInstance(Dt),X.$changes.refId=wt,pt&&(X.$callbacks=pt.$callbacks,pt.$changes.refId&&wt!==pt.$changes.refId&&K.removeRef(pt.$changes.refId))),K.addRef(wt,X,X!==pt)}}else if(typeof ot=="string")X=Qt(ot,c,d);else{var Me=C(Object.keys(ot)[0]),Wt=It(c,d),bt=K.refs.has(Wt)?pt||K.refs.get(Wt):new Me.constructor;if(X=bt.clone(!0),X.$changes.refId=Wt,pt&&(X.$callbacks=pt.$callbacks,pt.$changes.refId&&Wt!==pt.$changes.refId)){K.removeRef(pt.$changes.refId);for(var ue=pt.entries(),Ut=void 0;(Ut=ue.next())&&!Ut.done;){var Oe=Ut.value,Fe=Oe[0],on=Oe[1];N.push({refId:Wt,op:e.OPERATION.DELETE,field:Fe,value:void 0,previousValue:on})}}K.addRef(Wt,X,bt!==pt)}if(X!=null){if(X.$changes&&X.$changes.setParent(L.ref,L.root,rt),M instanceof f)M[nt]=X;else if(M instanceof p){var Fe=Ct;M.$items.set(Fe,X),M.$changes.allChanges.add(rt)}else if(M instanceof y)M.setAt(rt,X);else if(M instanceof et){var Be=M.add(X);M.setIndex(rt,Be)}else if(M instanceof j){var Be=M.add(X);Be!==!1&&M.setIndex(rt,Be)}}pt!==X&&N.push({refId:x,op:$,field:nt,dynamicIndex:Ct,value:X,previousValue:pt})}return this._triggerChanges(N),K.garbageCollectDeletedRefs(),N},f.prototype.encode=function(c,d,M){c===void 0&&(c=!1),d===void 0&&(d=[]),M===void 0&&(M=!1);for(var N=this.$changes,K=new WeakSet,yt=[N],x=1,P=0;P<x;P++){var F=yt[P],L=F.ref,U=L instanceof f;F.ensureRefId(),K.add(F),F!==N&&(F.changed||c)&&(it(d,o),Ft(d,F.refId));for(var $=c?Array.from(F.allChanges):Array.from(F.changes.values()),rt=0,nt=$.length;rt<nt;rt++){var ot=c?{op:e.OPERATION.ADD,index:$[rt]}:$[rt],X=ot.index,pt=U?L._definition.fieldsByIndex&&L._definition.fieldsByIndex[X]:X,Ct=d.length;if(ot.op!==e.OPERATION.TOUCH)if(U)it(d,X|ot.op);else{if(it(d,ot.op),ot.op===e.OPERATION.CLEAR)continue;Ft(d,X)}if(!U&&(ot.op&e.OPERATION.ADD)==e.OPERATION.ADD&&L instanceof p){var Ot=F.ref.$indexes.get(X);Rt(d,Ot)}if(ot.op!==e.OPERATION.DELETE){var wt=F.getType(X),Dt=F.getValue(X);if(Dt&&Dt.$changes&&!K.has(Dt.$changes)&&(yt.push(Dt.$changes),Dt.$changes.ensureRefId(),x++),ot.op!==e.OPERATION.TOUCH){if(f.is(wt))oe(Dt,wt,L,pt),Ft(d,Dt.$changes.refId),(ot.op&e.OPERATION.ADD)===e.OPERATION.ADD&&this.tryEncodeTypeId(d,wt,Dt.constructor);else if(typeof wt=="string")xe(wt,d,Dt,L,pt);else{var Me=C(Object.keys(wt)[0]);oe(L["_".concat(pt)],Me.constructor,L,pt),Ft(d,Dt.$changes.refId)}M&&F.cache(X,d.slice(Ct))}}}!c&&!M&&F.discard()}return d},f.prototype.encodeAll=function(c){return this.encode(!0,[],c)},f.prototype.applyFilters=function(c,d){var M,N;d===void 0&&(d=!1);for(var K=this,yt=new Set,x=_t.get(c),P=[this.$changes],F=1,L=[],U=function(rt){var nt=P[rt];if(yt.has(nt.refId))return"continue";var ot=nt.ref,X=ot instanceof f;it(L,o),Ft(L,nt.refId);var pt=x.refIds.has(nt),Ct=d||!pt;x.addRefId(nt);var Ot=x.containerIndexes.get(nt),wt=Ct?Array.from(nt.allChanges):Array.from(nt.changes.values());if(!d&&X&&ot._definition.indexesWithFilters){var Dt=ot._definition.indexesWithFilters;Dt.forEach(function(pe){!Ot.has(pe)&&nt.allChanges.has(pe)&&(Ct?wt.push(pe):wt.push({op:e.OPERATION.ADD,index:pe}))})}for(var Me=0,Wt=wt.length;Me<Wt;Me++){var bt=Ct?{op:e.OPERATION.ADD,index:wt[Me]}:wt[Me];if(bt.op===e.OPERATION.CLEAR){it(L,bt.op);continue}var ue=bt.index;if(bt.op===e.OPERATION.DELETE){X?it(L,bt.op|ue):(it(L,bt.op),Ft(L,ue));continue}var Ut=nt.getValue(ue),Oe=nt.getType(ue);if(X){var Fe=ot._definition.filters&&ot._definition.filters[ue];if(Fe&&!Fe.call(ot,c,Ut,K)){Ut&&Ut.$changes&&yt.add(Ut.$changes.refId);continue}}else{var on=nt.parent,Fe=nt.getChildrenFilter();if(Fe&&!Fe.call(on,c,ot.$indexes.get(ue),Ut,K)){Ut&&Ut.$changes&&yt.add(Ut.$changes.refId);continue}}if(Ut.$changes&&(P.push(Ut.$changes),F++),bt.op!==e.OPERATION.TOUCH)if(bt.op===e.OPERATION.ADD||X)L.push.apply(L,(M=nt.caches[ue])!==null&&M!==void 0?M:[]),Ot.add(ue);else if(Ot.has(ue))L.push.apply(L,(N=nt.caches[ue])!==null&&N!==void 0?N:[]);else{if(Ot.add(ue),it(L,e.OPERATION.ADD),Ft(L,ue),ot instanceof p){var Be=nt.ref.$indexes.get(ue);Rt(L,Be)}Ut.$changes?Ft(L,Ut.$changes.refId):Lt[Oe](L,Ut)}else if(Ut.$changes&&!X){if(it(L,e.OPERATION.ADD),Ft(L,ue),ot instanceof p){var Be=nt.ref.$indexes.get(ue);Rt(L,Be)}Ft(L,Ut.$changes.refId)}}},$=0;$<F;$++)U($);return L},f.prototype.clone=function(){var c,d=new this.constructor,M=this._definition.schema;for(var N in M)typeof this[N]=="object"&&typeof((c=this[N])===null||c===void 0?void 0:c.clone)=="function"?d[N]=this[N].clone():d[N]=this[N];return d},f.prototype.toJSON=function(){var c=this._definition.schema,d=this._definition.deprecated,M={};for(var N in c)!d[N]&&this[N]!==null&&typeof this[N]<"u"&&(M[N]=typeof this[N].toJSON=="function"?this[N].toJSON():this["_".concat(N)]);return M},f.prototype.discardAllChanges=function(){this.$changes.discardAll()},f.prototype.getByIndex=function(c){return this[this._definition.fieldsByIndex[c]]},f.prototype.deleteByIndex=function(c){this[this._definition.fieldsByIndex[c]]=void 0},f.prototype.tryEncodeTypeId=function(c,d,M){d._typeid!==M._typeid&&(it(c,l),Ft(c,M._typeid))},f.prototype.getSchemaType=function(c,d,M){var N;return c[d.offset]===l&&(d.offset++,N=this.constructor._context.get(It(c,d))),N||M},f.prototype.createTypeInstance=function(c){var d=new c;return d.$changes.root=this.$changes.root,d},f.prototype._triggerChanges=function(c){for(var d,M,N,K,yt,x,P,F,L,U=new Set,$=this.$changes.root.refs,rt=function(ot){var X=c[ot],pt=X.refId,Ct=$.get(pt),Ot=Ct.$callbacks;if((X.op&e.OPERATION.DELETE)===e.OPERATION.DELETE&&X.previousValue instanceof f&&((M=(d=X.previousValue.$callbacks)===null||d===void 0?void 0:d[e.OPERATION.DELETE])===null||M===void 0||M.forEach(function(wt){return wt()})),!Ot)return"continue";if(Ct instanceof f){if(!U.has(pt))try{(N=Ot==null?void 0:Ot[e.OPERATION.REPLACE])===null||N===void 0||N.forEach(function(wt){return wt()})}catch(wt){f.onError(wt)}try{Ot.hasOwnProperty(X.field)&&((K=Ot[X.field])===null||K===void 0||K.forEach(function(wt){return wt(X.value,X.previousValue)}))}catch(wt){f.onError(wt)}}else X.op===e.OPERATION.ADD&&X.previousValue===void 0?(yt=Ot[e.OPERATION.ADD])===null||yt===void 0||yt.forEach(function(wt){var Dt;return wt(X.value,(Dt=X.dynamicIndex)!==null&&Dt!==void 0?Dt:X.field)}):X.op===e.OPERATION.DELETE?X.previousValue!==void 0&&((x=Ot[e.OPERATION.DELETE])===null||x===void 0||x.forEach(function(wt){var Dt;return wt(X.previousValue,(Dt=X.dynamicIndex)!==null&&Dt!==void 0?Dt:X.field)})):X.op===e.OPERATION.DELETE_AND_ADD&&(X.previousValue!==void 0&&((P=Ot[e.OPERATION.DELETE])===null||P===void 0||P.forEach(function(wt){var Dt;return wt(X.previousValue,(Dt=X.dynamicIndex)!==null&&Dt!==void 0?Dt:X.field)})),(F=Ot[e.OPERATION.ADD])===null||F===void 0||F.forEach(function(wt){var Dt;return wt(X.value,(Dt=X.dynamicIndex)!==null&&Dt!==void 0?Dt:X.field)})),X.value!==X.previousValue&&((L=Ot[e.OPERATION.REPLACE])===null||L===void 0||L.forEach(function(wt){var Dt;return wt(X.value,(Dt=X.dynamicIndex)!==null&&Dt!==void 0?Dt:X.field)}));U.add(pt)},nt=0;nt<c.length;nt++)rt(nt)},f._definition=V.create(),f}();function Ae(f){for(var c=[f.$changes],d=1,M={},N=M,K=function(x){var P=c[x];P.changes.forEach(function(F){var L=P.ref,U=F.index,$=L._definition?L._definition.fieldsByIndex[U]:L.$indexes.get(U);N[$]=P.getValue(U)})},yt=0;yt<d;yt++)K(yt);return M}var Je={context:new D},Kn=function(f){r(c,f);function c(){return f!==null&&f.apply(this,arguments)||this}return s([T("string",Je)],c.prototype,"name",void 0),s([T("string",Je)],c.prototype,"type",void 0),s([T("number",Je)],c.prototype,"referencedType",void 0),c}(he),Zn=function(f){r(c,f);function c(){var d=f!==null&&f.apply(this,arguments)||this;return d.fields=new y,d}return s([T("number",Je)],c.prototype,"id",void 0),s([T([Kn],Je)],c.prototype,"fields",void 0),c}(he),Jn=function(f){r(c,f);function c(){var d=f!==null&&f.apply(this,arguments)||this;return d.types=new y,d}return c.encode=function(d){var M,N=d.constructor,K=new c;K.rootType=N._typeid;var yt=function(L,U){for(var $ in U){var rt=new Kn;rt.name=$;var nt=void 0;if(typeof U[$]=="string")nt=U[$];else{var ot=U[$],X=void 0;he.is(ot)?(nt="ref",X=U[$]):(nt=Object.keys(ot)[0],typeof ot[nt]=="string"?nt+=":"+ot[nt]:X=ot[nt]),rt.referencedType=X?X._typeid:-1}rt.type=nt,L.fields.push(rt)}K.types.push(L)},x=(M=N._context)===null||M===void 0?void 0:M.types;for(var P in x){var F=new Zn;F.id=Number(P),yt(F,x[P]._definition.schema)}return K.encodeAll()},c.decode=function(d,M){var N=new D,K=new c;K.decode(d,M);var yt=K.types.reduce(function(U,$){var rt=function(ot){r(X,ot);function X(){return ot!==null&&ot.apply(this,arguments)||this}return X}(he),nt=$.id;return U[nt]=rt,N.add(rt,nt),U},{});K.types.forEach(function(U){var $=yt[U.id];U.fields.forEach(function(rt){var nt;if(rt.referencedType!==void 0){var ot=rt.type,X=yt[rt.referencedType];if(!X){var pt=rt.type.split(":");ot=pt[0],X=pt[1]}ot==="ref"?T(X,{context:N})($.prototype,rt.name):T((nt={},nt[ot]=X,nt),{context:N})($.prototype,rt.name)}else T(rt.type,{context:N})($.prototype,rt.name)})});var x=yt[K.rootType],P=new x;for(var F in x._definition.schema){var L=x._definition.schema[F];typeof L!="string"&&(P[F]=typeof L=="function"?new L:new(C(Object.keys(L)[0])).constructor)}return P},s([T([Zn],Je)],c.prototype,"types",void 0),s([T("number",Je)],c.prototype,"rootType",void 0),c}(he);w("map",{constructor:p}),w("array",{constructor:y}),w("set",{constructor:j}),w("collection",{constructor:et}),e.ArraySchema=y,e.CollectionSchema=et,e.Context=D,e.MapSchema=p,e.Reflection=Jn,e.ReflectionField=Kn,e.ReflectionType=Zn,e.Schema=he,e.SchemaDefinition=V,e.SetSchema=j,e.decode=O,e.defineTypes=B,e.deprecated=J,e.dumpChanges=Ae,e.encode=Lt,e.filter=A,e.filterChildren=k,e.hasFilter=I,e.registerType=w,e.type=T})})(Qs,Qs.exports);var Ic=Qs.exports,Rm=de&&de.__createBinding||(Object.create?function(i,t,e,n){n===void 0&&(n=e);var r=Object.getOwnPropertyDescriptor(t,e);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(i,n,r)}:function(i,t,e,n){n===void 0&&(n=e),i[n]=t[e]}),Cm=de&&de.__setModuleDefault||(Object.create?function(i,t){Object.defineProperty(i,"default",{enumerable:!0,value:t})}:function(i,t){i.default=t}),Pm=de&&de.__importStar||function(i){if(i&&i.__esModule)return i;var t={};if(i!=null)for(var e in i)e!=="default"&&Object.prototype.hasOwnProperty.call(i,e)&&Rm(t,i,e);return Cm(t,i),t};Object.defineProperty(Qi,"__esModule",{value:!0});Qi.Room=void 0;const Ho=Pm(Li),Lm=Kr,be=aa,ko=Yn,Dm=tr,Cr=Di,Ne=Ic,Vo=jr;class oa{constructor(t,e){this.onStateChange=(0,Cr.createSignal)(),this.onError=(0,Cr.createSignal)(),this.onLeave=(0,Cr.createSignal)(),this.onJoin=(0,Cr.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,Dm.createNanoEvents)(),this.roomId=null,this.name=t,e&&(this.serializer=new((0,ko.getSerializer)("schema")),this.rootSchema=e,this.serializer.state=new e),this.onError((n,r)=>{var s;return(s=console.warn)===null||s===void 0?void 0:s.call(console,`colyseus.js - onError => (${n}) ${r}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(t,e,n=this,r){const s=new Lm.Connection;n.connection=s,s.events.onmessage=oa.prototype.onMessageCallback.bind(n),s.events.onclose=function(a){var o;if(!n.hasJoined){(o=console.warn)===null||o===void 0||o.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason);return}a.code===Vo.CloseCode.DEVMODE_RESTART&&e?e():(n.onLeave.invoke(a.code,a.reason),n.destroy())},s.events.onerror=function(a){var o;(o=console.warn)===null||o===void 0||o.call(console,`Room, onError (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason)},s.connect(t,r)}leave(t=!0){return new Promise(e=>{this.onLeave(n=>e(n)),this.connection?t?this.connection.send([be.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(Vo.CloseCode.CONSENTED)})}onMessage(t,e){return this.onMessageHandlers.on(this.getMessageHandlerKey(t),e)}send(t,e){const n=[be.Protocol.ROOM_DATA];typeof t=="string"?Ne.encode.string(n,t):Ne.encode.number(n,t);let r;if(e!==void 0){const s=Ho.encode(e);r=new Uint8Array(n.length+s.byteLength),r.set(new Uint8Array(n),0),r.set(new Uint8Array(s),n.length)}else r=new Uint8Array(n);this.connection.send(r.buffer)}sendBytes(t,e){const n=[be.Protocol.ROOM_DATA_BYTES];typeof t=="string"?Ne.encode.string(n,t):Ne.encode.number(n,t);let r;r=new Uint8Array(n.length+(e.byteLength||e.length)),r.set(new Uint8Array(n),0),r.set(new Uint8Array(e),n.length),this.connection.send(r.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(t){const e=Array.from(new Uint8Array(t.data)),n=e[0];if(n===be.Protocol.JOIN_ROOM){let r=1;const s=(0,be.utf8Read)(e,r);if(r+=(0,be.utf8Length)(s),this.serializerId=(0,be.utf8Read)(e,r),r+=(0,be.utf8Length)(this.serializerId),!this.serializer){const a=(0,ko.getSerializer)(this.serializerId);this.serializer=new a}e.length>r&&this.serializer.handshake&&this.serializer.handshake(e,{offset:r}),this.reconnectionToken=`${this.roomId}:${s}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([be.Protocol.JOIN_ROOM])}else if(n===be.Protocol.ERROR){const r={offset:1},s=Ne.decode.number(e,r),a=Ne.decode.string(e,r);this.onError.invoke(s,a)}else if(n===be.Protocol.LEAVE_ROOM)this.leave();else if(n===be.Protocol.ROOM_DATA_SCHEMA){const r={offset:1},a=this.serializer.getState().constructor._context.get(Ne.decode.number(e,r)),o=new a;o.decode(e,r),this.dispatchMessage(a,o)}else if(n===be.Protocol.ROOM_STATE)e.shift(),this.setState(e);else if(n===be.Protocol.ROOM_STATE_PATCH)e.shift(),this.patch(e);else if(n===be.Protocol.ROOM_DATA){const r={offset:1},s=Ne.decode.stringCheck(e,r)?Ne.decode.string(e,r):Ne.decode.number(e,r),a=e.length>r.offset?Ho.decode(t.data,r.offset):void 0;this.dispatchMessage(s,a)}else if(n===be.Protocol.ROOM_DATA_BYTES){const r={offset:1},s=Ne.decode.stringCheck(e,r)?Ne.decode.string(e,r):Ne.decode.number(e,r);this.dispatchMessage(s,new Uint8Array(e.slice(r.offset)))}}setState(t){this.serializer.setState(t),this.onStateChange.invoke(this.serializer.getState())}patch(t){this.serializer.patch(t),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(t,e){var n;const r=this.getMessageHandlerKey(t);this.onMessageHandlers.events[r]?this.onMessageHandlers.emit(r,e):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",t,e):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${t}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(t){switch(typeof t){case"function":return`$${t._typeid}`;case"string":return t;case"number":return`i${t}`;default:throw new Error("invalid message type.")}}}Qi.Room=oa;var Jr={};function Go(i,t){t.headers=i.headers||{},t.statusMessage=i.statusText,t.statusCode=i.status,t.data=i.response}function Ze(i,t,e){return new Promise(function(n,r){e=e||{};var s=new XMLHttpRequest,a,o,l,h=e.body,u=e.headers||{};e.timeout&&(s.timeout=e.timeout),s.ontimeout=s.onerror=function(m){m.timeout=m.type=="timeout",r(m)},s.open(i,t.href||t),s.onload=function(){for(l=s.getAllResponseHeaders().trim().split(/[\r\n]+/),Go(s,s);o=l.shift();)o=o.split(": "),s.headers[o.shift().toLowerCase()]=o.join(": ");if(o=s.headers["content-type"],o&&~o.indexOf("application/json"))try{s.data=JSON.parse(s.data,e.reviver)}catch(m){return Go(s,m),r(m)}(s.status>=400?r:n)(s)},typeof FormData<"u"&&h instanceof FormData||h&&typeof h=="object"&&(u["content-type"]="application/json",h=JSON.stringify(h)),s.withCredentials=!!e.withCredentials;for(a in u)s.setRequestHeader(a,u[a]);s.send(h)})}var Im=Ze.bind(Ze,"GET"),Um=Ze.bind(Ze,"POST"),Nm=Ze.bind(Ze,"PATCH"),Om=Ze.bind(Ze,"DELETE"),Fm=Ze.bind(Ze,"PUT");const Bm=Object.freeze(Object.defineProperty({__proto__:null,del:Om,get:Im,patch:Nm,post:Um,put:Fm,send:Ze},Symbol.toStringTag,{value:"Module"})),zm=hm(Bm);var Hm=de&&de.__createBinding||(Object.create?function(i,t,e,n){n===void 0&&(n=e);var r=Object.getOwnPropertyDescriptor(t,e);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(i,n,r)}:function(i,t,e,n){n===void 0&&(n=e),i[n]=t[e]}),km=de&&de.__setModuleDefault||(Object.create?function(i,t){Object.defineProperty(i,"default",{enumerable:!0,value:t})}:function(i,t){i.default=t}),Vm=de&&de.__importStar||function(i){if(i&&i.__esModule)return i;var t={};if(i!=null)for(var e in i)e!=="default"&&Object.prototype.hasOwnProperty.call(i,e)&&Hm(t,i,e);return km(t,i),t};Object.defineProperty(Jr,"__esModule",{value:!0});Jr.HTTP=void 0;const Gm=jr,Wm=Vm(zm);class $m{constructor(t,e={}){this.client=t,this.headers=e}get(t,e={}){return this.request("get",t,e)}post(t,e={}){return this.request("post",t,e)}del(t,e={}){return this.request("del",t,e)}put(t,e={}){return this.request("put",t,e)}request(t,e,n={}){return Wm[t](this.client.getHttpEndpoint(e),this.getOptions(n)).catch(r=>{var s;const a=r.statusCode,o=((s=r.data)===null||s===void 0?void 0:s.error)||r.statusMessage||r.message;throw!a&&!o?r:new Gm.ServerError(a,o)})}getOptions(t){return t.headers=Object.assign({},this.headers,t.headers),this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(t.withCredentials=!0),t}}Jr.HTTP=$m;var er={},Cn={};Object.defineProperty(Cn,"__esModule",{value:!0});Cn.getItem=Cn.removeItem=Cn.setItem=void 0;let Wi;function ca(){if(!Wi)try{Wi=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return Wi||(Wi={cache:{},setItem:function(i,t){this.cache[i]=t},getItem:function(i){this.cache[i]},removeItem:function(i){delete this.cache[i]}}),Wi}function Xm(i,t){ca().setItem(i,t)}Cn.setItem=Xm;function qm(i){ca().removeItem(i)}Cn.removeItem=qm;function Ym(i,t){const e=ca().getItem(i);typeof Promise>"u"||!(e instanceof Promise)?t(e):e.then(n=>t(n))}Cn.getItem=Ym;var Hn=de&&de.__awaiter||function(i,t,e,n){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(u){try{h(n.next(u))}catch(m){a(m)}}function l(u){try{h(n.throw(u))}catch(m){a(m)}}function h(u){u.done?s(u.value):r(u.value).then(o,l)}h((n=n.apply(i,t||[])).next())})},Mi=de&&de.__classPrivateFieldGet||function(i,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!n:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(i):n?n.value:t.get(i)},$i=de&&de.__classPrivateFieldSet||function(i,t,e,n,r){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?i!==t||!r:!t.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?r.call(i,e):r?r.value=e:t.set(i,e),e},Dr,ta,yn,Ir;Object.defineProperty(er,"__esModule",{value:!0});er.Auth=void 0;const Vs=Cn,jm=tr;class Km{constructor(t){this.http=t,this.settings={path:"/auth",key:"colyseus-auth-token"},Dr.set(this,!1),ta.set(this,void 0),yn.set(this,void 0),Ir.set(this,(0,jm.createNanoEvents)()),(0,Vs.getItem)(this.settings.key,e=>this.token=e)}set token(t){this.http.authToken=t}get token(){return this.http.authToken}onChange(t){const e=Mi(this,Ir,"f").on("change",t);return Mi(this,Dr,"f")||$i(this,ta,new Promise((n,r)=>{this.getUserData().then(s=>{this.emitChange(Object.assign(Object.assign({},s),{token:this.token}))}).catch(s=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),$i(this,Dr,!0,"f"),e}getUserData(){return Hn(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(t,e,n){return Hn(this,void 0,void 0,function*(){const r=(yield this.http.post(`${this.settings.path}/register`,{body:{email:t,password:e,options:n}})).data;return this.emitChange(r),r})}signInWithEmailAndPassword(t,e){return Hn(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:t,password:e}})).data;return this.emitChange(n),n})}signInAnonymously(t){return Hn(this,void 0,void 0,function*(){const e=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:t}})).data;return this.emitChange(e),e})}sendPasswordResetEmail(t){return Hn(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:t}})).data})}signInWithProvider(t,e={}){return Hn(this,void 0,void 0,function*(){return new Promise((n,r)=>{const s=e.width||480,a=e.height||768,o=this.token?`?token=${this.token}`:"",l=`Login with ${t[0].toUpperCase()+t.substring(1)}`,h=this.http.client.getHttpEndpoint(`${e.prefix||`${this.settings.path}/provider`}/${t}${o}`),u=screen.width/2-s/2,m=screen.height/2-a/2;$i(this,yn,window.open(h,l,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+s+", height="+a+", top="+m+", left="+u),"f");const g=S=>{S.data.user===void 0&&S.data.token===void 0||(clearInterval(v),Mi(this,yn,"f").close(),$i(this,yn,void 0,"f"),window.removeEventListener("message",g),S.data.error!==void 0?r(S.data.error):(n(S.data),this.emitChange(S.data)))},v=setInterval(()=>{(!Mi(this,yn,"f")||Mi(this,yn,"f").closed)&&($i(this,yn,void 0,"f"),r("cancelled"),window.removeEventListener("message",g))},200);window.addEventListener("message",g)})})}signOut(){return Hn(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(t){t.token!==void 0&&(this.token=t.token,t.token===null?(0,Vs.removeItem)(this.settings.key):(0,Vs.setItem)(this.settings.key,t.token)),Mi(this,Ir,"f").emit("change",t)}}er.Auth=Km;Dr=new WeakMap,ta=new WeakMap,yn=new WeakMap,Ir=new WeakMap;var Qr={};Object.defineProperty(Qr,"__esModule",{value:!0});Qr.discordURLBuilder=void 0;function Zm(i){var t;const e=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",n=i.hostname.split("."),r=!i.hostname.includes("trycloudflare.com")&&!i.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return i.pathname.startsWith("/.proxy")?`${i.protocol}//${e}${r}${i.pathname}${i.search}`:`${i.protocol}//${e}/.proxy/colyseus${r}${i.pathname}${i.search}`}Qr.discordURLBuilder=Zm;var Qe=de&&de.__awaiter||function(i,t,e,n){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(u){try{h(n.next(u))}catch(m){a(m)}}function l(u){try{h(n.throw(u))}catch(m){a(m)}}function h(u){u.done?s(u.value):r(u.value).then(o,l)}h((n=n.apply(i,t||[])).next())})},Gs;Object.defineProperty(Pi,"__esModule",{value:!0});Pi.Client=Pi.MatchMakeError=void 0;const Jm=jr,Qm=Qi,tg=Jr,eg=er,ng=Qr;class ts extends Error{constructor(t,e){super(t),this.code=e,Object.setPrototypeOf(this,ts.prototype)}}Pi.MatchMakeError=ts;const Wo=typeof window<"u"&&typeof((Gs=window==null?void 0:window.location)===null||Gs===void 0?void 0:Gs.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class ig{constructor(t=Wo,e){var n,r;if(typeof t=="string"){const s=t.startsWith("/")?new URL(t,Wo):new URL(t),a=s.protocol==="https:"||s.protocol==="wss:",o=Number(s.port||(a?443:80));this.settings={hostname:s.hostname,pathname:s.pathname,port:o,secure:a}}else t.port===void 0&&(t.port=t.secure?443:80),t.pathname===void 0&&(t.pathname=""),this.settings=t;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new tg.HTTP(this,(e==null?void 0:e.headers)||{}),this.auth=new eg.Auth(this.http),this.urlBuilder=e==null?void 0:e.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((r=(n=window==null?void 0:window.location)===null||n===void 0?void 0:n.hostname)===null||r===void 0)&&r.includes("discordsays.com"))&&(this.urlBuilder=ng.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(t,e={},n){return Qe(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",t,e,n)})}create(t,e={},n){return Qe(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",t,e,n)})}join(t,e={},n){return Qe(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",t,e,n)})}joinById(t,e={},n){return Qe(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",t,e,n)})}reconnect(t,e){return Qe(this,void 0,void 0,function*(){if(typeof t=="string"&&typeof e=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,r]=t.split(":");if(!n||!r)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:r},e)})}getAvailableRooms(t=""){return Qe(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${t}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(t,e,n){return Qe(this,void 0,void 0,function*(){const r=this.createRoom(t.room.name,e);r.roomId=t.room.roomId,r.sessionId=t.sessionId;const s={sessionId:r.sessionId};t.reconnectionToken&&(s.reconnectionToken=t.reconnectionToken);const a=n||r;return r.connect(this.buildEndpoint(t.room,s),t.devMode&&(()=>Qe(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${r.roomId}'...`);let o=0,l=8;const h=()=>Qe(this,void 0,void 0,function*(){o++;try{yield this.consumeSeatReservation(t,e,a),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${r.roomId}'`)}catch{o<l?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${o} out of ${l})`),setTimeout(h,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(h,2e3)})),a,this.http.headers),new Promise((o,l)=>{const h=(u,m)=>l(new Jm.ServerError(u,m));a.onError.once(h),a.onJoin.once(()=>{a.onError.remove(h),o(a)})})})}createMatchMakeRequest(t,e,n={},r,s){return Qe(this,void 0,void 0,function*(){const a=(yield this.http.post(`matchmake/${t}/${e}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(a.error)throw new ts(a.error,a.code);return t==="reconnect"&&(a.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(a,r,s)})}createRoom(t,e){return new Qm.Room(t,e)}buildEndpoint(t,e={}){const n=[];for(const a in e)e.hasOwnProperty(a)&&n.push(`${a}=${e[a]}`);let r=this.settings.secure?"wss://":"ws://";t.publicAddress?r+=`${t.publicAddress}`:r+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const s=`${r}/${t.processId}/${t.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(s)):s}getHttpEndpoint(t=""){const e=t.startsWith("/")?t:`/${t}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${e}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Pi.Client=ig;var es={};Object.defineProperty(es,"__esModule",{value:!0});es.SchemaSerializer=void 0;const $o=Ic;class rg{setState(t){return this.state.decode(t)}getState(){return this.state}patch(t){return this.state.decode(t)}teardown(){var t,e;(e=(t=this.state)===null||t===void 0?void 0:t.$changes)===null||e===void 0||e.root.clearRefs()}handshake(t,e){this.state?new $o.Reflection().decode(t,e):this.state=$o.Reflection.decode(t,e)}}es.SchemaSerializer=rg;var ns={};Object.defineProperty(ns,"__esModule",{value:!0});ns.NoneSerializer=void 0;class sg{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}}ns.NoneSerializer=sg;(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.SchemaSerializer=i.registerSerializer=i.Auth=i.Room=i.ErrorCode=i.Protocol=i.MatchMakeError=i.Client=void 0;var t=Pi;Object.defineProperty(i,"Client",{enumerable:!0,get:function(){return t.Client}}),Object.defineProperty(i,"MatchMakeError",{enumerable:!0,get:function(){return t.MatchMakeError}});var e=aa;Object.defineProperty(i,"Protocol",{enumerable:!0,get:function(){return e.Protocol}}),Object.defineProperty(i,"ErrorCode",{enumerable:!0,get:function(){return e.ErrorCode}});var n=Qi;Object.defineProperty(i,"Room",{enumerable:!0,get:function(){return n.Room}});var r=er;Object.defineProperty(i,"Auth",{enumerable:!0,get:function(){return r.Auth}});const s=es;Object.defineProperty(i,"SchemaSerializer",{enumerable:!0,get:function(){return s.SchemaSerializer}});const a=ns,o=Yn;Object.defineProperty(i,"registerSerializer",{enumerable:!0,get:function(){return o.registerSerializer}}),(0,o.registerSerializer)("schema",s.SchemaSerializer),(0,o.registerSerializer)("none",a.NoneSerializer)})(Pc);class ag{constructor(t){te(this,"client");te(this,"room",null);te(this,"sceneManager");te(this,"statusElement");te(this,"playerCountElement");te(this,"localSessionId",null);this.sceneManager=t,this.statusElement=document.getElementById("connection-status"),this.playerCountElement=document.getElementById("player-count");const e=window.location.protocol==="https:"?"wss":"ws",n=window.location.hostname||"localhost",r=`${e}://${n}:2567`;this.client=new Pc.Client(r)}async connect(){try{this.statusElement&&(this.statusElement.textContent="Connecting to Colyseus server...",this.statusElement.className="connecting"),this.room=await this.client.joinOrCreate("game_room",{name:`EggHunter_${Math.floor(Math.random()*900+100)}`}),this.localSessionId=this.room.sessionId,this.sceneManager.setLocalAvatarId(this.localSessionId),this.statusElement&&(this.statusElement.textContent=`🟢 Connected (ID: ${this.localSessionId.slice(0,5)})`,this.statusElement.className="connected"),console.log(`Successfully joined room: ${this.room.name}, sessionId: ${this.localSessionId}`);const t=()=>{if(!this.room||!this.room.state||!this.room.state.players)return;const e=new Set;try{const n=this.room.state.players;n.forEach&&n.forEach((r,s)=>{e.add(s);let a=this.sceneManager.getAvatar(s);if(!a){const o=s===this.localSessionId,l=r.name||`Player_${s.slice(0,4)}`;console.log(`✨ Spawning avatar: ${l} (${s}) [isLocal: ${o}]`),a=this.sceneManager.addAvatar(s,l,o)}this.sceneManager.updateAvatarState(s,r.x,r.y,r.z,r.rotationY)})}catch(n){console.error("Error iterating room players:",n)}this.sceneManager.getAvatarIds().forEach(n=>{e.has(n)||(console.log(`🗑️ Despawning avatar: ${n}`),this.sceneManager.removeAvatar(n))}),this.updatePlayerCount()};t(),this.room.onStateChange(()=>t()),this.room.onLeave(e=>{console.log(`Left room with code ${e}`),this.statusElement&&(this.statusElement.textContent="🔴 Disconnected from server",this.statusElement.className="disconnected")})}catch(t){console.error("Failed to connect to Colyseus room:",t),this.statusElement&&(this.statusElement.textContent="❌ Connection Failed (Server Offline?)",this.statusElement.className="disconnected")}}sendMoveInput(t,e,n){this.room&&this.room.send("move",{moveX:t,moveZ:e,rotationY:n})}updatePlayerCount(){if(this.playerCountElement){const t=this.sceneManager.getAvatarCount();this.playerCountElement.textContent=`Players Online: ${t}`}}}class og{constructor(){te(this,"sceneManager");te(this,"inputManager");te(this,"networkManager");te(this,"clock");te(this,"animate",()=>{var r,s;requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.atan2(this.sceneManager.camera.position.x-(((r=this.sceneManager.getAvatar(this.networkManager.localSessionId||""))==null?void 0:r.group.position.x)||0),this.sceneManager.camera.position.z-(((s=this.sceneManager.getAvatar(this.networkManager.localSessionId||""))==null?void 0:s.group.position.z)||0)),n=this.inputManager.getMovement(e);this.networkManager.sendMoveInput(n.moveX,n.moveZ,n.rotationY),this.sceneManager.update(t)});const t=document.getElementById("app");if(!t)throw new Error("Target #app element not found in DOM");this.sceneManager=new cm(t),this.inputManager=new lm,this.networkManager=new ag(this.sceneManager),this.clock=new sm,this.init()}async init(){await this.networkManager.connect(),this.animate()}}new og;
