"use strict";(self.webpackChunkkapusta_project=self.webpackChunkkapusta_project||[]).push([[183],{3101:function(e,a,n){n.d(a,{Z:function(){return _}});var t=n(885),s=n(2791),r=n(8687),c=n(948),i=n(6871),o=n(4805),l=n.n(o),u=n(2027),m=n(7715),d=n(9697),p=n(184),_=function(){var e=(0,r.useDispatch)(),a=(0,r.useSelector)(u.n),n=(0,s.useState)(a<=0),o=(0,t.Z)(n,2),_=o[0],x=o[1],h=(0,s.useState)(0),f=(0,t.Z)(h,2),b=f[0],v=f[1],j=(0,s.useState)(!1),g=(0,t.Z)(j,2),Z=g[0],N=g[1],y=(0,i.TH)();(0,s.useEffect)((function(){v(a.toFixed(2).toString())}),[a]);var S=(0,s.useCallback)((function(a){e((0,m.X)({newBalance:Number(a)}))}),[e]);return(0,p.jsx)("div",{className:d.Z.wrapper,children:(0,p.jsxs)("div",{className:d.Z.wrapperBalance,children:[(0,p.jsx)("p",{className:d.Z.text,children:"Balance: "}),(0,p.jsxs)("div",{className:d.Z.inputWrapper,children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==Number(b)?(N(!1),S(b)):N(!0)},children:[(0,p.jsx)(c.Z,{className:d.Z.input,value:b,suffix:" UAH",thousandSeparator:" ",fixedDecimalScale:!0,allowNegative:!1,allowLeadingZeros:!1,decimalScale:2,onValueChange:function(e){var a=e.formattedValue,n=e.value;n!==b&&(x(!a>0),v(n))},placeholder:"0.00 UAH"}),(0,p.jsx)(l(),{maxWidth:1279,children:"/report"===y.pathname?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("button",{className:d.Z.button,children:"Confirm"})}),(0,p.jsx)(l(),{minWidth:1280,children:(0,p.jsx)("button",{className:d.Z.button,children:"Confirm"})})]}),_?(0,p.jsx)("div",{className:d.Z.tooltipArrow}):"",_?(0,p.jsxs)("div",{className:d.Z.tooltipContainment,children:[(0,p.jsx)("p",{className:d.Z.tooltipMainText,children:"Hello! To get started, enter the current balance of your account!"}),(0,p.jsx)("p",{className:d.Z.tooltipText,children:"You can't spend money until you have it :)"})]}):"",Z&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:d.Z.tooltipArrow}),(0,p.jsxs)("div",{className:d.Z.tooltipContainment,children:[(0,p.jsx)("p",{className:d.Z.tooltipMainText,children:"Sorry! New balance must be greater than or equal to 1"}),(0,p.jsx)("p",{className:d.Z.tooltipText,children:"You can't spend money until you have it :)"})]})]})]})]})})}},1776:function(e,a,n){n.d(a,{Z:function(){return g}});var t=n(885),s=n(2791),r=n(6871),c=n(8687),i=n(6962),o=n(4805),l=n(948),u=n(3708),m=n(1281),d=n(7316),p=[{value:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",label:"Transport"},{value:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",label:"Products"},{value:"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435",label:"Health"},{value:"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c",label:"Alcohol"},{value:"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",label:"Entertainment"},{value:"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430",label:"Housing"},{value:"\u0422\u0435\u0445\u043d\u0438\u043a\u0430",label:"Technique"},{value:"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c",label:"Communal, communication"},{value:"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438",label:"Sports, hobbies"},{value:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435",label:"Education"},{value:"\u041f\u0440\u043e\u0447\u0435\u0435",label:"Other"}],_=[{value:"\u0417/\u041f",label:"Salary"},{value:"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434",label:"Extra earn"}],x=n(1413),h={control:function(e){return(0,x.Z)((0,x.Z)({},e),{},{width:240,minHeight:10,paddingLeft:0,textAlign:"left",border:"none",backgroundColor:"#F5F6FB"})},indicatorSeparator:function(e){return(0,x.Z)((0,x.Z)({},e),{},{width:0})},placeholder:function(e){return(0,x.Z)((0,x.Z)({},e),{},{paddingLeft:0,color:"#C7CCDC"})},container:function(e){return(0,x.Z)((0,x.Z)({},e),{},{paddingLeft:18})},valueContainer:function(e){return(0,x.Z)((0,x.Z)({},e),{},{paddingLeft:0})},input:function(e){return(0,x.Z)((0,x.Z)({},e),{},{marginLeft:0,paddingLeft:2})}},f={control:function(e){return(0,x.Z)((0,x.Z)({},e),{},{width:150,minHeight:10,paddingLeft:0,textAlign:"left",border:"none",backgroundColor:"#FFF"})},indicatorSeparator:function(e){return(0,x.Z)((0,x.Z)({},e),{},{width:0})},placeholder:function(e){return(0,x.Z)((0,x.Z)({},e),{},{paddingLeft:0,color:"#C7CCDC"})},container:function(e){return(0,x.Z)((0,x.Z)({},e),{},{paddingLeft:18})},valueContainer:function(e){return(0,x.Z)((0,x.Z)({},e),{},{paddingLeft:0})},input:function(e){return(0,x.Z)((0,x.Z)({},e),{},{marginLeft:0,paddingLeft:2})}},b=n(9601),v=n(6388),j=n(184),g=function(){var e=(0,c.useSelector)(d._),a=(0,s.useState)(""),n=(0,t.Z)(a,2),x=n[0],g=n[1],Z=(0,s.useState)(""),N=(0,t.Z)(Z,2),y=N[0],S=N[1],T=(0,s.useState)(""),C=(0,t.Z)(T,2),w=C[0],k=C[1],F=(0,c.useDispatch)(),E=(0,r.TH)(),B=(0,o.useMediaQuery)({maxWidth:767}),L=(0,o.useMediaQuery)({minWidth:768}),A={description:x,amount:w,date:e,category:y.value},H=function(){g(""),S(""),k("")};return(0,j.jsx)("div",{className:v.Z.formBox,children:(0,j.jsxs)("form",{className:v.Z.form,onSubmit:function(e){if(e.preventDefault(),""!==y){switch(E.pathname){case"/balance/expenses":case"/balance/expenses-mob":F((0,u.v8)(A));break;case"/balance/incomes":case"/balance/incomes-mob":F((0,u.Zg)(A));break;default:alert("Please choose Transaction category")}H()}else alert("Please choose Product category")},children:[(0,j.jsxs)("div",{className:v.Z.inputWrapper,children:[!B&&(0,j.jsx)(m.Z,{}),(0,j.jsx)("input",{type:"text",className:v.Z.descr,name:"description",value:x,placeholder:"Product description",required:!0,onChange:function(e){var a=e.target,n=a.name,t=a.value;switch(n){case"description":g(t);break;case"selectedOption":S(t)}}}),(0,j.jsx)(i.ZP,{defaultValue:y,options:"/balance/expenses"===E.pathname&&p||"/balance/expenses-mob"===E.pathname&&p||"/balance/incomes"===E.pathname&&_||"/balance/incomes-mob"===E.pathname&&_,onChange:S,className:v.Z.categorySelect,name:"selectedOption",value:y,placeholder:"Product category",styles:B&&h||L&&f}),(0,j.jsxs)("div",{className:v.Z.amountWrapper,children:[(0,j.jsx)(l.Z,{className:v.Z.amount,value:w,suffix:" UAH",thousandSeparator:" ",fixedDecimalScale:!0,allowNegative:!1,allowLeadingZeros:!1,decimalScale:2,onValueChange:function(e){var a=e.value;k(parseFloat(a))},placeholder:"0.00 UAH",required:!0}),(0,j.jsx)("div",{className:v.Z.iconWrapper,children:(0,j.jsx)("svg",{className:v.Z.icon,width:"32",height:"32",children:(0,j.jsx)("use",{href:b.Z+"#icon-calculator"})})})]})]}),(0,j.jsxs)("div",{className:v.Z.btnWrapper,children:[(0,j.jsx)("button",{type:"sudmit",className:v.Z.btn,children:"Input"}),(0,j.jsx)("button",{type:"reset",className:v.Z.btn,onClick:function(){H()},children:"Clear"})]})]})})}},1281:function(e,a,n){n.d(a,{Z:function(){return f}});var t=n(885),s=n(2791),r=n(8687),c=n(9513),i=n.n(c),o=n(2426),l=n.n(o),u=n(1899),m=n(9601),d=n(184);function p(e){var a=e.name,n=e.color,t=e.width,s=e.height,r=e.className;return(0,d.jsx)("svg",{className:"icon icon-".concat(a," ").concat(r),fill:n,stroke:n,width:t,height:s,children:(0,d.jsx)("use",{xlinkHref:"".concat(m.Z,"#icon-").concat(a)})})}n(8639);var _="DatePicker_calendarblock__Pm0jW",x="DatePicker_calendaricon__FNbJ4",h="DatePicker_calendar__cy0hL";function f(e){e.children;var a=(0,s.useState)(new Date),n=(0,t.Z)(a,2),c=n[0],o=n[1],m=(0,r.useDispatch)();return(0,s.useEffect)((function(){m((0,u.S)(l()(c).format("YYYY-MM-DD")))}),[m,c]),(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("label",{"data-for":"date",htmlFor:"date",children:(0,d.jsx)(p,{name:"calendar",width:20,height:18,className:x})}),(0,d.jsx)(i(),{id:"date",className:h,selected:c,onChange:function(e){o(e)},dateFormat:"dd.MM.yyyy"})]})}},7111:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(8687),s=n(4289),r="Section_boxSection__715+A",c="Section_section__Z2PLw",i="Section_boxSectionAuth__VNkER",o="Section_sectionAuth__AF+HO",l="Section_title__SLHvV",u="Section_subtitle__JjfFG",m=n(184),d=function(e){var a=e.children,n=(0,t.useSelector)(s.v);return(0,m.jsx)("section",{className:n?i:r,children:(0,m.jsxs)("div",{className:n?o:c,children:[!n&&(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{className:l,children:"Kapu$ta"}),(0,m.jsx)("p",{className:u,children:"Smart Finance"})]}),a]})})}},9183:function(e,a,n){n.r(a),n.d(a,{default:function(){return G}});var t=n(4805),s=n.n(t),r=n(7111),c=n(3101),i=n(1281),o=n(1776),l=n(885),u=n(2791),m=n(8687),d="Summary_summaryContainer__wts2K",p="Summary_summaryTitle__At8vu",_="Summary_summaryList__h+PeM",x="Summary_summaryItem__enyLF",h="Summary_summaryDescription__eSkBm",f={"\u042f\u043d\u0432\u0430\u0440\u044c":{name:"January"},"\u0424\u0435\u0432\u0440\u0430\u043b\u044c":{name:"February"},"\u041c\u0430\u0440\u0442":{name:"March"},"\u0410\u043f\u0440\u0435\u043b\u044c":{name:"April"},"\u041c\u0430\u0439":{name:"May"},"\u0418\u044e\u043d\u044c":{name:"June"},"\u0418\u044e\u043b\u044c":{name:"July"},"\u0410\u0432\u0433\u0443\u0441\u0442":{name:"August"},"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c":{name:"September"},"\u041e\u043a\u0442\u044f\u0431\u0440\u044c":{name:"October"},"\u041d\u043e\u044f\u0431\u0440\u044c":{name:"November"},"\u0414\u0435\u043a\u0430\u0431\u0440\u044c":{name:"December"}},b=function(e){return e.monthStats.expense},v=function(e){return e.monthStats.income},j=n(3553),g=n(3708),Z=n(6871),N=n(184),y=function(){var e=[],a=(0,Z.TH)(),n=(0,m.useDispatch)(),t=(0,m.useSelector)(j.getExpenseTransactions),s=(0,m.useSelector)(j.getIncomeTransactions),r=(0,m.useSelector)(b),c=(0,m.useSelector)(v),i=(0,u.useRef)((new Date).getMonth());switch((0,u.useEffect)((function(){n((0,g.iz)())}),[t.length,n]),(0,u.useEffect)((function(){n((0,g.cx)())}),[s.length,n]),a.pathname){case"/balance/expenses":e=Object.entries(r);break;case"/balance/incomes":e=Object.entries(c);break;default:return}var o=e.filter((function(e,a){return a<=i.current}));return(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)("h4",{className:p,children:"Summary"}),(0,N.jsx)("ul",{className:_,children:o.map((function(e,a){var n=(0,l.Z)(e,2),t=n[0],s=n[1];return(0,N.jsxs)("li",{className:x,children:[(0,N.jsx)("p",{children:"".concat(f[t].name)}),(0,N.jsxs)("p",{className:h,children:["N/A"===s?"00":s,".00 UAH"]})]},a)}))})]})},S=n(7316),T=n(2982),C=n(1413),w=n(8687).useSelector,k=n(4805).useMediaQuery,F=n(3504).useLocation,E=n(3553),B=E.getIncomeTransactions,L=E.getExpenseTransactions,A=function(e,a){return e.map((function(e){return(0,C.Z)((0,C.Z)({},e),{},{color:a})}))},H=n(9704),D=n(9601),W={"inform-list":"ExpensesTable_inform-list__xUO2Y",table:"ExpensesTable_table__veWda",categori:"ExpensesTable_categori__REIe9",inform:"ExpensesTable_inform__IBHw5",dates:"ExpensesTable_dates__vqvCr",description:"ExpensesTable_description__zhjQn",category:"ExpensesTable_category__raqPY",sums:"ExpensesTable_sums__-E-Zl","wrap-modil":"ExpensesTable_wrap-modil__RAhL7",flex:"ExpensesTable_flex__1gvLW",date:"ExpensesTable_date__OMoVP","desc-mobil":"ExpensesTable_desc-mobil__KQfP9",desc:"ExpensesTable_desc__QGuqw",categ:"ExpensesTable_categ__H16Nk",red:"ExpensesTable_red__cBer-",grins:"ExpensesTable_grins__xPdXs",btn:"ExpensesTable_btn__BLHPi","empty-line":"ExpensesTable_empty-line__HYuOE",container:"ExpensesTable_container__d28kb",flexBox:"ExpensesTable_flexBox__KUalM",plugBox:"ExpensesTable_plugBox__6qIV2"},M=n(9321);var P=function(){var e=(0,m.useDispatch)(),a=(0,m.useSelector)(S._),n=function(){var e=F(),a=w(L),n=w(B);if(k({query:"(max-width: 767px)"})){var t=A(n,"grins"),s=A(a,"red");return[].concat((0,T.Z)(t),(0,T.Z)(s))}return"/balance/incomes"===e.pathname?A(n,"grins"):A(a,"red")}(),t=(0,u.useState)(!1),s=(0,l.Z)(t,2),r=s[0],c=s[1],i=(0,u.useState)(""),o=(0,l.Z)(i,2),d=o[0],p=o[1],_=n.filter((function(e){return e.date.includes(a)}));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:W.flexBox,children:[(0,N.jsxs)("div",{className:W.table,children:[(0,N.jsxs)("h3",{className:W.categori,children:[(0,N.jsx)("span",{className:W.dates,children:"Date"}),(0,N.jsx)("span",{className:W.description,children:"Description"}),(0,N.jsx)("span",{className:W.category,children:"category"}),(0,N.jsx)("span",{className:W.sums,children:"Sum"})," ",(0,N.jsx)("span",{})]}),(0,N.jsx)("div",{className:W.container,children:(0,N.jsx)("ul",{className:W["inform-list"],children:_.map((function(e){var a=e.amount,n=e.category,t=e.date,s=e.description,r=e._id,i=e.color;return(0,N.jsxs)("li",{className:W.inform,children:[(0,N.jsxs)("div",{className:W["wrap-modil"],children:[(0,N.jsx)("span",{className:W["desc-mobil"],children:s}),(0,N.jsxs)("div",{className:W.flex,children:[(0,N.jsx)("span",{className:W.date,children:t}),(0,N.jsx)("span",{className:W.desc,children:s}),(0,N.jsx)("span",{className:W.categ,children:H.Z[n].name})]})]}),(0,N.jsx)("span",{className:W[i],children:" ".concat("red"===i?"-":""," ").concat(a," UAH")}),(0,N.jsx)("button",{className:W.btn,type:"button",onClick:function(){return e=r,c(!0),void p(e);var e},children:(0,N.jsx)("svg",{width:"18",height:"18",children:(0,N.jsx)("use",{href:D.Z+"#icon-delete"})})})]},r)}))})})]}),(0,N.jsx)(y,{})]}),r&&(0,N.jsx)(M.Z,{title:"Are you sure?",closeModal:function(){return c(!1)},handleResolveModalClick:function(){e((0,g.AY)(d)),c(!1)}})," "]})},O=n(3504),q={link:"reports_link__oH49p"},Y=function(){var e=(0,Z.TH)();return(0,N.jsxs)(O.Link,{to:"/report",state:e,className:q.link,children:[(0,N.jsx)("span",{"data-text":"Thanks",className:q.textLink,children:"Reports"}),(0,N.jsx)("svg",{className:q.icon,width:"24",height:"24",children:(0,N.jsx)("use",{href:D.Z+"#icon-reports"})})]})},U="BalanceNavigation_navButton__iWCsS",V="BalanceNavigation_navLink__kzrLR",I="BalanceNavigation_activeNavLink__kvdnA",J="BalanceNavigation_boxNav__5DxsB",K=function(e){return e.isActive?"".concat(V," ").concat(I):V},Q=function(){var e=(0,Z.TH)(),a=(0,Z.s0)();return(0,u.useEffect)((function(){"/balance/incomes"!==e.pathname&&a("/balance/expenses")}),[e.pathname,a]),(0,N.jsxs)("div",{className:J,children:[(0,N.jsxs)(s(),{maxWidth:767,children:[(0,N.jsx)(O.NavLink,{to:"/balance/expenses-mob",className:K,children:"expenses"}),(0,N.jsx)("div",{className:U}),(0,N.jsx)(O.NavLink,{to:"/balance/incomes-mob",className:K,children:"incomes"})]}),(0,N.jsxs)(s(),{minWidth:768,children:[(0,N.jsx)(O.NavLink,{to:"/balance/expenses",className:K,children:"expenses"}),(0,N.jsx)(O.NavLink,{to:"/balance/incomes",className:K,children:"incomes"})]})]})},R=n(9697),z=n(6388),G=function(){return(0,N.jsxs)(r.Z,{children:[(0,N.jsxs)("div",{className:R.Z.BalanceBox,children:[(0,N.jsx)(c.Z,{}),(0,N.jsx)(Y,{})]}),(0,N.jsxs)("div",{className:z.Z.boxFixedForm,children:[(0,N.jsx)(Q,{}),(0,N.jsx)(s(),{maxWidth:767,children:(0,N.jsx)(i.Z,{})}),(0,N.jsx)(s(),{minWidth:768,children:(0,N.jsx)(o.Z,{})}),(0,N.jsx)(P,{})]})]})}},7316:function(e,a,n){n.d(a,{_:function(){return t}});var t=function(e){return e.dynamicData.date}},3553:function(e,a,n){n.r(a),n.d(a,{getAllTransactions:function(){return r},getExpenseTransactions:function(){return s},getIncomeTransactions:function(){return t}});var t=function(e){return e.transactions.income},s=function(e){return e.transactions.expense},r=function(e){return e.transactions.allTransactions}},9704:function(e,a){a.Z={"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":{name:"Products",icon:"#products"},"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c":{name:"Alcohol",icon:"#alcohol"},"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":{name:"Entertainment",icon:"#entertainment"},"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435":{name:"Health",icon:"#health"},"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":{name:"Transport",icon:"#transport"},"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430":{name:"Housing",icon:"#housing"},"\u0422\u0435\u0445\u043d\u0438\u043a\u0430":{name:"Technique",icon:"#technique"},"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c":{name:"Communal, communication",icon:"#communal, communication"},"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438":{name:"Sports, hobbies",icon:"#sports, hobbies"},"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":{name:"Education",icon:"#education"},"\u041f\u0440\u043e\u0447\u0435\u0435":{name:"Other",icon:"#other"},"\u0417/\u041f":{name:"Salary",icon:"#salary"},"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434":{name:"additional income",icon:"#additional income"}}},9697:function(e,a){a.Z={wrapper:"balance_wrapper__i4uF2",wrapperBalance:"balance_wrapperBalance__H0yFy",text:"balance_text__UBKoi",input:"balance_input__OBgsi",button:"balance_button__2JQ1U",tooltipContainment:"balance_tooltipContainment__61ebY",tooltipArrow:"balance_tooltipArrow__SdAfy",tooltipHide:"balance_tooltipHide__D59gn",inputWrapper:"balance_inputWrapper__FMhKJ",tooltipMainText:"balance_tooltipMainText__7zeMD",tooltipText:"balance_tooltipText__QDufs",BalanceBox:"balance_BalanceBox__Z0y3F",BoxSwitcher:"balance_BoxSwitcher__yzAec",BoxTabSwitch:"balance_BoxTabSwitch__V7c7k"}},6388:function(e,a){a.Z={boxFixedForm:"CategoryForm_boxFixedForm__wDsuv",form:"CategoryForm_form__HDLK3",inputWrapper:"CategoryForm_inputWrapper__-mNkj",descr:"CategoryForm_descr__uuWB0",categorySelect:"CategoryForm_categorySelect__bWlOO",amountWrapper:"CategoryForm_amountWrapper__PJ--C",amount:"CategoryForm_amount__rQtfK",iconWrapper:"CategoryForm_iconWrapper__IPAay",icon:"CategoryForm_icon__aZLgD",btnWrapper:"CategoryForm_btnWrapper__oaVJh",btn:"CategoryForm_btn__7BNHK"}}}]);
//# sourceMappingURL=183.71999128.chunk.js.map