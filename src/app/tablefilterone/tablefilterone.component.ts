import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { DataService } from '../shared/services/table.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-tablefilterone',
  templateUrl: './tablefilterone.component.html',
  styleUrls: ['./tablefilterone.component.scss'],
  providers: []
})
export class TablefilteroneComponent{
  iFilter = '';
  iiFilter:number;
  dataSource: any;
  events: string[] = [];

  userData: any;
  txnTypee = [
    {value: 'sale', viewValue: 'sale'},
    {value: 'refund', viewValue: 'refund'},
    {value: 'charge back', viewValue: 'charge back'}
  ];
  panelOpenState: boolean = false;
  constructor(private dataService: DataService) {
    this.getData();
  }


  getData() {
    this.dataService.getdata().subscribe((data) => {
      this.dataSource = data
    })
  }
  getInfo(user: any) {
    this.userData = user;
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

}



