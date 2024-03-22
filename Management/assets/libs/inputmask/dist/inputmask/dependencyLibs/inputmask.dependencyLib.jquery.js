

!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : "object" == typeof exports ? module.exports = factory(require("jquery")) : window.dependencyLib = factory(jQuery);
}(function($) {
    return $;
});