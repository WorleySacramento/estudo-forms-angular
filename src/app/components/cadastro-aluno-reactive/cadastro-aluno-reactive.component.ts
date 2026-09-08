import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno-reactive',
  templateUrl: './cadastro-aluno-reactive.component.html',
  styleUrls: ['./cadastro-aluno-reactive.component.css']
})

export class CadastroAlunoReactiveComponent {
  form: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nivel: new FormControl('', [Validators.required]),

    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
  });

  onSubmit() {
  
      console.log('Aluno cadastrado:', this.form.valid);
      // Aqui você pode adicionar a lógica para enviar os dados do aluno para um serviço ou API
  }

}
