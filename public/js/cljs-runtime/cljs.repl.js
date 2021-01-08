goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45991){
var map__45992 = p__45991;
var map__45992__$1 = (((((!((map__45992 == null))))?(((((map__45992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45992):map__45992);
var m = map__45992__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45992__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45992__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45994_46095 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45995_46096 = null;
var count__45996_46097 = (0);
var i__45997_46098 = (0);
while(true){
if((i__45997_46098 < count__45996_46097)){
var f_46099 = chunk__45995_46096.cljs$core$IIndexed$_nth$arity$2(null,i__45997_46098);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46099], 0));


var G__46100 = seq__45994_46095;
var G__46101 = chunk__45995_46096;
var G__46102 = count__45996_46097;
var G__46103 = (i__45997_46098 + (1));
seq__45994_46095 = G__46100;
chunk__45995_46096 = G__46101;
count__45996_46097 = G__46102;
i__45997_46098 = G__46103;
continue;
} else {
var temp__5735__auto___46104 = cljs.core.seq(seq__45994_46095);
if(temp__5735__auto___46104){
var seq__45994_46105__$1 = temp__5735__auto___46104;
if(cljs.core.chunked_seq_QMARK_(seq__45994_46105__$1)){
var c__4556__auto___46106 = cljs.core.chunk_first(seq__45994_46105__$1);
var G__46107 = cljs.core.chunk_rest(seq__45994_46105__$1);
var G__46108 = c__4556__auto___46106;
var G__46109 = cljs.core.count(c__4556__auto___46106);
var G__46110 = (0);
seq__45994_46095 = G__46107;
chunk__45995_46096 = G__46108;
count__45996_46097 = G__46109;
i__45997_46098 = G__46110;
continue;
} else {
var f_46111 = cljs.core.first(seq__45994_46105__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46111], 0));


var G__46112 = cljs.core.next(seq__45994_46105__$1);
var G__46113 = null;
var G__46114 = (0);
var G__46115 = (0);
seq__45994_46095 = G__46112;
chunk__45995_46096 = G__46113;
count__45996_46097 = G__46114;
i__45997_46098 = G__46115;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46116 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46116], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46116)))?cljs.core.second(arglists_46116):arglists_46116)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45998_46117 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45999_46118 = null;
var count__46000_46119 = (0);
var i__46001_46120 = (0);
while(true){
if((i__46001_46120 < count__46000_46119)){
var vec__46012_46121 = chunk__45999_46118.cljs$core$IIndexed$_nth$arity$2(null,i__46001_46120);
var name_46122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46012_46121,(0),null);
var map__46015_46123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46012_46121,(1),null);
var map__46015_46124__$1 = (((((!((map__46015_46123 == null))))?(((((map__46015_46123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46015_46123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46015_46123):map__46015_46123);
var doc_46125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46015_46124__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46015_46124__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46122], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46126], 0));

if(cljs.core.truth_(doc_46125)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46125], 0));
} else {
}


var G__46127 = seq__45998_46117;
var G__46128 = chunk__45999_46118;
var G__46129 = count__46000_46119;
var G__46130 = (i__46001_46120 + (1));
seq__45998_46117 = G__46127;
chunk__45999_46118 = G__46128;
count__46000_46119 = G__46129;
i__46001_46120 = G__46130;
continue;
} else {
var temp__5735__auto___46131 = cljs.core.seq(seq__45998_46117);
if(temp__5735__auto___46131){
var seq__45998_46132__$1 = temp__5735__auto___46131;
if(cljs.core.chunked_seq_QMARK_(seq__45998_46132__$1)){
var c__4556__auto___46133 = cljs.core.chunk_first(seq__45998_46132__$1);
var G__46134 = cljs.core.chunk_rest(seq__45998_46132__$1);
var G__46135 = c__4556__auto___46133;
var G__46136 = cljs.core.count(c__4556__auto___46133);
var G__46137 = (0);
seq__45998_46117 = G__46134;
chunk__45999_46118 = G__46135;
count__46000_46119 = G__46136;
i__46001_46120 = G__46137;
continue;
} else {
var vec__46017_46138 = cljs.core.first(seq__45998_46132__$1);
var name_46139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46017_46138,(0),null);
var map__46020_46140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46017_46138,(1),null);
var map__46020_46141__$1 = (((((!((map__46020_46140 == null))))?(((((map__46020_46140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46020_46140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46020_46140):map__46020_46140);
var doc_46142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46020_46141__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46020_46141__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46139], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46143], 0));

if(cljs.core.truth_(doc_46142)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46142], 0));
} else {
}


var G__46144 = cljs.core.next(seq__45998_46132__$1);
var G__46145 = null;
var G__46146 = (0);
var G__46147 = (0);
seq__45998_46117 = G__46144;
chunk__45999_46118 = G__46145;
count__46000_46119 = G__46146;
i__46001_46120 = G__46147;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46022 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46023 = null;
var count__46024 = (0);
var i__46025 = (0);
while(true){
if((i__46025 < count__46024)){
var role = chunk__46023.cljs$core$IIndexed$_nth$arity$2(null,i__46025);
var temp__5735__auto___46148__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46148__$1)){
var spec_46149 = temp__5735__auto___46148__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46149)], 0));
} else {
}


