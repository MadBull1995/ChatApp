// Core angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Internals
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DraggableDirective } from './shared/directives/draggable.directive';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ItemComponentComponent } from './shared/components/item-component/item-component.component';
import { LoginComponent } from './shared/components/login/login.component';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// API's
import { GRPC_INTERCEPTORS, GrpcCoreModule, GrpcLoggerModule } from '@ngx-grpc/core';
import { GrpcWebClientModule } from '@ngx-grpc/grpc-web-client';
import { GrpcMessage } from '@ngx-grpc/common';
import { environment } from 'src/environments/environment';
import { GrpcErrorModule } from './modules/grpc-error/grpc-error.module';
import { GrpcErrorInterceptor } from './modules/grpc-error/grpc-error-interceptor';
import { ChatsComponent } from './shared/components/chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    SidebarComponent,
    DraggableDirective,
    NotFoundComponent,
    ItemComponentComponent,
    LoginComponent,
    ChatsComponent
  ],
  imports: [
    // Core
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // Materials
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule,
    
    // API's
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: { host: 'http://localhost:9000' },
    }),
    GrpcErrorModule.forRoot({
      settings: {
        duration: 8000,
        // logStatusCodeOk: true,
        // customStyle: ,
        position: {
          horizontal: 'end',
          vertical: 'top'
        },
      }
    }),
    GrpcLoggerModule.forRoot({ 
      settings: { 
         // enables logger in dev mode and still lets you see them in production when running `localStorage.setItem('logger', 'true') in the console`
        enabled: localStorage.getItem('logger') === 'true' || !environment.production,
         // protobuf json is more human-readable than the default toObject() mapping
         // please beware: if you use google.protobuf.Any you must pass the proper `messagePool` argument
        requestMapper: (msg: GrpcMessage) => msg.toProtobufJSON(),
        responseMapper: (msg: GrpcMessage) => msg.toProtobufJSON(),
      },
    }),
  ],
  // providers: [
  //   { provide: GRPC_INTERCEPTORS, useClass: GrpcErrorInterceptor, multi: true },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
