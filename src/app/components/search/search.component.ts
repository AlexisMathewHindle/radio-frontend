import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { ButtonsService } from '../../services/buttons.service';
import { AddService } from '../../services/add.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  addInput = new Array<number>();

  searchStr: string;

  constructor(private buttonFunctions: ButtonsService,
              private addTrack: AddService,
              private router: Router) { }

  ngOnInit() {}

  searchMusic() {
    console.log(this.searchStr);
  }

  addToPlaylist(title: string) {
    // const addInputObject = new Object();
    // // addInputObject.push(this.addInput);
    // this.addTrack.addTrackTitle.push(this.addInput);
    // this.router.navigate(['/player']);

    this.addTrack.addTrackTitle.push(this.addInput);

    this.router.navigate(['/player']);
  }




}
