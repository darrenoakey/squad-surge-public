(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Mn=[-3.2,0,3.2],tc=1.6,Vt=7,Ui=-42,jh=12,Qh=-46,Ra=1/60,ed=.25,pn=6,nc=16,Ku=60,td=45,nd=2,id=1024,Pi={walker:{hp:4,radius:.45,speed:7,contactDamage:1,points:10},runner:{hp:2,radius:.4,speed:12,contactDamage:1,points:15},brute:{hp:110,radius:.95,speed:4.5,contactDamage:6,points:120},flanker:{hp:6,radius:.5,speed:9,contactDamage:2,points:30},barrel:{hp:8,radius:.7,speed:pn,contactDamage:3,points:5}},Ca={damage:16,radius:2.8},Si={lateralSpeed:9,startX:9,leadTime:2.8,telegraph:1.6},ic={telegraph:1.5};function mr(s){return(Vt-Ui)/s}const Pe=(s,e,t,n,i)=>({type:"horde",arrive:s,lane:e,kind:t,count:n}),en=(s,...e)=>({type:"gates",arrive:s,gates:e}),qt=(s,e,t,n)=>({type:"flank",arrive:s,lane:e,side:t,count:n}),Oi=(s,e,t)=>({type:"rush",arrive:s,lane:e,count:t}),zi=(s,e)=>({type:"barrel",arrive:s,lane:e}),wn=(s,e)=>({type:"wave",at:s,name:e}),$t=(s,e,t)=>t?{lane:s,kind:e<0?"ambush":"recruit",squadAdd:e,grow:t}:{lane:s,kind:e<0?"ambush":"recruit",squadAdd:e},ys=(s,e,t=0)=>({lane:s,kind:"multiply",squadMultiply:e,squadAdd:t}),xi=(s,e,t=0,n=1)=>({lane:s,kind:"fireRate",fireRate:e,squadAdd:t,damage:n}),Bi=(s,e,t=1,n=0)=>({lane:s,kind:"damage",damage:e,fireRate:t,squadAdd:n}),_i=(s,e,t=0)=>({lane:s,kind:"weapon",weapon:e,squadAdd:t}),sd={id:"coastal-bridge",index:0,name:"Coastal Bridge",subtitle:"Hold the causeway at low tide",difficulty:1,difficultyLabel:"Recruit",duration:72,biome:"coastal",accent:"#ffb547",tradeoff:"Bodies or bullets: grow the squad on the flanks, or tune the guns in the hot centre lane.",briefing:["Shoot the −8 gate up to +12, or take a sure +5.","Crabwalk flankers from the dunes on both sides.","Tidebreaker boss: dodge its slams, out-gun its enrage."],startingSquad:6,startingWeapon:"rifle",bossName:"Tidebreaker",seed:99282957,hpScale:1.4,boss:{name:"Tidebreaker",hp:3e3,radius:4.6,advanceSpeed:3,siegeZ:-12,slamInterval:3.4,slamTelegraph:1.3,slamFraction:.25,slamMin:3,enrageAfter:20,enrageSpeed:6},spawns:[wn(0,"Low tide"),Pe(5,1,"walker",6),en(7,$t(0,5),xi(1,1.25),$t(2,-8,{perHit:1,max:12})),Pe(10,0,"walker",9),Pe(11.5,2,"walker",9),Pe(13,1,"walker",12),en(16,ys(0,2),Bi(1,1.4,.85),$t(2,7)),wn(17,"Dune crawlers"),qt(20,0,-1,3),Pe(20,1,"walker",15),qt(23,2,1,3),zi(23.5,1),Pe(24.5,1,"walker",12),Pe(26,0,"walker",12),Pe(26,2,"walker",12),en(29,_i(0,"smg"),_i(1,"rocket",-4),xi(2,1.35,-3)),Pe(31,1,"brute",1),Pe(32,0,"walker",15),Pe(32,2,"walker",15),wn(34,"Breakwater"),Oi(36,1,8),Pe(37,0,"walker",18),qt(38,2,1,4),Pe(38.5,1,"brute",1),en(40,$t(0,10),ys(1,2,-4),Bi(2,1.5,1,-6)),Pe(43,1,"walker",21),Pe(44,2,"walker",15),Pe(45,0,"brute",1),zi(46,0),qt(47,0,-1,4),en(49,xi(0,1.3),$t(1,8),_i(2,"lancer",-4)),wn(50,"Tidebreaker"),{type:"boss",at:50},Oi(54,2,10),Pe(56,0,"walker",12),Pe(58,2,"brute",1),Pe(60,2,"walker",12),Pe(64,1,"runner",10)]},rd={id:"industrial-port",index:1,name:"Industrial Port",subtitle:"Container yard under siege",difficulty:2,difficultyLabel:"Veteran",duration:80,biome:"industrial",accent:"#3fd0c9",tradeoff:"Armoured brutes reward piercing Lancers; swarms reward SMG cadence. You cannot have both.",briefing:["Brutes shield the hordes behind them.","Explosive drums: shoot them inside a pack.","Gantry Hulk boss enrages after 18 s of siege."],startingSquad:8,startingWeapon:"rifle",bossName:"Gantry Hulk",seed:13681826,hpScale:1.7,boss:{name:"Gantry Hulk",hp:4e3,radius:4.6,advanceSpeed:3,siegeZ:-13,slamInterval:3,slamTelegraph:1.2,slamFraction:.28,slamMin:3,enrageAfter:18,enrageSpeed:6.5},spawns:[wn(0,"Yard gates"),Pe(5,1,"walker",6),zi(6,0),en(8,_i(0,"lancer"),$t(1,4),_i(2,"smg")),Pe(11,0,"walker",12),Pe(11,2,"walker",12),Pe(13,1,"brute",1),Pe(14.5,1,"walker",12),en(17,$t(0,-6,{perHit:1,max:14}),Bi(1,1.5,.8),ys(2,2)),wn(18,"Crane line"),Pe(20,2,"brute",1),Pe(21,2,"walker",15),qt(22,0,-1,4),zi(23,1),Pe(24,1,"walker",18),Oi(26,0,8),Pe(27,2,"walker",15),en(30,xi(0,1.4,-4),$t(1,9),Bi(2,1.45)),Pe(33,0,"brute",1),Pe(33.5,0,"walker",15),Pe(34,1,"walker",18),qt(35,2,1,5),Pe(36,2,"walker",18),wn(38,"Container maze"),en(41,ys(0,2,-6),$t(1,-6,{perHit:1,max:12}),_i(2,"rocket")),Pe(44,1,"brute",2),Pe(45,0,"walker",21),Oi(46,2,10),zi(47,1),Pe(48,1,"walker",21),qt(49,0,-1,5),Pe(50,2,"walker",18),en(53,Bi(0,1.5,1,-5),xi(1,1.35),$t(2,12)),wn(55,"Gantry Hulk"),{type:"boss",at:56},Oi(58,0,12),Pe(60,0,"walker",15),Pe(62,0,"brute",1),Pe(63,2,"walker",15),qt(66,1,1,5),Pe(70,1,"runner",12)]},ad={id:"dusk-extraction",index:2,name:"Dusk Extraction",subtitle:"Last chopper off the headland",difficulty:3,difficultyLabel:"Elite",duration:88,biome:"dusk",accent:"#ff6b8b",tradeoff:"Every big multiplier sits behind a brute wall or a flank. Greed snowballs — or gets you wiped.",briefing:["Flankers pour in from both cliffs.","×3 gate guarded by twin brutes.","Dread Colossus slams twice as often."],startingSquad:8,startingWeapon:"rifle",bossName:"Dread Colossus",seed:53340,hpScale:1.9,boss:{name:"Dread Colossus",hp:4400,radius:4.6,advanceSpeed:3.2,siegeZ:-12,slamInterval:2.4,slamTelegraph:1.1,slamFraction:.3,slamMin:4,enrageAfter:18,enrageSpeed:7},spawns:[wn(0,"Headland"),Pe(5,1,"walker",9),en(7,$t(0,6),$t(1,-6,{perHit:1,max:14}),xi(2,1.3)),Pe(10,0,"walker",12),Pe(10,2,"walker",12),qt(12,1,-1,3),Pe(13.5,1,"walker",15),en(16,_i(0,"shotgun",2),ys(1,2),_i(2,"lancer")),Pe(17,1,"brute",1),wn(18,"Cliff runners"),qt(20,0,-1,4),qt(20.5,2,1,4),Pe(22,1,"walker",18),Oi(24,0,10),Pe(25,2,"walker",18),zi(26,1),en(29,Bi(0,1.6,.85),$t(1,10),xi(2,1.45,-4)),Pe(31,0,"walker",21),Pe(32,1,"brute",1),Pe(32,2,"walker",21),qt(34,1,1,5),wn(36,"Twin brutes"),Pe(38,0,"brute",1),Pe(38,2,"brute",1),en(41,$t(0,8),ys(1,3,-4),$t(2,8)),Pe(39.5,1,"walker",18),Oi(44,2,12),Pe(45,1,"walker",24),qt(46,0,-1,5),Pe(47,0,"walker",21),zi(48,2),Pe(49,2,"walker",21),en(52,xi(0,1.35),Bi(1,1.5,1,-5),$t(2,-8,{perHit:1,max:16})),Pe(55,1,"walker",24),qt(56,2,1,6),wn(58,"Dread Colossus"),{type:"boss",at:59},Pe(64,0,"walker",18),qt(67,2,1,6),Pe(70,1,"runner",14),qt(74,0,-1,6),Pe(78,2,"runner",14)]},ya=[sd,rd,ad];function Ju(s){return{id:s.id,index:s.index,name:s.name,subtitle:s.subtitle,difficulty:s.difficulty,difficultyLabel:s.difficultyLabel,duration:s.duration,biome:s.biome,accent:s.accent,tradeoff:s.tradeoff,briefing:s.briefing,startingSquad:s.startingSquad,startingWeapon:s.startingWeapon,bossName:s.bossName}}const bo=ya.map(Ju);function od(s){return ya.some(e=>e.id===s)}function El(s){const e=ya.find(t=>t.id===s);if(!e)throw new Error(`Unknown level id: ${s}`);return e}function ju(s){return Ju(El(s))}function sc(s){const e=El(s);return ya[e.index+1]?.id??null}const ca={rifle:{id:"rifle",name:"Rifle",blurb:"Reliable all-rounder with long reach.",fireRate:3,damagePerGunner:1,maxBullets:8,bulletSpeed:52,pierce:1,spread:0,range:40,splashRadius:0},smg:{id:"smg",name:"SMG",blurb:"Hose of light rounds: shreds swarms, struggles with armour.",fireRate:7,damagePerGunner:.52,maxBullets:10,bulletSpeed:56,pierce:1,spread:.6,range:32,splashRadius:0},shotgun:{id:"shotgun",name:"Scattergun",blurb:"Wide fan covers neighbouring lanes, short reach.",fireRate:1.6,damagePerGunner:2.4,maxBullets:12,bulletSpeed:44,pierce:1,spread:5,range:21,splashRadius:0},lancer:{id:"lancer",name:"Lancer",blurb:"Slow piercing bolts that punch through whole columns.",fireRate:1.2,damagePerGunner:3.2,maxBullets:3,bulletSpeed:70,pierce:6,spread:0,range:46,splashRadius:0},rocket:{id:"rocket",name:"Rockets",blurb:"Heavy splash rounds; devastating on packs, slow cadence.",fireRate:.9,damagePerGunner:4,maxBullets:2,bulletSpeed:34,pierce:1,spread:0,range:42,splashRadius:2.4}};function Qu(s){return s<=20?Math.max(0,s):20+(s-20)*.6}function ld(s,e,t,n){const i=ca[e];return Qu(s)*i.damagePerGunner*n*i.fireRate*t}const eh="−";function cd(s){return{kind:s.kind,squadAdd:s.squadAdd??0,squadMultiply:s.squadMultiply??1,fireRateMultiplier:s.fireRate??1,damageMultiplier:s.damage??1,weapon:s.weapon??null}}function ud(s,e){let t=s.kind;return(t==="recruit"||t==="ambush")&&(t=e<0?"ambush":"recruit"),{...s,kind:t,squadAdd:e}}function rc(s){return s<0?`${eh}${Math.abs(s)}`:`+${s}`}function gr(s){const e=Math.round((s-1)*100);return e<0?`${eh}${Math.abs(e)}%`:`+${e}%`}function hd(s,e){const t=Math.round(s*e.squadMultiply)+e.squadAdd;return Math.max(0,Math.min(Ku,t))}function ac(s){const e=[],t=[];let n;switch(s.kind){case"recruit":case"ambush":n=rc(s.squadAdd);break;case"multiply":n=`×${s.squadMultiply}`;break;case"fireRate":n=`FIRE ${gr(s.fireRateMultiplier)}`;break;case"damage":n=`DMG ${gr(s.damageMultiplier)}`;break;case"weapon":n=s.weapon?ca[s.weapon].name.toUpperCase():"WEAPON";break}s.kind!=="recruit"&&s.kind!=="ambush"&&s.squadAdd!==0&&(s.squadAdd<0?e:t).push(`${rc(s.squadAdd)} soldiers`),s.kind!=="fireRate"&&s.fireRateMultiplier!==1&&(s.fireRateMultiplier<1?e:t).push(`${gr(s.fireRateMultiplier)} fire rate`),s.kind!=="damage"&&s.damageMultiplier!==1&&(s.damageMultiplier<1?e:t).push(`${gr(s.damageMultiplier)} damage`);const r=s.kind==="ambush"||s.squadMultiply<1?t.length>0?"mixed":"bad":e.length>0?"mixed":"good";return{label:n,detail:[...t,...e].join(" · "),tone:r}}function dd(s){let e=s>>>0;const t=()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{next:t,range:(n,i)=>n+(i-n)*t()}}let oc=0,fd=0;const qs=Vt-.5,pd=Vt+1.5,md=.12,gd=2.5,xr=1.6,xd=50,_d=2500;function vd(s){const e=dd(s.seed),t=[];let n=0;const i=r=>r==="brute"||r==="barrel"?Pi[r].hp*Math.max(1,s.hpScale*.9):Pi[r].hp*s.hpScale;for(const r of s.spawns)switch(r.type){case"horde":{const a=Pi[r.kind],o=r.perRow??(r.kind==="walker"?3:r.kind==="runner"?2:1),l=r.kind==="brute"?2.6:1.15,c=r.arrive-mr(a.speed),u=Mn[r.lane];for(let h=0;h<r.count;h++){const d=Math.floor(h/o),f=h%o,g=o===1?0:f/(o-1)*1.6-.8,_=u+g+e.range(-.18,.18),m=c+(d*l+e.range(0,.25))/a.speed;t.push({t:m,type:"enemy",kind:r.kind,x:_,z:Ui,vx:0,vz:a.speed,targetX:null,mergeSpeed:a.speed,hp:i(r.kind)})}break}case"rush":{const a=Pi.runner,o=r.arrive-mr(a.speed),l=Mn[r.lane];t.push({t:o-ic.telegraph,type:"telegraph",kind:"rush",lane:r.lane,side:0,x:l,z:Ui+12,duration:ic.telegraph});for(let c=0;c<r.count;c++){const u=Math.floor(c/2),h=l+(c%2===0?-.45:.45)+e.range(-.15,.15);t.push({t:o+u*.9/a.speed,type:"enemy",kind:"runner",x:h,z:Ui,vx:0,vz:a.speed,targetX:null,mergeSpeed:a.speed,hp:i("runner")})}break}case"flank":{const a=Pi.flanker,o=Mn[r.lane],l=r.side*Si.startX,c=Math.abs(o-l)/Si.lateralSpeed,u=Math.max(0,Si.leadTime-c),h=qs-a.speed*u-pn*c,d=r.arrive-Si.leadTime;t.push({t:d-Si.telegraph,type:"telegraph",kind:"flank",lane:r.lane,side:r.side,x:o,z:h+pn*c,duration:Si.telegraph});for(let f=0;f<r.count;f++){const g=l+r.side*(f%2)*.7;t.push({t:d+f*.3+e.range(0,.05),type:"enemy",kind:"flanker",x:g,z:h-f%2*.6,vx:-r.side*Si.lateralSpeed,vz:pn,targetX:o+e.range(-.5,.5),mergeSpeed:a.speed,hp:i("flanker")})}break}case"barrel":t.push({t:r.arrive-mr(pn),type:"enemy",kind:"barrel",x:Mn[r.lane],z:Ui,vx:0,vz:pn,targetX:null,mergeSpeed:pn,hp:i("barrel")});break;case"gates":t.push({t:r.arrive-mr(pn),type:"gateRow",gates:r.gates});break;case"boss":t.push({t:r.at,type:"boss"});break;case"wave":t.push({t:r.at,type:"wave",index:n++,name:r.name});break}return t.map((r,a)=>({p:r,i:a})).sort((r,a)=>r.p.t-a.p.t||r.i-a.i).map(r=>r.p)}function Pa(s){return s<-1.6?0:s>1.6?2:1}function lc(s){return Math.min(1.35,.35+.14*Math.sqrt(Math.max(1,s)))}class cc{levelId;def;timeline;preplaced;waveCount;accumulator=0;cursor=0;fireCooldown=0;combo=0;lastKillAt=-1/0;nextEntityId=1;s;weaponId="rifle";fireRateMul=1;damageMul=1;constructor(e){this.def=El(e),this.levelId=this.def.id,this.timeline=vd(this.def);const t=new Set;this.timeline.forEach((n,i)=>{n.t<=0&&(n.type==="enemy"||n.type==="gateRow")&&t.add(i)}),this.preplaced=t,this.waveCount=this.def.spawns.filter(n=>n.type==="wave").length,this.resetRun("ready")}get state(){return this.s}get level(){return ju(this.def.id)}start(){this.s.status==="ready"&&(this.s.status="running",this.emit({type:"start"}))}move(e){if(this.s.status!=="running")return;const t=Math.max(0,Math.min(2,this.s.player.targetLane+e));this.setLane(t)}setLane(e){this.s.status==="running"&&(e!==0&&e!==1&&e!==2||this.s.player.targetLane!==e&&(this.s.player.targetLane=e,this.s.lane=e,this.emit({type:"laneChange",lane:e})))}pause(){this.s.status==="running"&&(this.s.status="paused",this.accumulator=0)}resume(){this.s.status==="paused"&&(this.s.status="running")}restart(){this.resetRun("ready"),this.start()}reset(){this.resetRun("ready")}update(e){if(this.s.status==="running"&&!(!Number.isFinite(e)||e<=0)){for(this.accumulator+=Math.min(e,ed);this.accumulator>=Ra-1e-9;)if(this.accumulator-=Ra,this.step(),this.s.status!=="running"){this.accumulator=0;break}}}resetRun(e){oc+=1,this.accumulator=0,this.cursor=0,this.fireCooldown=.35,this.combo=0,this.lastKillAt=-1/0,this.nextEntityId=1,this.weaponId=this.def.startingWeapon,this.fireRateMul=1,this.damageMul=1;const t=this.def.startingSquad;this.s={runId:oc,status:e,levelId:this.def.id,tick:0,elapsed:0,duration:this.def.duration,progress:0,lane:1,squad:t,squadCap:Ku,player:{x:Mn[1],z:Vt,targetLane:1,lane:1,vx:0,halfWidth:lc(t),lastHurtAt:-1},weapon:this.weaponState(t),kills:0,score:0,multiplier:1,wave:{index:-1,total:this.waveCount,name:""},enemies:[],bullets:[],gates:[],telegraphs:[],boss:null,events:[],outcome:null},this.timeline.forEach((n,i)=>{this.preplaced.has(i)&&(n.type==="enemy"?this.spawnEnemy(n,-n.t):n.type==="gateRow"&&this.spawnGateRow(n.gates,-n.t*pn))})}weaponState(e){const t=ca[this.weaponId];return{id:t.id,name:t.name,fireRateMultiplier:this.fireRateMul,damageMultiplier:this.damageMul,fireRate:t.fireRate*this.fireRateMul,dps:ld(e,this.weaponId,this.fireRateMul,this.damageMul)}}emit(e){const t={...e,id:++fd,runId:this.s.runId,tick:this.s.tick,time:this.s.elapsed};this.s.events.push(t)}newId(){return this.nextEntityId++}spawnEnemy(e,t){const n=Pi[e.kind];this.s.enemies.push({id:this.newId(),kind:e.kind,x:e.x,z:e.z+e.vz*t,vx:e.vx,vz:e.vz,lane:Pa(e.x),hp:e.hp,maxHp:e.hp,radius:n.radius,contactDamage:n.contactDamage,lastHitAt:-1,spawnedAt:this.s.elapsed,targetX:e.targetX,mergeSpeed:e.mergeSpeed})}spawnGateRow(e,t){const n=this.newId();for(const i of e){const r=cd(i),a=ac(r);this.s.gates.push({id:this.newId(),rowId:n,lane:i.lane,x:Mn[i.lane],z:Ui+t,halfWidth:tc,effect:r,label:a.label,detail:a.detail,tone:a.tone,shootable:i.grow!==void 0,growthPerHit:i.grow?.perHit??0,growthMax:i.grow?.max??r.squadAdd,lastHitAt:-1,growthValue:r.squadAdd})}}spawnBoss(){const e=this.def.boss;if(!e)return;const t={id:this.newId(),name:e.name,x:0,z:Ui,hp:e.hp,maxHp:e.hp,radius:e.radius,phase:"advancing",enrageIn:0,lastHitAt:-1,spec:e,siegeTime:0,slamCooldown:e.slamInterval*.5};this.s.boss=t,this.emit({type:"bossSpawn",bossId:t.id,name:t.name})}processTimeline(e){for(;this.cursor<this.timeline.length;){const t=this.cursor,n=this.timeline[t];if(!n||n.t>e+1e-9)break;if(this.cursor+=1,!this.preplaced.has(t))switch(n.type){case"enemy":this.spawnEnemy(n,Math.max(0,e-n.t));break;case"gateRow":this.spawnGateRow(n.gates,Math.max(0,e-n.t)*pn);break;case"telegraph":{const i={id:this.newId(),kind:n.kind,lane:n.lane,side:n.side,x:n.x,z:n.z,duration:n.duration,remaining:n.duration,slam:!1};this.s.telegraphs.push(i),this.emit({type:"telegraph",telegraphId:i.id,kind:i.kind,lane:i.lane,side:i.side});break}case"boss":this.spawnBoss();break;case"wave":this.s.wave={index:n.index,total:this.waveCount,name:n.name},this.emit({type:"wave",index:n.index,name:n.name});break}}}step(){const e=Ra,t=this.s,n=t.tick*e;this.processTimeline(n),this.updateTelegraphs(e),this.movePlayer(e),this.moveEnemies(e),this.moveGates(e),this.updateBoss(e),this.fire(e),this.moveBullets(e),this.resolveContacts(),this.resolveGateRows(),t.elapsed-this.lastKillAt>gd&&(this.combo=0),t.multiplier=Math.min(5,1+Math.floor(this.combo/12)),t.tick+=1,t.elapsed=t.tick*e,t.progress=Math.min(1,t.elapsed/t.duration),t.player.halfWidth=lc(t.squad),t.weapon=this.weaponState(t.squad),this.checkTerminal(),this.pruneEvents()}updateTelegraphs(e){const t=this.s;for(const i of t.telegraphs)i.remaining=Math.max(0,i.remaining-e);const n=t.telegraphs.filter(i=>i.remaining<=1e-9);if(n.length!==0){t.telegraphs=t.telegraphs.filter(i=>i.remaining>1e-9);for(const i of n)i.slam&&this.resolveSlam(i)}}movePlayer(e){const t=this.s.player,n=Mn[t.targetLane],i=n-t.x,r=nc*e;Math.abs(i)<=r?(t.vx=i/e,t.x=n):(t.vx=Math.sign(i)*nc,t.x+=Math.sign(i)*r),t.x===n&&(t.vx=0),t.lane=Pa(t.x)}moveEnemies(e){for(const t of this.s.enemies){if(t.targetX!==null){const n=t.targetX-t.x,i=Math.abs(t.vx)*e;Math.abs(n)<=i?(t.x=t.targetX,t.targetX=null,t.vx=0,t.vz=t.mergeSpeed):t.x+=Math.sign(n)*i}t.z+=t.vz*e,t.lane=Pa(t.x)}}moveGates(e){for(const t of this.s.gates)t.z+=pn*e}updateBoss(e){const t=this.s.boss;if(!t||t.phase==="dead")return;const n=t.spec;if(t.phase==="advancing"){t.z=Math.min(n.siegeZ,t.z+n.advanceSpeed*e),t.z>=n.siegeZ&&(t.phase="siege",t.siegeTime=0);return}if(t.phase==="siege"){t.siegeTime+=e,t.enrageIn=Math.max(0,n.enrageAfter-t.siegeTime),t.slamCooldown-=e;const i=this.s.telegraphs.some(r=>r.slam);if(t.slamCooldown<=0&&!i){const r=this.s.player.lane,a={id:this.newId(),kind:"slam",lane:r,side:0,x:Mn[r],z:Vt,duration:n.slamTelegraph,remaining:n.slamTelegraph,slam:!0};this.s.telegraphs.push(a),this.emit({type:"telegraph",telegraphId:a.id,kind:"slam",lane:r,side:0}),t.slamCooldown=n.slamInterval}t.siegeTime>=n.enrageAfter&&(t.phase="enraged",t.enrageIn=0,this.s.telegraphs=this.s.telegraphs.filter(r=>!r.slam),this.emit({type:"bossEnrage",bossId:t.id}));return}t.z+=n.enrageSpeed*e}resolveSlam(e){const t=this.s.boss;if(t?.phase!=="siege")return;const n=this.s.player,i=Math.abs(n.x-Mn[e.lane])<tc;if(this.emit({type:"bossSlam",lane:e.lane,x:Mn[e.lane],z:Vt,hitSquad:i}),i){const r=Math.max(t.spec.slamMin,Math.ceil(this.s.squad*t.spec.slamFraction));this.loseSoldiers(r,"boss",Mn[e.lane],Vt)}}fire(e){const t=this.s;if(this.fireCooldown-=e,this.fireCooldown>0||t.squad<=0)return;const n=ca[this.weaponId];this.fireCooldown+=1/(n.fireRate*this.fireRateMul),this.fireCooldown<0&&(this.fireCooldown=0);const i=Math.max(1,Math.min(n.maxBullets,t.squad)),a=Qu(t.squad)*n.damagePerGunner*this.damageMul/i,o=t.player.halfWidth,l=qs-.3;for(let c=0;c<i;c++){const u=i===1?0:c/(i-1)*2-1,h=(t.tick*7+c*13)%10/10-.45,d=t.player.x+u*o+h*(o/Math.max(1,i))*.8;t.bullets.push({id:this.newId(),weapon:n.id,x:d,z:l,vx:n.spread*u,vz:-n.bulletSpeed,damage:a,radius:md,travelled:0,range:n.range,pierceLeft:n.pierce,splash:n.splashRadius})}this.emit({type:"volley",weapon:n.id,x:t.player.x,z:l,bullets:i})}moveBullets(e){const t=this.s,n=[];for(const i of t.bullets){const r=i.x,a=i.z,o=r+i.vx*e,l=a+i.vz*e;i.x=o,i.z=l,i.travelled+=Math.hypot(o-r,l-a),this.collideBullet(i,r,a,o,l)&&i.travelled<i.range&&i.z>Qh&&n.push(i)}t.bullets=n,t.enemies.some(i=>i.hp<=0)&&(t.enemies=t.enemies.filter(i=>i.hp>0))}collideBullet(e,t,n,i,r){const a=this.s,o=[],l=d=>n===r?i:t+(d-n)/(r-n)*(i-t),c=Math.min(n,r),u=Math.max(n,r);for(const d of a.enemies){if(d.hp<=0||d.z+d.radius<c||d.z-d.radius>u)continue;const f=Math.max(c,Math.min(u,d.z));Math.abs(l(f)-d.x)<=d.radius+e.radius&&o.push({z:d.z,kind:"enemy",e:d})}for(const d of a.gates)d.shootable&&(d.z<c-.2||d.z>u+.2||Math.abs(l(Math.max(c,Math.min(u,d.z)))-d.x)<=d.halfWidth&&o.push({z:d.z,kind:"gate",g:d}));const h=a.boss;if(h&&h.phase!=="dead"){const d=h.z+xr;d>=c&&h.z-xr<=u&&Math.abs(l(Math.max(c,Math.min(u,d)))-h.x)<=h.radius&&o.push({z:d,kind:"boss",boss:h})}if(o.length===0)return!0;o.sort((d,f)=>f.z-d.z);for(const d of o){if(d.kind==="gate")return this.hitGate(d.g,e),!1;if(d.kind==="boss")return this.damageBoss(d.boss,e.damage,e.x),!1;const f=d.e;if(f.hp<=0)continue;if(e.splash>0)return this.explode(f.x,f.z,e.splash,e.damage,!0),!1;const g=Math.min(e.damage,f.hp);if(this.damageEnemy(f,g),e.damage-=g,e.pierceLeft-=1,e.pierceLeft<=0||e.damage<=1e-6)return!1}return!0}hitGate(e,t){if(e.lastHitAt=this.s.elapsed,this.emit({type:"hit",target:"gate",targetId:e.id,x:t.x,z:e.z,damage:0}),e.growthValue>=e.growthMax)return;e.growthValue=Math.min(e.growthMax,e.growthValue+e.growthPerHit),e.effect=ud(e.effect,e.growthValue);const n=ac(e.effect);e.label=n.label,e.detail=n.detail,e.tone=n.tone,this.emit({type:"gateGrow",gateId:e.id,label:e.label})}damageEnemy(e,t){const n=this.s;if(e.hp-=t,e.lastHitAt=n.elapsed,this.emit({type:"hit",target:"enemy",targetId:e.id,x:e.x,z:e.z,damage:t}),e.hp<=1e-6){e.hp=0,this.combo+=1,this.lastKillAt=n.elapsed;const i=Math.min(5,1+Math.floor(this.combo/12)),r=Pi[e.kind].points*i;n.kills+=1,n.score+=r,this.emit({type:"kill",enemyId:e.id,kind:e.kind,x:e.x,z:e.z,points:r}),e.kind==="barrel"&&this.explode(e.x,e.z,Ca.radius,Ca.damage,!1)}}explode(e,t,n,i,r){this.emit({type:"explosion",x:e,z:t,radius:n});for(const a of this.s.enemies)a.hp<=0||!r&&a.kind==="barrel"||Math.hypot(a.x-e,a.z-t)<=n+a.radius&&this.damageEnemy(a,Math.min(i,a.hp))}damageBoss(e,t,n){const i=this.s;e.hp=Math.max(0,e.hp-t),e.lastHitAt=i.elapsed,this.emit({type:"hit",target:"boss",targetId:e.id,x:n,z:e.z+xr,damage:t}),e.hp<=1e-6&&(e.hp=0,e.phase="dead",e.enrageIn=0,i.telegraphs=i.telegraphs.filter(r=>!r.slam),i.kills+=1,i.score+=_d*i.multiplier,this.emit({type:"bossDefeated",bossId:e.id,x:e.x,z:e.z}))}loseSoldiers(e,t,n,i){const r=this.s,a=Math.min(r.squad,e);a<=0||(r.squad-=a,r.player.lastHurtAt=r.elapsed,this.emit({type:"squadLoss",amount:a,cause:t,x:n,z:i,squad:r.squad}))}resolveContacts(){const e=this.s,t=e.player;let n=!1;for(const i of e.enemies){if(i.hp<=0)continue;i.z+i.radius>=qs&&i.z-i.radius<=pd&&Math.abs(i.x-t.x)<t.halfWidth+i.radius?(i.hp=0,n=!0,i.kind==="barrel"&&this.emit({type:"explosion",x:i.x,z:i.z,radius:Ca.radius}),this.loseSoldiers(i.contactDamage,i.kind,i.x,i.z)):i.z-i.radius>jh&&(i.hp=0,n=!0)}n&&(e.enemies=e.enemies.filter(i=>i.hp>0))}resolveGateRows(){const e=this.s,t=e.gates.filter(i=>i.z>=qs);if(t.length===0)return;const n=new Set(t.map(i=>i.rowId));for(const i of n){const r=e.gates.filter(l=>l.rowId===i);let a=null,o=1/0;for(const l of r){const c=Math.abs(e.player.x-l.x);c<=l.halfWidth&&c<o&&(o=c,a=l)}e.gates=e.gates.filter(l=>l.rowId!==i),a&&this.applyGate(a)}}applyGate(e){const t=this.s,n=t.squad,i=hd(n,e.effect);t.squad=i,this.fireRateMul*=e.effect.fireRateMultiplier,this.damageMul*=e.effect.damageMultiplier,e.effect.weapon&&(this.weaponId=e.effect.weapon),i<n&&(t.player.lastHurtAt=t.elapsed),t.score+=Math.max(0,i-n)*5,this.emit({type:"gate",gateId:e.id,rowId:e.rowId,lane:e.lane,label:e.label,tone:e.tone,effect:e.effect,before:n,after:i,x:e.x,z:e.z}),i<n&&this.emit({type:"squadLoss",amount:n-i,cause:"gate",x:e.x,z:e.z,squad:i})}checkTerminal(){const e=this.s;if(e.squad<=0)return this.finish("lost","wiped");const t=e.boss;if(t?.phase==="enraged"&&t.z+xr>=qs)return this.finish("lost","overrun");const n=this.cursor>=this.timeline.length,i=this.def.boss===null||t!==null&&t.phase==="dead",r=e.enemies.some(o=>o.kind!=="barrel"),a=e.telegraphs.length>0;if(n&&i&&!r&&!a)return this.finish("won","cleared");e.elapsed>e.duration+td&&this.finish("lost","timeout")}finish(e,t){const n=this.s;e==="won"&&(n.score+=n.squad*xd),n.status=e,n.telegraphs=[],n.outcome={status:e,reason:t,survivors:n.squad,score:n.score,elapsed:n.elapsed},this.emit(e==="won"?{type:"won",reason:t}:{type:"lost",reason:t})}pruneEvents(){const e=this.s,t=e.elapsed-nd;let n=0;for(;n<e.events.length&&(e.events[n]?.time??0)<t;)n++;const i=e.events.length-n-id;i>0&&(n+=i),n>0&&e.events.splice(0,n)}}const wl="182",yd=0,uc=1,Md=2,na=1,th=2,Ys=3,vi=0,nn=1,bn=2,Qn=0,xs=1,hc=2,dc=3,fc=4,Sd=5,Li=100,bd=101,Ed=102,wd=103,Td=104,Ad=200,Rd=201,Cd=202,Pd=203,Eo=204,wo=205,Ld=206,Id=207,Dd=208,Ud=209,Nd=210,Fd=211,Od=212,zd=213,Bd=214,To=0,Ao=1,Ro=2,Ms=3,Co=4,Po=5,Lo=6,Io=7,nh=0,kd=1,Gd=2,Vn=0,ih=1,sh=2,rh=3,Tl=4,ah=5,oh=6,lh=7,ch=300,ki=301,Ss=302,Do=303,Uo=304,Ma=306,ua=1e3,kn=1001,No=1002,Ut=1003,Vd=1004,_r=1005,Zt=1006,La=1007,Ni=1008,mn=1009,uh=1010,hh=1011,tr=1012,Al=1013,Wn=1014,In=1015,ni=1016,Rl=1017,Cl=1018,nr=1020,dh=35902,fh=35899,ph=1021,mh=1022,Tn=1023,ii=1026,Fi=1027,Pl=1028,Ll=1029,bs=1030,Il=1031,Dl=1033,ia=33776,sa=33777,ra=33778,aa=33779,Fo=35840,Oo=35841,zo=35842,Bo=35843,ko=36196,Go=37492,Vo=37496,Ho=37488,Wo=37489,Xo=37490,qo=37491,Yo=37808,$o=37809,Zo=37810,Ko=37811,Jo=37812,jo=37813,Qo=37814,el=37815,tl=37816,nl=37817,il=37818,sl=37819,rl=37820,al=37821,ol=36492,ll=36494,cl=36495,ul=36283,hl=36284,dl=36285,fl=36286,Hd=3200,gh=0,Wd=1,pi="",Yt="srgb",Es="srgb-linear",ha="linear",pt="srgb",qi=7680,pc=519,Xd=512,qd=513,Yd=514,Ul=515,$d=516,Zd=517,Nl=518,Kd=519,pl=35044,_s=35048,mc="300 es",Gn=2e3,da=2001;function xh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jd(){const s=fa("canvas");return s.style.display="block",s}const gc={};function pa(...s){const e="THREE."+s.shift();console.log(e,...s)}function He(...s){const e="THREE."+s.shift();console.warn(e,...s)}function st(...s){const e="THREE."+s.shift();console.error(e,...s)}function ir(...s){const e=s.join(" ");e in gc||(gc[e]=!0,He(...s))}function jd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,ml=180/Math.PI;function ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function et(s,e,t){return Math.max(e,Math.min(t,s))}function Qd(s,e){return(s%e+e)%e}function Da(s,e,t){return(1-t)*s+t*e}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=l*d+c*f+u*g+h*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);p=Math.sin(p*y)/E,o=Math.sin(o*y)/E,l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+_*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+_*o;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new C,xc=new tn;class Ye{constructor(e,t,n,i,r,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],E=i[4],b=i[7],w=i[2],A=i[5],R=i[8];return r[0]=a*_+o*y+l*w,r[3]=a*m+o*E+l*A,r[6]=a*p+o*b+l*R,r[1]=c*_+u*y+h*w,r[4]=c*m+u*E+h*A,r[7]=c*p+u*b+h*R,r[2]=d*_+f*y+g*w,r[5]=d*m+f*E+g*A,r[8]=d*p+f*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Na.makeScale(e,t)),this}rotate(e){return this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new Ye,_c=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ef(){const s={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?ha:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Es]:{primaries:e,whitePoint:n,transfer:ha,toXYZ:_c,fromXYZ:vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:_c,fromXYZ:vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),s}const rt=ef();function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Yi;class tf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=fa("canvas")),Yi.width=e.width,Yi.height=e.height;const i=Yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nf=0;class Fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fa(i[a].image)):r.push(Fa(i[a]))}else r=Fa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let sf=0;const Oa=new C;class Kt extends Rs{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=kn,i=kn,r=Zt,a=Ni,o=Tn,l=mn,c=Kt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=ei(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=ch;Kt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(f+1)/2,w=(p+1)/2,A=(u+d)/4,R=(h+_)/4,D=(g+m)/4;return E>b&&E>w?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=R/n):b>w?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=D/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=D/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends Rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Kt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Fl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends rf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _h extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),yr.subVectors(this.max,Ds),$i.subVectors(e.a,Ds),Zi.subVectors(e.b,Ds),Ki.subVectors(e.c,Ds),ri.subVectors(Zi,$i),ai.subVectors(Ki,Zi),bi.subVectors($i,Ki);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-bi.z,bi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,bi.z,0,-bi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-bi.y,bi.x,0];return!za(t,$i,Zi,Ki,yr)||(t=[1,0,0,0,1,0,0,0,1],!za(t,$i,Zi,Ki,yr))?!1:(Mr.crossVectors(ri,ai),t=[Mr.x,Mr.y,Mr.z],za(t,$i,Zi,Ki,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new C,new C,new C,new C,new C,new C,new C,new C],Cn=new C,vr=new Hi,$i=new C,Zi=new C,Ki=new C,ri=new C,ai=new C,bi=new C,Ds=new C,yr=new C,Mr=new C,Ei=new C;function za(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ei.fromArray(s,r);const o=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const of=new Hi,Us=new C,Ba=new C;class cr{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):of.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Ba)),this.expandByPoint(Us.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $n=new C,ka=new C,Sr=new C,oi=new C,Ga=new C,br=new C,Va=new C;class lf{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ka.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ka);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Sr),o=oi.dot(this.direction),l=-oi.dot(Sr),c=oi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ka).addScaledVector(Sr,d),f}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,r){Ga.subVectors(t,e),br.subVectors(n,e),Va.crossVectors(Ga,br);let a=this.direction.dot(Va),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(br.crossVectors(oi,br));if(l<0)return null;const c=o*this.direction.dot(Ga.cross(oi));if(c<0||l+c>a)return null;const u=-o*oi.dot(Va);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,i,r,a,o,l,c,u,h,d,f,g,_,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,r,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,uf)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),li.crossVectors(n,dn),li.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),li.crossVectors(n,dn)),li.normalize(),Er.crossVectors(dn,li),i[0]=li.x,i[4]=Er.x,i[8]=dn.x,i[1]=li.y,i[5]=Er.y,i[9]=dn.y,i[2]=li.z,i[6]=Er.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],E=n[7],b=n[11],w=n[15],A=i[0],R=i[4],D=i[8],v=i[12],M=i[1],L=i[5],z=i[9],O=i[13],V=i[2],Y=i[6],B=i[10],G=i[14],Q=i[3],de=i[7],oe=i[11],ye=i[15];return r[0]=a*A+o*M+l*V+c*Q,r[4]=a*R+o*L+l*Y+c*de,r[8]=a*D+o*z+l*B+c*oe,r[12]=a*v+o*O+l*G+c*ye,r[1]=u*A+h*M+d*V+f*Q,r[5]=u*R+h*L+d*Y+f*de,r[9]=u*D+h*z+d*B+f*oe,r[13]=u*v+h*O+d*G+f*ye,r[2]=g*A+_*M+m*V+p*Q,r[6]=g*R+_*L+m*Y+p*de,r[10]=g*D+_*z+m*B+p*oe,r[14]=g*v+_*O+m*G+p*ye,r[3]=y*A+E*M+b*V+w*Q,r[7]=y*R+E*L+b*Y+w*de,r[11]=y*D+E*z+b*B+w*oe,r[15]=y*v+E*O+b*G+w*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*f-c*d,E=o*f-c*h,b=o*d-l*h,w=a*f-c*u,A=a*d-l*u,R=a*h-o*u;return t*(_*y-m*E+p*b)-n*(g*y-m*w+p*A)+i*(g*E-_*w+p*R)-r*(g*b-_*A+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,E=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,b=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,w=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,A=t*y+n*E+i*b+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*R,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*R,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*R,e[4]=E*R,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*R,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*R,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*f+t*l*f)*R,e[8]=b*R,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*R,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*R,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*R,e[12]=w*R,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*R,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*R,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,_=a*u,m=a*h,p=o*h,y=l*c,E=l*u,b=l*h,w=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*w,i[1]=(f+b)*w,i[2]=(g-E)*w,i[3]=0,i[4]=(f-b)*A,i[5]=(1-(d+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+E)*R,i[9]=(m-y)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Ji.set(i[0],i[1],i[2]).length();const a=Ji.set(i[4],i[5],i[6]).length(),o=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Pn.copy(this);const c=1/r,u=1/a,h=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Gn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Gn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===da)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Gn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Gn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===da)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new C,Pn=new nt,cf=new C(0,0,0),uf=new C(1,1,1),li=new C,Er=new C,dn=new C,yc=new nt,Mc=new tn;class gn{constructor(e=0,t=0,n=0,i=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hf=0;const Sc=new C,ji=new tn,Zn=new nt,wr=new C,Ns=new C,df=new C,ff=new tn,bc=new C(1,0,0),Ec=new C(0,1,0),wc=new C(0,0,1),Tc={type:"added"},pf={type:"removed"},Qi={type:"childadded",child:null},Ha={type:"childremoved",child:null};class kt extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new C,t=new gn,n=new tn,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ye}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ns,wr,this.up):Zn.lookAt(wr,Ns,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),ji.setFromRotationMatrix(Zn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DEFAULT_UP=new C(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new C,Kn=new C,Wa=new C,Jn=new C,es=new C,ts=new C,Ac=new C,Xa=new C,qa=new C,Ya=new C,$a=new Ct,Za=new Ct,Ka=new Ct;class En{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ln.subVectors(i,t),Kn.subVectors(n,t),Wa.subVectors(e,t);const a=Ln.dot(Ln),o=Ln.dot(Kn),l=Ln.dot(Wa),c=Kn.dot(Kn),u=Kn.dot(Wa),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return $a.setScalar(0),Za.setScalar(0),Ka.setScalar(0),$a.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,n),Ka.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector($a,r.x),a.addScaledVector(Za,r.y),a.addScaledVector(Ka,r.z),a}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),Kn.subVectors(e,t),Ln.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Ln.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return En.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;es.subVectors(i,n),ts.subVectors(r,n),Xa.subVectors(e,n);const l=es.dot(Xa),c=ts.dot(Xa);if(l<=0&&c<=0)return t.copy(n);qa.subVectors(e,i);const u=es.dot(qa),h=ts.dot(qa);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(es,a);Ya.subVectors(e,r);const f=es.dot(Ya),g=ts.dot(Ya);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ts,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ac.subVectors(r,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Ac,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Ja(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Qd(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ja(a,r,e+1/3),this.g=Ja(a,r,e),this.b=Ja(a,r,e-1/3)}return rt.colorSpaceToWorking(this,i),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return rt.workingToColorSpace(Wt.copy(this),e),Math.round(et(Wt.r*255,0,255))*65536+Math.round(et(Wt.g*255,0,255))*256+Math.round(et(Wt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,r=Wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Yt){rt.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Tr);const n=Da(ci.h,Tr.h,t),i=Da(ci.s,Tr.s,t),r=Da(ci.l,Tr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ze;ze.NAMES=yh;let mf=0;class Cs extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=xs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=wo,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==wo&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mi extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new C,Ar=new be;let gf=0;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}}class Mh extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sh extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xf=0;const _n=new nt,ja=new kt,ns=new C,fn=new Hi,Fs=new Hi,Bt=new C;class Ot extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?Sh:Mh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(fn.min,Fs.min),fn.expandByPoint(Bt),Bt.addVectors(fn.max,Fs.max),fn.expandByPoint(Bt)):(fn.expandByPoint(Fs.min),fn.expandByPoint(Fs.max))}fn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),Bt.add(ns)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new C,l[D]=new C;const c=new C,u=new C,h=new C,d=new be,f=new be,g=new be,_=new C,m=new C;function p(D,v,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[D].add(_),o[v].add(_),o[M].add(_),l[D].add(m),l[v].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,v=y.length;D<v;++D){const M=y[D],L=M.start,z=M.count;for(let O=L,V=L+z;O<V;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new C,b=new C,w=new C,A=new C;function R(D){w.fromBufferAttribute(i,D),A.copy(w);const v=o[D];E.copy(v),E.sub(w.multiplyScalar(w.dot(v))).normalize(),b.crossVectors(A,v);const L=b.dot(l[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,v=y.length;D<v;++D){const M=y[D],L=M.start,z=M.count;for(let O=L,V=L+z;O<V;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new on(d,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new nt,wi=new lf,Rr=new cr,Cc=new C,Cr=new C,Pr=new C,Lr=new C,Qa=new C,Ir=new C,Pc=new C,Dr=new C;class Et extends kt{constructor(e=new Ot,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Qa.fromBufferAttribute(h,e),a?Ir.addScaledVector(Qa,u):Ir.addScaledVector(Qa.sub(t),u))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Rr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Rr,Cc)===null||wi.origin.distanceToSquared(Cc)>(e.far-e.near)**2))&&(Rc.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Rc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,w=E;b<w;b+=3){const A=o.getX(b),R=o.getX(b+1),D=o.getX(b+2);i=Ur(this,p,e,n,c,u,h,A,R,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);i=Ur(this,a,e,n,c,u,h,y,E,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,w=E;b<w;b+=3){const A=b,R=b+1,D=b+2;i=Ur(this,p,e,n,c,u,h,A,R,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,b=m+2;i=Ur(this,a,e,n,c,u,h,y,E,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function _f(s,e,t,n,i,r,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===vi,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:s}}function Ur(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Cr),s.getVertexPosition(l,Pr),s.getVertexPosition(c,Lr);const u=_f(s,e,t,n,Cr,Pr,Lr,Pc);if(u){const h=new C;En.getBarycoord(Pc,Cr,Pr,Lr,h),i&&(u.uv=En.getInterpolatedAttribute(i,o,l,c,h,new be)),r&&(u.uv1=En.getInterpolatedAttribute(r,o,l,c,h,new be)),a&&(u.normal=En.getInterpolatedAttribute(a,o,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};En.getNormal(Cr,Pr,Lr,d.normal),u.face=d,u.barycoord=h}return u}class yi extends Ot{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function g(_,m,p,y,E,b,w,A,R,D,v){const M=b/R,L=w/D,z=b/2,O=w/2,V=A/2,Y=R+1,B=D+1;let G=0,Q=0;const de=new C;for(let oe=0;oe<B;oe++){const ye=oe*L-O;for(let ke=0;ke<Y;ke++){const We=ke*M-z;de[_]=We*y,de[m]=ye*E,de[p]=V,c.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[p]=A>0?1:-1,u.push(de.x,de.y,de.z),h.push(ke/R),h.push(1-oe/D),G+=1}}for(let oe=0;oe<D;oe++)for(let ye=0;ye<R;ye++){const ke=d+ye+Y*oe,We=d+ye+Y*(oe+1),mt=d+(ye+1)+Y*(oe+1),ct=d+(ye+1)+Y*oe;l.push(ke,We,ct),l.push(We,mt,ct),Q+=6}o.addGroup(f,Q,v),f+=Q,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const n=ws(s[t]);for(const i in n)e[i]=n[i]}return e}function vf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function bh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Ol={clone:ws,merge:Qt};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Eh extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new C,Lc=new be,Ic=new be;class Sn extends Eh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Lc,Ic),t.subVectors(Ic,Lc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ia*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,ss=1;class Sf extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Sn(is,ss,e,t);i.layers=this.layers,this.add(i);const r=new Sn(is,ss,e,t);r.layers=this.layers,this.add(r);const a=new Sn(is,ss,e,t);a.layers=this.layers,this.add(a);const o=new Sn(is,ss,e,t);o.layers=this.layers,this.add(o);const l=new Sn(is,ss,e,t);l.layers=this.layers,this.add(l);const c=new Sn(is,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wh extends Kt{constructor(e=[],t=ki,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Th extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yi(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Qn});r.uniforms.tEquirect.value=t;const a=new Et(i,r),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Zt),new Sf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Dn extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bf={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class zl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new zl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ef extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new C;class ma{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ma(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ah extends Cs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const Os=new C,as=new C,os=new C,ls=new be,zs=new be,Rh=new nt,Nr=new C,Bs=new C,Fr=new C,Dc=new be,to=new be,Uc=new be;class Tf extends kt{constructor(e=new Ah){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new Ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wf(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new ma(n,3,0,!1)),rs.setAttribute("uv",new ma(n,2,3,!1))}this.geometry=rs,this.material=e,this.center=new be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Rh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Or(Nr.set(-.5,-.5,0),os,a,as,i,r),Or(Bs.set(.5,-.5,0),os,a,as,i,r),Or(Fr.set(.5,.5,0),os,a,as,i,r),Dc.set(0,0),to.set(1,0),Uc.set(1,1);let o=e.ray.intersectTriangle(Nr,Bs,Fr,!1,Os);if(o===null&&(Or(Bs.set(-.5,.5,0),os,a,as,i,r),to.set(0,1),o=e.ray.intersectTriangle(Nr,Fr,Bs,!1,Os),o===null))return;const l=e.ray.origin.distanceTo(Os);l<e.near||l>e.far||t.push({distance:l,point:Os.clone(),uv:En.getInterpolation(Os,Nr,Bs,Fr,Dc,to,Uc,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Or(s,e,t,n,i,r){ls.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(zs.x=r*ls.x-i*ls.y,zs.y=i*ls.x+r*ls.y):zs.copy(ls),s.copy(e),s.x+=zs.x,s.y+=zs.y,s.applyMatrix4(Rh)}class Bl extends Kt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ut,u=Ut,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi extends on{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new nt,Nc=new nt,zr=[],Fc=new Hi,Af=new nt,ks=new Et,Gs=new cr;class ur extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Af)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Fc.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(Fc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Gs.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),e.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,cs),Nc.multiplyMatrices(n,cs),ks.matrixWorld=Nc,ks.raycast(e,zr);for(let a=0,o=zr.length;a<o;a++){const l=zr[a];l.instanceId=r,l.object=this,t.push(l)}zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bl(new Float32Array(i*this.count),i,this.count,Pl,In));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const no=new C,Rf=new C,Cf=new Ye;class Ci{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=no.subVectors(n,t).cross(Rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(no),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cf.getNormalMatrix(e),i=this.coplanarPoint(no).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new cr,Pf=new be(.5,.5),Br=new C;class kl{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,r=new Ci,a=new Ci){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],E=r[13],b=r[14],w=r[15];if(i[0].setComponents(c-a,f-u,p-g,w-y).normalize(),i[1].setComponents(c+a,f+u,p+g,w+y).normalize(),i[2].setComponents(c+o,f+h,p+_,w+E).normalize(),i[3].setComponents(c-o,f-h,p-_,w-E).normalize(),n)i[4].setComponents(l,d,m,b).normalize(),i[5].setComponents(c-l,f-d,p-m,w-b).normalize();else if(i[4].setComponents(c-l,f-d,p-m,w-b).normalize(),t===Gn)i[5].setComponents(c+l,f+d,p+m,w+b).normalize();else if(t===da)i[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const t=Pf.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Br.x=i.normal.x>0?e.max.x:e.min.x,Br.y=i.normal.y>0?e.max.y:e.min.y,Br.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gl extends Kt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sr extends Kt{constructor(e,t,n=Wn,i,r,a,o=Ut,l=Ut,c,u=ii,h=1){if(u!==ii&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lf extends sr{constructor(e,t=Wn,n=ki,i,r,a=Ut,o=Ut,l,c=ii){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ch extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ts extends Ot{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,_=i+1,m=new C,p=new C;for(let y=0;y<=g;y++){let E=0,b=0,w=0,A=0;if(y<=n){const v=y/n,M=v*Math.PI/2;b=-u-e*Math.cos(M),w=e*Math.sin(M),A=-e*Math.cos(M),E=v*h}else if(y<=n+r){const v=(y-n)/r;b=-u+v*t,w=e,A=0,E=h+v*d}else{const v=(y-n-r)/n,M=v*Math.PI/2;b=u+e*Math.sin(M),w=e*Math.cos(M),A=e*Math.sin(M),E=h+d+v*h}const R=Math.max(0,Math.min(1,E/f));let D=0;y===0?D=.5/i:y===g&&(D=-.5/i);for(let v=0;v<=i;v++){const M=v/i,L=M*Math.PI*2,z=Math.sin(L),O=Math.cos(L);p.x=-w*O,p.y=b,p.z=w*z,o.push(p.x,p.y,p.z),m.set(-w*O,A,w*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+D,R)}if(y>0){const v=(y-1)*_;for(let M=0;M<i;M++){const L=v+M,z=v+M+1,O=y*_+M,V=y*_+M+1;a.push(L,z,O),a.push(z,V,O)}}}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Sa extends Ot{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function y(){const b=new C,w=new C;let A=0;const R=(t-e)/n;for(let D=0;D<=r;D++){const v=[],M=D/r,L=M*(t-e)+e;for(let z=0;z<=i;z++){const O=z/i,V=O*l+o,Y=Math.sin(V),B=Math.cos(V);w.x=L*Y,w.y=-M*n+m,w.z=L*B,h.push(w.x,w.y,w.z),b.set(Y,R,B).normalize(),d.push(b.x,b.y,b.z),f.push(O,1-M),v.push(g++)}_.push(v)}for(let D=0;D<i;D++)for(let v=0;v<r;v++){const M=_[v][D],L=_[v+1][D],z=_[v+1][D+1],O=_[v][D+1];(e>0||v!==0)&&(u.push(M,L,O),A+=3),(t>0||v!==r-1)&&(u.push(L,z,O),A+=3)}c.addGroup(p,A,0),p+=A}function E(b){const w=g,A=new be,R=new C;let D=0;const v=b===!0?e:t,M=b===!0?1:-1;for(let z=1;z<=i;z++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let z=0;z<=i;z++){const V=z/i*l+o,Y=Math.cos(V),B=Math.sin(V);R.x=v*B,R.y=m*M,R.z=v*Y,h.push(R.x,R.y,R.z),d.push(0,M,0),A.x=Y*.5+.5,A.y=B*.5*M+.5,f.push(A.x,A.y),g++}for(let z=0;z<i;z++){const O=w+z,V=L+z;b===!0?u.push(V,V+1,O):u.push(V+1,V,O),D+=3}c.addGroup(p,D,b===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vl extends Sa{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Vl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hl extends Ot{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const E=new C,b=new C,w=new C;for(let A=0;A<t.length;A+=3)f(t[A+0],E),f(t[A+1],b),f(t[A+2],w),l(E,b,w,y)}function l(y,E,b,w){const A=w+1,R=[];for(let D=0;D<=A;D++){R[D]=[];const v=y.clone().lerp(b,D/A),M=E.clone().lerp(b,D/A),L=A-D;for(let z=0;z<=L;z++)z===0&&D===A?R[D][z]=v:R[D][z]=v.clone().lerp(M,z/L)}for(let D=0;D<A;D++)for(let v=0;v<2*(A-D)-1;v++){const M=Math.floor(v/2);v%2===0?(d(R[D][M+1]),d(R[D+1][M]),d(R[D][M])):(d(R[D][M+1]),d(R[D+1][M+1]),d(R[D+1][M]))}}function c(y){const E=new C;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(y),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function u(){const y=new C;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];const b=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;a.push(b,1-w)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const E=a[y+0],b=a[y+2],w=a[y+4],A=Math.max(E,b,w),R=Math.min(E,b,w);A>.9&&R<.1&&(E<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,E){const b=y*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function g(){const y=new C,E=new C,b=new C,w=new C,A=new be,R=new be,D=new be;for(let v=0,M=0;v<r.length;v+=9,M+=6){y.set(r[v+0],r[v+1],r[v+2]),E.set(r[v+3],r[v+4],r[v+5]),b.set(r[v+6],r[v+7],r[v+8]),A.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),w.copy(y).add(E).add(b).divideScalar(3);const L=m(w);_(A,M+0,y,L),_(R,M+2,E,L),_(D,M+4,b,L)}}function _(y,E,b,w){w<0&&y.x===1&&(a[E]=y.x-1),b.x===0&&b.z===0&&(a[E]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.vertices,e.indices,e.radius,e.detail)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new be:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,i=[],r=[],a=[],o=new C,l=new nt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(et(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wl extends Xn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new be){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class If extends Wl{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xl(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const kr=new C,io=new Xl,so=new Xl,ro=new Xl;class Df extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(kr.subVectors(i[0],i[1]).add(i[0]),c=kr);const h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(kr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),io.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),so.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),ro.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(io.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),so.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ro.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(io.calc(l),so.calc(l),ro.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Oc(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Uf(s,e){const t=1-s;return t*t*e}function Nf(s,e){return 2*(1-s)*s*e}function Ff(s,e){return s*s*e}function Ks(s,e,t,n){return Uf(s,e)+Nf(s,t)+Ff(s,n)}function Of(s,e){const t=1-s;return t*t*t*e}function zf(s,e){const t=1-s;return 3*t*t*s*e}function Bf(s,e){return 3*(1-s)*s*s*e}function kf(s,e){return s*s*s*e}function Js(s,e,t,n,i){return Of(s,e)+zf(s,t)+Bf(s,n)+kf(s,i)}class Ph extends Xn{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(e,i.x,r.x,a.x,o.x),Js(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gf extends Xn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(e,i.x,r.x,a.x,o.x),Js(e,i.y,r.y,a.y,o.y),Js(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lh extends Xn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vf extends Xn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ih extends Xn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ks(e,i.x,r.x,a.x),Ks(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hf extends Xn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ks(e,i.x,r.x,a.x),Ks(e,i.y,r.y,a.y),Ks(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dh extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Oc(o,l.x,c.x,u.x,h.x),Oc(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new be().fromArray(i))}return this}}var zc=Object.freeze({__proto__:null,ArcCurve:If,CatmullRomCurve3:Df,CubicBezierCurve:Ph,CubicBezierCurve3:Gf,EllipseCurve:Wl,LineCurve:Lh,LineCurve3:Vf,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:Hf,SplineCurve:Dh});class Wf extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new zc[i.type]().fromJSON(i))}return this}}class Bc extends Wf{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lh(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ih(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Ph(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Wl(e,t,n,i,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ql extends Bc{constructor(e){super(e),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Bc().fromJSON(i))}return this}}function Xf(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Uh(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Kf(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let u=o,h=l;for(let d=t;d<i;d+=t){const f=s[d],g=s[d+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return rr(r,a,t,o,l,c,0),a}function Uh(s,e,t,n,i){let r;if(i===op(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=kc(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=kc(a/n|0,s[a],s[a+1],r);return r&&As(r,r.next)&&(or(r),r=r.next),r}function Vi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(As(t,t.next)||Tt(t.prev,t,t.next)===0)){if(or(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function rr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&tp(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Yf(s,n,i,r):qf(s)){e.push(l.i,s.i,c.i),or(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=$f(Vi(s),e),rr(s,e,t,n,i,r,2)):a===2&&Zf(s,e,t,n,i,r):rr(Vi(s),e,t,n,i,r,1);break}}}function qf(s){const e=s.prev,t=s,n=s.next;if(Tt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(i,r,a),h=Math.min(o,l,c),d=Math.max(i,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&$s(i,o,r,l,a,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yf(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Tt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,u=i.y,h=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(u,h,d),_=Math.max(o,l,c),m=Math.max(u,h,d),p=gl(f,g,e,t,n),y=gl(_,m,e,t,n);let E=s.prevZ,b=s.nextZ;for(;E&&E.z>=p&&b&&b.z<=y;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=m&&E!==i&&E!==a&&$s(o,u,l,h,c,d,E.x,E.y)&&Tt(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&$s(o,u,l,h,c,d,b.x,b.y)&&Tt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=m&&E!==i&&E!==a&&$s(o,u,l,h,c,d,E.x,E.y)&&Tt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&$s(o,u,l,h,c,d,b.x,b.y)&&Tt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function $f(s,e){let t=s;do{const n=t.prev,i=t.next.next;!As(n,i)&&Fh(n,t,t.next,i)&&ar(n,i)&&ar(i,n)&&(e.push(n.i,t.i,i.i),or(t),or(t.next),t=s=i),t=t.next}while(t!==s);return Vi(t)}function Zf(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sp(a,o)){let l=Oh(a,o);a=Vi(a,a.next),l=Vi(l,l.next),rr(a,e,t,n,i,r,0),rr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Kf(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Uh(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(ip(c))}i.sort(Jf);for(let r=0;r<i.length;r++)t=jf(i[r],t);return t}function Jf(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function jf(s,e){const t=Qf(s,e);if(!t)return e;const n=Oh(t,s);return Vi(n,n.next),Vi(t,t.next)}function Qf(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(As(s,t))return t;do{if(As(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Nh(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);ar(t,s)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&ep(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function ep(s,e){return Tt(s.prev,s,e.prev)<0&&Tt(e.next,s,s.next)<0}function tp(s,e,t,n){let i=s;do i.z===0&&(i.z=gl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,np(i)}function np(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function gl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ip(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Nh(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function $s(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Nh(s,e,t,n,i,r,a,o)}function sp(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!rp(s,e)&&(ar(s,e)&&ar(e,s)&&ap(s,e)&&(Tt(s.prev,s,e.prev)||Tt(s,e.prev,e))||As(s,e)&&Tt(s.prev,s,s.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function As(s,e){return s.x===e.x&&s.y===e.y}function Fh(s,e,t,n){const i=Vr(Tt(s,e,t)),r=Vr(Tt(s,e,n)),a=Vr(Tt(t,n,s)),o=Vr(Tt(t,n,e));return!!(i!==r&&a!==o||i===0&&Gr(s,t,e)||r===0&&Gr(s,n,e)||a===0&&Gr(t,s,n)||o===0&&Gr(t,e,n))}function Gr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Vr(s){return s>0?1:s<0?-1:0}function rp(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Fh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ar(s,e){return Tt(s.prev,s,s.next)<0?Tt(s,e,s.next)>=0&&Tt(s,s.prev,e)>=0:Tt(s,e,s.prev)<0||Tt(s,s.next,e)<0}function ap(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Oh(s,e){const t=xl(s.i,s.x,s.y),n=xl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kc(s,e,t,n){const i=xl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function or(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function op(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class lp{static triangulate(e,t,n=2){return Xf(e,t,n)}}class js{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return js.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Gc(e),Vc(n,e);let a=e.length;t.forEach(Gc);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Vc(n,t[l]);const o=lp.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Gc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Vc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Yl extends Hl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yl(e.radius,e.detail)}}class Un extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let E=0;E<c;E++){const b=E*h-r;g.push(b,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const E=y+c*p,b=y+c*(p+1),w=y+1+c*(p+1),A=y+1+c*p;f.push(E,b,A),f.push(b,w,A)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}class $l extends Ot{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new C,g=new be;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,E=y,b=y+n+1,w=y+n+2,A=y+1;o.push(E,b,A),o.push(b,w,A)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ba extends Ot{constructor(e=new ql([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(i,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(a,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;js.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];js.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=js.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],E=y[0]+h,b=y[1]+h,w=y[2]+h;n.push(E,b,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return cp(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new ba(n,e.curveSegments)}}function cp(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class hr extends Ot{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],E=p/n;let b=0;p===0&&a===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(i+A*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(i+A*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+b,1-E),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const E=u[p][y+1],b=u[p][y],w=u[p+1][y],A=u[p+1][y+1];(p!==0||a>0)&&f.push(E,b,A),(p!==n-1||l<Math.PI)&&f.push(b,w,A)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zl extends Ot{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class up extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lr extends Cs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class hp extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dp extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zh extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class fp extends zh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ao=new nt,Hc=new C,Wc=new C;class pp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hc),Wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wc),t.updateMatrixWorld(),ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kl extends Eh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mp extends pp{constructor(){super(new Kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xc extends zh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new mp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class gp extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function qc(s,e,t,n){const i=xp(n);switch(t){case ph:return s*e;case Pl:return s*e/i.components*i.byteLength;case Ll:return s*e/i.components*i.byteLength;case bs:return s*e*2/i.components*i.byteLength;case Il:return s*e*2/i.components*i.byteLength;case mh:return s*e*3/i.components*i.byteLength;case Tn:return s*e*4/i.components*i.byteLength;case Dl:return s*e*4/i.components*i.byteLength;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ra:case aa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oo:case Bo:return Math.max(s,16)*Math.max(e,8)/4;case Fo:case zo:return Math.max(s,8)*Math.max(e,8)/2;case ko:case Go:case Ho:case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Xo:case qo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case tl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case nl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case il:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case sl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case rl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ol:case ll:case cl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ul:case hl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case dl:case fl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xp(s){switch(s){case mn:case uh:return{byteLength:1,components:1};case tr:case hh:case ni:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case Wn:case Al:case In:return{byteLength:4,components:1};case dh:case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);function Bh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function _p(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,am=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,K0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:vp,alphahash_pars_fragment:yp,alphamap_fragment:Mp,alphamap_pars_fragment:Sp,alphatest_fragment:bp,alphatest_pars_fragment:Ep,aomap_fragment:wp,aomap_pars_fragment:Tp,batching_pars_vertex:Ap,batching_vertex:Rp,begin_vertex:Cp,beginnormal_vertex:Pp,bsdfs:Lp,iridescence_fragment:Ip,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Op,color_fragment:zp,color_pars_fragment:Bp,color_pars_vertex:kp,color_vertex:Gp,common:Vp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Wp,displacementmap_pars_vertex:Xp,displacementmap_vertex:qp,emissivemap_fragment:Yp,emissivemap_pars_fragment:$p,colorspace_fragment:Zp,colorspace_pars_fragment:Kp,envmap_fragment:Jp,envmap_common_pars_fragment:jp,envmap_pars_fragment:Qp,envmap_pars_vertex:em,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:nm,fog_pars_vertex:im,fog_fragment:sm,fog_pars_fragment:rm,gradientmap_pars_fragment:am,lightmap_pars_fragment:om,lights_lambert_fragment:lm,lights_lambert_pars_fragment:cm,lights_pars_begin:um,lights_toon_fragment:dm,lights_toon_pars_fragment:fm,lights_phong_fragment:pm,lights_phong_pars_fragment:mm,lights_physical_fragment:gm,lights_physical_pars_fragment:xm,lights_fragment_begin:_m,lights_fragment_maps:vm,lights_fragment_end:ym,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Em,map_fragment:wm,map_pars_fragment:Tm,map_particle_fragment:Am,map_particle_pars_fragment:Rm,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Pm,morphinstance_vertex:Lm,morphcolor_vertex:Im,morphnormal_vertex:Dm,morphtarget_pars_vertex:Um,morphtarget_vertex:Nm,normal_fragment_begin:Fm,normal_fragment_maps:Om,normal_pars_fragment:zm,normal_pars_vertex:Bm,normal_vertex:km,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Xm,opaque_fragment:qm,packing:Ym,premultiplied_alpha_fragment:$m,project_vertex:Zm,dithering_fragment:Km,dithering_pars_fragment:Jm,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:e0,shadowmap_pars_vertex:t0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:s0,skinning_pars_vertex:r0,skinning_vertex:a0,skinnormal_vertex:o0,specularmap_fragment:l0,specularmap_pars_fragment:c0,tonemapping_fragment:u0,tonemapping_pars_fragment:h0,transmission_fragment:d0,transmission_pars_fragment:f0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:x0,background_vert:_0,background_frag:v0,backgroundCube_vert:y0,backgroundCube_frag:M0,cube_vert:S0,cube_frag:b0,depth_vert:E0,depth_frag:w0,distance_vert:T0,distance_frag:A0,equirect_vert:R0,equirect_frag:C0,linedashed_vert:P0,linedashed_frag:L0,meshbasic_vert:I0,meshbasic_frag:D0,meshlambert_vert:U0,meshlambert_frag:N0,meshmatcap_vert:F0,meshmatcap_frag:O0,meshnormal_vert:z0,meshnormal_frag:B0,meshphong_vert:k0,meshphong_frag:G0,meshphysical_vert:V0,meshphysical_frag:H0,meshtoon_vert:W0,meshtoon_frag:X0,points_vert:q0,points_frag:Y0,shadow_vert:$0,shadow_frag:Z0,sprite_vert:K0,sprite_frag:J0},ue={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},zn={basic:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Qt([ue.points,ue.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Qt([ue.common,ue.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Qt([ue.sprite,ue.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Qt([ue.common,ue.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Qt([ue.lights,ue.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};zn.physical={uniforms:Qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Hr={r:0,b:0,g:0},Ai=new gn,j0=new nt;function Q0(s,e,t,n,i,r,a){const o=new ze(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function _(E){let b=!1;const w=g(E);w===null?p(o,l):w&&w.isColor&&(p(w,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,b){const w=g(b);w&&(w.isCubeTexture||w.mapping===Ma)?(u===void 0&&(u=new Et(new yi(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:ws(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ai.copy(b.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(Ai)),u.material.toneMapped=rt.getTransfer(w.colorSpace)!==pt,(h!==w||d!==w.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Et(new Un(2,2),new ln({name:"BackgroundMaterial",uniforms:ws(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=rt.getTransfer(w.colorSpace)!==pt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,b){E.getRGB(Hr,bh(s)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,b,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:y}}function eg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,L,z,O,V){let Y=!1;const B=h(O,z,L);r!==B&&(r=B,c(r.object)),Y=f(M,O,z,V),Y&&g(M,O,z,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(M,L,z,O),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,L,z){const O=z.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let Y=V[L.id];Y===void 0&&(Y={},V[L.id]=Y);let B=Y[O];return B===void 0&&(B=d(l()),Y[O]=B),B}function d(M){const L=[],z=[],O=[];for(let V=0;V<t;V++)L[V]=0,z[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,L,z,O){const V=r.attributes,Y=L.attributes;let B=0;const G=z.getAttributes();for(const Q in G)if(G[Q].location>=0){const oe=V[Q];let ye=Y[Q];if(ye===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),oe===void 0||oe.attribute!==ye||ye&&oe.data!==ye.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(M,L,z,O){const V={},Y=L.attributes;let B=0;const G=z.getAttributes();for(const Q in G)if(G[Q].location>=0){let oe=Y[Q];oe===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor));const ye={};ye.attribute=oe,oe&&oe.data&&(ye.data=oe.data),V[Q]=ye,B++}r.attributes=V,r.attributesNum=B,r.index=O}function _(){const M=r.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const z=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;z[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),V[M]!==L&&(s.vertexAttribDivisor(M,L),V[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let z=0,O=L.length;z<O;z++)L[z]!==M[z]&&(s.disableVertexAttribArray(z),L[z]=0)}function E(M,L,z,O,V,Y,B){B===!0?s.vertexAttribIPointer(M,L,z,V,Y):s.vertexAttribPointer(M,L,z,O,V,Y)}function b(M,L,z,O){_();const V=O.attributes,Y=z.getAttributes(),B=L.defaultAttributeValues;for(const G in Y){const Q=Y[G];if(Q.location>=0){let de=V[G];if(de===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const oe=de.normalized,ye=de.itemSize,ke=e.get(de);if(ke===void 0)continue;const We=ke.buffer,mt=ke.type,ct=ke.bytesPerElement,K=mt===s.INT||mt===s.UNSIGNED_INT||de.gpuType===Al;if(de.isInterleavedBufferAttribute){const ee=de.data,xe=ee.stride,Ve=de.offset;if(ee.isInstancedInterleavedBuffer){for(let Me=0;Me<Q.locationSize;Me++)p(Q.location+Me,ee.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Me=0;Me<Q.locationSize;Me++)m(Q.location+Me);s.bindBuffer(s.ARRAY_BUFFER,We);for(let Me=0;Me<Q.locationSize;Me++)E(Q.location+Me,ye/Q.locationSize,mt,oe,xe*ct,(Ve+ye/Q.locationSize*Me)*ct,K)}else{if(de.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)p(Q.location+ee,de.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ee=0;ee<Q.locationSize;ee++)m(Q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,We);for(let ee=0;ee<Q.locationSize;ee++)E(Q.location+ee,ye/Q.locationSize,mt,oe,ye*ct,ye/Q.locationSize*ee*ct,K)}}else if(B!==void 0){const oe=B[G];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(Q.location,oe);break;case 3:s.vertexAttrib3fv(Q.location,oe);break;case 4:s.vertexAttrib4fv(Q.location,oe);break;default:s.vertexAttrib1fv(Q.location,oe)}}}}y()}function w(){D();for(const M in n){const L=n[M];for(const z in L){const O=L[z];for(const V in O)u(O[V].object),delete O[V];delete L[z]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const z in L){const O=L[z];for(const V in O)u(O[V].object),delete O[V];delete L[z]}delete n[M.id]}function R(M){for(const L in n){const z=n[L];if(z[M.id]===void 0)continue;const O=z[M.id];for(const V in O)u(O[V].object),delete O[V];delete z[M.id]}}function D(){v(),a=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function tg(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ng(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Tn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==In&&!D)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:b,maxSamples:w,samples:A}}function ig(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ci,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,E=y*4;let b=p.clippingState||null;l.value=b,b=u(g,d,E,f);for(let w=0;w!==E;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=f;E!==_;++E,b+=4)a.copy(h[E]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function sg(s){let e=new WeakMap;function t(a,o){return o===Do?a.mapping=ki:o===Uo&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Do||o===Uo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Th(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const gi=4,Yc=[.125,.215,.35,.446,.526,.582],Ii=20,rg=256,Vs=new Kl,$c=new ze;let oo=null,lo=0,co=0,uo=!1;const ag=new C;class Zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=ag}=r;oo=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oo,lo,co),this._renderer.xr.enabled=uo,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oo=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:ni,format:Tn,colorSpace:Es,depthBuffer:!1},i=Kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=og(r)),this._blurMaterial=cg(r,e,t),this._ggxMaterial=lg(r,e,t)}return i}_compileMaterial(e){const t=new Et(new Ot,e);this._renderer.compile(t,Vs)}_sceneToCubeUV(e,t,n,i,r){const l=new Sn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($c),h.toneMapping=Vn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new yi,new mi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy($c),p=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const w=this._cubeSize;us(i,b*w,E>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ki||e.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-gi?n-g+gi:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,us(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(o,Vs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,us(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,Vs)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&st("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ii;m>Ii&&He(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let y=0;for(let R=0;R<Ii;++R){const D=R/_,v=Math.exp(-D*D/2);p.push(v),R===0?y+=v:R<m&&(y+=2*v)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const b=this._sizeLods[i],w=3*b*(i>E-gi?i-E+gi:0),A=4*(this._cubeSize-b);us(t,w,A,3*b,2*b),l.setRenderTarget(t),l.render(h,Vs)}}function og(s){const e=[],t=[],n=[];let i=s;const r=s-gi+1+Yc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-gi?l=Yc[a-s+gi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),E=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,D=A>2?0:-1,v=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];y.set(v,_*g*A),E.set(d,m*g*A);const M=[A,A,A,A,A,A];b.set(M,p*g*A)}const w=new Ot;w.setAttribute("position",new on(y,_)),w.setAttribute("uv",new on(E,m)),w.setAttribute("faceIndex",new on(b,p)),n.push(new Et(w,null)),i>gi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Kc(s,e,t){const n=new Hn(s,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function lg(s,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ea(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function cg(s,e,t){const n=new Float32Array(Ii),i=new C(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Jc(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function jc(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ug(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Do||l===Uo,u=l===ki||l===Ss;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Zc(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Zc(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function hg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ir("WebGLRenderer: "+n+" extension not supported."),i}}}function dg(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let E=0,b=y.length;E<b;E+=3){const w=y[E+0],A=y[E+1],R=y[E+2];d.push(w,A,A,R,R,w)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,b=y.length/3-1;E<b;E+=3){const w=E+0,A=E+1,R=E+2;d.push(w,A,A,R,R,w)}}else return;const m=new(xh(d)?Sh:Mh)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function fg(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function pg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function mg(s,e,t){const n=new WeakMap,i=new Ct;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let w=o.attributes.position.count*b,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*A*4*h),D=new _h(R,w,A,h);D.type=In,D.needsUpdate=!0;const v=b*4;for(let L=0;L<h;L++){const z=p[L],O=y[L],V=E[L],Y=w*A*4*L;for(let B=0;B<z.count;B++){const G=B*v;g===!0&&(i.fromBufferAttribute(z,B),R[Y+G+0]=i.x,R[Y+G+1]=i.y,R[Y+G+2]=i.z,R[Y+G+3]=0),_===!0&&(i.fromBufferAttribute(O,B),R[Y+G+4]=i.x,R[Y+G+5]=i.y,R[Y+G+6]=i.z,R[Y+G+7]=0),m===!0&&(i.fromBufferAttribute(V,B),R[Y+G+8]=i.x,R[Y+G+9]=i.y,R[Y+G+10]=i.z,R[Y+G+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:D,size:new be(w,A)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function gg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const xg={[ih]:"LINEAR_TONE_MAPPING",[sh]:"REINHARD_TONE_MAPPING",[rh]:"CINEON_TONE_MAPPING",[Tl]:"ACES_FILMIC_TONE_MAPPING",[oh]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[ah]:"CUSTOM_TONE_MAPPING"};function _g(s,e,t,n,i){const r=new Hn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new Hn(e,t,{type:ni,depthBuffer:!1,stencilBuffer:!1}),o=new Ot;o.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new dt([0,2,0,0,2,0],2));const l=new up({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Et(o,l),u=new Kl(-1,1,1,-1,0,1);let h=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(y,E){r.setSize(y,E),a.setSize(y,E);for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(y,E)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const E=r.width,b=r.height;for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(E,b)}},this.begin=function(y,E){if(f||y.toneMapping===Vn&&m.length===0)return!1;if(_=E,E!==null){const b=E.width,w=E.height;(r.width!==b||r.height!==w)&&this.setSize(b,w)}return p===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=Vn,!0},this.hasRenderPass=function(){return p},this.end=function(y,E){y.toneMapping=g,f=!0;let b=r,w=a;for(let A=0;A<m.length;A++){const R=m[A];if(R.enabled!==!1&&(R.render(y,w,b,E),R.needsSwap!==!1)){const D=b;b=w,w=D}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},rt.getTransfer(h)===pt&&(l.defines.SRGB_TRANSFER="");const A=xg[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(_),y.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const kh=new Kt,_l=new sr(1,1),Gh=new _h,Vh=new af,Hh=new wh,Qc=[],eu=[],tu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function Ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Qc[i];if(r===void 0&&(r=new Float32Array(i),Qc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function wa(s,e){let t=eu[e];t===void 0&&(t=new Int32Array(e),eu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function Mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function bg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;iu.set(n),s.uniformMatrix2fv(this.addr,!1,iu),Ft(t,n)}}function Eg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;nu.set(n),s.uniformMatrix3fv(this.addr,!1,nu),Ft(t,n)}}function wg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;tu.set(n),s.uniformMatrix4fv(this.addr,!1,tu),Ft(t,n)}}function Tg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Ft(t,e)}}function Rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Ft(t,e)}}function Cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Ft(t,e)}}function Pg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Ft(t,e)}}function Ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Ft(t,e)}}function Dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Ft(t,e)}}function Ug(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(_l.compareFunction=t.isReversedDepthBuffer()?Nl:Ul,r=_l):r=kh,t.setTexture2D(e||r,i)}function Ng(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vh,i)}function Fg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hh,i)}function Og(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gh,i)}function zg(s){switch(s){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Lg;case 36295:return Ig;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}function Bg(s,e){s.uniform1fv(this.addr,e)}function kg(s,e){const t=Ps(e,this.size,2);s.uniform2fv(this.addr,t)}function Gg(s,e){const t=Ps(e,this.size,3);s.uniform3fv(this.addr,t)}function Vg(s,e){const t=Ps(e,this.size,4);s.uniform4fv(this.addr,t)}function Hg(s,e){const t=Ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wg(s,e){const t=Ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xg(s,e){const t=Ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qg(s,e){s.uniform1iv(this.addr,e)}function Yg(s,e){s.uniform2iv(this.addr,e)}function $g(s,e){s.uniform3iv(this.addr,e)}function Zg(s,e){s.uniform4iv(this.addr,e)}function Kg(s,e){s.uniform1uiv(this.addr,e)}function Jg(s,e){s.uniform2uiv(this.addr,e)}function jg(s,e){s.uniform3uiv(this.addr,e)}function Qg(s,e){s.uniform4uiv(this.addr,e)}function ex(s,e,t){const n=this.cache,i=e.length,r=wa(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=_l:a=kh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function tx(s,e,t){const n=this.cache,i=e.length,r=wa(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Vh,r[a])}function nx(s,e,t){const n=this.cache,i=e.length,r=wa(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Hh,r[a])}function ix(s,e,t){const n=this.cache,i=e.length,r=wa(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Gh,r[a])}function sx(s){switch(s){case 5126:return Bg;case 35664:return kg;case 35665:return Gg;case 35666:return Vg;case 35674:return Hg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return $g;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return Jg;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}class rx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}}class ax{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sx(t.type)}}class ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function su(s,e){s.seq.push(e),s.map[e.id]=e}function lx(s,e,t){const n=s.name,i=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),a=ho.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){su(t,c===void 0?new rx(o,s,e):new ax(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new ox(o),su(t,h)),t=h}}}class oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);lx(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ru(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const cx=37297;let ux=0;function hx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const au=new Ye;function dx(s){rt._getMatrix(au,rt.workingColorSpace,s);const e=`mat3( ${au.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(s)){case ha:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ou(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+hx(s.getShaderSource(e),o)}else return r}function fx(s,e){const t=dx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const px={[ih]:"Linear",[sh]:"Reinhard",[rh]:"Cineon",[Tl]:"ACESFilmic",[oh]:"AgX",[lh]:"Neutral",[ah]:"Custom"};function mx(s,e){const t=px[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new C;function gx(){rt.getLuminanceCoefficients(Wr);const s=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function _x(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Zs(s){return s!==""}function lu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(s){return s.replace(yx,Sx)}const Mx=new Map;function Sx(s,e){let t=Ze[e];if(t===void 0){const n=Mx.get(e);if(n!==void 0)t=Ze[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vl(t)}const bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(s){return s.replace(bx,Ex)}function Ex(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const wx={[na]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function Tx(s){return wx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ax={[ki]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function Rx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Ax[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Cx={[Ss]:"ENVMAP_MODE_REFRACTION"};function Px(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Cx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lx={[nh]:"ENVMAP_BLENDING_MULTIPLY",[kd]:"ENVMAP_BLENDING_MIX",[Gd]:"ENVMAP_BLENDING_ADD"};function Ix(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Lx[s.combine]||"ENVMAP_BLENDING_NONE"}function Dx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ux(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Tx(t),c=Rx(t),u=Px(t),h=Ix(t),d=Dx(t),f=xx(t),g=_x(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(m=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Vn?mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,fx("linearToOutputTexel",t.outputColorSpace),gx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=vl(a),a=lu(a,t),a=cu(a,t),o=vl(o),o=lu(o,t),o=cu(o,t),a=uu(a),o=uu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,b=y+p+o,w=ru(i,i.VERTEX_SHADER,E),A=ru(i,i.FRAGMENT_SHADER,b);i.attachShader(_,w),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(L){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(w)||"",V=i.getShaderInfoLog(A)||"",Y=z.trim(),B=O.trim(),G=V.trim();let Q=!0,de=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,A);else{const oe=ou(i,w,"vertex"),ye=ou(i,A,"fragment");st("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+oe+`
`+ye)}else Y!==""?He("WebGLProgram: Program Info Log:",Y):(B===""||G==="")&&(de=!1);de&&(L.diagnostics={runnable:Q,programLog:Y,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(w),i.deleteShader(A),D=new oa(i,_),v=vx(i,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,cx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ux++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let Nx=0;class Fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ox(e),t.set(e,n)),n}}class Ox{constructor(e){this.id=Nx++,this.code=e,this.usedTimes=0}}function zx(s,e,t,n,i,r,a){const o=new vh,l=new Fx,c=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,L,z,O){const V=z.fog,Y=O.geometry,B=v.isMeshStandardMaterial?z.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),Q=G&&G.mapping===Ma?G.image.height:null,de=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ye=oe!==void 0?oe.length:0;let ke=0;Y.morphAttributes.position!==void 0&&(ke=1),Y.morphAttributes.normal!==void 0&&(ke=2),Y.morphAttributes.color!==void 0&&(ke=3);let We,mt,ct,K;if(de){const j=zn[de];We=j.vertexShader,mt=j.fragmentShader}else We=v.vertexShader,mt=v.fragmentShader,l.update(v),ct=l.getVertexShaderID(v),K=l.getFragmentShaderID(v);const ee=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Ve=O.isInstancedMesh===!0,Me=O.isBatchedMesh===!0,je=!!v.map,bt=!!v.matcap,Xe=!!G,it=!!v.aoMap,tt=!!v.lightMap,Le=!!v.bumpMap,vt=!!v.normalMap,P=!!v.displacementMap,wt=!!v.emissiveMap,at=!!v.metalnessMap,ut=!!v.roughnessMap,Ae=v.anisotropy>0,T=v.clearcoat>0,x=v.dispersion>0,N=v.iridescence>0,Z=v.sheen>0,$=v.transmission>0,X=Ae&&!!v.anisotropyMap,_e=T&&!!v.clearcoatMap,ie=T&&!!v.clearcoatNormalMap,pe=T&&!!v.clearcoatRoughnessMap,Ue=N&&!!v.iridescenceMap,te=N&&!!v.iridescenceThicknessMap,ce=Z&&!!v.sheenColorMap,we=Z&&!!v.sheenRoughnessMap,Re=!!v.specularMap,le=!!v.specularColorMap,qe=!!v.specularIntensityMap,U=$&&!!v.transmissionMap,fe=$&&!!v.thicknessMap,se=!!v.gradientMap,Se=!!v.alphaMap,ne=v.alphaTest>0,J=!!v.alphaHash,re=!!v.extensions;let I=Vn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(I=s.toneMapping);const q={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:We,fragmentShader:mt,defines:v.defines,customVertexShaderID:ct,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Me,batchingColor:Me&&O._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&O.instanceColor!==null,instancingMorph:Ve&&O.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Es,alphaToCoverage:!!v.alphaToCoverage,map:je,matcap:bt,envMap:Xe,envMapMode:Xe&&G.mapping,envMapCubeUVHeight:Q,aoMap:it,lightMap:tt,bumpMap:Le,normalMap:vt,displacementMap:P,emissiveMap:wt,normalMapObjectSpace:vt&&v.normalMapType===Wd,normalMapTangentSpace:vt&&v.normalMapType===gh,metalnessMap:at,roughnessMap:ut,anisotropy:Ae,anisotropyMap:X,clearcoat:T,clearcoatMap:_e,clearcoatNormalMap:ie,clearcoatRoughnessMap:pe,dispersion:x,iridescence:N,iridescenceMap:Ue,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:ce,sheenRoughnessMap:we,specularMap:Re,specularColorMap:le,specularIntensityMap:qe,transmission:$,transmissionMap:U,thicknessMap:fe,gradientMap:se,opaque:v.transparent===!1&&v.blending===xs&&v.alphaToCoverage===!1,alphaMap:Se,alphaTest:ne,alphaHash:J,combine:v.combine,mapUv:je&&_(v.map.channel),aoMapUv:it&&_(v.aoMap.channel),lightMapUv:tt&&_(v.lightMap.channel),bumpMapUv:Le&&_(v.bumpMap.channel),normalMapUv:vt&&_(v.normalMap.channel),displacementMapUv:P&&_(v.displacementMap.channel),emissiveMapUv:wt&&_(v.emissiveMap.channel),metalnessMapUv:at&&_(v.metalnessMap.channel),roughnessMapUv:ut&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:_e&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(v.sheenRoughnessMap.channel),specularMapUv:Re&&_(v.specularMap.channel),specularColorMapUv:le&&_(v.specularColorMap.channel),specularIntensityMapUv:qe&&_(v.specularIntensityMap.channel),transmissionMapUv:U&&_(v.transmissionMap.channel),thicknessMapUv:fe&&_(v.thicknessMap.channel),alphaMapUv:Se&&_(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(vt||Ae),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(je||Se),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:I,decodeVideoTexture:je&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:wt&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bn,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return q.vertexUv1s=c.has(1),q.vertexUv2s=c.has(2),q.vertexUv3s=c.has(3),c.clear(),q}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)M.push(L),M.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(y(M,v),E(M,v),M.push(s.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function y(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function E(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function b(v){const M=g[v.type];let L;if(M){const z=zn[M];L=Ol.clone(z.uniforms)}else L=v.uniforms;return L}function w(v,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new Ux(s,M,v,r),u.push(L),h.set(M,L)),L}function A(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function R(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:D}}function Bx(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function kx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function du(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||kx),n.length>1&&n.sort(d||du),i.length>1&&i.sort(d||du)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Gx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new fu,s.set(n,[a])):i>=r.length?(a=new fu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Vx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ze};break;case"SpotLight":t={position:new C,direction:new C,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Hx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Wx=0;function Xx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qx(s){const e=new Vx,t=Hx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new nt,a=new nt;function o(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,E=0,b=0,w=0,A=0,R=0;c.sort(Xx);for(let v=0,M=c.length;v<M;v++){const L=c[v],z=L.color,O=L.intensity,V=L.distance;let Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===bs?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=z.r*O,h+=z.g*O,d+=z.b*O;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],O);R++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,Q=t.get(L);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=B,f++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(z).multiplyScalar(O),B.distance=V,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[_]=B;const G=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,G.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=G.matrix,L.castShadow){const Q=t.get(L);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=Y,b++}_++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(z).multiplyScalar(O),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=B,m++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const G=L.shadow,Q=t.get(L);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,Q.shadowCameraNear=G.camera.near,Q.shadowCameraFar=G.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=B,g++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(O),B.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==E||D.numSpotShadows!==b||D.numSpotMaps!==w||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=E,D.numSpotShadows=b,D.numSpotMaps=w,D.numLightProbes=R,n.version=Wx++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(E.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function pu(s){const e=new qx(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Yx(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new pu(s),e.set(i,[o])):r>=a.length?(o=new pu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kx=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Jx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],mu=new nt,Hs=new C,fo=new C;function jx(s,e,t){let n=new kl;const i=new be,r=new be,a=new Ct,o=new hp,l=new dp,c={},u=t.maxTextureSize,h={[vi]:nn,[nn]:vi,[bn]:bn},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:$x,fragmentShader:Zx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let p=this.type;this.render=function(A,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===th&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=na);const v=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Qn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==this.type;O&&R.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Y=>Y.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Y=A.length;V<Y;V++){const B=A[V],G=B.shadow;if(G===void 0){He("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const Q=G.getFrameExtents();if(i.multiply(Q),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,G.mapSize.y=r.y)),G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ys){if(B.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Hn(i.x,i.y,{format:bs,type:ni,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new sr(i.x,i.y,In),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut}else{B.isPointLight?(G.map=new Th(i.x),G.map.depthTexture=new Lf(i.x,Wn)):(G.map=new Hn(i.x,i.y),G.map.depthTexture=new sr(i.x,i.y,Wn)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=ii;const oe=s.state.buffers.depth.getReversed();this.type===na?(G.map.depthTexture.compareFunction=oe?Nl:Ul,G.map.depthTexture.minFilter=Zt,G.map.depthTexture.magFilter=Zt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut)}G.camera.updateProjectionMatrix()}const de=G.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<de;oe++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,oe),s.clear();else{oe===0&&(s.setRenderTarget(G.map),s.clear());const ye=G.getViewport(oe);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),z.viewport(a)}if(B.isPointLight){const ye=G.camera,ke=G.matrix,We=B.distance||ye.far;We!==ye.far&&(ye.far=We,ye.updateProjectionMatrix()),Hs.setFromMatrixPosition(B.matrixWorld),ye.position.copy(Hs),fo.copy(ye.position),fo.add(Kx[oe]),ye.up.copy(Jx[oe]),ye.lookAt(fo),ye.updateMatrixWorld(),ke.makeTranslation(-Hs.x,-Hs.y,-Hs.z),mu.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),G._frustum.setFromProjectionMatrix(mu,ye.coordinateSystem,ye.reversedDepth)}else G.updateMatrices(B);n=G.getFrustum(),b(R,D,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Ys&&y(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,M,L)};function y(A,R){const D=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(i.x,i.y,{format:bs,type:ni})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,D,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,D,f,_,null)}function E(A,R,D,v){let M=null;const L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=M.uuid,O=R.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let Y=V[O];Y===void 0&&(Y=M.clone(),V[O]=Y,R.addEventListener("dispose",w)),M=Y}if(M.visible=R.visible,M.wireframe=R.wireframe,v===Ys?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=D}return M}function b(A,R,D,v,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Ys)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const O=e.update(A),V=A.material;if(Array.isArray(V)){const Y=O.groups;for(let B=0,G=Y.length;B<G;B++){const Q=Y[B],de=V[Q.materialIndex];if(de&&de.visible){const oe=E(A,de,v,M);A.onBeforeShadow(s,A,R,D,O,oe,Q),s.renderBufferDirect(D,null,O,oe,A,Q),A.onAfterShadow(s,A,R,D,O,oe,Q)}}}else if(V.visible){const Y=E(A,V,v,M);A.onBeforeShadow(s,A,R,D,O,Y,null),s.renderBufferDirect(D,null,O,Y,A,null),A.onAfterShadow(s,A,R,D,O,Y,null)}}const z=A.children;for(let O=0,V=z.length;O<V;O++)b(z[O],R,D,v,M)}function w(A){A.target.removeEventListener("dispose",w);for(const D in c){const v=c[D],M=A.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const Qx={[To]:Ao,[Ro]:Lo,[Co]:Io,[Ms]:Po,[Ao]:To,[Lo]:Ro,[Io]:Co,[Po]:Ms};function e_(s,e){function t(){let U=!1;const fe=new Ct;let se=null;const Se=new Ct(0,0,0,0);return{setMask:function(ne){se!==ne&&!U&&(s.colorMask(ne,ne,ne,ne),se=ne)},setLocked:function(ne){U=ne},setClear:function(ne,J,re,I,q){q===!0&&(ne*=I,J*=I,re*=I),fe.set(ne,J,re,I),Se.equals(fe)===!1&&(s.clearColor(ne,J,re,I),Se.copy(fe))},reset:function(){U=!1,se=null,Se.set(-1,0,0,0)}}}function n(){let U=!1,fe=!1,se=null,Se=null,ne=null;return{setReversed:function(J){if(fe!==J){const re=e.get("EXT_clip_control");J?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),fe=J;const I=ne;ne=null,this.setClear(I)}},getReversed:function(){return fe},setTest:function(J){J?ee(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(J){se!==J&&!U&&(s.depthMask(J),se=J)},setFunc:function(J){if(fe&&(J=Qx[J]),Se!==J){switch(J){case To:s.depthFunc(s.NEVER);break;case Ao:s.depthFunc(s.ALWAYS);break;case Ro:s.depthFunc(s.LESS);break;case Ms:s.depthFunc(s.LEQUAL);break;case Co:s.depthFunc(s.EQUAL);break;case Po:s.depthFunc(s.GEQUAL);break;case Lo:s.depthFunc(s.GREATER);break;case Io:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=J}},setLocked:function(J){U=J},setClear:function(J){ne!==J&&(fe&&(J=1-J),s.clearDepth(J),ne=J)},reset:function(){U=!1,se=null,Se=null,ne=null,fe=!1}}}function i(){let U=!1,fe=null,se=null,Se=null,ne=null,J=null,re=null,I=null,q=null;return{setTest:function(j){U||(j?ee(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(j){fe!==j&&!U&&(s.stencilMask(j),fe=j)},setFunc:function(j,ve,Ce){(se!==j||Se!==ve||ne!==Ce)&&(s.stencilFunc(j,ve,Ce),se=j,Se=ve,ne=Ce)},setOp:function(j,ve,Ce){(J!==j||re!==ve||I!==Ce)&&(s.stencilOp(j,ve,Ce),J=j,re=ve,I=Ce)},setLocked:function(j){U=j},setClear:function(j){q!==j&&(s.clearStencil(j),q=j)},reset:function(){U=!1,fe=null,se=null,Se=null,ne=null,J=null,re=null,I=null,q=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,E=null,b=null,w=null,A=null,R=new ze(0,0,0),D=0,v=!1,M=null,L=null,z=null,O=null,V=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=G>=2);let de=null,oe={};const ye=s.getParameter(s.SCISSOR_BOX),ke=s.getParameter(s.VIEWPORT),We=new Ct().fromArray(ye),mt=new Ct().fromArray(ke);function ct(U,fe,se,Se){const ne=new Uint8Array(4),J=s.createTexture();s.bindTexture(U,J),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let re=0;re<se;re++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(fe,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(fe+re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return J}const K={};K[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(Ms),Le(!1),vt(uc),ee(s.CULL_FACE),it(Qn);function ee(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function xe(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function Ve(U,fe){return h[U]!==fe?(s.bindFramebuffer(U,fe),h[U]=fe,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=fe),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=fe),!0):!1}function Me(U,fe){let se=f,Se=!1;if(U){se=d.get(fe),se===void 0&&(se=[],d.set(fe,se));const ne=U.textures;if(se.length!==ne.length||se[0]!==s.COLOR_ATTACHMENT0){for(let J=0,re=ne.length;J<re;J++)se[J]=s.COLOR_ATTACHMENT0+J;se.length=ne.length,Se=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,Se=!0);Se&&s.drawBuffers(se)}function je(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const bt={[Li]:s.FUNC_ADD,[bd]:s.FUNC_SUBTRACT,[Ed]:s.FUNC_REVERSE_SUBTRACT};bt[wd]=s.MIN,bt[Td]=s.MAX;const Xe={[Ad]:s.ZERO,[Rd]:s.ONE,[Cd]:s.SRC_COLOR,[Eo]:s.SRC_ALPHA,[Nd]:s.SRC_ALPHA_SATURATE,[Dd]:s.DST_COLOR,[Ld]:s.DST_ALPHA,[Pd]:s.ONE_MINUS_SRC_COLOR,[wo]:s.ONE_MINUS_SRC_ALPHA,[Ud]:s.ONE_MINUS_DST_COLOR,[Id]:s.ONE_MINUS_DST_ALPHA,[Fd]:s.CONSTANT_COLOR,[Od]:s.ONE_MINUS_CONSTANT_COLOR,[zd]:s.CONSTANT_ALPHA,[Bd]:s.ONE_MINUS_CONSTANT_ALPHA};function it(U,fe,se,Se,ne,J,re,I,q,j){if(U===Qn){_===!0&&(xe(s.BLEND),_=!1);return}if(_===!1&&(ee(s.BLEND),_=!0),U!==Sd){if(U!==m||j!==v){if((p!==Li||b!==Li)&&(s.blendEquation(s.FUNC_ADD),p=Li,b=Li),j)switch(U){case xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hc:s.blendFunc(s.ONE,s.ONE);break;case dc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:st("WebGLState: Invalid blending: ",U);break}else switch(U){case xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dc:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",U);break}y=null,E=null,w=null,A=null,R.set(0,0,0),D=0,m=U,v=j}return}ne=ne||fe,J=J||se,re=re||Se,(fe!==p||ne!==b)&&(s.blendEquationSeparate(bt[fe],bt[ne]),p=fe,b=ne),(se!==y||Se!==E||J!==w||re!==A)&&(s.blendFuncSeparate(Xe[se],Xe[Se],Xe[J],Xe[re]),y=se,E=Se,w=J,A=re),(I.equals(R)===!1||q!==D)&&(s.blendColor(I.r,I.g,I.b,q),R.copy(I),D=q),m=U,v=!1}function tt(U,fe){U.side===bn?xe(s.CULL_FACE):ee(s.CULL_FACE);let se=U.side===nn;fe&&(se=!se),Le(se),U.blending===xs&&U.transparent===!1?it(Qn):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Se=U.stencilWrite;o.setTest(Se),Se&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),wt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(U){M!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),M=U)}function vt(U){U!==yd?(ee(s.CULL_FACE),U!==L&&(U===uc?s.cullFace(s.BACK):U===Md?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),L=U}function P(U){U!==z&&(B&&s.lineWidth(U),z=U)}function wt(U,fe,se){U?(ee(s.POLYGON_OFFSET_FILL),(O!==fe||V!==se)&&(s.polygonOffset(fe,se),O=fe,V=se)):xe(s.POLYGON_OFFSET_FILL)}function at(U){U?ee(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function ut(U){U===void 0&&(U=s.TEXTURE0+Y-1),de!==U&&(s.activeTexture(U),de=U)}function Ae(U,fe,se){se===void 0&&(de===null?se=s.TEXTURE0+Y-1:se=de);let Se=oe[se];Se===void 0&&(Se={type:void 0,texture:void 0},oe[se]=Se),(Se.type!==U||Se.texture!==fe)&&(de!==se&&(s.activeTexture(se),de=se),s.bindTexture(U,fe||K[U]),Se.type=U,Se.texture=fe)}function T(){const U=oe[de];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function Z(){try{s.texSubImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function $(){try{s.texSubImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function ie(){try{s.texStorage2D(...arguments)}catch(U){st("WebGLState:",U)}}function pe(){try{s.texStorage3D(...arguments)}catch(U){st("WebGLState:",U)}}function Ue(){try{s.texImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function te(){try{s.texImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function ce(U){We.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),We.copy(U))}function we(U){mt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),mt.copy(U))}function Re(U,fe){let se=c.get(fe);se===void 0&&(se=new WeakMap,c.set(fe,se));let Se=se.get(U);Se===void 0&&(Se=s.getUniformBlockIndex(fe,U.name),se.set(U,Se))}function le(U,fe){const Se=c.get(fe).get(U);l.get(fe)!==Se&&(s.uniformBlockBinding(fe,Se,U.__bindingPointIndex),l.set(fe,Se))}function qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},de=null,oe={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,E=null,b=null,w=null,A=null,R=new ze(0,0,0),D=0,v=!1,M=null,L=null,z=null,O=null,V=null,We.set(0,0,s.canvas.width,s.canvas.height),mt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:Ve,drawBuffers:Me,useProgram:je,setBlending:it,setMaterial:tt,setFlipSided:Le,setCullFace:vt,setLineWidth:P,setPolygonOffset:wt,setScissorTest:at,activeTexture:ut,bindTexture:Ae,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Ue,texImage3D:te,updateUBOMapping:Re,uniformBlockBinding:le,texStorage2D:ie,texStorage3D:pe,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:X,compressedTexSubImage3D:_e,scissor:ce,viewport:we,reset:qe}}function t_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):fa("canvas")}function _(T,x,N){let Z=1;const $=Ae(T);if(($.width>N||$.height>N)&&(Z=N/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(Z*$.width),_e=Math.floor(Z*$.height);h===void 0&&(h=g(X,_e));const ie=x?g(X,_e):h;return ie.width=X,ie.height=_e,ie.getContext("2d").drawImage(T,0,0,X,_e),He("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+_e+")."),ie}else return"data"in T&&He("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(T,x,N,Z,$=!1){if(T!==null){if(s[T]!==void 0)return s[T];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===s.RED&&(N===s.FLOAT&&(X=s.R32F),N===s.HALF_FLOAT&&(X=s.R16F),N===s.UNSIGNED_BYTE&&(X=s.R8)),x===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.R8UI),N===s.UNSIGNED_SHORT&&(X=s.R16UI),N===s.UNSIGNED_INT&&(X=s.R32UI),N===s.BYTE&&(X=s.R8I),N===s.SHORT&&(X=s.R16I),N===s.INT&&(X=s.R32I)),x===s.RG&&(N===s.FLOAT&&(X=s.RG32F),N===s.HALF_FLOAT&&(X=s.RG16F),N===s.UNSIGNED_BYTE&&(X=s.RG8)),x===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RG8UI),N===s.UNSIGNED_SHORT&&(X=s.RG16UI),N===s.UNSIGNED_INT&&(X=s.RG32UI),N===s.BYTE&&(X=s.RG8I),N===s.SHORT&&(X=s.RG16I),N===s.INT&&(X=s.RG32I)),x===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RGB8UI),N===s.UNSIGNED_SHORT&&(X=s.RGB16UI),N===s.UNSIGNED_INT&&(X=s.RGB32UI),N===s.BYTE&&(X=s.RGB8I),N===s.SHORT&&(X=s.RGB16I),N===s.INT&&(X=s.RGB32I)),x===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),N===s.UNSIGNED_INT&&(X=s.RGBA32UI),N===s.BYTE&&(X=s.RGBA8I),N===s.SHORT&&(X=s.RGBA16I),N===s.INT&&(X=s.RGBA32I)),x===s.RGB&&(N===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),x===s.RGBA){const _e=$?ha:rt.getTransfer(Z);N===s.FLOAT&&(X=s.RGBA32F),N===s.HALF_FLOAT&&(X=s.RGBA16F),N===s.UNSIGNED_BYTE&&(X=_e===pt?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(T,x){let N;return T?x===null||x===Wn||x===nr?N=s.DEPTH24_STENCIL8:x===In?N=s.DEPTH32F_STENCIL8:x===tr&&(N=s.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Wn||x===nr?N=s.DEPTH_COMPONENT24:x===In?N=s.DEPTH_COMPONENT32F:x===tr&&(N=s.DEPTH_COMPONENT16),N}function w(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==Zt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),D(x),x.isVideoTexture&&u.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),M(x)}function D(T){const x=n.get(T);if(x.__webglInit===void 0)return;const N=T.source,Z=d.get(N);if(Z){const $=Z[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(T),Object.keys(Z).length===0&&d.delete(N)}n.remove(T)}function v(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const N=T.source,Z=d.get(N);delete Z[x.__cacheKey],a.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let $=0;$<x.__webglFramebuffer[Z].length;$++)s.deleteFramebuffer(x.__webglFramebuffer[Z][$]);else s.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[Z]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=T.textures;for(let Z=0,$=N.length;Z<$;Z++){const X=n.get(N[Z]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[Z])}n.remove(T)}let L=0;function z(){L=0}function O(){const T=L;return T>=i.maxTextures&&He("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),L+=1,T}function V(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Y(T,x){const N=n.get(T);if(T.isVideoTexture&&at(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const Z=T.image;if(Z===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{K(N,T,x);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+x)}function B(T,x){const N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){K(N,T,x);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+x)}function G(T,x){const N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){K(N,T,x);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+x)}function Q(T,x){const N=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){ee(N,T,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+x)}const de={[ua]:s.REPEAT,[kn]:s.CLAMP_TO_EDGE,[No]:s.MIRRORED_REPEAT},oe={[Ut]:s.NEAREST,[Vd]:s.NEAREST_MIPMAP_NEAREST,[_r]:s.NEAREST_MIPMAP_LINEAR,[Zt]:s.LINEAR,[La]:s.LINEAR_MIPMAP_NEAREST,[Ni]:s.LINEAR_MIPMAP_LINEAR},ye={[Xd]:s.NEVER,[Kd]:s.ALWAYS,[qd]:s.LESS,[Ul]:s.LEQUAL,[Yd]:s.EQUAL,[Nl]:s.GEQUAL,[$d]:s.GREATER,[Zd]:s.NOTEQUAL};function ke(T,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Zt||x.magFilter===La||x.magFilter===_r||x.magFilter===Ni||x.minFilter===Zt||x.minFilter===La||x.minFilter===_r||x.minFilter===Ni)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,de[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,de[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,de[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,oe[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,oe[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==_r&&x.minFilter!==Ni||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function We(T,x){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const Z=x.source;let $=d.get(Z);$===void 0&&($={},d.set(Z,$));const X=V(x);if(X!==T.__cacheKey){$[X]===void 0&&($[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[X].usedTimes++;const _e=$[T.__cacheKey];_e!==void 0&&($[T.__cacheKey].usedTimes--,_e.usedTimes===0&&v(x)),T.__cacheKey=X,T.__webglTexture=$[X].texture}return N}function mt(T,x,N){return Math.floor(Math.floor(T/N)/x)}function ct(T,x,N,Z){const X=T.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,N,Z,x.data);else{X.sort((te,ce)=>te.start-ce.start);let _e=0;for(let te=1;te<X.length;te++){const ce=X[_e],we=X[te],Re=ce.start+ce.count,le=mt(we.start,x.width,4),qe=mt(ce.start,x.width,4);we.start<=Re+1&&le===qe&&mt(we.start+we.count-1,x.width,4)===le?ce.count=Math.max(ce.count,we.start+we.count-ce.start):(++_e,X[_e]=we)}X.length=_e+1;const ie=s.getParameter(s.UNPACK_ROW_LENGTH),pe=s.getParameter(s.UNPACK_SKIP_PIXELS),Ue=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let te=0,ce=X.length;te<ce;te++){const we=X[te],Re=Math.floor(we.start/4),le=Math.ceil(we.count/4),qe=Re%x.width,U=Math.floor(Re/x.width),fe=le,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,qe,U,fe,se,N,Z,x.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function K(T,x,N){let Z=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=s.TEXTURE_3D);const $=We(T,x),X=x.source;t.bindTexture(Z,T.__webglTexture,s.TEXTURE0+N);const _e=n.get(X);if(X.version!==_e.__version||$===!0){t.activeTexture(s.TEXTURE0+N);const ie=rt.getPrimaries(rt.workingColorSpace),pe=x.colorSpace===pi?null:rt.getPrimaries(x.colorSpace),Ue=x.colorSpace===pi||ie===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let te=_(x.image,!1,i.maxTextureSize);te=ut(x,te);const ce=r.convert(x.format,x.colorSpace),we=r.convert(x.type);let Re=E(x.internalFormat,ce,we,x.colorSpace,x.isVideoTexture);ke(Z,x);let le;const qe=x.mipmaps,U=x.isVideoTexture!==!0,fe=_e.__version===void 0||$===!0,se=X.dataReady,Se=w(x,te);if(x.isDepthTexture)Re=b(x.format===Fi,x.type),fe&&(U?t.texStorage2D(s.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Re,te.width,te.height,0,ce,we,null));else if(x.isDataTexture)if(qe.length>0){U&&fe&&t.texStorage2D(s.TEXTURE_2D,Se,Re,qe[0].width,qe[0].height);for(let ne=0,J=qe.length;ne<J;ne++)le=qe[ne],U?se&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,le.width,le.height,ce,we,le.data):t.texImage2D(s.TEXTURE_2D,ne,Re,le.width,le.height,0,ce,we,le.data);x.generateMipmaps=!1}else U?(fe&&t.texStorage2D(s.TEXTURE_2D,Se,Re,te.width,te.height),se&&ct(x,te,ce,we)):t.texImage2D(s.TEXTURE_2D,0,Re,te.width,te.height,0,ce,we,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,Re,qe[0].width,qe[0].height,te.depth);for(let ne=0,J=qe.length;ne<J;ne++)if(le=qe[ne],x.format!==Tn)if(ce!==null)if(U){if(se)if(x.layerUpdates.size>0){const re=qc(le.width,le.height,x.format,x.type);for(const I of x.layerUpdates){const q=le.data.subarray(I*re/le.data.BYTES_PER_ELEMENT,(I+1)*re/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,I,le.width,le.height,1,ce,q)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,te.depth,ce,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Re,le.width,le.height,te.depth,0,le.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,te.depth,ce,we,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Re,le.width,le.height,te.depth,0,ce,we,le.data)}else{U&&fe&&t.texStorage2D(s.TEXTURE_2D,Se,Re,qe[0].width,qe[0].height);for(let ne=0,J=qe.length;ne<J;ne++)le=qe[ne],x.format!==Tn?ce!==null?U?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Re,le.width,le.height,0,le.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?se&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,le.width,le.height,ce,we,le.data):t.texImage2D(s.TEXTURE_2D,ne,Re,le.width,le.height,0,ce,we,le.data)}else if(x.isDataArrayTexture)if(U){if(fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,Re,te.width,te.height,te.depth),se)if(x.layerUpdates.size>0){const ne=qc(te.width,te.height,x.format,x.type);for(const J of x.layerUpdates){const re=te.data.subarray(J*ne/te.data.BYTES_PER_ELEMENT,(J+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,ce,we,re)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,we,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,ce,we,te.data);else if(x.isData3DTexture)U?(fe&&t.texStorage3D(s.TEXTURE_3D,Se,Re,te.width,te.height,te.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,we,te.data)):t.texImage3D(s.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,ce,we,te.data);else if(x.isFramebufferTexture){if(fe)if(U)t.texStorage2D(s.TEXTURE_2D,Se,Re,te.width,te.height);else{let ne=te.width,J=te.height;for(let re=0;re<Se;re++)t.texImage2D(s.TEXTURE_2D,re,Re,ne,J,0,ce,we,null),ne>>=1,J>>=1}}else if(qe.length>0){if(U&&fe){const ne=Ae(qe[0]);t.texStorage2D(s.TEXTURE_2D,Se,Re,ne.width,ne.height)}for(let ne=0,J=qe.length;ne<J;ne++)le=qe[ne],U?se&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ce,we,le):t.texImage2D(s.TEXTURE_2D,ne,Re,ce,we,le);x.generateMipmaps=!1}else if(U){if(fe){const ne=Ae(te);t.texStorage2D(s.TEXTURE_2D,Se,Re,ne.width,ne.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,we,te)}else t.texImage2D(s.TEXTURE_2D,0,Re,ce,we,te);m(x)&&p(Z),_e.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ee(T,x,N){if(x.image.length!==6)return;const Z=We(T,x),$=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+N);const X=n.get($);if($.version!==X.__version||Z===!0){t.activeTexture(s.TEXTURE0+N);const _e=rt.getPrimaries(rt.workingColorSpace),ie=x.colorSpace===pi?null:rt.getPrimaries(x.colorSpace),pe=x.colorSpace===pi||_e===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let J=0;J<6;J++)!Ue&&!te?ce[J]=_(x.image[J],!0,i.maxCubemapSize):ce[J]=te?x.image[J].image:x.image[J],ce[J]=ut(x,ce[J]);const we=ce[0],Re=r.convert(x.format,x.colorSpace),le=r.convert(x.type),qe=E(x.internalFormat,Re,le,x.colorSpace),U=x.isVideoTexture!==!0,fe=X.__version===void 0||Z===!0,se=$.dataReady;let Se=w(x,we);ke(s.TEXTURE_CUBE_MAP,x);let ne;if(Ue){U&&fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,qe,we.width,we.height);for(let J=0;J<6;J++){ne=ce[J].mipmaps;for(let re=0;re<ne.length;re++){const I=ne[re];x.format!==Tn?Re!==null?U?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,0,0,I.width,I.height,Re,I.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,qe,I.width,I.height,0,I.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,0,0,I.width,I.height,Re,le,I.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,qe,I.width,I.height,0,Re,le,I.data)}}}else{if(ne=x.mipmaps,U&&fe){ne.length>0&&Se++;const J=Ae(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,qe,J.width,J.height)}for(let J=0;J<6;J++)if(te){U?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ce[J].width,ce[J].height,Re,le,ce[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,ce[J].width,ce[J].height,0,Re,le,ce[J].data);for(let re=0;re<ne.length;re++){const q=ne[re].image[J].image;U?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,0,0,q.width,q.height,Re,le,q.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,qe,q.width,q.height,0,Re,le,q.data)}}else{U?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,le,ce[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Re,le,ce[J]);for(let re=0;re<ne.length;re++){const I=ne[re];U?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,0,0,Re,le,I.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,qe,Re,le,I.image[J])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),X.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function xe(T,x,N,Z,$,X){const _e=r.convert(N.format,N.colorSpace),ie=r.convert(N.type),pe=E(N.internalFormat,_e,ie,N.colorSpace),Ue=n.get(x),te=n.get(N);if(te.__renderTarget=x,!Ue.__hasExternalTextures){const ce=Math.max(1,x.width>>X),we=Math.max(1,x.height>>X);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,X,pe,ce,we,x.depth,0,_e,ie,null):t.texImage2D($,X,pe,ce,we,0,_e,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,te.__webglTexture,0,P(x)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,te.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(T,x,N){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const Z=x.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,X=b(x.stencilBuffer,$),_e=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;wt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(x),X,x.width,x.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(x),X,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,X,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,T)}else{const Z=x.textures;for(let $=0;$<Z.length;$++){const X=Z[$],_e=r.convert(X.format,X.colorSpace),ie=r.convert(X.type),pe=E(X.internalFormat,_e,ie,X.colorSpace);wt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(x),pe,x.width,x.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(x),pe,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,pe,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(T,x,N){const Z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),ke(s.TEXTURE_CUBE_MAP,x.depthTexture);const Ue=r.convert(x.depthTexture.format),te=r.convert(x.depthTexture.type);let ce;x.depthTexture.format===ii?ce=s.DEPTH_COMPONENT24:x.depthTexture.format===Fi&&(ce=s.DEPTH24_STENCIL8);for(let we=0;we<6;we++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ce,x.width,x.height,0,Ue,te,null)}}else Y(x.depthTexture,0);const X=$.__webglTexture,_e=P(x),ie=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+N:s.TEXTURE_2D,pe=x.depthTexture.format===Fi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===ii)wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ie,X,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ie,X,0);else if(x.depthTexture.format===Fi)wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ie,X,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ie,X,0);else throw new Error("Unknown depthTexture format")}function je(T){const x=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=Z}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let Z=0;Z<6;Z++)Me(x.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?Me(x.__webglFramebuffer[0],T,0):Me(x.__webglFramebuffer,T,0)}else if(N){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=s.createRenderbuffer(),Ve(x.__webglDepthbuffer[Z],T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,X)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ve(x.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(T,x,N){const Z=n.get(T);x!==void 0&&xe(Z.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&je(T)}function Xe(T){const x=T.texture,N=n.get(T),Z=n.get(x);T.addEventListener("dispose",R);const $=T.textures,X=T.isWebGLCubeRenderTarget===!0,_e=$.length>1;if(_e||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=x.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ie]=[];for(let pe=0;pe<x.mipmaps.length;pe++)N.__webglFramebuffer[ie][pe]=s.createFramebuffer()}else N.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)N.__webglFramebuffer[ie]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(_e)for(let ie=0,pe=$.length;ie<pe;ie++){const Ue=n.get($[ie]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&wt(T)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ie=0;ie<$.length;ie++){const pe=$[ie];N.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ie]);const Ue=r.convert(pe.format,pe.colorSpace),te=r.convert(pe.type),ce=E(pe.internalFormat,Ue,te,pe.colorSpace,T.isXRRenderTarget===!0),we=P(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ce,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,N.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),Ve(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ke(s.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)xe(N.__webglFramebuffer[ie][pe],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,pe);else xe(N.__webglFramebuffer[ie],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(x)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ie=0,pe=$.length;ie<pe;ie++){const Ue=$[ie],te=n.get(Ue);let ce=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),ke(ce,Ue),xe(N.__webglFramebuffer,T,Ue,s.COLOR_ATTACHMENT0+ie,ce,0),m(Ue)&&p(ce)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,Z.__webglTexture),ke(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)xe(N.__webglFramebuffer[pe],T,x,s.COLOR_ATTACHMENT0,ie,pe);else xe(N.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ie,0);m(x)&&p(ie),t.unbindTexture()}T.depthBuffer&&je(T)}function it(T){const x=T.textures;for(let N=0,Z=x.length;N<Z;N++){const $=x[N];if(m($)){const X=y(T),_e=n.get($).__webglTexture;t.bindTexture(X,_e),p(X),t.unbindTexture()}}}const tt=[],Le=[];function vt(T){if(T.samples>0){if(wt(T)===!1){const x=T.textures,N=T.width,Z=T.height;let $=s.COLOR_BUFFER_BIT;const X=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(T),ie=x.length>1;if(ie)for(let Ue=0;Ue<x.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const pe=T.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ue]);const te=n.get(x[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,N,Z,0,0,N,Z,$,s.NEAREST),l===!0&&(tt.length=0,Le.length=0,tt.push(s.COLOR_ATTACHMENT0+Ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(tt.push(X),Le.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let Ue=0;Ue<x.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ue]);const te=n.get(x[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function P(T){return Math.min(i.maxSamples,T.samples)}function wt(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function at(T){const x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function ut(T,x){const N=T.colorSpace,Z=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Es&&N!==pi&&(rt.getTransfer(N)===pt?(Z!==Tn||$!==mn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",N)),x}function Ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=bt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function n_(s,e){function t(n,i=pi){let r;const a=rt.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===Rl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===uh)return s.BYTE;if(n===hh)return s.SHORT;if(n===tr)return s.UNSIGNED_SHORT;if(n===Al)return s.INT;if(n===Wn)return s.UNSIGNED_INT;if(n===In)return s.FLOAT;if(n===ni)return s.HALF_FLOAT;if(n===ph)return s.ALPHA;if(n===mh)return s.RGB;if(n===Tn)return s.RGBA;if(n===ii)return s.DEPTH_COMPONENT;if(n===Fi)return s.DEPTH_STENCIL;if(n===Pl)return s.RED;if(n===Ll)return s.RED_INTEGER;if(n===bs)return s.RG;if(n===Il)return s.RG_INTEGER;if(n===Dl)return s.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===aa)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Oo||n===zo||n===Bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Go||n===Vo||n===Ho||n===Wo||n===Xo||n===qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Go)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ho)return r.COMPRESSED_R11_EAC;if(n===Wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xo)return r.COMPRESSED_RG11_EAC;if(n===qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yo||n===$o||n===Zo||n===Ko||n===Jo||n===jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===ll||n===cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ol)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===hl||n===dl||n===fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class r_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ch(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ln({vertexShader:i_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a_ extends Rs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new r_,p={},y=t.getContextAttributes();let E=null,b=null;const w=[],A=[],R=new be;let D=null;const v=new Sn;v.viewport=new Ct;const M=new Sn;M.viewport=new Ct;const L=[v,M],z=new gp;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=w[K];return ee===void 0&&(ee=new eo,w[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=w[K];return ee===void 0&&(ee=new eo,w[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=w[K];return ee===void 0&&(ee=new eo,w[K]=ee),ee.getHandSpace()};function Y(K){const ee=A.indexOf(K.inputSource);if(ee===-1)return;const xe=w[ee];xe!==void 0&&(xe.update(K.inputSource,K.frame,c||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",G);for(let K=0;K<w.length;K++){const ee=A[K];ee!==null&&(A[K]=null,w[K].disconnect(ee))}O=null,V=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(E),f=null,d=null,h=null,i=null,b=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",B),i.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ve=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?Fi:ii,Ve=y.stencil?nr:Wn);const je={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Hn(d.textureWidth,d.textureHeight,{format:Tn,type:mn,depthTexture:new sr(d.textureWidth,d.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Hn(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let ee=0;ee<K.removed.length;ee++){const xe=K.removed[ee],Ve=A.indexOf(xe);Ve>=0&&(A[Ve]=null,w[Ve].disconnect(xe))}for(let ee=0;ee<K.added.length;ee++){const xe=K.added[ee];let Ve=A.indexOf(xe);if(Ve===-1){for(let je=0;je<w.length;je++)if(je>=A.length){A.push(xe),Ve=je;break}else if(A[je]===null){A[je]=xe,Ve=je;break}if(Ve===-1)break}const Me=w[Ve];Me&&Me.connect(xe)}}const Q=new C,de=new C;function oe(K,ee,xe){Q.setFromMatrixPosition(ee.matrixWorld),de.setFromMatrixPosition(xe.matrixWorld);const Ve=Q.distanceTo(de),Me=ee.projectionMatrix.elements,je=xe.projectionMatrix.elements,bt=Me[14]/(Me[10]-1),Xe=Me[14]/(Me[10]+1),it=(Me[9]+1)/Me[5],tt=(Me[9]-1)/Me[5],Le=(Me[8]-1)/Me[0],vt=(je[8]+1)/je[0],P=bt*Le,wt=bt*vt,at=Ve/(-Le+vt),ut=at*-Le;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ut),K.translateZ(at),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Me[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ae=bt+at,T=Xe+at,x=P-ut,N=wt+(Ve-ut),Z=it*Xe/T*Ae,$=tt*Xe/T*Ae;K.projectionMatrix.makePerspective(x,N,Z,$,Ae,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ye(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ee=K.near,xe=K.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),z.near=M.near=v.near=ee,z.far=M.far=v.far=xe,(O!==z.near||V!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,V=z.far),z.layers.mask=K.layers.mask|6,v.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const Ve=K.parent,Me=z.cameras;ye(z,Ve);for(let je=0;je<Me.length;je++)ye(Me[je],Ve);Me.length===2?oe(z,v,M):z.projectionMatrix.copy(v.projectionMatrix),ke(K,z,Ve)};function ke(K,ee,xe){xe===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ml*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(K){return p[K]};let We=null;function mt(K,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ve=!1;xe.length!==z.cameras.length&&(z.cameras.length=0,Ve=!0);for(let Xe=0;Xe<xe.length;Xe++){const it=xe[Xe];let tt=null;if(f!==null)tt=f.getViewport(it);else{const vt=h.getViewSubImage(d,it);tt=vt.viewport,Xe===0&&(e.setRenderTargetTextures(b,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(b))}let Le=L[Xe];Le===void 0&&(Le=new Sn,Le.layers.enable(Xe),Le.viewport=new Ct,L[Xe]=Le),Le.matrix.fromArray(it.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(it.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(tt.x,tt.y,tt.width,tt.height),Xe===0&&(z.matrix.copy(Le.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ve===!0&&z.cameras.push(Le)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Xe=h.getDepthInformation(xe[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,i.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Xe=0;Xe<xe.length;Xe++){const it=xe[Xe].camera;if(it){let tt=p[it];tt||(tt=new Ch,p[it]=tt);const Le=h.getCameraImage(it);tt.sourceTexture=Le}}}}for(let xe=0;xe<w.length;xe++){const Ve=A[xe],Me=w[xe];Ve!==null&&Me!==void 0&&Me.update(Ve,ee,c||a)}We&&We(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ct=new Bh;ct.setAnimationLoop(mt),this.setAnimationLoop=function(K){We=K},this.dispose=function(){}}}const Ri=new gn,o_=new nt;function l_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,E,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),E=y.envMap,b=y.envMapRotation;E&&(m.envMap.value=E,Ri.copy(b),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(Ri)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function c_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const b=E.program;n.uniformBlockBinding(y,b)}function c(y,E){let b=i[y.id];b===void 0&&(g(y),b=u(y),i[y.id]=b,y.addEventListener("dispose",m));const w=E.program;n.updateUBOMapping(y,w);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function u(y){const E=h();y.__bindingPointIndex=E;const b=s.createBuffer(),w=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,b),b}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=i[y.id],b=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,R=b.length;A<R;A++){const D=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,M=D.length;v<M;v++){const L=D[v];if(f(L,A,v,w)===!0){const z=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let Y=0;Y<O.length;Y++){const B=O[Y],G=_(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,z+V,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,V),V+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,E,b,w){const A=y.value,R=E+"_"+b;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const D=w[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(y){const E=y.uniforms;let b=0;const w=16;for(let R=0,D=E.length;R<D;R++){const v=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,L=v.length;M<L;M++){const z=v[M],O=Array.isArray(z.value)?z.value:[z.value];for(let V=0,Y=O.length;V<Y;V++){const B=O[V],G=_(B),Q=b%w,de=Q%G.boundary,oe=Q+de;b+=de,oe!==0&&w-oe<G.storage&&(b+=w-oe),z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=G.storage}}}const A=b%w;return A>0&&(b+=w-A),y.__size=b,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}const u_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function h_(){return On===null&&(On=new Bl(u_,16,16,bs,ni),On.name="DFG_LUT",On.minFilter=Zt,On.magFilter=Zt,On.wrapS=kn,On.wrapT=kn,On.generateMipmaps=!1,On.needsUpdate=!0),On}class d_{constructor(e={}){const{canvas:t=Jd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([Dl,Il,Ll]),p=new Set([mn,Wn,tr,nr,Rl,Cl]),y=new Uint32Array(4),E=new Int32Array(4);let b=null,w=null;const A=[],R=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let M=!1;this._outputColorSpace=Yt;let L=0,z=0,O=null,V=-1,Y=null;const B=new Ct,G=new Ct;let Q=null;const de=new ze(0);let oe=0,ye=t.width,ke=t.height,We=1,mt=null,ct=null;const K=new Ct(0,0,ye,ke),ee=new Ct(0,0,ye,ke);let xe=!1;const Ve=new kl;let Me=!1,je=!1;const bt=new nt,Xe=new C,it=new Ct,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function vt(){return O===null?We:1}let P=n;function wt(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",I,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",j,!1),P===null){const F="webgl2";if(P=wt(F,S),P===null)throw wt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw st("WebGLRenderer: "+S.message),S}let at,ut,Ae,T,x,N,Z,$,X,_e,ie,pe,Ue,te,ce,we,Re,le,qe,U,fe,se,Se,ne;function J(){at=new hg(P),at.init(),se=new n_(P,at),ut=new ng(P,at,e,se),Ae=new e_(P,at),ut.reversedDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),T=new pg(P),x=new Bx,N=new t_(P,at,Ae,x,ut,se,T),Z=new sg(v),$=new ug(v),X=new _p(P),Se=new eg(P,X),_e=new dg(P,X,T,Se),ie=new gg(P,_e,X,T),qe=new mg(P,ut,N),we=new ig(x),pe=new zx(v,Z,$,at,ut,Se,we),Ue=new l_(v,x),te=new Gx,ce=new Yx(at),le=new Q0(v,Z,$,Ae,ie,g,l),Re=new jx(v,ie,ut),ne=new c_(P,T,ut,Ae),U=new tg(P,at,T),fe=new fg(P,at,T),T.programs=pe.programs,v.capabilities=ut,v.extensions=at,v.properties=x,v.renderLists=te,v.shadowMap=Re,v.state=Ae,v.info=T}J(),_!==mn&&(D=new _g(_,t.width,t.height,i,r));const re=new a_(v,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=at.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=at.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(S){S!==void 0&&(We=S,this.setSize(ye,ke,!1))},this.getSize=function(S){return S.set(ye,ke)},this.setSize=function(S,F,W=!0){if(re.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=S,ke=F,t.width=Math.floor(S*We),t.height=Math.floor(F*We),W===!0&&(t.style.width=S+"px",t.style.height=F+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(ye*We,ke*We).floor()},this.setDrawingBufferSize=function(S,F,W){ye=S,ke=F,We=W,t.width=Math.floor(S*W),t.height=Math.floor(F*W),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(B)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,F,W,H){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,F,W,H),Ae.viewport(B.copy(K).multiplyScalar(We).round())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,F,W,H){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,F,W,H),Ae.scissor(G.copy(ee).multiplyScalar(We).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(S){Ae.setScissorTest(xe=S)},this.setOpaqueSort=function(S){mt=S},this.setTransparentSort=function(S){ct=S},this.getClearColor=function(S){return S.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,W=!0){let H=0;if(S){let k=!1;if(O!==null){const ae=O.texture.format;k=m.has(ae)}if(k){const ae=O.texture.type,Ee=p.has(ae),me=le.getClearColor(),Te=le.getClearAlpha(),De=me.r,Ge=me.g,Fe=me.b;Ee?(y[0]=De,y[1]=Ge,y[2]=Fe,y[3]=Te,P.clearBufferuiv(P.COLOR,0,y)):(E[0]=De,E[1]=Ge,E[2]=Fe,E[3]=Te,P.clearBufferiv(P.COLOR,0,E))}else H|=P.COLOR_BUFFER_BIT}F&&(H|=P.DEPTH_BUFFER_BIT),W&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",j,!1),le.dispose(),te.dispose(),ce.dispose(),x.dispose(),Z.dispose(),$.dispose(),ie.dispose(),Se.dispose(),ne.dispose(),pe.dispose(),re.dispose(),re.removeEventListener("sessionstart",gt),re.removeEventListener("sessionend",Nn),ot.stop()};function I(S){S.preventDefault(),pa("WebGLRenderer: Context Lost."),M=!0}function q(){pa("WebGLRenderer: Context Restored."),M=!1;const S=T.autoReset,F=Re.enabled,W=Re.autoUpdate,H=Re.needsUpdate,k=Re.type;J(),T.autoReset=S,Re.enabled=F,Re.autoUpdate=W,Re.needsUpdate=H,Re.type=k}function j(S){st("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ve(S){const F=S.target;F.removeEventListener("dispose",ve),Ce(F)}function Ce(S){Be(S),x.remove(S)}function Be(S){const F=x.get(S).programs;F!==void 0&&(F.forEach(function(W){pe.releaseProgram(W)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,W,H,k,ae){F===null&&(F=tt);const Ee=k.isMesh&&k.matrixWorld.determinant()<0,me=dr(S,F,W,H,k);Ae.setMaterial(H,Ee);let Te=W.index,De=1;if(H.wireframe===!0){if(Te=_e.getWireframeAttribute(W),Te===void 0)return;De=2}const Ge=W.drawRange,Fe=W.attributes.position;let Qe=Ge.start*De,xt=(Ge.start+Ge.count)*De;ae!==null&&(Qe=Math.max(Qe,ae.start*De),xt=Math.min(xt,(ae.start+ae.count)*De)),Te!==null?(Qe=Math.max(Qe,0),xt=Math.min(xt,Te.count)):Fe!=null&&(Qe=Math.max(Qe,0),xt=Math.min(xt,Fe.count));const At=xt-Qe;if(At<0||At===1/0)return;Se.setup(k,H,me,W,Te);let Rt,yt=U;if(Te!==null&&(Rt=X.get(Te),yt=fe,yt.setIndex(Rt)),k.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*vt()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(k.isLine){let Oe=H.linewidth;Oe===void 0&&(Oe=1),Ae.setLineWidth(Oe*vt()),k.isLineSegments?yt.setMode(P.LINES):k.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else k.isPoints?yt.setMode(P.POINTS):k.isSprite&&yt.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ir("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))yt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Oe=k._multiDrawStarts,ft=k._multiDrawCounts,lt=k._multiDrawCount,un=Te?X.get(Te).bytesPerElement:1,Xi=x.get(H).currentProgram.getUniforms();for(let hn=0;hn<lt;hn++)Xi.setValue(P,"_gl_DrawID",hn),yt.render(Oe[hn]/un,ft[hn])}else if(k.isInstancedMesh)yt.renderInstances(Qe,At,k.count);else if(W.isInstancedBufferGeometry){const Oe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ft=Math.min(W.instanceCount,Oe);yt.renderInstances(Qe,At,ft)}else yt.render(Qe,At)};function ge(S,F,W){S.transparent===!0&&S.side===bn&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,cn(S,F,W),S.side=vi,S.needsUpdate=!0,cn(S,F,W),S.side=bn):cn(S,F,W)}this.compile=function(S,F,W=null){W===null&&(W=S),w=ce.get(W),w.init(F),R.push(w),W.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),S!==W&&S.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights();const H=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ae=k.material;if(ae)if(Array.isArray(ae))for(let Ee=0;Ee<ae.length;Ee++){const me=ae[Ee];ge(me,W,k),H.add(me)}else ge(ae,W,k),H.add(ae)}),w=R.pop(),H},this.compileAsync=function(S,F,W=null){const H=this.compile(S,F,W);return new Promise(k=>{function ae(){if(H.forEach(function(Ee){x.get(Ee).currentProgram.isReady()&&H.delete(Ee)}),H.size===0){k(S);return}setTimeout(ae,10)}at.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ne=null;function ht(S){Ne&&Ne(S)}function gt(){ot.stop()}function Nn(){ot.start()}const ot=new Bh;ot.setAnimationLoop(ht),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(S){Ne=S,re.setAnimationLoop(S),S===null?ot.stop():ot.start()},re.addEventListener("sessionstart",gt),re.addEventListener("sessionend",Nn),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const W=re.enabled===!0&&re.isPresenting===!0,H=D!==null&&(O===null||W)&&D.begin(v,O);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,F,O),w=ce.get(S,R.length),w.init(F),R.push(w),bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ve.setFromProjectionMatrix(bt,Gn,F.reversedDepth),je=this.localClippingEnabled,Me=we.init(this.clippingPlanes,je),b=te.get(S,A.length),b.init(),A.push(b),re.enabled===!0&&re.isPresenting===!0){const Ee=v.xr.getDepthSensingMesh();Ee!==null&&zt(Ee,F,-1/0,v.sortObjects)}zt(S,F,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(mt,ct),Le=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Le&&le.addToRenderList(b,S),this.info.render.frame++,Me===!0&&we.beginShadows();const k=w.state.shadowsArray;if(Re.render(k,S,F),Me===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&D.hasRenderPass())===!1){const Ee=b.opaque,me=b.transmissive;if(w.setupLights(),F.isArrayCamera){const Te=F.cameras;if(me.length>0)for(let De=0,Ge=Te.length;De<Ge;De++){const Fe=Te[De];Fn(Ee,me,S,Fe)}Le&&le.render(S);for(let De=0,Ge=Te.length;De<Ge;De++){const Fe=Te[De];qn(b,S,Fe,Fe.viewport)}}else me.length>0&&Fn(Ee,me,S,F),Le&&le.render(S),qn(b,S,F)}O!==null&&z===0&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),H&&D.end(v),S.isScene===!0&&S.onAfterRender(v,S,F),Se.resetDefaultState(),V=-1,Y=null,R.pop(),R.length>0?(w=R[R.length-1],Me===!0&&we.setGlobalState(v.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function zt(S,F,W,H){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ve.intersectsSprite(S)){H&&it.setFromMatrixPosition(S.matrixWorld).applyMatrix4(bt);const Ee=ie.update(S),me=S.material;me.visible&&b.push(S,Ee,me,W,it.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ve.intersectsObject(S))){const Ee=ie.update(S),me=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),it.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),it.copy(Ee.boundingSphere.center)),it.applyMatrix4(S.matrixWorld).applyMatrix4(bt)),Array.isArray(me)){const Te=Ee.groups;for(let De=0,Ge=Te.length;De<Ge;De++){const Fe=Te[De],Qe=me[Fe.materialIndex];Qe&&Qe.visible&&b.push(S,Ee,Qe,W,it.z,Fe)}}else me.visible&&b.push(S,Ee,me,W,it.z,null)}}const ae=S.children;for(let Ee=0,me=ae.length;Ee<me;Ee++)zt(ae[Ee],F,W,H)}function qn(S,F,W,H){const{opaque:k,transmissive:ae,transparent:Ee}=S;w.setupLightsView(W),Me===!0&&we.setGlobalState(v.clippingPlanes,W),H&&Ae.viewport(B.copy(H)),k.length>0&&An(k,F,W),ae.length>0&&An(ae,F,W),Ee.length>0&&An(Ee,F,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Fn(S,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Qe=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Hn(1,1,{generateMipmaps:!0,type:Qe?ni:mn,minFilter:Ni,samples:ut.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const ae=w.state.transmissionRenderTarget[H.id],Ee=H.viewport||B;ae.setSize(Ee.z*v.transmissionResolutionScale,Ee.w*v.transmissionResolutionScale);const me=v.getRenderTarget(),Te=v.getActiveCubeFace(),De=v.getActiveMipmapLevel();v.setRenderTarget(ae),v.getClearColor(de),oe=v.getClearAlpha(),oe<1&&v.setClearColor(16777215,.5),v.clear(),Le&&le.render(W);const Ge=v.toneMapping;v.toneMapping=Vn;const Fe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Me===!0&&we.setGlobalState(v.clippingPlanes,H),An(S,W,H),N.updateMultisampleRenderTarget(ae),N.updateRenderTargetMipmap(ae),at.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let xt=0,At=F.length;xt<At;xt++){const Rt=F[xt],{object:yt,geometry:Oe,material:ft,group:lt}=Rt;if(ft.side===bn&&yt.layers.test(H.layers)){const un=ft.side;ft.side=nn,ft.needsUpdate=!0,sn(yt,W,H,Oe,ft,lt),ft.side=un,ft.needsUpdate=!0,Qe=!0}}Qe===!0&&(N.updateMultisampleRenderTarget(ae),N.updateRenderTargetMipmap(ae))}v.setRenderTarget(me,Te,De),v.setClearColor(de,oe),Fe!==void 0&&(H.viewport=Fe),v.toneMapping=Ge}function An(S,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ae=S.length;k<ae;k++){const Ee=S[k],{object:me,geometry:Te,group:De}=Ee;let Ge=Ee.material;Ge.allowOverride===!0&&H!==null&&(Ge=H),me.layers.test(W.layers)&&sn(me,F,W,Te,Ge,De)}}function sn(S,F,W,H,k,ae){S.onBeforeRender(v,F,W,H,k,ae),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(v,F,W,H,S,ae),k.transparent===!0&&k.side===bn&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,v.renderBufferDirect(W,F,H,k,S,ae),k.side=vi,k.needsUpdate=!0,v.renderBufferDirect(W,F,H,k,S,ae),k.side=bn):v.renderBufferDirect(W,F,H,k,S,ae),S.onAfterRender(v,F,W,H,k,ae)}function cn(S,F,W){F.isScene!==!0&&(F=tt);const H=x.get(S),k=w.state.lights,ae=w.state.shadowsArray,Ee=k.state.version,me=pe.getParameters(S,k.state,ae,F,W),Te=pe.getProgramCacheKey(me);let De=H.programs;H.environment=S.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(S.isMeshStandardMaterial?$:Z).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,De===void 0&&(S.addEventListener("dispose",ve),De=new Map,H.programs=De);let Ge=De.get(Te);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===Ee)return $e(S,me),Ge}else me.uniforms=pe.getUniforms(S),S.onBeforeCompile(me,v),Ge=pe.acquireProgram(me,Te),De.set(Te,Ge),H.uniforms=me.uniforms;const Fe=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=we.uniform),$e(S,me),H.needsLights=pr(S),H.lightsStateVersion=Ee,H.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMap.value=k.state.directionalShadowMap,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotShadowMap.value=k.state.spotShadowMap,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMap.value=k.state.pointShadowMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function Rn(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=oa.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function $e(S,F){const W=x.get(S);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function dr(S,F,W,H,k){F.isScene!==!0&&(F=tt),N.resetTextureUnits();const ae=F.fog,Ee=H.isMeshStandardMaterial?F.environment:null,me=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Es,Te=(H.isMeshStandardMaterial?$:Z).get(H.envMap||Ee),De=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,xt=!!W.morphAttributes.color;let At=Vn;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(At=v.toneMapping);const Rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=Rt!==void 0?Rt.length:0,Oe=x.get(H),ft=w.state.lights;if(Me===!0&&(je===!0||S!==Y)){const Jt=S===Y&&H.id===V;we.setState(H,S,Jt)}let lt=!1;H.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ft.state.version||Oe.outputColorSpace!==me||k.isBatchedMesh&&Oe.batching===!1||!k.isBatchedMesh&&Oe.batching===!0||k.isBatchedMesh&&Oe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Oe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Oe.instancing===!1||!k.isInstancedMesh&&Oe.instancing===!0||k.isSkinnedMesh&&Oe.skinning===!1||!k.isSkinnedMesh&&Oe.skinning===!0||k.isInstancedMesh&&Oe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Oe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Oe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Oe.instancingMorph===!1&&k.morphTexture!==null||Oe.envMap!==Te||H.fog===!0&&Oe.fog!==ae||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==we.numPlanes||Oe.numIntersection!==we.numIntersection)||Oe.vertexAlphas!==De||Oe.vertexTangents!==Ge||Oe.morphTargets!==Fe||Oe.morphNormals!==Qe||Oe.morphColors!==xt||Oe.toneMapping!==At||Oe.morphTargetsCount!==yt)&&(lt=!0):(lt=!0,Oe.__version=H.version);let un=Oe.currentProgram;lt===!0&&(un=cn(H,F,k));let Xi=!1,hn=!1,Is=!1;const Mt=un.getUniforms(),rn=Oe.uniforms;if(Ae.useProgram(un.program)&&(Xi=!0,hn=!0,Is=!0),H.id!==V&&(V=H.id,hn=!0),Xi||Y!==S){Ae.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Mt.setValue(P,"projectionMatrix",S.projectionMatrix),Mt.setValue(P,"viewMatrix",S.matrixWorldInverse);const an=Mt.map.cameraPosition;an!==void 0&&an.setValue(P,Xe.setFromMatrixPosition(S.matrixWorld)),ut.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,hn=!0,Is=!0)}if(Oe.needsLights&&(ft.state.directionalShadowMap.length>0&&Mt.setValue(P,"directionalShadowMap",ft.state.directionalShadowMap,N),ft.state.spotShadowMap.length>0&&Mt.setValue(P,"spotShadowMap",ft.state.spotShadowMap,N),ft.state.pointShadowMap.length>0&&Mt.setValue(P,"pointShadowMap",ft.state.pointShadowMap,N)),k.isSkinnedMesh){Mt.setOptional(P,k,"bindMatrix"),Mt.setOptional(P,k,"bindMatrixInverse");const Jt=k.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Mt.setValue(P,"boneTexture",Jt.boneTexture,N))}k.isBatchedMesh&&(Mt.setOptional(P,k,"batchingTexture"),Mt.setValue(P,"batchingTexture",k._matricesTexture,N),Mt.setOptional(P,k,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",k._indirectTexture,N),Mt.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",k._colorsTexture,N));const xn=W.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&qe.update(k,W,un),(hn||Oe.receiveShadow!==k.receiveShadow)&&(Oe.receiveShadow=k.receiveShadow,Mt.setValue(P,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(rn.envMap.value=Te,rn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=h_()),hn&&(Mt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&fr(rn,Is),ae&&H.fog===!0&&Ue.refreshFogUniforms(rn,ae),Ue.refreshMaterialUniforms(rn,H,We,ke,w.state.transmissionRenderTarget[S.id]),oa.upload(P,Rn(Oe),rn,N)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(oa.upload(P,Rn(Oe),rn,N),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Mt.setValue(P,"center",k.center),Mt.setValue(P,"modelViewMatrix",k.modelViewMatrix),Mt.setValue(P,"normalMatrix",k.normalMatrix),Mt.setValue(P,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Jt=H.uniformsGroups;for(let an=0,Aa=Jt.length;an<Aa;an++){const Mi=Jt[an];ne.update(Mi,un),ne.bind(Mi,un)}}return un}function fr(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function pr(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,F,W){const H=x.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(S.texture).__webglTexture=F,x.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const W=x.get(S);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Wi=P.createFramebuffer();this.setRenderTarget=function(S,F=0,W=0){O=S,L=F,z=W;let H=null,k=!1,ae=!1;if(S){const me=x.get(S);if(me.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(P.FRAMEBUFFER,me.__webglFramebuffer),B.copy(S.viewport),G.copy(S.scissor),Q=S.scissorTest,Ae.viewport(B),Ae.scissor(G),Ae.setScissorTest(Q),V=-1;return}else if(me.__webglFramebuffer===void 0)N.setupRenderTarget(S);else if(me.__hasExternalTextures)N.rebindTextures(S,x.get(S.texture).__webglTexture,x.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ge=S.depthTexture;if(me.__boundDepthTexture!==Ge){if(Ge!==null&&x.has(Ge)&&(S.width!==Ge.image.width||S.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(S)}}const Te=S.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ae=!0);const De=x.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[F])?H=De[F][W]:H=De[F],k=!0):S.samples>0&&N.useMultisampledRTT(S)===!1?H=x.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[W]:H=De,B.copy(S.viewport),G.copy(S.scissor),Q=S.scissorTest}else B.copy(K).multiplyScalar(We).floor(),G.copy(ee).multiplyScalar(We).floor(),Q=xe;if(W!==0&&(H=Wi),Ae.bindFramebuffer(P.FRAMEBUFFER,H)&&Ae.drawBuffers(S,H),Ae.viewport(B),Ae.scissor(G),Ae.setScissorTest(Q),k){const me=x.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,W)}else if(ae){const me=F;for(let Te=0;Te<S.textures.length;Te++){const De=x.get(S.textures[Te]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Te,De.__webglTexture,W,me)}}else if(S!==null&&W!==0){const me=x.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(S,F,W,H,k,ae,Ee,me=0){if(!(S&&S.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=x.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){Ae.bindFramebuffer(P.FRAMEBUFFER,Te);try{const De=S.textures[me],Ge=De.format,Fe=De.type;if(!ut.textureFormatReadable(Ge)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Fe)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-H&&W>=0&&W<=S.height-k&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me),P.readPixels(F,W,H,k,se.convert(Ge),se.convert(Fe),ae))}finally{const De=O!==null?x.get(O).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(S,F,W,H,k,ae,Ee,me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=x.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te)if(F>=0&&F<=S.width-H&&W>=0&&W<=S.height-k){Ae.bindFramebuffer(P.FRAMEBUFFER,Te);const De=S.textures[me],Ge=De.format,Fe=De.type;if(!ut.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me),P.readPixels(F,W,H,k,se.convert(Ge),se.convert(Fe),0);const xt=O!==null?x.get(O).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,xt);const At=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await jd(P,At,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae),P.deleteBuffer(Qe),P.deleteSync(At),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,W=0){const H=Math.pow(2,-W),k=Math.floor(S.image.width*H),ae=Math.floor(S.image.height*H),Ee=F!==null?F.x:0,me=F!==null?F.y:0;N.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,Ee,me,k,ae),Ae.unbindTexture()};const Ls=P.createFramebuffer(),si=P.createFramebuffer();this.copyTextureToTexture=function(S,F,W=null,H=null,k=0,ae=null){ae===null&&(k!==0?(ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=k,k=0):ae=0);let Ee,me,Te,De,Ge,Fe,Qe,xt,At;const Rt=S.isCompressedTexture?S.mipmaps[ae]:S.image;if(W!==null)Ee=W.max.x-W.min.x,me=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,De=W.min.x,Ge=W.min.y,Fe=W.isBox3?W.min.z:0;else{const xn=Math.pow(2,-k);Ee=Math.floor(Rt.width*xn),me=Math.floor(Rt.height*xn),S.isDataArrayTexture?Te=Rt.depth:S.isData3DTexture?Te=Math.floor(Rt.depth*xn):Te=1,De=0,Ge=0,Fe=0}H!==null?(Qe=H.x,xt=H.y,At=H.z):(Qe=0,xt=0,At=0);const yt=se.convert(F.format),Oe=se.convert(F.type);let ft;F.isData3DTexture?(N.setTexture3D(F,0),ft=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(N.setTexture2DArray(F,0),ft=P.TEXTURE_2D_ARRAY):(N.setTexture2D(F,0),ft=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const lt=P.getParameter(P.UNPACK_ROW_LENGTH),un=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xi=P.getParameter(P.UNPACK_SKIP_PIXELS),hn=P.getParameter(P.UNPACK_SKIP_ROWS),Is=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Rt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,De),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ge),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe);const Mt=S.isDataArrayTexture||S.isData3DTexture,rn=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const xn=x.get(S),Jt=x.get(F),an=x.get(xn.__renderTarget),Aa=x.get(Jt.__renderTarget);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,an.__webglFramebuffer),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,Aa.__webglFramebuffer);for(let Mi=0;Mi<Te;Mi++)Mt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(S).__webglTexture,k,Fe+Mi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(F).__webglTexture,ae,At+Mi)),P.blitFramebuffer(De,Ge,Ee,me,Qe,xt,Ee,me,P.DEPTH_BUFFER_BIT,P.NEAREST);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||x.has(S)){const xn=x.get(S),Jt=x.get(F);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,Ls),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,si);for(let an=0;an<Te;an++)Mt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xn.__webglTexture,k,Fe+an):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xn.__webglTexture,k),rn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Jt.__webglTexture,ae,At+an):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Jt.__webglTexture,ae),k!==0?P.blitFramebuffer(De,Ge,Ee,me,Qe,xt,Ee,me,P.COLOR_BUFFER_BIT,P.NEAREST):rn?P.copyTexSubImage3D(ft,ae,Qe,xt,At+an,De,Ge,Ee,me):P.copyTexSubImage2D(ft,ae,Qe,xt,De,Ge,Ee,me);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else rn?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(ft,ae,Qe,xt,At,Ee,me,Te,yt,Oe,Rt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(ft,ae,Qe,xt,At,Ee,me,Te,yt,Rt.data):P.texSubImage3D(ft,ae,Qe,xt,At,Ee,me,Te,yt,Oe,Rt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ae,Qe,xt,Ee,me,yt,Oe,Rt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ae,Qe,xt,Rt.width,Rt.height,yt,Rt.data):P.texSubImage2D(P.TEXTURE_2D,ae,Qe,xt,Ee,me,yt,Oe,Rt);P.pixelStorei(P.UNPACK_ROW_LENGTH,lt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,un),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xi),P.pixelStorei(P.UNPACK_SKIP_ROWS,hn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Is),ae===0&&F.generateMipmaps&&P.generateMipmap(ft),Ae.unbindTexture()},this.initRenderTarget=function(S){x.get(S).__webglFramebuffer===void 0&&N.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?N.setTextureCube(S,0):S.isData3DTexture?N.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?N.setTexture2DArray(S,0):N.setTexture2D(S,0),Ae.unbindTexture()},this.resetState=function(){L=0,z=0,O=null,Ae.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Ws=new C;function vn(s,e,t,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Ws.copy(e),Ws[n]=0,Ws.normalize();const c=.5*a/(a+o),u=1-Ws.angleTo(s)/l;return Math.sign(Ws[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Ta extends yi{constructor(e=1,t=1,n=1,i=2,r=.1){const a=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new C,c=new C,u=new C(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,_=new C,m=.5/a;for(let p=0,y=0;p<h.length;p+=3,y+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*r,h[p+1]=u.y*Math.sign(l.y)+c.y*r,h[p+2]=u.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[y+0]=vn(_,c,"z","y",r,n),f[y+1]=1-vn(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[y+0]=1-vn(_,c,"z","y",r,n),f[y+1]=1-vn(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[y+0]=1-vn(_,c,"x","z",r,e),f[y+1]=vn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[y+0]=1-vn(_,c,"x","z",r,e),f[y+1]=1-vn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[y+0]=1-vn(_,c,"x","y",r,e),f[y+1]=1-vn(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[y+0]=vn(_,c,"x","y",r,e),f[y+1]=1-vn(_,c,"y","x",r,t);break}}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.segments,e.radius)}}function f_(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ot;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=gu(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const g=gu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function gu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new on(a,t,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);o.setComponent(d+h,g,_)}}else a.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}const Xr=new ze,p_=new nt,xu=new tn,_u=new gn,vu=new C,yu=new C;function Mu(s){return _u.set(s.rx??0,s.ry??0,s.rz??0,"YXZ"),xu.setFromEuler(_u),vu.set(s.x??0,s.y??0,s.z??0),yu.set(s.sx??1,s.sy??1,s.sz??1),p_.compose(vu,xu,yu)}function Su(s,e,t){let n=s.index?s.toNonIndexed():s;n!==s&&s.dispose();for(const a of Object.keys(n.attributes))a!=="position"&&a!=="normal"&&n.deleteAttribute(a);(t||!n.getAttribute("normal"))&&(n.deleteAttribute("normal"),n.computeVertexNormals());const i=n.getAttribute("position").count,r=new Float32Array(i*3);Xr.setHex(e);for(let a=0;a<i;a++)r[a*3]=Xr.r,r[a*3+1]=Xr.g,r[a*3+2]=Xr.b;return n.setAttribute("color",new on(r,3)),n=n.clearGroups()??n,n}function m_(s){for(const e of Object.keys(s.attributes)){const t=s.getAttribute(e),n=t.itemSize,i=t.array;for(let r=0;r+2<t.count;r+=3)for(let a=0;a<n;a++){const o=(r+1)*n+a,l=(r+2)*n+a,c=i[o];i[o]=i[l],i[l]=c}t.needsUpdate=!0}}class St{parts=[];add(e,t,n={},i=!1){const r=Su(e,t,i);return r.applyMatrix4(Mu(n)),this.parts.push(r),this}box(e,t,n,i,r={},a=.06){const o=Math.min(a,e/2-.001,t/2-.001,n/2-.001),l=o>.005?new Ta(e,t,n,2,o):new yi(e,t,n);return this.add(l,i,r)}sharpBox(e,t,n,i,r={}){return this.add(new yi(e,t,n),i,r)}sphere(e,t,n={},i=12){return this.add(new hr(e,i,Math.max(6,Math.round(i*.7))),t,n)}capsule(e,t,n,i={},r=8){return this.add(new Ts(e,t,3,r),n,i)}cyl(e,t,n,i,r={},a=12){return this.add(new Sa(e,t,n,a),i,r)}cone(e,t,n,i={},r=10){return this.add(new Vl(e,t,r),n,i)}torus(e,t,n,i={},r=16){return this.add(new Zl(e,t,8,r),n,i)}rock(e,t,n={},i=0){return this.add(new Yl(e,i),t,n,!0)}limb(e,t,n,i,r=8){const a=new C(...e),o=new C(...t),l=o.clone().sub(a),c=l.length(),u=new Ts(n,Math.max(.001,c),3,r),h=Su(u,i,!1),d=new tn().setFromUnitVectors(new C(0,1,0),l.normalize()),f=new nt().compose(a.add(o).multiplyScalar(.5),d,new C(1,1,1));return h.applyMatrix4(f),this.parts.push(h),this}kit(e,t={}){const n=Mu(t).clone(),i=n.determinant()<0;for(const r of e.parts){const a=r.clone();a.applyMatrix4(n),i&&m_(a),this.parts.push(a)}return this}dispose(){for(const e of this.parts)e.dispose();this.parts=[]}get empty(){return this.parts.length===0}build(){if(this.parts.length===0)return new Ot;const e=f_(this.parts,!1);for(const t of this.parts)t.dispose();if(this.parts=[],!e)throw new Error("Kit.build: geometry merge failed (attribute mismatch)");return e.computeBoundingSphere(),e}}let Qs=null;function Jl(){if(Qs)return Qs;const s=[.55,.78,.92,1],e=new Uint8Array(s.length*4);s.forEach((n,i)=>{const r=Math.round(n*255);e.set([r,r,r,255],i*4)});const t=new Bl(e,s.length,1,Tn);return t.minFilter=Ut,t.magFilter=Ut,t.generateMipmaps=!1,t.needsUpdate=!0,Qs=t,t}function g_(){Qs?.dispose(),Qs=null}function Di(s={}){return new lr({vertexColors:!0,gradientMap:Jl(),...s})}function Wh(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Ie={cobalt:3107839,helmet:2381526,legs:2377656,scarf:16763196,webbing:16050640,boots:2831184,blaster:3752526,tip:16747069,skin:16765608,visor:10479871},he={body:3519882,belly:8314288,shade:2060138,coral:16739166,white:16777215,pupil:1777450,snorkel:16763196,mask:9430015,hat:16180148,shorts:8019199},x_={biome:"coastal",skyTop:5223664,skyMid:10213367,skyHorizon:14218239,fog:14218239,fogNear:62,fogFar:140,hemiSky:12577023,hemiGround:15915430,hemiIntensity:.75,sunColor:16769712,sunIntensity:2.9,sunOffset:[9,16,6],rimColor:9430015,rimIntensity:.6,rimOffset:[-8,6,-14],road:15326403,paint:16774880,kerb:12157519,kerbStripe:16050640,waterShallow:4182217,waterDeep:1806259,foam:16056315,sand:15980964,grass:9227102,rock:12036508,pillar:14930870,accent:16747069,accent2:15026239,lampGlow:16774084,exposure:1.05},__={biome:"port",skyTop:10470618,skyMid:12835814,skyHorizon:15134448,fog:15134448,fogNear:58,fogFar:130,hemiSky:14478066,hemiGround:12169894,hemiIntensity:1.1,sunColor:16774368,sunIntensity:1.9,sunOffset:[-7,18,8],rimColor:16767392,rimIntensity:.4,rimOffset:[8,6,-14],road:4871522,paint:16763196,kerb:13225683,kerbStripe:15906354,waterShallow:3116963,waterDeep:2058880,foam:15661306,sand:13616820,grass:9224046,rock:10197656,pillar:13225683,accent:15229007,accent2:3122586,lampGlow:16774084,exposure:1.05},v_={biome:"dusk",skyTop:5983114,skyMid:15764075,skyHorizon:16763299,fog:16763299,fogNear:55,fogFar:125,hemiSky:12166880,hemiGround:15312762,hemiIntensity:1.05,sunColor:16759178,sunIntensity:2,sunOffset:[11,9,5],rimColor:16765562,rimIntensity:1.1,rimOffset:[-6,5,-16],road:12096628,paint:16771522,kerb:8213044,kerbStripe:16765562,waterShallow:15899514,waterDeep:5525647,foam:16773346,sand:15780250,grass:7317600,rock:9403532,pillar:9067837,accent:16765562,accent2:7268256,lampGlow:16765562,exposure:1},bu={coastal:x_,port:__,dusk:v_};function Eu(s){const e=s.toLowerCase();return/port|dock|harbo|industr|clang|crane|container/.test(e)?"port":/dusk|extract|sunset|night|jetty|last/.test(e)?"dusk":"coastal"}const It=Math.PI/2,po=1.15,gs=[0,.95,0],wu={rifle:[.1,-.12,-1],smg:[.1,-.12,-.86],shotgun:[.1,-.12,-.98],lancer:[.1,-.12,-1.3],rocket:[.26,.2,-.86]},Xh=["rifle","smg","shotgun","lancer","rocket"];function y_(s){const e=new St,t=Ie.blaster;switch(s){case"rifle":e.box(.15,.17,.62,t,{x:.1,y:-.11,z:-.44},.04).box(.09,.2,.1,t,{x:.1,y:-.25,z:-.32,rx:-.3},.03).box(.1,.07,.2,Ie.scarf,{x:.1,y:0,z:-.5},.025).cyl(.055,.055,.22,t,{x:.1,y:-.12,z:-.83,rx:It},10).cyl(.075,.075,.09,Ie.tip,{x:.1,y:-.12,z:-.96,rx:It},12);break;case"smg":e.box(.2,.17,.44,t,{x:.1,y:-.11,z:-.4},.05).box(.09,.26,.1,Ie.scarf,{x:.1,y:-.3,z:-.42},.03).cyl(.045,.045,.24,t,{x:.05,y:-.1,z:-.7,rx:It},8).cyl(.045,.045,.24,t,{x:.15,y:-.1,z:-.7,rx:It},8).box(.24,.07,.07,Ie.tip,{x:.1,y:-.1,z:-.83},.03);break;case"shotgun":e.box(.17,.18,.55,t,{x:.1,y:-.11,z:-.42},.05).box(.13,.1,.3,12157519,{x:.1,y:-.2,z:-.5},.04).cyl(.16,.07,.26,Ie.tip,{x:.1,y:-.11,z:-.84,rx:-It},12);break;case"lancer":e.box(.13,.15,1,t,{x:.1,y:-.11,z:-.62},.04).box(.03,.26,.36,3057919,{x:.1,y:.02,z:-.5},.012).box(.3,.03,.3,3057919,{x:.1,y:-.11,z:-.85},.012).cyl(.07,.07,.1,14677247,{x:.1,y:-.12,z:-1.17,rx:It},12);break;case"rocket":e.cyl(.14,.14,1.1,Ie.legs,{x:.26,y:.2,z:-.3,rx:It},14).cyl(.17,.17,.1,Ie.scarf,{x:.26,y:.2,z:-.82,rx:It},14).cyl(.17,.17,.1,Ie.scarf,{x:.26,y:.2,z:.22,rx:It},14).box(.08,.18,.08,t,{x:.2,y:.02,z:-.42},.03).sphere(.1,Ie.tip,{x:.26,y:.2,z:-.82,sz:.6},10);break}return e}function M_(){const s=new St().box(.44,.18,.3,Ie.legs,{y:.56},.06).capsule(.25,.2,Ie.cobalt,{y:.84,sz:.74},12).box(.09,.5,.42,Ie.webbing,{y:.84,rz:.55,sz:.9},.03).box(.54,.09,.4,Ie.webbing,{y:.63},.03).box(.13,.12,.08,Ie.helmet,{x:-.16,y:.63,z:-.2},.03).box(.13,.12,.08,Ie.helmet,{x:.16,y:.63,z:-.2},.03).torus(.15,.07,Ie.scarf,{y:1.06,rx:It},14).sphere(.2,Ie.skin,{y:1.22},14).sphere(.27,Ie.helmet,{y:1.3,sy:.78},16).cyl(.29,.3,.06,Ie.helmet,{y:1.25},18).box(.12,.08,.12,Ie.scarf,{y:1.5},.035).box(.42,.14,.1,Ie.visor,{y:1.19,z:-.19},.045).torus(.27,.035,Ie.scarf,{y:1.29,rx:It},20).box(.09,.05,.5,Ie.webbing,{y:1.5,z:.02},.02).box(.42,.46,.25,Ie.webbing,{y:.86,z:.3},.09).box(.36,.16,.07,14734004,{y:1,z:.43},.03).cyl(.09,.09,.48,Ie.legs,{y:1.13,z:.3,rz:It},10).box(.12,.2,.17,14734004,{x:-.25,y:.8,z:.3},.04).box(.12,.2,.17,14734004,{x:.25,y:.8,z:.3},.04).cyl(.02,.02,.42,Ie.boots,{x:-.15,y:1.27,z:.36},4).sphere(.06,Ie.tip,{x:-.15,y:1.49,z:.36},6).build(),e=()=>new St().box(.2,.34,.22,Ie.legs,{y:-.17},.08).box(.23,.16,.32,Ie.boots,{y:-.42,z:-.04},.06),t=new St().limb([.29,0,.02],[.14,-.14,-.34],.08,Ie.cobalt).limb([-.29,0,.02],[.03,-.08,-.6],.08,Ie.cobalt).sphere(.09,Ie.boots,{x:.14,y:-.15,z:-.36},8).sphere(.09,Ie.boots,{x:.04,y:-.09,z:-.6},8).sphere(.11,Ie.cobalt,{x:.3,y:.01,z:.02},10).sphere(.11,Ie.cobalt,{x:-.3,y:.01,z:.02},10).build(),n=[{name:"body",geometry:s,pivot:[0,0,0]},{name:"legL",geometry:e().build(),pivot:[-.12,.5,0]},{name:"legR",geometry:e().build(),pivot:[.12,.5,0]},{name:"arms",geometry:t,pivot:gs}];for(const i of Xh)n.push({name:`gun_${i}`,geometry:y_(i).build(),pivot:gs});return n}function S_(){return new St().cyl(.03,.03,1.3,Ie.boots,{y:.65},6).box(.04,.3,.5,Ie.scarf,{y:1.12,z:.25},.02).sphere(.06,Ie.scarf,{y:1.32},8)}function qh(s,e,t,n=1){s.sphere(.13*n,he.white,{x:-.14*n,y:e,z:t,sz:.6},12).sphere(.115*n,he.white,{x:.15*n,y:e+.02*n,z:t,sz:.6},12).sphere(.06*n,he.pupil,{x:-.12*n,y:e-.01*n,z:t-.07*n},8).sphere(.055*n,he.pupil,{x:.16*n,y:e+.02*n,z:t-.06*n},8)}function Tu(s,e,t=1){s.sphere(.45,he.body,{y:.55*e,sx:t,sy:1.1*e,sz:.95},18).sphere(.32,he.body,{y:.98*e,sx:t},16).sphere(.3,he.belly,{y:.5*e,z:-.2,sx:t,sz:.6},14).sphere(.08,he.shade,{x:.22,y:1*e,z:.2},8).sphere(.06,he.shade,{x:-.26,y:.6*e,z:.28},8).sphere(.09,he.shade,{y:.84*e,z:-.31,sx:1.5,sy:.55,sz:.5},10).box(.07,.06,.04,he.white,{x:.04,y:.87*e,z:-.35},.015),qh(s,1.04*e,-.27)}function b_(s){const e=new St;switch(s){case"walkerRing":case"walkerSnorkel":case"walkerHat":{if(Tu(e,1),s==="walkerRing"){e.torus(.46,.14,he.coral,{y:.45,rx:It},22);for(let t=0;t<4;t++){const n=t/4*Math.PI*2+.4;e.box(.1,.29,.29,he.white,{x:Math.cos(n)*.46,y:.45,z:Math.sin(n)*.46,ry:-n},.05)}}else s==="walkerSnorkel"?e.box(.52,.2,.12,he.mask,{y:1.05,z:-.34},.06).torus(.33,.035,he.coral,{y:1.05,rx:It,sz:.85},18).cyl(.045,.045,.55,he.snorkel,{x:.33,y:1.25,z:-.1},8).sphere(.07,he.coral,{x:.33,y:1.53,z:-.1},8).cyl(.32,.36,.18,he.shorts,{y:.28},16):e.cyl(.5,.5,.05,he.hat,{y:1.27,rx:-.12},22).cyl(.23,.27,.22,he.hat,{y:1.37,rx:-.12},16).cyl(.275,.275,.07,he.coral,{y:1.31,rx:-.12},16).cyl(.32,.36,.18,he.coral,{y:.28},16);break}case"runner":Tu(e,1.08,.82),e.cyl(.29,.29,.1,Ie.scarf,{y:1.2},16).box(.06,.2,.12,Ie.scarf,{x:-.06,y:1.14,z:.3,rx:.6},.02).cyl(.3,.33,.2,he.shorts,{y:.3},16);break;case"brute":e.sphere(.85,he.body,{y:1.05,sy:.95,sz:.85},20).sphere(.6,he.belly,{y:.9,z:-.42,sz:.5},16).sphere(.27,he.body,{y:1.85},14).cyl(.62,.7,.36,he.coral,{y:.36},18),qh(e,1.9,-.2,.75),e.sphere(.07,he.shade,{y:1.74,z:-.24,sx:1.6,sy:.6},8);for(const[t,n]of[[.78,.86],[1.24,.8]]){e.torus(n,.16,he.coral,{y:t,rx:It,sz:.9},24);for(let i=0;i<4;i++){const r=i/4*Math.PI*2+.78;e.box(.12,.33,.33,he.white,{x:Math.cos(r)*n,y:t,z:Math.sin(r)*n*.9,ry:-r},.06)}}e.box(.5,.12,.12,he.coral,{y:1.56,z:-.62,rx:.4},.04);break;case"flanker":e.sphere(.55,he.body,{y:.45,sy:.6,sz:.75},18).sphere(.4,he.belly,{y:.36,z:-.2,sy:.45,sz:.5},14).cyl(.04,.05,.3,he.shade,{x:-.2,y:.78,z:-.18},6).cyl(.04,.05,.3,he.shade,{x:.2,y:.78,z:-.18},6).sphere(.13,he.white,{x:-.2,y:.95,z:-.2},10).sphere(.13,he.white,{x:.2,y:.95,z:-.2},10).sphere(.065,he.pupil,{x:-.2,y:.95,z:-.32},8).sphere(.065,he.pupil,{x:.2,y:.95,z:-.32},8).sphere(.07,he.shade,{y:.42,z:-.42,sx:1.8,sy:.5,sz:.4},8);break}return e}function Au(s){if(s==="flanker")return new St().limb([0,0,0],[.05,.05,-.32],.08,he.shade).sphere(.2,Ie.tip,{x:.06,y:.08,z:-.44,sy:.8},12).box(.12,.08,.26,Ie.tip,{x:.06,y:.2,z:-.56,rx:-.4},.035).box(.12,.08,.22,Ie.tip,{x:.06,y:0,z:-.58,rx:.3},.035);const e=s==="brute"?1.7:1,t=new St().limb([0,0,0],[0,.04*e,-.4*e],.1*e,he.body).sphere(.12*e,he.body,{y:.05*e,z:-.45*e},10);return s==="brute"&&t.torus(.2,.08,he.coral,{z:-.2},12),t}function mo(s){if(s==="flanker"){const t=new St;for(let n=-1;n<=1;n++)t.limb([0,0,n*.2],[.32,-.3,n*.26],.055,he.shade,6);return t}const e=s==="brute"?1.6:1;return new St().capsule(.11*e,.12*e,he.shade,{y:-.12*e}).box(.24*e,.08*e,.36*e,s==="walkerRing"||s==="walkerHat"?he.coral:he.shade,{y:-.27*e,z:-.08*e},.03)}function E_(s){const e=s==="brute",t=s==="flanker",n=Au(s),i=new St().kit(Au(s),{sx:-1}),r=e?.48:t?.38:.3,a=e?.34:t?.42:.17,o=e?1.3:t?.5:.8,l=e?.82:t?.5:.38;return[{name:"body",geometry:b_(s).build(),pivot:[0,0,0]},{name:"legL",geometry:(t?new St().kit(mo(s),{sx:-1}):mo(s)).build(),pivot:[-a,r,0]},{name:"legR",geometry:mo(s).build(),pivot:[a,r,0]},{name:"armL",geometry:i.build(),pivot:[-l,o,-.05]},{name:"armR",geometry:n.build(),pivot:[l,o,-.05]}]}function w_(){return[{name:"body",geometry:new St().cyl(.44,.44,.9,Ie.tip,{rz:It},18).cyl(.46,.46,.22,he.white,{rz:It},18).cyl(.47,.47,.07,14248484,{rz:It,x:-.4},18).cyl(.47,.47,.07,14248484,{rz:It,x:.4},18).box(.24,.14,.14,he.pupil,{x:0,y:.43,rz:0},.03).box(.24,.14,.14,he.pupil,{x:0,y:-.43},.03).box(.24,.14,.14,he.pupil,{x:0,z:.43},.03).box(.24,.14,.14,he.pupil,{x:0,z:-.43},.03).cyl(.1,.1,.1,he.pupil,{x:.47,rz:It},10).build(),pivot:[0,.46,0]}]}const go={walker:1.25,runner:1.35,brute:2.1,flanker:.95,barrel:.92},hs=14239803,qr=15895658;function T_(s){const e=new St().sphere(1.5,qr,{y:1.6,sx:1.25,sy:.75},20).sphere(1,16761510,{y:1.45,z:-.8,sx:1.2,sy:.6,sz:.6},16).cyl(.12,.14,.8,qr,{x:-.55,y:2.6,z:-.7},8).cyl(.12,.14,.8,qr,{x:.55,y:2.6,z:-.7},8).sphere(.36,he.white,{x:-.55,y:3.05,z:-.75},14).sphere(.36,he.white,{x:.55,y:3.05,z:-.75},14).sphere(.17,he.pupil,{x:-.5,y:3,z:-1.06},10).sphere(.17,he.pupil,{x:.6,y:3,z:-1.06},10).box(.9,.14,.2,he.pupil,{y:1.75,z:-1.4,rx:.1},.06).box(.18,.14,.1,he.white,{x:-.2,y:1.67,z:-1.47},.03).box(.18,.14,.1,he.white,{x:.2,y:1.67,z:-1.47},.03);if(s==="coastal")e.cyl(.9,1.4,2.2,hs,{y:2.9,z:.6},20).cyl(1,1,.35,he.white,{y:3.2,z:.6},20).cone(.9,1,hs,{y:4.5,z:.6},20).cyl(.06,.06,.8,Ie.boots,{y:5.3,z:.6},6).sphere(.22,Ie.scarf,{y:5.75,z:.6},10).sphere(.25,10181180,{x:.7,y:2.3,z:1.6},8).sphere(.2,10181180,{x:-.8,y:3.7,z:1.2},8);else if(s==="port"){e.box(3.4,2.4,2.6,hs,{y:3.4,z:.7,rz:.06},.18);for(let i=-3;i<=3;i++)e.box(.14,2.2,2.66,11680304,{x:i*.45,y:3.4,z:.7,rz:.06},.04);e.box(3.5,.18,.18,Ie.scarf,{y:4.65,z:-.6,rz:.06},.05).box(.5,.5,.2,3752526,{x:1,y:4,z:-.62},.05).cyl(.1,.1,1.4,3752526,{x:-1.2,y:5.2,z:.7},6).box(.7,.3,.3,Ie.scarf,{x:-1.2,y:5.9,z:.7},.06)}else{e.sphere(1.5,13084415,{y:3.4,z:.3,sy:.75},20).sphere(1.2,15127807,{y:3.55,z:.1,sy:.6},16).cyl(.06,.06,1.3,5913126,{x:1.5,y:4,z:-.2},6).box(.5,.6,.5,5913126,{x:1.5,y:4.9,z:-.2},.08).sphere(.24,16765562,{x:1.5,y:4.9,z:-.48},10);for(let i=0;i<7;i++){const r=i/7*Math.PI*2;e.capsule(.12,.8,11832575,{x:Math.cos(r)*1.2,y:2.4,z:.3+Math.sin(r)*.8},8)}}const t=()=>new St().limb([0,0,0],[.6,-.2,-.9],.24,qr).sphere(.75,hs,{x:.8,y:-.1,z:-1.5,sy:.75},16).box(.5,.36,1.1,hs,{x:.8,y:.38,z:-2.1,rx:-.4},.15).box(.5,.32,.9,11680304,{x:.8,y:-.42,z:-2.05,rx:.35},.14),n=()=>{const i=new St;for(let r=-1;r<=1;r++)i.limb([0,0,r*.6],[1,-1.2,r*.9],.16,hs,8).sphere(.18,11680304,{x:1,y:-1.2,z:r*.9},8);return i};return[{name:"body",geometry:e.build(),pivot:[0,0,0]},{name:"legL",geometry:new St().kit(n(),{sx:-1}).build(),pivot:[-1.5,1.25,.3]},{name:"legR",geometry:n().build(),pivot:[1.5,1.25,.3]},{name:"armL",geometry:new St().kit(t(),{sx:-1}).build(),pivot:[-1.6,1.8,-.4]},{name:"armR",geometry:t().build(),pivot:[1.6,1.8,-.4]}]}const Ru=new nt,Cu=new nt,xo=new tn,Pu=new gn,_o=new C,A_=new C(1,1,1),Lu=new ze;class vo{constructor(e,t,n,i=!0){this.capacity=n,e.forEach((r,a)=>{const o=new ur(r.geometry,t,n);o.name=r.name,o.castShadow=i,o.receiveShadow=!1,o.count=0,o.frustumCulled=!1,o.instanceMatrix.setUsage(_s),o.instanceColor=new Gi(new Float32Array(n*3).fill(1),3),o.instanceColor.setUsage(_s),this.meshes.push(o),this.pivots.push(new C(...r.pivot)),this.index.set(r.name,a),this.group.add(o)})}capacity;group=new Dn;meshes=[];pivots=[];index=new Map;count=0;begin(){this.count=0}get size(){return this.count}push(e,t,n=1){if(this.count>=this.capacity)return;const i=this.count++;Ru.copy(e),Lu.setRGB(n,n,n),this.meshes.forEach((r,a)=>{const o=t[r.name],l=this.pivots[a];o?(Pu.set(o.rx??0,o.ry??0,o.rz??0,"YXZ"),xo.setFromEuler(Pu),_o.set(l.x+(o.tx??0),l.y+(o.ty??0),l.z+(o.tz??0))):(xo.identity(),_o.copy(l)),Cu.compose(_o,xo,A_).premultiply(Ru),r.setMatrixAt(i,Cu),r.setColorAt(i,Lu)})}setPartEnabled(e,t){const n=this.index.get(e);if(n===void 0)return;const i=this.meshes[n];i&&(i.userData.disabled=!t)}end(){for(const e of this.meshes)e.count=this.count,e.visible=this.count>0&&e.userData.disabled!==!0,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}dispose(){const e=new Set;for(const t of this.meshes)e.has(t.geometry)||(e.add(t.geometry),t.geometry.dispose()),t.dispose();this.group.removeFromParent()}}const Iu=new C,Du=new C,Uu=new gn,Nu=new tn;function Yr(s,e,t,n,i,r,a,o,l,c){return Uu.set(r,i,a,"YXZ"),Nu.setFromEuler(Uu),Iu.set(e,t,n),Du.set(o,l,c),s.compose(Iu,Nu,Du)}const yl=new nt,ga=new tn,xa=new gn,_a=new C,va=new C,R_=new ze;class Yh{constructor(e,t,n,i=1){this.capacity=n,this.mesh=new ur(e,t,n),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.count=0,this.mesh.instanceMatrix.setUsage(_s),this.mesh.instanceColor=new Gi(new Float32Array(n*3),3);let r=i;this.rand=()=>(r=r*1664525+1013904223>>>0,r/4294967296);for(let a=0;a<n;a++)this.items.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,wx:0,wy:0,wz:0,sx:1,sy:1,sz:1,life:0,maxLife:1,gravity:0,floor:0,drag:0,color:new ze})}capacity;mesh;items=[];cursor=0;rand;burst(e){const t=this.rand,n=typeof e.color=="number"?[e.color]:e.color;for(let i=0;i<e.count;i++){const r=this.items[this.cursor];this.cursor=(this.cursor+1)%this.capacity;const a=e.spread??.25,o=t()*Math.PI*2,l=(e.speed??4)*(.45+t()*.75);r.x=e.x+(t()-.5)*a,r.y=e.y+(t()-.5)*a,r.z=e.z+(t()-.5)*a,r.vx=Math.cos(o)*l+(e.bias?.[0]??0),r.vz=Math.sin(o)*l+(e.bias?.[2]??0),r.vy=(e.up??4)*(.6+t()*.7)+(e.bias?.[1]??0),r.rx=t()*6,r.ry=t()*6,r.rz=t()*6,r.wx=(t()-.5)*14,r.wy=(t()-.5)*14,r.wz=(t()-.5)*14;const c=(e.size??.2)*(.7+t()*.6);r.sx=c,r.sy=c*(e.flat??1),r.sz=c*(e.flat!==void 0?1.4:1),r.maxLife=(e.life??.9)*(.75+t()*.5),r.life=r.maxLife,r.gravity=e.gravity??16,r.floor=e.floor??0,r.drag=e.drag??.6,r.color.setHex(n[Math.floor(t()*n.length)]??16777215)}}update(e){let t=0;for(const n of this.items){if(n.life<=0)continue;if(e>0){n.life-=e,n.vy-=n.gravity*e;const a=Math.exp(-n.drag*e);n.vx*=a,n.vz*=a,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e;const o=n.sy*.5;n.y<n.floor+o&&n.vy<0&&(n.y=n.floor+o,n.vy*=-.38,n.vx*=.65,n.vz*=.65,n.wx*=.6,n.wz*=.6),n.rx+=n.wx*e,n.ry+=n.wy*e,n.rz+=n.wz*e}if(n.life<=0)continue;const i=n.life/n.maxLife,r=i<.25?i/.25:1;xa.set(n.rx,n.ry,n.rz),ga.setFromEuler(xa),_a.set(n.x,n.y,n.z),va.set(n.sx*r,n.sy*r,n.sz*r),yl.compose(_a,ga,va),this.mesh.setMatrixAt(t,yl),this.mesh.setColorAt(t,n.color),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){for(const e of this.items)e.life=0;this.mesh.count=0}dispose(){this.mesh.geometry.dispose(),this.mesh.dispose()}}function C_(s){const e=new Ta(1,1,1,1,.18),t=new lr({gradientMap:Jl()});return new Yh(e,t,s,7)}function P_(s){const e=new hr(1,14,8,0,Math.PI*2,0,Math.PI/2);e.scale(1,.78,1);const t=new lr({gradientMap:Jl(),side:bn});return new Yh(e,t,s,13)}const L_=`
  attribute float aAlpha;
  varying vec3 vColor;
  varying float vAlpha;
  varying vec2 vUv;
  #include <fog_pars_vertex>
  void main() {
    vColor = instanceColor;
    vAlpha = aAlpha;
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,I_=`
  uniform float uRadial;
  varying vec3 vColor;
  varying float vAlpha;
  varying vec2 vUv;
  #include <fog_pars_fragment>
  void main() {
    float a = vAlpha;
    if (uRadial > 0.5) {
      float d = length(vUv - 0.5) * 2.0;
      a *= smoothstep(1.0, 0.25, d);
    }
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor, a);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;class ds{constructor(e,t,n={}){this.capacity=t,this.alpha=new Gi(new Float32Array(t),1),this.alpha.setUsage(_s),e.setAttribute("aAlpha",this.alpha);const i=new ln({vertexShader:L_,fragmentShader:I_,transparent:!0,depthWrite:!1,depthTest:n.depthTest??!0,fog:n.fog??!0,side:bn,uniforms:Ol.merge([ue.fog,{uRadial:{value:n.radial?1:0}}])});this.mesh=new ur(e,i,t),this.mesh.instanceColor=new Gi(new Float32Array(t*3),3),this.mesh.instanceColor.setUsage(_s),this.mesh.instanceMatrix.setUsage(_s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n.renderOrder??2,this.mesh.count=0}capacity;mesh;alpha;n=0;begin(){this.n=0}push(e,t,n){this.n>=this.capacity||n<=.003||(this.mesh.setMatrixAt(this.n,e),this.mesh.setColorAt(this.n,typeof t=="number"?R_.setHex(t):t),this.alpha.setX(this.n,Math.min(1,n)),this.n++)}pushFlat(e,t,n,i,r,a,o,l){xa.set(-Math.PI/2,a,0,"YXZ"),ga.setFromEuler(xa),_a.set(e,t,n),va.set(i,r,1),this.push(yl.compose(_a,ga,va),o,l)}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.alpha.needsUpdate=!0}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.dispose()}}function D_(){const s=new ql;return s.moveTo(-.5,.15),s.lineTo(0,-.35),s.lineTo(.5,.15),s.lineTo(.5,.42),s.lineTo(0,-.08),s.lineTo(-.5,.42),s.closePath(),new ba(s)}function U_(s=5){const e=new ql;for(let t=0;t<s*2;t++){const n=t%2?.22:.5,i=t/(s*2)*Math.PI*2;t===0?e.moveTo(Math.cos(i)*n,Math.sin(i)*n):e.lineTo(Math.cos(i)*n,Math.sin(i)*n)}return e.closePath(),new ba(e)}const N_='800 64px "Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif';class F_{group=new Dn;items=[];cursor=0;constructor(e=18){for(let t=0;t<e;t++){const n=document.createElement("canvas");n.width=192,n.height=96;const i=new Gl(n);i.colorSpace=Yt;const r=new Ah({map:i,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1}),a=new Tf(r);a.visible=!1,a.renderOrder=20,this.group.add(a),this.items.push({sprite:a,tex:i,canvas:n,life:0,x:0,y:0,z:0})}}spawn(e,t,n,i,r="#FFC93C"){const a=this.items[this.cursor];this.cursor=(this.cursor+1)%this.items.length;const o=a.canvas.getContext("2d");o&&(o.clearRect(0,0,a.canvas.width,a.canvas.height),o.font=N_,o.textAlign="center",o.textBaseline="middle",o.lineJoin="round",o.lineWidth=12,o.strokeStyle="#14233F",o.strokeText(e,96,50),o.fillStyle=r,o.fillText(e,96,50),a.tex.needsUpdate=!0,a.life=.8,a.x=t,a.y=n,a.z=i,a.sprite.visible=!0)}update(e){for(const t of this.items){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.sprite.visible=!1;continue}const n=1-t.life/.8,i=n<.15?.6+n/.15*.55:1.15-Math.min(.15,(n-.15)*.6);t.sprite.position.set(t.x,t.y+n*.8*1.6,t.z),t.sprite.scale.set(1.5*i,.75*i,1),t.sprite.material.opacity=n>.7?1-(n-.7)/.3:1}}clear(){for(const e of this.items)e.life=0,e.sprite.visible=!1}dispose(){for(const e of this.items)e.tex.dispose(),e.sprite.material.dispose();this.group.removeFromParent()}}const Ke=-1.25,Pt=5.2,Xt=64,O_=3,yo=40,Ml=16,fi=220,yn=Math.PI/2,z_=new ze,B_=new ze;function er(s,e,t){return z_.setHex(s).lerp(B_.setHex(e),t).getHex()}function k_(s,e,t,n,i,r=12157519){const a=(i()-.5)*.5,o=i()*Math.PI*2,l=2.6+i()*1.4,c=5;let u=e,h=n,d=t;for(let g=0;g<c;g++){const _=(g+1)/c,m=e+Math.cos(o)*a*l*_*_,p=n+Math.sin(o)*a*l*_*_,y=t+l*_;s.limb([u,d,h],[m,y,p],.16-g*.018,g%2?r:er(r,0,.18),6),u=m,d=y,h=p}const f=4173402;for(let g=0;g<6;g++){const _=g/6*Math.PI*2+i();s.box(.5,.06,1.7,g%2?f:5817450,{x:u+Math.cos(_)*.75,y:d-.18,z:h+Math.sin(_)*.75,ry:-_+yn,rx:.45},.03)}s.sphere(.13,8014378,{x:u+.12,y:d-.15,z:h},8).sphere(.13,8014378,{x:u-.08,y:d-.18,z:h+.1},8)}function Sl(s,e,t,n,i,r,a){s.rock(i,r,{x:e,y:t,z:n,sy:.6+a()*.4,ry:a()*6,rx:a()*.4},0)}function hi(s,e,t,n){s.sphere(.45,n,{x:e,y:Ke+.15,z:t,sy:.85},12).cyl(.47,.47,.16,16777215,{x:e,y:Ke+.25,z:t},12).cyl(.05,.05,.8,3752526,{x:e,y:Ke+.85,z:t},6).sphere(.12,16763196,{x:e,y:Ke+1.28,z:t},8)}function Xs(s,e,t,n,i,r=1){const a=Ke+.15;s.box(1.1*r,.5*r,3*r,n,{x:e,y:a+.2*r,z:t},.22*r).box(.9*r,.12*r,2.6*r,16050640,{x:e,y:a+.48*r,z:t},.05*r).cyl(.05*r,.05*r,3.4*r,16050640,{x:e,y:a+2.1*r,z:t-.2*r},6).cone(.9*r,2.8*r,i,{x:e+.05,y:a+2.1*r,z:t+.45*r,sx:.08,sz:.9},4).box(.15*r,.4*r,.4*r,16739166,{x:e,y:a+3.8*r,z:t-.2*r},.03)}function Fu(s,e,t,n,i,r,a){s.cyl(.14,.18,.3,r,{x:t,y:.15,z:n},10).cyl(.07,.08,3.6,r,{x:t,y:1.95,z:n},8).limb([t,3.7,n],[t-i*.8,3.95,n],.06,r,6).box(.45,.16,.34,r,{x:t-i*.95,y:3.92,z:n},.06),e.sphere(.2,a,{x:t-i*.95,y:3.74,z:n,sy:.6},10)}function G_(s,e,t,n,i,r){for(let a=0;a<5;a++){const o=(1.3-a*.12)*i;s.cyl(o-.12*i,o,1.4*i,a%2?16777215:r,{x:e,y:t+(.7+a*1.4)*i,z:n},16)}s.cyl(.75*i,.75*i,.2*i,3752526,{x:e,y:t+7.1*i,z:n},16).cyl(.55*i,.55*i,.9*i,16774084,{x:e,y:t+7.6*i,z:n},12).cone(.75*i,.8*i,r,{x:e,y:t+8.45*i,z:n},12)}function Ou(s,e,t,n,i,r=0){const a=er(i,0,.25);s.box(2.4,2.4,5.6,i,{x:e,y:t+1.2,z:n,ry:r},.08);for(let o=-2;o<=2;o++){const l=Math.sin(r)*o*1.05,c=Math.cos(r)*o*1.05;s.box(2.46,2.1,.14,a,{x:e+l,y:t+1.2,z:n+c,ry:r},.03)}}function zu(s,e,t,n,i){const r=9*n;for(const a of[-2.2,2.2])for(const o of[-1.6,1.6])s.box(.5*n,r,.5*n,i,{x:e+a*n,y:r/2,z:t+o*n},.05);s.box(5.4*n,.7*n,4*n,i,{x:e,y:r,z:t},.08).box(1*n,.8*n,16*n,i,{x:e,y:r+1.6*n,z:t-3*n},.08).box(2.2*n,1.6*n,2.2*n,16050640,{x:e,y:r+1.2*n,z:t+1.4*n},.1).box(.12*n,4*n,.12*n,3752526,{x:e,y:r-.6*n,z:t-8*n},.02).box(1.2*n,.4*n,.8*n,16763196,{x:e,y:r-2.8*n,z:t-8*n},.05)}function V_(s,e,t,n,i,r,a){const o=4+Math.floor(a()*3);for(let l=0;l<o;l++){const c=l/(o-1)-.5,u=(1.6+Math.sin(l/(o-1)*Math.PI)*1.8+a()*.6)*i;s.sphere(u,r,{x:e+c*7*i,y:t+u*.35,z:n+(a()-.5)*2*i,sy:.75},12)}}function $r(s,e,t,n,i,r,a){s.sphere(n,i.sand,{x:e,y:Ke-n*.55,z:t,sy:.75*(1+r()*.2)},18),s.sphere(n*.72,i.grass,{x:e+(r()-.5)*n*.3,y:Ke-n*.32,z:t,sy:.72},16);for(let o=0;o<a;o++){const l=r()*Math.PI*2,c=r()*n*.35;k_(s,e+Math.cos(l)*c,Ke+n*.18,t+Math.sin(l)*c,r)}for(let o=0;o<5;o++){const l=r()*Math.PI*2;Sl(s,e+Math.cos(l)*n*.9,Ke+.05,t+Math.sin(l)*n*.9,.35+r()*.5,i.rock,r)}}function H_(s){const t=Math.round(256*Ml/(Pt*2)),n=document.createElement("canvas");n.width=256,n.height=t;const i=n.getContext("2d");if(!i)throw new Error("2D canvas unavailable for road texture");const r=256/(Pt*2),a=h=>(h+Pt)*r;i.fillStyle=`#${s.road.toString(16).padStart(6,"0")}`,i.fillRect(0,0,256,t);const o=Wh(77);if(s.biome==="dusk")for(let h=0;h<t;h+=r*.55){i.fillStyle=o()>.5?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.06)",i.fillRect(0,h,256,r*.5),i.fillStyle="rgba(60,30,10,0.35)",i.fillRect(0,h+r*.5,256,r*.05),i.fillStyle="rgba(60,30,10,0.45)";for(const d of[a(-4.9),a(-1.6),a(1.6),a(4.9)])i.fillRect(d-1.5,h+r*.22,3,3)}else{const h=r*4;for(let d=0;d<t;d+=h){for(let f=-1;f<=1;f++){const g=a(f*3.2-1.6),_=o();i.fillStyle=_>.5?`rgba(255,255,255,${(.04+_*.05).toFixed(3)})`:`rgba(0,0,0,${(.02+_*.05).toFixed(3)})`,i.fillRect(g,d,r*3.2,h)}i.fillStyle="rgba(60,40,20,0.13)",i.fillRect(0,d,256,3),i.fillStyle="rgba(255,255,255,0.18)",i.fillRect(0,d+3,256,2)}for(let d=0;d<1400;d++)i.fillStyle=o()>.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.07)",i.fillRect(o()*256,o()*t,2+o()*3,2+o()*3);if(s.biome==="port")for(let d=0;d<10;d++)i.fillStyle="rgba(20,25,35,0.18)",i.beginPath(),i.ellipse(o()*256,o()*t,r*(.4+o()*.8),r*(.3+o()*.6),o()*3,0,Math.PI*2),i.fill()}const l=i.createLinearGradient(0,0,256,0);l.addColorStop(0,"rgba(40,25,10,0.42)"),l.addColorStop(.07,"rgba(40,25,10,0)"),l.addColorStop(.93,"rgba(40,25,10,0)"),l.addColorStop(1,"rgba(40,25,10,0.42)"),i.fillStyle=l,i.fillRect(0,0,256,t);const c=`#${s.paint.toString(16).padStart(6,"0")}`;i.fillStyle=c;for(const h of[-4.6,4.6])i.fillRect(a(h)-r*.14,0,r*.28,t);for(const h of[-1.6,1.6])for(let d=r*1;d<t;d+=r*4)i.beginPath(),i.roundRect(a(h)-r*.1,d,r*.2,r*2.2,r*.1),i.fill();i.globalAlpha=.18;for(const h of[-3.2,0,3.2]){const d=r*8;i.beginPath(),i.moveTo(a(h)-r*.6,d+r*.6),i.lineTo(a(h),d),i.lineTo(a(h)+r*.6,d+r*.6),i.lineTo(a(h)+r*.6,d+r*.95),i.lineTo(a(h),d+r*.35),i.lineTo(a(h)-r*.6,d+r*.95),i.closePath(),i.fill()}i.globalAlpha=1;const u=new Gl(n);return u.colorSpace=Yt,u.wrapS=kn,u.wrapT=ua,u.anisotropy=8,u.repeat.set(1,fi/Ml),u}const W_=`
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vec4 mv = viewMatrix * w;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,X_=`
  uniform vec3 uShallow;
  uniform vec3 uDeep;
  uniform vec3 uFoam;
  uniform vec3 uFog;
  uniform float uFogNear;
  uniform float uFogFar;
  uniform float uTime;
  uniform float uScroll;
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vec2 p = vec2(vWorld.x, vWorld.z - uScroll);
    float d = abs(vWorld.x);
    float wob = sin(p.y * 0.11 + uTime * 0.2) * 3.0 + sin(p.x * 0.07) * 4.0;
    float depthT = smoothstep(7.0, 48.0, d + wob);
    vec3 col = mix(uShallow, uDeep, depthT);
    // toon ripple bands
    float n = sin(p.x * 0.42 + sin(p.y * 0.23 + uTime * 0.7) * 1.7 + uTime * 0.35)
            * sin(p.y * 0.31 - uTime * 0.55 + sin(p.x * 0.19 + uTime * 0.2) * 1.4);
    float band = smoothstep(0.74, 0.79, n);
    col = mix(col, mix(col, uFoam, 0.55), band);
    float dark = smoothstep(-0.8, -0.86, n);
    col *= 1.0 - dark * 0.08;
    // shoreline froth hugging the deck
    float edge = 1.0 - smoothstep(5.3, 6.4 + sin(p.y * 0.9 + uTime * 2.0) * 0.3, d);
    col = mix(col, uFoam, edge * 0.75);
    float f = smoothstep(uFogNear, uFogFar, vDepth);
    gl_FragColor = vec4(mix(col, uFog, f), 1.0);
    #include <colorspace_fragment>
  }
`;class q_{constructor(e){this.theme=e;const t=Wh(e.biome==="coastal"?11:e.biome==="port"?23:37),n=new ln({side:nn,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new ze(e.skyTop)},uMid:{value:new ze(e.skyMid)},uHorizon:{value:new ze(e.skyHorizon)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHorizon; varying vec3 vDir;
        void main(){ float h = clamp(vDir.y, 0.0, 1.0);
          vec3 c = mix(uHorizon, uMid, smoothstep(0.0, 0.16, h));
          c = mix(c, uTop, smoothstep(0.14, 0.55, h));
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`}),i=new Et(new hr(420,32,16),n);i.renderOrder=-10,this.track(i.geometry,n),this.group.add(i),this.waterUniforms={uShallow:{value:new ze(e.waterShallow)},uDeep:{value:new ze(e.waterDeep)},uFoam:{value:new ze(e.foam)},uFog:{value:new ze(e.fog)},uFogNear:{value:e.fogNear},uFogFar:{value:e.fogFar},uTime:{value:0},uScroll:{value:0}};const r=new ln({uniforms:this.waterUniforms,vertexShader:W_,fragmentShader:X_}),a=new Et(new Un(700,700,1,1),r);a.rotation.x=-yn,a.position.set(0,Ke,-120),this.track(a.geometry,r),this.group.add(a),this.roadTex=H_(e);const o=new lr({map:this.roadTex,gradientMap:Di().gradientMap}),l=new Et(new Un(Pt*2,fi),o);l.rotation.x=-yn,l.position.set(0,0,yo-fi/2),l.receiveShadow=!0,this.track(l.geometry,o,this.roadTex),this.group.add(l);const c=new St,u=yo-fi/2;c.sharpBox(Pt*2+.4,.9,fi,e.biome==="dusk"?8213044:er(e.pillar,0,.12),{y:-.46,z:u});for(const O of[-1,1])c.box(.36,.26,fi,e.kerb,{x:O*(Pt+.02),y:.1,z:u},.08);e.biome==="port"&&(c.sharpBox(60,1.3,fi,11843772,{x:-Pt-30.2,y:-.66,z:u}),c.sharpBox(60,.04,fi,13225683,{x:-Pt-30.2,y:-0,z:u}));const h=Di(),d=new Et(c.build(),h);d.receiveShadow=!0,this.track(d.geometry,h),this.group.add(d);const f=Di();this.glowMat=new mi({vertexColors:!0,toneMapped:!1}),this.foamMat=new mi({color:e.foam,transparent:!0,opacity:.78,depthWrite:!1}),this.track(f,this.glowMat,this.foamMat);const g=new St,_=new St,m=new St;this.buildTile(g,_,m,t);const p=g.build(),y=_.build(),E=m.build();this.track(p,y,E);for(let O=0;O<O_;O++){const V=new Dn;V.position.z=yo-O*Xt;const Y=new Et(p,f);Y.castShadow=!0,Y.receiveShadow=!0;const B=new Et(y,this.glowMat),G=new Et(E,this.foamMat);G.renderOrder=1,V.add(Y,B,G),this.stripMeshes.push(Y,B,G),this.strip.add(V)}this.group.add(this.strip);const b=new Ts(.12,1.4,2,6);b.rotateZ(yn),b.scale(1,.3,1);const w=new mi({color:e.foam,transparent:!0,opacity:.85,fog:!0});this.crests=new ur(b,w,160),this.crests.frustumCulled=!1,this.track(b,w);for(let O=0;O<160;O++){const V=t()>.5?1:-1,Y=e.biome==="port"&&V<0?16:6.5;this.crestData.push({x:V*(Y+t()*22),z:30-t()*180,phase:t(),s:.6+t()*.9})}this.group.add(this.crests);const A=new St,R=new St;this.buildVista(A,R,t);const D=Di({fog:!1}),v=new mi({vertexColors:!0,toneMapped:!1,fog:!1}),M=new St;e.biome==="dusk"&&(M.sphere(14,16769704,{x:40,y:6,z:-330},24),M.sphere(.9,7268256,{x:9,y:3.4,z:-150},10)),e.biome==="coastal"&&M.sphere(1.1,16774084,{x:14,y:14.9,z:-120},10);const L=new Et(A.build(),D);if(this.track(L.geometry,D,v),this.group.add(L),!M.empty){const O=new Et(M.build(),v);this.track(O.geometry),this.group.add(O)}const z=new lr({vertexColors:!0,gradientMap:Di().gradientMap,fog:!1,emissive:new ze(e.skyHorizon),emissiveIntensity:.35});this.clouds=new Et(R.build(),z),this.track(this.clouds.geometry,z),this.group.add(this.clouds)}theme;group=new Dn;disposables=[];strip=new Dn;waterUniforms;roadTex;crests;crestData=[];clouds;stripMeshes=[];glowMat;foamMat;track(...e){this.disposables.push(...e)}buildTile(e,t,n,i){const r=this.theme;for(let o=-1;o>-Xt;o-=2){for(const l of[-1,1]){if(r.biome==="port"&&l<0){Math.round(o)%8===-1&&e.cyl(.22,.26,.5,3752526,{x:-Pt-.9,y:.25,z:o},10).cyl(.3,.3,.1,3752526,{x:-Pt-.9,y:.52,z:o},10);continue}const c=r.biome==="port"?r.kerbStripe:r.biome==="dusk"?9067837:16050640;e.box(.16,.9,.16,c,{x:l*(Pt+.35),y:.45,z:o},.05)}for(const l of[-1,1])Math.round(o)%4===-1&&e.box(.38,.27,.9,r.kerbStripe,{x:l*(Pt+.02),y:.11,z:o},.06)}for(const o of[-1,1]){if(r.biome==="port"&&o<0)continue;const l=r.biome==="dusk"?9067837:r.biome==="port"?r.kerbStripe:16050640;e.box(.12,.12,Xt,l,{x:o*(Pt+.35),y:.9,z:-Xt/2},.05),e.box(.08,.08,Xt,l,{x:o*(Pt+.35),y:.5,z:-Xt/2},.03)}for(let o=-8;o>-Xt;o-=16)for(const l of[-1,1]){if(r.biome==="port"&&l<0){Fu(e,t,-Pt-2.2,o,-1,3752526,r.lampGlow);continue}Fu(e,t,l*(Pt+.75),o-(l>0?8:0),l,r.biome==="dusk"?5913126:3107839,r.lampGlow)}const a=r.biome==="dusk"?4:16;for(let o=-4;o>-Xt;o-=a)for(const l of[-1,1]){if(r.biome==="port"&&l<0)continue;const c=l*(Pt-.8);r.biome==="dusk"?(e.cyl(.32,.36,3,7029800,{x:l*(Pt+.1),y:-1.4,z:o},8),n.torus(.55,.12,16777215,{x:l*(Pt+.1),y:Ke+.02,z:o,rx:yn},14)):(e.box(1.4,2.2,1.8,r.pillar,{x:c,y:-1.5,z:o},.15),e.box(1.8,.4,2.2,er(r.pillar,0,.15),{x:c,y:Ke+.1,z:o},.12),n.torus(1.35,.16,16777215,{x:c,y:Ke+.03,z:o,rx:yn,sx:1,sy:1.25},18))}if(r.biome==="coastal"){$r(e,-11.5,-14,3.6,r,i,3),n.torus(3.8,.35,16777215,{x:-11.5,y:Ke+.03,z:-14,rx:yn},32),$r(e,14,-44,4.6,r,i,4),n.torus(4.7,.4,16777215,{x:14,y:Ke+.03,z:-44,rx:yn},32),$r(e,-15,-54,3.4,r,i,2),n.torus(3.5,.3,16777215,{x:-15,y:Ke+.03,z:-52,rx:yn},28);for(let o=0;o<6;o++)e.cyl(.12,.12,1.6,9067837,{x:10.2-o*.7,y:Ke+.3,z:-42.6},6).cyl(.12,.12,1.6,9067837,{x:10.2-o*.7,y:Ke+.3,z:-44.2},6);e.box(4.4,.14,2,13211231,{x:8.5,y:Ke+1.05,z:-43.4},.04),hi(e,-8.5,-6,r.accent),hi(e,9,-26,r.accent),hi(e,-9.5,-36,r.accent),hi(e,8.5,-58,r.accent),Xs(e,-11,-32,16777215,16739166,1.1),Xs(e,10.5,-18,16050640,16763196,1);for(let o=0;o<6;o++)Sl(e,(i()>.5?1:-1)*(7+i()*4),Ke,-i()*Xt,.4+i()*.5,r.rock,i)}else if(r.biome==="port"){const o=[15229007,3122586,15906354,3033725];for(let l=-6;l>-Xt;l-=6.2){const c=1+Math.floor(i()*3);for(let u=0;u<c;u++)Ou(e,-10.5,u*2.45,l,o[Math.floor(i()*4)]??15229007);i()>.4&&Ou(e,-13.2,0,l-.4,o[Math.floor(i()*4)]??3122586)}for(let l=0;l<6;l++){const c=-4-l*10.5;e.box(.9,.9,.9,13211231,{x:-7.2,y:.45,z:c,ry:i()},.06).box(.7,.7,.7,13211231,{x:-7.2,y:1.25,z:c+.1,ry:i()},.06)}for(let l=-2;l>-Xt;l-=3)e.box(.5,.6,1.6,l%6===-2?16763196:3752526,{x:-Pt-.45,y:.3,z:l},.08);zu(e,-15,-34,1,15229007),e.box(2.6,1,6,15229007,{x:11,y:Ke+.3,z:-20},.35).box(2.2,.2,5.4,16050640,{x:11,y:Ke+.85,z:-20},.06).box(1.6,1.4,2,16050640,{x:11,y:Ke+1.6,z:-19},.15).box(1.7,.2,2.1,3033725,{x:11,y:Ke+2.35,z:-19},.05).cyl(.25,.3,1.2,15906354,{x:11,y:Ke+2.8,z:-19.6},10).torus(.4,.12,16050640,{x:12.35,y:Ke+.9,z:-21,ry:yn},12),n.torus(3.2,.3,16777215,{x:11,y:Ke+.03,z:-20,rx:yn,sy:1.6},24),hi(e,8.5,-44,15906354),hi(e,9,-6,15229007);for(let l=0;l<5;l++)e.cyl(.3,.3,2.5,7029800,{x:7,y:Ke+.4,z:-30-l*3},8);e.box(1,.2,13,11105355,{x:7,y:Ke+1.6,z:-36},.05),Xs(e,13,-50,16050640,3122586,1.2)}else{for(let o=0;o<14;o++){const l=o%2?1:-1;Sl(e,l*(8+i()*10),Ke+.2,-i()*Xt,.8+i()*1.6,r.rock,i)}for(let o=-8;o>-Xt;o-=8)for(const l of[-1,1]){const c=l*(Pt+.35),u=.45;for(let h=0;h<=8;h++){const d=h/8,f=2.6-Math.sin(d*Math.PI)*u;t.sphere(.09,h%3===0?16752222:r.lampGlow,{x:c,y:f,z:o-d*8},6)}e.cyl(.07,.07,2.2,5913126,{x:c,y:1.5,z:o},6)}$r(e,-11.5,-26,3.6,r,i,2),n.torus(3.7,.35,16777215,{x:-11.5,y:Ke+.03,z:-26,rx:yn},30),Xs(e,12,-40,5983114,16771522,1.2),hi(e,9,-16,16739166),hi(e,-9,-50,16739166)}}buildVista(e,t,n){const i=this.theme,r=(o,l=.45)=>er(o,i.skyHorizon,l),a=i.biome==="dusk"?16766660:16777215;for(let o=0;o<6;o++)V_(t,-78+o*31+n()*10,11+n()*9,-255-n()*40,1.8+n()*1.2,a,n);if(i.biome==="coastal"){const o=[[-46,-190,20],[-22,-215,15],[34,-185,18],[62,-215,24],[4,-240,13]];for(const[l,c,u]of o)e.sphere(u,r(i.grass,.5),{x:l,y:Ke-u*.22,z:c,sy:.55},20),e.sphere(u*1.12,r(i.sand,.5),{x:l,y:Ke-u*.32,z:c,sy:.34},20);e.sphere(6,r(i.rock,.35),{x:14,y:Ke-1.5,z:-120,sy:.7},14),G_(e,14,1.6,-120,1.75,r(i.accent2,.2)),Xs(e,-20,-150,r(16777215,.3),r(16763196,.3),1.5)}else if(i.biome==="port"){for(let o=0;o<5;o++)zu(e,-48+o*24,-190-n()*20,1.6,r(o%2?15229007:15906354,.45));for(let o=0;o<10;o++){const l=10+n()*14,c=5+n()*12;e.box(l,c,10,r(o%3===0?13225683:11056316,.5),{x:-70+o*15,y:Ke+c/2,z:-230},.4)}e.cyl(1.4,1.8,30,r(15229007,.5),{x:38,y:14,z:-235},12).cyl(1.5,1.5,3,r(16777215,.5),{x:38,y:24,z:-235},12)}else{const o=[[-48,-200,22],[-20,-225,16],[32,-195,20],[62,-220,26]];for(const[l,c,u]of o)e.rock(u,r(6967172,.35),{x:l,y:Ke,z:c,sy:.7,ry:n()*6},1);e.box(5,1.6,9,r(16050640,.2),{x:9,y:Ke+.6,z:-150},.6).box(3.4,1.8,3.4,r(16739166,.2),{x:9,y:Ke+2.2,z:-149},.3).box(5.2,.4,9.2,r(16739166,.2),{x:9,y:Ke+1.2,z:-150},.1)}}update(e,t){const n=(t%Xt+Xt)%Xt;this.strip.position.z=n,this.roadTex.offset.y=t/Ml,this.waterUniforms.uTime.value=e,this.waterUniforms.uScroll.value=t,this.clouds.position.x=Math.sin(e*.01)*12;const i=new nt,r=new tn,a=new C,o=new C,l=180;this.crestData.forEach((c,u)=>{let h=c.z+t;h=30-((30-h)%l+l)%l;const d=(e*.35+c.phase)%1,f=Math.sin(d*Math.PI)*c.s;a.set(c.x+Math.sin(e*.6+c.phase*9)*.3,Ke+.03,h),o.set(f,1,Math.max(.001,f)),i.compose(a,r,o),this.crests.setMatrixAt(u,i)}),this.crests.instanceMatrix.needsUpdate=!0}get drawMeshes(){return this.stripMeshes.length}dispose(){for(const e of this.disposables)e.dispose();this.crests.dispose(),this.group.removeFromParent()}}const ps={good:3057919,bad:16732743,mixed:16756768},Y_=2.9,Bu=2.4,ku=3.1,Mo=3.3,Zr=2.6,Kr='"Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif',$_=`
  varying vec2 vUv;
  #include <fog_pars_vertex>
  void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,Z_=`
  uniform vec3 uColor;
  uniform vec3 uColor2;
  uniform float uOpacity;
  uniform float uTime;
  uniform float uDir;
  uniform float uSplit;
  uniform float uFlash;
  varying vec2 vUv;
  #include <fog_pars_fragment>
  void main() {
    vec3 col = uColor;
    if (uSplit > 0.5 && vUv.x > 0.5 + (vUv.y - 0.5) * 0.25) col = uColor2;
    // scrolling chevrons
    float y = vUv.y * 4.0 - uTime * 0.45 * uDir;
    float c = fract(y + abs(vUv.x - 0.5) * 1.1 * uDir);
    float chev = smoothstep(0.0, 0.06, c) * (1.0 - smoothstep(0.22, 0.28, c));
    float a = uOpacity + chev * 0.16;
    // bright frame edge
    float edge = max(smoothstep(0.035, 0.0, min(vUv.x, 1.0 - vUv.x)), smoothstep(0.035, 0.0, min(vUv.y, 1.0 - vUv.y)));
    col = mix(col, vec3(1.0), edge * 0.6 + chev * 0.12 + uFlash * 0.5);
    a = max(a, edge * 0.9) + uFlash * 0.3;
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;function K_(){const s=new St;for(const e of[-1,1]){const t=e*1.5;s.cyl(.24,.28,.24,16050640,{x:t,y:.12},14);for(let n=0;n<5;n++)s.cyl(.13,.13,Zr/5,n%2?16050640:3033725,{x:t,y:.24+(n+.5)*(Zr/5)*.92},10);s.sphere(.24,16763196,{x:t,y:Zr+.15},12)}return s.box(3.2,.2,.2,16050640,{y:Zr+.15},.08),s.build()}function J_(s,e,t,n){const i=s.getContext("2d");if(!i)throw new Error("2D canvas unavailable for gate label");const r=s.width,a=s.height;i.clearRect(0,0,r,a),i.textAlign="center",i.textBaseline="alphabetic",i.lineJoin="round";const o=n==="bad"?"#D93A31":n==="mixed"?"#D98A00":"#1677D2",l=r*.03,c=t?a*.94:a*.8,u=(a-c)/2;i.fillStyle=o,i.strokeStyle="#14233F",i.lineWidth=r*.022,i.beginPath(),i.roundRect(l,u,r-l*2,c,r*.07),i.fill(),i.stroke(),i.strokeStyle="rgba(255,255,255,0.35)",i.lineWidth=r*.012,i.beginPath(),i.roundRect(l+r*.025,u+r*.025,r-l*2-r*.05,c-r*.05,r*.05),i.stroke();let h=Math.round(a*(t?.6:.7));i.font=`800 ${h}px ${Kr}`;const d=r*.86,f=i.measureText(e).width;f>d&&(h=Math.floor(h*d/f),i.font=`800 ${h}px ${Kr}`);const g=t?u+c*.62:u+c*.5+h*.36;if(i.lineWidth=Math.max(10,h*.16),i.strokeStyle="#14233F",i.fillStyle="#14233F",i.fillText(e,r/2+h*.03,g+h*.05),i.strokeText(e,r/2,g),i.fillStyle="#FFFFFF",i.fillText(e,r/2,g),t){let _=Math.round(h*.36);i.font=`800 ${_}px ${Kr}`;const m=t.toUpperCase(),p=i.measureText(m).width;p>d&&(_=Math.floor(_*d/p),i.font=`800 ${_}px ${Kr}`);const y=Math.min(d,i.measureText(m).width)+_*.9,E=u+c-_*.55;i.fillStyle="#14233F",i.beginPath(),i.roundRect(r/2-y/2,E-_*.95,y,_*1.25,_*.35),i.fill(),i.fillStyle=n==="bad"?"#FFC2BC":n==="mixed"?"#FFE1A0":"#CFEBFF",i.fillText(m,r/2,E)}}class j_{group=new Dn;archGeo=K_();archMat=Di();panelGeo=new Un(Y_,Bu);labelGeo=new Un(ku,Mo);views=new Map;pool=[];resolvedRows=new Map;onShatter=null;create(){const e=this.pool.pop();if(e)return e;const t=new Dn,n=new Et(this.archGeo,this.archMat);n.castShadow=!0;const i=new ln({vertexShader:$_,fragmentShader:Z_,transparent:!0,depthWrite:!1,side:bn,fog:!0,uniforms:Ol.merge([ue.fog,{uColor:{value:new ze},uColor2:{value:new ze(ps.bad)},uOpacity:{value:.42},uTime:{value:0},uDir:{value:1},uSplit:{value:0},uFlash:{value:0}}])}),r=new Et(this.panelGeo,i);r.position.y=.24+Bu/2,r.renderOrder=3;const a=document.createElement("canvas");a.width=512,a.height=Math.round(512*Mo/ku);const o=new Gl(a);o.colorSpace=Yt,o.anisotropy=4;const l=new mi({map:o,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}),c=new Et(this.labelGeo,l);return c.position.set(0,1+Mo/2,.12),c.rotation.x=-.3,c.renderOrder=4,t.add(n,r,c),{id:-1,rowId:-1,group:t,panelMat:i,labelMat:l,tex:o,canvas:a,label:"",detail:"",tone:"good",popAt:-10,fadeAt:-1,appearAt:0}}release(e){e.group.removeFromParent(),this.views.delete(e.id),this.pool.push(e)}reset(){for(const e of[...this.views.values()])this.release(e);this.resolvedRows.clear()}onGateChosen(e,t){this.resolvedRows.set(t,e);const n=this.views.get(e);if(n){const i=n.group.position;this.onShatter?.(i.x,1.4,i.z,ps[n.tone]),this.release(n)}}onGrow(e,t){const n=this.views.get(e);n&&(n.popAt=t)}update(e,t,n){const i=new Set;for(const r of e.gates){i.add(r.id);let a=this.views.get(r.id);if(!a){if(this.resolvedRows.get(r.rowId)===r.id)continue;a=this.create(),a.id=r.id,a.rowId=r.rowId,a.fadeAt=-1,a.label="",a.appearAt=t,this.views.set(r.id,a),this.group.add(a.group)}this.sync(a,r,t,n,e)}for(const r of[...this.views.values()]){if(i.has(r.id))continue;if(r.fadeAt<0)if(this.resolvedRows.has(r.rowId))r.fadeAt=t;else{this.release(r);continue}const a=(t-r.fadeAt)/.2;a>=1?this.release(r):(r.group.scale.setScalar(1-a*.3),r.panelMat.uniforms.uOpacity.value=.42*(1-a),r.labelMat.opacity=1-a)}}sync(e,t,n,i,r){if(t.label!==e.label||t.detail!==e.detail||t.tone!==e.tone){e.label&&t.label!==e.label&&(e.popAt=n),e.label=t.label,e.detail=t.detail,e.tone=t.tone,J_(e.canvas,t.label,t.detail,t.tone),e.tex.needsUpdate=!0;const d=e.panelMat.uniforms;d.uColor.value.setHex(t.tone==="mixed"?ps.good:ps[t.tone]),d.uColor2.value.setHex(ps.bad),d.uSplit.value=t.tone==="mixed"?1:0,d.uDir.value=t.tone==="bad"?-1:1}e.group.position.set(t.x,0,t.z);const a=Math.min(1,(n-e.appearAt)/.35),o=1-Math.pow(1-a,3),l=(n-e.popAt)/.18,c=l>=0&&l<1?1+.12*Math.sin(l*Math.PI):1;e.group.scale.set(c,o*c,c);const u=e.panelMat.uniforms;u.uTime.value=i,u.uOpacity.value=.42;const h=t.lastHitAt>=0?r.elapsed-t.lastHitAt:99;u.uFlash.value=t.shootable?Math.max(0,1-h/.12):0,e.labelMat.opacity=1}dispose(){const e=[...this.views.values(),...this.pool];for(const t of e)t.panelMat.dispose(),t.labelMat.dispose(),t.tex.dispose();this.views.clear(),this.pool.length=0,this.archGeo.dispose(),this.archMat.dispose(),this.panelGeo.dispose(),this.labelGeo.dispose(),this.group.removeFromParent()}}const Jr=new C(0,14,29.5),fs=new C(0,0,-11.8),Gu=44,Vu=40,Q_=1.15,Hu=.7,jr=.62,ev=11.5,tv=3.2,nv=14*Math.PI/180,Qr=Math.PI/180,iv={rifle:{color:16769126,len:.5,width:.09},smg:{color:16773274,len:.42,width:.06},shotgun:{color:16765002,len:.24,width:.13},lancer:{color:12577279,len:1.4,width:.1},rocket:{color:16747069,len:.55,width:.18}},sv={walker:[he.body,he.body,he.belly,he.coral],runner:[he.body,he.belly,Ie.scarf],brute:[he.body,he.body,he.coral,he.white],flanker:[he.body,Ie.tip,he.belly],barrel:[Ie.tip,Ie.tip,16050640,16769126]};function ms(s){let e=s*2654435761>>>0;return e^=e>>>15,e=Math.imul(e,2246822519)>>>0,(e>>>0)/4294967296}function rv(s){const e=Math.floor(ms(s)*3);return e===0?"walkerRing":e===1?"walkerSnorkel":"walkerHat"}function Wu(s){switch(s.kind){case"walker":return rv(s.id);case"runner":return"runner";case"brute":return"brute";case"flanker":return"flanker";case"barrel":return"barrel"}}const jn=(s,e,t)=>s<e?e:s>t?t:s,Xu=s=>{const t=s-1;return 1+(1.7+1)*t*t*t+1.7*t*t};function av(s,e={}){const t=new d_({canvas:s,antialias:!0,alpha:!1,powerPreference:"high-performance"}),n=e.maxPixelRatio??1.75;t.setPixelRatio(Math.min(window.devicePixelRatio||1,n)),t.outputColorSpace=Yt,t.toneMapping=Tl,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=th,t.info.autoReset=!0;let i=e.reducedMotion??!1;const r=new Ef,a=new Sn(Gu,.6,.5,450);a.position.copy(Jr),a.lookAt(fs);const o=new fp(16777215,16777215,1),l=new Xc(16777215,2.5);l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.bias=-4e-4,l.shadow.normalBias=.03,l.shadow.radius=3;const c=new Xc(16777215,.6);r.add(o,l,l.target,c,c.target);const u=Di(),h=new vo(M_(),u,Vu);r.add(h.group);const d=new Et(S_().build(),u);d.castShadow=!0,r.add(d);const f=new Map,g={walkerRing:90,walkerSnorkel:90,walkerHat:90,runner:80,brute:30,flanker:50,barrel:40};for(const I of Object.keys(g)){const q=new vo(I==="barrel"?w_():E_(I),u,g[I]);f.set(I,q),r.add(q.group)}let _=null;const m=C_(700),p=P_(48),y=new ds(new Un(1,1),420,{radial:!0,renderOrder:1}),E=new ds(new $l(.82,1,40),64,{renderOrder:2}),b=new ds(U_(5),96,{renderOrder:6}),w=new ds(D_(),160,{renderOrder:2}),A=new ds(new Un(1,1),24,{renderOrder:1}),R=new ds(new Un(1,1),360,{renderOrder:7,depthTest:!1}),D=new F_(20),v=new Ts(.5,1,2,6);v.rotateX(Math.PI/2);const M=new mi({toneMapped:!1}),L=new ur(v,M,500);L.instanceColor=new Gi(new Float32Array(500*3),3),L.frustumCulled=!1,L.count=0,L.renderOrder=5,r.add(m.mesh,p.mesh,y.mesh,E.mesh,b.mesh,w.mesh,A.mesh,R.mesh,D.group,L);const z=new j_;r.add(z.group),z.onShatter=(I,q,j,ve)=>{m.burst({x:I,y:q,z:j,count:26,color:[ve,ve,16777215],speed:5,up:4,size:.34,flat:.25,life:1.1,spread:2.4,bias:[0,0,2]}),Xe.push({x:I,z:j,t0:B,dur:.45,r0:.6,r1:3.2,color:ve})};let O=null,V=bu.coastal,Y="coastal",B=0,G=0,Q="",de=null,oe=0,ye=0,ke=0,We=0,mt=1,ct=1,K=-10,ee="rifle",xe=0;const Ve=[],Me=[],je=[],bt=[],Xe=[],it=[],tt=[],Le=new nt,vt=new tn,P=new C,wt=new ze;function at(){const I=new C(0,0,-16);l.target.position.copy(I),l.position.copy(I).add(new C(...V.sunOffset).normalize().multiplyScalar(40)),l.updateMatrixWorld(),l.target.updateMatrixWorld();const q=new nt().lookAt(l.position,I,new C(0,1,0)),j=new nt().makeRotationFromQuaternion(new tn().setFromRotationMatrix(q)).invert();let ve=1/0,Ce=-1/0,Be=1/0,ge=-1/0,Ne=1/0,ht=-1/0;for(const Nn of[-9.5,9.5])for(const ot of[-.5,6])for(const zt of[14,-46])P.set(Nn,ot,zt).sub(l.position).applyMatrix4(j),ve=Math.min(ve,P.x),Ce=Math.max(Ce,P.x),Be=Math.min(Be,P.y),ge=Math.max(ge,P.y),Ne=Math.min(Ne,P.z),ht=Math.max(ht,P.z);const gt=l.shadow.camera;gt.left=ve,gt.right=Ce,gt.bottom=Be,gt.top=ge,gt.near=Math.max(.5,-ht-2),gt.far=-Ne+2,gt.updateProjectionMatrix()}function ut(I){const q=Eu(I);Ae(),oe=0,Q="",de=null,!(O&&q===Y)&&(Y=q,V=bu[Y],O&&O.dispose(),O=new q_(V),r.add(O.group),r.background=new ze(V.skyHorizon),r.fog=new zl(V.fog,V.fogNear,V.fogFar),o.color.setHex(V.hemiSky),o.groundColor.setHex(V.hemiGround),o.intensity=V.hemiIntensity,l.color.setHex(V.sunColor),l.intensity=V.sunIntensity,c.color.setHex(V.rimColor),c.intensity=V.rimIntensity,c.target.position.copy(fs),c.position.copy(fs).add(new C(...V.rimOffset)),t.toneMappingExposure=V.exposure,at(),_&&_.dispose(),_=new vo(T_(Y),u,1),r.add(_.group))}function Ae(){m.clear(),p.clear(),D.clear(),je.length=0,bt.length=0,Xe.length=0,it.length=0,z.reset(),Ve.length=0,xe=0,Me.length=0,ke=0,K=-10}function T(I,q){if(tt.length=0,I<=0)return;const j=Math.floor((ev-Vt)/Hu)+1;let ve=jn(Math.round(q*2/jr)+1,1,9);ve=Math.min(ve,I),Math.ceil(I/ve)>j&&(ve=Math.ceil(I/j));let Ce=0,Be=0;for(;Ce<I;){const ge=Math.min(ve,I-Ce),Ne=Be%2?jr*.5:0;for(let ht=0;ht<ge;ht++){const gt=(ht-(ge-1)/2)*jr+(ge<ve?0:Ne-(Be%2?jr*.25:0));tt.push({x:gt,z:Be*Hu,row:Be})}Ce+=ge,Be++}}function x(I,q){for(let j=Me.length-1;j>=0;j--){const ve=Me[j];if(ve&&ve.t<=I)return ve.x}return Me[0]?.x??q}function N(I){i||(ke=Math.min(1,ke+I))}function Z(I,q){switch(I.type){case"volley":K=B;break;case"hit":I.target==="enemy"?m.burst({x:I.x,y:.8,z:I.z+.3,count:3,color:[16769126,16777215],speed:2.5,up:2.5,size:.1,life:.35,gravity:10}):I.target==="boss"?m.burst({x:I.x,y:2.2,z:I.z+1.5,count:4,color:[16769126,16747069,16777215],speed:3,up:3,size:.14,life:.4}):m.burst({x:I.x,y:1.5,z:I.z+.1,count:2,color:[12445439,16777215],speed:1.5,up:1.5,size:.09,life:.3,gravity:6});break;case"kill":{je.push({kind:I.kind,variant:Wu({kind:I.kind,id:I.enemyId}),x:I.x,z:I.z,t0:B,burst:!1}),I.points>0&&D.spawn(`+${I.points}`,I.x,go[I.kind]+.4,I.z);break}case"squadLoss":{const j=Math.min(I.amount,6);for(let ve=0;ve<j;ve++){const Ce=tt[Math.min(tt.length-1,Math.max(0,q.squad+ve))]??{x:0,z:0},Be=I.x+Ce.x,ge=Vt+Ce.z;m.burst({x:Be,y:.7,z:ge,count:6,color:[Ie.cobalt,Ie.cobalt,Ie.legs,Ie.scarf],speed:3.2,up:4.5,size:.17,life:.9}),p.burst({x:Be,y:1.2,z:ge,count:1,color:Ie.helmet,speed:2.5,up:6.5,size:.24,life:1.3,gravity:14})}N(.3);break}case"gate":{z.onGateChosen(I.gateId,I.rowId);const j=ps[I.tone];Xe.push({x:q.player.x,z:Vt+1,t0:B,dur:.5,r0:.5,r1:3.4,color:j}),D.spawn(I.label,q.player.x,2.6,Vt,I.tone==="bad"?"#FF8A80":I.tone==="mixed"?"#FFD27A":"#9FD9FF");break}case"gateGrow":z.onGrow(I.gateId,B);break;case"explosion":m.burst({x:I.x,y:.6,z:I.z,count:30,color:[Ie.tip,Ie.tip,16050640,16769126],speed:6,up:6,size:.26,life:1}),Xe.push({x:I.x,z:I.z,t0:B,dur:.4,r0:.4,r1:Math.max(1.5,I.radius),color:16756768}),it.push({x:I.x,y:.8,z:I.z,t0:B,s:2.6,color:16771496}),N(.5);break;case"bossSlam":Xe.push({x:I.x,z:I.z,t0:B,dur:.5,r0:.5,r1:3,color:16732743}),m.burst({x:I.x,y:.3,z:I.z,count:16,color:[16050640,V.road],speed:4.5,up:3,size:.2,life:.8}),N(.6);break;case"bossEnrage":q.boss&&m.burst({x:q.boss.x,y:4.5,z:q.boss.z,count:14,color:[16777215,16056315],speed:2,up:5,size:.3,life:1,gravity:-2});break;case"bossDefeated":{const{x:j,z:ve}=I;for(let Ce=0;Ce<3;Ce++)bt.push({at:B+Ce*.22,fn:()=>{m.burst({x:j+(Ce-1)*2,y:2.5,z:ve,count:18,color:[14239803,15895658,16763196],speed:5,up:5,size:.3,life:1.1}),N(.4)}});bt.push({at:B+.75,fn:()=>{m.burst({x:j,y:3,z:ve,count:70,color:[14239803,15895658,16763196,16777215,he.body],speed:8,up:8,size:.36,life:1.6,spread:3}),Xe.push({x:j,z:ve,t0:B,dur:.6,r0:1,r1:7,color:16763196}),N(.7)}});break}case"laneChange":{const j=I.lane>q.player.lane?-1:I.lane<q.player.lane?1:0;for(const ve of[-1,1])m.burst({x:q.player.x+ve*(q.player.halfWidth+.2),y:.15,z:Vt+.4,count:3,color:[16050640,15326403],speed:1.2,up:1.6,size:.16,life:.45,gravity:4,bias:[j*1.5,0,.5]});break}}}const $={},X={},_e={},ie={},pe={},Ue={},te={};function ce(I,q){const j=Math.min(I.squad,Vu);if(T(j,I.player.halfWidth),j>xe)for(let ot=xe;ot<j;ot++)Ve[ot]=B;if(j>xe&&xe>0)for(let ot=xe;ot<j;ot++){const zt=tt[ot];zt&&Xe.push({x:I.player.x+zt.x,z:Vt+zt.z,t0:B,dur:.35,r0:.1,r1:.7,color:3057919})}if(xe=j,q>0||Me.length===0)for(Me.push({t:B,x:I.player.x});Me.length>2&&(Me[0]?.t??0)<B-.4;)Me.shift();I.weapon.id!==ee&&(ee=I.weapon.id);for(const ot of Xh)h.setPartEnabled(`gun_${ot}`,ot===ee);const ve=`gun_${ee}`,Ce=I.status==="running"||I.status==="paused",Be=I.status==="won",ge=-jn(I.player.vx/16,-1,1)*nv,Ne=B-K,ht=I.player.lastHurtAt>=0&&I.elapsed-I.player.lastHurtAt<.08,gt=wu[ee];h.begin();let Nn=!1;tt.forEach((ot,zt)=>{const qn=ms(zt+1)*Math.PI*2,Fn=B*tv*Math.PI*2+qn,sn=x(B-ot.row*.025,I.player.x)+ot.x,cn=Vt+ot.z,Rn=jn((B-(Ve[zt]??-10))/.26,0,1),$e=Rn>=1?1:Xu(Rn)*(1+.05*Math.sin(Rn*Math.PI)),dr=(1-Rn)*2,fr=Ce?35*Qr:22*Qr,pr=Math.abs(Math.sin(Fn))*(Ce?.06:.04);let Wi=pr+dr,Ls=0;Be&&(Ls=Math.max(0,Math.sin(B*7+qn))*.45,Wi+=Ls);const si=Ne-ms(zt+99)*.03,S=si>=0&&si<.06?Math.sin(si/.06*Math.PI)*.05/po:0;X.rx=Math.sin(Fn)*fr,_e.rx=-Math.sin(Fn)*fr,Ue.rx=(Be?-.9*Math.min(1,Ls*3):Math.sin(Fn*2)*.03)+S*1.5,Ue.tz=S,Ue.tx=0,te.rx=0,$.body=te,$.legL=X,$.legR=_e,$.arms=Ue,$[ve]=Ue;const F=$e*po;if(Yr(Le,sn,Wi,cn,0,Ce?-.06:0,ge,F,F*(1-pr*.6),F),h.push(Le,$,ht?2.2:1),si>=0&&si<.07&&ot.row<2){const W=sn+(gs[0]+gt[0])*F,H=Wi+(gs[1]+gt[1])*F,k=cn+(gs[2]+gt[2]-S)*F,ae=1-si/.07;P.set(W,H,k),Le.compose(P,vt,new C(.55*ae+.2,.55*ae+.2,1)),b.push(Le,16769126,1),Le.compose(P,vt,new C(.28*ae,.28*ae,1)),b.push(Le,16777215,1)}y.pushFlat(sn,.02,cn,.95*F,.95*F,0,1319743,.45*$e),zt===Math.floor(Math.min(tt.length,Math.max(1,tt.filter(W=>W.row===0).length))/2)&&!Nn&&(Nn=!0,d.visible=!0,d.position.set(sn-.22,Wi+.6,cn+.25),d.rotation.set(0,Math.sin(B*4)*.25,ge),d.scale.setScalar(F))}),Nn||(d.visible=!1),h.end()}function we(I){for(const q of f.values())q.begin();for(const q of I.enemies)Re(q,I,Q_);for(let q=je.length-1;q>=0;q--){const j=je[q];if(!j)continue;const ve=B-j.t0;if(ve>=.06){const ge=go[j.kind],Ne=j.kind==="brute"?14:j.kind==="barrel"?10:7;m.burst({x:j.x,y:ge*.5,z:j.z,count:Ne,color:sv[j.kind],speed:3.5,up:5,size:j.kind==="brute"?.3:.2,life:.9,spread:ge*.5}),je.splice(q,1);continue}const Ce=1+ve/.06*.25,Be=f.get(j.variant);Be&&(Yr(Le,j.x,0,j.z,Math.PI,0,0,Ce,Ce,Ce),Be.push(Le,{},2.4))}for(const q of f.values())q.end()}function Re(I,q,j){const ve=Wu(I),Ce=f.get(ve);if(!Ce)return;const Be=ms(I.id)*Math.PI*2,ge=B,ht=(I.lastHitAt>=0?q.elapsed-I.lastHitAt:99)<.06,gt=ht?.85:1,Nn=jn((q.elapsed-I.spawnedAt)/.3,0,1),ot=q.status==="ready"?1:Xu(Nn);let zt=ht?2.3:1,qn=Math.PI,Fn=0,An=0,sn=0,cn=j*ot,Rn=j*gt*ot;for(const $e of Object.keys($))delete $[$e];switch(I.kind){case"walker":{const $e=ge*1.6*Math.PI*2+Be;X.rx=Math.sin($e)*.5,_e.rx=-Math.sin($e)*.5,ie.rx=-.25+Math.sin($e+1)*.25,pe.rx=-.25-Math.sin($e+1)*.25,ie.rz=.1,pe.rz=-.1,An=Math.sin($e)*.12,sn=Math.abs(Math.sin($e))*.06;break}case"runner":{const $e=ge*3.4*Math.PI*2+Be;X.rx=Math.sin($e)*.8,_e.rx=-Math.sin($e)*.8,ie.rx=-Math.sin($e)*.9+.3,pe.rx=Math.sin($e)*.9+.3,ie.rz=0,pe.rz=0,Fn=-20*Qr,sn=Math.abs(Math.sin($e))*.12;break}case"brute":{const $e=ge*1*Math.PI*2+Be;X.rx=Math.sin($e)*.35,_e.rx=-Math.sin($e)*.35,ie.rx=-.4+Math.sin($e)*.2,pe.rx=-.4-Math.sin($e)*.2,ie.rz=.25,pe.rz=-.25,An=Math.sin($e)*.08,sn=Math.abs(Math.sin($e))*.05,Rn*=1-Math.abs(Math.cos($e))*.04;break}case"flanker":{const $e=ge*5*Math.PI*2+Be;X.rz=Math.sin($e)*.35,_e.rz=Math.sin($e+Math.PI)*.35,X.ry=Math.cos($e)*.2,_e.ry=-Math.cos($e)*.2,ie.rx=-.3+Math.sin($e*.5)*.4,pe.rx=-.3-Math.sin($e*.5)*.4,ie.rz=0,pe.rz=0,qn=Math.PI-jn(I.vx*.06,-.5,.5),An=Math.sin($e)*.06,sn=Math.abs(Math.sin($e))*.04;break}case"barrel":{qn=0,te.rx=I.z/.46,$.body=te,An=Math.sin(ge*5+Be)*.06;const $e=jn((I.z+30)/35,0,1);Math.sin(ge*(4+$e*18)*Math.PI)>.4&&$e>.15&&(zt=Math.max(zt,1.7)),cn=j*ot,Rn=j*ot;break}}I.kind!=="barrel"&&($.legL=X,$.legR=_e,$.armL=ie,$.armR=pe),q.status==="ready"&&I.kind!=="barrel"&&(sn*=.6),Yr(Le,I.x,sn,I.z,qn,Fn,An,cn,Rn,cn),Ce.push(Le,$,zt),y.pushFlat(I.x,.02,I.z,I.radius*2.2*ot,I.radius*2.2*ot,0,1319743,.42),I.kind==="brute"&&I.maxHp>0&&le(I.x,go.brute+.55,I.z,I.hp/I.maxHp)}function le(I,q,j,ve){const Be=Math.ceil(jn(ve,0,1)*12);for(let ge=0;ge<12;ge++){const Ne=Math.PI/2-ge/12*Math.PI*2;P.set(Math.cos(Ne)*.42,Math.sin(Ne)*.42,0).applyQuaternion(vt).add(new C(I,q,j));const ht=vt.clone().multiply(new tn().setFromAxisAngle(new C(0,0,1),Ne));Le.compose(P,ht,new C(.12,.17,1)),R.push(Le,ge<Be?7268256:1319743,ge<Be?1:.55)}}function qe(I){if(!_)return;_.begin();const q=I.boss;if(q&&q.phase!=="dead"){const j=B*(q.phase==="enraged"?2.2:1.1)*Math.PI*2,ve=q.phase==="siege";X.rz=Math.sin(j)*(ve?.08:.25),_e.rz=Math.sin(j+Math.PI)*(ve?.08:.25),X.rx=_e.rx=0,X.ry=_e.ry=0;const Ce=ve?Math.max(0,Math.sin(B*2.4)):0;ie.rx=-.2-Ce*.8+Math.sin(j)*.15,pe.rx=-.2-Math.max(0,Math.sin(B*2.4+Math.PI))*(ve?.8:0)-Math.sin(j)*.15,ie.rz=pe.rz=0;for(const gt of Object.keys($))delete $[gt];$.legL=X,$.legR=_e,$.armL=ie,$.armR=pe;const Be=q.lastHitAt>=0?I.elapsed-q.lastHitAt:99;let ge=Be<.06?1.6:1;q.phase==="enraged"&&(ge*=1+.25*(.5+.5*Math.sin(B*12)));const Ne=Math.sin(j)*(ve?.03:.1),ht=Be<.06?.95:1;Yr(Le,q.x,Math.abs(Math.sin(j))*.12,q.z,Math.PI,0,Ne,1.2,1.2*ht,1.2),_.push(Le,$,ge),y.pushFlat(q.x,.03,q.z,7,4.5,0,1319743,.35),q.phase==="enraged"&&Math.floor(B*8)%3===0&&m.burst({x:q.x+(ms(Math.floor(B*8))-.5)*3,y:5.5,z:q.z,count:1,color:16777215,speed:.6,up:2,size:.32,life:.8,gravity:-1.5})}_.end()}function U(I){let q=0;const j=new tn,ve=new C(0,0,-1),Ce=new C,Be=new C,ge=(gs[1]+wu.rifle[1])*po;for(const Ne of I.bullets){if(q>=500)break;const ht=iv[Ne.weapon];Ce.set(Ne.vx,0,Ne.vz),Ce.lengthSq()<1e-6&&Ce.set(0,0,-1),Ce.normalize(),j.setFromUnitVectors(ve,Ce);const gt=ht.width;Be.set(gt,gt,ht.len+gt),P.set(Ne.x,Ne.weapon==="rocket"?1:ge,Ne.z),Le.compose(P,j,Be),L.setMatrixAt(q,Le),L.setColorAt(q,wt.setHex(ht.color)),q++,(Ne.weapon==="lancer"||Ne.weapon==="rocket")&&(Be.set(gt*.45,gt*.45,ht.len*.85),Le.compose(P,j,Be),L.setMatrixAt(q,Le),L.setColorAt(q,wt.setHex(16777215)),q++)}if(L.count=q,L.visible=q>0,L.instanceMatrix.needsUpdate=!0,L.instanceColor&&(L.instanceColor.needsUpdate=!0),I.status==="running")for(const Ne of I.bullets)Ne.weapon==="rocket"&&ms(Ne.id+Math.floor(B*30))<.35&&m.burst({x:Ne.x,y:1,z:Ne.z+.4,count:1,color:16050640,speed:.3,up:.6,size:.18,life:.4,gravity:0})}function fe(I){for(const q of I.telegraphs){const j=q.duration>0?jn(q.remaining/q.duration,0,1):0,ve=2+(1-j)*4,Ce=.55+.45*Math.sin(B*ve*Math.PI*2),Be=Mn[q.lane];if(q.kind==="flank"){const ge=q.side===0?1:q.side;for(let Ne=0;Ne<4;Ne++){const ht=(B*1.6+Ne/4)%1,gt=ge*(5.4-ht*5.4)+Be*ht;w.pushFlat(gt,.04,q.z,1.1,.9,ge>0?-Math.PI/2:Math.PI/2,16732743,(.35+.65*Ce)*Math.sin(ht*Math.PI))}w.pushFlat(ge*5.6,.3,q.z,1.4,1.2,ge>0?-Math.PI/2:Math.PI/2,16732743,Ce),A.pushFlat((ge*4.8+Be)/2,.025,q.z,Math.abs(ge*4.8-Be),1.2,0,16774880,.35*Ce)}else if(q.kind==="rush"){A.pushFlat(Be,.025,-17,2.6,48,0,16732743,.16+.14*Ce);for(let ge=0;ge<8;ge++){const Ne=-40+(B*10+ge*6)%48;w.pushFlat(Be,.035,Ne,1.4,1.1,Math.PI,16732743,.5*Ce)}}else{const ge=.9+j*2.4;P.set(q.x,.04,q.z),E.pushFlat(q.x,.04,q.z,ge,ge,0,16732743,.4+.6*Ce),A.pushFlat(q.x,.03,q.z,1.8,1.8,Math.PI/4,16774880,.25*Ce)}}}function se(){for(let I=Xe.length-1;I>=0;I--){const q=Xe[I];if(!q)continue;const j=(B-q.t0)/q.dur;if(j>=1){Xe.splice(I,1);continue}const ve=q.r0+(q.r1-q.r0)*(1-Math.pow(1-j,3));E.pushFlat(q.x,.06,q.z,ve,ve,0,q.color,1-j)}for(let I=it.length-1;I>=0;I--){const q=it[I];if(!q)continue;const j=(B-q.t0)/.12;if(j>=1){it.splice(I,1);continue}P.set(q.x,q.y,q.z);const ve=q.s*(.6+j*.6);Le.compose(P,vt,new C(ve,ve,1)),b.push(Le,q.color,1-j)}}function Se(I,q){const j=mt/Math.max(1,ct);let ve=Gu;for(let Ne=0;Ne<40&&(a.fov=ve,a.aspect=j,a.updateProjectionMatrix(),a.position.copy(Jr),a.lookAt(fs),a.updateMatrixWorld(),!(P.set(4.8+.4,0,Vt).project(a).x<=.88));Ne++)ve+=1;const Ce=I.player.x*.2;We+=(Ce-We)*(1-Math.exp(-q/.085));const Be=P.set(We,fs.y,fs.z),ge=new C(We,Jr.y,Jr.z);if(I.status==="ready"&&!i){const Ne=Math.sin(G/14*Math.PI*2)*4*Qr,ht=ge.clone().sub(Be).applyAxisAngle(new C(0,1,0),Ne);ge.copy(Be).add(ht),ge.y+=Math.sin(G/9*Math.PI*2)*.3}if(ke>0){const Ne=ke*ke*.18;ge.x+=(Math.sin(G*71)+Math.sin(G*37))*.5*Ne,ge.y+=(Math.sin(G*53+1)+Math.sin(G*29))*.5*Ne,ke=Math.max(0,ke-q/.4)}a.position.copy(ge),a.lookAt(Be),a.updateMatrixWorld(),vt.copy(a.quaternion)}function ne(I,q){O?Eu(I.levelId)!==Y&&ut(I.levelId):ut(I.levelId);const j=jn(Number.isFinite(q)?q:0,0,.1),ve=I.status==="paused",Ce=ve?0:j;G+=j,B+=Ce;const Be=`${I.levelId}#${I.runId}`;if((Be!==Q||I!==de)&&(Q=Be,de=I,Ae(),oe=0),!ve){for(const ge of I.events)ge.runId!==I.runId||ge.id<=oe||(oe=ge.id,Z(ge,I));for(let ge=bt.length-1;ge>=0;ge--){const Ne=bt[ge];Ne&&Ne.at<=B&&(bt.splice(ge,1),Ne.fn())}}if(Se(I,ve?0:j),O?.update(G,I.elapsed*pn),y.begin(),b.begin(),E.begin(),w.begin(),A.begin(),R.begin(),ce(I,Ce),we(I),qe(I),U(I),fe(I),se(),z.update(I,B,G),y.end(),b.end(),E.end(),w.end(),A.end(),R.end(),m.update(Ce),p.update(Ce),D.update(Ce),t.render(r,a),++ye%30===0){const ge=t.info.render;s.dataset.drawCalls=String(ge.calls),s.dataset.triangles=String(ge.triangles),s.dataset.geometries=String(t.info.memory.geometries),s.dataset.textures=String(t.info.memory.textures),s.dataset.biome=Y,s.dataset.pixelRatio=t.getPixelRatio().toFixed(2)}}function J(I,q){mt=Math.max(1,Math.floor(I)),ct=Math.max(1,Math.floor(q)),t.setPixelRatio(Math.min(window.devicePixelRatio||1,n)),t.setSize(mt,ct,!1),a.aspect=mt/ct,a.updateProjectionMatrix()}function re(){h.dispose();for(const I of f.values())I.dispose();f.clear(),_?.dispose(),d.geometry.dispose(),u.dispose(),m.dispose(),m.mesh.material.dispose(),p.dispose(),p.mesh.material.dispose(),y.dispose(),E.dispose(),b.dispose(),w.dispose(),A.dispose(),R.dispose(),D.dispose(),v.dispose(),M.dispose(),L.dispose(),z.dispose(),O?.dispose(),O=null,l.shadow.map?.dispose(),g_(),r.clear(),t.dispose()}return J(s.clientWidth||s.width||600,s.clientHeight||s.height||1e3),{render:ne,resize:J,setLevel:ut,setReducedMotion(I){i=I,I&&(ke=0)},stats(){return{calls:t.info.render.calls,triangles:t.info.render.triangles,geometries:t.info.memory.geometries,textures:t.info.memory.textures,level:Y}},dispose:re}}class ov{ctx=null;master=null;noise=null;muted;lastFire=0;constructor(e){this.muted=e}get isMuted(){return this.muted}setMuted(e){this.muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.55,this.ctx.currentTime,.02)}unlock(){if(!this.ctx){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-18,t.ratio.value=4,this.master.connect(t).connect(this.ctx.destination);const n=Math.floor(this.ctx.sampleRate*.4);this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const i=this.noise.getChannelData(0);for(let r=0;r<n;r++)i[r]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume()}get available(){return this.ctx!==null}play(e){const t=this.ctx,n=this.master;if(!t||!n||this.muted||t.state!=="running")return;const i=t.currentTime;switch(e){case"fire":if(i-this.lastFire<.085)return;this.lastFire=i,this.noiseBurst(i,.045,2600,.09,"bandpass"),this.tone(i,"square",880,520,.035,.025);break;case"hit":this.noiseBurst(i,.06,1400,.12,"bandpass");break;case"kill":this.tone(i,"triangle",420,160,.14,.16),this.noiseBurst(i,.12,900,.14,"lowpass");break;case"gateGood":[523.25,659.25,783.99].forEach((r,a)=>this.tone(i+a*.06,"triangle",r,r,.16,.14));break;case"gateBad":this.tone(i,"sawtooth",330,196,.28,.08);break;case"hurt":this.tone(i,"square",180,90,.18,.1),this.noiseBurst(i,.1,500,.12,"lowpass");break;case"win":[523.25,659.25,783.99,1046.5].forEach((r,a)=>this.tone(i+a*.11,"triangle",r,r,.35,.16));break;case"lose":[392,330,262].forEach((r,a)=>this.tone(i+a*.16,"triangle",r,r*.97,.3,.14));break;case"ui":this.tone(i,"sine",740,990,.06,.08);break}}tone(e,t,n,i,r,a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=t,l.frequency.setValueAtTime(n,e),l.frequency.exponentialRampToValueAtTime(Math.max(20,i),e+r),c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(a,e+.008),c.gain.exponentialRampToValueAtTime(1e-4,e+r),l.connect(c).connect(this.master),l.start(e),l.stop(e+r+.02)}noiseBurst(e,t,n,i,r){const a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;const l=a.createBiquadFilter();l.type=r,l.frequency.value=n,l.Q.value=1.2;const c=a.createGain();c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l).connect(c).connect(this.master),o.start(e),o.stop(e+t+.02)}}const $h='button, a, input, select, textarea, [role="button"], [data-no-lane]',lv=36,cv=10;function uv(s){return s instanceof Element&&s.closest($h)!==null}function hv(s){if(!(s instanceof Element))return!1;const e=s.closest($h);return!e||e instanceof HTMLButtonElement&&e.disabled||e.closest("[hidden], [inert]")?!1:e.getClientRects().length>0}function dv(s){const e=t=>{if(t.metaKey||t.ctrlKey||t.altKey)return;const n=hv(t.target);switch(t.code){case"ArrowLeft":case"KeyA":if(!s.canSteer())return;t.preventDefault(),s.gesture(),s.move(-1);break;case"ArrowRight":case"KeyD":if(!s.canSteer())return;t.preventDefault(),s.gesture(),s.move(1);break;case"Space":if(n)return;t.preventDefault(),s.gesture(),s.togglePause();break;case"Escape":case"KeyP":t.preventDefault(),s.gesture(),s.togglePause();break;case"Enter":if(n)return;s.gesture(),s.confirm();break}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}function fv(s,e){let t=null,n=0,i=0,r=0;const a=u=>{uv(u.target)||(e.gesture(),!(!e.canSteer()||t!==null)&&(t=u.pointerId,n=i=u.clientX,r=0,s.setPointerCapture(u.pointerId),u.preventDefault()))},o=u=>{if(u.pointerId!==t)return;r=Math.max(r,Math.abs(u.clientX-n));const h=u.clientX-i;Math.abs(h)>=lv&&(e.move(h<0?-1:1),i=u.clientX)},l=u=>{if(u.pointerId===t&&(t=null,s.hasPointerCapture(u.pointerId)&&s.releasePointerCapture(u.pointerId),r<=cv&&e.canSteer())){const h=s.getBoundingClientRect(),d=(u.clientX-h.left)/h.width;e.setLane(d<1/3?0:d<2/3?1:2)}},c=u=>{u.pointerId===t&&(t=null)};return s.addEventListener("pointerdown",a),s.addEventListener("pointermove",o),s.addEventListener("pointerup",l),s.addEventListener("pointercancel",c),()=>{s.removeEventListener("pointerdown",a),s.removeEventListener("pointermove",o),s.removeEventListener("pointerup",l),s.removeEventListener("pointercancel",c)}}const pv=`
<svg class="mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
  <circle cx="32" cy="32" r="30" fill="#2EA8FF" stroke="#14233F" stroke-width="4"/>
  <path d="M8 40c8-4 16 4 24 0s16-4 24 0v6a26 26 0 0 1-48 0z" fill="#1B8FB3"/>
  <path d="M19 30c0-8 6-14 13-14s13 6 13 14z" fill="#FFFBF2" stroke="#14233F" stroke-width="3.5" stroke-linejoin="round"/>
  <rect x="15" y="29" width="34" height="6" rx="3" fill="#FFC93C" stroke="#14233F" stroke-width="3.5"/>
  <circle cx="32" cy="23" r="3" fill="#FF5247"/>
</svg>`,mv=`
<div class="page" data-screen="menu">
  <div class="page__art" aria-hidden="true"></div>
  <main class="app" data-testid="game-root" data-status="ready" data-lane="1" data-elapsed="0.0" data-squad="0">
    <section class="rail rail--left" aria-label="Mission dossier">
      <header class="brand">
        <div class="brand__lockup" data-testid="brand">
          ${pv}
          <span class="brand__text">
            <span class="brand__kicker">Tin-Toy Tidewatch · Field Manual</span>
            <h1 class="brand__title">Squad <span>Surge</span></h1>
          </span>
        </div>
        <button class="icon-btn sound" type="button" data-testid="sound-toggle" aria-pressed="true" aria-label="Sound on">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path class="sound__cone" d="M4 9h4l5-4v14l-5-4H4z"/><path class="sound__waves" d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/><path class="sound__mute" d="M16 9l6 6M22 9l-6 6"/></svg>
          <span class="sound__label">Sound</span>
        </button>
      </header>

      <section class="card landing" data-testid="landing" aria-labelledby="dossier-name">
        <div class="dossier">
          <p class="eyebrow"><span data-ref="dossierNumber">Mission 01</span> · <span data-ref="dossierDifficulty">Recruit</span></p>
          <h2 class="dossier__name" id="dossier-name" data-ref="dossierName">—</h2>
          <p class="dossier__brief" data-ref="dossierBrief"></p>
          <p class="dossier__tradeoff"><span class="tag tag--amber">Tradeoff</span> <span data-ref="dossierTradeoff"></span></p>
          <ul class="dossier__intel" data-ref="dossierIntel"></ul>
        </div>
        <div class="missions" role="group" aria-label="Choose a mission" data-ref="missions"></div>
        <button class="deploy" type="button" data-testid="deploy-button">
          <span>Deploy squad</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h12M12 6l6 6-6 6"/></svg>
        </button>
        <p class="instructions" data-testid="instructions">
          <kbd>A</kbd><kbd>D</kbd> or <kbd>←</kbd><kbd>→</kbd> switch lanes · drag or tap the field · <kbd>Space</kbd> pause
        </p>
      </section>

      <section class="card run-dossier" aria-label="Mission log">
        <p class="eyebrow"><span data-ref="runNumber">Mission 01</span> · <span data-ref="runDifficulty">Recruit</span></p>
        <h2 class="dossier__name" data-ref="runName">—</h2>
        <p class="dossier__brief" data-ref="runSubtitle"></p>
        <ol class="log" data-testid="event-log" data-ref="eventLog" aria-label="Field log"></ol>
      </section>
    </section>

    <section class="viewport-col" aria-label="Battlefield">
      <div class="viewport" data-testid="game-stage" data-ref="stage" tabindex="-1">
        <canvas class="viewport__canvas" data-testid="game-canvas" aria-label="Live 3D battlefield"></canvas>
        <div class="lane-guides" aria-hidden="true"><i></i><i></i><i></i></div>

        <div class="vhud" data-ref="vhud">
          <div class="track" aria-hidden="true">
            <div class="track__line"><div class="track__fill" data-ref="trackFill"></div></div>
            <div class="track__ticks" data-ref="trackTicks"></div>
            <span class="track__boss" data-ref="trackBoss" title="Boss"></span>
          </div>
          <div class="vhud__row">
            <div class="hudcard hudcard--score">
              <span class="hudcard__label">Score</span>
              <span class="hudcard__value num" data-testid="stage-score" data-ref="stageScore">0</span>
              <span class="mult num" data-ref="stageMult">×1</span>
            </div>
            <div class="hudcard hudcard--squad">
              <span class="hudcard__label">Squad</span>
              <span class="hudcard__value num" data-testid="stage-squad" data-ref="stageSquad">0</span>
              <span class="hudcard__sub" data-ref="stageWeapon"></span>
            </div>
            <button class="icon-btn pause-btn" type="button" data-testid="pause-button" aria-pressed="false" aria-label="Pause">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path class="i-pause" d="M8 5v14M16 5v14"/><path class="i-play" d="M7 5l12 7-12 7z"/></svg>
            </button>
          </div>
          <p class="wave-banner" data-ref="waveBanner" aria-hidden="true"></p>
          <div class="telegraphs" data-ref="telegraphs" aria-hidden="true"></div>
        </div>

        <div class="boss-bar" data-ref="bossBar" hidden>
          <span class="boss-bar__name" data-ref="bossName"></span>
          <div class="boss-bar__track"><div class="boss-bar__fill" data-ref="bossFill"></div></div>
        </div>

        <div class="overlay pause-overlay" data-testid="pause-overlay" hidden role="dialog" aria-modal="false" aria-labelledby="pause-title">
          <div class="sheet">
            <p class="eyebrow">Field halt</p>
            <h2 id="pause-title" class="sheet__title">Paused</h2>
            <p class="sheet__sub" data-ref="pauseSub"></p>
            <div class="sheet__actions">
              <button class="btn btn--primary" type="button" data-testid="resume-button">Resume</button>
              <button class="btn" type="button" data-testid="restart-button">Restart mission</button>
              <button class="btn btn--ghost" type="button" data-testid="menu-button">Mission select</button>
            </div>
          </div>
        </div>

        <div class="overlay end-screen" data-testid="end-screen" hidden role="dialog" aria-modal="false" aria-labelledby="end-title">
          <div class="sheet">
            <p class="eyebrow" data-ref="endEyebrow"></p>
            <h2 id="end-title" class="sheet__title" data-ref="endTitle"></h2>
            <p class="sheet__sub" data-ref="endSub"></p>
            <dl class="stats">
              <div><dt>Score</dt><dd class="num" data-testid="end-score" data-ref="endScore"></dd></div>
              <div><dt>Kills</dt><dd class="num" data-testid="end-kills" data-ref="endKills"></dd></div>
              <div><dt>Survivors</dt><dd class="num" data-testid="end-squad" data-ref="endSquad"></dd></div>
              <div><dt>Time</dt><dd class="num" data-testid="end-time" data-ref="endTime"></dd></div>
            </dl>
            <p class="best" data-testid="end-best" data-ref="endBest"></p>
            <div class="sheet__actions">
              <button class="btn btn--primary" type="button" data-testid="next-mission-button" data-ref="nextBtn">Next mission</button>
              <button class="btn" type="button" data-testid="replay-button">Replay</button>
              <button class="btn btn--ghost" type="button" data-testid="end-menu-button">Mission select</button>
            </div>
          </div>
        </div>

        <div class="overlay storage-block" data-testid="storage-error" role="alert" hidden>
          <div class="sheet">
            <p class="eyebrow">Saved data locked</p>
            <h2 class="sheet__title">Field notes unreadable</h2>
            <p class="sheet__sub" data-ref="storageMessage"></p>
            <p class="sheet__sub">
              Squad Surge will not deploy on guessed settings or scores. Resetting erases this
              browser's Squad Surge preferences and best scores, then starts a fresh record.
            </p>
            <div class="sheet__actions">
              <button class="btn btn--primary" type="button" data-testid="storage-reset-button" data-ref="storageReset">
                Reset saved data
              </button>
            </div>
          </div>
        </div>

        <div class="overlay fatal" data-testid="fatal-error" role="alert" hidden>
          <div class="sheet">
            <p class="eyebrow">Cannot start</p>
            <h2 class="sheet__title">Battlefield offline</h2>
            <p class="sheet__sub" data-ref="fatalMessage"></p>
          </div>
        </div>
      </div>
    </section>

    <aside class="rail rail--right" aria-label="Live readings and controls">
      <section class="card hud" data-testid="hud" aria-label="Live readings">
        <div class="hud__squad">
          <span class="eyebrow">Squad strength</span>
          <span class="hud__squadnum num" data-testid="hud-squad" data-ref="hudSquad">0</span>
          <span class="hud__cap num" data-ref="hudCap">/ 60</span>
        </div>
        <div class="weapon">
          <span class="eyebrow">Loadout</span>
          <strong class="weapon__name" data-testid="hud-weapon" data-ref="hudWeapon">—</strong>
          <span class="weapon__meta num" data-ref="hudWeaponMeta"></span>
        </div>
        <dl class="readings">
          <div><dt>Kills</dt><dd class="num" data-testid="hud-kills" data-ref="hudKills">0</dd></div>
          <div><dt>Score</dt><dd class="num" data-testid="hud-score" data-ref="hudScore">0</dd></div>
          <div><dt>Combo</dt><dd class="num" data-testid="hud-multiplier" data-ref="hudMult">×1</dd></div>
          <div><dt>Lane</dt><dd data-testid="hud-lane" data-ref="hudLane">Centre</dd></div>
        </dl>
        <div class="progress">
          <div class="progress__head">
            <span class="eyebrow" data-testid="hud-status" data-ref="hudStatus">Standing by</span>
            <span class="num"><span data-testid="hud-elapsed" data-ref="hudElapsed">0.0s</span> · <span data-testid="hud-progress" data-ref="hudProgress">0%</span></span>
          </div>
          <div class="progress__bar"><div class="progress__fill" data-ref="progressFill"></div></div>
          <p class="progress__wave" data-ref="hudWave"></p>
        </div>
        <div class="gates">
          <span class="eyebrow">Next gate row</span>
          <ul class="gates__list" data-testid="hud-gates" data-ref="hudGates"></ul>
        </div>
        <p class="sr-only" role="status" aria-live="polite" data-ref="liveRegion"></p>
      </section>

      <section class="card lanepad" aria-label="Lane controls">
        <button class="lanepad__arrow" type="button" data-testid="move-left" aria-label="Move left">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <div class="lanepad__lanes" role="group" aria-label="Choose lane">
          <button class="lanepad__lane" type="button" data-testid="lane-button-0" data-lane="0" aria-pressed="false">Left</button>
          <button class="lanepad__lane" type="button" data-testid="lane-button-1" data-lane="1" aria-pressed="true">Centre</button>
          <button class="lanepad__lane" type="button" data-testid="lane-button-2" data-lane="2" aria-pressed="false">Right</button>
        </div>
        <button class="lanepad__arrow" type="button" data-testid="move-right" aria-label="Move right">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </section>

      <section class="card legend" aria-label="Controls">
        <span class="eyebrow">Field controls</span>
        <ul>
          <li><span><kbd>A</kbd><kbd>←</kbd></span> Lane left</li>
          <li><span><kbd>D</kbd><kbd>→</kbd></span> Lane right</li>
          <li><span><kbd>Space</kbd><kbd>P</kbd></span> Pause / resume</li>
          <li><span><kbd>Drag</kbd><kbd>Tap</kbd></span> Steer on the field</li>
        </ul>
        <p class="legend__note">Your squad fires on its own. Pick gates, dodge flankers, break the boss.</p>
      </section>
    </aside>
  </main>
</div>
`;function gv(s){return s.innerHTML=mv,_v(s)}const xv=["dossierNumber","dossierDifficulty","dossierName","dossierBrief","dossierTradeoff","dossierIntel","missions","stage","vhud","trackFill","trackTicks","trackBoss","stageScore","stageMult","stageSquad","stageWeapon","runNumber","runDifficulty","runName","runSubtitle","eventLog","waveBanner","telegraphs","bossBar","bossName","bossFill","pauseSub","endEyebrow","endTitle","endSub","endScore","endKills","endSquad","endTime","endBest","nextBtn","fatalMessage","hudSquad","hudCap","hudWeapon","hudWeaponMeta","hudKills","hudScore","hudMult","hudLane","hudStatus","hudElapsed","hudProgress","progressFill","hudWave","hudGates","liveRegion","storageMessage","storageReset"];function _v(s){const e={};for(const n of xv){const i=s.querySelector(`[data-ref="${n}"]`);if(!i)throw new Error(`Layout is missing required element "${n}"`);e[n]=i}const t=n=>{const i=s.querySelector(`[data-testid="${n}"]`);if(!i)throw new Error(`Layout is missing required element [data-testid="${n}"]`);return i};return{...e,page:s.querySelector(".page"),app:t("game-root"),canvas:t("game-canvas"),byTestId:t}}const bl=1,jl="squad-surge:prefs",Ql="squad-surge:best";class Dt extends Error{constructor(e,t){super(e,t),this.name="StorageError"}}function ec(){try{const s=window.localStorage;if(!s)throw new Error("localStorage is unavailable");return s}catch(s){throw new Dt("Local storage is unavailable in this browser profile.",{cause:s})}}function Zh(s){let e;try{e=ec().getItem(s)}catch(i){throw i instanceof Dt?i:new Dt(`Could not read saved data "${s}".`,{cause:i})}if(e===null)return null;let t;try{t=JSON.parse(e)}catch(i){throw new Dt(`Saved data "${s}" is corrupt (invalid JSON).`,{cause:i})}if(typeof t!="object"||t===null)throw new Dt(`Saved data "${s}" has an unexpected shape.`);const n=t;if(n.version!==bl)throw new Dt(`Saved data "${s}" has version ${String(n.version)}; expected ${bl}.`);return n.data}function Kh(s,e){try{ec().setItem(s,JSON.stringify({version:bl,data:e}))}catch(t){throw t instanceof Dt?t:new Dt(`Could not save "${s}" — the browser refused the write.`,{cause:t})}}function qu(s){const e=Zh(jl);if(e===null)return{muted:!1,levelId:null};if(typeof e!="object"||e===null)throw new Dt("Saved preferences are malformed.");const t=e;if(typeof t.muted!="boolean")throw new Dt("Saved sound preference is malformed.");if(t.levelId!==null&&typeof t.levelId!="string")throw new Dt("Saved mission preference is malformed.");const n=t.levelId??null;if(n!==null&&!s.includes(n))throw new Dt(`Saved mission "${n}" does not exist.`);return{muted:t.muted,levelId:n}}function Yu(s){Kh(jl,s)}function Jh(s){if(typeof s!="object"||s===null)return!1;const e=s;return typeof e.score=="number"&&Number.isFinite(e.score)&&typeof e.kills=="number"&&typeof e.squad=="number"&&typeof e.won=="boolean"}function $u(s){const e=Zh(Ql);if(e===null)return{};if(typeof e!="object"||e===null||Array.isArray(e))throw new Dt("Saved best scores are malformed.");const t={};for(const[n,i]of Object.entries(e)){if(!s.includes(n))throw new Dt(`Saved best score names unknown mission "${n}".`);if(!Jh(i))throw new Dt(`Saved best score for "${n}" is malformed.`);t[n]=i}return t}function vv(s,e,t){if(!Jh(t))throw new Dt("Refusing to save a malformed result.");const n=s[e];if(!(!n||t.score>n.score||t.won&&!n.won))return null;const r={...s,[e]:{score:Math.max(t.score,n?.score??0),kills:t.kills,squad:t.squad,won:t.won||(n?.won??!1)}};return Kh(Ql,r),r}function yv(){const s=ec();try{s.removeItem(jl),s.removeItem(Ql)}catch(e){throw new Dt("Could not clear saved data.",{cause:e})}}const ea=["Left","Centre","Right"],Zu={ready:"Ready",running:"In action",paused:"Paused",won:"Mission complete",lost:"Squad lost"},Mv={cleared:"Every hostile cleared and the road is yours.",wiped:"The last of the squad went down on the road.",overrun:"The boss broke through the squad line.",timeout:"The window closed before the road was clear."},Sv=6,ta=bo.map(s=>s.id),So=s=>String(s).padStart(2,"0"),di=s=>Math.round(s).toLocaleString("en-US");function Je(s,e){s.textContent!==e&&(s.textContent=e)}function Gt(s,e,t){s.getAttribute(e)!==t&&s.setAttribute(e,t)}class bv{refs;sound;reducedMotion;renderer=null;sim;prefs;best={};storageBlock=null;eventCursor=-1;lastFrame=0;rafId=0;fatal=!1;lastStatus=null;lastSquad=-1;lastRunId=-1;bannerTimer=0;bumpTimer=0;hitSoundAt=0;missionButtons=new Map;laneButtons;constructor(e){this.refs=gv(e),this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");const t=bo[0];if(!t)throw new Error("No missions are defined.");let n=null,i=null;try{i=qu(ta),this.best=$u(ta)}catch(o){n=o,i=null,this.best={}}this.prefs=i??{muted:!0,levelId:null},this.sound=new ov(this.prefs.muted);const r=this.prefs.levelId,a=r!==null&&od(r)?r:t.id;this.sim=new cc(a),this.laneButtons=[0,1,2].map(o=>this.refs.byTestId(`lane-button-${o}`)),this.buildMissionCards(),this.bindControls(),this.applySoundUi(),this.applyArt(),this.showLevel(this.sim.level),n!==null&&this.blockStorage(n),this.startRenderer()}startRenderer(){const e=this.refs.canvas;e.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.fail("The graphics context was lost. Reload the page to redeploy.")});try{this.renderer=av(e,{reducedMotion:this.reducedMotion.matches}),this.renderer.setLevel(this.sim.state.levelId)}catch(n){this.fail(`WebGL could not start: ${n instanceof Error?n.message:String(n)}. Squad Surge needs a browser with hardware-accelerated WebGL.`);return}const t=()=>{const n=this.refs.stage.getBoundingClientRect(),i=getComputedStyle(this.refs.stage),r=parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),a=parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth);this.renderer?.resize(Math.max(1,n.width-r),Math.max(1,n.height-a))};new ResizeObserver(t).observe(this.refs.stage),t(),this.rafId=requestAnimationFrame(this.frame)}applyArt(){const e=this.refs.page.querySelector(".page__art");if(!e)return;const t="/squad-surge-public/art/key-art-menu.jpg",n=new Image;n.onload=()=>{e.style.backgroundImage=`url("${t}")`,e.classList.add("has-art")},n.src=t}buildMissionCards(){const e=this.refs.missions;e.replaceChildren();for(const t of bo){const n=document.createElement("button");n.type="button",n.className="mission",n.dataset.testid="mission-card",n.dataset.missionId=t.id,n.style.setProperty("--mission-accent",t.accent),n.setAttribute("aria-pressed","false"),n.innerHTML=`
        <span class="mission__no num" aria-hidden="true">${So(t.index+1)}</span>
        <span class="mission__body">
          <span class="mission__name" data-testid="mission-name"></span>
          <span class="mission__tradeoff" data-testid="mission-tradeoff"></span>
        </span>
        <span class="mission__meta">
          <span class="pips" aria-hidden="true">${[1,2,3].map(i=>`<i class="${i<=t.difficulty?"on":""}"></i>`).join("")}</span>
          <span class="mission__best" data-testid="mission-best" data-ref-best></span>
        </span>`,n.querySelector(".mission__name").textContent=t.name,n.querySelector(".mission__tradeoff").textContent=t.subtitle,n.setAttribute("aria-label",`Mission ${t.index+1}: ${t.name}, ${t.difficultyLabel}. ${t.tradeoff}`),n.addEventListener("click",()=>{this.sound.unlock(),this.selectMission(t.id)}),e.append(n),this.missionButtons.set(t.id,n)}this.refreshBestLabels()}refreshBestLabels(){for(const[e,t]of this.missionButtons){const n=this.best[e],i=t.querySelector("[data-ref-best]");i&&(this.storageBlock!==null?i.textContent="Record locked":i.textContent=n?`${n.won?"★ ":""}Best ${di(n.score)}`:"Unplayed")}}bindControls(){const e=this.refs,t=(a,o)=>{e.byTestId(a).addEventListener("click",()=>{this.sound.unlock(),o()})};t("deploy-button",()=>this.deploy()),t("pause-button",()=>this.togglePause()),t("resume-button",()=>this.togglePause()),t("restart-button",()=>this.restart()),t("menu-button",()=>this.toMenu()),t("replay-button",()=>this.restart()),t("next-mission-button",()=>this.nextMission()),t("end-menu-button",()=>this.toMenu()),t("sound-toggle",()=>this.toggleSound());const n=(a,o)=>{a.addEventListener("pointerdown",l=>{!l.isPrimary||l.button!==0||(l.preventDefault(),this.sound.unlock(),o())}),a.addEventListener("click",l=>{l.detail===0&&(this.sound.unlock(),o())})};n(e.byTestId("move-left"),()=>this.sim.move(-1)),n(e.byTestId("move-right"),()=>this.sim.move(1)),this.laneButtons.forEach((a,o)=>{n(a,()=>this.sim.setLane(o))}),e.storageReset.addEventListener("click",()=>this.resetSavedData());const i={move:a=>this.sim.move(a),setLane:a=>this.sim.setLane(a),togglePause:()=>this.togglePause(),confirm:()=>{const a=this.sim.state.status;a==="ready"?this.deploy():(a==="won"||a==="lost")&&this.restart()},canSteer:()=>this.sim.state.status==="running",gesture:()=>this.sound.unlock()};dv(i),fv(e.stage,i),e.stage.addEventListener("pointerdown",a=>{this.sim.state.status==="running"&&a.target===e.canvas&&e.stage.classList.add("is-touching")});const r=()=>e.stage.classList.remove("is-touching");e.stage.addEventListener("pointerup",r),e.stage.addEventListener("pointercancel",r),document.addEventListener("visibilitychange",()=>{document.hidden&&this.sim.state.status==="running"&&(this.sim.pause(),this.syncFrameUi(this.sim.state))})}selectMission(e){const t=this.sim.state.status;this.storageBlock!==null||t==="running"||t==="paused"||e===this.sim.state.levelId&&this.prefs.levelId===e||this.persistPrefs({...this.prefs,levelId:e})&&e!==this.sim.state.levelId&&(this.replaceSim(e),this.sound.play("ui"))}replaceSim(e){this.sim=new cc(e),this.eventCursor=-1,this.renderer?.setLevel(e),this.showLevel(this.sim.level)}canPlay(){return!this.fatal&&this.storageBlock===null}deploy(){!this.canPlay()||this.sim.state.status!=="ready"||(this.sim.start(),this.sound.play("ui"),this.refs.stage.focus({preventScroll:!0}),this.syncFrameUi(this.sim.state))}togglePause(){const e=this.sim.state.status;if(e==="running")this.sim.pause();else if(e==="paused"&&this.canPlay())this.sim.resume();else return;this.syncFrameUi(this.sim.state),this.sim.state.status==="paused"?this.refs.byTestId("resume-button").focus({preventScroll:!0}):this.refs.stage.focus({preventScroll:!0})}restart(){this.canPlay()&&(this.sim.restart(),this.refs.stage.focus({preventScroll:!0}),this.syncFrameUi(this.sim.state))}toMenu(){this.sim.reset(),this.syncFrameUi(this.sim.state),this.refs.byTestId("deploy-button").focus({preventScroll:!0})}nextMission(){if(!this.canPlay())return;const e=sc(this.sim.state.levelId);if(!e){this.toMenu();return}this.persistPrefs({...this.prefs,levelId:e})&&(this.replaceSim(e),this.sim.start(),this.refs.stage.focus({preventScroll:!0}),this.syncFrameUi(this.sim.state))}toggleSound(){if(this.storageBlock!==null)return;const e=!this.prefs.muted;this.persistPrefs({...this.prefs,muted:e})&&(this.sound.setMuted(e),this.applySoundUi(),e||this.sound.play("ui"))}applySoundUi(){const e=this.refs.byTestId("sound-toggle"),t=!this.sound.isMuted;Gt(e,"aria-pressed",String(t)),Gt(e,"aria-label",t?"Sound on — press to mute":"Sound off — press to unmute"),Gt(this.refs.app,"data-muted",String(!t)),e.disabled=this.storageBlock!==null}persistPrefs(e){if(this.storageBlock!==null)return!1;try{Yu(e)}catch(t){return this.blockStorage(t),!1}return this.prefs=e,!0}blockStorage(e){const t=e instanceof Dt?e.message:`Unexpected storage failure: ${e instanceof Error?e.message:String(e)}`;this.storageBlock=t,console.error("[squad-surge] storage",e),this.sim.state.status==="running"&&this.sim.pause(),Je(this.refs.storageMessage,t),this.refs.byTestId("storage-error").hidden=!1,Gt(this.refs.app,"data-storage","blocked"),this.sound.setMuted(!0),this.applySoundUi(),this.refreshBestLabels(),this.applyLockState(),this.refs.storageReset.focus({preventScroll:!0})}resetSavedData(){try{yv();const e={muted:!1,levelId:this.sim.state.levelId};Yu(e);const t=qu(ta),n=$u(ta);if(t.muted!==e.muted||t.levelId!==e.levelId)throw new Dt("Saved preferences did not read back as written.");this.prefs=t,this.best=n}catch(e){this.storageBlock=null,this.blockStorage(e);return}this.storageBlock=null,this.refs.byTestId("storage-error").hidden=!0,this.refs.app.removeAttribute("data-storage"),this.sound.setMuted(this.prefs.muted),this.applySoundUi(),this.refreshBestLabels(),this.applyLockState(),this.toMenu()}applyLockState(){const e=this.sim.state.status,t=!this.canPlay();for(const i of this.missionButtons.values())i.disabled=t||e==="running"||e==="paused";for(const i of["deploy-button","replay-button","next-mission-button","restart-button","resume-button"])this.refs.byTestId(i).disabled=t;const n=!t&&e==="running";for(const i of[...this.laneButtons,this.refs.byTestId("move-left"),this.refs.byTestId("move-right")])i.disabled=!n}frame=e=>{if(this.fatal)return;this.rafId=requestAnimationFrame(this.frame);const t=this.lastFrame===0?0:Math.min(.25,Math.max(0,(e-this.lastFrame)/1e3));this.lastFrame=e;try{this.sim.update(t);const n=this.sim.state;this.consumeEvents(n),this.renderer?.render(n,t),this.syncFrameUi(n)}catch(n){console.error("[squad-surge] frame",n),this.fail(`The battlefield crashed: ${n instanceof Error?n.message:String(n)}`)}};fail(e){this.fatal=!0,cancelAnimationFrame(this.rafId),Je(this.refs.fatalMessage,e),this.refs.byTestId("fatal-error").hidden=!1,Gt(this.refs.app,"data-fatal","true"),this.applyLockState(),console.error("[squad-surge]",e)}consumeEvents(e){for(const t of e.events)t.id<=this.eventCursor||(this.eventCursor=t.id,this.onEvent(t,e))}onEvent(e,t){switch(e.type){case"volley":this.sound.play("fire");break;case"hit":e.time-this.hitSoundAt>.07&&(this.hitSoundAt=e.time,this.sound.play("hit"));break;case"kill":this.sound.play("kill");break;case"squadLoss":this.sound.play("hurt"),e.amount>=3&&this.log(e.time,`Lost ${e.amount} to ${e.cause==="gate"?"a gate":`a ${e.cause}`}`);break;case"gate":{this.sound.play(e.tone==="bad"?"gateBad":"gateGood");const n=e.after-e.before,i=n===0?"":` · squad ${n>0?"+":"−"}${Math.abs(n)}`;this.log(e.time,`Took ${e.label}${i}`),this.announce(`Gate ${e.label}. Squad ${e.after}.`);break}case"wave":this.banner(e.name,!1),this.addTick(t.progress),this.log(e.time,e.name);break;case"bossSpawn":this.banner(`${e.name} inbound`,!0),this.log(e.time,`${e.name} sighted`),this.announce(`Boss ${e.name} inbound.`);break;case"bossEnrage":this.banner("Boss enraged!",!0);break;case"bossDefeated":this.sound.play("win"),this.log(e.time,"Boss down");break;case"won":this.sound.play("win");break;case"lost":this.sound.play("lose");break}}showLevel(e){const t=this.refs,n=`Mission ${So(e.index+1)}`;Je(t.dossierNumber,n),Je(t.dossierDifficulty,e.difficultyLabel),Je(t.dossierName,e.name),Je(t.dossierBrief,e.subtitle),Je(t.dossierTradeoff,e.tradeoff),t.dossierIntel.replaceChildren(...e.briefing.map(i=>{const r=document.createElement("li");return r.textContent=i,r})),Je(t.runNumber,n),Je(t.runDifficulty,e.difficultyLabel),Je(t.runName,e.name),Je(t.runSubtitle,e.subtitle),t.app.style.setProperty("--accent",e.accent),t.trackBoss.classList.toggle("is-none",e.bossName===null),t.trackBoss.title=e.bossName??"Extraction";for(const[i,r]of this.missionButtons)Gt(r,"aria-pressed",String(i===e.id));Je(t.hudCap,`/ ${this.sim.state.squadCap}`)}onRunStart(){this.refs.eventLog.replaceChildren(),this.refs.trackTicks.replaceChildren(),this.refs.waveBanner.classList.remove("is-on")}syncFrameUi(e){const t=this.refs;e.runId!==this.lastRunId&&(this.lastRunId=e.runId,this.onRunStart()),e.status!==this.lastStatus&&this.onStatus(e),Gt(t.app,"data-level-id",e.levelId),Gt(t.app,"data-lane",String(e.lane)),Gt(t.app,"data-elapsed",e.elapsed.toFixed(1)),Gt(t.app,"data-squad",String(e.squad));const i=String(e.squad);if(Je(t.hudSquad,i),Je(t.stageSquad,i),this.lastSquad>=0&&e.squad!==this.lastSquad&&e.status==="running"){const u=e.squad>this.lastSquad;t.hudSquad.classList.toggle("bump-up",u),t.hudSquad.classList.toggle("bump-down",!u),window.clearTimeout(this.bumpTimer),this.bumpTimer=window.setTimeout(()=>{t.hudSquad.classList.remove("bump-up","bump-down")},220)}this.lastSquad=e.squad,Je(t.hudWeapon,e.weapon.name),Je(t.stageWeapon,e.weapon.name),Je(t.hudWeaponMeta,`${e.weapon.fireRate.toFixed(1)} volleys/s · ${di(e.weapon.dps)} dps`),Je(t.hudKills,di(e.kills));const r=di(e.score);Je(t.hudScore,r),Je(t.stageScore,r);const a=`×${e.multiplier}`;Je(t.hudMult,a),Je(t.stageMult,a),t.stageMult.classList.toggle("is-on",e.multiplier>1),Je(t.hudLane,ea[e.lane]),Je(t.hudElapsed,`${e.elapsed.toFixed(1)}s / ${Math.round(e.duration)}s`);const o=`${Math.round(e.progress*100)}%`;Je(t.hudProgress,o);const l=`${(e.progress*100).toFixed(2)}%`;t.progressFill.style.width!==l&&(t.progressFill.style.width=l,t.trackFill.style.width=l);const c=e.wave.index>=0?`Wave ${e.wave.index+1} of ${e.wave.total} · ${e.wave.name}`:`${e.wave.total} waves on the road`;Je(t.hudWave,c),this.laneButtons.forEach((u,h)=>{Gt(u,"aria-pressed",String(h===e.lane))}),this.syncGates(e),this.syncTelegraphs(e),this.syncBoss(e)}onStatus(e){const t=this.refs,n=this.lastStatus;this.lastStatus=e.status;const i=e.status;Gt(t.app,"data-status",i),Gt(t.page,"data-screen",i==="ready"?"menu":"play"),Je(t.hudStatus,Zu[i]);const r=t.byTestId("pause-button");Gt(r,"aria-pressed",String(i==="paused")),Gt(r,"aria-label",i==="paused"?"Resume":"Pause"),t.byTestId("pause-overlay").hidden=i!=="paused",i==="paused"&&Je(t.pauseSub,`${this.sim.level.name} · ${e.elapsed.toFixed(1)}s in · squad ${e.squad}. Nothing moves until you resume.`),this.applyLockState();const a=i==="won"||i==="lost",o=t.byTestId("end-screen");o.hidden=!a,a?this.showEnd(e):o.removeAttribute("data-outcome"),n!==null&&this.announce(Zu[i])}showEnd(e){const t=this.refs,n=e.outcome,i=e.status==="won",r=this.sim.level,a=n?.score??e.score,o=n?.survivors??e.squad,l=n?.elapsed??e.elapsed;Gt(t.byTestId("end-screen"),"data-outcome",i?"won":"lost"),Je(t.endEyebrow,`Mission ${So(r.index+1)} · ${r.name}`),Je(t.endTitle,i?"Coast held":"Squad lost"),Je(t.endSub,n?Mv[n.reason]:""),Je(t.endScore,di(a)),Je(t.endKills,di(e.kills)),Je(t.endSquad,String(o)),Je(t.endTime,`${l.toFixed(1)}s`);let c,u=!1;if(this.storageBlock!==null)c="Best score not saved — saved data is locked";else try{const f=vv(this.best,r.id,{score:Math.max(0,Math.round(a)),kills:e.kills,squad:o,won:i});f&&(this.best=f,u=!0);const g=this.best[r.id];c=u?`New personal best · ${di(a)}`:`Personal best · ${di(g?.score??0)}`}catch(f){this.blockStorage(f),c="Best score not saved — saved data is locked"}Je(t.endBest,c),t.endBest.classList.toggle("is-new",u),this.refreshBestLabels();const h=sc(r.id);Je(t.nextBtn,h?`Next · ${ju(h).name}`:"Mission select");const d=i?t.nextBtn:t.byTestId("replay-button");t.nextBtn.classList.toggle("btn--primary",i),t.byTestId("replay-button").classList.toggle("btn--primary",!i),d.focus({preventScroll:!0})}syncGates(e){const t=this.refs.hudGates;let n=-1,i=-1/0;for(const o of e.gates)o.z<Vt&&o.z>i&&(i=o.z,n=o.rowId);const r=n<0?"none":`${n}|${e.lane}|${e.gates.filter(o=>o.rowId===n).map(o=>`${o.lane}:${o.label}:${o.tone}`).join(",")}`;if(t.dataset.key!==r)if(t.dataset.key=r,n<0){const o=document.createElement("li");o.className="gates__empty",o.textContent=e.status==="running"?"No gates on the road":"Gates appear once deployed",t.replaceChildren(o)}else{const o=e.gates.filter(l=>l.rowId===n).sort((l,c)=>l.lane-c.lane);t.replaceChildren(...o.map(l=>{const c=document.createElement("li");c.className=`gate-chip gate-chip--${l.tone}${l.lane===e.lane?" is-mine":""}`,c.dataset.testid="gate-choice",c.dataset.lane=String(l.lane);const u=document.createElement("strong");u.textContent=l.label;const h=document.createElement("small");return h.textContent=l.detail||ea[l.lane],c.append(u,h),c.setAttribute("aria-label",`${ea[l.lane]} lane gate ${l.label}${l.detail?`, ${l.detail}`:""}`),c}))}const a=n<0?"":`${Math.max(0,(Vt-i)/pn).toFixed(1)}s`;Gt(t,"data-eta",a)}syncTelegraphs(e){const t=this.refs.telegraphs,n=e.telegraphs.map(i=>i.id).join(",");t.dataset.key!==n&&(t.dataset.key=n,t.replaceChildren(...e.telegraphs.slice(0,3).map(i=>{const r=document.createElement("span"),a=i.side!==0?i.side:i.lane-1,o=a<0?"left":a>0?"right":"center";r.className=`warn warn--${o}`;const l=i.kind==="flank"?"Flank":i.kind==="rush"?"Rush":"Slam";return r.textContent=i.kind==="flank"?`${i.side<0?"◀ ":""}${l}${i.side>0?" ▶":""}`:`${l} · ${ea[i.lane]}`,r})))}syncBoss(e){const t=this.refs,n=e.boss,i=n!==null&&n.phase!=="dead"&&(e.status==="running"||e.status==="paused");if(t.bossBar.hidden===i&&(t.bossBar.hidden=!i),!n||!i)return;Je(t.bossName,n.name);const r=`${Math.max(0,n.hp/n.maxHp*100).toFixed(1)}%`;t.bossFill.style.width!==r&&(t.bossFill.style.width=r),t.bossBar.classList.toggle("is-enraged",n.phase==="enraged")}banner(e,t){const n=this.refs.waveBanner;n.textContent=e,n.classList.toggle("is-boss",t),n.classList.add("is-on"),window.clearTimeout(this.bannerTimer),this.bannerTimer=window.setTimeout(()=>n.classList.remove("is-on"),2200)}addTick(e){if(e<=.01)return;const t=document.createElement("i");t.style.left=`${(e*100).toFixed(2)}%`,this.refs.trackTicks.append(t)}log(e,t){const n=document.createElement("li"),i=document.createElement("time");i.textContent=`${e.toFixed(0)}s`;const r=document.createElement("span");r.textContent=t,n.append(i,r);const a=this.refs.eventLog;for(a.prepend(n);a.children.length>Sv;)a.lastElementChild?.remove()}announce(e){Je(this.refs.liveRegion,e)}}const la=document.getElementById("root");if(!la)throw new Error("Squad Surge: #root element is missing from index.html");try{new bv(la)}catch(s){const e=s instanceof Error?s.message:String(s);la.innerHTML="";const t=document.createElement("div");t.className="boot-error",t.setAttribute("role","alert"),t.dataset.testid="fatal-error";const n=document.createElement("h1");n.textContent="Squad Surge could not start";const i=document.createElement("p");i.textContent=e,t.append(n,i),la.append(t),console.error("[squad-surge] boot",s)}
