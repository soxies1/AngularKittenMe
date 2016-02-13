System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/map', './column.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, column_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (column_component_1_1) {
                column_component_1 = column_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                //public noise = 'Catmeow10.mp3';
                function AppComponent(jsonp) {
                    this.jsonp = jsonp;
                    this.title = 'Tour of Heroes';
                    this.catURL = 'http://i.imgur.com/RN4ixMa.jpg';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getCat();
                };
                AppComponent.prototype.setCatURL = function (cats) {
                    var rnd = Math.floor(Math.random() * cats.items.length);
                    var rndnoise = Math.floor(Math.random() * 12);
                    //this.noise = "onclick=\"playSound('CatMeow" + rndnoise + ".mp3');\"";
                    var snd = new Audio("snd/CatMeow" + rndnoise + ".mp3");
                    snd.play();
                    this.catURL = cats.items[rnd]['media']['m'].replace("_m", "_b");
                };
                AppComponent.prototype.getCat = function () {
                    var _this = this;
                    var retValue;
                    var promises = [];
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.set('tags', "kitten");
                    searchParams.set('tagmode', "any");
                    searchParams.set('format', "json");
                    this.jsonp.request("http://api.flickr.com/services/feeds/photos_public.gne?&jsoncallback=JSONP_CALLBACK", { search: searchParams })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return _this.setCatURL(res); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [
                            column_component_1.ColumnComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [http_1.Jsonp])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map