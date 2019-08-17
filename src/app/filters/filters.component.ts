import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output('filtersOnChange') filtersEvent =  new EventEmitter<{filters: string}>();

  datePicker: NgbDateStruct;
  today = this.calendar.getToday();
  date: string = '';
  topics: string[] = [];

  constructor(private calendar: NgbCalendar) {}
  
  ngOnInit() {
  }

  onCheckboxChange = (e, type) => {
    const state: Boolean = e.target.checked;
    const typeIndex = this.topics.indexOf(type);
    if(state){
      // add the selected to array if it doesnt exist
      if(typeIndex > -1) return;
      this.topics.push(type)
    }else{
      // remove the type from array if it exists
      if(typeIndex === -1) return;
      this.topics.splice(typeIndex, 1);
    }
    this.emitFilters();    
  }

  emitFilters = () => {
    let filters: string = '';
    // &q=debate%20AND%20economy
    if(this.date) filters += 'from-date=' + this.date;
    if(this.topics.length){
      if(filters) filters += '&';
      filters += 'q=' + this.topics.join('%20AND%20');     
    }
    this.filtersEvent.emit({filters: filters});
  }

  setDate = (date) => {
  	this.date = date.year + '-' + date.month + '-' + date.day;
    this.emitFilters();
  }
}
