import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { RowerDetailComponent } from './rower-detail/rower-detail.component';
import { UserComponent } from './user/user.component';
import { NewFormComponent } from './new-form/new-form.component';
import { EditRowerComponent } from './edit-rower/edit-rower.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'rowers/:id',
    component: RowerDetailComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'new-form',
    component: NewFormComponent
  },
  {
    path: 'edit-rower',
    component: EditRowerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
