import { enableProdMode } from '@angular/core'; // used for production
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // all functions to bootstrap angular module

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
