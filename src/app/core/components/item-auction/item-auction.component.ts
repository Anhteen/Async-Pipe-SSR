import { Component, Input } from '@angular/core';
import { ViewMode } from 'src/app/models';

@Component({
  selector: 'app-item-auction',
  templateUrl: './item-auction.component.html',
  styleUrls: ['./item-auction.component.scss'],
})
export class ItemAuctionComponent {
  @Input() auction!: Record<string, any>;

  @Input() viewMode: ViewMode = 'grid';

  @Input() showCountDown!: boolean;

  constructor() {}
}
