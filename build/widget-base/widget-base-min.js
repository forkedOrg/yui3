YUI.add("widget-base",function(b){var g=b.Lang,r=b.Node,e=b.ClassNameManager,w=e.getClassName,M,s=b.cached(function(L){return L.substring(0,1).toUpperCase()+L.substring(1);}),F="content",P="visible",K="hidden",y="disabled",B="focused",d="width",A="height",N="boundingBox",v="contentBox",k="parentNode",m="ownerDocument",x="auto",j="srcNode",I="body",H="tabIndex",q="id",i="render",J="rendered",n="destroyed",a="strings",o="<div></div>",z="Change",p="loading",E="_uiSet",D="",G=function(){},u=true,O=false,t,l={},f=[P,y,A,d,B,H],C=b.UA.webkit,h={};function c(Q){var T=this,L,S,R=T.constructor;T._strs={};T._cssPrefix=R.CSS_PREFIX||w(R.NAME.toLowerCase());c.superclass.constructor.apply(T,arguments);S=T.get(i);if(S){if(S!==u){L=S;}T.render(L);}}c.NAME="widget";t=c.UI_SRC="ui";c.ATTRS=l;l[q]={valueFn:"_guid",writeOnce:u};l[J]={value:O,readOnly:u};l[N]={value:null,setter:"_setBB",writeOnce:u};l[v]={valueFn:"_defaultCB",setter:"_setCB",writeOnce:u};l[H]={value:null,validator:"_validTabIndex"};l[B]={value:O,readOnly:u};l[y]={value:O};l[P]={value:u};l[A]={value:D};l[d]={value:D};l[a]={value:{},setter:"_strSetter",getter:"_strGetter"};l[i]={value:O,writeOnce:u};c.CSS_PREFIX=w(c.NAME.toLowerCase());c.getClassName=function(){return w.apply(e,[c.CSS_PREFIX].concat(b.Array(arguments),true));};M=c.getClassName;c.getByNode=function(L){var R,Q=M();L=r.one(L);if(L){L=L.ancestor("."+Q,true);if(L){R=h[b.stamp(L,u)];}}return R||null;};b.extend(c,b.Base,{getClassName:function(){return w.apply(e,[this._cssPrefix].concat(b.Array(arguments),true));},initializer:function(L){h[b.stamp(this.get(N))]=this;if(this._applyParser){this._applyParser(L);}},destructor:function(){var L=this.get(N),Q=b.stamp(L,u);if(Q in h){delete h[Q];}this._destroyBox();},destroy:function(L){this._destroyAllNodes=L;return c.superclass.destroy.apply(this);},_destroyBox:function(){var R=this.get(N),Q=this.get(v),L=this._destroyAllNodes,S=R&&R.compareTo(Q);if(this.UI_EVENTS){this._destroyUIEvents();}this._unbindUI(R);if(L){R.empty();R.remove(u);}else{if(Q){Q.remove(u);}if(!S){R.remove(u);}}},render:function(L){if(!this.get(n)&&!this.get(J)){this.publish(i,{queuable:O,fireOnce:u,defaultTargetOnly:u,defaultFn:this._defRenderFn});this.fire(i,{parentNode:(L)?r.one(L):null});}return this;},_defRenderFn:function(L){this._parentNode=L.parentNode;this.renderer();this._set(J,u);this._removeLoadingClassNames();},renderer:function(){var L=this;L._renderUI();L.renderUI();L._bindUI();L.bindUI();L._syncUI();L.syncUI();},bindUI:G,renderUI:G,syncUI:G,hide:function(){return this.set(P,O);},show:function(){return this.set(P,u);},focus:function(){return this._set(B,u);},blur:function(){return this._set(B,O);},enable:function(){return this.set(y,O);},disable:function(){return this.set(y,u);},_uiSizeCB:function(L){this.get(v).toggleClass(M(F,"expanded"),L);},_renderBox:function(L){var T=this,Q=T.get(v),R=T.get(N),V=T.get(j),S=T.DEF_PARENT_NODE,U=(V&&V.get(m))||R.get(m)||Q.get(m);if(V&&!V.compareTo(Q)&&!Q.inDoc(U)){V.replace(Q);}if(!R.compareTo(Q.get(k))&&!R.compareTo(Q)){if(Q.inDoc(U)){Q.replace(R);}R.appendChild(Q);}L=L||(S&&r.one(S));if(L){L.appendChild(R);}else{if(!R.inDoc(U)){r.one(I).insert(R,0);}}},_setBB:function(L){return this._setBox(this.get(q),L,this.BOUNDING_TEMPLATE);},_setCB:function(L){return(this.CONTENT_TEMPLATE===null)?this.get(N):this._setBox(null,L,this.CONTENT_TEMPLATE);},_defaultCB:function(L){return this.get(j)||null;},_setBox:function(R,Q,L){Q=r.one(Q)||r.create(L);if(!Q.get(q)){Q.set(q,R||b.guid());}return Q;},_renderUI:function(){this._renderBoxClassNames();this._renderBox(this._parentNode);},_renderBoxClassNames:function(){var S=this._getClasses(),L,Q=this.get(N),R;Q.addClass(M());for(R=S.length-3;R>=0;R--){L=S[R];Q.addClass(L.CSS_PREFIX||w(L.NAME.toLowerCase()));}this.get(v).addClass(this.getClassName(F));},_removeLoadingClassNames:function(){var R=this.get(N),L=this.get(v),Q=this.getClassName(p),S=M(p);R.removeClass(S).removeClass(Q);L.removeClass(S).removeClass(Q);},_bindUI:function(){this._bindAttrUI(this._UI_ATTRS.BIND);this._bindDOM();},_unbindUI:function(L){this._unbindDOM(L);},_bindDOM:function(){var L=this.get(N).get(m);this._hDocFocus=L.on("focus",this._onDocFocus,this);if(C){this._hDocMouseDown=L.on("mousedown",this._onDocMouseDown,this);}},_unbindDOM:function(L){if(this._hDocFocus){this._hDocFocus.detach();}if(C&&this._hDocMouseDown){this._hDocMouseDown.detach();}},_syncUI:function(){this._syncAttrUI(this._UI_ATTRS.SYNC);},_uiSetHeight:function(L){this._uiSetDim(A,L);this._uiSizeCB((L!==D&&L!==x));},_uiSetWidth:function(L){this._uiSetDim(d,L);},_uiSetDim:function(L,Q){this.get(N).setStyle(L,g.isNumber(Q)?Q+this.DEF_UNIT:Q);},_uiSetVisible:function(L){this.get(N).toggleClass(this.getClassName(K),!L);},_uiSetDisabled:function(L){this.get(N).toggleClass(this.getClassName(y),L);},_uiSetFocused:function(R,Q){var L=this.get(N);L.toggleClass(this.getClassName(B),R);if(Q!==t){if(R){L.focus();}else{L.blur();}}},_uiSetTabIndex:function(Q){var L=this.get(N);if(g.isNumber(Q)){L.set(H,Q);}else{L.removeAttribute(H);}},_onDocMouseDown:function(L){if(this._domFocus){this._onDocFocus(L);}},_onDocFocus:function(L){this._domFocus=this.get(N).contains(L.target);this._set(B,this._domFocus,{src:t});},toString:function(){return this.name+"["+this.get(q)+"]";},DEF_UNIT:"px",DEF_PARENT_NODE:null,CONTENT_TEMPLATE:o,BOUNDING_TEMPLATE:o,_guid:function(){return b.guid();},_validTabIndex:function(L){return(g.isNumber(L)||g.isNull(L));},_bindAttrUI:function(Q){var R,L=Q.length;for(R=0;R<L;R++){this.after(Q[R]+z,this._setAttrUI);}},_syncAttrUI:function(R){var S,Q=R.length,L;for(S=0;S<Q;S++){L=R[S];this[E+s(L)](this.get(L));}},_setAttrUI:function(L){this[E+s(L.attrName)](L.newVal,L.src);},_strSetter:function(L){return b.merge(this.get(a),L);},getString:function(L){return this.get(a)[L];},getStrings:function(){return this.get(a);},_UI_ATTRS:{BIND:f,SYNC:f}});b.Widget=c;},"@VERSION@",{requires:["attribute","event-focus","base-base","base-pluginhost","node-base","node-style","classnamemanager"],skinnable:true});
