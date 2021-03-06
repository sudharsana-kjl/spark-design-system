import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkPromoComponent } from './sprk-promo.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule],
  declarations: [SparkPromoComponent],
  exports: [SparkPromoComponent]
})
export class SparkPromoModule {}
