import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'miguel';
  public nameUpper: string = 'MIGUEL';
  public nameFull: string = 'mIGueL eDuaRDo CORraLes SaNcHeZ'

  public customDate: Date = new Date();
}
