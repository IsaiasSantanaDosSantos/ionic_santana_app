// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-references',
//   templateUrl: './references.page.html',
//   styleUrls: ['./references.page.scss'],
// })
// export class ReferencesPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
// import { IonicSlides } from "@ionic/angular";
import { register } from "swiper/element/bundle";
import Swiper from "swiper";

register();

@Component({
  selector: "app-references",
  templateUrl: "./references.page.html",
  styleUrls: ["./references.page.scss"],
})
export class ReferencesPage implements OnInit {
  @ViewChild("swiper")
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    "../../../assets/img/references/Abraao_Vasconcelo.jpg",
    "../../../assets/img/references/Fabio_Francisco.jpg",
    "../../../assets/img/references/Kim_Frana.jpg",
    "../../../assets/img/references/Leila_Santana.jpg",
  ];

  constructor() {}
  // swiperModules = [IonicSlides];
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  //  swiper = new Swiper('.swiper', {
  //   autoplay: {
  //     delay: 5000,
  //   },
  //  });
  goNext() {
    this.swiper?.slideNext();
  }
  goPrev() {
    this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any) {
    console.log("changed: ", e);
  }

  ngOnInit() {}
}
