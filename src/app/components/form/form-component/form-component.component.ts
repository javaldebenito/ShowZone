import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
})
export class FormComponentComponent  implements OnInit {

  model = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log(this.model);
  }
  
  constructor() { }

  ngOnInit() {}

}
