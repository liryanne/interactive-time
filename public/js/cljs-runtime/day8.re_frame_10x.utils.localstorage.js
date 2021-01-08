goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__38536 = arguments.length;
switch (G__38536) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__38553 = cljs.core.seq(Object.keys(localStorage));
var chunk__38554 = null;
var count__38555 = (0);
var i__38556 = (0);
while(true){
if((i__38556 < count__38555)){
var k = chunk__38554.cljs$core$IIndexed$_nth$arity$2(null,i__38556);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__38584 = seq__38553;
var G__38585 = chunk__38554;
var G__38586 = count__38555;
var G__38587 = (i__38556 + (1));
seq__38553 = G__38584;
chunk__38554 = G__38585;
count__38555 = G__38586;
i__38556 = G__38587;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38553);
if(temp__5735__auto__){
var seq__38553__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38553__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38553__$1);
var G__38589 = cljs.core.chunk_rest(seq__38553__$1);
var G__38590 = c__4556__auto__;
var G__38591 = cljs.core.count(c__4556__auto__);
var G__38592 = (0);
seq__38553 = G__38589;
chunk__38554 = G__38590;
count__38555 = G__38591;
i__38556 = G__38592;
continue;
} else {
var k = cljs.core.first(seq__38553__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__38597 = cljs.core.next(seq__38553__$1);
var G__38598 = null;
var G__38599 = (0);
var G__38600 = (0);
seq__38553 = G__38597;
chunk__38554 = G__38598;
count__38555 = G__38599;
i__38556 = G__38600;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
