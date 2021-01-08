goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch_sync = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch_sync;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.reg_sub;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.subscribe;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.clear_subscription_cache_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub_raw = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$reg_sub_raw(query_id,handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.kind,query_id,handler_fn);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.reg_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.inject_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.inject_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$reg_event_db(var_args){
var G__49015 = arguments.length;
switch (G__49015) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$reg_event_fx(var_args){
var G__49032 = arguments.length;
switch (G__49032) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$reg_event_ctx(var_args){
var G__49046 = arguments.length;
switch (G__49046) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3);

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.debug = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.debug;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.path = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.path;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.enrich = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.enrich;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.trim_v = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.trim_v;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.after = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.after;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.on_changes = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.on_changes;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.__GT_interceptor = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.get_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.get_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.assoc_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.assoc_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.get_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.get_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.assoc_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.assoc_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.enqueue = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.enqueue;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.set_loggers_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.set_loggers_BANG_;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.make_restore_fn = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db);
var subs_cache = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.query__GT_reaction);
return (function (){
var original_subs_49096 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_49097 = cljs.core.set(cljs.core.vals(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.query__GT_reaction)));
var seq__49075_49099 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_49097,original_subs_49096));
var chunk__49076_49101 = null;
var count__49077_49102 = (0);
var i__49078_49103 = (0);
while(true){
if((i__49078_49103 < count__49077_49102)){
var sub_49106 = chunk__49076_49101.cljs$core$IIndexed$_nth$arity$2(null,i__49078_49103);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.dispose_BANG_(sub_49106);


var G__49108 = seq__49075_49099;
var G__49109 = chunk__49076_49101;
var G__49110 = count__49077_49102;
var G__49111 = (i__49078_49103 + (1));
seq__49075_49099 = G__49108;
chunk__49076_49101 = G__49109;
count__49077_49102 = G__49110;
i__49078_49103 = G__49111;
continue;
} else {
var temp__5735__auto___49113 = cljs.core.seq(seq__49075_49099);
if(temp__5735__auto___49113){
var seq__49075_49115__$1 = temp__5735__auto___49113;
if(cljs.core.chunked_seq_QMARK_(seq__49075_49115__$1)){
var c__4556__auto___49116 = cljs.core.chunk_first(seq__49075_49115__$1);
var G__49117 = cljs.core.chunk_rest(seq__49075_49115__$1);
var G__49118 = c__4556__auto___49116;
var G__49119 = cljs.core.count(c__4556__auto___49116);
var G__49120 = (0);
seq__49075_49099 = G__49117;
chunk__49076_49101 = G__49118;
count__49077_49102 = G__49119;
i__49078_49103 = G__49120;
continue;
} else {
var sub_49122 = cljs.core.first(seq__49075_49115__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.dispose_BANG_(sub_49122);


var G__49123 = cljs.core.next(seq__49075_49115__$1);
var G__49124 = null;
var G__49125 = (0);
var G__49126 = (0);
seq__49075_49099 = G__49123;
chunk__49076_49101 = G__49124;
count__49077_49102 = G__49125;
i__49078_49103 = G__49126;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,app_db);

return null;
});
});
/**
 * Remove all events queued for processing
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.purge_event_queue = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$purge_event_queue(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$router$IEventQueue$purge$arity$1(null);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$add_post_event_callback(var_args){
var G__49080 = arguments.length;
switch (G__49080) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$router$IEventQueue$add_post_event_callback$arity$3(null,id,f);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.remove_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$remove_post_event_callback(id){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null,id);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_handler = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$register_handler(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49138 = arguments.length;
var i__4737__auto___49140 = (0);
while(true){
if((i__4737__auto___49140 < len__4736__auto___49138)){
args__4742__auto__.push((arguments[i__4737__auto___49140]));

var G__49143 = (i__4737__auto___49140 + (1));
i__4737__auto___49140 = G__49143;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__49082_49147 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__49083_49148 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of";
var G__49084_49149 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__49085_49150 = ")";
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__49082_49147,G__49083_49148,G__49084_49149,G__49085_49150) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.call(null,G__49082_49147,G__49083_49148,G__49084_49149,G__49085_49150));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db,args);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq49081){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49081));
}));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_sub = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$register_sub(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49154 = arguments.length;
var i__4737__auto___49155 = (0);
while(true){
if((i__4737__auto___49155 < len__4736__auto___49154)){
args__4742__auto__.push((arguments[i__4737__auto___49155]));

var G__49157 = (i__4737__auto___49155 + (1));
i__4737__auto___49155 = G__49157;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__49087_49162 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__49088_49163 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of";
var G__49089_49164 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__49090_49165 = ")";
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__49087_49162,G__49088_49163,G__49089_49164,G__49090_49165) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.call(null,G__49087_49162,G__49088_49163,G__49089_49164,G__49090_49165));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub_raw,args);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq49086){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49086));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.js.map
