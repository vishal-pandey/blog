"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_browser_module_1 = require(".././src/app/app.browser.module");
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var environment_1 = require("./environments/environment");
require("hammerjs");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_browser_module_1.AppBrowserModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map