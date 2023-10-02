import { Component, OnInit, Input } from '@angular/core';
import { LinkConfig } from 'src/app/shared/models/shareable.interface';

@Component({
  selector: 'socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss'],
})
export class SocialmediaComponent implements OnInit {
  @Input() mediaLink: LinkConfig[] | undefined = undefined;
  constructor() {}

  ngOnInit(): void {

  }
}
