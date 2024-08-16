import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'notes/:username',
        loadChildren: () => import('../User/notes/notes.module').then(m => m.NotesPageModule)
      },
      {
        path: 'pc/:username',
        loadChildren: () => import('../User/pc/pc.module').then(m => m.PcPageModule)
      },
      {
        path: 'asset/:username',
        loadChildren: () => import('../User/asset/asset.module').then( m => m.AssetPageModule)
      },
      {
        path: 'buckets',
        loadChildren: () => import('../User/buckets/buckets.module').then( m => m.BucketsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
