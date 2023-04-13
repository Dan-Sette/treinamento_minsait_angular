import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ILivro } from 'src/app/interfaces/livro';
import { LivrosService } from 'src/app/services/livros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-atualizar-livros',
  templateUrl: './cadastrar-atualizar-livros.component.html',
  styleUrls: ['./cadastrar-atualizar-livros.component.css']
})
export class CadastrarAtualizarLivrosComponent {

  livroForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    ano: new FormControl(1617, Validators.required),
    quantidade: new FormControl(0, Validators.required)
  })
  constructor(
    private livrosService: LivrosService,
    private route: ActivatedRoute
  ){}

  livroId = 0;

  ngOnInit(){
    this.livroId = Number(this.route.snapshot.paramMap.get('id'));
    if(this.livroId){
      this.livrosService.buscarLivroPorId(this.livroId).subscribe((livro: ILivro) => {
        this.livroForm.setValue({
          titulo: livro.titulo,
          ano: livro.ano || 1617,
          quantidade: livro.quantidade || 0
        })
      });
    }
  }

  cadastrar(){
    const livro: ILivro = this.livroForm.value as ILivro;
    if(!this.livroId){
      this.livrosService.cadastrarLivro(livro).subscribe(result => {
        Swal.fire(
          'Sucesso, seu livro está salvo!',
          'Que massa fera, uhu',
          'success'
        )
      }, error => {
        console.error(error);
      });
    } else {
      this.editar(livro)
    }
  }

  editar(livro: ILivro){
      this.livrosService.editarLivro(livro, this.livroId).subscribe(result => {
        Swal.fire(
          'Sucesso, seu livro está editado!',
          'Que massa fera, uhu',
          'success'
        )
      }, error => {
        console.error(error);
      })
  }
}
