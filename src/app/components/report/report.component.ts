import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})

export class GetReport implements OnInit {
    pdf: SafeResourceUrl;

    constructor(
        private reportService: ReportService,
        public sanitizer:DomSanitizer) { }

    ngOnInit() {
        this.printPdf();
    }

    printPdf() {
        console.log("hola")
        this.reportService.getReport()
            .then(data =>
                this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(data)
            )
            .catch((error) => {
                console.log(error);
            })
    }
}