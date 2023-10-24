import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/api/user.service';
import { AppService } from 'src/app/core/app.service';
import { Contact } from 'src/app/core/chat/core/v1/contact.pb';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  private params$!: Subscription;
  contact: Contact | undefined;
  constructor(
    private app: AppService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.params$ = this.activatedRoute.params.subscribe(param => {
      if(param['userId']) {
        console.log('loading contact', param);
        if(this.app.contacts.length === 0) {
          this.userService.getContacts()
          .then(res => {
            console.log(res)
            this.contact = res.contacts?.find(c => c.userId === param['userId'])
          }).catch(err => {
            console.log(err)
          })
        }
        this.contact = this.app
          .contacts
          .find(c => c.userId === param['userId'])
      } else {
        this.app.openSnackBar('contact not found')     
      }
    })
  }

  sendMessage() {
    this.router.navigate(['chat',this.contact?.userId])
  }

  editContact() {
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.params$.unsubscribe();
  }

}
