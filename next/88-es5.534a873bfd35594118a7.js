function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f9a68584192ab89eb9c03195bc31cf2bf541d66b9\u241f2673400971030039835:With loading and unavailable image"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241faf8d845c1070b259e6a6c86f73b63f8ed2a66aeb\u241f6145238317927282087:Simple mode"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f02f0674c5a9d1755c787e6879af0feb3146e4851\u241f921011384987579529:Full preview"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f1a419b39100e7619e93fe1240787f2f3d09acf40\u241f2205961696933518269: Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{XTi6:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPreviewModule",(function(){return re}));var i=n("An66"),o=n("1VvW"),r=n("SVIu"),a=n("935X"),l=n("Qq0t"),c=n("cWK9"),p=n("l4xa"),s=n("kZht"),m=n("OZlg"),u=n("e0eB"),d=n("aPft"),v=n("iyc4"),w=n("zV1d"),h=n("AUps"),g=n("FnSC"),f=n("R3qf"),b=n("tEIx"),x=n("j0HG"),y=["preview"],S=["contentSample"];function C(e,t){1&e&&s["\u0275\u0275element"](0,"img",10),2&e&&s["\u0275\u0275property"]("src",t.$implicit,s["\u0275\u0275sanitizeUrl"])}function k(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-preview",4),s["\u0275\u0275listener"]("tuiSwipe",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().onSwipe(e)})),s["\u0275\u0275elementStart"](1,"tui-preview-title"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-preview-pagination",5),s["\u0275\u0275listener"]("indexChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().index=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"button",6),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().delete()})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"button",7),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().download()})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"button",8),s["\u0275\u0275listener"]("click",(function(){return t.$implicit.complete()})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",9),s["\u0275\u0275template"](8,C,1,1,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){var i=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("rotatable",!0),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](i.title),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("length",i.length)("index",i.index),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("content",i.previewContent)}}function T(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",11),s["\u0275\u0275elementStart"](1,"h1"),s["\u0275\u0275text"](2,"Important document"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"p"),s["\u0275\u0275text"](4," Hello everyone! This is some important document in A4 format, although it is made using html "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"p"),s["\u0275\u0275text"](6," This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](7,"img",12),s["\u0275\u0275elementEnd"]())}var I,P=((I=function(){function e(t,n){_classCallCheck(this,e),this.previewService=t,this.notificationsService=n,this.index=0,this.length=2}return _createClass(e,[{key:"show",value:function(){this.previewService.open(this.preview||"").subscribe({complete:function(){return console.log("complete")}})}},{key:"download",value:function(){this.notificationsService.show("Downloading...").subscribe()}},{key:"delete",value:function(){this.notificationsService.show("Deleting...").subscribe()}},{key:"onSwipe",value:function(e){"left"===e.direction&&(this.index=Object(p.clamp)(this.index+1,0,this.length-1)),"right"===e.direction&&(this.index=Object(p.clamp)(this.index-1,0,this.length-1))}},{key:"title",get:function(){return 0===this.index?"Transaction cert.jpg":"My face.jpg"}},{key:"previewContent",get:function(){return 0===this.index&&this.contentSample?this.contentSample:"http://marsibarsi.me/images/1x1small.jpg"}}]),e}()).\u0275fac=function(e){return new(e||I)(s["\u0275\u0275directiveInject"](a.b),s["\u0275\u0275directiveInject"](l.TuiNotificationsService))},I.\u0275cmp=s["\u0275\u0275defineComponent"]({type:I,selectors:[["tui-preview-example-1"]],viewQuery:function(e,t){var n;1&e&&(s["\u0275\u0275viewQuery"](y,!0),s["\u0275\u0275viewQuery"](S,!0)),2&e&&(s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.preview=n.first),s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.contentSample=n.first))},decls:8,vars:0,consts:[[1,"tui-space_bottom-2"],["tuiButton","","size","m","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],["contentSample",""],[3,"rotatable","tuiSwipe"],[3,"length","index","indexChange"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconTrash","title","Delete",3,"click"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconDownload","title","Download",3,"click"],["tuiPreviewAction","","tuiIconButton","","icon","tuiIconCloseLarge","title","Close",3,"click"],["polymorpheus-outlet","",3,"content"],["alt","",3,"src"],[1,"content"],["src","https://github.com/TinkoffCreditSystems/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg",1,"polymorpheus"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275text"](1,"With all features"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"button",1),s["\u0275\u0275listener"]("click",(function(){return t.show()})),s["\u0275\u0275text"](3," Show preview\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](4,k,9,5,"ng-template",null,2,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](6,T,8,0,"ng-template",null,3,s["\u0275\u0275templateRefExtractor"]))},directives:[w.a,h.a,g.a,f.a,b.a,x.a,c.d],styles:[".content[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);background-color:var(--tui-base-01);width:50rem;height:68.75rem;padding:3.75rem;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:.75rem}.polymorpheus[_ngcontent-%COMP%]{padding:2.5rem 10.375rem}"],changeDetection:0}),I),j=["preview"];function D(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-preview",2),s["\u0275\u0275element"](1,"iframe",3),s["\u0275\u0275elementStart"](2,"button",4),s["\u0275\u0275listener"]("click",(function(){return t.$implicit.complete()})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("rotatable",!1)("zoomable",!1)}var $,E=(($=function(){function e(t){_classCallCheck(this,e),this.previewDialogService=t}return _createClass(e,[{key:"show",value:function(){this.previewDialogService.open(this.preview||"").subscribe()}}]),e}()).\u0275fac=function(e){return new(e||$)(s["\u0275\u0275directiveInject"](a.b))},$.\u0275cmp=s["\u0275\u0275defineComponent"]({type:$,selectors:[["tui-preview-example-2"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](j,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.preview=n.first)},decls:4,vars:0,consts:[["tuiButton","","size","m","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],["src","https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1","frameborder","0","allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",1,"content"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconCloseLarge","title","Close",3,"click"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"button",0),s["\u0275\u0275listener"]("click",(function(){return t.show()})),s["\u0275\u0275text"](1," Show simple preview\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,D,3,2,"ng-template",null,1,s["\u0275\u0275templateRefExtractor"]))},directives:[w.a,h.a,x.a],styles:[".content[_ngcontent-%COMP%]{width:80vw;height:80vh}"],changeDetection:0}),$),_=n("C05f"),O=n("ROBh"),B=n("8lHc"),M=n("YtkY"),z=n("xVbo"),A=n("TLy2"),R=n("jIqt"),L=n("7SLS"),V=n("ONKv"),U=n("HUEM"),Q=["preview"];function W(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"div",9),s["\u0275\u0275element"](2,"tui-svg",10),s["\u0275\u0275elementStart"](3,"div"),s["\u0275\u0275text"](4,"Preview unavailable"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementContainerEnd"]())}function q(e,t){1&e&&s["\u0275\u0275element"](0,"img",11),2&e&&s["\u0275\u0275property"]("src",t.ngIf,s["\u0275\u0275sanitizeUrl"])}function H(e,t){1&e&&s["\u0275\u0275element"](0,"tui-loader",12)}function N(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-preview",2),s["\u0275\u0275pipe"](1,"async"),s["\u0275\u0275pipe"](2,"async"),s["\u0275\u0275pipe"](3,"async"),s["\u0275\u0275elementStart"](4,"tui-preview-title"),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"async"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"tui-preview-pagination",3),s["\u0275\u0275listener"]("indexChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().index$$.next(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"button",4),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().download()})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"button",5),s["\u0275\u0275listener"]("click",(function(){return t.$implicit.complete()})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](10,W,5,0,"ng-container",6),s["\u0275\u0275pipe"](11,"async"),s["\u0275\u0275template"](12,q,1,1,"img",7),s["\u0275\u0275pipe"](13,"async"),s["\u0275\u0275template"](14,H,1,0,"tui-loader",8),s["\u0275\u0275pipe"](15,"async"),s["\u0275\u0275elementEnd"]()}if(2&e){var i=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("rotatable",!s["\u0275\u0275pipeBind1"](1,8,i.contentUnavailable$))("zoomable",!s["\u0275\u0275pipeBind1"](2,10,i.contentUnavailable$)&&!s["\u0275\u0275pipeBind1"](3,12,i.loading$)),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](6,14,i.title$)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("length",i.items.length)("index",i.index$$.value),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](11,16,i.contentUnavailable$)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](13,18,i.imageSrc$)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](15,20,i.loading$))}}var F,X,Z=((F=function(){function e(t){var n=this;_classCallCheck(this,e),this.previewDialogService=t,this.items=[{title:"some table.xlsx",hasPreview:!1},{title:"Content #2",hasPreview:!0}],this.index$$=new _.a(0),this.item$=this.index$$.pipe(Object(M.a)((function(e){return n.items[e]})),Object(z.a)(p.isPresent)),this.title$=this.item$.pipe(Object(M.a)((function(e){return e.title}))),this.contentUnavailable$=this.item$.pipe(Object(M.a)((function(e){return!e.hasPreview}))),this.imageSrc$=this.item$.pipe(Object(A.a)((function(e){return e.hasPreview?n.emulateBackendRequest().pipe(Object(R.a)("")):Object(O.a)(null)}))),this.loading$=this.imageSrc$.pipe(Object(M.a)((function(e){return""===e})))}return _createClass(e,[{key:"show",value:function(){this.previewDialogService.open(this.preview||"").subscribe()}},{key:"download",value:function(){console.log("downloading...")}},{key:"emulateBackendRequest",value:function(){return Object(B.a)(1500).pipe(Object(L.a)("https://ng-web-apis.github.io/dist/assets/images/web-api.svg"))}}]),e}()).\u0275fac=function(e){return new(e||F)(s["\u0275\u0275directiveInject"](a.b))},F.\u0275cmp=s["\u0275\u0275defineComponent"]({type:F,selectors:[["tui-preview-example-3"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](Q,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.preview=n.first)},decls:4,vars:0,consts:[["tuiButton","","size","m","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],[3,"length","index","indexChange"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconDownload","title","Download",3,"click"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconCloseLarge","title","Close",3,"click"],[4,"ngIf"],["width","512","height","512",3,"src",4,"ngIf"],["size","xl","class","t-loader",4,"ngIf"],[1,"t-container"],["src","tuiIconFileLarge",1,"t-icon"],["width","512","height","512",3,"src"],["size","xl",1,"t-loader"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"button",0),s["\u0275\u0275listener"]("click",(function(){return t.show()})),s["\u0275\u0275text"](1," Show preview\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,N,16,22,"ng-template",null,1,s["\u0275\u0275templateRefExtractor"]))},directives:[w.a,h.a,f.a,b.a,x.a,i.t,V.a,U.a],pipes:[i.b],styles:[".content[_ngcontent-%COMP%]{background-color:#f5f1f1;width:25rem;height:37.5rem;padding:2.5rem;border-radius:.75rem}.t-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--tui-text-02-night)}.t-icon[_ngcontent-%COMP%]{margin-bottom:.75rem;-webkit-transform:scale(4);transform:scale(4);height:5rem}.t-loader[_ngcontent-%COMP%]{width:4rem}"],changeDetection:0}),F),J=n("u8jZ");X=$localize(_templateObject());var K=["heading",$localize(_templateObject2())],Y=["heading",$localize(_templateObject3())],G=["heading",$localize(_templateObject4())];function ee(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,X),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275text"](3,"As a document you can provide any content like images,"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"tui-notification",3),s["\u0275\u0275text"](5," The component automatically adjusts to the mobile device "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](7,K),s["\u0275\u0275element"](8,"tui-preview-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](10,Y),s["\u0275\u0275element"](11,"tui-preview-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"tui-doc-example",6),s["\u0275\u0275i18nAttributes"](13,G),s["\u0275\u0275element"](14,"tui-preview-example-3"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("content",n.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example3)}}function te(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",7),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275text"](2," Add "),s["\u0275\u0275elementStart"](3,"code"),s["\u0275\u0275text"](4,"TuiDialogModule"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](5," to main module: "),s["\u0275\u0275element"](6,"tui-doc-code",8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"li"),s["\u0275\u0275text"](8," Import "),s["\u0275\u0275elementStart"](9,"code"),s["\u0275\u0275text"](10,"TuiPreviewModule"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](11," to the module, which will call the preview "),s["\u0275\u0275element"](12,"tui-doc-code",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"li"),s["\u0275\u0275text"](14," Create a template with tui-preview "),s["\u0275\u0275element"](15,"tui-doc-code",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"li"),s["\u0275\u0275text"](17," Open the component from the "),s["\u0275\u0275elementStart"](18,"code"),s["\u0275\u0275text"](19,"TuiPreviewDialogService"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](20," as in the example "),s["\u0275\u0275element"](21,"tui-doc-code",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",n.exampleImportHostModule),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",n.exampleImportModule),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("code",n.exampleTemplate),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",n.exampleComponent)}}var ne,ie,oe=((ie=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiPreviewModule} from '@taiga-ui/addon-preview';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiPreviewModule\n    ],\n...\n",this.exampleComponent="import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {TuiPreviewService} from '@taiga-ui/addon-preview';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n    ...\n})\nexport class SomeComponent {\n    @ViewChild('preview')\n    readonly preview: TemplateRef<TuiDialogContext<void>>;\n\n    constructor(\n        @Inject(TuiPreviewDialogService) private readonly previewDialogService: TuiPreviewDialogService,\n    ) {}\n\n    show() {\n        this.previewDialogService.open(this.preview).subscribe();\n    }\n}\n",this.exampleTemplate='<ng-template #preview>\n    <tui-preview>\n        <tui-preview-title>{{title}}</tui-preview-title>\n        <tui-preview-pagination\n            [length]="2"\n            [(index)]="index"\n        ></tui-preview-pagination>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconTrash"\n            title="Delete"\n            (click)="delete()"\n        ></button>\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconDownload"\n            title="Download"\n            (click)="download()"\n        ></button>\n\n        <div polymorpheus-outlet [content]="previewContent">\n            <ng-template let-src>\n                <img [src]="src" />\n            </ng-template>\n        </div>\n    </tui-preview>\n</ng-template>\n',this.example1={TypeScript:"import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {PreviewDialogService} from '@taiga-ui/addon-preview';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\nimport {clamp, TuiSwipe} from '../../../../../../../cdk';\nimport {TuiDialogContext, TuiNotificationsService} from '../../../../../../../core';\n\n@Component({\n    selector: 'tui-preview-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPreviewExample1 {\n    @ViewChild('preview')\n    readonly preview?: TemplateRef<TuiDialogContext<void>>;\n\n    @ViewChild('contentSample')\n    readonly contentSample?: TemplateRef<{}>;\n\n    index = 0;\n    length = 2;\n\n    constructor(\n        @Inject(PreviewDialogService)\n        private readonly previewService: PreviewDialogService,\n        @Inject(TuiNotificationsService)\n        private readonly notificationsService: TuiNotificationsService,\n    ) {}\n\n    get title(): string {\n        return this.index === 0 ? 'Transaction cert.jpg' : 'My face.jpg';\n    }\n\n    get previewContent(): PolymorpheusContent {\n        return this.index === 0 && this.contentSample\n            ? this.contentSample\n            : 'http://marsibarsi.me/images/1x1small.jpg';\n    }\n\n    show() {\n        this.previewService.open(this.preview || '').subscribe({\n            complete: () => console.log('complete'),\n        });\n    }\n\n    download() {\n        this.notificationsService.show('Downloading...').subscribe();\n    }\n\n    delete() {\n        this.notificationsService.show('Deleting...').subscribe();\n    }\n\n    onSwipe(swipe: TuiSwipe) {\n        if (swipe.direction === 'left') {\n            this.index = clamp(this.index + 1, 0, this.length - 1);\n        }\n\n        if (swipe.direction === 'right') {\n            this.index = clamp(this.index - 1, 0, this.length - 1);\n        }\n    }\n}\n",LESS:"@import 'taiga-ui-local';\n\n.content {\n    .text-body-xl();\n    background-color: var(--tui-base-01);\n    width: 50rem;\n    height: 68.75rem;\n    padding: 3.75rem;\n    box-sizing: border-box;\n    border-radius: 0.75rem;\n}\n\n.polymorpheus {\n    padding: 2.5rem 10.375rem;\n}\n",HTML:'<div class="tui-space_bottom-2">With all features</div>\n\n<button\n    tuiButton\n    size="m"\n    type="button"\n    class="tui-space_bottom-4"\n    (click)="show()"\n>\n    Show preview\n</button>\n\n<ng-template #preview let-preview>\n    <tui-preview [rotatable]="true" (tuiSwipe)="onSwipe($event)">\n        <tui-preview-title>{{title}}</tui-preview-title>\n        <tui-preview-pagination\n            [length]="length"\n            [(index)]="index"\n        ></tui-preview-pagination>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconTrash"\n            title="Delete"\n            (click)="delete()"\n        ></button>\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconDownload"\n            title="Download"\n            (click)="download()"\n        ></button>\n        <button\n            tuiPreviewAction\n            tuiIconButton\n            icon="tuiIconCloseLarge"\n            title="Close"\n            (click)="preview.complete()"\n        ></button>\n\n        <div polymorpheus-outlet [content]="previewContent">\n            <ng-template let-src>\n                <img alt="" [src]="src" />\n            </ng-template>\n        </div>\n    </tui-preview>\n</ng-template>\n\n<ng-template #contentSample>\n    <div class="content">\n        <h1>Important document</h1>\n\n        <p>\n            Hello everyone! This is some important document in A4 format,\n            although it is made using html\n        </p>\n\n        <p>\n            This shows that the component preview can work with absolutely any\n            content: this way you can show any template, image, pdf or even\n            iframe with your favorite site. We will put this content in the\n            center of the portal and provide the user with control over it, and\n            we will provide you with convenient levers to change it and process\n            actions.\n        </p>\n\n        <img\n            src="https://github.com/TinkoffCreditSystems/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg"\n            class="polymorpheus"\n        />\n    </div>\n</ng-template>\n'},this.example2={TypeScript:"import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {PreviewDialogService} from '@taiga-ui/addon-preview';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-preview-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPreviewExample2 {\n    @ViewChild('preview')\n    readonly preview?: TemplateRef<TuiDialogContext<void>>;\n\n    constructor(\n        @Inject(PreviewDialogService)\n        private readonly previewDialogService: PreviewDialogService,\n    ) {}\n\n    show() {\n        this.previewDialogService.open(this.preview || '').subscribe();\n    }\n}\n",LESS:".content {\n    width: 80vw;\n    height: 80vh;\n}\n",HTML:'<button\n    tuiButton\n    size="m"\n    type="button"\n    class="tui-space_bottom-4"\n    (click)="show()"\n>\n    Show simple preview\n</button>\n\n<ng-template #preview let-preview>\n    <tui-preview [rotatable]="false" [zoomable]="false">\n        <iframe\n            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"\n            frameborder="0"\n            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n            allowfullscreen\n            class="content"\n        ></iframe>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconCloseLarge"\n            title="Close"\n            (click)="preview.complete()"\n        ></button>\n    </tui-preview>\n</ng-template>\n'},this.example3={TypeScript:"import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {PreviewDialogService} from '@taiga-ui/addon-preview';\nimport {isPresent} from '@taiga-ui/cdk';\nimport {TuiDialogContext} from '@taiga-ui/core';\nimport {BehaviorSubject, Observable, of, timer} from 'rxjs';\nimport {filter, map, mapTo, startWith, switchMap} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-preview-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPreviewExample3 {\n    @ViewChild('preview')\n    readonly preview?: TemplateRef<TuiDialogContext<void>>;\n\n    readonly items = [\n        {\n            title: 'some table.xlsx',\n            hasPreview: false,\n        },\n        {\n            title: 'Content #2',\n            hasPreview: true,\n        },\n    ];\n\n    readonly index$$ = new BehaviorSubject<number>(0);\n\n    readonly item$ = this.index$$.pipe(\n        map(index => this.items[index]),\n        filter(isPresent),\n    );\n\n    readonly title$ = this.item$.pipe(map(item => item.title));\n\n    readonly contentUnavailable$ = this.item$.pipe(map(item => !item.hasPreview));\n\n    readonly imageSrc$ = this.item$.pipe(\n        switchMap(item =>\n            item.hasPreview ? this.emulateBackendRequest().pipe(startWith('')) : of(null),\n        ),\n    );\n\n    readonly loading$ = this.imageSrc$.pipe(map(src => src === ''));\n\n    constructor(\n        @Inject(PreviewDialogService)\n        private readonly previewDialogService: PreviewDialogService,\n    ) {}\n\n    show() {\n        this.previewDialogService.open(this.preview || '').subscribe();\n    }\n\n    download() {\n        console.log('downloading...');\n    }\n\n    emulateBackendRequest(): Observable<string> {\n        return timer(1500).pipe(\n            mapTo('https://ng-web-apis.github.io/dist/assets/images/web-api.svg'),\n        );\n    }\n}\n",LESS:".content {\n    background-color: rgb(245, 241, 241);\n    width: 25rem;\n    height: 37.5rem;\n    padding: 2.5rem;\n    border-radius: 0.75rem;\n}\n\n.t-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: var(--tui-text-02-night);\n}\n\n.t-icon {\n    margin-bottom: 0.75rem;\n    transform: scale(4);\n    height: 5rem;\n}\n\n.t-loader {\n    width: 4rem;\n}\n",HTML:'<button\n    tuiButton\n    size="m"\n    type="button"\n    class="tui-space_bottom-4"\n    (click)="show()"\n>\n    Show preview\n</button>\n\n<ng-template #preview let-preview>\n    <tui-preview\n        [rotatable]="!(contentUnavailable$ | async)"\n        [zoomable]="!(contentUnavailable$ | async) && !(loading$ | async)"\n    >\n        <tui-preview-title>{{title$ | async}}</tui-preview-title>\n        <tui-preview-pagination\n            [length]="items.length"\n            [index]="index$$.value"\n            (indexChange)="index$$.next($event)"\n        ></tui-preview-pagination>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconDownload"\n            title="Download"\n            (click)="download()"\n        ></button>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconCloseLarge"\n            title="Close"\n            (click)="preview.complete()"\n        ></button>\n\n        <ng-container *ngIf="contentUnavailable$ | async">\n            <div class="t-container">\n                <tui-svg src="tuiIconFileLarge" class="t-icon"></tui-svg>\n                <div>Preview unavailable</div>\n            </div>\n        </ng-container>\n\n        <img\n            *ngIf="imageSrc$ | async as src"\n            width="512"\n            height="512"\n            [src]="src"\n        />\n\n        <tui-loader\n            *ngIf="loading$ | async"\n            size="xl"\n            class="t-loader"\n        ></tui-loader>\n    </tui-preview>\n</ng-template>\n'}}).\u0275fac=function(e){return new(e||ie)},ie.\u0275cmp=s["\u0275\u0275defineComponent"]({type:ie,selectors:[["example-preview"]],decls:3,vars:0,consts:[["header","Preview","package","ADDON-PREVIEW"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_bottom-4"],["id","default",3,"content",6,"heading"],["id","simple",3,"content",6,"heading"],["id","loading",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","some.module.ts",3,"code"],["filename","some.component.html",3,"code"],["filename","some.component.ts",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,ee,15,3,"ng-template",1),s["\u0275\u0275template"](2,te,22,4,"ng-template",2),s["\u0275\u0275elementEnd"]())},directives:[m.a,u.a,d.a,v.a,P,E,Z,J.a],encapsulation:2,changeDetection:0}),ie),re=((ne=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:ne}),ne.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ne)},imports:[[i.c,c.c,l.TuiButtonModule,a.c,l.TuiNotificationModule,r.h,l.TuiSvgModule,l.TuiLoaderModule,p.TuiSwipeModule,o.f.forChild(Object(r.o)(oe))]]}),ne)}}]);