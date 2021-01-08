goog.provide('mranderson048.reagent.v0v8v0.reagent.impl.template');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
mranderson048.reagent.v0v8v0.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper = (function (){
});

(mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.impl.template/NativeWrapper");

(mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"mranderson048.reagent.v0v8v0.reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.impl.template/NativeWrapper.
 */
mranderson048.reagent.v0v8v0.reagent.impl.template.__GT_NativeWrapper = (function mranderson048$reagent$v0v8v0$reagent$impl$template$__GT_NativeWrapper(){
return (new mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper());
});

mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_(x)) || (typeof x === 'string'));
});
mranderson048.reagent.v0v8v0.reagent.impl.template.valid_tag_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$valid_tag_QMARK_(x){
return ((mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper)));
});
mranderson048.reagent.v0v8v0.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
mranderson048.reagent.v0v8v0.reagent.impl.template.cache_get = (function mranderson048$reagent$v0v8v0$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.cached_prop_name = (function mranderson048$reagent$v0v8v0$reagent$impl$template$cached_prop_name(k){
if(mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_(k)){
var temp__5737__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.template.cache_get(mranderson048.reagent.v0v8v0.reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5737__auto__ == null)){
return (mranderson048.reagent.v0v8v0.reagent.impl.template.prop_name_cache[cljs.core.name(k)] = mranderson048.reagent.v0v8v0.reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
mranderson048.reagent.v0v8v0.reagent.impl.template.kv_conv = (function mranderson048$reagent$v0v8v0$reagent$impl$template$kv_conv(o,k,v){
var G__32828 = o;
(G__32828[mranderson048.reagent.v0v8v0.reagent.impl.template.cached_prop_name(k)] = (mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value.call(null,v)));

return G__32828;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value = (function mranderson048$reagent$v0v8v0$reagent$impl$template$convert_prop_value(x){
if(mranderson048.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(mranderson048.reagent.v0v8v0.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__32917__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__32917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32918__i = 0, G__32918__a = new Array(arguments.length -  0);
while (G__32918__i < G__32918__a.length) {G__32918__a[G__32918__i] = arguments[G__32918__i + 0]; ++G__32918__i;}
  args = new cljs.core.IndexedSeq(G__32918__a,0,null);
} 
return G__32917__delegate.call(this,args);};
G__32917.cljs$lang$maxFixedArity = 0;
G__32917.cljs$lang$applyTo = (function (arglist__32919){
var args = cljs.core.seq(arglist__32919);
return G__32917__delegate(args);
});
G__32917.cljs$core$IFn$_invoke$arity$variadic = G__32917__delegate;
return G__32917;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.custom_prop_name_cache = ({});
mranderson048.reagent.v0v8v0.reagent.impl.template.cached_custom_prop_name = (function mranderson048$reagent$v0v8v0$reagent$impl$template$cached_custom_prop_name(k){
if(mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_(k)){
var temp__5737__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.template.cache_get(mranderson048.reagent.v0v8v0.reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5737__auto__ == null)){
return (mranderson048.reagent.v0v8v0.reagent.impl.template.prop_name_cache[cljs.core.name(k)] = mranderson048.reagent.v0v8v0.reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.custom_kv_conv = (function mranderson048$reagent$v0v8v0$reagent$impl$template$custom_kv_conv(o,k,v){
var G__32837 = o;
(G__32837[mranderson048.reagent.v0v8v0.reagent.impl.template.cached_custom_prop_name(k)] = mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value(v));

return G__32837;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.convert_custom_prop_value = (function mranderson048$reagent$v0v8v0$reagent$impl$template$convert_custom_prop_value(x){
if(mranderson048.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(mranderson048.reagent.v0v8v0.reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__32920__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__32920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32921__i = 0, G__32921__a = new Array(arguments.length -  0);
while (G__32921__i < G__32921__a.length) {G__32921__a[G__32921__i] = arguments[G__32921__i + 0]; ++G__32921__i;}
  args = new cljs.core.IndexedSeq(G__32921__a,0,null);
} 
return G__32920__delegate.call(this,args);};
G__32920.cljs$lang$maxFixedArity = 0;
G__32920.cljs$lang$applyTo = (function (arglist__32922){
var args = cljs.core.seq(arglist__32922);
return G__32920__delegate(args);
});
G__32920.cljs$core$IFn$_invoke$arity$variadic = G__32920__delegate;
return G__32920;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.oset = (function mranderson048$reagent$v0v8v0$reagent$impl$template$oset(o,k,v){
var G__32839 = (((o == null))?({}):o);
(G__32839[k] = v);

return G__32839;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.oget = (function mranderson048$reagent$v0v8v0$reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
mranderson048.reagent.v0v8v0.reagent.impl.template.set_id_class = (function mranderson048$reagent$v0v8v0$reagent$impl$template$set_id_class(props,id_class){
var id = (id_class["id"]);
var class$ = (id_class["class"]);
var G__32843 = props;
var G__32843__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32843,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__32843);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32843__$1,new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var old_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if((old_class == null)){
return class$;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_class)].join('');
}
})());
} else {
return G__32843__$1;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.stringify_class = (function mranderson048$reagent$v0v8v0$reagent$impl$template$stringify_class(p__32845){
var map__32846 = p__32845;
var map__32846__$1 = (((((!((map__32846 == null))))?(((((map__32846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32846):map__32846);
var props = map__32846__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32846__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.coll_QMARK_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,class$)));
} else {
return props;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.convert_props = (function mranderson048$reagent$v0v8v0$reagent$impl$template$convert_props(props,id_class){
var props__$1 = mranderson048.reagent.v0v8v0.reagent.impl.template.set_id_class(mranderson048.reagent.v0v8v0.reagent.impl.template.stringify_class(props),id_class);
if(cljs.core.truth_((id_class["custom"]))){
return mranderson048.reagent.v0v8v0.reagent.impl.template.convert_custom_prop_value(props__$1);
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value(props__$1);
}
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.template !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node = null;
}
mranderson048.reagent.v0v8v0.reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
mranderson048.reagent.v0v8v0.reagent.impl.template.has_selection_api_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(mranderson048.reagent.v0v8v0.reagent.impl.template.these_inputs_have_selection_api,input_type);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_node_set_value = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__32854){
var map__32855 = p__32854;
var map__32855__$1 = (((((!((map__32855 == null))))?(((((map__32855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32855):map__32855);
var on_write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32855__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if((!((((node === (document["activeElement"]))) && (mranderson048.reagent.v0v8v0.reagent.impl.template.has_selection_api_QMARK_((node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))))){
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
return (on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
return null;
}
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return mranderson048.reagent.v0v8v0.reagent.impl.batching.do_after_render((function (){
return (mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1(component) : mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_set_value.call(null,component));
}));
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
(on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
}

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_set_value = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = (mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1(this$) : mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node.call(null,this$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.input_node_set_value(node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_handle_change = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

mranderson048.reagent.v0v8v0.reagent.impl.batching.do_after_render((function (){
return mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_render_setup = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((((!((jsprops == null))))?(function (){var and__4115__auto__ = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4115__auto__)){
return jsprops.hasOwnProperty("value");
} else {
return and__4115__auto__;
}
})():false))){
if(cljs.core.truth_(mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__32864 = jsprops;
(G__32864["defaultValue"] = value);

(G__32864["onChange"] = (function (p1__32863_SHARP_){
return mranderson048.reagent.v0v8v0.reagent.impl.template.input_handle_change(this$,on_change,p1__32863_SHARP_);
}));

return G__32864;
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_unmount = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_component_QMARK_(x){
var G__32865 = x;
switch (G__32865) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input_class = null;
mranderson048.reagent.v0v8v0.reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),mranderson048.reagent.v0v8v0.reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
mranderson048.reagent.v0v8v0.reagent.impl.template.input_render_setup(this$,jsprops);

return (mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child));
})], null);
mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input = (function mranderson048$reagent$v0v8v0$reagent$impl$template$reagent_input(){
if((mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input_class == null)){
(mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input_class = mranderson048.reagent.v0v8v0.reagent.impl.component.create_class(mranderson048.reagent.v0v8v0.reagent.impl.template.input_spec));
} else {
}

return mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input_class;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.parse_tag = (function mranderson048$reagent$v0v8v0$reagent$impl$template$parse_tag(hiccup_tag){
var vec__32869 = cljs.core.next(cljs.core.re_matches(mranderson048.reagent.v0v8v0.reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32869,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32869,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32869,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace(class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "class": class$__$1, "custom": cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-"))});
});
mranderson048.reagent.v0v8v0.reagent.impl.template.try_get_key = (function mranderson048$reagent$v0v8v0$reagent$impl$template$try_get_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e32876){var e = e32876;
return null;
}});
mranderson048.reagent.v0v8v0.reagent.impl.template.get_key = (function mranderson048$reagent$v0v8v0$reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.try_get_key(x);
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.key_from_vec = (function mranderson048$reagent$v0v8v0$reagent$impl$template$key_from_vec(v){
var temp__5737__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.template.get_key(cljs.core.meta(v));
if((temp__5737__auto__ == null)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__5737__auto__;
return k;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.reag_element = (function mranderson048$reagent$v0v8v0$reagent$impl$template$reag_element(tag,v){
var c = mranderson048.reagent.v0v8v0.reagent.impl.component.as_class(tag);
var jsprops = ({"argv": v});
var temp__5739__auto___32946 = mranderson048.reagent.v0v8v0.reagent.impl.template.key_from_vec(v);
if((temp__5739__auto___32946 == null)){
} else {
var key_32947 = temp__5739__auto___32946;
(jsprops["key"] = key_32947);
}

return module$node_modules$react$index.createElement(c,jsprops);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.fragment_element = (function mranderson048$reagent$v0v8v0$reagent$impl$template$fragment_element(argv){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value(((hasprops)?props:null));
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5739__auto___32960 = mranderson048.reagent.v0v8v0.reagent.impl.template.key_from_vec(argv);
if((temp__5739__auto___32960 == null)){
} else {
var key_32963 = temp__5739__auto___32960;
mranderson048.reagent.v0v8v0.reagent.impl.template.oset(jsprops,"key",key_32963);
}

return (mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,module$node_modules$react$index.Fragment,jsprops,first_child) : mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,module$node_modules$react$index.Fragment,jsprops,first_child));
});
mranderson048.reagent.v0v8v0.reagent.impl.template.adapt_react_class = (function mranderson048$reagent$v0v8v0$reagent$impl$template$adapt_react_class(c){
var G__32881 = mranderson048.reagent.v0v8v0.reagent.impl.template.__GT_NativeWrapper();
(G__32881["name"] = c);

(G__32881["id"] = null);

(G__32881["class"] = null);

return G__32881;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.tag_name_cache = ({});
mranderson048.reagent.v0v8v0.reagent.impl.template.cached_parse = (function mranderson048$reagent$v0v8v0$reagent$impl$template$cached_parse(x){
var temp__5737__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.template.cache_get(mranderson048.reagent.v0v8v0.reagent.impl.template.tag_name_cache,x);
if((temp__5737__auto__ == null)){
return (mranderson048.reagent.v0v8v0.reagent.impl.template.tag_name_cache[x] = mranderson048.reagent.v0v8v0.reagent.impl.template.parse_tag(x));
} else {
var s = temp__5737__auto__;
return s;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.native_element = (function mranderson048$reagent$v0v8v0$reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = mranderson048.reagent.v0v8v0.reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_QMARK_(comp)){
var G__32883 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input(),argv,comp,jsprops,first_child], null),cljs.core.meta(argv));
return (mranderson048.reagent.v0v8v0.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__32883) : mranderson048.reagent.v0v8v0.reagent.impl.template.as_element.call(null,G__32883));
} else {
var key = mranderson048.reagent.v0v8v0.reagent.impl.template.get_key(cljs.core.meta(argv));
var p = (((key == null))?jsprops:mranderson048.reagent.v0v8v0.reagent.impl.template.oset(jsprops,"key",key));
return (mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,p,first_child) : mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,comp,p,first_child));
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.str_coll = (function mranderson048$reagent$v0v8v0$reagent$impl$template$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = mranderson048.reagent.v0v8v0.reagent.impl.util.fun_name(x);
var G__32885 = n;
switch (G__32885) {
case "":
return x;

break;
default:
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
} else {
return x;
}
}),coll));

});
mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err = (function mranderson048$reagent$v0v8v0$reagent$impl$template$hiccup_err(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32984 = arguments.length;
var i__4737__auto___32986 = (0);
while(true){
if((i__4737__auto___32986 < len__4736__auto___32984)){
args__4742__auto__.push((arguments[i__4737__auto___32986]));

var G__32987 = (i__4737__auto___32986 + (1));
i__4737__auto___32986 = G__32987;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",mranderson048.reagent.v0v8v0.reagent.impl.template.str_coll(v),"\n",mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name()].join('');
}));

(mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq32889){
var G__32890 = cljs.core.first(seq32889);
var seq32889__$1 = cljs.core.next(seq32889);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32890,seq32889__$1);
}));

mranderson048.reagent.v0v8v0.reagent.impl.template.vec_to_elem = (function mranderson048$reagent$v0v8v0$reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(mranderson048.reagent.v0v8v0.reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"<>","<>",1280186386),tag)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.fragment_element(v);
} else {
if(mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_(tag)){
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__32897 = pos;
switch (G__32897) {
case (-1):
return mranderson048.reagent.v0v8v0.reagent.impl.template.native_element(mranderson048.reagent.v0v8v0.reagent.impl.template.cached_parse(n),v,(1));

break;
case (0):
var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

if(((typeof comp === 'string') || (cljs.core.fn_QMARK_(comp)))){
} else {
throw (new Error(["Assert failed: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected React component in"], 0)),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.impl.template.native_element(({"name": comp}),v,(2));

break;
default:
var G__32998 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
v = G__32998;
continue;

}
} else {
if((tag instanceof mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.native_element(tag,v,(1));
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.template.reag_element(tag,v);

}
}
}
break;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.as_element = (function mranderson048$reagent$v0v8v0$reagent$impl$template$as_element(x){
if(mranderson048.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq_check.call(null,x));

} else {
if(mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
(mranderson048.reagent.v0v8v0.reagent.impl.component.as_element = mranderson048.reagent.v0v8v0.reagent.impl.template.as_element);
mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq = (function mranderson048$reagent$v0v8v0$reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4613__auto___33000 = a.length;
var i_33002 = (0);
while(true){
if((i_33002 < n__4613__auto___33000)){
(a[i_33002] = mranderson048.reagent.v0v8v0.reagent.impl.template.as_element((a[i_33002])));

var G__33006 = (i_33002 + (1));
i_33002 = G__33006;
continue;
} else {
}
break;
}

return a;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq_dev = (function mranderson048$reagent$v0v8v0$reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4613__auto___33009 = a.length;
var i_33010 = (0);
while(true){
if((i_33010 < n__4613__auto___33009)){
var val_33011 = (a[i_33010]);
if(((cljs.core.vector_QMARK_(val_33011)) && ((mranderson048.reagent.v0v8v0.reagent.impl.template.key_from_vec(val_33011) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_33010] = mranderson048.reagent.v0v8v0.reagent.impl.template.as_element(val_33011));

var G__33012 = (i_33010 + (1));
i_33010 = G__33012;
continue;
} else {
}
break;
}

return a;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq_check = (function mranderson048$reagent$v0v8v0$reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__32910 = mranderson048.reagent.v0v8v0.reagent.ratom.check_derefs((function (){
return mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq_dev(x,ctx);
}));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(1),null);
if(cljs.core.truth_(derefed)){
if(mranderson048.reagent.v0v8v0.reagent.debug.has_console){
((mranderson048.reagent.v0v8v0.reagent.debug.tracking)?mranderson048.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(mranderson048.reagent.v0v8v0.reagent.debug.has_console){
((mranderson048.reagent.v0v8v0.reagent.debug.tracking)?mranderson048.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.make_element = (function mranderson048$reagent$v0v8v0$reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__32913 = (cljs.core.count(argv) - first_child);
switch (G__32913) {
case (0):
return module$node_modules$react$index.createElement(comp,jsprops);

break;
case (1):
return module$node_modules$react$index.createElement(comp,jsprops,mranderson048.reagent.v0v8v0.reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null)));

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(mranderson048.reagent.v0v8v0.reagent.impl.template.as_element(v));
} else {
}

return a;
}),[comp,jsprops],argv));

}
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.impl.template.js.map
