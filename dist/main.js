(()=>{"use strict";(t=>{const e=document.querySelector("#timer"),n=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),c=document.querySelector("#timer-seconds"),r=setInterval((()=>{const t=(()=>{const t=(new Date("31 December 2020").getTime()-(new Date).getTime())/1e3,e=Math.floor(t%60),n=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:n,seconds:e}})();t.hours<10?n.textContent="0"+t.hours:n.textContent=t.hours,t.minutes<10?o.textContent="0"+t.minutes:o.textContent=t.minutes,t.seconds<10?c.textContent="0"+t.seconds:c.textContent=t.seconds,t.timeRemaining<=0&&(n.textContent="00",o.textContent="00",c.textContent="00",e.style.color="red",clearInterval(r))}),1e3)})(),(()=>{const t=document.querySelector("menu");document.addEventListener("click",(e=>{let n=e.target;n.closest(".menu")||n.matches(".close-btn")||n.closest("menu>ul>li")?t.classList.toggle("active-menu"):n.matches(".active-menu")||t.classList.remove("active-menu")}))})(),(()=>{const t=document.querySelectorAll("menu>ul>li>a"),e=document.querySelector('main>a[href = "#service-block"');let n;t.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault(),n=t.getAttribute("href"),document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})),e.addEventListener("click",(t=>{t.preventDefault(),n=e.getAttribute("href"),document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const t=document.querySelector(".popup"),e=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content");let o=-500;const c=()=>{window.outerWidth>=768&&(n.style.transform=`translateX(${o}px)`,o+=20,o<0?requestAnimationFrame(c):(o=-500,cancelAnimationFrame(c)))};e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",requestAnimationFrame(c)}))})),t.addEventListener("click",(e=>{let n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"),n||(t.style.display="none"))}))})(),(()=>{const t=document.querySelector(".service-header"),e=t.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");t.addEventListener("click",(t=>{let o=t.target;o=o.closest(".service-header-tab"),o&&e.forEach(((t,c)=>{t===o&&(t=>{for(let o=0;o<n.length;o++)t===o?(e[o].classList.add("active"),n[o].classList.remove("d-none")):(e[o].classList.remove("active"),n[o].classList.add("d-none"))})(c)}))}))})(),(()=>{const t=document.querySelectorAll(".portfolio-item"),e=document.querySelector(".portfolio-content"),n=document.querySelector(".portfolio-dots");(()=>{for(let e=0;e<t.length;e++){const t=document.createElement("li");t.classList.add("dot"),n.append(t),n.firstElementChild.classList.add("dot-active")}})();const o=document.querySelectorAll(".dot");let c,r=0;const s=(t,e,n)=>{t[e].classList.remove(n)},a=(t,e,n)=>{t[e].classList.add(n)},l=()=>{s(t,r,"portfolio-item-active"),s(o,r,"dot-active"),r++,r>=t.length&&(r=0),a(t,r,"portfolio-item-active"),a(o,r,"dot-active")},i=(t=3e3)=>{c=setInterval(l,t)};e.addEventListener("click",(e=>{e.preventDefault();let n=e.target;n.matches(".portfolio-btn, .dot")&&(s(t,r,"portfolio-item-active"),s(o,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&o.forEach(((t,e)=>{t===n&&(r=e)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),a(t,r,"portfolio-item-active"),a(o,r,"dot-active"))})),e.addEventListener("mouseover",(t=>{(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&clearInterval(c)})),e.addEventListener("mouseout",(t=>{(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&i(2e3)})),i(2e3)})(),(()=>{let t;document.querySelectorAll(".command__photo").forEach((e=>{e.addEventListener("mouseenter",(e=>{t=e.target.src,e.target.src=e.target.dataset.img})),e.addEventListener("mouseleave",(e=>{e.target.src=t}))}))})(),((t=100)=>{const e=document.querySelectorAll("input.calc-item"),n=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),s=document.querySelector(".calc-count"),a=document.getElementById("total");e.forEach((t=>{t.addEventListener("input",(()=>{t.value=t.value.replace(/\D/g,"")}))})),n.addEventListener("change",(e=>{const n=e.target;(n.matches("select")||n.matches("input"))&&(()=>{let e=0,n=1,l=1;const i=o.options[o.selectedIndex].value,u=+c.value;s.value>1&&(n+=(s.value-1)/10),r.value&&r.value<5?l*=2:r.value&&r.value<10&&(l*=1.5),i&&u&&(e=t*i*u*n*l),a.textContent=e})()}))})(100),maskPhone("input[name = user_phone]"),document.addEventListener("input",(t=>{let e=t.target;(e.matches("input[name = user_message]")||e.matches("input[name = user_name]"))&&(e.value=e.value.replace(/[^а-яА-Я\s]+/g,""))})),(()=>{const t=document.createElement("div");t.style.color="#FFFFFF",document.addEventListener("submit",(n=>{n.preventDefault();let o=n.target;if(o.matches("#form1")||o.matches("#form2")||o.matches("#form3")){const n=o.querySelectorAll("input");o.appendChild(t),t.innerHTML='<div class="lds-ring">\n\t\t\t<div></div>\n\t\t\t<div></div>\n\t\t\t<div></div>\n\t\t\t<div></div>\n\t\t</div><br></br>\n\t\t<span>Пожалуйста, подождите...</span>';const c=new FormData(o);let r={};c.forEach(((t,e)=>{r[e]=t})),e(r).then((e=>{if(200!==e.status)throw new Error("status network not 200");t.innerHTML='<svg\n\t\t\tclass="checkmark success"\n\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\tviewBox="0 0 52 52"\n\t\t>\n\t\t\t<circle\n\t\t\t\tclass="checkmark_circle_success"\n\t\t\t\tcx="26"\n\t\t\t\tcy="26"\n\t\t\t\tr="25"\n\t\t\t\tfill="none"\n\t\t\t/>\n\t\t\t<path\n\t\t\t\tclass="checkmark_check"\n\t\t\t\tfill="none"\n\t\t\t\td="M14.1 27.2l7.1 7.2 16.7-16.8"\n\t\t\t\tstroke-linecap="round"\n\t\t\t/>\n\t\t</svg>\n\t\t<span>Cпасибо за обращение! Мы скоро с Вами свяжемся ;)</span>',setTimeout((()=>{t.remove()}),5e3)})).catch((e=>{t.innerHTML='<svg\n\t\t\tclass="checkmark error"\n\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\tviewBox="0 0 52 52"\n\t\t>\n\t\t\t<circle\n\t\t\t\tclass="checkmark_circle_error"\n\t\t\t\tcx="26"\n\t\t\t\tcy="26"\n\t\t\t\tr="25"\n\t\t\t\tfill="none"\n\t\t\t/>\n\t\t\t<path\n\t\t\t\tclass="checkmark_check"\n\t\t\t\tstroke-linecap="round"\n\t\t\t\tfill="none"\n\t\t\t\td="M16 16 36 36 M36 16 16 36\n"\n\t\t\t/>\n\t\t</svg>\n\t\t<span>Упс! Что-то пошло не так :(</span>',console.error(e),setTimeout((()=>{t.remove()}),5e3)})),n.forEach((t=>{t.value=""}))}}));const e=t=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})})()})();