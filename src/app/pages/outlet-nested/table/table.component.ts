import { Component, OnInit, Input } from '@angular/core';
import { SettingService, Setting } from 'src/app/common/services/setting.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

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

}
