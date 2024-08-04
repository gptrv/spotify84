import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { Router } from '@angular/router';
import { TuiTitleModule } from '@taiga-ui/experimental';

@Component({
    standalone: true,
    templateUrl: 'about.page.html',
    styleUrls: ['./styles/about.page.less', '../../../../app.component.less'],
    imports: [
        TuiButtonModule,
        TuiTitleModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPage {

    private _router: Router = inject(Router);

    /**
     * Обработка клика
     */
    public onClick(): void {
        this._router.navigate(['/'], { replaceUrl: true });
    }
}
