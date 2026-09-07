import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroAlunoTemplateComponent } from './components/cadastro-aluno-template/cadastro-aluno-template.component';
import { CadastroAlunoReactiveComponent } from './components/cadastro-aluno-reactive/cadastro-aluno-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunoTemplateComponent,
    CadastroAlunoReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
