import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss'],
})
export class SharedHeaderComponent  implements OnInit {

  @Input() title!:String


  constructor() { }

  ngOnInit() {}
}
