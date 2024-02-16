(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var a=t.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!n;)n=a[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})();const n=e.p+"images/me.jpg",t=e.p+"images/me_low.jpg";var a=function(){function e(){return document.createElement("div")}function a(){var n=e();return n.classList.add("socialLinks"),n.innerHTML='\n        <ul>\n            <li><a href="https://www.github.com/KvJellyBean" target="_blank" aria-label="Link to Open My Github in New Tab"><i class="fa-brands fa-github"></i></a></li>\n            <li><a href="https://www.linkedin.com/in/kevin-natanael-44929b26b/" target="_blank" aria-label="Link to Open My LinkedIn in New Tab"><i class="fa-brands fa-linkedin"></i></a></li>\n            <li><a href="https://www.instagram.com/natanvinx" target="_blank" aria-label="Link to Open My Instagram in New Tab"><i class="fa-brands fa-instagram"></i></a></li>\n        </ul>\n    ',n}return{initHeader:function(){var i,r,o,c,l=document.querySelector("header"),s=(i=document.createElement("section"),r=e(),o=function(){var a=e(),i=document.createElement("picture"),r=document.createElement("h2");return i.innerHTML='\n      <source \n        srcset="'.concat(n,'"\n        media="(min-width: 935px)"\n      />\n      <source \n        srcset="').concat(t,'"\n        media="(max-width: 935px)"\n      />\n      <img \n        src="').concat(n,'" \n        alt="Kevin Natanael, the creator of this website"\n      />\n    '),a.classList.add("profile"),r.textContent="Kevin Natanael",a.append(i,r),a}(),c=a(),i.id="aboutSection",r.classList.add("profileContainer"),r.append(o),r.innerHTML+="\n        <h1>About Me</h1>\n        <p>\n          Hello! I'm Kevin Natanael, a front-end developer with aspirations to become a proficient MERN stack full-stack developer. Currently diving deep into learning through The Odin Project, my focus is on mastering ReactJS while aiming to broaden my skills to encompass the entire MERN stack. With a strong passion for crafting exceptional user experiences and robust functionality, I'm continually seeking new challenges to enhance my abilities.\n        </p>\n    ",r.append(c),i.append(r),i);l.append(s)},createSocialLinks:a}}();const i=a,r=e.p+"images/contact.jpg",o=e.p+"images/contact_low.jpg";var c={initFooter:function(){var e,n=document.querySelector("footer"),t=((e=document.createElement("div")).id="contact",e.innerHTML='\n        <h4>Contact Me</h4>\n\n        <p>Please get in touch if you think our projects could be mutually beneficial!</p>\n        <p class="road">1234 Random Road</p>\n        <p class="town">Random Town, California 12345</p>\n        <p class="phone"><i class="fa-solid fa-phone"></i> 555-555-5555</p>\n        <p class="email"><i class="fa-regular fa-envelope"></i> kvjellybean@fakemail.com</p>\n    ',e.append(i.createSocialLinks()),e),a=function(){var e=document.createElement("picture");return e.innerHTML='\n      <source \n        srcset="'.concat(r,'"\n        media="(min-width: 935px)"\n      />\n      <source \n        srcset="').concat(o,'"\n        media="(max-width: 935px)"\n      />\n      <img \n        src="').concat(r,'"\n        alt="Profile picture of Kevin Natanael, the person you are contacting"\n      />\n    '),e}();n.append(t,a)}};const l=c,s=[{name:"Jellist",description:"A sleek and intuitive task management tool designed to effortlessly organize your daily responsibilities, ensuring you stay productive and in control.",image:e.p+"images/jellist.png",repo:"https://github.com/KvJellyBean/todo-app",live:"https://kvjellybean.github.io/todo-app/"},{name:"Weathify",description:"A responsive weather application delivering up-to-the-minute conditions and detailed hourly and daily forecasts for the entire week.",image:e.p+"images/weathify.png",repo:"https://github.com/KvJellyBean/weather-app",live:"https://kvjellybean.github.io/weather-app/"},{name:"Jelly Sushi",description:"Responsive web app for a restaurant with a user-friendly homepage, menu for orders, and contact page—enabling accessibility on any device.",image:e.p+"images/jellySushi.png",repo:"https://github.com/KvJellyBean/restaurant",live:"https://kvjellybean.github.io/restaurant/"},{name:"Jellybrary",description:"A responsive web design Library project that facilitating intuitive book storage and management.",image:e.p+"images/jellybrary.png",repo:"https://github.com/KvJellyBean/Jellybrary",live:"https://kvjellybean.github.io/Jellybrary/"},{name:"Calculator",description:"A sleek and intuitive task management tool designed to effortlessly organize your daily responsibilities, ensuring you stay productive and in control.",image:e.p+"images/calculator.png",repo:"https://github.com/KvJellyBean/calculator",live:"https://kvjellybean.github.io/calculator/"},{name:"Etch-A-Sketch",description:"A sleek and intuitive task management tool designed to effortlessly organize your daily responsibilities, ensuring you stay productive and in control.",image:e.p+"images/etchSketch.png",repo:"https://github.com/KvJellyBean/etch-a-sketch",live:"https://kvjellybean.github.io/etch-a-sketch/"}];var p={initMain:function(){var e=document.querySelector("main"),n=document.createElement("div"),t=document.createElement("h2"),a=function(){var e=document.createElement("div"),n=s;return e.id="projectList",n.forEach((function(n){var t,a,i,r=document.createElement("div"),o=document.createElement("div"),c=(t=n.image,a="".concat(n.name," Preview"),(i=document.createElement("img")).src=t,i.alt=a,i),l=function(e,n,t,a){var i=document.createElement("div");return i.classList.add("projectInfo"),i.innerHTML="\n        <h3>".concat(e,"</h3>\n        <p>").concat(n,'</p>\n        <div class="projectLinks">\n            <ul>\n                <li><a href="').concat(t,'" target="_blank" aria-label="Link to ').concat(e,' Github Repository in New Tab"><i class="fa-brands fa-github"></i></a></li>\n                <li><a href="').concat(a,'" target="_blank" aria-label="Link to ').concat(e,' Github Live Server in New Tab"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>\n            </ul>\n        </div>\n    '),i}(n.name,n.description,n.repo,n.live);r.classList.add("projectCard"),o.classList.add("projectImage"),o.append(c),r.append(o,l),e.append(r)})),e}();n.classList.add("myProject"),t.textContent="My Projects",n.append(t,a),e.append(n)}};const d=p;var u,m,h,g;u=document.body,m=document.createElement("header"),h=document.createElement("main"),g=document.createElement("footer"),u.append(m,h,g),i.initHeader(),d.initMain(),l.initFooter()})();