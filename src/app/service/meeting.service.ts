import { Injectable } from '@angular/core';
import { Meeting } from '../object/meeting';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  list: Meeting[];
  newList: Meeting[];

  constructor(private http: HttpClient) { }

  loadingAllMeeting() {
    this.http.get('/api/meetingInfo.json')
      .subscribe(res => {
        console.log(res);
        this.list = res as Meeting[];
        this.newList = this.list;
      });
  }

  searchMeeting(sel1: string, sel2: string, keyword: string) {
    this.orderMeeting(sel1);
    this.searcKeywordMeeting(sel2, keyword);
  }

  // 清單排序
  orderMeeting(sel1: string) {
    switch (sel1) {
      // 遠至近
      case '1':
        this.newList = this.newList.sort((m1, m2) => {
          return this.sortCompare(m2.date, m1.date);
        });
        break;
      // 近致遠
      case '2':
        this.newList = this.newList.sort((m1, m2) => {
          return this.sortCompare(m1.date, m2.date);
        });
        break;
      case '3':
        this.newList = this.newList.sort((m1, m2) => {
          return this.sortCompare(m1.id, m2.id);
        });
        break;
      case '4':
        this.newList = this.newList.sort((m1, m2) => {
          return this.sortCompare(m2.id, m1.id);
        });
        break;
    }
  }

  // 搜尋股東會
  searcKeywordMeeting(sel2: string, keyword: string) {
    if (keyword) {
      switch (sel2) {
        case '1':
          this.newList = this.list.filter(info => info.id.indexOf(keyword) !== -1);
          break;
          case '2':
          this.newList = this.list.filter(info => info.name.indexOf(keyword) !== -1);
          break;
          case '3':
          this.newList = this.list.filter(info => info.date.indexOf(keyword) !== -1);
          break;
      }
    }
  }

  /**
   * Array排序 for sort()
   * @param a 排前
   * @param b 排後
   */
  sortCompare(a, b): number {
    if (a > b) { return 1; }
    if (a < b) { return -1; }
    return 0;
  }
}
