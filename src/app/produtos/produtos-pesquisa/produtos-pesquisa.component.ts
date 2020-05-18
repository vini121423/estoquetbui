import { Component, OnInit } from '@angular/core';
import { ProdutoFiltro, ProdutosService } from '../produtos.service';
import { LazyLoadEvent } from 'primeng/api/public_api';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.css']
})
export class ProdutosPesquisaComponent implements OnInit {
   totalRegistros = 0;
   filtro = new ProdutoFiltro();
   produtos = [];

  constructor(private produtosService : ProdutosService) { }

  ngOnInit() {
    this.pesquisar();
  }
  pesquisar(pagina = 0){
    this.filtro.pagina=pagina;
    this.produtosService.pesquisar(this.filtro).then(resultado=>{
      this.totalRegistros = resultado.total;
      this.produtos = resultado.produtos;
    });
  }

  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first/event.rows;
    this.pesquisar(pagina);
  }

}
