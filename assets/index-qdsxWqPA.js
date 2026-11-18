(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ln=[-3.2,0,3.2],lu=1.6,Kn=7,$i=-42,yf=12,em=-46,jo=1/60,tm=.25,cn=6,Yl=16,Mf=60,nm=45,im=2,sm=1024,kn={walker:{hp:4,radius:.45,speed:7,contactDamage:1,points:10,engageGap:.9,pursuitSpeed:5.5,turnRate:6,reach:.45,windup:.6,cooldown:1.4},runner:{hp:2,radius:.4,speed:12,contactDamage:1,points:15,engageGap:.9,pursuitSpeed:8.5,turnRate:8,reach:.4,windup:.45,cooldown:1.1},brute:{hp:110,radius:.95,speed:4.5,contactDamage:5,points:120,engageGap:.5,pursuitSpeed:3.8,turnRate:3,reach:.6,windup:1.1,cooldown:2},flanker:{hp:6,radius:.5,speed:9,contactDamage:2,points:30,engageGap:1.1,pursuitSpeed:7,turnRate:7,reach:.5,windup:.6,cooldown:1.2},barrel:{hp:8,radius:.7,speed:cn,contactDamage:3,points:5,engageGap:0,pursuitSpeed:0,turnRate:0,reach:0,windup:0,cooldown:0}},rm=4.5,am=.15,Ko={zMargin:1,lateral:ln[1]-ln[0]+1},om=9,Yo={damage:16,radius:2.8},Ui={lateralSpeed:9,startX:9,leadTime:2.8,telegraph:1.6},cu={telegraph:1.5};function ma(r){return(Kn-$i)/r}const Xe=(r,e,t,n,i)=>({type:"horde",arrive:r,lane:e,kind:t,count:n}),sn=(r,...e)=>({type:"gates",arrive:r,gates:e}),$t=(r,e,t,n)=>({type:"flank",arrive:r,lane:e,side:t,count:n}),Zi=(r,e,t)=>({type:"rush",arrive:r,lane:e,count:t}),Qi=(r,e)=>({type:"barrel",arrive:r,lane:e}),Pn=(r,e)=>({type:"wave",at:r,name:e}),Jt=(r,e,t)=>t?{lane:r,kind:e<0?"ambush":"recruit",squadAdd:e,grow:t}:{lane:r,kind:e<0?"ambush":"recruit",squadAdd:e},qs=(r,e,t=0)=>({lane:r,kind:"multiply",squadMultiply:e,squadAdd:t}),Pi=(r,e,t=0,n=1)=>({lane:r,kind:"fireRate",fireRate:e,squadAdd:t,damage:n}),es=(r,e,t=1,n=0)=>({lane:r,kind:"damage",damage:e,fireRate:t,squadAdd:n}),Ii=(r,e,t=0)=>({lane:r,kind:"weapon",weapon:e,squadAdd:t}),lm={id:"coastal-bridge",index:0,name:"Coastal Bridge",subtitle:"Hold the causeway at low tide",difficulty:1,difficultyLabel:"Recruit",duration:72,biome:"coastal",accent:"#ffb547",tradeoff:"Bodies or bullets: grow the squad on the flanks, or tune the guns in the hot centre lane.",briefing:["Shoot the −8 gate up to +12, or take a sure +5.","Crabwalk flankers from the dunes on both sides.","Tidebreaker boss: dodge its slams, out-gun its enrage."],startingSquad:6,startingWeapon:"rifle",bossName:"Tidebreaker",seed:99282957,hpScale:1.4,boss:{name:"Tidebreaker",hp:3e3,radius:4.6,advanceSpeed:3,siegeZ:-12,slamInterval:3.4,slamTelegraph:1.3,slamFraction:.25,slamMin:3,enrageAfter:20,enrageSpeed:6},spawns:[Pn(0,"Low tide"),Xe(5,1,"walker",4),sn(7,Jt(0,5),Pi(1,1.25),Jt(2,-8,{perHit:1,max:12})),Xe(10,0,"walker",5),Xe(11.5,2,"walker",5),Xe(13,1,"walker",6),sn(16,qs(0,2),es(1,1.4,.85),Jt(2,7)),Pn(17,"Dune crawlers"),$t(20,0,-1,3),Xe(20,1,"walker",15),$t(23,2,1,3),Qi(23.5,1),Xe(24.5,1,"walker",12),Xe(26,0,"walker",12),Xe(26,2,"walker",12),sn(29,Ii(0,"smg"),Ii(1,"rocket",-4),Pi(2,1.35,-3)),Xe(31,1,"brute",1),Xe(32,0,"walker",15),Xe(32,2,"walker",15),Pn(34,"Breakwater"),Zi(36,1,8),Xe(37,0,"walker",18),$t(38,2,1,4),Xe(38.5,1,"brute",1),sn(40,Jt(0,10),qs(1,2,-4),es(2,1.5,1,-6)),Xe(43,1,"walker",21),Xe(44,2,"walker",15),Xe(45,0,"brute",1),Qi(46,0),$t(47,0,-1,4),sn(49,Pi(0,1.3),Jt(1,8),Ii(2,"lancer",-4)),Pn(50,"Tidebreaker"),{type:"boss",at:50},Zi(54,2,10),Xe(56,0,"walker",12),Xe(58,2,"brute",1),Xe(60,2,"walker",12),Xe(64,1,"runner",10)]},cm={id:"industrial-port",index:1,name:"Industrial Port",subtitle:"Container yard under siege",difficulty:2,difficultyLabel:"Veteran",duration:80,biome:"industrial",accent:"#3fd0c9",tradeoff:"Armoured brutes reward piercing Lancers; swarms reward SMG cadence. You cannot have both.",briefing:["Brutes shield the hordes behind them.","Explosive drums: shoot them inside a pack.","Gantry Hulk boss enrages after 18 s of siege."],startingSquad:8,startingWeapon:"rifle",bossName:"Gantry Hulk",seed:13681826,hpScale:1.36,boss:{name:"Gantry Hulk",hp:2800,radius:4.6,advanceSpeed:3,siegeZ:-13,slamInterval:3,slamTelegraph:1.2,slamFraction:.28,slamMin:3,enrageAfter:18,enrageSpeed:6.5},spawns:[Pn(0,"Yard gates"),Xe(5,1,"walker",3),Qi(6,0),sn(8,Ii(0,"lancer"),Jt(1,4),Ii(2,"smg")),Xe(11,0,"walker",6),Xe(11,2,"walker",6),Xe(13,1,"brute",1),Xe(14.5,1,"walker",6),sn(17,Jt(0,-6,{perHit:1,max:14}),es(1,1.5,.8),qs(2,2)),Pn(18,"Crane line"),Xe(20,2,"brute",1),Xe(21,2,"walker",15),$t(22,0,-1,4),Qi(23,1),Xe(24,1,"walker",18),Zi(26,0,8),Xe(27,2,"walker",15),sn(30,Pi(0,1.4,-4),Jt(1,9),es(2,1.45)),Xe(33,0,"brute",1),Xe(33.5,0,"walker",15),Xe(34,1,"walker",18),$t(35,2,1,5),Xe(36,2,"walker",18),Pn(38,"Container maze"),sn(41,qs(0,2,-6),Jt(1,-6,{perHit:1,max:12}),Ii(2,"rocket")),Xe(44,1,"brute",2),Xe(45,0,"walker",21),Zi(46,2,10),Qi(47,1),Xe(48,1,"walker",21),$t(49,0,-1,5),Xe(50,2,"walker",18),sn(53,es(0,1.5,1,-5),Pi(1,1.35),Jt(2,12)),Pn(55,"Gantry Hulk"),{type:"boss",at:56},Zi(58,0,12),Xe(60,0,"walker",15),Xe(62,0,"brute",1),Xe(63,2,"walker",15),$t(66,1,1,5),Xe(70,1,"runner",12)]},hm={id:"dusk-extraction",index:2,name:"Dusk Extraction",subtitle:"Last chopper off the headland",difficulty:3,difficultyLabel:"Elite",duration:88,biome:"dusk",accent:"#ff6b8b",tradeoff:"Every big multiplier sits behind a brute wall or a flank. Greed snowballs — or gets you wiped.",briefing:["Flankers pour in from both cliffs.","×3 gate guarded by twin brutes.","Dread Colossus slams twice as often."],startingSquad:8,startingWeapon:"rifle",bossName:"Dread Colossus",seed:53340,hpScale:1.9,boss:{name:"Dread Colossus",hp:3700,radius:4.6,advanceSpeed:3.2,siegeZ:-12,slamInterval:2.4,slamTelegraph:1.1,slamFraction:.3,slamMin:4,enrageAfter:20,enrageSpeed:7},spawns:[Pn(0,"Headland"),Xe(5,1,"walker",5),sn(7,Jt(0,6),Jt(1,-6,{perHit:1,max:14}),Pi(2,1.3)),Xe(10,0,"walker",7),Xe(10,2,"walker",7),$t(12,1,-1,3),Xe(13.5,1,"walker",9),sn(16,Ii(0,"shotgun",2),qs(1,2),Ii(2,"lancer")),Xe(17,1,"brute",1),Pn(18,"Cliff runners"),$t(20,0,-1,4),$t(23,2,1,4),Xe(22,1,"walker",18),Zi(24,0,10),Xe(25,2,"walker",18),Qi(26,1),sn(29,es(0,1.6,.85),Jt(1,10),Pi(2,1.45,-4)),Xe(31,0,"walker",21),Xe(32,1,"brute",1),Xe(32,2,"walker",21),$t(34,1,1,5),Pn(36,"Twin brutes"),Xe(38,0,"brute",1),Xe(38,2,"brute",1),sn(41,Jt(0,8),qs(1,3,-4),Jt(2,8)),Xe(39.5,1,"walker",18),Zi(44,2,12),Xe(45,1,"walker",24),$t(46,0,-1,5),Xe(47,0,"walker",18),Qi(48,2),Xe(49,2,"walker",21),sn(52,Pi(0,1.35),es(1,1.5,1,-5),Jt(2,-8,{perHit:1,max:16})),Xe(55,1,"walker",24),$t(56,2,1,6),Pn(58,"Dread Colossus"),{type:"boss",at:59},Xe(64,0,"walker",18),$t(67,2,1,6),Xe(70,1,"runner",14),$t(74,0,-1,6),Xe(78,2,"runner",14)]},Lo=[lm,cm,hm];function Sf(r){return{id:r.id,index:r.index,name:r.name,subtitle:r.subtitle,difficulty:r.difficulty,difficultyLabel:r.difficultyLabel,duration:r.duration,biome:r.biome,accent:r.accent,tradeoff:r.tradeoff,briefing:r.briefing,startingSquad:r.startingSquad,startingWeapon:r.startingWeapon,bossName:r.bossName}}const $l=Lo.map(Sf);function um(r){return Lo.some(e=>e.id===r)}function ch(r){const e=Lo.find(t=>t.id===r);if(!e)throw new Error(`Unknown level id: ${r}`);return e}function wf(r){return Sf(ch(r))}function hu(r){const e=ch(r);return Lo[e.index+1]?.id??null}const Ir={rifle:{id:"rifle",name:"Rifle",blurb:"Reliable all-rounder with long reach.",fireRate:3,damagePerGunner:1,maxBullets:8,bulletSpeed:52,pierce:1,spread:0,range:40,splashRadius:0},smg:{id:"smg",name:"SMG",blurb:"Hose of light rounds: shreds swarms, struggles with armour.",fireRate:7,damagePerGunner:.52,maxBullets:10,bulletSpeed:56,pierce:1,spread:.6,range:32,splashRadius:0},shotgun:{id:"shotgun",name:"Scattergun",blurb:"Wide fan covers neighbouring lanes, short reach.",fireRate:1.6,damagePerGunner:2.4,maxBullets:12,bulletSpeed:44,pierce:1,spread:5,range:21,splashRadius:0},lancer:{id:"lancer",name:"Lancer",blurb:"Slow piercing bolts that punch through whole columns.",fireRate:1.2,damagePerGunner:3.2,maxBullets:3,bulletSpeed:70,pierce:6,spread:0,range:46,splashRadius:0},rocket:{id:"rocket",name:"Rockets",blurb:"Heavy splash rounds; devastating on packs, slow cadence.",fireRate:.9,damagePerGunner:4,maxBullets:2,bulletSpeed:34,pierce:1,spread:0,range:42,splashRadius:2.4}};function Tf(r){return r<=20?Math.max(0,r):20+(r-20)*.6}function dm(r,e,t,n){const i=Ir[e];return Tf(r)*i.damagePerGunner*n*i.fireRate*t}const on={maxDrawn:25,maxColumns:5,columnDx:.52,rankDz:1,bodyRadius:.55,minHalfWidth:.3,frontRootZ:Kn},Fs=Kn-.5;function fm(r){const e=Math.max(1,r),t=Math.min(on.maxColumns,Math.ceil(Math.sqrt(e))),n=Math.ceil(e/t),i=[];for(let o=0;o<n;o++){const l=Math.min(t,e-o*t);for(let c=0;c<l;c++)i.push(Object.freeze({dx:(c-(l-1)/2)*on.columnDx,rootZ:on.frontRootZ+o*on.rankDz,rank:o,column:c}))}r<=0&&(i.length=0);const s=(t-1)/2*on.columnDx,a=on.bodyRadius;return Object.freeze({drawn:Math.max(0,r),columns:t,ranks:n,slots:Object.freeze(i),muzzleHalfWidth:s,halfWidth:Math.max(on.minHalfWidth,s+a),frontZ:Math.min(Fs,on.frontRootZ-a),backZ:on.frontRootZ+(n-1)*on.rankDz+a})}const pm=Array.from({length:on.maxDrawn+1},(r,e)=>fm(e));function ji(r){const e=Math.max(0,Math.min(on.maxDrawn,Math.floor(r))),t=pm[e];if(!t)throw new Error(`formationLayout: no layout for ${e}`);return t}const Ef="−";function mm(r){return{kind:r.kind,squadAdd:r.squadAdd??0,squadMultiply:r.squadMultiply??1,fireRateMultiplier:r.fireRate??1,damageMultiplier:r.damage??1,weapon:r.weapon??null}}function gm(r,e){let t=r.kind;return(t==="recruit"||t==="ambush")&&(t=e<0?"ambush":"recruit"),{...r,kind:t,squadAdd:e}}function uu(r){return r<0?`${Ef}${Math.abs(r)}`:`+${r}`}function ga(r){const e=Math.round((r-1)*100);return e<0?`${Ef}${Math.abs(e)}%`:`+${e}%`}function bm(r,e){const t=Math.round(r*e.squadMultiply)+e.squadAdd;return Math.max(0,Math.min(Mf,t))}function du(r){const e=[],t=[];let n;switch(r.kind){case"recruit":case"ambush":n=uu(r.squadAdd);break;case"multiply":n=`×${r.squadMultiply}`;break;case"fireRate":n=`FIRE ${ga(r.fireRateMultiplier)}`;break;case"damage":n=`DMG ${ga(r.damageMultiplier)}`;break;case"weapon":n=r.weapon?Ir[r.weapon].name.toUpperCase():"WEAPON";break}r.kind!=="recruit"&&r.kind!=="ambush"&&r.squadAdd!==0&&(r.squadAdd<0?e:t).push(`${uu(r.squadAdd)} soldiers`),r.kind!=="fireRate"&&r.fireRateMultiplier!==1&&(r.fireRateMultiplier<1?e:t).push(`${ga(r.fireRateMultiplier)} fire rate`),r.kind!=="damage"&&r.damageMultiplier!==1&&(r.damageMultiplier<1?e:t).push(`${ga(r.damageMultiplier)} damage`);const s=r.kind==="ambush"||r.squadMultiply<1?t.length>0?"mixed":"bad":e.length>0?"mixed":"good";return{label:n,detail:[...t,...e].join(" · "),tone:s}}function xm(r){let e=r>>>0;const t=()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{next:t,range:(n,i)=>n+(i-n)*t()}}let fu=0,_m=0;const ba=.3,vm=.3,ym=yf+6,Mm=14,pu=.12,Sm=.36,wm=2.5,xa=1.6,Tm=50,Em=2500,Am=new Set(["pursue","windup","recover"]);function _a(r){return Am.has(r.mode)}function Rm(r){const e=xm(r.seed),t=[];let n=0;const i=s=>s==="brute"||s==="barrel"?kn[s].hp*Math.max(1,r.hpScale*.9):kn[s].hp*r.hpScale;for(const s of r.spawns)switch(s.type){case"horde":{const a=kn[s.kind],o=s.perRow??(s.kind==="walker"?3:s.kind==="runner"?2:1),l=s.kind==="brute"?2.6:1.15,c=s.arrive-ma(a.speed),h=ln[s.lane];for(let u=0;u<s.count;u++){const d=Math.floor(u/o),f=u%o,m=o===1?0:f/(o-1)*1.6-.8,b=h+m+e.range(-.18,.18),g=c+(d*l+e.range(0,.25))/a.speed;t.push({t:g,type:"enemy",kind:s.kind,x:b,z:$i,vx:0,vz:a.speed,targetX:null,mergeSpeed:a.speed,hp:i(s.kind)})}break}case"rush":{const a=kn.runner,o=s.arrive-ma(a.speed),l=ln[s.lane];t.push({t:o-cu.telegraph,type:"telegraph",kind:"rush",lane:s.lane,side:0,x:l,z:$i+12,duration:cu.telegraph});for(let c=0;c<s.count;c++){const h=Math.floor(c/2),u=l+(c%2===0?-.45:.45)+e.range(-.15,.15);t.push({t:o+h*.9/a.speed,type:"enemy",kind:"runner",x:u,z:$i,vx:0,vz:a.speed,targetX:null,mergeSpeed:a.speed,hp:i("runner")})}break}case"flank":{const a=kn.flanker,o=ln[s.lane],l=s.side*Ui.startX,c=Math.abs(o-l)/Ui.lateralSpeed,h=Math.max(0,Ui.leadTime-c),u=Fs-a.speed*h-cn*c,d=s.arrive-Ui.leadTime;t.push({t:d-Ui.telegraph,type:"telegraph",kind:"flank",lane:s.lane,side:s.side,x:o,z:u+cn*c,duration:Ui.telegraph});for(let f=0;f<s.count;f++){const m=l+s.side*(f%2)*.7;t.push({t:d+f*.3+e.range(0,.05),type:"enemy",kind:"flanker",x:m,z:u-f%2*.6,vx:-s.side*Ui.lateralSpeed,vz:cn,targetX:o+e.range(-.5,.5),mergeSpeed:a.speed,hp:i("flanker")})}break}case"barrel":t.push({t:s.arrive-ma(cn),type:"enemy",kind:"barrel",x:ln[s.lane],z:$i,vx:0,vz:cn,targetX:null,mergeSpeed:cn,hp:i("barrel")});break;case"gates":t.push({t:s.arrive-ma(cn),type:"gateRow",gates:s.gates});break;case"boss":t.push({t:s.at,type:"boss"});break;case"wave":t.push({t:s.at,type:"wave",index:n++,name:s.name});break}return t.map((s,a)=>({p:s,i:a})).sort((s,a)=>s.p.t-a.p.t||s.i-a.i).map(s=>s.p)}function $o(r){return r<-1.6?0:r>1.6?2:1}function ds(r,e,t){const n=Math.max(r.x-r.halfWidth,Math.min(r.x+r.halfWidth,e)),i=Math.max(r.frontZ,Math.min(r.backZ,t));return{cx:n,cz:i,dist:Math.hypot(e-n,t-i)}}function Cm(r,e,t){return t>=r.frontZ-Ko.zMargin&&t<=r.backZ+Ko.zMargin&&Math.abs(e-r.x)<=Ko.lateral}function Jo(r,e,t,n,i){const s=r*n-e*t,a=r*t+e*n,o=Math.atan2(s,a);if(Math.abs(o)<=i)return[t,n];const l=Math.sign(o)*i,c=Math.cos(l),h=Math.sin(l),u=r*c-e*h,d=r*h+e*c,f=Math.hypot(u,d);return[u/f,d/f]}class mu{levelId;def;timeline;preplaced;waveCount;accumulator=0;cursor=0;fireCooldown=0;combo=0;lastKillAt=-1/0;nextEntityId=1;s;weaponId="rifle";fireRateMul=1;damageMul=1;constructor(e){this.def=ch(e),this.levelId=this.def.id,this.timeline=Rm(this.def);const t=new Set;this.timeline.forEach((n,i)=>{n.t<=0&&(n.type==="enemy"||n.type==="gateRow")&&t.add(i)}),this.preplaced=t,this.waveCount=this.def.spawns.filter(n=>n.type==="wave").length,this.resetRun("ready")}get state(){return this.s}get level(){return wf(this.def.id)}start(){this.s.status==="ready"&&(this.s.status="running",this.emit({type:"start"}))}move(e){if(this.s.status!=="running")return;const t=Math.max(0,Math.min(2,this.s.player.targetLane+e));this.setLane(t)}setLane(e){this.s.status==="running"&&(e!==0&&e!==1&&e!==2||this.s.player.targetLane!==e&&(this.s.player.targetLane=e,this.s.lane=e,this.emit({type:"laneChange",lane:e})))}pause(){this.s.status==="running"&&(this.s.status="paused",this.accumulator=0)}resume(){this.s.status==="paused"&&(this.s.status="running")}restart(){this.resetRun("ready"),this.start()}reset(){this.resetRun("ready")}update(e){if(this.s.status==="running"&&!(!Number.isFinite(e)||e<=0)){for(this.accumulator+=Math.min(e,tm);this.accumulator>=jo-1e-9;)if(this.accumulator-=jo,this.step(),this.s.status!=="running"){this.accumulator=0;break}}}resetRun(e){fu+=1,this.accumulator=0,this.cursor=0,this.fireCooldown=.35,this.combo=0,this.lastKillAt=-1/0,this.nextEntityId=1,this.weaponId=this.def.startingWeapon,this.fireRateMul=1,this.damageMul=1;const t=this.def.startingSquad;this.s={runId:fu,status:e,levelId:this.def.id,tick:0,elapsed:0,duration:this.def.duration,progress:0,lane:1,squad:t,squadCap:Mf,player:{x:ln[1],z:Kn,targetLane:1,lane:1,vx:0,formation:ji(t),halfWidth:ji(t).halfWidth,frontZ:ji(t).frontZ,backZ:ji(t).backZ,aimX:0,aimZ:-1,aimTargetId:null,lastHurtAt:-1},weapon:this.weaponState(t),kills:0,score:0,multiplier:1,wave:{index:-1,total:this.waveCount,name:""},enemies:[],bullets:[],gates:[],telegraphs:[],boss:null,events:[],outcome:null},this.timeline.forEach((n,i)=>{this.preplaced.has(i)&&(n.type==="enemy"?this.spawnEnemy(n,-n.t):n.type==="gateRow"&&this.spawnGateRow(n.gates,-n.t*cn))})}weaponState(e){const t=Ir[this.weaponId];return{id:t.id,name:t.name,fireRateMultiplier:this.fireRateMul,damageMultiplier:this.damageMul,fireRate:t.fireRate*this.fireRateMul,dps:dm(e,this.weaponId,this.fireRateMul,this.damageMul)}}emit(e){const t={...e,id:++_m,runId:this.s.runId,tick:this.s.tick,time:this.s.elapsed};this.s.events.push(t)}newId(){return this.nextEntityId++}spawnEnemy(e,t){const n=kn[e.kind],i=Math.hypot(e.vx,e.vz)||1,s=e.kind==="barrel"?"inert":e.targetX!==null?"flank":"advance";this.s.enemies.push({id:this.newId(),kind:e.kind,x:e.x,z:e.z+e.vz*t,vx:e.vx,vz:e.vz,faceX:e.vx/i,faceZ:e.vz/i,mode:s,attackProgress:0,attackReach:n.reach,cooldown:0,lane:$o(e.x),hp:e.hp,maxHp:e.hp,radius:n.radius,contactDamage:n.contactDamage,lastHitAt:-1,spawnedAt:this.s.elapsed,targetX:e.targetX,mergeSpeed:e.mergeSpeed})}spawnGateRow(e,t){const n=this.newId();for(const i of e){const s=mm(i),a=du(s);this.s.gates.push({id:this.newId(),rowId:n,lane:i.lane,x:ln[i.lane],z:$i+t,halfWidth:lu,effect:s,label:a.label,detail:a.detail,tone:a.tone,shootable:i.grow!==void 0,growthPerHit:i.grow?.perHit??0,growthMax:i.grow?.max??s.squadAdd,lastHitAt:-1,growthValue:s.squadAdd})}}spawnBoss(){const e=this.def.boss;if(!e)return;const t={id:this.newId(),name:e.name,x:0,z:$i,hp:e.hp,maxHp:e.hp,radius:e.radius,phase:"advancing",enrageIn:0,lastHitAt:-1,spec:e,siegeTime:0,slamCooldown:e.slamInterval*.5};this.s.boss=t,this.emit({type:"bossSpawn",bossId:t.id,name:t.name})}processTimeline(e){for(;this.cursor<this.timeline.length;){const t=this.cursor,n=this.timeline[t];if(!n||n.t>e+1e-9)break;if(this.cursor+=1,!this.preplaced.has(t))switch(n.type){case"enemy":this.spawnEnemy(n,Math.max(0,e-n.t));break;case"gateRow":this.spawnGateRow(n.gates,Math.max(0,e-n.t)*cn);break;case"telegraph":{const i={id:this.newId(),kind:n.kind,lane:n.lane,side:n.side,x:n.x,z:n.z,duration:n.duration,remaining:n.duration,slam:!1};this.s.telegraphs.push(i),this.emit({type:"telegraph",telegraphId:i.id,kind:i.kind,lane:i.lane,side:i.side});break}case"boss":this.spawnBoss();break;case"wave":this.s.wave={index:n.index,total:this.waveCount,name:n.name},this.emit({type:"wave",index:n.index,name:n.name});break}}}step(){const e=jo,t=this.s,n=t.tick*e;this.processTimeline(n),this.updateTelegraphs(e),this.movePlayer(e),this.moveEnemies(e),this.moveGates(e),this.updateBoss(e),this.updateAim(e),this.fire(e),this.moveBullets(e),this.resolveContacts(),this.resolveGateRows(),t.elapsed-this.lastKillAt>wm&&(this.combo=0),t.multiplier=Math.min(5,1+Math.floor(this.combo/12)),t.tick+=1,t.elapsed=t.tick*e,t.progress=Math.min(1,t.elapsed/t.duration);const i=ji(t.squad);t.player.formation=i,t.player.halfWidth=i.halfWidth,t.player.frontZ=i.frontZ,t.player.backZ=i.backZ,t.weapon=this.weaponState(t.squad),this.checkTerminal(),this.pruneEvents()}updateTelegraphs(e){const t=this.s;for(const i of t.telegraphs)i.remaining=Math.max(0,i.remaining-e);const n=t.telegraphs.filter(i=>i.remaining<=1e-9);if(n.length!==0){t.telegraphs=t.telegraphs.filter(i=>i.remaining>1e-9);for(const i of n)i.slam&&this.resolveSlam(i)}}movePlayer(e){const t=this.s.player,n=ln[t.targetLane],i=n-t.x,s=Yl*e;Math.abs(i)<=s?(t.vx=i/e,t.x=n):(t.vx=Math.sign(i)*Yl,t.x+=Math.sign(i)*s),t.x===n&&(t.vx=0),t.lane=$o(t.x)}moveEnemies(e){const t=this.s.player;for(const n of this.s.enemies)n.mode==="inert"?n.z+=n.vz*e:n.mode==="flank"||n.mode==="advance"?(this.advanceEnemy(n,e),(ds(t,n.x,n.z).dist-n.radius<=kn[n.kind].engageGap||Cm(t,n.x,n.z))&&(n.mode="pursue",n.targetX=null)):this.fightEnemy(n,e),n.lane=$o(n.x);this.separateEngaged();for(const n of this.s.enemies)_a(n)&&this.blockByFormation(n);for(const n of this.s.enemies)n.mode==="windup"&&n.attackProgress>=1-1e-9&&this.strike(n,ds(t,n.x,n.z).dist-n.radius)}advanceEnemy(e,t){const n=e.x;if(e.targetX!==null){const a=e.targetX-e.x,o=Math.abs(e.vx)*t;Math.abs(a)<=o?(e.x=e.targetX,e.targetX=null,e.mode="advance",e.vx=0,e.vz=e.mergeSpeed):e.x+=Math.sign(a)*o}e.z+=e.vz*t;const i=(e.x-n)/t,s=Math.hypot(i,e.vz)||1;[e.faceX,e.faceZ]=Jo(e.faceX,e.faceZ,i/s,e.vz/s,kn[e.kind].turnRate*t)}fightEnemy(e,t){const n=kn[e.kind],i=this.s.player,s=ds(i,e.x,e.z),a=s.dist-e.radius;if(e.mode!=="windup"&&a>rm)return e.mode="advance",e.cooldown=0,e.vx=0,e.vz=n.speed,this.advanceEnemy(e,t);let o=s.cx-e.x,l=s.cz-e.z;s.dist<1e-6&&(o=e.x-i.x,l=0);const c=Math.hypot(o,l)||1;if([e.faceX,e.faceZ]=Jo(e.faceX,e.faceZ,o/c,l/c,n.turnRate*t),e.cooldown=Math.max(0,e.cooldown-t),e.mode==="windup"){e.vx=0,e.vz=0,e.attackProgress=Math.min(1,e.attackProgress+t/n.windup);return}e.mode==="recover"&&e.cooldown<=0&&(e.mode="pursue");const h=e.faceX*(o/c)+e.faceZ*(l/c);if(e.mode==="pursue"&&a<=n.reach&&h>.5){e.mode="windup",e.attackProgress=0,e.vx=0,e.vz=0,this.emit({type:"enemyWindup",enemyId:e.id,kind:e.kind,x:e.x,z:e.z,duration:n.windup});return}const u=a-n.reach*.6,d=u>0?Math.min(n.pursuitSpeed,u/t)*Math.max(.25,h):0;e.vx=e.faceX*d,e.vz=e.faceZ*d,e.x+=e.vx*t,e.z+=e.vz*t}strike(e,t){const n=kn[e.kind],i=t<=n.reach+am;e.mode="recover",e.attackProgress=0,e.cooldown=n.cooldown,this.emit({type:"enemyStrike",enemyId:e.id,kind:e.kind,x:e.x,z:e.z,hit:i,damage:e.contactDamage}),i&&this.loseSoldiers(e.contactDamage,e.kind,e.x,e.z)}separateEngaged(){const e=this.s.enemies.filter(_a);for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let i=t+1;i<e.length;i++){const s=e[i];if(!s)continue;const a=(n.radius+s.radius)*.9,o=s.x-n.x,l=s.z-n.z,c=Math.hypot(o,l);if(c>=a)continue;const h=c>1e-6?o/c:n.id<s.id?1:-1,u=c>1e-6?l/c:0,d=(a-c)/2;n.mode!=="windup"&&(n.x-=h*d,n.z-=u*d),s.mode!=="windup"&&(s.x+=h*d,s.z+=u*d)}}}blockByFormation(e){const t=this.s.player,n=ds(t,e.x,e.z);if(n.dist>=e.radius)return;if(n.dist>1e-6){e.x=n.cx+(e.x-n.cx)/n.dist*e.radius,e.z=n.cz+(e.z-n.cz)/n.dist*e.radius;return}const i=e.x-(t.x-t.halfWidth),s=t.x+t.halfWidth-e.x,a=e.z-t.frontZ,o=t.backZ-e.z,l=Math.min(i,s,a,o);l===i?e.x=t.x-t.halfWidth-e.radius:l===s?e.x=t.x+t.halfWidth+e.radius:l===a?e.z=t.frontZ-e.radius:e.z=t.backZ+e.radius}moveGates(e){for(const t of this.s.gates)t.z+=cn*e}updateBoss(e){const t=this.s.boss;if(!t||t.phase==="dead")return;const n=t.spec;if(t.phase==="advancing"){t.z=Math.min(n.siegeZ,t.z+n.advanceSpeed*e),t.z>=n.siegeZ&&(t.phase="siege",t.siegeTime=0);return}if(t.phase==="siege"){t.siegeTime+=e,t.enrageIn=Math.max(0,n.enrageAfter-t.siegeTime),t.slamCooldown-=e;const i=this.s.telegraphs.some(s=>s.slam);if(t.slamCooldown<=0&&!i){const s=this.s.player.lane,a={id:this.newId(),kind:"slam",lane:s,side:0,x:ln[s],z:Kn,duration:n.slamTelegraph,remaining:n.slamTelegraph,slam:!0};this.s.telegraphs.push(a),this.emit({type:"telegraph",telegraphId:a.id,kind:"slam",lane:s,side:0}),t.slamCooldown=n.slamInterval}t.siegeTime>=n.enrageAfter&&(t.phase="enraged",t.enrageIn=0,this.s.telegraphs=this.s.telegraphs.filter(s=>!s.slam),this.emit({type:"bossEnrage",bossId:t.id}));return}t.z+=n.enrageSpeed*e}resolveSlam(e){const t=this.s.boss;if(t?.phase!=="siege")return;const n=this.s.player,i=Math.abs(n.x-ln[e.lane])<lu;if(this.emit({type:"bossSlam",lane:e.lane,x:ln[e.lane],z:Kn,hitSquad:i}),i){const s=Math.max(t.spec.slamMin,Math.ceil(this.s.squad*t.spec.slamFraction));this.loseSoldiers(s,"boss",ln[e.lane],Kn)}}updateAim(e){const t=this.s.player,n=(t.frontZ+t.backZ)/2,i=Ir[this.weaponId],s=Math.max(1,Math.min(i.maxBullets,this.s.squad)),a=t.formation.muzzleHalfWidth*(s===1?Sm:1);let o=null,l=1/0;for(const u of this.s.enemies){if(!_a(u)||u.hp<=0||u.mode!=="windup"&&u.z<t.frontZ-.2&&t.frontZ-u.z<i.range&&Math.abs(u.x-t.x)<a+u.radius+pu)continue;const f=ds(t,u.x,u.z).dist-(u.mode==="windup"?10+u.attackProgress:0);f<l&&(l=f,o=u)}let c=0,h=-1;if(o){const u=o.x-t.x,d=o.z-n,f=Math.hypot(u,d)||1;c=u/f,h=d/f}t.aimTargetId=o?o.id:null,[t.aimX,t.aimZ]=Jo(t.aimX,t.aimZ,c,h,om*e)}fire(e){const t=this.s;if(this.fireCooldown-=e,this.fireCooldown>0||t.squad<=0)return;const n=Ir[this.weaponId];this.fireCooldown+=1/(n.fireRate*this.fireRateMul),this.fireCooldown<0&&(this.fireCooldown=0);const i=Math.max(1,Math.min(n.maxBullets,t.squad)),a=Tf(t.squad)*n.damagePerGunner*this.damageMul/i,o=t.player,l=o.aimX,c=o.aimZ,u=!(l===0&&c===-1)?i:0,d=i-u;if(d>0&&this.fireGroup(n,d,a,0,-1,o.formation.muzzleHalfWidth,o.x,Fs-ba),u>0){const f=(o.frontZ+o.backZ)/2,m=(o.backZ-o.frontZ)/2,b=Math.min(Math.abs(l)>1e-9?o.halfWidth/Math.abs(l):1/0,Math.abs(c)>1e-9?m/Math.abs(c):1/0),g=Math.min(o.halfWidth,vm),p=o.x+l*(b+ba),x=f+c*(b+ba);this.fireGroup(n,u,a,l,c,g,p,x)}this.emit({type:"volley",weapon:n.id,x:o.x,z:Fs-ba,bullets:i,flankBullets:u,aimX:l,aimZ:c})}fireGroup(e,t,n,i,s,a,o,l){const c=this.s,h=-s,u=i;for(let d=0;d<t;d++){const f=t===1?0:d/(t-1)*2-1,m=(c.tick*7+d*13)%10/10-.45,b=f*a+m*(a/Math.max(1,t))*.8,g=e.spread*f;c.bullets.push({id:this.newId(),weapon:e.id,x:o+h*b,z:l+u*b,vx:i*e.bulletSpeed+h*g,vz:s*e.bulletSpeed+u*g,damage:n,radius:pu,travelled:0,range:e.range,pierceLeft:e.pierce,splash:e.splashRadius})}}moveBullets(e){const t=this.s,n=[];for(const i of t.bullets){const s=i.x,a=i.z,o=s+i.vx*e,l=a+i.vz*e;i.x=o,i.z=l,i.travelled+=Math.hypot(o-s,l-a),this.collideBullet(i,s,a,o,l)&&i.travelled<i.range&&i.z>em&&i.z<ym&&Math.abs(i.x)<Mm&&n.push(i)}t.bullets=n,t.enemies.some(i=>i.hp<=0)&&(t.enemies=t.enemies.filter(i=>i.hp>0))}collideBullet(e,t,n,i,s){const a=this.s,o=[],l=i-t,c=s-n,h=l*l+c*c||1e-12,u=(m,b)=>Math.max(0,Math.min(1,((m-t)*l+(b-n)*c)/h));for(const m of a.enemies){if(m.hp<=0)continue;const b=u(m.x,m.z);Math.hypot(t+l*b-m.x,n+c*b-m.z)<=m.radius+e.radius&&o.push({t:b,kind:"enemy",e:m})}const d=(m,b)=>{if(c===0)return Math.abs(n-m)<=b?0:null;const g=(m-n)/c,p=b/Math.abs(c);return g<-p||g>1+p?null:Math.max(0,Math.min(1,g))};for(const m of a.gates){if(!m.shootable)continue;const b=d(m.z,.2);b!==null&&Math.abs(t+l*b-m.x)<=m.halfWidth&&o.push({t:b,kind:"gate",g:m})}const f=a.boss;if(f&&f.phase!=="dead"){const m=f.z+xa,b=Math.min(n,s),g=Math.max(n,s);if(m>=b&&f.z-xa<=g){const p=Math.max(b,Math.min(g,m)),x=c===0?0:(p-n)/c;Math.abs(t+l*x-f.x)<=f.radius&&o.push({t:x,kind:"boss",boss:f})}}if(o.length===0)return!0;o.sort((m,b)=>m.t-b.t);for(const m of o){if(m.kind==="gate")return this.hitGate(m.g,e),!1;if(m.kind==="boss")return this.damageBoss(m.boss,e.damage,e.x),!1;const b=m.e;if(b.hp<=0)continue;if(e.splash>0)return this.explode(b.x,b.z,e.splash,e.damage,!0),!1;const g=Math.min(e.damage,b.hp);if(this.damageEnemy(b,g),e.damage-=g,e.pierceLeft-=1,e.pierceLeft<=0||e.damage<=1e-6)return!1}return!0}hitGate(e,t){if(e.lastHitAt=this.s.elapsed,this.emit({type:"hit",target:"gate",targetId:e.id,x:t.x,z:e.z,damage:0}),e.growthValue>=e.growthMax)return;e.growthValue=Math.min(e.growthMax,e.growthValue+e.growthPerHit),e.effect=gm(e.effect,e.growthValue);const n=du(e.effect);e.label=n.label,e.detail=n.detail,e.tone=n.tone,this.emit({type:"gateGrow",gateId:e.id,label:e.label})}damageEnemy(e,t){const n=this.s;if(e.hp-=t,e.lastHitAt=n.elapsed,this.emit({type:"hit",target:"enemy",targetId:e.id,x:e.x,z:e.z,damage:t}),e.hp<=1e-6){e.hp=0,this.combo+=1,this.lastKillAt=n.elapsed;const i=Math.min(5,1+Math.floor(this.combo/12)),s=kn[e.kind].points*i;n.kills+=1,n.score+=s,this.emit({type:"kill",enemyId:e.id,kind:e.kind,x:e.x,z:e.z,points:s}),e.kind==="barrel"&&this.explode(e.x,e.z,Yo.radius,Yo.damage,!1)}}explode(e,t,n,i,s){this.emit({type:"explosion",x:e,z:t,radius:n});for(const a of this.s.enemies)a.hp<=0||!s&&a.kind==="barrel"||Math.hypot(a.x-e,a.z-t)<=n+a.radius&&this.damageEnemy(a,Math.min(i,a.hp))}damageBoss(e,t,n){const i=this.s;e.hp=Math.max(0,e.hp-t),e.lastHitAt=i.elapsed,this.emit({type:"hit",target:"boss",targetId:e.id,x:n,z:e.z+xa,damage:t}),e.hp<=1e-6&&(e.hp=0,e.phase="dead",e.enrageIn=0,i.telegraphs=i.telegraphs.filter(s=>!s.slam),i.kills+=1,i.score+=Em*i.multiplier,this.emit({type:"bossDefeated",bossId:e.id,x:e.x,z:e.z}))}loseSoldiers(e,t,n,i){const s=this.s,a=Math.min(s.squad,e);a<=0||(s.squad-=a,s.player.lastHurtAt=s.elapsed,this.emit({type:"squadLoss",amount:a,cause:t,x:n,z:i,squad:s.squad}))}resolveContacts(){const e=this.s,t=e.player;let n=!1;for(const i of e.enemies)i.hp<=0||(i.kind==="barrel"&&ds(t,i.x,i.z).dist<i.radius?(i.hp=0,n=!0,this.emit({type:"explosion",x:i.x,z:i.z,radius:Yo.radius}),this.loseSoldiers(i.contactDamage,i.kind,i.x,i.z)):!_a(i)&&i.z-i.radius>yf&&(i.hp=0,n=!0));n&&(e.enemies=e.enemies.filter(i=>i.hp>0))}resolveGateRows(){const e=this.s,t=e.gates.filter(i=>i.z>=Fs);if(t.length===0)return;const n=new Set(t.map(i=>i.rowId));for(const i of n){const s=e.gates.filter(l=>l.rowId===i);let a=null,o=1/0;for(const l of s){const c=Math.abs(e.player.x-l.x);c<=l.halfWidth&&c<o&&(o=c,a=l)}e.gates=e.gates.filter(l=>l.rowId!==i),a&&this.applyGate(a)}}applyGate(e){const t=this.s,n=t.squad,i=bm(n,e.effect);t.squad=i,this.fireRateMul*=e.effect.fireRateMultiplier,this.damageMul*=e.effect.damageMultiplier,e.effect.weapon&&(this.weaponId=e.effect.weapon),i<n&&(t.player.lastHurtAt=t.elapsed),t.score+=Math.max(0,i-n)*5,this.emit({type:"gate",gateId:e.id,rowId:e.rowId,lane:e.lane,label:e.label,tone:e.tone,effect:e.effect,before:n,after:i,x:e.x,z:e.z}),i<n&&this.emit({type:"squadLoss",amount:n-i,cause:"gate",x:e.x,z:e.z,squad:i})}checkTerminal(){const e=this.s;if(e.squad<=0)return this.finish("lost","wiped");const t=e.boss;if(t?.phase==="enraged"&&t.z+xa>=Fs)return this.finish("lost","overrun");const n=this.cursor>=this.timeline.length,i=this.def.boss===null||t!==null&&t.phase==="dead",s=e.enemies.some(o=>o.kind!=="barrel"),a=e.telegraphs.length>0;if(n&&i&&!s&&!a)return this.finish("won","cleared");e.elapsed>e.duration+nm&&this.finish("lost","timeout")}finish(e,t){const n=this.s;e==="won"&&(n.score+=n.squad*Tm),n.status=e,n.telegraphs=[],n.outcome={status:e,reason:t,survivors:n.squad,score:n.score,elapsed:n.elapsed},this.emit(e==="won"?{type:"won",reason:t}:{type:"lost",reason:t})}pruneEvents(){const e=this.s,t=e.elapsed-im;let n=0;for(;n<e.events.length&&(e.events[n]?.time??0)<t;)n++;const i=e.events.length-n-sm;i>0&&(n+=i),n>0&&e.events.splice(0,n)}}const hh="182",Pm=0,gu=1,Im=2,Lr=1,Lm=2,Er=3,qn=0,Zt=1,Rn=2,Jn=0,ts=1,zr=2,bu=3,Jl=4,Dm=5,Ki=100,Fm=101,Nm=102,Um=103,km=104,Om=200,Bm=201,zm=202,qm=203,Zl=204,Ql=205,Gm=206,Hm=207,Vm=208,Wm=209,Xm=210,jm=211,Km=212,Ym=213,$m=214,ec=0,tc=1,nc=2,Gs=3,ic=4,sc=5,rc=6,ac=7,Af=0,Jm=1,Zm=2,Zn=0,uh=1,dh=2,fh=3,ph=4,mh=5,gh=6,Do=7,xu="attached",Qm="detached",Rf=300,ns=301,Hs=302,oc=303,lc=304,Fo=306,Li=1e3,Bn=1001,So=1002,Dt=1003,Cf=1004,Ar=1005,Ft=1006,co=1007,di=1008,gn=1009,Pf=1010,If=1011,qr=1012,bh=1013,ei=1014,bn=1015,dn=1016,xh=1017,_h=1018,Gr=1020,Lf=35902,Df=35899,Ff=1021,Nf=1022,hn=1023,mi=1026,Ji=1027,vh=1028,yh=1029,Vs=1030,Mh=1031,Sh=1033,ho=33776,uo=33777,fo=33778,po=33779,cc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37488,bc=37489,xc=37490,_c=37491,vc=37808,yc=37809,Mc=37810,Sc=37811,wc=37812,Tc=37813,Ec=37814,Ac=37815,Rc=37816,Cc=37817,Pc=37818,Ic=37819,Lc=37820,Dc=37821,Fc=36492,Nc=36494,Uc=36495,kc=36283,Oc=36284,Bc=36285,zc=36286,wh=2200,e0=2201,t0=2202,Hr=2300,Vr=2301,Zo=2302,Ns=2400,Us=2401,wo=2402,Th=2500,n0=2501,i0=0,Uf=1,qc=2,s0=3200,r0=3201,kf=0,a0=1,ui="",Et="srgb",an="srgb-linear",To="linear",bt="srgb",fs=7680,_u=519,o0=512,l0=513,c0=514,Eh=515,h0=516,u0=517,Ah=518,d0=519,Gc=35044,Qn=35048,vu="300 es",Yn=2e3,Eo=2001;function Of(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function f0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Wr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function p0(){const r=Wr("canvas");return r.style.display="block",r}const yu={};function Ao(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ye(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Je(...r){const e="THREE."+r.shift();console.error(e,...r)}function Xr(...r){const e=r.join(" ");e in yu||(yu[e]=!0,Ye(...r))}function m0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mu=1234567;const Dr=Math.PI/180,Ws=180/Math.PI;function In(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function Rh(r,e){return(r%e+e)%e}function g0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function b0(r,e,t){return r!==e?(t-r)/(e-r):0}function Fr(r,e,t){return(1-t)*r+t*e}function x0(r,e,t,n){return Fr(r,e,1-Math.exp(-t*n))}function _0(r,e=1){return e-Math.abs(Rh(r,e*2)-e)}function v0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function y0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function M0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function S0(r,e){return r+Math.random()*(e-r)}function w0(r){return r*(.5-Math.random())}function T0(r){r!==void 0&&(Mu=r);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function E0(r){return r*Dr}function A0(r){return r*Ws}function R0(r){return(r&r-1)===0&&r!==0}function C0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function P0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function I0(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _t(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const L0={DEG2RAD:Dr,RAD2DEG:Ws,generateUUID:In,clamp:ct,euclideanModulo:Rh,mapLinear:g0,inverseLerp:b0,lerp:Fr,damp:x0,pingpong:_0,smoothstep:v0,smootherstep:y0,randInt:M0,randFloat:S0,randFloatSpread:w0,seededRandom:T0,degToRad:E0,radToDeg:A0,isPowerOfTwo:R0,ceilPowerOfTwo:C0,floorPowerOfTwo:P0,setQuaternionFromProperEuler:I0,normalize:_t,denormalize:On};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],m=s[a+2],b=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(u!==b||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*b;g<0&&(d=-d,f=-f,m=-m,b=-b,g=-g);let p=1-o;if(g<.9995){const x=Math.acos(g),v=Math.sin(x);p=Math.sin(p*x)/v,o=Math.sin(o*x)/v,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+b*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+b*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new I,Su=new Bt;class rt{constructor(e,t,n,i,s,a,o,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=i[0],g=i[3],p=i[6],x=i[1],v=i[4],_=i[7],w=i[2],E=i[5],R=i[8];return s[0]=a*b+o*x+l*w,s[3]=a*g+o*v+l*E,s[6]=a*p+o*_+l*R,s[1]=c*b+h*x+u*w,s[4]=c*g+h*v+u*E,s[7]=c*p+h*_+u*R,s[2]=d*b+f*x+m*w,s[5]=d*g+f*v+m*E,s[8]=d*p+f*_+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return e[0]=u*b,e[1]=(i*c-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*l)*b,e[5]=(i*s-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const el=new rt,wu=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D0(){const r={enabled:!0,workingColorSpace:an,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?To:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[an]:{primaries:e,whitePoint:n,transfer:To,toXYZ:wu,fromXYZ:Tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:wu,fromXYZ:Tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),r}const pt=D0();function pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Os(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ps;class F0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=Wr("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N0=0;class Ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(tl(i[a].image)):s.push(tl(i[a]))}else s=tl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function tl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?F0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let U0=0;const nl=new I;class zt extends rs{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Bn,i=Bn,s=Ft,a=di,o=hn,l=gn,c=zt.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=In(),this.name="",this.source=new Ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Rf;zt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,i=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,_=(f+1)/2,w=(p+1)/2,E=(h+d)/4,R=(u+b)/4,L=(m+g)/4;return v>_&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=R/n):_>w?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=E/i,s=L/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=R/s,i=L/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k0 extends rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new zt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ch(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends k0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bf extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O0 extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),ya.subVectors(this.max,or),ms.subVectors(e.a,or),gs.subVectors(e.b,or),bs.subVectors(e.c,or),bi.subVectors(gs,ms),xi.subVectors(bs,gs),ki.subVectors(ms,bs);let t=[0,-bi.z,bi.y,0,-xi.z,xi.y,0,-ki.z,ki.y,bi.z,0,-bi.x,xi.z,0,-xi.x,ki.z,0,-ki.x,-bi.y,bi.x,0,-xi.y,xi.x,0,-ki.y,ki.x,0];return!il(t,ms,gs,bs,ya)||(t=[1,0,0,0,1,0,0,0,1],!il(t,ms,gs,bs,ya))?!1:(Ma.crossVectors(bi,xi),t=[Ma.x,Ma.y,Ma.z],il(t,ms,gs,bs,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,va=new Lt,ms=new I,gs=new I,bs=new I,bi=new I,xi=new I,ki=new I,or=new I,ya=new I,Ma=new I,Oi=new I;function il(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Oi.fromArray(r,s);const o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const B0=new Lt,lr=new I,sl=new I;class Gn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):B0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(lr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(sl)),this.expandByPoint(lr.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ri=new I,rl=new I,Sa=new I,_i=new I,al=new I,wa=new I,ol=new I;class No{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(rl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Sa),o=_i.dot(this.direction),l=-_i.dot(Sa),c=_i.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rl).addScaledVector(Sa,d),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),i=ri.dot(ri)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,i,s){al.subVectors(t,e),wa.subVectors(n,e),ol.crossVectors(al,wa);let a=this.direction.dot(ol),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const l=o*this.direction.dot(wa.crossVectors(_i,wa));if(l<0)return null;const c=o*this.direction.dot(al.cross(_i));if(c<0||l+c>a)return null;const h=-o*_i.dot(ol);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,m,b,g){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,m,b,g)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,m,b,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,b=c*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,b=c*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,b=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z0,e,q0)}lookAt(e,t,n){const i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),vi.crossVectors(n,pn),vi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),vi.crossVectors(n,pn)),vi.normalize(),Ta.crossVectors(pn,vi),i[0]=vi.x,i[4]=Ta.x,i[8]=pn.x,i[1]=vi.y,i[5]=Ta.y,i[9]=pn.y,i[2]=vi.z,i[6]=Ta.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],v=n[7],_=n[11],w=n[15],E=i[0],R=i[4],L=i[8],M=i[12],S=i[1],D=i[5],z=i[9],O=i[13],$=i[2],V=i[6],W=i[10],H=i[14],ae=i[3],ge=i[7],be=i[11],xe=i[15];return s[0]=a*E+o*S+l*$+c*ae,s[4]=a*R+o*D+l*V+c*ge,s[8]=a*L+o*z+l*W+c*be,s[12]=a*M+o*O+l*H+c*xe,s[1]=h*E+u*S+d*$+f*ae,s[5]=h*R+u*D+d*V+f*ge,s[9]=h*L+u*z+d*W+f*be,s[13]=h*M+u*O+d*H+f*xe,s[2]=m*E+b*S+g*$+p*ae,s[6]=m*R+b*D+g*V+p*ge,s[10]=m*L+b*z+g*W+p*be,s[14]=m*M+b*O+g*H+p*xe,s[3]=x*E+v*S+_*$+w*ae,s[7]=x*R+v*D+_*V+w*ge,s[11]=x*L+v*z+_*W+w*be,s[15]=x*M+v*O+_*H+w*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15],x=l*f-c*d,v=o*f-c*u,_=o*d-l*u,w=a*f-c*h,E=a*d-l*h,R=a*u-o*h;return t*(b*x-g*v+p*_)-n*(m*x-g*w+p*E)+i*(m*v-b*w+p*R)-s*(m*_-b*E+g*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],x=u*g*c-b*d*c+b*l*f-o*g*f-u*l*p+o*d*p,v=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,_=h*b*c-m*u*c+m*o*f-a*b*f-h*o*p+a*u*p,w=m*u*l-h*b*l-m*o*d+a*b*d+h*o*g-a*u*g,E=t*x+n*v+i*_+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=x*R,e[1]=(b*d*s-u*g*s-b*i*f+n*g*f+u*i*p-n*d*p)*R,e[2]=(o*g*s-b*l*s+b*i*c-n*g*c-o*i*p+n*l*p)*R,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*R,e[4]=v*R,e[5]=(h*g*s-m*d*s+m*i*f-t*g*f-h*i*p+t*d*p)*R,e[6]=(m*l*s-a*g*s-m*i*c+t*g*c+a*i*p-t*l*p)*R,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*f+t*l*f)*R,e[8]=_*R,e[9]=(m*u*s-h*b*s-m*n*f+t*b*f+h*n*p-t*u*p)*R,e[10]=(a*b*s-m*o*s+m*n*c-t*b*c-a*n*p+t*o*p)*R,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*f-t*o*f)*R,e[12]=w*R,e[13]=(h*b*i-m*u*i+m*n*d-t*b*d-h*n*g+t*u*g)*R,e[14]=(m*o*i-a*b*i-m*n*l+t*b*l+a*n*g-t*o*g)*R,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,b=a*h,g=a*u,p=o*u,x=l*c,v=l*h,_=l*u,w=n.x,E=n.y,R=n.z;return i[0]=(1-(b+p))*w,i[1]=(f+_)*w,i[2]=(m-v)*w,i[3]=0,i[4]=(f-_)*E,i[5]=(1-(d+p))*E,i[6]=(g+x)*E,i[7]=0,i[8]=(m+v)*R,i[9]=(g-x)*R,i[10]=(1-(d+b))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=xs.set(i[0],i[1],i[2]).length();const a=xs.set(i[4],i[5],i[6]).length(),o=xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Nn.copy(this);const c=1/s,h=1/a,u=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Yn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,b;if(l)m=s/(a-s),b=a*s/(a-s);else if(o===Yn)m=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Eo)m=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Yn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,b;if(l)m=1/(a-s),b=a/(a-s);else if(o===Yn)m=-2/(a-s),b=-(a+s)/(a-s);else if(o===Eo)m=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xs=new I,Nn=new Ke,z0=new I(0,0,0),q0=new I(1,1,1),vi=new I,Ta=new I,pn=new I,Eu=new Ke,Au=new Bt;class _n{constructor(e=0,t=0,n=0,i=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G0=0;const Ru=new I,_s=new Bt,ai=new Ke,Ea=new I,cr=new I,H0=new I,V0=new Bt,Cu=new I(1,0,0),Pu=new I(0,1,0),Iu=new I(0,0,1),Lu={type:"added"},W0={type:"removed"},vs={type:"childadded",child:null},ll={type:"childremoved",child:null};class Tt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new I,t=new _n,n=new Bt,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new rt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ea.copy(e):Ea.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(cr,Ea,this.up):ai.lookAt(Ea,cr,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(ai),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),vs.child=e,this.dispatchEvent(vs),vs.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W0),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,H0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new I(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new I,oi=new I,cl=new I,li=new I,ys=new I,Ms=new I,Du=new I,hl=new I,ul=new I,dl=new I,fl=new wt,pl=new wt,ml=new wt;class Cn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Un.subVectors(i,t),oi.subVectors(n,t),cl.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(oi),l=Un.dot(cl),c=oi.dot(oi),h=oi.dot(cl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return fl.setScalar(0),pl.setScalar(0),ml.setScalar(0),fl.fromBufferAttribute(e,t),pl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(fl,s.x),a.addScaledVector(pl,s.y),a.addScaledVector(ml,s.z),a}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),oi.subVectors(e,t),Un.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Un.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ys.subVectors(i,n),Ms.subVectors(s,n),hl.subVectors(e,n);const l=ys.dot(hl),c=Ms.dot(hl);if(l<=0&&c<=0)return t.copy(n);ul.subVectors(e,i);const h=ys.dot(ul),u=Ms.dot(ul);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ys,a);dl.subVectors(e,s);const f=ys.dot(dl),m=Ms.dot(dl);if(m>=0&&f<=m)return t.copy(s);const b=f*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ms,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Du.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Du,o);const p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(ys,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function gl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Rh(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=gl(a,s,e+1/3),this.g=gl(a,s,e),this.b=gl(a,s,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=qf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return pt.workingToColorSpace(Kt.copy(this),e),Math.round(ct(Kt.r*255,0,255))*65536+Math.round(ct(Kt.g*255,0,255))*256+Math.round(ct(Kt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Kt.copy(this),t);const n=Kt.r,i=Kt.g,s=Kt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Et){pt.workingToColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,i=Kt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Aa);const n=Fr(yi.h,Aa.h,t),i=Fr(yi.s,Aa.s,t),s=Fr(yi.l,Aa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new we;we.NAMES=qf;let X0=0;class zn extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=In(),this.name="",this.type="Material",this.blending=ts,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Ql,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ql&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_u&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wt extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new I,Ra=new le;let j0=0;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:j0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}}class Gf extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hf extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let K0=0;const Sn=new Ke,bl=new Tt,Ss=new I,mn=new Lt,hr=new Lt,Vt=new I;class vt extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?Hf:Gf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(mn.min,hr.min),mn.expandByPoint(Vt),Vt.addVectors(mn.max,hr.max),mn.expandByPoint(Vt)):(mn.expandByPoint(hr.min),mn.expandByPoint(hr.max))}mn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Vt.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(e,c),Vt.add(Ss)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new I,l[L]=new I;const c=new I,h=new I,u=new I,d=new le,f=new le,m=new le,b=new I,g=new I;function p(L,M,S){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,M),m.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),o[L].add(b),o[M].add(b),o[S].add(b),l[L].add(g),l[M].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,M=x.length;L<M;++L){const S=x[L],D=S.start,z=S.count;for(let O=D,$=D+z;O<$;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new I,_=new I,w=new I,E=new I;function R(L){w.fromBufferAttribute(i,L),E.copy(w);const M=o[L];v.copy(M),v.sub(w.multiplyScalar(w.dot(M))).normalize(),_.crossVectors(E,M);const D=_.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,D)}for(let L=0,M=x.length;L<M;++L){const S=x[L],D=S.start,z=S.count;for(let O=D,$=D+z;O<$;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new St(d,h,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fu=new Ke,Bi=new No,Ca=new Gn,Nu=new I,Pa=new I,Ia=new I,La=new I,xl=new I,Da=new I,Uu=new I,Fa=new I;class mt extends Tt{constructor(e=new vt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(xl.fromBufferAttribute(u,e),a?Da.addScaledVector(xl,h):Da.addScaledVector(xl.sub(t),h))}t.add(Da)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(Ca.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Ca,Nu)===null||Bi.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Fu.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(Fu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){const g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,w=v;_<w;_+=3){const E=o.getX(_),R=o.getX(_+1),L=o.getX(_+2);i=Na(this,p,e,n,c,h,u,E,R,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){const x=o.getX(g),v=o.getX(g+1),_=o.getX(g+2);i=Na(this,a,e,n,c,h,u,x,v,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){const g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,w=v;_<w;_+=3){const E=_,R=_+1,L=_+2;i=Na(this,p,e,n,c,h,u,E,R,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){const x=g,v=g+1,_=g+2;i=Na(this,a,e,n,c,h,u,x,v,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Y0(r,e,t,n,i,s,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===qn,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:r}}function Na(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Pa),r.getVertexPosition(l,Ia),r.getVertexPosition(c,La);const h=Y0(r,e,t,n,Pa,Ia,La,Uu);if(h){const u=new I;Cn.getBarycoord(Uu,Pa,Ia,La,u),i&&(h.uv=Cn.getInterpolatedAttribute(i,o,l,c,u,new le)),s&&(h.uv1=Cn.getInterpolatedAttribute(s,o,l,c,u,new le)),a&&(h.normal=Cn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Cn.getNormal(Pa,Ia,La,d.normal),h.face=d,h.barycoord=u}return h}class Di extends vt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function m(b,g,p,x,v,_,w,E,R,L,M){const S=_/R,D=w/L,z=_/2,O=w/2,$=E/2,V=R+1,W=L+1;let H=0,ae=0;const ge=new I;for(let be=0;be<W;be++){const xe=be*D-O;for(let je=0;je<V;je++){const We=je*S-z;ge[b]=We*x,ge[g]=xe*v,ge[p]=$,c.push(ge.x,ge.y,ge.z),ge[b]=0,ge[g]=0,ge[p]=E>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(je/R),u.push(1-be/L),H+=1}}for(let be=0;be<L;be++)for(let xe=0;xe<R;xe++){const je=d+xe+V*be,We=d+xe+V*(be+1),Le=d+(xe+1)+V*(be+1),st=d+(xe+1)+V*be;l.push(je,We,st),l.push(We,Le,st),ae+=6}o.addGroup(f,ae,M),f+=ae,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(r){const e={};for(let t=0;t<r.length;t++){const n=Xs(r[t]);for(const i in n)e[i]=n[i]}return e}function $0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const is={clone:Xs,merge:tn};var J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nt extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=$0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wf extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new I,ku=new le,Ou=new le;class nn extends Wf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,ku,Ou),t.subVectors(Ou,ku)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,Ts=1;class Q0 extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(ws,Ts,e,t);i.layers=this.layers,this.add(i);const s=new nn(ws,Ts,e,t);s.layers=this.layers,this.add(s);const a=new nn(ws,Ts,e,t);a.layers=this.layers,this.add(a);const o=new nn(ws,Ts,e,t);o.layers=this.layers,this.add(o);const l=new nn(ws,Ts,e,t);l.layers=this.layers,this.add(l);const c=new nn(ws,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xf extends zt{constructor(e=[],t=ns,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jf extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Di(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Jn});s.uniforms.tEquirect.value=t;const a=new mt(i,s),o=t.minFilter;return t.minFilter===di&&(t.minFilter=Ft),new Q0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Xt extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ph{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new Ph(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kf extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gc,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new I;class jr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $f extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Es;const ur=new I,As=new I,Rs=new I,Cs=new le,dr=new le,Jf=new Ke,Ua=new I,fr=new I,ka=new I,Bu=new le,vl=new le,zu=new le;class tg extends Tt{constructor(e=new $f){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yf(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new jr(n,3,0,!1)),Es.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=Es,this.material=e,this.center=new le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),Jf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Oa(Ua.set(-.5,-.5,0),Rs,a,As,i,s),Oa(fr.set(.5,-.5,0),Rs,a,As,i,s),Oa(ka.set(.5,.5,0),Rs,a,As,i,s),Bu.set(0,0),vl.set(1,0),zu.set(1,1);let o=e.ray.intersectTriangle(Ua,fr,ka,!1,ur);if(o===null&&(Oa(fr.set(-.5,.5,0),Rs,a,As,i,s),vl.set(0,1),o=e.ray.intersectTriangle(Ua,ka,fr,!1,ur),o===null))return;const l=e.ray.origin.distanceTo(ur);l<e.near||l>e.far||t.push({distance:l,point:ur.clone(),uv:Cn.getInterpolation(ur,Ua,fr,ka,Bu,vl,zu,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Oa(r,e,t,n,i,s){Cs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(dr.x=s*Cs.x-i*Cs.y,dr.y=i*Cs.x+s*Cs.y):dr.copy(Cs),r.copy(e),r.x+=dr.x,r.y+=dr.y,r.applyMatrix4(Jf)}const qu=new I,Gu=new wt,Hu=new wt,ng=new I,Vu=new Ke,Ba=new I,yl=new Gn,Wu=new Ke,Ml=new No;class ig extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xu,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingBox.expandByPoint(Ba)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingSphere.expandByPoint(Ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yl.copy(this.boundingSphere),yl.applyMatrix4(i),e.ray.intersectsSphere(yl)!==!1&&(Wu.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(Wu),!(this.boundingBox!==null&&Ml.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ml)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Gu.fromBufferAttribute(i.attributes.skinIndex,e),Hu.fromBufferAttribute(i.attributes.skinWeight,e),qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Hu.getComponent(s);if(a!==0){const o=Gu.getComponent(s);Vu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ng.copy(qu).applyMatrix4(Vu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zf extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ea extends zt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Dt,h=Dt,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xu=new Ke,sg=new Ke;class Ih{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:sg;Xu.multiplyMatrices(o,t[s]),Xu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ih(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ea(t,e,e,hn,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Ye("Skeleton: No bone found with UUID:",s),a=new Zf),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class xn extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new Ke,ju=new Ke,za=[],Ku=new Lt,rg=new Ke,pr=new mt,mr=new Gn;class as extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Ku.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Ku)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),mr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),e.ray.intersectsSphere(mr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ps),ju.multiplyMatrices(n,Ps),pr.matrixWorld=ju,pr.raycast(e,za);for(let a=0,o=za.length;a<o;a++){const l=za[a];l.instanceId=s,l.object=this,t.push(l)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ea(new Float32Array(i*this.count),i,this.count,vh,bn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sl=new I,ag=new I,og=new rt;class Xi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sl.subVectors(n,t).cross(ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||og.getNormalMatrix(e),i=this.coplanarPoint(Sl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Gn,lg=new le(.5,.5),qa=new I;class Lh{constructor(e=new Xi,t=new Xi,n=new Xi,i=new Xi,s=new Xi,a=new Xi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],b=s[9],g=s[10],p=s[11],x=s[12],v=s[13],_=s[14],w=s[15];if(i[0].setComponents(c-a,f-h,p-m,w-x).normalize(),i[1].setComponents(c+a,f+h,p+m,w+x).normalize(),i[2].setComponents(c+o,f+u,p+b,w+v).normalize(),i[3].setComponents(c-o,f-u,p-b,w-v).normalize(),n)i[4].setComponents(l,d,g,_).normalize(),i[5].setComponents(c-l,f-d,p-g,w-_).normalize();else if(i[4].setComponents(c-l,f-d,p-g,w-_).normalize(),t===Yn)i[5].setComponents(c+l,f+d,p+g,w+_).normalize();else if(t===Eo)i[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);const t=lg.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qa.x=i.normal.x>0?e.max.x:e.min.x,qa.y=i.normal.y>0?e.max.y:e.min.y,qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qf extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ro=new I,Co=new I,Yu=new Ke,gr=new No,Ga=new Gn,wl=new I,$u=new I;class Dh extends Tt{constructor(e=new vt,t=new Qf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ro.fromBufferAttribute(t,i-1),Co.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new it(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(i),Ga.radius+=s,e.ray.intersectsSphere(Ga)===!1)return;Yu.copy(i).invert(),gr.copy(e.ray).applyMatrix4(Yu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=c){const p=h.getX(b),x=h.getX(b+1),v=Ha(this,e,gr,l,p,x,b);v&&t.push(v)}if(this.isLineLoop){const b=h.getX(m-1),g=h.getX(f),p=Ha(this,e,gr,l,b,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=c){const p=Ha(this,e,gr,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=Ha(this,e,gr,l,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ha(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Ro.fromBufferAttribute(o,i),Co.fromBufferAttribute(o,s),t.distanceSqToSegment(Ro,Co,wl,$u)>n)return;wl.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(wl);if(!(c<e.near||c>e.far))return{distance:c,point:$u.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Ju=new I,Zu=new I;class cg extends Dh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ju.fromBufferAttribute(t,i),Zu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ju.distanceTo(Zu);e.setAttribute("lineDistance",new it(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hg extends Dh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ep extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qu=new Ke,Hc=new No,Va=new Gn,Wa=new I;class ug extends Tt{constructor(e=new vt,t=new ep){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;Qu.copy(i).invert(),Hc.copy(e.ray).applyMatrix4(Qu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,b=f;m<b;m++){const g=c.getX(m);Wa.fromBufferAttribute(u,g),ed(Wa,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)Wa.fromBufferAttribute(u,m),ed(Wa,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ed(r,e,t,n,i,s,a){const o=Hc.distanceSqToPoint(r);if(o<t){const l=new I;Hc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Po extends zt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kr extends zt{constructor(e,t,n=ei,i,s,a,o=Dt,l=Dt,c,h=mi,u=1){if(h!==mi&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dg extends Kr{constructor(e,t=ei,n=ns,i,s,a=Dt,o=Dt,l,c=mi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tp extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class js extends vt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+s,b=i+1,g=new I,p=new I;for(let x=0;x<=m;x++){let v=0,_=0,w=0,E=0;if(x<=n){const M=x/n,S=M*Math.PI/2;_=-h-e*Math.cos(S),w=e*Math.sin(S),E=-e*Math.cos(S),v=M*u}else if(x<=n+s){const M=(x-n)/s;_=-h+M*t,w=e,E=0,v=u+M*d}else{const M=(x-n-s)/n,S=M*Math.PI/2;_=h+e*Math.sin(S),w=e*Math.cos(S),E=e*Math.sin(S),v=u+d+M*u}const R=Math.max(0,Math.min(1,v/f));let L=0;x===0?L=.5/i:x===m&&(L=-.5/i);for(let M=0;M<=i;M++){const S=M/i,D=S*Math.PI*2,z=Math.sin(D),O=Math.cos(D);p.x=-w*O,p.y=_,p.z=w*z,o.push(p.x,p.y,p.z),g.set(-w*O,E,w*z),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+L,R)}if(x>0){const M=(x-1)*b;for(let S=0;S<i;S++){const D=M+S,z=M+S+1,O=x*b+S,$=x*b+S+1;a.push(D,z,O),a.push(z,$,O)}}}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Uo extends vt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const b=[],g=n/2;let p=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function x(){const _=new I,w=new I;let E=0;const R=(t-e)/n;for(let L=0;L<=s;L++){const M=[],S=L/s,D=S*(t-e)+e;for(let z=0;z<=i;z++){const O=z/i,$=O*l+o,V=Math.sin($),W=Math.cos($);w.x=D*V,w.y=-S*n+g,w.z=D*W,u.push(w.x,w.y,w.z),_.set(V,R,W).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-S),M.push(m++)}b.push(M)}for(let L=0;L<i;L++)for(let M=0;M<s;M++){const S=b[M][L],D=b[M+1][L],z=b[M+1][L+1],O=b[M][L+1];(e>0||M!==0)&&(h.push(S,D,O),E+=3),(t>0||M!==s-1)&&(h.push(D,z,O),E+=3)}c.addGroup(p,E,0),p+=E}function v(_){const w=m,E=new le,R=new I;let L=0;const M=_===!0?e:t,S=_===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;const D=m;for(let z=0;z<=i;z++){const $=z/i*l+o,V=Math.cos($),W=Math.sin($);R.x=M*W,R.y=g*S,R.z=M*V,u.push(R.x,R.y,R.z),d.push(0,S,0),E.x=V*.5+.5,E.y=W*.5*S+.5,f.push(E.x,E.y),m++}for(let z=0;z<i;z++){const O=w+z,$=D+z;_===!0?h.push($,$+1,O):h.push($+1,$,O),L+=3}c.addGroup(p,L,_===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fh extends Uo{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Fh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nh extends vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new I,_=new I,w=new I;for(let E=0;E<t.length;E+=3)f(t[E+0],v),f(t[E+1],_),f(t[E+2],w),l(v,_,w,x)}function l(x,v,_,w){const E=w+1,R=[];for(let L=0;L<=E;L++){R[L]=[];const M=x.clone().lerp(_,L/E),S=v.clone().lerp(_,L/E),D=E-L;for(let z=0;z<=D;z++)z===0&&L===E?R[L][z]=M:R[L][z]=M.clone().lerp(S,z/D)}for(let L=0;L<E;L++)for(let M=0;M<2*(E-L)-1;M++){const S=Math.floor(M/2);M%2===0?(d(R[L][S+1]),d(R[L+1][S]),d(R[L][S])):(d(R[L][S+1]),d(R[L+1][S+1]),d(R[L+1][S]))}}function c(x){const v=new I;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(x),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function h(){const x=new I;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const _=g(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(_,1-w)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){const v=a[x+0],_=a[x+2],w=a[x+4],E=Math.max(v,_,w),R=Math.min(v,_,w);E>.9&&R<.1&&(v<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,v){const _=x*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function m(){const x=new I,v=new I,_=new I,w=new I,E=new le,R=new le,L=new le;for(let M=0,S=0;M<s.length;M+=9,S+=6){x.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),E.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),L.set(a[S+4],a[S+5]),w.copy(x).add(v).add(_).divideScalar(3);const D=g(w);b(E,S+0,x,D),b(R,S+2,v,D),b(L,S+4,_,D)}}function b(x,v,_,w){w<0&&x.x===1&&(a[v]=x.x-1),_.x===0&&_.z===0&&(a[v]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.vertices,e.indices,e.radius,e.detail)}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new le:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,i=[],s=[],a=[],o=new I,l=new Ke;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(ct(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ct(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Uh extends ti{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fg extends Uh{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function kh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Xa=new I,Tl=new kh,El=new kh,Al=new kh;class pg extends ti{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Xa.subVectors(i[0],i[1]).add(i[0]),c=Xa);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Xa.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),Tl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,b,g),El.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,b,g),Al.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,b,g)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),El.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Al.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Tl.calc(l),El.calc(l),Al.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function td(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function mg(r,e){const t=1-r;return t*t*e}function gg(r,e){return 2*(1-r)*r*e}function bg(r,e){return r*r*e}function Nr(r,e,t,n){return mg(r,e)+gg(r,t)+bg(r,n)}function xg(r,e){const t=1-r;return t*t*t*e}function _g(r,e){const t=1-r;return 3*t*t*r*e}function vg(r,e){return 3*(1-r)*r*r*e}function yg(r,e){return r*r*r*e}function Ur(r,e,t,n,i){return xg(r,e)+_g(r,t)+vg(r,n)+yg(r,i)}class np extends ti{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ur(e,i.x,s.x,a.x,o.x),Ur(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mg extends ti{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ur(e,i.x,s.x,a.x,o.x),Ur(e,i.y,s.y,a.y,o.y),Ur(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ip extends ti{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sg extends ti{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sp extends ti{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Nr(e,i.x,s.x,a.x),Nr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wg extends ti{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Nr(e,i.x,s.x,a.x),Nr(e,i.y,s.y,a.y),Nr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rp extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(td(o,l.x,c.x,h.x,u.x),td(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}}var Vc=Object.freeze({__proto__:null,ArcCurve:fg,CatmullRomCurve3:pg,CubicBezierCurve:np,CubicBezierCurve3:Mg,EllipseCurve:Uh,LineCurve:ip,LineCurve3:Sg,QuadraticBezierCurve:sp,QuadraticBezierCurve3:wg,SplineCurve:rp});class Tg extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Vc[i.type]().fromJSON(i))}return this}}class Wc extends Tg{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ip(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new sp(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new np(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Uh(e,t,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bs extends Wc{constructor(e){super(e),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Wc().fromJSON(i))}return this}}function Eg(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=ap(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Ig(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,u=l;for(let d=t;d<i;d+=t){const f=r[d],m=r[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Yr(s,a,t,o,l,c,0),a}function ap(r,e,t,n,i){let s;if(i===Gg(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=nd(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=nd(a/n|0,r[a],r[a+1],s);return s&&Ks(s,s.next)&&(Jr(s),s=s.next),s}function ss(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ks(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Ug(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Rg(r,n,i,s):Ag(r)){e.push(l.i,r.i,c.i),Jr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Cg(ss(r),e),Yr(r,e,t,n,i,s,2)):a===2&&Pg(r,e,t,n,i,s):Yr(ss(r),e,t,n,i,s,1);break}}}function Ag(r){const e=r.prev,t=r,n=r.next;if(Rt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),d=Math.max(i,s,a),f=Math.max(o,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Rr(i,o,s,l,a,c,m.x,m.y)&&Rt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Rg(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Rt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),b=Math.max(o,l,c),g=Math.max(h,u,d),p=Xc(f,m,e,t,n),x=Xc(b,g,e,t,n);let v=r.prevZ,_=r.nextZ;for(;v&&v.z>=p&&_&&_.z<=x;){if(v.x>=f&&v.x<=b&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Rr(o,h,l,u,c,d,v.x,v.y)&&Rt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=b&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Rr(o,h,l,u,c,d,_.x,_.y)&&Rt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=b&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Rr(o,h,l,u,c,d,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=b&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Rr(o,h,l,u,c,d,_.x,_.y)&&Rt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Cg(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ks(n,i)&&lp(n,t,t.next,i)&&$r(n,i)&&$r(i,n)&&(e.push(n.i,t.i,i.i),Jr(t),Jr(t.next),t=r=i),t=t.next}while(t!==r);return ss(t)}function Pg(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bg(a,o)){let l=cp(a,o);a=ss(a,a.next),l=ss(l,l.next),Yr(a,e,t,n,i,s,0),Yr(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Ig(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=ap(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Og(c))}i.sort(Lg);for(let s=0;s<i.length;s++)t=Dg(i[s],t);return t}function Lg(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Dg(r,e){const t=Fg(r,e);if(!t)return e;const n=cp(t,r);return ss(n,n.next),ss(t,t.next)}function Fg(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Ks(r,t))return t;do{if(Ks(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&op(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);$r(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Ng(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Ng(r,e){return Rt(r.prev,r,e.prev)<0&&Rt(e.next,r,r.next)<0}function Ug(r,e,t,n){let i=r;do i.z===0&&(i.z=Xc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,kg(i)}function kg(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function Xc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Og(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function op(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Rr(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&op(r,e,t,n,i,s,a,o)}function Bg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!zg(r,e)&&($r(r,e)&&$r(e,r)&&qg(r,e)&&(Rt(r.prev,r,e.prev)||Rt(r,e.prev,e))||Ks(r,e)&&Rt(r.prev,r,r.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ks(r,e){return r.x===e.x&&r.y===e.y}function lp(r,e,t,n){const i=Ka(Rt(r,e,t)),s=Ka(Rt(r,e,n)),a=Ka(Rt(t,n,r)),o=Ka(Rt(t,n,e));return!!(i!==s&&a!==o||i===0&&ja(r,t,e)||s===0&&ja(r,n,e)||a===0&&ja(t,r,n)||o===0&&ja(t,e,n))}function ja(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ka(r){return r>0?1:r<0?-1:0}function zg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&lp(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function $r(r,e){return Rt(r.prev,r,r.next)<0?Rt(r,e,r.next)>=0&&Rt(r,r.prev,e)>=0:Rt(r,e,r.prev)<0||Rt(r,r.next,e)<0}function qg(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function cp(r,e){const t=jc(r.i,r.x,r.y),n=jc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function nd(r,e,t,n){const i=jc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Jr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function jc(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gg(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Hg{static triangulate(e,t,n=2){return Eg(e,t,n)}}class $n{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return $n.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];id(e),sd(n,e);let a=e.length;t.forEach(id);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,sd(n,t[l]);const o=Hg.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function id(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function sd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Oh extends vt{constructor(e=new Bs([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new it(i,3)),this.setAttribute("uv",new it(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Vg;let v,_=!1,w,E,R,L;if(p){v=p.getSpacedPoints(h),_=!0,d=!1;const X=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,X),E=new I,R=new I,L=new I}d||(g=0,f=0,m=0,b=0);const M=o.extractPoints(c);let S=M.shape;const D=M.holes;if(!$n.isClockWise(S)){S=S.reverse();for(let X=0,ne=D.length;X<ne;X++){const J=D[X];$n.isClockWise(J)&&(D[X]=J.reverse())}}function O(X){const J=10000000000000001e-36;let he=X[0];for(let C=1;C<=X.length;C++){const Ce=C%X.length,Te=X[Ce],Oe=Te.x-he.x,ue=Te.y-he.y,P=Oe*Oe+ue*ue,y=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(he.x),Math.abs(he.y)),N=J*y*y;if(P<=N){X.splice(Ce,1),C--;continue}he=Te}}O(S),D.forEach(O);const $=D.length,V=S;for(let X=0;X<$;X++){const ne=D[X];S=S.concat(ne)}function W(X,ne,J){return ne||Je("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(ne,J)}const H=S.length;function ae(X,ne,J){let he,C,Ce;const Te=X.x-ne.x,Oe=X.y-ne.y,ue=J.x-X.x,P=J.y-X.y,y=Te*Te+Oe*Oe,N=Te*P-Oe*ue;if(Math.abs(N)>Number.EPSILON){const j=Math.sqrt(y),se=Math.sqrt(ue*ue+P*P),Z=ne.x-Oe/j,Ge=ne.y+Te/j,de=J.x-P/se,Ie=J.y+ue/se,$e=((de-Z)*P-(Ie-Ge)*ue)/(Te*P-Oe*ue);he=Z+Te*$e-X.x,C=Ge+Oe*$e-X.y;const fe=he*he+C*C;if(fe<=2)return new le(he,C);Ce=Math.sqrt(fe/2)}else{let j=!1;Te>Number.EPSILON?ue>Number.EPSILON&&(j=!0):Te<-Number.EPSILON?ue<-Number.EPSILON&&(j=!0):Math.sign(Oe)===Math.sign(P)&&(j=!0),j?(he=-Oe,C=Te,Ce=Math.sqrt(y)):(he=Te,C=Oe,Ce=Math.sqrt(y/2))}return new le(he/Ce,C/Ce)}const ge=[];for(let X=0,ne=V.length,J=ne-1,he=X+1;X<ne;X++,J++,he++)J===ne&&(J=0),he===ne&&(he=0),ge[X]=ae(V[X],V[J],V[he]);const be=[];let xe,je=ge.concat();for(let X=0,ne=$;X<ne;X++){const J=D[X];xe=[];for(let he=0,C=J.length,Ce=C-1,Te=he+1;he<C;he++,Ce++,Te++)Ce===C&&(Ce=0),Te===C&&(Te=0),xe[he]=ae(J[he],J[Ce],J[Te]);be.push(xe),je=je.concat(xe)}let We;if(g===0)We=$n.triangulateShape(V,D);else{const X=[],ne=[];for(let J=0;J<g;J++){const he=J/g,C=f*Math.cos(he*Math.PI/2),Ce=m*Math.sin(he*Math.PI/2)+b;for(let Te=0,Oe=V.length;Te<Oe;Te++){const ue=W(V[Te],ge[Te],Ce);qe(ue.x,ue.y,-C),he===0&&X.push(ue)}for(let Te=0,Oe=$;Te<Oe;Te++){const ue=D[Te];xe=be[Te];const P=[];for(let y=0,N=ue.length;y<N;y++){const j=W(ue[y],xe[y],Ce);qe(j.x,j.y,-C),he===0&&P.push(j)}he===0&&ne.push(P)}}We=$n.triangulateShape(X,ne)}const Le=We.length,st=m+b;for(let X=0;X<H;X++){const ne=d?W(S[X],je[X],st):S[X];_?(R.copy(w.normals[0]).multiplyScalar(ne.x),E.copy(w.binormals[0]).multiplyScalar(ne.y),L.copy(v[0]).add(R).add(E),qe(L.x,L.y,L.z)):qe(ne.x,ne.y,0)}for(let X=1;X<=h;X++)for(let ne=0;ne<H;ne++){const J=d?W(S[ne],je[ne],st):S[ne];_?(R.copy(w.normals[X]).multiplyScalar(J.x),E.copy(w.binormals[X]).multiplyScalar(J.y),L.copy(v[X]).add(R).add(E),qe(L.x,L.y,L.z)):qe(J.x,J.y,u/h*X)}for(let X=g-1;X>=0;X--){const ne=X/g,J=f*Math.cos(ne*Math.PI/2),he=m*Math.sin(ne*Math.PI/2)+b;for(let C=0,Ce=V.length;C<Ce;C++){const Te=W(V[C],ge[C],he);qe(Te.x,Te.y,u+J)}for(let C=0,Ce=D.length;C<Ce;C++){const Te=D[C];xe=be[C];for(let Oe=0,ue=Te.length;Oe<ue;Oe++){const P=W(Te[Oe],xe[Oe],he);_?qe(P.x,P.y+v[h-1].y,v[h-1].x+J):qe(P.x,P.y,u+J)}}}te(),oe();function te(){const X=i.length/3;if(d){let ne=0,J=H*ne;for(let he=0;he<Le;he++){const C=We[he];Ue(C[2]+J,C[1]+J,C[0]+J)}ne=h+g*2,J=H*ne;for(let he=0;he<Le;he++){const C=We[he];Ue(C[0]+J,C[1]+J,C[2]+J)}}else{for(let ne=0;ne<Le;ne++){const J=We[ne];Ue(J[2],J[1],J[0])}for(let ne=0;ne<Le;ne++){const J=We[ne];Ue(J[0]+H*h,J[1]+H*h,J[2]+H*h)}}n.addGroup(X,i.length/3-X,0)}function oe(){const X=i.length/3;let ne=0;De(V,ne),ne+=V.length;for(let J=0,he=D.length;J<he;J++){const C=D[J];De(C,ne),ne+=C.length}n.addGroup(X,i.length/3-X,1)}function De(X,ne){let J=X.length;for(;--J>=0;){const he=J;let C=J-1;C<0&&(C=X.length-1);for(let Ce=0,Te=h+g*2;Ce<Te;Ce++){const Oe=H*Ce,ue=H*(Ce+1),P=ne+he+Oe,y=ne+C+Oe,N=ne+C+ue,j=ne+he+ue;Qe(P,y,N,j)}}}function qe(X,ne,J){l.push(X),l.push(ne),l.push(J)}function Ue(X,ne,J){Q(X),Q(ne),Q(J);const he=i.length/3,C=x.generateTopUV(n,i,he-3,he-2,he-1);re(C[0]),re(C[1]),re(C[2])}function Qe(X,ne,J,he){Q(X),Q(ne),Q(he),Q(ne),Q(J),Q(he);const C=i.length/3,Ce=x.generateSideWallUV(n,i,C-6,C-3,C-2,C-1);re(Ce[0]),re(Ce[1]),re(Ce[3]),re(Ce[1]),re(Ce[2]),re(Ce[3])}function Q(X){i.push(l[X*3+0]),i.push(l[X*3+1]),i.push(l[X*3+2])}function re(X){s.push(X.x),s.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wg(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Vc[i.type]().fromJSON(i)),new Oh(n,e.options)}}const Vg={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new le(s,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],b=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-u),new le(d,1-m),new le(b,1-p)]:[new le(o,1-l),new le(h,1-u),new le(f,1-m),new le(g,1-p)]}};function Wg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Bh extends Nh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bh(e.radius,e.detail)}}class zh extends vt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ct(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,u=new I,d=new le,f=new I,m=new I,b=new I;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,b.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),l.push(f.x,f.y,f.z),b.copy(m)}for(let x=0;x<=t;x++){const v=n+x*h*i,_=Math.sin(v),w=Math.cos(v);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*w,a.push(u.x,u.y,u.z),d.x=x/t,d.y=E/(e.length-1),o.push(d.x,d.y);const R=l[3*E+0]*_,L=l[3*E+1],M=l[3*E+0]*w;c.push(R,L,M)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const _=v+x*e.length,w=_,E=_+e.length,R=_+e.length+1,L=_+1;s.push(w,E,L),s.push(R,L,E)}this.setIndex(s),this.setAttribute("position",new it(a,3)),this.setAttribute("uv",new it(o,2)),this.setAttribute("normal",new it(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zh(e.points,e.segments,e.phiStart,e.phiLength)}}class Ln extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){const x=p*d-a;for(let v=0;v<c;v++){const _=v*u-s;m.push(_,-x,0),b.push(0,0,1),g.push(v/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const v=x+c*p,_=x+c*(p+1),w=x+1+c*(p+1),E=x+1+c*p;f.push(v,_,E),f.push(_,w,E)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(b,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class qh extends vt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new I,m=new le;for(let b=0;b<=i;b++){for(let g=0;g<=n;g++){const p=s+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let b=0;b<i;b++){const g=b*(n+1);for(let p=0;p<n;p++){const x=p+g,v=x,_=x+n+1,w=x+n+2,E=x+1;o.push(v,_,E),o.push(_,w,E)}}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gh extends vt{constructor(e=new Bs([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new it(i,3)),this.setAttribute("normal",new it(s,3)),this.setAttribute("uv",new it(a,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;$n.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];$n.isClockWise(x)===!0&&(m[g]=x.reverse())}const b=$n.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){const x=f[g];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=b.length;g<p;g++){const x=b[g],v=x[0]+u,_=x[1]+u,w=x[2]+u;n.push(v,_,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Xg(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Gh(n,e.curveSegments)}}function Xg(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class ta extends vt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){const E=w/t;u.x=-e*Math.cos(i+E*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+E*s)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(E+_,1-v),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=h[p][x+1],_=h[p][x],w=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&f.push(v,_,E),(p!==n-1||l<Math.PI)&&f.push(_,w,E)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(b,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hh extends vt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const b=m/i*s,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(b),u.y=(e+t*Math.cos(g))*Math.sin(b),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const b=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;a.push(b,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hp extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gi extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class un extends gi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class up extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jg extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ya(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Kg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function dp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Yg extends na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ns,endingEnd:Ns}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Us:s=e,o=2*t-n;break;case wo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Us:a=e,l=2*n-t;break;case wo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*b+.5*m,_=f*g-f*b;for(let w=0;w!==o;++w)s[w]=p*a[h+w]+x*a[c+w]+v*a[l+w]+_*a[u+w];return s}}class fp extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class $g extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case Vr:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&f0(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Vr;class Qs extends Hn{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Hr;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class pp extends Hn{constructor(e,t,n,i){super(e,t,n,i)}}pp.prototype.ValueTypeName="color";class Ys extends Hn{constructor(e,t,n,i){super(e,t,n,i)}}Ys.prototype.ValueTypeName="number";class Jg extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Bt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class $s extends Hn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Jg(this.times,this.values,this.getValueSize(),e)}}$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends Hn{constructor(e,t,n){super(e,t,n)}}er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Hr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends Hn{constructor(e,t,n,i){super(e,t,n,i)}}Js.prototype.ValueTypeName="vector";class Kc{constructor(e="",t=-1,n=[],i=Th){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Qg(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Kg(l);l=rd(l,1,h),c=rd(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ys(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Ye("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Je("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,b){if(f.length!==0){const g=[],p=[];dp(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(const b in f){const g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const v=d[m];g.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new Ys(".morphTargetInfluence["+b+"]",g,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Js,f+".position",d,"pos",i),n($s,f+".quaternion",d,"rot",i),n(Js,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Zg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return Js;case"color":return pp;case"quaternion":return $s;case"bool":case"boolean":return Qs;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Qg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zg(r.type);if(r.times===void 0){const t=[],n=[];dp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const fi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class eb{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tb=new eb;class tr{constructor(e){this.manager=e!==void 0?e:tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}tr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class nb extends Error{constructor(e,t){super(e),this.response=t}}class mp extends tr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:i});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ci[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let b=0;const g=new ReadableStream({start(p){x();function x(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{b+=_.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let E=0,R=h.length;E<R;E++){const L=h[E];L.onProgress&&L.onProgress(w)}p.enqueue(_),x()}},v=>{p.error(v)})}}});return new Response(g)}else throw new nb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{fi.add(`file:${e}`,c);const h=ci[e];delete ci[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ci[e];if(h===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Is=new WeakMap;class ib extends tr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=fi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Is.get(a);u===void 0&&(u=[],Is.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Wr("img");function l(){h(),t&&t(this);const u=Is.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Is.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),fi.remove(`image:${e}`);const d=Is.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Is.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),fi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class sb extends tr{constructor(e){super(e)}load(e,t,n,i){const s=new zt,a=new ib(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ko extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class rb extends ko{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Rl=new Ke,ad=new I,od=new I;class Vh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ab extends Vh{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ob extends ko{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ab}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class lb extends Vh{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}}class gp extends ko{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ia extends Wf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cb extends Vh{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yc extends ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new cb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class kr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Cl=new WeakMap;class hb extends tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=fi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(Cl.has(a)===!0)i&&i(Cl.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return fi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Cl.set(l,c),fi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});fi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ub extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class db{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class fb{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Bt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Bt.multiplyQuaternionsFlat(e,a,e,t,e,n),Bt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Wh="\\[\\]\\.:\\/",pb=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",mb="[^"+Wh.replace("\\.","")+"]",gb=/((?:WC+[\/:])*)/.source.replace("WC",Xh),bb=/(WCOD+)?/.source.replace("WCOD",mb),xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),_b=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),vb=new RegExp("^"+gb+bb+xb+_b+"$"),yb=["material","materials","bones","map"];class Mb{constructor(e,t,n){const i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pb,"")}static parseTrackName(e){const t=vb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);yb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=Mb;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Sb{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Ns,endingEnd:Ns};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=e0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case n0:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Th:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===t0;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===wh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Us,i.endingEnd=Us):(e?i.endingStart=this.zeroSlopeAtStart?Us:Ns:i.endingStart=wo,t?i.endingEnd=this.zeroSlopeAtEnd?Us:Ns:i.endingEnd=wo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const wb=new Float32Array(1);class bp extends rs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const b=t&&t._propertyBindings[u].binding.parsedPath;m=new fb(xt.create(n,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new fp(new Float32Array(2),new Float32Array(2),1,wb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Kc.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Th),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Sb(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Kc.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Tb{constructor(){this.type="ShapePath",this.color=new we,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Wc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let v=0,_=p.length;v<_;v++){const w=p[v],E=new Bs;E.curves=w.curves,x.push(E)}return x}function n(p,x){const v=x.length;let _=!1;for(let w=v-1,E=0;E<v;w=E++){let R=x[w],L=x[E],M=L.x-R.x,S=L.y-R.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(R=x[E],M=-M,L=x[w],S=-S),p.y<R.y||p.y>L.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const D=S*(p.x-R.x)-M*(p.y-R.y);if(D===0)return!0;if(D<0)continue;_=!_}}else{if(p.y!==R.y)continue;if(L.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=L.x)return!0}}return _}const i=$n.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new Bs,l.curves=o.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],m=0,b;d[m]=void 0,f[m]=[];for(let p=0,x=s.length;p<x;p++)o=s[p],b=o.getPoints(),a=i(b),a=e?!a:a,a?(!h&&d[m]&&m++,d[m]={s:new Bs,p:b},d[m].s.curves=o.curves,h&&m++,f[m]=[]):f[m].push({h:o,p:b[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,x=0;for(let v=0,_=d.length;v<_;v++)u[v]=[];for(let v=0,_=d.length;v<_;v++){const w=f[v];for(let E=0;E<w.length;E++){const R=w[E];let L=!0;for(let M=0;M<d.length;M++)n(R.p,d[M].p)&&(v!==M&&x++,L?(L=!1,u[M].push(R)):p=!0);L&&u[v].push(R)}}x>0&&p===!1&&(f=u)}let g;for(let p=0,x=d.length;p<x;p++){l=d[p].s,c.push(l),g=f[p];for(let v=0,_=g.length;v<_;v++)l.holes.push(g[v].h)}return c}}function ld(r,e,t,n){const i=Eb(n);switch(t){case Ff:return r*e;case vh:return r*e/i.components*i.byteLength;case yh:return r*e/i.components*i.byteLength;case Vs:return r*e*2/i.components*i.byteLength;case Mh:return r*e*2/i.components*i.byteLength;case Nf:return r*e*3/i.components*i.byteLength;case hn:return r*e*4/i.components*i.byteLength;case Sh:return r*e*4/i.components*i.byteLength;case ho:case uo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fo:case po:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hc:case dc:return Math.max(r,16)*Math.max(e,8)/4;case cc:case uc:return Math.max(r,8)*Math.max(e,8)/2;case fc:case pc:case gc:case bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mc:case xc:case _c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case wc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Nc:case Uc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kc:case Oc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bc:case zc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Eb(r){switch(r){case gn:case Pf:return{byteLength:1,components:1};case qr:case If:case dn:return{byteLength:2,components:1};case xh:case _h:return{byteLength:2,components:4};case ei:case bh:case bn:return{byteLength:4,components:1};case Lf:case Df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);function xp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ab(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const b=u[f];r.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cb=`#ifdef USE_ALPHAHASH
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
#endif`,Pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
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
#endif`,Nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ub=`#ifdef USE_BATCHING
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
#endif`,kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ob=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qb=`#ifdef USE_IRIDESCENCE
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
#endif`,Gb=`#ifdef USE_BUMPMAP
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
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jb=`#define PI 3.141592653589793
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
} // validated`,Zb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qb=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
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
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
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
#endif`,Ex=`uniform sampler2D dfgLUT;
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
}`,Ax=`
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
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
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d1=`float getShadowMask() {
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
}`,f1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,b1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
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
}`,F1=`#if DEPTH_PACKING == 3200
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
}`,N1=`#define DISTANCE
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
}`,U1=`#define DISTANCE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
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
}`,z1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,H1=`#define LAMBERT
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
}`,V1=`#define LAMBERT
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
}`,W1=`#define MATCAP
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
}`,X1=`#define MATCAP
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
}`,j1=`#define NORMAL
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
}`,K1=`#define NORMAL
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
}`,Y1=`#define PHONG
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
}`,$1=`#define PHONG
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
}`,J1=`#define STANDARD
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
}`,Z1=`#define STANDARD
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
}`,Q1=`#define TOON
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
}`,e_=`#define TOON
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
}`,t_=`uniform float size;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,a_=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Rb,alphahash_pars_fragment:Cb,alphamap_fragment:Pb,alphamap_pars_fragment:Ib,alphatest_fragment:Lb,alphatest_pars_fragment:Db,aomap_fragment:Fb,aomap_pars_fragment:Nb,batching_pars_vertex:Ub,batching_vertex:kb,begin_vertex:Ob,beginnormal_vertex:Bb,bsdfs:zb,iridescence_fragment:qb,bumpmap_pars_fragment:Gb,clipping_planes_fragment:Hb,clipping_planes_pars_fragment:Vb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:Xb,color_fragment:jb,color_pars_fragment:Kb,color_pars_vertex:Yb,color_vertex:$b,common:Jb,cube_uv_reflection_fragment:Zb,defaultnormal_vertex:Qb,displacementmap_pars_vertex:ex,displacementmap_vertex:tx,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:sx,colorspace_pars_fragment:rx,envmap_fragment:ax,envmap_common_pars_fragment:ox,envmap_pars_fragment:lx,envmap_pars_vertex:cx,envmap_physical_pars_fragment:vx,envmap_vertex:hx,fog_vertex:ux,fog_pars_vertex:dx,fog_fragment:fx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:bx,lights_lambert_pars_fragment:xx,lights_pars_begin:_x,lights_toon_fragment:yx,lights_toon_pars_fragment:Mx,lights_phong_fragment:Sx,lights_phong_pars_fragment:wx,lights_physical_fragment:Tx,lights_physical_pars_fragment:Ex,lights_fragment_begin:Ax,lights_fragment_maps:Rx,lights_fragment_end:Cx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Dx,map_fragment:Fx,map_pars_fragment:Nx,map_particle_fragment:Ux,map_particle_pars_fragment:kx,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:Bx,morphinstance_vertex:zx,morphcolor_vertex:qx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Vx,normal_fragment_begin:Wx,normal_fragment_maps:Xx,normal_pars_fragment:jx,normal_pars_vertex:Kx,normal_vertex:Yx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:e1,opaque_fragment:t1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:s1,dithering_fragment:r1,dithering_pars_fragment:a1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:h1,shadowmap_vertex:u1,shadowmask_pars_fragment:d1,skinbase_vertex:f1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:b1,specularmap_pars_fragment:x1,tonemapping_fragment:_1,tonemapping_pars_fragment:v1,transmission_fragment:y1,transmission_pars_fragment:M1,uv_pars_fragment:S1,uv_pars_vertex:w1,uv_vertex:T1,worldpos_vertex:E1,background_vert:A1,background_frag:R1,backgroundCube_vert:C1,backgroundCube_frag:P1,cube_vert:I1,cube_frag:L1,depth_vert:D1,depth_frag:F1,distance_vert:N1,distance_frag:U1,equirect_vert:k1,equirect_frag:O1,linedashed_vert:B1,linedashed_frag:z1,meshbasic_vert:q1,meshbasic_frag:G1,meshlambert_vert:H1,meshlambert_frag:V1,meshmatcap_vert:W1,meshmatcap_frag:X1,meshnormal_vert:j1,meshnormal_frag:K1,meshphong_vert:Y1,meshphong_frag:$1,meshphysical_vert:J1,meshphysical_frag:Z1,meshtoon_vert:Q1,meshtoon_frag:e_,points_vert:t_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:r_,sprite_frag:a_},Pe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},jn={basic:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new we(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new we(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:tn([Pe.points,Pe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:tn([Pe.common,Pe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:tn([Pe.sprite,Pe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:tn([Pe.lights,Pe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};jn.physical={uniforms:tn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const $a={r:0,b:0,g:0},qi=new _n,o_=new Ke;function l_(r,e,t,n,i,s,a){const o=new we(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function b(v){let _=!1;const w=m(v);w===null?p(o,l):w&&w.isColor&&(p(w,1),_=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,_){const w=m(_);w&&(w.isCubeTexture||w.mapping===Fo)?(h===void 0&&(h=new mt(new Di(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Xs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qi.copy(_.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(o_.makeRotationFromEuler(qi)),h.material.toneMapped=pt.getTransfer(w.colorSpace)!==bt,(u!==w||d!==w.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new mt(new Ln(2,2),new Nt({name:"BackgroundMaterial",uniforms:Xs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=pt.getTransfer(w.colorSpace)!==bt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB($a,Vf(r)),n.buffers.color.setClear($a.r,$a.g,$a.b,_,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:b,addToRenderList:g,dispose:x}}function c_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,D,z,O,$){let V=!1;const W=u(O,z,D);s!==W&&(s=W,c(s.object)),V=f(S,O,z,$),V&&m(S,O,z,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(S,D,z,O),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,D,z){const O=z.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let V=$[D.id];V===void 0&&(V={},$[D.id]=V);let W=V[O];return W===void 0&&(W=d(l()),V[O]=W),W}function d(S){const D=[],z=[],O=[];for(let $=0;$<t;$++)D[$]=0,z[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:O,object:S,attributes:{},index:null}}function f(S,D,z,O){const $=s.attributes,V=D.attributes;let W=0;const H=z.getAttributes();for(const ae in H)if(H[ae].location>=0){const be=$[ae];let xe=V[ae];if(xe===void 0&&(ae==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),ae==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor)),be===void 0||be.attribute!==xe||xe&&be.data!==xe.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function m(S,D,z,O){const $={},V=D.attributes;let W=0;const H=z.getAttributes();for(const ae in H)if(H[ae].location>=0){let be=V[ae];be===void 0&&(ae==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),ae==="instanceColor"&&S.instanceColor&&(be=S.instanceColor));const xe={};xe.attribute=be,be&&be.data&&(xe.data=be.data),$[ae]=xe,W++}s.attributes=$,s.attributesNum=W,s.index=O}function b(){const S=s.newAttributes;for(let D=0,z=S.length;D<z;D++)S[D]=0}function g(S){p(S,0)}function p(S,D){const z=s.newAttributes,O=s.enabledAttributes,$=s.attributeDivisors;z[S]=1,O[S]===0&&(r.enableVertexAttribArray(S),O[S]=1),$[S]!==D&&(r.vertexAttribDivisor(S,D),$[S]=D)}function x(){const S=s.newAttributes,D=s.enabledAttributes;for(let z=0,O=D.length;z<O;z++)D[z]!==S[z]&&(r.disableVertexAttribArray(z),D[z]=0)}function v(S,D,z,O,$,V,W){W===!0?r.vertexAttribIPointer(S,D,z,$,V):r.vertexAttribPointer(S,D,z,O,$,V)}function _(S,D,z,O){b();const $=O.attributes,V=z.getAttributes(),W=D.defaultAttributeValues;for(const H in V){const ae=V[H];if(ae.location>=0){let ge=$[H];if(ge===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ge!==void 0){const be=ge.normalized,xe=ge.itemSize,je=e.get(ge);if(je===void 0)continue;const We=je.buffer,Le=je.type,st=je.bytesPerElement,te=Le===r.INT||Le===r.UNSIGNED_INT||ge.gpuType===bh;if(ge.isInterleavedBufferAttribute){const oe=ge.data,De=oe.stride,qe=ge.offset;if(oe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<ae.locationSize;Ue++)p(ae.location+Ue,oe.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<ae.locationSize;Ue++)g(ae.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Ue=0;Ue<ae.locationSize;Ue++)v(ae.location+Ue,xe/ae.locationSize,Le,be,De*st,(qe+xe/ae.locationSize*Ue)*st,te)}else{if(ge.isInstancedBufferAttribute){for(let oe=0;oe<ae.locationSize;oe++)p(ae.location+oe,ge.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let oe=0;oe<ae.locationSize;oe++)g(ae.location+oe);r.bindBuffer(r.ARRAY_BUFFER,We);for(let oe=0;oe<ae.locationSize;oe++)v(ae.location+oe,xe/ae.locationSize,Le,be,xe*st,xe/ae.locationSize*oe*st,te)}}else if(W!==void 0){const be=W[H];if(be!==void 0)switch(be.length){case 2:r.vertexAttrib2fv(ae.location,be);break;case 3:r.vertexAttrib3fv(ae.location,be);break;case 4:r.vertexAttrib4fv(ae.location,be);break;default:r.vertexAttrib1fv(ae.location,be)}}}}x()}function w(){L();for(const S in n){const D=n[S];for(const z in D){const O=D[z];for(const $ in O)h(O[$].object),delete O[$];delete D[z]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const z in D){const O=D[z];for(const $ in O)h(O[$].object),delete O[$];delete D[z]}delete n[S.id]}function R(S){for(const D in n){const z=n[D];if(z[S.id]===void 0)continue;const O=z[S.id];for(const $ in O)h(O[$].object),delete O[$];delete z[S.id]}}function L(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function h_(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let b=0;b<u;b++)m+=h[b]*d[b];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function u_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==hn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==gn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bn&&!L)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,maxSamples:w,samples:E}}function d_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Xi,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const x=s?0:n,v=x*4;let _=p.clippingState||null;l.value=_,_=h(m,d,v,f);for(let w=0;w!==v;++w)_[w]=t[w];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const b=u!==null?u.length:0;let g=null;if(b!==0){if(g=l.value,m!==!0||g===null){const p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=f;v!==b;++v,_+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function f_(r){let e=new WeakMap;function t(a,o){return o===oc?a.mapping=ns:o===lc&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===oc||o===lc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jf(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ci=4,cd=[.125,.215,.35,.446,.526,.582],Yi=20,p_=256,br=new ia,hd=new we;let Pl=null,Il=0,Ll=0,Dl=!1;const m_=new I;class $c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=m_}=s;Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Il,Ll),this._renderer.xr.enabled=Dl,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:dn,format:hn,colorSpace:an,depthBuffer:!1},i=ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=g_(s)),this._blurMaterial=x_(s,e,t),this._ggxMaterial=b_(s,e,t)}return i}_compileMaterial(e){const t=new mt(new vt,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,i,s){const l=new nn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(hd),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new Di,new Wt({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,g=b.material;let p=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy(hd),p=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));const w=this._cubeSize;Ls(i,_*w,v>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(b,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ns||e.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:m}=this,b=this._sizeLods[n],g=3*b*(n>m-Ci?n-m+Ci:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Ls(s,g,p,3*b,2*b),i.setRenderTarget(s),i.render(o,br),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Ls(e,g,p,3*b,2*b),i.setRenderTarget(e),i.render(o,br)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),b=s/m,g=isFinite(s)?1+Math.floor(h*b):Yi;g>Yi&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yi}`);const p=[];let x=0;for(let R=0;R<Yi;++R){const L=R/b,M=Math.exp(-L*L/2);p.push(M),R===0?x+=M:R<g&&(x+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;const _=this._sizeLods[i],w=3*_*(i>v-Ci?i-v+Ci:0),E=4*(this._cubeSize-_);Ls(t,w,E,3*_,2*_),l.setRenderTarget(t),l.render(u,br)}}function g_(r){const e=[],t=[],n=[];let i=r;const s=r-Ci+1+cd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ci?l=cd[a-r+Ci-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,b=3,g=2,p=1,x=new Float32Array(b*m*f),v=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,L=E>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(M,b*m*E),v.set(d,g*m*E);const S=[E,E,E,E,E,E];_.set(S,p*m*E)}const w=new vt;w.setAttribute("position",new St(x,b)),w.setAttribute("uv",new St(v,g)),w.setAttribute("faceIndex",new St(_,p)),n.push(new mt(w,null)),i>Ci&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ud(r,e,t){const n=new rn(r,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function b_(r,e,t){return new Nt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function x_(r,e,t){const n=new Float32Array(Yi),i=new I(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function dd(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function fd(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}function __(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===oc||l===lc,h=l===ns||l===Hs;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new $c(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new $c(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function v_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Xr("WebGLRenderer: "+n+" extension not supported."),i}}}function y_(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let b=0;if(f!==null){const x=f.array;b=f.version;for(let v=0,_=x.length;v<_;v+=3){const w=x[v+0],E=x[v+1],R=x[v+2];d.push(w,E,E,R,R,w)}}else if(m!==void 0){const x=m.array;b=m.version;for(let v=0,_=x.length/3-1;v<_;v+=3){const w=v+0,E=v+1,R=v+2;d.push(w,E,E,R,R,w)}}else return;const g=new(Of(d)?Hf:Gf)(d,1);g.version=b;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function M_(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,b){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,b,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*b[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function S_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function w_(r,e,t){const n=new WeakMap,i=new wt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),b===!0&&(_=2),g===!0&&(_=3);let w=o.attributes.position.count*_,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*E*4*u),L=new Bf(R,w,E,u);L.type=bn,L.needsUpdate=!0;const M=_*4;for(let D=0;D<u;D++){const z=p[D],O=x[D],$=v[D],V=w*E*4*D;for(let W=0;W<z.count;W++){const H=W*M;m===!0&&(i.fromBufferAttribute(z,W),R[V+H+0]=i.x,R[V+H+1]=i.y,R[V+H+2]=i.z,R[V+H+3]=0),b===!0&&(i.fromBufferAttribute(O,W),R[V+H+4]=i.x,R[V+H+5]=i.y,R[V+H+6]=i.z,R[V+H+7]=0),g===!0&&(i.fromBufferAttribute($,W),R[V+H+8]=i.x,R[V+H+9]=i.y,R[V+H+10]=i.z,R[V+H+11]=$.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new le(w,E)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const b=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",b),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function T_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const E_={[uh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[fh]:"CINEON_TONE_MAPPING",[ph]:"ACES_FILMIC_TONE_MAPPING",[gh]:"AGX_TONE_MAPPING",[Do]:"NEUTRAL_TONE_MAPPING",[mh]:"CUSTOM_TONE_MAPPING"};function A_(r,e,t,n,i){const s=new rn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new rn(e,t,{type:dn,depthBuffer:!1,stencilBuffer:!1}),o=new vt;o.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new it([0,2,0,0,2,0],2));const l=new hp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new mt(o,l),h=new ia(-1,1,1,-1,0,1);let u=null,d=null,f=!1,m,b=null,g=[],p=!1;this.setSize=function(x,v){s.setSize(x,v),a.setSize(x,v);for(let _=0;_<g.length;_++){const w=g[_];w.setSize&&w.setSize(x,v)}},this.setEffects=function(x){g=x,p=g.length>0&&g[0].isRenderPass===!0;const v=s.width,_=s.height;for(let w=0;w<g.length;w++){const E=g[w];E.setSize&&E.setSize(v,_)}},this.begin=function(x,v){if(f||x.toneMapping===Zn&&g.length===0)return!1;if(b=v,v!==null){const _=v.width,w=v.height;(s.width!==_||s.height!==w)&&this.setSize(_,w)}return p===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=Zn,!0},this.hasRenderPass=function(){return p},this.end=function(x,v){x.toneMapping=m,f=!0;let _=s,w=a;for(let E=0;E<g.length;E++){const R=g[E];if(R.enabled!==!1&&(R.render(x,w,_,v),R.needsSwap!==!1)){const L=_;_=w,w=L}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},pt.getTransfer(u)===bt&&(l.defines.SRGB_TRANSFER="");const E=E_[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,x.setRenderTarget(b),x.render(c,h),b=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const _p=new zt,Jc=new Kr(1,1),vp=new Bf,yp=new O0,Mp=new Xf,pd=[],md=[],gd=new Float32Array(16),bd=new Float32Array(9),xd=new Float32Array(4);function nr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=pd[i];if(s===void 0&&(s=new Float32Array(i),pd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bo(r,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function R_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function C_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2fv(this.addr,e),Gt(t,e)}}function P_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;r.uniform3fv(this.addr,e),Gt(t,e)}}function I_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4fv(this.addr,e),Gt(t,e)}}function L_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(qt(t,n))return;xd.set(n),r.uniformMatrix2fv(this.addr,!1,xd),Gt(t,n)}}function D_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(qt(t,n))return;bd.set(n),r.uniformMatrix3fv(this.addr,!1,bd),Gt(t,n)}}function F_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(qt(t,n))return;gd.set(n),r.uniformMatrix4fv(this.addr,!1,gd),Gt(t,n)}}function N_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function U_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2iv(this.addr,e),Gt(t,e)}}function k_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3iv(this.addr,e),Gt(t,e)}}function O_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4iv(this.addr,e),Gt(t,e)}}function B_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2uiv(this.addr,e),Gt(t,e)}}function q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3uiv(this.addr,e),Gt(t,e)}}function G_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4uiv(this.addr,e),Gt(t,e)}}function H_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Jc.compareFunction=t.isReversedDepthBuffer()?Ah:Eh,s=Jc):s=_p,t.setTexture2D(e||s,i)}function V_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yp,i)}function W_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mp,i)}function X_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vp,i)}function j_(r){switch(r){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return F_;case 5124:case 35670:return N_;case 35667:case 35671:return U_;case 35668:case 35672:return k_;case 35669:case 35673:return O_;case 5125:return B_;case 36294:return z_;case 36295:return q_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}function K_(r,e){r.uniform1fv(this.addr,e)}function Y_(r,e){const t=nr(e,this.size,2);r.uniform2fv(this.addr,t)}function $_(r,e){const t=nr(e,this.size,3);r.uniform3fv(this.addr,t)}function J_(r,e){const t=nr(e,this.size,4);r.uniform4fv(this.addr,t)}function Z_(r,e){const t=nr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Q_(r,e){const t=nr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ev(r,e){const t=nr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function tv(r,e){r.uniform1iv(this.addr,e)}function nv(r,e){r.uniform2iv(this.addr,e)}function iv(r,e){r.uniform3iv(this.addr,e)}function sv(r,e){r.uniform4iv(this.addr,e)}function rv(r,e){r.uniform1uiv(this.addr,e)}function av(r,e){r.uniform2uiv(this.addr,e)}function ov(r,e){r.uniform3uiv(this.addr,e)}function lv(r,e){r.uniform4uiv(this.addr,e)}function cv(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Jc:a=_p;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function hv(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yp,s[a])}function uv(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Mp,s[a])}function dv(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vp,s[a])}function fv(r){switch(r){case 5126:return K_;case 35664:return Y_;case 35665:return $_;case 35666:return J_;case 35674:return Z_;case 35675:return Q_;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return av;case 36295:return ov;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}class pv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j_(t.type)}}class mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}}class gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function _d(r,e){r.seq.push(e),r.map[e.id]=e}function bv(r,e,t){const n=r.name,i=n.length;for(Fl.lastIndex=0;;){const s=Fl.exec(n),a=Fl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_d(t,c===void 0?new pv(o,r,e):new mv(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new gv(o),_d(t,u)),t=u}}}class mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);bv(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function vd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const xv=37297;let _v=0;function vv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const yd=new rt;function yv(r){pt._getMatrix(yd,pt.workingColorSpace,r);const e=`mat3( ${yd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(r)){case To:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Md(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+vv(r.getShaderSource(e),o)}else return s}function Mv(r,e){const t=yv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Sv={[uh]:"Linear",[dh]:"Reinhard",[fh]:"Cineon",[ph]:"ACESFilmic",[gh]:"AgX",[Do]:"Neutral",[mh]:"Custom"};function wv(r,e){const t=Sv[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ja=new I;function Tv(){pt.getLuminanceCoefficients(Ja);const r=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Av(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Cr(r){return r!==""}function Sd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(r){return r.replace(Cv,Iv)}const Pv=new Map;function Iv(r,e){let t=ot[e];if(t===void 0){const n=Pv.get(e);if(n!==void 0)t=ot[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zc(t)}const Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(r){return r.replace(Lv,Dv)}function Dv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ed(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Fv={[Lr]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function Nv(r){return Fv[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Uv={[ns]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE_UV"};function kv(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Uv[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ov={[Hs]:"ENVMAP_MODE_REFRACTION"};function Bv(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ov[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zv={[Af]:"ENVMAP_BLENDING_MULTIPLY",[Jm]:"ENVMAP_BLENDING_MIX",[Zm]:"ENVMAP_BLENDING_ADD"};function qv(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":zv[r.combine]||"ENVMAP_BLENDING_NONE"}function Gv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Nv(t),c=kv(t),h=Bv(t),u=qv(t),d=Gv(t),f=Ev(t),m=Av(s),b=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Cr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(g=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?ot.tonemapping_pars_fragment:"",t.toneMapping!==Zn?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Mv("linearToOutputTexel",t.outputColorSpace),Tv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=Zc(a),a=Sd(a,t),a=wd(a,t),o=Zc(o),o=Sd(o,t),o=wd(o,t),a=Td(a),o=Td(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+a,_=x+p+o,w=vd(i,i.VERTEX_SHADER,v),E=vd(i,i.FRAGMENT_SHADER,_);i.attachShader(b,w),i.attachShader(b,E),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function R(D){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(b)||"",O=i.getShaderInfoLog(w)||"",$=i.getShaderInfoLog(E)||"",V=z.trim(),W=O.trim(),H=$.trim();let ae=!0,ge=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,w,E);else{const be=Md(i,w,"vertex"),xe=Md(i,E,"fragment");Je("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+be+`
`+xe)}else V!==""?Ye("WebGLProgram: Program Info Log:",V):(W===""||H==="")&&(ge=!1);ge&&(D.diagnostics={runnable:ae,programLog:V,vertexShader:{log:W,prefix:g},fragmentShader:{log:H,prefix:p}})}i.deleteShader(w),i.deleteShader(E),L=new mo(i,b),M=Rv(i,b)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(b,xv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=E,this}let Vv=0;class Wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xv(e),t.set(e,n)),n}}class Xv{constructor(e){this.id=Vv++,this.code=e,this.usedTimes=0}}function jv(r,e,t,n,i,s,a){const o=new zf,l=new Wv,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,D,z,O){const $=z.fog,V=O.geometry,W=M.isMeshStandardMaterial?z.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),ae=H&&H.mapping===Fo?H.image.height:null,ge=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const be=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=be!==void 0?be.length:0;let je=0;V.morphAttributes.position!==void 0&&(je=1),V.morphAttributes.normal!==void 0&&(je=2),V.morphAttributes.color!==void 0&&(je=3);let We,Le,st,te;if(ge){const gt=jn[ge];We=gt.vertexShader,Le=gt.fragmentShader}else We=M.vertexShader,Le=M.fragmentShader,l.update(M),st=l.getVertexShaderID(M),te=l.getFragmentShaderID(M);const oe=r.getRenderTarget(),De=r.state.buffers.depth.getReversed(),qe=O.isInstancedMesh===!0,Ue=O.isBatchedMesh===!0,Qe=!!M.map,Q=!!M.matcap,re=!!H,X=!!M.aoMap,ne=!!M.lightMap,J=!!M.bumpMap,he=!!M.normalMap,C=!!M.displacementMap,Ce=!!M.emissiveMap,Te=!!M.metalnessMap,Oe=!!M.roughnessMap,ue=M.anisotropy>0,P=M.clearcoat>0,y=M.dispersion>0,N=M.iridescence>0,j=M.sheen>0,se=M.transmission>0,Z=ue&&!!M.anisotropyMap,Ge=P&&!!M.clearcoatMap,de=P&&!!M.clearcoatNormalMap,Ie=P&&!!M.clearcoatRoughnessMap,$e=N&&!!M.iridescenceMap,fe=N&&!!M.iridescenceThicknessMap,Ee=j&&!!M.sheenColorMap,ze=j&&!!M.sheenRoughnessMap,He=!!M.specularMap,Me=!!M.specularColorMap,et=!!M.specularIntensityMap,k=se&&!!M.transmissionMap,Fe=se&&!!M.thicknessMap,_e=!!M.gradientMap,ke=!!M.alphaMap,pe=M.alphaTest>0,ie=!!M.alphaHash,ye=!!M.extensions;let Ze=Zn;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ze=r.toneMapping);const yt={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:Le,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&O._colorsTexture!==null,instancing:qe,instancingColor:qe&&O.instanceColor!==null,instancingMorph:qe&&O.morphTexture!==null,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:an,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:Q,envMap:re,envMapMode:re&&H.mapping,envMapCubeUVHeight:ae,aoMap:X,lightMap:ne,bumpMap:J,normalMap:he,displacementMap:C,emissiveMap:Ce,normalMapObjectSpace:he&&M.normalMapType===a0,normalMapTangentSpace:he&&M.normalMapType===kf,metalnessMap:Te,roughnessMap:Oe,anisotropy:ue,anisotropyMap:Z,clearcoat:P,clearcoatMap:Ge,clearcoatNormalMap:de,clearcoatRoughnessMap:Ie,dispersion:y,iridescence:N,iridescenceMap:$e,iridescenceThicknessMap:fe,sheen:j,sheenColorMap:Ee,sheenRoughnessMap:ze,specularMap:He,specularColorMap:Me,specularIntensityMap:et,transmission:se,transmissionMap:k,thicknessMap:Fe,gradientMap:_e,opaque:M.transparent===!1&&M.blending===ts&&M.alphaToCoverage===!1,alphaMap:ke,alphaTest:pe,alphaHash:ie,combine:M.combine,mapUv:Qe&&b(M.map.channel),aoMapUv:X&&b(M.aoMap.channel),lightMapUv:ne&&b(M.lightMap.channel),bumpMapUv:J&&b(M.bumpMap.channel),normalMapUv:he&&b(M.normalMap.channel),displacementMapUv:C&&b(M.displacementMap.channel),emissiveMapUv:Ce&&b(M.emissiveMap.channel),metalnessMapUv:Te&&b(M.metalnessMap.channel),roughnessMapUv:Oe&&b(M.roughnessMap.channel),anisotropyMapUv:Z&&b(M.anisotropyMap.channel),clearcoatMapUv:Ge&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&b(M.sheenRoughnessMap.channel),specularMapUv:He&&b(M.specularMap.channel),specularColorMapUv:Me&&b(M.specularColorMap.channel),specularIntensityMapUv:et&&b(M.specularIntensityMap.channel),transmissionMapUv:k&&b(M.transmissionMap.channel),thicknessMapUv:Fe&&b(M.thicknessMap.channel),alphaMapUv:ke&&b(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(he||ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Qe||ke),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:De,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:je,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===bt,decodeVideoTextureEmissive:Ce&&M.emissiveMap.isVideoTexture===!0&&pt.getTransfer(M.emissiveMap.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Rn,flipSided:M.side===Zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ye&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&M.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(x(S,M),v(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const S=m[M.type];let D;if(S){const z=jn[S];D=is.clone(z.uniforms)}else D=M.uniforms;return D}function w(M,S){let D=u.get(S);return D!==void 0?++D.usedTimes:(D=new Hv(r,S,M,s),h.push(D),u.set(S,D)),D}function E(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),u.delete(M.cacheKey),M.destroy()}}function R(M){l.remove(M)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:L}}function Kv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Yv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ad(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,b,g){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),e++,p}function o(u,d,f,m,b,g){const p=a(u,d,f,m,b,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,b,g){const p=a(u,d,f,m,b,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Yv),n.length>1&&n.sort(d||Ad),i.length>1&&i.sort(d||Ad)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function $v(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Rd,r.set(n,[a])):i>=s.length?(a=new Rd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Jv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new we};break;case"SpotLight":t={position:new I,direction:new I,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Zv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Qv=0;function ey(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ty(r){const e=new Jv,t=Zv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new Ke,a=new Ke;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,x=0,v=0,_=0,w=0,E=0,R=0;c.sort(ey);for(let M=0,S=c.length;M<S;M++){const D=c[M],z=D.color,O=D.intensity,$=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Vs?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],O);R++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,ae=t.get(D);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,n.directionalShadow[f]=ae,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=D.shadow.matrix,x++}n.directional[f]=W,f++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(z).multiplyScalar(O),W.distance=$,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[b]=W;const H=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,H.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[b]=H.matrix,D.castShadow){const ae=t.get(D);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,n.spotShadow[b]=ae,n.spotShadowMap[b]=V,_++}b++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(z).multiplyScalar(O),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=W,g++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const H=D.shadow,ae=t.get(D);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,ae.shadowCameraNear=H.camera.near,ae.shadowCameraFar=H.camera.far,n.pointShadow[m]=ae,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=D.shadow.matrix,v++}n.point[m]=W,m++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(O),W.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==b||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==x||L.numPointShadows!==v||L.numSpotShadows!==_||L.numSpotMaps!==w||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,L.directionalLength=f,L.pointLength=m,L.spotLength=b,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=x,L.numPointShadows=v,L.numSpotShadows=_,L.numSpotMaps=w,L.numLightProbes=R,n.version=Qv++)}function l(c,h){let u=0,d=0,f=0,m=0,b=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(v.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:n}}function Cd(r){const e=new ty(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ny(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Cd(r),e.set(i,[o])):s>=a.length?(o=new Cd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
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
}`,ry=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],ay=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Pd=new Ke,xr=new I,Nl=new I;function oy(r,e,t){let n=new Lh;const i=new le,s=new le,a=new wt,o=new up,l=new jg,c={},h=t.maxTextureSize,u={[qn]:Zt,[Zt]:qn,[Rn]:Rn},d=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:iy,fragmentShader:sy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new vt;m.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new mt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let p=this.type;this.render=function(E,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;E.type===Lm&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=Lr);const M=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Jn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==this.type;O&&R.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(V=>V.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,V=E.length;$<V;$++){const W=E[$],H=W.shadow;if(H===void 0){Ye("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ae=H.getFrameExtents();if(i.multiply(ae),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ae.x),i.x=s.x*ae.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ae.y),i.y=s.y*ae.y,H.mapSize.y=s.y)),H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Er){if(W.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new rn(i.x,i.y,{format:Vs,type:dn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new Kr(i.x,i.y,bn),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=mi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt}else{W.isPointLight?(H.map=new jf(i.x),H.map.depthTexture=new dg(i.x,ei)):(H.map=new rn(i.x,i.y),H.map.depthTexture=new Kr(i.x,i.y,ei)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=mi;const be=r.state.buffers.depth.getReversed();this.type===Lr?(H.map.depthTexture.compareFunction=be?Ah:Eh,H.map.depthTexture.minFilter=Ft,H.map.depthTexture.magFilter=Ft):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt)}H.camera.updateProjectionMatrix()}const ge=H.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<ge;be++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,be),r.clear();else{be===0&&(r.setRenderTarget(H.map),r.clear());const xe=H.getViewport(be);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),z.viewport(a)}if(W.isPointLight){const xe=H.camera,je=H.matrix,We=W.distance||xe.far;We!==xe.far&&(xe.far=We,xe.updateProjectionMatrix()),xr.setFromMatrixPosition(W.matrixWorld),xe.position.copy(xr),Nl.copy(xe.position),Nl.add(ry[be]),xe.up.copy(ay[be]),xe.lookAt(Nl),xe.updateMatrixWorld(),je.makeTranslation(-xr.x,-xr.y,-xr.z),Pd.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Pd,xe.coordinateSystem,xe.reversedDepth)}else H.updateMatrices(W);n=H.getFrustum(),_(R,L,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Er&&x(H,L),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,S,D)};function x(E,R){const L=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new rn(i.x,i.y,{format:Vs,type:dn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(R,null,L,d,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(R,null,L,f,b,null)}function v(E,R,L,M){let S=null;const D=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=L.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=S.uuid,O=R.uuid;let $=c[z];$===void 0&&($={},c[z]=$);let V=$[O];V===void 0&&(V=S.clone(),$[O]=V,R.addEventListener("dispose",w)),S=V}if(S.visible=R.visible,S.wireframe=R.wireframe,M===Er?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=r.properties.get(S);z.light=L}return S}function _(E,R,L,M,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Er)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const O=e.update(E),$=E.material;if(Array.isArray($)){const V=O.groups;for(let W=0,H=V.length;W<H;W++){const ae=V[W],ge=$[ae.materialIndex];if(ge&&ge.visible){const be=v(E,ge,M,S);E.onBeforeShadow(r,E,R,L,O,be,ae),r.renderBufferDirect(L,null,O,be,E,ae),E.onAfterShadow(r,E,R,L,O,be,ae)}}}else if($.visible){const V=v(E,$,M,S);E.onBeforeShadow(r,E,R,L,O,V,null),r.renderBufferDirect(L,null,O,V,E,null),E.onAfterShadow(r,E,R,L,O,V,null)}}const z=E.children;for(let O=0,$=z.length;O<$;O++)_(z[O],R,L,M,S)}function w(E){E.target.removeEventListener("dispose",w);for(const L in c){const M=c[L],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const ly={[ec]:tc,[nc]:rc,[ic]:ac,[Gs]:sc,[tc]:ec,[rc]:nc,[ac]:ic,[sc]:Gs};function cy(r,e){function t(){let k=!1;const Fe=new wt;let _e=null;const ke=new wt(0,0,0,0);return{setMask:function(pe){_e!==pe&&!k&&(r.colorMask(pe,pe,pe,pe),_e=pe)},setLocked:function(pe){k=pe},setClear:function(pe,ie,ye,Ze,yt){yt===!0&&(pe*=Ze,ie*=Ze,ye*=Ze),Fe.set(pe,ie,ye,Ze),ke.equals(Fe)===!1&&(r.clearColor(pe,ie,ye,Ze),ke.copy(Fe))},reset:function(){k=!1,_e=null,ke.set(-1,0,0,0)}}}function n(){let k=!1,Fe=!1,_e=null,ke=null,pe=null;return{setReversed:function(ie){if(Fe!==ie){const ye=e.get("EXT_clip_control");ie?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Fe=ie;const Ze=pe;pe=null,this.setClear(Ze)}},getReversed:function(){return Fe},setTest:function(ie){ie?oe(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(ie){_e!==ie&&!k&&(r.depthMask(ie),_e=ie)},setFunc:function(ie){if(Fe&&(ie=ly[ie]),ke!==ie){switch(ie){case ec:r.depthFunc(r.NEVER);break;case tc:r.depthFunc(r.ALWAYS);break;case nc:r.depthFunc(r.LESS);break;case Gs:r.depthFunc(r.LEQUAL);break;case ic:r.depthFunc(r.EQUAL);break;case sc:r.depthFunc(r.GEQUAL);break;case rc:r.depthFunc(r.GREATER);break;case ac:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ke=ie}},setLocked:function(ie){k=ie},setClear:function(ie){pe!==ie&&(Fe&&(ie=1-ie),r.clearDepth(ie),pe=ie)},reset:function(){k=!1,_e=null,ke=null,pe=null,Fe=!1}}}function i(){let k=!1,Fe=null,_e=null,ke=null,pe=null,ie=null,ye=null,Ze=null,yt=null;return{setTest:function(gt){k||(gt?oe(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(gt){Fe!==gt&&!k&&(r.stencilMask(gt),Fe=gt)},setFunc:function(gt,vn,Dn){(_e!==gt||ke!==vn||pe!==Dn)&&(r.stencilFunc(gt,vn,Dn),_e=gt,ke=vn,pe=Dn)},setOp:function(gt,vn,Dn){(ie!==gt||ye!==vn||Ze!==Dn)&&(r.stencilOp(gt,vn,Dn),ie=gt,ye=vn,Ze=Dn)},setLocked:function(gt){k=gt},setClear:function(gt){yt!==gt&&(r.clearStencil(gt),yt=gt)},reset:function(){k=!1,Fe=null,_e=null,ke=null,pe=null,ie=null,ye=null,Ze=null,yt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,b=!1,g=null,p=null,x=null,v=null,_=null,w=null,E=null,R=new we(0,0,0),L=0,M=!1,S=null,D=null,z=null,O=null,$=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,H=0;const ae=r.getParameter(r.VERSION);ae.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ae)[1]),W=H>=1):ae.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),W=H>=2);let ge=null,be={};const xe=r.getParameter(r.SCISSOR_BOX),je=r.getParameter(r.VIEWPORT),We=new wt().fromArray(xe),Le=new wt().fromArray(je);function st(k,Fe,_e,ke){const pe=new Uint8Array(4),ie=r.createTexture();r.bindTexture(k,ie),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<_e;ye++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Fe,0,r.RGBA,1,1,ke,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(Fe+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return ie}const te={};te[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(r.DEPTH_TEST),a.setFunc(Gs),J(!1),he(gu),oe(r.CULL_FACE),X(Jn);function oe(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function De(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function qe(k,Fe){return u[k]!==Fe?(r.bindFramebuffer(k,Fe),u[k]=Fe,k===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Fe),k===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Ue(k,Fe){let _e=f,ke=!1;if(k){_e=d.get(Fe),_e===void 0&&(_e=[],d.set(Fe,_e));const pe=k.textures;if(_e.length!==pe.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,ye=pe.length;ie<ye;ie++)_e[ie]=r.COLOR_ATTACHMENT0+ie;_e.length=pe.length,ke=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,ke=!0);ke&&r.drawBuffers(_e)}function Qe(k){return m!==k?(r.useProgram(k),m=k,!0):!1}const Q={[Ki]:r.FUNC_ADD,[Fm]:r.FUNC_SUBTRACT,[Nm]:r.FUNC_REVERSE_SUBTRACT};Q[Um]=r.MIN,Q[km]=r.MAX;const re={[Om]:r.ZERO,[Bm]:r.ONE,[zm]:r.SRC_COLOR,[Zl]:r.SRC_ALPHA,[Xm]:r.SRC_ALPHA_SATURATE,[Vm]:r.DST_COLOR,[Gm]:r.DST_ALPHA,[qm]:r.ONE_MINUS_SRC_COLOR,[Ql]:r.ONE_MINUS_SRC_ALPHA,[Wm]:r.ONE_MINUS_DST_COLOR,[Hm]:r.ONE_MINUS_DST_ALPHA,[jm]:r.CONSTANT_COLOR,[Km]:r.ONE_MINUS_CONSTANT_COLOR,[Ym]:r.CONSTANT_ALPHA,[$m]:r.ONE_MINUS_CONSTANT_ALPHA};function X(k,Fe,_e,ke,pe,ie,ye,Ze,yt,gt){if(k===Jn){b===!0&&(De(r.BLEND),b=!1);return}if(b===!1&&(oe(r.BLEND),b=!0),k!==Dm){if(k!==g||gt!==M){if((p!==Ki||_!==Ki)&&(r.blendEquation(r.FUNC_ADD),p=Ki,_=Ki),gt)switch(k){case ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zr:r.blendFunc(r.ONE,r.ONE);break;case bu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Je("WebGLState: Invalid blending: ",k);break}else switch(k){case ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case bu:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",k);break}x=null,v=null,w=null,E=null,R.set(0,0,0),L=0,g=k,M=gt}return}pe=pe||Fe,ie=ie||_e,ye=ye||ke,(Fe!==p||pe!==_)&&(r.blendEquationSeparate(Q[Fe],Q[pe]),p=Fe,_=pe),(_e!==x||ke!==v||ie!==w||ye!==E)&&(r.blendFuncSeparate(re[_e],re[ke],re[ie],re[ye]),x=_e,v=ke,w=ie,E=ye),(Ze.equals(R)===!1||yt!==L)&&(r.blendColor(Ze.r,Ze.g,Ze.b,yt),R.copy(Ze),L=yt),g=k,M=!1}function ne(k,Fe){k.side===Rn?De(r.CULL_FACE):oe(r.CULL_FACE);let _e=k.side===Zt;Fe&&(_e=!_e),J(_e),k.blending===ts&&k.transparent===!1?X(Jn):X(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const ke=k.stencilWrite;o.setTest(ke),ke&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function J(k){S!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),S=k)}function he(k){k!==Pm?(oe(r.CULL_FACE),k!==D&&(k===gu?r.cullFace(r.BACK):k===Im?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),D=k}function C(k){k!==z&&(W&&r.lineWidth(k),z=k)}function Ce(k,Fe,_e){k?(oe(r.POLYGON_OFFSET_FILL),(O!==Fe||$!==_e)&&(r.polygonOffset(Fe,_e),O=Fe,$=_e)):De(r.POLYGON_OFFSET_FILL)}function Te(k){k?oe(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function Oe(k){k===void 0&&(k=r.TEXTURE0+V-1),ge!==k&&(r.activeTexture(k),ge=k)}function ue(k,Fe,_e){_e===void 0&&(ge===null?_e=r.TEXTURE0+V-1:_e=ge);let ke=be[_e];ke===void 0&&(ke={type:void 0,texture:void 0},be[_e]=ke),(ke.type!==k||ke.texture!==Fe)&&(ge!==_e&&(r.activeTexture(_e),ge=_e),r.bindTexture(k,Fe||te[k]),ke.type=k,ke.texture=Fe)}function P(){const k=be[ge];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function j(){try{r.texSubImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function se(){try{r.texSubImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function Ge(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function de(){try{r.texStorage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function Ie(){try{r.texStorage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function $e(){try{r.texImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function fe(){try{r.texImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function Ee(k){We.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),We.copy(k))}function ze(k){Le.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Le.copy(k))}function He(k,Fe){let _e=c.get(Fe);_e===void 0&&(_e=new WeakMap,c.set(Fe,_e));let ke=_e.get(k);ke===void 0&&(ke=r.getUniformBlockIndex(Fe,k.name),_e.set(k,ke))}function Me(k,Fe){const ke=c.get(Fe).get(k);l.get(Fe)!==ke&&(r.uniformBlockBinding(Fe,ke,k.__bindingPointIndex),l.set(Fe,ke))}function et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ge=null,be={},u={},d=new WeakMap,f=[],m=null,b=!1,g=null,p=null,x=null,v=null,_=null,w=null,E=null,R=new we(0,0,0),L=0,M=!1,S=null,D=null,z=null,O=null,$=null,We.set(0,0,r.canvas.width,r.canvas.height),Le.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:De,bindFramebuffer:qe,drawBuffers:Ue,useProgram:Qe,setBlending:X,setMaterial:ne,setFlipSided:J,setCullFace:he,setLineWidth:C,setPolygonOffset:Ce,setScissorTest:Te,activeTexture:Oe,bindTexture:ue,unbindTexture:P,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:$e,texImage3D:fe,updateUBOMapping:He,uniformBlockBinding:Me,texStorage2D:de,texStorage3D:Ie,texSubImage2D:j,texSubImage3D:se,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ge,scissor:Ee,viewport:ze,reset:et}}function hy(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,y){return f?new OffscreenCanvas(P,y):Wr("canvas")}function b(P,y,N){let j=1;const se=ue(P);if((se.width>N||se.height>N)&&(j=N/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(j*se.width),Ge=Math.floor(j*se.height);u===void 0&&(u=m(Z,Ge));const de=y?m(Z,Ge):u;return de.width=Z,de.height=Ge,de.getContext("2d").drawImage(P,0,0,Z,Ge),Ye("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Z+"x"+Ge+")."),de}else return"data"in P&&Ye("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(P,y,N,j,se=!1){if(P!==null){if(r[P]!==void 0)return r[P];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=y;if(y===r.RED&&(N===r.FLOAT&&(Z=r.R32F),N===r.HALF_FLOAT&&(Z=r.R16F),N===r.UNSIGNED_BYTE&&(Z=r.R8)),y===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(Z=r.R8UI),N===r.UNSIGNED_SHORT&&(Z=r.R16UI),N===r.UNSIGNED_INT&&(Z=r.R32UI),N===r.BYTE&&(Z=r.R8I),N===r.SHORT&&(Z=r.R16I),N===r.INT&&(Z=r.R32I)),y===r.RG&&(N===r.FLOAT&&(Z=r.RG32F),N===r.HALF_FLOAT&&(Z=r.RG16F),N===r.UNSIGNED_BYTE&&(Z=r.RG8)),y===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(Z=r.RG8UI),N===r.UNSIGNED_SHORT&&(Z=r.RG16UI),N===r.UNSIGNED_INT&&(Z=r.RG32UI),N===r.BYTE&&(Z=r.RG8I),N===r.SHORT&&(Z=r.RG16I),N===r.INT&&(Z=r.RG32I)),y===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),N===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),N===r.UNSIGNED_INT&&(Z=r.RGB32UI),N===r.BYTE&&(Z=r.RGB8I),N===r.SHORT&&(Z=r.RGB16I),N===r.INT&&(Z=r.RGB32I)),y===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),N===r.UNSIGNED_INT&&(Z=r.RGBA32UI),N===r.BYTE&&(Z=r.RGBA8I),N===r.SHORT&&(Z=r.RGBA16I),N===r.INT&&(Z=r.RGBA32I)),y===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),y===r.RGBA){const Ge=se?To:pt.getTransfer(j);N===r.FLOAT&&(Z=r.RGBA32F),N===r.HALF_FLOAT&&(Z=r.RGBA16F),N===r.UNSIGNED_BYTE&&(Z=Ge===bt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(P,y){let N;return P?y===null||y===ei||y===Gr?N=r.DEPTH24_STENCIL8:y===bn?N=r.DEPTH32F_STENCIL8:y===qr&&(N=r.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ei||y===Gr?N=r.DEPTH_COMPONENT24:y===bn?N=r.DEPTH_COMPONENT32F:y===qr&&(N=r.DEPTH_COMPONENT16),N}function w(P,y){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dt&&P.minFilter!==Ft?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function E(P){const y=P.target;y.removeEventListener("dispose",E),L(y),y.isVideoTexture&&h.delete(y)}function R(P){const y=P.target;y.removeEventListener("dispose",R),S(y)}function L(P){const y=n.get(P);if(y.__webglInit===void 0)return;const N=P.source,j=d.get(N);if(j){const se=j[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(P),Object.keys(j).length===0&&d.delete(N)}n.remove(P)}function M(P){const y=n.get(P);r.deleteTexture(y.__webglTexture);const N=P.source,j=d.get(N);delete j[y.__cacheKey],a.memory.textures--}function S(P){const y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let se=0;se<y.__webglFramebuffer[j].length;se++)r.deleteFramebuffer(y.__webglFramebuffer[j][se]);else r.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)r.deleteFramebuffer(y.__webglFramebuffer[j]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=P.textures;for(let j=0,se=N.length;j<se;j++){const Z=n.get(N[j]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(N[j])}n.remove(P)}let D=0;function z(){D=0}function O(){const P=D;return P>=i.maxTextures&&Ye("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function $(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function V(P,y){const N=n.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&N.__version!==P.version){const j=P.image;if(j===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{te(N,P,y);return}}else P.isExternalTexture&&(N.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+y)}function W(P,y){const N=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&N.__version!==P.version){te(N,P,y);return}else P.isExternalTexture&&(N.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+y)}function H(P,y){const N=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&N.__version!==P.version){te(N,P,y);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+y)}function ae(P,y){const N=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&N.__version!==P.version){oe(N,P,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+y)}const ge={[Li]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[So]:r.MIRRORED_REPEAT},be={[Dt]:r.NEAREST,[Cf]:r.NEAREST_MIPMAP_NEAREST,[Ar]:r.NEAREST_MIPMAP_LINEAR,[Ft]:r.LINEAR,[co]:r.LINEAR_MIPMAP_NEAREST,[di]:r.LINEAR_MIPMAP_LINEAR},xe={[o0]:r.NEVER,[d0]:r.ALWAYS,[l0]:r.LESS,[Eh]:r.LEQUAL,[c0]:r.EQUAL,[Ah]:r.GEQUAL,[h0]:r.GREATER,[u0]:r.NOTEQUAL};function je(P,y){if(y.type===bn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ft||y.magFilter===co||y.magFilter===Ar||y.magFilter===di||y.minFilter===Ft||y.minFilter===co||y.minFilter===Ar||y.minFilter===di)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ge[y.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ge[y.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ge[y.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,be[y.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,be[y.minFilter]),y.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Dt||y.minFilter!==Ar&&y.minFilter!==di||y.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function We(P,y){let N=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",E));const j=y.source;let se=d.get(j);se===void 0&&(se={},d.set(j,se));const Z=$(y);if(Z!==P.__cacheKey){se[Z]===void 0&&(se[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),se[Z].usedTimes++;const Ge=se[P.__cacheKey];Ge!==void 0&&(se[P.__cacheKey].usedTimes--,Ge.usedTimes===0&&M(y)),P.__cacheKey=Z,P.__webglTexture=se[Z].texture}return N}function Le(P,y,N){return Math.floor(Math.floor(P/N)/y)}function st(P,y,N,j){const Z=P.updateRanges;if(Z.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,N,j,y.data);else{Z.sort((fe,Ee)=>fe.start-Ee.start);let Ge=0;for(let fe=1;fe<Z.length;fe++){const Ee=Z[Ge],ze=Z[fe],He=Ee.start+Ee.count,Me=Le(ze.start,y.width,4),et=Le(Ee.start,y.width,4);ze.start<=He+1&&Me===et&&Le(ze.start+ze.count-1,y.width,4)===Me?Ee.count=Math.max(Ee.count,ze.start+ze.count-Ee.start):(++Ge,Z[Ge]=ze)}Z.length=Ge+1;const de=r.getParameter(r.UNPACK_ROW_LENGTH),Ie=r.getParameter(r.UNPACK_SKIP_PIXELS),$e=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let fe=0,Ee=Z.length;fe<Ee;fe++){const ze=Z[fe],He=Math.floor(ze.start/4),Me=Math.ceil(ze.count/4),et=He%y.width,k=Math.floor(He/y.width),Fe=Me,_e=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,et),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),t.texSubImage2D(r.TEXTURE_2D,0,et,k,Fe,_e,N,j,y.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,de),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,$e)}}function te(P,y,N){let j=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=r.TEXTURE_3D);const se=We(P,y),Z=y.source;t.bindTexture(j,P.__webglTexture,r.TEXTURE0+N);const Ge=n.get(Z);if(Z.version!==Ge.__version||se===!0){t.activeTexture(r.TEXTURE0+N);const de=pt.getPrimaries(pt.workingColorSpace),Ie=y.colorSpace===ui?null:pt.getPrimaries(y.colorSpace),$e=y.colorSpace===ui||de===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let fe=b(y.image,!1,i.maxTextureSize);fe=Oe(y,fe);const Ee=s.convert(y.format,y.colorSpace),ze=s.convert(y.type);let He=v(y.internalFormat,Ee,ze,y.colorSpace,y.isVideoTexture);je(j,y);let Me;const et=y.mipmaps,k=y.isVideoTexture!==!0,Fe=Ge.__version===void 0||se===!0,_e=Z.dataReady,ke=w(y,fe);if(y.isDepthTexture)He=_(y.format===Ji,y.type),Fe&&(k?t.texStorage2D(r.TEXTURE_2D,1,He,fe.width,fe.height):t.texImage2D(r.TEXTURE_2D,0,He,fe.width,fe.height,0,Ee,ze,null));else if(y.isDataTexture)if(et.length>0){k&&Fe&&t.texStorage2D(r.TEXTURE_2D,ke,He,et[0].width,et[0].height);for(let pe=0,ie=et.length;pe<ie;pe++)Me=et[pe],k?_e&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Me.width,Me.height,Ee,ze,Me.data):t.texImage2D(r.TEXTURE_2D,pe,He,Me.width,Me.height,0,Ee,ze,Me.data);y.generateMipmaps=!1}else k?(Fe&&t.texStorage2D(r.TEXTURE_2D,ke,He,fe.width,fe.height),_e&&st(y,fe,Ee,ze)):t.texImage2D(r.TEXTURE_2D,0,He,fe.width,fe.height,0,Ee,ze,fe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,He,et[0].width,et[0].height,fe.depth);for(let pe=0,ie=et.length;pe<ie;pe++)if(Me=et[pe],y.format!==hn)if(Ee!==null)if(k){if(_e)if(y.layerUpdates.size>0){const ye=ld(Me.width,Me.height,y.format,y.type);for(const Ze of y.layerUpdates){const yt=Me.data.subarray(Ze*ye/Me.data.BYTES_PER_ELEMENT,(Ze+1)*ye/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Ze,Me.width,Me.height,1,Ee,yt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Me.width,Me.height,fe.depth,Ee,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,He,Me.width,Me.height,fe.depth,0,Me.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?_e&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Me.width,Me.height,fe.depth,Ee,ze,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,He,Me.width,Me.height,fe.depth,0,Ee,ze,Me.data)}else{k&&Fe&&t.texStorage2D(r.TEXTURE_2D,ke,He,et[0].width,et[0].height);for(let pe=0,ie=et.length;pe<ie;pe++)Me=et[pe],y.format!==hn?Ee!==null?k?_e&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,He,Me.width,Me.height,0,Me.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?_e&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Me.width,Me.height,Ee,ze,Me.data):t.texImage2D(r.TEXTURE_2D,pe,He,Me.width,Me.height,0,Ee,ze,Me.data)}else if(y.isDataArrayTexture)if(k){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,He,fe.width,fe.height,fe.depth),_e)if(y.layerUpdates.size>0){const pe=ld(fe.width,fe.height,y.format,y.type);for(const ie of y.layerUpdates){const ye=fe.data.subarray(ie*pe/fe.data.BYTES_PER_ELEMENT,(ie+1)*pe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ie,fe.width,fe.height,1,Ee,ze,ye)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,ze,fe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,He,fe.width,fe.height,fe.depth,0,Ee,ze,fe.data);else if(y.isData3DTexture)k?(Fe&&t.texStorage3D(r.TEXTURE_3D,ke,He,fe.width,fe.height,fe.depth),_e&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,ze,fe.data)):t.texImage3D(r.TEXTURE_3D,0,He,fe.width,fe.height,fe.depth,0,Ee,ze,fe.data);else if(y.isFramebufferTexture){if(Fe)if(k)t.texStorage2D(r.TEXTURE_2D,ke,He,fe.width,fe.height);else{let pe=fe.width,ie=fe.height;for(let ye=0;ye<ke;ye++)t.texImage2D(r.TEXTURE_2D,ye,He,pe,ie,0,Ee,ze,null),pe>>=1,ie>>=1}}else if(et.length>0){if(k&&Fe){const pe=ue(et[0]);t.texStorage2D(r.TEXTURE_2D,ke,He,pe.width,pe.height)}for(let pe=0,ie=et.length;pe<ie;pe++)Me=et[pe],k?_e&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Ee,ze,Me):t.texImage2D(r.TEXTURE_2D,pe,He,Ee,ze,Me);y.generateMipmaps=!1}else if(k){if(Fe){const pe=ue(fe);t.texStorage2D(r.TEXTURE_2D,ke,He,pe.width,pe.height)}_e&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,ze,fe)}else t.texImage2D(r.TEXTURE_2D,0,He,Ee,ze,fe);g(y)&&p(j),Ge.__version=Z.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function oe(P,y,N){if(y.image.length!==6)return;const j=We(P,y),se=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+N);const Z=n.get(se);if(se.version!==Z.__version||j===!0){t.activeTexture(r.TEXTURE0+N);const Ge=pt.getPrimaries(pt.workingColorSpace),de=y.colorSpace===ui?null:pt.getPrimaries(y.colorSpace),Ie=y.colorSpace===ui||Ge===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const $e=y.isCompressedTexture||y.image[0].isCompressedTexture,fe=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let ie=0;ie<6;ie++)!$e&&!fe?Ee[ie]=b(y.image[ie],!0,i.maxCubemapSize):Ee[ie]=fe?y.image[ie].image:y.image[ie],Ee[ie]=Oe(y,Ee[ie]);const ze=Ee[0],He=s.convert(y.format,y.colorSpace),Me=s.convert(y.type),et=v(y.internalFormat,He,Me,y.colorSpace),k=y.isVideoTexture!==!0,Fe=Z.__version===void 0||j===!0,_e=se.dataReady;let ke=w(y,ze);je(r.TEXTURE_CUBE_MAP,y);let pe;if($e){k&&Fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,et,ze.width,ze.height);for(let ie=0;ie<6;ie++){pe=Ee[ie].mipmaps;for(let ye=0;ye<pe.length;ye++){const Ze=pe[ye];y.format!==hn?He!==null?k?_e&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,Ze.width,Ze.height,He,Ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,et,Ze.width,Ze.height,0,Ze.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,Ze.width,Ze.height,He,Me,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,et,Ze.width,Ze.height,0,He,Me,Ze.data)}}}else{if(pe=y.mipmaps,k&&Fe){pe.length>0&&ke++;const ie=ue(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,et,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(fe){k?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ee[ie].width,Ee[ie].height,He,Me,Ee[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,et,Ee[ie].width,Ee[ie].height,0,He,Me,Ee[ie].data);for(let ye=0;ye<pe.length;ye++){const yt=pe[ye].image[ie].image;k?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,yt.width,yt.height,He,Me,yt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,et,yt.width,yt.height,0,He,Me,yt.data)}}else{k?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,He,Me,Ee[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,et,He,Me,Ee[ie]);for(let ye=0;ye<pe.length;ye++){const Ze=pe[ye];k?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,He,Me,Ze.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,et,He,Me,Ze.image[ie])}}}g(y)&&p(r.TEXTURE_CUBE_MAP),Z.__version=se.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function De(P,y,N,j,se,Z){const Ge=s.convert(N.format,N.colorSpace),de=s.convert(N.type),Ie=v(N.internalFormat,Ge,de,N.colorSpace),$e=n.get(y),fe=n.get(N);if(fe.__renderTarget=y,!$e.__hasExternalTextures){const Ee=Math.max(1,y.width>>Z),ze=Math.max(1,y.height>>Z);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,Z,Ie,Ee,ze,y.depth,0,Ge,de,null):t.texImage2D(se,Z,Ie,Ee,ze,0,Ge,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Ce(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,se,fe.__webglTexture,0,C(y)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,se,fe.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(P,y,N){if(r.bindRenderbuffer(r.RENDERBUFFER,P),y.depthBuffer){const j=y.depthTexture,se=j&&j.isDepthTexture?j.type:null,Z=_(y.stencilBuffer,se),Ge=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ce(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C(y),Z,y.width,y.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,C(y),Z,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Z,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,P)}else{const j=y.textures;for(let se=0;se<j.length;se++){const Z=j[se],Ge=s.convert(Z.format,Z.colorSpace),de=s.convert(Z.type),Ie=v(Z.internalFormat,Ge,de,Z.colorSpace);Ce(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C(y),Ie,y.width,y.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,C(y),Ie,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ue(P,y,N){const j=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(y.depthTexture);if(se.__renderTarget=y,(!se.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(se.__webglInit===void 0&&(se.__webglInit=!0,y.depthTexture.addEventListener("dispose",E)),se.__webglTexture===void 0){se.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),je(r.TEXTURE_CUBE_MAP,y.depthTexture);const $e=s.convert(y.depthTexture.format),fe=s.convert(y.depthTexture.type);let Ee;y.depthTexture.format===mi?Ee=r.DEPTH_COMPONENT24:y.depthTexture.format===Ji&&(Ee=r.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Ee,y.width,y.height,0,$e,fe,null)}}else V(y.depthTexture,0);const Z=se.__webglTexture,Ge=C(y),de=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,Ie=y.depthTexture.format===Ji?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===mi)Ce(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ie,de,Z,0,Ge):r.framebufferTexture2D(r.FRAMEBUFFER,Ie,de,Z,0);else if(y.depthTexture.format===Ji)Ce(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ie,de,Z,0,Ge):r.framebufferTexture2D(r.FRAMEBUFFER,Ie,de,Z,0);else throw new Error("Unknown depthTexture format")}function Qe(P){const y=n.get(P),N=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),y.__depthDisposeCallback=se}y.__boundDepthTexture=j}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(N)for(let j=0;j<6;j++)Ue(y.__webglFramebuffer[j],P,j);else{const j=P.texture.mipmaps;j&&j.length>0?Ue(y.__webglFramebuffer[0],P,0):Ue(y.__webglFramebuffer,P,0)}else if(N){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=r.createRenderbuffer(),qe(y.__webglDepthbuffer[j],P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,Z)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),qe(y.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,Z)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(P,y,N){const j=n.get(P);y!==void 0&&De(j.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Qe(P)}function re(P){const y=P.texture,N=n.get(P),j=n.get(y);P.addEventListener("dispose",R);const se=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Ge=se.length>1;if(Ge||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=y.version,a.memory.textures++),Z){N.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[de]=[];for(let Ie=0;Ie<y.mipmaps.length;Ie++)N.__webglFramebuffer[de][Ie]=r.createFramebuffer()}else N.__webglFramebuffer[de]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)N.__webglFramebuffer[de]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let de=0,Ie=se.length;de<Ie;de++){const $e=n.get(se[de]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&Ce(P)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){const Ie=se[de];N.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[de]);const $e=s.convert(Ie.format,Ie.colorSpace),fe=s.convert(Ie.type),Ee=v(Ie.internalFormat,$e,fe,Ie.colorSpace,P.isXRRenderTarget===!0),ze=C(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,Ee,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,N.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),qe(N.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),je(r.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ie=0;Ie<y.mipmaps.length;Ie++)De(N.__webglFramebuffer[de][Ie],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie);else De(N.__webglFramebuffer[de],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let de=0,Ie=se.length;de<Ie;de++){const $e=se[de],fe=n.get($e);let Ee=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ee=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,fe.__webglTexture),je(Ee,$e),De(N.__webglFramebuffer,P,$e,r.COLOR_ATTACHMENT0+de,Ee,0),g($e)&&p(Ee)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,j.__webglTexture),je(de,y),y.mipmaps&&y.mipmaps.length>0)for(let Ie=0;Ie<y.mipmaps.length;Ie++)De(N.__webglFramebuffer[Ie],P,y,r.COLOR_ATTACHMENT0,de,Ie);else De(N.__webglFramebuffer,P,y,r.COLOR_ATTACHMENT0,de,0);g(y)&&p(de),t.unbindTexture()}P.depthBuffer&&Qe(P)}function X(P){const y=P.textures;for(let N=0,j=y.length;N<j;N++){const se=y[N];if(g(se)){const Z=x(P),Ge=n.get(se).__webglTexture;t.bindTexture(Z,Ge),p(Z),t.unbindTexture()}}}const ne=[],J=[];function he(P){if(P.samples>0){if(Ce(P)===!1){const y=P.textures,N=P.width,j=P.height;let se=r.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=n.get(P),de=y.length>1;if(de)for(let $e=0;$e<y.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Ie=P.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let $e=0;$e<y.length;$e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);const fe=n.get(y[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,fe,0)}r.blitFramebuffer(0,0,N,j,0,0,N,j,se,r.NEAREST),l===!0&&(ne.length=0,J.length=0,ne.push(r.COLOR_ATTACHMENT0+$e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ne.push(Z),J.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,J)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let $e=0;$e<y.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);const fe=n.get(y[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,fe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function C(P){return Math.min(i.maxSamples,P.samples)}function Ce(P){const y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Te(P){const y=a.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function Oe(P,y){const N=P.colorSpace,j=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||N!==an&&N!==ui&&(pt.getTransfer(N)===bt?(j!==hn||se!==gn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",N)),y}function ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=H,this.setTextureCube=ae,this.rebindTextures=Q,this.setupRenderTarget=re,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uy(r,e){function t(n,i=ui){let s;const a=pt.getTransfer(i);if(n===gn)return r.UNSIGNED_BYTE;if(n===xh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===_h)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Lf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pf)return r.BYTE;if(n===If)return r.SHORT;if(n===qr)return r.UNSIGNED_SHORT;if(n===bh)return r.INT;if(n===ei)return r.UNSIGNED_INT;if(n===bn)return r.FLOAT;if(n===dn)return r.HALF_FLOAT;if(n===Ff)return r.ALPHA;if(n===Nf)return r.RGB;if(n===hn)return r.RGBA;if(n===mi)return r.DEPTH_COMPONENT;if(n===Ji)return r.DEPTH_STENCIL;if(n===vh)return r.RED;if(n===yh)return r.RED_INTEGER;if(n===Vs)return r.RG;if(n===Mh)return r.RG_INTEGER;if(n===Sh)return r.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===hc||n===uc||n===dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fc||n===pc)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===gc)return s.COMPRESSED_R11_EAC;if(n===bc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===xc)return s.COMPRESSED_RG11_EAC;if(n===_c)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vc||n===yc||n===Mc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fc||n===Nc||n===Uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fc)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kc||n===Oc||n===Bc||n===zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===kc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fy=`
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

}`;class py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nt({vertexShader:dy,fragmentShader:fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class my extends rs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const b=typeof XRWebGLBinding<"u",g=new py,p={},x=t.getContextAttributes();let v=null,_=null;const w=[],E=[],R=new le;let L=null;const M=new nn;M.viewport=new wt;const S=new nn;S.viewport=new wt;const D=[M,S],z=new ub;let O=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=w[te];return oe===void 0&&(oe=new _l,w[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=w[te];return oe===void 0&&(oe=new _l,w[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=w[te];return oe===void 0&&(oe=new _l,w[te]=oe),oe.getHandSpace()};function V(te){const oe=E.indexOf(te.inputSource);if(oe===-1)return;const De=w[oe];De!==void 0&&(De.update(te.inputSource,te.frame,c||a),De.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",H);for(let te=0;te<w.length;te++){const oe=E[te];oe!==null&&(E[te]=null,w[te].disconnect(oe))}O=null,$=null,g.reset();for(const te in p)delete p[te];e.setRenderTarget(v),f=null,d=null,u=null,i=null,_=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",W),i.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,qe=null,Ue=null;x.depth&&(Ue=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=x.stencil?Ji:mi,qe=x.stencil?Gr:ei);const Qe={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Qe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new rn(d.textureWidth,d.textureHeight,{format:hn,type:gn,depthTexture:new Kr(d.textureWidth,d.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const De={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,De),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new rn(f.framebufferWidth,f.framebufferHeight,{format:hn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(te){for(let oe=0;oe<te.removed.length;oe++){const De=te.removed[oe],qe=E.indexOf(De);qe>=0&&(E[qe]=null,w[qe].disconnect(De))}for(let oe=0;oe<te.added.length;oe++){const De=te.added[oe];let qe=E.indexOf(De);if(qe===-1){for(let Qe=0;Qe<w.length;Qe++)if(Qe>=E.length){E.push(De),qe=Qe;break}else if(E[Qe]===null){E[Qe]=De,qe=Qe;break}if(qe===-1)break}const Ue=w[qe];Ue&&Ue.connect(De)}}const ae=new I,ge=new I;function be(te,oe,De){ae.setFromMatrixPosition(oe.matrixWorld),ge.setFromMatrixPosition(De.matrixWorld);const qe=ae.distanceTo(ge),Ue=oe.projectionMatrix.elements,Qe=De.projectionMatrix.elements,Q=Ue[14]/(Ue[10]-1),re=Ue[14]/(Ue[10]+1),X=(Ue[9]+1)/Ue[5],ne=(Ue[9]-1)/Ue[5],J=(Ue[8]-1)/Ue[0],he=(Qe[8]+1)/Qe[0],C=Q*J,Ce=Q*he,Te=qe/(-J+he),Oe=Te*-J;if(oe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Oe),te.translateZ(Te),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ue[10]===-1)te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ue=Q+Te,P=re+Te,y=C-Oe,N=Ce+(qe-Oe),j=X*re/P*ue,se=ne*re/P*ue;te.projectionMatrix.makePerspective(y,N,j,se,ue,P),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function xe(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let oe=te.near,De=te.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(De=g.depthFar)),z.near=S.near=M.near=oe,z.far=S.far=M.far=De,(O!==z.near||$!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,$=z.far),z.layers.mask=te.layers.mask|6,M.layers.mask=z.layers.mask&3,S.layers.mask=z.layers.mask&5;const qe=te.parent,Ue=z.cameras;xe(z,qe);for(let Qe=0;Qe<Ue.length;Qe++)xe(Ue[Qe],qe);Ue.length===2?be(z,M,S):z.projectionMatrix.copy(M.projectionMatrix),je(te,z,qe)};function je(te,oe,De){De===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(De.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ws*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(te){return p[te]};let We=null;function Le(te,oe){if(h=oe.getViewerPose(c||a),m=oe,h!==null){const De=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let qe=!1;De.length!==z.cameras.length&&(z.cameras.length=0,qe=!0);for(let re=0;re<De.length;re++){const X=De[re];let ne=null;if(f!==null)ne=f.getViewport(X);else{const he=u.getViewSubImage(d,X);ne=he.viewport,re===0&&(e.setRenderTargetTextures(_,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(_))}let J=D[re];J===void 0&&(J=new nn,J.layers.enable(re),J.viewport=new wt,D[re]=J),J.matrix.fromArray(X.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(X.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ne.x,ne.y,ne.width,ne.height),re===0&&(z.matrix.copy(J.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),qe===!0&&z.cameras.push(J)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();const re=u.getDepthInformation(De[0]);re&&re.isValid&&re.texture&&g.init(re,i.renderState)}if(Ue&&Ue.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let re=0;re<De.length;re++){const X=De[re].camera;if(X){let ne=p[X];ne||(ne=new tp,p[X]=ne);const J=u.getCameraImage(X);ne.sourceTexture=J}}}}for(let De=0;De<w.length;De++){const qe=E[De],Ue=w[De];qe!==null&&Ue!==void 0&&Ue.update(qe,oe,c||a)}We&&We(te,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}const st=new xp;st.setAnimationLoop(Le),this.setAnimationLoop=function(te){We=te},this.dispose=function(){}}}const Gi=new _n,gy=new Ke;function by(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Vf(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,_=x.envMapRotation;v&&(g.envMap.value=v,Gi.copy(_),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),g.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(Gi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xy(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const _=v.program;n.uniformBlockBinding(x,_)}function c(x,v){let _=i[x.id];_===void 0&&(m(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",g));const w=v.program;n.updateUBOMapping(x,w);const E=e.render.frame;s[x.id]!==E&&(d(x),s[x.id]=E)}function h(x){const v=u();x.__bindingPointIndex=v;const _=r.createBuffer(),w=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,w,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,_),_}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],_=x.uniforms,w=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,R=_.length;E<R;E++){const L=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,S=L.length;M<S;M++){const D=L[M];if(f(D,E,M,w)===!0){const z=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let V=0;V<O.length;V++){const W=O[V],H=b(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,z+$,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,$),$+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,_,w){const E=x.value,R=v+"_"+_;if(w[R]===void 0)return typeof E=="number"||typeof E=="boolean"?w[R]=E:w[R]=E.clone(),!0;{const L=w[R];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return w[R]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(x){const v=x.uniforms;let _=0;const w=16;for(let R=0,L=v.length;R<L;R++){const M=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,D=M.length;S<D;S++){const z=M[S],O=Array.isArray(z.value)?z.value:[z.value];for(let $=0,V=O.length;$<V;$++){const W=O[$],H=b(W),ae=_%w,ge=ae%H.boundary,be=ae+ge;_+=ge,be!==0&&w-be<H.storage&&(_+=w-be),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=H.storage}}}const E=_%w;return E>0&&(_+=w-E),x.__size=_,x.__cache={},this}function b(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const _y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function vy(){return Vn===null&&(Vn=new ea(_y,16,16,Vs,dn),Vn.name="DFG_LUT",Vn.minFilter=Ft,Vn.magFilter=Ft,Vn.wrapS=Bn,Vn.wrapT=Bn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class yy{constructor(e={}){const{canvas:t=p0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const b=f,g=new Set([Sh,Mh,yh]),p=new Set([gn,ei,qr,Gr,xh,_h]),x=new Uint32Array(4),v=new Int32Array(4);let _=null,w=null;const E=[],R=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let S=!1;this._outputColorSpace=Et;let D=0,z=0,O=null,$=-1,V=null;const W=new wt,H=new wt;let ae=null;const ge=new we(0);let be=0,xe=t.width,je=t.height,We=1,Le=null,st=null;const te=new wt(0,0,xe,je),oe=new wt(0,0,xe,je);let De=!1;const qe=new Lh;let Ue=!1,Qe=!1;const Q=new Ke,re=new I,X=new wt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function he(){return O===null?We:1}let C=n;function Ce(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hh}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",gt,!1),C===null){const B="webgl2";if(C=Ce(B,T),C===null)throw Ce(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Je("WebGLRenderer: "+T.message),T}let Te,Oe,ue,P,y,N,j,se,Z,Ge,de,Ie,$e,fe,Ee,ze,He,Me,et,k,Fe,_e,ke,pe;function ie(){Te=new v_(C),Te.init(),_e=new uy(C,Te),Oe=new u_(C,Te,e,_e),ue=new cy(C,Te),Oe.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),P=new S_(C),y=new Kv,N=new hy(C,Te,ue,y,Oe,_e,P),j=new f_(M),se=new __(M),Z=new Ab(C),ke=new c_(C,Z),Ge=new y_(C,Z,P,ke),de=new T_(C,Ge,Z,P),et=new w_(C,Oe,N),ze=new d_(y),Ie=new jv(M,j,se,Te,Oe,ke,ze),$e=new by(M,y),fe=new $v,Ee=new ny(Te),Me=new l_(M,j,se,ue,de,m,l),He=new oy(M,de,Oe),pe=new xy(C,P,Oe,ue),k=new h_(C,Te,P),Fe=new M_(C,Te,P),P.programs=Ie.programs,M.capabilities=Oe,M.extensions=Te,M.properties=y,M.renderLists=fe,M.shadowMap=He,M.state=ue,M.info=P}ie(),b!==gn&&(L=new A_(b,t.width,t.height,i,s));const ye=new my(M,C);this.xr=ye,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(T){T!==void 0&&(We=T,this.setSize(xe,je,!1))},this.getSize=function(T){return T.set(xe,je)},this.setSize=function(T,B,Y=!0){if(ye.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=T,je=B,t.width=Math.floor(T*We),t.height=Math.floor(B*We),Y===!0&&(t.style.width=T+"px",t.style.height=B+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(xe*We,je*We).floor()},this.setDrawingBufferSize=function(T,B,Y){xe=T,je=B,We=Y,t.width=Math.floor(T*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(b===gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,B,Y,K){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,B,Y,K),ue.viewport(W.copy(te).multiplyScalar(We).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,B,Y,K){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,B,Y,K),ue.scissor(H.copy(oe).multiplyScalar(We).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){ue.setScissorTest(De=T)},this.setOpaqueSort=function(T){Le=T},this.setTransparentSort=function(T){st=T},this.getClearColor=function(T){return T.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Y=!0){let K=0;if(T){let q=!1;if(O!==null){const Ae=O.texture.format;q=g.has(Ae)}if(q){const Ae=O.texture.type,Be=p.has(Ae),Ne=Me.getClearColor(),A=Me.getClearAlpha(),F=Ne.r,U=Ne.g,G=Ne.b;Be?(x[0]=F,x[1]=U,x[2]=G,x[3]=A,C.clearBufferuiv(C.COLOR,0,x)):(v[0]=F,v[1]=U,v[2]=G,v[3]=A,C.clearBufferiv(C.COLOR,0,v))}else K|=C.COLOR_BUFFER_BIT}B&&(K|=C.DEPTH_BUFFER_BIT),Y&&(K|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Me.dispose(),fe.dispose(),Ee.dispose(),y.dispose(),j.dispose(),se.dispose(),de.dispose(),ke.dispose(),pe.dispose(),Ie.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",aa),ye.removeEventListener("sessionend",oa),ni.stop()};function Ze(T){T.preventDefault(),Ao("WebGLRenderer: Context Lost."),S=!0}function yt(){Ao("WebGLRenderer: Context Restored."),S=!1;const T=P.autoReset,B=He.enabled,Y=He.autoUpdate,K=He.needsUpdate,q=He.type;ie(),P.autoReset=T,He.enabled=B,He.autoUpdate=Y,He.needsUpdate=K,He.type=q}function gt(T){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function vn(T){const B=T.target;B.removeEventListener("dispose",vn),Dn(B)}function Dn(T){Go(T),y.remove(T)}function Go(T){const B=y.get(T).programs;B!==void 0&&(B.forEach(function(Y){Ie.releaseProgram(Y)}),T.isShaderMaterial&&Ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Y,K,q,Ae){B===null&&(B=ne);const Be=q.isMesh&&q.matrixWorld.determinant()<0,Ne=da(T,B,Y,K,q);ue.setMaterial(K,Be);let A=Y.index,F=1;if(K.wireframe===!0){if(A=Ge.getWireframeAttribute(Y),A===void 0)return;F=2}const U=Y.drawRange,G=Y.attributes.position;let ee=U.start*F,me=(U.start+U.count)*F;Ae!==null&&(ee=Math.max(ee,Ae.start*F),me=Math.min(me,(Ae.start+Ae.count)*F)),A!==null?(ee=Math.max(ee,0),me=Math.min(me,A.count)):G!=null&&(ee=Math.max(ee,0),me=Math.min(me,G.count));const Se=me-ee;if(Se<0||Se===1/0)return;ke.setup(q,K,Ne,Y,A);let ce,Re=k;if(A!==null&&(ce=Z.get(A),Re=Fe,Re.setIndex(ce)),q.isMesh)K.wireframe===!0?(ue.setLineWidth(K.wireframeLinewidth*he()),Re.setMode(C.LINES)):Re.setMode(C.TRIANGLES);else if(q.isLine){let ve=K.linewidth;ve===void 0&&(ve=1),ue.setLineWidth(ve*he()),q.isLineSegments?Re.setMode(C.LINES):q.isLineLoop?Re.setMode(C.LINE_LOOP):Re.setMode(C.LINE_STRIP)}else q.isPoints?Re.setMode(C.POINTS):q.isSprite&&Re.setMode(C.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Xr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Re.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const ve=q._multiDrawStarts,Ve=q._multiDrawCounts,tt=q._multiDrawCount,Ct=A?Z.get(A).bytesPerElement:1,yn=y.get(K).currentProgram.getUniforms();for(let Ht=0;Ht<tt;Ht++)yn.setValue(C,"_gl_DrawID",Ht),Re.render(ve[Ht]/Ct,Ve[Ht])}else if(q.isInstancedMesh)Re.renderInstances(ee,Se,q.count);else if(Y.isInstancedBufferGeometry){const ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ve=Math.min(Y.instanceCount,ve);Re.renderInstances(ee,Se,Ve)}else Re.render(ee,Se)};function ra(T,B,Y){T.transparent===!0&&T.side===Rn&&T.forceSinglePass===!1?(T.side=Zt,T.needsUpdate=!0,ls(T,B,Y),T.side=qn,T.needsUpdate=!0,ls(T,B,Y),T.side=Rn):ls(T,B,Y)}this.compile=function(T,B,Y=null){Y===null&&(Y=T),w=Ee.get(Y),w.init(B),R.push(w),Y.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),T!==Y&&T.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();const K=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Be=0;Be<Ae.length;Be++){const Ne=Ae[Be];ra(Ne,Y,q),K.add(Ne)}else ra(Ae,Y,q),K.add(Ae)}),w=R.pop(),K},this.compileAsync=function(T,B,Y=null){const K=this.compile(T,B,Y);return new Promise(q=>{function Ae(){if(K.forEach(function(Be){y.get(Be).currentProgram.isReady()&&K.delete(Be)}),K.size===0){q(T);return}setTimeout(Ae,10)}Te.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let sr=null;function Ho(T){sr&&sr(T)}function aa(){ni.stop()}function oa(){ni.start()}const ni=new xp;ni.setAnimationLoop(Ho),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(T){sr=T,ye.setAnimationLoop(T),T===null?ni.stop():ni.start()},ye.addEventListener("sessionstart",aa),ye.addEventListener("sessionend",oa),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const Y=ye.enabled===!0&&ye.isPresenting===!0,K=L!==null&&(O===null||Y)&&L.begin(M,O);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(B),B=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,B,O),w=Ee.get(T,R.length),w.init(B),R.push(w),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),qe.setFromProjectionMatrix(Q,Yn,B.reversedDepth),Qe=this.localClippingEnabled,Ue=ze.init(this.clippingPlanes,Qe),_=fe.get(T,E.length),_.init(),E.push(_),ye.enabled===!0&&ye.isPresenting===!0){const Be=M.xr.getDepthSensingMesh();Be!==null&&rr(Be,B,-1/0,M.sortObjects)}rr(T,B,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(Le,st),J=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,J&&Me.addToRenderList(_,T),this.info.render.frame++,Ue===!0&&ze.beginShadows();const q=w.state.shadowsArray;if(He.render(q,T,B),Ue===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&L.hasRenderPass())===!1){const Be=_.opaque,Ne=_.transmissive;if(w.setupLights(),B.isArrayCamera){const A=B.cameras;if(Ne.length>0)for(let F=0,U=A.length;F<U;F++){const G=A[F];ca(Be,Ne,T,G)}J&&Me.render(T);for(let F=0,U=A.length;F<U;F++){const G=A[F];la(_,T,G,G.viewport)}}else Ne.length>0&&ca(Be,Ne,T,B),J&&Me.render(T),la(_,T,B)}O!==null&&z===0&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),K&&L.end(M),T.isScene===!0&&T.onAfterRender(M,T,B),ke.resetDefaultState(),$=-1,V=null,R.pop(),R.length>0?(w=R[R.length-1],Ue===!0&&ze.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?_=E[E.length-1]:_=null};function rr(T,B,Y,K){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||qe.intersectsSprite(T)){K&&X.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const Be=de.update(T),Ne=T.material;Ne.visible&&_.push(T,Be,Ne,Y,X.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||qe.intersectsObject(T))){const Be=de.update(T),Ne=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),X.copy(T.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),X.copy(Be.boundingSphere.center)),X.applyMatrix4(T.matrixWorld).applyMatrix4(Q)),Array.isArray(Ne)){const A=Be.groups;for(let F=0,U=A.length;F<U;F++){const G=A[F],ee=Ne[G.materialIndex];ee&&ee.visible&&_.push(T,Be,ee,Y,X.z,G)}}else Ne.visible&&_.push(T,Be,Ne,Y,X.z,null)}}const Ae=T.children;for(let Be=0,Ne=Ae.length;Be<Ne;Be++)rr(Ae[Be],B,Y,K)}function la(T,B,Y,K){const{opaque:q,transmissive:Ae,transparent:Be}=T;w.setupLightsView(Y),Ue===!0&&ze.setGlobalState(M.clippingPlanes,Y),K&&ue.viewport(W.copy(K)),q.length>0&&os(q,B,Y),Ae.length>0&&os(Ae,B,Y),Be.length>0&&os(Be,B,Y),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function ca(T,B,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[K.id]===void 0){const ee=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[K.id]=new rn(1,1,{generateMipmaps:!0,type:ee?dn:gn,minFilter:di,samples:Oe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const Ae=w.state.transmissionRenderTarget[K.id],Be=K.viewport||W;Ae.setSize(Be.z*M.transmissionResolutionScale,Be.w*M.transmissionResolutionScale);const Ne=M.getRenderTarget(),A=M.getActiveCubeFace(),F=M.getActiveMipmapLevel();M.setRenderTarget(Ae),M.getClearColor(ge),be=M.getClearAlpha(),be<1&&M.setClearColor(16777215,.5),M.clear(),J&&Me.render(Y);const U=M.toneMapping;M.toneMapping=Zn;const G=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),w.setupLightsView(K),Ue===!0&&ze.setGlobalState(M.clippingPlanes,K),os(T,Y,K),N.updateMultisampleRenderTarget(Ae),N.updateRenderTargetMipmap(Ae),Te.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let me=0,Se=B.length;me<Se;me++){const ce=B[me],{object:Re,geometry:ve,material:Ve,group:tt}=ce;if(Ve.side===Rn&&Re.layers.test(K.layers)){const Ct=Ve.side;Ve.side=Zt,Ve.needsUpdate=!0,ha(Re,Y,K,ve,Ve,tt),Ve.side=Ct,Ve.needsUpdate=!0,ee=!0}}ee===!0&&(N.updateMultisampleRenderTarget(Ae),N.updateRenderTargetMipmap(Ae))}M.setRenderTarget(Ne,A,F),M.setClearColor(ge,be),G!==void 0&&(K.viewport=G),M.toneMapping=U}function os(T,B,Y){const K=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Ae=T.length;q<Ae;q++){const Be=T[q],{object:Ne,geometry:A,group:F}=Be;let U=Be.material;U.allowOverride===!0&&K!==null&&(U=K),Ne.layers.test(Y.layers)&&ha(Ne,B,Y,A,U,F)}}function ha(T,B,Y,K,q,Ae){T.onBeforeRender(M,B,Y,K,q,Ae),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(M,B,Y,K,T,Ae),q.transparent===!0&&q.side===Rn&&q.forceSinglePass===!1?(q.side=Zt,q.needsUpdate=!0,M.renderBufferDirect(Y,B,K,q,T,Ae),q.side=qn,q.needsUpdate=!0,M.renderBufferDirect(Y,B,K,q,T,Ae),q.side=Rn):M.renderBufferDirect(Y,B,K,q,T,Ae),T.onAfterRender(M,B,Y,K,q,Ae)}function ls(T,B,Y){B.isScene!==!0&&(B=ne);const K=y.get(T),q=w.state.lights,Ae=w.state.shadowsArray,Be=q.state.version,Ne=Ie.getParameters(T,q.state,Ae,B,Y),A=Ie.getProgramCacheKey(Ne);let F=K.programs;K.environment=T.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(T.isMeshStandardMaterial?se:j).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,F===void 0&&(T.addEventListener("dispose",vn),F=new Map,K.programs=F);let U=F.get(A);if(U!==void 0){if(K.currentProgram===U&&K.lightsStateVersion===Be)return ar(T,Ne),U}else Ne.uniforms=Ie.getUniforms(T),T.onBeforeCompile(Ne,M),U=Ie.acquireProgram(Ne,A),F.set(A,U),K.uniforms=Ne.uniforms;const G=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(G.clippingPlanes=ze.uniform),ar(T,Ne),K.needsLights=fa(T),K.lightsStateVersion=Be,K.needsLights&&(G.ambientLightColor.value=q.state.ambient,G.lightProbe.value=q.state.probe,G.directionalLights.value=q.state.directional,G.directionalLightShadows.value=q.state.directionalShadow,G.spotLights.value=q.state.spot,G.spotLightShadows.value=q.state.spotShadow,G.rectAreaLights.value=q.state.rectArea,G.ltc_1.value=q.state.rectAreaLTC1,G.ltc_2.value=q.state.rectAreaLTC2,G.pointLights.value=q.state.point,G.pointLightShadows.value=q.state.pointShadow,G.hemisphereLights.value=q.state.hemi,G.directionalShadowMap.value=q.state.directionalShadowMap,G.directionalShadowMatrix.value=q.state.directionalShadowMatrix,G.spotShadowMap.value=q.state.spotShadowMap,G.spotLightMatrix.value=q.state.spotLightMatrix,G.spotLightMap.value=q.state.spotLightMap,G.pointShadowMap.value=q.state.pointShadowMap,G.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=U,K.uniformsList=null,U}function ua(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=mo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ar(T,B){const Y=y.get(T);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function da(T,B,Y,K,q){B.isScene!==!0&&(B=ne),N.resetTextureUnits();const Ae=B.fog,Be=K.isMeshStandardMaterial?B.environment:null,Ne=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:an,A=(K.isMeshStandardMaterial?se:j).get(K.envMap||Be),F=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,U=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),G=!!Y.morphAttributes.position,ee=!!Y.morphAttributes.normal,me=!!Y.morphAttributes.color;let Se=Zn;K.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Se=M.toneMapping);const ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Re=ce!==void 0?ce.length:0,ve=y.get(K),Ve=w.state.lights;if(Ue===!0&&(Qe===!0||T!==V)){const Pt=T===V&&K.id===$;ze.setState(K,T,Pt)}let tt=!1;K.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Ve.state.version||ve.outputColorSpace!==Ne||q.isBatchedMesh&&ve.batching===!1||!q.isBatchedMesh&&ve.batching===!0||q.isBatchedMesh&&ve.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ve.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ve.instancing===!1||!q.isInstancedMesh&&ve.instancing===!0||q.isSkinnedMesh&&ve.skinning===!1||!q.isSkinnedMesh&&ve.skinning===!0||q.isInstancedMesh&&ve.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ve.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ve.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ve.instancingMorph===!1&&q.morphTexture!==null||ve.envMap!==A||K.fog===!0&&ve.fog!==Ae||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==ze.numPlanes||ve.numIntersection!==ze.numIntersection)||ve.vertexAlphas!==F||ve.vertexTangents!==U||ve.morphTargets!==G||ve.morphNormals!==ee||ve.morphColors!==me||ve.toneMapping!==Se||ve.morphTargetsCount!==Re)&&(tt=!0):(tt=!0,ve.__version=K.version);let Ct=ve.currentProgram;tt===!0&&(Ct=ls(K,B,q));let yn=!1,Ht=!1,fn=!1;const nt=Ct.getUniforms(),Mt=ve.uniforms;if(ue.useProgram(Ct.program)&&(yn=!0,Ht=!0,fn=!0),K.id!==$&&($=K.id,Ht=!0),yn||V!==T){ue.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),nt.setValue(C,"projectionMatrix",T.projectionMatrix),nt.setValue(C,"viewMatrix",T.matrixWorldInverse);const ht=nt.map.cameraPosition;ht!==void 0&&ht.setValue(C,re.setFromMatrixPosition(T.matrixWorld)),Oe.logarithmicDepthBuffer&&nt.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&nt.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,Ht=!0,fn=!0)}if(ve.needsLights&&(Ve.state.directionalShadowMap.length>0&&nt.setValue(C,"directionalShadowMap",Ve.state.directionalShadowMap,N),Ve.state.spotShadowMap.length>0&&nt.setValue(C,"spotShadowMap",Ve.state.spotShadowMap,N),Ve.state.pointShadowMap.length>0&&nt.setValue(C,"pointShadowMap",Ve.state.pointShadowMap,N)),q.isSkinnedMesh){nt.setOptional(C,q,"bindMatrix"),nt.setOptional(C,q,"bindMatrixInverse");const Pt=q.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),nt.setValue(C,"boneTexture",Pt.boneTexture,N))}q.isBatchedMesh&&(nt.setOptional(C,q,"batchingTexture"),nt.setValue(C,"batchingTexture",q._matricesTexture,N),nt.setOptional(C,q,"batchingIdTexture"),nt.setValue(C,"batchingIdTexture",q._indirectTexture,N),nt.setOptional(C,q,"batchingColorTexture"),q._colorsTexture!==null&&nt.setValue(C,"batchingColorTexture",q._colorsTexture,N));const Ut=Y.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&et.update(q,Y,Ct),(Ht||ve.receiveShadow!==q.receiveShadow)&&(ve.receiveShadow=q.receiveShadow,nt.setValue(C,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Mt.envMap.value=A,Mt.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(Mt.envMapIntensity.value=B.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=vy()),Ht&&(nt.setValue(C,"toneMappingExposure",M.toneMappingExposure),ve.needsLights&&Vo(Mt,fn),Ae&&K.fog===!0&&$e.refreshFogUniforms(Mt,Ae),$e.refreshMaterialUniforms(Mt,K,We,je,w.state.transmissionRenderTarget[T.id]),mo.upload(C,ua(ve),Mt,N)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(mo.upload(C,ua(ve),Mt,N),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&nt.setValue(C,"center",q.center),nt.setValue(C,"modelViewMatrix",q.modelViewMatrix),nt.setValue(C,"normalMatrix",q.normalMatrix),nt.setValue(C,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Pt=K.uniformsGroups;for(let ht=0,Mn=Pt.length;ht<Mn;ht++){const Qt=Pt[ht];pe.update(Qt,Ct),pe.bind(Qt,Ct)}}return Ct}function Vo(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function fa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,B,Y){const K=y.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),y.get(T.texture).__webglTexture=B,y.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Y,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const Y=y.get(T);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const Fi=C.createFramebuffer();this.setRenderTarget=function(T,B=0,Y=0){O=T,D=B,z=Y;let K=null,q=!1,Ae=!1;if(T){const Ne=y.get(T);if(Ne.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(C.FRAMEBUFFER,Ne.__webglFramebuffer),W.copy(T.viewport),H.copy(T.scissor),ae=T.scissorTest,ue.viewport(W),ue.scissor(H),ue.setScissorTest(ae),$=-1;return}else if(Ne.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(Ne.__hasExternalTextures)N.rebindTextures(T,y.get(T.texture).__webglTexture,y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const U=T.depthTexture;if(Ne.__boundDepthTexture!==U){if(U!==null&&y.has(U)&&(T.width!==U.image.width||T.height!==U.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const A=T.texture;(A.isData3DTexture||A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Ae=!0);const F=y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(F[B])?K=F[B][Y]:K=F[B],q=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?K=y.get(T).__webglMultisampledFramebuffer:Array.isArray(F)?K=F[Y]:K=F,W.copy(T.viewport),H.copy(T.scissor),ae=T.scissorTest}else W.copy(te).multiplyScalar(We).floor(),H.copy(oe).multiplyScalar(We).floor(),ae=De;if(Y!==0&&(K=Fi),ue.bindFramebuffer(C.FRAMEBUFFER,K)&&ue.drawBuffers(T,K),ue.viewport(W),ue.scissor(H),ue.setScissorTest(ae),q){const Ne=y.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ne.__webglTexture,Y)}else if(Ae){const Ne=B;for(let A=0;A<T.textures.length;A++){const F=y.get(T.textures[A]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+A,F.__webglTexture,Y,Ne)}}else if(T!==null&&Y!==0){const Ne=y.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ne.__webglTexture,Y)}$=-1},this.readRenderTargetPixels=function(T,B,Y,K,q,Ae,Be,Ne=0){if(!(T&&T.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let A=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(A=A[Be]),A){ue.bindFramebuffer(C.FRAMEBUFFER,A);try{const F=T.textures[Ne],U=F.format,G=F.type;if(!Oe.textureFormatReadable(U)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(G)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-K&&Y>=0&&Y<=T.height-q&&(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ne),C.readPixels(B,Y,K,q,_e.convert(U),_e.convert(G),Ae))}finally{const F=O!==null?y.get(O).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,F)}}},this.readRenderTargetPixelsAsync=async function(T,B,Y,K,q,Ae,Be,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let A=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(A=A[Be]),A)if(B>=0&&B<=T.width-K&&Y>=0&&Y<=T.height-q){ue.bindFramebuffer(C.FRAMEBUFFER,A);const F=T.textures[Ne],U=F.format,G=F.type;if(!Oe.textureFormatReadable(U))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(G))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ee),C.bufferData(C.PIXEL_PACK_BUFFER,Ae.byteLength,C.STREAM_READ),T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ne),C.readPixels(B,Y,K,q,_e.convert(U),_e.convert(G),0);const me=O!==null?y.get(O).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,me);const Se=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await m0(C,Se,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ee),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ae),C.deleteBuffer(ee),C.deleteSync(Se),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Y=0){const K=Math.pow(2,-Y),q=Math.floor(T.image.width*K),Ae=Math.floor(T.image.height*K),Be=B!==null?B.x:0,Ne=B!==null?B.y:0;N.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,Y,0,0,Be,Ne,q,Ae),ue.unbindTexture()};const ii=C.createFramebuffer(),Wo=C.createFramebuffer();this.copyTextureToTexture=function(T,B,Y=null,K=null,q=0,Ae=null){Ae===null&&(q!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=q,q=0):Ae=0);let Be,Ne,A,F,U,G,ee,me,Se;const ce=T.isCompressedTexture?T.mipmaps[Ae]:T.image;if(Y!==null)Be=Y.max.x-Y.min.x,Ne=Y.max.y-Y.min.y,A=Y.isBox3?Y.max.z-Y.min.z:1,F=Y.min.x,U=Y.min.y,G=Y.isBox3?Y.min.z:0;else{const Ut=Math.pow(2,-q);Be=Math.floor(ce.width*Ut),Ne=Math.floor(ce.height*Ut),T.isDataArrayTexture?A=ce.depth:T.isData3DTexture?A=Math.floor(ce.depth*Ut):A=1,F=0,U=0,G=0}K!==null?(ee=K.x,me=K.y,Se=K.z):(ee=0,me=0,Se=0);const Re=_e.convert(B.format),ve=_e.convert(B.type);let Ve;B.isData3DTexture?(N.setTexture3D(B,0),Ve=C.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(N.setTexture2DArray(B,0),Ve=C.TEXTURE_2D_ARRAY):(N.setTexture2D(B,0),Ve=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);const tt=C.getParameter(C.UNPACK_ROW_LENGTH),Ct=C.getParameter(C.UNPACK_IMAGE_HEIGHT),yn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ht=C.getParameter(C.UNPACK_SKIP_ROWS),fn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ce.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,F),C.pixelStorei(C.UNPACK_SKIP_ROWS,U),C.pixelStorei(C.UNPACK_SKIP_IMAGES,G);const nt=T.isDataArrayTexture||T.isData3DTexture,Mt=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const Ut=y.get(T),Pt=y.get(B),ht=y.get(Ut.__renderTarget),Mn=y.get(Pt.__renderTarget);ue.bindFramebuffer(C.READ_FRAMEBUFFER,ht.__webglFramebuffer),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let Qt=0;Qt<A;Qt++)nt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,y.get(T).__webglTexture,q,G+Qt),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,y.get(B).__webglTexture,Ae,Se+Qt)),C.blitFramebuffer(F,U,Be,Ne,ee,me,Be,Ne,C.DEPTH_BUFFER_BIT,C.NEAREST);ue.bindFramebuffer(C.READ_FRAMEBUFFER,null),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||y.has(T)){const Ut=y.get(T),Pt=y.get(B);ue.bindFramebuffer(C.READ_FRAMEBUFFER,ii),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wo);for(let ht=0;ht<A;ht++)nt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ut.__webglTexture,q,G+ht):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ut.__webglTexture,q),Mt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,Ae,Se+ht):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pt.__webglTexture,Ae),q!==0?C.blitFramebuffer(F,U,Be,Ne,ee,me,Be,Ne,C.COLOR_BUFFER_BIT,C.NEAREST):Mt?C.copyTexSubImage3D(Ve,Ae,ee,me,Se+ht,F,U,Be,Ne):C.copyTexSubImage2D(Ve,Ae,ee,me,F,U,Be,Ne);ue.bindFramebuffer(C.READ_FRAMEBUFFER,null),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Ve,Ae,ee,me,Se,Be,Ne,A,Re,ve,ce.data):B.isCompressedArrayTexture?C.compressedTexSubImage3D(Ve,Ae,ee,me,Se,Be,Ne,A,Re,ce.data):C.texSubImage3D(Ve,Ae,ee,me,Se,Be,Ne,A,Re,ve,ce):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ae,ee,me,Be,Ne,Re,ve,ce.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ae,ee,me,ce.width,ce.height,Re,ce.data):C.texSubImage2D(C.TEXTURE_2D,Ae,ee,me,Be,Ne,Re,ve,ce);C.pixelStorei(C.UNPACK_ROW_LENGTH,tt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ct),C.pixelStorei(C.UNPACK_SKIP_PIXELS,yn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ht),C.pixelStorei(C.UNPACK_SKIP_IMAGES,fn),Ae===0&&B.generateMipmaps&&C.generateMipmap(Ve),ue.unbindTexture()},this.initRenderTarget=function(T){y.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){D=0,z=0,O=null,ue.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}function Sp(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new vt;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Id(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);const m=Id(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Id(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new St(a,t,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Ld(r,e){if(e===i0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===qc||e===Uf){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===qc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class My extends tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ay(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new qy(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=kr.extractUrlBase(e);a=kr.resolveURL(c,this.path)}else a=kr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new mp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===wp){try{a[dt.KHR_BINARY_GLTF]=new Gy(e)}catch(u){i&&i(u);return}s=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new t2(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:a[u]=new Ty;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Hy(s,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[u]=new Vy;break;case dt.KHR_MESH_QUANTIZATION:a[u]=new Wy;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Sy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wy{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],an);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Yc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gp(h),c.distance=u;break;case"spot":c=new ob(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Xn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Ty{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],an),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Et))}return Promise.all(i)}}class Ey{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Ay{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(o,o)}return Promise.all(s)}}class Ry{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Cy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Py{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],an)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Et)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Iy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Ly{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],an),Promise.all(s)}}class Dy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Fy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],an),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Et)),Promise.all(s)}}class Ny{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Uy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class ky{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Oy{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class By{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class zy{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class qy{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const b=new Ke,g=new I,p=new Bt,x=new I(1,1,1),v=new as(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&x.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,b.compose(g,p,x));for(const _ in l)if(_==="_COLOR_0"){const w=l[_];v.instanceColor=new xn(w.array,w.itemSize,w.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);Tt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const wp="glTF",_r=12,Dd={JSON:1313821514,BIN:5130562};class Gy{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_r),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-_r,s=new DataView(e,_r);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Dd.JSON){const c=new Uint8Array(e,_r+a,o);this.content=n.decode(c)}else if(l===Dd.BIN){const c=_r+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Hy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Qc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Qc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=zs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const b=f.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}u(f)},o,c,an,d)})})}}class Vy{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Wy{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class Tp extends na{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,b=m-c,g=-2*f+3*d,p=f-d,x=1-g,v=p-d+u;for(let _=0;_!==o;_++){const w=a[b+_+o],E=a[b+_+l]*h,R=a[m+_+o],L=a[m+_]*h;s[_]=x*w+v*E+g*R+p*L}return s}}const Xy=new Bt;class jy extends Tp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Xy.fromArray(s).normalize().toArray(s),s}}const An={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:Dt,9729:Ft,9984:Cf,9985:co,9986:Ar,9987:di},Nd={33071:Bn,33648:So,10497:Li},Ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ky={CUBICSPLINE:void 0,LINEAR:Vr,STEP:Hr},kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new gi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),r.DefaultMaterial}function Hi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $y(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Jy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Zy(r){let e;const t=r.extensions&&r.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ol(t.attributes):e=r.indices+":"+Ol(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ol(r.targets[n]);return e}function Ol(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function eh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const e2=new Ke;class t2{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new sb(this.options.manager):this.textureLoader=new hb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Hi(s,o,i),Xn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(kr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ul[i.type],o=zs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new St(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Ul[i.type],c=zs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let b,g;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(x);v||(b=new c(o,p*f,i.count*f/h),v=new Yf(b,f/h),t.cache.add(x,v)),g=new jr(v,l,d%f/h,m)}else o===null?b=new c(i.count*l):b=new c(o,d,i.count*l),g=new St(b,l,m);if(i.sparse!==void 0){const p=Ul.SCALAR,x=zs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,w=new x(a[1],v,i.sparse.count*p),E=new c(a[2],_,i.sparse.count*l);o!==null&&(g=new St(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,L=w.length;R<L;R++){const M=w[R];if(g.setX(M,E[R*l]),l>=2&&g.setY(M,E[R*l+1]),l>=3&&g.setZ(M,E[R*l+2]),l>=4&&g.setW(M,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Fd[d.magFilter]||Ft,h.minFilter=Fd[d.minFilter]||di,h.wrapS=Nd[d.wrapS]||Li,h.wrapT=Nd[d.wrapT]||Li,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Dt&&h.minFilter!==Ft,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){const g=new zt(b);g.needsUpdate=!0,d(g)}),t.load(kr.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Xn(u,a),u.userData.mimeType=a.mimeType||Qy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[dt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ep,zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Qf,zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gi}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){const u=i[dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],an),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Et)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Rn);const h=s.alphaMode||kl.OPAQUE;if(h===kl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===kl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new le(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Wt){const u=s.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],an)}return s.emissiveTexture!==void 0&&a!==Wt&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Et)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Xn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Hi(i,u,s),u})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ud(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Zy(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Ud(new vt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Yy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const b=h[f],g=a[f];let p;const x=c[f];if(g.mode===An.TRIANGLES||g.mode===An.TRIANGLE_STRIP||g.mode===An.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new ig(b,x):new mt(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===An.TRIANGLE_STRIP?p.geometry=Ld(p.geometry,Uf):g.mode===An.TRIANGLE_FAN&&(p.geometry=Ld(p.geometry,qc));else if(g.mode===An.LINES)p=new cg(b,x);else if(g.mode===An.LINE_STRIP)p=new Dh(b,x);else if(g.mode===An.LINE_LOOP)p=new hg(b,x);else if(g.mode===An.POINTS)p=new ug(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Jy(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Xn(p,s),g.extensions&&Hi(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Hi(i,u[0],s),u[0];const d=new Xt;s.extensions&&Hi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(L0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ia(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Ke;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ih(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],b=f.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let v=0,_=d.length;v<_;v++){const w=d[v],E=f[v],R=m[v],L=b[v],M=g[v];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const S=n._createAnimationTracks(w,E,R,L,M);if(S)for(let D=0;D<S.length;D++)p.push(S[D])}const x=new Kc(s,void 0,p);return Xn(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,e2)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Zf:c.length>1?h=new Xt:c.length===1?h=c[0]:h=new Tt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Xn(h,s),s.extensions&&Hi(n,h,s),s.matrix!==void 0){const u=new Ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Xt;n.name&&(s.name=i.createUniqueName(n.name)),Xn(s,n),n.extensions&&Hi(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof zn||d instanceof zt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Si[s.path]===Si.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Si[s.path]){case Si.weights:c=Ys;break;case Si.rotation:c=$s;break;case Si.translation:case Si.scale:c=Js;break;default:n.itemSize===1?c=Ys:c=Js;break}const h=i.interpolation!==void 0?Ky[i.interpolation]:Vr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+Si[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=eh(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof $s?jy:Tp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function n2(r,e,t){const n=e.attributes,i=new Lt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=eh(zs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const b=eh(zs[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Gn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Ud(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Qc[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return pt.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Xn(r,e),n2(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?$y(r,e.targets,t):r})}var i2=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var _=p.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var w=0,v=0;v<p.length;++v)x[w++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,w)}function l(p,x,v,_,w,E,R){var L=p.exports.sbrk,M=_+3&-4,S=L(M*w),D=L(E.length),z=new Uint8Array(p.exports.memory.buffer);z.set(E,D);var O=x(S,_,w,D,E.length);if(O==0&&R&&R(S,M,w),v.set(z.subarray(S,S+_*w)),L(S-L(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),w=u.length;w<p;++w)u[w]=f(_);for(var w=p;w<u.length;++w)u[w].object.postMessage({});u.length=p,URL.revokeObjectURL(_)}function b(p,x,v,_,w){for(var E=u[0],R=1;R<u.length;++R)u[R].pending<E.pending&&(E=u[R]);return new Promise(function(L,M){var S=new Uint8Array(v),D=++d;E.pending+=p,E.requests[D]={resolve:L,reject:M},E.object.postMessage({id:D,count:p,size:x,source:S,mode:_,filter:w},[S.buffer])})}function g(p){var x=p.data;if(!x.id)return self.close();self.ready.then(function(v){try{var _=new Uint8Array(x.count*x.size);l(v,v.exports[x.mode],_,x.count,x.size,x.source,v.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(w){self.postMessage({id:x.id,count:x.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,v,_,w){l(s,s.exports.meshopt_decodeVertexBuffer,p,x,v,_,s.exports[c[w]])},decodeIndexBuffer:function(p,x,v,_){l(s,s.exports.meshopt_decodeIndexBuffer,p,x,v,_)},decodeIndexSequence:function(p,x,v,_){l(s,s.exports.meshopt_decodeIndexSequence,p,x,v,_)},decodeGltfBuffer:function(p,x,v,_,w,E){l(s,s.exports[h[w]],p,x,v,_,s.exports[c[E]])},decodeGltfBufferAsync:function(p,x,v,_,w){return u.length>0?b(p,x,v,h[_],c[w]):a.then(function(){var E=new Uint8Array(p*x);return l(s,s.exports[h[_]],E,p,x,v,s.exports[c[w]]),E})}}})();class th extends Error{constructor(e,t){super(`3D model "${e}" could not be loaded: ${t}`),this.assetId=e,this.name="StudioAssetError"}assetId}function s2(){const r=new My;return r.setMeshoptDecoder(i2),r}const r2=/^data:([^;,]*)((?:;[^;,]*)*?)(;base64)?,(.*)$/s;function a2(r){const e=r2.exec(r);if(!e)throw new Error("malformed data: URL");const t=e[4]??"";if(e[3]){const n=atob(t),i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i.buffer}return new TextEncoder().encode(decodeURIComponent(t)).buffer}async function o2(r){if(r.startsWith("data:"))return a2(r);const e=await fetch(r);if(!e.ok)throw new Error(`HTTP ${e.status} for ${r}`);return e.arrayBuffer()}const l2=1179937895;function c2(r){const e=new DataView(r);if(r.byteLength<20||e.getUint32(16,!0)!==1313821514)throw new Error("GLB has no JSON chunk");const t=e.getUint32(12,!0),n=new TextDecoder().decode(new Uint8Array(r,20,t)),i=JSON.parse(n);return[...i.buffers??[],...i.images??[]].map(s=>s.uri).filter(s=>typeof s=="string"&&!s.startsWith("data:"))}function h2(r,e){if(e.byteLength<12||new DataView(e).getUint32(0,!0)!==l2)return Promise.reject(new Error("not a binary glTF (.glb) file"));let t;try{t=c2(e)}catch(n){return Promise.reject(n instanceof Error?n:new Error(String(n)))}return t.length>0?Promise.reject(new Error(`GLB references external resources (${t.join(", ")}); embed them`)):new Promise((n,i)=>r.parse(e,"",n,i))}function u2(r){let e=0;if(r.scene.traverse(t=>{t instanceof mt&&e++}),e===0)throw new Error("scene contains no meshes")}const zo="squad-surge:startup:",Ep=r=>`${zo}${r}:start`;function jh(r){performance.mark(Ep(r))}function Kh(r){const e=Ep(r);if(performance.getEntriesByName(e,"mark").length===0)throw new Error(`startup phase "${r}" ended without starting`);return performance.measure(`${zo}${r}`,e).duration}function d2(r,e){jh(r);try{return e()}finally{Kh(r)}}async function Io(r,e){jh(r);try{return await e()}finally{Kh(r)}}function f2(r){performance.mark(`${zo}${r}`)}const p2="/squad-surge-public/assets/trooper-DDclaCD9.glb",m2="/squad-surge-public/assets/walker-DFih57S4.glb",g2="/squad-surge-public/assets/runner-BERGb0Qt.glb",b2="/squad-surge-public/assets/skitterer-Bsl9l53q.glb",x2="/squad-surge-public/assets/brute-BNMRchYS.glb",_2="/squad-surge-public/assets/harbor-warden-Ce0XCEVI.glb",v2={id:"bosses/harbor-warden",name:"Tidebreaker",heightM:6.5,clips:{idle:"siege_idle",walk:"advance",slam:"slam_centre",slamLeft:"slam_left",slamRight:"slam_right",recoil:"hit_recoil",enrage:"enrage",enragedIdle:"enraged_idle",death:"death"},slamImpactSec:14/30,slamImpactPoint:{slam_left:[-3.2,0,3.25],slam_centre:[0,0,3.25],slam_right:[3.2,0,3.25]},clipSeconds:{advance:40/30,siege_idle:48/30,slam_left:24/30,slam_centre:24/30,slam_right:24/30,enrage:30/30,enraged_idle:32/30,hit_recoil:12/30,death:60/30},bones:{head:"head",chest:"chest",handLeft:"hand_L",handRight:"hand_R",anchor:"anchor"},materialOverrides:{coastal:{},port:{},dusk:{}},licenceStatus:"pending"},Ap={"characters/trooper":p2,"characters/walker":m2,"characters/runner":g2,"characters/skitterer":b2,"characters/brute":x2,"bosses/harbor-warden":_2};async function y2(r,e){try{const t=await Io(`glb-read:${e}`,()=>o2(Ap[e])),n=await Io(`glb-parse:${e}`,()=>h2(r,t));return u2(n),n}catch(t){throw t instanceof th?t:new th(e,t instanceof Error?t.message:String(t))}}let vr=null;function M2(r){if(vr)return vr;const e=s2(),t=Object.keys(Ap);let n=0;const s=(async()=>{const a=await Io("assets",()=>Promise.all(t.map(async c=>{const h=await y2(e,c);return n++,r?.({loaded:n,total:t.length}),[c,h]}))),o=new Map(a),l=c=>{const h=o.get(c);if(!h)throw new th(c,"missing after load");return h};return{characters:{trooper:l("characters/trooper"),walker:l("characters/walker"),runner:l("characters/runner"),skitterer:l("characters/skitterer"),brute:l("characters/brute")},boss:{gltf:l("bosses/harbor-warden"),manifest:v2}}})();return vr=s,s.catch(()=>{vr===s&&(vr=null)}),s}const yr=new I;function wn(r,e,t,n,i,s){const a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;yr.copy(e),yr[n]=0,yr.normalize();const c=.5*a/(a+o),h=1-yr.angleTo(r)/l;return Math.sign(yr[t])===1?h*c:o/(a+o)+c+c*(1-h)}class Yh extends Di{constructor(e=1,t=1,n=1,i=2,s=.1){const a=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new I,c=new I,h=new I(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,b=new I,g=.5/a;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*s,u[p+1]=h.y*Math.sign(l.y)+c.y*s,u[p+2]=h.z*Math.sign(l.z)+c.z*s,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/m)){case 0:b.set(1,0,0),f[x+0]=wn(b,c,"z","y",s,n),f[x+1]=1-wn(b,c,"y","z",s,t);break;case 1:b.set(-1,0,0),f[x+0]=1-wn(b,c,"z","y",s,n),f[x+1]=1-wn(b,c,"y","z",s,t);break;case 2:b.set(0,1,0),f[x+0]=1-wn(b,c,"x","z",s,e),f[x+1]=wn(b,c,"z","x",s,n);break;case 3:b.set(0,-1,0),f[x+0]=1-wn(b,c,"x","z",s,e),f[x+1]=1-wn(b,c,"z","x",s,n);break;case 4:b.set(0,0,1),f[x+0]=1-wn(b,c,"x","y",s,e),f[x+1]=1-wn(b,c,"y","x",s,t);break;case 5:b.set(0,0,-1),f[x+0]=wn(b,c,"x","y",s,e),f[x+1]=1-wn(b,c,"y","x",s,t);break}}static fromJSON(e){return new Yh(e.width,e.height,e.depth,e.segments,e.radius)}}const Za=new we,S2=new Ke,kd=new Bt,Od=new _n,Bd=new I,zd=new I;function qd(r){return Od.set(r.rx??0,r.ry??0,r.rz??0,"YXZ"),kd.setFromEuler(Od),Bd.set(r.x??0,r.y??0,r.z??0),zd.set(r.sx??1,r.sy??1,r.sz??1),S2.compose(Bd,kd,zd)}function Gd(r,e,t){let n=r.index?r.toNonIndexed():r;n!==r&&r.dispose();for(const a of Object.keys(n.attributes))a!=="position"&&a!=="normal"&&n.deleteAttribute(a);(t||!n.getAttribute("normal"))&&(n.deleteAttribute("normal"),n.computeVertexNormals());const i=n.getAttribute("position").count,s=new Float32Array(i*3);Za.setHex(e);for(let a=0;a<i;a++)s[a*3]=Za.r,s[a*3+1]=Za.g,s[a*3+2]=Za.b;return n.setAttribute("color",new St(s,3)),n=n.clearGroups()??n,n}function w2(r){for(const e of Object.keys(r.attributes)){const t=r.getAttribute(e),n=t.itemSize,i=t.array;for(let s=0;s+2<t.count;s+=3)for(let a=0;a<n;a++){const o=(s+1)*n+a,l=(s+2)*n+a,c=i[o];i[o]=i[l],i[l]=c}t.needsUpdate=!0}}class Vi{parts=[];add(e,t,n={},i=!1){const s=Gd(e,t,i);return s.applyMatrix4(qd(n)),this.parts.push(s),this}box(e,t,n,i,s={},a=.06){const o=Math.min(a,e/2-.001,t/2-.001,n/2-.001),l=o>.005?new Yh(e,t,n,2,o):new Di(e,t,n);return this.add(l,i,s)}sharpBox(e,t,n,i,s={}){return this.add(new Di(e,t,n),i,s)}sphere(e,t,n={},i=12){return this.add(new ta(e,i,Math.max(6,Math.round(i*.7))),t,n)}capsule(e,t,n,i={},s=8){return this.add(new js(e,t,3,s),n,i)}cyl(e,t,n,i,s={},a=12){return this.add(new Uo(e,t,n,a),i,s)}cone(e,t,n,i={},s=10){return this.add(new Fh(e,t,s),n,i)}torus(e,t,n,i={},s=16){return this.add(new Hh(e,t,8,s),n,i)}rock(e,t,n={},i=0){return this.add(new Bh(e,i),t,n,!0)}limb(e,t,n,i,s=8){const a=new I(...e),o=new I(...t),l=o.clone().sub(a),c=l.length(),h=new js(n,Math.max(.001,c),3,s),u=Gd(h,i,!1),d=new Bt().setFromUnitVectors(new I(0,1,0),l.normalize()),f=new Ke().compose(a.add(o).multiplyScalar(.5),d,new I(1,1,1));return u.applyMatrix4(f),this.parts.push(u),this}kit(e,t={}){const n=qd(t).clone(),i=n.determinant()<0;for(const s of e.parts){const a=s.clone();a.applyMatrix4(n),i&&w2(a),this.parts.push(a)}return this}dispose(){for(const e of this.parts)e.dispose();this.parts=[]}get empty(){return this.parts.length===0}build(){if(this.parts.length===0)return new vt;const e=Sp(this.parts,!1);for(const t of this.parts)t.dispose();if(this.parts=[],!e)throw new Error("Kit.build: geometry merge failed (attribute mismatch)");return e.computeBoundingSphere(),e}}function Bl(r={}){return new gi({vertexColors:!0,roughness:.78,metalness:0,...r})}function qo(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const T2=new Ke,Hd=new Bt,Vd=new _n,Wd=new I,Xd=new I,E2=new we,A2=`
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
`,R2=`
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
`;class Mr{constructor(e,t,n={}){this.capacity=t,this.alpha=new xn(new Float32Array(t),1),this.alpha.setUsage(Qn),e.setAttribute("aAlpha",this.alpha);const i=new Nt({vertexShader:A2,fragmentShader:R2,transparent:!0,depthWrite:!1,depthTest:n.depthTest??!0,fog:n.fog??!0,side:Rn,uniforms:is.merge([Pe.fog,{uRadial:{value:n.radial?1:0}}])});this.mesh=new as(e,i,t),this.mesh.instanceColor=new xn(new Float32Array(t*3),3),this.mesh.instanceColor.setUsage(Qn),this.mesh.instanceMatrix.setUsage(Qn),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n.renderOrder??2,this.mesh.count=0}capacity;mesh;alpha;n=0;begin(){this.n=0}push(e,t,n){this.n>=this.capacity||n<=.003||(this.mesh.setMatrixAt(this.n,e),this.mesh.setColorAt(this.n,typeof t=="number"?E2.setHex(t):t),this.alpha.setX(this.n,Math.min(1,n)),this.n++)}pushFlat(e,t,n,i,s,a,o,l){Vd.set(-Math.PI/2,a,0,"YXZ"),Hd.setFromEuler(Vd),Wd.set(e,t,n),Xd.set(i,s,1),this.push(T2.compose(Wd,Hd,Xd),o,l)}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.alpha.needsUpdate=!0}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.dispose()}}function C2(){const r=new Bs;return r.moveTo(-.5,.15),r.lineTo(0,-.35),r.lineTo(.5,.15),r.lineTo(.5,.42),r.lineTo(0,-.08),r.lineTo(-.5,.42),r.closePath(),new Gh(r)}const P2='800 64px "Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif';class I2{group=new Xt;items=[];cursor=0;constructor(e=18){for(let t=0;t<e;t++){const n=document.createElement("canvas");n.width=192,n.height=96;const i=new Po(n);i.colorSpace=Et;const s=new $f({map:i,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1}),a=new tg(s);a.visible=!1,a.renderOrder=20,this.group.add(a),this.items.push({sprite:a,tex:i,canvas:n,life:0,killScore:!1,x:0,y:0,z:0})}}spawn(e,t,n,i,s="#FFC93C",a=!1){const o=this.items[this.cursor];this.cursor=(this.cursor+1)%this.items.length;const l=o.canvas.getContext("2d");l&&(l.clearRect(0,0,o.canvas.width,o.canvas.height),l.font=P2,l.textAlign="center",l.textBaseline="middle",l.lineJoin="round",l.lineWidth=12,l.strokeStyle="#14233F",l.strokeText(e,96,50),l.fillStyle=s,l.fillText(e,96,50),o.tex.needsUpdate=!0,o.life=.8,o.killScore=a,o.x=t,o.y=n,o.z=i,o.sprite.visible=!0)}update(e,t){for(const n of this.items){if(n.life<=0)continue;if(n.life-=e,n.life<=0){n.sprite.visible=!1;continue}const i=1-n.life/.8,s=i<.15?.6+i/.15*.55:1.15-Math.min(.15,(i-.15)*.6);n.sprite.position.set(n.x,n.y+i*.8*1.6,n.z),n.sprite.scale.set(1.5*s,.75*s,1),n.sprite.visible=!(n.killScore&&t?.(n.sprite)),n.sprite.material.opacity=i>.7?1-(i-.7)/.3:1}}clear(){for(const e of this.items)e.life=0,e.sprite.visible=!1}dispose(){for(const e of this.items)e.tex.dispose(),e.sprite.material.dispose();this.group.removeFromParent()}}const lt=-1.25,It=5.2,Yt=64,L2=3,zl=40,nh=16,Ai=220,En=Math.PI/2,D2=new we,F2=new we;function Or(r,e,t){return D2.setHex(r).lerp(F2.setHex(e),t).getHex()}function N2(r,e,t,n,i,s=12157519){const a=(i()-.5)*.5,o=i()*Math.PI*2,l=2.6+i()*1.4,c=5;let h=e,u=n,d=t;for(let m=0;m<c;m++){const b=(m+1)/c,g=e+Math.cos(o)*a*l*b*b,p=n+Math.sin(o)*a*l*b*b,x=t+l*b;r.limb([h,d,u],[g,x,p],.16-m*.018,m%2?s:Or(s,0,.18),6),h=g,d=x,u=p}const f=4173402;for(let m=0;m<6;m++){const b=m/6*Math.PI*2+i();r.box(.5,.06,1.7,m%2?f:5817450,{x:h+Math.cos(b)*.75,y:d-.18,z:u+Math.sin(b)*.75,ry:-b+En,rx:.45},.03)}r.sphere(.13,8014378,{x:h+.12,y:d-.15,z:u},8).sphere(.13,8014378,{x:h-.08,y:d-.18,z:u+.1},8)}function ih(r,e,t,n,i,s,a){r.rock(i,s,{x:e,y:t,z:n,sy:.6+a()*.4,ry:a()*6,rx:a()*.4},0)}function wi(r,e,t,n){r.sphere(.45,n,{x:e,y:lt+.15,z:t,sy:.85},12).cyl(.47,.47,.16,16777215,{x:e,y:lt+.25,z:t},12).cyl(.05,.05,.8,3752526,{x:e,y:lt+.85,z:t},6).sphere(.12,16763196,{x:e,y:lt+1.28,z:t},8)}function Sr(r,e,t,n,i,s=1){const a=lt+.15;r.box(1.1*s,.5*s,3*s,n,{x:e,y:a+.2*s,z:t},.22*s).box(.9*s,.12*s,2.6*s,16050640,{x:e,y:a+.48*s,z:t},.05*s).cyl(.05*s,.05*s,3.4*s,16050640,{x:e,y:a+2.1*s,z:t-.2*s},6).cone(.9*s,2.8*s,i,{x:e+.05,y:a+2.1*s,z:t+.45*s,sx:.08,sz:.9},4).box(.15*s,.4*s,.4*s,16739166,{x:e,y:a+3.8*s,z:t-.2*s},.03)}function jd(r,e,t,n,i,s,a){r.cyl(.14,.18,.3,s,{x:t,y:.15,z:n},10).cyl(.07,.08,3.6,s,{x:t,y:1.95,z:n},8).limb([t,3.7,n],[t-i*.8,3.95,n],.06,s,6).box(.45,.16,.34,s,{x:t-i*.95,y:3.92,z:n},.06),e.sphere(.2,a,{x:t-i*.95,y:3.74,z:n,sy:.6},10)}function U2(r,e,t,n,i,s){for(let a=0;a<5;a++){const o=(1.3-a*.12)*i;r.cyl(o-.12*i,o,1.4*i,a%2?16777215:s,{x:e,y:t+(.7+a*1.4)*i,z:n},16)}r.cyl(.75*i,.75*i,.2*i,3752526,{x:e,y:t+7.1*i,z:n},16).cyl(.55*i,.55*i,.9*i,16774084,{x:e,y:t+7.6*i,z:n},12).cone(.75*i,.8*i,s,{x:e,y:t+8.45*i,z:n},12)}function Kd(r,e,t,n,i,s=0){const a=Or(i,0,.25);r.box(2.4,2.4,5.6,i,{x:e,y:t+1.2,z:n,ry:s},.08);for(let o=-2;o<=2;o++){const l=Math.sin(s)*o*1.05,c=Math.cos(s)*o*1.05;r.box(2.46,2.1,.14,a,{x:e+l,y:t+1.2,z:n+c,ry:s},.03)}}function Yd(r,e,t,n,i){const s=9*n;for(const a of[-2.2,2.2])for(const o of[-1.6,1.6])r.box(.5*n,s,.5*n,i,{x:e+a*n,y:s/2,z:t+o*n},.05);r.box(5.4*n,.7*n,4*n,i,{x:e,y:s,z:t},.08).box(1*n,.8*n,16*n,i,{x:e,y:s+1.6*n,z:t-3*n},.08).box(2.2*n,1.6*n,2.2*n,16050640,{x:e,y:s+1.2*n,z:t+1.4*n},.1).box(.12*n,4*n,.12*n,3752526,{x:e,y:s-.6*n,z:t-8*n},.02).box(1.2*n,.4*n,.8*n,16763196,{x:e,y:s-2.8*n,z:t-8*n},.05)}function k2(r,e,t,n,i,s,a){const o=4+Math.floor(a()*3);for(let l=0;l<o;l++){const c=l/(o-1)-.5,h=(1.6+Math.sin(l/(o-1)*Math.PI)*1.8+a()*.6)*i;r.sphere(h,s,{x:e+c*7*i,y:t+h*.35,z:n+(a()-.5)*2*i,sy:.75},12)}}function Qa(r,e,t,n,i,s,a){r.sphere(n,i.sand,{x:e,y:lt-n*.55,z:t,sy:.75*(1+s()*.2)},18),r.sphere(n*.72,i.grass,{x:e+(s()-.5)*n*.3,y:lt-n*.32,z:t,sy:.72},16);for(let o=0;o<a;o++){const l=s()*Math.PI*2,c=s()*n*.35;N2(r,e+Math.cos(l)*c,lt+n*.18,t+Math.sin(l)*c,s)}for(let o=0;o<5;o++){const l=s()*Math.PI*2;ih(r,e+Math.cos(l)*n*.9,lt+.05,t+Math.sin(l)*n*.9,.35+s()*.5,i.rock,s)}}function O2(r){const t=Math.round(256*nh/(It*2)),n=document.createElement("canvas");n.width=256,n.height=t;const i=n.getContext("2d");if(!i)throw new Error("2D canvas unavailable for road texture");const s=256/(It*2),a=u=>(u+It)*s;i.fillStyle=`#${r.road.toString(16).padStart(6,"0")}`,i.fillRect(0,0,256,t);const o=qo(77);if(r.biome==="dusk")for(let u=0;u<t;u+=s*.55){i.fillStyle=o()>.5?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.06)",i.fillRect(0,u,256,s*.5),i.fillStyle="rgba(60,30,10,0.35)",i.fillRect(0,u+s*.5,256,s*.05),i.fillStyle="rgba(60,30,10,0.45)";for(const d of[a(-4.9),a(-1.6),a(1.6),a(4.9)])i.fillRect(d-1.5,u+s*.22,3,3)}else{const u=s*4;for(let d=0;d<t;d+=u){for(let f=-1;f<=1;f++){const m=a(f*3.2-1.6),b=o();i.fillStyle=b>.5?`rgba(255,255,255,${(.04+b*.05).toFixed(3)})`:`rgba(0,0,0,${(.02+b*.05).toFixed(3)})`,i.fillRect(m,d,s*3.2,u)}i.fillStyle="rgba(60,40,20,0.13)",i.fillRect(0,d,256,3),i.fillStyle="rgba(255,255,255,0.18)",i.fillRect(0,d+3,256,2)}for(let d=0;d<1400;d++)i.fillStyle=o()>.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.07)",i.fillRect(o()*256,o()*t,2+o()*3,2+o()*3);if(r.biome==="port")for(let d=0;d<10;d++)i.fillStyle="rgba(20,25,35,0.18)",i.beginPath(),i.ellipse(o()*256,o()*t,s*(.4+o()*.8),s*(.3+o()*.6),o()*3,0,Math.PI*2),i.fill()}const l=i.createLinearGradient(0,0,256,0);l.addColorStop(0,"rgba(40,25,10,0.42)"),l.addColorStop(.07,"rgba(40,25,10,0)"),l.addColorStop(.93,"rgba(40,25,10,0)"),l.addColorStop(1,"rgba(40,25,10,0.42)"),i.fillStyle=l,i.fillRect(0,0,256,t);const c=`#${r.paint.toString(16).padStart(6,"0")}`;i.fillStyle=c;for(const u of[-4.6,4.6])i.fillRect(a(u)-s*.14,0,s*.28,t);for(const u of[-1.6,1.6])for(let d=s*1;d<t;d+=s*4)i.beginPath(),i.roundRect(a(u)-s*.1,d,s*.2,s*2.2,s*.1),i.fill();i.globalAlpha=.18;for(const u of[-3.2,0,3.2]){const d=s*8;i.beginPath(),i.moveTo(a(u)-s*.6,d+s*.6),i.lineTo(a(u),d),i.lineTo(a(u)+s*.6,d+s*.6),i.lineTo(a(u)+s*.6,d+s*.95),i.lineTo(a(u),d+s*.35),i.lineTo(a(u)-s*.6,d+s*.95),i.closePath(),i.fill()}i.globalAlpha=1;const h=new Po(n);return h.colorSpace=Et,h.wrapS=Bn,h.wrapT=Li,h.anisotropy=8,h.repeat.set(1,Ai/nh),h}const B2=`
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vec4 mv = viewMatrix * w;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,z2=`
  uniform vec3 uShallow;
  uniform vec3 uDeep;
  uniform vec3 uFoam;
  uniform vec3 uFog;
  uniform vec3 uSky;
  uniform vec3 uSkyTop;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform float uFogNear;
  uniform float uFogFar;
  uniform float uTime;
  uniform float uScroll;
  varying vec3 vWorld;
  varying float vDepth;
  // analytic ripple height gradient (sum of travelling waves)
  vec2 rippleGrad(vec2 p, float t) {
    vec2 g = vec2(0.0);
    vec4 dirs[4];
    dirs[0] = vec4(0.82, 0.57, 0.42, 0.9);
    dirs[1] = vec4(-0.6, 0.8, 0.31, 1.3);
    dirs[2] = vec4(0.25, -0.97, 0.77, 0.7);
    dirs[3] = vec4(-0.95, -0.3, 1.13, 1.7);
    for (int i = 0; i < 4; i++) {
      vec2 d = dirs[i].xy;
      float k = dirs[i].z;
      float ph = dot(d, p) * k + t * dirs[i].w;
      g += d * k * cos(ph) * (0.16 / (1.0 + float(i)));
    }
    return g;
  }
  void main() {
    vec2 p = vec2(vWorld.x, vWorld.z - uScroll);
    float d = abs(vWorld.x);
    float wob = sin(p.y * 0.11 + uTime * 0.2) * 3.0 + sin(p.x * 0.07) * 4.0;
    float depthT = smoothstep(7.0, 48.0, d + wob);
    vec3 col = mix(uShallow, uDeep, depthT);
    vec2 g = rippleGrad(p, uTime);
    vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
    vec3 V = normalize(cameraPosition - vWorld);
    // Schlick fresnel toward the sky gradient; grazing water mirrors the sky
    float fres = 0.03 + 0.97 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
    vec3 R = reflect(-V, N);
    vec3 sky = mix(uSky, uSkyTop, smoothstep(0.0, 0.6, R.y));
    col = mix(col, sky, clamp(fres * 0.85, 0.0, 0.85));
    // sun glints: tight specular lobe off the ripple normals
    float spec = pow(max(dot(R, normalize(uSunDir)), 0.0), 220.0);
    col += uSunColor * spec * 2.2;
    // shoreline froth hugging the deck
    float edge = 1.0 - smoothstep(5.3, 6.4 + sin(p.y * 0.9 + uTime * 2.0) * 0.3, d);
    col = mix(col, uFoam, edge * 0.7);
    float f = smoothstep(uFogNear, uFogFar, vDepth);
    gl_FragColor = vec4(mix(col, uFog, f), 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;class q2{constructor(e){this.theme=e;const t=qo(e.biome==="coastal"?11:e.biome==="port"?23:37),n=new Nt({side:Zt,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new we(e.skyTop)},uMid:{value:new we(e.skyMid)},uHorizon:{value:new we(e.skyHorizon)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHorizon; varying vec3 vDir;
        void main(){ float h = clamp(vDir.y, 0.0, 1.0);
          vec3 c = mix(uHorizon, uMid, smoothstep(0.0, 0.16, h));
          c = mix(c, uTop, smoothstep(0.14, 0.55, h));
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`}),i=new mt(new ta(420,32,16),n);i.renderOrder=-10,this.track(i.geometry,n),this.group.add(i),this.waterUniforms={uShallow:{value:new we(e.waterShallow)},uDeep:{value:new we(e.waterDeep)},uFoam:{value:new we(e.foam)},uFog:{value:new we(e.fog)},uFogNear:{value:e.fogNear},uFogFar:{value:e.fogFar},uSky:{value:new we(e.skyHorizon)},uSkyTop:{value:new we(e.skyMid)},uSunDir:{value:new I(...e.sunOffset).normalize()},uSunColor:{value:new we(e.sunColor)},uTime:{value:0},uScroll:{value:0}};const s=new Nt({uniforms:this.waterUniforms,vertexShader:B2,fragmentShader:z2}),a=new mt(new Ln(700,700,1,1),s);a.rotation.x=-En,a.position.set(0,lt,-120),this.track(a.geometry,s),this.group.add(a),this.roadTex=O2(e);const o=new gi({map:this.roadTex,roughness:e.biome==="port"?.72:.86,metalness:0}),l=new mt(new Ln(It*2,Ai),o);l.rotation.x=-En,l.position.set(0,0,zl-Ai/2),l.receiveShadow=!0,this.track(l.geometry,o,this.roadTex),this.group.add(l);const c=new Vi,h=zl-Ai/2;c.sharpBox(It*2+.4,.9,Ai,e.biome==="dusk"?8213044:Or(e.pillar,0,.12),{y:-.46,z:h});for(const O of[-1,1])c.box(.36,.26,Ai,e.kerb,{x:O*(It+.02),y:.1,z:h},.08);e.biome==="port"&&(c.sharpBox(60,1.3,Ai,11843772,{x:-It-30.2,y:-.66,z:h}),c.sharpBox(60,.04,Ai,13225683,{x:-It-30.2,y:-0,z:h}));const u=Bl({roughness:.82}),d=new mt(c.build(),u);d.receiveShadow=!0,this.track(d.geometry,u),this.group.add(d);const f=Bl({roughness:.62});this.glowMat=new Wt({vertexColors:!0,toneMapped:!1}),this.foamMat=new Wt({color:e.foam,transparent:!0,opacity:.78,depthWrite:!1}),this.track(f,this.glowMat,this.foamMat);const m=new Vi,b=new Vi,g=new Vi;this.buildTile(m,b,g,t);const p=m.build(),x=b.build(),v=g.build();this.track(p,x,v);for(let O=0;O<L2;O++){const $=new Xt;$.position.z=zl-O*Yt;const V=new mt(p,f);V.castShadow=!0,V.receiveShadow=!0;const W=new mt(x,this.glowMat),H=new mt(v,this.foamMat);H.renderOrder=1,$.add(V,W,H),this.stripMeshes.push(V,W,H),this.strip.add($)}this.group.add(this.strip);const _=new js(.12,1.4,2,6);_.rotateZ(En),_.scale(1,.3,1);const w=new Wt({color:e.foam,transparent:!0,opacity:.85,fog:!0});this.crests=new as(_,w,160),this.crests.frustumCulled=!1,this.track(_,w);for(let O=0;O<160;O++){const $=t()>.5?1:-1,V=e.biome==="port"&&$<0?16:6.5;this.crestData.push({x:$*(V+t()*22),z:30-t()*180,phase:t(),s:.6+t()*.9})}this.group.add(this.crests);const E=new Vi,R=new Vi;this.buildVista(E,R,t);const L=Bl({fog:!1,roughness:.9}),M=new Wt({vertexColors:!0,toneMapped:!1,fog:!1}),S=new Vi;e.biome==="dusk"&&(S.sphere(14,16769704,{x:40,y:6,z:-330},24),S.sphere(.9,7268256,{x:9,y:3.4,z:-150},10)),e.biome==="coastal"&&S.sphere(1.1,16774084,{x:14,y:14.9,z:-120},10);const D=new mt(E.build(),L);if(this.track(D.geometry,L,M),this.group.add(D),!S.empty){const O=new mt(S.build(),M);this.track(O.geometry),this.group.add(O)}const z=new gi({vertexColors:!0,roughness:1,fog:!1,emissive:new we(e.skyHorizon),emissiveIntensity:.35});this.clouds=new mt(R.build(),z),this.track(this.clouds.geometry,z),this.group.add(this.clouds)}theme;group=new Xt;disposables=[];strip=new Xt;waterUniforms;roadTex;crests;crestData=[];clouds;stripMeshes=[];glowMat;foamMat;track(...e){this.disposables.push(...e)}buildTile(e,t,n,i){const s=this.theme;for(let o=-1;o>-Yt;o-=2){for(const l of[-1,1]){if(s.biome==="port"&&l<0){Math.round(o)%8===-1&&e.cyl(.22,.26,.5,3752526,{x:-It-.9,y:.25,z:o},10).cyl(.3,.3,.1,3752526,{x:-It-.9,y:.52,z:o},10);continue}const c=s.biome==="port"?s.kerbStripe:s.biome==="dusk"?9067837:16050640;e.box(.16,.9,.16,c,{x:l*(It+.35),y:.45,z:o},.05)}for(const l of[-1,1])Math.round(o)%4===-1&&e.box(.38,.27,.9,s.kerbStripe,{x:l*(It+.02),y:.11,z:o},.06)}for(const o of[-1,1]){if(s.biome==="port"&&o<0)continue;const l=s.biome==="dusk"?9067837:s.biome==="port"?s.kerbStripe:16050640;e.box(.12,.12,Yt,l,{x:o*(It+.35),y:.9,z:-Yt/2},.05),e.box(.08,.08,Yt,l,{x:o*(It+.35),y:.5,z:-Yt/2},.03)}for(let o=-8;o>-Yt;o-=16)for(const l of[-1,1]){if(s.biome==="port"&&l<0){jd(e,t,-It-2.2,o,-1,3752526,s.lampGlow);continue}jd(e,t,l*(It+.75),o-(l>0?8:0),l,s.biome==="dusk"?5913126:3107839,s.lampGlow)}const a=s.biome==="dusk"?4:16;for(let o=-4;o>-Yt;o-=a)for(const l of[-1,1]){if(s.biome==="port"&&l<0)continue;const c=l*(It-.8);s.biome==="dusk"?(e.cyl(.32,.36,3,7029800,{x:l*(It+.1),y:-1.4,z:o},8),n.torus(.55,.12,16777215,{x:l*(It+.1),y:lt+.02,z:o,rx:En},14)):(e.box(1.4,2.2,1.8,s.pillar,{x:c,y:-1.5,z:o},.15),e.box(1.8,.4,2.2,Or(s.pillar,0,.15),{x:c,y:lt+.1,z:o},.12),n.torus(1.35,.16,16777215,{x:c,y:lt+.03,z:o,rx:En,sx:1,sy:1.25},18))}if(s.biome==="coastal"){Qa(e,-11.5,-14,3.6,s,i,3),n.torus(3.8,.35,16777215,{x:-11.5,y:lt+.03,z:-14,rx:En},32),Qa(e,14,-44,4.6,s,i,4),n.torus(4.7,.4,16777215,{x:14,y:lt+.03,z:-44,rx:En},32),Qa(e,-15,-54,3.4,s,i,2),n.torus(3.5,.3,16777215,{x:-15,y:lt+.03,z:-52,rx:En},28);for(let o=0;o<6;o++)e.cyl(.12,.12,1.6,9067837,{x:10.2-o*.7,y:lt+.3,z:-42.6},6).cyl(.12,.12,1.6,9067837,{x:10.2-o*.7,y:lt+.3,z:-44.2},6);e.box(4.4,.14,2,13211231,{x:8.5,y:lt+1.05,z:-43.4},.04),wi(e,-8.5,-6,s.accent),wi(e,9,-26,s.accent),wi(e,-9.5,-36,s.accent),wi(e,8.5,-58,s.accent),Sr(e,-11,-32,16777215,16739166,1.1),Sr(e,10.5,-18,16050640,16763196,1);for(let o=0;o<6;o++)ih(e,(i()>.5?1:-1)*(7+i()*4),lt,-i()*Yt,.4+i()*.5,s.rock,i)}else if(s.biome==="port"){const o=[15229007,3122586,15906354,3033725];for(let l=-6;l>-Yt;l-=6.2){const c=1+Math.floor(i()*3);for(let h=0;h<c;h++)Kd(e,-10.5,h*2.45,l,o[Math.floor(i()*4)]??15229007);i()>.4&&Kd(e,-13.2,0,l-.4,o[Math.floor(i()*4)]??3122586)}for(let l=0;l<6;l++){const c=-4-l*10.5;e.box(.9,.9,.9,13211231,{x:-7.2,y:.45,z:c,ry:i()},.06).box(.7,.7,.7,13211231,{x:-7.2,y:1.25,z:c+.1,ry:i()},.06)}for(let l=-2;l>-Yt;l-=3)e.box(.5,.6,1.6,l%6===-2?16763196:3752526,{x:-It-.45,y:.3,z:l},.08);Yd(e,-15,-34,1,15229007),e.box(2.6,1,6,15229007,{x:11,y:lt+.3,z:-20},.35).box(2.2,.2,5.4,16050640,{x:11,y:lt+.85,z:-20},.06).box(1.6,1.4,2,16050640,{x:11,y:lt+1.6,z:-19},.15).box(1.7,.2,2.1,3033725,{x:11,y:lt+2.35,z:-19},.05).cyl(.25,.3,1.2,15906354,{x:11,y:lt+2.8,z:-19.6},10).torus(.4,.12,16050640,{x:12.35,y:lt+.9,z:-21,ry:En},12),n.torus(3.2,.3,16777215,{x:11,y:lt+.03,z:-20,rx:En,sy:1.6},24),wi(e,8.5,-44,15906354),wi(e,9,-6,15229007);for(let l=0;l<5;l++)e.cyl(.3,.3,2.5,7029800,{x:7,y:lt+.4,z:-30-l*3},8);e.box(1,.2,13,11105355,{x:7,y:lt+1.6,z:-36},.05),Sr(e,13,-50,16050640,3122586,1.2)}else{for(let o=0;o<14;o++){const l=o%2?1:-1;ih(e,l*(8+i()*10),lt+.2,-i()*Yt,.8+i()*1.6,s.rock,i)}for(let o=-8;o>-Yt;o-=8)for(const l of[-1,1]){const c=l*(It+.35),h=.45;for(let u=0;u<=8;u++){const d=u/8,f=2.6-Math.sin(d*Math.PI)*h;t.sphere(.09,u%3===0?16752222:s.lampGlow,{x:c,y:f,z:o-d*8},6)}e.cyl(.07,.07,2.2,5913126,{x:c,y:1.5,z:o},6)}Qa(e,-11.5,-26,3.6,s,i,2),n.torus(3.7,.35,16777215,{x:-11.5,y:lt+.03,z:-26,rx:En},30),Sr(e,12,-40,5983114,16771522,1.2),wi(e,9,-16,16739166),wi(e,-9,-50,16739166)}}buildVista(e,t,n){const i=this.theme,s=(o,l=.45)=>Or(o,i.skyHorizon,l),a=i.biome==="dusk"?16766660:16777215;for(let o=0;o<6;o++)k2(t,-78+o*31+n()*10,11+n()*9,-255-n()*40,1.8+n()*1.2,a,n);if(i.biome==="coastal"){const o=[[-46,-190,20],[-22,-215,15],[34,-185,18],[62,-215,24],[4,-240,13]];for(const[l,c,h]of o)e.sphere(h,s(i.grass,.5),{x:l,y:lt-h*.22,z:c,sy:.55},20),e.sphere(h*1.12,s(i.sand,.5),{x:l,y:lt-h*.32,z:c,sy:.34},20);e.sphere(6,s(i.rock,.35),{x:14,y:lt-1.5,z:-120,sy:.7},14),U2(e,14,1.6,-120,1.75,s(i.accent2,.2)),Sr(e,-20,-150,s(16777215,.3),s(16763196,.3),1.5)}else if(i.biome==="port"){for(let o=0;o<5;o++)Yd(e,-48+o*24,-190-n()*20,1.6,s(o%2?15229007:15906354,.45));for(let o=0;o<10;o++){const l=10+n()*14,c=5+n()*12;e.box(l,c,10,s(o%3===0?13225683:11056316,.5),{x:-70+o*15,y:lt+c/2,z:-230},.4)}e.cyl(1.4,1.8,30,s(15229007,.5),{x:38,y:14,z:-235},12).cyl(1.5,1.5,3,s(16777215,.5),{x:38,y:24,z:-235},12)}else{const o=[[-48,-200,22],[-20,-225,16],[32,-195,20],[62,-220,26]];for(const[l,c,h]of o)e.rock(h,s(6967172,.35),{x:l,y:lt,z:c,sy:.7,ry:n()*6},1);e.box(5,1.6,9,s(16050640,.2),{x:9,y:lt+.6,z:-150},.6).box(3.4,1.8,3.4,s(16739166,.2),{x:9,y:lt+2.2,z:-149},.3).box(5.2,.4,9.2,s(16739166,.2),{x:9,y:lt+1.2,z:-150},.1)}}update(e,t){const n=(t%Yt+Yt)%Yt;this.strip.position.z=n,this.roadTex.offset.y=t/nh,this.waterUniforms.uTime.value=e,this.waterUniforms.uScroll.value=t,this.clouds.position.x=Math.sin(e*.01)*12;const i=new Ke,s=new Bt,a=new I,o=new I,l=180;this.crestData.forEach((c,h)=>{let u=c.z+t;u=30-((30-u)%l+l)%l;const d=(e*.35+c.phase)%1,f=Math.sin(d*Math.PI)*c.s;a.set(c.x+Math.sin(e*.6+c.phase*9)*.3,lt+.03,u),o.set(f,1,Math.max(.001,f)),i.compose(a,s,o),this.crests.setMatrixAt(h,i)}),this.crests.instanceMatrix.needsUpdate=!0}get drawMeshes(){return this.stripMeshes.length}dispose(){for(const e of this.disposables)e.dispose();this.crests.dispose(),this.group.removeFromParent()}}const At={width:3.2,height:3.4,depth:.5,bevel:.11,bevelDepth:.08,lip:.26,lipDepth:.18,seam:.05},ql={edge:0,walls:1},go={good:{glass:578814,foot:627966,side:2056950,edge:6284031,deep:679864,opacity:.7},bad:{glass:15876410,foot:13904430,side:12853290,edge:16747656,deep:9311506,opacity:.72},mixed:{glass:16756768,foot:15765504,side:14256640,edge:16766054,deep:9063168,opacity:.7}},G2=.38,Rp={width:At.width-2*At.bevel,bottom:At.bevel},Zr=At.depth/2,Cp=.25;class $d{pos=[];nor=[];groups=[];quad(e,t,n,i,s,a){this.tri(e,t,n,i,s),this.tri(e,t,n,s,a)}tri(e,t,n,i,s){const a=new I(i[0]-n[0],i[1]-n[1],i[2]-n[2]),o=new I(s[0]-n[0],s[1]-n[1],s[2]-n[2]),l=a.cross(o);if(l.lengthSq()<1e-12)return;l.normalize();const c=l.x*t[0]+l.y*t[1]+l.z*t[2]<0;c&&l.negate();const h=c?[n,s,i]:[n,i,s],u=this.groups[this.groups.length-1],d=this.pos.length/3;u?.slot===e&&u.start+u.count===d?u.count+=3:this.groups.push({start:d,count:3,slot:e});for(const f of h)this.pos.push(f[0],f[1],f[2]),this.nor.push(l.x,l.y,l.z)}build(e){const t=new vt,n=[],i=[],s=[...new Set(this.groups.map(a=>a.slot))].sort((a,o)=>a-o);for(const a of s){const o=n.length/3;for(const l of this.groups)if(l.slot===a)for(let c=l.start;c<l.start+l.count;c++)n.push(this.pos[c*3],this.pos[c*3+1],this.pos[c*3+2]),i.push(this.nor[c*3],this.nor[c*3+1],this.nor[c*3+2]);t.addGroup(o,n.length/3-o,a)}if(t.setAttribute("position",new it(n,3)),t.setAttribute("normal",new it(i,3)),e){const a=[];for(let o=0;o<n.length;o+=3)a.push(...e(n[o],n[o+1]));t.setAttribute("uv",new it(a,2))}return t.computeBoundingBox(),t.computeBoundingSphere(),t}}function eo(r=!1,e=!1){const{width:t,height:n,bevel:i,bevelDepth:s,lip:a,lipDepth:o}=At,l=-t/2,c=t/2,h=Zr,u=-.5/2,d=r?l:l+i,f=e?c:c-i,m=i,b=n-a,g=h-o,p=h-s,x=new $d;x.quad(0,[0,0,1],[d,m,h],[f,m,h],[f,b,h],[d,b,h]);const v=new $d,_=ql.edge;if(v.quad(_,[0,o,a],[d,b,h],[f,b,h],[c,n,g],[l,n,g]),v.quad(_,[0,1,0],[l,n,g],[c,n,g],[c,n,u],[l,n,u]),v.quad(_,[0,-s,i],[l,0,p],[c,0,p],[f,m,h],[d,m,h]),!r)v.quad(_,[-s,0,i],[l,0,p],[d,m,h],[d,b,h],[l,n,g]),v.quad(ql.walls,[-1,0,0],[l,0,u],[l,0,p],[l,n,g],[l,n,u]);else{const w=h+.003;v.quad(_,[0,0,1],[l,m,w],[l+At.seam/2,m,w],[l+At.seam/2,b,w],[l,b,w])}if(!e)v.quad(_,[s,0,i],[c,0,p],[f,m,h],[f,b,h],[c,n,g]),v.quad(ql.walls,[1,0,0],[c,0,u],[c,0,p],[c,n,g],[c,n,u]);else{const w=h+.003;v.quad(_,[0,0,1],[c-At.seam/2,m,w],[c,m,w],[c,b,w],[c-At.seam/2,b,w])}return{face:x.build((w,E)=>[w/t+.5,E/n]),shell:v.build()}}function H2(r,e){return(r?1:0)|(e?2:0)}function V2(){return[eo(!1,!1),eo(!0,!1),eo(!1,!0),eo(!0,!0)]}function $h(r,e,t){const n=new Uint8Array(r*e*4);for(let s=0;s<e;s++)for(let a=0;a<r;a++){const[o,l,c,h]=t((a+.5)/r,(s+.5)/e),u=(s*r+a)*4;n[u]=Math.round(o*255),n[u+1]=Math.round(l*255),n[u+2]=Math.round(c*255),n[u+3]=Math.round(h*255)}const i=new ea(n,r,e,hn);return i.magFilter=Ft,i.minFilter=Ft,i.needsUpdate=!0,i}const bo=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)};function W2(r){const e=new we(r.glass),t=new we(r.foot),n=new we,i={r:0,g:0,b:0},s=$h(1,128,(a,o)=>(n.copy(e).lerp(t,G2*(1-bo(.05,.65,o))),n.getRGB(i,Et),[i.r,i.g,i.b,1]));return s.colorSpace=Et,s}function X2(){const r=$h(1,128,(e,t)=>{const n=Math.max(0,1-Math.abs(t-.5)/.22),i=n*n*(3-2*n);return[i,i,i,1]});return r.wrapT=Li,r.repeat.set(1,.5),r}function j2(){return $h(64,32,(r,e)=>{const t=bo(0,.2,r)*bo(0,.2,1-r),n=(e-.5)/.5,i=Math.exp(-n*n*4.5)*bo(0,.3,1-Math.abs(n));return[1,1,1,t*i]})}const K2=.07,Pp=.55;function Y2(r,e){const t=go[r],n=new we(t.side),i=W2(t),s=new Wt({color:16777215,map:i,transparent:!0,opacity:1,depthWrite:!1,side:qn,blending:Jl,premultipliedAlpha:!0,toneMapped:!1,fog:!1}),a=new un({color:16777215,emissive:16777215,emissiveMap:i,emissiveIntensity:.3,transmission:.9,thickness:At.depth,attenuationColor:new we(t.glass),attenuationDistance:1,roughness:.08,metalness:0,clearcoat:1,clearcoatRoughness:.5,envMapIntensity:.12,ior:1.5,transparent:!0,opacity:Math.min(t.opacity,.6),depthWrite:!1,side:qn}),o=new Wt({color:t.glass,map:e.sweep,transparent:!0,opacity:K2,depthWrite:!1,blending:zr,fog:!1}),l=new we(t.edge),c=new un({color:l.clone().multiplyScalar(.45),emissive:l,emissiveIntensity:Pp,roughness:.12,metalness:0,clearcoat:1,clearcoatRoughness:.25,envMapIntensity:.35}),h=new un({color:n,emissive:n,emissiveIntensity:.35,roughness:.08,metalness:0,clearcoat:1,clearcoatRoughness:.15,envMapIntensity:1}),u=new Wt({color:new we(725272).lerp(new we(t.deep),.3),alphaMap:e.shadow,transparent:!0,opacity:.16,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),d=new un({color:16777215,roughness:.25,metalness:0,clearcoat:.6,clearcoatRoughness:.1,emissive:16777215,emissiveIntensity:.55}),f=new gi({color:t.deep,roughness:.35}),m=new gi({color:t.deep,roughness:1,metalness:0,envMapIntensity:.15});return{palette:t,absorb:s,surface:a,sweep:o,edge:c,wall:h,shadow:u,glyph:[d,f],glyphEdge:m,materials:[s,a,o,c,h,u,d,f,m],textures:[i]}}class $2{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,n="ltr"){const i=[],s=J2(e,t,this.data,n);for(let a=0,o=s.length;a<o;a++)i.push(...s[a].toShapes());return i}}function J2(r,e,t,n){const i=Array.from(r),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let l=0,c=0;(n=="rtl"||n=="tb")&&i.reverse();for(let h=0;h<i.length;h++){const u=i[h];if(u===`
`)l=0,c-=a;else{const d=Z2(u,s,l,c,t);n=="tb"?(l=0,c+=t.ascender*s):l+=d.offsetX,o.push(d.path)}}return o}function Z2(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const a=new Tb;let o,l,c,h,u,d,f,m;if(s.o){const b=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let g=0,p=b.length;g<p;)switch(b[g++]){case"m":o=b[g++]*e+t,l=b[g++]*e+n,a.moveTo(o,l);break;case"l":o=b[g++]*e+t,l=b[g++]*e+n,a.lineTo(o,l);break;case"q":c=b[g++]*e+t,h=b[g++]*e+n,u=b[g++]*e+t,d=b[g++]*e+n,a.quadraticCurveTo(u,d,c,h);break;case"b":c=b[g++]*e+t,h=b[g++]*e+n,u=b[g++]*e+t,d=b[g++]*e+n,f=b[g++]*e+t,m=b[g++]*e+n,a.bezierCurveTo(u,d,f,m,c,h);break}}return{offsetX:s.ha*e,path:a}}const Q2=JSON.parse(`{"0":{"ha":633,"x_min":32,"x_max":601,"o":"m 317 -17 q 110 64 188 -17 q 32 276 32 144 l 32 276 l 32 696 q 110 908 32 828 q 317 989 188 989 l 317 989 q 524 908 446 989 q 601 696 601 828 l 601 696 l 601 276 q 524 64 601 144 q 317 -17 446 -17 l 317 -17 z m 317 182 q 356 204 342 182 q 371 263 371 226 l 371 263 l 371 710 q 356 768 371 746 q 317 790 342 790 l 317 790 q 277 768 292 790 q 263 710 263 746 l 263 710 l 263 263 q 277 204 263 226 q 317 182 292 182 l 317 182 z "},"1":{"ha":408,"x_min":11,"x_max":371,"o":"m 131 968 q 151 972 142 972 l 151 972 l 354 972 q 366 967 361 972 q 371 956 371 963 l 371 956 l 371 17 q 366 5 371 10 q 354 0 361 0 l 354 0 l 157 0 q 145 5 150 0 q 140 17 140 10 l 140 17 l 140 749 q 133 756 140 756 l 133 756 l 31 750 q 14 765 14 750 l 14 765 l 11 913 q 25 931 11 926 l 25 931 l 131 968 z "},"2":{"ha":626,"x_min":26,"x_max":608,"o":"m 310 206 q 308 200 307 203 q 314 197 310 197 l 314 197 l 592 197 q 603 192 599 197 q 608 181 608 188 l 608 181 l 608 17 q 603 5 608 10 q 592 0 599 0 l 592 0 l 47 0 q 35 5 40 0 q 31 17 31 10 l 31 17 l 31 186 q 38 207 31 196 l 38 207 q 110 292 33 201 l 110 292 q 213 416 163 354 q 294 525 263 478 l 294 525 q 364 708 364 632 l 364 708 q 349 767 364 747 q 311 786 335 786 l 311 786 q 273 767 288 786 q 260 717 258 747 l 260 717 l 260 657 q 255 645 260 650 q 243 640 250 640 l 243 640 l 43 640 q 31 645 36 640 q 26 657 26 650 l 26 657 l 26 726 q 115 913 33 842 q 322 983 197 983 l 322 983 q 465 949 403 983 q 563 851 528 914 q 597 707 597 789 l 597 707 q 574 570 597 633 q 500 435 551 507 l 500 435 q 365 271 458 375 l 365 271 l 310 206 z "},"3":{"ha":619,"x_min":25,"x_max":586,"o":"m 582 397 q 586 313 586 356 l 586 313 q 583 222 586 281 l 583 222 q 504 53 578 117 q 311 -11 431 -11 l 311 -11 q 165 19 229 -11 q 65 103 101 49 q 28 226 29 157 l 28 226 q 25 300 25 274 l 25 300 q 42 317 25 317 l 42 317 l 239 317 q 256 300 256 317 l 256 300 q 258 250 256 281 l 258 250 q 275 204 261 221 q 311 188 289 188 l 311 188 q 348 203 333 188 q 365 247 363 219 l 365 247 q 367 338 367 278 l 367 338 q 364 426 367 399 l 364 426 q 348 469 363 453 q 311 485 333 485 l 311 485 q 264 463 289 485 l 264 463 q 253 457 258 457 l 253 457 q 240 463 249 457 l 240 463 l 139 568 q 133 581 133 576 l 133 581 q 139 592 133 586 l 139 592 l 303 768 q 300 776 308 776 l 300 776 l 61 776 q 49 781 54 776 q 44 793 44 786 l 44 793 l 44 956 q 49 967 44 963 q 61 972 54 972 l 61 972 l 568 972 q 580 967 575 972 q 585 956 585 963 l 585 956 l 585 788 q 576 768 585 776 l 576 768 l 426 594 q 429 586 421 586 l 429 586 q 535 528 492 582 q 582 397 578 474 l 582 397 z "},"4":{"ha":706,"x_min":15,"x_max":692,"o":"m 675 447 q 687 442 682 447 q 692 431 692 438 l 692 431 l 692 256 q 687 244 692 249 q 675 239 682 239 l 675 239 l 629 239 q 622 232 622 239 l 622 232 l 622 17 q 617 5 622 10 q 606 0 613 0 l 606 0 l 408 0 q 397 5 401 0 q 392 17 392 10 l 392 17 l 392 232 q 385 239 392 239 l 385 239 l 32 239 q 20 244 25 239 q 15 256 15 249 l 15 256 l 15 394 q 18 414 15 406 l 18 414 l 196 958 q 214 972 200 972 l 214 972 l 425 972 q 438 967 433 972 q 439 953 442 961 l 439 953 l 285 456 q 290 447 283 447 l 290 447 l 385 447 q 392 454 392 447 l 392 454 l 392 574 q 397 585 392 581 q 408 590 401 590 l 408 590 l 606 590 q 617 585 613 590 q 622 574 622 581 l 622 574 l 622 454 q 629 447 622 447 l 629 447 l 675 447 z "},"5":{"ha":625,"x_min":33,"x_max":599,"o":"m 596 374 q 599 306 599 353 l 599 306 q 597 226 599 253 l 597 226 q 519 52 596 115 q 315 -11 443 -11 l 315 -11 q 124 47 197 -11 q 38 219 51 104 l 38 219 l 35 258 q 51 275 35 275 l 51 275 l 249 275 q 265 263 264 275 l 265 263 l 265 254 l 268 239 q 315 186 275 186 l 315 186 q 351 201 338 186 q 367 243 364 215 l 367 243 q 368 306 368 263 l 368 306 q 365 360 368 344 l 365 360 q 349 400 363 385 q 315 415 336 415 l 315 415 q 284 406 297 415 q 267 382 271 397 l 267 382 q 249 367 263 367 l 249 367 l 50 367 q 38 372 43 367 q 33 383 33 376 l 33 383 l 33 956 q 38 967 33 963 q 50 972 43 972 l 50 972 l 576 972 q 588 967 583 972 q 593 956 593 963 l 593 956 l 593 792 q 588 780 593 785 q 576 775 583 775 l 576 775 l 271 775 q 264 768 264 775 l 264 768 l 264 572 q 267 567 264 568 q 272 569 269 567 l 272 569 q 389 614 321 614 l 389 614 q 539 550 483 614 q 596 374 594 486 l 596 374 z "},"6":{"ha":626,"x_min":32,"x_max":600,"o":"m 599 372 q 600 306 600 351 l 600 306 l 600 229 q 522 52 599 115 q 318 -11 446 -11 l 318 -11 q 124 47 199 -11 q 40 219 50 106 l 40 219 q 36 285 36 249 l 36 285 l 33 732 q 109 915 32 847 q 314 983 186 983 l 314 983 q 511 915 435 983 q 588 732 588 847 l 588 732 l 588 681 q 583 669 588 674 q 571 664 578 664 l 571 664 l 374 664 q 362 669 367 664 q 357 681 357 674 l 357 681 l 357 717 q 344 763 357 744 q 314 781 331 781 l 314 781 q 278 763 292 781 q 265 717 265 744 l 265 717 l 265 581 q 268 576 265 576 q 274 578 271 575 l 274 578 q 381 618 324 618 l 381 618 q 538 552 479 618 q 599 372 596 486 l 599 372 z m 365 246 q 367 322 367 281 l 367 322 l 364 396 q 349 436 361 421 q 317 451 336 451 l 317 451 q 283 436 296 451 q 267 394 269 421 l 267 394 q 265 322 265 360 l 265 322 q 267 244 265 279 l 267 244 q 282 201 269 217 q 317 186 294 186 l 317 186 q 350 202 338 186 q 365 246 363 218 l 365 246 z "},"7":{"ha":586,"x_min":13,"x_max":575,"o":"m 119 0 q 107 6 111 0 q 106 19 103 11 l 106 19 l 329 767 q 324 775 332 775 l 324 775 l 206 775 q 199 768 199 775 l 199 768 l 199 721 q 194 709 199 714 q 182 704 189 704 l 182 704 l 29 704 q 17 709 22 704 q 13 721 13 714 l 13 721 l 14 956 q 19 967 14 963 q 31 972 24 972 l 31 972 l 558 972 q 570 967 565 972 q 575 956 575 963 l 575 956 l 575 785 q 572 765 575 779 l 572 765 l 346 14 q 328 0 342 0 l 328 0 l 119 0 z "},"8":{"ha":619,"x_min":32,"x_max":589,"o":"m 493 510 q 494 500 488 504 l 494 500 q 564 418 542 471 l 564 418 q 589 285 589 354 l 589 285 q 565 158 589 218 l 565 158 q 467 35 535 81 q 310 -11 399 -11 l 310 -11 q 153 34 221 -11 q 53 158 85 79 l 53 158 q 32 285 32 217 l 32 285 q 54 415 32 361 l 54 415 q 125 499 75 469 l 125 499 q 125 508 133 503 l 125 508 q 56 593 78 539 l 56 593 q 32 717 32 646 l 32 717 q 56 842 32 790 l 56 842 q 153 951 86 911 q 310 992 221 992 l 310 992 q 463 953 396 992 q 563 842 531 915 l 563 842 q 589 717 589 785 l 589 717 q 564 594 589 649 l 564 594 q 493 510 542 542 l 493 510 z m 263 738 q 258 694 258 717 l 258 694 q 263 646 258 669 l 263 646 q 278 604 265 619 q 310 589 292 589 l 310 589 q 342 604 329 589 q 358 647 356 619 l 358 647 q 361 693 361 675 l 361 693 q 357 738 361 719 l 357 738 q 342 779 354 764 q 310 794 329 794 l 310 794 q 278 779 290 794 q 263 738 265 764 l 263 738 z m 360 250 q 361 299 361 265 l 361 299 q 357 354 361 329 l 357 354 q 342 398 356 382 q 310 414 329 414 l 310 414 q 277 397 290 414 q 261 353 264 381 l 261 353 q 258 303 258 322 l 258 303 q 261 250 258 283 l 261 250 q 276 203 263 221 q 310 186 290 186 l 310 186 q 344 203 331 186 q 360 250 357 221 l 360 250 z "},"9":{"ha":619,"x_min":19,"x_max":588,"o":"m 586 242 q 510 58 588 126 q 306 -11 433 -11 l 306 -11 q 108 58 185 -11 q 32 242 32 126 l 32 242 l 32 292 q 37 303 32 299 q 49 308 42 308 l 49 308 l 246 308 q 258 303 253 308 q 263 292 263 299 l 263 292 l 263 257 q 276 210 263 229 q 306 192 289 192 l 306 192 q 341 210 328 192 q 354 257 354 228 l 354 257 l 354 390 q 351 395 354 394 q 346 393 349 396 l 346 393 q 239 354 297 354 l 239 354 q 82 421 140 354 q 21 600 24 488 l 21 600 q 19 668 19 621 l 19 668 q 21 743 19 718 l 21 743 q 99 920 22 857 q 303 983 175 983 l 303 983 q 496 926 422 983 q 581 753 569 868 l 581 753 q 585 688 585 694 l 585 688 l 586 242 z m 304 522 q 338 537 325 522 q 353 578 350 551 l 353 578 l 354 650 q 353 728 354 693 l 353 728 q 338 772 350 756 q 304 788 325 788 l 304 788 q 269 771 283 788 q 254 726 256 754 l 254 726 l 253 650 l 256 578 q 271 537 258 551 q 304 522 283 522 l 304 522 z "},"+":{"ha":607,"x_min":29,"x_max":578,"o":"m 561 514 q 573 509 568 514 q 578 497 578 504 l 578 497 l 578 358 q 573 347 578 351 q 561 342 568 342 l 561 342 l 397 342 q 390 335 390 342 l 390 335 l 390 171 q 385 159 390 164 q 374 154 381 154 l 374 154 l 233 154 q 222 159 226 154 q 217 171 217 164 l 217 171 l 217 335 q 210 342 217 342 l 210 342 l 46 342 q 34 347 39 342 q 29 358 29 351 l 29 358 l 29 497 q 34 509 29 504 q 46 514 39 514 l 46 514 l 210 514 q 217 521 217 514 l 217 521 l 217 686 q 222 698 217 693 q 233 703 226 703 l 233 703 l 374 703 q 385 698 381 703 q 390 686 390 693 l 390 686 l 390 521 q 397 514 390 514 l 397 514 l 561 514 z "},"-":{"ha":468,"x_min":29,"x_max":440,"o":"m 46 304 q 34 309 39 304 q 29 321 29 314 l 29 321 l 29 485 q 34 497 29 492 q 46 501 39 501 l 46 501 l 424 501 q 435 497 431 501 q 440 485 440 492 l 440 485 l 440 321 q 435 309 440 314 q 424 304 431 304 l 424 304 l 46 304 z "},"−":{"ha":607,"x_min":29,"x_max":578,"o":"m 46 339 q 34 344 39 339 q 29 356 29 349 l 29 356 l 29 494 q 34 506 29 501 q 46 511 39 511 l 46 511 l 561 511 q 573 506 568 511 q 578 494 578 501 l 578 494 l 578 356 q 573 344 578 349 q 561 339 568 339 l 561 339 l 46 339 z "},"×":{"ha":568,"x_min":33,"x_max":533,"o":"m 528 575 q 533 564 533 571 l 533 564 q 528 553 533 558 l 528 553 l 411 436 q 408 431 408 433 q 411 425 408 428 l 411 425 l 528 308 q 533 297 533 304 l 533 297 q 528 286 533 292 l 528 286 l 428 186 q 417 181 422 181 l 417 181 q 406 186 414 181 l 406 186 l 289 303 q 283 306 286 306 q 278 303 281 306 l 278 303 l 161 186 q 150 181 156 181 l 150 181 q 139 186 147 181 l 139 186 l 39 286 q 33 297 33 294 l 33 297 q 39 308 33 303 l 39 308 l 156 425 q 156 436 161 431 l 156 436 l 39 553 q 33 564 33 561 l 33 564 q 39 575 33 569 l 39 575 l 139 675 q 150 681 144 681 l 150 681 q 161 675 157 681 l 161 675 l 278 558 q 289 558 283 553 l 289 558 l 406 675 q 417 681 411 681 l 417 681 q 428 675 424 681 l 428 675 l 528 575 z "},"x":{"ha":642,"x_min":17,"x_max":625,"o":"m 33 0 q 20 5 24 0 q 21 19 17 10 l 21 19 l 176 356 q 176 364 178 360 l 176 364 l 21 699 q 18 707 18 704 l 18 707 q 33 718 18 718 l 33 718 l 247 718 q 267 706 263 718 l 267 706 l 317 578 q 325 578 321 568 l 325 578 l 375 706 q 394 718 379 718 l 394 718 l 608 718 q 622 713 618 718 q 621 699 625 708 l 621 699 l 465 364 q 465 356 464 360 l 465 356 l 621 19 q 624 11 624 14 l 624 11 q 608 0 624 0 l 608 0 l 394 0 q 375 13 379 0 l 375 13 l 325 144 q 321 149 324 149 q 317 144 318 149 l 317 144 l 267 13 q 247 0 263 0 l 247 0 l 33 0 z "},"%":{"ha":1057,"x_min":49,"x_max":1008,"o":"m 272 529 q 160 560 211 529 q 78 642 108 590 q 49 757 49 694 l 49 757 q 78 872 49 819 q 160 953 108 924 q 272 983 211 983 l 272 983 q 383 953 332 983 q 465 870 435 922 q 494 757 494 818 l 494 757 q 465 642 494 694 q 384 560 435 590 q 272 529 333 529 l 272 529 z m 204 0 q 192 6 194 0 q 193 19 189 11 l 193 19 l 699 961 q 719 972 704 972 l 719 972 l 846 972 q 858 967 856 972 q 857 953 861 961 l 857 953 l 351 11 q 331 0 346 0 l 331 0 l 204 0 z m 272 646 q 345 678 315 646 q 375 757 375 711 l 375 757 q 344 835 375 803 q 272 867 314 867 l 272 867 q 199 835 229 867 q 168 757 168 803 l 168 757 q 199 678 168 711 q 272 646 229 646 l 272 646 z m 786 -11 q 674 19 725 -11 q 592 102 622 50 q 563 217 563 154 l 563 217 q 592 330 563 278 q 674 413 622 382 q 786 443 725 443 l 786 443 q 897 413 846 443 q 978 330 949 382 q 1008 217 1008 278 l 1008 217 q 978 102 1008 154 q 898 19 949 50 q 786 -11 847 -11 l 786 -11 z m 786 106 q 859 138 829 106 q 889 217 889 169 l 889 217 q 859 294 889 261 q 786 326 829 326 l 786 326 q 713 294 743 326 q 682 217 682 261 l 682 217 q 712 138 682 169 q 786 106 742 106 l 786 106 z "},".":{"ha":326,"x_min":43,"x_max":283,"o":"m 164 -8 q 77 26 111 -8 q 43 113 43 60 l 43 113 q 77 200 43 167 q 164 233 111 233 l 164 233 q 250 200 217 233 q 283 113 283 167 l 283 113 q 249 26 283 60 q 164 -8 215 -8 l 164 -8 z "},",":{"ha":310,"x_min":36,"x_max":271,"o":"m 54 -146 q 38 -129 36 -146 l 38 -129 l 64 204 q 70 216 65 211 q 82 221 75 221 l 82 221 l 251 221 q 267 203 271 221 l 267 203 l 190 -131 q 172 -146 186 -146 l 172 -146 l 54 -146 z "},":":{"ha":414,"x_min":89,"x_max":329,"o":"m 210 451 q 123 485 157 451 q 89 572 89 519 l 89 572 q 123 660 89 626 q 210 693 157 693 l 210 693 q 296 660 263 693 q 329 572 329 626 l 329 572 q 295 485 329 519 q 210 451 261 451 l 210 451 z m 210 1 q 123 35 157 1 q 89 122 89 69 l 89 122 q 123 210 89 176 q 210 243 157 243 l 210 243 q 296 210 263 243 q 329 122 329 176 l 329 122 q 295 35 329 69 q 210 1 261 1 l 210 1 z "},"/":{"ha":617,"x_min":19,"x_max":576,"o":"m 36 0 q 24 5 28 0 q 22 19 19 10 l 22 19 l 346 958 q 364 972 350 972 l 364 972 l 560 972 q 572 967 568 972 q 574 953 576 963 l 574 953 l 250 14 q 232 0 246 0 l 232 0 l 36 0 z "},"·":{"ha":326,"x_min":43,"x_max":283,"o":"m 164 289 q 77 323 111 289 q 43 410 43 357 l 43 410 q 77 497 43 464 q 164 531 111 531 l 164 531 q 250 497 217 531 q 283 410 283 464 l 283 410 q 249 323 283 357 q 164 289 215 289 l 164 289 z "},"!":{"ha":401,"x_min":81,"x_max":321,"o":"m 125 339 q 113 344 118 339 q 108 356 108 349 l 108 356 l 83 956 q 100 972 83 972 l 100 972 l 297 972 q 314 956 314 972 l 314 956 l 290 356 q 285 344 290 349 q 274 339 281 339 l 274 339 l 125 339 z m 201 1 q 115 35 149 1 q 81 122 81 69 l 81 122 q 115 208 81 175 q 201 242 149 242 l 201 242 q 288 208 254 242 q 321 122 321 175 l 321 122 q 287 35 321 69 q 201 1 253 1 l 201 1 z "},"?":{"ha":642,"x_min":18,"x_max":622,"o":"m 204 318 q 192 323 197 318 q 188 335 188 328 l 188 335 l 188 368 q 204 459 188 421 q 244 522 221 497 q 307 578 268 546 l 307 578 q 369 637 350 613 q 389 696 389 661 l 389 696 q 372 755 389 733 q 324 776 354 776 l 324 776 q 269 752 289 776 q 249 689 249 728 l 249 689 l 249 674 q 232 658 249 658 l 232 658 l 35 667 q 23 672 28 667 q 18 685 18 678 l 18 685 l 18 689 q 57 844 18 776 q 167 949 96 911 q 329 986 238 986 l 329 986 q 542 910 463 986 q 622 707 622 833 l 622 707 q 604 601 622 646 q 561 530 586 557 q 496 469 536 503 l 496 469 q 436 414 456 439 q 417 354 417 389 l 417 354 l 417 335 q 412 323 417 328 q 400 318 407 318 l 400 318 l 204 318 z m 301 -6 q 216 28 250 -6 q 182 115 182 63 l 182 115 q 215 203 182 169 q 301 236 249 236 l 301 236 q 388 203 354 236 q 422 115 422 169 l 422 115 q 388 29 422 64 q 301 -6 354 -6 l 301 -6 z "},"&":{"ha":867,"x_min":31,"x_max":829,"o":"m 824 21 q 829 10 829 13 l 829 10 q 814 0 829 0 l 814 0 l 600 0 q 579 10 588 0 l 579 10 l 553 42 q 543 44 550 47 l 543 44 q 315 -14 439 -14 l 315 -14 q 107 51 183 -14 q 31 239 31 115 l 31 239 q 68 389 31 328 q 171 499 106 450 l 171 499 q 172 508 176 503 l 172 508 q 94 628 113 588 q 76 721 76 669 l 76 721 q 152 911 76 839 q 351 983 228 983 l 351 983 q 501 949 435 983 q 604 854 567 915 q 642 714 642 793 l 642 714 q 599 566 642 626 q 485 456 557 506 l 485 456 q 483 446 479 451 l 483 446 q 503 421 489 438 l 503 421 l 561 347 q 571 349 567 342 l 571 349 q 635 451 611 399 l 635 451 q 657 458 642 467 l 657 458 l 803 375 q 810 353 817 365 l 810 353 q 703 183 757 249 l 703 183 q 701 174 699 178 l 701 174 q 824 21 746 122 l 824 21 z m 358 775 q 321 758 335 775 q 307 713 307 740 l 307 713 q 313 675 307 692 q 346 621 319 658 l 346 621 q 356 619 350 617 l 356 619 q 411 713 411 664 l 411 713 q 396 758 411 740 q 358 775 381 775 l 358 775 z m 351 183 q 411 203 378 188 l 411 203 q 413 213 419 208 l 413 213 l 388 243 l 313 333 q 303 335 308 338 l 303 335 q 263 260 263 299 l 263 260 q 285 203 263 228 q 351 183 307 179 l 351 183 z "},"'":{"ha":261,"x_min":17,"x_max":247,"o":"m 56 647 q 44 652 49 647 q 38 664 39 657 l 38 664 l 17 956 l 17 958 q 32 972 17 972 l 32 972 l 228 972 q 244 956 247 972 l 244 956 l 221 663 q 203 647 218 647 l 203 647 l 56 647 z "}," ":{"ha":278,"x_min":null,"x_max":null,"o":""},"A":{"ha":706,"x_min":17,"x_max":686,"o":"m 469 0 q 451 15 453 0 l 451 15 l 433 136 q 425 143 433 143 l 425 143 l 275 143 q 267 136 267 143 l 267 136 l 250 15 q 232 0 249 0 l 232 0 l 35 0 q 21 18 17 0 l 21 18 l 222 957 q 240 972 225 972 l 240 972 l 467 972 q 485 957 482 972 l 485 957 l 685 18 l 686 13 q 671 0 686 0 l 671 0 l 469 0 z m 297 328 q 303 321 297 321 l 303 321 l 396 321 q 401 328 401 321 l 401 328 l 351 644 q 347 650 350 650 q 343 644 344 650 l 343 644 l 297 328 z "},"B":{"ha":663,"x_min":49,"x_max":636,"o":"m 636 271 q 554 70 636 140 q 346 0 472 0 l 346 0 l 65 0 q 53 5 58 0 q 49 17 49 10 l 49 17 l 49 956 q 53 967 49 963 q 65 972 58 972 l 65 972 l 310 972 q 537 905 454 972 q 619 703 619 838 l 619 703 q 532 507 619 569 l 532 507 q 531 499 525 503 l 531 499 q 636 271 636 421 l 636 271 z m 286 775 q 279 768 279 775 l 279 768 l 279 590 q 286 583 279 583 l 286 583 l 313 583 q 372 608 351 583 q 393 678 393 632 l 393 678 q 372 750 393 725 q 313 775 351 775 l 313 775 l 286 775 z m 328 199 q 385 226 364 199 q 406 306 406 254 l 406 306 q 385 388 406 357 q 329 418 364 418 l 329 418 l 286 418 q 279 411 279 418 l 279 411 l 279 206 q 286 199 279 199 l 286 199 l 328 199 z "},"C":{"ha":653,"x_min":38,"x_max":619,"o":"m 328 -11 q 117 67 196 -11 q 38 274 38 144 l 38 274 l 38 700 q 117 907 38 831 q 328 983 196 983 l 328 983 q 540 907 460 983 q 619 700 619 831 l 619 700 l 619 688 q 615 676 619 681 q 603 671 610 671 l 603 671 l 406 663 q 389 679 389 663 l 389 679 l 389 717 q 372 767 389 749 q 328 786 356 786 l 328 786 q 285 767 301 786 q 268 717 268 749 l 268 717 l 268 254 q 285 205 268 224 q 328 186 301 186 l 328 186 q 372 205 356 186 q 389 254 389 224 l 389 254 l 389 294 q 394 306 389 301 q 406 311 399 311 l 406 311 l 603 303 q 615 298 610 303 q 619 286 619 293 l 619 286 l 619 274 q 540 67 619 144 q 328 -11 460 -11 l 328 -11 z "},"D":{"ha":667,"x_min":49,"x_max":625,"o":"m 65 0 q 53 5 58 0 q 49 17 49 10 l 49 17 l 49 956 q 53 967 49 963 q 65 972 58 972 l 65 972 l 331 972 q 544 897 464 972 q 625 699 625 822 l 625 699 l 625 274 q 544 75 625 150 q 331 0 464 0 l 331 0 l 65 0 z m 279 204 q 286 197 279 197 l 286 197 l 325 199 q 374 224 354 200 q 394 289 393 249 l 394 289 l 394 683 q 375 750 394 725 q 324 775 356 775 l 324 775 l 286 775 q 279 768 279 775 l 279 768 l 279 204 z "},"E":{"ha":613,"x_min":49,"x_max":582,"o":"m 582 792 q 577 780 582 785 q 565 775 572 775 l 565 775 l 286 775 q 279 768 279 775 l 279 768 l 279 593 q 286 586 279 586 l 286 586 l 439 586 q 451 581 446 586 q 456 569 456 576 l 456 569 l 456 404 q 451 392 456 397 q 439 388 446 388 l 439 388 l 286 388 q 279 381 279 388 l 279 381 l 279 204 q 286 197 279 197 l 286 197 l 565 197 q 577 192 572 197 q 582 181 582 188 l 582 181 l 582 17 q 577 5 582 10 q 565 0 572 0 l 565 0 l 65 0 q 53 5 58 0 q 49 17 49 10 l 49 17 l 49 956 q 53 967 49 963 q 65 972 58 972 l 65 972 l 565 972 q 577 967 572 972 q 582 956 582 963 l 582 956 l 582 792 z "},"F":{"ha":593,"x_min":49,"x_max":582,"o":"m 582 792 q 577 780 582 785 q 565 775 572 775 l 565 775 l 286 775 q 279 768 279 775 l 279 768 l 279 593 q 286 586 279 586 l 286 586 l 439 586 q 451 581 446 586 q 456 569 456 576 l 456 569 l 456 404 q 451 392 456 397 q 439 388 446 388 l 439 388 l 286 388 q 279 381 279 388 l 279 381 l 279 17 q 274 5 279 10 q 263 0 269 0 l 263 0 l 65 0 q 53 5 58 0 q 49 17 49 10 l 49 17 l 49 956 q 53 967 49 963 q 65 972 58 972 l 65 972 l 565 972 q 577 967 572 972 q 582 956 582 963 l 582 956 l 582 792 z "},"G":{"ha":657,"x_min":38,"x_max":619,"o":"m 328 -11 q 117 63 196 -11 q 38 263 38 138 l 38 263 l 38 711 q 117 910 38 836 q 328 983 196 983 l 328 983 q 540 908 460 983 q 619 708 619 833 l 619 708 l 619 657 q 615 645 619 650 q 603 640 610 640 l 603 640 l 406 640 q 394 645 399 640 q 389 657 389 650 l 389 657 l 389 711 q 372 765 389 744 q 328 786 356 786 l 328 786 q 285 765 301 786 q 268 711 268 744 l 268 711 l 268 261 q 285 207 268 228 q 328 186 301 186 l 328 186 q 372 207 356 186 q 389 261 389 228 l 389 261 l 389 350 q 382 357 389 357 l 382 357 l 346 357 q 334 362 339 357 q 329 374 329 367 l 329 374 l 329 521 q 334 533 329 528 q 346 538 339 538 l 346 538 l 603 538 q 615 533 610 538 q 619 521 619 528 l 619 521 l 619 263 q 540 63 619 138 q 328 -11 460 -11 l 328 -11 z "},"H":{"ha":671,"x_min":49,"x_max":624,"o":"m 393 956 q 398 967 393 963 q 410 972 403 972 l 410 972 l 607 972 q 619 967 614 972 q 624 956 624 963 l 624 956 l 624 17 q 619 5 624 10 q 607 0 614 0 l 607 0 l 410 0 q 398 5 403 0 q 393 17 393 10 l 393 17 l 393 381 q 386 388 393 388 l 386 388 l 286 388 q 279 381 279 388 l 279 381 l 279 17 q 274 5 279 10 q 263 0 269 0 l 263 0 l 65 0 q 53 5 58 0 q 49 17 49 10 l 49 17 l 49 956 q 53 967 49 963 q 65 972 58 972 l 65 972 l 263 972 q 274 967 269 972 q 279 956 279 963 l 279 956 l 279 593 q 286 586 279 586 l 286 586 l 386 586 q 393 593 393 586 l 393 593 l 393 956 z "},"I":{"ha":326,"x_min":49,"x_max":279,"o":"m 65 0 q 53 5 58 0 q 49 17 49 10 l 49 17 l 49 956 q 53 967 49 963 q 65 972 58 972 l 65 972 l 263 972 q 274 967 269 972 q 279 956 279 963 l 279 956 l 279 17 q 274 5 279 10 q 263 0 269 0 l 263 0 l 65 0 z "},"J":{"ha":642,"x_min":15,"x_max":593,"o":"m 303 -11 q 153 23 218 -11 q 51 118 88 57 q 15 258 15 179 l 15 258 l 15 349 q 20 360 15 356 q 32 365 25 365 l 32 365 l 229 365 q 241 360 236 365 q 246 349 246 356 l 246 349 l 246 256 q 262 206 246 225 q 303 186 278 186 l 303 186 q 346 206 329 186 q 363 256 363 225 l 363 256 l 363 956 q 367 967 363 963 q 379 972 372 972 l 379 972 l 576 972 q 588 967 583 972 q 593 956 593 963 l 593 956 l 593 258 q 557 118 593 179 q 455 23 521 57 q 303 -11 389 -11 l 303 -11 z "},"K":{"ha":701,"x_min":49,"x_max":683,"o":"m 65 0 q 53 5 58 0 q 49 17 49 10 l 49 17 l 49 956 q 53 967 49 963 q 65 972 58 972 l 65 972 l 263 972 q 274 967 269 972 q 279 956 279 963 l 279 956 l 279 642 q 282 636 279 636 q 288 640 285 636 l 288 640 l 433 960 q 453 972 439 972 l 453 972 l 661 972 q 674 967 671 972 q 674 953 678 963 l 674 953 l 472 544 q 471 536 471 539 l 471 536 l 682 19 q 683 11 683 17 l 683 11 q 669 0 683 0 l 669 0 l 460 0 q 440 13 444 0 l 440 13 l 315 338 q 311 342 314 342 q 306 338 308 342 l 306 338 l 281 288 q 279 279 279 285 l 279 279 l 279 17 q 274 5 279 10 q 263 0 269 0 l 263 0 l 65 0 z "},"L":{"ha":607,"x_min":49,"x_max":586,"o":"m 65 0 q 53 5 58 0 q 49 17 49 10 l 49 17 l 49 956 q 53 967 49 963 q 65 972 58 972 l 65 972 l 263 972 q 274 967 269 972 q 279 956 279 963 l 279 956 l 279 204 q 286 197 279 197 l 286 197 l 569 197 q 581 192 576 197 q 586 181 586 188 l 586 181 l 586 17 q 581 5 586 10 q 569 0 576 0 l 569 0 l 65 0 z "},"M":{"ha":775,"x_min":42,"x_max":732,"o":"m 501 961 q 522 972 507 972 l 522 972 l 715 972 q 727 967 722 972 q 732 956 732 963 l 732 956 l 732 17 q 727 5 732 10 q 715 0 722 0 l 715 0 l 518 0 q 506 5 511 0 q 501 17 501 10 l 501 17 l 501 613 q 499 619 501 618 q 493 615 496 619 l 493 615 l 396 446 q 388 435 390 435 l 388 435 q 378 446 385 435 l 378 446 l 281 615 q 275 619 278 619 q 272 614 272 619 l 272 614 l 272 17 q 267 5 272 10 q 256 0 263 0 l 256 0 l 58 0 q 47 5 51 0 q 42 17 42 10 l 42 17 l 42 956 q 47 967 42 963 q 58 972 51 972 l 58 972 l 253 972 q 274 961 267 972 l 274 961 l 385 760 q 393 760 389 754 l 393 760 l 501 961 z "},"N":{"ha":725,"x_min":49,"x_max":676,"o":"m 449 956 q 453 967 449 963 q 465 972 458 972 l 465 972 l 660 972 q 672 967 667 972 q 676 956 676 963 l 676 956 l 676 17 q 672 5 676 10 q 660 0 667 0 l 660 0 l 439 0 q 419 14 424 0 l 419 14 l 282 497 q 277 502 281 501 q 274 497 274 503 l 274 497 l 276 17 q 272 5 276 10 q 260 0 267 0 l 260 0 l 65 0 q 53 5 58 0 q 49 17 49 10 l 49 17 l 49 956 q 53 967 49 963 q 65 972 58 972 l 65 972 l 283 972 q 303 958 299 972 l 303 958 l 442 472 q 447 468 443 468 q 450 474 450 468 l 450 474 l 449 956 z "},"O":{"ha":665,"x_min":38,"x_max":628,"o":"m 332 -11 q 117 67 197 -11 q 38 276 38 144 l 38 276 l 38 696 q 117 905 38 826 q 332 983 197 983 l 332 983 q 547 905 465 983 q 628 696 628 826 l 628 696 l 628 276 q 547 67 628 144 q 332 -11 465 -11 l 332 -11 z m 332 186 q 380 208 363 186 q 397 267 397 229 l 397 267 l 397 706 q 380 765 397 743 q 332 786 363 786 l 332 786 q 285 765 301 786 q 268 706 268 743 l 268 706 l 268 267 q 285 208 268 229 q 332 186 301 186 l 332 186 z "},"P":{"ha":658,"x_min":46,"x_max":636,"o":"m 363 972 q 505 934 443 972 q 601 826 567 896 q 636 668 636 757 l 636 668 q 603 515 636 581 q 511 413 571 449 q 374 376 451 376 l 374 376 l 283 376 q 276 369 276 376 l 276 369 l 276 17 q 272 5 276 10 q 260 0 267 0 l 260 0 l 63 0 q 51 5 56 0 q 46 17 46 10 l 46 17 l 46 956 q 51 967 46 963 q 63 972 56 972 l 63 972 l 363 972 z m 322 554 q 383 583 360 554 q 406 663 406 611 l 406 663 q 383 746 406 717 q 322 775 360 775 l 322 775 l 283 775 q 276 768 276 775 l 276 768 l 276 561 q 283 554 276 554 l 283 554 l 322 554 z "},"Q":{"ha":649,"x_min":38,"x_max":613,"o":"m 324 983 q 475 946 410 983 q 576 841 540 908 q 613 685 613 774 l 613 685 l 613 288 q 568 117 613 189 q 444 13 524 44 l 444 13 q 439 4 439 8 l 439 4 l 439 -111 q 434 -123 439 -118 q 422 -128 429 -128 l 422 -128 l 225 -128 q 213 -123 218 -128 q 208 -111 208 -118 l 208 -111 l 208 4 q 203 13 208 8 l 203 13 q 81 117 125 44 q 38 288 38 189 l 38 288 l 38 685 q 73 841 38 774 q 174 946 108 908 q 324 983 239 983 l 324 983 z m 268 710 l 268 263 q 283 208 268 229 q 324 186 299 186 l 324 186 q 366 208 350 186 q 382 263 382 229 l 382 263 l 382 710 q 366 765 382 743 q 324 786 350 786 l 324 786 q 283 765 299 786 q 268 710 268 743 l 268 710 z "},"R":{"ha":668,"x_min":49,"x_max":646,"o":"m 428 0 q 408 14 413 0 l 408 14 l 314 382 q 307 388 313 388 l 307 388 l 286 388 q 279 381 279 388 l 279 381 l 279 17 q 274 5 279 10 q 263 0 269 0 l 263 0 l 65 0 q 53 5 58 0 q 49 17 49 10 l 49 17 l 49 956 q 53 967 49 963 q 65 972 58 972 l 65 972 l 364 972 q 507 934 444 972 q 603 827 569 896 q 638 671 638 758 l 638 671 q 609 531 638 593 q 529 432 581 469 l 529 432 q 525 428 526 431 q 525 424 524 426 l 525 424 l 644 19 l 646 14 q 631 0 646 0 l 631 0 l 428 0 z m 286 775 q 279 768 279 775 l 279 768 l 279 571 q 286 564 279 564 l 286 564 l 325 564 q 385 592 363 564 q 407 668 407 619 l 407 668 q 385 747 407 719 q 325 775 363 775 l 325 775 l 286 775 z "},"S":{"ha":631,"x_min":31,"x_max":604,"o":"m 319 -11 q 171 22 235 -11 q 72 113 107 54 q 36 247 36 172 l 36 247 l 36 290 q 41 302 36 297 q 53 307 46 307 l 53 307 l 247 307 q 259 302 254 307 q 264 290 264 297 l 264 290 l 264 258 q 280 206 264 225 q 321 186 296 186 l 321 186 q 362 205 346 186 q 378 253 378 224 l 378 253 q 353 310 378 285 q 253 390 328 336 l 253 390 q 139 480 183 440 q 63 578 94 519 q 31 715 31 638 l 31 715 q 66 856 31 794 q 166 950 101 917 q 314 983 231 983 l 314 983 q 463 949 399 983 q 563 853 528 915 q 599 711 599 792 l 599 711 l 599 678 q 594 666 599 671 q 582 661 589 661 l 582 661 l 389 661 q 377 666 382 661 q 372 678 372 671 l 372 678 l 372 717 q 356 767 372 747 q 314 786 339 786 l 314 786 q 274 767 289 786 q 258 715 258 747 l 258 715 q 282 653 258 681 q 378 572 306 625 l 378 572 q 510 467 465 507 q 579 377 554 426 q 604 261 604 328 l 604 261 q 526 63 604 136 q 319 -11 447 -11 l 319 -11 z "},"T":{"ha":674,"x_min":29,"x_max":644,"o":"m 628 972 q 640 967 635 972 q 644 956 644 963 l 644 956 l 644 792 q 640 780 644 785 q 628 775 635 775 l 628 775 l 456 775 q 449 768 449 775 l 449 768 l 449 17 q 444 5 449 10 q 432 0 439 0 l 432 0 l 235 0 q 223 5 228 0 q 218 17 218 10 l 218 17 l 218 768 q 211 775 218 775 l 211 775 l 46 775 q 34 780 39 775 q 29 792 29 785 l 29 792 l 29 956 q 34 967 29 963 q 46 972 39 972 l 46 972 l 628 972 z "},"U":{"ha":667,"x_min":44,"x_max":622,"o":"m 333 -11 q 182 26 247 -11 q 81 129 117 63 q 44 283 44 196 l 44 283 l 44 956 q 49 967 44 963 q 61 972 54 972 l 61 972 l 258 972 q 270 967 265 972 q 275 956 275 963 l 275 956 l 275 261 q 291 207 275 228 q 333 186 307 186 l 333 186 q 376 207 360 186 q 392 261 392 228 l 392 261 l 392 956 q 397 967 392 963 q 408 972 401 972 l 408 972 l 606 972 q 617 967 613 972 q 622 956 622 963 l 622 956 l 622 283 q 586 129 622 196 q 485 26 550 63 q 333 -11 419 -11 l 333 -11 z "},"V":{"ha":703,"x_min":25,"x_max":681,"o":"m 242 0 q 224 15 226 0 l 224 15 l 26 954 l 25 960 q 40 972 25 972 l 40 972 l 256 972 q 274 957 272 972 l 274 957 l 353 403 q 358 398 354 397 q 361 403 361 399 l 361 403 l 435 957 q 453 972 436 972 l 453 972 l 663 972 q 676 954 681 972 l 676 954 l 478 15 q 460 0 475 0 l 460 0 l 242 0 z "},"W":{"ha":982,"x_min":24,"x_max":961,"o":"m 232 0 q 214 15 217 0 l 214 15 l 25 954 l 24 960 q 39 972 24 972 l 39 972 l 243 972 q 261 957 260 972 l 261 957 l 324 500 q 328 496 325 496 q 332 500 331 496 l 332 500 l 394 957 q 413 972 396 972 l 413 972 l 575 972 q 593 957 592 972 l 593 957 l 663 500 q 667 496 664 496 q 669 500 669 496 l 669 500 l 726 957 q 743 972 728 972 l 743 972 l 943 972 q 958 954 961 972 l 958 954 l 779 15 q 761 0 778 0 l 761 0 l 583 0 q 565 15 567 0 l 565 15 l 496 490 q 491 494 494 494 q 488 490 488 494 l 488 490 l 426 15 q 410 0 425 0 l 410 0 l 232 0 z "},"X":{"ha":681,"x_min":28,"x_max":653,"o":"m 43 0 q 31 6 33 0 q 31 19 28 11 l 31 19 l 217 482 q 217 490 218 486 l 217 490 l 31 953 q 29 961 29 956 l 29 961 q 43 972 29 972 l 43 972 l 244 972 q 263 958 258 972 l 263 958 l 338 729 q 342 724 339 724 q 346 729 344 724 l 346 729 l 419 958 q 438 972 424 972 l 438 972 l 638 972 q 650 967 647 972 q 650 953 653 961 l 650 953 l 464 490 q 464 482 463 486 l 464 482 l 650 19 q 651 11 651 17 l 651 11 q 638 0 651 0 l 638 0 l 439 0 q 421 14 425 0 l 421 14 l 346 242 q 342 247 344 247 q 338 242 339 246 l 338 242 l 261 14 q 243 0 257 0 l 243 0 l 43 0 z "},"Y":{"ha":683,"x_min":28,"x_max":657,"o":"m 242 3 q 230 8 235 3 q 225 19 225 13 l 225 19 l 225 361 l 224 369 l 29 953 q 28 960 28 956 l 28 960 q 42 972 28 972 l 42 972 l 250 972 q 268 957 264 972 l 268 957 l 338 651 q 342 646 339 646 q 346 651 344 646 l 346 651 l 415 957 q 433 972 419 972 l 433 972 l 642 972 q 653 967 650 972 q 654 953 657 963 l 654 953 l 457 369 l 456 361 l 456 19 q 451 8 456 13 q 439 3 446 3 l 439 3 l 242 3 z "},"Z":{"ha":582,"x_min":22,"x_max":556,"o":"m 39 0 q 27 5 32 0 q 22 17 22 10 l 22 17 l 22 186 q 28 207 22 193 l 28 207 l 308 767 q 308 773 310 771 q 303 775 307 775 l 303 775 l 39 775 q 27 780 32 775 q 22 792 22 785 l 22 792 l 22 956 q 27 967 22 963 q 39 972 32 972 l 39 972 l 539 972 q 551 967 546 972 q 556 956 556 963 l 556 956 l 556 786 q 550 765 556 779 l 550 765 l 267 206 q 267 199 265 201 q 272 197 268 197 l 272 197 l 539 197 q 551 192 546 197 q 556 181 556 188 l 556 181 l 556 17 q 551 5 556 10 q 539 0 546 0 l 539 0 l 39 0 z "}}`),e3="Barlow Condensed ExtraBold",t3=1389,n3=-278,i3=-75,s3=50,r3={xMin:-608,xMax:1010,yMin:-258,yMax:1068},a3=1e3,o3={format:0,fullName:"Barlow Condensed ExtraBold",license:"SIL Open Font License 1.1 (via @fontsource/barlow-condensed latin-800 woff); subset for Squad Surge gate numerals"},sa={glyphs:Q2,familyName:e3,ascender:t3,descender:n3,underlinePosition:i3,underlineThickness:s3,boundingBox:r3,resolution:a3,original_font_information:o3},Ip=new $2(sa),Jh=sa.resolution,l3=6;function c3(){const r=Ip.generateShapes("H",Jh);let e=0;for(const t of r)for(const n of t.getPoints())e=Math.max(e,n.y);if(!(e>0))throw new Error("gate font: cannot measure cap height");return e}const h3=c3(),Lp=Jh/h3,u3=Object.keys(sa.glyphs).join(""),Ri={depth:.06,proud:.05,captionDepth:.03,captionProud:.025,edge:.035,edgeDepth:.035},sh=.009,d3=.018,Dp=d3+2*sh,Fp=4e-4,Jd=[.016,.019,.022,.026,.03,.035,.041,.048,.056,.065],Zd=new Map,Np={"–":"−","—":"−"," ":" "};function f3(r){const e=[];for(const t of r.toUpperCase()){const n=Np[t]??t;n!==" "&&!u3.includes(n)&&!e.includes(t)&&e.push(t)}return e}function p3(r){const e=f3(r);if(e.length>0)throw new Error(`gate glyphs: "${r}" uses characters missing from the bundled gate font: ${e.map(n=>`U+${(n.codePointAt(0)??0).toString(16).toUpperCase().padStart(4,"0")}`).join(", ")}`);let t="";for(const n of r.toUpperCase())t+=Np[n]??n;return t}const m3=(()=>{const r=sa.glyphs[" "];if(!r)throw new Error("gate font: missing space glyph");return r.ha})();function g3(r){const e=sa.glyphs[r],t=e?e.ha:r===" "?m3:NaN;if(!Number.isFinite(t))throw new Error(`gate font: no glyph for ${JSON.stringify(r)}`);return t/Jh*Lp}function b3(r,e){const t=`${e}|${r}`,n=Zd.get(t);if(n)return n;const i=g3(r);let s={geo:null,advance:i,minX:0,maxX:0,minY:0,maxY:0};if(r!==" "){const a=Ip.generateShapes(r,Lp);if(a.length===0)throw new Error(`gate font: empty outline for ${JSON.stringify(r)}`);const o=e>0?Fp:sh,l=new Oh(a,{depth:Dp-2*o,bevelEnabled:!0,bevelThickness:o,bevelSize:o,bevelOffset:e>0?e:-sh*.5,bevelSegments:e>0?1:2,curveSegments:l3});l.translate(0,0,o),l.deleteAttribute("uv"),l.computeBoundingBox();const c=l.boundingBox;s={geo:l,advance:i,minX:c.min.x,maxX:c.max.x,minY:c.min.y,maxY:c.max.y}}return Zd.set(t,s),s}const x3=.035;function Up(r,e){const t=[];let n=0;for(const i of p3(r)){const s=b3(i,e);t.push({g:s,pen:n}),n+=s.advance+x3}return t}function kp(r){let e=1/0,t=-1/0,n=1/0,i=-1/0;for(const{g:s,pen:a}of Up(r,0))s.geo&&(e=Math.min(e,a+s.minX),t=Math.max(t,a+s.maxX),n=Math.min(n,s.minY),i=Math.max(i,s.maxY));if(!Number.isFinite(e))throw new Error(`gate glyphs: "${r}" has no visible glyphs`);return{minX:e,maxX:t,minY:n,maxY:i}}function Qd(r){let e=0,t=0;for(const l of r)for(const c of l.geo.groups)c.materialIndex===0?e+=c.count:t+=c.count;const n=e+t,i=new Float32Array(n*3),s=new Float32Array(n*3);let a=0;for(const l of[0,1])for(const c of r){const h=c.geo.attributes.position.array,u=c.geo.attributes.normal.array,d=1/(c.s*c.xCompression),f=1/c.s,m=1/c.sz;for(const b of c.geo.groups)if((b.materialIndex===0?0:1)===l)for(let g=b.start;g<b.start+b.count;g++,a++){i[a*3]=h[g*3]*c.s*c.xCompression+c.x,i[a*3+1]=h[g*3+1]*c.s+c.y,i[a*3+2]=h[g*3+2]*c.sz+c.z;const p=u[g*3]*d,x=u[g*3+1]*f,v=u[g*3+2]*m,_=Math.hypot(p,x,v)||1;s[a*3]=p/_,s[a*3+1]=x/_,s[a*3+2]=v/_}}const o=new vt;return o.setAttribute("position",new St(i,3)),o.setAttribute("normal",new St(s,3)),e>0&&o.addGroup(0,e,0),t>0&&o.addGroup(e,t,1),o.computeBoundingBox(),o.computeBoundingSphere(),o}function Op(r){const e=Ri.edge/r;let t=Jd[0];for(const n of Jd)Math.abs(n-e)<Math.abs(t-e)&&(t=n);return t}function Gl(r,e,t,n,i,s,a,o=1){const l=kp(r),c=-(l.minX+l.maxX)/2,h=-(l.minY+l.maxY)/2,u=i/Dp;for(const{g:d,pen:f}of Up(r,s))d.geo&&a.push({geo:d.geo,s:e,sz:u,xCompression:o,x:(f+c)*e*o,y:t+h*e,z:n})}function ef(r,e){const t=[],n=[];for(const i of r){if(i.role==="caption"){const a=e+Ri.captionProud-Ri.captionDepth;Gl(i.text,i.cap,i.y,a,Ri.captionDepth,0,t);continue}const s=e+Ri.proud-Ri.depth;Gl(i.text,i.cap,i.y,s,Ri.depth,0,t,i.xCompression),Gl(i.text,i.cap,i.y,s-.002,Ri.edgeDepth,Op(i.cap),n,i.xCompression)}return{face:Qd(t),edge:Qd(n)}}const Bp=Math.min(2.7,Rp.width-2*Cp),_3=Bp-.2,tf=Rp.bottom+Cp,v3={FIRE:"FIRE RATE",DMG:"DAMAGE"};function y3(r,e,t){const n=kp(r),i=t==="caption"?0:Op(e)+Fp;return(n.maxX-n.minX+2*i)*e}function Wi(r,e,t,n,i=1){const s=/[A-Z]{2,}/.test(r)?_3:Bp;let a=e;for(let o=0;o<6;o++){const l=y3(r,a,n)*i;if(l<=s)break;a*=s/l*.999}return{text:r,cap:a,y:t,role:n,...i===1?{}:{xCompression:i}}}function nf(r,e){const t=[],n=e.trim().length>0,i=/^([A-Z]+)\s+([+\u2212-][\d.]+%)$/.exec(r.trim());if(i){const s=v3[i[1]]??i[1];i[1]==="DMG"?(t.push(Wi(s,1.18,2.23,"word",.45)),t.push(Wi(i[2],n?.67:.9,n?1.17:1.08,"primary"))):(t.push(Wi(s,.7,2.5,"word")),t.push(Wi(i[2],n?1.05:1.2,n?1.58:1.45,"primary")))}else/[A-Z]{3,}/.test(r)?t.push(Wi(r,1.2,n?1.95:1.7,"primary")):t.push(Wi(r,1.7,n?1.95:1.7,"primary"));if(n){const s=i?.[1]==="DMG";t.push(Wi(e.toUpperCase(),s?.37:.5,s?tf+.2:tf+.12+.25,"caption"))}return t}const zp={good:go.good.glass,bad:go.bad.glass,mixed:go.mixed.glass},to=["good","bad","mixed"],M3=1,S3=4,w3=5,T3=6,Hl=.05,ks=new vt;function Vl(r){r.glyphs.geometry!==ks&&r.glyphs.geometry.dispose(),r.edge.geometry!==ks&&r.edge.geometry.dispose(),r.glyphs.geometry=ks,r.edge.geometry=ks}class E3{group=new Xt;variants=V2();shadowGeo=new Ln(At.width,2).rotateX(-Math.PI/2);textures={sweep:X2(),shadow:j2()};sweeps;sets;frozenGlass=new Map;views=new Map;pool=[];resolvedRows=new Map;onShatter=null;constructor(){const e={},t={};for(const n of to){const i=this.textures.sweep.clone();i.needsUpdate=!0,e[n]=i,t[n]=Y2(n,{...this.textures,sweep:i})}this.sweeps=e,this.sets=t;for(const n of to)this.frozenGlass.set(n,{emissiveIntensity:t[n].surface.emissiveIntensity,attenuationDistance:t[n].surface.attenuationDistance,emissive:t[n].surface.emissive.getHex()});this.group.name="gates"}create(){return this.pool.pop()??this.build()}build(){const e=this.sets.good,t=new Xt,n=new Xt,i=(g,p,x,v)=>(g.name=p,g.userData.gatePart=x,g.renderOrder=v,g.castShadow=!1,g.receiveShadow=!1,g),{face:s,shell:a}=this.variants[0],o=i(new mt(s,e.absorb),"gate-slab-absorb","slab",S3),l=i(new mt(s,e.surface),"gate-slab-surface","slab",w3),c=i(new mt(s,e.sweep),"gate-slab-sweep","slab",T3),h=e.edge.clone(),u=i(new mt(a,[h,e.wall]),"gate-shell","rim",0),d=i(new mt(ks,e.glyph),"gate-glyphs","glyph",0);d.castShadow=!0;const f=i(new mt(ks,e.glyphEdge),"gate-glyph-edge","glyph",0),m=new Xt;m.add(f,d),n.add(u,o,l,c,m);const b=i(new mt(this.shadowGeo,e.shadow),"gate-contact-shadow","decal",M3);return b.position.set(0,.012,.15),t.add(b,n),{id:-1,rowId:-1,group:t,body:n,absorb:o,surface:l,sweep:c,shell:u,edgeMat:h,shadow:b,labelGroup:m,glyphs:d,edge:f,label:"",detail:"",tone:"good",joinLeft:!1,joinRight:!1,popAt:-10,fadeAt:-1,appearAt:0}}release(e){e.group.removeFromParent(),this.views.delete(e.id),delete e.group.userData.gateId,Vl(e),e.label="",e.detail="",this.pool.push(e)}reset(){for(const e of[...this.views.values()])this.release(e);this.resolvedRows.clear()}onGateChosen(e,t){this.resolvedRows.set(t,e);const n=this.views.get(e);if(n){const i=n.group.position;this.onShatter?.(i.x,At.height/2,i.z,zp[n.tone]),this.release(n)}}onGrow(e,t){const n=this.views.get(e);n&&(n.popAt=t)}prewarm(){if(this.pool.some(t=>t.group.parent===this.group))return;const e=[];for(const t of to){const n=this.build();this.applyTone(n,t),n.tone=t;const i=ef(nf("+7","−4 soldiers"),Zr);n.glyphs.geometry=i.face,n.edge.geometry=i.edge,n.group.visible=!1,this.group.add(n.group),e.push(n)}this.pool.push(...e)}setGlass(e){for(const t of to){const n=this.frozenGlass.get(t),i=e[t]??{},s=this.sets[t].surface;s.emissiveIntensity=i.emissiveIntensity??n.emissiveIntensity,s.attenuationDistance=i.attenuationDistance??n.attenuationDistance,s.emissive.setHex(i.emissive??n.emissive)}}get liveCount(){return this.views.size}get pooledCount(){return this.pool.length}update(e,t,n){const i=n/2.4%1;this.sweeps.good.offset.y=-i,this.sweeps.mixed.offset.y=-i,this.sweeps.bad.offset.y=i;const s=new Set;for(const a of e.gates){s.add(a.id);let o=this.views.get(a.id);if(!o){if(this.resolvedRows.get(a.rowId)===a.id)continue;o=this.create(),o.id=a.id,o.rowId=a.rowId,o.group.userData.gateId=a.id,o.group.visible=!0,o.fadeAt=-1,o.popAt=-10,o.label="",o.appearAt=t,this.views.set(a.id,o),this.group.add(o.group)}this.sync(o,a,t,n,e),this.join(o,a,e.gates)}for(const a of[...this.views.values()]){if(s.has(a.id))continue;if(a.fadeAt<0)if(this.resolvedRows.has(a.rowId))a.fadeAt=t;else{this.release(a);continue}const o=(t-a.fadeAt)/.25;if(o>=1)this.release(a);else{const l=o*o;a.body.position.y=-3.4*l,a.shadow.scale.setScalar(1-l)}}}join(e,t,n){let i=!1,s=!1;for(const a of n){if(a.id===t.id||a.rowId!==t.rowId||Math.abs(a.z-t.z)>Hl)continue;const o=a.x-t.x;Math.abs(o+At.width)<Hl&&(i=!0),Math.abs(o-At.width)<Hl&&(s=!0)}i===e.joinLeft&&s===e.joinRight||(e.joinLeft=i,e.joinRight=s,this.applyWalls(e))}applyWalls(e){const t=this.variants[H2(e.joinLeft,e.joinRight)];e.absorb.geometry=t.face,e.surface.geometry=t.face,e.sweep.geometry=t.face,e.shell.geometry=t.shell}applyTone(e,t){const n=this.sets[t];e.tone=t,e.absorb.material=n.absorb,e.surface.material=n.surface,e.sweep.material=n.sweep,e.glyphs.material=n.glyph,e.edge.material=n.glyphEdge,e.shadow.material=n.shadow,e.edgeMat.copy(n.edge),e.shell.material[1]=n.wall}sync(e,t,n,i,s){if(t.label!==e.label||t.detail!==e.detail||t.tone!==e.tone){e.label&&t.label!==e.label&&(e.popAt=n),(t.tone!==e.tone||!e.label)&&this.applyTone(e,t.tone),e.label=t.label,e.detail=t.detail,Vl(e);const u=ef(nf(t.label,t.detail),Zr);e.glyphs.geometry=u.face,e.edge.geometry=u.edge}e.group.position.set(t.x,0,t.z),e.body.position.y=0,e.shadow.scale.setScalar(1);const a=Math.min(1,(n-e.appearAt)/.35);e.body.scale.set(1,Math.max(.001,1-Math.pow(1-a,3)),1);const o=(n-e.popAt)/.12,l=o>=0&&o<1?1+.12*Math.sin(o*Math.PI):1;e.labelGroup.scale.set(l,l,1),e.labelGroup.position.y=(1-l)*1.9;const c=t.lastHitAt>=0?s.elapsed-t.lastHitAt:99,h=t.shootable?Math.max(0,1-c/.12):0;e.edgeMat.emissiveIntensity=Pp*(1+.12*Math.sin(i*Math.PI))+h*.9}dispose(){for(const e of[...this.views.values(),...this.pool])Vl(e),e.edgeMat.dispose();this.views.clear(),this.pool.length=0;for(const e of Object.values(this.sets)){for(const t of e.materials)t.dispose();for(const t of e.textures)t.dispose()}for(const e of Object.values(this.sweeps))e.dispose();this.textures.sweep.dispose(),this.textures.shadow.dispose();for(const e of this.variants)e.face.dispose(),e.shell.dispose();this.shadowGeo.dispose(),this.group.removeFromParent()}}function qp(r){const e=new Map,t=new Map,n=r.clone();return Gp(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Gp(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Gp(r.children[n],e.children[n],t)}const sf={idle:["siegeidle","idle"],walk:["advance","walk"],windup:["attackwindup","windup","slamwindup"],slam:["attackslam","slamcentre","slamcenter","slam"],slamLeft:["slamleft"],slamRight:["slamright"],recoil:["hitrecoil","recoil","hit"],death:["death","die"],enrage:["enrage","roar"]},A3=["idle","walk","slam","death"],R3=r=>r.toLowerCase().replace(/[^a-z0-9]/g,""),Br=6.5,rh=.24,C3=`
#include <emissivemap_fragment>
totalEmissiveRadiance += uBossFlash * vec3(1.0, 0.92, 0.8);
if (uBossDissolve > 0.0) {
  float bn = fract(sin(dot(floor(vBossObj * 9.0), vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  if (bn < uBossDissolve) discard;
  totalEmissiveRadiance += (1.0 - smoothstep(0.0, 0.08, bn - uBossDissolve)) * vec3(0.55, 1.0, 0.92) * 2.0;
}`;class P3{constructor(e,t){this.manifest=t,this.model=qp(e.scene);const n=new Map;let i=0;if(this.model.traverse(f=>{const m=f;if(!m.isMesh)return;m.isSkinnedMesh&&i++,m.castShadow=!0,m.receiveShadow=!0,m.frustumCulled=!1;const b=m.material;if(Array.isArray(m.material))throw new Error(`3D model "bosses/harbor-warden": multi-material mesh ${m.name}`);let g=n.get(b);if(!g){const p=b;if(!p.isMeshStandardMaterial)throw new Error(`3D model "bosses/harbor-warden": material ${b.name} is not PBR`);g=p.clone(),this.patch(g),n.set(b,g),this.materials.push(g),this.base.set(g,{color:g.color.clone(),emissive:g.emissive.clone(),ei:g.emissiveIntensity,r:g.roughness,m:g.metalness})}m.material=g}),i===0)throw new Error('3D model "bosses/harbor-warden" has no skinned mesh');this.model.updateMatrixWorld(!0);const s=new Lt().setFromObject(this.model,!0),a=s.max.y-Math.min(0,s.min.y);if(!(a>.001))throw new Error('3D model "bosses/harbor-warden" has zero height');this.scale=Br/a,this.model.scale.setScalar(this.scale),this.root.add(this.model),this.mixer=new bp(this.model);const o=new Map(e.animations.map(f=>[R3(f.name),f])),l=()=>e.animations.map(f=>f.name).join(", ")||"none",c=f=>{const m=t.clips?.[f];if(!m)return;const b=e.animations.find(g=>g.name===m);if(!b)throw new Error(`3D model "bosses/harbor-warden": manifest maps ${f} to "${m}", which is not in the GLB (has: ${l()})`);return b};for(const f of Object.keys(sf)){const m=c(f)??sf[f].map(p=>o.get(p)).find(p=>p!==void 0);if(!m){if(A3.includes(f))throw new Error(`3D model "bosses/harbor-warden" lacks a ${f} animation (has: ${e.animations.map(p=>p.name).join(", ")||"none"})`);continue}const b=this.mixer.clipAction(m);(f==="slam"||f==="death"||f==="windup"||f==="enrage"||f==="recoil")&&(b.setLoop(wh,1),b.clampWhenFinished=!0),this.actions.set(f,b)}const h=this.actions.get("slam").getClip().duration;this.slamImpact=Math.min(h,Math.max(0,t.slamImpactSec??h*.6));let u=null;this.model.traverse(f=>{!u&&f.isBone&&/^head/i.test(f.name)&&(u=f)}),this.headBone=u;let d=null;this.model.traverse(f=>{!d&&f.isBone&&/^(anchor|hand_?r)/i.test(f.name)&&(d=f)}),this.handBone=d,this.root.visible=!1}manifest;root=new Xt;model;mixer;actions=new Map;materials=[];base=new Map;uniforms={uBossFlash:{value:0},uBossDissolve:{value:0}};scale;current=null;slamStarted=!1;impactFired=!1;onImpact=null;slamRole="slam";slamTelegraph=-1;deadAt=-1;yaw=0;flinch=0;lastHp=-1;enraged=!1;slamImpact;head=new I;headBone;handBone;impactPoint=new I;patch(e){const t=this.uniforms;e.onBeforeCompile=n=>{n.uniforms.uBossFlash=t.uBossFlash,n.uniforms.uBossDissolve=t.uBossDissolve,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBossObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBossObj = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uBossFlash;
uniform float uBossDissolve;
varying vec3 vBossObj;`).replace("#include <emissivemap_fragment>",C3)},e.customProgramCacheKey=()=>"studio-boss"}previewClip(e,t,n=0,i=0){const s=[...this.actions.values()].map(o=>o.getClip()).find(o=>o.name===e);if(!s)throw new Error(`boss: clip "${e}" is not bound to any role`);this.mixer.stopAllAction();const a=this.mixer.clipAction(s);return a.reset(),a.setEffectiveWeight(1),a.play(),a.time=Math.min(t,s.duration),this.current=null,this.root.visible=!0,this.root.position.set(n,0,i),this.root.rotation.set(0,0,0),this.mixer.update(0),this.root.updateMatrixWorld(!0),a}activeClip(){if(!this.current)return null;const e=this.actions.get(this.current);return{name:e.getClip().name,time:e.time,weight:e.getEffectiveWeight()}}get modelRoot(){return this.model}setBiome(e){const t=this.manifest.materialOverrides?.[e]??{};for(const n of this.materials){const i=this.base.get(n);n.color.copy(i.color),n.emissive.copy(i.emissive),n.emissiveIntensity=i.ei,n.roughness=i.r,n.metalness=i.m;const s=t[n.name];s&&(s.color!==void 0&&n.color.setHex(s.color),s.emissive!==void 0&&n.emissive.setHex(s.emissive),s.emissiveIntensity!==void 0&&(n.emissiveIntensity=s.emissiveIntensity),s.roughness!==void 0&&(n.roughness=s.roughness),s.metalness!==void 0&&(n.metalness=s.metalness))}}reset(){this.mixer.stopAllAction(),this.current=null,this.slamStarted=!1,this.impactFired=!1,this.slamRole="slam",this.slamTelegraph=-1,this.deadAt=-1,this.flinch=0,this.lastHp=-1,this.enraged=!1,this.uniforms.uBossFlash.value=0,this.uniforms.uBossDissolve.value=0,this.root.visible=!1,this.setEnragedLook(!1)}play(e,t,n=1){if(this.current===e){this.actions.get(e).timeScale=n;return}const i=this.actions.get(e);if(!i)throw new Error(`boss: animation role "${e}" has no clip`);const s=this.current?this.actions.get(this.current):void 0;i.reset(),i.timeScale=n,i.enabled=!0,i.setEffectiveWeight(1),i.play(),s&&s!==i&&s.crossFadeTo(i,t,!1),this.current=e}setEnragedLook(e){for(const t of this.materials){const n=this.base.get(t);/eye|emissive/i.test(t.name)&&(t.emissiveIntensity=n.ei*(e?2.6:1)),/lining|scarf/i.test(t.name)&&(t.emissive.setHex(e?13129005:n.emissive.getHex()),t.emissiveIntensity=e?.55:n.ei)}}update(e,t,n,i,s,a){if(!e){this.root.visible=!1;return}if(this.root.visible=!0,e.phase==="dead"){this.deadAt<0&&(this.deadAt=i,this.play("death",.15));const h=this.actions.get("death").getClip().duration,u=i-this.deadAt;this.uniforms.uBossDissolve.value=Math.min(1,Math.max(0,(u-h)/.6)),u>h+.65&&(this.root.visible=!1)}else if(e.phase==="advancing")this.play("walk",.3);else if(e.phase==="enraged")this.enraged||(this.enraged=!0,this.setEnragedLook(!0),this.actions.has("enrage")&&this.play("enrage",.2)),this.current==="enrage"&&this.actions.get("enrage").isRunning()||this.play("walk",.3,1.6);else{if(t&&t.id!==this.slamTelegraph&&(this.slamTelegraph=t.id,this.slamStarted=!1,this.actions.has("windup")&&this.play("windup",.25)),t&&!this.slamStarted&&t.remaining<=this.slamImpact+rh){this.slamStarted=!0,this.impactFired=!1;const d=t.x-e.x,f=d<-.5?"slamLeft":d>.5?"slamRight":"slam";this.slamRole=this.actions.has(f)?f:"slam",this.play(this.slamRole,.12),this.actions.get(this.slamRole).time=Math.max(0,this.slamImpact+rh-t.remaining)}const h=this.current===this.slamRole&&this.actions.get(this.slamRole).isRunning(),u=this.current==="windup"&&t!==null;!h&&!u&&this.play("idle",.35)}const o=e.lastHitAt>=0?n-e.lastHitAt:99;this.uniforms.uBossFlash.value=o<.06?.55*(1-o/.06):0,this.lastHp>=0&&e.hp<this.lastHp&&(this.flinch=Math.min(1,this.flinch+.25)),this.lastHp=e.hp,this.flinch=Math.max(0,this.flinch-s*6);const l=t?t.x:0,c=Math.atan2(l-e.x,Math.max(1,a-e.z))*.6;if(this.yaw+=(c-this.yaw)*(1-Math.exp(-s*4)),this.root.position.set(e.x,0,e.z),this.root.rotation.set(-this.flinch*.05,this.yaw,0,"YXZ"),this.mixer.update(s),this.root.updateMatrixWorld(!0),this.slamStarted&&!this.impactFired&&this.current===this.slamRole){const h=this.actions.get(this.slamRole);if(h.time>=this.slamImpact-1e-4){this.impactFired=!0;const u=h.getClip().name,d=this.manifest.slamImpactPoint?.[u];d&&d.length>=3?this.impactPoint.set(d[0],d[1],d[2]).applyMatrix4(this.model.matrixWorld):this.handBone?this.impactPoint.setFromMatrixPosition(this.handBone.matrixWorld):this.impactPoint.set(e.x,0,e.z+3),this.onImpact?.(this.impactPoint.x,this.impactPoint.z)}}this.headBone?this.head.setFromMatrixPosition(this.headBone.matrixWorld):this.head.set(e.x,Br*.9,e.z)}dispose(){this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model);for(const e of this.materials)e.dispose();this.root.removeFromParent()}}const Qr=.46,ah=.86;function I3(){const r=Qr,e=ah,t=[[0,.012],[r-.05,.012],[r-.035,0],[r-.012,0],[r+.004,.012],[r+.006,.03],[r-.01,.045],[r-.012,.06]],n=[];for(const a of[e/3,2*e/3])for(let o=0;o<=6;o++){const l=o/6*Math.PI;n.push([r-.012+Math.sin(l)*.022,a-.03+o/6*.06])}const i=t.slice().reverse().map(([a,o])=>[a,e-o]);return[...t,...n,...i].map(([a,o])=>new le(a,o-e/2))}function L3(){const r=new zh(I3(),40),e=r.getAttribute("position"),t=qo(907),n=Array.from({length:5},()=>({a:t()*Math.PI*2,y:(t()-.5)*ah*.7,s:.012+t()*.018,w:.08+t()*.08})),i=new I;for(let s=0;s<e.count;s++){i.fromBufferAttribute(e,s);const a=Math.hypot(i.x,i.z);if(a<Qr-.03||Math.abs(i.y)>ah/2-.05)continue;const o=Math.atan2(i.z,i.x);let l=0;for(const h of n){const u=Math.atan2(Math.sin(o-h.a),Math.cos(o-h.a))*Qr,d=Math.hypot(u,i.y-h.y);l+=h.s*Math.exp(-(d*d)/(h.w*h.w))}const c=(a-l)/a;e.setXYZ(s,i.x*c,i.y,i.z*c)}return r.computeVertexNormals(),r.rotateZ(Math.PI/2),r}function D3(){const t=document.createElement("canvas");t.width=512,t.height=256;const n=t.getContext("2d"),i=document.createElement("canvas");i.width=512,i.height=256;const s=i.getContext("2d");if(!n||!s)throw new Error("drum texture: 2D canvas unavailable");const a=qo(4242);n.fillStyle="#b8452c",n.fillRect(0,0,512,256),s.fillStyle="rgb(0,115,0)",s.fillRect(0,0,512,256);const o=256*.42,l=256*.16;n.fillStyle="#f2b632",n.fillRect(0,o,512,l),n.fillStyle="#1d1d22";for(let u=-l;u<512+l;u+=l*1.4)n.beginPath(),n.moveTo(u,o),n.lineTo(u+l*.7,o),n.lineTo(u+l*1.4,o+l),n.lineTo(u+l*.7,o+l),n.closePath(),n.fill();for(const[u,d]of[[0,256*.12],[256,256*.88]]){const f=n.createLinearGradient(0,u,0,d);f.addColorStop(0,"rgba(60,32,20,0.75)"),f.addColorStop(1,"rgba(60,32,20,0)"),n.fillStyle=f,n.fillRect(0,Math.min(u,d),512,Math.abs(d-u))}for(let u=0;u<140;u++){const d=a()<.7,f=a()*512,m=d?a()<.5?a()*256*.14:256-a()*256*.14:a()*256,b=2+a()*(d?9:5);n.fillStyle="rgba(122,62,30,0.85)",n.beginPath(),n.ellipse(f,m,b*1.6,b*1.1,a()*3,0,Math.PI*2),n.fill(),n.fillStyle="#8d9196",n.beginPath(),n.ellipse(f,m,b,b*.7,a()*3,0,Math.PI*2),n.fill(),s.fillStyle="rgb(0,90,255)",s.beginPath(),s.ellipse(f,m,b,b*.7,0,0,Math.PI*2),s.fill(),s.fillStyle="rgba(0,200,0,0.8)",s.beginPath(),s.ellipse(f,m,b*1.6,b*1.1,0,0,Math.PI*2),s.globalCompositeOperation="destination-over",s.fill(),s.globalCompositeOperation="source-over"}const c=new Po(t);c.colorSpace=Et,c.anisotropy=4;const h=new Po(i);return h.colorSpace=ui,{map:c,rough:h}}class F3{constructor(e){this.capacity=e;const{map:t,rough:n}=D3();this.textures=[t,n],this.material=new gi({map:t,roughnessMap:n,metalnessMap:n,roughness:1,metalness:1,envMapIntensity:1}),this.material.name="studio-drum",this.mesh=new as(L3(),this.material,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.instanceMatrix.setUsage(Qn),this.mesh.instanceColor=new xn(new Float32Array(e*3).fill(1),3),this.mesh.instanceColor.setUsage(Qn)}capacity;mesh;material;textures;n=0;c=new we;begin(){this.n=0}push(e,t){this.n>=this.capacity||(this.mesh.setMatrixAt(this.n,e),this.mesh.setColorAt(this.n,this.c.setRGB(t,t*.95,t*.9)),this.n++)}end(){this.mesh.count=this.n,this.mesh.visible=this.n>0,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.material.dispose();for(const e of this.textures)e.dispose();this.mesh.dispose(),this.mesh.removeFromParent()}}const N3=.5,U3=.6,k3=3,O3=.8;class B3{constructor(e){this.spawn=e}spawn;kills=null;boss=null;live=[];bossSide=1;kill(e,t,n,i,s){if(e<=0)return;const a=this.kills;a?(a.sum+=e,a.n++,a.x+=(t-a.x)/a.n,a.z+=(i-a.z)/a.n,a.y=Math.max(a.y,n+.9)):this.kills={sum:e,t0:s,x:t,y:n+.9,z:i,n:1}}bossHit(e,t,n,i,s,a){if(e<=0)return;const o=this.boss;o?o.sum+=e:(this.bossSide=-this.bossSide,this.boss={sum:e,t0:a,x:t+this.bossSide*s,y:n,z:i+.6,n:1})}update(e){if(this.live=this.live.filter(t=>e-t<O3),this.kills&&e-this.kills.t0>=N3){const t=this.kills;this.kills=null,this.emit(`+${t.sum}`,t.x,t.y,t.z,"#FFC93C",e)}if(this.boss&&e-this.boss.t0>=U3){const t=this.boss;this.boss=null,this.emit(`−${Math.round(t.sum)}`,t.x,t.y,t.z,"#FFE6A8",e)}}emit(e,t,n,i,s,a){this.live.length>=k3||(this.live.push(a),this.spawn(e,t,n,i,s))}get liveCount(){return this.live.length}reset(){this.kills=null,this.boss=null,this.live=[]}}const z3=.62,q3=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,G3=`
uniform vec3 uTop;
uniform vec3 uMid;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform float uScale;
varying vec3 vDir;
void main() {
  float h = vDir.y;
  vec3 c;
  if (h >= 0.0) {
    c = mix(uHorizon, uMid, smoothstep(0.0, 0.18, h));
    c = mix(c, uTop, smoothstep(0.15, 0.6, h));
  } else {
    c = mix(uHorizon, uGround, smoothstep(0.0, 0.25, -h));
  }
  gl_FragColor = vec4(c * uScale, 1.0);
}`;function Ti(r){return new we().setHex(r,Et)}function H3(r,e){const t=new Kf,n=[],i=new Nt({side:Zt,depthWrite:!1,uniforms:{uTop:{value:Ti(r.skyTop)},uMid:{value:Ti(r.skyMid)},uHorizon:{value:Ti(r.skyHorizon)},uGround:{value:Ti(r.road).lerp(Ti(r.waterDeep),.5)},uScale:{value:r.studio.envSky}},vertexShader:q3,fragmentShader:G3}),s=new ta(50,48,24);t.add(new mt(s,i)),n.push(i,s);const a=(o,l,c,h,u)=>{const d=new Ln(h,u),f=new Wt({color:o.clone().multiplyScalar(l),side:Rn}),m=new mt(d,f);m.position.copy(c).normalize().multiplyScalar(30),m.lookAt(0,0,0),t.add(m),n.push(d,f)};return a(Ti(r.sunColor),r.studio.envKey,e,6,4),a(Ti(r.skyTop).lerp(new we(1,1,1),.35),2.4*r.studio.envSky,new I(-e.x,.6,-e.z),22,14),a(Ti(r.sand),1.3*r.studio.envSky,new I(.2,-1,.4),40,26),{scene:t,dispose:()=>{for(const o of n)o.dispose()}}}class V3{constructor(e,t,n){this.gl=e,this.scene=t,this.tier=n,e.toneMapping=Do,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Lr;const i=n==="desktop"?4096:2048;this.sun.castShadow=!0,this.sun.shadow.mapSize.set(i,i),this.sun.shadow.bias=-25e-5,this.sun.shadow.normalBias=.025,this.sun.shadow.radius=n==="desktop"?4:2.5,this.sun.shadow.intensity=z3,this.rim.castShadow=!1,this.muzzle.castShadow=!1,this.pmrem=new $c(e),t.add(this.sun,this.sun.target,this.rim,this.rim.target,this.hemi,this.muzzle)}gl;scene;tier;sun=new Yc(16777215,0);rim=new Yc(16777215,0);hemi=new rb(16777215,16777215,0);muzzle=new gp(16761466,0,7,2);pmrem;envTarget=null;tmp=new I;apply(e){const t=this.tmp.set(...e.sunOffset).normalize(),{scene:n,dispose:i}=H3(e,t.clone()),s=this.pmrem.fromScene(n,.035,.1,100);i(),this.envTarget?.dispose(),this.envTarget=s,this.scene.environment=s.texture,this.scene.environmentIntensity=1,this.sun.color.setHex(e.sunColor),this.sun.intensity=e.studio.sun,this.sun.shadow.intensity=e.studio.shadow,this.rim.color.setHex(e.rimColor).lerp(new we(12575743),.4),this.rim.intensity=e.studio.rim,this.rim.target.position.set(0,.8,7),this.rim.position.set(-8,9,-20),this.hemi.color.setHex(e.hemiSky),this.hemi.groundColor.setHex(e.hemiSky).lerp(new we(e.hemiGround),.3),this.hemi.intensity=e.studio.hemi,this.fitShadow(e)}fitShadow(e){const t=new I(0,0,-16);this.sun.target.position.copy(t),this.sun.position.copy(t).add(new I(...e.sunOffset).normalize().multiplyScalar(40)),this.sun.updateMatrixWorld(),this.sun.target.updateMatrixWorld();const n=new Ke().lookAt(this.sun.position,t,new I(0,1,0)),i=new Ke().makeRotationFromQuaternion(new Bt().setFromRotationMatrix(n)).invert(),s=new I(1/0,1/0,1/0),a=new I(-1/0,-1/0,-1/0),o=new I;for(const c of[-10,10])for(const h of[-.5,7])for(const u of[14,-46])o.set(c,h,u).sub(this.sun.position).applyMatrix4(i),s.min(o),a.max(o);const l=this.sun.shadow.camera;l.left=s.x,l.right=a.x,l.bottom=s.y,l.top=a.y,l.near=Math.max(.5,-a.z-2),l.far=-s.z+2,l.updateProjectionMatrix()}dispose(){this.envTarget?.dispose(),this.envTarget=null,this.scene.environment=null,this.pmrem.dispose(),this.sun.shadow.map?.dispose(),this.sun.dispose(),this.rim.dispose(),this.hemi.dispose(),this.muzzle.dispose();for(const e of[this.sun,this.sun.target,this.rim,this.rim.target,this.hemi,this.muzzle])e.removeFromParent()}}function W3(){const r=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,e=Math.max(screen.width,screen.height)>=1100;return!r&&e?"desktop":"mobile"}const X3=`
attribute vec4 pColor;   // rgb, alpha
attribute vec4 pShape;   // size x, size y (stretch along velocity), rotation, softness
attribute vec3 pVel;
varying vec4 vColor;
varying vec2 vUv;
varying float vSoft;
#include <fog_pars_vertex>
void main() {
  vColor = pColor;
  vUv = uv;
  vSoft = pShape.w;
  vec4 mvPosition = modelViewMatrix * vec4(instanceMatrix[3].xyz, 1.0);
  // stretch along screen-space velocity for droplets/sparks
  vec3 vv = (modelViewMatrix * vec4(pVel, 0.0)).xyz;
  vec2 dir = length(vv.xy) > 1e-4 ? normalize(vv.xy) : vec2(cos(pShape.z), sin(pShape.z));
  vec2 side = vec2(-dir.y, dir.x);
  vec2 q = position.x * side * pShape.x + position.y * dir * pShape.y;
  mvPosition.xy += q;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,j3=`
varying vec4 vColor;
varying vec2 vUv;
varying float vSoft;
#include <fog_pars_fragment>
void main() {
  float d = length(vUv - 0.5) * 2.0;
  float a = vColor.a * (1.0 - smoothstep(1.0 - vSoft, 1.0, d));
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor.rgb, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`,no=new we;class rf{constructor(e,t,n){this.capacity=e;const i=new Ln(1,1);this.color=new xn(new Float32Array(e*4),4),this.shape=new xn(new Float32Array(e*4),4),this.vel=new xn(new Float32Array(e*3),3);for(const s of[this.color,this.shape,this.vel])s.setUsage(Qn);i.setAttribute("pColor",this.color),i.setAttribute("pShape",this.shape),i.setAttribute("pVel",this.vel),this.material=new Nt({vertexShader:X3,fragmentShader:j3,transparent:!0,depthWrite:!1,fog:!0,blending:t?zr:ts,uniforms:is.clone(Pe.fog)}),this.mesh=new as(i,this.material,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.count=0,this.mesh.instanceMatrix.setUsage(Qn)}capacity;mesh;ps=[];head=0;color;shape;vel;material;seed=1;rand(){return this.seed=this.seed*16807%2147483647,this.seed/2147483647}emit(e){const t=typeof e.color=="number"?[e.color]:e.color,n=e.intensity??1;for(let i=0;i<e.count;i++){let s=this.ps[this.head];s||(s={},this.ps[this.head]=s),this.head=(this.head+1)%this.capacity;const a=this.rand()*Math.PI*2,o=(this.rand()-.3)*Math.PI*.5,l=e.speed*(.45+this.rand()*.55),c=(e.spread??0)*Math.sqrt(this.rand()),h=this.rand()*Math.PI*2;s.x=e.x+Math.cos(h)*c,s.y=e.y+(this.rand()-.5)*(e.spread??0)*.6,s.z=e.z+Math.sin(h)*c,s.vx=Math.cos(a)*Math.cos(o)*l+(e.bias?.[0]??0),s.vy=Math.sin(o)*l+(e.up??0)*(.6+this.rand()*.4)+(e.bias?.[1]??0),s.vz=Math.sin(a)*Math.cos(o)*l+(e.bias?.[2]??0),s.age=0,s.life=e.life*(.7+this.rand()*.3),s.size=e.size*(.7+this.rand()*.6),s.grow=e.grow??0,s.stretch=e.stretch??0,s.soft=e.soft??.6,s.alpha=e.alpha??1,s.gravity=e.gravity??9,s.drag=e.drag??1.5,no.setHex(t[Math.floor(this.rand()*t.length)]??16777215),s.r=no.r*n,s.g=no.g*n,s.b=no.b*n,s.rot=this.rand()*Math.PI}}get live(){return this.mesh.count}update(e){const t=this.mesh.instanceMatrix.array,n=this.color.array,i=this.shape.array,s=this.vel.array;let a=0;for(const o of this.ps){if(!o||o.age>=o.life||(o.age+=e,o.age>=o.life))continue;const l=Math.exp(-o.drag*e);o.vx*=l,o.vz*=l,o.vy=o.vy*l-o.gravity*e,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,o.y<.02&&o.vy<0&&(o.y=.02,o.vy*=-.25,o.vx*=.6,o.vz*=.6);const c=o.age/o.life,h=o.size*(1+o.grow*c),u=c<.12?c/.12:1-Math.pow((c-.12)/.88,1.6);t.fill(0,a*16,a*16+16),t[a*16]=1,t[a*16+5]=1,t[a*16+10]=1,t[a*16+12]=o.x,t[a*16+13]=o.y,t[a*16+14]=o.z,t[a*16+15]=1,n[a*4]=o.r,n[a*4+1]=o.g,n[a*4+2]=o.b,n[a*4+3]=o.alpha*Math.max(0,u);const d=Math.hypot(o.vx,o.vy,o.vz);i[a*4]=h,i[a*4+1]=h*(1+o.stretch*Math.min(3,d*.12)),i[a*4+2]=o.rot,i[a*4+3]=o.soft,s[a*3]=o.stretch>0?o.vx:0,s[a*3+1]=o.stretch>0?o.vy:0,s[a*3+2]=o.stretch>0?o.vz:0,a++}this.mesh.count=a,this.mesh.visible=a>0,this.mesh.instanceMatrix.needsUpdate=!0,this.color.needsUpdate=!0,this.shape.needsUpdate=!0,this.vel.needsUpdate=!0}clear(){for(const e of this.ps)e&&(e.age=e.life);this.mesh.count=0}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.dispose(),this.mesh.removeFromParent()}}const xo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const K3=new ia(-1,1,1,-1,0,1);class Y3 extends vt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}}const $3=new Y3;class Zh{constructor(e){this._mesh=new mt($3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,K3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class J3 extends ir{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=is.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Zh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class af extends ir{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Z3 extends ir{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Q3{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new J3(xo),this.copyPass.material.blending=Jn,this.clock=new db}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}af!==void 0&&(a instanceof af?n=!0:a instanceof Z3&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const io={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class eM extends ir{constructor(){super(),this.isOutputPass=!0,this.uniforms=is.clone(io.uniforms),this.material=new hp({name:io.name,uniforms:this.uniforms,vertexShader:io.vertexShader,fragmentShader:io.fragmentShader}),this._fsQuad=new Zh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===mh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class tM extends ir{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new we}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const nM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Zs extends ir{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new we(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(s,a,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new rn(s,a,{type:dn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new rn(s,a,{type:dn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=nM;this.highPassUniforms=is.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=is.clone(xo.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader,premultipliedAlpha:!0,blending:zr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new we,this._oldClearAlpha=1,this._basic=new Wt,this._fsQuad=new Zh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new le(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Zs.BlurDirectionX=new le(1,0);Zs.BlurDirectionY=new le(0,1);class iM{composer;target;bloom;output;renderPass;constructor(e,t,n){this.target=new rn(1,1,{type:dn,samples:4}),this.target.texture.name="studio-scene",this.composer=new Q3(e,this.target),this.renderPass=new tM(t,n),this.bloom=new Zs(new le(1,1),.22,.5,.92),this.output=new eM,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(this.output)}get sceneTarget(){return this.target}setBloom(e,t,n){this.bloom.enabled=e,t!==void 0&&(this.bloom.threshold=t),n!==void 0&&(this.bloom.strength=n)}setSize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t)}render(e){this.composer.render(e)}dispose(){this.bloom.dispose(),this.output.dispose(),this.renderPass.dispose(),this.composer.dispose(),this.target.dispose()}}const of=64,lf=4096;class sM{constructor(e,t,n,i,s,a,o,l,c,h,u){this.name=e,this.boneCount=t,this.rows=n,this.fps=i,this.data=s,this.clips=a,this.parts=o,this.boneIndex=l,this.height=c,this.scale=h;for(const[d,f]of u)this.sockets.set(d,f);this.texture=new ea(s,t*4,n,hn,bn),this.texture.name=`vat:${e}`,this.texture.minFilter=Dt,this.texture.magFilter=Dt,this.texture.generateMipmaps=!1,this.texture.flipY=!1,this.texture.needsUpdate=!0}name;boneCount;rows;fps;data;clips;parts;boneIndex;height;scale;texture;sockets=new Map;tmpM=new Ke;has(e){return this.clips.has(e)}clip(e){const t=this.clips.get(e);if(!t)throw new Error(`VAT ${this.name}: clip "${e}" was not baked`);return t}row(e,t){const n=e.frames-1;let i=Math.max(0,t)*this.fps;return e.loop?(i%=n,i>n-1e-4&&(i=0)):i>n&&(i=n),e.start+i}rowAt(e,t){return e.start+Math.min(1,Math.max(0,t))*(e.frames-1)}matrixAt(e,t,n){const i=Math.min(this.rows-1,Math.max(0,Math.floor(e))),s=Math.min(1,Math.max(0,e-i)),a=(i*this.boneCount+t)*16,o=(Math.min(this.rows-1,i+1)*this.boneCount+t)*16,l=this.data,c=n.elements;for(let h=0;h<16;h++)c[h]=l[a+h]+(l[o+h]-l[a+h])*s;return n}socketTwist(e){return this.sockets.get(e)?.twist??0}socketNames(){return[...this.sockets.keys()]}socket(e,t,n){const i=this.sockets.get(e);if(!i)throw new Error(`VAT ${this.name}: socket "${e}" missing`);return n.copy(i.local).applyMatrix4(this.matrixAt(t,i.bone,this.tmpM))}skinPoint(e,t,n,i,s){s.set(0,0,0);const a=new Ke,o=new I;for(let l=0;l<4;l++){const c=i[l]??0;c!==0&&(this.matrixAt(e,n[l]??0,a),s.addScaledVector(o.copy(t).applyMatrix4(a),c))}return s}boundsCache=new Map;supportCache=null;supports(){if(this.supportCache)return this.supportCache;const e=new Map,t=new I;for(const n of this.parts){const i=n.geometry,s=i.getAttribute("position"),a=i.getAttribute("vatIndex"),o=i.getAttribute("vatWeight"),l=i.getAttribute("vatTwist"),c=new Map;for(let u=0;u<s.count;u++){t.fromBufferAttribute(s,u);const d=l?l.getX(u):0;for(let f=0;f<4;f++){if(o.getComponent(u,f)<=0)continue;const m=a.getComponent(u,f);let b=c.get(m);b||(b={bone:m,box:new Lt,twMax:0},c.set(m,b)),b.box.expandByPoint(t),d>b.twMax&&(b.twMax=d)}}const h=e.get(n.tag)??[];h.push(...c.values()),e.set(n.tag,h)}return this.supportCache=e,e}supportBounds(e,t,n,i,s){s.makeEmpty();const a=this.supports(),o=this.tmpM,l=new I;for(const c of t)for(const h of a.get(c)??[]){this.matrixAt(e,h.bone,o);const u=i*h.twMax,d=n*h.twMax;for(let f=0;f<8;f++){if(l.set(f&1?h.box.max.x:h.box.min.x,f&2?h.box.max.y:h.box.min.y,f&4?h.box.max.z:h.box.min.z).applyMatrix4(o),u===0&&d===0){s.expandByPoint(l);continue}for(const m of u===0?[0]:[0,-u])rM(l.x,l.y,l.z+m,d,s)}}return s}posedBounds(e,t,n,i,s){const a=`${Math.round(e*64)}|${Math.round(n*200)}|${Math.round(i*1e3)}|${t.join(",")}`,o=this.boundsCache.get(a);if(o)return s.copy(o);const l=[];for(let f=0;f<this.boneCount;f++)l.push(this.matrixAt(e,f,new Ke));const c=new Lt,h=new I,u=new I,d=new I;for(const f of this.parts){if(!t.includes(f.tag))continue;const m=f.geometry,b=m.getAttribute("position"),g=m.getAttribute("vatIndex"),p=m.getAttribute("vatWeight"),x=m.getAttribute("vatTwist");for(let v=0;v<b.count;v++){h.fromBufferAttribute(b,v),d.set(0,0,0);for(let w=0;w<4;w++){const E=p.getComponent(v,w);E>0&&d.addScaledVector(u.copy(h).applyMatrix4(l[g.getComponent(v,w)]),E)}const _=x?x.getX(v):0;if(_>0){d.z-=i*_;const w=n*_,E=Math.cos(w),R=Math.sin(w);d.set(E*d.x+R*d.z,d.y,-R*d.x+E*d.z)}c.expandByPoint(d)}}return this.boundsCache.size>=4096&&this.boundsCache.clear(),this.boundsCache.set(a,c),s.copy(c)}dispose(){this.boundsCache.clear(),this.supportCache=null,this.texture.dispose();for(const e of this.parts)e.geometry.dispose()}}function rM(r,e,t,n,i){const s=Math.min(0,n),a=Math.max(0,n),o=u=>{const d=Math.cos(u),f=Math.sin(u);i.expandByPoint(aM.set(d*r+f*t,e,-f*r+d*t))};if(o(s),o(a),Math.hypot(r,t)===0)return;const c=Math.atan2(t,r),h=Math.atan2(-r,t);for(const u of[c,h])for(let d=Math.ceil((s-u)/Math.PI);u+d*Math.PI<=a;d++)o(u+d*Math.PI)}const aM=new I;function oM(r,e){const t=new Set(["position","normal","uv","vatIndex","vatWeight","vatTwist"]);e&&t.add("tangent");for(const n of Object.keys(r.attributes))t.has(n)||r.deleteAttribute(n);r.morphAttributes={},r.clearGroups()}function cf(r,e){let t=r.parent;for(;t;){const n=e.get(t);if(n!==void 0)return n;t=t.parent}return-1}function lM(r,e,t,n){const i=n.fps??30,s=qp(e);s.updateMatrixWorld(!0);const a=s.matrixWorld.clone().invert(),o=[],l=[],c=[];if(s.traverse(Q=>{Q.isSkinnedMesh?o.push(Q):Q.isMesh?l.push(Q):n.socketPrefix&&Q.name.startsWith(n.socketPrefix)&&c.push(Q)}),o.length===0)throw new Error(`VAT ${r}: no skinned mesh in asset`);const h=o[0].skeleton,u=h.bones;if(u.length>of)throw new Error(`VAT ${r}: ${u.length} bones exceeds ${of}`);const d=new Map,f=[];u.forEach((Q,re)=>{d.set(Q,re),f.push(h.boneInverses[re].clone())});const m=new Map;u.forEach((Q,re)=>m.set(Q.name,re));const b=u.map(Q=>{let re=Q;for(;re;){const X=d.has(re)?n.twist?.(re.name):void 0;if(X!==void 0)return Math.min(1,Math.max(0,X));re=re.parent}return 0}),g=Q=>{const re=Q.getAttribute("vatIndex"),X=Q.getAttribute("vatWeight"),ne=new Float32Array(re.count);for(let J=0;J<re.count;J++){let he=0;for(let C=0;C<4;C++)he+=X.getComponent(J,C)*b[re.getComponent(J,C)];ne[J]=he}Q.setAttribute("vatTwist",new St(ne,1))},p=(Q,re)=>re.multiplyMatrices(u[Q].matrixWorld,f[Q]).premultiply(a),x=[];s.traverse(Q=>x.push({o:Q,p:Q.position.clone(),q:Q.quaternion.clone(),s:Q.scale.clone()}));const v=u.map(Q=>Q.matrixWorld.clone()),_=n.partPrefixes??[],w=Q=>{let re=Q;for(;re;){if(_.some(X=>re.name.startsWith(X)))return re.name;re=re.parent}return"body"},E=[],R=(Q,re)=>{const X=Array.isArray(Q.material)?Q.material:[Q.material];if(X.length!==1)throw new Error(`VAT ${r}: mesh "${Q.name}" uses multi-material groups`);E.push({tag:w(Q),material:X[0],geometry:re})};for(const Q of o){const re=Q.geometry.clone(),X=re.getAttribute("skinIndex"),ne=re.getAttribute("skinWeight");if(!X||!ne)throw new Error(`VAT ${r}: skinned mesh "${Q.name}" lacks weights`);const J=X.count,he=new Float32Array(J*4),C=new Float32Array(J*4);for(let Ce=0;Ce<J;Ce++){let Te=0;for(let Oe=0;Oe<4;Oe++){const ue=X.getComponent(Ce,Oe),P=Q.skeleton.bones[ue],y=P?d.get(P):void 0,N=ne.getComponent(Ce,Oe);if(N>0&&y===void 0)throw new Error(`VAT ${r}: "${Q.name}" bound to a bone outside the armature`);he[Ce*4+Oe]=y??0,C[Ce*4+Oe]=N,Te+=N}if(Te<=0)throw new Error(`VAT ${r}: "${Q.name}" has an unweighted vertex`);for(let Oe=0;Oe<4;Oe++)C[Ce*4+Oe]/=Te}re.setAttribute("vatIndex",new St(he,4)),re.setAttribute("vatWeight",new St(C,4)),re.applyMatrix4(Q.bindMatrix),g(re),R(Q,re)}const L=new Ke;for(const Q of l){const re=cf(Q,d);if(re<0)throw new Error(`VAT ${r}: mesh "${Q.name}" is neither skinned nor parented to a bone`);const X=Q.geometry.clone();L.copy(f[re]).invert().multiply(v[re].clone().invert()).multiply(Q.matrixWorld),X.applyMatrix4(L);const ne=X.getAttribute("position").count,J=new Float32Array(ne*4),he=new Float32Array(ne*4);for(let C=0;C<ne;C++)J[C*4]=re,he[C*4]=1;X.setAttribute("vatIndex",new St(J,4)),X.setAttribute("vatWeight",new St(he,4)),g(X),R(Q,X)}const M=new Map;for(const Q of c){const re=cf(Q,d);if(re<0)throw new Error(`VAT ${r}: socket "${Q.name}" is not under a bone`);const X=new I().setFromMatrixPosition(Q.matrixWorld).applyMatrix4(v[re].clone().invert()).applyMatrix4(f[re].clone().invert());M.set(Q.name,{bone:re,local:X,twist:b[re]})}const S=new Lt,D=u.map((Q,re)=>p(re,new Ke)),z=new I,O=new I,$=new I;for(const Q of E){const re=Q.geometry.getAttribute("position"),X=Q.geometry.getAttribute("vatIndex"),ne=Q.geometry.getAttribute("vatWeight");for(let J=0;J<re.count;J++){z.fromBufferAttribute(re,J),O.set(0,0,0);for(let he=0;he<4;he++){const C=ne.getComponent(J,he);C&&O.addScaledVector($.copy(z).applyMatrix4(D[X.getComponent(J,he)]),C)}S.expandByPoint(O)}}const V=S.max.y-Math.min(0,S.min.y);if(!(V>1e-4))throw new Error(`VAT ${r}: degenerate bind-pose height`);const W=n.targetHeight/V,H=new Ke().makeScale(W,W,W),ae=new Set([...n.required,...n.optional??[]]),ge=new Map(t.map(Q=>[Q.name,Q]));for(const Q of n.required)if(!ge.has(Q))throw new Error(`VAT ${r}: required clip "${Q}" missing`);const be=new Set(n.loops),xe=[];let je=0;for(const Q of ae){const re=ge.get(Q);if(!re)continue;const X=be.has(Q),J=Math.max(1,Math.round(re.duration*i))+1;xe.push({clip:re,frames:J,loop:X}),je+=J}if(je>lf)throw new Error(`VAT ${r}: ${je} rows exceeds ${lf}`);const We=u.length,Le=new Float32Array(je*We*16),st=new Map,te=new Ke,oe=()=>{for(const Q of x)Q.o.position.copy(Q.p),Q.o.quaternion.copy(Q.q),Q.o.scale.copy(Q.s)};let De=0;for(const{clip:Q,frames:re,loop:X}of xe){oe();const ne=new bp(s),J=ne.clipAction(Q);J.setLoop(wh,1),J.clampWhenFinished=!0,J.reset().play(),st.set(Q.name,{name:Q.name,start:De,frames:re,duration:Q.duration,loop:X});for(let he=0;he<re;he++){ne.setTime(Math.min(Q.duration,he/i)),s.updateMatrixWorld(!0);for(let C=0;C<We;C++)p(C,te).premultiply(H),te.toArray(Le,(De*We+C)*16);De++}ne.stopAllAction(),ne.uncacheRoot(s)}oe();const qe=new Map;for(const Q of E){const re=`${Q.tag}\0${Q.material.uuid}`,X=qe.get(re)??[];X.push(Q),qe.set(re,X)}const Ue=[];for(const Q of qe.values()){const re=Q[0].material,X=Q.every(C=>C.geometry.getAttribute("tangent")),ne=Q.every(C=>C.geometry.index),J=Q.map(C=>{const Ce=ne?C.geometry:C.geometry.toNonIndexed();return oM(Ce,X),Ce.getAttribute("uv")||Ce.setAttribute("uv",new St(new Float32Array(Ce.getAttribute("position").count*2),2)),Ce.getAttribute("normal")||Ce.computeVertexNormals(),Ce}),he=J.length===1?J[0]:Sp(J,!1);if(!he)throw new Error(`VAT ${r}: could not merge "${Q[0].tag}" geometry`);if(he!==J[0])for(const C of J)C.dispose();he.boundingSphere=new Gn(new I,n.targetHeight*4),Ue.push({tag:Q[0].tag,geometry:he,material:re})}const Qe=new Map;for(const[Q,re]of M)Qe.set(Q,re);return new sM(r,We,je,i,Le,st,Ue,m,V*W,W,Qe)}const ft=(r,e,t)=>({names:r,required:e,loop:t}),so=["windup","attackwindup","attack"],ro=["strike","smash","lunge","attackslam","attack"],ao=["death","diefall","die","hitfall"],_o={trooper:{height:1.45,roles:{idle:ft(["idleready","idle"],!0,!0),move:ft(["runaim","run"],!0,!0),strafeL:ft(["strafeleft","runleft"],!1,!0),strafeR:ft(["straferight","runright"],!1,!0),hit:ft(["hit"],!1,!1),death:ft(["hitfall","death","die"],!0,!1),victory:ft(["victory","cheer"],!1,!0),join:ft(["joinland"],!1,!1)}},walker:{height:1.5,roles:{idle:ft(["idle"],!1,!0),move:ft(["shamble","walk"],!0,!0),pursue:ft(["run","shamble","walk"],!0,!0),windup:ft(so,!0,!1),strike:ft(ro,!0,!1),hit:ft(["hit"],!1,!1),death:ft(ao,!0,!1)}},runner:{height:1.6,roles:{idle:ft(["idle"],!1,!0),move:ft(["sprint","run"],!0,!0),pursue:ft(["sprint","run"],!0,!0),windup:ft(so,!0,!1),strike:ft(ro,!0,!1),hit:ft(["hit"],!1,!1),death:ft(ao,!0,!1)}},skitterer:{height:.75,roles:{idle:ft(["idle"],!1,!0),move:ft(["scuttle","crawl"],!0,!0),pursue:ft(["scuttle","crawl"],!0,!0),windup:ft(so,!0,!1),strike:ft(ro,!0,!1),hit:ft(["hit"],!1,!1),death:ft(ao,!0,!1)}},brute:{height:2.4,roles:{idle:ft(["idle"],!1,!0),move:ft(["stomp","walk"],!0,!0),pursue:ft(["run","stomp","walk"],!0,!0),windup:ft(so,!0,!1),strike:ft(ro,!0,!1),hit:ft(["hit"],!1,!1),death:ft(ao,!0,!1)}}},hf=.8,Hp=["rifle","smg","shotgun","lancer","rocket"],Pr=r=>r.toLowerCase().replace(/[^a-z0-9]/g,"");function cM(r){const e=Pr(r);if(/^(root|hips|pelvis)/.test(e)||/thigh|shin|calf|foot|toe|leg/.test(e))return 0;if(/chest|spine0?2|spine0?3|upperchest|neck|clavicle|shoulder/.test(e))return 1;if(/^spine0?1?$/.test(e)||e==="spine")return .45}class hM{constructor(e,t,n){this.id=e,this.bake=t;for(const[i,s]of n)this.roleMap.set(i,{clip:t.clip(s.name),...s})}id;bake;roleMap=new Map;has(e){return this.roleMap.has(e)}role(e){const t=this.roleMap.get(e);if(!t)throw new Error(`${this.id}: animation role "${e}" unavailable`);return t}rowAtTime(e,t){const n=this.role(e),i=n.clip;if(n.from===0&&n.to===1)return this.bake.row(i,t);const s=(n.to-n.from)*i.duration,a=n.from+(s>0?Math.min(1,Math.max(0,t/s)):1)*(n.to-n.from);return this.bake.rowAt(i,a)}rowAtProgress(e,t){const n=this.role(e);return this.bake.rowAt(n.clip,n.from+Math.min(1,Math.max(0,t))*(n.to-n.from))}natural=new Map;naturalSpeed(e){const t=this.natural.get(e);if(t!==void 0)return t;const n=this.bake,i=n.parts.find(b=>b.tag==="body"),s=["foot_L","foot_R"].map(b=>n.boneIndex.get(b));if(!i||s.some(b=>b===void 0))throw new Error(`${this.id}: rig has no foot_L/foot_R to measure stride`);const a=i.geometry.getAttribute("position"),o=i.geometry.getAttribute("vatIndex"),l=i.geometry.getAttribute("vatWeight"),c=[];for(let b=0;b<a.count;b++)for(let g=0;g<4;g++)s.includes(o.getComponent(b,g))&&l.getComponent(b,g)>.5&&c.push(b);const h=this.role(e),u=new I,d=new I;let f=0;for(const b of s){let g=1/0,p=-1/0;for(let x=0;x<=24;x++){const v=h.clip.start+x/24*(h.clip.frames-1);let _=0,w=0;for(const E of c)[0,1,2,3].some(R=>o.getComponent(E,R)===b&&l.getComponent(E,R)>.5)&&(u.fromBufferAttribute(a,E),n.skinPoint(v,u,[0,1,2,3].map(R=>o.getComponent(E,R)),[0,1,2,3].map(R=>l.getComponent(E,R)),d),_+=d.z,w++);w&&(g=Math.min(g,_/w),p=Math.max(p,_/w))}p>g&&(f=Math.max(f,p-g))}const m=f>0?2*f/Math.max(.001,this.duration(e)):0;return this.natural.set(e,m),m}duration(e){const t=this.role(e);return(t.to-t.from)*t.clip.duration}dispose(){this.bake.dispose()}}function uM(r){return r.animations.map(e=>e.name).join(", ")||"none"}function dM(r,e){const t=_o[r],n=new Map;for(const l of e.animations)n.has(Pr(l.name))||n.set(Pr(l.name),l);const i=new Map,s=new Set,a=new Set;for(const[l,c]of Object.entries(t.roles)){const h=c.names.map(m=>n.get(Pr(m))).find(m=>m!==void 0);if(!h){if(c.required)throw new Error(`3D model "characters/${r}" lacks a ${l} animation (accepts ${c.names.join(" | ")}; has: ${uM(e)})`);continue}const u=Pr(h.name)==="attack",d=u&&l==="strike"?hf:0,f=u&&l==="windup"?hf:1;i.set(l,{name:h.name,from:d,to:f}),a.add(h.name),c.loop&&s.add(h.name)}const o=lM(r,e.scene,e.animations,{targetHeight:t.height,loops:[...s],required:[...a],partPrefixes:r==="trooper"?["weapon_"]:[],...r==="trooper"?{socketPrefix:"muzzle_"}:{},twist:cM,fps:120});if(r==="trooper"){const l=new Set(o.parts.map(h=>h.tag)),c=new Set(o.socketNames());for(const h of Hp){if(!l.has(`weapon_${h}`))throw o.dispose(),new Error(`3D model "characters/trooper" lacks mesh weapon_${h}`);if(!c.has(`muzzle_${h}`))throw o.dispose(),new Error(`3D model "characters/trooper" lacks muzzle_${h} socket`)}}return new hM(r,o,i)}const fM=`
attribute vec4 vatIndex;
attribute vec4 vatWeight;
attribute float vatTwist;
attribute vec4 vatAnim;  // rowA, rowB, blend toward B, hit flash
attribute vec4 vatExtra; // upper-body twist (rad), dissolve 0..1, recoil (m), spare
uniform highp sampler2D vatTex;
varying float vVatFlash;
varying float vVatDissolve;
varying vec3 vVatObj;
mat4 vatBone(int row, int x) {
  return mat4(
    texelFetch(vatTex, ivec2(x, row), 0),
    texelFetch(vatTex, ivec2(x + 1, row), 0),
    texelFetch(vatTex, ivec2(x + 2, row), 0),
    texelFetch(vatTex, ivec2(x + 3, row), 0));
}
// Fractional row: linear blend of the two adjacent baked frames (authored 30 Hz keys).
mat4 vatSkin(float row) {
  int r0 = int(floor(row));
  float fr = row - float(r0);
  ivec4 xi = ivec4(vatIndex + 0.5) * 4;
  mat4 m = vatWeight.x * vatBone(r0, xi.x);
  if (vatWeight.y > 0.0) m += vatWeight.y * vatBone(r0, xi.y);
  if (vatWeight.z > 0.0) m += vatWeight.z * vatBone(r0, xi.z);
  if (vatWeight.w > 0.0) m += vatWeight.w * vatBone(r0, xi.w);
  if (fr > 0.002) {
    int r1 = r0 + 1;
    mat4 n = vatWeight.x * vatBone(r1, xi.x);
    if (vatWeight.y > 0.0) n += vatWeight.y * vatBone(r1, xi.y);
    if (vatWeight.z > 0.0) n += vatWeight.z * vatBone(r1, xi.z);
    if (vatWeight.w > 0.0) n += vatWeight.w * vatBone(r1, xi.w);
    m = m * (1.0 - fr) + n * fr;
  }
  return m;
}
vec3 vatTurn(vec3 v, float a) {
  float c = cos(a);
  float s = sin(a);
  return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z);
}
`,pM=`
mat4 vatM = vatSkin(vatAnim.x);
if (vatAnim.z > 0.001) vatM = vatM * (1.0 - vatAnim.z) + vatSkin(vatAnim.y) * vatAnim.z;
float vatTw = vatExtra.x * vatTwist;
vVatFlash = vatAnim.w;
vVatDissolve = vatExtra.y;
vVatObj = position;
`,mM=`
transformed = (vatM * vec4(transformed, 1.0)).xyz;
transformed.z -= vatExtra.z * vatTwist;
transformed = vatTurn(transformed, vatTw);
`,gM=`
objectNormal = vatTurn(mat3(vatM) * objectNormal, vatTw);
#ifdef USE_TANGENT
objectTangent = vatTurn(mat3(vatM) * objectTangent, vatTw);
#endif
`,bM=`
varying float vVatDissolve;
varying vec3 vVatObj;
float vatNoise(vec3 p) {
  vec3 i = floor(p * 22.0);
  vec3 f = fract(p * 22.0);
  f = f * f * (3.0 - 2.0 * f);
  float n = 0.0;
  for (int k = 0; k < 8; k++) {
    vec3 o = vec3(float(k & 1), float((k >> 1) & 1), float((k >> 2) & 1));
    vec3 c = i + o;
    float h = fract(sin(dot(c, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    vec3 w = mix(1.0 - f, f, o);
    n += h * w.x * w.y * w.z;
  }
  return n;
}
`,xM=`
float vatN = vatNoise(vVatObj);
if (vVatDissolve > 0.0 && vatN < vVatDissolve * 1.08) discard;
`;function Vp(r,e){let t=r.vertexShader.replace("#include <skinning_pars_vertex>",`#include <skinning_pars_vertex>
${fM}`).replace("#include <skinbase_vertex>",pM).replace("#include <skinning_vertex>",mM);if(e&&(t=t.replace("#include <skinnormal_vertex>",gM)),!t.includes("vatSkin(vatAnim.x)"))throw new Error("VAT shader patch failed");r.vertexShader=t}function Wp(r){r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${bM}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
${xM}`)}function _M(r,e){const t=r.clone();if(!t.isMeshStandardMaterial)throw new Error(`VAT material "${r.name}" must be glTF PBR (MeshStandardMaterial)`);return t.onBeforeCompile=i=>{i.uniforms.vatTex={value:e},Vp(i,!0),Wp(i),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vVatFlash;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vVatFlash * vec3(1.0, 0.93, 0.82);
if (vVatDissolve > 0.0) totalEmissiveRadiance += (1.0 - smoothstep(0.0, 0.07, vatN - vVatDissolve * 1.08)) * vec3(0.55, 1.0, 0.92) * 1.6;`)},t.customProgramCacheKey=()=>`vat-color-${r.uuid}`,t}function vM(r){const e=new up({depthPacking:r0});return e.onBeforeCompile=t=>{t.uniforms.vatTex={value:r},Vp(t,!1),Wp(t)},e.customProgramCacheKey=()=>"vat-depth",e}class yM{constructor(e,t,n={}){this.bake=e,this.capacity=t,this.group.name=n.name??`crowd:${e.name}`,this.anim=new xn(new Float32Array(t*4),4),this.anim.setUsage(Qn),this.extra=new xn(new Float32Array(t*4),4),this.extra.setUsage(Qn),this.matrices=new xn(new Float32Array(t*16),16),this.matrices.setUsage(Qn),this.depth=vM(e.texture);for(const i of e.parts){const s=new vt;for(const[l,c]of Object.entries(i.geometry.attributes))s.setAttribute(l,c);if(s.setIndex(i.geometry.index),s.boundingSphere=i.geometry.boundingSphere,s.setAttribute("vatAnim",this.anim),s.setAttribute("vatExtra",this.extra),!s.getAttribute("vatTwist"))throw new Error(`crowd ${e.name}: part ${i.tag} lacks vatTwist`);const a=_M(i.material,e.texture),o=new as(s,a,t);o.instanceMatrix=this.matrices,o.name=`${e.name}:${i.tag}:${i.material.name}`,o.frustumCulled=!1,o.castShadow=n.castShadow??!0,o.receiveShadow=n.receiveShadow??!0,o.customDepthMaterial=this.depth,o.count=0,this.parts.push({tag:i.tag,mesh:o,material:a}),this.group.add(o)}}bake;capacity;group=new Xt;parts=[];anim;extra;matrices;depth;hidden=new Set;n=0;get full(){return this.n>=this.capacity}get size(){return this.n}tags(){return[...new Set(this.parts.map(e=>e.tag))]}boundsM=new Ke;boundsB=new Lt;worldBounds(e,t=0,n=this.n,i=this.visibleTags(),s=!1){e.makeEmpty();const a=this.matrices.array,o=this.anim.array,l=this.extra.array;for(let c=Math.max(0,t);c<Math.min(n,this.n);c++){if(l[c*4+1]>=1)continue;this.boundsM.fromArray(a,c*16);const h=l[c*4],u=l[c*4+2],d=o[c*4+2]>.001?[o[c*4],o[c*4+1]]:[o[c*4]];for(const f of d)s?this.bake.posedBounds(f,i,h,u,this.boundsB):this.bake.supportBounds(f,i,h,u,this.boundsB),e.union(this.boundsB.applyMatrix4(this.boundsM))}return e}instance(e){if(e<0||e>=this.n)throw new Error(`crowd instance ${e} out of range (${this.n})`);const t=this.anim.array,n=this.extra.array;return{matrix:new Ke().fromArray(this.matrices.array,e*16),rowA:t[e*4],rowB:t[e*4+1],blend:t[e*4+2],twist:n[e*4],dissolve:n[e*4+1],recoil:n[e*4+2]}}partStats(){return this.parts.map(e=>({tag:e.tag,mesh:e.mesh.name,count:e.mesh.count,visible:e.mesh.visible}))}partMeshes(e){return this.parts.filter(t=>t.tag===e).map(t=>t.mesh)}visibleTags(){return this.tags().filter(e=>!this.hidden.has(e))}setPartVisible(e,t){t?this.hidden.delete(e):this.hidden.add(e)}begin(){this.n=0}push(e,t,n=t,i=0,s=0,a=0,o=0,l=0){if(this.n>=this.capacity)return;const c=this.n++,h=this.extra.array;h[c*4]=a,h[c*4+1]=o,h[c*4+2]=l,h[c*4+3]=0,e.toArray(this.matrices.array,c*16);const u=this.anim.array;u[c*4]=t,u[c*4+1]=n,u[c*4+2]=i,u[c*4+3]=s}end(){this.matrices.needsUpdate=!0,this.anim.needsUpdate=!0,this.extra.needsUpdate=!0;for(const[e,t]of[[this.matrices,16],[this.anim,4],[this.extra,4]])e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(1,this.n)*t);for(const e of this.parts)e.mesh.count=this.n,e.mesh.visible=this.n>0&&!this.hidden.has(e.tag)}dispose(){for(const e of this.parts)e.material.dispose(),e.mesh.geometry.dispose(),e.mesh.dispose();this.depth.dispose(),this.group.removeFromParent()}}const vo=new I(0,14,29.5),yo=new I(0,0,-11.8),Xp=44,MM=new I;function SM(r,e){let t=Xp;for(let n=0;n<40&&(r.fov=t,r.aspect=e,r.updateProjectionMatrix(),r.position.copy(vo),r.lookAt(yo),r.updateMatrixWorld(),!(MM.set(4.8+.4,0,Kn).project(r).x<=.88));n++)t+=1}const wM={biome:"coastal",skyTop:5223664,skyMid:10213367,skyHorizon:14218239,fog:14218239,fogNear:62,fogFar:140,hemiSky:12577023,hemiGround:15915430,hemiIntensity:.75,sunColor:16769712,sunIntensity:2.9,sunOffset:[9,16,6],rimColor:9430015,rimIntensity:.6,rimOffset:[-8,6,-14],road:15326403,paint:16774880,kerb:12157519,kerbStripe:16050640,waterShallow:4182217,waterDeep:1806259,foam:16056315,sand:15980964,grass:9227102,rock:12036508,pillar:14930870,accent:16747069,accent2:15026239,lampGlow:16774084,exposure:1,studio:{sun:2.3,envSky:.04,envKey:12,hemi:0,rim:1.2,shadow:.85},gateGlass:{}},TM={biome:"port",skyTop:10470618,skyMid:12835814,skyHorizon:15134448,fog:15134448,fogNear:58,fogFar:130,hemiSky:14478066,hemiGround:12169894,hemiIntensity:1.1,sunColor:16774368,sunIntensity:1.9,sunOffset:[-7,18,8],rimColor:16767392,rimIntensity:.4,rimOffset:[8,6,-14],road:4871522,paint:16763196,kerb:13225683,kerbStripe:15906354,waterShallow:3116963,waterDeep:2058880,foam:15661306,sand:13616820,grass:9224046,rock:10197656,pillar:13225683,accent:15229007,accent2:3122586,lampGlow:16774084,exposure:1,studio:{sun:1.66,envSky:.18,envKey:10,hemi:0,rim:1.2,shadow:.85},gateGlass:{good:{emissiveIntensity:.9},bad:{emissiveIntensity:.9},mixed:{emissiveIntensity:.9,emissive:14221200}}},EM={biome:"dusk",skyTop:5983114,skyMid:15764075,skyHorizon:16763299,fog:16763299,fogNear:55,fogFar:125,hemiSky:12166880,hemiGround:15312762,hemiIntensity:1.05,sunColor:16759178,sunIntensity:2,sunOffset:[11,9,5],rimColor:16765562,rimIntensity:1.1,rimOffset:[-6,5,-16],road:12096628,paint:16771522,kerb:8213044,kerbStripe:16765562,waterShallow:15899514,waterDeep:5525647,foam:16773346,sand:15780250,grass:7317600,rock:9403532,pillar:9067837,accent:16765562,accent2:7268256,lampGlow:16765562,exposure:1,studio:{sun:2.069,envSky:.9,envKey:54,hemi:.25,rim:1.2,shadow:.62},gateGlass:{}},uf={coastal:wM,port:TM,dusk:EM};function df(r){const e=r.toLowerCase();return/port|dock|harbo|industr|clang|crane|container/.test(e)?"port":/dusk|extract|sunset|night|jetty|last/.test(e)?"dusk":"coastal"}const Ds=Math.PI/180,ff=35*Ds,pf=.16,wr=.06,mf=.25,Wl=.35,AM={trooper:on.maxDrawn+24,walker:200,runner:90,skitterer:60,brute:36},gf={walker:"walker",runner:"runner",flanker:"skitterer",brute:"brute"},RM=1,CM=2.2,PM={rifle:{color:16769126,len:.5,width:.07},smg:{color:16773274,len:.42,width:.05},shotgun:{color:16765002,len:.24,width:.1},lancer:{color:12577279,len:1.4,width:.08},rocket:{color:16747069,len:.55,width:.15}},Wn={foam:15662326,spray:12578528,mist:6273188,kelp:4156218};function hi(r){let e=r*2654435761>>>0;return e^=e>>>15,e=Math.imul(e,2246822519)>>>0,(e>>>0)/4294967296}const Tn=(r,e,t)=>r<e?e:r>t?t:r,oh=r=>Math.atan2(Math.sin(r),Math.cos(r)),Xl=(r,e,t,n)=>r+oh(e-r)*(1-Math.exp(-t*n));function IM(r,e,t){const n={},i=performance.now(),s={lightingPost:"renderer:lighting-post",bossActor:"renderer:boss-build",environment:"renderer:environment",lightingApplyPmrem:"renderer:pmrem",compileAsync:"renderer:compile",textureUpload:"renderer:texture-upload",warmFrame:"renderer:warm-frame"},a=(A,F)=>{const U=performance.now();n[A]=Math.round((U-F)*10)/10;const G=A.startsWith("bake_")?`renderer:crowd-bake:${A.slice(5)}`:s[A];return G&&performance.measure(`${zo}${G}`,{start:F,end:U}),U},o=new Map;try{for(const A of Object.keys(_o)){const F=t.characters[A];if(!F)throw new Error(`3D model "characters/${A}" was not provided`);const U=performance.now();o.set(A,dM(A,F)),a(`bake_${A}`,U)}}catch(A){for(const F of o.values())F.dispose();throw A}const l=A=>o.get(A),c=new yy({canvas:r,antialias:!1,alpha:!1,powerPreference:"high-performance"}),h=e.maxPixelRatio??1.75;c.setPixelRatio(Math.min(window.devicePixelRatio||1,h)),c.outputColorSpace=Et,c.info.autoReset=!1;let u=e.reducedMotion??!1;const d=e.tier??W3(),f=new Kf,m=new nn(Xp,.6,.5,450);m.position.copy(vo),m.lookAt(yo);let b=performance.now();const g=new V3(c,f,d),p=new iM(c,f,m);b=a("lightingPost",b);const x=new Map;for(const A of o.keys()){const F=new yM(l(A).bake,AM[A],{name:`crowd:${A}`});x.set(A,F),f.add(F.group)}const v=x.get("trooper"),_=l("trooper"),w=new P3(t.boss.gltf,t.boss.manifest);a("bossActor",b);let E=null;w.onImpact=(A,F)=>{const U=E??{x:A,z:F+12};y.push({x0:A,z0:F,x1:U.x,z1:U.z,t0:Le,dur:rh}),L.emit({x:A,y:.2,z:F,count:16,color:[14208960,12169378],speed:3,up:2,size:.7,grow:1.4,life:.9,soft:1,alpha:.55,gravity:-.2,drag:2.5,spread:.8}),ie(.35)},f.add(w.root);const R=new F3(48);f.add(R.mesh);const L=new rf(900,!1,3),M=new rf(500,!0,6),S=new Mr(new Ln(1,1),420,{radial:!0,renderOrder:1}),D=new Mr(new qh(.82,1,48),64,{renderOrder:2}),z=new Mr(C2(),160,{renderOrder:2}),O=new Mr(new Ln(1,1),24,{renderOrder:1}),$=new Mr(new Ln(1,1),432,{renderOrder:7,depthTest:!1}),V=new I2(12),W=new B3((A,F,U,G,ee)=>V.spawn(A,F,U,G,ee,A.startsWith("+"))),H=new js(.5,1,2,6);H.rotateX(Math.PI/2);const ae=new Wt({toneMapped:!1}),ge=new as(H,ae,500);ge.instanceColor=new xn(new Float32Array(500*3),3),ge.frustumCulled=!1,ge.count=0,ge.renderOrder=5,f.add(L.mesh,M.mesh,S.mesh,D.mesh,z.mesh,O.mesh,$.mesh,V.group,ge);const be=new E3;f.add(be.group),be.onShatter=(A,F,U,G)=>{M.emit({x:A,y:F,z:U,count:28,color:[G,16777215],speed:6,up:3,size:.12,life:.7,stretch:1.5,soft:.4,gravity:9,spread:1.4,intensity:1.4,bias:[0,0,2]}),ue.push({x:A,z:U,t0:Le,dur:.45,r0:.6,r1:3.2,color:G})};let xe=null,je=uf.coastal,We="coastal",Le=0,st=0,te="",oe=null,De=0,qe=0,Ue=0,Qe=1,Q=1,re=-10,X=0,ne={calls:0,triangles:0},J=0;const he=[],C=[],Ce=new Map,Te=[],Oe=[],ue=[];let P=[];const y=[],N=new Ke,j=new Bt,se=new I(1,1,1),Z=new I(0,1,0),Ge=new Bt,de=new I,Ie=new I,$e=new we,fe=new Lt,Ee=new Lt;let ze=0;const He=new Lt,Me=new Map,et=_.bake.socket("muzzle_rifle",_.rowAtTime("idle",0),de).y;function k(A,F,U,G){return{role:A,clock:0,prevRole:null,prevClock:0,fadeT:1,yaw:F,twist:0,flinch:0,strikeAt:-1,seen:Le,x:U,z:G,inst:-1,crowd:null,rowA:0,rowB:0,blend:0}}function Fe(A,F,U){A.role!==F&&(A.prevRole=A.role,A.prevClock=A.clock,A.fadeT=0,A.role=F,U&&(A.clock=0))}function _e(A,F,U){const G=U(F.role,F.clock);return F.prevRole&&F.fadeT<1&&A.has(F.prevRole)?{rowA:G,rowB:U(F.prevRole,F.prevClock),blend:1-F.fadeT}:{rowA:G,rowB:G,blend:0}}function ke(A){const F=df(A);if(pe(),De=0,te="",oe=null,xe&&F===We)return;We=F,je=uf[We],xe&&xe.dispose();const U=performance.now();xe=new q2(je),a("environment",U),f.add(xe.group),f.background=new we(je.skyHorizon),f.fog=new Ph(je.fog,je.fogNear,je.fogFar);const G=performance.now();g.apply(je),a("lightingApplyPmrem",G),c.toneMappingExposure=je.exposure,be.setGlass(je.gateGlass),w.setBiome(We)}function pe(){L.clear(),M.clear(),V.clear(),W.reset(),Te.length=0,Oe.length=0,ue.length=0,y.length=0,E=null,be.reset(),w.reset(),he.length=0,C.length=0,Ce.clear(),X=0,qe=0,re=-10}function ie(A){u||(qe=Math.min(1,qe+A))}function ye(A,F,U,G){L.emit({x:A,y:F,z:U,count:Math.round(14*G),color:[Wn.foam,Wn.spray],speed:3.2*Math.sqrt(G),up:3.5,size:.11*Math.sqrt(G),life:.75,stretch:1.2,soft:.5,gravity:11,spread:.35*G}),L.emit({x:A,y:F,z:U,count:Math.round(5*G),color:Wn.mist,speed:.9,up:.8,size:.5*G,grow:1.4,life:.9,soft:1,alpha:.45,gravity:-.3,drag:3,spread:.3*G}),L.emit({x:A,y:F,z:U,count:2+Math.round(G),color:Wn.kelp,speed:2.4,up:3,size:.13,life:1,stretch:.8,soft:.3,gravity:10})}function Ze(A,F){switch(A.type){case"volley":re=Le;break;case"hit":if(A.target==="enemy")L.emit({x:A.x,y:.95,z:A.z+.25,count:4,color:[Wn.foam,Wn.spray],speed:2.2,up:1.6,size:.07,life:.32,stretch:1.4,soft:.45,gravity:10});else if(A.target==="boss"){L.emit({x:A.x+(hi(A.id)-.5)*2,y:2.4+hi(A.id+7)*1.4,z:A.z+1.2,count:3,color:Wn.spray,speed:2,up:1.2,size:.08,life:.35,stretch:1.2,gravity:9}),hi(A.id+3)<.3&&M.emit({x:A.x+(hi(A.id)-.5)*2,y:3.2,z:A.z+1.2,count:2,color:16761466,speed:3,up:1,size:.05,life:.22,stretch:2,soft:.3,intensity:1.6});const U=F.boss;U&&W.bossHit(A.damage,U.x,Br*.62,U.z,2.6,Le)}else M.emit({x:A.x,y:1.4,z:A.z+.1,count:2,color:[12445439,16777215],speed:1.5,up:1.5,size:.06,life:.25,soft:.5,intensity:1.2});break;case"kill":{if(A.kind!=="barrel"){const U=gf[A.kind],G=Ce.get(A.enemyId);Te.push({crowd:U,x:A.x,z:A.z,yaw:G?.yaw??0,t0:Le,death:l(U).duration("death")});const ee=_o[U].height;ye(A.x,ee*.55,A.z,A.kind==="brute"?1.8:1),W.kill(A.points,A.x,ee,A.z,Le)}else W.kill(A.points,A.x,1,A.z,Le);Ce.delete(A.enemyId);break}case"squadLoss":{const U=Math.min(A.amount,8);for(let G=0;G<U;G++){const ee=ji(F.squad+A.amount).slots,me=ee[Math.min(ee.length-1,F.squad+G)],Se=A.x+(me?.dx??0),ce=me?.rootZ??on.frontRootZ;Te.push({crowd:"trooper",x:Se,z:ce,yaw:Math.PI,t0:Le+G*.04,death:_.duration("death")}),M.emit({x:Se,y:.9,z:ce,count:6,color:[3107839,15855334,16777215],speed:2.4,up:2.4,size:.06,life:.5,stretch:1.4,soft:.4,intensity:1.3})}ie(.3);break}case"enemyWindup":ue.push({x:A.x,z:A.z,t0:Le,dur:Math.max(.15,A.duration),r0:1.3,r1:.45,color:16732743});break;case"enemyStrike":{const U=Ce.get(A.enemyId);U&&(U.strikeAt=Le);const G=F.player,ee=Tn(A.x,G.x-G.halfWidth,G.x+G.halfWidth),me=Tn(A.z,Math.min(G.frontZ,G.backZ),Math.max(G.frontZ,G.backZ)),Se=(A.x+ee)/2,ce=(A.z+me)/2;A.hit?(M.emit({x:Se,y:.9,z:ce,count:16,color:[16765562,16747069,16777215],speed:5,up:2.5,size:.07,life:.32,stretch:1.8,soft:.35,gravity:8,intensity:2,spread:.15}),L.emit({x:Se,y:.7,z:ce,count:6,color:[Wn.foam,Wn.spray],speed:2.2,up:1.8,size:.3,grow:1.2,life:.45,soft:1,alpha:.6,gravity:2,drag:3}),ue.push({x:ee,z:me,t0:Le,dur:.3,r0:.25,r1:1.4,color:16732743}),ie(.15)):L.emit({x:Se,y:.8,z:ce,count:5,color:Wn.spray,speed:1.6,up:.8,size:.25,grow:1.4,life:.35,soft:1,alpha:.35,gravity:0,drag:3});break}case"gate":{be.onGateChosen(A.gateId,A.rowId);const U=zp[A.tone];ue.push({x:F.player.x,z:F.player.frontZ+1,t0:Le,dur:.5,r0:.5,r1:3.4,color:U}),V.spawn(A.label,F.player.x,2.8,F.player.frontZ+.5,A.tone==="bad"?"#FF8A80":A.tone==="mixed"?"#FFD27A":"#9FD9FF");break}case"gateGrow":be.onGrow(A.gateId,Le);break;case"explosion":M.emit({x:A.x,y:.7,z:A.z,count:40,color:[16765562,16747069,16777215],speed:7,up:4,size:.09,life:.6,stretch:1.6,soft:.35,intensity:2,spread:.5}),L.emit({x:A.x,y:.8,z:A.z,count:14,color:[7037532,9274492,4867136],speed:1.8,up:1.6,size:.7,grow:1.6,life:1.3,soft:1,alpha:.6,gravity:-.6,drag:2.5,spread:.8}),ue.push({x:A.x,z:A.z,t0:Le,dur:.4,r0:.4,r1:Math.max(1.5,A.radius),color:16756768}),ie(.5);break;case"bossSlam":ue.push({x:A.x,z:A.z,t0:Le,dur:.5,r0:.5,r1:3,color:16732743}),L.emit({x:A.x,y:.3,z:A.z,count:18,color:[14208960,je.road],speed:3.5,up:2,size:.6,grow:1.2,life:.9,soft:1,alpha:.55,gravity:-.2,drag:2.5,spread:.9}),ie(.6);break;case"bossEnrage":F.boss&&L.emit({x:F.boss.x,y:Br*.82,z:F.boss.z,count:16,color:16056315,speed:1.2,up:2.5,size:.6,grow:2,life:1.4,soft:1,alpha:.5,gravity:-1.5,drag:1.5,spread:.8});break;case"bossDefeated":{const{x:U,z:G}=A;for(let ee=0;ee<3;ee++)Oe.push({at:Le+.4+ee*.25,fn:()=>{ye(U+(ee-1)*1.6,2.5+ee*.6,G,2.5),ie(.35)}});Oe.push({at:Le+1.4,fn:()=>{ye(U,2.6,G,5),ue.push({x:U,z:G,t0:Le,dur:.6,r0:1,r1:7,color:10479832}),ie(.7)}});break}case"laneChange":{const U=A.lane>F.player.lane?-1:A.lane<F.player.lane?1:0;for(const G of[-1,1])L.emit({x:F.player.x+G*(F.player.halfWidth+.2),y:.12,z:F.player.frontZ+.4,count:3,color:[15326403,14208440],speed:1,up:.8,size:.35,grow:1.2,life:.5,soft:1,alpha:.4,gravity:0,drag:3,bias:[U*1.2,0,.5]});break}}}function yt(A){const F=A.player;return Math.atan2(F.aimX,F.aimZ)}function gt(A,F){const U=A.player,G=ji(A.squad);P=G.slots;const ee=G.drawn;if(ze=ee,ee>0?Ee.set(Ie.set(U.x-U.halfWidth,0,Math.min(U.frontZ,U.backZ)),de.set(U.x+U.halfWidth,1.45,Math.max(U.frontZ,U.backZ))):Ee.makeEmpty(),ee>X)for(let nt=X;nt<ee;nt++)he[nt]=Le;if(ee>X&&X>0)for(let nt=X;nt<ee;nt++){const Mt=P[nt];Mt&&ue.push({x:U.x+Mt.dx,z:Mt.rootZ,t0:Le,dur:.35,r0:.1,r1:.7,color:3057919})}X=ee;for(const nt of Hp)v.setPartVisible(`weapon_${nt}`,nt===A.weapon.id);const me=`muzzle_${A.weapon.id}`,Se=_.bake.socketTwist(me),ce=A.status==="running"||A.status==="paused",Re=A.status==="won",ve=Le-re,Ve=U.lastHurtAt>=0&&A.elapsed-U.lastHurtAt<wr,tt=Tn(U.vx/Yl,-1,1);let Ct=0,yn=0,Ht=0;P.forEach((nt,Mt)=>{const Ut=U.x+nt.dx,Pt=nt.rootZ;let ht=C[Mt];ht||(ht=k(ce?"move":"idle",Math.PI,Ut,Pt),ht.clock=hi(Mt+1)*2,C[Mt]=ht);const Mn=ce?yt(A):Math.PI,Qt=oh(Mn-Math.PI),Xo=Tn(Qt,-ff,ff);ht.twist=Xl(ht.twist,Xo,14,F),ht.yaw=Xl(ht.yaw,Math.PI+(Qt-Xo),9,F);const cs=oh(ht.yaw-Math.PI);let Ni="idle";const nu=1;let iu=!1;if(Re)Ni=_.has("victory")?"victory":"idle";else if(ce&&A.status==="running"){const us=Math.abs(cs)>50*Ds?Math.sign(cs):-Math.sign(tt),pa=Math.abs(cs)>50*Ds||Math.abs(tt)>.45;Math.abs(cs)>130*Ds?(Ni="move",iu=!0):pa&&_.has("strafeL")&&_.has("strafeR")?Ni=us>0?"strafeR":"strafeL":Ni="move"}else ce&&(Ni=ht.role);Ni!==ht.role&&Fe(ht,Ni,!1),ht.clock+=F*nu,ht.prevRole&&(ht.prevClock+=F*nu),ht.fadeT=Math.min(1,ht.fadeT+F/pf);const Jp=(us,pa)=>{if(us==="move"&&iu){const ou=_.duration("move");return _.rowAtTime("move",ou-pa%ou-.001)}return _.rowAtTime(us,pa)},{rowA:su,rowB:Zp,blend:Qp}=_e(_,ht,Jp),ru=Tn((Le-(he[Mt]??-10))/.3,0,1),hs=ve-hi(Mt+99)*.03,au=ce&&hs>=0&&hs<.09?Math.sin(hs/.09*Math.PI)*.05:0;if(j.setFromAxisAngle(Z,ht.yaw),de.set(Ut,0,Pt),N.compose(de,j,se),v.push(N,su,Zp,Qp,Ve?.5:0,ht.twist,1-ru,au),S.pushFlat(Ut,.02,Pt,.9,.9,0,1319743,.32*ru),hs>=0&&hs<.06&&nt.rank<2&&!Re){_.bake.socket(me,su,Ie),Ie.z-=au*Se,Ie.applyAxisAngle(Z,ht.twist*Se).applyMatrix4(N);const us=1-hs/.06;M.emit({x:Ie.x,y:Ie.y,z:Ie.z,count:1,color:16769696,speed:0,size:.16+.14*us,life:.06,soft:.8,gravity:0,intensity:2.4}),Ct++,yn+=Ie.x,Ht+=Ie.z}});const fn=g.muzzle;Ct>0?(fn.position.set(yn/Ct,et+.2,Ht/Ct),fn.intensity=6):fn.intensity=Math.max(0,fn.intensity-120*Math.max(F,1/120))}function vn(A,F,U,G){if(G.status==="ready")return F.has("idle")?"idle":"move";switch(A.mode){case"windup":return"windup";case"recover":return U.strikeAt>=0&&Le-U.strikeAt<F.duration("strike")?"strike":Math.hypot(A.vx,A.vz)>.3?"pursue":F.has("idle")?"idle":"pursue";case"pursue":return Math.hypot(A.vx,A.vz)>.3||!F.has("idle")?"pursue":"idle";default:return"move"}}function Dn(A,F,U){if(A.kind==="barrel"){const Mn=Tn((A.z+30)/35,0,1),Qt=Math.sin(Le*(4+Mn*18)*Math.PI)>.4&&Mn>.15,cs=(A.lastHitAt>=0?F.elapsed-A.lastHitAt:99)<wr?1.8:Qt?1.35:1;j.setFromAxisAngle(de.set(1,0,0),A.z/Qr),de.set(A.x,Qr,A.z),N.compose(de,j,se),R.push(N,cs),S.pushFlat(A.x,.02,A.z,1.6,1.1,0,1319743,.4);return}const G=gf[A.kind],ee=l(G),me=x.get(G),Se=Math.atan2(A.faceX,A.faceZ);let ce=Ce.get(A.id);ce||(ce=k("move",Se,A.x,A.z),ce.clock=hi(A.id)*4,Ce.set(A.id,ce)),ce.seen=Le,ce.x=A.x,ce.z=A.z,ce.yaw=Xl(ce.yaw,Se,20,U);const Re=vn(A,ee,ce,F);Re!==ce.role&&Fe(ce,Re,Re==="windup"||Re==="strike"||Re==="hit");const ve=F.status==="running"?cn:0,Ve=Math.hypot(A.vx,A.vz-ve),tt=ce.role==="move"||ce.role==="pursue",Ct=tt?ee.naturalSpeed(ce.role):0,yn=Ct>0?Tn(Ve/Ct,RM,CM):1;ce.clock+=U*(tt?yn:1),ce.prevRole&&(ce.prevClock+=U*yn),ce.fadeT=Math.min(1,ce.fadeT+U/pf);const Ht=(Mn,Qt)=>Mn==="windup"?ee.rowAtProgress("windup",A.mode==="windup"?A.attackProgress:1):Mn==="strike"?ee.rowAtTime("strike",ce.strikeAt>=0?Le-ce.strikeAt:Qt):ee.rowAtTime(Mn,Qt),{rowA:fn,rowB:nt,blend:Mt}=_e(ee,ce,Ht),Ut=A.lastHitAt>=0?F.elapsed-A.lastHitAt:99,Pt=Ut<wr?.5*(1-Ut/wr):0;Ut<.02&&(ce.flinch=1),ce.flinch=Math.max(0,ce.flinch-U/.18);const ht=F.status==="ready"?1:Tn((F.elapsed-A.spawnedAt)/.35,0,1);j.setFromEuler(Go.set(-ce.flinch*6*Ds,ce.yaw,0,"YXZ")),de.set(A.x,0,A.z),N.compose(de,j,se),me.push(N,fn,nt,Mt,Pt,0,1-ht,0),ce.inst=me.size-1,ce.crowd=G,ce.rowA=fn,ce.rowB=nt,ce.blend=Mt,S.pushFlat(A.x,.02,A.z,A.radius*2.4,A.radius*2.4,0,1319743,.34*ht),A.kind==="brute"&&A.maxHp>0&&Ho(A.x,_o.brute.height+.5,A.z,A.hp/A.maxHp)}const Go=new _n;function ra(A){for(let F=Te.length-1;F>=0;F--){const U=Te[F],G=Le-U.t0;if(G<0)continue;const ee=U.death+mf+Wl;if(G>=ee){Te.splice(F,1);continue}const me=l(U.crowd),Se=x.get(U.crowd);if(Se.full)continue;const ce=me.rowAtTime("death",G),Re=Tn((G-U.death-mf)/Wl,0,1);Re>0&&Re-A/Wl<=0&&U.crowd!=="trooper"&&ye(U.x,.3,U.z,U.crowd==="brute"?1.4:.7),j.setFromAxisAngle(Z,U.yaw),de.set(U.x,0,U.z),N.compose(de,j,se),Se.push(N,ce,ce,0,G<wr?.9:0,0,Re,0),S.pushFlat(U.x,.02,U.z,1.2,1.2,0,1319743,.3*(1-Re))}}function sr(A,F){for(const U of A.enemies)Dn(U,A,F);if(F>0)for(const[U,G]of Ce)G.seen<Le&&Ce.delete(U);ra(F)}function Ho(A,F,U,G){const me=Math.ceil(Tn(G,0,1)*12),Se=Ie.set(A,F,U);for(let ce=0;ce<12;ce++){const Re=Math.PI/2-ce/12*Math.PI*2;de.set(Math.cos(Re)*.42,Math.sin(Re)*.42,0).applyQuaternion(Ge).add(Se),j.copy(Ge).multiply(aa.setFromAxisAngle(ni,Re)),N.compose(de,j,oa.set(.12,.17,1)),$.push(N,ce<me?7268256:1319743,ce<me?1:.55)}}const aa=new Bt,oa=new I,ni=new I(0,0,1);function rr(A,F){const U=A.boss,G=A.telegraphs.find(ee=>ee.kind==="slam")??null;G&&(E={x:G.x,z:G.z}),w.update(U,G,A.elapsed,Le,F,A.player.frontZ),He.makeEmpty(),U&&w.root.visible&&(S.pushFlat(U.x,.03,U.z,6.5,4.2,0,1319743,.3),He.setFromObject(w.root,!1),U.phase==="enraged"&&Math.floor(Le*10)%3===0&&L.emit({x:U.x+(hi(Math.floor(Le*10))-.5)*1.6,y:Br*.8,z:U.z,count:1,color:16056315,speed:.3,up:1.6,size:.45,grow:1.6,life:1.1,soft:1,alpha:.4,gravity:-1.2,drag:1.2}))}function la(A){let F=0;const U=Ie.set(0,0,-1),G=new I,ee=new I;for(const me of A.bullets){if(F>=499)break;const Se=PM[me.weapon];G.set(me.vx,0,me.vz),G.lengthSq()<1e-6&&G.set(0,0,-1),G.normalize(),j.setFromUnitVectors(U,G);const ce=Se.width;ee.set(ce,ce,Se.len+ce),de.set(me.x,me.weapon==="rocket"?et+.1:et,me.z),N.compose(de,j,ee),ge.setMatrixAt(F,N),ge.setColorAt(F,$e.setHex(Se.color).multiplyScalar(1.8)),F++,(me.weapon==="lancer"||me.weapon==="rocket")&&(ee.set(ce*.45,ce*.45,Se.len*.85),N.compose(de,j,ee),ge.setMatrixAt(F,N),ge.setColorAt(F,$e.setRGB(2.2,2.2,2.2)),F++),me.weapon==="rocket"&&A.status==="running"&&hi(me.id+Math.floor(Le*30))<.35&&L.emit({x:me.x,y:et+.1,z:me.z+.4,count:1,color:15262422,speed:.2,up:.4,size:.25,grow:1.5,life:.5,soft:1,alpha:.5,gravity:0,drag:2})}ge.count=F,ge.visible=F>0,ge.instanceMatrix.needsUpdate=!0,ge.instanceColor&&(ge.instanceColor.needsUpdate=!0)}function ca(A){for(const F of A.telegraphs){const U=F.duration>0?Tn(F.remaining/F.duration,0,1):0,G=2+(1-U)*4,ee=.55+.45*Math.sin(Le*G*Math.PI*2),me=ln[F.lane];if(F.kind==="flank"){const Se=F.side===0?1:F.side;for(let ce=0;ce<4;ce++){const Re=(Le*1.6+ce/4)%1,ve=Se*(5.4-Re*5.4)+me*Re;z.pushFlat(ve,.04,F.z,1.1,.9,Se>0?-Math.PI/2:Math.PI/2,16732743,(.35+.65*ee)*Math.sin(Re*Math.PI))}z.pushFlat(Se*5.6,.3,F.z,1.4,1.2,Se>0?-Math.PI/2:Math.PI/2,16732743,ee),O.pushFlat((Se*4.8+me)/2,.025,F.z,Math.abs(Se*4.8-me),1.2,0,16774880,.35*ee)}else if(F.kind==="rush"){O.pushFlat(me,.025,-17,2.6,48,0,16732743,.16+.14*ee);for(let Se=0;Se<8;Se++){const ce=-40+(Le*10+Se*6)%48;z.pushFlat(me,.035,ce,1.4,1.1,Math.PI,16732743,.5*ee)}}else{const Se=.9+U*2.4;D.pushFlat(F.x,.04,F.z,Se,Se,0,16732743,.4+.6*ee),O.pushFlat(F.x,.03,F.z,1.8,1.8,Math.PI/4,16774880,.25*ee)}}}function os(A){for(let F=y.length-1;F>=0;F--){const U=y[F],G=(Le-U.t0)/Math.max(.001,U.dur);if(G>=1){y.splice(F,1);continue}const ee=U.x0+(U.x1-U.x0)*G,me=U.z0+(U.z1-U.z0)*G,Se=Math.atan2(U.x1-U.x0,U.z1-U.z0);D.pushFlat(ee,.05,me,1.4+G*.6,.9,Se,16732743,.85*(1-G*.4)),A>0&&L.emit({x:ee,y:.15,z:me,count:2,color:[14208960,15326403],speed:1.6,up:2.2,size:.35,grow:1,life:.5,soft:1,alpha:.5,gravity:2,drag:2,spread:.5})}}function ha(){for(let A=ue.length-1;A>=0;A--){const F=ue[A];if(!F)continue;const U=(Le-F.t0)/F.dur;if(U>=1){ue.splice(A,1);continue}const G=F.r0+(F.r1-F.r0)*(1-Math.pow(1-U,3));D.pushFlat(F.x,.06,F.z,G,G,0,F.color,1-U)}}function ls(A,F){SM(m,Qe/Math.max(1,Q));const U=A.player.x*.2;Ue+=(U-Ue)*(1-Math.exp(-F/.085));const G=Ie.set(Ue,yo.y,yo.z),ee=de.set(Ue,vo.y,vo.z);if(A.status==="ready"&&!u){const me=Math.sin(st/14*Math.PI*2)*4*Ds;ee.sub(G).applyAxisAngle(Z,me).add(G),ee.y+=Math.sin(st/9*Math.PI*2)*.3}if(qe>0){const me=qe*qe*.18;ee.x+=(Math.sin(st*71)+Math.sin(st*37))*.5*me,ee.y+=(Math.sin(st*53+1)+Math.sin(st*29))*.5*me,qe=Math.max(0,qe-F/.4)}m.position.copy(ee),m.lookAt(G),m.updateMatrixWorld(),Ge.copy(m.quaternion)}function ua(A){Me.clear();for(const F of A.gates){const U=Math.min(F.halfWidth,At.width/2);Me.set(F.id,new Lt(new I(F.x-U,0,F.z-At.depth/2),new I(F.x+U,At.height,F.z+At.depth/2)))}}let ar=0;const da=new Lt;function Vo(A,F){const U=performance.now();xe?df(A.levelId)!==We&&ke(A.levelId):ke(A.levelId);const G=Tn(Number.isFinite(F)?F:0,0,.1),ee=A.status==="paused",me=ee?0:G;st+=G,Le+=me;const Se=`${A.levelId}#${A.runId}`;if((Se!==te||A!==oe)&&(te=Se,oe=A,pe(),De=0),!ee){for(const Re of A.events)Re.runId!==A.runId||Re.id<=De||(De=Re.id,Ze(Re,A));for(let Re=Oe.length-1;Re>=0;Re--){const ve=Oe[Re];ve&&ve.at<=Le&&(Oe.splice(Re,1),ve.fn())}}ls(A,ee?0:G),xe?.update(st,A.elapsed*cn);for(const Re of x.values())Re.begin();if(R.begin(),S.begin(),D.begin(),z.begin(),O.begin(),$.begin(),gt(A,me),sr(A,me),r.dataset.animProbe==="1"){const Re=ve=>Math.round(ve*100)/100;r.dataset.animTrace=JSON.stringify({frame:ar,t:Re(Le),enemies:A.enemies.filter(ve=>ve.kind!=="barrel").slice(0,8).map(ve=>{const Ve=Ce.get(ve.id);return{id:ve.id,kind:ve.kind,mode:ve.mode,v:Re(Math.hypot(ve.vx,ve.vz)),role:Ve?.role,prev:Ve?.prevRole,clock:Ve?Re(Ve.clock):null,rowA:Ve?Re(Ve.rowA):null,rowB:Ve?Re(Ve.rowB):null,blend:Ve?Re(Ve.blend):null,rect:Ve?.crowd&&Ve.inst>=0?ii(x.get(Ve.crowd).worldBounds(da,Ve.inst,Ve.inst+1,["body"],!0)):null,ext:Ve?.crowd&&Ve.inst>=0?da.getSize(Ie).toArray().map(Re):null}})})}rr(A,me),la(A),ca(A),ha(),os(me),be.update(A,Le,st),ua(A),J=0;for(const Re of x.values())Re.end(),J+=Re.size;R.end(),S.end(),D.end(),z.end(),O.end(),$.end(),L.update(me),M.update(me),W.update(Le);let ce;V.update(me,Re=>{if(ce??=[...Me.keys()].flatMap(Ve=>{const tt=Y(Ve);return tt?[tt]:[]}),ce.length===0)return!1;const ve=ii(new Lt().setFromCenterAndSize(Re.position,new I(Re.scale.x,Re.scale.y,Re.scale.x)));return!!ve&&ce.some(Ve=>ve.x<Ve.x+Ve.w&&ve.x+ve.w>Ve.x&&ve.y<Ve.y+Ve.h&&ve.y+ve.h>Ve.y)}),c.info.reset(),p.render(G),ne={calls:c.info.render.calls,triangles:c.info.render.triangles},n.firstFrame===void 0&&(c.getContext().finish(),n.firstFrame=Math.round((performance.now()-U)*10)/10,r.dataset.renderTiming=JSON.stringify(n)),++ar%30===0&&(r.dataset.drawCalls=String(ne.calls),r.dataset.triangles=String(ne.triangles),r.dataset.geometries=String(c.info.memory.geometries),r.dataset.textures=String(c.info.memory.textures),r.dataset.biome=We,r.dataset.pixelRatio=c.getPixelRatio().toFixed(2),r.dataset.actors=String(J),r.dataset.renderTier=d)}function fa(A,F){Qe=Math.max(1,Math.floor(A)),Q=Math.max(1,Math.floor(F));const U=Math.min(window.devicePixelRatio||1,h);c.setPixelRatio(U),c.setSize(Qe,Q,!1),p.setSize(Qe,Q,U),m.aspect=Qe/Q,m.updateProjectionMatrix()}const Fi=new I;function ii(A){if(A.isEmpty())return null;let F=1/0,U=1/0,G=-1/0,ee=-1/0;for(let ve=0;ve<8;ve++){if(Fi.set(ve&1?A.max.x:A.min.x,ve&2?A.max.y:A.min.y,ve&4?A.max.z:A.min.z),Fi.clone().applyMatrix4(m.matrixWorldInverse).z>-m.near)return null;Fi.project(m);const Ve=(Fi.x+1)/2*Qe,tt=(1-Fi.y)/2*Q;F=Math.min(F,Ve),U=Math.min(U,tt),G=Math.max(G,Ve),ee=Math.max(ee,tt)}const me=Math.max(0,F),Se=Math.max(0,U),ce=Math.min(Qe,G),Re=Math.min(Q,ee);return ce<=me||Re<=Se?null:{x:me,y:Se,w:ce-me,h:Re-Se}}function Wo(A){for(let F=A;F;F=F.parent)if(!F.visible)return!1;return!0}function T(){const A=new Set;return f.traverseVisible(F=>{const U=F;if(!U.isMesh&&!F.isSprite&&!F.isPoints||F.isInstancedMesh&&F.count===0)return;const G=Array.isArray(U.material)?U.material:[U.material];for(const ee of G)ee&&A.add(ee.type)}),[...A].sort()}function B(){const A=[],F=[];for(const U of be.group.children){const G=U.userData.gateId;if(typeof G!="number"||!Wo(U))continue;const ee=new Set;let me=0;U.traverseVisible(Se=>{if(!Se.isMesh)return;const ce=Se.userData.gatePart;ce==="decal"?me++:ee.add(typeof ce=="string"?ce:`untagged:${Se.name||Se.type}`)}),A.push({id:G,parts:[...ee].sort()}),F.push({id:G,count:me})}return{parts:A,decals:F}}function Y(A){const F=be.group.children.find(Se=>Se.userData.gateId===A&&Se.visible);if(!F)return null;let U=null;if(F.traverse(Se=>{!U&&Se.userData.gatePart==="slab"&&Se.parent&&(U=Se.parent)}),!U)return null;const G=U;G.updateWorldMatrix(!0,!1);const ee=At.width/2-At.bevel,me=new Lt(new I(-ee,At.bevel,Zr),new I(ee,At.height-At.lip,Zr)).applyMatrix4(G.matrixWorld);return ii(me)}function K(){const A=B();return{models:[...[...o.keys()].map(F=>`characters/${F}`),"bosses/harbor-warden"],materialTypes:T(),gates:[...Me].map(([F,U])=>({id:F,rect:ii(U),face:Y(F)})),gateParts:A.parts,gateDecals:A.decals,boss:ii(He),squad:ii(v.worldBounds(fe,0,ze)),squadDrawn:ze,squadHit:ii(Ee)}}let q=null,Ae=!1;function Be(){return q||(q=(async()=>{xe||ke(We),be.prewarm(),m.updateMatrixWorld();const A=c.getRenderTarget();c.setRenderTarget(p.sceneTarget);try{const ee=performance.now();await c.compileAsync(f,m),a("compileAsync",ee)}finally{Ae||c.setRenderTarget(A)}if(Ae)return;N.makeTranslation(0,-60,0);for(const ee of x.values())ee.begin(),ee.push(N,0),ee.end();R.begin(),R.push(N,1),R.end(),w.root.visible=!0,w.root.position.set(0,-60,0);const F=performance.now(),U=new Set;f.traverse(ee=>{const me=ee.material;if(me)for(const Se of Array.isArray(me)?me:[me])for(const ce of Object.values(Se))ce?.isTexture&&U.add(ce)});for(const ee of U)c.initTexture(ee);c.getContext().finish(),a("textureUpload",F),n.textureCount=U.size;const G=performance.now();p.render(0),c.getContext().finish(),a("warmFrame",G);for(const ee of x.values())ee.begin(),ee.end();R.begin(),R.end(),w.reset(),r.dataset.renderTiming=JSON.stringify(n)})(),q)}function Ne(){Ae=!0;for(const A of x.values())A.dispose();x.clear();for(const A of o.values())A.dispose();o.clear(),w.dispose(),R.dispose(),L.dispose(),M.dispose(),S.dispose(),D.dispose(),z.dispose(),O.dispose(),$.dispose(),V.dispose(),H.dispose(),ae.dispose(),ge.dispose(),be.dispose(),xe?.dispose(),xe=null,g.dispose(),p.dispose(),f.clear(),c.dispose()}return fa(r.clientWidth||r.width||600,r.clientHeight||r.height||1e3),a("createRendererTotal",i),r.dataset.renderTiming=JSON.stringify(n),{render:Vo,resize:fa,setLevel:ke,setReducedMotion(A){u=A,A&&(qe=0)},timing(){return{...n}},stats(){return{calls:ne.calls,triangles:ne.triangles,geometries:c.info.memory.geometries,textures:c.info.memory.textures,level:We,actors:J}},inspect:K,prepare:Be,dispose:Ne}}class LM{ctx=null;master=null;noise=null;muted;lastFire=0;constructor(e){this.muted=e}get isMuted(){return this.muted}setMuted(e){this.muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.55,this.ctx.currentTime,.02)}unlock(){if(!this.ctx){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-18,t.ratio.value=4,this.master.connect(t).connect(this.ctx.destination);const n=Math.floor(this.ctx.sampleRate*.4);this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const i=this.noise.getChannelData(0);for(let s=0;s<n;s++)i[s]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume()}get available(){return this.ctx!==null}play(e){const t=this.ctx,n=this.master;if(!t||!n||this.muted||t.state!=="running")return;const i=t.currentTime;switch(e){case"fire":if(i-this.lastFire<.085)return;this.lastFire=i,this.noiseBurst(i,.045,2600,.09,"bandpass"),this.tone(i,"square",880,520,.035,.025);break;case"hit":this.noiseBurst(i,.06,1400,.12,"bandpass");break;case"kill":this.tone(i,"triangle",420,160,.14,.16),this.noiseBurst(i,.12,900,.14,"lowpass");break;case"gateGood":[523.25,659.25,783.99].forEach((s,a)=>this.tone(i+a*.06,"triangle",s,s,.16,.14));break;case"gateBad":this.tone(i,"sawtooth",330,196,.28,.08);break;case"hurt":this.tone(i,"square",180,90,.18,.1),this.noiseBurst(i,.1,500,.12,"lowpass");break;case"win":[523.25,659.25,783.99,1046.5].forEach((s,a)=>this.tone(i+a*.11,"triangle",s,s,.35,.16));break;case"lose":[392,330,262].forEach((s,a)=>this.tone(i+a*.16,"triangle",s,s*.97,.3,.14));break;case"ui":this.tone(i,"sine",740,990,.06,.08);break;case"windup":this.tone(i,"sawtooth",110,240,.22,.07);break;case"strike":this.tone(i,"square",140,55,.16,.14),this.noiseBurst(i,.09,700,.16,"lowpass");break;case"whiff":this.noiseBurst(i,.12,2400,.06,"bandpass");break}}tone(e,t,n,i,s,a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=t,l.frequency.setValueAtTime(n,e),l.frequency.exponentialRampToValueAtTime(Math.max(20,i),e+s),c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(a,e+.008),c.gain.exponentialRampToValueAtTime(1e-4,e+s),l.connect(c).connect(this.master),l.start(e),l.stop(e+s+.02)}noiseBurst(e,t,n,i,s){const a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;const l=a.createBiquadFilter();l.type=s,l.frequency.value=n,l.Q.value=1.2;const c=a.createGain();c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l).connect(c).connect(this.master),o.start(e),o.stop(e+t+.02)}}const jp='button, a, input, select, textarea, [role="button"], [data-no-lane]',DM=36,FM=10;function NM(r){return r instanceof Element&&r.closest(jp)!==null}function UM(r){if(!(r instanceof Element))return!1;const e=r.closest(jp);return!e||e instanceof HTMLButtonElement&&e.disabled||e.closest("[hidden], [inert]")?!1:e.getClientRects().length>0}function kM(r){const e=t=>{if(t.metaKey||t.ctrlKey||t.altKey)return;const n=UM(t.target);switch(t.code){case"ArrowLeft":case"KeyA":if(!r.canSteer())return;t.preventDefault(),r.gesture(),r.move(-1);break;case"ArrowRight":case"KeyD":if(!r.canSteer())return;t.preventDefault(),r.gesture(),r.move(1);break;case"Space":if(n)return;t.preventDefault(),r.gesture(),r.togglePause();break;case"Escape":case"KeyP":t.preventDefault(),r.gesture(),r.togglePause();break;case"Enter":if(n)return;r.gesture(),r.confirm();break}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}function OM(r,e){let t=null,n=0,i=0,s=0;const a=h=>{NM(h.target)||(e.gesture(),!(!e.canSteer()||t!==null)&&(t=h.pointerId,n=i=h.clientX,s=0,r.setPointerCapture(h.pointerId),h.preventDefault()))},o=h=>{if(h.pointerId!==t)return;s=Math.max(s,Math.abs(h.clientX-n));const u=h.clientX-i;Math.abs(u)>=DM&&(e.move(u<0?-1:1),i=h.clientX)},l=h=>{if(h.pointerId===t&&(t=null,r.hasPointerCapture(h.pointerId)&&r.releasePointerCapture(h.pointerId),s<=FM&&e.canSteer())){const u=r.getBoundingClientRect(),d=(h.clientX-u.left)/u.width;e.setLane(d<1/3?0:d<2/3?1:2)}},c=h=>{h.pointerId===t&&(t=null)};return r.addEventListener("pointerdown",a),r.addEventListener("pointermove",o),r.addEventListener("pointerup",l),r.addEventListener("pointercancel",c),()=>{r.removeEventListener("pointerdown",a),r.removeEventListener("pointermove",o),r.removeEventListener("pointerup",l),r.removeEventListener("pointercancel",c)}}const BM=`
<svg class="mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
  <circle cx="32" cy="32" r="30" fill="#2EA8FF" stroke="#14233F" stroke-width="4"/>
  <path d="M8 40c8-4 16 4 24 0s16-4 24 0v6a26 26 0 0 1-48 0z" fill="#1B8FB3"/>
  <path d="M19 30c0-8 6-14 13-14s13 6 13 14z" fill="#FFFBF2" stroke="#14233F" stroke-width="3.5" stroke-linejoin="round"/>
  <rect x="15" y="29" width="34" height="6" rx="3" fill="#FFC93C" stroke="#14233F" stroke-width="3.5"/>
  <circle cx="32" cy="23" r="3" fill="#FF5247"/>
</svg>`,zM=`
<div class="page" data-screen="menu">
  <main class="app" data-testid="game-root" data-status="ready" data-lane="1" data-elapsed="0.0" data-squad="0" data-assets="loading" data-engaged="0" data-threats="front:0,left:0,right:0,rear:0,corner:0" data-aim-target="" data-aim-deg="0" data-strikes-landed="0" data-strikes-dodged="0" data-models="" data-material-types="" data-boss-screen="" data-squad-screen="" data-squad-drawn="0" data-squad-hit-screen="">
    <section class="rail rail--left" aria-label="Mission dossier">
      <header class="brand">
        <div class="brand__lockup" data-testid="brand">
          ${BM}
          <span class="brand__text">
            <span class="brand__kicker">Tidewatch · Field Manual</span>
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
        <button class="deploy" type="button" data-testid="deploy-button" disabled>
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
      <div class="viewport" data-testid="game-stage" data-ref="stage" tabindex="-1" aria-busy="true">
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

        <p class="asset-status" data-testid="asset-status" data-ref="assetStatus" role="status">Loading 3D models…</p>

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
        <div class="threat" data-testid="threat-readout" data-ref="threatReadout" data-pursuers="0" data-striking="0" data-hostiles="0" role="status" aria-live="polite">
          <span class="eyebrow">Close threats</span>
          <span class="threat__text" data-ref="threatText">Road clear</span>
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
        <p class="legend__note">Your squad fires on its own. Pick gates, hold off the Drowned from every side, break the boss.</p>
      </section>
    </aside>
  </main>
</div>
`;function qM(r){return r.innerHTML=zM,HM(r)}const GM=["dossierNumber","dossierDifficulty","dossierName","dossierBrief","dossierTradeoff","dossierIntel","missions","stage","vhud","trackFill","trackTicks","trackBoss","stageScore","stageMult","stageSquad","stageWeapon","runNumber","runDifficulty","runName","runSubtitle","eventLog","waveBanner","telegraphs","bossBar","bossName","bossFill","pauseSub","endEyebrow","endTitle","endSub","endScore","endKills","endSquad","endTime","endBest","nextBtn","fatalMessage","hudSquad","hudCap","hudWeapon","hudWeaponMeta","hudKills","hudScore","hudMult","hudLane","hudStatus","hudElapsed","hudProgress","progressFill","hudWave","hudGates","liveRegion","storageMessage","storageReset","assetStatus","threatReadout","threatText"];function HM(r){const e={};for(const n of GM){const i=r.querySelector(`[data-ref="${n}"]`);if(!i)throw new Error(`Layout is missing required element "${n}"`);e[n]=i}const t=n=>{const i=r.querySelector(`[data-testid="${n}"]`);if(!i)throw new Error(`Layout is missing required element [data-testid="${n}"]`);return i};return{...e,page:r.querySelector(".page"),app:t("game-root"),canvas:t("game-canvas"),byTestId:t}}const lh=1,Qh="squad-surge:prefs",eu="squad-surge:best";class Ot extends Error{constructor(e,t){super(e,t),this.name="StorageError"}}function tu(){try{const r=window.localStorage;if(!r)throw new Error("localStorage is unavailable");return r}catch(r){throw new Ot("Local storage is unavailable in this browser profile.",{cause:r})}}function Kp(r){let e;try{e=tu().getItem(r)}catch(i){throw i instanceof Ot?i:new Ot(`Could not read saved data "${r}".`,{cause:i})}if(e===null)return null;let t;try{t=JSON.parse(e)}catch(i){throw new Ot(`Saved data "${r}" is corrupt (invalid JSON).`,{cause:i})}if(typeof t!="object"||t===null)throw new Ot(`Saved data "${r}" has an unexpected shape.`);const n=t;if(n.version!==lh)throw new Ot(`Saved data "${r}" has version ${String(n.version)}; expected ${lh}.`);return n.data}function Yp(r,e){try{tu().setItem(r,JSON.stringify({version:lh,data:e}))}catch(t){throw t instanceof Ot?t:new Ot(`Could not save "${r}" — the browser refused the write.`,{cause:t})}}function bf(r){const e=Kp(Qh);if(e===null)return{muted:!1,levelId:null};if(typeof e!="object"||e===null)throw new Ot("Saved preferences are malformed.");const t=e;if(typeof t.muted!="boolean")throw new Ot("Saved sound preference is malformed.");if(t.levelId!==null&&typeof t.levelId!="string")throw new Ot("Saved mission preference is malformed.");const n=t.levelId??null;if(n!==null&&!r.includes(n))throw new Ot(`Saved mission "${n}" does not exist.`);return{muted:t.muted,levelId:n}}function xf(r){Yp(Qh,r)}function $p(r){if(typeof r!="object"||r===null)return!1;const e=r;return typeof e.score=="number"&&Number.isFinite(e.score)&&typeof e.kills=="number"&&typeof e.squad=="number"&&typeof e.won=="boolean"}function _f(r){const e=Kp(eu);if(e===null)return{};if(typeof e!="object"||e===null||Array.isArray(e))throw new Ot("Saved best scores are malformed.");const t={};for(const[n,i]of Object.entries(e)){if(!r.includes(n))throw new Ot(`Saved best score names unknown mission "${n}".`);if(!$p(i))throw new Ot(`Saved best score for "${n}" is malformed.`);t[n]=i}return t}function VM(r,e,t){if(!$p(t))throw new Ot("Refusing to save a malformed result.");const n=r[e];if(!(!n||t.score>n.score||t.won&&!n.won))return null;const s={...r,[e]:{score:Math.max(t.score,n?.score??0),kills:t.kills,squad:t.squad,won:t.won||(n?.won??!1)}};return Yp(eu,s),s}function WM(){const r=tu();try{r.removeItem(Qh),r.removeItem(eu)}catch(e){throw new Ot("Could not clear saved data.",{cause:e})}}const Tr=r=>r===null?"":[r.x,r.y,r.w,r.h].map(e=>Math.round(e)).join(",");function jl(r,e,t){const n=r-t.x;return e>t.backZ?"rear":e>=t.frontZ?Math.abs(n)>t.halfWidth?n>0?"right":"left":"corner":Math.abs(n)<=t.halfWidth?"front":"corner"}const oo=["Left","Centre","Right"],vf={ready:"Ready",running:"In action",paused:"Paused",won:"Mission complete",lost:"Squad lost"},XM={cleared:"Every hostile cleared and the road is yours.",wiped:"The last of the squad went down on the road.",overrun:"The boss broke through the squad line.",timeout:"The window closed before the road was clear."},jM=6,lo=$l.map(r=>r.id),Kl=r=>String(r).padStart(2,"0"),Ei=r=>Math.round(r).toLocaleString("en-US");function at(r,e){r.textContent!==e&&(r.textContent=e)}function ut(r,e,t){r.getAttribute(e)!==t&&r.setAttribute(e,t)}class KM{refs;sound;reducedMotion;renderer=null;sim;prefs;best={};storageBlock=null;eventCursor=-1;lastFrame=0;rafId=0;fatal=!1;assetState="loading";awaitingFirstFrame=!1;strikesLanded=0;strikesDodged=0;strikeRunId=-1;windupSide=new Map;lastStatus=null;lastSquad=-1;lastRunId=-1;bannerTimer=0;bumpTimer=0;hitSoundAt=0;missionButtons=new Map;laneButtons;constructor(e){this.refs=qM(e),this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");const t=$l[0];if(!t)throw new Error("No missions are defined.");let n=null,i=null;try{i=bf(lo),this.best=_f(lo)}catch(o){n=o,i=null,this.best={}}this.prefs=i??{muted:!0,levelId:null},this.sound=new LM(this.prefs.muted);const s=this.prefs.levelId,a=s!==null&&um(s)?s:t.id;this.sim=new mu(a),this.laneButtons=[0,1,2].map(o=>this.refs.byTestId(`lane-button-${o}`)),this.buildMissionCards(),this.bindControls(),this.applySoundUi(),this.showLevel(this.sim.level),n!==null&&this.blockStorage(n),this.startRenderer()}startRenderer(){const e=this.refs.canvas;e.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.fail("The graphics context was lost. Reload the page to redeploy.")});const t=()=>{const[n,i]=this.stageSize();this.renderer?.resize(n,i)};new ResizeObserver(t).observe(this.refs.stage),this.rafId=requestAnimationFrame(this.frame),this.bootRenderer(e,t)}stageSize(){const e=this.refs.stage.getBoundingClientRect(),t=getComputedStyle(this.refs.stage),n=parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),i=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth);return[Math.max(1,e.width-n),Math.max(1,e.height-i)]}async bootRenderer(e,t){let n;try{n=await M2()}catch(a){this.failAssets(a instanceof Error?a.message:String(a));return}if(this.fatal)return;let i;try{i=d2("create-renderer",()=>IM(e,{reducedMotion:this.reducedMotion.matches},n))}catch(a){const o=a instanceof Error?a.message:String(a),l=/webgl/i.test(o)?" Squad Surge needs a browser with hardware-accelerated WebGL.":"";this.failAssets(`The 3D scene could not be built: ${o}.${l}`);return}const s=this.sim.state.levelId;try{i.setLevel(s),i.resize(...this.stageSize()),await Io("prepare",()=>i.prepare())}catch(a){i.dispose(),this.failAssets(`The 3D scene could not be prepared: ${a instanceof Error?a.message:String(a)}.`);return}if(this.fatal){i.dispose();return}this.renderer=i,this.sim.state.levelId!==s&&i.setLevel(this.sim.state.levelId),t(),this.awaitingFirstFrame=!0,jh("first-frame")}failAssets(e){this.setAssetState("error"),this.fail(e)}setAssetState(e){this.assetState=e;const t=this.refs;ut(t.app,"data-assets",e),ut(t.stage,"aria-busy",String(e==="loading")),t.assetStatus.hidden=e!=="loading",this.applyLockState()}buildMissionCards(){const e=this.refs.missions;e.replaceChildren();for(const t of $l){const n=document.createElement("button");n.type="button",n.className="mission",n.dataset.testid="mission-card",n.dataset.missionId=t.id,n.style.setProperty("--mission-accent",t.accent),n.setAttribute("aria-pressed","false"),n.innerHTML=`
        <span class="mission__no num" aria-hidden="true">${Kl(t.index+1)}</span>
        <span class="mission__body">
          <span class="mission__name" data-testid="mission-name"></span>
          <span class="mission__tradeoff" data-testid="mission-tradeoff"></span>
        </span>
        <span class="mission__meta">
          <span class="pips" aria-hidden="true">${[1,2,3].map(i=>`<i class="${i<=t.difficulty?"on":""}"></i>`).join("")}</span>
          <span class="mission__best" data-testid="mission-best" data-ref-best></span>
        </span>`,n.querySelector(".mission__name").textContent=t.name,n.querySelector(".mission__tradeoff").textContent=t.subtitle,n.setAttribute("aria-label",`Mission ${t.index+1}: ${t.name}, ${t.difficultyLabel}. ${t.tradeoff}`),n.addEventListener("click",()=>{this.sound.unlock(),this.selectMission(t.id)}),e.append(n),this.missionButtons.set(t.id,n)}this.refreshBestLabels()}refreshBestLabels(){for(const[e,t]of this.missionButtons){const n=this.best[e],i=t.querySelector("[data-ref-best]");i&&(this.storageBlock!==null?i.textContent="Record locked":i.textContent=n?`${n.won?"★ ":""}Best ${Ei(n.score)}`:"Unplayed")}}bindControls(){const e=this.refs,t=(a,o)=>{e.byTestId(a).addEventListener("click",()=>{this.sound.unlock(),o()})};t("deploy-button",()=>this.deploy()),t("pause-button",()=>this.togglePause()),t("resume-button",()=>this.togglePause()),t("restart-button",()=>this.restart()),t("menu-button",()=>this.toMenu()),t("replay-button",()=>this.restart()),t("next-mission-button",()=>this.nextMission()),t("end-menu-button",()=>this.toMenu()),t("sound-toggle",()=>this.toggleSound());const n=(a,o)=>{a.addEventListener("pointerdown",l=>{!l.isPrimary||l.button!==0||(l.preventDefault(),this.sound.unlock(),o())}),a.addEventListener("click",l=>{l.detail===0&&(this.sound.unlock(),o())})};n(e.byTestId("move-left"),()=>this.sim.move(-1)),n(e.byTestId("move-right"),()=>this.sim.move(1)),this.laneButtons.forEach((a,o)=>{n(a,()=>this.sim.setLane(o))}),e.storageReset.addEventListener("click",()=>this.resetSavedData());const i={move:a=>this.sim.move(a),setLane:a=>this.sim.setLane(a),togglePause:()=>this.togglePause(),confirm:()=>{const a=this.sim.state.status;a==="ready"?this.deploy():(a==="won"||a==="lost")&&this.restart()},canSteer:()=>this.sim.state.status==="running",gesture:()=>this.sound.unlock()};kM(i),OM(e.stage,i),e.stage.addEventListener("pointerdown",a=>{this.sim.state.status==="running"&&a.target===e.canvas&&e.stage.classList.add("is-touching")});const s=()=>e.stage.classList.remove("is-touching");e.stage.addEventListener("pointerup",s),e.stage.addEventListener("pointercancel",s),document.addEventListener("visibilitychange",()=>{document.hidden&&this.sim.state.status==="running"&&(this.sim.pause(),this.syncFrameUi(this.sim.state))})}selectMission(e){const t=this.sim.state.status;this.storageBlock!==null||t==="running"||t==="paused"||e===this.sim.state.levelId&&this.prefs.levelId===e||this.persistPrefs({...this.prefs,levelId:e})&&e!==this.sim.state.levelId&&(this.replaceSim(e),this.sound.play("ui"))}replaceSim(e){this.sim=new mu(e),this.eventCursor=-1,this.renderer?.setLevel(e),this.showLevel(this.sim.level)}canPlay(){return!this.fatal&&this.storageBlock===null&&this.assetState==="ready"}deploy(){!this.canPlay()||this.sim.state.status!=="ready"||(this.sim.start(),this.sound.play("ui"),this.refs.stage.focus({preventScroll:!0}),this.syncFrameUi(this.sim.state))}togglePause(){const e=this.sim.state.status;if(e==="running")this.sim.pause();else if(e==="paused"&&this.canPlay())this.sim.resume();else return;this.syncFrameUi(this.sim.state),this.sim.state.status==="paused"?this.refs.byTestId("resume-button").focus({preventScroll:!0}):this.refs.stage.focus({preventScroll:!0})}restart(){this.canPlay()&&(this.sim.restart(),this.refs.stage.focus({preventScroll:!0}),this.syncFrameUi(this.sim.state))}toMenu(){this.sim.reset(),this.syncFrameUi(this.sim.state),this.refs.byTestId("deploy-button").focus({preventScroll:!0})}nextMission(){if(!this.canPlay())return;const e=hu(this.sim.state.levelId);if(!e){this.toMenu();return}this.persistPrefs({...this.prefs,levelId:e})&&(this.replaceSim(e),this.sim.start(),this.refs.stage.focus({preventScroll:!0}),this.syncFrameUi(this.sim.state))}toggleSound(){if(this.storageBlock!==null)return;const e=!this.prefs.muted;this.persistPrefs({...this.prefs,muted:e})&&(this.sound.setMuted(e),this.applySoundUi(),e||this.sound.play("ui"))}applySoundUi(){const e=this.refs.byTestId("sound-toggle"),t=!this.sound.isMuted;ut(e,"aria-pressed",String(t)),ut(e,"aria-label",t?"Sound on — press to mute":"Sound off — press to unmute"),ut(this.refs.app,"data-muted",String(!t)),e.disabled=this.storageBlock!==null}persistPrefs(e){if(this.storageBlock!==null)return!1;try{xf(e)}catch(t){return this.blockStorage(t),!1}return this.prefs=e,!0}blockStorage(e){const t=e instanceof Ot?e.message:`Unexpected storage failure: ${e instanceof Error?e.message:String(e)}`;this.storageBlock=t,console.error("[squad-surge] storage",e),this.sim.state.status==="running"&&this.sim.pause(),at(this.refs.storageMessage,t),this.refs.byTestId("storage-error").hidden=!1,ut(this.refs.app,"data-storage","blocked"),this.sound.setMuted(!0),this.applySoundUi(),this.refreshBestLabels(),this.applyLockState(),this.refs.storageReset.focus({preventScroll:!0})}resetSavedData(){try{WM();const e={muted:!1,levelId:this.sim.state.levelId};xf(e);const t=bf(lo),n=_f(lo);if(t.muted!==e.muted||t.levelId!==e.levelId)throw new Ot("Saved preferences did not read back as written.");this.prefs=t,this.best=n}catch(e){this.storageBlock=null,this.blockStorage(e);return}this.storageBlock=null,this.refs.byTestId("storage-error").hidden=!0,this.refs.app.removeAttribute("data-storage"),this.sound.setMuted(this.prefs.muted),this.applySoundUi(),this.refreshBestLabels(),this.applyLockState(),this.toMenu()}applyLockState(){const e=this.sim.state.status,t=!this.canPlay();for(const i of this.missionButtons.values())i.disabled=t||e==="running"||e==="paused";for(const i of["deploy-button","replay-button","next-mission-button","restart-button","resume-button"])this.refs.byTestId(i).disabled=t;const n=!t&&e==="running";for(const i of[...this.laneButtons,this.refs.byTestId("move-left"),this.refs.byTestId("move-right")])i.disabled=!n}frame=e=>{if(this.fatal)return;this.rafId=requestAnimationFrame(this.frame);const t=this.lastFrame===0?0:Math.min(.25,Math.max(0,(e-this.lastFrame)/1e3));this.lastFrame=e;try{this.sim.update(t);const n=this.sim.state;this.consumeEvents(n),this.renderer?.render(n,t),this.syncProjection(),this.awaitingFirstFrame&&this.renderer&&(this.awaitingFirstFrame=!1,Kh("first-frame"),this.setAssetState("ready"),f2("ready")),this.syncFrameUi(n)}catch(n){console.error("[squad-surge] frame",n),this.fail(`The battlefield crashed: ${n instanceof Error?n.message:String(n)}`)}};fail(e){this.fatal=!0,cancelAnimationFrame(this.rafId),this.assetState==="loading"&&(this.assetState="error",ut(this.refs.app,"data-assets","error"),ut(this.refs.stage,"aria-busy","false"),this.refs.assetStatus.hidden=!0),at(this.refs.fatalMessage,e),this.refs.byTestId("fatal-error").hidden=!1,ut(this.refs.app,"data-fatal","true"),this.applyLockState(),console.error("[squad-surge]",e)}consumeEvents(e){for(const t of e.events)t.id<=this.eventCursor||(this.eventCursor=t.id,this.onEvent(t,e))}onEvent(e,t){switch(e.type){case"volley":this.sound.play("fire");break;case"hit":e.time-this.hitSoundAt>.07&&(this.hitSoundAt=e.time,this.sound.play("hit"));break;case"kill":this.sound.play("kill");break;case"enemyWindup":this.beginStrikeRun(e.runId),this.windupSide.set(e.enemyId,jl(e.x,e.z,t.player)),this.sound.play("windup");break;case"enemyStrike":{this.beginStrikeRun(e.runId);const n=jl(e.x,e.z,t.player),i=this.windupSide.get(e.enemyId)??n;if(this.windupSide.delete(e.enemyId),e.hit){this.strikesLanded++,this.sound.play("strike");const s=n!==i?` (landed ${n})`:"";this.log(e.time,`Struck from ${i} by ${e.kind} −${e.damage}${s}`)}else this.strikesDodged++,this.sound.play("whiff");break}case"squadLoss":this.sound.play("hurt"),e.amount>=3&&this.log(e.time,`Lost ${e.amount} to ${e.cause==="gate"?"a gate":`a ${e.cause}`}`);break;case"gate":{this.sound.play(e.tone==="bad"?"gateBad":"gateGood");const n=e.after-e.before,i=n===0?"":` · squad ${n>0?"+":"−"}${Math.abs(n)}`;this.log(e.time,`Took ${e.label}${i}`),this.announce(`Gate ${e.label}. Squad ${e.after}.`);break}case"wave":this.banner(e.name,!1),this.addTick(t.progress),this.log(e.time,e.name);break;case"bossSpawn":this.banner(`${e.name} inbound`,!0),this.log(e.time,`${e.name} sighted`),this.announce(`Boss ${e.name} inbound.`);break;case"bossEnrage":this.banner("Boss enraged!",!0);break;case"bossDefeated":this.sound.play("win"),this.log(e.time,"Boss down");break;case"won":this.sound.play("win");break;case"lost":this.sound.play("lose");break}}showLevel(e){const t=this.refs,n=`Mission ${Kl(e.index+1)}`;at(t.dossierNumber,n),at(t.dossierDifficulty,e.difficultyLabel),at(t.dossierName,e.name),at(t.dossierBrief,e.subtitle),at(t.dossierTradeoff,e.tradeoff),t.dossierIntel.replaceChildren(...e.briefing.map(i=>{const s=document.createElement("li");return s.textContent=i,s})),at(t.runNumber,n),at(t.runDifficulty,e.difficultyLabel),at(t.runName,e.name),at(t.runSubtitle,e.subtitle),t.app.style.setProperty("--accent",e.accent),t.trackBoss.classList.toggle("is-none",e.bossName===null),t.trackBoss.title=e.bossName??"Extraction";for(const[i,s]of this.missionButtons)ut(s,"aria-pressed",String(i===e.id));at(t.hudCap,`/ ${this.sim.state.squadCap}`)}onRunStart(){this.refs.eventLog.replaceChildren(),this.refs.trackTicks.replaceChildren(),this.refs.waveBanner.classList.remove("is-on")}syncFrameUi(e){const t=this.refs;e.runId!==this.lastRunId&&(this.lastRunId=e.runId,this.onRunStart()),e.status!==this.lastStatus&&this.onStatus(e),ut(t.app,"data-level-id",e.levelId),ut(t.app,"data-lane",String(e.lane)),ut(t.app,"data-elapsed",e.elapsed.toFixed(1)),ut(t.app,"data-squad",String(e.squad));const i=String(e.squad);if(at(t.hudSquad,i),at(t.stageSquad,i),this.lastSquad>=0&&e.squad!==this.lastSquad&&e.status==="running"){const h=e.squad>this.lastSquad;t.hudSquad.classList.toggle("bump-up",h),t.hudSquad.classList.toggle("bump-down",!h),window.clearTimeout(this.bumpTimer),this.bumpTimer=window.setTimeout(()=>{t.hudSquad.classList.remove("bump-up","bump-down")},220)}this.lastSquad=e.squad,at(t.hudWeapon,e.weapon.name),at(t.stageWeapon,e.weapon.name),at(t.hudWeaponMeta,`${e.weapon.fireRate.toFixed(1)} volleys/s · ${Ei(e.weapon.dps)} dps`),at(t.hudKills,Ei(e.kills));const s=Ei(e.score);at(t.hudScore,s),at(t.stageScore,s);const a=`×${e.multiplier}`;at(t.hudMult,a),at(t.stageMult,a),t.stageMult.classList.toggle("is-on",e.multiplier>1),at(t.hudLane,oo[e.lane]),at(t.hudElapsed,`${e.elapsed.toFixed(1)}s / ${Math.round(e.duration)}s`);const o=`${Math.round(e.progress*100)}%`;at(t.hudProgress,o);const l=`${(e.progress*100).toFixed(2)}%`;t.progressFill.style.width!==l&&(t.progressFill.style.width=l,t.trackFill.style.width=l);const c=e.wave.index>=0?`Wave ${e.wave.index+1} of ${e.wave.total} · ${e.wave.name}`:`${e.wave.total} waves on the road`;at(t.hudWave,c),this.laneButtons.forEach((h,u)=>{ut(h,"aria-pressed",String(u===e.lane))}),this.syncThreats(e),this.syncGates(e),this.syncTelegraphs(e),this.syncBoss(e)}onStatus(e){const t=this.refs,n=this.lastStatus;this.lastStatus=e.status;const i=e.status;ut(t.app,"data-status",i),ut(t.page,"data-screen",i==="ready"?"menu":"play"),at(t.hudStatus,vf[i]);const s=t.byTestId("pause-button");ut(s,"aria-pressed",String(i==="paused")),ut(s,"aria-label",i==="paused"?"Resume":"Pause"),t.byTestId("pause-overlay").hidden=i!=="paused",i==="paused"&&at(t.pauseSub,`${this.sim.level.name} · ${e.elapsed.toFixed(1)}s in · squad ${e.squad}. Nothing moves until you resume.`),this.applyLockState();const a=i==="won"||i==="lost",o=t.byTestId("end-screen");o.hidden=!a,a?this.showEnd(e):o.removeAttribute("data-outcome"),n!==null&&this.announce(vf[i])}showEnd(e){const t=this.refs,n=e.outcome,i=e.status==="won",s=this.sim.level,a=n?.score??e.score,o=n?.survivors??e.squad,l=n?.elapsed??e.elapsed;ut(t.byTestId("end-screen"),"data-outcome",i?"won":"lost"),at(t.endEyebrow,`Mission ${Kl(s.index+1)} · ${s.name}`),at(t.endTitle,i?"Coast held":"Squad lost"),at(t.endSub,n?XM[n.reason]:""),at(t.endScore,Ei(a)),at(t.endKills,Ei(e.kills)),at(t.endSquad,String(o)),at(t.endTime,`${l.toFixed(1)}s`);let c,h=!1;if(this.storageBlock!==null)c="Best score not saved — saved data is locked";else try{const f=VM(this.best,s.id,{score:Math.max(0,Math.round(a)),kills:e.kills,squad:o,won:i});f&&(this.best=f,h=!0);const m=this.best[s.id];c=h?`New personal best · ${Ei(a)}`:`Personal best · ${Ei(m?.score??0)}`}catch(f){this.blockStorage(f),c="Best score not saved — saved data is locked"}at(t.endBest,c),t.endBest.classList.toggle("is-new",h),this.refreshBestLabels();const u=hu(s.id);at(t.nextBtn,u?`Next · ${wf(u).name}`:"Mission select");const d=i?t.nextBtn:t.byTestId("replay-button");t.nextBtn.classList.toggle("btn--primary",i),t.byTestId("replay-button").classList.toggle("btn--primary",!i),d.focus({preventScroll:!0})}syncGates(e){const t=this.refs.hudGates;let n=-1,i=-1/0;for(const o of e.gates)o.z<Kn&&o.z>i&&(i=o.z,n=o.rowId);const s=n<0?"none":`${n}|${e.lane}|${e.gates.filter(o=>o.rowId===n).map(o=>`${o.lane}:${o.label}:${o.tone}`).join(",")}`;if(t.dataset.key!==s)if(t.dataset.key=s,n<0){const o=document.createElement("li");o.className="gates__empty",o.textContent=e.status==="running"?"Next gate row incoming":"Gates appear once deployed",t.replaceChildren(o)}else{const o=e.gates.filter(l=>l.rowId===n).sort((l,c)=>l.lane-c.lane);t.replaceChildren(...o.map(l=>{const c=document.createElement("li");c.className=`gate-chip gate-chip--${l.tone}${l.lane===e.lane?" is-mine":""}`,c.dataset.testid="gate-choice",c.dataset.lane=String(l.lane),c.dataset.gateId=String(l.id);const h=document.createElement("strong");h.textContent=l.label;const u=document.createElement("small");return u.textContent=l.detail||oo[l.lane],c.append(h,u),c.setAttribute("aria-label",`${oo[l.lane]} lane gate ${l.label}${l.detail?`, ${l.detail}`:""}`),c}))}const a=n<0?"":`${Math.max(0,(Kn-i)/cn).toFixed(1)}s`;ut(t,"data-eta",a)}syncTelegraphs(e){const t=this.refs.telegraphs,n=e.telegraphs.map(i=>i.id).join(",");t.dataset.key!==n&&(t.dataset.key=n,t.replaceChildren(...e.telegraphs.slice(0,3).map(i=>{const s=document.createElement("span"),a=i.side!==0?i.side:i.lane-1,o=a<0?"left":a>0?"right":"center";s.className=`warn warn--${o}`;const l=i.kind==="flank"?"Flank":i.kind==="rush"?"Rush":"Slam";return s.textContent=i.kind==="flank"?`${i.side<0?"◀ ":""}${l}${i.side>0?" ▶":""}`:`${l} · ${oo[i.lane]}`,s})))}syncBoss(e){const t=this.refs,n=e.boss,i=n!==null&&n.phase!=="dead"&&(e.status==="running"||e.status==="paused");if(t.bossBar.hidden===i&&(t.bossBar.hidden=!i),!n||!i)return;at(t.bossName,n.name);const s=`${Math.max(0,n.hp/n.maxHp*100).toFixed(1)}%`;t.bossFill.style.width!==s&&(t.bossFill.style.width=s),t.bossBar.classList.toggle("is-enraged",n.phase==="enraged")}syncProjection(){const e=this.refs;if(!this.renderer)return;const t=this.renderer.inspect();ut(e.app,"data-models",t.models.join(",")),ut(e.app,"data-material-types",t.materialTypes.join(",")),ut(e.app,"data-boss-screen",Tr(t.boss)),ut(e.app,"data-squad-screen",Tr(t.squad)),ut(e.app,"data-squad-drawn",String(t.squadDrawn)),ut(e.app,"data-squad-hit-screen",Tr(t.squadHit));const n=new Map(t.gates.map(a=>[String(a.id),a.rect])),i=new Map(t.gates.map(a=>[String(a.id),a.face])),s=new Map(t.gateParts.map(a=>[String(a.id),a.parts]));for(const a of e.hudGates.querySelectorAll("[data-gate-id]")){const o=a.dataset.gateId??"";ut(a,"data-screen-rect",Tr(n.get(o)??null)),ut(a,"data-face-rect",Tr(i.get(o)??null)),ut(a,"data-gate-parts",(s.get(o)??[]).join(","))}}beginStrikeRun(e){e!==this.strikeRunId&&(this.strikeRunId=e,this.strikesLanded=0,this.strikesDodged=0,this.windupSide.clear())}syncThreats(e){const t=this.refs,n=e.player,i={front:0,left:0,right:0,rear:0,corner:0};let s=0,a=0,o=0;for(const h of e.enemies)h.kind!=="barrel"&&o++,!(h.mode!=="pursue"&&h.mode!=="windup"&&h.mode!=="recover")&&(s++,h.mode==="windup"&&a++,i[jl(h.x,h.z,n)]++);ut(t.app,"data-engaged",String(s)),ut(t.app,"data-threats",`front:${i.front},left:${i.left},right:${i.right},rear:${i.rear},corner:${i.corner}`),ut(t.app,"data-aim-target",n.aimTargetId===null?"":String(n.aimTargetId)),ut(t.app,"data-aim-deg",String(Math.round(Math.atan2(n.aimX,-n.aimZ)*180/Math.PI)));const l=this.strikeRunId===e.runId;ut(t.app,"data-strikes-landed",String(l?this.strikesLanded:0)),ut(t.app,"data-strikes-dodged",String(l?this.strikesDodged:0)),ut(t.threatReadout,"data-pursuers",String(s)),ut(t.threatReadout,"data-striking",String(a)),ut(t.threatReadout,"data-hostiles",String(o)),t.threatReadout.classList.toggle("is-hot",a>0);const c=i.left+i.right+i.rear+i.corner;at(t.threatText,o===0?"Road clear":s===0?`${o} on the road · none engaged`:`${s} engaged${c>0?` · ${c} on flanks`:""}${a>0?` · ${a} striking`:""}`)}banner(e,t){const n=this.refs.waveBanner;n.textContent=e,n.classList.toggle("is-boss",t),n.classList.add("is-on"),window.clearTimeout(this.bannerTimer),this.bannerTimer=window.setTimeout(()=>n.classList.remove("is-on"),2200)}addTick(e){if(e<=.01)return;const t=document.createElement("i");t.style.left=`${(e*100).toFixed(2)}%`,this.refs.trackTicks.append(t)}log(e,t){const n=document.createElement("li"),i=document.createElement("time");i.textContent=`${e.toFixed(0)}s`;const s=document.createElement("span");s.textContent=t,n.append(i,s);const a=this.refs.eventLog;for(a.prepend(n);a.children.length>jM;)a.lastElementChild?.remove()}announce(e){at(this.refs.liveRegion,e)}}const Mo=document.getElementById("root");if(!Mo)throw new Error("Squad Surge: #root element is missing from index.html");try{new KM(Mo)}catch(r){const e=r instanceof Error?r.message:String(r);Mo.innerHTML="";const t=document.createElement("div");t.className="boot-error",t.setAttribute("role","alert"),t.dataset.testid="fatal-error";const n=document.createElement("h1");n.textContent="Squad Surge could not start";const i=document.createElement("p");i.textContent=e,t.append(n,i),Mo.append(t),console.error("[squad-surge] boot",r)}
