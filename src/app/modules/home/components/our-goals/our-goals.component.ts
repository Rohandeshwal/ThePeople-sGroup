import { Component, OnInit } from '@angular/core';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-our-goals',
  templateUrl: './our-goals.component.html',
  styleUrls: ['./our-goals.component.scss']
})
export class OurGoalsComponent implements OnInit {
  filmIcon = faDonate;   
  filmHandIcon = faHandHoldingHeart;    
  filmBulbIcon = faLightbulb;    

  constructor() { }

  ngOnInit(): void {
  }

}
