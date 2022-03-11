import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ViewMode } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CurrencyPipe],
})
export class HomeComponent implements OnInit {
  viewMode: ViewMode = 'grid';

  constructor(private formBuilder: FormBuilder, private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    console.log();
  }

  changeViewMode(mode: ViewMode): void {
    this.viewMode = mode;
  }

  formatter(value: number): string {
    return `${this.currencyPipe.transform(value, 'VND', '')!}đ`;
  }
}
