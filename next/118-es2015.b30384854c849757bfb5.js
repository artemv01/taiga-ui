(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{"7Pyk":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiElementModule",(function(){return v}));var o=n("sEIs"),l=n("SVIu"),a=n("l4xa"),i=n("Qq0t"),m=n("EM62"),c=n("OZlg"),r=n("e0eB"),u=n("iyc4"),p=n("zV1d"),s=n("KAEk");let d=(()=>{class e{isButton(e){return e instanceof i.TuiButtonComponent}isElement(e){return e instanceof m.ElementRef}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-element-example-1"]],decls:12,vars:2,consts:[["tuiButton","","type","button",1,"tui-space_right-3"],["component",""],["tuiButton","","type","button","tuiElement","",1,"tui-space_right-3"],["element","elementRef"],["tuiButton","","type","button",3,"click"]],template:function(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",0,1),m["\u0275\u0275text"](2," component\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"button",2,3),m["\u0275\u0275text"](5," element\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"p"),m["\u0275\u0275text"](7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"p"),m["\u0275\u0275text"](9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"button",4),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275reference"](4).nativeElement.focus()})),m["\u0275\u0275text"](11," Focus element\n"),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275reference"](1),n=m["\u0275\u0275reference"](4);m["\u0275\u0275advance"](7),m["\u0275\u0275textInterpolate1"]("component instanceof TuiButtonComponent: ",t.isButton(e),""),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"]("element instanceof ElementRef: ",t.isElement(n),"")}},directives:[p.a,s.a],encapsulation:2,changeDetection:0}),e})();var f=n("u8jZ");const E=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var b;b=$localize`:␟bbf356663a879b8c6ee372d624fed23013ce1d7c␟3511452584999636990: Directive is used to get a link to a native element as template reference variable (analogue of ${"\ufffd#2\ufffd"}:START_TAG_CODE:@ViewChild('ref', ${"\ufffd0\ufffd"}:INTERPOLATION:)${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: for template) `;const g=["heading",$localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`];function T(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18nStart"](1,b),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](4,g),m["\u0275\u0275element"](5,"tui-element-example-1"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275i18nExp"](e.elementRefText),m["\u0275\u0275i18nApply"](1),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("content",e.example1)}}var x,y;function h(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",4),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,x),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,y),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}x=$localize`:␟71e427954ec9ac6810b1dec00e591503974f5954␟4448415241730108367: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiElementModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,y=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let C=(()=>{class e{constructor(){this.example1={TypeScript:"import {Component, ElementRef} from '@angular/core';\nimport {TuiButtonComponent} from '@taiga-ui/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-element-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiElementExample1 {\n    isButton(component: any): boolean {\n        return component instanceof TuiButtonComponent;\n    }\n\n    isElement(element: any): boolean {\n        return element instanceof ElementRef;\n    }\n}\n",HTML:'<button #component tuiButton type="button" class="tui-space_right-3">\n    component\n</button>\n<button\n    #element="elementRef"\n    tuiButton\n    type="button"\n    tuiElement\n    class="tui-space_right-3"\n>\n    element\n</button>\n<p>component instanceof TuiButtonComponent: {{isButton(component)}}</p>\n<p>element instanceof ElementRef: {{isElement(element)}}</p>\n<button tuiButton type="button" (click)="element.nativeElement.focus()">\n    Focus element\n</button>\n'},this.exampleImportModule="import {TuiElementModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiElementModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-scrollbar #element="elementRef" tuiElement>\n    <some-infinite-scroll-library [scrollingElement]="element.nativeElement">\n        ...\n    </some-infinite-scroll-library>\n</tui-scrollbar>\n',this.elementRefText="{read: ElementRef}"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-element"]],decls:4,vars:0,consts:[["header","Element","package","CDK","type","directives"],["pageTab",""],[6,"pageTab"],["id","usage",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,T,6,2,"ng-template",1),m["\u0275\u0275template"](2,h,10,2,"ng-template",2),m["\u0275\u0275i18nAttributes"](3,E),m["\u0275\u0275elementEnd"]())},directives:[c.a,r.a,u.a,d,f.a],styles:["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{background:#87ceeb}"],changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.TuiButtonModule,a.TuiElementModule,l.h,o.f.forChild(Object(l.o)(C))]]}),e})()}}]);