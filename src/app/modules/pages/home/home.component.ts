import {Component, OnInit} from "@angular/core";

declare let particlesJS: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    particlesJS.load("particles-js", "assets/particles.json", function () {
    });

  }


}
