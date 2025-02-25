"use strict";(self.webpackChunkportfolio_3=self.webpackChunkportfolio_3||[]).push([[488],{2488:function(e,t,n){n.r(t),n.d(t,{About:function(){return I}});var a=n(5861),i=n(885),r=n(7757),o=n.n(r),s=n(2791),c=n(8735),l=n(3880),d=n(1413),u=n(5987),p=n(184),h=["title"],g=["title"],m=function(e){var t=e.title,n=(0,u.Z)(e,h);return(0,p.jsx)(c.X6,(0,d.Z)((0,d.Z)({fontSize:"2xl",color:"accent.300",fontWeight:"bold"},n),{},{"data-aos":"fade-down",children:t}))},f=function(e){var t=e.title,n=(0,u.Z)(e,g);return(0,p.jsx)(p.Fragment,{children:"Programming"!==t&&"Frontend Development"!==t&&"Backend Development"!==t&&"Databases"!==t&&"Dev Practices & Tools"!==t&&"Strategy & Design"!==t?(0,p.jsx)(c.xv,(0,d.Z)((0,d.Z)({fontWeight:"semibold",color:"primary.400",backgroundColor:"highlight.200",width:"fit-content",fontSize:"xl",fontFamily:"Outfit"},n),{},{"data-aos":"fade-down",children:t})):(0,p.jsx)(c.xv,(0,d.Z)((0,d.Z)({fontWeight:"semibold",fontSize:"xl",fontFamily:"Outfit"},n),{},{"data-aos":"fade-down",children:t}))})},b=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2);t[0],t[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m,{title:"Education"}),(0,p.jsx)("br",{}),l.rH.about.educations.map((function(e){return(0,p.jsxs)(c.xu,{p:"0",mb:"4",children:[(0,p.jsx)(f,{title:e.school,fontWeight:"semibold"}),(0,p.jsx)(c.xv,{"data-aos":"fade",fontWeight:"600",children:e.degree}),(0,p.jsx)(c.xv,{color:"gray","data-aos":"fade-up",fontSize:"sm",children:e.duration}),(0,p.jsx)(c.QI,{listStylePosition:"outside",pl:"1",children:(0,p.jsx)(c.xv,{as:"li",pt:"2","data-aos":"fade",children:e.content})})]},"education-".concat(e.id))}))]})},x=n(6332),j=n(2982),y=n(8227),S=n(2504),v=function(e){var t=e.expanded,n=e.id,a=e.idx,r=e.title,o=e.subTitle,l=e.date,d=e.content,u=e.onChange,h=(0,s.useMemo)((function(){return t.includes(a)}),[t,a]),g=(0,s.useState)(!1),m=(0,i.Z)(g,2),b=m[0],v=m[1],w=(0,s.useMemo)((function(){return d.length>1&&!h||!h&&b}),[b,h,d]),k=(0,y.ff)("gray","gray.900");return(0,s.useEffect)((function(){var e,t="first-point-".concat(n),a=document.getElementById(t);a&&(a.scrollWidth>=(null===(e=a.parentElement)||void 0===e?void 0:e.scrollWidth)?v(!0):v(!1))}),[n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(x.KF,{as:c.xu,p:"0",disabled:!0,onClick:void 0,_hover:{bg:"transparent"},overflow:"hidden",display:"block",children:[(0,p.jsx)(f,{title:r,fontWeight:"semibold"}),(0,p.jsx)(c.xv,{"data-aos":"fade",fontWeight:"600",children:o}),(0,p.jsx)(c.xv,{color:k,"data-aos":"fade-up",fontSize:"sm",children:l}),(0,p.jsxs)(c.kC,{pt:"2",justifyContent:"flex-end",flexDirection:"column",width:"full","data-aos":"fade",children:[(0,p.jsx)(c.QI,{listStylePosition:"outside",pl:"1",children:(0,p.jsx)(c.xv,{as:"li",id:"first-point-".concat(n),children:d[0]})}),w&&(0,p.jsx)(S.zx,{flexShrink:0,id:"see-more-".concat(n),size:"xs",variant:"link",color:"secondary.400",opacity:"0.8",alignSelf:"flex-end",onClick:function(){if(t.includes(a)){var e=t.filter((function(e){return e!==a}));u(e)}else u([].concat((0,j.Z)(t),[a]))},children:"See more"})]})]}),(0,p.jsxs)(x.Hk,{p:"0",pl:"1",children:[(0,p.jsx)(c.QI,{listStylePosition:"outside",children:d.slice(1).map((function(e,t){return(0,p.jsx)(c.xv,{as:"li",children:e},"".concat(r,"-cont-").concat(t))}))}),t.includes(a)&&(0,p.jsx)(c.kC,{justifyContent:"flex-end",flexDirection:"column",width:"full",children:(0,p.jsx)(S.zx,{id:"see-less-".concat(n),size:"xs",variant:"link",color:"secondary.400",opacity:"0.7",alignSelf:"flex-end",onClick:function(){var e=t.filter((function(e){return e!==a}));u(e)},children:"See less"})})]})]})},w=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m,{title:"Experience"}),(0,p.jsx)("br",{}),(0,p.jsx)(x.UQ,{pt:"2",allowMultiple:!0,index:n,children:l.rH.about.experiences.map((function(e,t){return(0,p.jsx)(x.Qd,{p:"0",border:"0",mb:"4",children:(0,p.jsx)(v,{id:e.id,title:e.company,subTitle:e.position,date:e.duration,content:e.description,idx:t,onChange:a,expanded:n})},"panel-".concat(e.company))}))})]})},k=n(3362),A=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m,{title:"Skills",pb:"2"}),(0,p.jsx)("br",{}),(0,p.jsx)(c.rj,{templateColumns:{base:"1fr",md:"1fr 1fr"},gap:"4",children:l.rH.about.skills.map((function(e){return(0,p.jsxs)(c.xu,{p:"0",mb:"4",children:[(0,p.jsx)(f,{title:e.title}),(0,p.jsx)(k.$,{id:"skills-tags-".concat(e.title),tags:e.tools})]},"skills-".concat(e.title))}))})]})},P=n(4070),I=function(){var e=(0,l.r0)(l.nl.About),t=(0,s.useState)(""),n=(0,i.Z)(t,2),r=n[0],d=n[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,a.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.about){t.next=5;break}return t.next=3,(0,P.TU)(e.about);case 3:n=t.sent,d(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e.about]),(0,p.jsxs)(c.xu,{children:[(0,p.jsx)(c.kC,{pt:"8",gap:{base:6,md:6,lg:12},direction:{base:"column",md:"row"},children:(0,p.jsxs)(c.xu,{flex:"1",children:[(0,p.jsx)(c.X6,{"data-aos":"fade-down",color:"accent.300",children:l.rH.common.name}),(0,p.jsxs)(c.xu,{pt:"4","data-aos":"fade-up","data-aos-delay":"400",children:[r&&(0,p.jsx)(c.xv,{fontSize:"lg",children:(0,p.jsx)(c.xu,{id:"about-content",as:"div",dangerouslySetInnerHTML:{__html:r}})}),(0,p.jsx)("style",{children:"\n                                    #about-content p {\n                                        margin-bottom: 1.5rem;\n                                    }\n\n                                    #about-content strong {\n                                        font-weight: bold;\n                                        background-color: #d5dcf9;\n                                        color: #293132;\n                                    }\n                                "})]})]})}),(0,p.jsx)(c.xu,{pt:"16",children:(0,p.jsx)(w,{})}),(0,p.jsx)(c.xu,{pt:"16",children:(0,p.jsx)(b,{})}),(0,p.jsx)(c.xu,{pt:"16",children:(0,p.jsx)(A,{})})]})}},3880:function(e,t,n){n.d(t,{nl:function(){return i},rH:function(){return f},r0:function(){return x}});var a,i,r=n(1413),o=n(885),s=n(4942),c=n(2791),l=JSON.parse('{"name":"Carmen Shiu","logoType":{"mobile":"CS","desktop":"Carmen Shiu"},"mainPicture":"/assets/face.webp","mainPictureJPG":"/assets/face.jpg","cssVarPrefix":"cs","email":"hi@carmenshiu.com","linkedIn":"https://www.linkedin.com/in/carmenshiu","gitHub":"https://github.com/craftycarmen","resume":"/assets/Carmen_Shiu_Resume.pdf","socials":[{"type":"linkedIn","link":"https://www.linkedin.com/in/carmenshiu"},{"type":"gitHub","link":"https://github.com/craftycarmen"},{"type":"email","link":"mailto:hi@carmenshiu.com"}]}'),d=JSON.parse('{"headline":"Oh, hi! ","subheadline":"I\'m Carmen Shiu.","picture":"/assets/landing/face.webp","jpg":"/assets/landing/face.jpeg"}'),u=JSON.parse('[{"id":"featured-project-lingoai","title":"Lingo.ai","year":"July 2024 - August 2024","team":"5-member team project","demo":"https://lingo-ai.carmenshiu.com/","github":"https://github.com/athena-codes/a-A-summer-hackathon","tags":["Node.js","JavaScript","Express.js","Firebase","Gemini AI","React","Redux","Material UI (MUI)"],"description":"\ud83c\udfc6 Second Place - App Academy Summer 2024 Hackathon: AI for Social Good\\n An LLM-powered flashcard web application for non-native English speakers to enhance their skills through interactive AI-generated questions.","image":"/assets/featured-projects/lingoai.webp","jpg":"/assets/featured-projects/lingoai.png","highlights":["Integrated AI-powered flashcard generation with Gemini AI, enhancing user learning","Implemented advanced user interface (UI) components with Material UI, delivering a polished user experience (UX)","Conducted quality assurance (QA) by testing backend routes with Postman and troubleshooting frontend issues","Optimized Firebase Firestore configurations and data handling to improve app performance"]},{"id":"featured-project-plantera","title":"Plantera","year":"April 2024 - November 2024","team":"Solo project","demo":"https://plantera.carmenshiu.com","github":"https://github.com/craftycarmen/plantera","tags":["Node.js","JavaScript","Express.js","PostgreSQL","Sequelize","React","Redux","HTML5","CSS3","Amazon Web Services (AWS)","Stripe"],"description":"A plant marketplace community platform where plant enthusiasts come together to shop and sell plants, and inspire others with plant care guides.","image":"/assets/featured-projects/plantera.webp","jpg":"/assets/featured-projects/plantera.png","highlights":["Engineered RESTful API endpoints with Express.js to streamline client-server communication","Built a shopping cart feature with Redux and Web Storage API for a seamless UX, regardless of authentication status","Designed search and filter functionality to help users easily browse and find plants","Incorporated Quill, a rich-text editor, to enable users to create and publish plant-related articles","Configured custom user authentication with bcrypt and React routes, effectively managing user access","Leveraged Stripe for easy, secure payment processing"]},{"id":"featured-project-thepaw","title":"The Paw","year":"March 2024 - August 2024","team":"3-member team project","tags":["Python","Flask","JavaScript","PostgreSQL","React","Redux","HTML5","CSS3","Amazon Web Services (AWS)","Google Maps API"],"demo":"https://thepaw.carmenshiu.com/","github":"https://github.com/ballisticbutterflies/The-Paw","description":"A pet-friendly business review platform for businesses to showcase their services, and pet owners to share their experiences.","image":"/assets/featured-projects/thepaw.webp","jpg":"/assets/featured-projects/thepaw.png","highlights":["Established a Git workflow for a 3-member team, ensuring optimized collaboration and version control","Developed the backend with Python and Flask, handling server-side logic and data processing","Designed a responsive UI with React for viewing business details, adding reviews, and uploading photos","Integrated Amazon Web Services (AWS) S3 for efficient photo management and storage"]}]'),p=JSON.parse('[{"id":"other-project-post","title":"Part of Speech Tagger","year":"Aug 2019 - Dec 2019","github":"https://github.com/hrishikeshpaul/post","demo":"https://hrishikeshpaul.github.io/post/","tags":["Python","Vue","Flask","Artificial Intelligence","Language Processing"],"description":"Post is a simple algorithm that was developed to tag a word in a sentence corresponding to its part of speech. The algorithm makes of a probabilistic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling.","image":"/assets/other-projects/post.webp","jpg":"/assets/other-projects/post.jpeg"},{"id":"other-project-noq","title":"NoQ Job Portal","year":"Aug 2019 - Dec 2019","github":"https://github.com/hrishikeshpaul/noq","demo":"http://noq-client.herokuapp.com/login","tags":["Vue","NodeJS","JavaScript","MongoDB","Heroku","Agile","Sockets","JIRA"],"description":"NoQ is a tool which allows for both employers and students to skip the hassle seen in modern day career fairs, while effectively pairing up students with employees based on various factors.","image":"/assets/other-projects/noq.webp","jpg":"/assets/other-projects/noq.jpeg"},{"id":"other-project-bank-compare","title":"Experience Design Anaysis","year":"Aug 2019 - Dec 2019","tags":["UX Design","Analysis","Adobe XD","Mockups"],"description":"This project demonstrates how the selection of colors, fonts, shapes, languages, layout and other styles can lead to drastically different user experiences, by comparing landing pages of 3 bank websites built from scratch.","image":"/assets/other-projects/bank.webp","jpg":"/assets/other-projects/bank.jpeg"},{"id":"other-project-bunder","title":"Bunder","year":"Jan 2020 - Apr 2020","tags":["Surveying","User Interviews","Ideation","Analysis","Product Planning"],"description":"An MVP Proposal - Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them.","image":"/assets/other-projects/bunder.webp","jpg":"/assets/other-projects/bunder.jpeg"},{"id":"other-project-suicide-analyzer","title":"Suicide Analyzer","tags":["AngularJS","JavaScript","Express","NodeJS","Leaflet","Heroku","Python","Pandas"],"description":"This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO.","github":"https://github.com/hrishikeshpaul/whodata","image":"/assets/other-projects/suicide-analyzer.webp","jpg":"/assets/other-projects/suicide-analyzer.jpeg"},{"id":"other-project-nutricare","title":"Nutricare","tags":["AngularJS","JavaScript","Express","NodeJS","Leaflet","Heroku","Python","Pandas"],"description":"A web app for patients to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects for a particular problem statement.","image":"/assets/other-projects/nutricare.webp","jpg":"/assets/other-projects/nutricare.jpeg"}]'),h=JSON.parse('{"educations":[{"id":"edu-1","school":"App Academy","degree":"Full-Stack Web Development","duration":"May 2023 - May 2024","content":["Curriculum: Programming Fundamentals, Computer Science, Web Development Fundamentals, Backend Engineering, Frontend Engineering, Python"]},{"id":"edu-2","school":"San Jose State University","degree":"Bachelor of Science in Public Relations","duration":"August 2010 - May 2012","content":["Academic Focus: Marketing"]}],"experiences":[{"id":"exp-2","company":"Angles, Inc.","position":"Production Manager","duration":"October 2023 - Present","description":["Creating custom HubSpot website features using HTML, CSS, JavaScript, and HubSpot Markup Language (HubL)","Managing website overhauls by coordinating with designers, developers, and clients","Streamlining collaboration and project management by optimizing workflows in ClickUp","Directing ad production, driving $100,000+ in revenue for clients"]},{"id":"exp-3","company":"CLEVER Influencer Marketing Agency","position":"Senior Product Manager & Project Manager","duration":"February 2012 - February 2023","description":["Collaborated with software engineers to design and implement proprietary dashboards","Initiated strategic efforts, such as a Pricing Workbook to optimize budget allocation and client guarantees","Launched 6 cross-functional projects, contributing to a 90% client retention rate"]}],"skills":[{"title":"Programming","tools":["JavaScript","Python","TypeScript"]},{"title":"Frontend Development","tools":["React","Next.js","Redux","Tailwind CSS","Material UI","HTML5","CSS3","Performance Optimization","Responsive Design","Mobile Optimization"]},{"title":"Backend Development","tools":["Node.js","Express.js","Flask","RESTful APIs","Stripe","Gemini AI","Google Maps API"]},{"title":"Databases","tools":["PostgreSQL","Sequelize","SQLAlchemy","SQLite","Supabase","Firebase"]},{"title":"Dev Practices & Tools","tools":["MacOS","Git","Amazon Web Services (AWS)","AI Prompting","Quality Assurance","Pair Programming","Object-Oriented Programming (OOP)","GitHub Actions","Render Deployment","Vercel Deployment","Testing & Debugging"]},{"title":"Strategy & Design","tools":["Project Management","Product Management","Adobe Photoshop","Canva","User Research","Cross-Functional Collaboration","Agile & Scrum"]}]}'),g=n(7034),m=n(7838),f=(n(184),{common:l,landing:d,featuredProjects:u,otherProjects:p,about:h});!function(e){e.Landing="landing",e.About="about"}(i||(i={}));var b=(a={},(0,s.Z)(a,i.Landing,g),(0,s.Z)(a,i.About,m),a),x=function(e){var t=(0,c.useState)({landing:"",about:""}),n=(0,o.Z)(t,2),a=n[0],i=n[1];return(0,c.useEffect)((function(){fetch(b[e]).then((function(e){return e.text()})).then((function(t){return i((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,s.Z)({},e,t))}))}))}),[e]),a}},3362:function(e,t,n){n.d(t,{$:function(){return r}});var a=n(8735),i=n(184),r=function(e){var t=e.id,n=e.tags,r=e.size,o=void 0===r?"sm":r;return(0,i.jsx)(a.kC,{py:"2",wrap:"wrap",gap:"4",children:n.map((function(e,n){return(0,i.jsx)(a.xu,{"data-aos":"flip-left","data-aos-delay":50*n,children:(0,i.jsx)(a.Ct,{transition:"0.2s ease-in-out",transitionProperty:"background, color",_hover:{cursor:"default"},textTransform:"none",background:"highlight.200",borderRadius:"md",px:"8px",py:"4px",fontSize:o,fontWeight:"600",children:e})},"".concat(t,"-tag-").concat(e))}))})}},7838:function(e,t,n){e.exports=n.p+"static/media/about.2e36ac78e84acd2c0daa.md"},7034:function(e,t,n){e.exports=n.p+"static/media/landing.825fc51529d3e2185170.md"},5987:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(3366);function i(e,t){if(null==e)return{};var n,i,r=(0,a.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},3366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=488.5d4f036f.chunk.js.map