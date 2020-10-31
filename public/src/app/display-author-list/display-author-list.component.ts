import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-author-list',
  templateUrl: './display-author-list.component.html',
  styleUrls: ['./display-author-list.component.css']
})
export class DisplayAuthorListComponent implements OnInit {
  authors: any;

  constructor() { }

  ngOnInit() {
  }

}
