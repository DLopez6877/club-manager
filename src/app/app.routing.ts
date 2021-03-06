import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ClubComponent } from './club/club.component';
import { ClubsComponent } from './clubs/clubs.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'club',
    component: ClubComponent
  },
  {
    path: 'clubs',
    component: ClubsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
