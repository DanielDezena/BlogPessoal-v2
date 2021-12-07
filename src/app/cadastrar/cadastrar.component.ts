import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { 
    
  }
  confirmarSenha: string
  tipoUsuario: string

  user: User = new User;
  ngOnInit() {
    window.scroll(0,0)

    
  }

  confirmSenha(event:any) {
    this.confirmarSenha = event.target.value
  }

    tipoUser(event:any){
      this.tipoUsuario = event.target.value
    }

    cadastrar(){
      this.user.tipo = this.tipoUsuario
      if(this.user.senha == this.confirmarSenha){
        this.authService.cadastrar(this.user).subscribe((resp: User) => {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert('conta criada!')
        })
      }else{
        alert('as senhas estão incorretas!')
      }
    }
}
