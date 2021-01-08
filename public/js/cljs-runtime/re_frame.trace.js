goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37957){
var map__37958 = p__37957;
var map__37958__$1 = (((((!((map__37958 == null))))?(((((map__37958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37958):map__37958);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__37967_38003 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__37968_38004 = null;
var count__37969_38005 = (0);
var i__37970_38006 = (0);
while(true){
if((i__37970_38006 < count__37969_38005)){
var vec__37981_38007 = chunk__37968_38004.cljs$core$IIndexed$_nth$arity$2(null,i__37970_38006);
var k_38008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37981_38007,(0),null);
var cb_38009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37981_38007,(1),null);
try{var G__37989_38010 = cljs.core.deref(re_frame.trace.traces);
(cb_38009.cljs$core$IFn$_invoke$arity$1 ? cb_38009.cljs$core$IFn$_invoke$arity$1(G__37989_38010) : cb_38009.call(null,G__37989_38010));
}catch (e37984){var e_38011 = e37984;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38008,"while storing",cljs.core.deref(re_frame.trace.traces),e_38011], 0));
}

var G__38012 = seq__37967_38003;
var G__38013 = chunk__37968_38004;
var G__38014 = count__37969_38005;
var G__38015 = (i__37970_38006 + (1));
seq__37967_38003 = G__38012;
chunk__37968_38004 = G__38013;
count__37969_38005 = G__38014;
i__37970_38006 = G__38015;
continue;
} else {
var temp__5735__auto___38016 = cljs.core.seq(seq__37967_38003);
if(temp__5735__auto___38016){
var seq__37967_38017__$1 = temp__5735__auto___38016;
if(cljs.core.chunked_seq_QMARK_(seq__37967_38017__$1)){
var c__4556__auto___38018 = cljs.core.chunk_first(seq__37967_38017__$1);
var G__38019 = cljs.core.chunk_rest(seq__37967_38017__$1);
var G__38020 = c__4556__auto___38018;
var G__38021 = cljs.core.count(c__4556__auto___38018);
var G__38022 = (0);
seq__37967_38003 = G__38019;
chunk__37968_38004 = G__38020;
count__37969_38005 = G__38021;
i__37970_38006 = G__38022;
continue;
} else {
var vec__37990_38023 = cljs.core.first(seq__37967_38017__$1);
var k_38024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990_38023,(0),null);
var cb_38025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990_38023,(1),null);
try{var G__37994_38026 = cljs.core.deref(re_frame.trace.traces);
(cb_38025.cljs$core$IFn$_invoke$arity$1 ? cb_38025.cljs$core$IFn$_invoke$arity$1(G__37994_38026) : cb_38025.call(null,G__37994_38026));
}catch (e37993){var e_38027 = e37993;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38024,"while storing",cljs.core.deref(re_frame.trace.traces),e_38027], 0));
}

var G__38028 = cljs.core.next(seq__37967_38017__$1);
var G__38029 = null;
var G__38030 = (0);
var G__38031 = (0);
seq__37967_38003 = G__38028;
chunk__37968_38004 = G__38029;
count__37969_38005 = G__38030;
i__37970_38006 = G__38031;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
