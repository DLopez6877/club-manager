import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss'],
  providers: [MemberService]
})


export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(albumToMember){
    if(confirm("Are you sure you want to remove this member from your club?")){
      this.memberService.updateMember(albumToMember);
      alert('Member Updated');
    }
  }

  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure you want to remove this member from your club?")){
      this.memberService.deleteMember(memberToDelete);
    }
  }

}
