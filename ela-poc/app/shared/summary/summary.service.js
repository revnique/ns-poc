"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var summary_1 = require("./summary");
var SummaryService = (function () {
    function SummaryService(http) {
        this.http = http;
    }
    SummaryService.prototype.load = function () {
        var summary = new summary_1.Summary();
        summary.email = "yosemitesam@looneytunes.com";
        summary.firstname = "Yosemite";
        summary.lastname = "Sam";
        summary.fundsAvailable = 2777.77;
        summary.nextPaymentAmount = 155.55;
        summary.nextPayDate = new Date("11/11/2017");
        return summary;
    };
    SummaryService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return SummaryService;
}());
SummaryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SummaryService);
exports.SummaryService = SummaryService;
(function () {
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VtbWFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBQzlDLDhCQUFxQztBQUNyQyxpQ0FBK0I7QUFHL0IscUNBQW9DO0FBS3BDLElBQWEsY0FBYztJQUN2Qix3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRW5DLDZCQUFJLEdBQUo7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsS0FBSyxHQUFHLDZCQUE2QixDQUFDO1FBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7UUFDbkMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFHRCxxQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTtxQ0FFaUIsV0FBSTtHQURyQixjQUFjLENBb0IxQjtBQXBCWSx3Q0FBYztBQXFCM0IsQ0FBQztBQUdELENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgU3VtbWFyeSB9IGZyb20gXCIuL3N1bW1hcnlcIjtcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdW1tYXJ5U2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIGxldCBzdW1tYXJ5ID0gbmV3IFN1bW1hcnkoKTtcbiAgICAgICAgc3VtbWFyeS5lbWFpbCA9IFwieW9zZW1pdGVzYW1AbG9vbmV5dHVuZXMuY29tXCI7XG4gICAgICAgIHN1bW1hcnkuZmlyc3RuYW1lID0gXCJZb3NlbWl0ZVwiO1xuICAgICAgICBzdW1tYXJ5Lmxhc3RuYW1lID0gXCJTYW1cIjtcbiAgICAgICAgc3VtbWFyeS5mdW5kc0F2YWlsYWJsZSA9IDI3NzcuNzc7XG4gICAgICAgIHN1bW1hcnkubmV4dFBheW1lbnRBbW91bnQgPSAxNTUuNTU7XG4gICAgICAgIHN1bW1hcnkubmV4dFBheURhdGUgPSBuZXcgRGF0ZShcIjExLzExLzIwMTdcIik7XG4gICAgICAgIHJldHVybiBzdW1tYXJ5O1xuICAgIH1cblxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cblxufVxuKGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuXG59KSgpOyJdfQ==