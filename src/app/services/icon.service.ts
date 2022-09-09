import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) 
  {
    //Weather icons
    this.iconRegistry.addSvgIcon("01d", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/01d.svg"));
    this.iconRegistry.addSvgIcon("01n", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/01n.svg"));
    this.iconRegistry.addSvgIcon("02d", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/02d.svg"));
    this.iconRegistry.addSvgIcon("02n", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/02n.svg"));
    this.iconRegistry.addSvgIcon("03d", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/03d.svg"));
    this.iconRegistry.addSvgIcon("03n", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/03n.svg"));
    this.iconRegistry.addSvgIcon("04d", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/04d.svg"));
    this.iconRegistry.addSvgIcon("04n", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/04n.svg"));
    this.iconRegistry.addSvgIcon("09d", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/09d.svg"));
    this.iconRegistry.addSvgIcon("09n", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/09n.svg"));
    this.iconRegistry.addSvgIcon("10d", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/10d.svg"));
    this.iconRegistry.addSvgIcon("10n", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/10n.svg"));
    this.iconRegistry.addSvgIcon("11d", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/11d.svg"));
    this.iconRegistry.addSvgIcon("11n", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/11n.svg"));
    this.iconRegistry.addSvgIcon("13d", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/13d.svg"));
    this.iconRegistry.addSvgIcon("13n", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/13n.svg"));
    this.iconRegistry.addSvgIcon("50d", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/50d.svg"));
    this.iconRegistry.addSvgIcon("50n", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/openweathermap/50n.svg"));
  }
}
