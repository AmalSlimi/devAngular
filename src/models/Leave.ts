export interface Leav {
    leaveId?: number; // Optional for new leave
    leaveStartdate: Date;
    leaveEnddate: Date;
    leaveType: string;
    leaveStatus: string;
    reason: string;
    leaveApproved: boolean;
    requestDate: Date;
    leaveApproverName: string;
    comments: string;
    leaveDaysLeft: number;
    userId: number; // User who is requesting the leave
  }
  