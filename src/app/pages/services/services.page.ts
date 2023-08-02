import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.page.html",
  styleUrls: ["./services.page.scss"],
})
export class ServicesPage implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
  getTranslated(key: string): string {
    return this.translate.instant(key);
  }
}
