import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TuiButtonModule } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: 'intro.page.html',
    styleUrls: ['./styles/intro.page.less', './styles/equaliser.less'],
    imports: [
        TuiButtonModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroPage {

    public array: number[] = [...Array(100).keys()];
    private _router: Router = inject(Router);


    /**
     * Обработка клика
     */
    public handleClick(): void {
        this._router.navigate(['main']);
    }
}
