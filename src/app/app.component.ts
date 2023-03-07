import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export interface DadosTeste {
  nome: string;
  email: string;
  dataNascimento: string;
  celular: string;
  senha?: string;
}


const ELEMENT_DATA: DadosTeste[] = [
  {
    nome: 'eddie',
    email: 'Hydrogen',
    dataNascimento: '23/05/89',
    celular: 'H',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading = true;
  showSpinner = false;


  mensagemEnviada = false;


  tabelaVisivel = false; // deixar a tabela invisivel até enviar o formulario
  dadosForm = {
    // dados para criação do formulário, objeto contendo as informações que terão no formulário
    nome: '',
    email: '',
    celular: '',
    aniversario: '',
    senha: '',
  };
  resultado: any =[
    {
      nome: '',
      email: '',
      dataNascimento: '',
      celular: '',
      senha: '',
    }]

  displayedColumns = ['nome', 'email', 'dataNascimento', 'celular'];

  constructor(private toastr: ToastrService) { }



  onSubmit() {
    this.showSpinner = true;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
    setTimeout(() => {
      this.mensagemEnviada = false;
    }, 1000);



    this.resultado = [{
    nome: this.dadosForm.nome,
    email: this.dadosForm.email,
    dataNascimento: this.dadosForm.aniversario,
    celular:this.dadosForm.celular
    }]



    return this.resultado;

  }




  submitForm() {
    // lógica para enviar o formulário

    this.mensagemEnviada = true;
    setTimeout(() => {
      this.mensagemEnviada = false;
    }, 2000);
  }

  }


