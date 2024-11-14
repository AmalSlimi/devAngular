import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Leav } from 'src/models/Leave';
import { LeavService } from '../leave.service';


@Component({
  selector: 'app-add-leav',
  templateUrl: './add-leav.component.html',
  styleUrls: ['./add-leav.component.css']
})
export class AddLeavComponent {

  leave: Leav = {
    leaveStartdate: new Date(),
    leaveEnddate: new Date(),
    leaveType: '',
    leaveStatus: 'PENDING', // Default status
    reason: '',
    leaveApproved: false,
    requestDate: new Date(),
    leaveApproverName: '',
    comments: '',
    leaveDaysLeft: 0,
    userId: 1 // Assuming the user is logged in and has an ID (this should be dynamic)
  };

  constructor(private leavService: LeavService, private router: Router) { }

  onSubmit(): void {
    this.leavService.addLeave(this.leave).subscribe(
      (response) => {
        console.log('Leave added successfully', response);
        this.router.navigate(['/leav-list']); // This will now work
      },
      (error) => {
        console.error('There was an error adding the leave!', error);
      }
    );
  }
  
}
