goog.provide('mranderson048.garden.v1v3v3.garden.core');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson048.garden.v1v3v3.garden.core.css = (function mranderson048$garden$v1v3v3$garden$core$css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32614 = arguments.length;
var i__4737__auto___32615 = (0);
while(true){
if((i__4737__auto___32615 < len__4736__auto___32614)){
args__4742__auto__.push((arguments[i__4737__auto___32615]));

var G__32616 = (i__4737__auto___32615 + (1));
i__4737__auto___32615 = G__32616;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(mranderson048.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.compile_css,rules);
}));

(mranderson048.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq32607){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32607));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson048.garden.v1v3v3.garden.core.style = (function mranderson048$garden$v1v3v3$garden$core$style(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32617 = arguments.length;
var i__4737__auto___32618 = (0);
while(true){
if((i__4737__auto___32618 < len__4736__auto___32617)){
args__4742__auto__.push((arguments[i__4737__auto___32618]));

var G__32619 = (i__4737__auto___32618 + (1));
i__4737__auto___32618 = G__32619;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(mranderson048.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson048.garden.v1v3v3.garden.compiler.compile_style(maps);
}));

(mranderson048.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq32613){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32613));
}));


//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.core.js.map
