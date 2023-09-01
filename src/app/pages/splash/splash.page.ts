import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.page.html",
  styleUrls: ["./splash.page.scss"],
})
export class SplashPage implements OnInit, AfterViewInit {
  words: string[] = [];
  currentWordIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  text = "";

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl("home");
    }, 5000);
    this.words = ["Web Developer"];
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.type();
    }, 1300);
  }

  type() {
    const currentWord = this.words[this.currentWordIndex];
    const isComplete = !this.isDeleting && this.text === currentWord;
    const isDeletingComplete = this.isDeleting && this.text === "";

    if (isComplete) {
      this.isDeleting = true;
      setTimeout(() => {
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        setTimeout(() => {
          this.type();
        }, 500);
      }, 1500);
    } else if (isDeletingComplete) {
      this.text = "";
      setTimeout(() => {
        this.type();
      }, 500);
    } else if (this.isDeleting) {
      this.text = currentWord.slice(0, this.text.length - 1);
      setTimeout(() => {
        this.type();
      }, 100);
    } else {
      this.text = currentWord.slice(0, this.text.length + 1);
      setTimeout(() => {
        this.type();
      }, 200);
    }
  }
}
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-splash',
//   templateUrl: './splash.page.html',
//   styleUrls: ['./splash.page.scss'],
// })
// export class SplashPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
