// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Department } from '../../../models/departments';
import { environment } from '../../../environment';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getAllDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(this.apiUrl);
    }

    getDepartmentById(id: number): Observable<Department> {
        return this.http.get<Department>(`${this.apiUrl}/${id}`);
    }

    createDepartment(user: Department): Observable<Department> {
        return this.http.post<Department>(this.apiUrl+'', user);
    }

    updateDepartment(user: Department): Observable<Department> {
        return this.http.put<Department>(`${this.apiUrl}/${user.id}`, user);
    }

    deleteDepartment(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
