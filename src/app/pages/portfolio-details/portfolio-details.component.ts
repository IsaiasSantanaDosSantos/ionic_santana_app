import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-portfolio-details",
  templateUrl: "./portfolio-details.component.html",
  styleUrls: ["./portfolio-details.component.scss"],
})
export class PortfolioDetailsComponent implements OnInit {
  @Input() project: any;
  @Input() index!: number;

  constructor() {}

  ngOnInit() {
    console.log("Project details received:", this.project);
    console.log(this.project.title);
    console.log(this.project.background);
    console.log(this.project.description);
    console.log("Index received:", this.index);
  }
}
