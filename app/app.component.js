System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/map', './column.component', './randomcat.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, column_component_1, randomcat_service_1;
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
            },
            function (randomcat_service_1_1) {
                randomcat_service_1 = randomcat_service_1_1;
            }],
        execute: function() {
            //import {enableProdMode} from 'angular2/core';
            //enableProdMode();
            AppComponent = (function () {
                function AppComponent(_randomcatService, jsonp) {
                    this._randomcatService = _randomcatService;
                    this.jsonp = jsonp;
                    this.title = 'Tour of Heroes';
                    this.catURL = 'http://i.imgur.com/RN4ixMa.jpg';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getCat();
                };
                /*setCat(){
                    console.log("meowmeow");
                    console.log(this._randomcatService.getCat());
                    console.log("again meow meow");
                    
                }*/
                /*function setCatURL(data){
                        this.catURL = data.items[2]['media']['m'].replace("_m", "_b");
                        console.log("finished");
                        console.log(this.catURL);
                    }*/
                AppComponent.prototype.setCatURL = function () {
                    //if(this.cats == undefined){
                    // }else{
                    var rnd = Math.floor(Math.random() * this.cats.items.length);
                    this.catURL = this.cats.items[rnd]['media']['m'].replace("_m", "_b");
                    console.log("finished");
                    console.log(this.catURL);
                    // }
                };
                AppComponent.prototype.getCat = function () {
                    var _this = this;
                    //var cats;
                    var retValue;
                    var promises = [];
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.set('tags', "kitten");
                    searchParams.set('tagmode', "any");
                    searchParams.set('format', "json");
                    this.jsonp.request("http://api.flickr.com/services/feeds/photos_public.gne?&jsoncallback=JSONP_CALLBACK", { search: searchParams })
                        .map(function (res) { return res.json(); }).subscribe(function (data) { _this.cats = data; }, function (err) { return console.log(err); }, function () { return _this.setCatURL(); });
                    //this.setCatURL();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        //styleUrls: ['app/app.component.css'],
                        //directives: [ROUTER_DIRECTIVES],
                        providers: [
                            //ROUTER_PROVIDERS,
                            randomcat_service_1.RandomcatService
                        ],
                        directives: [
                            column_component_1.ColumnComponent,
                        ]
                    }), 
                    __metadata('design:paramtypes', [randomcat_service_1.RandomcatService, http_1.Jsonp])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map