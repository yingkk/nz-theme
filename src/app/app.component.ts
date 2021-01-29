import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.less'],
})
export class AppComponent {
  isCollapsed = false;
  selectedTheme = "default";

  constructor(private themeService: ThemeService) { }

  handleChange($event: string) {
    this.themeService.activeTheme($event).then();
  }

  // toggleTheme(): void {
  //   this.themeService.toggleTheme().then();
  // }
}
