import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() {}
  flag2 : any;
  ngOnInit() {
    // Initial flag must me 1 in order to load the universe
  }
}
