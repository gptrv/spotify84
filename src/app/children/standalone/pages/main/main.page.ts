import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    Inject,
    inject,
    OnInit,
    signal,
    WritableSignal
} from '@angular/core';
import { CalculatorComponent } from '../../components/calculator/calculator.component';
import { SubscriptionComponent } from '../../components/subscription/subscription.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { startWith, take, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import {
    TuiAlertService,
    TuiButtonModule,
    TuiDialogService,
    TuiNotificationModule,
    TuiSvgModule
} from '@taiga-ui/core';
import { TableComponent } from '../../components/table/table.component';
import { TUI_PROMPT, TuiIslandModule, TuiPromptData } from '@taiga-ui/kit';
import { ContentComponent } from '../../components/content/content.component';
import { TuiIconModule, TuiTitleModule } from '@taiga-ui/experimental';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

export enum Subscription {
    individual = 'individual',
    duo = 'duo',
    family = 'family'
}

interface ICurrentSubscription {
    title: Subscription,
    price: number,
    time: number
}

@Component({
    standalone: true,
    templateUrl: 'main.page.html',
    styleUrls: ['./styles/main.page.less', '../../../../app.component.less'],
    imports: [
        CalculatorComponent,
        SubscriptionComponent,
        ReactiveFormsModule,
        JsonPipe,
        TuiNotificationModule,
        TableComponent,
        TuiSvgModule,
        TuiButtonModule,
        ContentComponent,
        TuiIconModule,
        TuiTitleModule,
        TuiIslandModule,
        FooterComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPage implements OnInit {

    public formGroup: FormGroup;
    public currentPrice: WritableSignal<ICurrentSubscription> = signal({
        title: Subscription.individual,
        price: 190,
        time: 1
    });
    private _formBuilder: FormBuilder = inject(FormBuilder);
    private _destroyRef: DestroyRef = inject(DestroyRef);
    private _router: Router = inject(Router);


    constructor(
        @Inject(TuiDialogService) private readonly _dialogs: TuiDialogService,
        @Inject(TuiAlertService) private readonly _alerts: TuiAlertService
    ) {
        this.formGroup = this._formBuilder.group({
            subscription: [250],
            price: [250],
        });
        this.createPrice();
    }

    public ngOnInit(): void {
        this.formGroup.valueChanges
            .pipe(
                startWith(this.formGroup.getRawValue()),
                throttleTime(500),
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe({
                next: (value: {
                    subscription: number,
                    price: number
                }) => {
                    let title: Subscription = Subscription.individual;
                    let price: number = 190;
                    let time: number = 1;

                    if (value.subscription === 250) {
                        title = Subscription.individual;
                        if (value.price === 250) {
                            price = 190;
                            time = 1;
                        } else if (value.price === 500) {
                            price = 540;
                            time = 3;
                        } else if (value.price === 750) {
                            price = 1020;
                            time = 6;
                        } else if (value.price === 1000) {
                            price = 1780;
                            time = 12;
                        }
                    } else if (value.subscription === 500) {
                        title = Subscription.duo;
                        if (value.price === 250) {
                            price = 250;
                            time = 1;
                        } else if (value.price === 500) {
                            price = 740;
                            time = 3;
                        } else if (value.price === 750) {
                            price = 1350;
                            time = 6;
                        } else if (value.price === 1000) {
                            price = 2680;
                            time = 12;
                        }
                    } else if (value.subscription === 750) {
                        title = Subscription.family;
                        if (value.price === 250) {
                            price = 690;
                            time = 1;
                        } else if (value.price === 500) {
                            price = 1860;
                            time = 3;
                        } else if (value.price === 750) {
                            price = 1860;
                            time = 3;
                        } else if (value.price === 1000) {
                            price = 1860;
                            time = 3;
                        }
                    }

                    this.currentPrice.update(() => {
                        return {
                            title: title,
                            price,
                            time
                        };
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

    /**
     * Оформить подписку
     */
    public onClick(): void {
        const data: TuiPromptData = {
            content: 'Напишите нам в телегарм, чтобы оформить подписку!',
            yes: 'Да!',
            no: 'Нужно подумать',
        };

        this._dialogs
            .open<boolean>(TUI_PROMPT, {
                label: 'Перейти в телеграм?',
                size: 's',
                data,
            })
            .pipe(
                take(1)
            )
            .subscribe();
    }
}
