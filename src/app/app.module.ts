import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
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

const appRoutes: Routes = [

  {path: '', redirectTo: '/Machinecards', pathMatch: 'full' },
  {path: 'Machinecards', component: MachinecardListviewComponent},
  {path: 'Machinecards/new', component: MachinecardDetailComponent},
  {path: 'Machinecards/:id', component: MachinecardDetailComponent},
  {path: 'DeviceActiveFalse', component: MachinecardNotInUseListviewComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MachinecardListviewComponent,
    MachinecardNotInUseListviewComponent,
    MachinecardDetailComponent
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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
