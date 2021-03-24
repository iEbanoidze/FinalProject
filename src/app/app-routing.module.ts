import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AnchorTagsComponent } from './anchor-tags/anchor-tags.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { GridComponent } from './grid/grid.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UsersComponent } from './users/users.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent}, 
  {path: 'video', component: VideoBackgroundComponent},
  {path: 'search', component: UserSearchComponent},
  {path: 'tags', component: AnchorTagsComponent},
  {path: 'center', component: CenterContentComponent},
  {path: 'grid', component: GridComponent},
  {path: 'pipe', component: PipeExampleComponent},
  {path: '', redirectTo: 'video', pathMatch: 'full'}
];
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
