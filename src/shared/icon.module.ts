import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from '@shared/components/faicon/faicon.component'

@NgModule({
  declarations:[
    FaIconComponent
  ],
  imports: [FontAwesomeModule],
  exports: [
    FontAwesomeModule,
    FaIconComponent
  ]
})
export class IconModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(far);
  }
}
