import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont4',
  templateUrl: './cont4.component.html',
  styleUrls: ['./cont4.component.css'],
})
export class Cont4Component implements OnInit {
  public blocks = [
    {
      data: '21 Dec',
      title: 'Blog Post',
      img: 'https://via.placeholder.com/320x260?text=Text1',
      buttonText: 'Read Story',
      description: '4 organic ways to improve your website KPIs1',
    },
    {
      data: '21 Dec',
      title: 'Blog Post',
      img: 'https://via.placeholder.com/320x260?text=Text2',
      buttonText: 'Read Story',
      description: '4 organic ways to improve your website KPIs2',
    },
    {
      data: '21 Dec',
      title: 'Blog Post',
      img: 'https://via.placeholder.com/320x260?text=Text3',
      buttonText: 'Read Story',
      description: '4 organic ways to improve your website KPIs3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
