import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from '../models/member.model';
import { members } from '../mock-data/members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl = 'api/member';

  constructor(
  ) { }

  /** GET heroes from the server */
  getMembers(): Observable<Member[]> {
    return of(members);
  }

  /** GET hero by id. Will 404 if id not found */
  getMember(id: number): Observable<Member> {
    const member = members.find(item => item.id === id);
    return of(member);
  }

  addMember(item: Member): Observable<Member[]> {
    members.push(item);
    return of(members);
  }
}
