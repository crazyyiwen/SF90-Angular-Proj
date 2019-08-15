import { Component, OnInit } from '@angular/core';
import test from '../../assets/test.json';
import test2 from '../../assets/test2.json';
import { Test } from '../models/test.model.js';
import {JsonService} from '../json.service';
import {interval, observable, Observable} from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [JsonService]
})

export class TestComponent implements OnInit {
  //_jsonURL: any = '../../assets/test2.json';
  _test: Test[];
  array: any;
  array1: any;
  p: any = test;
  q: any = test2;
  dataValues: string[] = [];
  dataValues2: string[] = [];
  dataKeys: string[] = [];
  jsonData: any;
  secondCounter = interval(1000);
  //time = new Observable(observer=>setInterval(()=>observer.next(new Date().toString()), 1000));
  // j: any = JSON.parse('{ "name":{"John": "hi"}, "age":30, "city":"New York"}');
  constructor(private jsonService: JsonService) {
    
    }
    ngOnInit() {
      console.log(this.q);
      
      for(let key in this.q) {
        console.log();
        this.dataValues.push(this.q[key]);
        this.dataKeys.push(key);
        console.log(this.q[key]);
      }
      this.jsonService.getData().subscribe((data: any): void =>{
        this.jsonData = data as string [];
        for(var o in this.jsonData){
          this.dataValues2.push(this.jsonData[o]);
        }
        console.log(this.dataValues2);
      });
      // this.secondCounter.subscribe(n=>console.log(`It's been ${n} second since subscribing!`));
    }
    
}

  
