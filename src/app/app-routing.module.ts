import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
    path: 'demographics/:username',
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
  // {
  //   path: 'notes',
  //   loadChildren: () => import('./Components/User/notes/notes.module').then( m => m.NotesPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
