goog.provide('mranderson048.re_frame.v0v10v6.re_frame.fx');
mranderson048.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.fx.kind) : mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
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
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v6.re_frame.registrar.register_handler(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
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
mranderson048.re_frame.v0v10v6.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__33876 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33877 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33877);

try{try{var seq__33879 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33880 = null;
var count__33881 = (0);
var i__33882 = (0);
while(true){
if((i__33882 < count__33881)){
var vec__33892 = chunk__33880.cljs$core$IIndexed$_nth$arity$2(null,i__33882);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33892,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33892,(1),null);
var temp__5733__auto___33952 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33952)){
var effect_fn_33953 = temp__5733__auto___33952;
(effect_fn_33953.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33953.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33953.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33954 = seq__33879;
var G__33955 = chunk__33880;
var G__33956 = count__33881;
var G__33957 = (i__33882 + (1));
seq__33879 = G__33954;
chunk__33880 = G__33955;
count__33881 = G__33956;
i__33882 = G__33957;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33879);
if(temp__5735__auto__){
var seq__33879__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33879__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33879__$1);
var G__33958 = cljs.core.chunk_rest(seq__33879__$1);
var G__33959 = c__4556__auto__;
var G__33960 = cljs.core.count(c__4556__auto__);
var G__33961 = (0);
seq__33879 = G__33958;
chunk__33880 = G__33959;
count__33881 = G__33960;
i__33882 = G__33961;
continue;
} else {
var vec__33896 = cljs.core.first(seq__33879__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33896,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33896,(1),null);
var temp__5733__auto___33962 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33962)){
var effect_fn_33963 = temp__5733__auto___33962;
(effect_fn_33963.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33963.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33963.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33964 = cljs.core.next(seq__33879__$1);
var G__33965 = null;
var G__33966 = (0);
var G__33967 = (0);
seq__33879 = G__33964;
chunk__33880 = G__33965;
count__33881 = G__33966;
i__33882 = G__33967;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__33568__auto___33968 = mranderson048.re_frame.v0v10v6.re_frame.interop.now();
var duration__33569__auto___33969 = (end__33568__auto___33968 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33569__auto___33969,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], 0)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__33568__auto___33968);
} else {
}
}}finally {(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33876);
}} else {
var seq__33899 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33900 = null;
var count__33901 = (0);
var i__33902 = (0);
while(true){
if((i__33902 < count__33901)){
var vec__33909 = chunk__33900.cljs$core$IIndexed$_nth$arity$2(null,i__33902);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33909,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33909,(1),null);
var temp__5733__auto___33970 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33970)){
var effect_fn_33971 = temp__5733__auto___33970;
(effect_fn_33971.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33971.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33971.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33972 = seq__33899;
var G__33973 = chunk__33900;
var G__33974 = count__33901;
var G__33975 = (i__33902 + (1));
seq__33899 = G__33972;
chunk__33900 = G__33973;
count__33901 = G__33974;
i__33902 = G__33975;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33899);
if(temp__5735__auto__){
var seq__33899__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33899__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33899__$1);
var G__33976 = cljs.core.chunk_rest(seq__33899__$1);
var G__33977 = c__4556__auto__;
var G__33978 = cljs.core.count(c__4556__auto__);
var G__33979 = (0);
seq__33899 = G__33976;
chunk__33900 = G__33977;
count__33901 = G__33978;
i__33902 = G__33979;
continue;
} else {
var vec__33913 = cljs.core.first(seq__33899__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33913,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33913,(1),null);
var temp__5733__auto___33980 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33980)){
var effect_fn_33981 = temp__5733__auto___33980;
(effect_fn_33981.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33981.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33981.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33982 = cljs.core.next(seq__33899__$1);
var G__33983 = null;
var G__33984 = (0);
var G__33985 = (0);
seq__33899 = G__33982;
chunk__33900 = G__33983;
count__33901 = G__33984;
i__33902 = G__33985;
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
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__33916 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33917 = null;
var count__33918 = (0);
var i__33919 = (0);
while(true){
if((i__33919 < count__33918)){
var map__33925 = chunk__33917.cljs$core$IIndexed$_nth$arity$2(null,i__33919);
var map__33925__$1 = (((((!((map__33925 == null))))?(((((map__33925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33925):map__33925);
var effect = map__33925__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__33916,chunk__33917,count__33918,i__33919,map__33925,map__33925__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__33916,chunk__33917,count__33918,i__33919,map__33925,map__33925__$1,effect,ms,dispatch))
,ms);
}


var G__33986 = seq__33916;
var G__33987 = chunk__33917;
var G__33988 = count__33918;
var G__33989 = (i__33919 + (1));
seq__33916 = G__33986;
chunk__33917 = G__33987;
count__33918 = G__33988;
i__33919 = G__33989;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33916);
if(temp__5735__auto__){
var seq__33916__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33916__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33916__$1);
var G__33991 = cljs.core.chunk_rest(seq__33916__$1);
var G__33992 = c__4556__auto__;
var G__33993 = cljs.core.count(c__4556__auto__);
var G__33994 = (0);
seq__33916 = G__33991;
chunk__33917 = G__33992;
count__33918 = G__33993;
i__33919 = G__33994;
continue;
} else {
var map__33929 = cljs.core.first(seq__33916__$1);
var map__33929__$1 = (((((!((map__33929 == null))))?(((((map__33929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33929):map__33929);
var effect = map__33929__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33929__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33929__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__33916,chunk__33917,count__33918,i__33919,map__33929,map__33929__$1,effect,ms,dispatch,seq__33916__$1,temp__5735__auto__){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__33916,chunk__33917,count__33918,i__33919,map__33929,map__33929__$1,effect,ms,dispatch,seq__33916__$1,temp__5735__auto__))
,ms);
}


var G__33996 = cljs.core.next(seq__33916__$1);
var G__33997 = null;
var G__33998 = (0);
var G__33999 = (0);
seq__33916 = G__33996;
chunk__33917 = G__33997;
count__33918 = G__33998;
i__33919 = G__33999;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(value);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__33932 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33933 = null;
var count__33934 = (0);
var i__33935 = (0);
while(true){
if((i__33935 < count__33934)){
var event = chunk__33933.cljs$core$IIndexed$_nth$arity$2(null,i__33935);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__34002 = seq__33932;
var G__34003 = chunk__33933;
var G__34004 = count__33934;
var G__34005 = (i__33935 + (1));
seq__33932 = G__34002;
chunk__33933 = G__34003;
count__33934 = G__34004;
i__33935 = G__34005;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33932);
if(temp__5735__auto__){
var seq__33932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33932__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33932__$1);
var G__34006 = cljs.core.chunk_rest(seq__33932__$1);
var G__34007 = c__4556__auto__;
var G__34008 = cljs.core.count(c__4556__auto__);
var G__34009 = (0);
seq__33932 = G__34006;
chunk__33933 = G__34007;
count__33934 = G__34008;
i__33935 = G__34009;
continue;
} else {
var event = cljs.core.first(seq__33932__$1);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__34010 = cljs.core.next(seq__33932__$1);
var G__34011 = null;
var G__34012 = (0);
var G__34013 = (0);
seq__33932 = G__34010;
chunk__33933 = G__34011;
count__33934 = G__34012;
i__33935 = G__34013;
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
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__33948 = cljs.core.seq(value);
var chunk__33949 = null;
var count__33950 = (0);
var i__33951 = (0);
while(true){
if((i__33951 < count__33950)){
var event = chunk__33949.cljs$core$IIndexed$_nth$arity$2(null,i__33951);
clear_event(event);


var G__34014 = seq__33948;
var G__34015 = chunk__33949;
var G__34016 = count__33950;
var G__34017 = (i__33951 + (1));
seq__33948 = G__34014;
chunk__33949 = G__34015;
count__33950 = G__34016;
i__33951 = G__34017;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33948);
if(temp__5735__auto__){
var seq__33948__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33948__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33948__$1);
var G__34020 = cljs.core.chunk_rest(seq__33948__$1);
var G__34021 = c__4556__auto__;
var G__34022 = cljs.core.count(c__4556__auto__);
var G__34023 = (0);
seq__33948 = G__34020;
chunk__33949 = G__34021;
count__33950 = G__34022;
i__33951 = G__34023;
continue;
} else {
var event = cljs.core.first(seq__33948__$1);
clear_event(event);


var G__34024 = cljs.core.next(seq__33948__$1);
var G__34025 = null;
var G__34026 = (0);
var G__34027 = (0);
seq__33948 = G__34024;
chunk__33949 = G__34025;
count__33950 = G__34026;
i__33951 = G__34027;
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
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.fx.js.map
