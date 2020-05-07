import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string,
  age:number
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: 'B6002671',
      name: 'Thanet Junsirisakul',
      gender: 'Male',
      birthyear: 1999,
      email: 'b6002671@g.sut.ac.th',
      phone: '080-5969408',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: '',
      age:21
    }
  }

  ngOnInit(): void {
  }

  onUserClick($event){
    alert(this.profile.address);
   
  }

}
