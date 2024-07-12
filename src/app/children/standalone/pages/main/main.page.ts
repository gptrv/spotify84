import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CalculatorComponent } from '../../components/calculator/calculator.component';
import { SubscriptionComponent } from '../../components/subscription/subscription.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { TuiNotificationModule } from "@taiga-ui/core";
import { TableComponent } from "../../components/table/table.component";

@Component({
    standalone: true,
    templateUrl: 'main.page.html',
    styleUrls: ['./styles/main.page.less'],
    imports: [
        CalculatorComponent,
        SubscriptionComponent,
        ReactiveFormsModule,
        JsonPipe,
        TuiNotificationModule,
        TableComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPage implements OnInit {

    public formGroup: FormGroup;
    public currentPrice: WritableSignal<number> = signal(0);
    private _formBuilder: FormBuilder = inject(FormBuilder);
    private _destroyRef: DestroyRef = inject(DestroyRef);

    constructor() {
        this.formGroup = this._formBuilder.group({
            subscription: [250],
            price: [250],
        });
        this.createPrice();
    }

    public ngOnInit(): void {
        this.formGroup.valueChanges
            .pipe(
                throttleTime(500),
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe({
                next: (value: any) => {
                    this.currentPrice.update(() => {
                        return value;
                    });
                }
            });
    }

    /**
     * Создание формы
     */
    public createPrice(): void {
        this.currentPrice.set(this.formGroup.getRawValue());
    }

}
