import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-weather-grid',
  templateUrl: './weather-grid.component.html',
  styleUrls: ['./weather-grid.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: '0%' }),
        animate('1000ms ease-out', style({ transform: 'translateX(0%)', opacity: '100%' }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ transform: 'translateX(-100%)', opacity: '0%', height: '0px', marginBottom: '-1rem' }))
      ])
    ])
  ]
})
export class WeatherGridComponent implements OnInit 
{
  public zipCodes: number[] = [33431, 32608, 11581, 33];
  public zipForm = this.formBuilder.group({
    zip: new FormControl<number | null>(null, [
      this.zipValidator()
    ])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void 
  {

  }

  public addZip(): void
  {
    const zipValue = this.zipForm.get("zip")?.value;

    if (zipValue && this.zipForm.valid)
    {
      this.zipCodes.push(zipValue);
    }
  }

  public removeZip(zip: number): void
  {
    if (this.zipCodes.includes(zip))
    {
      this.zipCodes.splice(this.zipCodes.indexOf(zip), 1);
    }
  }

  public getErrorMessage(): string
  {
    if (this.zipForm.get("zip")?.hasError("duplicate"))
    {
      return "Duplicate ZIP code.";
    }
    else if (this.zipForm.get("zip")?.hasError("length"))
    {
      return "ZIP code must be at least 5 digits."
    }
    return "Error.";
  }

  private zipValidator(): ValidatorFn 
  {
    return (control: AbstractControl): ValidationErrors | null => 
    {
      const value = String(control.value);
      
      //Length check
      if (value.length < 5)
      {
        return {length: true};
      }

      //Duplicate check
      if (this.zipCodes.includes(parseInt(value)))
      {
        return {duplicate: true};
      }

      return null;
    };
  }
}
