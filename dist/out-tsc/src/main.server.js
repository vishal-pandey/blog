"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var app_server_module_1 = require("./app/app.server.module");
exports.AppServerModule = app_server_module_1.AppServerModule;
//# sourceMappingURL=main.server.js.map