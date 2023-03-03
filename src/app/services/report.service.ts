import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class ReportService {

    private backendApiBaseURL = 'http://localhost:8080';

    constructor(
        private http: HttpClient) {
    }

    getReport(): Promise<any> {
        const url = `${this.backendApiBaseURL}/api/v1/dashboard/latest?type=pdf`;
        return new Promise<any>((resolve, reject) => {
            this.http.get(url, {responseType: 'text'}).toPromise()
                .then(res => { 
                    console.log(res)
                    resolve(res) 
                })  
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    }
}