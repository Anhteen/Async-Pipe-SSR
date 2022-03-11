import { Component, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-earliest-auction',
  templateUrl: './earliest-auction.component.html',
  styleUrls: ['./earliest-auction.component.scss'],
})
export class EarliestAuctionComponent implements OnDestroy {
  @Input() auction!: Record<string, any>;

  destroyed = new Subject<void>();

  constructor() {}

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
