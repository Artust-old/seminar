import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/common/services/member.service';
import { Member } from 'src/app/common/models/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {

  members: Member[] = [];

  constructor(
    private memberSerive: MemberService,
  ) { }

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void {
    this.memberSerive.getMembers()
      .subscribe(mem => this.members = mem);
  }

}
