import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebard',
  templateUrl: './sidebard.component.html',
  styleUrls: ['./sidebard.component.css']
})
export class SidebardComponent implements OnInit {

  menuItems : any[]=[];

  constructor(private sidebarService : SidebarService) { }

  ngOnInit(): void {
    this.menuItems = this.sidebarService.menu;
    console.log(this.menuItems);
  }

}
