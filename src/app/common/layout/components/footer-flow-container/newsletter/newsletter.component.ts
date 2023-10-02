import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  @Input() newsLetterStaticProps: {} | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
