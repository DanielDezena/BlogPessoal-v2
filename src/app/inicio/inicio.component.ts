import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
    postagem: Postagem = new Postagem()

    user: User = new User()
    idUser = environment.id

    tema: Tema = new Tema()
    lista: Tema[]
    idTema: number

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      alert('seção expirada')
      this.router.navigate(['/entrar'])
    }
    this.getAllTemas();
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.lista = resp
    })
  }

  findByIdTema(){
    this.temaService.getTemaById(this.idTema).subscribe((resp: Tema)=>
    this.tema = resp)
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=> {
      this.postagem = resp
      alert('postagem realizada com sucesso')})



}}
