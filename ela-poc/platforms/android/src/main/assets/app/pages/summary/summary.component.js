"use strict";
var core_1 = require("@angular/core");
var summary_service_1 = require("../../shared/summary/summary.service");
var SummaryComponent = (function () {
    function SummaryComponent(summaryService) {
        this.summaryService = summaryService;
        this.firstname = "Yosimite";
        this.lastname = "Sam";
        this.listLoaded = false;
        this.isLoading = false;
    }
    ;
    SummaryComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        var summaryObj = this.summaryService.load();
    };
    SummaryComponent.prototype.add = function () {
    };
    SummaryComponent.prototype.share = function () {
    };
    SummaryComponent.prototype.delete = function () {
    };
    return SummaryComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], SummaryComponent.prototype, "groceryTextField", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLHdFQUFzRTtBQVd0RSxJQUFhLGdCQUFnQjtJQUMzQiwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRWxELGNBQVMsR0FBRyxVQUFVLENBQUM7UUFDdkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFMb0MsQ0FBQztJQUFBLENBQUM7SUFReEQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUNELDhCQUFHLEdBQUg7SUFFQSxDQUFDO0lBQ0QsZ0NBQUssR0FBTDtJQUVBLENBQUM7SUFDRCxpQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQWZnQztJQUE5QixnQkFBUyxDQUFDLGtCQUFrQixDQUFDOzhCQUFtQixpQkFBVTswREFBQztBQVBqRCxnQkFBZ0I7SUFQNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7UUFDeEMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztLQUM1QixDQUFDO3FDQUdvQyxnQ0FBYztHQUR2QyxnQkFBZ0IsQ0FzQjVCO0FBdEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VtbWFyeSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3VtbWFyeS9zdW1tYXJ5XCI7XG5pbXBvcnQgeyBTdW1tYXJ5U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3VtbWFyeS9zdW1tYXJ5LnNlcnZpY2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25CYXJNb2R1bGUgZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInN1bW1hcnlcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc3VtbWFyeS9zdW1tYXJ5Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnkuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtTdW1tYXJ5U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdW1tYXJ5U2VydmljZTogU3VtbWFyeVNlcnZpY2UpIHsgfTtcblxuICBmaXJzdG5hbWUgPSBcIllvc2ltaXRlXCI7XG4gIGxhc3RuYW1lID0gXCJTYW1cIjtcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIikgZ3JvY2VyeVRleHRGaWVsZDogRWxlbWVudFJlZjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHN1bW1hcnlPYmogPSB0aGlzLnN1bW1hcnlTZXJ2aWNlLmxvYWQoKTtcbiAgfVxuICBhZGQoKSB7XG4gICAgXG4gIH1cbiAgc2hhcmUoKSB7XG4gICAgXG4gIH1cbiAgZGVsZXRlKCl7XG4gICAgXG4gIH1cbn0iXX0=