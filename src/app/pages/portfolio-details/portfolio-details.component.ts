import { Component, OnInit, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-portfolio-details",
  templateUrl: "./portfolio-details.component.html",
  styleUrls: ["./portfolio-details.component.scss"],
})
export class PortfolioDetailsComponent implements OnInit {
  @Input() project: any;
  @Input() index!: number;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
  }
  getTranslated(key: string): string {
    return this.translate.instant(key);
  }
}
