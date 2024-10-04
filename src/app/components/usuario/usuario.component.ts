import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  userForm: FormGroup;
  users: Array<{ email: string, password: string, role: string }> = [];
  isEditMode = false;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['admin', Validators.required]
    });
  }

  onSubmit() {
    const userData = this.userForm.value;

    if (this.isEditMode && this.editingIndex !== null) {
    
      this.users[this.editingIndex] = userData;
    } else {
    
      this.users.push(userData);
    }

  
    this.clearForm();
  }

 
  editUser(index: number) {
    const user = this.users[index];
    this.userForm.patchValue(user);
    this.isEditMode = true;
    this.editingIndex = index;
  }

 
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

 
  cancelEdit() {
    this.clearForm();
  }


  clearForm() {
    this.userForm.reset({
      email: '',
      password: '',
      role: 'admin'
    });
    this.isEditMode = false;
    this.editingIndex = null;
  }
}
