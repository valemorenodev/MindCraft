import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',                                                                                                                                                                                                  
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',

})
export class Login {
  email = '';
  password = '';

  private auth = inject(AuthService);
  private router = inject(Router);

  submit() {
    if (!this.email || !this.password) return;

    this.auth.login(this.email, this.password).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        alert(err?.error?.message || 'Credenciales inválidas');
      }
    });
  }
}
