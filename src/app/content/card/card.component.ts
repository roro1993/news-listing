import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('cardElt') cardContent : {title: string, publishedDate: string, url: string, tag: string};
  @Input() search : string;

  constructor() { }

  ngOnInit() {
  }
}
