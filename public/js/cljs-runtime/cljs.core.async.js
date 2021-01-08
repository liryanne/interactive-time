goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__41623 = arguments.length;
switch (G__41623) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41624 = (function (f,blockable,meta41625){
this.f = f;
this.blockable = blockable;
this.meta41625 = meta41625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41626,meta41625__$1){
var self__ = this;
var _41626__$1 = this;
return (new cljs.core.async.t_cljs$core$async41624(self__.f,self__.blockable,meta41625__$1));
}));

(cljs.core.async.t_cljs$core$async41624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41626){
var self__ = this;
var _41626__$1 = this;
return self__.meta41625;
}));

(cljs.core.async.t_cljs$core$async41624.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41624.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41624.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async41624.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async41624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41625","meta41625",689979254,null)], null);
}));

(cljs.core.async.t_cljs$core$async41624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41624");

(cljs.core.async.t_cljs$core$async41624.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41624.
 */
cljs.core.async.__GT_t_cljs$core$async41624 = (function cljs$core$async$__GT_t_cljs$core$async41624(f__$1,blockable__$1,meta41625){
return (new cljs.core.async.t_cljs$core$async41624(f__$1,blockable__$1,meta41625));
});

}

return (new cljs.core.async.t_cljs$core$async41624(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__41629 = arguments.length;
switch (G__41629) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__41631 = arguments.length;
switch (G__41631) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__41633 = arguments.length;
switch (G__41633) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_43708 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43708) : fn1.call(null,val_43708));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43708) : fn1.call(null,val_43708));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__41635 = arguments.length;
switch (G__41635) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___43716 = n;
var x_43717 = (0);
while(true){
if((x_43717 < n__4613__auto___43716)){
(a[x_43717] = x_43717);

var G__43720 = (x_43717 + (1));
x_43717 = G__43720;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41636 = (function (flag,meta41637){
this.flag = flag;
this.meta41637 = meta41637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41638,meta41637__$1){
var self__ = this;
var _41638__$1 = this;
return (new cljs.core.async.t_cljs$core$async41636(self__.flag,meta41637__$1));
}));

(cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41638){
var self__ = this;
var _41638__$1 = this;
return self__.meta41637;
}));

(cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async41636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41637","meta41637",-2001241546,null)], null);
}));

(cljs.core.async.t_cljs$core$async41636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41636");

(cljs.core.async.t_cljs$core$async41636.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41636.
 */
cljs.core.async.__GT_t_cljs$core$async41636 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41636(flag__$1,meta41637){
return (new cljs.core.async.t_cljs$core$async41636(flag__$1,meta41637));
});

}

return (new cljs.core.async.t_cljs$core$async41636(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41643 = (function (flag,cb,meta41644){
this.flag = flag;
this.cb = cb;
this.meta41644 = meta41644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41645,meta41644__$1){
var self__ = this;
var _41645__$1 = this;
return (new cljs.core.async.t_cljs$core$async41643(self__.flag,self__.cb,meta41644__$1));
}));

(cljs.core.async.t_cljs$core$async41643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41645){
var self__ = this;
var _41645__$1 = this;
return self__.meta41644;
}));

(cljs.core.async.t_cljs$core$async41643.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41643.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async41643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41644","meta41644",-68128393,null)], null);
}));

(cljs.core.async.t_cljs$core$async41643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41643");

(cljs.core.async.t_cljs$core$async41643.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41643.
 */
cljs.core.async.__GT_t_cljs$core$async41643 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41643(flag__$1,cb__$1,meta41644){
return (new cljs.core.async.t_cljs$core$async41643(flag__$1,cb__$1,meta41644));
});

}

