"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var app = require("application");
var router_1 = require("nativescript-angular/router");
var calendarModule = require("nativescript-ui-calendar");
var color_1 = require("tns-core-modules/color/color");
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.num = "";
        this.str = "";
        this.bool = false;
        this.calendarEvents = [];
        // source from https://play.nativescript.org/?template=play-ng&id=DKSI1b&v=10
        var events = [];
        var now = new Date();
        var startDate;
        var endDate;
        var colors = [new color_1.Color(200, 188, 26, 214), new color_1.Color(220, 255, 109, 130), new color_1.Color(255, 55, 45, 255), new color_1.Color(199, 17, 227, 10), new color_1.Color(255, 255, 54, 3)];
        for (var i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
            endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
            var event_1 = new calendarModule.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event_1);
            if (i % 3 == 0) {
                event_1 = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                events.push(event_1);
            }
        }
        this.calendarEvents = events;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        // second parameter to getXXX() is a default value
        var num = appSettings.getNumber("someNumber", 0);
        this.num = num === 0 ? "" : num.toString();
        this.str = appSettings.getString("someString", "");
        this.bool = appSettings.getBoolean("someBoolean", false);
    };
    CalendarComponent.prototype.createWorkorder = function () {
        this.routerExtensions.navigate(["/creatework"], { clearHistory: true });
    };
    CalendarComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CalendarComponent.prototype.home = function () {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    CalendarComponent = __decorate([
        core_1.Component({
            selector: "Calendar",
            moduleId: module.id,
            templateUrl: "./calendar.component.html",
            styleUrls: ['./calendar.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFvRDtBQUNwRCxpQ0FBbUM7QUFDbkMsc0RBQStEO0FBRS9ELHlEQUEyRDtBQUMzRCxzREFBcUQ7QUFRckQ7SUFTSSwyQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQdEQsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFNaEIsNkVBQTZFO1FBQzdFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksU0FBUyxDQUFDO1FBQ2QsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakssS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksT0FBSyxHQUFHLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUgsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFLLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNaLE9BQUssR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2SCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxDQUFDO2FBQ3RCO1NBQ0o7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUVqQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLGtEQUFrRDtRQUNsRCxJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsMkNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFuRFEsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQVV3Qyx5QkFBZ0I7T0FUN0MsaUJBQWlCLENBcUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0ICogYXMgY2FsZW5kYXJNb2R1bGUgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDYWxlbmRhclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBudW06IHN0cmluZyA9IFwiXCI7XG4gICAgc3RyOiBzdHJpbmcgPSBcIlwiO1xuICAgIGJvb2w6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjYWxlbmRhckV2ZW50cyA9IFtdO1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICBcbiAgICAgICAgLy8gc291cmNlIGZyb20gaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvP3RlbXBsYXRlPXBsYXktbmcmaWQ9REtTSTFiJnY9MTBcbiAgICAgICAgbGV0IGV2ZW50cyA9IFtdO1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZTtcbiAgICAgICAgbGV0IGVuZERhdGU7XG4gICAgICAgIGxldCBjb2xvcnMgPSBbbmV3IENvbG9yKDIwMCwgMTg4LCAyNiwgMjE0KSwgbmV3IENvbG9yKDIyMCwgMjU1LCAxMDksIDEzMCksIG5ldyBDb2xvcigyNTUsIDU1LCA0NSwgMjU1KSwgbmV3IENvbG9yKDE5OSwgMTcsIDIyNywgMTApLCBuZXcgQ29sb3IoMjU1LCAyNTUsIDU0LCAzKV07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBpICogMiwgMSk7XG4gICAgICAgICAgICBlbmREYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAoaSAqIDIpLCAzKTtcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KFwiZXZlbnQgXCIgKyBpLCBzdGFydERhdGUsIGVuZERhdGUsIGZhbHNlLCBjb2xvcnNbaSAqIDEwICUgKGNvbG9ycy5sZW5ndGggLSAxKV0pO1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGkgJSAzID09IDApIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KFwic2Vjb25kIFwiICsgaSwgc3RhcnREYXRlLCBlbmREYXRlLCB0cnVlLCBjb2xvcnNbaSAqIDUgJSAoY29sb3JzLmxlbmd0aCAtIDEpXSk7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsZW5kYXJFdmVudHMgPSBldmVudHM7XG4gICAgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgdG8gZ2V0WFhYKCkgaXMgYSBkZWZhdWx0IHZhbHVlXG4gICAgICAgIGNvbnN0IG51bSA9IGFwcFNldHRpbmdzLmdldE51bWJlcihcInNvbWVOdW1iZXJcIiwgMCk7XG4gICAgICAgIHRoaXMubnVtID0gbnVtID09PSAwID8gXCJcIiA6IG51bS50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMuc3RyID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic29tZVN0cmluZ1wiLCBcIlwiKTtcbiAgICAgICAgdGhpcy5ib29sID0gYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbihcInNvbWVCb29sZWFuXCIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVXb3Jrb3JkZXIoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jcmVhdGV3b3JrXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBob21lKCl7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG59XG4iXX0=