goog.provide('mranderson048.re_frame.v0v10v6.re_frame.utils');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to istelf if the path was never present
 */
mranderson048.re_frame.v0v10v6.re_frame.utils.dissoc_in = (function mranderson048$re_frame$v0v10v6$re_frame$utils$dissoc_in(m,p__32933){
var vec__32934 = p__32933;
var seq__32935 = cljs.core.seq(vec__32934);
var first__32936 = cljs.core.first(seq__32935);
var seq__32935__$1 = cljs.core.next(seq__32935);
var k = first__32936;
var ks = seq__32935__$1;
var keys = vec__32934;
if(ks){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = (mranderson048.re_frame.v0v10v6.re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : mranderson048.re_frame.v0v10v6.re_frame.utils.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector = (function mranderson048$re_frame$v0v10v6$re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: expected a vector, but got:",v], 0));
}
});

//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.utils.js.map
