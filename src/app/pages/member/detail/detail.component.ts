import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/common/services/member.service';
import { Member } from 'src/app/common/models/member.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  member: Member;
  id: number;

  constructor(
    private memberSerive: MemberService,
    private activateRoute: ActivatedRoute,
  ) {
    this.id = +this.activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getMember(this.id);
  }

  getMember(id): void {
    this.memberSerive.getMember(id)
      .subscribe(mem => this.member = mem);
  }

}
