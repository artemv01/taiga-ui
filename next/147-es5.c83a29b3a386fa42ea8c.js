function _templateObject8(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f4531ea54619a566db576498d7b988287093002a3\u241f4746491400247048532: Import ",":START_TAG_CODE:TuiSwipeModule",":CLOSE_TAG_CODE: into a module where you want to use our directive "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241fa3fa24e288faa8addbc361884d78e4bf1fa3937d\u241f5947747490679912275:With sidebar"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f9c102467fc96b921efb10bbc95fb3d3eeca98348\u241f1350150750840159964: You can configure the directive with ",":START_TAG_CODE:TUI_SWIPE_OPTIONS",":CLOSE_TAG_CODE: token. ",":LINE_BREAK: Allowed options: "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241fa34630ac655c7ae6ca59883b8038230b9a706cd1\u241f2985041163238726247:",":START_TAG_CODE:tuiSwipe",":CLOSE_TAG_CODE: directive allows detecting swipes on mobile devices. "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f692d3486522b76f188e85c329a8dee83471e833d\u241f2599663742744214450:Swipe"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{vD8y:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiSwipeModule",(function(){return $}));var i,a=n("An66"),o=n("1VvW"),r=n("SVIu"),l=n("l4xa"),c=n("hLNI"),p=n("kZht"),s=n("OZlg"),d=n("e0eB"),u=n("iyc4"),m=n("FnSC"),b=((i=function(){function e(){_classCallCheck(this,e),this.swiped="default"}return _createClass(e,[{key:"onSwipe",value:function(e){this.swiped=e.direction}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=p["\u0275\u0275defineComponent"]({type:i,selectors:[["tui-swipe-example-1"]],hostVars:2,hostBindings:function(e,t){2&e&&p["\u0275\u0275classMap"](t.swiped)},decls:2,vars:2,consts:[[1,"box","tui-text_body-l",3,"ngClass","tuiSwipe"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275listener"]("tuiSwipe",(function(e){return t.onSwipe(e)})),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("ngClass",t.swiped),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" Swiped ",t.swiped,"\n"))},directives:[a.q,m.a],styles:[".box[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--tui-primary);-webkit-transition:all .5s ease-out;transition:all .5s ease-out;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-touch-action:none;touch-action:none}.box.left[_ngcontent-%COMP%]{background-color:var(--tui-support-12)}.box.right[_ngcontent-%COMP%]{background-color:var(--tui-support-03)}.box.top[_ngcontent-%COMP%]{background-color:var(--tui-support-08)}.box.bottom[_ngcontent-%COMP%]{background-color:var(--tui-support-10)}"],changeDetection:0}),i),f=n("ZTXN"),g=n("jLdB");function w(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"div",2),p["\u0275\u0275listener"]("tuiSwipe",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().onSwipe(e)})),p["\u0275\u0275text"](1," Swipe right to close "),p["\u0275\u0275elementEnd"]()}}var h,S,x,_=((h=function(){function e(){_classCallCheck(this,e),this.open$=new f.a}return _createClass(e,[{key:"toggle",value:function(e){this.open$.next(e)}},{key:"onSwipe",value:function(e){console.log(e.direction),"left"===e.direction&&this.toggle(!0),"right"===e.direction&&this.toggle(!1)}}]),e}()).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=p["\u0275\u0275defineComponent"]({type:h,selectors:[["tui-swipe-example-2"]],decls:4,vars:4,consts:[[1,"container","tui-text_body-l",3,"tuiSwipe"],["class","sidebar tui-text_body-l",3,"tuiSwipe",4,"tuiSidebar","tuiSidebarDirection"],[1,"sidebar","tui-text_body-l",3,"tuiSwipe"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275listener"]("tuiSwipe",(function(e){return t.onSwipe(e)})),p["\u0275\u0275text"](1," Swipe left to open "),p["\u0275\u0275template"](2,w,2,0,"div",1),p["\u0275\u0275pipe"](3,"async"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("tuiSidebar",p["\u0275\u0275pipeBind1"](3,2,t.open$))("tuiSidebarDirection","right"))},directives:[m.a,g.a],pipes:[a.b],styles:[".container[_ngcontent-%COMP%]{width:200px;height:200px}.sidebar[_ngcontent-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}"],changeDetection:0}),h),v=n("u8jZ"),y=["header",$localize(_templateObject())],C=["pageTab",$localize(_templateObject2())];S=$localize(_templateObject3(),"\ufffd#2\ufffd","\ufffd/#2\ufffd"),x=$localize(_templateObject4(),"\ufffd#5\ufffd","\ufffd/#5\ufffd","\ufffd#6\ufffd\ufffd/#6\ufffd");var O,T,E=["heading",$localize(_templateObject5())],j=["heading",$localize(_templateObject6())];function k(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,S),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"p"),p["\u0275\u0275i18nStart"](4,x),p["\u0275\u0275element"](5,"code"),p["\u0275\u0275element"](6,"br"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"dl"),p["\u0275\u0275elementStart"](8,"dt"),p["\u0275\u0275elementStart"](9,"strong"),p["\u0275\u0275text"](10,"timeout:"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"dd"),p["\u0275\u0275text"](12,"max time between touchstart and touchend"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](13,"dt"),p["\u0275\u0275elementStart"](14,"strong"),p["\u0275\u0275text"](15,"threshold"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](16," : "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](17,"dd"),p["\u0275\u0275text"](18,"min distance between touchstart and touchend."),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](19,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](20,E),p["\u0275\u0275element"](21,"tui-swipe-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](22,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](23,j),p["\u0275\u0275element"](24,"tui-swipe-example-2"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](19),p["\u0275\u0275property"]("content",n.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example2)}}function M(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",4),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,O),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,T),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",n.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}O=$localize(_templateObject7(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),T=$localize(_templateObject8());var L,A,D=((A=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiSwipeModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiSwipeModule,\n    ],\n...\n",this.exampleInsertTemplate='<div (tuiSwipe)="..."></div>\n\n',this.example1={TypeScript:"import {Component, HostBinding} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSwipe} from '@taiga-ui/cdk/interfaces/swipe';\n\n@Component({\n    selector: 'tui-swipe-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSwipeExample1 {\n    @HostBinding('class')\n    swiped = 'default';\n\n    onSwipe(swipe: TuiSwipe) {\n        this.swiped = swipe.direction;\n    }\n}\n",HTML:'<div\n    class="box tui-text_body-l"\n    [ngClass]="swiped"\n    (tuiSwipe)="onSwipe($event)"\n>\n    Swiped {{swiped}}\n</div>\n',LESS:".box {\n    width: 200px;\n    height: 200px;\n    background-color: var(--tui-primary);\n    transition: all 0.5s ease-out;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    touch-action: none;\n\n    &.left {\n        background-color: var(--tui-support-12);\n    }\n\n    &.right {\n        background-color: var(--tui-support-03);\n    }\n\n    &.top {\n        background-color: var(--tui-support-08);\n    }\n\n    &.bottom {\n        background-color: var(--tui-support-10);\n    }\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSwipe} from '@taiga-ui/cdk';\nimport {Subject} from 'rxjs';\n\n@Component({\n    selector: 'tui-swipe-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSwipeExample2 {\n    readonly open$ = new Subject();\n\n    toggle(open: boolean) {\n        this.open$.next(open);\n    }\n\n    onSwipe(swipe: TuiSwipe) {\n        console.log(swipe.direction);\n\n        if (swipe.direction === 'left') {\n            this.toggle(true);\n        }\n\n        if (swipe.direction === 'right') {\n            this.toggle(false);\n        }\n    }\n}\n",HTML:'<div class="container tui-text_body-l" (tuiSwipe)="onSwipe($event)">\n    Swipe left to open\n    <div\n        *tuiSidebar="open$ | async; direction: \'right\'"\n        class="sidebar tui-text_body-l"\n        (tuiSwipe)="onSwipe($event)"\n    >\n        Swipe right to close\n    </div>\n</div>\n',LESS:".container {\n    width: 200px;\n    height: 200px;\n}\n\n.sidebar {\n    width: 100%;\n    height: 100%;\n}\n\n.container,\n.sidebar {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n"}}).\u0275fac=function(e){return new(e||A)},A.\u0275cmp=p["\u0275\u0275defineComponent"]({type:A,selectors:[["example-tui-swipe"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,y),p["\u0275\u0275template"](2,k,25,2,"ng-template",1),p["\u0275\u0275template"](3,M,10,2,"ng-template",2),p["\u0275\u0275i18nAttributes"](4,C),p["\u0275\u0275elementEnd"]())},directives:[s.a,d.a,u.a,b,_,v.a],encapsulation:2,changeDetection:0}),A),$=((L=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:L}),L.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||L)},imports:[[a.c,l.TuiSwipeModule,r.h,c.TuiSidebarModule,l.TuiActiveZoneModule,o.f.forChild(Object(r.o)(D))]]}),L)}}]);