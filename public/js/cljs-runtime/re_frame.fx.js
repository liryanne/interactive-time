goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38317 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38318 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38318);

try{try{var seq__38319 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38320 = null;
var count__38321 = (0);
var i__38322 = (0);
while(true){
if((i__38322 < count__38321)){
var vec__38330 = chunk__38320.cljs$core$IIndexed$_nth$arity$2(null,i__38322);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38330,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38330,(1),null);
var temp__5733__auto___38408 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38408)){
var effect_fn_38409 = temp__5733__auto___38408;
(effect_fn_38409.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38409.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38409.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38412 = seq__38319;
var G__38413 = chunk__38320;
var G__38414 = count__38321;
var G__38415 = (i__38322 + (1));
seq__38319 = G__38412;
chunk__38320 = G__38413;
count__38321 = G__38414;
i__38322 = G__38415;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38319);
if(temp__5735__auto__){
var seq__38319__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38319__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38319__$1);
var G__38416 = cljs.core.chunk_rest(seq__38319__$1);
var G__38417 = c__4556__auto__;
var G__38418 = cljs.core.count(c__4556__auto__);
var G__38419 = (0);
seq__38319 = G__38416;
chunk__38320 = G__38417;
count__38321 = G__38418;
i__38322 = G__38419;
continue;
} else {
var vec__38334 = cljs.core.first(seq__38319__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38334,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38334,(1),null);
var temp__5733__auto___38420 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38420)){
var effect_fn_38421 = temp__5733__auto___38420;
(effect_fn_38421.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38421.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38421.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38422 = cljs.core.next(seq__38319__$1);
var G__38423 = null;
var G__38424 = (0);
var G__38425 = (0);
seq__38319 = G__38422;
chunk__38320 = G__38423;
count__38321 = G__38424;
i__38322 = G__38425;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37930__auto___38426 = re_frame.interop.now();
var duration__37931__auto___38427 = (end__37930__auto___38426 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37931__auto___38427,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37930__auto___38426);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38317);
}} else {
var seq__38339 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38340 = null;
var count__38341 = (0);
var i__38342 = (0);
while(true){
if((i__38342 < count__38341)){
var vec__38349 = chunk__38340.cljs$core$IIndexed$_nth$arity$2(null,i__38342);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38349,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38349,(1),null);
var temp__5733__auto___38428 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38428)){
var effect_fn_38429 = temp__5733__auto___38428;
(effect_fn_38429.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38429.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38429.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38430 = seq__38339;
var G__38431 = chunk__38340;
var G__38432 = count__38341;
var G__38433 = (i__38342 + (1));
seq__38339 = G__38430;
chunk__38340 = G__38431;
count__38341 = G__38432;
i__38342 = G__38433;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38339);
if(temp__5735__auto__){
var seq__38339__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38339__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38339__$1);
var G__38436 = cljs.core.chunk_rest(seq__38339__$1);
var G__38437 = c__4556__auto__;
var G__38438 = cljs.core.count(c__4556__auto__);
var G__38439 = (0);
seq__38339 = G__38436;
chunk__38340 = G__38437;
count__38341 = G__38438;
i__38342 = G__38439;
continue;
} else {
var vec__38353 = cljs.core.first(seq__38339__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38353,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38353,(1),null);
var temp__5733__auto___38440 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38440)){
var effect_fn_38441 = temp__5733__auto___38440;
(effect_fn_38441.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38441.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38441.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38442 = cljs.core.next(seq__38339__$1);
var G__38443 = null;
var G__38444 = (0);
var G__38445 = (0);
seq__38339 = G__38442;
chunk__38340 = G__38443;
count__38341 = G__38444;
i__38342 = G__38445;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__38359 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38360 = null;
var count__38361 = (0);
var i__38362 = (0);
while(true){
if((i__38362 < count__38361)){
var map__38392 = chunk__38360.cljs$core$IIndexed$_nth$arity$2(null,i__38362);
var map__38392__$1 = (((((!((map__38392 == null))))?(((((map__38392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38392):map__38392);
var effect = map__38392__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38392__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38392__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__38359,chunk__38360,count__38361,i__38362,map__38392,map__38392__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__38359,chunk__38360,count__38361,i__38362,map__38392,map__38392__$1,effect,ms,dispatch))
,ms);
}


var G__38447 = seq__38359;
var G__38448 = chunk__38360;
var G__38449 = count__38361;
var G__38450 = (i__38362 + (1));
seq__38359 = G__38447;
chunk__38360 = G__38448;
count__38361 = G__38449;
i__38362 = G__38450;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38359);
if(temp__5735__auto__){
var seq__38359__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38359__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38359__$1);
var G__38451 = cljs.core.chunk_rest(seq__38359__$1);
var G__38452 = c__4556__auto__;
var G__38453 = cljs.core.count(c__4556__auto__);
var G__38454 = (0);
seq__38359 = G__38451;
chunk__38360 = G__38452;
count__38361 = G__38453;
i__38362 = G__38454;
continue;
} else {
var map__38395 = cljs.core.first(seq__38359__$1);
var map__38395__$1 = (((((!((map__38395 == null))))?(((((map__38395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38395):map__38395);
var effect = map__38395__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38395__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38395__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__38359,chunk__38360,count__38361,i__38362,map__38395,map__38395__$1,effect,ms,dispatch,seq__38359__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__38359,chunk__38360,count__38361,i__38362,map__38395,map__38395__$1,effect,ms,dispatch,seq__38359__$1,temp__5735__auto__))
,ms);
}


var G__38458 = cljs.core.next(seq__38359__$1);
var G__38459 = null;
var G__38460 = (0);
var G__38461 = (0);
seq__38359 = G__38458;
chunk__38360 = G__38459;
count__38361 = G__38460;
i__38362 = G__38461;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__38397 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38398 = null;
var count__38399 = (0);
var i__38400 = (0);
while(true){
if((i__38400 < count__38399)){
var event = chunk__38398.cljs$core$IIndexed$_nth$arity$2(null,i__38400);
re_frame.router.dispatch(event);


var G__38470 = seq__38397;
var G__38471 = chunk__38398;
var G__38472 = count__38399;
var G__38473 = (i__38400 + (1));
seq__38397 = G__38470;
chunk__38398 = G__38471;
count__38399 = G__38472;
i__38400 = G__38473;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38397);
if(temp__5735__auto__){
var seq__38397__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38397__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38397__$1);
var G__38474 = cljs.core.chunk_rest(seq__38397__$1);
var G__38475 = c__4556__auto__;
var G__38476 = cljs.core.count(c__4556__auto__);
var G__38477 = (0);
seq__38397 = G__38474;
chunk__38398 = G__38475;
count__38399 = G__38476;
i__38400 = G__38477;
continue;
} else {
var event = cljs.core.first(seq__38397__$1);
re_frame.router.dispatch(event);


var G__38481 = cljs.core.next(seq__38397__$1);
var G__38482 = null;
var G__38483 = (0);
var G__38484 = (0);
seq__38397 = G__38481;
chunk__38398 = G__38482;
count__38399 = G__38483;
i__38400 = G__38484;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38402 = cljs.core.seq(value);
var chunk__38403 = null;
var count__38404 = (0);
var i__38405 = (0);
while(true){
if((i__38405 < count__38404)){
var event = chunk__38403.cljs$core$IIndexed$_nth$arity$2(null,i__38405);
clear_event(event);


var G__38485 = seq__38402;
var G__38486 = chunk__38403;
var G__38487 = count__38404;
var G__38488 = (i__38405 + (1));
seq__38402 = G__38485;
chunk__38403 = G__38486;
count__38404 = G__38487;
i__38405 = G__38488;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38402);
if(temp__5735__auto__){
var seq__38402__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38402__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38402__$1);
var G__38493 = cljs.core.chunk_rest(seq__38402__$1);
var G__38494 = c__4556__auto__;
var G__38495 = cljs.core.count(c__4556__auto__);
var G__38496 = (0);
seq__38402 = G__38493;
chunk__38403 = G__38494;
count__38404 = G__38495;
i__38405 = G__38496;
continue;
} else {
var event = cljs.core.first(seq__38402__$1);
clear_event(event);


var G__38497 = cljs.core.next(seq__38402__$1);
var G__38498 = null;
var G__38499 = (0);
var G__38500 = (0);
seq__38402 = G__38497;
chunk__38403 = G__38498;
count__38404 = G__38499;
i__38405 = G__38500;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
