import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstruturasCondicionaisComponent } from './components/estruturas-condicionais/estruturas-condicionais.component';
import { MatSidenavModule} from '@angular/material/sidenav'
import { EstruturasRepeticaoComponent } from './components/estruturas-repeticao/estruturas-repeticao.component';
import { FunctionsTypescriptComponent } from './components/functions-typescript/functions-typescript.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            EstruturasCondicionaisComponent,
            EstruturasRepeticaoComponent,
            FunctionsTypescriptComponent,
            MatSidenavModule,
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnhangueraFunctions';
}
