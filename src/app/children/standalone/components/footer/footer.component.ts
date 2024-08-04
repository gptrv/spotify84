import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
    standalone: true,
    selector: 'sp-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./styles/footer.less', '../../../../app.component.less'],
    imports: [
        NgOptimizedImage
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    @Output()
    public handleClick: EventEmitter<void> = new EventEmitter();

    private _router: Router = inject(Router);

    /**
     * Обработка клика
     */
    public click(): void {
        this.handleClick.next();
    }

    /**
     * Страница о нас
     */
    public aboutPage(): void {
        this._router.navigate(['about']);
    }
}
