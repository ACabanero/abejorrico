import { Component, OnInit } from '@angular/core';

import 'add-to-calendar-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public backgroundImageUrl: string = '';

  ngOnInit(): void {
    this.setRandomBackgroundImage();
  }

  setRandomBackgroundImage() {
    const images = [
      'abejorrico-01.jpg',
      'abejorrico-02.jpg',
      'abejorrico-03.jpg',
      'abejorrico-04.jpg',
      'abejorrico-05.jpg',
      'abejorrico-06.jpg',
      'abejorrico-07.jpg',
      'abejorrico-08.jpg',
      'abejorrico-09.jpg',
      'abejorrico-10.jpg',
    ]; // Agrega aquí los nombres de las imágenes en la carpeta "assets"

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    this.backgroundImageUrl = `url('assets/images/${randomImage}')`;
  }
}
