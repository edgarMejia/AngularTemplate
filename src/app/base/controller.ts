import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export abstract class CrudController<T> {

  protected constructor() {
  }

  /**
   * String listo of columns to display in mat-table.
   */
  abstract displayedColumns: string[];

  /**
   * Numbers of rows per page show on page size select at the bottom of mat-table.
   */
  readonly pageSizeOptions: number[] = [5, 10, 20, 40, 100];

  /**
   * Save the selected value of the pageSizeOptions.
   */
  abstract pageSize: number = 20;

  /**
   * Contains the fetched data, used to fill mat-table.
   */
  abstract dataSource: MatTableDataSource<T>;

  abstract pageEvent: PageEvent;

  abstract resultsLength: number = 0;

  /**
   * Current page number
   */
  abstract page: number = 1;

  /**
   * Is mat-table loading the data?
   */
  abstract isLoading: boolean = false;

  abstract isTotalReached: boolean = false;

  abstract totalItems: number = 0;

  abstract search: string = '';

  /**
   * Get paginated data from api for mat-table
   */
  abstract getData(): void;

  abstract edit(data: T): void;

  abstract save(): void;

  abstract delete(id: number): void;

  protected onPaginateChange(event: any): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getData();
  }

  protected applyFilter(filterValue: string): void{
    filterValue = filterValue.trim().toLowerCase();
    this.getData();
  }
}
