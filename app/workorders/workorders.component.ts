import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar"
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { isIOS } from "tns-core-modules/platform";
import { Color } from "color";

import { UserService } from "../shared/user.service";
import { WorkordersService } from "~/shared/workorders.service";

@Component({
    selector: "Workorders",
    moduleId: module.id,
    templateUrl: "./workorders.component.html",
    styleUrls: ['./workorders.component.css']
})
export class WorkordersComponent implements OnInit {
    searchPhrase: string;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar> args.object;
        console.log("You are searching fro " + searchBar.text);
    }
    items: { desc: string, service: string, time: string, constractor: string, status: string, showName: boolean} [] = [
        
        { desc:"Montair #415", service:"Cleaning", time:"6/12/19", constractor:"", status:"pending", showName:true},
        { desc:"Test Apartment Complex #101", service:"Painting", time:"11/13/19", constractor:"John S.", status:"Due", showName:true},
        { desc:"Test Apartment Complex 2 # 201", service:"Draining", time:"6/12/19", constractor:"John S.", status:"Completed", showName:true},
        { desc:"Test Apartment Complex 2 # 201", service:"Draining", time:"6/18/19", constractor:"", status:"in_Progress", showName:false},
        { desc:"2411 E Asubry Ave  #415", service:"Texture Repair", time:"6/12/19", constractor:"", status:"pending", showName:false},
        { desc:"2411 E Asubry Ave  #415", service:"Drywall Repair", time:"6/12/19", constractor:"John S.", status:"pending", showName:true},
        { desc:"2411 E Asubry Ave  #415", service:"Cleaning", time:"6/12/19", constractor:"", status:"pending", showName:false},
        { desc:"Montair #415", service:"Custom", time:"6/12/19", constractor:"", status:"pending", showName:false},
        { desc:"2411 E Asubry Ave  #415", service:"Custom", time:"6/12/19", constractor:"John S.", status:"pending", showName:true},
        { desc:"Montair #415", service:"Cleaning", time:"6/12/19", constractor:"", status:"pending", showName:false},
        { desc:"Montair #415", service:"Others", time:"6/12/19", constractor:"", status:"pending", showName:false}
    ]


    constructor(private workorderService: WorkordersService, private userService: UserService,  private routerExtensions: RouterExtensions ) {
    }

    ngOnInit(): void {
        let self = this;
        this.workorderService.workordersList()
        .then((res)=> {

            console.log("第二次得到", res);
            function learn(item, index) {
                console.log("1212121212", item, index)
                return{
                    desc: item.aptComplex,
                    service: item.service,
                    time: item.dueDate,
                    constractor: item.orderedBy,
                    status: self.getStatus(item),
                    showName: item.occupied,
                }
            }
            this.items = res.map(learn)
            console.log("get data data data data data")
        })
    }

    getStatus(item) {
        if(item.completed){
            return "Completed";
        }else{
            return "in_Progress";
        }
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    onDetail(): void {
        this.routerExtensions.navigate(["/detail"], {
            animated: true,
            transition: {
                name: "slideLeft",
                duration: 200,
                curve: "easeIn"
            }
        });
    }

    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }
}