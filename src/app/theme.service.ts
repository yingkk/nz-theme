import { Injectable } from '@angular/core';

enum ThemeType {
  dark = 'dark',
  default = 'default',
  first = 'first'
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = ThemeType.default;
  originTheme = ThemeType.default;

  constructor() { }

  // private reverseTheme(theme: string): ThemeType {
  //   // return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark;
  //   return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark;
  // }

  private getCurrentTheme(theme: string): ThemeType {
    if (theme === ThemeType.dark) {
      return ThemeType.dark;
    }
    if (theme === ThemeType.first) {
      return ThemeType.first;
    }
    return ThemeType.default;
  }

  private removeUnusedTheme(theme: ThemeType): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle) {
      document.head.removeChild(removedThemeStyle);
    }
  }

  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  public loadTheme(firstLoad = true): Promise<Event> {
    const theme = this.currentTheme;
    if (firstLoad) {
      document.documentElement.classList.add(theme);
    }
    return new Promise<Event>((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        (e) => {
          if (!firstLoad) {
            document.documentElement.classList.add(theme);
          }
          // this.removeUnusedTheme(this.reverseTheme(theme));
          if (this.currentTheme !== this.originTheme) {
            this.removeUnusedTheme(this.getCurrentTheme(this.originTheme));
          }
          resolve(e);
        },
        (e) => reject(e)
      );
    });
  }

  // public toggleTheme(): Promise<Event> {
  //   this.currentTheme = this.reverseTheme(this.currentTheme);
  //   return this.loadTheme(false);
  // }

  public activeTheme(theme: string): Promise<Event> {
    this.originTheme = this.currentTheme;
    this.currentTheme = this.getCurrentTheme(theme);
    return this.loadTheme(false);
  }
}
