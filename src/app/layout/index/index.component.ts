import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/service/meeting.service';
import { Meeting } from 'src/app/object/meeting';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // 下拉選單 內容
  options1 = [
    { name: '請選擇', value: 0 },
    { name: '依股東會日期由遠至近排序', value: 1 },
    { name: '依股東會日期由近至遠排序', value: 2 },
    { name: '依證券代號由小至大排序', value: 3 },
    { name: '依投票起日由近至遠排序', value: 4 },
    { name: '依投票起日由遠至近排序', value: 5 }
  ];
  options2 = [
    { name: '請選擇', value: 0 },
    { name: '依證券代號搜尋', value: 1 },
    { name: '依證券名稱搜尋', value: 2 },
    { name: '依股東會日期搜尋', value: 3 }
  ];

  // 下拉選單 預設值
  selected1 = '0';
  selected2 = '0';

  // 搜尋股東會 預設值
  keyword = '';

  // 股東會資訊
  get infoList() {
    return this.meetService.newList;
  }

  constructor(private meetService: MeetingService) { }

  ngOnInit() {
    this.meetService.loadingAllMeeting();
  }

  doSearch1() {
    if (this.selected1 === '0') {
      alert('請選擇或輸入查詢條件');
    } else {
      this.meetService.searchMeeting(this.selected1, this.selected2, this.keyword);
    }

  }

  doSearch2() {
    if (this.selected2 === '0' || this.keyword === '') {
      alert('請選擇或輸入查詢條件');
    } else {
      this.meetService.searchMeeting(this.selected1, this.selected2, this.keyword);
    }

  }

}
