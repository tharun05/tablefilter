import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  displayedColumns = ['txnId', 'txnStatus', 'txnType', 'createdDate','amount'];
  iFilter = '';
  tableData = [
    {
      txnId: 11,
      txnStatus: 'Approved',
      txnType: 'Sale',
      createdDate: '23/05/2018',
      customerName: 'Rohit',
      email: 'Rohit@gmail.com',
      description: 'account Activated',
      amount: 1000
    },
    {
      txnId: 12,
      txnStatus: 'Rejected',
      txnType: 'inprogress',
      createdDate: '23/05/2018',
      customerName: 'Angela',
      email: 'Angela@gmail.com',
      description: 'account Activated',
      amount: 1000
    },
    {
      txnId: 13,
      txnStatus: 'Approved',
      txnType: 'chargeback',
      createdDate: '23/05/2018',
      customerName: 'Prakash',
      email: 'Prakash@gmail.com',
      description: 'account Activated',
      amount: 3800
    },
    {
      txnId: 14,
      txnStatus: 'Pending',
      txnType: 'Refund',
      createdDate: '23/05/2018',
      customerName: 'Bindu',
      email: 'Bindu@gmail.com',
      description: 'account Activated',
      amount: 2399
    },
    {
      txnId: 15,
      txnStatus: 'Inprogress',
      txnType: 'Charge Back',
      createdDate: '23/05/2018',
      customerName: 'jack',
      email: 'jack@gmail.com',
      description: 'account Activated',
      amount: 9088
    },
    {
      txnId: 16,
      txnStatus: 'Inprogress',
      txnType: 'Refund',
      createdDate: '23/05/2018',
      customerName: 'Tharun',
      email: 'arun@gmail.com',
      description: 'account Activated',
      amount: 3000
    },
    {
      txnId: 17,
      txnStatus: 'Inprogress',
      txnType: 'Sale',
      createdDate: '23/05/2018',
      customerName: 'Sam',
      email: 'sam@gmail.com',
      description: 'account Deactivated',
      amount: 3000
    },
    {
      txnId: 18,
      txnStatus: 'Inprogress',
      txnType: 'Sale',
      createdDate: '23/05/2018',
      customerName: 'Hari',
      email: 'hari@gmail.com',
      description: 'account Deactivated',
      amount: 3000
    },
    {
      txnId: 19,
      txnStatus: 'Inprogress',
      txnType: 'Sale',
      createdDate: '23/05/2018',
      customerName: 'Jay',
      email: 'Jay@gmail.com',
      description: 'account Deactivated',
      amount: 4988
    },
  ];
  dataSource = this.tableData;
  constructor(private http: Http) {
    // console.log(this.tableData)
  }
}
