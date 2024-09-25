import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HomeComponent } from './home/home.component'; // Import your standalone HomeComponent

export const routes: Routes = [
  {
    path: '', 
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) // Lazy load the HomeComponent
  },
  { 
    path: '**', redirectTo: ''  // Redirect unknown paths to the home page
  }
];
