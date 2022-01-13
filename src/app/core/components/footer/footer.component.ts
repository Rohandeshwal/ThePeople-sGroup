import { Component, OnInit } from '@angular/core';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  filmIcon = faMapMarked;   
  phoneIcon = faPhone;   
  mailIcon = faMailBulk;   
  constructor() { }

  ngOnInit(): void {
  }

}
