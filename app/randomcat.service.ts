import { Injectable } from 'angular2/core';

import {Http, Headers, JSONP_PROVIDERS, URLSearchParams, Jsonp, Request, BaseRequestOptions, Response} from 'angular2/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/*@Component({
    selector: 'random-cat',
    //providers: [HTTP_PROVIDERS],
    templateUrl: 'app/randomcat.component.html',
})*/
@Injectable()
export class RandomcatService{
    
    /*public option = new Request({
        url: "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        body: JSON.stringify({tags:"kitten", tagmode: "any", format:"json"})
    });*/
    
    //public req = new Request(option);
    
    constructor(public jsonp: Jsonp){}
    getCat(){
        //var cats;
        var retValue;
        const searchParams = new URLSearchParams();
        searchParams.set('tags', "kitten");
        searchParams.set('tagmode', "any");
        searchParams.set('format', "json");
        
        this.jsonp.request("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {search:searchParams})
        .map(res => res.json()).subscribe( data => retValue = data);
        
        return retValue;
    }
    

    //constructor( private http: Http) { }
    
    /* BEST ATTEMPT SO FAR ###
    
    constructor(public http: Http) {
    const searchParams = new URLSearchParams();
    searchParams.set('tags', "kitten");
    searchParams.set('tagmode', "any");
    searchParams.set('format', "json");
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Method', 'GET');
    
    
        
    this.http.get("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {search: searchParams, headers: header}).map(res => res.json()).subscribe(res => this.result = res);
      console.log(this.result);
    }
    END BEST ATTEMPT */
    
        
    /*http.request(new Request({
        url: "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        method: RequestMethod.Get
        //body: '{tags:"kitten", tagmode: "any", format:"json"}'
    }))*/
      // Call map on the response observable to get the parsed people object
      //.map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      //.subscribe( res => this.result = res);
      //console.log("meow");
  //}
       /* $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: keyword,
            tagmode: "any",
            format: "json"
        },
        function(data) {
            //var rnd = Math.floor(Math.random() * data.items.length);

            //var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

            //$('.main').css('background-image', "url('" + image_src + "')");
            var rnd = Math.floor(Math.random() * data.items.length);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
            document.getElementById("selected-pic").src= image_src;
            
        });*/

}