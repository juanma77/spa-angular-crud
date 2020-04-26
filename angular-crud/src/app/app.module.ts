import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialsDetailsComponent } from './components/tutorials-details/tutorials-details.component';

import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './app.routes';
import { TutorialService } from './services/tutorial.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialsListComponent,
    TutorialsDetailsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    TutorialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
