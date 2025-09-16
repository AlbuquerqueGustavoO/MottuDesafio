import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './modulos/home/home/home.component';
import { FavoritosComponent } from './modulos/favoritos/favoritos/favoritos.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'favoritos', component: FavoritosComponent },
    ]),
    importProvidersFrom(HttpClientModule),
  ],
}).catch(err => console.error(err));