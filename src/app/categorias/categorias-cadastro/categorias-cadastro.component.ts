import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, SelectControlValueAccessor } from '@angular/forms';
import { CategoriasService } from '../categorias.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/menu/error-handler.service';

@Component({
  selector: 'app-categorias-cadastro',
  templateUrl: './categorias-cadastro.component.html',
  styleUrls: ['./categorias-cadastro.component.css']
})
export class CategoriasCadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoriasService: CategoriasService,
    private messageService: MessageService,
    private router: Router,
    private errorHandler: ErrorHandlerService

  ) { }

  ngOnInit(){
    this.configurarFormulario();
  }

  configurarFormulario(){
    this.formulario = this.formBuilder.group({
      id: [],
      nome:[null,[Validators.required],[Validators.maxLength(20)]]
    })
  }

  salvar(){
    this.categoriasService.adicionar(this.formulario.value).then(catgoriaAdicionada =>{
       this.messageService.add({severity:'success',detail:'Categoria adicionada!',summary:'Concluído'});

       this.router.navigate(['/categorias']);
    }).catch(erro => this.errorHandler.handle(erro));
  }

}
