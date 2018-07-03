"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var main_service_1 = require("./main.service");
describe('MainService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [main_service_1.MainService]
        });
    });
    it('should be created', testing_1.inject([main_service_1.MainService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=main.service.spec.js.map