import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Subject, takeUntil } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [NgClass, CommonModule, FormsModule, SearchPipe],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit, OnDestroy {

  destroy$: Subject<void> = new Subject<void>()

  userService = inject(UserService)

  usersList = signal<any>([])

  searchValue = ''

  ngOnInit(): void {
    this.userService.getUsers().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        console.log('all users api response: ', res);
        this.usersList.set(res)
      },
      error: (error) => {
        console.log('api error:', error);

      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }



}
