import { Component, OnInit }       from 'angular2/core';
import {JSONP_PROVIDERS, URLSearchParams, Jsonp, Request, Response} from 'angular2/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { ColumnComponent } from './column.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives:[
      ColumnComponent
  ]
})
    
    
export class AppComponent implements OnInit {
   public title = 'Tour of Heroes';
   public catURL = 'http://i.imgur.com/RN4ixMa.jpg';
   public cats;
   //public noise = 'Catmeow10.mp3';
   
   constructor(
      private jsonp: Jsonp
   ) { }
      
      ngOnInit(){
          this.getCat();
      }
          
      setCatURL(cats){  
          var rnd = Math.floor(Math.random() * cats.items.length);
          var rndnoise = Math.floor(Math.random() * 12);
          //this.noise = "onclick=\"playSound('CatMeow" + rndnoise + ".mp3');\"";
          var snd = new Audio("snd/CatMeow" + rndnoise + ".mp3");
          snd.play();
          this.catURL = cats.items[rnd]['media']['m'].replace("_m", "_b");
      }
      
      getCat(){
        var retValue;
        var promises = [];
        const searchParams = new URLSearchParams();
        searchParams.set('tags', "kitten");
        searchParams.set('tagmode', "any");
        searchParams.set('format', "json");
        
        this.jsonp.request("http://api.flickr.com/services/feeds/photos_public.gne?&jsoncallback=JSONP_CALLBACK", {search:searchParams})
        .map((res:Response) => res.json())
        .subscribe((res:Response) => this.setCatURL(res));
    }
    
}