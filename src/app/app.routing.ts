import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { HeaderComponent } from './blocks/header/header.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dialogs', component: DialogsListComponent},
  { path: 'dialogs/:id', component: DialogComponent},
  { path: 'subscription', component: SubscriptionComponent},
  { path: 'events', component: EventsComponent},
  { path: 'add-meeting', component: AddMeetingComponent},
  { path: 'add-photoes', component: AddPhotoComponent},
  { path: 'add-reminder', component: AddReminderComponent},
  { path: 'edit-profile', component: EditProfileComponent},
  { path: 'change-password', component: ChangePasswordComponent},
  { path: 'callback', component: CallbackComponent},
  { path: 'search-user', component: SearchUserComponent},
  { path: 'add-reminder', component: AddReminderComponent},
  { path: ':login', component: UserComponent},
  { path: ':login/meeting/:id', component: MeetingComponent},
  { path: ':login/photo/:id', component: PhotoComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
