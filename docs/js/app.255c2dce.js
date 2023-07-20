(function(){var e={8965:function(e,t,a){"use strict";var l=a(9242),i=a(3396),s=a(4870),n=a.p+"img/CourseLogo.e6fe7123.png",o=a(7139);const r={class:"course-tag"},d={class:"slot"};function c(e,t){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("p",d,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])])}var u=a(89);const v={},p=(0,u.Z)(v,[["render",c],["__scopeId","data-v-5b870bd9"]]);var m=p,g={__name:"CourseButton",props:{active:{type:Boolean,default:!0},size:Number},setup(e){const{active:t,size:a}=e,l={1:"small",2:"medium",3:"large"};return(t,a)=>((0,i.wg)(),(0,i.iD)("button",{class:(0,o.C_)(["course-button",[e.size?l[e.size]:"medium",e.active?"active":"disabled"]])},[(0,i.WI)(t.$slots,"default")],2))}};const _=(0,u.Z)(g,[["__scopeId","data-v-c957de2e"]]);var w=_,h=a(65);const f=e=>((0,i.dD)("data-v-12b9d2c1"),e=e(),(0,i.Cn)(),e),A={class:"course-description"},C={class:"course__body"},y={class:"course__action"},k=f((()=>(0,i._)("div",{class:"course__find"},[(0,i._)("p",null,"Подобрать мне курс"),(0,i._)("svg",{width:"5",height:"10",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{d:"M4.8 5.59994C5.06667 5.24439 5.06667 4.7555 4.8 4.39994L1.8 0.399941C1.46863 -0.0418871 0.841827 -0.131429 0.4 0.199941C-0.0418281 0.531312 -0.131372 1.15811 0.199999 1.59994L2.75 4.99994L0.2 8.39994C-0.131372 8.84177 -0.0418277 9.46857 0.4 9.79994C0.841828 10.1313 1.46863 10.0418 1.8 9.59994L4.8 5.59994Z"})])],-1)));var D={__name:"CourseDescription",props:{item:{title:String,description:String}},setup(e){const{item:t}=e,a=(0,h.oR)();return(t,l)=>((0,i.wg)(),(0,i.iD)("div",A,[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Uk)("ОНЛАЙН-КУРС")])),_:1}),(0,i._)("h1",null,(0,o.zw)(e.item.title),1),(0,i._)("p",C,(0,o.zw)(e.item.description),1),(0,i._)("div",y,[(0,i.Wm)(w,{onClick:l[0]||(l[0]=e=>(0,s.SU)(a).commit("changeModal"))},{default:(0,i.w5)((()=>[(0,i.Uk)("Записаться на курс")])),_:1}),k])]))}};const B=(0,u.Z)(D,[["__scopeId","data-v-12b9d2c1"]]);var b=B;const j=e=>((0,i.dD)("data-v-50da40ee"),e=e(),(0,i.Cn)(),e),I={class:"main-course-banner"},S=j((()=>(0,i._)("img",{src:n,alt:"course logo"},null,-1)));var z={__name:"MainCourseBanner",setup(e){const t=(0,h.oR)(),a=(0,i.Fl)((()=>({title:t.state.course.title,description:t.state.course.description})));return(e,t)=>((0,i.wg)(),(0,i.iD)("div",I,[(0,i.Wm)(b,{item:a.value},null,8,["item"]),S]))}};const x=(0,u.Z)(z,[["__scopeId","data-v-50da40ee"]]);var M=x;const O={class:"info-item"},W={class:"item__title"},R={class:"item__description"};var U={__name:"CourseInfoItem",props:{item:{title:String,description:String}},setup(e){const{item:t}=e;return(t,a)=>((0,i.wg)(),(0,i.iD)("div",O,[(0,i._)("p",W,(0,o.zw)(e.item.title),1),(0,i._)("p",R,(0,o.zw)(e.item.description),1)]))}};const V=(0,u.Z)(U,[["__scopeId","data-v-b7ca85f6"]]);var Z=V;const H={class:"course-info"},P={class:"course-info mobile__wrapper"};var F={__name:"CourseInfo",setup(e){const t=(0,h.oR)(),{date:a,time:l}=t.getters.dateOfStartedCourse,{location:s,modules:n}=t.state.course.details,o=[{title:a,description:"Дата проведения"},{title:l,description:"Время проведения"},{title:s,description:"место проведения"},{title:n,description:"модулей"}],r=[{title:"30+",description:"Курсов и вебинаров"},{title:"23К",description:"Слушателей курса"},{title:"30+",description:"Кураторов и преподавателей"},{title:"30+",description:"Полезных буклетов и гайдов"}];return(e,t)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",H,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(o,(e=>(0,i.Wm)(Z,{key:e.title,item:e},null,8,["item"]))),64))]),(0,i._)("div",P,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(r,(e=>(0,i.Wm)(Z,{key:e.title,item:e},null,8,["item"]))),64))])],64))}};const N=(0,u.Z)(F,[["__scopeId","data-v-31b2c9f7"]]);var q=N;const Q=e=>((0,i.dD)("data-v-5d15dce4"),e=e(),(0,i.Cn)(),e),J=Q((()=>(0,i._)("svg",{width:"5",height:"10",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{d:"M4.8 5.59994C5.06667 5.24439 5.06667 4.7555 4.8 4.39994L1.8 0.399941C1.46863 -0.0418871 0.841827 -0.131429 0.4 0.199941C-0.0418281 0.531312 -0.131372 1.15811 0.199999 1.59994L2.75 4.99994L0.2 8.39994C-0.131372 8.84177 -0.0418277 9.46857 0.4 9.79994C0.841828 10.1313 1.46863 10.0418 1.8 9.59994L4.8 5.59994Z"})],-1))),T=[J];var E={__name:"ArrowButton",props:{disabled:{type:Boolean,required:!0},reverse:{type:Boolean,default:!1}},setup(e){const{disabled:t,reverse:a}=e;return(t,a)=>((0,i.wg)(),(0,i.iD)("button",{class:(0,o.C_)(["arrow-button",[{reverse:e.reverse},e.disabled?"disabled":"active"]])},T,2))}};const Y=(0,u.Z)(E,[["__scopeId","data-v-5d15dce4"]]);var X=Y;const L={class:"payback-list-item"},K={class:"item__wrapper"},G={class:"item__wrapper_index"},$={class:"item__wrapper_text"},ee={class:"text__title"},te={class:"text__body"};var ae={__name:"PaybackListItem",props:{item:{title:String,description:String},index:Number},setup(e){const{item:t}=e;return(t,a)=>((0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("div",K,[(0,i._)("div",G,(0,o.zw)(e.index+1),1),(0,i._)("div",$,[(0,i._)("p",ee,(0,o.zw)(e.item.title),1),(0,i._)("p",te,(0,o.zw)(e.item.description),1)])])]))}};const le=(0,u.Z)(ae,[["__scopeId","data-v-488dc825"]]);var ie=le;const se=e=>((0,i.dD)("data-v-1697384c"),e=e(),(0,i.Cn)(),e),ne={class:"course-details-payback"},oe={class:"payback__header"},re=se((()=>(0,i._)("h1",null,"Что вы получите",-1))),de={class:"payback__header_action"},ce={key:0,class:"payback__list"};var ue={__name:"CourseDetailsPayback",setup(e){const t=[{title:"Знания для преумножения капитала",description:"Знания — приносящие доход, лучшее описание курсов от Freedom Academy. Мы приоткроем занавес в мир трейдинга и покажем, как на этом можно приумножить своё благосостояние. После обучения вы сможете зарабатывать на внутридневных и среднесрочных сделках из любой точки мира, имея лишь доступ в интернет."},{title:"Сертификат",description:"В последний день занятий мы организуем фотосессию с выпускниками и проведем вручение сертификатов."},{title:"Лекционный материал",description:"Вам будут доступны лекционные материалы по программе курса, а также домашние задания для проверки и закрепления пройденного материала. Вы получите персональные комментарии от наших экспертов по выполненным заданиям."}];return(e,a)=>((0,i.wg)(),(0,i.iD)("div",ne,[(0,i._)("div",oe,[re,(0,i._)("div",de,[(0,i.Wm)(X,{reverse:!0,disabled:!0}),(0,i.Wm)(X,{disabled:!1})])]),t.length>0?((0,i.wg)(),(0,i.iD)("div",ce,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(t,((e,t)=>(0,i.Wm)(ie,{key:e.title,item:e,index:t},null,8,["item","index"]))),64))])):(0,i.kq)("",!0)]))}};const ve=(0,u.Z)(ue,[["__scopeId","data-v-1697384c"]]);var pe=ve;const me={class:"oriented-list-item"},ge={class:"item__logo"},_e=["src"],we={class:"item__text"},he={class:"item__text_title"},fe={class:"item__text_body"};var Ae={__name:"OrientedListItem",props:{item:{title:String,description:String},index:Number},setup(e){const{item:t,index:l}=e;return(t,l)=>((0,i.wg)(),(0,i.iD)("div",me,[(0,i._)("div",ge,[(0,i._)("img",{src:a(7783)(`./Oriented${e.index+1}.svg`)},null,8,_e)]),(0,i._)("div",we,[(0,i._)("p",he,(0,o.zw)(e.item.title),1),(0,i._)("p",fe,(0,o.zw)(e.item.description),1)])]))}};const Ce=(0,u.Z)(Ae,[["__scopeId","data-v-795acf0e"]]);var ye=Ce;const ke=e=>((0,i.dD)("data-v-bcb49688"),e=e(),(0,i.Cn)(),e),De={class:"course-oriented"},Be=ke((()=>(0,i._)("h1",null,"Кому подойдет курс",-1))),be={class:"oriented__list"};var je={__name:"CourseOriented",setup(e){const t=[{title:"Начинающим",description:"Тем, кто только начинает знакомство с миром трейдинга и желает освоить новые навыки и начать зарабатывать на бирже."},{title:"Инвесторам и трейдерам",description:"Тем, кто уже инвестирует, но хочет открыть новый подход в управлении своих финансов, увидеть торговые ошибки, скорректировать стратегию и приумножить благосостояние."},{title:"Фрилансерам",description:"Тем, кто не привязан к работе, но обладает свободным временем, желанием развиваться и получать уникальные возможности для заработка на фондовом рынке. Хотите освоить высокодоходный навык находясь в любой точке мира, подстроить стратегию под свои ожидания по доходу и занятости? Всё это возможно с Freedom Academy."},{title:"Штатным сотрудникам и самозанятым",description:"Тем, кто хочет найти дополнительный источник дохода или сделать инвестиции основным источником заработка. Мы научим подстраивать торговую стратегию под ваши цели и финансовые планы."}];return(e,a)=>((0,i.wg)(),(0,i.iD)("div",De,[Be,(0,i._)("div",be,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(t,((e,t)=>(0,i.Wm)(ye,{key:e.title,item:e,index:t},null,8,["item","index"]))),64))])]))}};const Ie=(0,u.Z)(je,[["__scopeId","data-v-bcb49688"]]);var Se=Ie;const ze=e=>((0,i.dD)("data-v-e486eff0"),e=e(),(0,i.Cn)(),e),xe={class:"points-item"},Me=ze((()=>(0,i._)("svg",{width:"14",height:"10",viewBox:"0 0 14 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"item__image"},[(0,i._)("path",{d:"M13.7293 0.315763C14.1072 0.71852 14.087 1.35136 13.6842 1.72926L5.15793 9.72926C4.75654 10.1059 4.12627 10.0873 3.74773 9.68775L0.27405 6.02108C-0.105781 5.62015 -0.088675 4.98722 0.312258 4.60738C0.71319 4.22755 1.34612 4.24466 1.72596 4.64559L4.5152 7.58979L12.3158 0.270747C12.7185 -0.107149 13.3514 -0.0869946 13.7293 0.315763Z",fill:"#00E183"})],-1)));var Oe={__name:"PointsItem",props:{item:{type:String,required:!0},textSize:{type:Number,default:18}},setup(e){const{item:t,textSize:a}=e;return(t,a)=>((0,i.wg)(),(0,i.iD)("div",xe,[Me,(0,i._)("p",{style:(0,o.j5)({"font-size":e.textSize+"px"})},(0,o.zw)(e.item),5)]))}};const We=(0,u.Z)(Oe,[["__scopeId","data-v-e486eff0"]]);var Re=We;const Ue=e=>((0,i.dD)("data-v-ac3e8caa"),e=e(),(0,i.Cn)(),e),Ve={class:"course-payment-points"},Ze={class:"mobile__wrapper"},He=Ue((()=>(0,i._)("p",{class:"points__title"},"Ключевые преимущеста",-1))),Pe=Ue((()=>(0,i._)("path",{d:"M4.8 5.59994C5.06667 5.24439 5.06667 4.7555 4.8 4.39994L1.8 0.399941C1.46863 -0.0418871 0.841827 -0.131429 0.4 0.199941C-0.0418281 0.531312 -0.131372 1.15811 0.199999 1.59994L2.75 4.99994L0.2 8.39994C-0.131372 8.84177 -0.0418277 9.46857 0.4 9.79994C0.841828 10.1313 1.46863 10.0418 1.8 9.59994L4.8 5.59994Z"},null,-1))),Fe=[Pe];var Ne={__name:"CoursePaymentPoints",setup(e){const t=["Персональный менеджер","Электронные материалы к курсу","Пожизненный доступ","Сертификат","Открытие и обслуживание счета"],a=(0,s.iH)(!1),l=()=>{a.value=!a.value};return(e,s)=>((0,i.wg)(),(0,i.iD)("div",Ve,[(0,i._)("div",Ze,[He,((0,i.wg)(),(0,i.iD)("svg",{width:"5",height:"10",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:l},Fe))]),(0,i._)("div",{class:(0,o.C_)(["points__list",{open:a.value}])},[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(t,(e=>(0,i.Wm)(Re,{key:e,item:e},null,8,["item"]))),64))],2)]))}};const qe=(0,u.Z)(Ne,[["__scopeId","data-v-ac3e8caa"]]);var Qe=qe;const Je=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),Te=e=>((0,i.dD)("data-v-50f2f0d0"),e=e(),(0,i.Cn)(),e),Ee={class:"course-payment"},Ye={class:"payment__wrapper"},Xe={class:"payment__wrapper_price mobile__flex"},Le={class:"mobile__wrapper"},Ke={class:"price__old"},Ge={class:"price__actualy"},$e=Te((()=>(0,i._)("p",null,"₸/мес",-1))),et={class:"price__date"},tt={class:"payment__wrapper_price action"};var at={__name:"CoursePayment",setup(e){const t=(0,h.oR)(),a=t.state.course.price;return(e,l)=>((0,i.wg)(),(0,i.iD)("div",Ee,[(0,i._)("div",Ye,[(0,i._)("div",Xe,[(0,i._)("div",Le,[(0,i._)("p",Ke,(0,o.zw)(`${(0,s.SU)(Je)((0,s.SU)(a).oldPrice)} ₸ / мес`),1),(0,i._)("div",Ge,[(0,i._)("h1",null,(0,o.zw)((0,s.SU)(Je)((0,s.SU)(a).actualyPrice)),1),$e])]),(0,i._)("p",et,(0,o.zw)(`цена актуальна до ${(0,s.SU)(a).actualyPriceDate}`),1)]),(0,i._)("div",tt,[(0,i.Wm)(w,{size:1,onClick:l[0]||(l[0]=e=>(0,s.SU)(t).commit("changeModal"))},{default:(0,i.w5)((()=>[(0,i.Uk)("Записаться")])),_:1}),(0,i.Wm)(w,{size:1,active:!1},{default:(0,i.w5)((()=>[(0,i.Uk)("Подарить этот курс")])),_:1})]),(0,i.Wm)(Qe)])]))}};const lt=(0,u.Z)(at,[["__scopeId","data-v-50f2f0d0"]]);var it=lt;const st={class:"course-details"},nt={class:"details__info"},ot={class:"desktop"};var rt={__name:"CourseDetails",setup(e){return(e,t)=>((0,i.wg)(),(0,i.iD)("div",st,[(0,i._)("div",nt,[(0,i.Wm)(pe),(0,i.Wm)(Se)]),(0,i._)("div",ot,[(0,i.Wm)(it)])]))}};const dt=(0,u.Z)(rt,[["__scopeId","data-v-a9f52038"]]);var ct=dt,ut=a.p+"img/Video.f636edeb.png";const vt=e=>((0,i.dD)("data-v-0c813b55"),e=e(),(0,i.Cn)(),e),pt={class:"video-button"},mt=vt((()=>(0,i._)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{d:"M6.99992 0.333344C10.6813 0.333344 13.6666 3.31801 13.6666 7.00001C13.6666 10.682 10.6813 13.6667 6.99992 13.6667C3.31792 13.6667 0.333252 10.682 0.333252 7.00001C0.333252 3.31801 3.31792 0.333344 6.99992 0.333344Z",fill:"#242624"}),(0,i._)("path",{d:"M9.58166 7.06277C5.66651 5 9.58166 7.06277 5.66651 5C5.66652 9.12554 5.66649 5 5.66651 9.12554C9.58166 7.06277 5.66651 9.12554 9.58166 7.06277Z",fill:"white"})],-1)));function gt(e,t){return(0,i.wg)(),(0,i.iD)("button",pt,[(0,i.WI)(e.$slots,"default",{},void 0,!0),mt])}const _t={},wt=(0,u.Z)(_t,[["render",gt],["__scopeId","data-v-0c813b55"]]);var ht=wt;const ft=e=>((0,i.dD)("data-v-fc9c7314"),e=e(),(0,i.Cn)(),e),At={class:"course-overview"},Ct=ft((()=>(0,i._)("div",{class:"overview__wrapper"},[(0,i._)("h1",null,"Обзор курса"),(0,i._)("p",null," Мы специально подготовили тизер курса чтобы вы смогли больше ознакомиться с тем что вас ждет. Курс поможет Вам сделать первые шаги в мире инвестиций и открыть новые возможности для сохранения и приумножения капитала. ")],-1))),yt={class:"overview__video"},kt=ft((()=>(0,i._)("img",{src:ut},null,-1)));var Dt={__name:"CourseOverview",setup(e){const t=()=>{window.open("https://www.youtube.com/watch?v=qO4OfINdw1I","_blank")};return(e,a)=>((0,i.wg)(),(0,i.iD)("div",At,[Ct,(0,i._)("div",yt,[kt,(0,i.Wm)(ht,{class:"overview__video_action",onClick:t},{default:(0,i.w5)((()=>[(0,i.Uk)("Смотреть сейчас")])),_:1})])]))}};const Bt=(0,u.Z)(Dt,[["__scopeId","data-v-fc9c7314"]]);var bt=Bt,jt="data:image/png;base64,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";const It=e=>((0,i.dD)("data-v-62326bad"),e=e(),(0,i.Cn)(),e),St={class:"course-modal-details"},zt={class:"details__tags"},xt=It((()=>(0,i._)("p",null,"Рус",-1))),Mt={class:"details__title"},Ot={class:"details__title_text"},Wt={class:"text__title"},Rt={class:"text__info"},Ut=It((()=>(0,i._)("img",{src:jt,width:"84",height:"84"},null,-1))),Vt=It((()=>(0,i._)("div",{class:"line"},null,-1))),Zt={class:"details__price"},Ht=It((()=>(0,i._)("p",{class:"details__price_title"},"Стоимость курса",-1))),Pt={class:"details__price_digital"},Ft=It((()=>(0,i._)("p",null,"₸/мес",-1)));var Nt={__name:"CourseModalDetails",setup(e){const t=(0,h.oR)(),{title:a,dateRange:l,speaker:n}=t.state.paymentData,{actualyPrice:r,oldPrice:d}=t.state.course.price;return(e,t)=>((0,i.wg)(),(0,i.iD)("div",St,[(0,i._)("div",zt,[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Uk)("ВЕБИНАР")])),_:1}),xt]),(0,i._)("div",Mt,[(0,i._)("div",Ot,[(0,i._)("p",Wt,(0,o.zw)((0,s.SU)(a)),1),(0,i._)("div",Rt,[(0,i._)("p",null,(0,o.zw)((0,s.SU)(l).days+", "+(0,s.SU)(l).time),1),(0,i._)("p",null,(0,o.zw)(`Спикер: ${(0,s.SU)(n)}`),1)])]),Ut]),Vt,(0,i._)("div",Zt,[Ht,(0,i._)("div",Pt,[(0,i._)("p",null,(0,o.zw)((0,s.SU)(Je)((0,s.SU)(r))),1),Ft,(0,i._)("p",null,(0,o.zw)((0,s.SU)(Je)((0,s.SU)(d))+" ₸ / мес"),1)])]),(0,i.Wm)(Qe)]))}};const qt=(0,u.Z)(Nt,[["__scopeId","data-v-62326bad"]]);var Qt=qt;const Jt={class:"course-input"},Tt=["value","maxlength"];var Et={__name:"CourseInput",props:{value:{type:String,required:!0},placeholder:String,maxlength:Number},setup(e,{emit:t}){const{value:a,size:l,placeholder:n}=e,r=(0,s.iH)(!1),d=e=>{e.target.value.length>0?r.value=!0:r.value=!1,t("update:modelValue",e.target.value)};return(t,a)=>((0,i.wg)(),(0,i.iD)("div",Jt,[(0,i._)("input",{type:"text",class:"input",onInput:d,value:e.value,maxlength:e.maxlength},null,40,Tt),(0,i._)("p",{class:(0,o.C_)(["placeholder",{full:r.value}])},(0,o.zw)(e.placeholder),3)]))}};const Yt=(0,u.Z)(Et,[["__scopeId","data-v-735eaa0e"]]);var Xt=Yt;const Lt={class:"course-input"},Kt=["type"],Gt={key:0,class:"rules"},$t=(0,i.uE)('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-342f71be><path d="M9.7606 14.3667C9.1856 13.7927 8.8356 13.0127 8.8356 12.1377C8.8356 10.3847 10.2476 8.97168 11.9996 8.97168C12.8666 8.97168 13.6646 9.32268 14.2296 9.89668" stroke="#BFC1C7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-342f71be></path><path d="M15.1048 12.6989C14.8728 13.9889 13.8568 15.0069 12.5678 15.2409" stroke="#BFC1C7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-342f71be></path><path d="M6.6546 17.4722C5.0676 16.2262 3.7236 14.4062 2.7496 12.1372C3.7336 9.85823 5.0866 8.02823 6.6836 6.77223C8.2706 5.51623 10.1016 4.83423 11.9996 4.83423C13.9086 4.83423 15.7386 5.52623 17.3356 6.79123" stroke="#BFC1C7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-342f71be></path><path d="M19.4476 8.99072C20.1356 9.90472 20.7406 10.9597 21.2496 12.1367C19.2826 16.6937 15.8066 19.4387 11.9996 19.4387C11.1366 19.4387 10.2856 19.2987 9.46761 19.0257" stroke="#BFC1C7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-342f71be></path><path d="M19.887 4.24951L4.11301 20.0235" stroke="#BFC1C7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-342f71be></path></svg>',1),ea=[$t];var ta={__name:"CourseInputPassword",props:{value:{type:String,required:!0},placeholder:String},setup(e,{emit:t}){const{value:a,placeholder:l}=e,n=(0,s.iH)(!1),r=(0,s.iH)(!1),d=(0,h.oR)(),c=e=>{e.target.value.length>0?n.value=!0:n.value=!1,t("update:modelValue",e.target.value)},u=()=>{r.value=!r.value},v=(0,i.Fl)((()=>r.value?"text":"password"));return(t,a)=>((0,i.wg)(),(0,i.iD)("div",Lt,[(0,i._)("input",{type:v.value,class:"input",onInput:c},null,40,Kt),(0,i._)("p",{class:(0,o.C_)(["placeholder",{full:n.value}])},(0,o.zw)(e.placeholder),3),(0,s.SU)(d).state.auth?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",Gt,"6 и более символов, минимум 1 цифра, латинские буквы")),(0,i._)("div",{class:"show-hide",onClick:u},ea)]))}};const aa=(0,u.Z)(ta,[["__scopeId","data-v-342f71be"]]);var la=aa;function ia(){const e=(0,s.iH)(""),t=()=>{(0,i.YP)(e,(()=>{if(e.value.length<4&&0!==e.value.length){let t=e.value.match(/\d+/g);e.value="+7 "+t}if(e.value.length>=4&&e.value.length<10){let t=e.value.match(/(?<!\+)\d{1,3}/g);e.value=null!==t?"+7 "+t.join(" "):""}10!==e.value.length&&13!==e.value.length||(e.value+=" ")}))};return{phoneNumber:e,watchPhone:t}}const sa=e=>((0,i.dD)("data-v-7f210544"),e=e(),(0,i.Cn)(),e),na={class:"course-modal-form"},oa=sa((()=>(0,i._)("div",{class:"form__title"},[(0,i._)("h1",null,"Заполните форму"),(0,i._)("p",null,"Для оформления заказа, заполните поля ниже")],-1))),ra={class:"form__input"},da={class:"form__mobile"},ca={key:1,class:"form__input_mail-number"},ua="Я подтверждаю, что ознакомлен и согласен с условиями оферты и даю своё согласие на сбор и обработку персональных данных";var va={__name:"CourseModalForm",setup(e){const t=(0,s.iH)(""),a=(0,s.iH)(""),l=(0,s.iH)(""),n=(0,s.iH)(""),{phoneNumber:o,watchPhone:r}=ia();r();const d=(0,h.oR)(),c=d.state.auth,u=(0,i.Fl)((()=>d.state.auth?"Пароль":"Придумайте пароль"));return(e,r)=>((0,i.wg)(),(0,i.iD)("div",na,[oa,(0,i._)("div",ra,[(0,s.SU)(c)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(Xt,{key:0,placeholder:"Фамилия и имя",modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),value:t.value},null,8,["modelValue","value"])),(0,i._)("div",da,[(0,i.Wm)(Xt,{placeholder:"Электронная почта",modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),value:a.value,size:2},null,8,["modelValue","value"])]),(0,s.SU)(c)?((0,i.wg)(),(0,i.j4)(Xt,{key:2,placeholder:"Электронная почта",modelValue:a.value,"onUpdate:modelValue":r[4]||(r[4]=e=>a.value=e),value:a.value},null,8,["modelValue","value"])):((0,i.wg)(),(0,i.iD)("div",ca,[(0,i.Wm)(Xt,{placeholder:"Электронная почта",modelValue:a.value,"onUpdate:modelValue":r[2]||(r[2]=e=>a.value=e),value:a.value},null,8,["modelValue","value"]),(0,i.Wm)(Xt,{placeholder:"Номер телефона",modelValue:(0,s.SU)(o),"onUpdate:modelValue":r[3]||(r[3]=e=>(0,s.dq)(o)?o.value=e:null),value:(0,s.SU)(o),size:1,maxlength:16},null,8,["modelValue","value"])])),(0,i.Wm)(la,{placeholder:u.value,modelValue:l.value,"onUpdate:modelValue":r[5]||(r[5]=e=>l.value=e),value:l.value},null,8,["placeholder","modelValue","value"]),(0,i.Wm)(Xt,{placeholder:"Применить промокод",modelValue:n.value,"onUpdate:modelValue":r[6]||(r[6]=e=>n.value=e),value:n.value},null,8,["modelValue","value"]),(0,i.Wm)(Re,{item:ua,textSize:14})]),(0,i.Wm)(w,{size:3},{default:(0,i.w5)((()=>[(0,i.Uk)("Перейти к оплате")])),_:1}),(0,s.SU)(c)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",{key:0,class:"authorisation",onClick:r[7]||(r[7]=e=>(0,s.SU)(d).commit("changeAuth"))},"Уже зарегистрированы?"))]))}};const pa=(0,u.Z)(va,[["__scopeId","data-v-7f210544"]]);var ma=pa;const ga=e=>((0,i.dD)("data-v-258e09d7"),e=e(),(0,i.Cn)(),e),_a=ga((()=>(0,i._)("div",{class:"mobile__wrapper"},[(0,i._)("h1",null,"Заполните форму"),(0,i._)("p",null,"Для оформления заказа, заполните поля ниже")],-1)));var wa={__name:"PaymentModalWindow",setup(e){const t=(0,h.oR)();return(e,a)=>((0,i.wg)(),(0,i.iD)("div",{class:"payment-modal-window",onClick:a[1]||(a[1]=(0,l.iM)((()=>{}),["stop"]))},[_a,(0,i.Wm)(Qt),(0,i.Wm)(ma),(0,i._)("div",{class:"close",onClick:a[0]||(a[0]=e=>(0,s.SU)(t).commit("changeModal"))})]))}};const ha=(0,u.Z)(wa,[["__scopeId","data-v-258e09d7"]]);var fa=ha,Aa={__name:"PaymentModal",setup(e){const t=(0,h.oR)();return(e,a)=>((0,i.wg)(),(0,i.iD)("div",{class:"payment-modal",onClick:a[0]||(a[0]=e=>(0,s.SU)(t).commit("changeModal"))},[(0,i.Wm)(fa)]))}};const Ca=(0,u.Z)(Aa,[["__scopeId","data-v-5ed94062"]]);var ya=Ca;const ka={class:"app"},Da={class:"mobile"};var Ba={__name:"App",setup(e){const t=(0,h.oR)();return(e,a)=>((0,i.wg)(),(0,i.iD)("div",ka,[(0,i.Wm)(M),(0,i.Wm)(q),(0,i.Wm)(ct),(0,i.Wm)(bt),(0,i._)("div",Da,[(0,i.Wm)(it)]),(0,s.SU)(t).state.modal?((0,i.wg)(),(0,i.j4)(ya,{key:0})):(0,i.kq)("",!0)]))}};const ba=Ba;var ja=ba;const Ia=e=>e.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}).replace(" г.",""),Sa=e=>e.toLocaleTimeString("ru-RU",{hour:"numeric",minute:"numeric"})+" мск";var za=(0,h.MT)({state:{course:{title:"«Технический анализ» офлайн-курс г. Алматы",description:"Данный курс поможет вам открыть новые возможности совершения прибыльных сделок на фондовом рынке из любой точки мира",details:{date:new Date(2021,2,11,19,0),location:"Алматы",modules:5},price:{actualyPrice:3e4,oldPrice:6e4,actualyPriceDate:"01.12.2022"}},auth:!1,modal:!1,paymentData:{title:"«Технический анализ Pro» - авторский онлайн курс Елены Беляевой",speaker:"Елена Беляева",dateRange:{days:"24-31 января",time:"19:00-21:00"}}},getters:{dateOfStartedCourse(e){const t=e.course.details.date,a=Ia(t),l=Sa(t);return{date:a,time:l}}},mutations:{changeModal(e){e.modal=!e.modal},changeAuth(e){e.auth=!e.auth,e.modal=!1}},actions:{},modules:{}});(0,l.ri)(ja).use(za).mount("#app")},7783:function(e,t,a){var l={"./Oriented1.svg":3133,"./Oriented2.svg":2467,"./Oriented3.svg":106,"./Oriented4.svg":9158};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}i.keys=function(){return Object.keys(l)},i.resolve=s,e.exports=i,i.id=7783},3133:function(e,t,a){"use strict";e.exports=a.p+"img/Oriented1.3e63de43.svg"},2467:function(e,t,a){"use strict";e.exports=a.p+"img/Oriented2.1e805a65.svg"},106:function(e,t,a){"use strict";e.exports=a.p+"img/Oriented3.350689af.svg"},9158:function(e,t,a){"use strict";e.exports=a.p+"img/Oriented4.cd35577a.svg"}},t={};function a(l){var i=t[l];if(void 0!==i)return i.exports;var s=t[l]={exports:{}};return e[l].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,l,i,s){if(!l){var n=1/0;for(c=0;c<e.length;c++){l=e[c][0],i=e[c][1],s=e[c][2];for(var o=!0,r=0;r<l.length;r++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](l[r])}))?l.splice(r--,1):(o=!1,s<n&&(n=s));if(o){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[l,i,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var i,s,n=l[0],o=l[1],r=l[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(r)var c=r(a)}for(t&&t(l);d<n.length;d++)s=n[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},l=self["webpackChunktest_course"]=self["webpackChunktest_course"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(8965)}));l=a.O(l)})();
//# sourceMappingURL=app.255c2dce.js.map