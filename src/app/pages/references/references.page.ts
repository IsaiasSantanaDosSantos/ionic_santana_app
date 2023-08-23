import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { register } from "swiper/element/bundle";
import { TranslateService } from "@ngx-translate/core";

register();

@Component({
  selector: "app-references",
  templateUrl: "./references.page.html",
  styleUrls: ["./references.page.scss"],
})
export class ReferencesPage implements OnInit {
  @ViewChild("swiper")
  swiperRef: ElementRef | undefined;
  // swiper?: Swiper;

  constructor(private translate: TranslateService) {}

  getTranslated(key: string): string {
    return this.translate.instant(key);
  }

  swiperReady() {}

  goNext() {
    // this.swiper?.slideNext();
  }
  goPrev() {
    // this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any) {
    // console.log(this.images);
  }

  ngOnInit() {}
}
