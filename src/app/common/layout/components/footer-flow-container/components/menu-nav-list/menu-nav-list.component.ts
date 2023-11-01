import { Component, Input, OnInit } from '@angular/core';
import { RoutesMenuNavConfig } from 'src/app/common/layout/provider/model/layout.models';

@Component({
  selector: 'menu-nav-list',
  templateUrl: './menu-nav-list.component.html',
  styleUrls: ['./menu-nav-list.component.scss']
})
export class MenuNavListComponent implements OnInit {
  @Input() navigationRoutes: RoutesMenuNavConfig[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
