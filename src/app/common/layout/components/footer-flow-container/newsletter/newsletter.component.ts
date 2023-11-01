import { Component, Input, OnInit } from '@angular/core';
import { ButtonGeneralConfig } from 'src/app/shared/models/shareable.interface';

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  @Input() newsLetterStaticProps: ButtonGeneralConfig | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
