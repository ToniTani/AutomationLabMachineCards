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
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { MachinecardStartComponent } from './machinecards/machinecard-start/machinecard-start.component';
import { CardEditComponent } from './machinecards/card-edit/card-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {CardService} from './machinecards/card.service';


const appRoutes: Routes = [

  {path: 'Machinecards', component: MachinecardListviewComponent},
  {path: 'DeviceActiveFalse', component: MachinecardNotInUseListviewComponent},
  {path: 'kortit', component: MachinecardsComponent, children: [
      {path: '', component: MachinecardStartComponent},
      {path: 'new', component: CardEditComponent},
      {path: ':id', component: CardDetailComponent},
      {path: 'id/edit', component: CardEditComponent}
    ]}

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
    MachinecardNotInUseListviewComponent,
    MachinecardStartComponent,
    CardEditComponent
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
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
