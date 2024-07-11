import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'sp-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./styles/footer.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
