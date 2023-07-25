import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[bg-sky]'
})
export class BgSky implements OnInit {
    private element: ElementRef;
    constructor(ele: ElementRef) {
        this.element = ele;
    }
    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = '#87CEEB';
    }

}