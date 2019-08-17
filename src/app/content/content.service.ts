import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { IContent } from './content.interface';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private _url: string = 'https://content.guardianapis.com/search?api-key=test&tag=politics/politics'; 

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getContent(queryStr: string = ''): Observable<IContent[]>{
  	// returns an Observable array of content
  	return this.http.get<IContent>(this._url + queryStr)
  	.pipe(
  		map(response => {
  			// declared as const so that i dont re-assign it
  			const res = [];
  			
  			// check all data exists before proccessing
  			if(!(response && response.response && response.response.results && response.response.results.length)) return res;
				
				const dataReturned = response.response.results;

				// at this stage, im sure all data i need is there
				for(const key in dataReturned){

					// format the date returned
					let date = dataReturned[key].webPublicationDate;
					try{
						date = new Date(date);
						date = this.datePipe.transform(date, 'yyyy-MM-dd');
					}catch(error){
						console.error (error);
					}
					res.push({
							title: dataReturned[key].webTitle,
					  	publishedDate: date,
					  	url: dataReturned[key].webUrl,
					  	tag: dataReturned[key].pillarName
					});
				}
				return res;
  		})
  	);
  }
}
