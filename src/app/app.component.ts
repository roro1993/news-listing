import { Component, ViewChild, OnInit} from '@angular/core';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@ViewChild(ContentComponent) contentRef: ContentComponent;

  title = 'proximie';

  constructor() {}

  ngOnInit() {
  }

  /*
	* Helper function to update the search of the content string
  */
  searchContent = (search: string) => {
  	// update the content search
		this.contentRef.search = search;
  }

  /*
  * Helper function filter data
  */  
  filtersChanged = (e) => {
    this.contentRef.fetchData('&' + e.filters);
  }
}


