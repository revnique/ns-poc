import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Summary } from "../../shared/summary/summary";
import { SummaryService } from "../../shared/summary/summary.service";
import { TextField } from "ui/text-field";
import * as actionBarModule from "ui/action-bar";

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
  @ViewChild("groceryTextField") groceryTextField: ElementRef;

  ngOnInit() {
    this.isLoading = true;
    let summaryObj = this.summaryService.load();
  }
  add() {
    
  }
  share() {
    
  }
  delete(){
    
  }
}