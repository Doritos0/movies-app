import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Users } from './pages/users/users';
import { Movies } from './pages/movies/movies';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'movies', component: Movies},
    {path: 'users', component: Users},
    {path: 'profile', component: Profile}
];
