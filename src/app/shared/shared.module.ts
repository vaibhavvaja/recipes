import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModalComponent } from "./modal/modal.component";
import { ErrorModalComponent } from "./modal/error-modal/error-modal.component";

@NgModule({
  declarations: [ModalComponent, ErrorModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent, ErrorModalComponent],
})
export class SharedModule {}
