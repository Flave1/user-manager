import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { Department } from '../../../models/departments';

@Component({
  templateUrl: 'department.component.html'
})

export class DepartmentComponent {

  formData: Department = {
    name: ''
  };

  saveForm(): void {
  }

  constructor() {

  }


}
