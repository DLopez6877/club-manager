import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../members.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, bio: string, nickName: string, number: number, imgUrl: string, position: string, phone: string ) {
    var newMember: Member = new Member(name, nickName, number, imgUrl, position, phone);
    this.memberService.addMember(newMember);
  }
}
