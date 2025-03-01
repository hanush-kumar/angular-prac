import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
    `,
  ],
})
export class AppComponent {
  title = "basic-app";
}
