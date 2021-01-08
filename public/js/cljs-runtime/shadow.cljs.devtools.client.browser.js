goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45822 = arguments.length;
var i__4737__auto___45823 = (0);
while(true){
if((i__4737__auto___45823 < len__4736__auto___45822)){
args__4742__auto__.push((arguments[i__4737__auto___45823]));

var G__45824 = (i__4737__auto___45823 + (1));
i__4737__auto___45823 = G__45824;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45672){
var G__45673 = cljs.core.first(seq45672);
var seq45672__$1 = cljs.core.next(seq45672);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45673,seq45672__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45677 = cljs.core.seq(sources);
var chunk__45678 = null;
var count__45679 = (0);
var i__45680 = (0);
while(true){
if((i__45680 < count__45679)){
var map__45689 = chunk__45678.cljs$core$IIndexed$_nth$arity$2(null,i__45680);
var map__45689__$1 = (((((!((map__45689 == null))))?(((((map__45689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45689):map__45689);
var src = map__45689__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45689__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45689__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45689__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45689__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45691){var e_45825 = e45691;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45825);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45825.message)].join('')));
}

var G__45826 = seq__45677;
var G__45827 = chunk__45678;
var G__45828 = count__45679;
var G__45829 = (i__45680 + (1));
seq__45677 = G__45826;
chunk__45678 = G__45827;
count__45679 = G__45828;
i__45680 = G__45829;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45677);
if(temp__5735__auto__){
var seq__45677__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45677__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45677__$1);
var G__45830 = cljs.core.chunk_rest(seq__45677__$1);
var G__45831 = c__4556__auto__;
var G__45832 = cljs.core.count(c__4556__auto__);
var G__45833 = (0);
seq__45677 = G__45830;
chunk__45678 = G__45831;
count__45679 = G__45832;
i__45680 = G__45833;
continue;
} else {
var map__45692 = cljs.core.first(seq__45677__$1);
var map__45692__$1 = (((((!((map__45692 == null))))?(((((map__45692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45692):map__45692);
var src = map__45692__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45692__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45692__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45692__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45692__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45694){var e_45834 = e45694;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45834);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45834.message)].join('')));
}

var G__45835 = cljs.core.next(seq__45677__$1);
var G__45836 = null;
var G__45837 = (0);
var G__45838 = (0);
seq__45677 = G__45835;
chunk__45678 = G__45836;
count__45679 = G__45837;
i__45680 = G__45838;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__45695 = cljs.core.seq(js_requires);
var chunk__45696 = null;
var count__45697 = (0);
var i__45698 = (0);
while(true){
if((i__45698 < count__45697)){
var js_ns = chunk__45696.cljs$core$IIndexed$_nth$arity$2(null,i__45698);
var require_str_45839 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45839);


var G__45840 = seq__45695;
var G__45841 = chunk__45696;
var G__45842 = count__45697;
var G__45843 = (i__45698 + (1));
seq__45695 = G__45840;
chunk__45696 = G__45841;
count__45697 = G__45842;
i__45698 = G__45843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45695);
if(temp__5735__auto__){
var seq__45695__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45695__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45695__$1);
var G__45844 = cljs.core.chunk_rest(seq__45695__$1);
var G__45845 = c__4556__auto__;
var G__45846 = cljs.core.count(c__4556__auto__);
var G__45847 = (0);
seq__45695 = G__45844;
chunk__45696 = G__45845;
count__45697 = G__45846;
i__45698 = G__45847;
continue;
} else {
var js_ns = cljs.core.first(seq__45695__$1);
var require_str_45848 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45848);


var G__45849 = cljs.core.next(seq__45695__$1);
var G__45850 = null;
var G__45851 = (0);
var G__45852 = (0);
seq__45695 = G__45849;
chunk__45696 = G__45850;
count__45697 = G__45851;
i__45698 = G__45852;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45702){
var map__45703 = p__45702;
var map__45703__$1 = (((((!((map__45703 == null))))?(((((map__45703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45703):map__45703);
var msg = map__45703__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45703__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45703__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45705(s__45706){
return (new cljs.core.LazySeq(null,(function (){
var s__45706__$1 = s__45706;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45706__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__45711 = cljs.core.first(xs__6292__auto__);
var map__45711__$1 = (((((!((map__45711 == null))))?(((((map__45711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45711):map__45711);
var src = map__45711__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45711__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__45706__$1,map__45711,map__45711__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45703,map__45703__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45705_$_iter__45707(s__45708){
return (new cljs.core.LazySeq(null,((function (s__45706__$1,map__45711,map__45711__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45703,map__45703__$1,msg,info,reload_info){
return (function (){
var s__45708__$1 = s__45708;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45708__$1);
if(temp__5735__auto____$1){
var s__45708__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45708__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__45708__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__45710 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__45709 = (0);
while(true){
if((i__45709 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__45709);
cljs.core.chunk_append(b__45710,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45853 = (i__45709 + (1));
i__45709 = G__45853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45710),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45705_$_iter__45707(cljs.core.chunk_rest(s__45708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45710),null);
}
} else {
var warning = cljs.core.first(s__45708__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45705_$_iter__45707(cljs.core.rest(s__45708__$2)));
}
} else {
return null;
}
break;
}
});})(s__45706__$1,map__45711,map__45711__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45703,map__45703__$1,msg,info,reload_info))
,null,null));
});})(s__45706__$1,map__45711,map__45711__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45703,map__45703__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45705(cljs.core.rest(s__45706__$1)));
} else {
var G__45854 = cljs.core.rest(s__45706__$1);
s__45706__$1 = G__45854;
continue;
}
} else {
var G__45855 = cljs.core.rest(s__45706__$1);
s__45706__$1 = G__45855;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__45713_45856 = cljs.core.seq(warnings);
var chunk__45714_45857 = null;
var count__45715_45858 = (0);
var i__45716_45859 = (0);
while(true){
if((i__45716_45859 < count__45715_45858)){
var map__45721_45860 = chunk__45714_45857.cljs$core$IIndexed$_nth$arity$2(null,i__45716_45859);
var map__45721_45861__$1 = (((((!((map__45721_45860 == null))))?(((((map__45721_45860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45721_45860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45721_45860):map__45721_45860);
var w_45862 = map__45721_45861__$1;
var msg_45863__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45721_45861__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45721_45861__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45721_45861__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45721_45861__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45866)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45864),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45865),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45863__$1)].join(''));


var G__45867 = seq__45713_45856;
var G__45868 = chunk__45714_45857;
var G__45869 = count__45715_45858;
var G__45870 = (i__45716_45859 + (1));
seq__45713_45856 = G__45867;
chunk__45714_45857 = G__45868;
count__45715_45858 = G__45869;
i__45716_45859 = G__45870;
continue;
} else {
var temp__5735__auto___45871 = cljs.core.seq(seq__45713_45856);
if(temp__5735__auto___45871){
var seq__45713_45872__$1 = temp__5735__auto___45871;
if(cljs.core.chunked_seq_QMARK_(seq__45713_45872__$1)){
var c__4556__auto___45873 = cljs.core.chunk_first(seq__45713_45872__$1);
var G__45874 = cljs.core.chunk_rest(seq__45713_45872__$1);
var G__45875 = c__4556__auto___45873;
var G__45876 = cljs.core.count(c__4556__auto___45873);
var G__45877 = (0);
seq__45713_45856 = G__45874;
chunk__45714_45857 = G__45875;
count__45715_45858 = G__45876;
i__45716_45859 = G__45877;
continue;
} else {
var map__45723_45878 = cljs.core.first(seq__45713_45872__$1);
var map__45723_45879__$1 = (((((!((map__45723_45878 == null))))?(((((map__45723_45878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45723_45878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45723_45878):map__45723_45878);
var w_45880 = map__45723_45879__$1;
var msg_45881__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45723_45879__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45723_45879__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45723_45879__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45723_45879__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45884)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45882),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45883),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45881__$1)].join(''));


var G__45885 = cljs.core.next(seq__45713_45872__$1);
var G__45886 = null;
var G__45887 = (0);
var G__45888 = (0);
seq__45713_45856 = G__45885;
chunk__45714_45857 = G__45886;
count__45715_45858 = G__45887;
i__45716_45859 = G__45888;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45701_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45701_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45725){
var map__45726 = p__45725;
var map__45726__$1 = (((((!((map__45726 == null))))?(((((map__45726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45726):map__45726);
var msg = map__45726__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45726__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__45728 = cljs.core.seq(updates);
var chunk__45730 = null;
var count__45731 = (0);
var i__45732 = (0);
while(true){
if((i__45732 < count__45731)){
var path = chunk__45730.cljs$core$IIndexed$_nth$arity$2(null,i__45732);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45762_45889 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45766_45890 = null;
var count__45767_45891 = (0);
var i__45768_45892 = (0);
while(true){
if((i__45768_45892 < count__45767_45891)){
var node_45893 = chunk__45766_45890.cljs$core$IIndexed$_nth$arity$2(null,i__45768_45892);
if(cljs.core.not(node_45893.shadow$old)){
var path_match_45894 = shadow.cljs.devtools.client.browser.match_paths(node_45893.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45894)){
var new_link_45895 = (function (){var G__45774 = node_45893.cloneNode(true);
G__45774.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45894),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45774;
})();
(node_45893.shadow$old = true);

(new_link_45895.onload = ((function (seq__45762_45889,chunk__45766_45890,count__45767_45891,i__45768_45892,seq__45728,chunk__45730,count__45731,i__45732,new_link_45895,path_match_45894,node_45893,path,map__45726,map__45726__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45893);
});})(seq__45762_45889,chunk__45766_45890,count__45767_45891,i__45768_45892,seq__45728,chunk__45730,count__45731,i__45732,new_link_45895,path_match_45894,node_45893,path,map__45726,map__45726__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45894], 0));

goog.dom.insertSiblingAfter(new_link_45895,node_45893);


var G__45896 = seq__45762_45889;
var G__45897 = chunk__45766_45890;
var G__45898 = count__45767_45891;
var G__45899 = (i__45768_45892 + (1));
seq__45762_45889 = G__45896;
chunk__45766_45890 = G__45897;
count__45767_45891 = G__45898;
i__45768_45892 = G__45899;
continue;
} else {
var G__45900 = seq__45762_45889;
var G__45901 = chunk__45766_45890;
var G__45902 = count__45767_45891;
var G__45903 = (i__45768_45892 + (1));
seq__45762_45889 = G__45900;
chunk__45766_45890 = G__45901;
count__45767_45891 = G__45902;
i__45768_45892 = G__45903;
continue;
}
} else {
var G__45904 = seq__45762_45889;
var G__45905 = chunk__45766_45890;
var G__45906 = count__45767_45891;
var G__45907 = (i__45768_45892 + (1));
seq__45762_45889 = G__45904;
chunk__45766_45890 = G__45905;
count__45767_45891 = G__45906;
i__45768_45892 = G__45907;
continue;
}
} else {
var temp__5735__auto___45908 = cljs.core.seq(seq__45762_45889);
if(temp__5735__auto___45908){
var seq__45762_45909__$1 = temp__5735__auto___45908;
if(cljs.core.chunked_seq_QMARK_(seq__45762_45909__$1)){
var c__4556__auto___45910 = cljs.core.chunk_first(seq__45762_45909__$1);
var G__45911 = cljs.core.chunk_rest(seq__45762_45909__$1);
var G__45912 = c__4556__auto___45910;
var G__45913 = cljs.core.count(c__4556__auto___45910);
var G__45914 = (0);
seq__45762_45889 = G__45911;
chunk__45766_45890 = G__45912;
count__45767_45891 = G__45913;
i__45768_45892 = G__45914;
continue;
} else {
var node_45915 = cljs.core.first(seq__45762_45909__$1);
if(cljs.core.not(node_45915.shadow$old)){
var path_match_45916 = shadow.cljs.devtools.client.browser.match_paths(node_45915.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45916)){
var new_link_45917 = (function (){var G__45775 = node_45915.cloneNode(true);
G__45775.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45916),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45775;
})();
(node_45915.shadow$old = true);

(new_link_45917.onload = ((function (seq__45762_45889,chunk__45766_45890,count__45767_45891,i__45768_45892,seq__45728,chunk__45730,count__45731,i__45732,new_link_45917,path_match_45916,node_45915,seq__45762_45909__$1,temp__5735__auto___45908,path,map__45726,map__45726__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45915);
});})(seq__45762_45889,chunk__45766_45890,count__45767_45891,i__45768_45892,seq__45728,chunk__45730,count__45731,i__45732,new_link_45917,path_match_45916,node_45915,seq__45762_45909__$1,temp__5735__auto___45908,path,map__45726,map__45726__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45916], 0));

goog.dom.insertSiblingAfter(new_link_45917,node_45915);


var G__45918 = cljs.core.next(seq__45762_45909__$1);
var G__45919 = null;
var G__45920 = (0);
var G__45921 = (0);
seq__45762_45889 = G__45918;
chunk__45766_45890 = G__45919;
count__45767_45891 = G__45920;
i__45768_45892 = G__45921;
continue;
} else {
var G__45922 = cljs.core.next(seq__45762_45909__$1);
var G__45923 = null;
var G__45924 = (0);
var G__45925 = (0);
seq__45762_45889 = G__45922;
chunk__45766_45890 = G__45923;
count__45767_45891 = G__45924;
i__45768_45892 = G__45925;
continue;
}
} else {
var G__45926 = cljs.core.next(seq__45762_45909__$1);
var G__45927 = null;
var G__45928 = (0);
var G__45929 = (0);
seq__45762_45889 = G__45926;
chunk__45766_45890 = G__45927;
count__45767_45891 = G__45928;
i__45768_45892 = G__45929;
continue;
}
}
} else {
}
}
break;
}


var G__45930 = seq__45728;
var G__45931 = chunk__45730;
var G__45932 = count__45731;
var G__45933 = (i__45732 + (1));
seq__45728 = G__45930;
chunk__45730 = G__45931;
count__45731 = G__45932;
i__45732 = G__45933;
continue;
} else {
var G__45934 = seq__45728;
var G__45935 = chunk__45730;
var G__45936 = count__45731;
var G__45937 = (i__45732 + (1));
seq__45728 = G__45934;
chunk__45730 = G__45935;
count__45731 = G__45936;
i__45732 = G__45937;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45728);
if(temp__5735__auto__){
var seq__45728__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45728__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45728__$1);
var G__45938 = cljs.core.chunk_rest(seq__45728__$1);
var G__45939 = c__4556__auto__;
var G__45940 = cljs.core.count(c__4556__auto__);
var G__45941 = (0);
seq__45728 = G__45938;
chunk__45730 = G__45939;
count__45731 = G__45940;
i__45732 = G__45941;
continue;
} else {
var path = cljs.core.first(seq__45728__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45776_45942 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45780_45943 = null;
var count__45781_45944 = (0);
var i__45782_45945 = (0);
while(true){
if((i__45782_45945 < count__45781_45944)){
var node_45946 = chunk__45780_45943.cljs$core$IIndexed$_nth$arity$2(null,i__45782_45945);
if(cljs.core.not(node_45946.shadow$old)){
var path_match_45947 = shadow.cljs.devtools.client.browser.match_paths(node_45946.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45947)){
var new_link_45948 = (function (){var G__45788 = node_45946.cloneNode(true);
G__45788.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45947),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45788;
})();
(node_45946.shadow$old = true);

(new_link_45948.onload = ((function (seq__45776_45942,chunk__45780_45943,count__45781_45944,i__45782_45945,seq__45728,chunk__45730,count__45731,i__45732,new_link_45948,path_match_45947,node_45946,path,seq__45728__$1,temp__5735__auto__,map__45726,map__45726__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45946);
});})(seq__45776_45942,chunk__45780_45943,count__45781_45944,i__45782_45945,seq__45728,chunk__45730,count__45731,i__45732,new_link_45948,path_match_45947,node_45946,path,seq__45728__$1,temp__5735__auto__,map__45726,map__45726__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45947], 0));

goog.dom.insertSiblingAfter(new_link_45948,node_45946);


var G__45949 = seq__45776_45942;
var G__45950 = chunk__45780_45943;
var G__45951 = count__45781_45944;
var G__45952 = (i__45782_45945 + (1));
seq__45776_45942 = G__45949;
chunk__45780_45943 = G__45950;
count__45781_45944 = G__45951;
i__45782_45945 = G__45952;
continue;
} else {
var G__45953 = seq__45776_45942;
var G__45954 = chunk__45780_45943;
var G__45955 = count__45781_45944;
var G__45956 = (i__45782_45945 + (1));
seq__45776_45942 = G__45953;
chunk__45780_45943 = G__45954;
count__45781_45944 = G__45955;
i__45782_45945 = G__45956;
continue;
}
} else {
var G__45957 = seq__45776_45942;
var G__45958 = chunk__45780_45943;
var G__45959 = count__45781_45944;
var G__45960 = (i__45782_45945 + (1));
seq__45776_45942 = G__45957;
chunk__45780_45943 = G__45958;
count__45781_45944 = G__45959;
i__45782_45945 = G__45960;
continue;
}
} else {
var temp__5735__auto___45961__$1 = cljs.core.seq(seq__45776_45942);
if(temp__5735__auto___45961__$1){
var seq__45776_45962__$1 = temp__5735__auto___45961__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45776_45962__$1)){
var c__4556__auto___45963 = cljs.core.chunk_first(seq__45776_45962__$1);
var G__45964 = cljs.core.chunk_rest(seq__45776_45962__$1);
var G__45965 = c__4556__auto___45963;
var G__45966 = cljs.core.count(c__4556__auto___45963);
var G__45967 = (0);
seq__45776_45942 = G__45964;
chunk__45780_45943 = G__45965;
count__45781_45944 = G__45966;
i__45782_45945 = G__45967;
continue;
} else {
var node_45968 = cljs.core.first(seq__45776_45962__$1);
if(cljs.core.not(node_45968.shadow$old)){
var path_match_45969 = shadow.cljs.devtools.client.browser.match_paths(node_45968.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45969)){
var new_link_45970 = (function (){var G__45789 = node_45968.cloneNode(true);
G__45789.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45969),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45789;
})();
(node_45968.shadow$old = true);

(new_link_45970.onload = ((function (seq__45776_45942,chunk__45780_45943,count__45781_45944,i__45782_45945,seq__45728,chunk__45730,count__45731,i__45732,new_link_45970,path_match_45969,node_45968,seq__45776_45962__$1,temp__5735__auto___45961__$1,path,seq__45728__$1,temp__5735__auto__,map__45726,map__45726__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45968);
});})(seq__45776_45942,chunk__45780_45943,count__45781_45944,i__45782_45945,seq__45728,chunk__45730,count__45731,i__45732,new_link_45970,path_match_45969,node_45968,seq__45776_45962__$1,temp__5735__auto___45961__$1,path,seq__45728__$1,temp__5735__auto__,map__45726,map__45726__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45969], 0));

goog.dom.insertSiblingAfter(new_link_45970,node_45968);


var G__45971 = cljs.core.next(seq__45776_45962__$1);
var G__45972 = null;
var G__45973 = (0);
var G__45974 = (0);
seq__45776_45942 = G__45971;
chunk__45780_45943 = G__45972;
count__45781_45944 = G__45973;
i__45782_45945 = G__45974;
continue;
} else {
var G__45975 = cljs.core.next(seq__45776_45962__$1);
var G__45976 = null;
var G__45977 = (0);
var G__45978 = (0);
seq__45776_45942 = G__45975;
chunk__45780_45943 = G__45976;
count__45781_45944 = G__45977;
i__45782_45945 = G__45978;
continue;
}
} else {
var G__45979 = cljs.core.next(seq__45776_45962__$1);
var G__45980 = null;
var G__45981 = (0);
var G__45982 = (0);
seq__45776_45942 = G__45979;
chunk__45780_45943 = G__45980;
count__45781_45944 = G__45981;
i__45782_45945 = G__45982;
continue;
}
}
} else {
}
}
break;
}


var G__45983 = cljs.core.next(seq__45728__$1);
var G__45984 = null;
var G__45985 = (0);
var G__45986 = (0);
seq__45728 = G__45983;
chunk__45730 = G__45984;
count__45731 = G__45985;
i__45732 = G__45986;
continue;
} else {
var G__45987 = cljs.core.next(seq__45728__$1);
var G__45988 = null;
var G__45989 = (0);
var G__45990 = (0);
seq__45728 = G__45987;
chunk__45730 = G__45988;
count__45731 = G__45989;
i__45732 = G__45990;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__45790){
var map__45791 = p__45790;
var map__45791__$1 = (((((!((map__45791 == null))))?(((((map__45791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45791):map__45791);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45791__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__45793){
var map__45794 = p__45793;
var map__45794__$1 = (((((!((map__45794 == null))))?(((((map__45794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45794):map__45794);
var _ = map__45794__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45794__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45796,done,error){
var map__45797 = p__45796;
var map__45797__$1 = (((((!((map__45797 == null))))?(((((map__45797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45797):map__45797);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45797__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45799,done,error){
var map__45800 = p__45799;
var map__45800__$1 = (((((!((map__45800 == null))))?(((((map__45800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45800):map__45800);
var msg = map__45800__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45800__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45800__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45800__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45802){
var map__45803 = p__45802;
var map__45803__$1 = (((((!((map__45803 == null))))?(((((map__45803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45803):map__45803);
var src = map__45803__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45803__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45805 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45805) : done.call(null,G__45805));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45806){
var map__45807 = p__45806;
var map__45807__$1 = (((((!((map__45807 == null))))?(((((map__45807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45807):map__45807);
var msg__$1 = map__45807__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45807__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45809){var ex = e45809;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45810){
var map__45811 = p__45810;
var map__45811__$1 = (((((!((map__45811 == null))))?(((((map__45811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45811):map__45811);
var env = map__45811__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45811__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__45813){
var map__45814 = p__45813;
var map__45814__$1 = (((((!((map__45814 == null))))?(((((map__45814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45814):map__45814);
var msg = map__45814__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45814__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45816){
var map__45817 = p__45816;
var map__45817__$1 = (((((!((map__45817 == null))))?(((((map__45817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45817):map__45817);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45817__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45817__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45819){
var map__45820 = p__45819;
var map__45820__$1 = (((((!((map__45820 == null))))?(((((map__45820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45820):map__45820);
var svc = map__45820__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
