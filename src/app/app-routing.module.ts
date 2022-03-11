import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    data: {
      title: 'Trang chủ',
    },
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then((m) => m.BlogModule),
    data: {
      title: 'Tin tức',
    },
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
    data: {
      title: 'Liên hệ',
    },
  },
  {
    path: 'about-us',
    loadChildren: () => import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
    data: {
      title: 'Giới thiệu',
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('./modules/notfound/notfound.module').then((m) => m.NotfoundModule),
    data: {
      title: 'Trang không tồn tại',
    },
  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule, HttpClientModule],
})
export class AppRoutingModule {}
