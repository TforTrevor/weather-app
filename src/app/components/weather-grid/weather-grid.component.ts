import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      Validators.required, Validators.minLength(5)
    ])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void 
  {

  }

  public addZip(): void
  {
    const zipValue = this.zipForm.get("zip")?.value;

    if (zipValue && zipValue > 0 && !this.zipCodes.includes(zipValue))
    {
      this.zipCodes.push(zipValue);
    }
    else 
    {
      this.zipForm.get("zip")?.setErrors({
        notUnique: true
      })
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
    if (this.zipForm.get("zip")?.hasError("notUnique"))
    {
      return "Duplicate ZIP code.";
    }
    else if (this.zipForm.get("zip")?.hasError("minLength"))
    {
      return "ZIP code must be at least 5 digits."
    }
    else if (this.zipForm.get("zip")?.hasError("required"))
    {
      return "This field is required."
    }
    return "Error.";
  }
}
