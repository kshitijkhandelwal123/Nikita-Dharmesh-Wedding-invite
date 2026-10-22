(function(){
var W=window.WEDDING,$=function(i){return document.getElementById(i)};
document.title=W.bride+" & "+W.groom+" | Wedding Invitation";

/* ---------- theme colours + hidden sections ---------- */
var T=W.theme||{},rs=document.documentElement.style;
["ink","blue","sky","mist","gold"].forEach(function(k){if(T[k])rs.setProperty("--"+k,T[k])});
(W.hideSections||[]).forEach(function(id){var el=$(id);if(el)el.style.display="none"});

/* ---------- fill content ---------- */
function set(id,v){var e=$(id);if(e)e.textContent=v==null?"":v}
set("mono",W.monogram);set("mono2",W.monogram);
set("gEyebrow",W.gateEyebrow);set("gGroom",W.groom);set("gBride",W.bride);set("gTap",W.gateText);
set("hEyebrow",W.heroEyebrow);set("groom",W.groom);set("bride",W.bride);
set("hDate",W.dateDay+" · "+W.dateMonth+" · "+W.dateYear);set("hPlace",W.place);
set("blessing",W.blessing);set("tag",W.tagline);set("invite",W.inviteLine);set("gp",W.groomParents);set("gLab",W.groomLabel||"Son of");set("bLab",W.brideLabel||"Daughter of");set("bp",W.brideParents);set("cGroom",W.groomFull||W.groom);set("cBride",W.brideFull||W.bride);
try{var _d=new Date(W.weddingDateTime),_f=function(o){return new Intl.DateTimeFormat("en-IN",Object.assign({timeZone:"Asia/Kolkata"},o)).format(_d)};
  set("cEnd",W.cardFooter!=null?W.cardFooter:(_f({weekday:"long"})+", "+_f({day:"numeric"})+" "+_f({month:"long"})+" "+_f({year:"numeric"})+"\n"+W.venueName+", "+(W.venueCity||"").replace(/^Venue\s*·\s*/,"")))}catch(e){}
if(W.footerImage!=null){if(W.footerImage)$("footImg").src=W.footerImage;else $("footImg").parentNode.style.display="none"}
set("blQuote",W.blessingQuote||"");set("blSub",W.blessingSub||"");if(W.blessingImage===""){var _b=$("blessed");if(_b)_b.style.display="none"}else if(W.blessingImage){$("blImg").src=W.blessingImage}
if(W.heroImage){$("heroImg").src=W.heroImage;}if(W.heroFocus){$("heroImg").style.objectPosition=W.heroFocus}
set("dDay",W.dateDay);set("dMon",W.dateMonth);set("dYr",W.dateYear);set("dTime",W.dateNote||"");
try{set("dWeek",new Intl.DateTimeFormat("en-IN",{weekday:"long",timeZone:"Asia/Kolkata"}).format(new Date(W.weddingDateTime)).toUpperCase())}catch(e){}

set("evEyebrow",W.eventsEyebrow);set("vName",W.venueName);set("vNote",W.venueNote);set("vCity",W.venueCity);set("vAddr",W.venueAddress);
set("dEyebrow",W.dressEyebrow);set("dTitle",W.dressTitle);
set("rsvpBy",W.rsvpBy);set("closeTxt",W.closing);set("fam",W.families);
set("clNames",W.bride+" & "+W.groom);set("clDate",W.dateDay+" · "+W.dateMonth+" · "+W.dateYear);
set("clTag",W.hashtag||("#"+W.bride+"Weds"+W.groom));
if(W.couplePhoto){$("couplePhoto").src=W.couplePhoto;$("coupleWrap").hidden=false}
if(W.venueImage){$("vimg").src=W.venueImage;$("vimg").style.objectPosition=W.venueFocus||"center"}else{$("vimgWrap").hidden=true}
$("mapBtn").href=W.mapLink||("https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(W.mapQuery||W.venueAddress));
var RM=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];
$("tl").innerHTML=W.events.map(function(e,i){
  var pic=e.image?'<img class="pic" loading="lazy" src="'+e.image+'" alt="'+e.title+'" style="object-position:'+(e.focus||"center")+'">':"";
  return '<div class="ev reveal-up'+(e.image?"":" nopic")+'">'+pic+'<div class="tx"><span class="num">'+(RM[i]||i+1)+'</span><div class="d">'+e.date+'<br>'+e.time+'</div><h3>'+e.title+'</h3><p>'+e.note+'</p></div></div>'}).join("");
var DC=W.dressCode||[],hasP=DC.some(function(d){return d.poster});
function lookCard(d){var chips=(d.colors||[]).map(function(c){return '<i style="background:'+c+'"></i>'}).join("");
  return '<div class="lk reveal-up'+(d.image?' haspic':'')+'">'+(d.image?'<div class="lkp"><img loading="lazy" src="'+d.image+'" alt="'+d.event+' outfits"></div>':(chips?'<div class="chips">'+chips+'</div>':""))+'<div class="tx"><b>'+d.event+'</b><span>'+(d.look||"").split("|").join("<br>")+'</span>'+(d.image&&chips?'<div class="dots">'+chips+'</div>':'')+'</div></div>'}
if(!hasP){$("dressList").innerHTML=DC.map(lookCard).join("")}
else{
  $("dressList").innerHTML='<div class="ptabs" id="pTabs">'+DC.map(function(d,i){return '<button data-i="'+i+'">'+d.event+'</button>'}).join("")+'</div>'+
   '<div class="pslides" id="pSl">'+DC.map(function(d){return '<div class="ps">'+(d.poster?'<div class="pf"><img loading="lazy" src="'+d.poster+'" alt="'+d.event+' dress code"></div><small>Tap to view full size</small>':lookCard(d))+'</div>'}).join("")+'</div>';
  var sl=$("pSl"),tb=[].slice.call($("pTabs").children);
  function pmark(){var i=Math.round(sl.scrollLeft/sl.clientWidth);tb.forEach(function(b,k){b.classList.toggle("on",k===i)})}
  sl.addEventListener("scroll",function(){clearTimeout(sl._t);sl._t=setTimeout(pmark,60)});pmark();
  tb.forEach(function(b){b.onclick=function(){sl.scrollTo({left:sl.clientWidth*+b.dataset.i,behavior:"smooth"})}});
  var lb=$("lbox");
  sl.addEventListener("click",function(e){if(e.target.tagName==="IMG"&&e.target.closest(".pf")){$("lboxImg").src=e.target.src;lb.hidden=false;document.body.style.overflow="hidden"}});
  lb.addEventListener("click",function(){lb.hidden=true;document.body.style.overflow=""});
}

/* ---------- glitter ---------- */
var cv=$("fx"),cx=cv.getContext("2d"),P=[],raf=0,dpr=Math.min(2,window.devicePixelRatio||1);
function size(){cv.width=innerWidth*dpr;cv.height=innerHeight*dpr}size();addEventListener("resize",size);
var COL=["#ffffff","#ffe0dc","#f29a9e","#f6c75a","#d8a64a"];
function star(x,y,r,rot){cx.beginPath();for(var i=0;i<8;i++){var a=rot+i*Math.PI/4,rr=i%2?r*.28:r;cx.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr)}cx.closePath();cx.fill()}
function burst(x,y,big){
  var tiny=big==="tiny",n=tiny?9:(big?300:110);
  for(var i=0;i<n;i++){var a=i/n*Math.PI*2+Math.random()*.03,s=(tiny?2:(big?7:4))+Math.random()*(big?1.4:.8);
    P.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:0,L:(big?95:70)+Math.random()*30,r:1.2+Math.random()*(big?3.4:2.4),c:COL[i%5],t:Math.random()*6,k:Math.random()<.35})}
  for(var j=0;j<(tiny?5:(big?160:50));j++){var b=Math.random()*Math.PI*2,sp=Math.random()*(big?6:3);
    P.push({x:x,y:y,vx:Math.cos(b)*sp,vy:Math.sin(b)*sp,l:0,L:60+Math.random()*60,r:1+Math.random()*2.6,c:COL[j%5],t:Math.random()*6,k:Math.random()<.5})}
  if(!tiny)P.push({ring:1,x:x,y:y,r:10,l:0,L:big?70:45,max:big?Math.max(innerWidth,innerHeight)*.8:90});
  if(!raf)raf=requestAnimationFrame(loop)}
