import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../shared/services/table.service';
@Component({
  selector: 'app-tablefiltertwo',
  templateUrl: './tablefiltertwo.component.html',
  styleUrls: ['./tablefiltertwo.component.scss'],
})
export class TablefiltertwoComponent {
  displayedColumns = ['TxnId', 'TxnStatus', 'TxnType', 'Created Date','Amount'];
  iFilter = '';
  txnTypee = [
    {value: 'sale', viewValue: 'sale'},
    {value: 'refund', viewValue: 'refund'},
    {value: 'charge back', viewValue: 'charge back'}
  ];
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  dataSource:any;
  constructor(private http: Http,private dataservice:DataService) {
    this.dataservice.getdata().subscribe(data=>{
    this.dataSource = data;
    });
  }
  setStatus(e){
    console.log(e)
  }
}
