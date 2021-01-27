import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { MachinecardListviewComponent } from './machinecard-listview/machinecard-listview.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MachinecardNotInUseListviewComponent } from './machinecard-not-in-use-listview/machinecard-not-in-use-listview/machinecard-not-in-use-listview.component';
import { MachinecardDetailComponent } from './machinecard-detail/machinecard-detail/machinecard-detail.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog/confirm-dialog.component';
import { AuthComponent } from './auth/auth.component';
import {MachinecardService} from './services/machinecard.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AuthGuard} from './auth/auth.guard';

const appRoutes: Routes = [

  {path: '', redirectTo: '/Machinecards', pathMatch: 'full' },
  {path: 'login', component: AuthComponent },
  {path: 'Machinecards', component: MachinecardListviewComponent},
  {path: 'Machinecards/new', component: MachinecardDetailComponent, canActivate: [AuthGuard]},
  {path: 'Machinecards/:id', component: MachinecardDetailComponent, canActivate: [AuthGuard]},
  {path: 'DeviceActiveFalse', component: MachinecardNotInUseListviewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MachinecardListviewComponent,
    MachinecardNotInUseListviewComponent,
    MachinecardDetailComponent,
    ConfirmDialogComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  providers: [MachinecardService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
