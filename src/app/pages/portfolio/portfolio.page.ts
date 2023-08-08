// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-portfolio',
//   templateUrl: './portfolio.page.html',
//   styleUrls: ['./portfolio.page.scss'],
// })
// export class PortfolioPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../../portfolio.service";
import { PortfolioDetailsComponent } from "../../portfolio-details/portfolio-details.component";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.page.html",
  styleUrls: ["./portfolio.page.scss"],
})
export class PortfolioComponent implements OnInit {
  public showDetails = false;
  public selectedProject: any = null;
  public selectedIndex: any = null;
  public projects: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getProjects().subscribe((data) => {
      // this.projects = data.Projects;
      this.projects = data;
    });
  }

  handleDetailsClick(project: any, index: any): void {
    this.selectedProject = project;
    this.selectedIndex = index;
    this.showDetails = true;
  }

  closeDetails(): void {
    this.showDetails = false;
  }
}
