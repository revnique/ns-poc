"use strict";
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var summary_component_1 = require("./pages/summary/summary.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "summary", component: summary_component_1.SummaryComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    summary_component_1.SummaryComponent,
    list_component_1.ListComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCx1RUFBcUU7QUFFeEQsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0NBQ2pELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLGdDQUFjO0lBQ2Qsb0NBQWdCO0lBQ2hCLDhCQUFhO0NBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcbiAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogXCJsaXN0XCIsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwic3VtbWFyeVwiLCBjb21wb25lbnQ6IFN1bW1hcnlDb21wb25lbnQgfVxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcbiAgTG9naW5Db21wb25lbnQsXG4gIFN1bW1hcnlDb21wb25lbnQsXG4gIExpc3RDb21wb25lbnRcbl07Il19