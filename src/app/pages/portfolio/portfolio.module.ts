import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PortfolioComponentRoutingModule } from "./portfolio-routing.module";

import { PortfolioComponent } from "./portfolio.page";
import { PortfolioDetailsComponent } from "../portfolio-details/portfolio-details.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfolioComponentRoutingModule,
  ],
  declarations: [PortfolioComponent, PortfolioDetailsComponent],
})
export class PortfolioPageModule {}
