window.addEventListener("load",function(){var fous=document.querySelector(".focus");var right=document.querySelector(".right");var left=document.querySelector(".left");var fousWidth=fous.offsetWidth;fous.addEventListener("mouseenter",function(){right.style.display="block";left.style.display="block";clearInterval(timer);timer=null});fous.addEventListener("mouseleave",function(){right.style.display="none";left.style.display="none";timer=setInterval(function(){right.click()},2000)});var ol=fous.querySelector(".circle");var ul=fous.querySelector("ul");for(var i=0;i<ul.children.length;i++){var li=document.createElement("li");ol.appendChild(li);li.setAttribute("index",i);li.addEventListener("click",function(){for(var i=0;i<ol.children.length;i++){ol.children[i].className=""}this.className="curron";var index=this.getAttribute("index");console.log(index);num=circle=index;animate(ul,-index*fousWidth)});ol.children[0].className="curron"}var num=0;var circle=0;var first=ul.children[0].cloneNode(true);ul.appendChild(first);var flag=true;right.addEventListener("click",function(){if(flag){flag=false;if(num==ul.children.length-1){num=0;ul.style.left=0}num++;animate(ul,-num*fousWidth,function(){flag=true});circle++;circle=circle==ol.children.length?0:circle;xun()}});left.addEventListener("click",function(){if(flag){flag=false;if(num==0){num=ul.children.length-1;ul.style.left=-(num)*fousWidth+"px"}num--;animate(ul,-num*fousWidth,function(){flag=true});circle--;circle=circle<0?ol.children.length-1:circle;xun()}});function xun(){for(var i=0;i<ol.children.length;i++){ol.children[i].className=""}ol.children[circle].className="curron"}var timer=setInterval(function(){right.click()},2000)});