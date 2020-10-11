import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private route: Router,public service : DataService) { }

  ngOnInit(): void {
   

  }

 

}
