// Compiled by ClojureScript 1.10.773 {}
goog.provide('krager.core');
goog.require('cljs.core');
goog.require('goog.dom');
cljs.core.println.call(null,"This text is printed from src/krager/core.cljs. Go ahead and edit it and see reloading in action.");
krager.core.multiply = (function krager$core$multiply(a,b){
return (a * b);
});
if((typeof krager !== 'undefined') && (typeof krager.core !== 'undefined') && (typeof krager.core.app_state !== 'undefined')){
} else {
krager.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
krager.core.get_app_element = (function krager$core$get_app_element(){
return goog.dom.getElement("app");
});
krager.core.on_reload = (function krager$core$on_reload(){
return null;
});

//# sourceMappingURL=core.js.map
