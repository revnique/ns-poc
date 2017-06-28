import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Summary } from "../../shared/summary/summary";
import { SummaryService } from "../../shared/summary/summary.service";
import { TextField } from "ui/text-field";
import * as actionBarModule from "ui/action-bar";


  // interface Date{
  //     formatSmallDate(): (useSlashNotation:boolean) => string;
  // }

@Component({
  selector: "summary",
  templateUrl: "pages/summary/summary.html",
  styleUrls: ["pages/summary/summary.css"],
  providers: [SummaryService]
})


export class SummaryComponent implements OnInit {
  constructor(private summaryService: SummaryService) { };

  firstname = "Yosimite";
  lastname = "Sam";
  fundsAvailable = "$2750.00";
  listLoaded = false;
  isLoading = false;
  nextPaymentDate = "12/07/2017";
  nextPaymentAmount = "$150.00";

  ngOnInit() {
    this.isLoading = true;
    let summaryObj = this.summaryService.load();
    this.firstname = summaryObj.firstname;
    this.nextPaymentAmount = this.formatDollars(summaryObj.nextPaymentAmount);
    this.fundsAvailable = this.formatDollars(summaryObj.fundsAvailable);
    this.nextPaymentDate = this.formatSmallDate(summaryObj.nextPayDate,true);
  }

  gotoFunds() {
    console.log("gotoFunds","i'm here");
  }
  share() {
    
  }
  delete(){
    
  }
  formatDollars(amt){
    let rtn = "$0.00";
    if(!isNaN(Number(amt))){
      rtn = "$" + amt.toFixed(2);
    }
    return rtn;
  }


formatSmallDate = (date, useSlashNotation) => {
    function addZero(number) {
        var rtn = "";
        if (number < 10) {
            rtn = "0" + number;
        } else {
            rtn = number;
        }
        return rtn;
    };

    var day = date.getDate(); // yields dayofmonth
    day = addZero(day);
    var month = date.getMonth() + 1; // yields month
    month = addZero(month);
    var year = date.getFullYear(); // yields year

    var rtn = year + "-" + month + "-" + day;
    if (useSlashNotation) {
        rtn = month + "/" + day + "/" + year;
    }
    // After this construct a string with the above results as below
    return rtn;
}


}