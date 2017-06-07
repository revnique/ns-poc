"use strict";
var core_1 = require("@angular/core");
var summary_service_1 = require("../../shared/summary/summary.service");
var SummaryComponent = (function () {
    function SummaryComponent(summaryService) {
        this.summaryService = summaryService;
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLHdFQUFzRTtBQVd0RSxJQUFhLGdCQUFnQjtJQUMzQiwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRWxELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFKbUMsQ0FBQztJQUFBLENBQUM7SUFPeEQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUNELDhCQUFHLEdBQUg7SUFFQSxDQUFDO0lBQ0QsZ0NBQUssR0FBTDtJQUVBLENBQUM7SUFDRCxpQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQWZnQztJQUE5QixnQkFBUyxDQUFDLGtCQUFrQixDQUFDOzhCQUFtQixpQkFBVTswREFBQztBQU5qRCxnQkFBZ0I7SUFQNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7UUFDeEMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztLQUM1QixDQUFDO3FDQUdvQyxnQ0FBYztHQUR2QyxnQkFBZ0IsQ0FxQjVCO0FBckJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VtbWFyeSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3VtbWFyeS9zdW1tYXJ5XCI7XG5pbXBvcnQgeyBTdW1tYXJ5U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3VtbWFyeS9zdW1tYXJ5LnNlcnZpY2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic3VtbWFyeVwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnkuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3N1bW1hcnkvc3VtbWFyeS5jc3NcIl0sXG4gIHByb3ZpZGVyczogW1N1bW1hcnlTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIFN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN1bW1hcnlTZXJ2aWNlOiBTdW1tYXJ5U2VydmljZSkgeyB9O1xuXG4gIGdyb2NlcnkgPSBcIlwiO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICBAVmlld0NoaWxkKFwiZ3JvY2VyeVRleHRGaWVsZFwiKSBncm9jZXJ5VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgc3VtbWFyeU9iaiA9IHRoaXMuc3VtbWFyeVNlcnZpY2UubG9hZCgpO1xuICB9XG4gIGFkZCgpIHtcbiAgICBcbiAgfVxuICBzaGFyZSgpIHtcbiAgICBcbiAgfVxuICBkZWxldGUoKXtcbiAgICBcbiAgfVxufSJdfQ==