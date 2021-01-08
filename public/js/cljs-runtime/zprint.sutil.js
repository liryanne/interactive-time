goog.provide('zprint.sutil');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sexpr], 0));
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zloc], 0));
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_(sexpr)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(sexpr));
} else {
return cljs.core.seq(sexpr);
}
});
/**
 * Map a function of all of the elements to ther right
 *   of this.
 */
zprint.sutil.smap_right = (function zprint$sutil$smap_right(zfn,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,cljs.core.next(sexpr));
} else {
return null;
}
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.nthnext(sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_((function (){var G__34078 = cljs.core.first(sloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__34078) : zthing_QMARK_.call(null,G__34078));
})())){
return i;
} else {
var G__34306 = cljs.core.next(sloc);
var G__34307 = (i + (1));
sloc = G__34306;
i = G__34307;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.count(sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_(sexpr))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_(sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first(sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second(sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_(sexpr)) || (cljs.core.seq_QMARK_(sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.last(sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_(x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return null;
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref(x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns(x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__34114 = arguments.length;
switch (G__34114) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),val], null);
}));

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj_term,(2)))], null);
}));

(zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2);

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (typeof x === 'number'));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__34150 = cljs.core.first(pair_seq__$1);
var seq__34151 = cljs.core.seq(vec__34150);
var first__34152 = cljs.core.first(seq__34151);
var seq__34151__$1 = cljs.core.next(seq__34151);
var k = first__34152;
var rest_of_pair = seq__34151__$1;
var pair = vec__34150;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace(k):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,current_ns)){
var G__34332 = ns;
var G__34333 = cljs.core.next(pair_seq__$1);
var G__34334 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns = G__34332;
pair_seq__$1 = G__34333;
out = G__34334;
continue;
} else {
return null;
}
} else {
var G__34335 = current_ns;
var G__34336 = cljs.core.next(pair_seq__$1);
var G__34337 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns = G__34335;
pair_seq__$1 = G__34336;
out = G__34337;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__34339 = ns;
var G__34340 = cljs.core.next(pair_seq__$1);
var G__34341 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns = G__34339;
pair_seq__$1 = G__34340;
out = G__34341;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__34164 = zprint.zfns.zstring;
var znumstr_orig_val__34165 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__34166 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__34167 = zprint.zfns.zsexpr;
var zseqnws_orig_val__34168 = zprint.zfns.zseqnws;
var zmap_right_orig_val__34169 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__34170 = zprint.zfns.zfocus_style;
var zfirst_orig_val__34171 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__34172 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__34173 = zprint.zfns.zsecond;
var zthird_orig_val__34174 = zprint.zfns.zthird;
var zfourth_orig_val__34175 = zprint.zfns.zfourth;
var znthnext_orig_val__34176 = zprint.zfns.znthnext;
var zcount_orig_val__34177 = zprint.zfns.zcount;
var zmap_orig_val__34178 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__34179 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__34180 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__34181 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__34182 = zprint.zfns.zfocus;
var zfind_path_orig_val__34183 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__34184 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__34185 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__34186 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__34187 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__34188 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__34189 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__34190 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__34191 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__34192 = zprint.zfns.ztag;
var zparseuneval_orig_val__34193 = zprint.zfns.zparseuneval;
var zlast_orig_val__34194 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__34195 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__34196 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__34197 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__34198 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__34199 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__34200 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__34201 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__34202 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__34203 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__34204 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__34205 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__34206 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__34207 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__34208 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__34209 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__34210 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__34211 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__34212 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__34213 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__34214 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__34215 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__34216 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__34217 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__34218 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__34219 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__34220 = zprint.zfns.zfind;
var zstring_temp_val__34221 = zprint.sutil.sstring;
var znumstr_temp_val__34222 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__34223 = cljs.core.constantly(false);
var zsexpr_temp_val__34224 = cljs.core.identity;
var zseqnws_temp_val__34225 = zprint.sutil.sseqnws;
var zmap_right_temp_val__34226 = zprint.sutil.smap_right;
var zfocus_style_temp_val__34227 = zprint.sutil.sfocus_style;
var zfirst_temp_val__34228 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__34229 = zprint.sutil.sfirst;
var zsecond_temp_val__34230 = zprint.sutil.ssecond;
var zthird_temp_val__34231 = zprint.sutil.sthird;
var zfourth_temp_val__34232 = zprint.sutil.sfourth;
var znthnext_temp_val__34233 = zprint.sutil.snthnext;
var zcount_temp_val__34234 = zprint.sutil.scount;
var zmap_temp_val__34235 = zprint.sutil.smap;
var zmap_w_nl_temp_val__34236 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__34237 = cljs.core.constantly(false);
var zfn_obj_QMARK__temp_val__34238 = cljs.core.fn_QMARK_;
var zfocus_temp_val__34239 = zprint.sutil.sfocus;
var zfind_path_temp_val__34240 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__34241 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__34242 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__34243 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__34244 = cljs.core.map_QMARK_;
var zset_QMARK__temp_val__34245 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__34246 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__34247 = cljs.core.constantly(false);
var zuneval_QMARK__temp_val__34248 = cljs.core.constantly(false);
var ztag_temp_val__34249 = cljs.core.constantly(null);
var zparseuneval_temp_val__34250 = cljs.core.constantly(null);
var zlast_temp_val__34251 = zprint.sutil.slast;
var zarray_QMARK__temp_val__34252 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__34253 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__34254 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__34255 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__34256 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__34257 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__34258 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__34259 = cljs.core.constantly(false);
var zwhitespaceorcomment_QMARK__temp_val__34260 = cljs.core.constantly(false);
var zmap_all_temp_val__34261 = cljs.core.map;
var zfuture_QMARK__temp_val__34262 = cljs.core.constantly(false);
var zpromise_QMARK__temp_val__34263 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__34264 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__34265 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__34266 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__34267 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__34268 = cljs.core.constantly(false);
var zarray_to_shift_seq_temp_val__34269 = null;
var zdotdotdot_temp_val__34270 = cljs.core.constantly(new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__34271 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__34272 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__34273 = cljs.core.constantly(false);
var zreader_cond_w_coll_QMARK__temp_val__34274 = cljs.core.constantly(false);
var zlift_ns_temp_val__34275 = zprint.sutil.slift_ns;
var zinlinecomment_QMARK__temp_val__34276 = cljs.core.constantly(false);
var zfind_temp_val__34277 = zprint.sutil.sfind;
(zprint.zfns.zstring = zstring_temp_val__34221);

(zprint.zfns.znumstr = znumstr_temp_val__34222);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__34223);

(zprint.zfns.zsexpr = zsexpr_temp_val__34224);

(zprint.zfns.zseqnws = zseqnws_temp_val__34225);

(zprint.zfns.zmap_right = zmap_right_temp_val__34226);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__34227);

