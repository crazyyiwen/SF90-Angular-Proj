import { Component, OnInit, ViewChild } from '@angular/core';
import persondata from '../../assets/persondata.json';
import birds from '../../assets/Birds.json';
import Test from '../../assets/test2.json';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-persondata',
  templateUrl: './persondata.component.html',
  styleUrls: ['./persondata.component.css']
})
export class PersondataComponent implements OnInit {
  Users: any = persondata;
  Birds: any = birds;
  Tests: any[] = [];
  datasource: string[] = [];
  datasource2: any;
  displayedColumns: string[] = ['car1', 'car2', 'car3'];
  @ViewChild(MatPaginator, {static: true}) 
  private paginator: MatPaginator;

  constructor() { 
    for(let key in Test){
      this.Tests.push(Test[key]);
    }
    this.datasource2 = new MatTableDataSource<any>(this.Tests);
  }
  
  ngOnInit() {
    this.datasource2.paginator = this.paginator;  
    
  }
  applyFilter(filterValue: string) {
    this.datasource2.filter = filterValue.trim().toLowerCase();
  }

}
