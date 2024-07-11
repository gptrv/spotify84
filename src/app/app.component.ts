import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./children/standalone/components/header/header.component";
import { FooterComponent } from "./children/standalone/components/footer/footer.component";

@Component({
    standalone: true,
    selector: 'sp-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    styleUrl: './app.component.less',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
