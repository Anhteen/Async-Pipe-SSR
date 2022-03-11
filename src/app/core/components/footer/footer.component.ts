import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  addressHanoi = '1A ngách 64 ngõ Thống Nhất, tổ 1, phường Cự Khối, quận Long Biên, TP Hà Nội.';

  addressYenBai = 'Số nhà 430. đường Nguyễn Tất Thành, tổ 8, phường Yên Thịnh, TP Yên Bái, tỉnh Yên Bái.';

  constructor() {}

  ngOnInit(): void {
    console.log();
  }
}
