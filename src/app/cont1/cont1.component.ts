import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont1',
  templateUrl: './cont1.component.html',
  styleUrls: ['./cont1.component.css'],
})
export class Cont1Component implements OnInit {
  public blocks = [
    {
      title: 'Report',
      description:
        'Explore Instagram Video: How to convert, engage, and get more Instagra...',
      buttonText: 'Read Report',
      img: 'https://via.placeholder.com/170x170?text=Text1',
    },
    {
      title: 'Blog Post',
      description: 'How to make social vidoe work for your marketing team',
      buttonText: 'Read Story',
      img: 'https://via.placeholder.com/170x170?text=Text1',
    },
    {
      title: 'Webinar',
      description: 'The Video Forecast: 2019 predictions from industry leaders',
      buttonText: 'Watch Webinar',
      img: 'https://via.placeholder.com/170x170?text=Text1',
    },
    {
      title: 'Report',
      description: 'Winning strategies for digital video',
      buttonText: 'Read Report',
      img: 'https://via.placeholder.com/170x170?text=Text1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
