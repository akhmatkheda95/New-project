import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end2',
  templateUrl: './end2.component.html',
  styleUrls: ['./end2.component.css'],
})
export class End2Component implements OnInit {
  public blocks = [
    {
      title: 'Blog Post',
      img: 'https://via.placeholder.com/320x260?text=Text1',
      buttonText: 'Read Story',
      description: '4 organic ways to improve your website KPIs1',
    },
    {
      title: 'Blog Post',
      img: 'https://via.placeholder.com/320x260?text=Text2',
      buttonText: 'Read Story',
      description: 'How to turn your next event into a video content goldmine',
    },
    {
      title: 'Blog Post',
      img: 'https://via.placeholder.com/320x260?text=Text3',
      buttonText: 'Read Story',
      description: 'How to quickly turn your podcat into a video script',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
