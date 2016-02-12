System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var RandomcatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            RandomcatComponent = (function () {
                /*public option = new Request({
                    url: "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
                    body: JSON.stringify({tags:"kitten", tagmode: "any", format:"json"})
                });*/
                //public req = new Request(option);
                function RandomcatComponent(jsonp) {
                    var _this = this;
                    this.catURL = "mew";
                    this.keyword = "kitten";
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.set('tags', "kitten");
                    searchParams.set('tagmode', "any");
                    searchParams.set('format', "json");
                    jsonp.request("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", { search: searchParams }).map(function (res) { return res.json(); }).subscribe(function (res) { return _this.result = res; });
                    console.log(this.result);
                }
                RandomcatComponent = __decorate([
                    core_1.Component({
                        selector: 'random-cat',
                        //providers: [HTTP_PROVIDERS],
                        templateUrl: 'app/randomcat.component.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Jsonp])
                ], RandomcatComponent);
                return RandomcatComponent;
            })();
            exports_1("RandomcatComponent", RandomcatComponent);
        }
    }
});
//# sourceMappingURL=randomcat.component.js.map