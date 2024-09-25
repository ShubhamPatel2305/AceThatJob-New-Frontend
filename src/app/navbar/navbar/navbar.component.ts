import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  dropdownOpen: boolean[] = [false, false, false];  // For each dropdown

  toggleDropdown(index: number): void {
    this.dropdownOpen[index] = !this.dropdownOpen[index];
  }
}
