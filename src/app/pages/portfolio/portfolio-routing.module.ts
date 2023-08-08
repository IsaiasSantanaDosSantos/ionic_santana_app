import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { PortfolioPage } from './portfolio.page';
import { PortfolioComponent } from './portfolio.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioComponentRoutingModule {}
