import { Component, Input, OnInit } from '@angular/core';
import { copyrightConfig } from '../../../../provider/model/layout.models';

@Component({
  selector: 'copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  @Input() copyrightStaticProps: copyrightConfig | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
