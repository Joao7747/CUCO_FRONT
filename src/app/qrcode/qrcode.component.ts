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
    this.url = "http://localhost:4200/doar/" + id;
    console.log(this.url);

  }

  ngOnInit(): void {
    
  }

pegaId()
{
  
}

}
