import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from '../keycloak-init';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OrderModule } from './features/order/order.module';
import { MealListModule } from './features/meal/meal-list/meal-list.module';
import { MealFormModule } from './features/meal/meal-form/meal-form.module';
import { httpInterceptor } from './http.interceptor';
import { MealUpdateModule } from './features/meal/meal-update-form/meal-update.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MealFormModule,
    MealUpdateModule,
    MealListModule,
    KeycloakAngularModule,
    OrderModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([httpInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
