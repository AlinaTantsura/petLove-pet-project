import{r as o,b as v,j as e,a as l,f as r,B as y,D as k,U as P,V as t}from"./index-CSfyJHF2.js";import{c as C,a as m,b as S,u as $,o as F}from"./yup-ByG4qsTp.js";import{T as E}from"./Title-Ds7g0RDA.js";import{P as R}from"./PetBlock-DKqDmobw.js";const T=C().shape({name:m().required(),email:m().required().matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Enter a valid Email"),password:m().required().min(7),confirmPassword:m().required().oneOf([S("password")],"Passwords must match")}),q=()=>{var c;const[n,h]=o.useState(!1),[p,g]=o.useState(!1),[x,u]=o.useState(""),[d,w]=o.useState(""),j=v(),{register:i,handleSubmit:b,reset:f,formState:{errors:s}}=$({resolver:F(T)}),N=a=>{x===d&&(j(P({name:a.name,email:a.email,password:a.password})),f())};return e.jsx("form",{className:"min-w-full h-[422px] md:min-w-full md:min-h-[560px] xl:min-w-[592px] xl:max-w-[592px] xl:h-[654px] px-2 flex justify-center items-center bg-white rounded-[30px] md:rounded-[60px]",onSubmit:b(N),children:e.jsxs("div",{className:"w-[295px] md:w-[424px]",children:[e.jsx(E,{children:"Registration"}),e.jsx("p",{className:"mb-[20px] md:mb-8 mt-3 md:mt-4 text-[14px] md:text-[18px] leading-[122%] tracking-[-0.02em]",children:"Thank you for your interest in our platform."}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:l("w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",s.name&&"border-error-color"),type:"text",placeholder:"Name",...i("name")}),s.name&&e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[12px] md:right-[19px] ",children:e.jsx("use",{href:r+"#icon-cross-small"})}),e.jsx("span",{className:"ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color",children:s.name.message})]})]}),e.jsxs("div",{className:"relative mt-[10px]",children:[e.jsx("input",{className:l("w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",s.email&&"border-error-color"),type:"email",placeholder:"Email",...i("email")}),s.email&&e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[12px] md:right-[19px] ",children:e.jsx("use",{href:r+"#icon-cross-small"})}),e.jsx("span",{className:"ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color",children:s.email.message})]})]}),e.jsxs("div",{className:"relative mt-[10px] md:mt-4",children:[e.jsx("input",{className:l("w-full p-3 md:p-4 border border-border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",s.password&&"border-error-color",x.length>6&&"border-[#08aa83]"),type:n?"text":"password",placeholder:"Password",...i("password",{onChange:a=>u(a.target.value)})}),e.jsx("button",{onClick:()=>h(!n),className:"absolute top-[12px] md:top-[15px] right-[12px] md:right-[16px]",children:e.jsx("svg",{className:l("w-[18px] h-[18px] md:w-[22px] md:h-[22px]"),children:e.jsx("use",{href:n?r+"#icon-eye":r+"#icon-eye-off"})})}),s.password&&e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[38px] md:right-[50px] ",children:e.jsx("use",{href:r+"#icon-cross-small"})}),e.jsx("span",{className:"ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color",children:s.password.message})]}),x.length>6&&e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[38px] md:right-[50px] ",children:e.jsx("use",{href:r+"#icon-check"})}),e.jsx("span",{className:"ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-[#08aa83]",children:"Password is secure"})]})]}),e.jsxs("div",{className:"relative mt-[10px] md:mt-4",children:[e.jsx("input",{className:l("w-full p-3 md:p-4 border border-border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",s.confirmPassword||d!==x?"border-error-color":d===x&&d!==""&&"border-[#08aa83]"),type:p?"text":"password",placeholder:"Confirm password",...i("confirmPassword",{onChange:a=>w(a.target.value)})}),e.jsx("button",{className:"absolute top-[12px] md:top-[15px] right-[12px] md:right-[16px]",onClick:()=>g(!p),children:e.jsx("svg",{className:"w-[18px] h-[18px] md:w-[22px] md:h-[22px]",children:e.jsx("use",{href:p?r+"#icon-eye":r+"#icon-eye-off"})})}),s.confirmPassword&&e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[38px] md:right-[50px] ",children:e.jsx("use",{href:r+"#icon-cross-small"})}),e.jsx("span",{className:"ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color",children:(c=s.confirmPassword)==null?void 0:c.message})]}),!s.confirmPassword&&d===x&&d!==""&&e.jsx(e.Fragment,{children:e.jsx("svg",{className:"w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[38px] md:right-[50px] ",children:e.jsx("use",{href:r+"#icon-check"})})})]}),e.jsx(y,{className:"mt-[24px] md:mt-[32px] xl:mt-[64px] mb-3 md:mb-4 w-full py-3 md:py-4 rounded-[30px] bg-orange-main hover:bg-[#f9b020] font-bold text-white text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",children:"REGISTRATION"}),e.jsxs("p",{className:"leading-[117%] md:leading-[143%] text-opacity-black text-[12px] md:text-[14px] text-center",children:["Already have an account?",e.jsx(k,{to:"/login",className:"ml-1 text-orange-main underline",children:"Login"})]})]})})},D=()=>e.jsxs("div",{className:"flex gap-[10px] md:gap-4 xl:gap-8 flex-col xl:flex-row",children:[e.jsxs(R,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width:1280px)",srcSet:`${t.desktopCat2x} 2x, ${t.desktopCat} 1x`,sizes:"1280px"}),e.jsx("source",{media:"(min-width:768px)",srcSet:`${t.tabletCat2x} 2x, ${t.tabletCat} 1x`,sizes:"768px"}),e.jsx("source",{media:"(min-width:320px)",srcSet:`${t.mobileCat2x} 2x, ${t.mobileCat} 1x`,sizes:"320px"}),e.jsx("img",{src:t.mobileCat,alt:"The red cat"})]}),e.jsxs("div",{className:"absolute hidden md:left-8 xl:left-[60px] md:bottom-8 xl:bottom-24 w-[294px] rounded-[20px] bg-white px-4 py-[18px] md:flex gap-2",children:[e.jsx("div",{className:"min-w-[60px] h-[60px] rounded-full bg-[#fff4df] flex justify-center items-center",children:e.jsx("img",{srcSet:`${t.iconCat2x} 2x, ${t.iconCat} 1x`,src:t.iconCat,alt:"Cat icon",className:"w-8"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 flex justify-between items-center",children:[e.jsx("h3",{className:"font-bold text-[16px] leading-[125%] text-orange-main",children:"Jack"}),e.jsxs("p",{className:"text-[12px] leading-[117%] tracking-[-0.02em]",children:[e.jsx("span",{className:"text-opacity-black",children:"Birthday: "}),"18.10.2021"]})]}),e.jsx("p",{className:"text-[12px] leading-[117%] tracking-[-0.02em] text-[rgba(38, 38, 38)] opacity-[80%]",children:"Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."})]})]})]}),e.jsx(q,{})]});export{D as default};