function dust(n){for(var i=0;i<n;i++){var a=Math.random()*Math.PI*2,sp=Math.random()*.9;
  P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight*.95,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-.4,l:0,L:70+Math.random()*90,r:1+Math.random()*2.6,c:COL[i%5],t:Math.random()*6,k:Math.random()<.6})}
  if(!raf)raf=requestAnimationFrame(loop)}
function shower(ms){var t0=Date.now(),iv=setInterval(function(){dust(10);
  burst(innerWidth*(.15+Math.random()*.7),innerHeight*(.12+Math.random()*.76),"tiny");
  if(Date.now()-t0>ms)clearInterval(iv)},110)}
function loop(){cx.setTransform(dpr,0,0,dpr,0,0);cx.clearRect(0,0,innerWidth,innerHeight);
  for(var i=P.length-1;i>=0;i--){var p=P[i];p.l++;if(p.l>p.L){P.splice(i,1);continue}var u=p.l/p.L;
    if(p.ring){var rr=p.r+(p.max-p.r)*(1-Math.pow(1-u,3));var g=cx.createRadialGradient(p.x,p.y,rr*.9,p.x,p.y,rr*1.04);
      g.addColorStop(0,"rgba(255,255,255,0)");g.addColorStop(.7,"rgba(255,255,255,"+(.7*(1-u))+")");g.addColorStop(1,"rgba(255,255,255,0)");cx.fillStyle=g;cx.beginPath();cx.arc(p.x,p.y,rr*1.04,0,7);cx.fill();continue}
    p.x+=p.vx;p.y+=p.vy;p.vx*=.955;p.vy=p.vy*.955+.035;
    var tw=.55+.45*Math.sin(p.l*.5+p.t);cx.globalAlpha=Math.max(0,(1-u))*tw;cx.fillStyle=p.c;
    if(p.k)star(p.x,p.y,p.r*2.2,p.l*.1);else{cx.beginPath();cx.arc(p.x,p.y,p.r,0,7);cx.fill()}}
  cx.globalAlpha=1;raf=P.length?requestAnimationFrame(loop):0}

