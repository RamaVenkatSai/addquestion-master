import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemovequestionComponent } from './admin/removequestion/removequestion.component';
import{AddquestionComponent} from './admin/addquestion/addquestion.component';
import{DisplayquestionComponent} from './admin/displayquestion/displayquestion.component';
import{HomepageComponent} from './homepage/homepage.component';
const routes: Routes = [
  {path:'remove',component:RemovequestionComponent},
  {path:'add',component:AddquestionComponent},
  {path:'',component:HomepageComponent},
  {path:'display',component:DisplayquestionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RemovequestionComponent,AddquestionComponent,HomepageComponent,DisplayquestionComponent];
