import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaFiltro, CategoriasService } from '../categorias.service';
import { LazyLoadEvent, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})

export class CategoriasPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new CategoriaFiltro();
  categorias = [];


  @ViewChild('tabela', { static: true }) grid;
  constructor(private categoriasService: CategoriasService,
    private confirmation: ConfirmationService) { }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(categoria: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir esse registro?',
      accept: () => {
        this.excluir(categoria);
      }
    })

  }

  excluir(categoria: any) {
    this.categoriasService.excluir(categoria.id).then(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
        this.grid.first = 0;
      }
    }
    )

  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.categoriasService.pesquisar(this.filtro).then(resultado => {
      this.totalRegistros = resultado.total;
      this.categorias = resultado.categorias
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);

  }


}