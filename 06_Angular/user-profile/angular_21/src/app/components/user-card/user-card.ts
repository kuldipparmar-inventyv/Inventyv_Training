import {
  Component,
  ElementRef,
  input,
  output,
  viewChild,
  viewChildren,
  effect,
  linkedSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCardComponent {
  user = input.required<any>();

  statusChange = output<boolean>();

  nameInputQuery = viewChild<ElementRef>('nameInput');
  actionButtonsQuery = viewChildren(MatButton);

  editableUser = linkedSignal(() => this.user());

  ngAfterViewInit() {
    console.log('Buttons found:', this.actionButtonsQuery().length);
    this.nameInputQuery()?.nativeElement.focus();
  }

  toggleStatus() {
    this.editableUser.update((u) => ({ ...u, isActive: !u.isActive }));
    this.statusChange.emit(this.editableUser().isActive);
  }
}
