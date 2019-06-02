
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatFormFieldModule,
  MatSelectModule, MatRadioModule, MatButtonToggleModule, MatDividerModule, MatListModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, 
} from '@angular/material';

@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatListModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatSelectModule,
   MatFormFieldModule,
   MatRadioModule,
   MatButtonToggleModule,
   MatDividerModule,
   MatListModule,
   MatCheckboxModule,
   MatDatepickerModule,
   MatNativeDateModule,
   ],
})
export class CustomMaterialModule { }