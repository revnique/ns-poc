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
        let summary = new Summary("1","2");
        return summary;
    }


    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
    
}