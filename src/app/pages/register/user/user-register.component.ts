import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AppService} from "../../../shared/services/app.service";
import {UniversityService} from "../../../shared/services/university.service";

@Component({
  selector: 'u-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  form: FormGroup;
  universities: any[];

  constructor(
    private service: AppService,
    private snackBar: MatSnackBar,
    private universityService: UniversityService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.setUniversities();
  }

  buildForm() {
    this.form = this.formBuilder.group({
        fullName: [null, Validators.required],
        university: [null, Validators.required],
        registrationNumber: [null, Validators.required],
        cpf: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        phoneNumber: [null, Validators.required],
      }
    )
  }

  register() {
    if (this.form.invalid) return;
    const user = this.form.getRawValue();
    this.service.register(user).subscribe(res => {
      if (!res.jwt) {
        this.snackBar.open('Erro', 'Falha ao criar usuário.', {
          duration: 3000
        })
      }
    })
  }

  setUniversities() {
    this.universityService.findAll().subscribe(res => {
      this.universities = res;
    });
  }
}
