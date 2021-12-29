import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'button_component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnDestroy, MatIconModule {

  btn_state: boolean = false;
  message: string = '';
  subscription: Subscription = new Subscription;

  

  toggle_state(): void {
    this.btn_state = !this.btn_state;
    this.message = String(this.btn_state);
    this.data.setMsg(this.message)
    console.log(this.message);
  }

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
