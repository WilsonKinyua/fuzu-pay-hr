import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-manager',
  templateUrl: './leave-manager.component.html',
  styleUrls: ['./leave-manager.component.css'],
})
export class LeaveManagerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // change the button current state
  onClick(event: any) {
    const element = event.target || event.srcElement || event.currentTarget;
    const idAttr = element.attributes.class;
    const value = idAttr.nodeValue;
    const buttons = document.getElementsByClassName(value);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('btn-current-active');
    }
    event.target.classList.add('btn-current-active');
  }
}
