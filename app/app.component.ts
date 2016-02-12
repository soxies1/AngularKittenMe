import { Component }       from 'angular2/core';
import {OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Http, Headers, JSONP_PROVIDERS, URLSearchParams, Jsonp, Request, BaseRequestOptions, Response} from 'angular2/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import { ColumnComponent } from './column.component';
import { RandomcatService } from './randomcat.service';

//import {enableProdMode} from 'angular2/core';
//enableProdMode();

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  //styleUrls: ['app/app.component.css'],
  //directives: [ROUTER_DIRECTIVES],
  providers: [
    //ROUTER_PROVIDERS,
    RandomcatService
  ],
  
  directives:[
      ColumnComponent,
      //RandomcatService
  ]
})
  
/*@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
]) */
    
    
export class AppComponent implements OnInit {
   public title = 'Tour of Heroes';
   public catURL = 'http://i.imgur.com/RN4ixMa.jpg';
   public cats;
   
   constructor(
      private _randomcatService: RandomcatService,
      private jsonp: Jsonp) { }
      
      
      ngOnInit(){
          this.getCat();
         
      }
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
          
      setCatURL(){
          //if(this.cats == undefined){
              
         // }else{
             
          var rnd = Math.floor(Math.random() * this.cats.items.length);
          this.catURL = this.cats.items[rnd]['media']['m'].replace("_m", "_b");
              console.log("finished");
              console.log(this.catURL);
         // }
      }
      
     
      
      getCat(){
        //var cats;
        var retValue;
        var promises = [];
        const searchParams = new URLSearchParams();
        searchParams.set('tags', "kitten");
        searchParams.set('tagmode', "any");
        searchParams.set('format', "json");
        
        this.jsonp.request("http://api.flickr.com/services/feeds/photos_public.gne?&jsoncallback=JSONP_CALLBACK", {search:searchParams})
        .map((res:Response) => res.json()).subscribe( data => { this.cats = data } , err => console.log(err), () => this.setCatURL());
        
        //this.setCatURL();
    }
      
    
}