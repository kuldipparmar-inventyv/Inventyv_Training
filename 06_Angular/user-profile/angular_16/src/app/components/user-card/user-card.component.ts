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
import { MatButton } from '@angular/material/button';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() user!: User;

  @Output() statusChange = new EventEmitter<boolean>();

  @ViewChild('nameInput') nameInputRef!: ElementRef;

  @ViewChildren(MatButton) buttons!: QueryList<MatButton>;

  constructor() {
    console.log('Constructor: Component initialized');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Data received', this.user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input properties changed', changes);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Buttons found:', this.buttons.length);

    if (this.nameInputRef) {
      this.nameInputRef.nativeElement.focus();
    }
  }

  toggleStatus(): void {
    this.user.isActive = !this.user.isActive;
    this.statusChange.emit(this.user.isActive);
  }
}
