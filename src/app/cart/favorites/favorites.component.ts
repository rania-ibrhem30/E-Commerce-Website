import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-favorites', templateUrl: './favorites.component.html', styleUrls: ['./favorites.component.scss']})
export class FavoritesComponent implements OnInit {
  favoriteProducts: any[] = [];
  addToFavorites(item: any) {
  if ("favoriteProducts" in localStorage) {
    this.favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")!);
    this.favoriteProducts.push(item);
    localStorage.setItem("favoriteProducts", JSON.stringify(this.favoriteProducts));
  } else {
    this.favoriteProducts.push(item);
    localStorage.setItem("favoriteProducts", JSON.stringify(this.favoriteProducts));
  }
  console.log(this.favoriteProducts);
}

ngOnInit() {
} 
}