return (new cljs.core.async.t_cljs$core$async41643(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41646_SHARP_){
var G__41650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41646_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41650) : fret.call(null,G__41650));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41647_SHARP_){
var G__41651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41647_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41651) : fret.call(null,G__41651));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43734 = (i + (1));
i = G__43734;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43735 = arguments.length;
var i__4737__auto___43736 = (0);
while(true){
if((i__4737__auto___43736 < len__4736__auto___43735)){
args__4742__auto__.push((arguments[i__4737__auto___43736]));

var G__43737 = (i__4737__auto___43736 + (1));
i__4737__auto___43736 = G__43737;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41657){
var map__41658 = p__41657;
var map__41658__$1 = (((((!((map__41658 == null))))?(((((map__41658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41658):map__41658);
var opts = map__41658__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41652){
var G__41653 = cljs.core.first(seq41652);
var seq41652__$1 = cljs.core.next(seq41652);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41653,seq41652__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__41663 = arguments.length;
switch (G__41663) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41565__auto___43740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_41695){
var state_val_41696 = (state_41695[(1)]);
if((state_val_41696 === (7))){
var inst_41691 = (state_41695[(2)]);
var state_41695__$1 = state_41695;
var statearr_41697_43741 = state_41695__$1;
(statearr_41697_43741[(2)] = inst_41691);

(statearr_41697_43741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (1))){
var state_41695__$1 = state_41695;
var statearr_41698_43742 = state_41695__$1;
(statearr_41698_43742[(2)] = null);

(statearr_41698_43742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (4))){
var inst_41674 = (state_41695[(7)]);
var inst_41674__$1 = (state_41695[(2)]);
var inst_41675 = (inst_41674__$1 == null);
var state_41695__$1 = (function (){var statearr_41699 = state_41695;
(statearr_41699[(7)] = inst_41674__$1);

return statearr_41699;
})();
if(cljs.core.truth_(inst_41675)){
var statearr_41700_43746 = state_41695__$1;
(statearr_41700_43746[(1)] = (5));

} else {
var statearr_41701_43748 = state_41695__$1;
(statearr_41701_43748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (13))){
var state_41695__$1 = state_41695;
var statearr_41706_43753 = state_41695__$1;
(statearr_41706_43753[(2)] = null);

(statearr_41706_43753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (6))){
var inst_41674 = (state_41695[(7)]);
var state_41695__$1 = state_41695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41695__$1,(11),to,inst_41674);
} else {
if((state_val_41696 === (3))){
var inst_41693 = (state_41695[(2)]);
var state_41695__$1 = state_41695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41695__$1,inst_41693);
} else {
if((state_val_41696 === (12))){
var state_41695__$1 = state_41695;
var statearr_41707_43754 = state_41695__$1;
(statearr_41707_43754[(2)] = null);

(statearr_41707_43754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (2))){
var state_41695__$1 = state_41695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41695__$1,(4),from);
} else {
if((state_val_41696 === (11))){
var inst_41684 = (state_41695[(2)]);
var state_41695__$1 = state_41695;
if(cljs.core.truth_(inst_41684)){
var statearr_41708_43757 = state_41695__$1;
(statearr_41708_43757[(1)] = (12));

} else {
var statearr_41709_43758 = state_41695__$1;
(statearr_41709_43758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (9))){
var state_41695__$1 = state_41695;
var statearr_41710_43759 = state_41695__$1;
(statearr_41710_43759[(2)] = null);

(statearr_41710_43759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (5))){
var state_41695__$1 = state_41695;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41711_43760 = state_41695__$1;
(statearr_41711_43760[(1)] = (8));

} else {
var statearr_41712_43761 = state_41695__$1;
(statearr_41712_43761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (14))){
var inst_41689 = (state_41695[(2)]);
var state_41695__$1 = state_41695;
var statearr_41713_43762 = state_41695__$1;
(statearr_41713_43762[(2)] = inst_41689);

(statearr_41713_43762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (10))){
var inst_41681 = (state_41695[(2)]);
var state_41695__$1 = state_41695;
var statearr_41714_43763 = state_41695__$1;
(statearr_41714_43763[(2)] = inst_41681);

(statearr_41714_43763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (8))){
var inst_41678 = cljs.core.async.close_BANG_(to);
var state_41695__$1 = state_41695;
var statearr_41715_43764 = state_41695__$1;
(statearr_41715_43764[(2)] = inst_41678);

(statearr_41715_43764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_41720 = [null,null,null,null,null,null,null,null];
(statearr_41720[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_41720[(1)] = (1));

return statearr_41720;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_41695){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_41695);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e41721){var ex__41430__auto__ = e41721;
var statearr_41722_43765 = state_41695;
(statearr_41722_43765[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_41695[(4)]))){
var statearr_41723_43766 = state_41695;
(statearr_41723_43766[(1)] = cljs.core.first((state_41695[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43767 = state_41695;
state_41695 = G__43767;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_41695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_41695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_41724 = f__41566__auto__();
(statearr_41724[(6)] = c__41565__auto___43740);

return statearr_41724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__41725){
var vec__41726 = p__41725;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41726,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41726,(1),null);
var job = vec__41726;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__41565__auto___43769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_41733){
var state_val_41734 = (state_41733[(1)]);
if((state_val_41734 === (1))){
var state_41733__$1 = state_41733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41733__$1,(2),res,v);
} else {
if((state_val_41734 === (2))){
var inst_41730 = (state_41733[(2)]);
var inst_41731 = cljs.core.async.close_BANG_(res);
var state_41733__$1 = (function (){var statearr_41735 = state_41733;
(statearr_41735[(7)] = inst_41730);

return statearr_41735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41733__$1,inst_41731);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0 = (function (){
var statearr_41736 = [null,null,null,null,null,null,null,null];
(statearr_41736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__);

(statearr_41736[(1)] = (1));

return statearr_41736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1 = (function (state_41733){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_41733);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e41737){var ex__41430__auto__ = e41737;
var statearr_41738_43771 = state_41733;
(statearr_41738_43771[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_41733[(4)]))){
var statearr_41739_43772 = state_41733;
(statearr_41739_43772[(1)] = cljs.core.first((state_41733[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43773 = state_41733;
state_41733 = G__43773;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__ = function(state_41733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1.call(this,state_41733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_41740 = f__41566__auto__();
(statearr_41740[(6)] = c__41565__auto___43769);

return statearr_41740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__41741){
var vec__41742 = p__41741;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41742,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41742,(1),null);
var job = vec__41742;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___43776 = n;
var __43777 = (0);
while(true){
if((__43777 < n__4613__auto___43776)){
var G__41745_43778 = type;
var G__41745_43779__$1 = (((G__41745_43778 instanceof cljs.core.Keyword))?G__41745_43778.fqn:null);
switch (G__41745_43779__$1) {
case "compute":
var c__41565__auto___43781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43777,c__41565__auto___43781,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async){
return (function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = ((function (__43777,c__41565__auto___43781,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async){
return (function (state_41759){
var state_val_41760 = (state_41759[(1)]);
if((state_val_41760 === (1))){
var state_41759__$1 = state_41759;
var statearr_41762_43782 = state_41759__$1;
(statearr_41762_43782[(2)] = null);

(statearr_41762_43782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (2))){
var state_41759__$1 = state_41759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41759__$1,(4),jobs);
} else {
if((state_val_41760 === (3))){
var inst_41757 = (state_41759[(2)]);
var state_41759__$1 = state_41759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41759__$1,inst_41757);
} else {
if((state_val_41760 === (4))){
var inst_41748 = (state_41759[(2)]);
var inst_41749 = process(inst_41748);
var state_41759__$1 = state_41759;
if(cljs.core.truth_(inst_41749)){
var statearr_41764_43784 = state_41759__$1;
(statearr_41764_43784[(1)] = (5));

} else {
var statearr_41765_43785 = state_41759__$1;
(statearr_41765_43785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (5))){
var state_41759__$1 = state_41759;
var statearr_41767_43787 = state_41759__$1;
(statearr_41767_43787[(2)] = null);

(statearr_41767_43787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (6))){
var state_41759__$1 = state_41759;
var statearr_41769_43788 = state_41759__$1;
(statearr_41769_43788[(2)] = null);

(statearr_41769_43788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41760 === (7))){
var inst_41755 = (state_41759[(2)]);
var state_41759__$1 = state_41759;
var statearr_41770_43789 = state_41759__$1;
(statearr_41770_43789[(2)] = inst_41755);

(statearr_41770_43789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43777,c__41565__auto___43781,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async))
;
return ((function (__43777,switch__41426__auto__,c__41565__auto___43781,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0 = (function (){
var statearr_41779 = [null,null,null,null,null,null,null];
(statearr_41779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__);

(statearr_41779[(1)] = (1));

return statearr_41779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1 = (function (state_41759){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_41759);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e41780){var ex__41430__auto__ = e41780;
var statearr_41781_43790 = state_41759;
(statearr_41781_43790[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_41759[(4)]))){
var statearr_41782_43791 = state_41759;
(statearr_41782_43791[(1)] = cljs.core.first((state_41759[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43793 = state_41759;
state_41759 = G__43793;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__ = function(state_41759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1.call(this,state_41759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__;
})()
;})(__43777,switch__41426__auto__,c__41565__auto___43781,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async))
})();
var state__41567__auto__ = (function (){var statearr_41786 = f__41566__auto__();
(statearr_41786[(6)] = c__41565__auto___43781);

return statearr_41786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
});})(__43777,c__41565__auto___43781,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async))
);


break;
case "async":
var c__41565__auto___43795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43777,c__41565__auto___43795,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async){
return (function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = ((function (__43777,c__41565__auto___43795,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async){
return (function (state_41802){
var state_val_41803 = (state_41802[(1)]);
if((state_val_41803 === (1))){
var state_41802__$1 = state_41802;
var statearr_41807_43796 = state_41802__$1;
(statearr_41807_43796[(2)] = null);

(statearr_41807_43796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (2))){
var state_41802__$1 = state_41802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41802__$1,(4),jobs);
} else {
if((state_val_41803 === (3))){
var inst_41800 = (state_41802[(2)]);
var state_41802__$1 = state_41802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41802__$1,inst_41800);
} else {
if((state_val_41803 === (4))){
var inst_41792 = (state_41802[(2)]);
var inst_41793 = async(inst_41792);
var state_41802__$1 = state_41802;
if(cljs.core.truth_(inst_41793)){
var statearr_41808_43797 = state_41802__$1;
(statearr_41808_43797[(1)] = (5));

} else {
var statearr_41809_43798 = state_41802__$1;
(statearr_41809_43798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (5))){
var state_41802__$1 = state_41802;
var statearr_41810_43800 = state_41802__$1;
(statearr_41810_43800[(2)] = null);

(statearr_41810_43800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (6))){
var state_41802__$1 = state_41802;
var statearr_41811_43801 = state_41802__$1;
(statearr_41811_43801[(2)] = null);

(statearr_41811_43801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (7))){
var inst_41798 = (state_41802[(2)]);
var state_41802__$1 = state_41802;
var statearr_41812_43803 = state_41802__$1;
(statearr_41812_43803[(2)] = inst_41798);

(statearr_41812_43803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43777,c__41565__auto___43795,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async))
;
return ((function (__43777,switch__41426__auto__,c__41565__auto___43795,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0 = (function (){
var statearr_41815 = [null,null,null,null,null,null,null];
(statearr_41815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__);

(statearr_41815[(1)] = (1));

return statearr_41815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1 = (function (state_41802){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_41802);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e41816){var ex__41430__auto__ = e41816;
var statearr_41817_43805 = state_41802;
(statearr_41817_43805[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_41802[(4)]))){
var statearr_41818_43806 = state_41802;
(statearr_41818_43806[(1)] = cljs.core.first((state_41802[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43807 = state_41802;
state_41802 = G__43807;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__ = function(state_41802){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1.call(this,state_41802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__;
})()
;})(__43777,switch__41426__auto__,c__41565__auto___43795,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async))
})();
var state__41567__auto__ = (function (){var statearr_41822 = f__41566__auto__();
(statearr_41822[(6)] = c__41565__auto___43795);

return statearr_41822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
});})(__43777,c__41565__auto___43795,G__41745_43778,G__41745_43779__$1,n__4613__auto___43776,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41745_43779__$1)].join('')));

}

var G__43808 = (__43777 + (1));
__43777 = G__43808;
continue;
} else {
}
break;
}

var c__41565__auto___43809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_41844){
var state_val_41845 = (state_41844[(1)]);
if((state_val_41845 === (7))){
var inst_41840 = (state_41844[(2)]);
var state_41844__$1 = state_41844;
var statearr_41846_43810 = state_41844__$1;
(statearr_41846_43810[(2)] = inst_41840);

(statearr_41846_43810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41845 === (1))){
var state_41844__$1 = state_41844;
var statearr_41847_43812 = state_41844__$1;
(statearr_41847_43812[(2)] = null);

(statearr_41847_43812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41845 === (4))){
var inst_41825 = (state_41844[(7)]);
var inst_41825__$1 = (state_41844[(2)]);
var inst_41826 = (inst_41825__$1 == null);
var state_41844__$1 = (function (){var statearr_41848 = state_41844;
(statearr_41848[(7)] = inst_41825__$1);

return statearr_41848;
})();
if(cljs.core.truth_(inst_41826)){
var statearr_41849_43814 = state_41844__$1;
(statearr_41849_43814[(1)] = (5));

} else {
var statearr_41850_43815 = state_41844__$1;
(statearr_41850_43815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41845 === (6))){
var inst_41825 = (state_41844[(7)]);
var inst_41830 = (state_41844[(8)]);
var inst_41830__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_41831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41832 = [inst_41825,inst_41830__$1];
var inst_41833 = (new cljs.core.PersistentVector(null,2,(5),inst_41831,inst_41832,null));
var state_41844__$1 = (function (){var statearr_41851 = state_41844;
(statearr_41851[(8)] = inst_41830__$1);

return statearr_41851;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41844__$1,(8),jobs,inst_41833);
} else {
if((state_val_41845 === (3))){
var inst_41842 = (state_41844[(2)]);
var state_41844__$1 = state_41844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41844__$1,inst_41842);
} else {
if((state_val_41845 === (2))){
var state_41844__$1 = state_41844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41844__$1,(4),from);
} else {
if((state_val_41845 === (9))){
var inst_41837 = (state_41844[(2)]);
var state_41844__$1 = (function (){var statearr_41852 = state_41844;
(statearr_41852[(9)] = inst_41837);

return statearr_41852;
})();
var statearr_41853_43816 = state_41844__$1;
(statearr_41853_43816[(2)] = null);

(statearr_41853_43816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41845 === (5))){
var inst_41828 = cljs.core.async.close_BANG_(jobs);
var state_41844__$1 = state_41844;
var statearr_41854_43817 = state_41844__$1;
(statearr_41854_43817[(2)] = inst_41828);

(statearr_41854_43817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41845 === (8))){
var inst_41830 = (state_41844[(8)]);
var inst_41835 = (state_41844[(2)]);
var state_41844__$1 = (function (){var statearr_41855 = state_41844;
(statearr_41855[(10)] = inst_41835);

return statearr_41855;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41844__$1,(9),results,inst_41830);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0 = (function (){
var statearr_41856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__);

(statearr_41856[(1)] = (1));

return statearr_41856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1 = (function (state_41844){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_41844);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e41857){var ex__41430__auto__ = e41857;
var statearr_41858_43820 = state_41844;
(statearr_41858_43820[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_41844[(4)]))){
var statearr_41859_43821 = state_41844;
(statearr_41859_43821[(1)] = cljs.core.first((state_41844[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43822 = state_41844;
state_41844 = G__43822;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__ = function(state_41844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1.call(this,state_41844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_41860 = f__41566__auto__();
(statearr_41860[(6)] = c__41565__auto___43809);

return statearr_41860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


var c__41565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_41900){
var state_val_41901 = (state_41900[(1)]);
if((state_val_41901 === (7))){
var inst_41895 = (state_41900[(2)]);
var state_41900__$1 = state_41900;
var statearr_41902_43823 = state_41900__$1;
(statearr_41902_43823[(2)] = inst_41895);

(statearr_41902_43823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (20))){
var state_41900__$1 = state_41900;
var statearr_41903_43824 = state_41900__$1;
(statearr_41903_43824[(2)] = null);

(statearr_41903_43824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (1))){
var state_41900__$1 = state_41900;
var statearr_41904_43825 = state_41900__$1;
(statearr_41904_43825[(2)] = null);

(statearr_41904_43825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (4))){
var inst_41863 = (state_41900[(7)]);
var inst_41863__$1 = (state_41900[(2)]);
var inst_41864 = (inst_41863__$1 == null);
var state_41900__$1 = (function (){var statearr_41905 = state_41900;
(statearr_41905[(7)] = inst_41863__$1);

return statearr_41905;
})();
if(cljs.core.truth_(inst_41864)){
var statearr_41906_43827 = state_41900__$1;
(statearr_41906_43827[(1)] = (5));

} else {
var statearr_41907_43828 = state_41900__$1;
(statearr_41907_43828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (15))){
var inst_41876 = (state_41900[(8)]);
var state_41900__$1 = state_41900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41900__$1,(18),to,inst_41876);
} else {
if((state_val_41901 === (21))){
var inst_41889 = (state_41900[(2)]);
var state_41900__$1 = state_41900;
var statearr_41908_43829 = state_41900__$1;
(statearr_41908_43829[(2)] = inst_41889);

(statearr_41908_43829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (13))){
var inst_41891 = (state_41900[(2)]);
var state_41900__$1 = (function (){var statearr_41909 = state_41900;
(statearr_41909[(9)] = inst_41891);

return statearr_41909;
})();
var statearr_41910_43830 = state_41900__$1;
(statearr_41910_43830[(2)] = null);

(statearr_41910_43830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (6))){
var inst_41863 = (state_41900[(7)]);
var state_41900__$1 = state_41900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41900__$1,(11),inst_41863);
} else {
if((state_val_41901 === (17))){
var inst_41884 = (state_41900[(2)]);
var state_41900__$1 = state_41900;
if(cljs.core.truth_(inst_41884)){
var statearr_41911_43831 = state_41900__$1;
(statearr_41911_43831[(1)] = (19));

} else {
var statearr_41912_43832 = state_41900__$1;
(statearr_41912_43832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (3))){
var inst_41897 = (state_41900[(2)]);
var state_41900__$1 = state_41900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41900__$1,inst_41897);
} else {
if((state_val_41901 === (12))){
var inst_41873 = (state_41900[(10)]);
var state_41900__$1 = state_41900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41900__$1,(14),inst_41873);
} else {
if((state_val_41901 === (2))){
var state_41900__$1 = state_41900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41900__$1,(4),results);
} else {
if((state_val_41901 === (19))){
var state_41900__$1 = state_41900;
var statearr_41917_43837 = state_41900__$1;
(statearr_41917_43837[(2)] = null);

(statearr_41917_43837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (11))){
var inst_41873 = (state_41900[(2)]);
var state_41900__$1 = (function (){var statearr_41920 = state_41900;
(statearr_41920[(10)] = inst_41873);

return statearr_41920;
})();
var statearr_41925_43838 = state_41900__$1;
(statearr_41925_43838[(2)] = null);

(statearr_41925_43838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (9))){
var state_41900__$1 = state_41900;
var statearr_41933_43839 = state_41900__$1;
(statearr_41933_43839[(2)] = null);

(statearr_41933_43839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (5))){
var state_41900__$1 = state_41900;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41936_43840 = state_41900__$1;
(statearr_41936_43840[(1)] = (8));

} else {
var statearr_41937_43841 = state_41900__$1;
(statearr_41937_43841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (14))){
var inst_41876 = (state_41900[(8)]);
var inst_41876__$1 = (state_41900[(2)]);
var inst_41877 = (inst_41876__$1 == null);
var inst_41878 = cljs.core.not(inst_41877);
var state_41900__$1 = (function (){var statearr_41942 = state_41900;
(statearr_41942[(8)] = inst_41876__$1);

return statearr_41942;
})();
if(inst_41878){
var statearr_41943_43842 = state_41900__$1;
(statearr_41943_43842[(1)] = (15));

} else {
var statearr_41944_43843 = state_41900__$1;
(statearr_41944_43843[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (16))){
var state_41900__$1 = state_41900;
var statearr_41945_43844 = state_41900__$1;
(statearr_41945_43844[(2)] = false);

(statearr_41945_43844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (10))){
var inst_41870 = (state_41900[(2)]);
var state_41900__$1 = state_41900;
var statearr_41946_43847 = state_41900__$1;
(statearr_41946_43847[(2)] = inst_41870);

(statearr_41946_43847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (18))){
var inst_41881 = (state_41900[(2)]);
var state_41900__$1 = state_41900;
var statearr_41947_43848 = state_41900__$1;
(statearr_41947_43848[(2)] = inst_41881);

(statearr_41947_43848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41901 === (8))){
var inst_41867 = cljs.core.async.close_BANG_(to);
var state_41900__$1 = state_41900;
var statearr_41948_43849 = state_41900__$1;
(statearr_41948_43849[(2)] = inst_41867);

(statearr_41948_43849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0 = (function (){
var statearr_41949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__);

(statearr_41949[(1)] = (1));

return statearr_41949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1 = (function (state_41900){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_41900);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e41950){var ex__41430__auto__ = e41950;
var statearr_41951_43850 = state_41900;
(statearr_41951_43850[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_41900[(4)]))){
var statearr_41952_43852 = state_41900;
(statearr_41952_43852[(1)] = cljs.core.first((state_41900[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43854 = state_41900;
state_41900 = G__43854;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__ = function(state_41900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1.call(this,state_41900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_41954 = f__41566__auto__();
(statearr_41954[(6)] = c__41565__auto__);

return statearr_41954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));

return c__41565__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41958 = arguments.length;
switch (G__41958) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41960 = arguments.length;
switch (G__41960) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41983 = arguments.length;
switch (G__41983) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__41565__auto___43868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_42030){
var state_val_42031 = (state_42030[(1)]);
if((state_val_42031 === (7))){
var inst_42026 = (state_42030[(2)]);
var state_42030__$1 = state_42030;
var statearr_42036_43872 = state_42030__$1;
(statearr_42036_43872[(2)] = inst_42026);

(statearr_42036_43872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42031 === (1))){
var state_42030__$1 = state_42030;
var statearr_42042_43873 = state_42030__$1;
(statearr_42042_43873[(2)] = null);

(statearr_42042_43873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42031 === (4))){
var inst_41999 = (state_42030[(7)]);
var inst_41999__$1 = (state_42030[(2)]);
var inst_42003 = (inst_41999__$1 == null);
var state_42030__$1 = (function (){var statearr_42050 = state_42030;
(statearr_42050[(7)] = inst_41999__$1);

return statearr_42050;
})();
if(cljs.core.truth_(inst_42003)){
var statearr_42056_43874 = state_42030__$1;
(statearr_42056_43874[(1)] = (5));

} else {
var statearr_42057_43878 = state_42030__$1;
(statearr_42057_43878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42031 === (13))){
var state_42030__$1 = state_42030;
var statearr_42058_43879 = state_42030__$1;
(statearr_42058_43879[(2)] = null);

(statearr_42058_43879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42031 === (6))){
var inst_41999 = (state_42030[(7)]);
var inst_42009 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41999) : p.call(null,inst_41999));
var state_42030__$1 = state_42030;
if(cljs.core.truth_(inst_42009)){
var statearr_42059_43880 = state_42030__$1;
(statearr_42059_43880[(1)] = (9));

} else {
var statearr_42060_43881 = state_42030__$1;
(statearr_42060_43881[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42031 === (3))){
var inst_42028 = (state_42030[(2)]);
var state_42030__$1 = state_42030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42030__$1,inst_42028);
} else {
if((state_val_42031 === (12))){
var state_42030__$1 = state_42030;
var statearr_42061_43886 = state_42030__$1;
(statearr_42061_43886[(2)] = null);

(statearr_42061_43886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42031 === (2))){
var state_42030__$1 = state_42030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42030__$1,(4),ch);
} else {
if((state_val_42031 === (11))){
var inst_41999 = (state_42030[(7)]);
var inst_42017 = (state_42030[(2)]);
var state_42030__$1 = state_42030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42030__$1,(8),inst_42017,inst_41999);
} else {
if((state_val_42031 === (9))){
var state_42030__$1 = state_42030;
var statearr_42062_43890 = state_42030__$1;
(statearr_42062_43890[(2)] = tc);

(statearr_42062_43890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42031 === (5))){
var inst_42005 = cljs.core.async.close_BANG_(tc);
var inst_42007 = cljs.core.async.close_BANG_(fc);
var state_42030__$1 = (function (){var statearr_42064 = state_42030;
(statearr_42064[(8)] = inst_42005);

return statearr_42064;
})();
var statearr_42065_43891 = state_42030__$1;
(statearr_42065_43891[(2)] = inst_42007);

(statearr_42065_43891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42031 === (14))){
var inst_42024 = (state_42030[(2)]);
var state_42030__$1 = state_42030;
var statearr_42066_43895 = state_42030__$1;
(statearr_42066_43895[(2)] = inst_42024);

(statearr_42066_43895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42031 === (10))){
var state_42030__$1 = state_42030;
var statearr_42067_43896 = state_42030__$1;
(statearr_42067_43896[(2)] = fc);

(statearr_42067_43896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42031 === (8))){
var inst_42019 = (state_42030[(2)]);
var state_42030__$1 = state_42030;
if(cljs.core.truth_(inst_42019)){
var statearr_42069_43900 = state_42030__$1;
(statearr_42069_43900[(1)] = (12));

} else {
var statearr_42070_43901 = state_42030__$1;
(statearr_42070_43901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_42071 = [null,null,null,null,null,null,null,null,null];
(statearr_42071[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_42071[(1)] = (1));

return statearr_42071;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_42030){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_42030);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e42072){var ex__41430__auto__ = e42072;
var statearr_42073_43905 = state_42030;
(statearr_42073_43905[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_42030[(4)]))){
var statearr_42074_43906 = state_42030;
(statearr_42074_43906[(1)] = cljs.core.first((state_42030[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43907 = state_42030;
state_42030 = G__43907;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_42030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_42030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_42075 = f__41566__auto__();
(statearr_42075[(6)] = c__41565__auto___43868);

return statearr_42075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_42109){
var state_val_42110 = (state_42109[(1)]);
if((state_val_42110 === (7))){
var inst_42101 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42111_43909 = state_42109__$1;
(statearr_42111_43909[(2)] = inst_42101);

(statearr_42111_43909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (1))){
var inst_42080 = init;
var inst_42081 = inst_42080;
var state_42109__$1 = (function (){var statearr_42113 = state_42109;
(statearr_42113[(7)] = inst_42081);

return statearr_42113;
})();
var statearr_42114_43910 = state_42109__$1;
(statearr_42114_43910[(2)] = null);

(statearr_42114_43910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (4))){
var inst_42088 = (state_42109[(8)]);
var inst_42088__$1 = (state_42109[(2)]);
var inst_42089 = (inst_42088__$1 == null);
var state_42109__$1 = (function (){var statearr_42115 = state_42109;
(statearr_42115[(8)] = inst_42088__$1);

return statearr_42115;
})();
if(cljs.core.truth_(inst_42089)){
var statearr_42116_43911 = state_42109__$1;
(statearr_42116_43911[(1)] = (5));

} else {
var statearr_42117_43912 = state_42109__$1;
(statearr_42117_43912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (6))){
var inst_42092 = (state_42109[(9)]);
var inst_42088 = (state_42109[(8)]);
var inst_42081 = (state_42109[(7)]);
var inst_42092__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42081,inst_42088) : f.call(null,inst_42081,inst_42088));
var inst_42093 = cljs.core.reduced_QMARK_(inst_42092__$1);
var state_42109__$1 = (function (){var statearr_42118 = state_42109;
(statearr_42118[(9)] = inst_42092__$1);

return statearr_42118;
})();
if(inst_42093){
var statearr_42119_43913 = state_42109__$1;
(statearr_42119_43913[(1)] = (8));

} else {
var statearr_42120_43914 = state_42109__$1;
(statearr_42120_43914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (3))){
var inst_42103 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42109__$1,inst_42103);
} else {
if((state_val_42110 === (2))){
var state_42109__$1 = state_42109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42109__$1,(4),ch);
} else {
if((state_val_42110 === (9))){
var inst_42092 = (state_42109[(9)]);
var inst_42081 = inst_42092;
var state_42109__$1 = (function (){var statearr_42121 = state_42109;
(statearr_42121[(7)] = inst_42081);

return statearr_42121;
})();
var statearr_42122_43915 = state_42109__$1;
(statearr_42122_43915[(2)] = null);

(statearr_42122_43915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (5))){
var inst_42081 = (state_42109[(7)]);
var state_42109__$1 = state_42109;
var statearr_42123_43916 = state_42109__$1;
(statearr_42123_43916[(2)] = inst_42081);

(statearr_42123_43916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (10))){
var inst_42099 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42124_43917 = state_42109__$1;
(statearr_42124_43917[(2)] = inst_42099);

(statearr_42124_43917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (8))){
var inst_42092 = (state_42109[(9)]);
var inst_42095 = cljs.core.deref(inst_42092);
var state_42109__$1 = state_42109;
var statearr_42125_43918 = state_42109__$1;
(statearr_42125_43918[(2)] = inst_42095);

(statearr_42125_43918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__41427__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41427__auto____0 = (function (){
var statearr_42126 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42126[(0)] = cljs$core$async$reduce_$_state_machine__41427__auto__);

(statearr_42126[(1)] = (1));

return statearr_42126;
});
var cljs$core$async$reduce_$_state_machine__41427__auto____1 = (function (state_42109){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_42109);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e42127){var ex__41430__auto__ = e42127;
var statearr_42128_43919 = state_42109;
(statearr_42128_43919[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_42109[(4)]))){
var statearr_42129_43920 = state_42109;
(statearr_42129_43920[(1)] = cljs.core.first((state_42109[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43921 = state_42109;
state_42109 = G__43921;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41427__auto__ = function(state_42109){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41427__auto____1.call(this,state_42109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41427__auto____0;
cljs$core$async$reduce_$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41427__auto____1;
return cljs$core$async$reduce_$_state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_42130 = f__41566__auto__();
(statearr_42130[(6)] = c__41565__auto__);

return statearr_42130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));

return c__41565__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__41565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_42136){
var state_val_42137 = (state_42136[(1)]);
if((state_val_42137 === (1))){
var inst_42131 = cljs.core.async.reduce(f__$1,init,ch);
var state_42136__$1 = state_42136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42136__$1,(2),inst_42131);
} else {
if((state_val_42137 === (2))){
var inst_42133 = (state_42136[(2)]);
var inst_42134 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42133) : f__$1.call(null,inst_42133));
var state_42136__$1 = state_42136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42136__$1,inst_42134);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__41427__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41427__auto____0 = (function (){
var statearr_42138 = [null,null,null,null,null,null,null];
(statearr_42138[(0)] = cljs$core$async$transduce_$_state_machine__41427__auto__);

(statearr_42138[(1)] = (1));

return statearr_42138;
});
var cljs$core$async$transduce_$_state_machine__41427__auto____1 = (function (state_42136){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_42136);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e42139){var ex__41430__auto__ = e42139;
var statearr_42140_43922 = state_42136;
(statearr_42140_43922[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_42136[(4)]))){
var statearr_42141_43923 = state_42136;
(statearr_42141_43923[(1)] = cljs.core.first((state_42136[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43924 = state_42136;
state_42136 = G__43924;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41427__auto__ = function(state_42136){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41427__auto____1.call(this,state_42136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41427__auto____0;
cljs$core$async$transduce_$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41427__auto____1;
return cljs$core$async$transduce_$_state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_42142 = f__41566__auto__();
(statearr_42142[(6)] = c__41565__auto__);

return statearr_42142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));

return c__41565__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__42144 = arguments.length;
switch (G__42144) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_42169){
var state_val_42170 = (state_42169[(1)]);
if((state_val_42170 === (7))){
var inst_42151 = (state_42169[(2)]);
var state_42169__$1 = state_42169;
var statearr_42172_43926 = state_42169__$1;
(statearr_42172_43926[(2)] = inst_42151);

(statearr_42172_43926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42170 === (1))){
var inst_42145 = cljs.core.seq(coll);
var inst_42146 = inst_42145;
var state_42169__$1 = (function (){var statearr_42175 = state_42169;
(statearr_42175[(7)] = inst_42146);

return statearr_42175;
})();
var statearr_42176_43928 = state_42169__$1;
(statearr_42176_43928[(2)] = null);

(statearr_42176_43928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42170 === (4))){
var inst_42146 = (state_42169[(7)]);
var inst_42149 = cljs.core.first(inst_42146);
var state_42169__$1 = state_42169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42169__$1,(7),ch,inst_42149);
} else {
if((state_val_42170 === (13))){
var inst_42163 = (state_42169[(2)]);
var state_42169__$1 = state_42169;
var statearr_42178_43931 = state_42169__$1;
(statearr_42178_43931[(2)] = inst_42163);

(statearr_42178_43931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42170 === (6))){
var inst_42154 = (state_42169[(2)]);
var state_42169__$1 = state_42169;
if(cljs.core.truth_(inst_42154)){
var statearr_42179_43932 = state_42169__$1;
(statearr_42179_43932[(1)] = (8));

} else {
var statearr_42180_43933 = state_42169__$1;
(statearr_42180_43933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42170 === (3))){
var inst_42167 = (state_42169[(2)]);
var state_42169__$1 = state_42169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42169__$1,inst_42167);
} else {
if((state_val_42170 === (12))){
var state_42169__$1 = state_42169;
var statearr_42183_43937 = state_42169__$1;
(statearr_42183_43937[(2)] = null);

(statearr_42183_43937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42170 === (2))){
var inst_42146 = (state_42169[(7)]);
var state_42169__$1 = state_42169;
if(cljs.core.truth_(inst_42146)){
var statearr_42184_43939 = state_42169__$1;
(statearr_42184_43939[(1)] = (4));

} else {
var statearr_42185_43940 = state_42169__$1;
(statearr_42185_43940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42170 === (11))){
var inst_42160 = cljs.core.async.close_BANG_(ch);
var state_42169__$1 = state_42169;
var statearr_42186_43941 = state_42169__$1;
(statearr_42186_43941[(2)] = inst_42160);

(statearr_42186_43941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42170 === (9))){
var state_42169__$1 = state_42169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42190_43943 = state_42169__$1;
(statearr_42190_43943[(1)] = (11));

} else {
var statearr_42191_43944 = state_42169__$1;
(statearr_42191_43944[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42170 === (5))){
var inst_42146 = (state_42169[(7)]);
var state_42169__$1 = state_42169;
var statearr_42192_43946 = state_42169__$1;
(statearr_42192_43946[(2)] = inst_42146);

(statearr_42192_43946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42170 === (10))){
var inst_42165 = (state_42169[(2)]);
var state_42169__$1 = state_42169;
var statearr_42193_43947 = state_42169__$1;
(statearr_42193_43947[(2)] = inst_42165);

(statearr_42193_43947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42170 === (8))){
var inst_42146 = (state_42169[(7)]);
var inst_42156 = cljs.core.next(inst_42146);
var inst_42146__$1 = inst_42156;
var state_42169__$1 = (function (){var statearr_42194 = state_42169;
(statearr_42194[(7)] = inst_42146__$1);

return statearr_42194;
})();
var statearr_42195_43948 = state_42169__$1;
(statearr_42195_43948[(2)] = null);

(statearr_42195_43948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_42199 = [null,null,null,null,null,null,null,null];
(statearr_42199[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_42199[(1)] = (1));

return statearr_42199;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_42169){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_42169);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e42200){var ex__41430__auto__ = e42200;
var statearr_42201_43949 = state_42169;
(statearr_42201_43949[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_42169[(4)]))){
var statearr_42202_43950 = state_42169;
(statearr_42202_43950[(1)] = cljs.core.first((state_42169[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43951 = state_42169;
state_42169 = G__43951;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_42169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_42169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_42206 = f__41566__auto__();
(statearr_42206[(6)] = c__41565__auto__);

return statearr_42206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));

return c__41565__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42216 = arguments.length;
switch (G__42216) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_43959 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_43959(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43962 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_43962(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43966 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_43966(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43977 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_43977(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42231 = (function (ch,cs,meta42232){
this.ch = ch;
this.cs = cs;
this.meta42232 = meta42232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42233,meta42232__$1){
var self__ = this;
var _42233__$1 = this;
return (new cljs.core.async.t_cljs$core$async42231(self__.ch,self__.cs,meta42232__$1));
}));

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42233){
var self__ = this;
var _42233__$1 = this;
return self__.meta42232;
}));

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async42231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42232","meta42232",1690258714,null)], null);
}));

(cljs.core.async.t_cljs$core$async42231.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42231");

(cljs.core.async.t_cljs$core$async42231.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42231");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42231.
 */
cljs.core.async.__GT_t_cljs$core$async42231 = (function cljs$core$async$mult_$___GT_t_cljs$core$async42231(ch__$1,cs__$1,meta42232){
return (new cljs.core.async.t_cljs$core$async42231(ch__$1,cs__$1,meta42232));
});

}

return (new cljs.core.async.t_cljs$core$async42231(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__41565__auto___43978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_42392){
var state_val_42393 = (state_42392[(1)]);
if((state_val_42393 === (7))){
var inst_42383 = (state_42392[(2)]);
var state_42392__$1 = state_42392;
var statearr_42395_43985 = state_42392__$1;
(statearr_42395_43985[(2)] = inst_42383);

(statearr_42395_43985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (20))){
var inst_42281 = (state_42392[(7)]);
var inst_42296 = cljs.core.first(inst_42281);
var inst_42298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42296,(0),null);
var inst_42299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42296,(1),null);
var state_42392__$1 = (function (){var statearr_42396 = state_42392;
(statearr_42396[(8)] = inst_42298);

return statearr_42396;
})();
if(cljs.core.truth_(inst_42299)){
var statearr_42397_43986 = state_42392__$1;
(statearr_42397_43986[(1)] = (22));

} else {
var statearr_42398_43987 = state_42392__$1;
(statearr_42398_43987[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (27))){
var inst_42334 = (state_42392[(9)]);
var inst_42327 = (state_42392[(10)]);
var inst_42250 = (state_42392[(11)]);
var inst_42329 = (state_42392[(12)]);
var inst_42334__$1 = cljs.core._nth(inst_42327,inst_42329);
var inst_42335 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42334__$1,inst_42250,done);
var state_42392__$1 = (function (){var statearr_42399 = state_42392;
(statearr_42399[(9)] = inst_42334__$1);

return statearr_42399;
})();
if(cljs.core.truth_(inst_42335)){
var statearr_42406_43988 = state_42392__$1;
(statearr_42406_43988[(1)] = (30));

} else {
var statearr_42407_43989 = state_42392__$1;
(statearr_42407_43989[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (1))){
var state_42392__$1 = state_42392;
var statearr_42410_43990 = state_42392__$1;
(statearr_42410_43990[(2)] = null);

(statearr_42410_43990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (24))){
var inst_42281 = (state_42392[(7)]);
var inst_42304 = (state_42392[(2)]);
var inst_42305 = cljs.core.next(inst_42281);
var inst_42259 = inst_42305;
var inst_42260 = null;
var inst_42261 = (0);
var inst_42262 = (0);
var state_42392__$1 = (function (){var statearr_42411 = state_42392;
(statearr_42411[(13)] = inst_42261);

(statearr_42411[(14)] = inst_42259);

(statearr_42411[(15)] = inst_42262);

(statearr_42411[(16)] = inst_42260);

(statearr_42411[(17)] = inst_42304);

return statearr_42411;
})();
var statearr_42412_43991 = state_42392__$1;
(statearr_42412_43991[(2)] = null);

(statearr_42412_43991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (39))){
var state_42392__$1 = state_42392;
var statearr_42418_43992 = state_42392__$1;
(statearr_42418_43992[(2)] = null);

(statearr_42418_43992[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (4))){
var inst_42250 = (state_42392[(11)]);
var inst_42250__$1 = (state_42392[(2)]);
var inst_42251 = (inst_42250__$1 == null);
var state_42392__$1 = (function (){var statearr_42419 = state_42392;
(statearr_42419[(11)] = inst_42250__$1);

return statearr_42419;
})();
if(cljs.core.truth_(inst_42251)){
var statearr_42420_43999 = state_42392__$1;
(statearr_42420_43999[(1)] = (5));

} else {
var statearr_42421_44000 = state_42392__$1;
(statearr_42421_44000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (15))){
var inst_42261 = (state_42392[(13)]);
var inst_42259 = (state_42392[(14)]);
var inst_42262 = (state_42392[(15)]);
var inst_42260 = (state_42392[(16)]);
var inst_42277 = (state_42392[(2)]);
var inst_42278 = (inst_42262 + (1));
var tmp42415 = inst_42261;
var tmp42416 = inst_42259;
var tmp42417 = inst_42260;
var inst_42259__$1 = tmp42416;
var inst_42260__$1 = tmp42417;
var inst_42261__$1 = tmp42415;
var inst_42262__$1 = inst_42278;
var state_42392__$1 = (function (){var statearr_42424 = state_42392;
(statearr_42424[(13)] = inst_42261__$1);

(statearr_42424[(14)] = inst_42259__$1);

(statearr_42424[(15)] = inst_42262__$1);

(statearr_42424[(16)] = inst_42260__$1);

(statearr_42424[(18)] = inst_42277);

return statearr_42424;
})();
var statearr_42425_44001 = state_42392__$1;
(statearr_42425_44001[(2)] = null);

(statearr_42425_44001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (21))){
var inst_42308 = (state_42392[(2)]);
var state_42392__$1 = state_42392;
var statearr_42429_44002 = state_42392__$1;
(statearr_42429_44002[(2)] = inst_42308);

(statearr_42429_44002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (31))){
var inst_42334 = (state_42392[(9)]);
var inst_42339 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42334);
var state_42392__$1 = state_42392;
var statearr_42430_44003 = state_42392__$1;
(statearr_42430_44003[(2)] = inst_42339);

(statearr_42430_44003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (32))){
var inst_42328 = (state_42392[(19)]);
var inst_42326 = (state_42392[(20)]);
var inst_42327 = (state_42392[(10)]);
var inst_42329 = (state_42392[(12)]);
var inst_42341 = (state_42392[(2)]);
var inst_42343 = (inst_42329 + (1));
var tmp42426 = inst_42328;
var tmp42427 = inst_42326;
var tmp42428 = inst_42327;
var inst_42326__$1 = tmp42427;
var inst_42327__$1 = tmp42428;
var inst_42328__$1 = tmp42426;
var inst_42329__$1 = inst_42343;
var state_42392__$1 = (function (){var statearr_42433 = state_42392;
(statearr_42433[(21)] = inst_42341);

(statearr_42433[(19)] = inst_42328__$1);

(statearr_42433[(20)] = inst_42326__$1);

(statearr_42433[(10)] = inst_42327__$1);

(statearr_42433[(12)] = inst_42329__$1);

return statearr_42433;
})();
var statearr_42434_44010 = state_42392__$1;
(statearr_42434_44010[(2)] = null);

(statearr_42434_44010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (40))){
var inst_42356 = (state_42392[(22)]);
var inst_42360 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42356);
var state_42392__$1 = state_42392;
var statearr_42435_44011 = state_42392__$1;
(statearr_42435_44011[(2)] = inst_42360);

(statearr_42435_44011[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (33))){
var inst_42347 = (state_42392[(23)]);
var inst_42349 = cljs.core.chunked_seq_QMARK_(inst_42347);
var state_42392__$1 = state_42392;
if(inst_42349){
var statearr_42436_44012 = state_42392__$1;
(statearr_42436_44012[(1)] = (36));

} else {
var statearr_42437_44013 = state_42392__$1;
(statearr_42437_44013[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (13))){
var inst_42271 = (state_42392[(24)]);
var inst_42274 = cljs.core.async.close_BANG_(inst_42271);
var state_42392__$1 = state_42392;
var statearr_42438_44014 = state_42392__$1;
(statearr_42438_44014[(2)] = inst_42274);

(statearr_42438_44014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (22))){
var inst_42298 = (state_42392[(8)]);
var inst_42301 = cljs.core.async.close_BANG_(inst_42298);
var state_42392__$1 = state_42392;
var statearr_42439_44015 = state_42392__$1;
(statearr_42439_44015[(2)] = inst_42301);

(statearr_42439_44015[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (36))){
var inst_42347 = (state_42392[(23)]);
var inst_42351 = cljs.core.chunk_first(inst_42347);
var inst_42352 = cljs.core.chunk_rest(inst_42347);
var inst_42353 = cljs.core.count(inst_42351);
var inst_42326 = inst_42352;
var inst_42327 = inst_42351;
var inst_42328 = inst_42353;
var inst_42329 = (0);
var state_42392__$1 = (function (){var statearr_42440 = state_42392;
(statearr_42440[(19)] = inst_42328);

(statearr_42440[(20)] = inst_42326);

(statearr_42440[(10)] = inst_42327);

(statearr_42440[(12)] = inst_42329);

return statearr_42440;
})();
var statearr_42441_44016 = state_42392__$1;
(statearr_42441_44016[(2)] = null);

(statearr_42441_44016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (41))){
var inst_42347 = (state_42392[(23)]);
var inst_42362 = (state_42392[(2)]);
var inst_42363 = cljs.core.next(inst_42347);
var inst_42326 = inst_42363;
var inst_42327 = null;
var inst_42328 = (0);
var inst_42329 = (0);
var state_42392__$1 = (function (){var statearr_42443 = state_42392;
(statearr_42443[(19)] = inst_42328);

(statearr_42443[(20)] = inst_42326);

(statearr_42443[(10)] = inst_42327);

(statearr_42443[(25)] = inst_42362);

(statearr_42443[(12)] = inst_42329);

return statearr_42443;
})();
var statearr_42444_44017 = state_42392__$1;
(statearr_42444_44017[(2)] = null);

(statearr_42444_44017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (43))){
var state_42392__$1 = state_42392;
var statearr_42445_44018 = state_42392__$1;
(statearr_42445_44018[(2)] = null);

(statearr_42445_44018[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (29))){
var inst_42371 = (state_42392[(2)]);
var state_42392__$1 = state_42392;
var statearr_42449_44019 = state_42392__$1;
(statearr_42449_44019[(2)] = inst_42371);

(statearr_42449_44019[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (44))){
var inst_42380 = (state_42392[(2)]);
var state_42392__$1 = (function (){var statearr_42450 = state_42392;
(statearr_42450[(26)] = inst_42380);

return statearr_42450;
})();
var statearr_42451_44020 = state_42392__$1;
(statearr_42451_44020[(2)] = null);

(statearr_42451_44020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (6))){
var inst_42318 = (state_42392[(27)]);
var inst_42317 = cljs.core.deref(cs);
var inst_42318__$1 = cljs.core.keys(inst_42317);
var inst_42319 = cljs.core.count(inst_42318__$1);
var inst_42320 = cljs.core.reset_BANG_(dctr,inst_42319);
var inst_42325 = cljs.core.seq(inst_42318__$1);
var inst_42326 = inst_42325;
var inst_42327 = null;
var inst_42328 = (0);
var inst_42329 = (0);
var state_42392__$1 = (function (){var statearr_42460 = state_42392;
(statearr_42460[(27)] = inst_42318__$1);

(statearr_42460[(19)] = inst_42328);

(statearr_42460[(28)] = inst_42320);

(statearr_42460[(20)] = inst_42326);

(statearr_42460[(10)] = inst_42327);

(statearr_42460[(12)] = inst_42329);

return statearr_42460;
})();
var statearr_42465_44022 = state_42392__$1;
(statearr_42465_44022[(2)] = null);

(statearr_42465_44022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (28))){
var inst_42347 = (state_42392[(23)]);
var inst_42326 = (state_42392[(20)]);
var inst_42347__$1 = cljs.core.seq(inst_42326);
var state_42392__$1 = (function (){var statearr_42466 = state_42392;
(statearr_42466[(23)] = inst_42347__$1);

return statearr_42466;
})();
if(inst_42347__$1){
var statearr_42471_44023 = state_42392__$1;
(statearr_42471_44023[(1)] = (33));

} else {
var statearr_42476_44024 = state_42392__$1;
(statearr_42476_44024[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (25))){
var inst_42328 = (state_42392[(19)]);
var inst_42329 = (state_42392[(12)]);
var inst_42331 = (inst_42329 < inst_42328);
var inst_42332 = inst_42331;
var state_42392__$1 = state_42392;
if(cljs.core.truth_(inst_42332)){
var statearr_42477_44029 = state_42392__$1;
(statearr_42477_44029[(1)] = (27));

} else {
var statearr_42482_44031 = state_42392__$1;
(statearr_42482_44031[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (34))){
var state_42392__$1 = state_42392;
var statearr_42483_44032 = state_42392__$1;
(statearr_42483_44032[(2)] = null);

(statearr_42483_44032[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (17))){
var state_42392__$1 = state_42392;
var statearr_42485_44038 = state_42392__$1;
(statearr_42485_44038[(2)] = null);

(statearr_42485_44038[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (3))){
var inst_42385 = (state_42392[(2)]);
var state_42392__$1 = state_42392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42392__$1,inst_42385);
} else {
if((state_val_42393 === (12))){
var inst_42313 = (state_42392[(2)]);
var state_42392__$1 = state_42392;
var statearr_42486_44042 = state_42392__$1;
(statearr_42486_44042[(2)] = inst_42313);

(statearr_42486_44042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (2))){
var state_42392__$1 = state_42392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42392__$1,(4),ch);
} else {
if((state_val_42393 === (23))){
var state_42392__$1 = state_42392;
var statearr_42488_44045 = state_42392__$1;
(statearr_42488_44045[(2)] = null);

(statearr_42488_44045[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (35))){
var inst_42369 = (state_42392[(2)]);
var state_42392__$1 = state_42392;
var statearr_42489_44048 = state_42392__$1;
(statearr_42489_44048[(2)] = inst_42369);

(statearr_42489_44048[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (19))){
var inst_42281 = (state_42392[(7)]);
var inst_42286 = cljs.core.chunk_first(inst_42281);
var inst_42287 = cljs.core.chunk_rest(inst_42281);
var inst_42288 = cljs.core.count(inst_42286);
var inst_42259 = inst_42287;
var inst_42260 = inst_42286;
var inst_42261 = inst_42288;
var inst_42262 = (0);
var state_42392__$1 = (function (){var statearr_42494 = state_42392;
(statearr_42494[(13)] = inst_42261);

(statearr_42494[(14)] = inst_42259);

(statearr_42494[(15)] = inst_42262);

(statearr_42494[(16)] = inst_42260);

return statearr_42494;
})();
var statearr_42495_44049 = state_42392__$1;
(statearr_42495_44049[(2)] = null);

(statearr_42495_44049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (11))){
var inst_42281 = (state_42392[(7)]);
var inst_42259 = (state_42392[(14)]);
var inst_42281__$1 = cljs.core.seq(inst_42259);
var state_42392__$1 = (function (){var statearr_42496 = state_42392;
(statearr_42496[(7)] = inst_42281__$1);

return statearr_42496;
})();
if(inst_42281__$1){
var statearr_42497_44052 = state_42392__$1;
(statearr_42497_44052[(1)] = (16));

} else {
var statearr_42498_44053 = state_42392__$1;
(statearr_42498_44053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (9))){
var inst_42315 = (state_42392[(2)]);
var state_42392__$1 = state_42392;
var statearr_42499_44055 = state_42392__$1;
(statearr_42499_44055[(2)] = inst_42315);

(statearr_42499_44055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (5))){
var inst_42257 = cljs.core.deref(cs);
var inst_42258 = cljs.core.seq(inst_42257);
var inst_42259 = inst_42258;
var inst_42260 = null;
var inst_42261 = (0);
var inst_42262 = (0);
var state_42392__$1 = (function (){var statearr_42500 = state_42392;
(statearr_42500[(13)] = inst_42261);

(statearr_42500[(14)] = inst_42259);

(statearr_42500[(15)] = inst_42262);

(statearr_42500[(16)] = inst_42260);

return statearr_42500;
})();
var statearr_42501_44057 = state_42392__$1;
(statearr_42501_44057[(2)] = null);

(statearr_42501_44057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (14))){
var state_42392__$1 = state_42392;
var statearr_42502_44060 = state_42392__$1;
(statearr_42502_44060[(2)] = null);

(statearr_42502_44060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (45))){
var inst_42377 = (state_42392[(2)]);
var state_42392__$1 = state_42392;
var statearr_42503_44062 = state_42392__$1;
(statearr_42503_44062[(2)] = inst_42377);

(statearr_42503_44062[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (26))){
var inst_42318 = (state_42392[(27)]);
var inst_42373 = (state_42392[(2)]);
var inst_42374 = cljs.core.seq(inst_42318);
var state_42392__$1 = (function (){var statearr_42504 = state_42392;
(statearr_42504[(29)] = inst_42373);

return statearr_42504;
})();
if(inst_42374){
var statearr_42505_44064 = state_42392__$1;
(statearr_42505_44064[(1)] = (42));

} else {
var statearr_42506_44065 = state_42392__$1;
(statearr_42506_44065[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (16))){
var inst_42281 = (state_42392[(7)]);
var inst_42283 = cljs.core.chunked_seq_QMARK_(inst_42281);
var state_42392__$1 = state_42392;
if(inst_42283){
var statearr_42507_44066 = state_42392__$1;
(statearr_42507_44066[(1)] = (19));

} else {
var statearr_42508_44067 = state_42392__$1;
(statearr_42508_44067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (38))){
var inst_42366 = (state_42392[(2)]);
var state_42392__$1 = state_42392;
var statearr_42509_44068 = state_42392__$1;
(statearr_42509_44068[(2)] = inst_42366);

(statearr_42509_44068[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (30))){
var state_42392__$1 = state_42392;
var statearr_42510_44069 = state_42392__$1;
(statearr_42510_44069[(2)] = null);

(statearr_42510_44069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (10))){
var inst_42262 = (state_42392[(15)]);
var inst_42260 = (state_42392[(16)]);
var inst_42270 = cljs.core._nth(inst_42260,inst_42262);
var inst_42271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42270,(0),null);
var inst_42272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42270,(1),null);
var state_42392__$1 = (function (){var statearr_42511 = state_42392;
(statearr_42511[(24)] = inst_42271);

return statearr_42511;
})();
if(cljs.core.truth_(inst_42272)){
var statearr_42512_44073 = state_42392__$1;
(statearr_42512_44073[(1)] = (13));

} else {
var statearr_42513_44074 = state_42392__$1;
(statearr_42513_44074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (18))){
var inst_42311 = (state_42392[(2)]);
var state_42392__$1 = state_42392;
var statearr_42514_44075 = state_42392__$1;
(statearr_42514_44075[(2)] = inst_42311);

(statearr_42514_44075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (42))){
var state_42392__$1 = state_42392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42392__$1,(45),dchan);
} else {
if((state_val_42393 === (37))){
var inst_42347 = (state_42392[(23)]);
var inst_42250 = (state_42392[(11)]);
var inst_42356 = (state_42392[(22)]);
var inst_42356__$1 = cljs.core.first(inst_42347);
var inst_42357 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42356__$1,inst_42250,done);
var state_42392__$1 = (function (){var statearr_42518 = state_42392;
(statearr_42518[(22)] = inst_42356__$1);

return statearr_42518;
})();
if(cljs.core.truth_(inst_42357)){
var statearr_42519_44076 = state_42392__$1;
(statearr_42519_44076[(1)] = (39));

} else {
var statearr_42520_44077 = state_42392__$1;
(statearr_42520_44077[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42393 === (8))){
var inst_42261 = (state_42392[(13)]);
var inst_42262 = (state_42392[(15)]);
var inst_42264 = (inst_42262 < inst_42261);
var inst_42265 = inst_42264;
var state_42392__$1 = state_42392;
if(cljs.core.truth_(inst_42265)){
var statearr_42521_44080 = state_42392__$1;
(statearr_42521_44080[(1)] = (10));

} else {
var statearr_42522_44081 = state_42392__$1;
(statearr_42522_44081[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__41427__auto__ = null;
var cljs$core$async$mult_$_state_machine__41427__auto____0 = (function (){
var statearr_42523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42523[(0)] = cljs$core$async$mult_$_state_machine__41427__auto__);

(statearr_42523[(1)] = (1));

return statearr_42523;
});
var cljs$core$async$mult_$_state_machine__41427__auto____1 = (function (state_42392){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_42392);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e42524){var ex__41430__auto__ = e42524;
var statearr_42525_44084 = state_42392;
(statearr_42525_44084[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_42392[(4)]))){
var statearr_42526_44085 = state_42392;
(statearr_42526_44085[(1)] = cljs.core.first((state_42392[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44087 = state_42392;
state_42392 = G__44087;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41427__auto__ = function(state_42392){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41427__auto____1.call(this,state_42392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41427__auto____0;
cljs$core$async$mult_$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41427__auto____1;
return cljs$core$async$mult_$_state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_42527 = f__41566__auto__();
(statearr_42527[(6)] = c__41565__auto___43978);

return statearr_42527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42530 = arguments.length;
switch (G__42530) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_44091 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44091(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44092 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44092(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44093 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44093(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44094 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44094(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44096 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44096(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44098 = arguments.length;
var i__4737__auto___44099 = (0);
while(true){
if((i__4737__auto___44099 < len__4736__auto___44098)){
args__4742__auto__.push((arguments[i__4737__auto___44099]));

var G__44103 = (i__4737__auto___44099 + (1));
i__4737__auto___44099 = G__44103;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42573){
var map__42575 = p__42573;
var map__42575__$1 = (((((!((map__42575 == null))))?(((((map__42575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42575):map__42575);
var opts = map__42575__$1;
var statearr_42578_44104 = state;
(statearr_42578_44104[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_42579_44105 = state;
(statearr_42579_44105[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_42583_44106 = state;
(statearr_42583_44106[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42565){
var G__42566 = cljs.core.first(seq42565);
var seq42565__$1 = cljs.core.next(seq42565);
var G__42567 = cljs.core.first(seq42565__$1);
var seq42565__$2 = cljs.core.next(seq42565__$1);
var G__42568 = cljs.core.first(seq42565__$2);
var seq42565__$3 = cljs.core.next(seq42565__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42566,G__42567,G__42568,seq42565__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42592 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42593){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42593 = meta42593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42594,meta42593__$1){
var self__ = this;
var _42594__$1 = this;
return (new cljs.core.async.t_cljs$core$async42592(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42593__$1));
}));

(cljs.core.async.t_cljs$core$async42592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42594){
var self__ = this;
var _42594__$1 = this;
return self__.meta42593;
}));

(cljs.core.async.t_cljs$core$async42592.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async42592.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42592.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42592.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42592.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42592.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42592.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42593","meta42593",-1886871972,null)], null);
}));

(cljs.core.async.t_cljs$core$async42592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42592");

(cljs.core.async.t_cljs$core$async42592.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42592.
 */
cljs.core.async.__GT_t_cljs$core$async42592 = (function cljs$core$async$mix_$___GT_t_cljs$core$async42592(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42593){
return (new cljs.core.async.t_cljs$core$async42592(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42593));
});

}

return (new cljs.core.async.t_cljs$core$async42592(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41565__auto___44128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_42714){
var state_val_42715 = (state_42714[(1)]);
if((state_val_42715 === (7))){
var inst_42623 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42719_44130 = state_42714__$1;
(statearr_42719_44130[(2)] = inst_42623);

(statearr_42719_44130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (20))){
var inst_42635 = (state_42714[(7)]);
var state_42714__$1 = state_42714;
var statearr_42721_44131 = state_42714__$1;
(statearr_42721_44131[(2)] = inst_42635);

(statearr_42721_44131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (27))){
var state_42714__$1 = state_42714;
var statearr_42726_44132 = state_42714__$1;
(statearr_42726_44132[(2)] = null);

(statearr_42726_44132[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (1))){
var inst_42610 = (state_42714[(8)]);
var inst_42610__$1 = calc_state();
var inst_42612 = (inst_42610__$1 == null);
var inst_42613 = cljs.core.not(inst_42612);
var state_42714__$1 = (function (){var statearr_42727 = state_42714;
(statearr_42727[(8)] = inst_42610__$1);

return statearr_42727;
})();
if(inst_42613){
var statearr_42728_44133 = state_42714__$1;
(statearr_42728_44133[(1)] = (2));

} else {
var statearr_42729_44134 = state_42714__$1;
(statearr_42729_44134[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (24))){
var inst_42659 = (state_42714[(9)]);
var inst_42668 = (state_42714[(10)]);
var inst_42685 = (state_42714[(11)]);
var inst_42685__$1 = (inst_42659.cljs$core$IFn$_invoke$arity$1 ? inst_42659.cljs$core$IFn$_invoke$arity$1(inst_42668) : inst_42659.call(null,inst_42668));
var state_42714__$1 = (function (){var statearr_42730 = state_42714;
(statearr_42730[(11)] = inst_42685__$1);

return statearr_42730;
})();
if(cljs.core.truth_(inst_42685__$1)){
var statearr_42731_44135 = state_42714__$1;
(statearr_42731_44135[(1)] = (29));

} else {
var statearr_42732_44136 = state_42714__$1;
(statearr_42732_44136[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (4))){
var inst_42626 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
if(cljs.core.truth_(inst_42626)){
var statearr_42733_44137 = state_42714__$1;
(statearr_42733_44137[(1)] = (8));

} else {
var statearr_42734_44138 = state_42714__$1;
(statearr_42734_44138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (15))){
var inst_42653 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
if(cljs.core.truth_(inst_42653)){
var statearr_42735_44139 = state_42714__$1;
(statearr_42735_44139[(1)] = (19));

} else {
var statearr_42736_44140 = state_42714__$1;
(statearr_42736_44140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (21))){
var inst_42658 = (state_42714[(12)]);
var inst_42658__$1 = (state_42714[(2)]);
var inst_42659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42658__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42658__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42658__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42714__$1 = (function (){var statearr_42737 = state_42714;
(statearr_42737[(9)] = inst_42659);

(statearr_42737[(13)] = inst_42660);

(statearr_42737[(12)] = inst_42658__$1);

return statearr_42737;
})();
return cljs.core.async.ioc_alts_BANG_(state_42714__$1,(22),inst_42661);
} else {
if((state_val_42715 === (31))){
var inst_42693 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
if(cljs.core.truth_(inst_42693)){
var statearr_42739_44141 = state_42714__$1;
(statearr_42739_44141[(1)] = (32));

} else {
var statearr_42740_44142 = state_42714__$1;
(statearr_42740_44142[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (32))){
var inst_42667 = (state_42714[(14)]);
var state_42714__$1 = state_42714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42714__$1,(35),out,inst_42667);
} else {
if((state_val_42715 === (33))){
var inst_42658 = (state_42714[(12)]);
var inst_42635 = inst_42658;
var state_42714__$1 = (function (){var statearr_42743 = state_42714;
(statearr_42743[(7)] = inst_42635);

return statearr_42743;
})();
var statearr_42744_44143 = state_42714__$1;
(statearr_42744_44143[(2)] = null);

(statearr_42744_44143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (13))){
var inst_42635 = (state_42714[(7)]);
var inst_42642 = inst_42635.cljs$lang$protocol_mask$partition0$;
var inst_42643 = (inst_42642 & (64));
var inst_42644 = inst_42635.cljs$core$ISeq$;
var inst_42645 = (cljs.core.PROTOCOL_SENTINEL === inst_42644);
var inst_42646 = ((inst_42643) || (inst_42645));
var state_42714__$1 = state_42714;
if(cljs.core.truth_(inst_42646)){
var statearr_42745_44148 = state_42714__$1;
(statearr_42745_44148[(1)] = (16));

} else {
var statearr_42746_44149 = state_42714__$1;
(statearr_42746_44149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (22))){
var inst_42668 = (state_42714[(10)]);
var inst_42667 = (state_42714[(14)]);
var inst_42666 = (state_42714[(2)]);
var inst_42667__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42666,(0),null);
var inst_42668__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42666,(1),null);
var inst_42671 = (inst_42667__$1 == null);
var inst_42672 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42668__$1,change);
var inst_42673 = ((inst_42671) || (inst_42672));
var state_42714__$1 = (function (){var statearr_42747 = state_42714;
(statearr_42747[(10)] = inst_42668__$1);

(statearr_42747[(14)] = inst_42667__$1);

return statearr_42747;
})();
if(cljs.core.truth_(inst_42673)){
var statearr_42748_44150 = state_42714__$1;
(statearr_42748_44150[(1)] = (23));

} else {
var statearr_42749_44151 = state_42714__$1;
(statearr_42749_44151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (36))){
var inst_42658 = (state_42714[(12)]);
var inst_42635 = inst_42658;
var state_42714__$1 = (function (){var statearr_42750 = state_42714;
(statearr_42750[(7)] = inst_42635);

return statearr_42750;
})();
var statearr_42751_44152 = state_42714__$1;
(statearr_42751_44152[(2)] = null);

(statearr_42751_44152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (29))){
var inst_42685 = (state_42714[(11)]);
var state_42714__$1 = state_42714;
var statearr_42752_44153 = state_42714__$1;
(statearr_42752_44153[(2)] = inst_42685);

(statearr_42752_44153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (6))){
var state_42714__$1 = state_42714;
var statearr_42753_44154 = state_42714__$1;
(statearr_42753_44154[(2)] = false);

(statearr_42753_44154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (28))){
var inst_42681 = (state_42714[(2)]);
var inst_42682 = calc_state();
var inst_42635 = inst_42682;
var state_42714__$1 = (function (){var statearr_42754 = state_42714;
(statearr_42754[(7)] = inst_42635);

(statearr_42754[(15)] = inst_42681);

return statearr_42754;
})();
var statearr_42755_44159 = state_42714__$1;
(statearr_42755_44159[(2)] = null);

(statearr_42755_44159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (25))){
var inst_42707 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42756_44161 = state_42714__$1;
(statearr_42756_44161[(2)] = inst_42707);

(statearr_42756_44161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (34))){
var inst_42705 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42757_44162 = state_42714__$1;
(statearr_42757_44162[(2)] = inst_42705);

(statearr_42757_44162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (17))){
var state_42714__$1 = state_42714;
var statearr_42758_44163 = state_42714__$1;
(statearr_42758_44163[(2)] = false);

(statearr_42758_44163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (3))){
var state_42714__$1 = state_42714;
var statearr_42759_44164 = state_42714__$1;
(statearr_42759_44164[(2)] = false);

(statearr_42759_44164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (12))){
var inst_42709 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42714__$1,inst_42709);
} else {
if((state_val_42715 === (2))){
var inst_42610 = (state_42714[(8)]);
var inst_42615 = inst_42610.cljs$lang$protocol_mask$partition0$;
var inst_42616 = (inst_42615 & (64));
var inst_42617 = inst_42610.cljs$core$ISeq$;
var inst_42618 = (cljs.core.PROTOCOL_SENTINEL === inst_42617);
var inst_42619 = ((inst_42616) || (inst_42618));
var state_42714__$1 = state_42714;
if(cljs.core.truth_(inst_42619)){
var statearr_42760_44166 = state_42714__$1;
(statearr_42760_44166[(1)] = (5));

} else {
var statearr_42761_44167 = state_42714__$1;
(statearr_42761_44167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (23))){
var inst_42667 = (state_42714[(14)]);
var inst_42676 = (inst_42667 == null);
var state_42714__$1 = state_42714;
if(cljs.core.truth_(inst_42676)){
var statearr_42762_44168 = state_42714__$1;
(statearr_42762_44168[(1)] = (26));

} else {
var statearr_42763_44170 = state_42714__$1;
(statearr_42763_44170[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (35))){
var inst_42696 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
if(cljs.core.truth_(inst_42696)){
var statearr_42765_44174 = state_42714__$1;
(statearr_42765_44174[(1)] = (36));

} else {
var statearr_42767_44175 = state_42714__$1;
(statearr_42767_44175[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (19))){
var inst_42635 = (state_42714[(7)]);
var inst_42655 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42635);
var state_42714__$1 = state_42714;
var statearr_42769_44176 = state_42714__$1;
(statearr_42769_44176[(2)] = inst_42655);

(statearr_42769_44176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (11))){
var inst_42635 = (state_42714[(7)]);
var inst_42639 = (inst_42635 == null);
var inst_42640 = cljs.core.not(inst_42639);
var state_42714__$1 = state_42714;
if(inst_42640){
var statearr_42770_44177 = state_42714__$1;
(statearr_42770_44177[(1)] = (13));

} else {
var statearr_42771_44178 = state_42714__$1;
(statearr_42771_44178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (9))){
var inst_42610 = (state_42714[(8)]);
var state_42714__$1 = state_42714;
var statearr_42776_44179 = state_42714__$1;
(statearr_42776_44179[(2)] = inst_42610);

(statearr_42776_44179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (5))){
var state_42714__$1 = state_42714;
var statearr_42777_44180 = state_42714__$1;
(statearr_42777_44180[(2)] = true);

(statearr_42777_44180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (14))){
var state_42714__$1 = state_42714;
var statearr_42778_44181 = state_42714__$1;
(statearr_42778_44181[(2)] = false);

(statearr_42778_44181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (26))){
var inst_42668 = (state_42714[(10)]);
var inst_42678 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42668);
var state_42714__$1 = state_42714;
var statearr_42780_44182 = state_42714__$1;
(statearr_42780_44182[(2)] = inst_42678);

(statearr_42780_44182[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (16))){
var state_42714__$1 = state_42714;
var statearr_42781_44183 = state_42714__$1;
(statearr_42781_44183[(2)] = true);

(statearr_42781_44183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (38))){
var inst_42701 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42782_44184 = state_42714__$1;
(statearr_42782_44184[(2)] = inst_42701);

(statearr_42782_44184[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (30))){
var inst_42659 = (state_42714[(9)]);
var inst_42660 = (state_42714[(13)]);
var inst_42668 = (state_42714[(10)]);
var inst_42688 = cljs.core.empty_QMARK_(inst_42659);
var inst_42689 = (inst_42660.cljs$core$IFn$_invoke$arity$1 ? inst_42660.cljs$core$IFn$_invoke$arity$1(inst_42668) : inst_42660.call(null,inst_42668));
var inst_42690 = cljs.core.not(inst_42689);
var inst_42691 = ((inst_42688) && (inst_42690));
var state_42714__$1 = state_42714;
var statearr_42783_44185 = state_42714__$1;
(statearr_42783_44185[(2)] = inst_42691);

(statearr_42783_44185[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (10))){
var inst_42610 = (state_42714[(8)]);
var inst_42631 = (state_42714[(2)]);
var inst_42632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42631,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42631,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42631,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42635 = inst_42610;
var state_42714__$1 = (function (){var statearr_42784 = state_42714;
(statearr_42784[(16)] = inst_42633);

(statearr_42784[(7)] = inst_42635);

(statearr_42784[(17)] = inst_42634);

(statearr_42784[(18)] = inst_42632);

return statearr_42784;
})();
var statearr_42788_44186 = state_42714__$1;
(statearr_42788_44186[(2)] = null);

(statearr_42788_44186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (18))){
var inst_42650 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42789_44187 = state_42714__$1;
(statearr_42789_44187[(2)] = inst_42650);

(statearr_42789_44187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (37))){
var state_42714__$1 = state_42714;
var statearr_42790_44188 = state_42714__$1;
(statearr_42790_44188[(2)] = null);

(statearr_42790_44188[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (8))){
var inst_42610 = (state_42714[(8)]);
var inst_42628 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42610);
var state_42714__$1 = state_42714;
var statearr_42794_44192 = state_42714__$1;
(statearr_42794_44192[(2)] = inst_42628);

(statearr_42794_44192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__41427__auto__ = null;
var cljs$core$async$mix_$_state_machine__41427__auto____0 = (function (){
var statearr_42797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42797[(0)] = cljs$core$async$mix_$_state_machine__41427__auto__);

(statearr_42797[(1)] = (1));

return statearr_42797;
});
var cljs$core$async$mix_$_state_machine__41427__auto____1 = (function (state_42714){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_42714);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e42801){var ex__41430__auto__ = e42801;
var statearr_42802_44193 = state_42714;
(statearr_42802_44193[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_42714[(4)]))){
var statearr_42803_44194 = state_42714;
(statearr_42803_44194[(1)] = cljs.core.first((state_42714[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44195 = state_42714;
state_42714 = G__44195;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41427__auto__ = function(state_42714){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41427__auto____1.call(this,state_42714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41427__auto____0;
cljs$core$async$mix_$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41427__auto____1;
return cljs$core$async$mix_$_state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_42804 = f__41566__auto__();
(statearr_42804[(6)] = c__41565__auto___44128);

return statearr_42804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_44196 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44196(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44198 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44198(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44199 = (function() {
var G__44200 = null;
var G__44200__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44200__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44200 = function(p,v){
switch(arguments.length){
case 1:
return G__44200__1.call(this,p);
case 2:
return G__44200__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44200.cljs$core$IFn$_invoke$arity$1 = G__44200__1;
G__44200.cljs$core$IFn$_invoke$arity$2 = G__44200__2;
return G__44200;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42825 = arguments.length;
switch (G__42825) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44199(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44199(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__42836 = arguments.length;
switch (G__42836) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__42833_SHARP_){
if(cljs.core.truth_((p1__42833_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42833_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42833_SHARP_.call(null,topic)))){
return p1__42833_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42833_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42843 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42844){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42844 = meta42844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42845,meta42844__$1){
var self__ = this;
var _42845__$1 = this;
return (new cljs.core.async.t_cljs$core$async42843(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42844__$1));
}));

(cljs.core.async.t_cljs$core$async42843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42845){
var self__ = this;
var _42845__$1 = this;
return self__.meta42844;
}));

(cljs.core.async.t_cljs$core$async42843.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42843.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42843.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42843.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async42843.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async42843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async42843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async42843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42844","meta42844",469235647,null)], null);
}));

(cljs.core.async.t_cljs$core$async42843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42843");

(cljs.core.async.t_cljs$core$async42843.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42843.
 */
cljs.core.async.__GT_t_cljs$core$async42843 = (function cljs$core$async$__GT_t_cljs$core$async42843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42844){
return (new cljs.core.async.t_cljs$core$async42843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42844));
});

}

return (new cljs.core.async.t_cljs$core$async42843(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41565__auto___44213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_42927){
var state_val_42928 = (state_42927[(1)]);
if((state_val_42928 === (7))){
var inst_42923 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
var statearr_42929_44214 = state_42927__$1;
(statearr_42929_44214[(2)] = inst_42923);

(statearr_42929_44214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (20))){
var state_42927__$1 = state_42927;
var statearr_42930_44215 = state_42927__$1;
(statearr_42930_44215[(2)] = null);

(statearr_42930_44215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (1))){
var state_42927__$1 = state_42927;
var statearr_42931_44216 = state_42927__$1;
(statearr_42931_44216[(2)] = null);

(statearr_42931_44216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (24))){
var inst_42905 = (state_42927[(7)]);
var inst_42915 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42905);
var state_42927__$1 = state_42927;
var statearr_42932_44217 = state_42927__$1;
(statearr_42932_44217[(2)] = inst_42915);

(statearr_42932_44217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (4))){
var inst_42857 = (state_42927[(8)]);
var inst_42857__$1 = (state_42927[(2)]);
var inst_42858 = (inst_42857__$1 == null);
var state_42927__$1 = (function (){var statearr_42933 = state_42927;
(statearr_42933[(8)] = inst_42857__$1);

return statearr_42933;
})();
if(cljs.core.truth_(inst_42858)){
var statearr_42934_44218 = state_42927__$1;
(statearr_42934_44218[(1)] = (5));

} else {
var statearr_42935_44219 = state_42927__$1;
(statearr_42935_44219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (15))){
var inst_42899 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
var statearr_42936_44220 = state_42927__$1;
(statearr_42936_44220[(2)] = inst_42899);

(statearr_42936_44220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (21))){
var inst_42920 = (state_42927[(2)]);
var state_42927__$1 = (function (){var statearr_42939 = state_42927;
(statearr_42939[(9)] = inst_42920);

return statearr_42939;
})();
var statearr_42942_44221 = state_42927__$1;
(statearr_42942_44221[(2)] = null);

(statearr_42942_44221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (13))){
var inst_42881 = (state_42927[(10)]);
var inst_42883 = cljs.core.chunked_seq_QMARK_(inst_42881);
var state_42927__$1 = state_42927;
if(inst_42883){
var statearr_42944_44222 = state_42927__$1;
(statearr_42944_44222[(1)] = (16));

} else {
var statearr_42945_44223 = state_42927__$1;
(statearr_42945_44223[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (22))){
var inst_42912 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
if(cljs.core.truth_(inst_42912)){
var statearr_42946_44224 = state_42927__$1;
(statearr_42946_44224[(1)] = (23));

} else {
var statearr_42948_44225 = state_42927__$1;
(statearr_42948_44225[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (6))){
var inst_42905 = (state_42927[(7)]);
var inst_42907 = (state_42927[(11)]);
var inst_42857 = (state_42927[(8)]);
var inst_42905__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42857) : topic_fn.call(null,inst_42857));
var inst_42906 = cljs.core.deref(mults);
var inst_42907__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42906,inst_42905__$1);
var state_42927__$1 = (function (){var statearr_42949 = state_42927;
(statearr_42949[(7)] = inst_42905__$1);

(statearr_42949[(11)] = inst_42907__$1);

return statearr_42949;
})();
if(cljs.core.truth_(inst_42907__$1)){
var statearr_42950_44229 = state_42927__$1;
(statearr_42950_44229[(1)] = (19));

} else {
var statearr_42951_44230 = state_42927__$1;
(statearr_42951_44230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (25))){
var inst_42917 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
var statearr_42952_44231 = state_42927__$1;
(statearr_42952_44231[(2)] = inst_42917);

(statearr_42952_44231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (17))){
var inst_42881 = (state_42927[(10)]);
var inst_42890 = cljs.core.first(inst_42881);
var inst_42891 = cljs.core.async.muxch_STAR_(inst_42890);
var inst_42892 = cljs.core.async.close_BANG_(inst_42891);
var inst_42893 = cljs.core.next(inst_42881);
var inst_42867 = inst_42893;
var inst_42868 = null;
var inst_42869 = (0);
var inst_42870 = (0);
var state_42927__$1 = (function (){var statearr_42953 = state_42927;
(statearr_42953[(12)] = inst_42870);

(statearr_42953[(13)] = inst_42892);

(statearr_42953[(14)] = inst_42868);

(statearr_42953[(15)] = inst_42869);

(statearr_42953[(16)] = inst_42867);

return statearr_42953;
})();
var statearr_42956_44232 = state_42927__$1;
(statearr_42956_44232[(2)] = null);

(statearr_42956_44232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (3))){
var inst_42925 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42927__$1,inst_42925);
} else {
if((state_val_42928 === (12))){
var inst_42901 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
var statearr_42961_44233 = state_42927__$1;
(statearr_42961_44233[(2)] = inst_42901);

(statearr_42961_44233[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (2))){
var state_42927__$1 = state_42927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42927__$1,(4),ch);
} else {
if((state_val_42928 === (23))){
var state_42927__$1 = state_42927;
var statearr_42962_44234 = state_42927__$1;
(statearr_42962_44234[(2)] = null);

(statearr_42962_44234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (19))){
var inst_42907 = (state_42927[(11)]);
var inst_42857 = (state_42927[(8)]);
var inst_42910 = cljs.core.async.muxch_STAR_(inst_42907);
var state_42927__$1 = state_42927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42927__$1,(22),inst_42910,inst_42857);
} else {
if((state_val_42928 === (11))){
var inst_42881 = (state_42927[(10)]);
var inst_42867 = (state_42927[(16)]);
var inst_42881__$1 = cljs.core.seq(inst_42867);
var state_42927__$1 = (function (){var statearr_42969 = state_42927;
(statearr_42969[(10)] = inst_42881__$1);

return statearr_42969;
})();
if(inst_42881__$1){
var statearr_42970_44235 = state_42927__$1;
(statearr_42970_44235[(1)] = (13));

} else {
var statearr_42971_44236 = state_42927__$1;
(statearr_42971_44236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (9))){
var inst_42903 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
var statearr_42972_44237 = state_42927__$1;
(statearr_42972_44237[(2)] = inst_42903);

(statearr_42972_44237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (5))){
var inst_42864 = cljs.core.deref(mults);
var inst_42865 = cljs.core.vals(inst_42864);
var inst_42866 = cljs.core.seq(inst_42865);
var inst_42867 = inst_42866;
var inst_42868 = null;
var inst_42869 = (0);
var inst_42870 = (0);
var state_42927__$1 = (function (){var statearr_42976 = state_42927;
(statearr_42976[(12)] = inst_42870);

(statearr_42976[(14)] = inst_42868);

(statearr_42976[(15)] = inst_42869);

(statearr_42976[(16)] = inst_42867);

return statearr_42976;
})();
var statearr_42977_44239 = state_42927__$1;
(statearr_42977_44239[(2)] = null);

(statearr_42977_44239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (14))){
var state_42927__$1 = state_42927;
var statearr_42985_44240 = state_42927__$1;
(statearr_42985_44240[(2)] = null);

(statearr_42985_44240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (16))){
var inst_42881 = (state_42927[(10)]);
var inst_42885 = cljs.core.chunk_first(inst_42881);
var inst_42886 = cljs.core.chunk_rest(inst_42881);
var inst_42887 = cljs.core.count(inst_42885);
var inst_42867 = inst_42886;
var inst_42868 = inst_42885;
var inst_42869 = inst_42887;
var inst_42870 = (0);
var state_42927__$1 = (function (){var statearr_42990 = state_42927;
(statearr_42990[(12)] = inst_42870);

(statearr_42990[(14)] = inst_42868);

(statearr_42990[(15)] = inst_42869);

(statearr_42990[(16)] = inst_42867);

return statearr_42990;
})();
var statearr_42994_44241 = state_42927__$1;
(statearr_42994_44241[(2)] = null);

(statearr_42994_44241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (10))){
var inst_42870 = (state_42927[(12)]);
var inst_42868 = (state_42927[(14)]);
var inst_42869 = (state_42927[(15)]);
var inst_42867 = (state_42927[(16)]);
var inst_42875 = cljs.core._nth(inst_42868,inst_42870);
var inst_42876 = cljs.core.async.muxch_STAR_(inst_42875);
var inst_42877 = cljs.core.async.close_BANG_(inst_42876);
var inst_42878 = (inst_42870 + (1));
var tmp42982 = inst_42868;
var tmp42983 = inst_42869;
var tmp42984 = inst_42867;
var inst_42867__$1 = tmp42984;
var inst_42868__$1 = tmp42982;
var inst_42869__$1 = tmp42983;
var inst_42870__$1 = inst_42878;
var state_42927__$1 = (function (){var statearr_42995 = state_42927;
(statearr_42995[(12)] = inst_42870__$1);

(statearr_42995[(14)] = inst_42868__$1);

(statearr_42995[(17)] = inst_42877);

(statearr_42995[(15)] = inst_42869__$1);

(statearr_42995[(16)] = inst_42867__$1);

return statearr_42995;
})();
var statearr_42999_44242 = state_42927__$1;
(statearr_42999_44242[(2)] = null);

(statearr_42999_44242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (18))){
var inst_42896 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
var statearr_43000_44243 = state_42927__$1;
(statearr_43000_44243[(2)] = inst_42896);

(statearr_43000_44243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42928 === (8))){
var inst_42870 = (state_42927[(12)]);
var inst_42869 = (state_42927[(15)]);
var inst_42872 = (inst_42870 < inst_42869);
var inst_42873 = inst_42872;
var state_42927__$1 = state_42927;
if(cljs.core.truth_(inst_42873)){
var statearr_43004_44244 = state_42927__$1;
(statearr_43004_44244[(1)] = (10));

} else {
var statearr_43005_44245 = state_42927__$1;
(statearr_43005_44245[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_43009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43009[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_43009[(1)] = (1));

return statearr_43009;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_42927){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_42927);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e43010){var ex__41430__auto__ = e43010;
var statearr_43011_44246 = state_42927;
(statearr_43011_44246[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_42927[(4)]))){
var statearr_43012_44247 = state_42927;
(statearr_43012_44247[(1)] = cljs.core.first((state_42927[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44248 = state_42927;
state_42927 = G__44248;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_42927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_42927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_43013 = f__41566__auto__();
(statearr_43013[(6)] = c__41565__auto___44213);

return statearr_43013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43018 = arguments.length;
switch (G__43018) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43020 = arguments.length;
switch (G__43020) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43022 = arguments.length;
switch (G__43022) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__41565__auto___44256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_43080){
var state_val_43081 = (state_43080[(1)]);
if((state_val_43081 === (7))){
var state_43080__$1 = state_43080;
var statearr_43082_44257 = state_43080__$1;
(statearr_43082_44257[(2)] = null);

(statearr_43082_44257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (1))){
var state_43080__$1 = state_43080;
var statearr_43083_44258 = state_43080__$1;
(statearr_43083_44258[(2)] = null);

(statearr_43083_44258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (4))){
var inst_43038 = (state_43080[(7)]);
var inst_43037 = (state_43080[(8)]);
var inst_43040 = (inst_43038 < inst_43037);
var state_43080__$1 = state_43080;
if(cljs.core.truth_(inst_43040)){
var statearr_43084_44263 = state_43080__$1;
(statearr_43084_44263[(1)] = (6));

} else {
var statearr_43085_44264 = state_43080__$1;
(statearr_43085_44264[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (15))){
var inst_43066 = (state_43080[(9)]);
var inst_43071 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43066);
var state_43080__$1 = state_43080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43080__$1,(17),out,inst_43071);
} else {
if((state_val_43081 === (13))){
var inst_43066 = (state_43080[(9)]);
var inst_43066__$1 = (state_43080[(2)]);
var inst_43067 = cljs.core.some(cljs.core.nil_QMARK_,inst_43066__$1);
var state_43080__$1 = (function (){var statearr_43086 = state_43080;
(statearr_43086[(9)] = inst_43066__$1);

return statearr_43086;
})();
if(cljs.core.truth_(inst_43067)){
var statearr_43087_44265 = state_43080__$1;
(statearr_43087_44265[(1)] = (14));

} else {
var statearr_43088_44266 = state_43080__$1;
(statearr_43088_44266[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (6))){
var state_43080__$1 = state_43080;
var statearr_43089_44267 = state_43080__$1;
(statearr_43089_44267[(2)] = null);

(statearr_43089_44267[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (17))){
var inst_43073 = (state_43080[(2)]);
var state_43080__$1 = (function (){var statearr_43091 = state_43080;
(statearr_43091[(10)] = inst_43073);

return statearr_43091;
})();
var statearr_43092_44269 = state_43080__$1;
(statearr_43092_44269[(2)] = null);

(statearr_43092_44269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (3))){
var inst_43078 = (state_43080[(2)]);
var state_43080__$1 = state_43080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43080__$1,inst_43078);
} else {
if((state_val_43081 === (12))){
var _ = (function (){var statearr_43093 = state_43080;
(statearr_43093[(4)] = cljs.core.rest((state_43080[(4)])));

return statearr_43093;
})();
var state_43080__$1 = state_43080;
var ex43090 = (state_43080__$1[(2)]);
var statearr_43094_44271 = state_43080__$1;
(statearr_43094_44271[(5)] = ex43090);


if((ex43090 instanceof Object)){
var statearr_43095_44272 = state_43080__$1;
(statearr_43095_44272[(1)] = (11));

(statearr_43095_44272[(5)] = null);

} else {
throw ex43090;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (2))){
var inst_43036 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43037 = cnt;
var inst_43038 = (0);
var state_43080__$1 = (function (){var statearr_43096 = state_43080;
(statearr_43096[(7)] = inst_43038);

(statearr_43096[(11)] = inst_43036);

(statearr_43096[(8)] = inst_43037);

return statearr_43096;
})();
var statearr_43097_44273 = state_43080__$1;
(statearr_43097_44273[(2)] = null);

(statearr_43097_44273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (11))){
var inst_43045 = (state_43080[(2)]);
var inst_43046 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43080__$1 = (function (){var statearr_43098 = state_43080;
(statearr_43098[(12)] = inst_43045);

return statearr_43098;
})();
var statearr_43099_44274 = state_43080__$1;
(statearr_43099_44274[(2)] = inst_43046);

(statearr_43099_44274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (9))){
var inst_43038 = (state_43080[(7)]);
var _ = (function (){var statearr_43100 = state_43080;
(statearr_43100[(4)] = cljs.core.cons((12),(state_43080[(4)])));

return statearr_43100;
})();
var inst_43052 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43038) : chs__$1.call(null,inst_43038));
var inst_43053 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43038) : done.call(null,inst_43038));
var inst_43054 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43052,inst_43053);
var ___$1 = (function (){var statearr_43101 = state_43080;
(statearr_43101[(4)] = cljs.core.rest((state_43080[(4)])));

return statearr_43101;
})();
var state_43080__$1 = state_43080;
var statearr_43102_44275 = state_43080__$1;
(statearr_43102_44275[(2)] = inst_43054);

(statearr_43102_44275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (5))){
var inst_43064 = (state_43080[(2)]);
var state_43080__$1 = (function (){var statearr_43103 = state_43080;
(statearr_43103[(13)] = inst_43064);

return statearr_43103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43080__$1,(13),dchan);
} else {
if((state_val_43081 === (14))){
var inst_43069 = cljs.core.async.close_BANG_(out);
var state_43080__$1 = state_43080;
var statearr_43104_44276 = state_43080__$1;
(statearr_43104_44276[(2)] = inst_43069);

(statearr_43104_44276[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (16))){
var inst_43076 = (state_43080[(2)]);
var state_43080__$1 = state_43080;
var statearr_43105_44277 = state_43080__$1;
(statearr_43105_44277[(2)] = inst_43076);

(statearr_43105_44277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (10))){
var inst_43038 = (state_43080[(7)]);
var inst_43057 = (state_43080[(2)]);
var inst_43058 = (inst_43038 + (1));
var inst_43038__$1 = inst_43058;
var state_43080__$1 = (function (){var statearr_43106 = state_43080;
(statearr_43106[(14)] = inst_43057);

(statearr_43106[(7)] = inst_43038__$1);

return statearr_43106;
})();
var statearr_43107_44278 = state_43080__$1;
(statearr_43107_44278[(2)] = null);

(statearr_43107_44278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (8))){
var inst_43062 = (state_43080[(2)]);
var state_43080__$1 = state_43080;
var statearr_43108_44279 = state_43080__$1;
(statearr_43108_44279[(2)] = inst_43062);

(statearr_43108_44279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_43109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43109[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_43109[(1)] = (1));

return statearr_43109;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_43080){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_43080);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e43110){var ex__41430__auto__ = e43110;
var statearr_43111_44280 = state_43080;
(statearr_43111_44280[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_43080[(4)]))){
var statearr_43112_44281 = state_43080;
(statearr_43112_44281[(1)] = cljs.core.first((state_43080[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44282 = state_43080;
state_43080 = G__44282;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_43080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_43080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_43113 = f__41566__auto__();
(statearr_43113[(6)] = c__41565__auto___44256);

return statearr_43113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43116 = arguments.length;
switch (G__43116) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41565__auto___44284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_43153){
var state_val_43154 = (state_43153[(1)]);
if((state_val_43154 === (7))){
var inst_43127 = (state_43153[(7)]);
var inst_43128 = (state_43153[(8)]);
var inst_43127__$1 = (state_43153[(2)]);
var inst_43128__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43127__$1,(0),null);
var inst_43129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43127__$1,(1),null);
var inst_43130 = (inst_43128__$1 == null);
var state_43153__$1 = (function (){var statearr_43159 = state_43153;
(statearr_43159[(7)] = inst_43127__$1);

(statearr_43159[(8)] = inst_43128__$1);

(statearr_43159[(9)] = inst_43129);

return statearr_43159;
})();
if(cljs.core.truth_(inst_43130)){
var statearr_43160_44285 = state_43153__$1;
(statearr_43160_44285[(1)] = (8));

} else {
var statearr_43161_44286 = state_43153__$1;
(statearr_43161_44286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43154 === (1))){
var inst_43117 = cljs.core.vec(chs);
var inst_43118 = inst_43117;
var state_43153__$1 = (function (){var statearr_43163 = state_43153;
(statearr_43163[(10)] = inst_43118);

return statearr_43163;
})();
var statearr_43164_44287 = state_43153__$1;
(statearr_43164_44287[(2)] = null);

(statearr_43164_44287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43154 === (4))){
var inst_43118 = (state_43153[(10)]);
var state_43153__$1 = state_43153;
return cljs.core.async.ioc_alts_BANG_(state_43153__$1,(7),inst_43118);
} else {
if((state_val_43154 === (6))){
var inst_43149 = (state_43153[(2)]);
var state_43153__$1 = state_43153;
var statearr_43167_44288 = state_43153__$1;
(statearr_43167_44288[(2)] = inst_43149);

(statearr_43167_44288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43154 === (3))){
var inst_43151 = (state_43153[(2)]);
var state_43153__$1 = state_43153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43153__$1,inst_43151);
} else {
if((state_val_43154 === (2))){
var inst_43118 = (state_43153[(10)]);
var inst_43120 = cljs.core.count(inst_43118);
var inst_43121 = (inst_43120 > (0));
var state_43153__$1 = state_43153;
if(cljs.core.truth_(inst_43121)){
var statearr_43171_44289 = state_43153__$1;
(statearr_43171_44289[(1)] = (4));

} else {
var statearr_43172_44290 = state_43153__$1;
(statearr_43172_44290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43154 === (11))){
var inst_43118 = (state_43153[(10)]);
var inst_43142 = (state_43153[(2)]);
var tmp43168 = inst_43118;
var inst_43118__$1 = tmp43168;
var state_43153__$1 = (function (){var statearr_43175 = state_43153;
(statearr_43175[(10)] = inst_43118__$1);

(statearr_43175[(11)] = inst_43142);

return statearr_43175;
})();
var statearr_43176_44291 = state_43153__$1;
(statearr_43176_44291[(2)] = null);

(statearr_43176_44291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43154 === (9))){
var inst_43128 = (state_43153[(8)]);
var state_43153__$1 = state_43153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43153__$1,(11),out,inst_43128);
} else {
if((state_val_43154 === (5))){
var inst_43147 = cljs.core.async.close_BANG_(out);
var state_43153__$1 = state_43153;
var statearr_43179_44292 = state_43153__$1;
(statearr_43179_44292[(2)] = inst_43147);

(statearr_43179_44292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43154 === (10))){
var inst_43145 = (state_43153[(2)]);
var state_43153__$1 = state_43153;
var statearr_43180_44293 = state_43153__$1;
(statearr_43180_44293[(2)] = inst_43145);

(statearr_43180_44293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43154 === (8))){
var inst_43127 = (state_43153[(7)]);
var inst_43118 = (state_43153[(10)]);
var inst_43128 = (state_43153[(8)]);
var inst_43129 = (state_43153[(9)]);
var inst_43137 = (function (){var cs = inst_43118;
var vec__43123 = inst_43127;
var v = inst_43128;
var c = inst_43129;
return (function (p1__43114_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43114_SHARP_);
});
})();
var inst_43138 = cljs.core.filterv(inst_43137,inst_43118);
var inst_43118__$1 = inst_43138;
var state_43153__$1 = (function (){var statearr_43187 = state_43153;
(statearr_43187[(10)] = inst_43118__$1);

return statearr_43187;
})();
var statearr_43188_44301 = state_43153__$1;
(statearr_43188_44301[(2)] = null);

(statearr_43188_44301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_43190 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43190[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_43190[(1)] = (1));

return statearr_43190;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_43153){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_43153);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e43193){var ex__41430__auto__ = e43193;
var statearr_43194_44305 = state_43153;
(statearr_43194_44305[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_43153[(4)]))){
var statearr_43195_44306 = state_43153;
(statearr_43195_44306[(1)] = cljs.core.first((state_43153[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44307 = state_43153;
state_43153 = G__44307;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_43153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_43153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_43199 = f__41566__auto__();
(statearr_43199[(6)] = c__41565__auto___44284);

return statearr_43199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43201 = arguments.length;
switch (G__43201) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41565__auto___44315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_43226){
var state_val_43227 = (state_43226[(1)]);
if((state_val_43227 === (7))){
var inst_43208 = (state_43226[(7)]);
var inst_43208__$1 = (state_43226[(2)]);
var inst_43209 = (inst_43208__$1 == null);
var inst_43210 = cljs.core.not(inst_43209);
var state_43226__$1 = (function (){var statearr_43228 = state_43226;
(statearr_43228[(7)] = inst_43208__$1);

return statearr_43228;
})();
if(inst_43210){
var statearr_43229_44316 = state_43226__$1;
(statearr_43229_44316[(1)] = (8));

} else {
var statearr_43230_44317 = state_43226__$1;
(statearr_43230_44317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (1))){
var inst_43203 = (0);
var state_43226__$1 = (function (){var statearr_43231 = state_43226;
(statearr_43231[(8)] = inst_43203);

return statearr_43231;
})();
var statearr_43232_44321 = state_43226__$1;
(statearr_43232_44321[(2)] = null);

(statearr_43232_44321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (4))){
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43226__$1,(7),ch);
} else {
if((state_val_43227 === (6))){
var inst_43221 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43233_44322 = state_43226__$1;
(statearr_43233_44322[(2)] = inst_43221);

(statearr_43233_44322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (3))){
var inst_43223 = (state_43226[(2)]);
var inst_43224 = cljs.core.async.close_BANG_(out);
var state_43226__$1 = (function (){var statearr_43234 = state_43226;
(statearr_43234[(9)] = inst_43223);

return statearr_43234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43226__$1,inst_43224);
} else {
if((state_val_43227 === (2))){
var inst_43203 = (state_43226[(8)]);
var inst_43205 = (inst_43203 < n);
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43205)){
var statearr_43235_44324 = state_43226__$1;
(statearr_43235_44324[(1)] = (4));

} else {
var statearr_43236_44325 = state_43226__$1;
(statearr_43236_44325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (11))){
var inst_43203 = (state_43226[(8)]);
var inst_43213 = (state_43226[(2)]);
var inst_43214 = (inst_43203 + (1));
var inst_43203__$1 = inst_43214;
var state_43226__$1 = (function (){var statearr_43237 = state_43226;
(statearr_43237[(10)] = inst_43213);

(statearr_43237[(8)] = inst_43203__$1);

return statearr_43237;
})();
var statearr_43238_44326 = state_43226__$1;
(statearr_43238_44326[(2)] = null);

(statearr_43238_44326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (9))){
var state_43226__$1 = state_43226;
var statearr_43239_44327 = state_43226__$1;
(statearr_43239_44327[(2)] = null);

(statearr_43239_44327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (5))){
var state_43226__$1 = state_43226;
var statearr_43240_44328 = state_43226__$1;
(statearr_43240_44328[(2)] = null);

(statearr_43240_44328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (10))){
var inst_43218 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43241_44332 = state_43226__$1;
(statearr_43241_44332[(2)] = inst_43218);

(statearr_43241_44332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (8))){
var inst_43208 = (state_43226[(7)]);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43226__$1,(11),out,inst_43208);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_43242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43242[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_43242[(1)] = (1));

return statearr_43242;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_43226){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_43226);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e43243){var ex__41430__auto__ = e43243;
var statearr_43244_44339 = state_43226;
(statearr_43244_44339[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_43226[(4)]))){
var statearr_43245_44340 = state_43226;
(statearr_43245_44340[(1)] = cljs.core.first((state_43226[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44347 = state_43226;
state_43226 = G__44347;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_43226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_43226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_43246 = f__41566__auto__();
(statearr_43246[(6)] = c__41565__auto___44315);

return statearr_43246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43248 = (function (f,ch,meta43249){
this.f = f;
this.ch = ch;
this.meta43249 = meta43249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43250,meta43249__$1){
var self__ = this;
var _43250__$1 = this;
return (new cljs.core.async.t_cljs$core$async43248(self__.f,self__.ch,meta43249__$1));
}));

(cljs.core.async.t_cljs$core$async43248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43250){
var self__ = this;
var _43250__$1 = this;
return self__.meta43249;
}));

(cljs.core.async.t_cljs$core$async43248.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43248.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43248.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43251 = (function (f,ch,meta43249,_,fn1,meta43252){
this.f = f;
this.ch = ch;
this.meta43249 = meta43249;
this._ = _;
this.fn1 = fn1;
this.meta43252 = meta43252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43253,meta43252__$1){
var self__ = this;
var _43253__$1 = this;
return (new cljs.core.async.t_cljs$core$async43251(self__.f,self__.ch,self__.meta43249,self__._,self__.fn1,meta43252__$1));
}));

(cljs.core.async.t_cljs$core$async43251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43253){
var self__ = this;
var _43253__$1 = this;
return self__.meta43252;
}));

(cljs.core.async.t_cljs$core$async43251.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43251.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43247_SHARP_){
var G__43254 = (((p1__43247_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43247_SHARP_) : self__.f.call(null,p1__43247_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43254) : f1.call(null,G__43254));
});
}));

(cljs.core.async.t_cljs$core$async43251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43249","meta43249",-82870916,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43248","cljs.core.async/t_cljs$core$async43248",811258458,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43252","meta43252",1285013323,null)], null);
}));

(cljs.core.async.t_cljs$core$async43251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43251");

(cljs.core.async.t_cljs$core$async43251.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43251.
 */
cljs.core.async.__GT_t_cljs$core$async43251 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43251(f__$1,ch__$1,meta43249__$1,___$2,fn1__$1,meta43252){
return (new cljs.core.async.t_cljs$core$async43251(f__$1,ch__$1,meta43249__$1,___$2,fn1__$1,meta43252));
});

}

return (new cljs.core.async.t_cljs$core$async43251(self__.f,self__.ch,self__.meta43249,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43255 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43255) : self__.f.call(null,G__43255));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43248.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43249","meta43249",-82870916,null)], null);
}));

(cljs.core.async.t_cljs$core$async43248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43248");

(cljs.core.async.t_cljs$core$async43248.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43248.
 */
cljs.core.async.__GT_t_cljs$core$async43248 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43248(f__$1,ch__$1,meta43249){
return (new cljs.core.async.t_cljs$core$async43248(f__$1,ch__$1,meta43249));
});

}

return (new cljs.core.async.t_cljs$core$async43248(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43256 = (function (f,ch,meta43257){
this.f = f;
this.ch = ch;
this.meta43257 = meta43257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43258,meta43257__$1){
var self__ = this;
var _43258__$1 = this;
return (new cljs.core.async.t_cljs$core$async43256(self__.f,self__.ch,meta43257__$1));
}));

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43258){
var self__ = this;
var _43258__$1 = this;
return self__.meta43257;
}));

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43257","meta43257",1981607943,null)], null);
}));

(cljs.core.async.t_cljs$core$async43256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43256");

(cljs.core.async.t_cljs$core$async43256.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43256.
 */
cljs.core.async.__GT_t_cljs$core$async43256 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43256(f__$1,ch__$1,meta43257){
return (new cljs.core.async.t_cljs$core$async43256(f__$1,ch__$1,meta43257));
});

}

return (new cljs.core.async.t_cljs$core$async43256(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43259 = (function (p,ch,meta43260){
this.p = p;
this.ch = ch;
this.meta43260 = meta43260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43261,meta43260__$1){
var self__ = this;
var _43261__$1 = this;
return (new cljs.core.async.t_cljs$core$async43259(self__.p,self__.ch,meta43260__$1));
}));

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43261){
var self__ = this;
var _43261__$1 = this;
return self__.meta43260;
}));

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43260","meta43260",-1330050041,null)], null);
}));

(cljs.core.async.t_cljs$core$async43259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43259");

(cljs.core.async.t_cljs$core$async43259.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43259.
 */
cljs.core.async.__GT_t_cljs$core$async43259 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43259(p__$1,ch__$1,meta43260){
return (new cljs.core.async.t_cljs$core$async43259(p__$1,ch__$1,meta43260));
});

}

return (new cljs.core.async.t_cljs$core$async43259(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43263 = arguments.length;
switch (G__43263) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41565__auto___44361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_43284){
var state_val_43285 = (state_43284[(1)]);
if((state_val_43285 === (7))){
var inst_43280 = (state_43284[(2)]);
var state_43284__$1 = state_43284;
var statearr_43286_44362 = state_43284__$1;
(statearr_43286_44362[(2)] = inst_43280);

(statearr_43286_44362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43285 === (1))){
var state_43284__$1 = state_43284;
var statearr_43287_44363 = state_43284__$1;
(statearr_43287_44363[(2)] = null);

(statearr_43287_44363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43285 === (4))){
var inst_43266 = (state_43284[(7)]);
var inst_43266__$1 = (state_43284[(2)]);
var inst_43267 = (inst_43266__$1 == null);
var state_43284__$1 = (function (){var statearr_43288 = state_43284;
(statearr_43288[(7)] = inst_43266__$1);

return statearr_43288;
})();
if(cljs.core.truth_(inst_43267)){
var statearr_43289_44364 = state_43284__$1;
(statearr_43289_44364[(1)] = (5));

} else {
var statearr_43290_44365 = state_43284__$1;
(statearr_43290_44365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43285 === (6))){
var inst_43266 = (state_43284[(7)]);
var inst_43271 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43266) : p.call(null,inst_43266));
var state_43284__$1 = state_43284;
if(cljs.core.truth_(inst_43271)){
var statearr_43291_44366 = state_43284__$1;
(statearr_43291_44366[(1)] = (8));

} else {
var statearr_43292_44367 = state_43284__$1;
(statearr_43292_44367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43285 === (3))){
var inst_43282 = (state_43284[(2)]);
var state_43284__$1 = state_43284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43284__$1,inst_43282);
} else {
if((state_val_43285 === (2))){
var state_43284__$1 = state_43284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43284__$1,(4),ch);
} else {
if((state_val_43285 === (11))){
var inst_43274 = (state_43284[(2)]);
var state_43284__$1 = state_43284;
var statearr_43293_44368 = state_43284__$1;
(statearr_43293_44368[(2)] = inst_43274);

(statearr_43293_44368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43285 === (9))){
var state_43284__$1 = state_43284;
var statearr_43294_44369 = state_43284__$1;
(statearr_43294_44369[(2)] = null);

(statearr_43294_44369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43285 === (5))){
var inst_43269 = cljs.core.async.close_BANG_(out);
var state_43284__$1 = state_43284;
var statearr_43295_44370 = state_43284__$1;
(statearr_43295_44370[(2)] = inst_43269);

(statearr_43295_44370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43285 === (10))){
var inst_43277 = (state_43284[(2)]);
var state_43284__$1 = (function (){var statearr_43296 = state_43284;
(statearr_43296[(8)] = inst_43277);

return statearr_43296;
})();
var statearr_43297_44371 = state_43284__$1;
(statearr_43297_44371[(2)] = null);

(statearr_43297_44371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43285 === (8))){
var inst_43266 = (state_43284[(7)]);
var state_43284__$1 = state_43284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43284__$1,(11),out,inst_43266);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_43298 = [null,null,null,null,null,null,null,null,null];
(statearr_43298[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_43298[(1)] = (1));

return statearr_43298;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_43284){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_43284);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e43299){var ex__41430__auto__ = e43299;
var statearr_43300_44378 = state_43284;
(statearr_43300_44378[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_43284[(4)]))){
var statearr_43301_44379 = state_43284;
(statearr_43301_44379[(1)] = cljs.core.first((state_43284[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44380 = state_43284;
state_43284 = G__44380;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_43284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_43284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_43302 = f__41566__auto__();
(statearr_43302[(6)] = c__41565__auto___44361);

return statearr_43302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43304 = arguments.length;
switch (G__43304) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_43374){
var state_val_43375 = (state_43374[(1)]);
if((state_val_43375 === (7))){
var inst_43369 = (state_43374[(2)]);
var state_43374__$1 = state_43374;
var statearr_43377_44382 = state_43374__$1;
(statearr_43377_44382[(2)] = inst_43369);

(statearr_43377_44382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (20))){
var inst_43338 = (state_43374[(7)]);
var inst_43349 = (state_43374[(2)]);
var inst_43350 = cljs.core.next(inst_43338);
var inst_43321 = inst_43350;
var inst_43322 = null;
var inst_43323 = (0);
var inst_43324 = (0);
var state_43374__$1 = (function (){var statearr_43379 = state_43374;
(statearr_43379[(8)] = inst_43322);

(statearr_43379[(9)] = inst_43323);

(statearr_43379[(10)] = inst_43321);

(statearr_43379[(11)] = inst_43324);

(statearr_43379[(12)] = inst_43349);

return statearr_43379;
})();
var statearr_43380_44383 = state_43374__$1;
(statearr_43380_44383[(2)] = null);

(statearr_43380_44383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (1))){
var state_43374__$1 = state_43374;
var statearr_43381_44384 = state_43374__$1;
(statearr_43381_44384[(2)] = null);

(statearr_43381_44384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (4))){
var inst_43310 = (state_43374[(13)]);
var inst_43310__$1 = (state_43374[(2)]);
var inst_43311 = (inst_43310__$1 == null);
var state_43374__$1 = (function (){var statearr_43382 = state_43374;
(statearr_43382[(13)] = inst_43310__$1);

return statearr_43382;
})();
if(cljs.core.truth_(inst_43311)){
var statearr_43383_44385 = state_43374__$1;
(statearr_43383_44385[(1)] = (5));

} else {
var statearr_43384_44386 = state_43374__$1;
(statearr_43384_44386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (15))){
var state_43374__$1 = state_43374;
var statearr_43388_44387 = state_43374__$1;
(statearr_43388_44387[(2)] = null);

(statearr_43388_44387[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (21))){
var state_43374__$1 = state_43374;
var statearr_43389_44388 = state_43374__$1;
(statearr_43389_44388[(2)] = null);

(statearr_43389_44388[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (13))){
var inst_43322 = (state_43374[(8)]);
var inst_43323 = (state_43374[(9)]);
var inst_43321 = (state_43374[(10)]);
var inst_43324 = (state_43374[(11)]);
var inst_43333 = (state_43374[(2)]);
var inst_43335 = (inst_43324 + (1));
var tmp43385 = inst_43322;
var tmp43386 = inst_43323;
var tmp43387 = inst_43321;
var inst_43321__$1 = tmp43387;
var inst_43322__$1 = tmp43385;
var inst_43323__$1 = tmp43386;
var inst_43324__$1 = inst_43335;
var state_43374__$1 = (function (){var statearr_43390 = state_43374;
(statearr_43390[(8)] = inst_43322__$1);

(statearr_43390[(9)] = inst_43323__$1);

(statearr_43390[(14)] = inst_43333);

(statearr_43390[(10)] = inst_43321__$1);

(statearr_43390[(11)] = inst_43324__$1);

return statearr_43390;
})();
var statearr_43391_44389 = state_43374__$1;
(statearr_43391_44389[(2)] = null);

(statearr_43391_44389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (22))){
var state_43374__$1 = state_43374;
var statearr_43392_44390 = state_43374__$1;
(statearr_43392_44390[(2)] = null);

(statearr_43392_44390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (6))){
var inst_43310 = (state_43374[(13)]);
var inst_43319 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43310) : f.call(null,inst_43310));
var inst_43320 = cljs.core.seq(inst_43319);
var inst_43321 = inst_43320;
var inst_43322 = null;
var inst_43323 = (0);
var inst_43324 = (0);
var state_43374__$1 = (function (){var statearr_43395 = state_43374;
(statearr_43395[(8)] = inst_43322);

(statearr_43395[(9)] = inst_43323);

(statearr_43395[(10)] = inst_43321);

(statearr_43395[(11)] = inst_43324);

return statearr_43395;
})();
var statearr_43396_44393 = state_43374__$1;
(statearr_43396_44393[(2)] = null);

(statearr_43396_44393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (17))){
var inst_43338 = (state_43374[(7)]);
var inst_43342 = cljs.core.chunk_first(inst_43338);
var inst_43343 = cljs.core.chunk_rest(inst_43338);
var inst_43344 = cljs.core.count(inst_43342);
var inst_43321 = inst_43343;
var inst_43322 = inst_43342;
var inst_43323 = inst_43344;
var inst_43324 = (0);
var state_43374__$1 = (function (){var statearr_43397 = state_43374;
(statearr_43397[(8)] = inst_43322);

(statearr_43397[(9)] = inst_43323);

(statearr_43397[(10)] = inst_43321);

(statearr_43397[(11)] = inst_43324);

return statearr_43397;
})();
var statearr_43398_44394 = state_43374__$1;
(statearr_43398_44394[(2)] = null);

(statearr_43398_44394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (3))){
var inst_43371 = (state_43374[(2)]);
var state_43374__$1 = state_43374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43374__$1,inst_43371);
} else {
if((state_val_43375 === (12))){
var inst_43358 = (state_43374[(2)]);
var state_43374__$1 = state_43374;
var statearr_43399_44395 = state_43374__$1;
(statearr_43399_44395[(2)] = inst_43358);

(statearr_43399_44395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (2))){
var state_43374__$1 = state_43374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43374__$1,(4),in$);
} else {
if((state_val_43375 === (23))){
var inst_43367 = (state_43374[(2)]);
var state_43374__$1 = state_43374;
var statearr_43400_44398 = state_43374__$1;
(statearr_43400_44398[(2)] = inst_43367);

(statearr_43400_44398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (19))){
var inst_43353 = (state_43374[(2)]);
var state_43374__$1 = state_43374;
var statearr_43402_44399 = state_43374__$1;
(statearr_43402_44399[(2)] = inst_43353);

(statearr_43402_44399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (11))){
var inst_43338 = (state_43374[(7)]);
var inst_43321 = (state_43374[(10)]);
var inst_43338__$1 = cljs.core.seq(inst_43321);
var state_43374__$1 = (function (){var statearr_43405 = state_43374;
(statearr_43405[(7)] = inst_43338__$1);

return statearr_43405;
})();
if(inst_43338__$1){
var statearr_43407_44400 = state_43374__$1;
(statearr_43407_44400[(1)] = (14));

} else {
var statearr_43408_44401 = state_43374__$1;
(statearr_43408_44401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (9))){
var inst_43360 = (state_43374[(2)]);
var inst_43361 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43374__$1 = (function (){var statearr_43409 = state_43374;
(statearr_43409[(15)] = inst_43360);

return statearr_43409;
})();
if(cljs.core.truth_(inst_43361)){
var statearr_43410_44402 = state_43374__$1;
(statearr_43410_44402[(1)] = (21));

} else {
var statearr_43411_44403 = state_43374__$1;
(statearr_43411_44403[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (5))){
var inst_43313 = cljs.core.async.close_BANG_(out);
var state_43374__$1 = state_43374;
var statearr_43412_44408 = state_43374__$1;
(statearr_43412_44408[(2)] = inst_43313);

(statearr_43412_44408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (14))){
var inst_43338 = (state_43374[(7)]);
var inst_43340 = cljs.core.chunked_seq_QMARK_(inst_43338);
var state_43374__$1 = state_43374;
if(inst_43340){
var statearr_43414_44411 = state_43374__$1;
(statearr_43414_44411[(1)] = (17));

} else {
var statearr_43415_44412 = state_43374__$1;
(statearr_43415_44412[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (16))){
var inst_43356 = (state_43374[(2)]);
var state_43374__$1 = state_43374;
var statearr_43416_44413 = state_43374__$1;
(statearr_43416_44413[(2)] = inst_43356);

(statearr_43416_44413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43375 === (10))){
var inst_43322 = (state_43374[(8)]);
var inst_43324 = (state_43374[(11)]);
var inst_43330 = cljs.core._nth(inst_43322,inst_43324);
var state_43374__$1 = state_43374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43374__$1,(13),out,inst_43330);
} else {
if((state_val_43375 === (18))){
var inst_43338 = (state_43374[(7)]);
var inst_43347 = cljs.core.first(inst_43338);
var state_43374__$1 = state_43374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43374__$1,(20),out,inst_43347);
} else {
if((state_val_43375 === (8))){
var inst_43323 = (state_43374[(9)]);
var inst_43324 = (state_43374[(11)]);
var inst_43326 = (inst_43324 < inst_43323);
var inst_43327 = inst_43326;
var state_43374__$1 = state_43374;
if(cljs.core.truth_(inst_43327)){
var statearr_43423_44419 = state_43374__$1;
(statearr_43423_44419[(1)] = (10));

} else {
var statearr_43424_44420 = state_43374__$1;
(statearr_43424_44420[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41427__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41427__auto____0 = (function (){
var statearr_43426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43426[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41427__auto__);

(statearr_43426[(1)] = (1));

return statearr_43426;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41427__auto____1 = (function (state_43374){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_43374);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e43427){var ex__41430__auto__ = e43427;
var statearr_43429_44422 = state_43374;
(statearr_43429_44422[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_43374[(4)]))){
var statearr_43431_44423 = state_43374;
(statearr_43431_44423[(1)] = cljs.core.first((state_43374[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44424 = state_43374;
state_43374 = G__44424;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41427__auto__ = function(state_43374){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41427__auto____1.call(this,state_43374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41427__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41427__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_43434 = f__41566__auto__();
(statearr_43434[(6)] = c__41565__auto__);

return statearr_43434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));

return c__41565__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43437 = arguments.length;
switch (G__43437) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43444 = arguments.length;
switch (G__43444) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43451 = arguments.length;
switch (G__43451) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41565__auto___44428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_43479){
var state_val_43480 = (state_43479[(1)]);
if((state_val_43480 === (7))){
var inst_43474 = (state_43479[(2)]);
var state_43479__$1 = state_43479;
var statearr_43481_44429 = state_43479__$1;
(statearr_43481_44429[(2)] = inst_43474);

(statearr_43481_44429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (1))){
var inst_43454 = null;
var state_43479__$1 = (function (){var statearr_43482 = state_43479;
(statearr_43482[(7)] = inst_43454);

return statearr_43482;
})();
var statearr_43487_44430 = state_43479__$1;
(statearr_43487_44430[(2)] = null);

(statearr_43487_44430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (4))){
var inst_43459 = (state_43479[(8)]);
var inst_43459__$1 = (state_43479[(2)]);
var inst_43460 = (inst_43459__$1 == null);
var inst_43461 = cljs.core.not(inst_43460);
var state_43479__$1 = (function (){var statearr_43489 = state_43479;
(statearr_43489[(8)] = inst_43459__$1);

return statearr_43489;
})();
if(inst_43461){
var statearr_43490_44432 = state_43479__$1;
(statearr_43490_44432[(1)] = (5));

} else {
var statearr_43491_44433 = state_43479__$1;
(statearr_43491_44433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (6))){
var state_43479__$1 = state_43479;
var statearr_43492_44434 = state_43479__$1;
(statearr_43492_44434[(2)] = null);

(statearr_43492_44434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (3))){
var inst_43476 = (state_43479[(2)]);
var inst_43477 = cljs.core.async.close_BANG_(out);
var state_43479__$1 = (function (){var statearr_43494 = state_43479;
(statearr_43494[(9)] = inst_43476);

return statearr_43494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43479__$1,inst_43477);
} else {
if((state_val_43480 === (2))){
var state_43479__$1 = state_43479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43479__$1,(4),ch);
} else {
if((state_val_43480 === (11))){
var inst_43459 = (state_43479[(8)]);
var inst_43468 = (state_43479[(2)]);
var inst_43454 = inst_43459;
var state_43479__$1 = (function (){var statearr_43496 = state_43479;
(statearr_43496[(7)] = inst_43454);

(statearr_43496[(10)] = inst_43468);

return statearr_43496;
})();
var statearr_43497_44436 = state_43479__$1;
(statearr_43497_44436[(2)] = null);

(statearr_43497_44436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (9))){
var inst_43459 = (state_43479[(8)]);
var state_43479__$1 = state_43479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43479__$1,(11),out,inst_43459);
} else {
if((state_val_43480 === (5))){
var inst_43459 = (state_43479[(8)]);
var inst_43454 = (state_43479[(7)]);
var inst_43463 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43459,inst_43454);
var state_43479__$1 = state_43479;
if(inst_43463){
var statearr_43499_44437 = state_43479__$1;
(statearr_43499_44437[(1)] = (8));

} else {
var statearr_43500_44438 = state_43479__$1;
(statearr_43500_44438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (10))){
var inst_43471 = (state_43479[(2)]);
var state_43479__$1 = state_43479;
var statearr_43502_44439 = state_43479__$1;
(statearr_43502_44439[(2)] = inst_43471);

(statearr_43502_44439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (8))){
var inst_43454 = (state_43479[(7)]);
var tmp43498 = inst_43454;
var inst_43454__$1 = tmp43498;
var state_43479__$1 = (function (){var statearr_43504 = state_43479;
(statearr_43504[(7)] = inst_43454__$1);

return statearr_43504;
})();
var statearr_43505_44440 = state_43479__$1;
(statearr_43505_44440[(2)] = null);

(statearr_43505_44440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_43506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43506[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_43506[(1)] = (1));

return statearr_43506;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_43479){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_43479);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e43507){var ex__41430__auto__ = e43507;
var statearr_43508_44441 = state_43479;
(statearr_43508_44441[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_43479[(4)]))){
var statearr_43510_44442 = state_43479;
(statearr_43510_44442[(1)] = cljs.core.first((state_43479[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44443 = state_43479;
state_43479 = G__44443;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_43479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_43479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_43512 = f__41566__auto__();
(statearr_43512[(6)] = c__41565__auto___44428);

return statearr_43512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43517 = arguments.length;
switch (G__43517) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41565__auto___44446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_43555){
var state_val_43556 = (state_43555[(1)]);
if((state_val_43556 === (7))){
var inst_43551 = (state_43555[(2)]);
var state_43555__$1 = state_43555;
var statearr_43560_44447 = state_43555__$1;
(statearr_43560_44447[(2)] = inst_43551);

(statearr_43560_44447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (1))){
var inst_43518 = (new Array(n));
var inst_43519 = inst_43518;
var inst_43520 = (0);
var state_43555__$1 = (function (){var statearr_43561 = state_43555;
(statearr_43561[(7)] = inst_43520);

(statearr_43561[(8)] = inst_43519);

return statearr_43561;
})();
var statearr_43562_44449 = state_43555__$1;
(statearr_43562_44449[(2)] = null);

(statearr_43562_44449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (4))){
var inst_43523 = (state_43555[(9)]);
var inst_43523__$1 = (state_43555[(2)]);
var inst_43524 = (inst_43523__$1 == null);
var inst_43525 = cljs.core.not(inst_43524);
var state_43555__$1 = (function (){var statearr_43564 = state_43555;
(statearr_43564[(9)] = inst_43523__$1);

return statearr_43564;
})();
if(inst_43525){
var statearr_43566_44451 = state_43555__$1;
(statearr_43566_44451[(1)] = (5));

} else {
var statearr_43567_44452 = state_43555__$1;
(statearr_43567_44452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (15))){
var inst_43545 = (state_43555[(2)]);
var state_43555__$1 = state_43555;
var statearr_43568_44453 = state_43555__$1;
(statearr_43568_44453[(2)] = inst_43545);

(statearr_43568_44453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (13))){
var state_43555__$1 = state_43555;
var statearr_43569_44454 = state_43555__$1;
(statearr_43569_44454[(2)] = null);

(statearr_43569_44454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (6))){
var inst_43520 = (state_43555[(7)]);
var inst_43541 = (inst_43520 > (0));
var state_43555__$1 = state_43555;
if(cljs.core.truth_(inst_43541)){
var statearr_43570_44455 = state_43555__$1;
(statearr_43570_44455[(1)] = (12));

} else {
var statearr_43571_44457 = state_43555__$1;
(statearr_43571_44457[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (3))){
var inst_43553 = (state_43555[(2)]);
var state_43555__$1 = state_43555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43555__$1,inst_43553);
} else {
if((state_val_43556 === (12))){
var inst_43519 = (state_43555[(8)]);
var inst_43543 = cljs.core.vec(inst_43519);
var state_43555__$1 = state_43555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43555__$1,(15),out,inst_43543);
} else {
if((state_val_43556 === (2))){
var state_43555__$1 = state_43555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43555__$1,(4),ch);
} else {
if((state_val_43556 === (11))){
var inst_43535 = (state_43555[(2)]);
var inst_43536 = (new Array(n));
var inst_43519 = inst_43536;
var inst_43520 = (0);
var state_43555__$1 = (function (){var statearr_43574 = state_43555;
(statearr_43574[(7)] = inst_43520);

(statearr_43574[(10)] = inst_43535);

(statearr_43574[(8)] = inst_43519);

return statearr_43574;
})();
var statearr_43575_44458 = state_43555__$1;
(statearr_43575_44458[(2)] = null);

(statearr_43575_44458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (9))){
var inst_43519 = (state_43555[(8)]);
var inst_43533 = cljs.core.vec(inst_43519);
var state_43555__$1 = state_43555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43555__$1,(11),out,inst_43533);
} else {
if((state_val_43556 === (5))){
var inst_43528 = (state_43555[(11)]);
var inst_43520 = (state_43555[(7)]);
var inst_43523 = (state_43555[(9)]);
var inst_43519 = (state_43555[(8)]);
var inst_43527 = (inst_43519[inst_43520] = inst_43523);
var inst_43528__$1 = (inst_43520 + (1));
var inst_43529 = (inst_43528__$1 < n);
var state_43555__$1 = (function (){var statearr_43577 = state_43555;
(statearr_43577[(12)] = inst_43527);

(statearr_43577[(11)] = inst_43528__$1);

return statearr_43577;
})();
if(cljs.core.truth_(inst_43529)){
var statearr_43578_44460 = state_43555__$1;
(statearr_43578_44460[(1)] = (8));

} else {
var statearr_43579_44461 = state_43555__$1;
(statearr_43579_44461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (14))){
var inst_43548 = (state_43555[(2)]);
var inst_43549 = cljs.core.async.close_BANG_(out);
var state_43555__$1 = (function (){var statearr_43581 = state_43555;
(statearr_43581[(13)] = inst_43548);

return statearr_43581;
})();
var statearr_43582_44462 = state_43555__$1;
(statearr_43582_44462[(2)] = inst_43549);

(statearr_43582_44462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (10))){
var inst_43539 = (state_43555[(2)]);
var state_43555__$1 = state_43555;
var statearr_43583_44463 = state_43555__$1;
(statearr_43583_44463[(2)] = inst_43539);

(statearr_43583_44463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (8))){
var inst_43528 = (state_43555[(11)]);
var inst_43519 = (state_43555[(8)]);
var tmp43580 = inst_43519;
var inst_43519__$1 = tmp43580;
var inst_43520 = inst_43528;
var state_43555__$1 = (function (){var statearr_43584 = state_43555;
(statearr_43584[(7)] = inst_43520);

(statearr_43584[(8)] = inst_43519__$1);

return statearr_43584;
})();
var statearr_43585_44465 = state_43555__$1;
(statearr_43585_44465[(2)] = null);

(statearr_43585_44465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_43586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43586[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_43586[(1)] = (1));

return statearr_43586;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_43555){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_43555);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e43587){var ex__41430__auto__ = e43587;
var statearr_43591_44466 = state_43555;
(statearr_43591_44466[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_43555[(4)]))){
var statearr_43592_44467 = state_43555;
(statearr_43592_44467[(1)] = cljs.core.first((state_43555[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44468 = state_43555;
state_43555 = G__44468;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_43555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_43555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_43593 = f__41566__auto__();
(statearr_43593[(6)] = c__41565__auto___44446);

return statearr_43593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43595 = arguments.length;
switch (G__43595) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41565__auto___44470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41566__auto__ = (function (){var switch__41426__auto__ = (function (state_43641){
var state_val_43642 = (state_43641[(1)]);
if((state_val_43642 === (7))){
var inst_43635 = (state_43641[(2)]);
var state_43641__$1 = state_43641;
var statearr_43645_44472 = state_43641__$1;
(statearr_43645_44472[(2)] = inst_43635);

(statearr_43645_44472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43642 === (1))){
var inst_43597 = [];
var inst_43598 = inst_43597;
var inst_43599 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43641__$1 = (function (){var statearr_43647 = state_43641;
(statearr_43647[(7)] = inst_43599);

(statearr_43647[(8)] = inst_43598);

return statearr_43647;
})();
var statearr_43649_44473 = state_43641__$1;
(statearr_43649_44473[(2)] = null);

(statearr_43649_44473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43642 === (4))){
var inst_43602 = (state_43641[(9)]);
var inst_43602__$1 = (state_43641[(2)]);
var inst_43603 = (inst_43602__$1 == null);
var inst_43604 = cljs.core.not(inst_43603);
var state_43641__$1 = (function (){var statearr_43650 = state_43641;
(statearr_43650[(9)] = inst_43602__$1);

return statearr_43650;
})();
if(inst_43604){
var statearr_43651_44478 = state_43641__$1;
(statearr_43651_44478[(1)] = (5));

} else {
var statearr_43653_44479 = state_43641__$1;
(statearr_43653_44479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43642 === (15))){
var inst_43629 = (state_43641[(2)]);
var state_43641__$1 = state_43641;
var statearr_43654_44484 = state_43641__$1;
(statearr_43654_44484[(2)] = inst_43629);

(statearr_43654_44484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43642 === (13))){
var state_43641__$1 = state_43641;
var statearr_43655_44486 = state_43641__$1;
(statearr_43655_44486[(2)] = null);

(statearr_43655_44486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43642 === (6))){
var inst_43598 = (state_43641[(8)]);
var inst_43623 = inst_43598.length;
var inst_43624 = (inst_43623 > (0));
var state_43641__$1 = state_43641;
if(cljs.core.truth_(inst_43624)){
var statearr_43656_44487 = state_43641__$1;
(statearr_43656_44487[(1)] = (12));

} else {
var statearr_43657_44488 = state_43641__$1;
(statearr_43657_44488[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43642 === (3))){
var inst_43638 = (state_43641[(2)]);
var state_43641__$1 = state_43641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43641__$1,inst_43638);
} else {
if((state_val_43642 === (12))){
var inst_43598 = (state_43641[(8)]);
var inst_43627 = cljs.core.vec(inst_43598);
var state_43641__$1 = state_43641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43641__$1,(15),out,inst_43627);
} else {
if((state_val_43642 === (2))){
var state_43641__$1 = state_43641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43641__$1,(4),ch);
} else {
if((state_val_43642 === (11))){
var inst_43602 = (state_43641[(9)]);
var inst_43606 = (state_43641[(10)]);
var inst_43616 = (state_43641[(2)]);
var inst_43617 = [];
var inst_43618 = inst_43617.push(inst_43602);
var inst_43598 = inst_43617;
var inst_43599 = inst_43606;
var state_43641__$1 = (function (){var statearr_43661 = state_43641;
(statearr_43661[(7)] = inst_43599);

(statearr_43661[(11)] = inst_43616);

(statearr_43661[(12)] = inst_43618);

(statearr_43661[(8)] = inst_43598);

return statearr_43661;
})();
var statearr_43662_44494 = state_43641__$1;
(statearr_43662_44494[(2)] = null);

(statearr_43662_44494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43642 === (9))){
var inst_43598 = (state_43641[(8)]);
var inst_43614 = cljs.core.vec(inst_43598);
var state_43641__$1 = state_43641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43641__$1,(11),out,inst_43614);
} else {
if((state_val_43642 === (5))){
var inst_43599 = (state_43641[(7)]);
var inst_43602 = (state_43641[(9)]);
var inst_43606 = (state_43641[(10)]);
var inst_43606__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43602) : f.call(null,inst_43602));
var inst_43607 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43606__$1,inst_43599);
var inst_43608 = cljs.core.keyword_identical_QMARK_(inst_43599,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43609 = ((inst_43607) || (inst_43608));
var state_43641__$1 = (function (){var statearr_43666 = state_43641;
(statearr_43666[(10)] = inst_43606__$1);

return statearr_43666;
})();
if(cljs.core.truth_(inst_43609)){
var statearr_43667_44495 = state_43641__$1;
(statearr_43667_44495[(1)] = (8));

} else {
var statearr_43668_44496 = state_43641__$1;
(statearr_43668_44496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43642 === (14))){
var inst_43632 = (state_43641[(2)]);
var inst_43633 = cljs.core.async.close_BANG_(out);
var state_43641__$1 = (function (){var statearr_43671 = state_43641;
(statearr_43671[(13)] = inst_43632);

return statearr_43671;
})();
var statearr_43673_44497 = state_43641__$1;
(statearr_43673_44497[(2)] = inst_43633);

(statearr_43673_44497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43642 === (10))){
var inst_43621 = (state_43641[(2)]);
var state_43641__$1 = state_43641;
var statearr_43675_44498 = state_43641__$1;
(statearr_43675_44498[(2)] = inst_43621);

(statearr_43675_44498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43642 === (8))){
var inst_43602 = (state_43641[(9)]);
var inst_43606 = (state_43641[(10)]);
var inst_43598 = (state_43641[(8)]);
var inst_43611 = inst_43598.push(inst_43602);
var tmp43670 = inst_43598;
var inst_43598__$1 = tmp43670;
var inst_43599 = inst_43606;
var state_43641__$1 = (function (){var statearr_43676 = state_43641;
(statearr_43676[(7)] = inst_43599);

(statearr_43676[(14)] = inst_43611);

(statearr_43676[(8)] = inst_43598__$1);

return statearr_43676;
})();
var statearr_43677_44499 = state_43641__$1;
(statearr_43677_44499[(2)] = null);

(statearr_43677_44499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41427__auto__ = null;
var cljs$core$async$state_machine__41427__auto____0 = (function (){
var statearr_43678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43678[(0)] = cljs$core$async$state_machine__41427__auto__);

(statearr_43678[(1)] = (1));

return statearr_43678;
});
var cljs$core$async$state_machine__41427__auto____1 = (function (state_43641){
while(true){
var ret_value__41428__auto__ = (function (){try{while(true){
var result__41429__auto__ = switch__41426__auto__(state_43641);
if(cljs.core.keyword_identical_QMARK_(result__41429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41429__auto__;
}
break;
}
}catch (e43679){var ex__41430__auto__ = e43679;
var statearr_43680_44508 = state_43641;
(statearr_43680_44508[(2)] = ex__41430__auto__);


if(cljs.core.seq((state_43641[(4)]))){
var statearr_43681_44509 = state_43641;
(statearr_43681_44509[(1)] = cljs.core.first((state_43641[(4)])));

} else {
throw ex__41430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44510 = state_43641;
state_43641 = G__44510;
continue;
} else {
return ret_value__41428__auto__;
}
break;
}
});
cljs$core$async$state_machine__41427__auto__ = function(state_43641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41427__auto____1.call(this,state_43641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41427__auto____0;
cljs$core$async$state_machine__41427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41427__auto____1;
return cljs$core$async$state_machine__41427__auto__;
})()
})();
var state__41567__auto__ = (function (){var statearr_43684 = f__41566__auto__();
(statearr_43684[(6)] = c__41565__auto___44470);

return statearr_43684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41567__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
