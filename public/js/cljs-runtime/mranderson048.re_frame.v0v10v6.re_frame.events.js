goog.provide('mranderson048.re_frame.v0v10v6.re_frame.events');
mranderson048.re_frame.v0v10v6.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_((mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.events.kind) : mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v6.re_frame.events.kind)))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson048.re_frame.v0v10v6.re_frame.events.flatten_and_remove_nils = (function mranderson048$re_frame$v0v10v6$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__33699_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__33699_SHARP_));
});
if((!(mranderson048.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_))){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering",id,", expected a collection of interceptors, got:",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__5735__auto___33724 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5735__auto___33724)){
var not_i_33725 = temp__5735__auto___33724;
if(cljs.core.fn_QMARK_(not_i_33725)){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:",not_i_33725], 0));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering",id,", expected interceptors, but got:",not_i_33725], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
mranderson048.re_frame.v0v10v6.re_frame.events.register = (function mranderson048$re_frame$v0v10v6$re_frame$events$register(id,interceptors){
return mranderson048.re_frame.v0v10v6.re_frame.registrar.register_handler(mranderson048.re_frame.v0v10v6.re_frame.events.kind,id,mranderson048.re_frame.v0v10v6.re_frame.events.flatten_and_remove_nils(id,interceptors));
});
mranderson048.re_frame.v0v10v6.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson048.re_frame.v0v10v6.re_frame.events.handle = (function mranderson048$re_frame$v0v10v6$re_frame$events$handle(event_v){
var event_id = mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector(event_v);
var temp__5733__auto__ = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5733__auto__)){
var interceptors = temp__5733__auto__;
if(cljs.core.truth_(mranderson048.re_frame.v0v10v6.re_frame.events._STAR_handling_STAR_)){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling",mranderson048.re_frame.v0v10v6.re_frame.events._STAR_handling_STAR_,", dispatch-sync was called for",event_v,". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR__orig_val__33710 = mranderson048.re_frame.v0v10v6.re_frame.events._STAR_handling_STAR_;
var _STAR_handling_STAR__temp_val__33711 = event_v;
(mranderson048.re_frame.v0v10v6.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__temp_val__33711);

try{if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__33713 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33714 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson048.re_frame.v0v10v6.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));
(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33714);

try{try{if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__33570__auto___33729 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645),cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645),cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33570__auto___33729);

} else {
}

mranderson048.re_frame.v0v10v6.re_frame.interceptor.execute(event_v,interceptors);

if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__33570__auto___33732 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964),cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964),cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33570__auto___33732);

return null;
} else {
return null;
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__33568__auto___33737 = mranderson048.re_frame.v0v10v6.re_frame.interop.now();
var duration__33569__auto___33738 = (end__33568__auto___33737 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33569__auto___33738,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], 0)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__33568__auto___33737);
} else {
}
}}finally {(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33713);
}} else {
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__33570__auto___33755 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645),cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645),cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33570__auto___33755);

} else {
}

mranderson048.re_frame.v0v10v6.re_frame.interceptor.execute(event_v,interceptors);

if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__33570__auto___33759 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964),cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964),cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33570__auto___33759);

return null;
} else {
return null;
}
}
}finally {(mranderson048.re_frame.v0v10v6.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__orig_val__33710);
}}
} else {
return null;
}
});

//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.events.js.map
