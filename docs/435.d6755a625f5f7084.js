"use strict";(self.webpackChunkGameOver=self.webpackChunkGameOver||[]).push([[435],{5435:(q,p,n)=>{n.r(p),n.d(p,{GamesModule:()=>b});var u=n(6895),c=n(9965),e=n(8256),g=n(5323),d=n(433),v=n(2066),Z=n(9020);const m=function(o){return["/details",o]};function f(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",6)(1,"article",72),e.NdJ("mouseenter",function(){e.CHM(t);const s=e.MAs(6),l=e.MAs(9),r=e.oxw();return e.KtG(r.playVideo(s,l))})("mouseleave",function(){e.CHM(t);const s=e.MAs(6),l=e.MAs(9),r=e.oxw();return e.KtG(r.stopVideo(s,l))}),e.TgZ(2,"div",73)(3,"figure",74),e._UZ(4,"img",75)(5,"video",76,77),e.ALo(7,"sliceUntile"),e.TgZ(8,"div",78,79)(10,"div",80)(11,"span",81),e._uU(12,"Loading..."),e.qZA()()()(),e.TgZ(13,"figcaption",82)(14,"h3",83),e._uU(15),e.qZA(),e.TgZ(16,"p",84),e._uU(17,"Free"),e.qZA()()()()()}if(2&o){const t=a.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(8,m,t.id)),e.xp6(3),e.Q6J("src",t.thumbnail,e.LSH)("alt",t.title),e.xp6(1),e.Q6J("src",e.xi3(7,5,t.thumbnail,"videoplayback.webm"),e.LSH),e.xp6(10),e.Oqu(t.title)}}function _(o,a){1&o&&e._UZ(0,"i",98)}function h(o,a){1&o&&e._UZ(0,"i",99)}function A(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",6)(1,"article",85),e.NdJ("mouseenter",function(){e.CHM(t);const s=e.MAs(6),l=e.MAs(9),r=e.oxw();return e.KtG(r.playVideo(s,l))})("mouseleave",function(){e.CHM(t);const s=e.MAs(6),l=e.MAs(9),r=e.oxw();return e.KtG(r.stopVideo(s,l))}),e.TgZ(2,"div",86)(3,"figure",87),e._UZ(4,"img",75)(5,"video",76,77),e.ALo(7,"sliceUntile"),e.TgZ(8,"div",78,79)(10,"div",80)(11,"span",81),e._uU(12,"Loading..."),e.qZA()()()(),e.TgZ(13,"figcaption",88)(14,"div",89)(15,"h3",90),e._uU(16),e.qZA(),e.TgZ(17,"span",91),e._uU(18,"Free"),e.qZA()(),e.TgZ(19,"p",92),e._uU(20),e.ALo(21,"cut"),e.qZA()(),e.TgZ(22,"footer",93)(23,"span",94),e._uU(24),e.qZA(),e.TgZ(25,"div",95),e.YNc(26,_,1,0,"i",96),e.YNc(27,h,1,0,"i",97),e.qZA()()()()()}if(2&o){const t=a.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(15,m,t.id)),e.xp6(3),e.Q6J("src",t.thumbnail,e.LSH)("alt",t.title),e.xp6(1),e.Q6J("src",e.xi3(7,9,t.thumbnail,"videoplayback.webm"),e.LSH),e.xp6(11),e.Oqu(t.title),e.xp6(4),e.hij(" ",e.xi3(21,12,t.short_description,10),"... "),e.xp6(4),e.Oqu(t.genre),e.xp6(2),e.Q6J("ngIf",null==t.platform?null:t.platform.includes("PC")),e.xp6(1),e.Q6J("ngIf",null==t.platform?null:t.platform.includes("Web"))}}const T=[{path:"",component:(()=>{class o{constructor(t,i,s){this._GamesService=t,this._ActivatedRoute=i,this._Router=s,this.curentPlat="",this.curentSort="",this.curentCat="",this.curentCategory=this._ActivatedRoute.snapshot.params.category??"all",this.gamesData=[],this.curentYear=(new Date).getFullYear(),this.curentLength=20,this.loading=!0}seeMore(){scrollY+innerHeight+200>=document.body.offsetHeight&&(this.gamesData.length>this.curentLength?this.curentLength+=20:this.loading=!1)}ngOnInit(){console.log(this.curentCategory),this.getGamesByCateory(),$(".select1").customSelect({placeholder:'<span style="color: darkgray;">Browse By Platform:</span>',transition:400,hideCallback:()=>{const t=$(".select-cust2 .custom-select").find('[class$="value"]').text(),i=$(".select-cust1 .custom-select").find('[class$="value"]').text(),s=$(".select-cust3 .custom-select").find('[class$="value"]').text();console.log(i,t,s),this.curentPlat!==i&&this.getGamesByCPS(t,i,s)}}),$(".select2").customSelect({placeholder:'<span style="color: darkgray;">Browse By Genre:</span>',transition:400,hideCallback:()=>{const t=$(".select-cust1 .custom-select").find('[class$="value"]').text(),i=$(".select-cust2 .custom-select").find('[class$="value"]').text(),s=$(".select-cust3 .custom-select").find('[class$="value"]').text();this.curentCat!==i&&this.getGamesByCPS(i,t,s)}}),$(".select3").customSelect({placeholder:'<span style="color: darkgray;">Sort By:</span>',transition:400,hideCallback:()=>{const t=$(".select-cust1 .custom-select").find('[class$="value"]').text(),i=$(".select-cust2 .custom-select").find('[class$="value"]').text(),s=$(".select-cust3 .custom-select").find('[class$="value"]').text();this.curentSort!==s&&this.getGamesByCPS(i,t,s)}}),$(`#Genre option[value=${this.curentCategory}]`).attr("selected","selected"),$(".select-cust2 .custom-select > button").html(this.curentCategory)}getGamesByCateory(){"all"===this.curentCategory?this._GamesService.getAllGames().subscribe({next:t=>{console.log(t),this.gamesData=t}}):this._GamesService.getGameBycategory(this.curentCategory).subscribe({next:t=>{console.log(t),this.gamesData=t}})}gernerChange(t){this._GamesService.getGameBycategory(t).subscribe({next:i=>{this.gamesData=i}})}getGamesByCPS(t,i,s){this._GamesService.getGamesByCPS(t,i,s).subscribe({next:l=>{console.log(l),this.gamesData=l}})}playVideo(t,i){this._GamesService.playVideo(t,i)}stopVideo(t,i){this._GamesService.stopVideo(t,i)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g.B),e.Y36(c.gz),e.Y36(c.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-games"]],hostBindings:function(t,i){1&t&&e.NdJ("scroll",function(){return i.seeMore()},!1,e.Jf7)},decls:184,vars:12,consts:[["id","games"],[1,"container","py-4"],[1,"h4","text-muted","text-capitalize","py-5"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","g-4"],["class","col",4,"ngFor","ngForOf"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","g-4","py-5"],[1,"col"],[1,"d-flex","align-items-center","gap-2","select-cust1",2,"cursor","pointer"],["for","Platform"],["id","Platform","aria-label",".form-select-sm example",1,"form-select","form-select-sm","border-0","select1"],["value","pc"],["value","browser "],["value","all",3,"selected"],[1,"d-flex","align-items-center","gap-2","select-cust2","border-0",2,"cursor","pointer"],["for","Genre"],["id","Genre","aria-label",".form-select-sm example",1,"form-select","form-select-sm","border-0","select2"],["value","mmorpg"],[1,"text-uppercase"],["value","shooter"],["value","strategy"],["value","moba"],["value","racing"],["value","sports"],["value","social"],["value","sandbox"],["value","open-world"],["value","survival"],["value","pvp"],["value","pve"],["value","pixel"],["value","voxel"],["value","zombie"],["value","turn-based"],["value","first-person"],["value","third-Person"],["value","top-down"],["value","tank"],["value","space"],["value","sailing"],["value","side-scroller"],["value"," 'superhero', "],["value","permadeath"],["value","card"],["value","battle-royale"],["value","mmo"],["value","mmofps"],["value","mmotps"],["value","3d"],["value","2d"],["value","anime"],["value","fantasy"],["value","sci-fi"],["value","fighting"],["value","action-rpg"],["value","action"],["value","military"],["value","martial-arts"],["value","flight"],["value","low-spec"],["value","tower-defense"],["value","horror"],["value","mmorts"],[1,"d-flex","align-items-center","gap-2","select-cust3","border-0",2,"cursor","pointer"],["for","Sort",1,""],["id","Sort","aria-label",".form-select-sm example",1,"form-select","form-select-sm","border-0","select3"],["value","release-date"],["value","popularity"],["value","alphabetical"],["value","relevance"],[1,"area","py-5"],[1,"container"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","row-cols-xl-4","g-4"],[1,"curd","overflow-hidden","shadow","bg-transparent",2,"cursor","pointer",3,"routerLink","mouseenter","mouseleave"],[1,"position-relative"],[1,"image","position-relative"],[1,"w-100",3,"src","alt"],["preload","none","muted","true","loop","",1,"w-100","h-100","position-absolute","top-0","start-0","d-none",3,"src"],["video",""],[1,"layer","position-absolute","top-0","start-0","w-100","h-100","bg-primary","bg-opacity-50","d-none","justify-content-center","align-items-center"],["spinner",""],["role","status",1,"spinner-grow","c-blue",2,"width","3rem","height","3rem"],[1,"visually-hidden"],[1,"card-body","d-flex","justify-content-between","align-items-center","p-3"],[1,"card-title","h5"],[1,"badge","bg-blue","mb-0","p-2","small"],[1,"card","h-100","bg-transparent","shadow",2,"cursor","pointer",3,"routerLink","mouseenter","mouseleave"],[1,"card-body"],[1,"image","position-relative","w-100"],[1,"text","mt-3"],[1,"d-flex","align-items-center","justify-content-between"],[1,"h6"],[1,"badge","bg-blue","text-white","p-2"],[1,"small","text-center"],[1,"d-flex","card-footer","justify-content-between","align-items-center"],[1,"badge","bg-second2","text-dark","fs-10"],[1,"d-flex","align-items-center","gap-2"],["class","fa-brands fa-windows",4,"ngIf"],["class","fa-solid fa-window-maximize",4,"ngIf"],[1,"fa-brands","fa-windows"],[1,"fa-solid","fa-window-maximize"]],template:function(t,i){1&t&&(e.TgZ(0,"header",0)(1,"div",1)(2,"h2",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,f,18,10,"div",4),e.ALo(6,"slice"),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),e._uU(11," Platform: "),e.qZA(),e.TgZ(12,"select",9)(13,"option",10)(14,"div"),e._uU(15,"pc"),e.qZA()(),e.TgZ(16,"option",11)(17,"div"),e._uU(18,"browser"),e.qZA()(),e.TgZ(19,"option",12)(20,"div"),e._uU(21,"all"),e.qZA()()()()(),e.TgZ(22,"div",6)(23,"div",13)(24,"label",14),e._uU(25," Genre/Tag: "),e.qZA(),e.TgZ(26,"select",15)(27,"option",16)(28,"div",17),e._uU(29,"mmorpg"),e.qZA()(),e.TgZ(30,"option",18)(31,"div",17),e._uU(32,"shooter"),e.qZA()(),e.TgZ(33,"option",19)(34,"div",17),e._uU(35,"strategy"),e.qZA()(),e.TgZ(36,"option",20)(37,"div",17),e._uU(38,"moba"),e.qZA()(),e.TgZ(39,"option",21)(40,"div",17),e._uU(41,"racing"),e.qZA()(),e.TgZ(42,"option",22)(43,"div",17),e._uU(44,"sports"),e.qZA()(),e.TgZ(45,"option",23)(46,"div",17),e._uU(47,"social"),e.qZA()(),e.TgZ(48,"option",24)(49,"div",17),e._uU(50,"sandbox"),e.qZA()(),e.TgZ(51,"option",25)(52,"div",17),e._uU(53,"open-world"),e.qZA()(),e.TgZ(54,"option",26)(55,"div",17),e._uU(56,"survival"),e.qZA()(),e.TgZ(57,"option",27)(58,"div",17),e._uU(59,"pvp"),e.qZA()(),e.TgZ(60,"option",28)(61,"div",17),e._uU(62,"pve"),e.qZA()(),e.TgZ(63,"option",29)(64,"div",17),e._uU(65,"pixel"),e.qZA()(),e.TgZ(66,"option",30)(67,"div",17),e._uU(68,"voxel"),e.qZA()(),e.TgZ(69,"option",31)(70,"div",17),e._uU(71,"zombie"),e.qZA()(),e.TgZ(72,"option",32)(73,"div",17),e._uU(74,"turn-based"),e.qZA()(),e.TgZ(75,"option",33)(76,"div",17),e._uU(77,"first-person"),e.qZA()(),e.TgZ(78,"option",34)(79,"div",17),e._uU(80,"third-Person"),e.qZA()(),e.TgZ(81,"option",35)(82,"div",17),e._uU(83,"top-down"),e.qZA()(),e.TgZ(84,"option",36)(85,"div",17),e._uU(86,"tank"),e.qZA()(),e.TgZ(87,"option",37)(88,"div",17),e._uU(89,"space"),e.qZA()(),e.TgZ(90,"option",38)(91,"div",17),e._uU(92,"sailing"),e.qZA()(),e.TgZ(93,"option",39)(94,"div",17),e._uU(95,"side-scroller"),e.qZA()(),e.TgZ(96,"option",40)(97,"div",17),e._uU(98,"'superhero',"),e.qZA()(),e.TgZ(99,"option",41)(100,"div",17),e._uU(101,"permadeath"),e.qZA()(),e.TgZ(102,"option",42)(103,"div",17),e._uU(104,"card"),e.qZA()(),e.TgZ(105,"option",43)(106,"div",17),e._uU(107,"battle-royale"),e.qZA()(),e.TgZ(108,"option",44)(109,"div",17),e._uU(110,"mmo"),e.qZA()(),e.TgZ(111,"option",45)(112,"div",17),e._uU(113,"mmofps"),e.qZA()(),e.TgZ(114,"option",46)(115,"div",17),e._uU(116,"mmotps"),e.qZA()(),e.TgZ(117,"option",47)(118,"div",17),e._uU(119,"3d"),e.qZA()(),e.TgZ(120,"option",48)(121,"div",17),e._uU(122,"2d"),e.qZA()(),e.TgZ(123,"option",49)(124,"div",17),e._uU(125,"anime"),e.qZA()(),e.TgZ(126,"option",50)(127,"div",17),e._uU(128,"fantasy"),e.qZA()(),e.TgZ(129,"option",51)(130,"div",17),e._uU(131,"sci-fi"),e.qZA()(),e.TgZ(132,"option",52)(133,"div",17),e._uU(134,"fighting"),e.qZA()(),e.TgZ(135,"option",53)(136,"div",17),e._uU(137,"action-rpg"),e.qZA()(),e.TgZ(138,"option",54)(139,"div",17),e._uU(140,"action"),e.qZA()(),e.TgZ(141,"option",55)(142,"div",17),e._uU(143,"military"),e.qZA()(),e.TgZ(144,"option",56)(145,"div",17),e._uU(146,"martial-arts"),e.qZA()(),e.TgZ(147,"option",57)(148,"div",17),e._uU(149,"flight"),e.qZA()(),e.TgZ(150,"option",58)(151,"div",17),e._uU(152,"low-spec"),e.qZA()(),e.TgZ(153,"option",59)(154,"div",17),e._uU(155,"tower-defense"),e.qZA()(),e.TgZ(156,"option",60)(157,"div",17),e._uU(158,"horror"),e.qZA()(),e.TgZ(159,"option",61)(160,"div",17),e._uU(161,"mmorts"),e.qZA()()()()(),e.TgZ(162,"div",6)(163,"div",62)(164,"label",63),e._uU(165," Sort By: "),e.qZA(),e.TgZ(166,"select",64)(167,"option",65)(168,"div"),e._uU(169,"release-date"),e.qZA()(),e.TgZ(170,"option",66)(171,"div"),e._uU(172,"popularity"),e.qZA()(),e.TgZ(173,"option",67)(174,"div"),e._uU(175,"alphabetical"),e.qZA()(),e.TgZ(176,"option",68)(177,"div"),e._uU(178,"relevance"),e.qZA()()()()()()()(),e.TgZ(179,"section",69)(180,"div",70)(181,"div",71),e.YNc(182,A,28,17,"div",4),e.ALo(183,"slice"),e.qZA()()()),2&t&&(e.xp6(3),e.hij(" top free games for pc and browser in ",i.curentYear,""),e.xp6(2),e.Q6J("ngForOf",e.Dn7(6,4,i.gamesData,0,3)),e.xp6(14),e.Q6J("selected","all"===i.curentCategory),e.xp6(163),e.Q6J("ngForOf",e.Dn7(183,8,i.gamesData,0,i.curentLength)))},dependencies:[u.sg,u.O5,c.rH,d.YN,d.Kr,u.OU,v.C,Z.F]}),o})()}];let U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(T),c.Bz]}),o})();var y=n(7923);let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,U,y.d,d.u5]}),o})()}}]);