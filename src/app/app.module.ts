import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';
import { NewFormComponent } from './new-form/new-form.component';
import { RowerDetailComponent } from './rower-detail/rower-detail.component';
import { EditRowerComponent } from './edit-rower/edit-rower.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { SeatFilterPipe } from './seat-filter.pipe';
import { AboutComponent } from './about/about.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewFormComponent,
    RowerDetailComponent,
    EditRowerComponent,
    AdminComponent,
    UserComponent,
    SeatFilterPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
