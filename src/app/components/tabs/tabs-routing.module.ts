import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'users',
        loadChildren: () => import('../../pages/users/users.module').then(m => m.UsersPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../../pages/user/user.module').then(m => m.UserPageModule) // Add this line for generic /tabs/user
      },
      {
        path: 'user/:login',
        loadChildren: () => import('../../pages/user/user.module').then(m => m.UserPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/users',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
