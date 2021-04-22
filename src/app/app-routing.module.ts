import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TriangleComponent } from './components/triangle/triangle.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
    { path: 'triangle', component: TriangleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
