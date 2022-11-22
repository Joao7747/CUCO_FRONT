import { Component, OnInit } from '@angular/core';
import { DecodeToken } from '../shared/models/token';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  url!: String;
  constructor() { 
    let decode = new DecodeToken();

    let id = decode.GetProperty("idestabelecimento");
    console.log(id);
    this.url = "https://lively-coast-01b431d10.1.azurestaticapps.net/doar/" + id;
    console.log(this.url);

  }

  ngOnInit(): void {
    
  }

pegaId()
{
  
}

}
