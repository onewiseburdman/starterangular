import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'navicons',
  templateUrl: './navicons.component.html',
  styleUrls: ['./navicons.component.css']
})
export class naviconsComponent implements OnInit {
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