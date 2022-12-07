import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-content';

  @ViewChild('modal1', { static: true })
  modal1: ElementRef<HTMLInputElement>;

  @ViewChild('modal2', { static: true })
  modal2: ElementRef<HTMLInputElement>;

  @ViewChild('modal3', { static: true})
  modal3: ElementRef<HTMLInputElement>;

  mostrar1 = false;

  mostrar2 = false;

  mostrar3 = false;

  modal1_open():void {
    this.mostrar1 = !this.mostrar1;
  }

  modal2_open():void {
    this.mostrar2 = !this.mostrar2;
  }

  modal3_open(): void {
    this.mostrar3 = !this.mostrar3;
  }

  tags: any[];
  html: any;
  selectedTag: string;
  linkTitle: string;
  number: string = '1';

  constructor(private appService: AppService) { };

  ngOnInit(): void {
    this.appService.getTags().subscribe(tags => {
      this.tags = tags["departments"];
    })

    this.appService.getHtml(this.number).subscribe(html => {
      this.html = html;
    })
  }

  consultar(): void {
    this.appService.getHtml(this.number).subscribe(html => {
      this.html = html;
    })
    this.linkTitle = this.html.title;
  }
}