/* ---------- falling blossoms ---------- */
var pet=$("petals");
function petal(){var p=document.createElement("div");p.className="petal";p.style.left=Math.random()*100+"vw";
  var s=10+Math.random()*12;p.style.width=s+"px";p.style.height=s*1.3+"px";
  p.style.setProperty("--dx",(Math.random()*160-80)+"px");p.style.setProperty("--rot",(300+Math.random()*400)+"deg");
  var d=9+Math.random()*7;p.style.animationDuration=d+"s";pet.appendChild(p);setTimeout(function(){p.remove()},d*1000)}

/* ---------- music ---------- */
var audio=null,mb=$("musicBtn");
if(W.music){audio=new Audio(W.music);audio.loop=true;audio.volume=.55;
  audio.addEventListener("canplaythrough",function(){mb.classList.add("has")},{once:true});
  audio.addEventListener("error",function(){audio=null});
  mb.onclick=function(){if(!audio)return;if(audio.paused){audio.play();mb.classList.remove("off")}else{audio.pause();mb.classList.add("off")}}}

/* ---------- open the gate ---------- */
var gate=$("gate"),lock=$("lock"),opened=false;
try{history.scrollRestoration="manual"}catch(e){}
function top0(){var h=document.documentElement;h.style.scrollBehavior="auto";window.scrollTo(0,0);h.scrollTop=0;document.body.scrollTop=0;setTimeout(function(){h.style.scrollBehavior=""},60)}
top0();
function open(){if(opened)return;opened=true;top0();
  var r=lock.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
  gate.classList.add("open");if(audio)audio.play().catch(function(){});
  burst(x,y,false);
  setTimeout(function(){burst(x,y,true)},1300);
  setTimeout(function(){burst(x-90,y-120,false);burst(x+90,y-100,false)},1800);
  for(var i=0;i<14;i++)setTimeout(petal,900+i*120);
  setTimeout(function(){document.body.classList.remove("locked");document.body.classList.add("in");top0()},3300);
  setTimeout(function(){gate.classList.add("fade")},3500);
  setTimeout(function(){gate.classList.add("gone")},5000);
  setInterval(petal,900)}
gate.addEventListener("click",open);

/* ---------- scroll reveal ---------- */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".reveal-up").forEach(function(n,i){n.style.transitionDelay=(i%3)*.08+"s";io.observe(n)});

