import { Component, OnInit } from '@angular/core';
import { Member } from '../members.model';
import { Router } from '@angular/router';
import { MemberService } from './../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss'],
  providers: [MemberService]
})


export class ClubComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  };
}
