goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48916 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48917 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48917);

try{try{var seq__48920 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48921 = null;
var count__48922 = (0);
var i__48923 = (0);
while(true){
if((i__48923 < count__48922)){
var vec__48933 = chunk__48921.cljs$core$IIndexed$_nth$arity$2(null,i__48923);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48933,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48933,(1),null);
var temp__5733__auto___48994 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48994)){
var effect_fn_48995 = temp__5733__auto___48994;
(effect_fn_48995.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48995.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48995.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48996 = seq__48920;
var G__48997 = chunk__48921;
var G__48998 = count__48922;
var G__48999 = (i__48923 + (1));
seq__48920 = G__48996;
chunk__48921 = G__48997;
count__48922 = G__48998;
i__48923 = G__48999;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48920);
if(temp__5735__auto__){
var seq__48920__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48920__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48920__$1);
var G__49002 = cljs.core.chunk_rest(seq__48920__$1);
var G__49003 = c__4556__auto__;
var G__49004 = cljs.core.count(c__4556__auto__);
var G__49005 = (0);
seq__48920 = G__49002;
chunk__48921 = G__49003;
count__48922 = G__49004;
i__48923 = G__49005;
continue;
} else {
var vec__48937 = cljs.core.first(seq__48920__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48937,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48937,(1),null);
var temp__5733__auto___49006 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49006)){
var effect_fn_49007 = temp__5733__auto___49006;
(effect_fn_49007.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49007.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49007.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49008 = cljs.core.next(seq__48920__$1);
var G__49009 = null;
var G__49010 = (0);
var G__49011 = (0);
seq__48920 = G__49008;
chunk__48921 = G__49009;
count__48922 = G__49010;
i__48923 = G__49011;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__48594__auto___49012 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__48595__auto___49013 = (end__48594__auto___49012 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48595__auto___49013,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__48594__auto___49012);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48916);
}} else {
var seq__48941 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48942 = null;
var count__48943 = (0);
var i__48944 = (0);
while(true){
if((i__48944 < count__48943)){
var vec__48952 = chunk__48942.cljs$core$IIndexed$_nth$arity$2(null,i__48944);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48952,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48952,(1),null);
var temp__5733__auto___49019 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49019)){
var effect_fn_49020 = temp__5733__auto___49019;
(effect_fn_49020.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49020.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49020.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49021 = seq__48941;
var G__49022 = chunk__48942;
var G__49023 = count__48943;
var G__49024 = (i__48944 + (1));
seq__48941 = G__49021;
chunk__48942 = G__49022;
count__48943 = G__49023;
i__48944 = G__49024;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48941);
if(temp__5735__auto__){
var seq__48941__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48941__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48941__$1);
var G__49025 = cljs.core.chunk_rest(seq__48941__$1);
var G__49026 = c__4556__auto__;
var G__49027 = cljs.core.count(c__4556__auto__);
var G__49028 = (0);
seq__48941 = G__49025;
chunk__48942 = G__49026;
count__48943 = G__49027;
i__48944 = G__49028;
continue;
} else {
var vec__48955 = cljs.core.first(seq__48941__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48955,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48955,(1),null);
var temp__5733__auto___49029 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49029)){
var effect_fn_49031 = temp__5733__auto___49029;
(effect_fn_49031.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49031.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49031.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49033 = cljs.core.next(seq__48941__$1);
var G__49034 = null;
var G__49035 = (0);
var G__49036 = (0);
seq__48941 = G__49033;
chunk__48942 = G__49034;
count__48943 = G__49035;
i__48944 = G__49036;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__48958 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48959 = null;
var count__48960 = (0);
var i__48961 = (0);
while(true){
if((i__48961 < count__48960)){
var map__48969 = chunk__48959.cljs$core$IIndexed$_nth$arity$2(null,i__48961);
var map__48969__$1 = (((((!((map__48969 == null))))?(((((map__48969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48969):map__48969);
var effect = map__48969__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__48958,chunk__48959,count__48960,i__48961,map__48969,map__48969__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__48958,chunk__48959,count__48960,i__48961,map__48969,map__48969__$1,effect,ms,dispatch))
,ms);
}


var G__49037 = seq__48958;
var G__49038 = chunk__48959;
var G__49039 = count__48960;
var G__49040 = (i__48961 + (1));
seq__48958 = G__49037;
chunk__48959 = G__49038;
count__48960 = G__49039;
i__48961 = G__49040;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48958);
if(temp__5735__auto__){
var seq__48958__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48958__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48958__$1);
var G__49041 = cljs.core.chunk_rest(seq__48958__$1);
var G__49042 = c__4556__auto__;
var G__49043 = cljs.core.count(c__4556__auto__);
var G__49044 = (0);
seq__48958 = G__49041;
chunk__48959 = G__49042;
count__48960 = G__49043;
i__48961 = G__49044;
continue;
} else {
var map__48972 = cljs.core.first(seq__48958__$1);
var map__48972__$1 = (((((!((map__48972 == null))))?(((((map__48972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48972):map__48972);
var effect = map__48972__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48972__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48972__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__48958,chunk__48959,count__48960,i__48961,map__48972,map__48972__$1,effect,ms,dispatch,seq__48958__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__48958,chunk__48959,count__48960,i__48961,map__48972,map__48972__$1,effect,ms,dispatch,seq__48958__$1,temp__5735__auto__))
,ms);
}


var G__49047 = cljs.core.next(seq__48958__$1);
var G__49048 = null;
var G__49049 = (0);
var G__49050 = (0);
seq__48958 = G__49047;
chunk__48959 = G__49048;
count__48960 = G__49049;
i__48961 = G__49050;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__48978 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48979 = null;
var count__48980 = (0);
var i__48981 = (0);
while(true){
if((i__48981 < count__48980)){
var event = chunk__48979.cljs$core$IIndexed$_nth$arity$2(null,i__48981);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__49051 = seq__48978;
var G__49052 = chunk__48979;
var G__49053 = count__48980;
var G__49054 = (i__48981 + (1));
seq__48978 = G__49051;
chunk__48979 = G__49052;
count__48980 = G__49053;
i__48981 = G__49054;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48978);
if(temp__5735__auto__){
var seq__48978__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48978__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48978__$1);
var G__49055 = cljs.core.chunk_rest(seq__48978__$1);
var G__49056 = c__4556__auto__;
var G__49057 = cljs.core.count(c__4556__auto__);
var G__49058 = (0);
seq__48978 = G__49055;
chunk__48979 = G__49056;
count__48980 = G__49057;
i__48981 = G__49058;
continue;
} else {
var event = cljs.core.first(seq__48978__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__49059 = cljs.core.next(seq__48978__$1);
var G__49060 = null;
var G__49061 = (0);
var G__49062 = (0);
seq__48978 = G__49059;
chunk__48979 = G__49060;
count__48980 = G__49061;
i__48981 = G__49062;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__48990 = cljs.core.seq(value);
var chunk__48991 = null;
var count__48992 = (0);
var i__48993 = (0);
while(true){
if((i__48993 < count__48992)){
var event = chunk__48991.cljs$core$IIndexed$_nth$arity$2(null,i__48993);
clear_event(event);


var G__49063 = seq__48990;
var G__49064 = chunk__48991;
var G__49065 = count__48992;
var G__49066 = (i__48993 + (1));
seq__48990 = G__49063;
chunk__48991 = G__49064;
count__48992 = G__49065;
i__48993 = G__49066;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48990);
if(temp__5735__auto__){
var seq__48990__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48990__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48990__$1);
var G__49067 = cljs.core.chunk_rest(seq__48990__$1);
var G__49068 = c__4556__auto__;
var G__49069 = cljs.core.count(c__4556__auto__);
var G__49070 = (0);
seq__48990 = G__49067;
chunk__48991 = G__49068;
count__48992 = G__49069;
i__48993 = G__49070;
continue;
} else {
var event = cljs.core.first(seq__48990__$1);
clear_event(event);


var G__49071 = cljs.core.next(seq__48990__$1);
var G__49072 = null;
var G__49073 = (0);
var G__49074 = (0);
seq__48990 = G__49071;
chunk__48991 = G__49072;
count__48992 = G__49073;
i__48993 = G__49074;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map
