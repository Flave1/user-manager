import { Component, EventEmitter, Output } from '@angular/core';
import 'devextreme/data/odata/store';
import { SubDepartment } from '../../../models/SubDepartment';
import { DepartmentService } from '../../shared/services/department.service';

@Component({
  templateUrl: 'sub-department.component.html'
})

export class SubDepartmentComponent {

  formData: SubDepartment = {
    name: '',
    departmentId: 0
  };
  departmentOptions: any = {
    dataSource: [],
    displayExpr: 'name',
    valueExpr: 'id',
    placeholder: 'Select Department'
  };
  @Output() subDepartmentAdded = new EventEmitter<SubDepartment>();

  constructor(private departmentService: DepartmentService) {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(departments => {
      this.departmentOptions.dataSource = departments;
    });
  }

  addSubDepartment(): void {
    this.subDepartmentAdded.emit(this.formData);
    this.formData = { name: '', departmentId: 0 };
  }
}
