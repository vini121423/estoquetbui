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
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService,MessageService} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ErrorHandlerService } from './menu/error-handler.service';



const routes: Routes = [
  {path: 'categorias', component: CategoriasPesquisaComponent},
  {path: 'categorias/nova', component: CategoriasCadastroComponent},
  {path: 'categorias/:id', component: CategoriasCadastroComponent},
  {path: 'produtos/novo', component: ProdutosCadastroComponent},
  {path: 'produtos/:id', component: ProdutosCadastroComponent},
  {path: 'produtos', component: ProdutosPesquisaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CategoriasCadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MenuModule,
    HttpClientModule,
    CategoriasModule,
    ProdutosModule,
    ConfirmDialogModule,
    ToastModule
   
  ],
  providers: [CategoriasService,ProdutosService,ConfirmationService,MessageService,ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
