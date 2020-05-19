import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { HttpClientModule} from '@angular/common/http';
import { ProdutosService } from './produtos/produtos.service';
import { CategoriasService } from './categorias/categorias.service';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { ProdutosPesquisaComponent } from './produtos/produtos-pesquisa/produtos-pesquisa.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasModule } from './categorias/categorias.module';
import { ProdutosModule } from './produtos/produtos.module';


const routes: Routes = [
  {path: 'categorias', component:CategoriasPesquisaComponent},
  {path: 'produtos', component:ProdutosPesquisaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MenuModule,
    HttpClientModule,
    CategoriasModule,
    ProdutosModule
   
  ],
  providers: [CategoriasService,ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
