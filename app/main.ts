import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Jsonp, JSONP_PROVIDERS} from 'angular2/http';

//bootstrap(AppComponent);

bootstrap(AppComponent, [Jsonp, JSONP_PROVIDERS]);