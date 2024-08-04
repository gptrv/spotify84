import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: true,
    templateUrl: 'card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

}
