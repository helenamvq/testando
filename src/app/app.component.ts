import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  dados = {
    nome: '',
    email: '',
    celular: '',
    aniversario: '',
    senha: ''
   };

   constructor(){

   }


      onSubmit() {
        console.log(this.dados);
      }

      submitForm() {
        // lógica para enviar o formulário

        // exibir o alerta
        alert('Formulário enviado com sucesso!');
      }
    }



