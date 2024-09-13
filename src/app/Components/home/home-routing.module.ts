import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'notes',
        loadChildren: () => import('../User/notes/notes.module').then(m => m.NotesPageModule)
      },
      {
        path: 'pc',
        loadChildren: () => import('../User/pc/pc.module').then(m => m.PcPageModule)
      },
      {
        path: 'asset',
        loadChildren: () => import('../User/asset/asset.module').then( m => m.AssetPageModule)
      },
      {
        path: 'buckets',
        loadChildren: () => import('../User/buckets/buckets.module').then( m => m.BucketsPageModule)
      },
      {
        path: 'balance',
        loadChildren: () => import('../User/balance/balance.module').then( m => m.BalancePageModule)
      },
      {
        path: 'liabilities',
        loadChildren: () => import('../User/liabilities/liabilities.module').then( m => m.LiabilitiesPageModule)
      },
      {
        path: 'life',
        loadChildren: () => import('../User/life/life.module').then( m => m.LifePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
