import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TUI_SANITIZER, TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './children/standalone/components/footer/footer.component';
import { HeaderComponent } from './children/standalone/components/header/header.component';
import { TuiMarkerIconModule } from '@taiga-ui/kit';

@Component({
    selector: 'sp-root',
    standalone: true,
    imports: [RouterOutlet, FooterComponent, HeaderComponent, TuiMarkerIconModule, TuiRootModule, TuiDialogModule, TuiAlertModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }, {
        provide: TUI_SANITIZER,
        useClass: NgDompurifySanitizer
    }]
})
export class AppComponent {
    public title: string = 'spotify84';
}
