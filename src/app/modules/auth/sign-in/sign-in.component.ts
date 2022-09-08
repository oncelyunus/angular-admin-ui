import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";


@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AuthSignInComponent implements OnInit {
    validateForm!: UntypedFormGroup;

    constructor(private fb: UntypedFormBuilder, 
      private _authService: AuthService,
      private _activatedRoute: ActivatedRoute,
      private _router: Router) {
        this.validateForm = this.fb.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required]],
          });
    }

    ngOnInit(): void {

    }

    submitForm() {
        console.log('submit', this.validateForm.value);
        this._authService.signIn(this.validateForm.value)
        .subscribe({
          next: () => {
            console.log('ı am next after login')
            const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
            this._router.navigateByUrl(redirectURL);
          },
          error: (e: any) => {
            console.log('error', e);
            alert(e);
          }
        })
    }

    resetForm(e: MouseEvent): void {
        e.preventDefault();
        this.validateForm.reset();
        for (const key in this.validateForm.controls) {
          if (this.validateForm.controls.hasOwnProperty(key)) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
          }
        }
      }

    

}