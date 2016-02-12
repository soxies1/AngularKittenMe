System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/map'], function(exports_1) {
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
    var RandomcatService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            /*@Component({
                selector: 'random-cat',
                //providers: [HTTP_PROVIDERS],
                templateUrl: 'app/randomcat.component.html',
            })*/
            RandomcatService = (function () {
                /*public option = new Request({
                    url: "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
                    body: JSON.stringify({tags:"kitten", tagmode: "any", format:"json"})
                });*/
                //public req = new Request(option);
                function RandomcatService(jsonp) {
                    this.jsonp = jsonp;
                }
                RandomcatService.prototype.getCat = function () {
                    //var cats;
                    var retValue;
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.set('tags', "kitten");
                    searchParams.set('tagmode', "any");
                    searchParams.set('format', "json");
                    this.jsonp.request("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", { search: searchParams })
                        .map(function (res) { return res.json(); }).subscribe(function (data) { return retValue = data; });
                    return retValue;
                };
                RandomcatService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Jsonp])
                ], RandomcatService);
                return RandomcatService;
            })();
            exports_1("RandomcatService", RandomcatService);
        }
    }
});
//# sourceMappingURL=randomcat.service.js.map