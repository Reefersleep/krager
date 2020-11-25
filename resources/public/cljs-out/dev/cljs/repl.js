// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20244){
var map__20245 = p__20244;
var map__20245__$1 = (((((!((map__20245 == null))))?(((((map__20245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20245):map__20245);
var m = map__20245__$1;
var n = cljs.core.get.call(null,map__20245__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20245__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20247_20279 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20248_20280 = null;
var count__20249_20281 = (0);
var i__20250_20282 = (0);
while(true){
if((i__20250_20282 < count__20249_20281)){
var f_20283 = cljs.core._nth.call(null,chunk__20248_20280,i__20250_20282);
cljs.core.println.call(null,"  ",f_20283);


var G__20284 = seq__20247_20279;
var G__20285 = chunk__20248_20280;
var G__20286 = count__20249_20281;
var G__20287 = (i__20250_20282 + (1));
seq__20247_20279 = G__20284;
chunk__20248_20280 = G__20285;
count__20249_20281 = G__20286;
i__20250_20282 = G__20287;
continue;
} else {
var temp__5720__auto___20288 = cljs.core.seq.call(null,seq__20247_20279);
if(temp__5720__auto___20288){
var seq__20247_20289__$1 = temp__5720__auto___20288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20247_20289__$1)){
var c__4556__auto___20290 = cljs.core.chunk_first.call(null,seq__20247_20289__$1);
var G__20291 = cljs.core.chunk_rest.call(null,seq__20247_20289__$1);
var G__20292 = c__4556__auto___20290;
var G__20293 = cljs.core.count.call(null,c__4556__auto___20290);
var G__20294 = (0);
seq__20247_20279 = G__20291;
chunk__20248_20280 = G__20292;
count__20249_20281 = G__20293;
i__20250_20282 = G__20294;
continue;
} else {
var f_20295 = cljs.core.first.call(null,seq__20247_20289__$1);
cljs.core.println.call(null,"  ",f_20295);


var G__20296 = cljs.core.next.call(null,seq__20247_20289__$1);
var G__20297 = null;
var G__20298 = (0);
var G__20299 = (0);
seq__20247_20279 = G__20296;
chunk__20248_20280 = G__20297;
count__20249_20281 = G__20298;
i__20250_20282 = G__20299;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20300 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20300);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20300)))?cljs.core.second.call(null,arglists_20300):arglists_20300));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20251_20301 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20252_20302 = null;
var count__20253_20303 = (0);
var i__20254_20304 = (0);
while(true){
if((i__20254_20304 < count__20253_20303)){
var vec__20265_20305 = cljs.core._nth.call(null,chunk__20252_20302,i__20254_20304);
var name_20306 = cljs.core.nth.call(null,vec__20265_20305,(0),null);
var map__20268_20307 = cljs.core.nth.call(null,vec__20265_20305,(1),null);
var map__20268_20308__$1 = (((((!((map__20268_20307 == null))))?(((((map__20268_20307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20268_20307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20268_20307):map__20268_20307);
var doc_20309 = cljs.core.get.call(null,map__20268_20308__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20310 = cljs.core.get.call(null,map__20268_20308__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20306);

cljs.core.println.call(null," ",arglists_20310);

if(cljs.core.truth_(doc_20309)){
cljs.core.println.call(null," ",doc_20309);
} else {
}


var G__20311 = seq__20251_20301;
var G__20312 = chunk__20252_20302;
var G__20313 = count__20253_20303;
var G__20314 = (i__20254_20304 + (1));
seq__20251_20301 = G__20311;
chunk__20252_20302 = G__20312;
count__20253_20303 = G__20313;
i__20254_20304 = G__20314;
continue;
} else {
var temp__5720__auto___20315 = cljs.core.seq.call(null,seq__20251_20301);
if(temp__5720__auto___20315){
var seq__20251_20316__$1 = temp__5720__auto___20315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20251_20316__$1)){
var c__4556__auto___20317 = cljs.core.chunk_first.call(null,seq__20251_20316__$1);
var G__20318 = cljs.core.chunk_rest.call(null,seq__20251_20316__$1);
var G__20319 = c__4556__auto___20317;
var G__20320 = cljs.core.count.call(null,c__4556__auto___20317);
var G__20321 = (0);
seq__20251_20301 = G__20318;
chunk__20252_20302 = G__20319;
count__20253_20303 = G__20320;
i__20254_20304 = G__20321;
continue;
} else {
var vec__20270_20322 = cljs.core.first.call(null,seq__20251_20316__$1);
var name_20323 = cljs.core.nth.call(null,vec__20270_20322,(0),null);
var map__20273_20324 = cljs.core.nth.call(null,vec__20270_20322,(1),null);
var map__20273_20325__$1 = (((((!((map__20273_20324 == null))))?(((((map__20273_20324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20273_20324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20273_20324):map__20273_20324);
var doc_20326 = cljs.core.get.call(null,map__20273_20325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20327 = cljs.core.get.call(null,map__20273_20325__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20323);

cljs.core.println.call(null," ",arglists_20327);

if(cljs.core.truth_(doc_20326)){
cljs.core.println.call(null," ",doc_20326);
} else {
}


var G__20328 = cljs.core.next.call(null,seq__20251_20316__$1);
var G__20329 = null;
var G__20330 = (0);
var G__20331 = (0);
seq__20251_20301 = G__20328;
chunk__20252_20302 = G__20329;
count__20253_20303 = G__20330;
i__20254_20304 = G__20331;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__20275 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20276 = null;
var count__20277 = (0);
var i__20278 = (0);
while(true){
if((i__20278 < count__20277)){
var role = cljs.core._nth.call(null,chunk__20276,i__20278);
var temp__5720__auto___20332__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20332__$1)){
var spec_20333 = temp__5720__auto___20332__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20333));
} else {
}


var G__20334 = seq__20275;
var G__20335 = chunk__20276;
var G__20336 = count__20277;
var G__20337 = (i__20278 + (1));
seq__20275 = G__20334;
chunk__20276 = G__20335;
count__20277 = G__20336;
i__20278 = G__20337;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__20275);
if(temp__5720__auto____$1){
var seq__20275__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20275__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20275__$1);
var G__20338 = cljs.core.chunk_rest.call(null,seq__20275__$1);
var G__20339 = c__4556__auto__;
var G__20340 = cljs.core.count.call(null,c__4556__auto__);
var G__20341 = (0);
seq__20275 = G__20338;
chunk__20276 = G__20339;
count__20277 = G__20340;
i__20278 = G__20341;
continue;
} else {
var role = cljs.core.first.call(null,seq__20275__$1);
var temp__5720__auto___20342__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20342__$2)){
var spec_20343 = temp__5720__auto___20342__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20343));
} else {
}


var G__20344 = cljs.core.next.call(null,seq__20275__$1);
var G__20345 = null;
var G__20346 = (0);
var G__20347 = (0);
seq__20275 = G__20344;
chunk__20276 = G__20345;
count__20277 = G__20346;
i__20278 = G__20347;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20348 = cljs.core.conj.call(null,via,t);
var G__20349 = cljs.core.ex_cause.call(null,t);
via = G__20348;
t = G__20349;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__20352 = datafied_throwable;
var map__20352__$1 = (((((!((map__20352 == null))))?(((((map__20352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20352):map__20352);
var via = cljs.core.get.call(null,map__20352__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__20352__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__20352__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20353 = cljs.core.last.call(null,via);
var map__20353__$1 = (((((!((map__20353 == null))))?(((((map__20353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20353):map__20353);
var type = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20354 = data;
var map__20354__$1 = (((((!((map__20354 == null))))?(((((map__20354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20354):map__20354);
var problems = cljs.core.get.call(null,map__20354__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__20354__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__20354__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20355 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__20355__$1 = (((((!((map__20355 == null))))?(((((map__20355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20355):map__20355);
var top_data = map__20355__$1;
var source = cljs.core.get.call(null,map__20355__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20360 = phase;
var G__20360__$1 = (((G__20360 instanceof cljs.core.Keyword))?G__20360.fqn:null);
switch (G__20360__$1) {
case "read-source":
var map__20361 = data;
var map__20361__$1 = (((((!((map__20361 == null))))?(((((map__20361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20361):map__20361);
var line = cljs.core.get.call(null,map__20361__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20361__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20363 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20363__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20363,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20363);
var G__20363__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20363__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20363__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20363__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20363__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20364 = top_data;
var G__20364__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20364,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20364);
var G__20364__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20364__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20364__$1);
var G__20364__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20364__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20364__$2);
var G__20364__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20364__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20364__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20364__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20364__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20365 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20365,(0),null);
var method = cljs.core.nth.call(null,vec__20365,(1),null);
var file = cljs.core.nth.call(null,vec__20365,(2),null);
var line = cljs.core.nth.call(null,vec__20365,(3),null);
var G__20368 = top_data;
var G__20368__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20368,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20368);
var G__20368__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20368__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20368__$1);
var G__20368__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__20368__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20368__$2);
var G__20368__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20368__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20368__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20368__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20368__$4;
}

break;
case "execution":
var vec__20369 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20369,(0),null);
var method = cljs.core.nth.call(null,vec__20369,(1),null);
var file = cljs.core.nth.call(null,vec__20369,(2),null);
var line = cljs.core.nth.call(null,vec__20369,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__20351_SHARP_){
var or__4126__auto__ = (p1__20351_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__20351_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__20372 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20372__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20372,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20372);
var G__20372__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20372__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20372__$1);
var G__20372__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__20372__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20372__$2);
var G__20372__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20372__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20372__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20372__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20372__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20360__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20376){
var map__20377 = p__20376;
var map__20377__$1 = (((((!((map__20377 == null))))?(((((map__20377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20377):map__20377);
var triage_data = map__20377__$1;
var phase = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20379 = phase;
var G__20379__$1 = (((G__20379 instanceof cljs.core.Keyword))?G__20379.fqn:null);
switch (G__20379__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20380_20389 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20381_20390 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20382_20391 = true;
var _STAR_print_fn_STAR__temp_val__20383_20392 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20382_20391);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20383_20392);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20374_SHARP_){
return cljs.core.dissoc.call(null,p1__20374_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20381_20390);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20380_20389);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20384_20393 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20385_20394 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20386_20395 = true;
var _STAR_print_fn_STAR__temp_val__20387_20396 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20386_20395);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20387_20396);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20375_SHARP_){
return cljs.core.dissoc.call(null,p1__20375_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20385_20394);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20384_20393);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20379__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
