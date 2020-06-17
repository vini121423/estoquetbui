import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Categoria } from '../menu/model';


export class CategoriaFiltro {
  pagina = 0;
  itensPorPagina = 10;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  categoriasUrl = 'http://localhost:8080/categorias';

  pesquisar(filtro: CategoriaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome)
    }

    return this.http.get<any>(`${this.categoriasUrl}`, { params }).toPromise().then(response => {
      const categorias = response.content;
      const resultado = {
        categorias,
        total: response.totalElements
      }
      return resultado
    });
  }

  excluir(id:number): Promise<void>{
    return this.http.delete(`${this.categoriasUrl}/${id}`).toPromise().then(() => null);
  }

  adicionar(categoria: Categoria): Promise<Categoria>{
    return this.http.post<Categoria>(this.categoriasUrl, categoria).toPromise();
  }
}
