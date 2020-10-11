import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  showdatatype = false;
  constructor( ) { }

  ngOnInit(): void {
  }

  showData():void{
   if(this.showdatatype=== true){
     this.showdatatype = false;
   }else{
     this.showdatatype= true;
   }
  }
}
