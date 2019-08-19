import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.employeeForm = new FormGroup({
    //   fullName: new FormControl(),
    //   email: new FormControl(),
    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     experienceInYears: new FormControl(),
    //     proficiency: new FormControl()
    //   })
    // })

    this.employeeForm = this.fb.group({
      id: [],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner']
      })
    })

    this.employeeForm.valueChanges.subscribe(
      (value: any) => { console.log(value); }
    );

  }

  logKeyValuePair(group: FormGroup): void {
    // console.log(Object.keys(group.controls));
    Object.keys(group.controls).forEach((key:string) => { 
      const abstrctControl = group.get(key);
      if(abstrctControl instanceof FormGroup){
        this.logKeyValuePair(abstrctControl);
        // abstrctControl.disable();
      } else {
        console.log('Key = ' + key + ' Value = ' + abstrctControl.value);
        abstrctControl.markAsDirty();
      }
    });
  }

  onSubmit(): void {
    console.log(this.employeeForm.value);
    // console.log(this.employeeForm.controls.email.touched);
  }

  onLoadData(): void {
    // this.employeeForm.setValue({
    //   fullName: 'Sagar Pathare',
    //   email: 'sagar.pathare@saama.com',
    //   skills: {
    //     skillName: 'Angular',
    //     experienceInYears: 2.5,
    //     proficiency: 'beginner'
    //   }
    // })

    // this.employeeForm.patchValue({
    //   fullName: 'Sagar',
    //   email: 'sagar.pathare@saama.com',
    //   skills: {
    //     skillName: 'Angular',
    //     experienceInYears: 2.5,
    //     proficiency: 'beginner'
    //   }
    // })

    this.logKeyValuePair(this.employeeForm);
  }

}
