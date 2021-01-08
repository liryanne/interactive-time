goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_44431 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_44431(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_44435 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_44435(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__43755 = coll;
var G__43756 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__43755,G__43756) : shadow.dom.lazy_native_coll_seq.call(null,G__43755,G__43756));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__43775 = arguments.length;
switch (G__43775) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__43786 = arguments.length;
switch (G__43786) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__43794 = arguments.length;
switch (G__43794) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__43802 = arguments.length;
switch (G__43802) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__43813 = arguments.length;
switch (G__43813) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__43819 = arguments.length;
switch (G__43819) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e43826){if((e43826 instanceof Object)){
var e = e43826;
return console.log("didnt support attachEvent",el,e);
} else {
throw e43826;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__43833 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__43834 = null;
var count__43835 = (0);
var i__43836 = (0);
while(true){
if((i__43836 < count__43835)){
var el = chunk__43834.cljs$core$IIndexed$_nth$arity$2(null,i__43836);
var handler_44471__$1 = ((function (seq__43833,chunk__43834,count__43835,i__43836,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43833,chunk__43834,count__43835,i__43836,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44471__$1);


var G__44474 = seq__43833;
var G__44475 = chunk__43834;
var G__44476 = count__43835;
var G__44477 = (i__43836 + (1));
seq__43833 = G__44474;
chunk__43834 = G__44475;
count__43835 = G__44476;
i__43836 = G__44477;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43833);
if(temp__5735__auto__){
var seq__43833__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43833__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43833__$1);
var G__44480 = cljs.core.chunk_rest(seq__43833__$1);
var G__44481 = c__4556__auto__;
var G__44482 = cljs.core.count(c__4556__auto__);
var G__44483 = (0);
seq__43833 = G__44480;
chunk__43834 = G__44481;
count__43835 = G__44482;
i__43836 = G__44483;
continue;
} else {
var el = cljs.core.first(seq__43833__$1);
var handler_44485__$1 = ((function (seq__43833,chunk__43834,count__43835,i__43836,el,seq__43833__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43833,chunk__43834,count__43835,i__43836,el,seq__43833__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44485__$1);


var G__44489 = cljs.core.next(seq__43833__$1);
var G__44490 = null;
var G__44491 = (0);
var G__44492 = (0);
seq__43833 = G__44489;
chunk__43834 = G__44490;
count__43835 = G__44491;
i__43836 = G__44492;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__43853 = arguments.length;
switch (G__43853) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__43857 = cljs.core.seq(events);
var chunk__43858 = null;
var count__43859 = (0);
var i__43860 = (0);
while(true){
if((i__43860 < count__43859)){
var vec__43869 = chunk__43858.cljs$core$IIndexed$_nth$arity$2(null,i__43860);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43869,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43869,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44500 = seq__43857;
var G__44501 = chunk__43858;
var G__44502 = count__43859;
var G__44503 = (i__43860 + (1));
seq__43857 = G__44500;
chunk__43858 = G__44501;
count__43859 = G__44502;
i__43860 = G__44503;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43857);
if(temp__5735__auto__){
var seq__43857__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43857__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43857__$1);
var G__44504 = cljs.core.chunk_rest(seq__43857__$1);
var G__44505 = c__4556__auto__;
var G__44506 = cljs.core.count(c__4556__auto__);
var G__44507 = (0);
seq__43857 = G__44504;
chunk__43858 = G__44505;
count__43859 = G__44506;
i__43860 = G__44507;
continue;
} else {
var vec__43875 = cljs.core.first(seq__43857__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43875,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44511 = cljs.core.next(seq__43857__$1);
var G__44512 = null;
var G__44513 = (0);
var G__44514 = (0);
seq__43857 = G__44511;
chunk__43858 = G__44512;
count__43859 = G__44513;
i__43860 = G__44514;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__43882 = cljs.core.seq(styles);
var chunk__43883 = null;
var count__43884 = (0);
var i__43885 = (0);
while(true){
if((i__43885 < count__43884)){
var vec__43897 = chunk__43883.cljs$core$IIndexed$_nth$arity$2(null,i__43885);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43897,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__44515 = seq__43882;
var G__44516 = chunk__43883;
var G__44517 = count__43884;
var G__44518 = (i__43885 + (1));
seq__43882 = G__44515;
chunk__43883 = G__44516;
count__43884 = G__44517;
i__43885 = G__44518;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43882);
if(temp__5735__auto__){
var seq__43882__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43882__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43882__$1);
var G__44519 = cljs.core.chunk_rest(seq__43882__$1);
var G__44520 = c__4556__auto__;
var G__44521 = cljs.core.count(c__4556__auto__);
var G__44522 = (0);
seq__43882 = G__44519;
chunk__43883 = G__44520;
count__43884 = G__44521;
i__43885 = G__44522;
continue;
} else {
var vec__43902 = cljs.core.first(seq__43882__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43902,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__44523 = cljs.core.next(seq__43882__$1);
var G__44524 = null;
var G__44525 = (0);
var G__44526 = (0);
seq__43882 = G__44523;
chunk__43883 = G__44524;
count__43884 = G__44525;
i__43885 = G__44526;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__43908_44527 = key;
var G__43908_44528__$1 = (((G__43908_44527 instanceof cljs.core.Keyword))?G__43908_44527.fqn:null);
switch (G__43908_44528__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_44532 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_44532,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_44532,"aria-");
}
})())){
el.setAttribute(ks_44532,value);
} else {
(el[ks_44532] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__43927){
var map__43929 = p__43927;
var map__43929__$1 = (((((!((map__43929 == null))))?(((((map__43929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43929):map__43929);
var props = map__43929__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43929__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__43934 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43934,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43934,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43934,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__43938 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__43938,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__43938;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__43945 = arguments.length;
switch (G__43945) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__43952){
var vec__43953 = p__43952;
var seq__43954 = cljs.core.seq(vec__43953);
var first__43955 = cljs.core.first(seq__43954);
var seq__43954__$1 = cljs.core.next(seq__43954);
var nn = first__43955;
var first__43955__$1 = cljs.core.first(seq__43954__$1);
var seq__43954__$2 = cljs.core.next(seq__43954__$1);
var np = first__43955__$1;
var nc = seq__43954__$2;
var node = vec__43953;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43957 = nn;
var G__43958 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43957,G__43958) : create_fn.call(null,G__43957,G__43958));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43960 = nn;
var G__43961 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43960,G__43961) : create_fn.call(null,G__43960,G__43961));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__43963 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43963,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43963,(1),null);
var seq__43967_44538 = cljs.core.seq(node_children);
var chunk__43968_44539 = null;
var count__43969_44540 = (0);
var i__43970_44541 = (0);
while(true){
if((i__43970_44541 < count__43969_44540)){
var child_struct_44542 = chunk__43968_44539.cljs$core$IIndexed$_nth$arity$2(null,i__43970_44541);
var children_44543 = shadow.dom.dom_node(child_struct_44542);
if(cljs.core.seq_QMARK_(children_44543)){
var seq__43993_44544 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44543));
var chunk__43995_44545 = null;
var count__43996_44546 = (0);
var i__43997_44547 = (0);
while(true){
if((i__43997_44547 < count__43996_44546)){
var child_44549 = chunk__43995_44545.cljs$core$IIndexed$_nth$arity$2(null,i__43997_44547);
if(cljs.core.truth_(child_44549)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44549);


var G__44550 = seq__43993_44544;
var G__44551 = chunk__43995_44545;
var G__44552 = count__43996_44546;
var G__44553 = (i__43997_44547 + (1));
seq__43993_44544 = G__44550;
chunk__43995_44545 = G__44551;
count__43996_44546 = G__44552;
i__43997_44547 = G__44553;
continue;
} else {
var G__44554 = seq__43993_44544;
var G__44555 = chunk__43995_44545;
var G__44556 = count__43996_44546;
var G__44557 = (i__43997_44547 + (1));
seq__43993_44544 = G__44554;
chunk__43995_44545 = G__44555;
count__43996_44546 = G__44556;
i__43997_44547 = G__44557;
continue;
}
} else {
var temp__5735__auto___44558 = cljs.core.seq(seq__43993_44544);
if(temp__5735__auto___44558){
var seq__43993_44559__$1 = temp__5735__auto___44558;
if(cljs.core.chunked_seq_QMARK_(seq__43993_44559__$1)){
var c__4556__auto___44560 = cljs.core.chunk_first(seq__43993_44559__$1);
var G__44561 = cljs.core.chunk_rest(seq__43993_44559__$1);
var G__44562 = c__4556__auto___44560;
var G__44563 = cljs.core.count(c__4556__auto___44560);
var G__44564 = (0);
seq__43993_44544 = G__44561;
chunk__43995_44545 = G__44562;
count__43996_44546 = G__44563;
i__43997_44547 = G__44564;
continue;
} else {
var child_44565 = cljs.core.first(seq__43993_44559__$1);
if(cljs.core.truth_(child_44565)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44565);


var G__44566 = cljs.core.next(seq__43993_44559__$1);
var G__44567 = null;
var G__44568 = (0);
var G__44569 = (0);
seq__43993_44544 = G__44566;
chunk__43995_44545 = G__44567;
count__43996_44546 = G__44568;
i__43997_44547 = G__44569;
continue;
} else {
var G__44571 = cljs.core.next(seq__43993_44559__$1);
var G__44572 = null;
var G__44573 = (0);
var G__44574 = (0);
seq__43993_44544 = G__44571;
chunk__43995_44545 = G__44572;
count__43996_44546 = G__44573;
i__43997_44547 = G__44574;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44543);
}


var G__44576 = seq__43967_44538;
var G__44577 = chunk__43968_44539;
var G__44578 = count__43969_44540;
var G__44579 = (i__43970_44541 + (1));
seq__43967_44538 = G__44576;
chunk__43968_44539 = G__44577;
count__43969_44540 = G__44578;
i__43970_44541 = G__44579;
continue;
} else {
var temp__5735__auto___44580 = cljs.core.seq(seq__43967_44538);
if(temp__5735__auto___44580){
var seq__43967_44581__$1 = temp__5735__auto___44580;
if(cljs.core.chunked_seq_QMARK_(seq__43967_44581__$1)){
var c__4556__auto___44582 = cljs.core.chunk_first(seq__43967_44581__$1);
var G__44583 = cljs.core.chunk_rest(seq__43967_44581__$1);
var G__44584 = c__4556__auto___44582;
var G__44585 = cljs.core.count(c__4556__auto___44582);
var G__44586 = (0);
seq__43967_44538 = G__44583;
chunk__43968_44539 = G__44584;
count__43969_44540 = G__44585;
i__43970_44541 = G__44586;
continue;
} else {
var child_struct_44587 = cljs.core.first(seq__43967_44581__$1);
var children_44588 = shadow.dom.dom_node(child_struct_44587);
if(cljs.core.seq_QMARK_(children_44588)){
var seq__44004_44589 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44588));
var chunk__44006_44590 = null;
var count__44007_44591 = (0);
var i__44008_44592 = (0);
while(true){
if((i__44008_44592 < count__44007_44591)){
var child_44594 = chunk__44006_44590.cljs$core$IIndexed$_nth$arity$2(null,i__44008_44592);
if(cljs.core.truth_(child_44594)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44594);


var G__44595 = seq__44004_44589;
var G__44596 = chunk__44006_44590;
var G__44597 = count__44007_44591;
var G__44598 = (i__44008_44592 + (1));
seq__44004_44589 = G__44595;
chunk__44006_44590 = G__44596;
count__44007_44591 = G__44597;
i__44008_44592 = G__44598;
continue;
} else {
var G__44599 = seq__44004_44589;
var G__44600 = chunk__44006_44590;
var G__44601 = count__44007_44591;
var G__44602 = (i__44008_44592 + (1));
seq__44004_44589 = G__44599;
chunk__44006_44590 = G__44600;
count__44007_44591 = G__44601;
i__44008_44592 = G__44602;
continue;
}
} else {
var temp__5735__auto___44603__$1 = cljs.core.seq(seq__44004_44589);
if(temp__5735__auto___44603__$1){
var seq__44004_44604__$1 = temp__5735__auto___44603__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44004_44604__$1)){
var c__4556__auto___44605 = cljs.core.chunk_first(seq__44004_44604__$1);
var G__44606 = cljs.core.chunk_rest(seq__44004_44604__$1);
var G__44607 = c__4556__auto___44605;
var G__44608 = cljs.core.count(c__4556__auto___44605);
var G__44609 = (0);
seq__44004_44589 = G__44606;
chunk__44006_44590 = G__44607;
count__44007_44591 = G__44608;
i__44008_44592 = G__44609;
continue;
} else {
var child_44610 = cljs.core.first(seq__44004_44604__$1);
if(cljs.core.truth_(child_44610)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44610);


var G__44611 = cljs.core.next(seq__44004_44604__$1);
var G__44612 = null;
var G__44613 = (0);
var G__44614 = (0);
seq__44004_44589 = G__44611;
chunk__44006_44590 = G__44612;
count__44007_44591 = G__44613;
i__44008_44592 = G__44614;
continue;
} else {
var G__44615 = cljs.core.next(seq__44004_44604__$1);
var G__44616 = null;
var G__44617 = (0);
var G__44618 = (0);
seq__44004_44589 = G__44615;
chunk__44006_44590 = G__44616;
count__44007_44591 = G__44617;
i__44008_44592 = G__44618;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44588);
}


var G__44619 = cljs.core.next(seq__43967_44581__$1);
var G__44620 = null;
var G__44621 = (0);
var G__44622 = (0);
seq__43967_44538 = G__44619;
chunk__43968_44539 = G__44620;
count__43969_44540 = G__44621;
i__43970_44541 = G__44622;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__44033 = cljs.core.seq(node);
var chunk__44035 = null;
var count__44036 = (0);
var i__44037 = (0);
while(true){
if((i__44037 < count__44036)){
var n = chunk__44035.cljs$core$IIndexed$_nth$arity$2(null,i__44037);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__44628 = seq__44033;
var G__44629 = chunk__44035;
var G__44630 = count__44036;
var G__44631 = (i__44037 + (1));
seq__44033 = G__44628;
chunk__44035 = G__44629;
count__44036 = G__44630;
i__44037 = G__44631;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44033);
if(temp__5735__auto__){
var seq__44033__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44033__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44033__$1);
var G__44633 = cljs.core.chunk_rest(seq__44033__$1);
var G__44634 = c__4556__auto__;
var G__44635 = cljs.core.count(c__4556__auto__);
var G__44636 = (0);
seq__44033 = G__44633;
chunk__44035 = G__44634;
count__44036 = G__44635;
i__44037 = G__44636;
continue;
} else {
var n = cljs.core.first(seq__44033__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__44637 = cljs.core.next(seq__44033__$1);
var G__44638 = null;
var G__44639 = (0);
var G__44640 = (0);
seq__44033 = G__44637;
chunk__44035 = G__44638;
count__44036 = G__44639;
i__44037 = G__44640;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__44063 = arguments.length;
switch (G__44063) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__44072 = arguments.length;
switch (G__44072) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__44088 = arguments.length;
switch (G__44088) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44651 = arguments.length;
var i__4737__auto___44652 = (0);
while(true){
if((i__4737__auto___44652 < len__4736__auto___44651)){
args__4742__auto__.push((arguments[i__4737__auto___44652]));

var G__44653 = (i__4737__auto___44652 + (1));
i__4737__auto___44652 = G__44653;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__44097_44654 = cljs.core.seq(nodes);
var chunk__44100_44655 = null;
var count__44101_44656 = (0);
var i__44102_44657 = (0);
while(true){
if((i__44102_44657 < count__44101_44656)){
var node_44658 = chunk__44100_44655.cljs$core$IIndexed$_nth$arity$2(null,i__44102_44657);
fragment.appendChild(shadow.dom._to_dom(node_44658));


var G__44659 = seq__44097_44654;
var G__44660 = chunk__44100_44655;
var G__44661 = count__44101_44656;
var G__44662 = (i__44102_44657 + (1));
seq__44097_44654 = G__44659;
chunk__44100_44655 = G__44660;
count__44101_44656 = G__44661;
i__44102_44657 = G__44662;
continue;
} else {
var temp__5735__auto___44663 = cljs.core.seq(seq__44097_44654);
if(temp__5735__auto___44663){
var seq__44097_44664__$1 = temp__5735__auto___44663;
if(cljs.core.chunked_seq_QMARK_(seq__44097_44664__$1)){
var c__4556__auto___44665 = cljs.core.chunk_first(seq__44097_44664__$1);
var G__44666 = cljs.core.chunk_rest(seq__44097_44664__$1);
var G__44667 = c__4556__auto___44665;
var G__44668 = cljs.core.count(c__4556__auto___44665);
var G__44669 = (0);
seq__44097_44654 = G__44666;
chunk__44100_44655 = G__44667;
count__44101_44656 = G__44668;
i__44102_44657 = G__44669;
continue;
} else {
var node_44670 = cljs.core.first(seq__44097_44664__$1);
fragment.appendChild(shadow.dom._to_dom(node_44670));


var G__44671 = cljs.core.next(seq__44097_44664__$1);
var G__44672 = null;
var G__44673 = (0);
var G__44674 = (0);
seq__44097_44654 = G__44671;
chunk__44100_44655 = G__44672;
count__44101_44656 = G__44673;
i__44102_44657 = G__44674;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44095){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44095));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__44107_44679 = cljs.core.seq(scripts);
var chunk__44108_44680 = null;
var count__44109_44681 = (0);
var i__44110_44682 = (0);
while(true){
if((i__44110_44682 < count__44109_44681)){
var vec__44117_44683 = chunk__44108_44680.cljs$core$IIndexed$_nth$arity$2(null,i__44110_44682);
var script_tag_44684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44117_44683,(0),null);
var script_body_44685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44117_44683,(1),null);
eval(script_body_44685);


var G__44686 = seq__44107_44679;
var G__44687 = chunk__44108_44680;
var G__44688 = count__44109_44681;
var G__44689 = (i__44110_44682 + (1));
seq__44107_44679 = G__44686;
chunk__44108_44680 = G__44687;
count__44109_44681 = G__44688;
i__44110_44682 = G__44689;
continue;
} else {
var temp__5735__auto___44690 = cljs.core.seq(seq__44107_44679);
if(temp__5735__auto___44690){
var seq__44107_44691__$1 = temp__5735__auto___44690;
if(cljs.core.chunked_seq_QMARK_(seq__44107_44691__$1)){
var c__4556__auto___44692 = cljs.core.chunk_first(seq__44107_44691__$1);
var G__44693 = cljs.core.chunk_rest(seq__44107_44691__$1);
var G__44694 = c__4556__auto___44692;
var G__44695 = cljs.core.count(c__4556__auto___44692);
var G__44696 = (0);
seq__44107_44679 = G__44693;
chunk__44108_44680 = G__44694;
count__44109_44681 = G__44695;
i__44110_44682 = G__44696;
continue;
} else {
var vec__44120_44697 = cljs.core.first(seq__44107_44691__$1);
var script_tag_44698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44120_44697,(0),null);
var script_body_44699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44120_44697,(1),null);
eval(script_body_44699);


var G__44700 = cljs.core.next(seq__44107_44691__$1);
var G__44701 = null;
var G__44702 = (0);
var G__44703 = (0);
seq__44107_44679 = G__44700;
chunk__44108_44680 = G__44701;
count__44109_44681 = G__44702;
i__44110_44682 = G__44703;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__44123){
var vec__44124 = p__44123;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44124,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44124,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__44129 = arguments.length;
switch (G__44129) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__44144 = cljs.core.seq(style_keys);
var chunk__44145 = null;
var count__44146 = (0);
var i__44147 = (0);
while(true){
if((i__44147 < count__44146)){
var it = chunk__44145.cljs$core$IIndexed$_nth$arity$2(null,i__44147);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__44711 = seq__44144;
var G__44712 = chunk__44145;
var G__44713 = count__44146;
var G__44714 = (i__44147 + (1));
seq__44144 = G__44711;
chunk__44145 = G__44712;
count__44146 = G__44713;
i__44147 = G__44714;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44144);
if(temp__5735__auto__){
var seq__44144__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44144__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44144__$1);
var G__44715 = cljs.core.chunk_rest(seq__44144__$1);
var G__44716 = c__4556__auto__;
var G__44717 = cljs.core.count(c__4556__auto__);
var G__44718 = (0);
seq__44144 = G__44715;
chunk__44145 = G__44716;
count__44146 = G__44717;
i__44147 = G__44718;
continue;
} else {
var it = cljs.core.first(seq__44144__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__44719 = cljs.core.next(seq__44144__$1);
var G__44720 = null;
var G__44721 = (0);
var G__44722 = (0);
seq__44144 = G__44719;
chunk__44145 = G__44720;
count__44146 = G__44721;
i__44147 = G__44722;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k44156,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__44165 = k44156;
var G__44165__$1 = (((G__44165 instanceof cljs.core.Keyword))?G__44165.fqn:null);
switch (G__44165__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44156,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__44169){
var vec__44171 = p__44169;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44171,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44171,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44155){
var self__ = this;
var G__44155__$1 = this;
return (new cljs.core.RecordIter((0),G__44155__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44157,other44158){
var self__ = this;
var this44157__$1 = this;
return (((!((other44158 == null)))) && ((this44157__$1.constructor === other44158.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44157__$1.x,other44158.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44157__$1.y,other44158.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44157__$1.__extmap,other44158.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__44155){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__44189 = cljs.core.keyword_identical_QMARK_;
var expr__44190 = k__4388__auto__;
if(cljs.core.truth_((pred__44189.cljs$core$IFn$_invoke$arity$2 ? pred__44189.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__44190) : pred__44189.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__44190)))){
return (new shadow.dom.Coordinate(G__44155,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44189.cljs$core$IFn$_invoke$arity$2 ? pred__44189.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__44190) : pred__44189.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__44190)))){
return (new shadow.dom.Coordinate(self__.x,G__44155,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__44155),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__44155){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__44155,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__44160){
var extmap__4419__auto__ = (function (){var G__44197 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44160,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__44160)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44197);
} else {
return G__44197;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__44160),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__44160),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k44203,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__44208 = k44203;
var G__44208__$1 = (((G__44208 instanceof cljs.core.Keyword))?G__44208.fqn:null);
switch (G__44208__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44203,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__44209){
var vec__44210 = p__44209;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44210,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44210,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44202){
var self__ = this;
var G__44202__$1 = this;
return (new cljs.core.RecordIter((0),G__44202__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44204,other44205){
var self__ = this;
var this44204__$1 = this;
return (((!((other44205 == null)))) && ((this44204__$1.constructor === other44205.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44204__$1.w,other44205.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44204__$1.h,other44205.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44204__$1.__extmap,other44205.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__44202){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__44226 = cljs.core.keyword_identical_QMARK_;
var expr__44227 = k__4388__auto__;
if(cljs.core.truth_((pred__44226.cljs$core$IFn$_invoke$arity$2 ? pred__44226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__44227) : pred__44226.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__44227)))){
return (new shadow.dom.Size(G__44202,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44226.cljs$core$IFn$_invoke$arity$2 ? pred__44226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__44227) : pred__44226.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__44227)))){
return (new shadow.dom.Size(self__.w,G__44202,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__44202),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__44202){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__44202,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__44206){
var extmap__4419__auto__ = (function (){var G__44238 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44206,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__44206)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44238);
} else {
return G__44238;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__44206),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44206),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__44748 = (i + (1));
var G__44749 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__44748;
ret = G__44749;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44259){
var vec__44260 = p__44259;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44260,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__44270 = arguments.length;
switch (G__44270) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__44755 = ps;
var G__44756 = (i + (1));
el__$1 = G__44755;
i = G__44756;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__44294 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44294,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44294,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44294,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__44297_44759 = cljs.core.seq(props);
var chunk__44298_44760 = null;
var count__44299_44761 = (0);
var i__44300_44762 = (0);
while(true){
if((i__44300_44762 < count__44299_44761)){
var vec__44312_44763 = chunk__44298_44760.cljs$core$IIndexed$_nth$arity$2(null,i__44300_44762);
var k_44764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44312_44763,(0),null);
var v_44765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44312_44763,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_44764);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_44764),v_44765);


var G__44766 = seq__44297_44759;
var G__44767 = chunk__44298_44760;
var G__44768 = count__44299_44761;
var G__44769 = (i__44300_44762 + (1));
seq__44297_44759 = G__44766;
chunk__44298_44760 = G__44767;
count__44299_44761 = G__44768;
i__44300_44762 = G__44769;
continue;
} else {
var temp__5735__auto___44770 = cljs.core.seq(seq__44297_44759);
if(temp__5735__auto___44770){
var seq__44297_44771__$1 = temp__5735__auto___44770;
if(cljs.core.chunked_seq_QMARK_(seq__44297_44771__$1)){
var c__4556__auto___44772 = cljs.core.chunk_first(seq__44297_44771__$1);
var G__44773 = cljs.core.chunk_rest(seq__44297_44771__$1);
var G__44774 = c__4556__auto___44772;
var G__44775 = cljs.core.count(c__4556__auto___44772);
var G__44776 = (0);
seq__44297_44759 = G__44773;
chunk__44298_44760 = G__44774;
count__44299_44761 = G__44775;
i__44300_44762 = G__44776;
continue;
} else {
var vec__44318_44778 = cljs.core.first(seq__44297_44771__$1);
var k_44779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44318_44778,(0),null);
var v_44780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44318_44778,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_44779);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_44779),v_44780);


var G__44781 = cljs.core.next(seq__44297_44771__$1);
var G__44782 = null;
var G__44783 = (0);
var G__44784 = (0);
seq__44297_44759 = G__44781;
chunk__44298_44760 = G__44782;
count__44299_44761 = G__44783;
i__44300_44762 = G__44784;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__44329 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44329,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44329,(1),null);
var seq__44333_44785 = cljs.core.seq(node_children);
var chunk__44335_44786 = null;
var count__44336_44787 = (0);
var i__44337_44788 = (0);
while(true){
if((i__44337_44788 < count__44336_44787)){
var child_struct_44789 = chunk__44335_44786.cljs$core$IIndexed$_nth$arity$2(null,i__44337_44788);
if((!((child_struct_44789 == null)))){
if(typeof child_struct_44789 === 'string'){
var text_44790 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_44790),child_struct_44789].join(''));
} else {
var children_44791 = shadow.dom.svg_node(child_struct_44789);
if(cljs.core.seq_QMARK_(children_44791)){
var seq__44354_44792 = cljs.core.seq(children_44791);
var chunk__44356_44793 = null;
var count__44357_44794 = (0);
var i__44358_44795 = (0);
while(true){
if((i__44358_44795 < count__44357_44794)){
var child_44796 = chunk__44356_44793.cljs$core$IIndexed$_nth$arity$2(null,i__44358_44795);
if(cljs.core.truth_(child_44796)){
node.appendChild(child_44796);


var G__44797 = seq__44354_44792;
var G__44798 = chunk__44356_44793;
var G__44799 = count__44357_44794;
var G__44800 = (i__44358_44795 + (1));
seq__44354_44792 = G__44797;
chunk__44356_44793 = G__44798;
count__44357_44794 = G__44799;
i__44358_44795 = G__44800;
continue;
} else {
var G__44801 = seq__44354_44792;
var G__44802 = chunk__44356_44793;
var G__44803 = count__44357_44794;
var G__44804 = (i__44358_44795 + (1));
seq__44354_44792 = G__44801;
chunk__44356_44793 = G__44802;
count__44357_44794 = G__44803;
i__44358_44795 = G__44804;
continue;
}
} else {
var temp__5735__auto___44805 = cljs.core.seq(seq__44354_44792);
if(temp__5735__auto___44805){
var seq__44354_44806__$1 = temp__5735__auto___44805;
if(cljs.core.chunked_seq_QMARK_(seq__44354_44806__$1)){
var c__4556__auto___44807 = cljs.core.chunk_first(seq__44354_44806__$1);
var G__44808 = cljs.core.chunk_rest(seq__44354_44806__$1);
var G__44809 = c__4556__auto___44807;
var G__44810 = cljs.core.count(c__4556__auto___44807);
var G__44811 = (0);
seq__44354_44792 = G__44808;
chunk__44356_44793 = G__44809;
count__44357_44794 = G__44810;
i__44358_44795 = G__44811;
continue;
} else {
var child_44812 = cljs.core.first(seq__44354_44806__$1);
if(cljs.core.truth_(child_44812)){
node.appendChild(child_44812);


var G__44813 = cljs.core.next(seq__44354_44806__$1);
var G__44814 = null;
var G__44815 = (0);
var G__44816 = (0);
seq__44354_44792 = G__44813;
chunk__44356_44793 = G__44814;
count__44357_44794 = G__44815;
i__44358_44795 = G__44816;
continue;
} else {
var G__44817 = cljs.core.next(seq__44354_44806__$1);
var G__44818 = null;
var G__44819 = (0);
var G__44820 = (0);
seq__44354_44792 = G__44817;
chunk__44356_44793 = G__44818;
count__44357_44794 = G__44819;
i__44358_44795 = G__44820;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_44791);
}
}


var G__44821 = seq__44333_44785;
var G__44822 = chunk__44335_44786;
var G__44823 = count__44336_44787;
var G__44824 = (i__44337_44788 + (1));
seq__44333_44785 = G__44821;
chunk__44335_44786 = G__44822;
count__44336_44787 = G__44823;
i__44337_44788 = G__44824;
continue;
} else {
var G__44825 = seq__44333_44785;
var G__44826 = chunk__44335_44786;
var G__44827 = count__44336_44787;
var G__44828 = (i__44337_44788 + (1));
seq__44333_44785 = G__44825;
chunk__44335_44786 = G__44826;
count__44336_44787 = G__44827;
i__44337_44788 = G__44828;
continue;
}
} else {
var temp__5735__auto___44829 = cljs.core.seq(seq__44333_44785);
if(temp__5735__auto___44829){
var seq__44333_44830__$1 = temp__5735__auto___44829;
if(cljs.core.chunked_seq_QMARK_(seq__44333_44830__$1)){
var c__4556__auto___44831 = cljs.core.chunk_first(seq__44333_44830__$1);
var G__44832 = cljs.core.chunk_rest(seq__44333_44830__$1);
var G__44833 = c__4556__auto___44831;
var G__44834 = cljs.core.count(c__4556__auto___44831);
var G__44835 = (0);
seq__44333_44785 = G__44832;
chunk__44335_44786 = G__44833;
count__44336_44787 = G__44834;
i__44337_44788 = G__44835;
continue;
} else {
var child_struct_44836 = cljs.core.first(seq__44333_44830__$1);
if((!((child_struct_44836 == null)))){
if(typeof child_struct_44836 === 'string'){
var text_44837 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_44837),child_struct_44836].join(''));
} else {
var children_44838 = shadow.dom.svg_node(child_struct_44836);
if(cljs.core.seq_QMARK_(children_44838)){
var seq__44372_44839 = cljs.core.seq(children_44838);
var chunk__44374_44840 = null;
var count__44375_44841 = (0);
var i__44376_44842 = (0);
while(true){
if((i__44376_44842 < count__44375_44841)){
var child_44844 = chunk__44374_44840.cljs$core$IIndexed$_nth$arity$2(null,i__44376_44842);
if(cljs.core.truth_(child_44844)){
node.appendChild(child_44844);


var G__44846 = seq__44372_44839;
var G__44847 = chunk__44374_44840;
var G__44848 = count__44375_44841;
var G__44849 = (i__44376_44842 + (1));
seq__44372_44839 = G__44846;
chunk__44374_44840 = G__44847;
count__44375_44841 = G__44848;
i__44376_44842 = G__44849;
continue;
} else {
var G__44850 = seq__44372_44839;
var G__44851 = chunk__44374_44840;
var G__44852 = count__44375_44841;
var G__44853 = (i__44376_44842 + (1));
seq__44372_44839 = G__44850;
chunk__44374_44840 = G__44851;
count__44375_44841 = G__44852;
i__44376_44842 = G__44853;
continue;
}
} else {
var temp__5735__auto___44854__$1 = cljs.core.seq(seq__44372_44839);
if(temp__5735__auto___44854__$1){
var seq__44372_44855__$1 = temp__5735__auto___44854__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44372_44855__$1)){
var c__4556__auto___44856 = cljs.core.chunk_first(seq__44372_44855__$1);
var G__44857 = cljs.core.chunk_rest(seq__44372_44855__$1);
var G__44858 = c__4556__auto___44856;
var G__44859 = cljs.core.count(c__4556__auto___44856);
var G__44860 = (0);
seq__44372_44839 = G__44857;
chunk__44374_44840 = G__44858;
count__44375_44841 = G__44859;
i__44376_44842 = G__44860;
continue;
} else {
var child_44861 = cljs.core.first(seq__44372_44855__$1);
if(cljs.core.truth_(child_44861)){
node.appendChild(child_44861);


var G__44862 = cljs.core.next(seq__44372_44855__$1);
var G__44863 = null;
var G__44864 = (0);
var G__44865 = (0);
seq__44372_44839 = G__44862;
chunk__44374_44840 = G__44863;
count__44375_44841 = G__44864;
i__44376_44842 = G__44865;
continue;
} else {
var G__44866 = cljs.core.next(seq__44372_44855__$1);
var G__44867 = null;
var G__44868 = (0);
var G__44869 = (0);
seq__44372_44839 = G__44866;
chunk__44374_44840 = G__44867;
count__44375_44841 = G__44868;
i__44376_44842 = G__44869;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_44838);
}
}


var G__44870 = cljs.core.next(seq__44333_44830__$1);
var G__44871 = null;
var G__44872 = (0);
var G__44873 = (0);
seq__44333_44785 = G__44870;
chunk__44335_44786 = G__44871;
count__44336_44787 = G__44872;
i__44337_44788 = G__44873;
continue;
} else {
var G__44875 = cljs.core.next(seq__44333_44830__$1);
var G__44876 = null;
var G__44877 = (0);
var G__44878 = (0);
seq__44333_44785 = G__44875;
chunk__44335_44786 = G__44876;
count__44336_44787 = G__44877;
i__44337_44788 = G__44878;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44884 = arguments.length;
var i__4737__auto___44885 = (0);
while(true){
if((i__4737__auto___44885 < len__4736__auto___44884)){
args__4742__auto__.push((arguments[i__4737__auto___44885]));

var G__44886 = (i__4737__auto___44885 + (1));
i__4737__auto___44885 = G__44886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq44391){
var G__44392 = cljs.core.first(seq44391);
var seq44391__$1 = cljs.core.next(seq44391);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44392,seq44391__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__44397 = arguments.length;
switch (G__44397) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__41565__auto___44893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_44409){
var state_val_44410 = (state_44409[(1)]);
if((state_val_44410 === (1))){
var state_44409__$1 = state_44409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44409__$1,(2),once_or_cleanup);
} else {
if((state_val_44410 === (2))){
var inst_44405 = (state_44409[(2)]);
var inst_44406 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_44409__$1 = (function (){var statearr_44414 = state_44409;
(statearr_44414[(7)] = inst_44405);

return statearr_44414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44409__$1,inst_44406);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41427__auto__ = null;
var shadow$dom$state_machine__41427__auto____0 = (function (){
var statearr_44415 = [null,null,null,null,null,null,null,null];
(statearr_44415[(0)] = shadow$dom$state_machine__41427__auto__);

(statearr_44415[(1)] = (1));

return statearr_44415;
});
var shadow$dom$state_machine__41427__auto____1 = (function (state_44409){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_44409);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e44416){var ex__41430__auto__ = e44416;
var statearr_44417_44894 = state_44409;
(statearr_44417_44894[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_44409[(4)]))){
var statearr_44418_44895 = state_44409;
(statearr_44418_44895[(1)] = cljs.core.first((state_44409[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44896 = state_44409;
state_44409 = G__44896;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
shadow$dom$state_machine__41427__auto__ = function(state_44409){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41427__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41427__auto____1.call(this,state_44409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41427__auto____0;
shadow$dom$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41427__auto____1;
return shadow$dom$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_44421 = f__41566__auto__();
(statearr_44421[(6)] = c__41565__auto___44893);

return statearr_44421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
