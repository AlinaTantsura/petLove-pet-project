import{d as o,j as e,a as l,s as n,r as m}from"./index-CnpHJyYH.js";import{e as a,a as h}from"./noticesSelectors-ZkE6Tjmm.js";const u=({setPage:i,page:d,lastPage:r})=>{const c=o(a),x=o(h),t=s=>{i(Number(s.target.innerText))};return r<2||c!=="all"||x==="cheap"||x==="expensive"?null:e.jsxs("div",{className:"mt-[44px] md:mt-[88px] mb-[60px] md:mb-[48px] flex justify-center gap-[11px] md:gap-[24px]",children:[e.jsxs("div",{className:"flex gap-[6px] md:gap-2",children:[e.jsxs("button",{disabled:d===1,onClick:()=>i(1),className:l("w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main flex justify-center items-center",d===1?"border-opacity-5":"border-opacity-20"),children:[e.jsx("svg",{className:l("w-[7px] md:w-2 h-[12px] md:h-[14px]",d===1?"fill-opacity-black":"fill-black-main"),children:e.jsx("use",{href:n+"#icon-Vector-paginate"})}),e.jsx("svg",{className:l("w-[7px] md:w-2 h-[12px] md:h-[14px]",d===1?"fill-opacity-black":"fill-black-main"),children:e.jsx("use",{href:n+"#icon-Vector-paginate"})})]}),e.jsx("button",{disabled:d===1,onClick:()=>i(d-1),className:l("w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main flex justify-center items-center",d===1?"border-opacity-5":"border-opacity-20"),children:e.jsx("svg",{className:l("w-[7px] md:w-2 h-[12px] md:h-[14px]",d===1?"fill-opacity-black":"fill-black-main"),children:e.jsx("use",{href:n+"#icon-Vector-paginate"})})})]}),e.jsxs("div",{className:"flex gap-[10px]",children:[e.jsx("div",{className:l("flex justify-center items-center w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 text-[16px] md:text-[20px] md:leading-[110%]",(r<4||d<r-2)&&"hidden",(r<4||d<r-3)&&"md:hidden"),children:"..."}),d===r&&e.jsx("button",{onClick:t,className:l("w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 hidden md:flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]",r<3&&"hidden",r<4&&"md:hidden"),children:d-2}),(d===r-1||d===r)&&e.jsx("button",{onClick:t,className:l("w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]",r<3&&d===1&&"hidden",r<4&&d===1&&"md:hidden"),children:d-1}),e.jsx("div",{className:"w-10 md:w-[44px] h-10 md:h-[44px] rounded-full bg-orange-main text-white flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]",children:d}),d===r-1&&e.jsx("button",{onClick:t,className:"w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]",children:d+1}),d!==r&&d!==r-1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:t,className:"w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]",children:d+1}),e.jsx("button",{onClick:t,className:"hidden w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 md:flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]",children:d+2})]}),e.jsx("div",{className:l("w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center text-[16px] md:text-[20px] md:leading-[110%]",d>=r-2&&"hidden"),children:"..."})]}),e.jsxs("div",{className:"flex gap-[6px]",children:[e.jsx("button",{disabled:d===r,onClick:()=>i(d+1),className:l("w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main flex justify-center items-center",d===r?"border-opacity-5":"border-opacity-20"),children:e.jsx("svg",{className:l("w-[7px] md:w-2 h-[12px] md:h-[14px] rotate-180",d===r?"fill-opacity-black":"fill-black-main"),children:e.jsx("use",{href:n+"#icon-Vector-paginate"})})}),e.jsxs("button",{disabled:d===r,onClick:()=>i(r),className:l("w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main flex justify-center items-center",d===r?"border-opacity-5":"border-opacity-20"),children:[e.jsx("svg",{className:l("w-[7px] md:w-2 h-[12px] md:h-[14px] rotate-180",d===r?"fill-opacity-black":"fill-black-main"),children:e.jsx("use",{href:n+"#icon-Vector-paginate"})}),e.jsx("svg",{className:l("w-[7px] md:w-2 h-[12px] md:h-[14px] rotate-180",d===r?"fill-opacity-black":"fill-black-main"),children:e.jsx("use",{href:n+"#icon-Vector-paginate"})})]})]})]})},f=({isNews:i=!1,setSearchWord:d})=>{const[r,c]=m.useState(""),x=t=>{t.preventDefault(),d(t.target.elements.search.value)};return e.jsxs("form",{onSubmit:x,className:l("relative md:mt-0 w-full",i&&"md:w-[230px]"),children:[e.jsx("input",{name:"search",className:l("w-full p-3 md:p-[14px] rounded-[30px] bg-white text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] outline-none text-black-main placeholder:text-black-main placeholder:opacity-100",i&&"placeholder:opacity-50 border border-border-black"),placeholder:"Search",value:r,onChange:t=>c(t.target.value)}),r&&e.jsx("button",{onClick:()=>{c("")},className:"w-[18px] h-[18px] absolute top-[13px] md:top-[16px] right-[34px] md:right-[40px]",children:e.jsx("svg",{className:"w-full h-full stroke-black-main",children:e.jsx("use",{href:n+"#icon-x"})})}),e.jsx("button",{className:"w-[18px] h-[18px] absolute top-[13px] md:top-[16px] right-3 md:right-[14px]",children:e.jsx("svg",{className:"w-full h-full",children:e.jsx("use",{href:n+"#icon-search"})})})]})};export{u as P,f as S};
