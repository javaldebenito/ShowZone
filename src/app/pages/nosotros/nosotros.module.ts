import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NosotrosPageRoutingModule } from './nosotros-routing.module';
import { FormComponentComponent } from 'src/app/components/form/form-component/form-component.component';
import { NosotrosPage } from './nosotros.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosotrosPageRoutingModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: NosotrosPage}])
  ],
  declarations: [NosotrosPage,FormComponentComponent,]
})
export class NosotrosPageModule {}
