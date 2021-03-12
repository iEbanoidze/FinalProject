import { Component, OnInit, Input } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
@Input()
inputSearch: string = "";
  usersData: any[] = [];
  constructor(public userService : UsersServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        //console.log(data);
      this.usersData = data;
      }
    );
   }

   ngOnChanges(changes: any){
    for(let property in changes)
    {
      if(property == "inputSearch")
      {
        var search = changes[property].currentValue;
        console.log(search);
        if(search != "" && search != undefined)
        {
          var filtereddata = this.usersData.filter((x:any)=> x.id == search ||
          x.userId == search ||
          x.title.indexOf(search)> -1 ||
          x.body.indexOf(search)> -1
          );
          this.usersData = filtereddata;
        }
      }
    }
  }
    
  }


