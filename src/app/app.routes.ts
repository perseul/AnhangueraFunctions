import { RouterModule, Routes } from '@angular/router';
import { EstruturasCondicionaisComponent } from './components/estruturas-condicionais/estruturas-condicionais.component';
import { EstruturasRepeticaoComponent } from './components/estruturas-repeticao/estruturas-repeticao.component';
import { FunctionsTypescriptComponent } from './components/functions-typescript/functions-typescript.component';
import { FormDynamicComponent } from './components/form-dynamic/form-dynamic.component';
import { SecureComponent } from './components/secure/secure.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.service';

export const routes: Routes = [
    {
        path: "estruturas-condicionais",
        component: EstruturasCondicionaisComponent
    },
    {
        path:"estruturas-repeticao",
        component: EstruturasRepeticaoComponent
    },
    {
        path:"functions-typescript",
        component: FunctionsTypescriptComponent
    },
    {
        path:"form-dynamic",
        component: FormDynamicComponent
    },
    {
        path:"secure",
        component: SecureComponent,
        canActivate: [AuthGuard]
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutes {}
