"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
var core_1 = require("@angular/core");
var express_engine_1 = require("@nguniversal/express-engine");
var module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var compression = require("compression");
core_1.enableProdMode();
exports.app = express();
exports.app.use(compression());
exports.app.use(cors());
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({ extended: true }));
// const DIST_FOLDER = join(process.cwd(), 'dist');
var _a = require('./dist/server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
exports.app.engine('html', express_engine_1.ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        module_map_ngfactory_loader_1.provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
exports.app.set('view engine', 'html');
exports.app.set('views', './dist/browser');
exports.app.get('/redirect/**', function (req, res) {
    var location = req.url.substring(10);
    res.redirect(301, location);
});
exports.app.get('*.*', express.static('./dist/browser', {
    maxAge: '1y'
}));
exports.app.get('/*', function (req, res) {
    res.render('index', { req: req, res: res }, function (err, html) {
        if (html) {
            res.send(html);
        }
        else {
            console.error(err);
            res.send(err);
        }
    });
});
//# sourceMappingURL=server.js.map