!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.body;t.addEventListener("click",(function(){setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.setAttribute("disabled",!0),e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.2534e1d2.js.map