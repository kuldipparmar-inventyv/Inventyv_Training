import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  AfterViewInit,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
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
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() user!: User;

  @Output() statusChange = new EventEmitter<boolean>();

  @ViewChild('nameInput') nameInputRef!: ElementRef;

  @ViewChildren(MatButton) buttons!: QueryList<MatButton>;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit: Data received', this.user);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Input property changed', changes);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: Buttons found:', this.buttons.length);
    if (this.nameInputRef) {
      this.nameInputRef.nativeElement.focus();
    }
  }

  toggleStatus() {
    this.user.isActive = !this.user.isActive;
    this.statusChange.emit(this.user.isActive);
  }
}
