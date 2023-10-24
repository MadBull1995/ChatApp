import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/api/user.service';
import { AppService } from 'src/app/core/app.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  constructor(
    public app: AppService,
    private user: UserService,
  ) { }

  ngOnInit(): void {
    this.user.getContacts()
      .then(response => {
          this.app.contacts = response.contacts??[];
      }).catch(err => {
        console.log(err)
      })
  }

}
