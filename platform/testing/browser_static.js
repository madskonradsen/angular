'use strict';"use strict";
var core_1 = require('angular2/core');
var browser_common_1 = require('angular2/src/platform/browser_common');
var browser_adapter_1 = require('angular2/src/platform/browser/browser_adapter');
var animation_builder_1 = require('angular2/src/animate/animation_builder');
var animation_builder_mock_1 = require('angular2/src/mock/animation_builder_mock');
var directive_resolver_mock_1 = require('angular2/src/mock/directive_resolver_mock');
var view_resolver_mock_1 = require('angular2/src/mock/view_resolver_mock');
var mock_location_strategy_1 = require('angular2/src/mock/mock_location_strategy');
var location_strategy_1 = require('angular2/src/router/location/location_strategy');
var ng_zone_mock_1 = require('angular2/src/mock/ng_zone_mock');
var xhr_impl_1 = require("angular2/src/platform/browser/xhr_impl");
var compiler_1 = require('angular2/compiler');
var test_component_builder_1 = require('angular2/src/testing/test_component_builder');
var utils_1 = require('angular2/src/testing/utils');
var common_dom_1 = require('angular2/platform/common_dom');
var lang_1 = require('angular2/src/facade/lang');
var utils_2 = require('angular2/src/testing/utils');
function initBrowserTests() {
    browser_adapter_1.BrowserDomAdapter.makeCurrent();
    utils_1.BrowserDetection.setup();
}
/**
 * Default patform providers for testing without a compiler.
 */
exports.TEST_BROWSER_STATIC_PLATFORM_PROVIDERS = lang_1.CONST_EXPR([
    core_1.PLATFORM_COMMON_PROVIDERS,
    new core_1.Provider(core_1.PLATFORM_INITIALIZER, { useValue: initBrowserTests, multi: true })
]);
exports.ADDITIONAL_TEST_BROWSER_PROVIDERS = lang_1.CONST_EXPR([
    new core_1.Provider(core_1.APP_ID, { useValue: 'a' }),
    common_dom_1.ELEMENT_PROBE_PROVIDERS,
    new core_1.Provider(core_1.DirectiveResolver, { useClass: directive_resolver_mock_1.MockDirectiveResolver }),
    new core_1.Provider(core_1.ViewResolver, { useClass: view_resolver_mock_1.MockViewResolver }),
    utils_2.Log,
    test_component_builder_1.TestComponentBuilder,
    new core_1.Provider(core_1.NgZone, { useClass: ng_zone_mock_1.MockNgZone }),
    new core_1.Provider(location_strategy_1.LocationStrategy, { useClass: mock_location_strategy_1.MockLocationStrategy }),
    new core_1.Provider(animation_builder_1.AnimationBuilder, { useClass: animation_builder_mock_1.MockAnimationBuilder }),
]);
/**
 * Default application providers for testing without a compiler.
 */
