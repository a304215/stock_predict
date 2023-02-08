import { Component, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  account = '';
  password = '';
  login_data = [];
  constructor(private http : HttpClient){

  }
  //取得帳號輸入內容
  getAccount(event : any){
    this.account = event.target.value
  }
  //取得密碼輸入內容
  getPassword(event : any){
    this.password = event.target.value
  }
  //取得api的資料
  getAlertList(){
    let xhr = new XMLHttpRequest();
    let url = 'http://127.0.0.1:3000/api'
    let res;
    let login_data:any = []
    xhr = new XMLHttpRequest();
    xhr.onload = function() {
      res= JSON.parse(this.response);
      for(let i = 0 ; i < res.data.length;i++){
        let temp = []
        temp = [res.data[i].account,res.data[i].password]
        login_data.push(temp)
      }
    }
    xhr.open("GET", url, false);
    xhr.send();
    this.login_data = login_data
  }
  getSubmit(){
    this.getAlertList();
    for(let i = 0; i < this.login_data.length;i++){
      if(this.login_data[i][0] == this.account){
        if(this.login_data[i][1] == this.password){
          window.location.assign("http://localhost:4200/register");
        }
      }
    }
  }
}
