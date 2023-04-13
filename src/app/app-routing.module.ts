import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { CadastrarAtualizarLivrosComponent } from './pages/cadastrar-atualizar-livros/cadastrar-atualizar-livros.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'livros', component: BooksComponent},
  { path: 'livros/cadastrar', component: CadastrarAtualizarLivrosComponent},
  { path: 'livros/editar/:id', component: CadastrarAtualizarLivrosComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
