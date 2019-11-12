import { NgModule } from '@angular/core';
import { MatCommonModule,
         MatSidenavModule,
         MatButtonModule,
         MatButtonToggleModule, 
         MatIconModule, 
         MatBadgeModule, 
         MatProgressSpinnerModule, 
         MatToolbarModule } from '@angular/material';
import { AppComponent } from '../app.component';

const material = [
    MatCommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule, 
    MatIconModule, 
    MatBadgeModule, 
    MatProgressSpinnerModule, 
    MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule { }