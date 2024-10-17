import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Components/User/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Components/User/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'demographics',
    loadChildren: () => import('./Components/User/demographics/demographics.module').then( m => m.DemographicsPageModule)
  },
  {
    path: 'edit-demographics/:id',
    loadChildren: () => import('./Components/User/edit-demographics/edit-demographics.module').then( m => m.EditDemographicsPageModule)
  },
  {
    path: 'search-users',
    loadChildren: () => import('./Components/User/search-users/search-users.module').then( m => m.SearchUsersPageModule)
  },
  {
    path: 'fsi-profile/:username',
    loadChildren: () => import('./Components/fsi-clients/fsi-profile/fsi-profile.module').then( m => m.FSIProfilePageModule)
  },
  {
    path: 'client-demographics/:username',
    loadChildren: () => import('./Components/fsi-clients/client-demographics/client-demographics.module').then( m => m.ClientDemographicsPageModule)
  },
  {
    path: 'client-edit-demo/:id',
    loadChildren: () => import('./Components/fsi-clients/client-edit-demo/client-edit-demo.module').then( m => m.ClientEditDemoPageModule)
  },
  {
    path: 'edit-note/:id',
    loadChildren: () => import('./Components/User/edit-note/edit-note.module').then( m => m.EditNotePageModule)
  },
  {
    path: 'client-notes/:username',
    loadChildren: () => import('./Components/fsi-clients/client-notes/client-notes.module').then(m => m.ClientNotesPageModule)
  },
  {
    path: 'client-edit-note/:id',
    loadChildren: () => import('./Components/fsi-clients/client-edit-note/client-edit-note.module').then( m => m.ClientEditNotePageModule)
  },
  {
    path: 'edit-pc/:id',
    loadChildren: () => import('./Components/User/edit-pc/edit-pc.module').then( m => m.EditPcPageModule)
  },
  {
    path: 'client-pc/:username',
    loadChildren: () => import('./Components/fsi-clients/client-pc/client-pc.module').then( m => m.ClientPcPageModule)
  },
  {
    path: 'client-edit-pc/:id',
    loadChildren: () => import('./Components/fsi-clients/client-edit-pc/client-edit-pc.module').then( m => m.ClientEditPcPageModule)
  },
  {
    path: 'edit-asset/:id',
    loadChildren: () => import('./Components/User/edit-asset/edit-asset.module').then( m => m.EditAssetPageModule)
  },
  {
    path: 'client-asset/:username',
    loadChildren: () => import('./Components/fsi-clients/client-asset/client-asset.module').then( m => m.ClientAssetPageModule)
  },
  {
    path: 'client-edit-asset/:id',
    loadChildren: () => import('./Components/fsi-clients/client-edit-asset/client-edit-asset.module').then( m => m.ClientEditAssetPageModule)
  },
  {
    path: 'client-buckets/:username',
    loadChildren: () => import('./Components/fsi-clients/client-buckets/client-buckets.module').then( m => m.ClientBucketsPageModule)
  },
  {
    path: 'request-update',
    loadChildren: () => import('./Components/User/request-update/request-update.module').then( m => m.RequestUpdatePageModule)
  },
  {
    path: 'asset-overview/:username',
    loadChildren: () => import('./Components/User/asset-overview/asset-overview.module').then( m => m.AssetOverviewPageModule)
  },
  {
    path: 'client-asset-overview/:username',
    loadChildren: () => import('./Components/fsi-clients/client-asset-overview/client-asset-overview.module').then( m => m.ClientAssetOverviewPageModule)
  },
  {
    path: 'client-balance/:username',
    loadChildren: () => import('./Components/fsi-clients/client-balance/client-balance.module').then( m => m.ClientBalancePageModule)
  },
  {
    path: 'edit-liability/:id',
    loadChildren: () => import('./Components/User/edit-liability/edit-liability.module').then( m => m.EditLiabilityPageModule)
  },
  {
    path: 'client-liability/:username',
    loadChildren: () => import('./Components/fsi-clients/client-liability/client-liability.module').then( m => m.ClientLiabilityPageModule)
  },
  {
    path: 'client-edit-liability/:id',
    loadChildren: () => import('./Components/fsi-clients/client-edit-liability/client-edit-liability.module').then( m => m.ClientEditLiabilityPageModule)
  },
  {
    path: 'edit-life/:id',
    loadChildren: () => import('./Components/User/edit-life/edit-life.module').then( m => m.EditLifePageModule)
  },
  {
    path: 'client-life/:username',
    loadChildren: () => import('./Components/fsi-clients/client-life/client-life.module').then( m => m.ClientLifePageModule)
  },
  {
    path: 'client-edit-life/:id',
    loadChildren: () => import('./Components/fsi-clients/client-edit-life/client-edit-life.module').then( m => m.ClientEditLifePageModule)
  },
  {
    path: 'edit-user/:id',
    loadChildren: () => import('./Components/User/edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
  {
    path: 'client-edit-user/:id',
    loadChildren: () => import('./Components/fsi-clients/client-edit-user/client-edit-user.module').then( m => m.ClientEditUserPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
