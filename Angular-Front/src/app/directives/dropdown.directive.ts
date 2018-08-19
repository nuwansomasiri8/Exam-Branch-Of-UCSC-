import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[formDropdown]'
})
export class DropdownDirective {

  constructor(private element:ElementRef) {
    
   }

}