(zprint.zfns.zfirst = zfirst_temp_val__34228);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__34229);

(zprint.zfns.zsecond = zsecond_temp_val__34230);

(zprint.zfns.zthird = zthird_temp_val__34231);

(zprint.zfns.zfourth = zfourth_temp_val__34232);

(zprint.zfns.znthnext = znthnext_temp_val__34233);

(zprint.zfns.zcount = zcount_temp_val__34234);

(zprint.zfns.zmap = zmap_temp_val__34235);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__34236);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__34237);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__34238);

(zprint.zfns.zfocus = zfocus_temp_val__34239);

(zprint.zfns.zfind_path = zfind_path_temp_val__34240);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__34241);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__34242);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__34243);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__34244);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__34245);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__34246);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__34247);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__34248);

(zprint.zfns.ztag = ztag_temp_val__34249);

(zprint.zfns.zparseuneval = zparseuneval_temp_val__34250);

(zprint.zfns.zlast = zlast_temp_val__34251);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__34252);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__34253);

(zprint.zfns.zderef = zderef_temp_val__34254);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__34255);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__34256);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__34257);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__34258);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__34259);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__34260);

(zprint.zfns.zmap_all = zmap_all_temp_val__34261);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__34262);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__34263);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__34264);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__34265);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__34266);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__34267);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__34268);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__34269);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__34270);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__34271);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__34272);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__34273);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__34274);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__34275);

(zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__34276);

(zprint.zfns.zfind = zfind_temp_val__34277);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(zprint.zfns.zfind = zfind_orig_val__34220);

(zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__34219);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__34218);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__34217);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__34216);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__34215);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__34214);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__34213);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__34212);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__34211);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__34210);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__34209);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__34208);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__34207);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__34206);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__34205);

(zprint.zfns.zmap_all = zmap_all_orig_val__34204);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__34203);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__34202);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__34201);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__34200);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__34199);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__34198);

(zprint.zfns.zderef = zderef_orig_val__34197);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__34196);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__34195);

(zprint.zfns.zlast = zlast_orig_val__34194);

(zprint.zfns.zparseuneval = zparseuneval_orig_val__34193);

(zprint.zfns.ztag = ztag_orig_val__34192);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__34191);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__34190);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__34189);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__34188);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__34187);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__34186);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__34185);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__34184);

(zprint.zfns.zfind_path = zfind_path_orig_val__34183);

(zprint.zfns.zfocus = zfocus_orig_val__34182);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__34181);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__34180);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__34179);

(zprint.zfns.zmap = zmap_orig_val__34178);

(zprint.zfns.zcount = zcount_orig_val__34177);

(zprint.zfns.znthnext = znthnext_orig_val__34176);

(zprint.zfns.zfourth = zfourth_orig_val__34175);

(zprint.zfns.zthird = zthird_orig_val__34174);

(zprint.zfns.zsecond = zsecond_orig_val__34173);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__34172);

(zprint.zfns.zfirst = zfirst_orig_val__34171);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__34170);

(zprint.zfns.zmap_right = zmap_right_orig_val__34169);

(zprint.zfns.zseqnws = zseqnws_orig_val__34168);

(zprint.zfns.zsexpr = zsexpr_orig_val__34167);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__34166);

(zprint.zfns.znumstr = znumstr_orig_val__34165);

(zprint.zfns.zstring = zstring_orig_val__34164);
}});

//# sourceMappingURL=zprint.sutil.js.map
