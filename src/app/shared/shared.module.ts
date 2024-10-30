import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTabsComponent } from './shared-tabs/shared-tabs.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedHeaderComponent } from './shared-header/shared-header.component';


@NgModule({
  declarations: [
    SharedTabsComponent,SharedHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    SharedTabsComponent,SharedHeaderComponent
  ]
})
export class SharedModule { }
