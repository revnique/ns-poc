import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Summary } from "../../shared/summary/summary";
import { SummaryService } from "../../shared/summary/summary.service";
import { TextField } from "ui/text-field";
import * as SocialShare from "nativescript-social-share";

@Component({
  selector: "summary",
  templateUrl: "pages/summary/summary.html",
  styleUrls: ["pages/summary/summary.css"],
  providers: [SummaryService]
})

export class SummaryComponent implements OnInit {
  constructor(private summaryService: SummaryService) { };

  grocery = "";
  isLoading = false;
  listLoaded = false;
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