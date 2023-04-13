import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILivro } from 'src/app/interfaces/livro';
import { LivrosService } from 'src/app/services/livros.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{

  livros: ILivro[] = [];

  constructor(
    private livrosService: LivrosService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.livrosService.buscarTodosLivros().subscribe((result: ILivro[]) => {
      this.livros = result;
    })
  }

  onEdit(id: number | undefined) {
    this.router.navigate(['editar', id], {relativeTo: this.route})
  }

  onDelete(id: number | undefined){
    this.livrosService.deletarLivro(id)
    .subscribe(result => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Este livro foi deletado!!!',
        showConfirmButton: false,
        timer: 1500
      }).then((result) => {
        location.reload();
      })
    }, error => {
      console.error(error);
    });
  }
}
