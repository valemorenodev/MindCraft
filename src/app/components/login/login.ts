import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {
  email = '';
  password = '';

  private auth = inject(AuthService);
  private router = inject(Router);

  submit() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert('Credenciales inválidas');
      }
    });
  }
}
