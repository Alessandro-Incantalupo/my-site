import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  navLinks = [
    {label: "Home", url: ""},
    {label: "About me", url: "/about-me"},
    {label: "Contacts", url: "/contacts"},
  ]

}
