import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProdutosService } from '../produtos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/menu/error-handler.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {
  formulario: FormGroup;


  constructor(
     private message: MessageService,
     private produtosService: ProdutosService,
     private router: Router,
     private route: ActivatedRoute,
     private errorHandler: ErrorHandlerService,
     private formBuilder: FormBuilder
    
  ) { }



  ngOnInit() {
    this.configurarFormulario();
    const idProduto = this.route.snapshot.params['id'];
  

  if(idProduto){
    this.carregarProduto(idProduto);
  }
}
   carregarProduto(id:number){
     this.produtosService.buscarPorId(id).then(produto=>{
       this.formulario.patchValue(produto);
     }).catch(erro => this.errorHandler.handle(erro));
   }
  
   configurarFormulario(){
     this.formulario = this.formBuilder.group({
       id:[],
       nome:[null,[Validators.required,Validators.maxLength(100)]],
       preco:[null,[Validators.required]],
       idcategoria:[null,[Validators.required]]
     }) 
   }

   get atualizando(){
     return Boolean(this.formulario.get('id').value)
   }

   salvar(){
     if(this.atualizando){
       this.alterarProduto();
     } else{
       this.adicionarProduto();
     }
   }

   adicionarProduto(){
     this.produtosService.inserir(this.formulario.value).then(produtoAdicionado=>{
       this.message.add({severity:'success',detail:'Produto adicionado com sucesso',summary:'Concluído'});

       this.router.navigate(['/produtos']);

     }).catch(erro => this.errorHandler.handle(erro));
   }

   alterarProduto(){
     this.produtosService.alterar(this.formulario.value).then(produto =>{
      this.formulario.patchValue(produto);
      this.message.add({severity:'success',detail:'Produto alterado com sucesso',summary:'Concluído'});
     }).catch(erro=> this.errorHandler.handle(erro));
   }
}
