import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../_models/shopping-item';
import { BackendService } from '../_services/backend.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public isLoading: boolean = false;
  public ipAddress: String = '...';
  public items: ShoppingItem[] = [];

  constructor(
    private service: BackendService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.service.getIPAddress().subscribe(
      async (ret) => { this.ipAddress = ret.ip },
    );

    this.service.getShoppingItems().subscribe({
      next: async (ret) => { this.items = ret },
      error: (error) => { console.log(error); this.isLoading = false; },
      complete: () => { this.isLoading = false; }
    });

  }

}
