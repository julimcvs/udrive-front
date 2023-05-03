import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/interfaces/user";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppService} from "../../shared/services/app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'u-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  passwordType = 'password';
  passwordIcon = 'visibility';
  form: FormGroup;

  constructor(
    private service: AppService,
    private snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required]
      }
    )
  }

  getPasswordType() {
    if (this.passwordVisible) {
      this.passwordVisible = !this.passwordVisible;
      this.passwordIcon = "visibility_off";
      this.passwordType = "text";
      return;
    }
    this.passwordVisible = !this.passwordVisible;
    this.passwordIcon = "visibility";
    this.passwordType = "password";
  }

  auth() {
    if (this.form.invalid) return;
    const user = this.form.getRawValue() as User;
    this.service.login(user).subscribe(res => {
      if (!res.jwt) {
        this.snackBar.open('Falha na Autenticação', 'Usuário ou senha incorretos.', {
          duration: 3000
        })
      }
    })
  }

  register() {
    this.router.navigate(['register']);
  }
}
