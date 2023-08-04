import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }
  getTranslated(key: string): string {
    return this.translate.instant(key);
  }
}
