import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiRangeModule, TuiSliderModule } from '@taiga-ui/kit';
import { I18nPluralPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { TuiSvgModule } from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'sp-calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['./styles/calculator.less'],
    imports: [
        ReactiveFormsModule,
        TuiSliderModule,
        NgForOf,
        NgIf,
        TuiSvgModule,
        TuiRangeModule,
        FormsModule,
        JsonPipe,
        I18nPluralPipe
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent {

    public formGroup: InputSignal<FormGroup> = input.required();

    public readonly labels: number[] = [250, 500, 750, 1000];
    // public readonly formControl: FormControl<number | null> = new FormControl(250);

}

