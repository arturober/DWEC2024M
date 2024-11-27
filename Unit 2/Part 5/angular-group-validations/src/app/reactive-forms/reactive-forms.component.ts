import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { oneCheckedValidator } from '../shared/validators/one-checked.validator';
import { JsonPipe } from '@angular/common';
import { equalValues } from '../shared/validators/equal-values.validator';
import { ValidationClassesDirective } from '../shared/directives/validation-classes.directive';

@Component({
  selector: 'reactive-forms',
  imports: [ReactiveFormsModule, JsonPipe, ValidationClassesDirective],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  days = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
  daysOpen = new Array(7).fill(true);

  #fb = inject(NonNullableFormBuilder);

  daysForm = this.#fb.group({
    daysOpen: this.#fb.array(
      new Array(7).fill(0).map(() => this.#fb.control(false)), // Genera 7 objetos FormControl con valor false
      { validators: [oneCheckedValidator] }
    ),
  });

  emailGroupForm = this.#fb.group({
    emailGroup: this.#fb.group({
      email: ['', [Validators.required, Validators.email]],
      repeatEmail: '',
    }, { validators: equalValues('email','repeatEmail') })
  })
}
