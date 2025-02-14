import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: "app-root",
  imports: [HeaderComponent, HomeComponent],
  template: `
    <app-header />
    <main>
      <app-home />
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