var G__46150 = seq__46022;
var G__46151 = chunk__46023;
var G__46152 = count__46024;
var G__46153 = (i__46025 + (1));
seq__46022 = G__46150;
chunk__46023 = G__46151;
count__46024 = G__46152;
i__46025 = G__46153;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__46022);
if(temp__5735__auto____$1){
var seq__46022__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46022__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46022__$1);
var G__46154 = cljs.core.chunk_rest(seq__46022__$1);
var G__46155 = c__4556__auto__;
var G__46156 = cljs.core.count(c__4556__auto__);
var G__46157 = (0);
seq__46022 = G__46154;
chunk__46023 = G__46155;
count__46024 = G__46156;
i__46025 = G__46157;
continue;
} else {
var role = cljs.core.first(seq__46022__$1);
var temp__5735__auto___46158__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46158__$2)){
var spec_46159 = temp__5735__auto___46158__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46159)], 0));
} else {
}


var G__46160 = cljs.core.next(seq__46022__$1);
var G__46161 = null;
var G__46162 = (0);
var G__46163 = (0);
seq__46022 = G__46160;
chunk__46023 = G__46161;
count__46024 = G__46162;
i__46025 = G__46163;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46164 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46165 = cljs.core.ex_cause(t);
via = G__46164;
t = G__46165;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__46028 = datafied_throwable;
var map__46028__$1 = (((((!((map__46028 == null))))?(((((map__46028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46028):map__46028);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46028__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46028__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46028__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46029 = cljs.core.last(via);
var map__46029__$1 = (((((!((map__46029 == null))))?(((((map__46029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46029):map__46029);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46029__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46029__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46029__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46030 = data;
var map__46030__$1 = (((((!((map__46030 == null))))?(((((map__46030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46030):map__46030);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46030__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46030__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46030__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46031 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46031__$1 = (((((!((map__46031 == null))))?(((((map__46031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46031):map__46031);
var top_data = map__46031__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46031__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46036 = phase;
var G__46036__$1 = (((G__46036 instanceof cljs.core.Keyword))?G__46036.fqn:null);
switch (G__46036__$1) {
case "read-source":
var map__46037 = data;
var map__46037__$1 = (((((!((map__46037 == null))))?(((((map__46037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46037):map__46037);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46037__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46037__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46039 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46039__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46039,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46039);
var G__46039__$2 = (cljs.core.truth_((function (){var fexpr__46040 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46040.cljs$core$IFn$_invoke$arity$1 ? fexpr__46040.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46040.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46039__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46039__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46039__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46039__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46041 = top_data;
var G__46041__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46041,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46041);
var G__46041__$2 = (cljs.core.truth_((function (){var fexpr__46042 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46042.cljs$core$IFn$_invoke$arity$1 ? fexpr__46042.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46042.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46041__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46041__$1);
var G__46041__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46041__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46041__$2);
var G__46041__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46041__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46041__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46041__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46041__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46043 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46043,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46043,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46043,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46043,(3),null);
var G__46046 = top_data;
var G__46046__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46046,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46046);
var G__46046__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46046__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46046__$1);
var G__46046__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46046__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46046__$2);
var G__46046__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46046__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46046__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46046__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46046__$4;
}

break;
case "execution":
var vec__46047 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46047,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46047,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46047,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46047,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46027_SHARP_){
var or__4126__auto__ = (p1__46027_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__46051 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46051.cljs$core$IFn$_invoke$arity$1 ? fexpr__46051.cljs$core$IFn$_invoke$arity$1(p1__46027_SHARP_) : fexpr__46051.call(null,p1__46027_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__46052 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46052__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46052,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46052);
var G__46052__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46052__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46052__$1);
var G__46052__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46052__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46052__$2);
var G__46052__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46052__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46052__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46052__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46052__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46036__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46055){
var map__46056 = p__46055;
var map__46056__$1 = (((((!((map__46056 == null))))?(((((map__46056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46056):map__46056);
var triage_data = map__46056__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46056__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46056__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46056__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46056__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46056__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46056__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46056__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46056__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46058 = phase;
var G__46058__$1 = (((G__46058 instanceof cljs.core.Keyword))?G__46058.fqn:null);
switch (G__46058__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46059 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46060 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46061 = loc;
var G__46062 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46063_46168 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46064_46169 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46065_46170 = true;
var _STAR_print_fn_STAR__temp_val__46066_46171 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46065_46170);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46066_46171);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46053_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46053_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46064_46169);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46063_46168);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46059,G__46060,G__46061,G__46062) : format.call(null,G__46059,G__46060,G__46061,G__46062));

break;
case "macroexpansion":
var G__46067 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46068 = cause_type;
var G__46069 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46070 = loc;
var G__46071 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46067,G__46068,G__46069,G__46070,G__46071) : format.call(null,G__46067,G__46068,G__46069,G__46070,G__46071));

break;
case "compile-syntax-check":
var G__46072 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46073 = cause_type;
var G__46074 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46075 = loc;
var G__46076 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46072,G__46073,G__46074,G__46075,G__46076) : format.call(null,G__46072,G__46073,G__46074,G__46075,G__46076));

break;
case "compilation":
var G__46077 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46078 = cause_type;
var G__46079 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46080 = loc;
var G__46081 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46077,G__46078,G__46079,G__46080,G__46081) : format.call(null,G__46077,G__46078,G__46079,G__46080,G__46081));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46082 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46083 = symbol;
var G__46084 = loc;
var G__46085 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46086_46172 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46087_46173 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46088_46174 = true;
var _STAR_print_fn_STAR__temp_val__46089_46175 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46088_46174);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46089_46175);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46054_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46054_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46087_46173);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46086_46172);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46082,G__46083,G__46084,G__46085) : format.call(null,G__46082,G__46083,G__46084,G__46085));
} else {
var G__46090 = "Execution error%s at %s(%s).\n%s\n";
var G__46091 = cause_type;
var G__46092 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46093 = loc;
var G__46094 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46090,G__46091,G__46092,G__46093,G__46094) : format.call(null,G__46090,G__46091,G__46092,G__46093,G__46094));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46058__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
