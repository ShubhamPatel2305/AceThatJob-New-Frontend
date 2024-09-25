import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme=false;

  constructor() { 
    this.loadTheme();
  }

  toggleTheme(){
    this.isDarkTheme=!this.isDarkTheme;
    this.applyTheme();
  }

  private applyTheme(){
    if(this.isDarkTheme){
      document.body.classList.add('dark');
      localStorage.setItem('theme','dark');
    }else{
      document.body.classList.add('light');
      localStorage.setItem('theme','light');
    }
  }

  private loadTheme(){
    const savedTheme=localStorage.getItem('theme');
    if(savedTheme){
      this.isDarkTheme=savedTheme==='dark';
      this.applyTheme();
    }
  }
}
