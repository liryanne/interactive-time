goog.provide('day8.re_frame_10x.utils.pretty_print_condensed');

/**
 * @interface
 */
day8.re_frame_10x.utils.pretty_print_condensed.ILimited = function(){};

var day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$dyn_36057 = (function (x){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4429__auto__.call(null,x));
} else {
var m__4426__auto__ = (day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4426__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("ILimited.-limited?",x);
}
}
});
day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_ = (function day8$re_frame_10x$utils$pretty_print_condensed$_limited_QMARK_(x){
if((((!((x == null)))) && ((!((x.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$arity$1 == null)))))){
return x.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$arity$1(x);
} else {
return day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$dyn_36057(x);
}
});

/**
 * Truncate a string to length `n`.
 * 
 *   Removal occurs at `cut-from`, which may be :start, :end, or :middle.
 * 
 *   Truncation is indicated by `…` at start/end, or `...` at middle, for readability. 
 */
day8.re_frame_10x.utils.pretty_print_condensed.truncate_string = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_string(var_args){
var G__35837 = arguments.length;
switch (G__35837) {
case 2:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$2 = (function (n,string){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"end","end",-268185958),string);
}));

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3 = (function (n,cut_from,string){
var c = cljs.core.count(string);
if((c > n)){
var G__35879 = cut_from;
var G__35879__$1 = (((G__35879 instanceof cljs.core.Keyword))?G__35879.fqn:null);
switch (G__35879__$1) {
case "start":
return ["\u2026",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(c - (n - (1))),c)].join('');

break;
case "end":
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),(n - (1))),"\u2026"].join('');

break;
case "middle":
var G__35891 = n;
switch (G__35891) {
case (1):
return "\u2026";

break;
case (2):
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"start","start",-355208981),string);

break;
case (3):
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),(1)),"\u2026",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(c - (1)),c)].join('');

break;
default:
var content_budget = (n - (2));
var per_side_budget = Math.floor((content_budget / (2)));
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),(function (){var G__35906 = per_side_budget;
if(cljs.core.even_QMARK_(content_budget)){
return (G__35906 - (1));
} else {
return G__35906;
}
})()),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(c - per_side_budget),c)].join('');

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35879__$1)].join('')));

}
} else {
return string;
}
}));

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$lang$maxFixedArity = 3);

day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_segments(var_args){
var G__35944 = arguments.length;
switch (G__35944) {
case 2:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$2 = (function (s,limit){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$4(s,limit,/^[^.]+\./,"\u2026");
}));

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$4 = (function (s,limit,match,trunc_prefix){
while(true){
if((cljs.core.count(s) <= limit)){
return s;
} else {
var rep = clojure.string.replace(s,match,trunc_prefix);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rep,s)){
return trunc_prefix;
} else {
var G__36186 = clojure.string.replace(s,match,trunc_prefix);
var G__36187 = limit;
var G__36188 = match;
var G__36189 = trunc_prefix;
s = G__36186;
limit = G__36187;
match = G__36188;
trunc_prefix = G__36189;
continue;
}
}
break;
}
}));

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$lang$maxFixedArity = 4);

/**
 * Truncates `named`, which must satisfy INamed protocol, to within `n`
 * characters, cutting from beginning. Adds a `…` prefix to indicate where
 * cutting has occurred.
 */
day8.re_frame_10x.utils.pretty_print_condensed.truncate_named = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_named(n,named){
var the_ns = cljs.core.namespace(named);
var the_name = cljs.core.name(named);
var kw_QMARK_ = (named instanceof cljs.core.Keyword);
var ns_prefix_size = ((kw_QMARK_)?(3):(2));
if((((((the_name).length) > (cljs.core.truth_(the_ns)?(n - ns_prefix_size):n))) || ((the_ns == null)))){
var prefix = (function (){var G__35954 = ((kw_QMARK_)?":":"");
if(cljs.core.truth_(the_ns)){
return [G__35954,"\u2026/"].join('');
} else {
return G__35954;
}
})();
return [prefix,day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3((n - ((prefix).length)),new cljs.core.Keyword(null,"start","start",-355208981),the_name)].join('');
} else {
var end = ["/",the_name].join('');
var prefix = ((kw_QMARK_)?":":"");
var ns_budget = ((n - ((end).length)) - ((prefix).length));
var ns_string = day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$2(the_ns,ns_budget);
return [prefix,ns_string,end].join('');
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.utils.pretty_print_condensed.truncate_named((12),new cljs.core.Keyword("city","saskatoon","city/saskatoon",2120611420)),":\u2026/saskatoon")){
} else {
throw (new Error("Assert failed: (= (truncate-named 12 :city/saskatoon) \":\u2026/saskatoon\")"));
}
day8.re_frame_10x.utils.pretty_print_condensed.truncate = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate(n,location,param){
if((((!((param == null))))?(((((param.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === param.cljs$core$INamed$))))?true:(((!param.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.INamed,param):false)):cljs.core.native_satisfies_QMARK_(cljs.core.INamed,param))){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_named(n,param);
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3(n,location,cljs.core.str.cljs$core$IFn$_invoke$arity$1(param));
}
});
day8.re_frame_10x.utils.pretty_print_condensed.str__GT_namespaced_sym = (function day8$re_frame_10x$utils$pretty_print_condensed$str__GT_namespaced_sym(s){
if(typeof s === 'string'){
var name = cljs.core.second(cljs.core.re_find(/\.([^.]+)$/,s));
if(cljs.core.truth_(name)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),((((s).length) - cljs.core.count(name)) - (1))),name);
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s);
}
} else {
return s;
}
});
/**
 * Return left and right edges of a collection (eg. brackets plus prefixes), defaults to [< >].
 */
