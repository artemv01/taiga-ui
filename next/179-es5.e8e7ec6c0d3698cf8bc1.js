function _templateObject9(){var e=_taggedTemplateLiteral([":\u241f943913395bbc8575620ded56eb7590932890b0e8\u241f4557069972581195317: If you use component in lazy loading modules, do not forget to pass into ",":START_TAG_CODE:new PolymorpheusComponent Injector",":CLOSE_TAG_CODE: of component where you open table bar "]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241fb7d425f4c801f0a1d193d06c1862a5bc0cc48c14\u241f2388724752770660394: Use ",":START_TAG_CODE:open",":CLOSE_TAG_CODE: method and subscribe to returened ",":START_TAG_CODE:Observable",":CLOSE_TAG_CODE:"]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f066cf82b786e3393ee3efed2ca0016a89d7a4357\u241f5654054825567970286: Add ",":START_TAG_CODE:tui-table-bars-host",":CLOSE_TAG_CODE: into your app.template "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f33b59d28b627891220e6c360c8ffb07eef6c76cb\u241f5586136887716454770: Add ",":START_TAG_CODE:TuiTableBarsHostModule",":CLOSE_TAG_CODE: into your app.module "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241fcdcabff292f0314e30e6f31102dd5ede8bb860a0\u241f1527305502164610498: Light / dark mode "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f0508167899eda99f73e069ef49027af94e6b0328\u241f4329350149148955327: Enable close button "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f5e641f8103cca3a413f65da8c27fcc74a78fbef3\u241f5646260285050734970: Adaprive content "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f05d4df37c18ee658a26e40dcb633f2f1dd0fa7aa\u241f1919187952417466728: It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{gjbm:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTableBarModule",(function(){return q}));var a=n("An66"),o=n("3kIJ"),r=n("1VvW"),i=n("T8fS"),l=n("SVIu"),c=n("Qq0t"),u=n("dvRg"),s=n("cWK9"),m=n("vhpW"),p=n("ZTXN"),d=n("bwdy"),b=n("kuMc"),f=n("kZht"),h=n("OZlg"),T=n("e0eB"),y=n("iyc4"),v=n("zV1d"),g=n("TxeG"),B=["tableBarTemplate"];function C(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"div",2),f["\u0275\u0275elementStart"](1,"button",3),f["\u0275\u0275text"](2,"Save"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"button",4),f["\u0275\u0275listener"]("click",(function(){return(0,t.$implicit)()})),f["\u0275\u0275text"](4," Cancel "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"button",5),f["\u0275\u0275text"](6," Delete "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]())}var S,_,x=((S=function(){function e(t){_classCallCheck(this,e),this.tableBarsService=t,this.tableBarTemplate="",this.subscription=new d.a}return _createClass(e,[{key:"showTableBar",value:function(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{hasCloseButton:!0,adaptive:!0}).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||S)(f["\u0275\u0275directiveInject"](m.b))},S.\u0275cmp=f["\u0275\u0275defineComponent"]({type:S,selectors:[["tui-table-bar-example-1"]],viewQuery:function(e,t){var n;1&e&&f["\u0275\u0275viewQuery"](B,!0),2&e&&f["\u0275\u0275queryRefresh"](n=f["\u0275\u0275loadQuery"]())&&(t.tableBarTemplate=n.first)},decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["tuiMode","onDark",1,"content"],["tuiButton","","type","button","size","m"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-space_left-3",3,"click"],["tuiButton","","type","button","appearance","outline","size","m","icon","tuiIconTrashLarge",1,"delete-button"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"button",0),f["\u0275\u0275listener"]("click",(function(){return t.showTableBar()})),f["\u0275\u0275text"](1," Show TableBar\n"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275template"](2,C,7,0,"ng-template",null,1,f["\u0275\u0275templateRefExtractor"]))},directives:[v.a,g.a],styles:[".content[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.875rem 0}.delete-button[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),S),O=n("yHor"),w=n("zGJC"),E=n("u8jZ"),j=["tableBarTemplate"];_=$localize(_templateObject());var k,P,V,M,L,z,A,D=["heading",$localize(_templateObject2())];function I(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"p"),f["\u0275\u0275i18n"](1,_),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](2,"tui-doc-example",2),f["\u0275\u0275i18nAttributes"](3,D),f["\u0275\u0275element"](4,"tui-table-bar-example-1"),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("content",n.example1)}}function R(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"p"),f["\u0275\u0275text"](1,"Some template"),f["\u0275\u0275elementEnd"]())}function $(e,t){1&e&&f["\u0275\u0275i18n"](0,k)}function G(e,t){1&e&&f["\u0275\u0275i18n"](0,P)}function N(e,t){1&e&&f["\u0275\u0275i18n"](0,V)}function H(e,t){if(1&e){var n=f["\u0275\u0275getCurrentView"]();f["\u0275\u0275elementStart"](0,"div"),f["\u0275\u0275elementStart"](1,"button",3),f["\u0275\u0275listener"]("click",(function(){return f["\u0275\u0275restoreView"](n),f["\u0275\u0275nextContext"]().showTableBar()})),f["\u0275\u0275text"](2," Show tableBar "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"button",4),f["\u0275\u0275listener"]("click",(function(){return f["\u0275\u0275restoreView"](n),f["\u0275\u0275nextContext"]().destroy()})),f["\u0275\u0275text"](4," Hide tableBar "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275template"](5,R,2,0,"ng-template",null,5,f["\u0275\u0275templateRefExtractor"]),f["\u0275\u0275element"](7,"br"),f["\u0275\u0275elementStart"](8,"tui-doc-documentation"),f["\u0275\u0275template"](9,$,1,0,"ng-template",6),f["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return f["\u0275\u0275restoreView"](n),f["\u0275\u0275nextContext"]().adaptive=e})),f["\u0275\u0275template"](10,G,1,0,"ng-template",7),f["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return f["\u0275\u0275restoreView"](n),f["\u0275\u0275nextContext"]().hasCloseButton=e})),f["\u0275\u0275template"](11,N,1,0,"ng-template",8),f["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return f["\u0275\u0275restoreView"](n),f["\u0275\u0275nextContext"]().mode=e})),f["\u0275\u0275elementEnd"]()}if(2&e){var a=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](9),f["\u0275\u0275property"]("documentationPropertyValue",a.adaptive),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("documentationPropertyValue",a.hasCloseButton),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("documentationPropertyValues",a.modeVariants)("documentationPropertyValue",a.mode)}}function Q(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"ol",9),f["\u0275\u0275elementStart"](1,"li"),f["\u0275\u0275elementStart"](2,"p"),f["\u0275\u0275i18nStart"](3,M),f["\u0275\u0275element"](4,"code"),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](5,"tui-doc-code",10),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](6,"li"),f["\u0275\u0275elementStart"](7,"p"),f["\u0275\u0275i18nStart"](8,L),f["\u0275\u0275element"](9,"code"),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](10,"tui-doc-code",10),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](11,"li"),f["\u0275\u0275elementStart"](12,"p"),f["\u0275\u0275i18nStart"](13,z),f["\u0275\u0275element"](14,"code"),f["\u0275\u0275element"](15,"code"),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](16,"tui-doc-code",11),f["\u0275\u0275element"](17,"tui-doc-code",12),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](18,"li"),f["\u0275\u0275elementStart"](19,"p"),f["\u0275\u0275i18nStart"](20,A),f["\u0275\u0275element"](21,"code"),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](22,"tui-doc-code",13),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](5),f["\u0275\u0275property"]("code",n.exampleModule),f["\u0275\u0275advance"](5),f["\u0275\u0275property"]("code",n.exampleTemplate),f["\u0275\u0275advance"](6),f["\u0275\u0275property"]("code",n.exampleServiceUsageHtml),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("code",n.exampleServiceUsage),f["\u0275\u0275advance"](5),f["\u0275\u0275property"]("code",n.exampleLazyModule)}}k=$localize(_templateObject3()),P=$localize(_templateObject4()),V=$localize(_templateObject5()),M=$localize(_templateObject6(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),L=$localize(_templateObject7(),"\ufffd#9\ufffd","\ufffd/#9\ufffd"),z=$localize(_templateObject8(),"[\ufffd#14\ufffd|\ufffd#15\ufffd]","[\ufffd/#14\ufffd|\ufffd/#15\ufffd]","[\ufffd#14\ufffd|\ufffd#15\ufffd]","[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"),z=f["\u0275\u0275i18nPostprocess"](z),A=$localize(_templateObject9(),"\ufffd#21\ufffd","\ufffd/#21\ufffd");var U,J,Z=((J=function(){function e(t){_classCallCheck(this,e),this.tableBarsService=t,this.destroy$=new p.a,this.tableBarTemplate="",this.exampleServiceUsage="import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\n...\n\n@ViewChild('tableBarTemplate')\ntableBarTemplate: TemplateRef<{}>;\n\nconstructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n\n...\n    this.tableBarsService\n        .showTableBar(this.tableBarTemplate, {\n            mode: 'onLight',\n            hasCloseButton: true,\n        })\n    .subscribe();\n...\n",this.exampleServiceUsageHtml="<ng-template #tableBarTemplate>\n    <p>Template</p>\n</ng-template>\n",this.exampleLazyModule="import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\nimport {Injector} from '@angular/core';\nimport {CustomTableBarsComponent} from 'customTableBars.component';\n...\n\nconstructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n\n...\n    this.tableBarsService\n        .showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, this.injector))\n        .subscribe();\n...\n",this.exampleModule="import {TuiTableBarsHostModule} from '@taiga-ui/addon-tablebars';\nimport {TuiRootModule} from '@taiga-ui/core';\n...\n\n@NgModule({\n    imports: [\n        TuiRootModule,\n        TuiTableBarsHostModule,\n        ...\n    ]\n...\n",this.exampleTemplate='<tui-root>\n    \x3c!-- The rest of your application --\x3e\n    <tui-table-bars-host\n        ngProjectAs="tuiOverNotifications"\n    ></tui-table-bars-host>\n</tui-root>\n',this.example1={TypeScript:"import {Component, Inject, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {Subscription} from 'rxjs';\n\n@Component({\n    selector: 'tui-table-bar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableBarExampleComponent1 {\n    @ViewChild('tableBarTemplate')\n    tableBarTemplate: PolymorpheusContent = '';\n\n    subscription = new Subscription();\n\n    constructor(\n        @Inject(TuiTableBarsService)\n        private readonly tableBarsService: TuiTableBarsService,\n    ) {}\n\n    showTableBar() {\n        this.subscription.unsubscribe();\n\n        this.subscription = this.tableBarsService\n            .open(this.tableBarTemplate || '', {\n                hasCloseButton: true,\n                adaptive: true,\n            })\n            .subscribe();\n    }\n}\n",HTML:'<button tuiButton type="button" size="m" (click)="showTableBar()">\n    Show TableBar\n</button>\n\n<ng-template #tableBarTemplate let-close>\n    <div tuiMode="onDark" class="content">\n        <button tuiButton type="button" size="m">Save</button>\n        <button\n            tuiButton\n            type="button"\n            appearance="flat"\n            size="m"\n            class="tui-space_left-3"\n            (click)="close()"\n        >\n            Cancel\n        </button>\n        <button\n            tuiButton\n            type="button"\n            appearance="outline"\n            size="m"\n            icon="tuiIconTrashLarge"\n            class="delete-button"\n        >\n            Delete\n        </button>\n    </div>\n</ng-template>\n',LESS:".content {\n    display: flex;\n    align-items: center;\n    padding: 0.875rem 0;\n}\n\n.delete-button {\n    margin-left: auto;\n}\n"},this.modeVariants=["onLight","onDark"],this.mode=this.modeVariants[0],this.adaptive=!1,this.hasCloseButton=!1,this.subscription=new d.a}return _createClass(e,[{key:"showTableBar",value:function(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{adaptive:this.adaptive,mode:this.mode,hasCloseButton:this.hasCloseButton}).pipe(Object(b.a)(this.destroy$)).subscribe()}},{key:"destroy",value:function(){this.destroy$.next()}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}}]),e}()).\u0275fac=function(e){return new(e||J)(f["\u0275\u0275directiveInject"](m.b))},J.\u0275cmp=f["\u0275\u0275defineComponent"]({type:J,selectors:[["example-tui-table-bar"]],viewQuery:function(e,t){var n;1&e&&f["\u0275\u0275viewQuery"](j,!0),2&e&&f["\u0275\u0275queryRefresh"](n=f["\u0275\u0275loadQuery"]())&&(t.tableBarTemplate=n.first)},decls:4,vars:0,consts:[["header","TableBarsService","package","ADDON-TABLEBARS","path","addon-tablebars/services/table-bars.service.ts"],["pageTab",""],["id","base",3,"content",6,"heading"],["tuiButton","","type","button","size","m",1,"tui-space_right-2",3,"click"],["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["documentationPropertyName","adaptive","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyType","TuiBrightness",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","customNotification.component.ts",3,"code"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tui-doc-page",0),f["\u0275\u0275template"](1,I,5,1,"ng-template",1),f["\u0275\u0275template"](2,H,12,4,"ng-template",1),f["\u0275\u0275template"](3,Q,23,5,"ng-template",1),f["\u0275\u0275elementEnd"]())},directives:[h.a,T.a,y.a,x,v.a,O.a,w.a,E.a],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),J),q=((U=function e(){_classCallCheck(this,e)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:U}),U.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||U)},imports:[[a.c,c.TuiButtonModule,i.TuiMoneyModule,s.c,u.TuiRadioListModule,u.TuiInputModule,c.TuiLinkModule,o.FormsModule,c.TuiModeModule,l.h,r.f.forChild(Object(l.o)(Z))]]}),U)}}]);