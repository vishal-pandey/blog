"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var blog_service_1 = require("./blog.service");
describe('BlogService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [blog_service_1.BlogService]
        });
    });
    it('should be created', testing_1.inject([blog_service_1.BlogService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=blog.service.spec.js.map