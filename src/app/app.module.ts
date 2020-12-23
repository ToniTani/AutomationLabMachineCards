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
import { MachinecardsComponent } from './machinecards/machinecards.component';
import { CardListComponent } from './machinecards/card-list/card-list.component';
import { CardDetailComponent } from './machinecards/card-detail/card-detail.component';
import { CardItemComponent } from './machinecards/card-list/card-item/card-item.component';
import { MachinecardNotInUseListviewComponent } from './machinecard-not-in-use-listview/machinecard-not-in-use-listview/machinecard-not-in-use-listview.component';


const appRoutes: Routes = [

  {path: 'Machinecards', component: MachinecardListviewComponent},
  {path: 'DeviceActiveFalse', component: MachinecardNotInUseListviewComponent},
  {path: 'Kortit', component: MachinecardsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MachinecardListviewComponent,
    MachinecardNotInUseListviewComponent,
    MachinecardsComponent,
    CardListComponent,
    CardDetailComponent,
    CardItemComponent,
    MachinecardNotInUseListviewComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
