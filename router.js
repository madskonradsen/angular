'use strict';/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var router_1 = require('./src/router/router');
exports.Router = router_1.Router;
var router_outlet_1 = require('./src/router/directives/router_outlet');
exports.RouterOutlet = router_outlet_1.RouterOutlet;
var router_link_1 = require('./src/router/directives/router_link');
exports.RouterLink = router_link_1.RouterLink;
var instruction_1 = require('./src/router/instruction');
exports.RouteParams = instruction_1.RouteParams;
exports.RouteData = instruction_1.RouteData;
var platform_location_1 = require('./src/router/location/platform_location');
exports.PlatformLocation = platform_location_1.PlatformLocation;
var route_registry_1 = require('./src/router/route_registry');
exports.RouteRegistry = route_registry_1.RouteRegistry;
exports.ROUTER_PRIMARY_COMPONENT = route_registry_1.ROUTER_PRIMARY_COMPONENT;
var location_strategy_1 = require('./src/router/location/location_strategy');
exports.LocationStrategy = location_strategy_1.LocationStrategy;
exports.APP_BASE_HREF = location_strategy_1.APP_BASE_HREF;
var hash_location_strategy_1 = require('./src/router/location/hash_location_strategy');
exports.HashLocationStrategy = hash_location_strategy_1.HashLocationStrategy;
var path_location_strategy_1 = require('./src/router/location/path_location_strategy');
exports.PathLocationStrategy = path_location_strategy_1.PathLocationStrategy;
var location_1 = require('./src/router/location/location');
exports.Location = location_1.Location;
__export(require('./src/router/route_config/route_config_decorator'));
var lifecycle_annotations_1 = require('./src/router/lifecycle/lifecycle_annotations');
exports.CanActivate = lifecycle_annotations_1.CanActivate;
var instruction_2 = require('./src/router/instruction');
exports.Instruction = instruction_2.Instruction;
exports.ComponentInstruction = instruction_2.ComponentInstruction;
var core_1 = require('angular2/core');
exports.OpaqueToken = core_1.OpaqueToken;
var router_providers_common_1 = require('angular2/src/router/router_providers_common');
exports.ROUTER_PROVIDERS_COMMON = router_providers_common_1.ROUTER_PROVIDERS_COMMON;
var router_providers_1 = require('angular2/src/router/router_providers');
exports.ROUTER_PROVIDERS = router_providers_1.ROUTER_PROVIDERS;
exports.ROUTER_BINDINGS = router_providers_1.ROUTER_BINDINGS;
var router_outlet_2 = require('./src/router/directives/router_outlet');
var router_link_2 = require('./src/router/directives/router_link');
var lang_1 = require('./src/facade/lang');
/**
 * A list of directives. To use the router directives like {@link RouterOutlet} and
 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
 * component.
 *
 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *    // ...
 * }
 *
 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
 * ```
 */