/* ---------- save the date: three foil cards, scratched one by one ---------- */
var tiles=[].slice.call(document.querySelectorAll(".tile")),KEY="wsd_"+(W.groom+W.bride).toLowerCase().replace(/\W/g,"");
function foilDraw(t){if(t.classList.contains("done")||t.dataset.busy)return;var cv=t.querySelector("canvas"),r=t.getBoundingClientRect(),w=r.width,h=r.height;if(!w)return;
  cv.width=w*dpr;cv.height=h*dpr;cv.style.width=w+"px";cv.style.height=h+"px";var c=cv.getContext("2d");c.setTransform(dpr,0,0,dpr,0,0);c.globalCompositeOperation="source-over";
  var g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,"#d99a8a");g.addColorStop(.3,"#fbe6dc");g.addColorStop(.52,"#e8b8a4");g.addColorStop(.76,"#fff4ec");g.addColorStop(1,"#c98a74");c.fillStyle=g;c.fillRect(0,0,w,h);
  var s=t.dataset.k.length*7+3;function rnd(){s=(s*9301+49297)%233280;return s/233280}
  for(var i=0;i<150;i++){c.fillStyle="rgba(255,255,255,"+(.15+rnd()*.5)+")";c.beginPath();c.arc(rnd()*w,rnd()*h,.5+rnd()*1.3,0,7);c.fill()}
  c.strokeStyle="rgba(255,255,255,.18)";c.lineWidth=1;for(var k=-h;k<w;k+=8){c.beginPath();c.moveTo(k,h);c.lineTo(k+h,0);c.stroke()}
  c.strokeStyle="rgba(184,50,58,.4)";c.lineWidth=1;c.strokeRect(5.5,5.5,w-11,h-11);
  c.fillStyle="#7a1a24";c.textAlign="center";c.textBaseline="middle";
  c.font='italic 600 22px "Cormorant Garamond",serif';c.fillText(t.dataset.k==="day"?"Date":t.dataset.k==="month"?"Month":"Year",w/2,h/2-8);
  c.font='500 8.5px Jost,sans-serif';if("letterSpacing" in c)c.letterSpacing="2px";c.fillStyle="#a8323a";c.fillText("\u2726 SCRATCH \u2726",w/2,h/2+16)}
function allDone(){return tiles.every(function(t){return t.classList.contains("done")})}
function nextHint(){var n=tiles.filter(function(t){return !t.classList.contains("done")});tiles.forEach(function(t){t.classList.remove("next")});
  if(n.length){n[0].classList.add("next");set("sdHint",n.length===3?W.sealText:"\u2726  "+n.length+" more to reveal  \u2726")}
  else{set("sdHint","\u2726  Save the date  \u2726");$("dFull").classList.add("show")}}
function finish(t,silent){t.classList.add("done");try{if(false)localStorage.setItem(KEY+t.dataset.k,"1")}catch(e){}
  if(!silent&&allDone()){var r=$("sdate").getBoundingClientRect();setTimeout(function(){burst(r.left+r.width/2,r.top+r.height/2,false)},250)}nextHint()}
function autoScratch(t){if(t.classList.contains("done")||t.dataset.busy)return;t.dataset.busy="1";
  var cv=t.querySelector("canvas"),r=t.getBoundingClientRect(),w=r.width,h=r.height,c=cv.getContext("2d"),passes=7,t0=performance.now(),dur=1500,prev=null,fr=0;
  c.globalCompositeOperation="destination-out";c.lineCap="round";c.lineJoin="round";c.lineWidth=Math.max(24,h/passes*2.7);
  function pt(u){var p=Math.min(passes-1,Math.floor(u)),sp=u-p,dir=p%2?-1:1,x=dir>0?-10+sp*(w+20):w+10-sp*(w+20);var y=(p+.5)/passes*h+Math.sin(sp*12+p)*h*.06;return[x,y]}
  function step(now){var p=Math.min(1,(now-t0)/dur),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2,u=e*passes;
    var q=pt(Math.min(u,passes-.0001));if(prev){c.beginPath();c.moveTo(prev[0],prev[1]);c.lineTo(q[0],q[1]);c.stroke()}
    if(++fr%4===0)burst(r.left+q[0],r.top+q[1],"tiny");prev=q;
    if(p<1)requestAnimationFrame(step);else{c.clearRect(0,0,w,h);cv.style.transition="opacity .5s";cv.style.opacity="0";burst(r.left+w/2,r.top+h/2,false);setTimeout(function(){finish(t)},350)}}
  requestAnimationFrame(step)}
tiles.forEach(function(t,i){
  try{if(false&&localStorage.getItem(KEY+t.dataset.k)){t.classList.add("done");return}}catch(e){}
  var down=null;
  t.addEventListener("pointerdown",function(e){down={x:e.clientX,y:e.clientY,m:0}});
  t.addEventListener("pointermove",function(e){if(!down||t.dataset.busy||t.classList.contains("done"))return;
    var cv=t.querySelector("canvas"),r=t.getBoundingClientRect(),c=cv.getContext("2d");
    if(Math.abs(e.clientX-down.x)+Math.abs(e.clientY-down.y)>5&&e.pointerType==="mouse"){down.m+=1;c.globalCompositeOperation="destination-out";c.beginPath();c.arc(e.clientX-r.left,e.clientY-r.top,17,0,7);c.fill();
      if(down.m%10===0)burst(e.clientX,e.clientY,"tiny");if(down.m>38)autoScratch(t)}});
  t.addEventListener("pointerup",function(){if(down&&!down.m)autoScratch(t);down=null});
  t.addEventListener("pointercancel",function(){down=null});
  t.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();autoScratch(t)}});t.tabIndex=0;t.setAttribute("role","button");
});
function drawAll(){tiles.forEach(foilDraw)}
drawAll();(document.fonts&&document.fonts.ready||Promise.resolve()).then(drawAll);addEventListener("resize",drawAll);
nextHint();if(allDone())$("dFull").classList.add("show");

