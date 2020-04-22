import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list.component';
import { TutorialsDetailsComponent } from './components/tutorials-details.component';
import { AddTutorialComponent } from './components/add-tutorial.component';


const routes: Routes = [
    { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
    { path: 'tutorials', component: TutorialsDetailsComponent },
    { path: 'tutorials/:id', component: AddTutorialComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}