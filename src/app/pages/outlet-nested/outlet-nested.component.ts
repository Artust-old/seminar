import { Component, OnInit } from '@angular/core';
import { SettingService, Setting } from 'src/app/common/services/setting.service';

@Component({
  selector: 'app-outlet-nested',
  templateUrl: './outlet-nested.component.html',
  styleUrls: ['./outlet-nested.component.scss']
})
export class OutletNestedComponent implements OnInit {

  selectSetting: Setting;

  constructor(
    private settingService: SettingService,
  ) {
    this.getSetting();
  }

  ngOnInit(): void {
  }

  getSetting(): void {
    this.settingService.getSetting().subscribe(rs => {
      this.selectSetting = rs;
    });
  }

  setSetting(opts): void {
    this.settingService.setSetting(opts).subscribe(rs => console.log(rs));
  }

  handleClick(): void {
    this.setSetting(this.selectSetting);
  }

}
