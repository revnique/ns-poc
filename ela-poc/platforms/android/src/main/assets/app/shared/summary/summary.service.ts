import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Summary } from "./summary";



@Injectable()
export class SummaryService {
    constructor(private http: Http) { }

    load() {
        let summary = new Summary();
        summary.email = "yosemitesam@looneytunes.com";
        summary.firstname = "Yosemite";
        summary.lastname = "Sam";
        summary.fundsAvailable = 2777.77;
        summary.nextPaymentAmount = 155.55;
        summary.nextPayDate = new Date("11/11/2017");
        return summary;
    }


    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

}
(function(){
        

})();