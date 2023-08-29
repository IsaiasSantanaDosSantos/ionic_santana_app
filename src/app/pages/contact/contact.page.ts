import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
})
export class ContactPage implements OnInit, OnDestroy {
  @ViewChild("contactForm") myForm!: HTMLFormElement;
  @ViewChild("windowSend", { static: false }) windowSend!: ElementRef;
  name: string = "";
  email: string = "";
  message: string = "";
  errorMessage: string = "";
  showAirplaneIcon: boolean = true;
  private interval: any;
  showWindowSend: boolean = false;

  constructor(private translate: TranslateService) {}
  ngOnInit() {
    this.interval = setInterval(() => {
      this.showAirplaneIcon = !this.showAirplaneIcon;
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  submitForm(event: Event) {
    event.preventDefault();
    const nameRegex = /^[a-zA-Z ]{6,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!this.name) {
      this.errorMessage = this.getTranslated("CONTACT.ERROR_NAME_REQUIRED");
      return;
    } else if (!nameRegex.test(this.name)) {
      this.errorMessage = this.getTranslated("CONTACT.ERROR_NAME_INVALID");
      return;
    }
    if (!this.email) {
      this.errorMessage = this.getTranslated("CONTACT.ERROR_EMAIL_REQUIRED");
      return;
    } else if (!emailRegex.test(this.email)) {
      this.errorMessage = this.getTranslated("CONTACT.ERROR_EMAIL_INVALID");
      return;
    }
    if (!this.message) {
      this.errorMessage = this.getTranslated("CONTACT.ERROR_MESSAGE_REQUIRED");
      return;
    }
    this.name = "";
    this.email = "";
    this.message = "";
    this.errorMessage = "";
    this.handleSubmit(this.myForm["nativeElement"]);
  }
  handleSubmit(formulario: HTMLFormElement) {
    this.showWindowSend = true;
    setTimeout(() => {
      this.showWindowSend = false;
    }, 12000);

    const formData = new FormData(formulario);

    fetch(formulario.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.warn(response);
      })
      .catch((error) => {
        console.warn(error);
      });
  }
  getTranslated(key: string): string {
    return this.translate.instant(key);
  }
  closedWiindow() {
    this.showWindowSend = false;
  }
}