/* ---------- gallery slider ---------- */
(function(){
  var items=(W.gallery||[]).map(function(g){return typeof g==="string"?{src:g,cap:""}:g});
  var box=$("gal");if(!items.length){$("gallery").style.display="none";return}
  box.innerHTML=items.map(function(g){return '<figure class="gs"><div class="fr"><img loading="lazy" src="'+g.src+'" alt=""></div>'+(g.cap?'<figcaption>'+g.cap+'</figcaption>':"")+'</figure>'}).join("");
  var sl=[].slice.call(box.children),dots=$("gDots");dots.innerHTML=sl.map(function(_,i){return '<i data-i="'+i+'"></i>'}).join("");
  function cur(){var m=box.scrollLeft+box.clientWidth/2,b=0,bd=1e9;sl.forEach(function(s,i){var d=Math.abs(s.offsetLeft+s.offsetWidth/2-m);if(d<bd){bd=d;b=i}});return b}
  function mark(){var c=cur();sl.forEach(function(s,i){s.classList.toggle("on",i===c)});[].forEach.call(dots.children,function(d,i){d.classList.toggle("on",i===c)})}
  function go(i){i=(i+sl.length)%sl.length;var s=sl[i];box.scrollTo({left:s.offsetLeft+s.offsetWidth/2-box.clientWidth/2,behavior:"smooth"})}
  var tk;box.addEventListener("scroll",function(){cancelAnimationFrame(tk);tk=requestAnimationFrame(mark)},{passive:true});
  $("gPrev").onclick=function(){stop();go(cur()-1)};$("gNext").onclick=function(){stop();go(cur()+1)};
  dots.addEventListener("click",function(e){if(e.target.dataset.i!=null){stop();go(+e.target.dataset.i)}});
  var auto=setInterval(function(){var r=box.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)go(cur()+1)},4200);function stop(){clearInterval(auto)}
  box.addEventListener("pointerdown",stop);
  setTimeout(function(){box.scrollLeft=0;go(0);mark()},400);addEventListener("resize",mark);
})();

/* ---------- twinkling light dust ---------- */
function twinkle(el,n){for(var i=0;i<n;i++){var s=document.createElement("i");s.className="tw";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*78+"%";
  var z=2+Math.random()*4;s.style.width=s.style.height=z+"px";s.style.animationDelay=(Math.random()*4)+"s";s.style.animationDuration=(2.4+Math.random()*3)+"s";el.appendChild(s)}}
twinkle(document.querySelector("#gate .g-stage"),34);twinkle(document.querySelector("#hero .scene"),22);

/* ---------- countdown rings ---------- */
var target=new Date(W.weddingDateTime).getTime(),C=213.6;
function two(n){return n<10?"0"+n:""+n}
function ring(id,p){var e=$(id);if(e)e.style.strokeDashoffset=(C*(1-Math.max(0,Math.min(1,p)))).toFixed(1)}
function tick(){var s=Math.floor(Math.max(0,target-Date.now())/1000),d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60),c=s%60;
  set("cdD",two(d));set("cdH",two(h));set("cdM",two(m));set("cdS",two(c));
  ring("rD",d/365);ring("rH",h/24);ring("rM",m/60);ring("rS",c/60)}
tick();setInterval(tick,1000);

/* ---------- RSVP on WhatsApp ---------- */
function build(){var yes=document.querySelector("input[name=att]:checked").value==="yes",n=$("gName").value.trim(),m=$("msg").value.trim();
  var t="*RSVP – "+W.bride+" & "+W.groom+"*\n\nName: "+(n||"—")+"\nWill attend: "+(yes?"Yes, I'll be there 🎉":"Sorry, can't make it")+(m?"\n\nMessage: "+m:"");
  $("send").href="https://wa.me/"+W.whatsapp+"?text="+encodeURIComponent(t)}
$("form").addEventListener("input",build);$("form").addEventListener("change",build);$("form").addEventListener("submit",function(e){e.preventDefault()});build();
$("send").addEventListener("click",function(e){if(!$("gName").value.trim()){e.preventDefault();$("gName").focus()}});
})();
