"use strict";
var core_1 = require("@angular/core");
var summary_service_1 = require("../../shared/summary/summary.service");
var SummaryComponent = (function () {
    function SummaryComponent(summaryService) {
        this.summaryService = summaryService;
        this.firstname = "Yosimite";
        this.lastname = "Sam";
        this.fundsAvailable = "$2750.00";
        this.listLoaded = false;
        this.isLoading = false;
        this.nextPaymentDueDate = "12/07/2017";
        this.nextPaymentAmount = "$150.00";
    }
    ;
    SummaryComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        var summaryObj = this.summaryService.load();
    };
    SummaryComponent.prototype.gotoFunds = function () {
        console.log("gotoFunds", "i'm here");
    };
    SummaryComponent.prototype.share = function () {
    };
    SummaryComponent.prototype.delete = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLHdFQUFzRTtBQVd0RSxJQUFhLGdCQUFnQjtJQUMzQiwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRWxELGNBQVMsR0FBRyxVQUFVLENBQUM7UUFDdkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixtQkFBYyxHQUFHLFVBQVUsQ0FBQztRQUM1QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsdUJBQWtCLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLHNCQUFpQixHQUFHLFNBQVMsQ0FBQztJQVJ3QixDQUFDO0lBQUEsQ0FBQztJQVV4RCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0Qsb0NBQVMsR0FBVDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUNELGlDQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJZLGdCQUFnQjtJQVA1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztRQUN4QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO0tBQzVCLENBQUM7cUNBR29DLGdDQUFjO0dBRHZDLGdCQUFnQixDQXdCNUI7QUF4QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdW1tYXJ5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdW1tYXJ5L3N1bW1hcnlcIjtcbmltcG9ydCB7IFN1bW1hcnlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdW1tYXJ5L3N1bW1hcnkuc2VydmljZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCAqIGFzIGFjdGlvbkJhck1vZHVsZSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic3VtbWFyeVwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnkuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3N1bW1hcnkvc3VtbWFyeS5jc3NcIl0sXG4gIHByb3ZpZGVyczogW1N1bW1hcnlTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIFN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN1bW1hcnlTZXJ2aWNlOiBTdW1tYXJ5U2VydmljZSkgeyB9O1xuXG4gIGZpcnN0bmFtZSA9IFwiWW9zaW1pdGVcIjtcbiAgbGFzdG5hbWUgPSBcIlNhbVwiO1xuICBmdW5kc0F2YWlsYWJsZSA9IFwiJDI3NTAuMDBcIjtcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbmV4dFBheW1lbnREdWVEYXRlID0gXCIxMi8wNy8yMDE3XCI7XG4gIG5leHRQYXltZW50QW1vdW50ID0gXCIkMTUwLjAwXCI7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCBzdW1tYXJ5T2JqID0gdGhpcy5zdW1tYXJ5U2VydmljZS5sb2FkKCk7XG4gIH1cbiAgZ290b0Z1bmRzKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZ290b0Z1bmRzXCIsXCJpJ20gaGVyZVwiKTtcbiAgfVxuICBzaGFyZSgpIHtcbiAgICBcbiAgfVxuICBkZWxldGUoKXtcbiAgICBcbiAgfVxufSJdfQ==