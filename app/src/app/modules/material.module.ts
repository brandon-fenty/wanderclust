import { NgModule } from '@angular/core';
import { MatCommonModule,
         MatSidenavModule,
         MatButtonModule,
         MatButtonToggleModule, 
         MatIconModule, 
         MatBadgeModule, 
         MatProgressSpinnerModule, 
         MatToolbarModule, 
         MatListModule } from '@angular/material';

const material = [
    MatCommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule, 
    MatIconModule, 
    MatBadgeModule, 
    MatProgressSpinnerModule, 
    MatToolbarModule,
    MatListModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }