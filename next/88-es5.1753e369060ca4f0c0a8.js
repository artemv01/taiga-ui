function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"j+7j":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPdfViewerModule",(function(){return F}));var i=n("An66"),a=n("1VvW"),o=n("SVIu"),c=n("Qq0t"),r=n("dvRg"),l=n("kZht"),s=n("OZlg"),u=n("e0eB"),p=n("aPft"),d=n("iyc4"),m=n("ENSU"),f=n("zV1d");function h(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"a",3),l["\u0275\u0275text"](1,"Download"),l["\u0275\u0275elementEnd"]()),2&e&&l["\u0275\u0275property"]("href",t.content,l["\u0275\u0275sanitizeUrl"])}var v,g=((v=function(){function e(t,n){_classCallCheck(this,e),this.sanitizer=t,this.pdfService=n}return _createClass(e,[{key:"show",value:function(e){this.pdfService.open(this.sanitizer.bypassSecurityTrustResourceUrl("/assets/media/taiga.pdf"),{label:"Taiga UI",actions:e}).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||v)(l["\u0275\u0275directiveInject"](m.DomSanitizer),l["\u0275\u0275directiveInject"](r.TuiPdfViewerService))},v.\u0275cmp=l["\u0275\u0275defineComponent"]({type:v,selectors:[["tui-pdf-viewer-example-1"]],decls:6,vars:0,consts:[[1,"tui-space_bottom-3"],["tuiButton","",3,"click"],["actions",""],["tuiButton","","shape","rounded","size","s","download","",3,"href"]],template:function(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tui-notification",0),l["\u0275\u0275text"](1," Note that you need to bypass sanitizer in order to use the URL so make sure you trust it\n"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"button",1),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=l["\u0275\u0275reference"](5);return t.show(e)})),l["\u0275\u0275text"](3,"Taiga"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](4,h,2,1,"ng-template",null,2,l["\u0275\u0275templateRefExtractor"])}},directives:[p.a,f.a],encapsulation:2,changeDetection:0}),v),w=n("cWK9"),x=n("TLy2");function b(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",1),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.$implicit,i=l["\u0275\u0275nextContext"]();return e.onClick(i.context)})),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",i.text," ")}}var y,C=((y=function e(t){_classCallCheck(this,e),this.context=t}).\u0275fac=function(e){return new(e||y)(l["\u0275\u0275directiveInject"](w.a))},y.\u0275cmp=l["\u0275\u0275defineComponent"]({type:y,selectors:[["ng-component"]],decls:1,vars:1,consts:[["tuiButton","","size","s","shape","rounded","class","tui-space_left-3",3,"click",4,"ngFor","ngForOf"],["tuiButton","","size","s","shape","rounded",1,"tui-space_left-3",3,"click"]],template:function(e,t){1&e&&l["\u0275\u0275template"](0,b,2,1,"button",0),2&e&&l["\u0275\u0275property"]("ngForOf",t.context.data)},directives:[i.s,f.a],encapsulation:2}),y),S=n("8lHc"),k=n("7SLS"),T=n("HUEM");function E(e,t){1&e&&l["\u0275\u0275element"](0,"iframe",2),2&e&&l["\u0275\u0275property"]("src",t.ngIf,l["\u0275\u0275sanitizeResourceUrl"])}function I(e,t){1&e&&l["\u0275\u0275element"](0,"tui-loader",3)}var _,P,M=((P=function e(t){_classCallCheck(this,e),this.sanitizer=t,this.src$=Object(S.a)(3e3).pipe(Object(k.a)(this.sanitizer.bypassSecurityTrustResourceUrl("/assets/media/taiga.pdf")))}).\u0275fac=function(e){return new(e||P)(l["\u0275\u0275directiveInject"](m.DomSanitizer))},P.\u0275cmp=l["\u0275\u0275defineComponent"]({type:P,selectors:[["ng-component"]],decls:4,vars:4,consts:[[3,"src",4,"ngIf","ngIfElse"],["loading",""],[3,"src"],["size","xl"]],template:function(e,t){if(1&e&&(l["\u0275\u0275template"](0,E,1,1,"iframe",0),l["\u0275\u0275pipe"](1,"async"),l["\u0275\u0275template"](2,I,1,0,"ng-template",null,1,l["\u0275\u0275templateRefExtractor"])),2&e){var n=l["\u0275\u0275reference"](3);l["\u0275\u0275property"]("ngIf",l["\u0275\u0275pipeBind1"](1,2,t.src$))("ngIfElse",n)}},directives:[i.t,T.a],pipes:[i.b],styles:["[_nghost-%COMP%] { display: flex; height: 100% } [_nghost-%COMP%]    > *[_ngcontent-%COMP%] { flex: 1 }"]}),P),j=((_=function(){function e(t,n){_classCallCheck(this,e),this.notifications=t,this.pdfService=n}return _createClass(e,[{key:"show",value:function(){var e=this,t={label:"Taiga UI",actions:new w.b(C),data:[{text:"Sign",onClick:function(e){return e.completeWith("Document signed")}},{text:"Deny",onClick:function(e){return e.completeWith("Document denied")}}]};this.pdfService.open(new w.b(M),t).pipe(Object(x.a)((function(t){return e.notifications.show(t)}))).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||_)(l["\u0275\u0275directiveInject"](c.TuiNotificationsService),l["\u0275\u0275directiveInject"](r.TuiPdfViewerService))},_.\u0275cmp=l["\u0275\u0275defineComponent"]({type:_,selectors:[["tui-pdf-viewer-example-2"]],decls:2,vars:0,consts:[["tuiButton","",3,"click"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"button",0),l["\u0275\u0275listener"]("click",(function(){return t.show()})),l["\u0275\u0275text"](1,"Taiga"),l["\u0275\u0275elementEnd"]())},directives:[f.a],encapsulation:2,changeDetection:0}),_),V=n("kSYu");function O(e,t){1&e&&l["\u0275\u0275element"](0,"iframe",2)}var z,D=((z=function e(){_classCallCheck(this,e),this.open=!1}).\u0275fac=function(e){return new(e||z)},z.\u0275cmp=l["\u0275\u0275defineComponent"]({type:z,selectors:[["tui-pdf-viewer-example-3"]],decls:3,vars:1,consts:[["tuiButton","",3,"click"],[3,"tuiPdfViewer","tuiPdfViewerChange"],["src","assets/media/taiga.pdf",1,"iframe"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"button",0),l["\u0275\u0275listener"]("click",(function(){return t.open=!0})),l["\u0275\u0275text"](1,"Taiga"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](2,O,1,0,"ng-template",1),l["\u0275\u0275listener"]("tuiPdfViewerChange",(function(e){return t.open=e}))),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("tuiPdfViewer",t.open))},directives:[f.a,V.a],styles:[".iframe[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0}),z),B=n("u8jZ");function L(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275text"](1,"Custom dialog to preview PDF"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-notification",3),l["\u0275\u0275text"](3," Keep in mind mobile devices do not support displaying PDFs in iframe, so you need to rely on "),l["\u0275\u0275elementStart"](4,"code"),l["\u0275\u0275text"](5,"TUI_IS_MOBILE"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](6," token to provide suitable alternative behavior "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-doc-example",4),l["\u0275\u0275element"](8,"tui-pdf-viewer-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"tui-doc-example",5),l["\u0275\u0275element"](10,"tui-pdf-viewer-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"tui-doc-example",6),l["\u0275\u0275element"](12,"tui-pdf-viewer-example-3"),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("content",n.example1),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",n.example2),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",n.example3)}}function U(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",7),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275text"](2," Import "),l["\u0275\u0275elementStart"](3,"code"),l["\u0275\u0275text"](4,"TuiPdfViewerModule"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](5," to your main app module: "),l["\u0275\u0275element"](6,"tui-doc-code",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"li"),l["\u0275\u0275text"](8," Show preview with a service: "),l["\u0275\u0275element"](9,"tui-doc-code",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](6),l["\u0275\u0275property"]("code",n.exampleImportModule),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("code",n.exampleService)}}var R,H,N=((H=function e(){_classCallCheck(this,e),this.exampleService=n.e(285).then(n.bind(null,"HL60")),this.exampleImportModule=n.e(284).then(n.bind(null,"d4Ml")),this.example1={TypeScript:n.e(276).then(n.bind(null,"dwLb")),HTML:n.e(275).then(n.bind(null,"COnf"))},this.example2={TypeScript:n.e(279).then(n.bind(null,"BMaj")),HTML:n.e(278).then(n.bind(null,"QQkl")),"actions-content.component.ts":n.e(277).then(n.bind(null,"RrOu")),"pdf-content.component.ts":n.e(280).then(n.bind(null,"N6b9"))},this.example3={TypeScript:n.e(283).then(n.bind(null,"bogk")),HTML:n.e(281).then(n.bind(null,"Ccep")),LESS:n.e(282).then(n.bind(null,"juV8"))}}).\u0275fac=function(e){return new(e||H)},H.\u0275cmp=l["\u0275\u0275defineComponent"]({type:H,selectors:[["example-tui-pdf-viewer"]],decls:3,vars:0,consts:[["header","PdfViewer","package","KIT"],["pageTab",""],["pageTab","Setup"],["status","warning"],["id","base","heading","Basic",3,"content"],["id","component","heading","Component",3,"content"],["id","directive","heading","Directive",3,"content"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275template"](1,L,13,3,"ng-template",1),l["\u0275\u0275template"](2,U,10,2,"ng-template",2),l["\u0275\u0275elementEnd"]())},directives:[s.a,u.a,p.a,d.a,g,j,D,B.a],encapsulation:2,changeDetection:0}),H),F=((R=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:R}),R.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||R)},imports:[[i.c,r.TuiPdfViewerModule,c.TuiLoaderModule,c.TuiButtonModule,c.TuiNotificationModule,o.h,a.f.forChild(Object(o.o)(N))]]}),R)}}]);