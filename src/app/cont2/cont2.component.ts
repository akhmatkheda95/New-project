import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont2',
  templateUrl: './cont2.component.html',
  styleUrls: ['./cont2.component.css'],
})
export class Cont2Component implements OnInit {
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
      description: '4 organic ways to improve your website KPIs2',
    },
    {
      title: 'Blog Post',
      img: 'https://via.placeholder.com/320x260?text=Text3',
      buttonText: 'Read Story',
      description: '4 organic ways to improve your website KPIs3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
