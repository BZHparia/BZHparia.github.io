import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.scss']
})
export class DataComponent implements OnInit, OnDestroy {

  message:string = '';
  subscription: Subscription = new Subscription;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.subscription = this.service.currentMessage.subscribe(message => this.message = message)
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // constructor() { }
  // ngOnInit() { }
  // ngOnDestroy() { }

}
