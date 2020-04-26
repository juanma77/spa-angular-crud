import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialsDetailsComponent } from './components/tutorials-details/tutorials-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
    { path: 'tutorials', component: TutorialsListComponent },
    { path: 'tutorials/:id', component: TutorialsDetailsComponent },
    { path: 'add', component: AddTutorialComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

