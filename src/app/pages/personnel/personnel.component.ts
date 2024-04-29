import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { Personnel } from '../../../models/personnel';
import { DepartmentService } from '../../shared/services/department.service';

@Component({
  templateUrl: 'personnel.component.html'
})

export class PersonnelComponent {
  formData: Personnel = {
    name: '',
    surname: '',
    placeOfBirth: '',
    dateOfBirth: new Date(),
    gender: '',
    department: '',
    subDepartment: '',
    entryDate: new Date()
  };

  departmentOptions: any = {
    dataSource: [],
    displayExpr: 'name',
    valueExpr: 'id',
    placeholder: 'Select Department'
  };

  subDepartmentOptions: any = {
    dataSource: [],
    displayExpr: 'name',
    valueExpr: 'id',
    placeholder: 'Select Sub-Department'
  };

  constructor(private departmentService: DepartmentService) {
   this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(departments => {
      this.departmentOptions.dataSource = departments;
    });
  }

  loadSubDepartments(departmentId: any): void {
    this.departmentService.getDepartmentById(departmentId).subscribe(subDepartments => {
      this.subDepartmentOptions.dataSource = subDepartments;
    });
  }

  saveForm(): void {
    console.log('data', this.formData);
  }
}