day8.re_frame_10x.utils.pretty_print_condensed.edges = (function day8$re_frame_10x$utils$pretty_print_condensed$edges(coll){
if(cljs.core.map_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null);
} else {
if(cljs.core.vector_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
if(cljs.core.set_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null);
} else {
if(((cljs.core.list_QMARK_(coll)) || (cljs.core.seq_QMARK_(coll)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",">"], null);

}
}
}
}
});
/**
 * Wrap `value` with edges of `coll`
 */
day8.re_frame_10x.utils.pretty_print_condensed.with_edges = (function day8$re_frame_10x$utils$pretty_print_condensed$with_edges(coll,value){
var vec__35973 = day8.re_frame_10x.utils.pretty_print_condensed.edges(coll);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35973,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35973,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(right)].join('');
});
/**
 * Render form in abbreviated form, showing content only for keywords/strings/symbols and entering collections to a depth of 1.
 */
day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed = (function day8$re_frame_10x$utils$pretty_print_condensed$pretty_condensed(var_args){
var G__35979 = arguments.length;
switch (G__35979) {
case 1:
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$1 = (function (form){
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$4((0),cljs.core.coll_QMARK_,(1),form);
}));

(day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$4 = (function (depth,enter_pred,max_depth,form){
if((((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$INamed$))))?true:(((!form.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.INamed,form):false)):cljs.core.native_satisfies_QMARK_(cljs.core.INamed,form))){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_named((16),form);
} else {
if(typeof form === 'string'){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3((16),new cljs.core.Keyword(null,"middle","middle",-701029031),form);
} else {
if(cljs.core.fn_QMARK_(form)){
var or__4126__auto__ = (function (){var G__35985 = form.name;
if((G__35985 == null)){
return null;
} else {
return clojure.string.replace(G__35985,/(^.*\$)(.*)/,"$2");
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "\u0192";
}
} else {
if(typeof form === 'number'){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(form);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = (enter_pred.cljs$core$IFn$_invoke$arity$1 ? enter_pred.cljs$core$IFn$_invoke$arity$1(form) : enter_pred.call(null,form));
if(cljs.core.truth_(and__4115__auto__)){
return (depth < max_depth);
} else {
return and__4115__auto__;
}
})())){
return day8.re_frame_10x.utils.pretty_print_condensed.with_edges(form,clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed,(depth + (1)),enter_pred,max_depth),form)));
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.with_edges(form,"\u2026");

}
}
}
}
}
}));

(day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$lang$maxFixedArity = 4);

day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_writer_impl(obj,writer,opts){
if(cljs.core.truth_(day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_(writer))){
return writer;
} else {
return cljs.core.pr_writer_impl(obj,writer,opts);
}
});
/**
 * Prefer this to pr-seq, because it makes the printing function
 * configurable, allowing efficient implementations such as appending
 * to a StringBuffer.
 */
