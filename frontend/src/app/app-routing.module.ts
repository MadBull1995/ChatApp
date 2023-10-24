import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'chat', canActivate: [AuthGuard], loadChildren: () => import('./modules/chat-room/chat-room.module').then(m => m.ChatRoomModule) },
  { path: 'settings', canActivate: [AuthGuard], loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'login', component:LoginComponent },
  { path: 'contacts', canActivate: [AuthGuard], loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
