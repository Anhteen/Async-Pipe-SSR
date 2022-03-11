import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { CountDownComponent, EarliestAuctionComponent, FooterComponent, HeaderComponent } from './components';
import { ItemAuctionComponent } from './components/item-auction/item-auction.component';
import { CountDownPipe } from './pipes';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EarliestAuctionComponent,
    ItemAuctionComponent,
    CountDownPipe,
    CountDownComponent,
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, NzSliderModule],
  exports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    EarliestAuctionComponent,
    ItemAuctionComponent,
    CountDownPipe,
    CountDownComponent,
    NzSliderModule,
  ],
})
export class CoreModule {}
