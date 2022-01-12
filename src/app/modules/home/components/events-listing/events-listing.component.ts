import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-listing',
  templateUrl: './events-listing.component.html',
  styleUrls: ['./events-listing.component.scss']
})
export class EventsListingComponent implements OnInit {
  cardsData:any[] =[

        {
          "id": 1,
          "img": "./assets/logo/peoplesGroup.PNG",
          "name": "EVENT1",
          "description": "Offices, schools, nursing homes, shopping complex and other commercial settings are especially susceptible to germs and bacterial infestations, and not just during the cold and flu seasons.",
        },
        {
          "id": 2,
          "img": "./assets/logo/peoplesGroup.PNG",
          "name": "EVENT2",
          "description": "Offices, schools, nursing homes, shopping complex and other commercial settings are especially susceptible to germs and bacterial infestations, and not just during the cold and flu seasons.",
        },
        {
          "id": 3,
          "img": "./assets/logo/peoplesGroup.PNG",
          "name": "EVENT3",
          "description": "Offices, schools, nursing homes, shopping complex and other commercial settings are especially susceptible to germs and bacterial infestations, and not just during the cold and flu seasons.",
        },
        {
          "id": 4,
          "img": "./assets/logo/peoplesGroup.PNG",
          "name": "EVENT4",
          "description": "Offices, schools, nursing homes, shopping complex and other commercial settings are especially susceptible to germs and bacterial infestations, and not just during the cold and flu seasons.",
        }

    ];
  constructor() { }

  ngOnInit(): void {
  }
  

}
