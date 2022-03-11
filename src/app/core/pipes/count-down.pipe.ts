import { Pipe, PipeTransform } from '@angular/core';
import { interval, map, Observable, of, switchMap, take } from 'rxjs';
import { DurationExpired } from 'src/app/models';

@Pipe({
  name: 'countDown',
})
export class CountDownPipe implements PipeTransform {
  transform(date: Date | string, ...args: unknown[]): Observable<DurationExpired[]> {
    const endTime = new Date(new Date(date)).getTime();
    const now = new Date().getTime();
    const second = parseInt(((endTime - now) / 1000).toFixed(1));
    return interval(1000).pipe(
      take(second + 1),
      map((n) => second - n),
      switchMap((s) => of(this.createCounter(s * 1000)))
    );
  }

  createCounter(milliSeconds: number): DurationExpired[] {
    const denominator = 1000 * 60 * 60 * 24;
    if (milliSeconds >= 0) {
      const day = Math.floor(milliSeconds / denominator);
      const hour = Math.floor((milliSeconds % denominator) / (denominator / 24));
      const minute = Math.floor(((milliSeconds % denominator) % (denominator / 24)) / (1000 * 60));
      const second = Math.floor((((milliSeconds % denominator) % (denominator / 24)) % (1000 * 60)) / 1000);
      return [
        this.getDurationExpired(day, 'Ngày'),
        this.getDurationExpired(hour, 'Giờ'),
        this.getDurationExpired(minute, 'Phút'),
        this.getDurationExpired(second, 'Giây'),
      ];
    }
    return [];
  }

  getDurationExpired(value: number, label: string): DurationExpired {
    const durationExpired: DurationExpired = {
      label: label,
      value: value < 10 ? `0${value}` : value,
    };
    return durationExpired;
  }
}
