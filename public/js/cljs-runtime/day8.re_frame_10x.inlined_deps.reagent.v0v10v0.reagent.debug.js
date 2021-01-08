goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__44863__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__44863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44867__i = 0, G__44867__a = new Array(arguments.length -  0);
while (G__44867__i < G__44867__a.length) {G__44867__a[G__44867__i] = arguments[G__44867__i + 0]; ++G__44867__i;}
  args = new cljs.core.IndexedSeq(G__44867__a,0,null);
} 
return G__44863__delegate.call(this,args);};
G__44863.cljs$lang$maxFixedArity = 0;
G__44863.cljs$lang$applyTo = (function (arglist__44868){
var args = cljs.core.seq(arglist__44868);
return G__44863__delegate(args);
});
G__44863.cljs$core$IFn$_invoke$arity$variadic = G__44863__delegate;
return G__44863;
})()
);

(o.error = (function() { 
var G__44869__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__44869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44870__i = 0, G__44870__a = new Array(arguments.length -  0);
while (G__44870__i < G__44870__a.length) {G__44870__a[G__44870__i] = arguments[G__44870__i + 0]; ++G__44870__i;}
  args = new cljs.core.IndexedSeq(G__44870__a,0,null);
} 
return G__44869__delegate.call(this,args);};
G__44869.cljs$lang$maxFixedArity = 0;
G__44869.cljs$lang$applyTo = (function (arglist__44871){
var args = cljs.core.seq(arglist__44871);
return G__44869__delegate(args);
});
G__44869.cljs$core$IFn$_invoke$arity$variadic = G__44869__delegate;
return G__44869;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.js.map
