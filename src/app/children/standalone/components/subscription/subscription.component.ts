import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiSliderModule } from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'sp-subscription',
    styleUrls: ['./styles/subscription.less'],
    templateUrl: 'subscription.component.html',
    imports: [
        FormsModule,
        TuiSliderModule,
        ReactiveFormsModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionComponent {

    public formGroup: InputSignal<FormGroup> = input.required();

    public readonly labels: number[] = [250, 500, 750];
    // public readonly formControl: FormControl<number | null> = new FormControl(250);

    /**
     * Установить значение
     * @param newValue
     */
    public patchValue(newValue: number): void {
        (this.formGroup().get('subscription') as FormControl).patchValue(newValue);
    }
}
