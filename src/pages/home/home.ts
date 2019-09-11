import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { } from 'googlemaps';
import { HttpClient } from "@angular/common/http";
import { FarmerInformationComponent } from '../../components/farmer-information/farmer-information';
import { LocationsProvider } from "../../providers/locations/locations";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  location = [
    {
      idGroup: 1,
      nameGroupConsum: "Grupo de Consumo Americana",
      history: "O grupo teve início em 07 de agosto de 2017, foi realizada uma formação e conversa para decidir questões sobre as entregas, junto com os primeiros consumidores. Atualmente não é realizada formação inicial, no entanto é feita uma conversa explicativa sobre o grupo, cestas, modo de produção e comercialização antes de entrarem no grupo.",
      adress: "R. José Bonifácio, 381 - Chácara Machadinho I, Americana - SP, 13478-040",
      deliveres: "Semanalmente às Segundas-Feiras",
      hour: "18h30 ás 20h"
    },
    {
      idGroup: 2,
      nameGroupConsum: "Grupo de Consumo Estrela Livre",
      history: "O grupo teve início em 31 de agosto de 2017, foi realizada uma formação junto com os primeiros consumidores, posteriormente ao início do grupo mais duas formações já foram realizadas. No entanto Este grupo é exclusivo para os professores, técnicos e estudantes do IFSP e também para os servidores do CTI",
      adress: "CTI Renato Archer - Av. Comendador Aladino Selmi, s/n - Chácaras Campos dos Amarais, Campinas - SP, 13069-901",
      deliveres: "Quinzenalmente às 1ªs (primeiras) e 3ªs (terceiras) quartas-feiras de cada mês",
      hour: "14h as 15h"
    },
    {
      idGroup: 3,
      nameGroupConsum: "Grupo de Consumo Sindicato dos Petroleiros / Campinas",
      history: "O grupo teve início em 10 de agosto de 2017, foi realizada uma formação junto com os primeiros consumidores, posteriormente uma conversa para decidir questões sobre as entregas. Atualmente não é realizada formação inicial, no entanto é feita uma conversa explicativa sobre o grupo, cestas, modo de produção e comercialização antes de entrarem no grupo.",
      adress: "Rua Cônego Manoel Garcia, 1010 - Jardim Chapadão,Campinas - SP, 13070-037",
      deliveres: "Quinzenalmente às segundas e últimas quintas-feiras de cada mês",
      hour: "11h às 12h"
    },
    {
      idGroup: 4,
      nameGroupConsum: "Grupo de Consumo Barão Geraldo",
      history: "O grupo teve início em 20 de março de 2019, foi realizada uma formação e conversa para decidir questões sobre as entregas, junto com os primeiros consumidores. Atualmente não é realizada formação inicial, no entanto é feita uma conversa explicativa sobre o grupo, cestas, modo de produção e comercialização antes de entrarem no grupo.",
      adress: "STOUT Café, Cultura &amp;amp; Bar - R. Gilberto Pattaro, 105 - Barão Geraldo, Campinas - SP, 13084-375",
      deliveres: "Quinzenalmente às 1ªs (primeiras) e 3ªs (terceiras) quartas-feiras de cada mês",
      hour: "18h30 as 19h30"
    }
  ]
  teste;
  data = [{ weekDaysMonth: "Semanalmente" }, { weekDaysMonth: "Quinzenalmente" }, { weekDaysMonth: "Mensal" }]
  viewFilter: boolean = false;
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  constructor(public navCtrl: NavController, public http: HttpClient, private modalCtrl: ModalController, public locationsProv: LocationsProvider) {
    console.log(this.data);
  }

  infFarmer(): void {
    const modal = this.modalCtrl.create(FarmerInformationComponent, { elem: this.location[0] });
    modal.present();
  }

  // searchFarmer(): void {

  //   // const modal = this.modalCtrl.create(SearchComponent);
  //   // modal.present();
  // }

  getMarker(data: any): Object {
    const dataSource = [];
    data.map((element: any) => {
      let lat = parseFloat(element.latitude)
      let lgn = parseFloat(element.longitude)
      dataSource.push({ lat, lgn });
    });
    return dataSource;
  }



  ngOnInit(): void {
    // const test = this.http.get("../../assets/supply-center/locations.json");n
    // var myLatLng = { lat: -25.363, lng: 131.044 };

    // var map = new google.maps.Map(document.getElementById('map'), {
    //   zoom: 4,
    //   center: myLatLng
    // });

    // var marker = new google.maps.Marker({
    //   position: myLatLng,
    //   map: map,
    //   title: 'Olá, mundo!'
    // });

    this.locationsProv.findAll().subscribe((res: any) => {
      const dataSource: any = this.getMarker(res);
      
      const mapProperties = {
        center: new google.maps.LatLng(-22.9099, -47.0626),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
      this.addMarker(dataSource);
    });
  }

  private addMarker(map) {
    for (let index = 0; index < map.length; index++) {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(map[index].lat, map[index].lgn),
        map: this.map
      })
    }
  }
}
