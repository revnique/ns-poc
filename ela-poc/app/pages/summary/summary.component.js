"use strict";
var core_1 = require("@angular/core");
var summary_service_1 = require("../../shared/summary/summary.service");
// interface Date{
//     formatSmallDate(): (useSlashNotation:boolean) => string;
// }
var SummaryComponent = (function () {
    function SummaryComponent(summaryService) {
        this.summaryService = summaryService;
        this.firstname = "Yosimite";
        this.lastname = "Sam";
        this.fundsAvailable = "$2750.00";
        this.listLoaded = false;
        this.isLoading = false;
        this.nextPaymentDate = "12/07/2017";
        this.nextPaymentAmount = "$150.00";
        this.formatSmallDate = function (date, useSlashNotation) {
            function addZero(number) {
                var rtn = "";
                if (number < 10) {
                    rtn = "0" + number;
                }
                else {
                    rtn = number;
                }
                return rtn;
            }
            ;
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
        };
    }
    ;
    SummaryComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        var summaryObj = this.summaryService.load();
        this.firstname = summaryObj.firstname;
        this.nextPaymentAmount = this.formatDollars(summaryObj.nextPaymentAmount);
        this.fundsAvailable = this.formatDollars(summaryObj.fundsAvailable);
        this.nextPaymentDate = this.formatSmallDate(summaryObj.nextPayDate, true);
    };
    SummaryComponent.prototype.gotoFunds = function () {
        console.log("gotoFunds", "i'm here");
    };
    SummaryComponent.prototype.share = function () {
    };
    SummaryComponent.prototype.delete = function () {
    };
    SummaryComponent.prototype.formatDollars = function (amt) {
        var rtn = "$0.00";
        if (!isNaN(Number(amt))) {
            rtn = "$" + amt.toFixed(2);
        }
        return rtn;
    };
    return SummaryComponent;
}());
SummaryComponent = __decorate([
    core_1.Component({
        selector: "summary",
        templateUrl: "pages/summary/summary.html",
        styleUrls: ["pages/summary/summary.css"],
        providers: [summary_service_1.SummaryService]
    }),
    __metadata("design:paramtypes", [summary_service_1.SummaryService])
], SummaryComponent);
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLHdFQUFzRTtBQUtwRSxrQkFBa0I7QUFDbEIsK0RBQStEO0FBQy9ELElBQUk7QUFVTixJQUFhLGdCQUFnQjtJQUMzQiwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRWxELGNBQVMsR0FBRyxVQUFVLENBQUM7UUFDdkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixtQkFBYyxHQUFHLFVBQVUsQ0FBQztRQUM1QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxZQUFZLENBQUM7UUFDL0Isc0JBQWlCLEdBQUcsU0FBUyxDQUFDO1FBNkJoQyxvQkFBZSxHQUFHLFVBQUMsSUFBSSxFQUFFLGdCQUFnQjtZQUNyQyxpQkFBaUIsTUFBTTtnQkFDbkIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNiLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNkLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNmLENBQUM7WUFBQSxDQUFDO1lBRUYsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsb0JBQW9CO1lBQzlDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWU7WUFDaEQsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxjQUFjO1lBRTdDLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDekMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztZQUN6QyxDQUFDO1lBQ0QsZ0VBQWdFO1lBQ2hFLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDLENBQUE7SUE1RHVELENBQUM7SUFBQSxDQUFDO0lBVXhELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGdDQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsaUNBQU0sR0FBTjtJQUVBLENBQUM7SUFDRCx3Q0FBYSxHQUFiLFVBQWMsR0FBRztRQUNmLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNsQixFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQTZCSCx1QkFBQztBQUFELENBQUMsQUFoRUQsSUFnRUM7QUFoRVksZ0JBQWdCO0lBUjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7S0FDNUIsQ0FBQztxQ0FJb0MsZ0NBQWM7R0FEdkMsZ0JBQWdCLENBZ0U1QjtBQWhFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1bW1hcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N1bW1hcnkvc3VtbWFyeVwiO1xuaW1wb3J0IHsgU3VtbWFyeVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N1bW1hcnkvc3VtbWFyeS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0ICogYXMgYWN0aW9uQmFyTW9kdWxlIGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5cblxuICAvLyBpbnRlcmZhY2UgRGF0ZXtcbiAgLy8gICAgIGZvcm1hdFNtYWxsRGF0ZSgpOiAodXNlU2xhc2hOb3RhdGlvbjpib29sZWFuKSA9PiBzdHJpbmc7XG4gIC8vIH1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInN1bW1hcnlcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc3VtbWFyeS9zdW1tYXJ5Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnkuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtTdW1tYXJ5U2VydmljZV1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIFN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN1bW1hcnlTZXJ2aWNlOiBTdW1tYXJ5U2VydmljZSkgeyB9O1xuXG4gIGZpcnN0bmFtZSA9IFwiWW9zaW1pdGVcIjtcbiAgbGFzdG5hbWUgPSBcIlNhbVwiO1xuICBmdW5kc0F2YWlsYWJsZSA9IFwiJDI3NTAuMDBcIjtcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbmV4dFBheW1lbnREYXRlID0gXCIxMi8wNy8yMDE3XCI7XG4gIG5leHRQYXltZW50QW1vdW50ID0gXCIkMTUwLjAwXCI7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCBzdW1tYXJ5T2JqID0gdGhpcy5zdW1tYXJ5U2VydmljZS5sb2FkKCk7XG4gICAgdGhpcy5maXJzdG5hbWUgPSBzdW1tYXJ5T2JqLmZpcnN0bmFtZTtcbiAgICB0aGlzLm5leHRQYXltZW50QW1vdW50ID0gdGhpcy5mb3JtYXREb2xsYXJzKHN1bW1hcnlPYmoubmV4dFBheW1lbnRBbW91bnQpO1xuICAgIHRoaXMuZnVuZHNBdmFpbGFibGUgPSB0aGlzLmZvcm1hdERvbGxhcnMoc3VtbWFyeU9iai5mdW5kc0F2YWlsYWJsZSk7XG4gICAgdGhpcy5uZXh0UGF5bWVudERhdGUgPSB0aGlzLmZvcm1hdFNtYWxsRGF0ZShzdW1tYXJ5T2JqLm5leHRQYXlEYXRlLHRydWUpO1xuICB9XG5cbiAgZ290b0Z1bmRzKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZ290b0Z1bmRzXCIsXCJpJ20gaGVyZVwiKTtcbiAgfVxuICBzaGFyZSgpIHtcbiAgICBcbiAgfVxuICBkZWxldGUoKXtcbiAgICBcbiAgfVxuICBmb3JtYXREb2xsYXJzKGFtdCl7XG4gICAgbGV0IHJ0biA9IFwiJDAuMDBcIjtcbiAgICBpZighaXNOYU4oTnVtYmVyKGFtdCkpKXtcbiAgICAgIHJ0biA9IFwiJFwiICsgYW10LnRvRml4ZWQoMik7XG4gICAgfVxuICAgIHJldHVybiBydG47XG4gIH1cblxuXG5mb3JtYXRTbWFsbERhdGUgPSAoZGF0ZSwgdXNlU2xhc2hOb3RhdGlvbikgPT4ge1xuICAgIGZ1bmN0aW9uIGFkZFplcm8obnVtYmVyKSB7XG4gICAgICAgIHZhciBydG4gPSBcIlwiO1xuICAgICAgICBpZiAobnVtYmVyIDwgMTApIHtcbiAgICAgICAgICAgIHJ0biA9IFwiMFwiICsgbnVtYmVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcnRuID0gbnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydG47XG4gICAgfTtcblxuICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTsgLy8geWllbGRzIGRheW9mbW9udGhcbiAgICBkYXkgPSBhZGRaZXJvKGRheSk7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTsgLy8geWllbGRzIG1vbnRoXG4gICAgbW9udGggPSBhZGRaZXJvKG1vbnRoKTtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTsgLy8geWllbGRzIHllYXJcblxuICAgIHZhciBydG4gPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xuICAgIGlmICh1c2VTbGFzaE5vdGF0aW9uKSB7XG4gICAgICAgIHJ0biA9IG1vbnRoICsgXCIvXCIgKyBkYXkgKyBcIi9cIiArIHllYXI7XG4gICAgfVxuICAgIC8vIEFmdGVyIHRoaXMgY29uc3RydWN0IGEgc3RyaW5nIHdpdGggdGhlIGFib3ZlIHJlc3VsdHMgYXMgYmVsb3dcbiAgICByZXR1cm4gcnRuO1xufVxuXG5cbn0iXX0=