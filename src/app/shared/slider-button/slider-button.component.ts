import { Component, Input } from '@angular/core';
import { Metric } from 'src/app/shared/slider-button/enums/metric.enum';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.scss']
})
export class SliderButtonComponent {
  @Input() max: number;
  @Input() min: number;
  @Input() step: number;
  @Input() label: string;
  @Input({ required: true }) metric: Metric;
  @Input({ required: true }) control: FormControl;

  formatLabel = (value: number): string => {
    return `${value}${this.metric}`;
  };
}
