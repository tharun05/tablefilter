import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// import {MatTableModule} from '@angular/material/table';
import {FilterPipe} from './shared/filter/pipe';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import { RouterModule, Routes } from '@angular/router';
import { TablefiltertwoComponent } from './tablefiltertwo/tablefiltertwo.component';
import { TablefilteroneComponent } from './tablefilterone/tablefilterone.component';
import { DataService} from './shared/services/table.service';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule, MatNativeDateModule, DateAdapter } from '@angular/material';
import {DatePipe} from './shared/filter/pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {
  MatToolbarModule,
  MatTableModule,
} from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: TablefilteroneComponent },
  { path: 'tablefilterone',      component: TablefilteroneComponent },
  { path: 'tablefiltertwo',      component: TablefiltertwoComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    DatePipe,
    TablefiltertwoComponent,
    TablefilteroneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [DataService

],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
}
public getJSON(): Observable<any> {
  return this.http.get('tableData/tabledata.json')
}

}
