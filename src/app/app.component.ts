import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './children/standalone/components/footer/footer.component';
import { HeaderComponent } from './children/standalone/components/header/header.component';
import { TuiMarkerIconModule } from "@taiga-ui/kit";

@Component({
    selector: 'sp-root',
    standalone: true,
    imports: [RouterOutlet, FooterComponent, HeaderComponent, TuiMarkerIconModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
    public title: string = 'spotify84';
}
