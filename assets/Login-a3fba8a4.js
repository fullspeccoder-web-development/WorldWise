import{d as u,r,e as p,j as s,B as x}from"./index-c64d2b11.js";import{P as h}from"./PageNav-0c1fdf0c.js";import"./Logo-90048a4a.js";const f="_login_1mydq_1",g="_form_1mydq_8",j="_row_1mydq_22",a={login:f,form:g,row:j};function _(){const i=u(),[t,l]=r.useState("jack@example.com"),[o,m]=r.useState("qwerty"),{login:c,isAuthenticated:n}=p();r.useEffect(()=>{n&&i("/app",{replace:!0})},[n,i]);const d=e=>{e.preventDefault(),t&&o&&c(t,o)};return s.jsxs("main",{className:a.login,children:[s.jsx(h,{}),s.jsxs("form",{className:a.form,onSubmit:d,children:[s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"email",children:"Email address"}),s.jsx("input",{type:"email",id:"email",onChange:e=>l(e.target.value),value:t})]}),s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",onChange:e=>m(e.target.value),value:o})]}),s.jsx("div",{children:s.jsx(x,{type:"primary",children:"Login"})})]})]})}export{_ as default};
