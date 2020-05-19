import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont3',
  templateUrl: './cont3.component.html',
  styleUrls: ['./cont3.component.css'],
})
export class Cont3Component implements OnInit {
  public blocks = [
    {
      title: 'Blog Post',
      description:
        'Micro-influences and B2C brand videos: A match made in heaven ',
      buttonText: 'Read Store',
      img: 'https://via.placeholder.com/140x140?text=Text1',
      id: 'root',
    },
    {
      title: 'Webinar',
      description:
        'Webinar: Improving content marketing through visual storytelling',
      buttonText: 'Watch Webinar',
      img: 'https://via.placeholder.com/140x140?text=Text1',
    },
    {
      title: 'Report',
      description:
        'How to reach audience with social video: From Milliennials to Gen Z',
      buttonText: 'Read Report',
      img: 'https://via.placeholder.com/140x140?text=Text1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
