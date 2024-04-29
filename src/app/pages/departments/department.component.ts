import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { environment } from '../../../environment';

@Component({
  templateUrl: 'department.component.html'
})

export class DepartmentComponent {
  dataSource: any;
  priority: any[];

  constructor() {
    this.dataSource = {
      store: {
        version: 1,
        type: 'department',
        key: 'Task_ID',
        url: environment.apiUrl+'departments'
      },
      expand: 'ResponsibleEmployee',
      select: [
        'Task_ID',
        'Task_Subject',
        'Task_Start_Date',
        'Task_Due_Date',
        'Task_Status',
        'Task_Priority',
        'Task_Completion',
        'ResponsibleEmployee/Employee_Full_Name'
      ]
    };
    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];
  }
}
