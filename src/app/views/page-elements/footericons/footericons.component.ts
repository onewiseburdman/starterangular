import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'footericons',
  templateUrl: './footericons.component.html',
  styleUrls: ['./footericons.component.css']
})
export class footericonsComponent implements OnInit {
    @Input() icons: any;
    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
      console.log(this.icons);
    }

    public sanitizedHtml(value) {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}