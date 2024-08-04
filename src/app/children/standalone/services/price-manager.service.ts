import { Injectable, signal, WritableSignal } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class PriceManagerService {

    public readonly currentPrice: WritableSignal<number> = signal(0);

    /**
     * обработка формы
     * @param form
     */
    public handleFormStream(form: NgForm): void {
        console.log(form);
    }
}
