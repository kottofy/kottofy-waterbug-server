System.register(["angular2/core", "angular2/platform/browser", "angular2/router", "../rower/rower", "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, rower_1, http_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rower_1_1) {
                rower_1 = rower_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.rowers = [{ name: 'jeremy' }, { name: 'daniel' }];
                }
                App = __decorate([
                    core_1.Component({
                        selector: "app",
                        templateUrl: 'src/app/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES, rower_1.Rower],
                        providers: [http_1.HTTP_PROVIDERS],
                        styleUrls: ['src/app/app.css']
                    }),
                    router_1.RouteConfig([]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
            browser_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=app.js.map