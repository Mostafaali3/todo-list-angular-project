import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Todo } from '../../models/todo';
import { HttpErrorResponse } from '@angular/common/http';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  displayedColumns = ['title', 'description', 'actions'];
  dataSource!: MatTableDataSource<Todo>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  todo: Todo[] = [];

  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.getAllData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = (filterValue as string).trim().toLowerCase();
  }

  getAllData() {
    this.todoService.getAllData().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      complete: () => {
        console.log('data returned successfully');
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      },
    });
  }

  getAllTodo() {
    // this.todoService.getAllTodo().subscribe({
    //   next: (res) => {
    //     this.dataSource = new MatTableDataSource(res);
    //     this.dataSource.paginator = this.paginator;
    //   },
    //   complete: () => {},
    //   error: (err: HttpErrorResponse) => {},
    // });
  }
  addTodo() {
    // this.dialog
    //   .open(AddTodoComponent, {
    //     width: '600px',
    //     height: 'auto',
    //     maxHeight: '500px',
    //     disableClose: true,
    //   })
    //   .afterClosed()
    //   .subscribe({
    //     next: (res) => {},
    //     complete: () => {
    //       this.getAllTodo();
    //     },
    //   });
  }
  delete(id: any) {
    // this.todoService.delete(id).subscribe({
    //   next: (res) => {
    //     this.getAllTodo();
    //   },
    //   complete: () => {},
    //   error: (err: HttpErrorResponse) => {
    //     console.log(err.error);
    //   },
    // });
  }
}
