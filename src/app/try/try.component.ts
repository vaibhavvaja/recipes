import { Component } from "@angular/core";

@Component({
    selector : "try",
    templateUrl : "./try.component.html"
})


export class TryComponent{

    batmanStatus = false;
    tries = [];

    constructor(){
    this.getBatmanStatus();
    }

    getColor(){
       return this.batmanStatus === true ? "green" : "red"
    }

    getBatmanInfo(){
        return this.batmanStatus === true
        ? "Its a Night time and Batman is out in the city capturing badmen"
        : "Its a Day time and Batman is chilling at Mansion with Alfred"
    }

    getBatmanStatus(){
        this.batmanStatus = !this.batmanStatus
        let status = this.getBatmanInfo()
        this.tries.push(status);
    }

    
}