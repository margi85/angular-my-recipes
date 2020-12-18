import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { storageServiceProvider } from './storage.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  providers: [
    storageServiceProvider
  ],
})
export class CoreModule { }