exports.ROUTER_DIRECTIVES = lang_1.CONST_EXPR([router_outlet_2.RouterOutlet, router_link_2.RouterLink]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1vUzJwaDd2cC50bXAvYW5ndWxhcjIvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7Ozs7O0FBRUgsdUJBQXFCLHFCQUFxQixDQUFDO0FBQW5DLGlDQUFtQztBQUMzQyw4QkFBMkIsdUNBQXVDLENBQUM7QUFBM0Qsb0RBQTJEO0FBQ25FLDRCQUF5QixxQ0FBcUMsQ0FBQztBQUF2RCw4Q0FBdUQ7QUFDL0QsNEJBQXFDLDBCQUEwQixDQUFDO0FBQXhELGdEQUFXO0FBQUUsNENBQTJDO0FBQ2hFLGtDQUErQix5Q0FBeUMsQ0FBQztBQUFqRSxnRUFBaUU7QUFDekUsK0JBQXNELDZCQUE2QixDQUFDO0FBQTVFLHVEQUFhO0FBQUUsNkVBQTZEO0FBQ3BGLGtDQUE4Qyx5Q0FBeUMsQ0FBQztBQUFoRixnRUFBZ0I7QUFBRSwwREFBOEQ7QUFDeEYsdUNBQW1DLDhDQUE4QyxDQUFDO0FBQTFFLDZFQUEwRTtBQUNsRix1Q0FBbUMsOENBQThDLENBQUM7QUFBMUUsNkVBQTBFO0FBQ2xGLHlCQUF1QixnQ0FBZ0MsQ0FBQztBQUFoRCx1Q0FBZ0Q7QUFDeEQsaUJBQWMsa0RBQWtELENBQUMsRUFBQTtBQUdqRSxzQ0FBMEIsOENBQThDLENBQUM7QUFBakUsMERBQWlFO0FBQ3pFLDRCQUFnRCwwQkFBMEIsQ0FBQztBQUFuRSxnREFBVztBQUFFLGtFQUFzRDtBQUMzRSxxQkFBMEIsZUFBZSxDQUFDO0FBQWxDLHlDQUFrQztBQUMxQyx3Q0FBc0MsNkNBQTZDLENBQUM7QUFBNUUsb0ZBQTRFO0FBQ3BGLGlDQUFnRCxzQ0FBc0MsQ0FBQztBQUEvRSwrREFBZ0I7QUFBRSw2REFBNkQ7QUFFdkYsOEJBQTJCLHVDQUF1QyxDQUFDLENBQUE7QUFDbkUsNEJBQXlCLHFDQUFxQyxDQUFDLENBQUE7QUFDL0QscUJBQXlCLG1CQUFtQixDQUFDLENBQUE7QUFFN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQUNVLHlCQUFpQixHQUFVLGlCQUFVLENBQUMsQ0FBQyw0QkFBWSxFQUFFLHdCQUFVLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIE1hcHMgYXBwbGljYXRpb24gVVJMcyBpbnRvIGFwcGxpY2F0aW9uIHN0YXRlcywgdG8gc3VwcG9ydCBkZWVwLWxpbmtpbmcgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuZXhwb3J0IHtSb3V0ZXJ9IGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZXInO1xuZXhwb3J0IHtSb3V0ZXJPdXRsZXR9IGZyb20gJy4vc3JjL3JvdXRlci9kaXJlY3RpdmVzL3JvdXRlcl9vdXRsZXQnO1xuZXhwb3J0IHtSb3V0ZXJMaW5rfSBmcm9tICcuL3NyYy9yb3V0ZXIvZGlyZWN0aXZlcy9yb3V0ZXJfbGluayc7XG5leHBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZURhdGF9IGZyb20gJy4vc3JjL3JvdXRlci9pbnN0cnVjdGlvbic7XG5leHBvcnQge1BsYXRmb3JtTG9jYXRpb259IGZyb20gJy4vc3JjL3JvdXRlci9sb2NhdGlvbi9wbGF0Zm9ybV9sb2NhdGlvbic7XG5leHBvcnQge1JvdXRlUmVnaXN0cnksIFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVH0gZnJvbSAnLi9zcmMvcm91dGVyL3JvdXRlX3JlZ2lzdHJ5JztcbmV4cG9ydCB7TG9jYXRpb25TdHJhdGVneSwgQVBQX0JBU0VfSFJFRn0gZnJvbSAnLi9zcmMvcm91dGVyL2xvY2F0aW9uL2xvY2F0aW9uX3N0cmF0ZWd5JztcbmV4cG9ydCB7SGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJy4vc3JjL3JvdXRlci9sb2NhdGlvbi9oYXNoX2xvY2F0aW9uX3N0cmF0ZWd5JztcbmV4cG9ydCB7UGF0aExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJy4vc3JjL3JvdXRlci9sb2NhdGlvbi9wYXRoX2xvY2F0aW9uX3N0cmF0ZWd5JztcbmV4cG9ydCB7TG9jYXRpb259IGZyb20gJy4vc3JjL3JvdXRlci9sb2NhdGlvbi9sb2NhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9yb3V0ZXIvcm91dGVfY29uZmlnL3JvdXRlX2NvbmZpZ19kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvcm91dGVyL3JvdXRlX2RlZmluaXRpb24nO1xuZXhwb3J0IHtPbkFjdGl2YXRlLCBPbkRlYWN0aXZhdGUsIE9uUmV1c2UsIENhbkRlYWN0aXZhdGUsIENhblJldXNlfSBmcm9tICcuL3NyYy9yb3V0ZXIvaW50ZXJmYWNlcyc7XG5leHBvcnQge0NhbkFjdGl2YXRlfSBmcm9tICcuL3NyYy9yb3V0ZXIvbGlmZWN5Y2xlL2xpZmVjeWNsZV9hbm5vdGF0aW9ucyc7XG5leHBvcnQge0luc3RydWN0aW9uLCBDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSAnLi9zcmMvcm91dGVyL2luc3RydWN0aW9uJztcbmV4cG9ydCB7T3BhcXVlVG9rZW59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuZXhwb3J0IHtST1VURVJfUFJPVklERVJTX0NPTU1PTn0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZXJfcHJvdmlkZXJzX2NvbW1vbic7XG5leHBvcnQge1JPVVRFUl9QUk9WSURFUlMsIFJPVVRFUl9CSU5ESU5HU30gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZXJfcHJvdmlkZXJzJztcblxuaW1wb3J0IHtSb3V0ZXJPdXRsZXR9IGZyb20gJy4vc3JjL3JvdXRlci9kaXJlY3RpdmVzL3JvdXRlcl9vdXRsZXQnO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tICcuL3NyYy9yb3V0ZXIvZGlyZWN0aXZlcy9yb3V0ZXJfbGluayc7XG5pbXBvcnQge0NPTlNUX0VYUFJ9IGZyb20gJy4vc3JjL2ZhY2FkZS9sYW5nJztcblxuLyoqXG4gKiBBIGxpc3Qgb2YgZGlyZWN0aXZlcy4gVG8gdXNlIHRoZSByb3V0ZXIgZGlyZWN0aXZlcyBsaWtlIHtAbGluayBSb3V0ZXJPdXRsZXR9IGFuZFxuICoge0BsaW5rIFJvdXRlckxpbmt9LCBhZGQgdGhpcyB0byB5b3VyIGBkaXJlY3RpdmVzYCBhcnJheSBpbiB0aGUge0BsaW5rIFZpZXd9IGRlY29yYXRvciBvZiB5b3VyXG4gKiBjb21wb25lbnQuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L2lSVVA4QjVPVWJ4Q1dRM0FjSURtKSlcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuICpcbiAqIEBDb21wb25lbnQoe2RpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU119KVxuICogQFJvdXRlQ29uZmlnKFtcbiAqICB7Li4ufSxcbiAqIF0pXG4gKiBjbGFzcyBBcHBDbXAge1xuICogICAgLy8gLi4uXG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcENtcCwgW1JPVVRFUl9QUk9WSURFUlNdKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgUk9VVEVSX0RJUkVDVElWRVM6IGFueVtdID0gQ09OU1RfRVhQUihbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXSk7XG4iXX0=