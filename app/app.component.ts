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
   public twitterhandle;
   public keyword = "kitten";
   public testvar = 0;
   public kittenKeyWords = [
       "kitten",
       "kittens",
       "kittys",
       "meow",
       "kitty",
       "kitties"
   ]
   //public noise = 'Catmeow10.mp3';
   
   constructor(
      private jsonp: Jsonp
   ) { }
      
      ngOnInit(){
          this.getCat();
          var mong = require("mongodb");
      }
          
      setCatURL(cats){  
          var rnd = Math.floor(Math.random() * cats.items.length);
          var noisewill = Math.floor(Math.random() * 100);
          var rndnoise = Math.floor(Math.random() * 4);
          //this.noise = "onclick=\"playSound('CatMeow" + rndnoise + ".mp3');\"";
          var snd = new Audio("snd/CatMeow" + rndnoise + ".mp3");
          if(noisewill>75){
            snd.play();
          }
          //this.twitterhandle = "https://twitter.com/intent/tweet?text="
          this.catURL = cats.items[rnd]['media']['m'].replace("_m", "_b");
          document.getElementById("holdz").setAttribute("style", "background-image: url('" + this.catURL + "');");
          this.twitterhandle = "https://twitter.com/intent/tweet?text=" + this.catURL;
          //var test = document.getElementById("testing");
          //test.innerHTML = "<h2>Holy cow " + this.testvar + "</h2>";
          //this.testvar = this.testvar + 1;
          //var meta = document.getElementById("metaimage");
          var foo = document.getElementById("mainid");
          foo.setAttribute("style",  "background-image: " + this.catURL);
          var metas = document.getElementsByTagName('meta'); 
          for (var i=0; i<metas.length; i++) { 
            if (metas[i].getAttribute("name") == "imagetag") { 
                metas[i].setAttribute("content", this.catURL); 
                break;
                } 
            } 
      }
      
      getCat(){
        var retValue;
        var promises = [];
        
        var keywordNum = Math.floor(Math.random() * this.kittenKeyWords.length);
        this.keyword = this.kittenKeyWords[keywordNum];
        console.log(this.keyword);
        const searchParams = new URLSearchParams();
        searchParams.set('tags', this.keyword);
        searchParams.set('tagmode', "any");
        searchParams.set('format', "json");
        
        this.jsonp.request("http://api.flickr.com/services/feeds/photos_public.gne?&jsoncallback=JSONP_CALLBACK", {search:searchParams})
        .map((res:Response) => res.json())
        .subscribe((res:Response) => this.setCatURL(res));
    }
    
}