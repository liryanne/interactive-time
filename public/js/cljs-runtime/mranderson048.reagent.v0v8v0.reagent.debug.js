goog.provide('mranderson048.reagent.v0v8v0.reagent.debug');
mranderson048.reagent.v0v8v0.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson048.reagent.v0v8v0.reagent.debug.tracking = false;
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug.warnings !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug.track_console !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31957__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31958__i = 0, G__31958__a = new Array(arguments.length -  0);
while (G__31958__i < G__31958__a.length) {G__31958__a[G__31958__i] = arguments[G__31958__i + 0]; ++G__31958__i;}
  args = new cljs.core.IndexedSeq(G__31958__a,0,null);
} 
return G__31957__delegate.call(this,args);};
G__31957.cljs$lang$maxFixedArity = 0;
G__31957.cljs$lang$applyTo = (function (arglist__31959){
var args = cljs.core.seq(arglist__31959);
return G__31957__delegate(args);
});
G__31957.cljs$core$IFn$_invoke$arity$variadic = G__31957__delegate;
return G__31957;
})()
);

(o.error = (function() { 
var G__31960__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31961__i = 0, G__31961__a = new Array(arguments.length -  0);
while (G__31961__i < G__31961__a.length) {G__31961__a[G__31961__i] = arguments[G__31961__i + 0]; ++G__31961__i;}
  args = new cljs.core.IndexedSeq(G__31961__a,0,null);
} 
return G__31960__delegate.call(this,args);};
G__31960.cljs$lang$maxFixedArity = 0;
G__31960.cljs$lang$applyTo = (function (arglist__31962){
var args = cljs.core.seq(arglist__31962);
return G__31960__delegate(args);
});
G__31960.cljs$core$IFn$_invoke$arity$variadic = G__31960__delegate;
return G__31960;
})()
);

return o;
})();
}
mranderson048.reagent.v0v8v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v8v0$reagent$debug$track_warnings(f){
(mranderson048.reagent.v0v8v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(mranderson048.reagent.v0v8v0.reagent.debug.warnings);
cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

(mranderson048.reagent.v0v8v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.debug.js.map