exports.TEST_BROWSER_STATIC_APPLICATION_PROVIDERS = lang_1.CONST_EXPR([
    browser_common_1.BROWSER_APP_COMMON_PROVIDERS,
    new core_1.Provider(compiler_1.XHR, { useClass: xhr_impl_1.XHRImpl }),
    exports.ADDITIONAL_TEST_BROWSER_PROVIDERS
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUI1d1NuVmk4LnRtcC9hbmd1bGFyMi9wbGF0Zm9ybS90ZXN0aW5nL2Jyb3dzZXJfc3RhdGljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFRTyxlQUFlLENBQUMsQ0FBQTtBQUN2QiwrQkFBMkMsc0NBQXNDLENBQUMsQ0FBQTtBQUNsRixnQ0FBZ0MsK0NBQStDLENBQUMsQ0FBQTtBQUVoRixrQ0FBK0Isd0NBQXdDLENBQUMsQ0FBQTtBQUN4RSx1Q0FBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSx3Q0FBb0MsMkNBQTJDLENBQUMsQ0FBQTtBQUNoRixtQ0FBK0Isc0NBQXNDLENBQUMsQ0FBQTtBQUN0RSx1Q0FBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSxrQ0FBK0IsZ0RBQWdELENBQUMsQ0FBQTtBQUNoRiw2QkFBeUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUUxRCx5QkFBc0Isd0NBQXdDLENBQUMsQ0FBQTtBQUMvRCx5QkFBa0IsbUJBQW1CLENBQUMsQ0FBQTtBQUV0Qyx1Q0FBbUMsNkNBQTZDLENBQUMsQ0FBQTtBQUVqRixzQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUU1RCwyQkFBc0MsOEJBQThCLENBQUMsQ0FBQTtBQUVyRSxxQkFBeUIsMEJBQTBCLENBQUMsQ0FBQTtBQUVwRCxzQkFBa0IsNEJBQTRCLENBQUMsQ0FBQTtBQUUvQztJQUNFLG1DQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLHdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFFRDs7R0FFRztBQUNVLDhDQUFzQyxHQUMvQyxpQkFBVSxDQUFDO0lBQ1QsZ0NBQXlCO0lBQ3pCLElBQUksZUFBUSxDQUFDLDJCQUFvQixFQUFFLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztDQUM5RSxDQUFDLENBQUM7QUFFTSx5Q0FBaUMsR0FDMUMsaUJBQVUsQ0FBQztJQUNULElBQUksZUFBUSxDQUFDLGFBQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQztJQUNyQyxvQ0FBdUI7SUFDdkIsSUFBSSxlQUFRLENBQUMsd0JBQWlCLEVBQUUsRUFBQyxRQUFRLEVBQUUsK0NBQXFCLEVBQUMsQ0FBQztJQUNsRSxJQUFJLGVBQVEsQ0FBQyxtQkFBWSxFQUFFLEVBQUMsUUFBUSxFQUFFLHFDQUFnQixFQUFDLENBQUM7SUFDeEQsV0FBRztJQUNILDZDQUFvQjtJQUNwQixJQUFJLGVBQVEsQ0FBQyxhQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUseUJBQVUsRUFBQyxDQUFDO0lBQzVDLElBQUksZUFBUSxDQUFDLG9DQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZDQUFvQixFQUFDLENBQUM7SUFDaEUsSUFBSSxlQUFRLENBQUMsb0NBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkNBQW9CLEVBQUMsQ0FBQztDQUNqRSxDQUFDLENBQUM7QUFFUDs7R0FFRztBQUNVLGlEQUF5QyxHQUNsRCxpQkFBVSxDQUFDO0lBQ1QsNkNBQTRCO0lBQzVCLElBQUksZUFBUSxDQUFDLGNBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBTyxFQUFDLENBQUM7SUFDdEMseUNBQWlDO0NBQ2xDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFQUF9JRCxcbiAgRGlyZWN0aXZlUmVzb2x2ZXIsXG4gIE5nWm9uZSxcbiAgUHJvdmlkZXIsXG4gIFZpZXdSZXNvbHZlcixcbiAgUExBVEZPUk1fQ09NTU9OX1BST1ZJREVSUyxcbiAgUExBVEZPUk1fSU5JVElBTElaRVJcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0JST1dTRVJfQVBQX0NPTU1PTl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyX2NvbW1vbic7XG5pbXBvcnQge0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9icm93c2VyX2FkYXB0ZXInO1xuXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyJztcbmltcG9ydCB7TW9ja0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL2FuaW1hdGlvbl9idWlsZGVyX21vY2snO1xuaW1wb3J0IHtNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL2RpcmVjdGl2ZV9yZXNvbHZlcl9tb2NrJztcbmltcG9ydCB7TW9ja1ZpZXdSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svdmlld19yZXNvbHZlcl9tb2NrJztcbmltcG9ydCB7TW9ja0xvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL21vY2tfbG9jYXRpb25fc3RyYXRlZ3knO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uL2xvY2F0aW9uX3N0cmF0ZWd5JztcbmltcG9ydCB7TW9ja05nWm9uZX0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svbmdfem9uZV9tb2NrJztcblxuaW1wb3J0IHtYSFJJbXBsfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXIveGhyX2ltcGxcIjtcbmltcG9ydCB7WEhSfSBmcm9tICdhbmd1bGFyMi9jb21waWxlcic7XG5cbmltcG9ydCB7VGVzdENvbXBvbmVudEJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy90ZXN0aW5nL3Rlc3RfY29tcG9uZW50X2J1aWxkZXInO1xuXG5pbXBvcnQge0Jyb3dzZXJEZXRlY3Rpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy90ZXN0aW5nL3V0aWxzJztcblxuaW1wb3J0IHtFTEVNRU5UX1BST0JFX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uX2RvbSc7XG5cbmltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuaW1wb3J0IHtMb2d9IGZyb20gJ2FuZ3VsYXIyL3NyYy90ZXN0aW5nL3V0aWxzJztcblxuZnVuY3Rpb24gaW5pdEJyb3dzZXJUZXN0cygpIHtcbiAgQnJvd3NlckRvbUFkYXB0ZXIubWFrZUN1cnJlbnQoKTtcbiAgQnJvd3NlckRldGVjdGlvbi5zZXR1cCgpO1xufVxuXG4vKipcbiAqIERlZmF1bHQgcGF0Zm9ybSBwcm92aWRlcnMgZm9yIHRlc3Rpbmcgd2l0aG91dCBhIGNvbXBpbGVyLlxuICovXG5leHBvcnQgY29uc3QgVEVTVF9CUk9XU0VSX1NUQVRJQ19QTEFURk9STV9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID1cbiAgICBDT05TVF9FWFBSKFtcbiAgICAgIFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlMsXG4gICAgICBuZXcgUHJvdmlkZXIoUExBVEZPUk1fSU5JVElBTElaRVIsIHt1c2VWYWx1ZTogaW5pdEJyb3dzZXJUZXN0cywgbXVsdGk6IHRydWV9KVxuICAgIF0pO1xuXG5leHBvcnQgY29uc3QgQURESVRJT05BTF9URVNUX0JST1dTRVJfUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgQ09OU1RfRVhQUihbXG4gICAgICBuZXcgUHJvdmlkZXIoQVBQX0lELCB7dXNlVmFsdWU6ICdhJ30pLFxuICAgICAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlMsXG4gICAgICBuZXcgUHJvdmlkZXIoRGlyZWN0aXZlUmVzb2x2ZXIsIHt1c2VDbGFzczogTW9ja0RpcmVjdGl2ZVJlc29sdmVyfSksXG4gICAgICBuZXcgUHJvdmlkZXIoVmlld1Jlc29sdmVyLCB7dXNlQ2xhc3M6IE1vY2tWaWV3UmVzb2x2ZXJ9KSxcbiAgICAgIExvZyxcbiAgICAgIFRlc3RDb21wb25lbnRCdWlsZGVyLFxuICAgICAgbmV3IFByb3ZpZGVyKE5nWm9uZSwge3VzZUNsYXNzOiBNb2NrTmdab25lfSksXG4gICAgICBuZXcgUHJvdmlkZXIoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBNb2NrTG9jYXRpb25TdHJhdGVneX0pLFxuICAgICAgbmV3IFByb3ZpZGVyKEFuaW1hdGlvbkJ1aWxkZXIsIHt1c2VDbGFzczogTW9ja0FuaW1hdGlvbkJ1aWxkZXJ9KSxcbiAgICBdKTtcblxuLyoqXG4gKiBEZWZhdWx0IGFwcGxpY2F0aW9uIHByb3ZpZGVycyBmb3IgdGVzdGluZyB3aXRob3V0IGEgY29tcGlsZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBURVNUX0JST1dTRVJfU1RBVElDX0FQUExJQ0FUSU9OX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIENPTlNUX0VYUFIoW1xuICAgICAgQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSUyxcbiAgICAgIG5ldyBQcm92aWRlcihYSFIsIHt1c2VDbGFzczogWEhSSW1wbH0pLFxuICAgICAgQURESVRJT05BTF9URVNUX0JST1dTRVJfUFJPVklERVJTXG4gICAgXSk7XG4iXX0=