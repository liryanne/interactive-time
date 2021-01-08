goog.provide('mranderson048.reagent.v0v8v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom.imported !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.dom.imported = null;
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom.roots !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
mranderson048.reagent.v0v8v0.reagent.dom.unmount_comp = (function mranderson048$reagent$v0v8v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.reagent.v0v8v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
mranderson048.reagent.v0v8v0.reagent.dom.render_comp = (function mranderson048$reagent$v0v8v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__32924 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__32925 = true;
(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__32925);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__32929 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__32930 = false;
(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__32930);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson048.reagent.v0v8v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson048.reagent.v0v8v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__32929);
}}));
}finally {(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__32924);
}});
mranderson048.reagent.v0v8v0.reagent.dom.re_render_component = (function mranderson048$reagent$v0v8v0$reagent$dom$re_render_component(comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson048.reagent.v0v8v0.reagent.dom.render = (function mranderson048$reagent$v0v8v0$reagent$dom$render(var_args){
var G__32932 = arguments.length;
switch (G__32932) {
case 2:
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();

var f = (function (){
return mranderson048.reagent.v0v8v0.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return mranderson048.reagent.v0v8v0.reagent.dom.render_comp(f,container,callback);
}));

(mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

mranderson048.reagent.v0v8v0.reagent.dom.unmount_component_at_node = (function mranderson048$reagent$v0v8v0$reagent$dom$unmount_component_at_node(container){
return mranderson048.reagent.v0v8v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson048.reagent.v0v8v0.reagent.dom.dom_node = (function mranderson048$reagent$v0v8v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
(mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node = mranderson048.reagent.v0v8v0.reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson048.reagent.v0v8v0.reagent.dom.force_update_all = (function mranderson048$reagent$v0v8v0$reagent$dom$force_update_all(){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();

var seq__32937_32948 = cljs.core.seq(cljs.core.vals(cljs.core.deref(mranderson048.reagent.v0v8v0.reagent.dom.roots)));
var chunk__32938_32950 = null;
var count__32939_32951 = (0);
var i__32940_32952 = (0);
while(true){
if((i__32940_32952 < count__32939_32951)){
var v_32954 = chunk__32938_32950.cljs$core$IIndexed$_nth$arity$2(null,i__32940_32952);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.dom.re_render_component,v_32954);


var G__32956 = seq__32937_32948;
var G__32957 = chunk__32938_32950;
var G__32958 = count__32939_32951;
var G__32959 = (i__32940_32952 + (1));
seq__32937_32948 = G__32956;
chunk__32938_32950 = G__32957;
count__32939_32951 = G__32958;
i__32940_32952 = G__32959;
continue;
} else {
var temp__5735__auto___32961 = cljs.core.seq(seq__32937_32948);
if(temp__5735__auto___32961){
var seq__32937_32962__$1 = temp__5735__auto___32961;
if(cljs.core.chunked_seq_QMARK_(seq__32937_32962__$1)){
var c__4556__auto___32964 = cljs.core.chunk_first(seq__32937_32962__$1);
var G__32965 = cljs.core.chunk_rest(seq__32937_32962__$1);
var G__32966 = c__4556__auto___32964;
var G__32967 = cljs.core.count(c__4556__auto___32964);
var G__32968 = (0);
seq__32937_32948 = G__32965;
chunk__32938_32950 = G__32966;
count__32939_32951 = G__32967;
i__32940_32952 = G__32968;
continue;
} else {
var v_32969 = cljs.core.first(seq__32937_32962__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.dom.re_render_component,v_32969);


var G__32970 = cljs.core.next(seq__32937_32962__$1);
var G__32971 = null;
var G__32972 = (0);
var G__32973 = (0);
seq__32937_32948 = G__32970;
chunk__32938_32950 = G__32971;
count__32939_32951 = G__32972;
i__32940_32952 = G__32973;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.dom.js.map
