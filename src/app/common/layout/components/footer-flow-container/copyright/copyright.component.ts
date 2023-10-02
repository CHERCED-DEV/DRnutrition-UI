import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  @Input() copyrightStaticProps: string | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
