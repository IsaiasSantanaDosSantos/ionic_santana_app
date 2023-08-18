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

  slideItems = {
    "Abraao":[
      {
        "img": "../../../assets/img/references/Abraao_Vasconcelo.jpg",
        "nome":"Abraão Vasconcelo",
        "office":"Desenvolvedor Back End .NET",
        "testimony":"Tenho o prazer de recomendar Isaias como um talentoso Front End Developer. Durante nosso tempo de trabalho juntos, fiquei impressionado com suas habilidades técnicas e dedicação ao desenvolvimento front-end.Isaias demonstrou um profundo conhecimento em HTML, CSS e JavaScript, além de estar sempre atualizado com as tendências e melhores práticas da área. Sua capacidade de transformar designs em interfaces de usuário envolventes é notável.Além disso, Isaias é um colega de equipe colaborativo e comunicativo. Ele está sempre disposto a ajudar e contribuir para o sucesso dos projetos em que está envolvido. Atenciosamente,Abraão Henrique Vasconcelos",
      }
    ],
    "Fabio":[
      {
        "img": "../../../assets/img/references/Fabio_Francisco.jpg",
        "nome":"Fábio Francisco de Paula",
        "office":"Gerente de logística",
        "testimony":"Recomendo o Isaías, pois trabalhamos em uma multinacional e o Isaías foi um profissional acima da média, buscando sempre conhecimento e solução de problemas, realmente uma pessoa determinada a contribuir no crescimento da Empresa e pessoal, portanto a Empresa que o contratar estará contratando uma pessoa que fará a diferença e sempre estará pronto a agregar ao time trabalhando com muita segurança e amor ao que faz.",
      }
    ],
    "Kim":[
      {
        "img": "../../../assets/img/references/Kim_Frana.jpg",
        "nome":"Kim Frana Kunz",
        "office":"Desenvolvedor Web Front-end ReactJS Pleno",
        "testimony":"Tive o prazer de poder acompanhar Isaías em sua carreira. Ele sem sombra de dúvidas tem muito a somar em qualquer time de desenvolvimento. Como algumas características desse profissional, se destacam suas habilidades de comunicação em equipe, a responsabilidade nas suas entregas, sua busca constante em se aprimorar em suas hard skills, a proatividade nas entregas das suas demandas, entre outras. Além das suas hard skills é um profissional diferenciado nas Soft skills, o que faz com que trabalhe muito bem integrado a qualquer time.",
      }
    ],
    "Leila":[
      {
        "img": "../../../assets/img/references/Leila_Santana.jpg",
        "nome":"Leila Santana",
        "office":"Manicure... Operadora de Caixa na Concessionária das Rodovias Ayrton Senna e Carvalho Pinto S.A.",
        "testimony":"O Isaias é dedicado e resiliente e não se deixa vencer pelas adversidades. O Isaias sempre tratou os clientes com simplicidade e empatia. Adicionalmente, possui qualidades enquanto pessoa, fundamentais em qualquer organização.",
      }
    ]
  }
  constructor() {}
  // swiperModules = [IonicSlides];
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }


  goNext() {
    this.swiper?.slideNext();
  }
  goPrev() {
    this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any) {
    console.log(this.images);
  }

  ngOnInit() {}
}