day8.re_frame_10x.utils.pretty_print_condensed.pr_writer = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_writer(obj,writer,opts){
var temp__5733__auto__ = new cljs.core.Keyword(null,"alt-impl","alt-impl",670969595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var alt_impl = temp__5733__auto__;
var G__35992 = obj;
var G__35993 = writer;
var G__35994 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"fallback-impl","fallback-impl",-1501286995),day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl);
return (alt_impl.cljs$core$IFn$_invoke$arity$3 ? alt_impl.cljs$core$IFn$_invoke$arity$3(G__35992,G__35993,G__35994) : alt_impl.call(null,G__35992,G__35993,G__35994));
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl(obj,writer,opts);
}
});
day8.re_frame_10x.utils.pretty_print_condensed.pr_seq_writer = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_seq_writer(objs,writer,opts){
day8.re_frame_10x.utils.pretty_print_condensed.pr_writer(cljs.core.first(objs),writer,opts);

var seq__36000 = cljs.core.seq(cljs.core.next(objs));
var chunk__36001 = null;
var count__36002 = (0);
var i__36003 = (0);
while(true){
if((i__36003 < count__36002)){
var obj = chunk__36001.cljs$core$IIndexed$_nth$arity$2(null,i__36003);
cljs.core._write(writer," ");

day8.re_frame_10x.utils.pretty_print_condensed.pr_writer(obj,writer,opts);


var G__36203 = seq__36000;
var G__36204 = chunk__36001;
var G__36205 = count__36002;
var G__36206 = (i__36003 + (1));
seq__36000 = G__36203;
chunk__36001 = G__36204;
count__36002 = G__36205;
i__36003 = G__36206;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36000);
if(temp__5735__auto__){
var seq__36000__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36000__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36000__$1);
var G__36207 = cljs.core.chunk_rest(seq__36000__$1);
var G__36208 = c__4556__auto__;
var G__36209 = cljs.core.count(c__4556__auto__);
var G__36210 = (0);
seq__36000 = G__36207;
chunk__36001 = G__36208;
count__36002 = G__36209;
i__36003 = G__36210;
continue;
} else {
var obj = cljs.core.first(seq__36000__$1);
cljs.core._write(writer," ");

day8.re_frame_10x.utils.pretty_print_condensed.pr_writer(obj,writer,opts);


var G__36212 = cljs.core.next(seq__36000__$1);
var G__36213 = null;
var G__36214 = (0);
var G__36215 = (0);
seq__36000 = G__36212;
chunk__36001 = G__36213;
count__36002 = G__36214;
i__36003 = G__36215;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.utils.pretty_print_condensed.string_print = (function day8$re_frame_10x$utils$pretty_print_condensed$string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);

return null;
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.ICounted}
 * @implements {day8.re_frame_10x.utils.pretty_print_condensed.ILimited}
*/
day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter = (function (sb,max_string_length,over_limit_QMARK_){
this.sb = sb;
this.max_string_length = max_string_length;
this.over_limit_QMARK_ = over_limit_QMARK_;
this.cljs$lang$protocol_mask$partition0$ = 1073741826;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.over_limit_QMARK_)){
} else {
if((self__.max_string_length <= self__.sb.getLength())){
(self__.over_limit_QMARK_ = true);
} else {
self__.sb.append(s);
}
}

return self__.sb;
}));

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.sb.getLength();
}));

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.over_limit_QMARK_;
}));

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sb","sb",-1249746442,null),new cljs.core.Symbol(null,"max-string-length","max-string-length",1209706837,null),cljs.core.with_meta(new cljs.core.Symbol(null,"over-limit?","over-limit?",-259661935,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.cljs$lang$type = true);

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.cljs$lang$ctorStr = "day8.re-frame-10x.utils.pretty-print-condensed/LimitedStringBufferWriter");

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.utils.pretty-print-condensed/LimitedStringBufferWriter");
}));

/**
 * Positional factory function for day8.re-frame-10x.utils.pretty-print-condensed/LimitedStringBufferWriter.
 */
day8.re_frame_10x.utils.pretty_print_condensed.__GT_LimitedStringBufferWriter = (function day8$re_frame_10x$utils$pretty_print_condensed$__GT_LimitedStringBufferWriter(sb,max_string_length,over_limit_QMARK_){
return (new day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter(sb,max_string_length,over_limit_QMARK_));
});

day8.re_frame_10x.utils.pretty_print_condensed.pr_sb_with_opts = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter(sb,new cljs.core.Keyword("debux","max-string-length","debux/max-string-length",-318600534).cljs$core$IFn$_invoke$arity$2(opts,(72)),false));
day8.re_frame_10x.utils.pretty_print_condensed.pr_seq_writer(objs,writer,opts);

writer.cljs$core$IWriter$_flush$arity$1(null);

return sb;
});
/**
 * Prints a sequence of objects to a string, observing all the
 *   options given in opts
 */
day8.re_frame_10x.utils.pretty_print_condensed.pr_str_with_opts = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.pretty_print_condensed.pr_sb_with_opts(objs,opts));
}
});
day8.re_frame_10x.utils.pretty_print_condensed.pr_opts = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",1129599760),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",556298533),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length","print-length",1931866356),cljs.core._STAR_print_length_STAR_], null);
});
/**
 * Like pr, but truncates output at n characters. Use for efficient printing where
 *   you don't want to pay the cost of printing the (possibly large) data structure.
 */
day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_str_truncated(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36220 = arguments.length;
var i__4737__auto___36221 = (0);
while(true){
if((i__4737__auto___36221 < len__4736__auto___36220)){
args__4742__auto__.push((arguments[i__4737__auto___36221]));

var G__36222 = (i__4737__auto___36221 + (1));
i__4737__auto___36221 = G__36222;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic = (function (n,objs){
var opts = day8.re_frame_10x.utils.pretty_print_condensed.pr_opts();
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$2(n,day8.re_frame_10x.utils.pretty_print_condensed.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(n / (2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"more-marker","more-marker",-14717935),"\u2026",new cljs.core.Keyword("debux","max-string-length","debux/max-string-length",-318600534),(n + (1)),new cljs.core.Keyword(null,"alt-impl","alt-impl",670969595),day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl], 0))));
}));

(day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$lang$applyTo = (function (seq36048){
var G__36049 = cljs.core.first(seq36048);
var seq36048__$1 = cljs.core.next(seq36048);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36049,seq36048__$1);
}));


//# sourceMappingURL=day8.re_frame_10x.utils.pretty_print_condensed.js.map
