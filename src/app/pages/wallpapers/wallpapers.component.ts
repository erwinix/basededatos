import { Component, OnInit } from '@angular/core';
import { WallpapersService } from '../../services/wallpapers.service';

@Component({
  selector: 'app-wallpapers',
  templateUrl: './wallpapers.component.html',
  styleUrls: ['./wallpapers.component.css']
})
export class WallpapersComponent implements OnInit {
  wallpapers: any[];
  constructor( private wallpapersService: WallpapersService ) { }

  ngOnInit() {
    this.wallpapersService.getAll().subscribe(r => this.wallpapers = r);
  }

}
