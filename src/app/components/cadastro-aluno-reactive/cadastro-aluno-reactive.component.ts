import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno-reactive',
  templateUrl: './cadastro-aluno-reactive.component.html',
  styleUrls: ['./cadastro-aluno-reactive.component.css']
})

export class CadastroAlunoReactiveComponent {
  form: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nivel: new FormControl('', [Validators.required]),

    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
  });

  get nome() {
    return this.form.get('nome')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  get nivel() {
    return this.form.get('nivel')!;
  }

  get cidade() {
    return this.form.get('cidade')!;
  }

  get estado() {
    return this.form.get('estado')!;
  }

  onSubmit() {
  
      console.log('Aluno cadastrado:', this.form.value);
      // Aqui você pode adicionar a lógica para enviar os dados do aluno para um serviço ou API
  }

}
