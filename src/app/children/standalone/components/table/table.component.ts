/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { TuiTagModule } from '@taiga-ui/kit';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';

interface ISubscription {
    readonly subscription: string;
    readonly period: number;
    readonly price: number;
    readonly pricePerson?: number;
    readonly country: readonly string[];
}

@Component({
    standalone: true,
    selector: 'sp-table',
    templateUrl: './table.component.html',
    styleUrls: ['./styles/table.less'],
    imports: [
        NgIf,
        NgForOf,
        TuiTagModule,
        TuiTableModule,
        TuiLetModule,
        AsyncPipe,
        TuiButtonModule,
        TuiLinkModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {

    @Output()
    public handleClick: EventEmitter<void> = new EventEmitter();

    public readonly columns: string[] = ['subscription', 'period', 'price', 'pricePerson', 'country', 'actions'];

    public readonly users$: BehaviorSubject<ISubscription[]> = new BehaviorSubject<ISubscription[]>([
        {
            subscription: 'individual',
            period: 1,
            price: 190,
            pricePerson: 190,
            // стоимость2: 140,
            country: ['Индия']
        },
        {
            subscription: 'individual',
            period: 3,
            price: 540,
            pricePerson: 540,
            // стоимость2: 300,
            country: ['Индия']
        }, {
            subscription: 'individual',
            period: 6,
            price: 1020,
            pricePerson: 1020,
            // стоимость2: 300,
            country: ['Индия']
        }, {
            subscription: 'individual',
            period: 12,
            price: 1780,
            pricePerson: 1780,
            // стоимость2: 300,
            country: ['Индия']
        }, {
            subscription: 'duo',
            period: 1,
            price: 250,
            pricePerson: 125,
            country: ['Индия']
        }, {
            subscription: 'duo',
            period: 3,
            price: 740,
            pricePerson: 370,
            country: ['Индия']
        },{
            subscription: 'duo',
            period: 6,
            price: 1350,
            pricePerson: 450,
            country: ['Индия']
        },{
            subscription: 'duo',
            period: 12,
            price: 2680,
            pricePerson: 1340,
            country: ['Индия']
        },{
            subscription: 'family',
            period: 1,
            price: 690,
            pricePerson: 115,
            country: ['Индия']
        },
        {
            subscription: 'family',
            period: 3,
            price: 1860,
            pricePerson: 310,
            country: ['Индия']
        }
    ]);


    /**
     * Обработка клика
     */
    public click(): void {
        this.handleClick.next();
    }
}
