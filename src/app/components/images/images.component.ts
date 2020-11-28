import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {

    // this.apiService.getImages()

    //ReactiveForm
    //  formControle => search

    //search.valueChanges(change) => this.apiService.getImages(change)
  }

}
