import { Injectable } from '@angular/core';
import { Member } from './members.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(
    private database: AngularFireDatabase
  ) {
  this.members = database.list('members');
 }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string) {
    return this.database.object('members/' + memberId);
  }

  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                                nickName: localUpdatedMember.nickName,
                                number: localUpdatedMember.number,
                                imgUrl: localUpdatedMember.imgUrl,
                                position: localUpdatedMember.position,
                                description: localUpdatedMember.phone});
  }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }
}
