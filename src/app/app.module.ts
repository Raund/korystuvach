import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from './typescripts/angular-bootstrap-md/free';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app.routing';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { PhotoComponent } from './pages/photo/photo.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { SearchPhotoComponent } from './pages/search-photo/search-photo.component';
import { SearchMeetingComponent } from './pages/search-meeting/search-meeting.component';
import { DialogsListComponent } from './pages/dialogs-list/dialogs-list.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { EventsComponent } from './pages/events/events.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { AddMeetingComponent } from './pages/add-meeting/add-meeting.component';
import { AddPhotoComponent } from './pages/add-photo/add-photo.component';
import { AddReminderComponent } from './pages/add-reminder/add-reminder.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { UsersService } from './blocks/users.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    HomeComponent,
    SearchUserComponent,
    SearchPhotoComponent,
    SearchMeetingComponent,
    DialogsListComponent,
    DialogComponent,
    SubscriptionComponent,
    EventsComponent,
    MeetingComponent,
    AddMeetingComponent,
    AddPhotoComponent,
    AddReminderComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    CallbackComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
