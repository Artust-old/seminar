import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Setting {
  add: boolean;
  delete: boolean;
  info: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  setting: Setting = new Setting();
  constructor() { }

  getSetting(): Observable<Setting> {
    return of(this.setting);
  }

  setSetting(customSetting: Setting): Observable<Setting> {
    this.setting = customSetting;
    return of(this.setting);
  }
}
