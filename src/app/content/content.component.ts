import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';
import { IContent } from './content.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
	search : string = '';
	public content = [];

  constructor(private _contentService: ContentService) {}

  ngOnInit() {
  	this.fetchData()
  }


  /*
	* Helper function filter with searched content
  */
  filteredContent = () => {
  	// if no search then return all
  	if(!this.search.trim()) return this.content;
  	// else show only if title exists in search
  	return this.content.filter(cardContent => cardContent.title.toLowerCase().indexOf(this.search.trim().toLowerCase()) > -1);
  }


  /*
	* Helper function to fetch data
  */
  fetchData = (queryStr: string = '') => {
  	this._contentService.getContent(queryStr)
  	.subscribe((data) => {
  		this.content = data;
  	});
  }
}
