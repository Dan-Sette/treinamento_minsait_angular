import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { ILivro } from '../interfaces/livro';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LivrosService {
  endpoint = 'livros';
  api = environment.api;

  constructor(private http: HttpClient) { }

  buscarTodosLivros() {
    return this.http.get<ILivro[]>(`${this.api}/${this.endpoint}`);
  }

  buscarLivroPorId(id: number) {
    return this.http.get<ILivro>(`${this.api}/${this.endpoint}/${id}`);
  }

  cadastrarLivro(livro: ILivro){
    return this.http.post(`${this.api}/${this.endpoint}`, livro);
  }

  editarLivro(livro: ILivro, id: number){
    return this.http.put(`${this.api}/${this.endpoint}/${id}`, livro);
  }
  deletarLivro(id: number | undefined){
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);
  }
}
