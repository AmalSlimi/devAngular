import { Component, OnInit } from '@angular/core';
import { Leav } from 'src/models/Leave';
import { LeavService } from '../leave.service';


@Component({
  selector: 'app-leav-list',
  templateUrl: './leav-list.component.html',
  styleUrls: ['./leav-list.component.css']
})
export class LeavListComponent implements OnInit {
  leaves: Leav[] = [];

  constructor(private leavService: LeavService) {}

  ngOnInit(): void {
    this.getLeaves();
  }

  getLeaves(): void {
    // Fetch all leaves (adjust the service if needed)
    this.leavService.getAllLeaves().subscribe((data: Leav[]) => {
      this.leaves = data;
    });
  }
}
