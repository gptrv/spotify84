import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'sp-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./styles/header.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
