import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from  '@angular/material/table';
import { ProductsRoutingModule } from './products-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { MatPaginatorModule } from  '@angular/material/paginator';
import { MatSortModule } from  '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CloudinaryModule} from '@cloudinary/ng';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

// import and register filepond file type validation plugin
import  * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import  * as FilepondPluginImageEdit from 'filepond-plugin-image-edit';
import  * as FilepondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(FilePondPluginFileValidateType,FilepondPluginImageEdit,FilepondPluginImagePreview);



@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    CloudinaryModule,
    FilePondModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule

  ]
})
export class ProductsModule { }
