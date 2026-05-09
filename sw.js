<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="나의 일기장">
<meta name="mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#C4622D">
<meta name="description" content="나만의 일기장 — 핵심 한 줄, 결정, 배움을 기록하세요">
<title>나의 일기장</title>
<link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23C4622D'/%3E%3Ctext y='.9em' font-size='80' x='10'%3E📔%3C/text%3E%3C/svg%3E">
<link rel="manifest" href="data:application/json,%7B%22name%22%3A%22%EB%82%98%EC%9D%98%20%EC%9D%BC%EA%B8%B0%EC%9E%A5%22%2C%22short_name%22%3A%22%EC%9D%BC%EA%B8%B0%EC%9E%A5%22%2C%22start_url%22%3A%22%2F%22%2C%22display%22%3A%22standalone%22%2C%22background_color%22%3A%22%23F5F2ED%22%2C%22theme_color%22%3A%22%23C4622D%22%7D">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&family=Pretendard:wght@400;600&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#F5F2ED;--paper:#FDFCF9;--ink:#1C1A16;--ink2:#4A4640;--ink3:#8C877E;
  --accent:#C4622D;--a2:#F0E0D0;--line:#E0DBD3;--sh:rgba(28,26,22,0.07);
  --ok-bg:#EAF3DE;--ok:#3B6D11;--err-bg:#FCEBEB;--err:#A32D2D;
  --q:#2D5A8C;--q2:#E8F0F8;
  --core:#6B3FA0;--c2:#F0EAF8;
  --dec:#8C4A2D;--d2:#F8EDE8;
  --mis:#2D6B5A;--m2:#E8F5F0;
  --asset:#1A5C8C;
  --nh:60px;
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
html,body{height:100%;font-family:'Pretendard',sans-serif;background:var(--bg);color:var(--ink);overflow:hidden;}
#app{height:100%;display:flex;flex-direction:column;}

/* 상단바 */
.tb{background:var(--paper);border-bottom:1px solid var(--line);padding:0 18px;height:50px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;z-index:10;}
.tb-brand{font-family:'Nanum Myeongjo',serif;font-size:16px;}
.sync{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--ink3);cursor:pointer;}
.dot{width:7px;height:7px;border-radius:50%;background:#9FE1CB;flex-shrink:0;transition:background 0.3s;}
.dot.s{background:#FAC775;animation:pulse 1s infinite;}
.dot.e{background:#F09595;}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}

/* 콘텐츠 */
.scr{flex:1;overflow-y:auto;overflow-x:hidden;padding:16px 16px calc(var(--nh)+24px);overscroll-behavior:contain;}
.pn{display:none;}
.pn.on{display:block;animation:fi .18s ease;will-change:opacity,transform;}
@keyframes fi{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:none}}
.ptitle{font-family:'Nanum Myeongjo',serif;font-size:22px;margin-bottom:2px;}
.psub{font-size:12px;color:var(--ink3);margin-bottom:18px;}

/* 카드 */
.card{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:16px;margin-bottom:10px;box-shadow:0 1px 3px var(--sh);}
.ch{display:flex;align-items:center;gap:8px;margin-bottom:12px;}
.ci{font-size:16px;}
.ct{font-size:13px;font-weight:600;}
.cd{font-size:11px;color:var(--ink3);margin-left:auto;}

/* 핵심 한 줄 */
.core-hero{background:var(--c2);border:1.5px solid #C9AADC;border-radius:16px;padding:18px;margin-bottom:12px;}
.core-lbl{font-size:10px;color:var(--core);font-weight:600;letter-spacing:.8px;text-transform:uppercase;margin-bottom:8px;}
.core-inp{width:100%;border:none;background:transparent;font-size:18px;font-family:'Nanum Myeongjo',serif;color:var(--core);resize:none;line-height:1.8;outline:none;}
.core-inp::placeholder{color:#B09AC8;font-style:italic;font-size:15px;}

/* 텍스트 */
.tx{width:100%;border:none;background:transparent;font-size:15px;font-family:'Nanum Myeongjo',serif;color:var(--ink);resize:none;line-height:2;outline:none;}
.tx::placeholder{color:var(--ink3);font-style:italic;}
.afoot{display:flex;justify-content:flex-end;margin-top:6px;padding-top:6px;border-top:1px solid var(--line);}
.cc{font-size:11px;color:var(--ink3);}

/* 확장 */
.xbtn{width:100%;padding:11px 14px;background:var(--bg);border:1px dashed var(--line);border-radius:10px;font-size:13px;color:var(--ink3);cursor:pointer;text-align:center;margin-bottom:10px;font-family:'Pretendard',sans-serif;transition:all .15s;}
.xbtn:active{background:var(--a2);color:var(--accent);border-color:var(--accent);}
.xbody{display:none;}
.xbody.on{display:block;}

/* 특수 카드 */
.dcard{background:var(--d2);border:1px solid #D4956A;border-radius:14px;padding:14px;margin-bottom:10px;}
.dlbl{font-size:10px;color:var(--dec);font-weight:600;letter-spacing:.5px;text-transform:uppercase;margin-bottom:6px;}
.dtx{width:100%;border:none;background:transparent;font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--ink);resize:none;line-height:1.9;outline:none;}
.dtx::placeholder{color:#C4956A;font-style:italic;}
.ddiv{height:1px;background:#D4B5A0;margin:10px 0;}
.mcard{background:var(--m2);border:1px solid #80C0A8;border-radius:14px;padding:14px;margin-bottom:10px;}
.mlbl{font-size:10px;color:var(--mis);font-weight:600;letter-spacing:.5px;text-transform:uppercase;margin-bottom:6px;}
.mtx{width:100%;border:none;background:transparent;font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--ink);resize:none;line-height:1.9;outline:none;}
.mtx::placeholder{color:#6BA090;font-style:italic;}
.qcard{background:var(--q2);border:1px solid #B8D0E8;border-radius:14px;padding:14px;margin-bottom:10px;}
.qlbl{font-size:10px;color:var(--q);font-weight:600;letter-spacing:.5px;text-transform:uppercase;margin-bottom:6px;}
.qtx{width:100%;border:none;background:transparent;font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--ink);resize:none;line-height:1.9;outline:none;}
.qtx::placeholder{color:#8AAAC4;font-style:italic;}
.qdiv{height:1px;background:#B8D0E8;margin:10px 0;}
.icard{background:#EAF3DE;border:1px solid #A8D080;border-radius:14px;padding:14px;margin-bottom:10px;}
.itx{width:100%;border:none;background:transparent;font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--ink2);resize:none;line-height:1.9;outline:none;}
.itx::placeholder{color:#88A870;font-style:italic;}

/* 버튼 */
.bp{width:100%;padding:14px;border-radius:12px;border:none;background:var(--accent);color:#fff;font-size:15px;font-weight:600;cursor:pointer;font-family:'Pretendard',sans-serif;transition:all .15s;}
.bp:active{transform:scale(.98);background:#b0551f;}
.bp:disabled{background:var(--ink3);cursor:not-allowed;}
.bg{width:100%;padding:12px;border-radius:12px;border:1px solid var(--line);background:transparent;color:var(--ink2);font-size:14px;cursor:pointer;font-family:'Pretendard',sans-serif;}
.bg:active{background:var(--bg);}
.notice{font-size:13px;text-align:center;padding:10px;min-height:34px;border-radius:10px;margin-top:8px;}
.notice.ok{background:var(--ok-bg);color:var(--ok);}
.notice.err{background:var(--err-bg);color:var(--err);}

/* 날짜 선택 */
.dpbtn{font-size:12px;padding:6px 12px;border-radius:20px;border:1px solid var(--line);background:var(--bg);color:var(--ink3);cursor:pointer;font-family:'Pretendard',sans-serif;}
.dpwrap{background:var(--paper);border:1px solid var(--accent);border-radius:12px;padding:14px;margin-bottom:12px;display:none;}
.dpinp{width:100%;border:1px solid var(--line);border-radius:8px;padding:10px 12px;font-size:15px;color:var(--ink);background:var(--bg);outline:none;margin-bottom:10px;font-family:'Pretendard',sans-serif;}
.dptd{width:100%;padding:8px;border-radius:8px;border:1px solid var(--line);background:transparent;font-size:12px;color:var(--ink3);cursor:pointer;font-family:'Pretendard',sans-serif;}

/* 1년 전 */
.fb{background:linear-gradient(135deg,#FDF0E8,#F5E0CC);border:1.5px solid var(--accent);border-radius:14px;padding:14px;margin-bottom:14px;cursor:pointer;}
.fb-badge{display:inline-flex;align-items:center;gap:4px;background:var(--accent);color:#fff;font-size:10px;font-weight:600;padding:3px 9px;border-radius:20px;margin-bottom:8px;}
.fb-core{font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--core);font-style:italic;margin-bottom:4px;}
.fb-prev{font-size:13px;font-family:'Nanum Myeongjo',serif;color:var(--ink2);line-height:1.7;}
.fb-hint{font-size:10px;color:var(--accent);margin-top:6px;opacity:.7;}

/* 주간 */
.wgrid{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin-bottom:14px;}
.dc{border:1px solid var(--line);border-radius:10px;padding:6px 2px;text-align:center;cursor:pointer;min-height:64px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;background:var(--paper);}
.dc.has{border-color:#D4956A;}
.dc.sel{background:var(--a2);border-color:var(--accent);}
.dc.td{border-color:var(--accent);border-width:2px;}
.dn{font-size:9px;color:var(--ink3);}
.dd{font-size:14px;font-weight:600;}
.dm{font-size:16px;}
.dcore{font-size:8px;color:var(--core);font-style:italic;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;padding:0 3px;text-align:center;}
.ebox{background:var(--bg);border-radius:10px;padding:12px;font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--ink2);line-height:2;min-height:56px;white-space:pre-wrap;}
.srow{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px;}
.sc{background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:12px 6px;text-align:center;}
.sv{font-size:22px;font-weight:600;}
.sl{font-size:10px;color:var(--ink3);margin-top:2px;}
.aibox{background:var(--bg);border-radius:10px;padding:14px;font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--ink2);line-height:2;min-height:64px;white-space:pre-wrap;}

/* 캘린더 */
.calh{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}
.caltitle{font-family:'Nanum Myeongjo',serif;font-size:20px;}
.calnav{background:none;border:1px solid var(--line);border-radius:8px;padding:6px 14px;cursor:pointer;font-size:16px;color:var(--ink2);}
.calgrid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:16px;}
.caldn{text-align:center;font-size:10px;color:var(--ink3);padding:6px 0;}
.calc{min-height:52px;border:1px solid var(--line);border-radius:8px;padding:4px;cursor:pointer;background:var(--paper);}
.calc.empty{background:transparent;border-color:transparent;cursor:default;pointer-events:none;}
.calc.has{border-color:#D4956A;}
.calc.td{border-color:var(--accent);border-width:2px;}
.cnum{font-size:12px;font-weight:500;color:var(--ink2);}
.cmood{font-size:14px;}
.ccore{font-size:8px;color:var(--core);font-style:italic;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-top:2px;}

/* 자산 */
.netcard{background:linear-gradient(135deg,#1A5C8C,#2D7AB5);border-radius:14px;padding:16px;margin-bottom:12px;color:#fff;text-align:center;}
.netlbl{font-size:11px;opacity:.8;margin-bottom:4px;}
.netval{font-size:28px;font-weight:700;}
.netsub{font-size:11px;opacity:.7;margin-top:4px;}
.goalcard{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:14px;margin-bottom:10px;}
.goalrow{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}
.goallbl{font-size:12px;color:var(--ink3);}
.goalpct{font-size:14px;font-weight:600;color:var(--accent);}
.pbar{height:8px;background:var(--line);border-radius:4px;overflow:hidden;margin-bottom:6px;}
.pfill{height:100%;background:linear-gradient(90deg,var(--accent),#E08050);border-radius:4px;transition:width .5s;}
.goalsub{font-size:11px;color:var(--ink3);}
.asec{background:var(--paper);border:1px solid var(--line);border-radius:14px;margin-bottom:10px;overflow:hidden;}
.asec-h{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;}
.asec-h span:first-child{flex:1;}
.arr{font-size:11px;color:var(--ink3);transition:transform .2s;}
.arr.on{transform:rotate(180deg);}
.asec-b{padding:0 16px 14px;display:none;}
.asec-b.on{display:block;}
.airow{display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--line);}
.airow:last-of-type{border-bottom:none;}
.ainame{flex:1;border:none;background:transparent;font-size:13px;font-family:'Pretendard',sans-serif;color:var(--ink);outline:none;}
.ainame::placeholder{color:var(--ink3);}
.aival{width:80px;border:none;background:var(--bg);border-radius:8px;padding:6px 8px;font-size:14px;font-weight:600;outline:none;text-align:right;font-family:'Pretendard',sans-serif;}
.av-a{color:var(--asset);}
.av-d,.av-e{color:var(--err);}
.av-i{color:var(--ok);}
.aiunit{font-size:11px;color:var(--ink3);white-space:nowrap;}
.aidel{background:none;border:none;cursor:pointer;font-size:16px;color:var(--ink3);padding:4px;line-height:1;}
.addbtn{width:100%;padding:8px;border:1px dashed var(--line);border-radius:8px;background:transparent;font-size:12px;color:var(--ink3);cursor:pointer;font-family:'Pretendard',sans-serif;margin-top:8px;}
.cfcard{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:14px 16px;margin-bottom:10px;}
.cfrow{display:flex;justify-content:space-between;align-items:center;padding:6px 0;}
.cflbl{font-size:13px;color:var(--ink2);}
.cfval{font-size:14px;font-weight:600;}
.divr{display:flex;align-items:center;gap:10px;margin:16px 0 12px;}
.divrl{flex:1;height:1px;background:var(--line);}
.divrt{font-size:11px;color:var(--ink3);letter-spacing:.5px;white-space:nowrap;}
.pcard{background:var(--c2);border:1px solid #C9AADC;border-radius:12px;padding:14px;margin-bottom:10px;}
.plbl{font-size:10px;color:var(--core);font-weight:600;letter-spacing:.5px;text-transform:uppercase;margin-bottom:6px;}
.ptx{width:100%;border:none;background:transparent;font-size:15px;font-family:'Nanum Myeongjo',serif;color:var(--core);resize:none;line-height:1.9;outline:none;}
.ptx::placeholder{color:#B09AC8;font-style:italic;font-size:13px;}

/* 분기 */
.cmpcard{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:14px;margin-bottom:10px;}
.badge{font-size:10px;font-weight:600;padding:3px 8px;border-radius:6px;}
.badge.bf{background:var(--line);color:var(--ink3);}
.badge.af{background:var(--a2);color:var(--accent);}
.cmptx{width:100%;border:none;background:var(--bg);border-radius:8px;padding:10px;font-size:13px;font-family:'Nanum Myeongjo',serif;color:var(--ink2);resize:none;line-height:1.9;outline:none;margin-top:6px;}
.cmptx::placeholder{color:var(--ink3);font-style:italic;}

/* 전체기록 */
.elist{display:flex;flex-direction:column;gap:10px;}
.eitem{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:14px;}
.eih{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;}
.eil{display:flex;align-items:center;gap:8px;cursor:pointer;flex:1;min-width:0;}
.eidate{font-size:11px;color:var(--ink3);white-space:nowrap;}
.eimood{font-size:18px;flex-shrink:0;}
.eia{display:flex;gap:4px;flex-shrink:0;}
.eibtn{font-size:14px;padding:5px 8px;border-radius:6px;border:1px solid var(--line);background:var(--bg);cursor:pointer;color:var(--ink3);}
.eibtn.del{color:var(--err);}
.eicore{font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--core);font-style:italic;margin-bottom:6px;cursor:pointer;line-height:1.7;}
.eitx{font-size:13px;font-family:'Nanum Myeongjo',serif;color:var(--ink2);line-height:1.7;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;cursor:pointer;}
.eimore{font-size:11px;color:var(--accent);margin-top:4px;cursor:pointer;}
.eidec{font-size:12px;color:var(--dec);font-style:italic;margin-top:4px;}
.empty{text-align:center;padding:48px 0;color:var(--ink3);font-size:14px;line-height:2.2;}

/* 팝업 */
.ov{position:fixed;inset:0;background:rgba(28,26,22,.5);display:flex;align-items:flex-end;z-index:200;}
.modal{background:var(--paper);border-radius:20px 20px 0 0;padding:20px 18px 40px;width:100%;max-height:88vh;overflow-y:auto;animation:su .22s ease;position:relative;will-change:transform;}
@keyframes su{from{transform:translateY(100%)}to{transform:none}}
.mh{width:40px;height:4px;background:var(--line);border-radius:2px;margin:0 auto 16px;}
.mx{position:absolute;top:14px;right:14px;background:var(--bg);border:1px solid var(--line);border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;color:var(--ink3);}
.mar{display:flex;gap:8px;margin-top:16px;padding-top:14px;border-top:1px solid var(--line);}
.mab{flex:1;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg);cursor:pointer;font-size:13px;color:var(--ink2);font-family:'Pretendard',sans-serif;}
.mab.del{color:var(--err);}
.mbox{border-radius:10px;padding:12px;margin-bottom:12px;}
.mblbl{font-size:10px;font-weight:600;text-transform:uppercase;margin-bottom:4px;}
.mbtx{font-size:14px;font-family:'Nanum Myeongjo',serif;line-height:1.9;white-space:pre-wrap;}
.elbl{font-size:10px;color:var(--ink3);text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px;}
.efld{width:100%;border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--ink);background:var(--paper);outline:none;resize:none;line-height:1.9;}
.efld:focus{border-color:var(--accent);}

/* 하단 네비 */
.bnav{position:fixed;bottom:0;left:0;right:0;height:var(--nh);background:var(--paper);border-top:1px solid var(--line);display:flex;align-items:center;justify-content:space-around;padding-bottom:env(safe-area-inset-bottom);z-index:100;}
.nb{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:8px 4px;border:none;background:transparent;cursor:pointer;}
.nb .ni{font-size:18px;color:var(--ink3);}
.nb .nl{font-size:9px;color:var(--ink3);font-family:'Pretendard',sans-serif;}
.nb.on .ni{color:var(--accent);}
.nb.on .nl{color:var(--accent);font-weight:600;}

/* 토스트 */
.toast{position:fixed;bottom:72px;left:50%;transform:translateX(-50%);background:rgba(28,26,22,.85);color:#fff;font-size:13px;padding:10px 18px;border-radius:20px;z-index:999;opacity:0;transition:opacity .2s;pointer-events:none;white-space:nowrap;}
.toast.on{opacity:1;}

/* 가계부 */
.snap-inp{width:100%;border:none;border-bottom:2px solid var(--line);background:transparent;font-size:18px;font-weight:700;color:var(--asset);outline:none;text-align:center;padding:4px 0;font-family:'Pretendard',sans-serif;}
.snap-inp:focus{border-color:var(--accent);}
.sum-card{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:12px 8px;text-align:center;}
.sum-card.income{background:#EAF3DE;border-color:#A8D080;}
.sum-card.expense{background:var(--err-bg);border-color:#F09595;}
.sum-lbl{font-size:10px;color:var(--ink3);margin-bottom:4px;}
.sum-val{font-size:20px;font-weight:700;color:var(--ink);}
.sum-card.income .sum-val{color:var(--ok);}
.sum-card.expense .sum-val{color:var(--err);}
.sum-unit{font-size:10px;color:var(--ink3);}
.type-btn{width:100%;padding:10px;border-radius:10px;border:1.5px solid var(--line);background:var(--bg);font-size:14px;font-weight:600;cursor:pointer;font-family:'Pretendard',sans-serif;color:var(--ink3);transition:all .15s;}
.type-btn.on{border-color:var(--accent);background:var(--a2);color:var(--accent);}
.linp{width:100%;border:1px solid var(--line);border-radius:8px;padding:10px 12px;font-family:'Pretendard',sans-serif;color:var(--ink);background:var(--bg);outline:none;}
.linp:focus{border-color:var(--accent);}
.cat-bar-row{margin-bottom:10px;}
.cat-bar-name{display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;}
.cat-bar-track{height:8px;background:var(--line);border-radius:4px;overflow:hidden;}
.cat-bar-fill{height:100%;border-radius:4px;transition:width .4s;}
.budget-inp-row{display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--line);}
.budget-inp-row:last-child{border-bottom:none;}
.budget-inp{width:80px;border:1px solid var(--line);border-radius:6px;padding:4px 8px;font-size:13px;font-weight:600;color:var(--asset);outline:none;text-align:right;font-family:'Pretendard',sans-serif;background:var(--bg);}
.ledger-item{display:flex;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid var(--line);}
.ledger-item:last-child{border-bottom:none;}
.ledger-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.ledger-dot.in{background:var(--ok);}
.ledger-dot.ex{background:var(--err);}
.ledger-info{flex:1;min-width:0;}
.ledger-cat{font-size:11px;color:var(--ink3);}
.ledger-memo{font-size:13px;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.ledger-date{font-size:10px;color:var(--ink3);}
.ledger-amt{font-size:15px;font-weight:700;white-space:nowrap;}
.ledger-amt.in{color:var(--ok);}
.ledger-amt.ex{color:var(--err);}
.ledger-actions{display:flex;gap:4px;flex-shrink:0;}
.ledit{font-size:12px;padding:3px 6px;border-radius:6px;border:1px solid var(--line);background:var(--bg);cursor:pointer;color:var(--ink3);}
.ledit.del{color:var(--err);}
.ledger-item.editing{background:var(--a2);border-radius:8px;padding:8px;margin:-4px;}
</style>
</head>
<body>
<div id="app">
  <div class="tb">
    <div class="tb-brand">📔 나의 일기장</div>
    <div class="sync" onclick="onSyncClick()">
      <div class="dot" id="dot"></div>
      <span id="slbl">연결 중...</span>
    </div>
  </div>

  <div class="scr" id="scr">

    <!-- 오늘 -->
    <div class="pn on" id="pn-daily">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2px;">
        <div class="ptitle" id="dtitle">오늘의 일기</div>
        <button class="dpbtn" onclick="toggleDP()">📅 날짜 선택</button>
      </div>
      <div class="psub" id="dsub"></div>

      <div class="dpwrap" id="dpwrap">
        <div style="font-size:12px;color:var(--ink3);margin-bottom:8px;">작성할 날짜를 선택하세요</div>
        <input type="date" id="dpinp" class="dpinp" onchange="onDP(this.value)">
        <button class="dptd" onclick="pickToday()">오늘로 돌아가기</button>
      </div>

      <div class="fb" id="fbcard" style="display:none" onclick="openFlashback()">
        <div class="fb-badge">📅 1년 전 오늘</div>
        <div id="fbdate" style="font-size:11px;color:var(--accent);margin-bottom:6px;"></div>
        <div class="fb-core" id="fbcore"></div>
        <div class="fb-prev" id="fbprev"></div>
        <div class="fb-hint">탭하면 전체 내용 →</div>
      </div>

      <!-- 이번 주 목표 연결 위젯 -->
      <div id="daily-goals-widget" style="display:none;background:linear-gradient(135deg,#F0EAF8,#E8F0F8);border:1px solid #C9AADC;border-radius:14px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <span style="font-size:11px;font-weight:600;color:var(--core);letter-spacing:.5px;text-transform:uppercase;">⚡ 이번 주 목표</span>
          <span style="font-size:10px;color:var(--ink3);" id="daily-goal-pct"></span>
        </div>
        <div id="daily-goal-items"></div>
        <div style="margin-top:8px;padding-top:8px;border-top:1px solid #C9AADC;font-size:11px;color:var(--ink3);cursor:pointer;" onclick="goTab('goals')">목표 탭에서 관리 →</div>
      </div>

      <div class="core-hero">
        <div class="core-lbl">✨ 오늘의 핵심 한 줄</div>
        <textarea class="core-inp" id="core" rows="2" placeholder="오늘을 한 문장으로 압축하세요..."></textarea>
      </div>

      <div class="card">
        <div class="ch"><span class="ci">📝</span><span class="ct">오늘 있었던 일</span><span class="cd">맥락 중심으로</span></div>
        <textarea class="tx" id="dtx" rows="6" placeholder="오늘 있었던 일을 적어보세요..." oninput="ucc()"></textarea>
        <div class="afoot"><span class="cc"><span id="cc">0</span>자</span></div>
      </div>

      <button class="xbtn" id="xbtn" onclick="toggleX()">+ 더 쓰기 — 결정 · 배움 · 질문 · 영감</button>
      <div class="xbody" id="xbody">
        <div class="dcard">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;"><span style="font-size:16px;">⚖️</span><span style="font-size:13px;font-weight:600;color:var(--dec);">오늘의 결정</span><span style="font-size:11px;color:#C4956A;margin-left:auto;">달리오 방식</span></div>
          <div class="dlbl">무엇을 결정했나</div>
          <textarea class="dtx" id="dwhat" rows="2" placeholder="어떤 선택을 했나요?"></textarea>
          <div class="ddiv"></div>
          <div class="dlbl">왜 그 선택을 했나</div>
          <textarea class="dtx" id="dwhy" rows="2" placeholder="어떤 근거와 판단으로?"></textarea>
        </div>
        <div class="mcard">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;"><span style="font-size:16px;">🔍</span><span style="font-size:13px;font-weight:600;color:var(--mis);">실수 또는 배움</span><span style="font-size:11px;color:#6BA090;margin-left:auto;">고통 + 반성 = 진보</span></div>
          <textarea class="mtx" id="dmistake" rows="3" placeholder="오늘 틀렸던 것, 아쉬웠던 것, 배운 것..."></textarea>
        </div>
        <div class="qcard">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;"><span style="font-size:16px;">❓</span><span style="font-size:13px;font-weight:600;color:var(--q);">오늘의 질문 → 나의 답</span></div>
          <div class="qlbl">질문</div>
          <textarea class="qtx" id="dq" rows="2" placeholder="나는 무슨 경험을 쌓고 있을까?"></textarea>
          <div class="qdiv"></div>
          <div class="qlbl">나의 답</div>
          <textarea class="qtx" id="da" rows="2" placeholder="짧아도 괜찮아요."></textarea>
        </div>
        <div class="icard">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;"><span style="font-size:16px;">💡</span><span style="font-size:13px;font-weight:600;color:#3B6D11;">오늘의 영감</span><span style="font-size:11px;color:#88A870;margin-left:auto;">책/유튜브/사람</span></div>
          <textarea class="itx" id="dins" rows="3" placeholder="터보832 — '삶은 결국 경험의 총합'..."></textarea>
        </div>
      </div>

      <button class="bp" id="savebtn" onclick="saveEntry()">저장하기</button>
      <div class="notice" id="savenotice"></div>
    </div>

    <!-- 주간 -->
    <div class="pn" id="pn-weekly">
      <div class="ptitle">주간 정리</div>
      <div class="psub" id="wsub"></div>

      <!-- 이번 주 목표 달성률 연결 -->
      <div id="weekly-goals-widget" style="display:none;background:linear-gradient(135deg,#F0EAF8,#EAF3DE);border-radius:14px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <span style="font-size:12px;font-weight:600;color:var(--core);">🎯 이번 주 목표 달성률</span>
          <span style="font-size:14px;font-weight:700;color:var(--accent);" id="weekly-goal-pct">—</span>
        </div>
        <div style="height:8px;background:var(--line);border-radius:4px;overflow:hidden;margin-bottom:8px;">
          <div id="weekly-goal-bar" style="height:100%;background:linear-gradient(90deg,var(--core),var(--accent));border-radius:4px;transition:width .4s;width:0%;"></div>
        </div>
        <div id="weekly-goal-items" style="display:flex;flex-wrap:wrap;gap:6px;"></div>
        <div style="margin-top:8px;font-size:11px;color:var(--ink3);cursor:pointer;" onclick="goTab('goals')">목표 탭에서 관리 →</div>
      </div>

      <div class="wgrid" id="wgrid"></div>
      <div class="card">
        <div class="ch"><span class="ci">📖</span><span class="ct">선택한 날</span></div>
        <div class="ebox" id="wdetail">날짜를 탭하면 일기가 표시됩니다.</div>
      </div>
      <div class="srow">
        <div class="sc"><div class="sv" id="scnt">—</div><div class="sl">기록한 날</div></div>
        <div class="sc"><div class="sv" id="sdec">—</div><div class="sl">결정</div></div>
        <div class="sc"><div class="sv" id="smis">—</div><div class="sl">배움</div></div>
      </div>
      <div class="card">
        <div class="ch"><span class="ci">🤖</span><span class="ct">AI 주간 정리</span></div>
        <div class="aibox" id="aibox">버튼을 누르면 이번 주를 따뜻하게 정리해드려요.</div>
      </div>
      <button class="bg" id="aibtn" onclick="genAI()">이번 주 AI 정리 받기 ↗</button>
    </div>

    <!-- 월간 -->
    <div class="pn" id="pn-monthly">
      <div class="ptitle">월간 가계부</div>
      <div class="psub" id="msub"></div>

      <!-- 월 이동 -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <button class="calnav" onclick="chLedgerMo(-1)">◀</button>
        <div style="font-family:'Nanum Myeongjo',serif;font-size:20px;" id="ledger-title"></div>
        <button class="calnav" onclick="chLedgerMo(1)">▶</button>
      </div>

      <!-- 순자산 + 목표 -->
      <div class="netcard">
        <div class="netlbl">순자산 (총자산 - 부채)</div>
        <div class="netval" id="netval">— 억원</div>
        <div class="netsub" id="netsub">아래에서 자산 입력</div>
      </div>

      <!-- 이달 목표 연결 -->
      <div id="monthly-goals-widget" style="display:none;background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:14px;margin-bottom:10px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <span style="font-size:12px;font-weight:600;color:var(--ink);">📅 이달 목표</span>
          <span style="font-size:13px;font-weight:700;color:var(--accent);" id="monthly-goal-pct">—</span>
        </div>
        <div style="height:6px;background:var(--line);border-radius:3px;overflow:hidden;margin-bottom:8px;">
          <div id="monthly-goal-bar" style="height:100%;background:var(--accent);border-radius:3px;transition:width .4s;width:0%;"></div>
        </div>
        <div id="monthly-goal-items" style="font-size:12px;color:var(--ink2);"></div>
        <div style="margin-top:8px;font-size:11px;color:var(--ink3);cursor:pointer;" onclick="goTab('goals')">목표 탭에서 관리 →</div>
      </div>

      <div class="goalcard">
        <div class="goalrow"><span class="goallbl">🎯 400억 목표 진행률</span><span class="goalpct" id="gpct">0%</span></div>
        <div class="pbar"><div class="pfill" id="pfill" style="width:0%"></div></div>
        <div class="goalsub" id="gsub">목표까지 400억 남았어요</div>
      </div>

      <!-- 자산 스냅샷 (간소화) -->
      <div class="card" style="margin-bottom:10px;">
        <div class="ch"><span class="ci">💎</span><span class="ct">이달 자산 스냅샷</span><span class="cd">월말 기준</span></div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
          <div style="text-align:center;">
            <div style="font-size:10px;color:var(--ink3);margin-bottom:4px;">총 자산 (억)</div>
            <input type="number" id="snap-asset" class="snap-inp" placeholder="0" oninput="calcNet()">
          </div>
          <div style="text-align:center;">
            <div style="font-size:10px;color:var(--ink3);margin-bottom:4px;">부채 (억)</div>
            <input type="number" id="snap-debt" class="snap-inp av-d" placeholder="0" oninput="calcNet()">
          </div>
          <div style="text-align:center;">
            <div style="font-size:10px;color:var(--ok);margin-bottom:4px;font-weight:600;">순자산 (억)</div>
            <div id="snap-net" style="font-size:18px;font-weight:700;color:var(--asset);">0</div>
          </div>
        </div>
      </div>

      <!-- 이달 요약 -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px;">
        <div class="sum-card income"><div class="sum-lbl">총 수입</div><div class="sum-val" id="sum-income">0</div><div class="sum-unit">만원</div></div>
        <div class="sum-card expense"><div class="sum-lbl">총 지출</div><div class="sum-val" id="sum-expense">0</div><div class="sum-unit">만원</div></div>
        <div class="sum-card"><div class="sum-lbl">순현금</div><div class="sum-val" id="sum-net">0</div><div class="sum-unit">만원</div></div>
      </div>

      <!-- 예산 대비 -->
      <div class="card">
        <div class="ch"><span class="ci">📊</span><span class="ct">카테고리별 지출</span><span class="cd" style="cursor:pointer;color:var(--accent);" onclick="toggleBudgetEdit()">예산 설정</span></div>
        <div id="budget-edit" style="display:none;margin-bottom:12px;padding:12px;background:var(--bg);border-radius:10px;">
          <div style="font-size:11px;color:var(--ink3);margin-bottom:8px;">월 예산 설정 (만원)</div>
          <div id="budget-inputs"></div>
        </div>
        <div id="cat-bars"></div>
      </div>

      <!-- 내역 추가 -->
      <div class="card">
        <div class="ch"><span class="ci">➕</span><span class="ct">내역 추가</span></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
          <button class="type-btn on" id="tbtn-in" onclick="setType('income')">💰 수입</button>
          <button class="type-btn" id="tbtn-ex" onclick="setType('expense')">💸 지출</button>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
          <input type="date" id="l-date" class="linp" style="font-size:13px;">
          <select id="l-cat" class="linp" style="font-size:13px;"></select>
        </div>
        <div style="display:grid;grid-template-columns:1fr auto;gap:8px;margin-bottom:8px;">
          <input type="number" id="l-amount" class="linp" placeholder="금액 (만원)" style="font-size:15px;font-weight:600;">
          <span style="display:flex;align-items:center;font-size:13px;color:var(--ink3);">만원</span>
        </div>
        <input type="text" id="l-memo" class="linp" placeholder="메모 (선택)" style="font-size:13px;margin-bottom:10px;">
        <button class="bp" id="ledger-add-btn" onclick="addLedger()">추가하기</button>
        <button class="bg" id="ledger-cancel-btn" onclick="cancelEditLedger()" style="display:none;margin-top:8px;">수정 취소</button>
        <div class="notice" id="lnotice"></div>
      </div>

      <!-- 내역 목록 -->
      <div class="card">
        <div class="ch"><span class="ci">📋</span><span class="ct">이달 내역</span><span class="cd" id="ledger-count"></span></div>
        <div id="ledger-list"></div>
      </div>

      <!-- 이달 원칙 -->
      <div class="pcard"><div class="plbl">이달의 원칙</div><textarea class="ptx" id="mprinciple" rows="2" placeholder="이달 가장 중요하게 깨달은 원칙..."></textarea></div>
      <button class="bp" id="monthly-save-btn" onclick="saveMonthly()">이달 저장</button>
      <div class="notice" id="mnotice"></div>
    </div>

    <!-- 분기 -->
    <div class="pn" id="pn-quarterly">
      <div class="ptitle">분기 회고</div>
      <div class="psub" id="qsub"></div>
      <div class="cmpcard">
        <div class="ch"><span class="ci">🔄</span><span class="ct">3개월 전 나 vs 지금 나</span></div>
        <div style="margin-bottom:10px;"><span class="badge bf">3개월 전</span><textarea class="cmptx" id="qbefore" rows="3" placeholder="그때 나는 이렇게 생각했다..."></textarea></div>
        <div><span class="badge af">지금</span><textarea class="cmptx" id="qafter" rows="3" placeholder="지금은 이렇게 바뀌었다..."></textarea></div>
      </div>
      <div class="card">
        <div class="ch"><span class="ci">⚠️</span><span class="ct">반복된 실수 + 다음 분기 집중</span></div>
        <textarea class="tx" id="qmistakes" rows="3" style="font-size:14px;line-height:1.9;" placeholder="이번 분기 반복된 실수는? 다음 분기 가장 중요한 것은?"></textarea>
      </div>
      <div class="pcard"><div class="plbl">이번 분기 원칙 Top 3</div><textarea class="ptx" id="qprinciples" rows="4" placeholder="1. ...\n2. ...\n3. ..."></textarea></div>
      <button class="bp" onclick="saveQuarterly()">분기 회고 저장</button>
      <div class="notice" id="qnotice"></div>
    </div>

    <!-- 전체 -->
    <div class="pn" id="pn-all">
      <div class="ptitle">전체 기록</div>
      <div class="psub" id="asub"></div>
      <div class="elist" id="elist"></div>
    </div>

    <!-- 목표 -->
    <div class="pn" id="pn-goals">
      <div class="ptitle">목표 관리</div>
      <div class="psub" id="gsub2"></div>

      <!-- 400억 연결 -->
      <div style="background:linear-gradient(135deg,#1A5C8C,#6B3FA0);border-radius:14px;padding:16px;margin-bottom:12px;color:#fff;text-align:center;">
        <div style="font-size:11px;opacity:.8;margin-bottom:4px;">🎯 최종 목표</div>
        <div style="font-size:24px;font-weight:700;">400억 순자산</div>
        <div style="font-size:11px;opacity:.7;margin-top:4px;">40살까지 · 달리오 원칙 기반</div>
      </div>

      <!-- 연간 목표 -->
      <div class="card">
        <div class="ch"><span class="ci">🏆</span><span class="ct">올해 목표</span><span class="cd" id="yr-pct">0% 달성</span></div>
        <div id="yr-goals-list"></div>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <input type="text" id="yr-inp" class="linp" placeholder="올해 목표 추가..." style="font-size:14px;flex:1;">
          <button onclick="addGoal('yr')" style="padding:10px 14px;border-radius:8px;border:none;background:var(--accent);color:#fff;cursor:pointer;font-size:18px;">+</button>
        </div>
      </div>

      <!-- 월간 목표 -->
      <div class="card">
        <div class="ch"><span class="ci">📅</span><span class="ct">이번 달 목표</span><span class="cd" id="mo-pct">0% 달성</span></div>
        <div id="mo-goals-list"></div>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <input type="text" id="mo-inp" class="linp" placeholder="이번 달 목표 추가..." style="font-size:14px;flex:1;">
          <button onclick="addGoal('mo')" style="padding:10px 14px;border-radius:8px;border:none;background:var(--accent);color:#fff;cursor:pointer;font-size:18px;">+</button>
        </div>
      </div>

      <!-- 주간 목표 -->
      <div class="card">
        <div class="ch"><span class="ci">⚡</span><span class="ct">이번 주 목표</span><span class="cd" id="wk-pct">0% 달성</span></div>
        <div id="wk-goals-list"></div>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <input type="text" id="wk-inp" class="linp" placeholder="이번 주 목표 추가..." style="font-size:14px;flex:1;">
          <button onclick="addGoal('wk')" style="padding:10px 14px;border-radius:8px;border:none;background:var(--accent);color:#fff;cursor:pointer;font-size:18px;">+</button>
        </div>
      </div>

      <!-- 회고 -->
      <div class="pcard">
        <div class="plbl">📝 목표 회고 — 못 한 이유 / 다음 주 집중</div>
        <textarea class="ptx" id="goal-retro" rows="3" placeholder="달성 못 한 목표의 이유와 다음에 할 것..."></textarea>
      </div>

      <button class="bp" onclick="saveGoals()">목표 저장</button>
      <div class="notice" id="gnotice"></div>
    </div>

  </div>

  <nav class="bnav">
    <button class="nb on" id="nb-daily" onclick="goTab('daily')"><span class="ni">✏️</span><span class="nl">오늘</span></button>
    <button class="nb" id="nb-weekly" onclick="goTab('weekly')"><span class="ni">📅</span><span class="nl">주간</span></button>
    <button class="nb" id="nb-monthly" onclick="goTab('monthly')"><span class="ni">💰</span><span class="nl">월간</span></button>
    <button class="nb" id="nb-goals" onclick="goTab('goals')"><span class="ni">🎯</span><span class="nl">목표</span></button>
    <button class="nb" id="nb-quarterly" onclick="goTab('quarterly')"><span class="ni">🔄</span><span class="nl">분기</span></button>
    <button class="nb" id="nb-all" onclick="goTab('all')"><span class="ni">📚</span><span class="nl">전체</span></button>
  </nav>
</div>

<!-- 상세 팝업 -->
<div class="ov" id="vmod" style="display:none" onclick="if(event.target===this)closeV()">
  <div class="modal">
    <div class="mh"></div>
    <button class="mx" onclick="closeV()">✕</button>
    <div id="vdate" style="font-size:11px;color:var(--ink3);margin-bottom:6px;"></div>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span id="vmood" style="font-size:32px;"></span><span id="vemo" style="font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--ink2);font-style:italic;"></span></div>
    <div id="vcore-w" class="mbox" style="background:var(--c2);display:none;"><div class="mblbl" style="color:var(--core);">✨ 핵심 한 줄</div><div class="mbtx" id="vcore" style="color:var(--core);font-size:16px;font-style:italic;"></div></div>
    <div id="vtx-w" style="display:none;margin-bottom:12px;"><div style="font-size:10px;color:var(--ink3);text-transform:uppercase;margin-bottom:6px;">📝 오늘 있었던 일</div><div id="vtx" style="font-size:14px;font-family:'Nanum Myeongjo',serif;color:var(--ink);line-height:2;white-space:pre-wrap;"></div></div>
    <div id="vdec-w" class="mbox" style="background:var(--d2);display:none;"><div class="mblbl" style="color:var(--dec);">⚖️ 결정</div><div class="mbtx" id="vdec" style="color:var(--ink2);"></div></div>
    <div id="vmis-w" class="mbox" style="background:var(--m2);display:none;"><div class="mblbl" style="color:var(--mis);">🔍 실수/배움</div><div class="mbtx" id="vmis" style="color:var(--ink2);"></div></div>
    <div id="vq-w" class="mbox" style="background:var(--q2);display:none;"><div class="mblbl" style="color:var(--q);">❓ 질문→답</div><div class="mbtx" id="vq" style="color:var(--ink2);"></div></div>
    <div id="vins-w" class="mbox" style="background:#EAF3DE;display:none;"><div class="mblbl" style="color:#3B6D11;">💡 영감</div><div class="mbtx" id="vins" style="color:var(--ink2);"></div></div>
    <div class="mar">
      <button class="mab" onclick="copyV()">📋 복사</button>
      <button class="mab" onclick="editV()">✏️ 수정</button>
      <button class="mab del" onclick="delV()">🗑️ 삭제</button>
    </div>
  </div>
</div>

<!-- 수정 팝업 -->
<div class="ov" id="emod" style="display:none" onclick="if(event.target===this)closeE()">
  <div class="modal" style="max-height:92vh;">
    <div class="mh"></div>
    <button class="mx" onclick="closeE()">✕</button>
    <div id="edate" style="font-family:'Nanum Myeongjo',serif;font-size:17px;margin-bottom:16px;"></div>
    <div style="margin-bottom:12px;"><div class="elbl">감정 한 줄</div><textarea class="efld" id="eemo" rows="2"></textarea></div>
    <div style="margin-bottom:12px;background:var(--c2);border-radius:12px;padding:12px;"><div class="elbl" style="color:var(--core);">✨ 핵심 한 줄</div><textarea class="efld" id="ecore" rows="2" style="color:var(--core);font-size:16px;"></textarea></div>
    <div style="margin-bottom:12px;"><div class="elbl">📝 오늘 있었던 일</div><textarea class="efld" id="etx" rows="5"></textarea></div>
    <div style="margin-bottom:12px;background:var(--d2);border-radius:12px;padding:12px;"><div class="elbl" style="color:var(--dec);">⚖️ 결정 — 무엇을</div><textarea class="efld" id="edw" rows="2"></textarea><div class="elbl" style="color:var(--dec);margin-top:8px;">이유</div><textarea class="efld" id="edy" rows="2"></textarea></div>
    <div style="margin-bottom:12px;background:var(--m2);border-radius:12px;padding:12px;"><div class="elbl" style="color:var(--mis);">🔍 실수/배움</div><textarea class="efld" id="emis" rows="2"></textarea></div>
    <div style="margin-bottom:12px;background:var(--q2);border-radius:12px;padding:12px;"><div class="elbl" style="color:var(--q);">❓ 질문</div><textarea class="efld" id="eq" rows="2"></textarea><div class="elbl" style="color:var(--q);margin-top:8px;">나의 답</div><textarea class="efld" id="ea" rows="2"></textarea></div>
    <div style="margin-bottom:16px;background:#EAF3DE;border-radius:12px;padding:12px;"><div class="elbl" style="color:#3B6D11;">💡 영감</div><textarea class="efld" id="eins" rows="2"></textarea></div>
    <div style="display:flex;gap:8px;">
      <button class="bp" id="esavebtn" onclick="saveE()" style="flex:2;">저장하기</button>
      <button class="bg" onclick="closeE()" style="flex:1;">취소</button>
    </div>
    <div class="notice" id="enotice" style="margin-top:8px;"></div>
  </div>
</div>

<div class="toast" id="toast"></div>

<script>
// ── 설정 ──
const SBU='https://aeopocvdsfiuhdyutwdb.supabase.co';
const SBK='sb_publishable_sC1ZGLuPueCzy4o7A3pxtw_CDndcFXV';
const GOAL=400;
const DAYS=['일','월','화','수','목','금','토'];
const MOS=['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
const SECS={re:{u:'억',c:'av-a'},fi:{u:'억',c:'av-a'},co:{u:'억',c:'av-a'},et:{u:'억',c:'av-a'},de:{u:'억',c:'av-d'},in:{u:'만원',c:'av-i'},ex:{u:'만원',c:'av-e'}};

// ── 상태 ──
let entries={}, vEntry=null, eEntry=null, wDate=null, calY, calM, aData={}, fbEntry=null;
let tabs=['daily','weekly','monthly','goals','quarterly','all'];
let goalsData={yr:[],mo:[],wk:[]}; // renderGoalWidgets보다 먼저 선언

// ── Supabase API ──
const H={'Content-Type':'application/json',apikey:SBK,Authorization:'Bearer '+SBK};

async function sbGet(path,retries=2){
  for(let i=0;i<=retries;i++){
    try{
      const r=await fetch(SBU+'/rest/v1/'+path,{headers:H});
      if(!r.ok)throw new Error(await r.text());
      return r.json();
    }catch(err){
      if(i===retries)throw err;
      await new Promise(r=>setTimeout(r,800*(i+1)));
    }
  }
}
async function sbRPC(fn,body){
  const r=await fetch(SBU+'/rest/v1/rpc/'+fn,{method:'POST',headers:H,body:JSON.stringify(body)});
  if(!r.ok)throw new Error(await r.text());
  return true;
}
async function sbDel(path){
  const r=await fetch(SBU+'/rest/v1/'+path,{method:'DELETE',headers:H});
  if(!r.ok)throw new Error(await r.text());
  return true;
}

// ── 유틸 ──
function td(){const d=new Date();return `${d.getFullYear()}-${p2(d.getMonth()+1)}-${p2(d.getDate())}`;}
function p2(n){return String(n).padStart(2,'0');}
function fd(s){if(!s)return'날짜 없음';const d=new Date(s+'T00:00:00');return `${d.getFullYear()}년 ${MOS[d.getMonth()]} ${d.getDate()}일 (${DAYS[d.getDay()]})`;}
function fmtD(d){return `${d.getFullYear()}-${p2(d.getMonth()+1)}-${p2(d.getDate())}`;}
function wdates(){const t=new Date(),dow=t.getDay();return Array.from({length:7},(_,i)=>{const d=new Date(t);d.setDate(t.getDate()-dow+i);return fmtD(d);});}
function mk(){const d=new Date();return `m_${d.getFullYear()}_${d.getMonth()+1}`;}
function qk(){const d=new Date(),q=Math.ceil((d.getMonth()+1)/3);return `q_${d.getFullYear()}_Q${q}`;}
function gv(id){return(document.getElementById(id)?.value||'').trim();}
function sv(id,v){const e=document.getElementById(id);if(e)e.value=v||'';}
function sh(id,v){const e=document.getElementById(id);if(e)e.style.display=v?'block':'none';}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),2500);}
function notice(id,m,t){const e=document.getElementById(id);if(!e)return;e.textContent=m;e.className='notice '+t;setTimeout(()=>{e.textContent='';e.className='notice';},3000);}

function setSync(s){
  document.getElementById('dot').className='dot'+(s==='s'?' s':s==='e'?' e':'');
  document.getElementById('slbl').textContent=s==='s'?'저장 중...':s==='e'?'오류 — 탭하여 재시도':'연결됨';
}
function onSyncClick(){if(document.getElementById('dot').classList.contains('e'))location.reload();}
function ucc(){document.getElementById('cc').textContent=document.getElementById('dtx').value.length;}

// ── 데이터 변환 ──
function r2e(r){return{date:r.date,mood:r.mood||'',emotion:r.emotion||'',text:r.text||'',core:r.core||'',question:r.question||'',answer:r.answer||'',insight:r.insight||'',dWhat:r.decision_what||'',dWhy:r.decision_why||'',mistake:r.mistake||'',tags:r.tags||''};}
function e2r(e){return{p_date:e.date,p_mood:e.mood||'',p_emotion:e.emotion||'',p_text:e.text||'',p_core:e.core||'',p_question:e.question||'',p_answer:e.answer||'',p_insight:e.insight||'',p_decision_what:e.dWhat||'',p_decision_why:e.dWhy||'',p_mistake:e.mistake||'',p_tags:e.tags||''};}

// ── 초기화 ──
async function init(){
  const now=new Date();calY=now.getFullYear();calM=now.getMonth();
  const q=Math.ceil((now.getMonth()+1)/3);
  document.getElementById('dsub').textContent=fd(td());
  document.getElementById('msub').textContent=`${now.getFullYear()}년 ${MOS[now.getMonth()]} 가계부`;
  const wd=wdates();
  const f=new Date(wd[0]+'T00:00:00'),l=new Date(wd[6]+'T00:00:00');
  document.getElementById('wsub').textContent=`${f.getMonth()+1}월 ${f.getDate()}일 — ${l.getMonth()+1}월 ${l.getDate()}일`;

  setSync('s');
  try{
    // 최근 180일만 로드 + 전체 개수 병렬 조회
    const cutoff=new Date();cutoff.setDate(cutoff.getDate()-180);
    const cutoffStr=fmtD(cutoff);
    const [rows]=await Promise.all([
      sbGet(`diary_entries?select=*&date=gte.${cutoffStr}&order=date.desc`),
      fetchTotalCount()
    ]);
    rows.forEach(r=>{entries[r.date]=r2e(r);});
    setSync('ok');
  }catch(err){setSync('e');console.error('초기화 실패',err);}

  loadDay(td());

  // 1년 전
  const ly=new Date();ly.setFullYear(ly.getFullYear()-1);
  const lys=fmtD(ly);
  // 1년 전 데이터는 별도 조회 (180일 범위 밖일 수 있음)
  if(!entries[lys]){
    try{
      const lyRows=await sbGet(`diary_entries?select=*&date=eq.${lys}`);
      if(lyRows&&lyRows.length>0)entries[lys]=r2e(lyRows[0]);
    }catch(e){}
  }
  fbEntry=entries[lys]||null;
  if(fbEntry){
    document.getElementById('fbdate').textContent=fd(lys);
    if(fbEntry.core)document.getElementById('fbcore').textContent=`"${fbEntry.core}"`;
    document.getElementById('fbprev').textContent=(fbEntry.text||'').slice(0,60)+((fbEntry.text||'').length>60?'...':'');
    document.getElementById('fbcard').style.display='block';
  }

  // 병렬 로드 (성능 최적화)
  await Promise.all([
    loadMonthlyData(),
    loadQuarterlyData(),
    loadGoals()
  ]);
}

// ── 날짜 선택 ──
function toggleDP(){
  const w=document.getElementById('dpwrap');
  const open=w.style.display==='block';
  w.style.display=open?'none':'block';
  if(!open){const i=document.getElementById('dpinp');i.value=wDate||td();i.max=td();}
}
function onDP(v){if(!v)return;wDate=v;updDHeader();loadDay(v);document.getElementById('dpwrap').style.display='none';}
function pickToday(){wDate=null;updDHeader();loadDay(td());document.getElementById('dpwrap').style.display='none';}
function updDHeader(){
  const d=wDate||td(),it=d===td();
  document.getElementById('dtitle').textContent=it?'오늘의 일기':fd(d)+' 일기';
  document.getElementById('dsub').textContent=it?fd(td()):'과거 날짜 — 저장하면 해당 날짜로 기록돼요.';
  document.getElementById('savebtn').textContent=it?'저장하기':fd(d)+' 저장';
}
function loadDay(ds){
  ['core','dtx','dwhat','dwhy','dmistake','dq','da','dins'].forEach(id=>sv(id,''));
  ucc();
  const e=entries[ds];
  if(e){
    sv('core',e.core);sv('dtx',e.text);ucc();
    sv('dwhat',e.dWhat);sv('dwhy',e.dWhy);
    sv('dmistake',e.mistake);sv('dq',e.question);sv('da',e.answer);sv('dins',e.insight);
    if(ds!==td())toast('기존 기록을 불러왔어요');
    if(e.dWhat||e.mistake||e.question||e.insight){
      document.getElementById('xbody').classList.add('on');
      document.getElementById('xbtn').textContent='− 접기';
    }
  }
}
function openFlashback(){if(fbEntry)openV(fbEntry);}

// ── 더 쓰기 ──
function toggleX(){
  const b=document.getElementById('xbody'),btn=document.getElementById('xbtn');
  const o=b.classList.toggle('on');
  btn.textContent=o?'− 접기':'+ 더 쓰기 — 결정 · 배움 · 질문 · 영감';
}

// ── 일기 저장 ──
async function saveEntry(){
  const d=wDate||td();
  const core=gv('core'),text=gv('dtx');
  if(!core&&!text){notice('savenotice','핵심 한 줄이나 내용을 입력해주세요.','err');return;}
  const btn=document.getElementById('savebtn');
  btn.disabled=true;btn.textContent='저장 중...';setSync('s');
  const e={date:d,mood:'',emotion:'',text,core,dWhat:gv('dwhat'),dWhy:gv('dwhy'),mistake:gv('dmistake'),question:gv('dq'),answer:gv('da'),insight:gv('dins'),tags:''};
  try{
    await sbRPC('upsert_diary',e2r(e));
    entries[d]=e;setSync('ok');
    notice('savenotice',d===td()?'저장되었어요 ✓':fd(d)+' 저장되었어요 ✓','ok');
    renderWeek();
  }catch(err){setSync('e');notice('savenotice','저장 실패: '+err.message,'err');}
  btn.disabled=false;btn.textContent=d===td()?'저장하기':fd(d)+' 저장';
}

// ── 탭 전환 ──
function goTab(t){
  tabs.forEach(x=>{
    const pn=document.getElementById('pn-'+x);
    const nb=document.getElementById('nb-'+x);
    if(pn)pn.classList.toggle('on',x===t);
    if(nb)nb.classList.toggle('on',x===t);
  });
  document.getElementById('scr').scrollTop=0;
  if(t==='weekly')renderWeek();
  if(t==='monthly'){
    // 원칙 입력 중인 내용 임시 보존
    const mp=document.getElementById('mprinciple');
    const tempPrinciple=mp?.value||'';
    initLedger();
    // 로드 후 입력 중이던 원칙 복원 (저장 전 내용 유지)
    if(tempPrinciple&&tempPrinciple!==savedPrinciple){
      setTimeout(()=>{const el=document.getElementById('mprinciple');if(el)el.value=tempPrinciple;},300);
    }
  }
  if(t==='goals')loadGoals();
  if(t==='quarterly')loadQuarterlyData();
  if(t==='all'){allPage=1;renderAll();}
}

// ── 상세 팝업 ──
function openV(e){
  vEntry=e;
  document.getElementById('vdate').textContent=fd(e.date);
  document.getElementById('vmood').textContent=e.mood||'';
  document.getElementById('vemo').textContent=e.emotion||'';
  const s=(wid,val,tid)=>{sh(wid,val);if(val&&tid)document.getElementById(tid).textContent=val;};
  s('vcore-w',e.core,'vcore');
  s('vtx-w',e.text,'vtx');
  const dec=[e.dWhat&&`결정: ${e.dWhat}`,e.dWhy&&`이유: ${e.dWhy}`].filter(Boolean).join('\n');
  s('vdec-w',dec,'vdec');
  s('vmis-w',e.mistake,'vmis');
  const qa=[e.question&&`Q: ${e.question}`,e.answer&&`→ ${e.answer}`].filter(Boolean).join('\n');
  s('vq-w',qa,'vq');
  s('vins-w',e.insight,'vins');
  document.getElementById('vmod').style.display='flex';
}
function closeV(){document.getElementById('vmod').style.display='none';vEntry=null;}
function copyV(){
  if(!vEntry)return;const e=vEntry;
  let t=`📔 ${fd(e.date)}\n`;
  if(e.core)t+=`\n✨ "${e.core}"\n`;
  if(e.text)t+=`\n📝 ${e.text}\n`;
  if(e.dWhat)t+=`\n⚖️ ${e.dWhat}\n이유: ${e.dWhy||''}\n`;
  if(e.mistake)t+=`\n🔍 ${e.mistake}\n`;
  if(e.question)t+=`\n❓ ${e.question}\n→ ${e.answer||''}\n`;
  if(e.insight)t+=`\n💡 ${e.insight}\n`;
  navigator.clipboard.writeText(t).then(()=>toast('복사되었어요 ✓')).catch(()=>toast('복사 실패'));
}
function editV(){if(!vEntry)return;const e=vEntry;closeV();openE(e);}
async function delV(){
  if(!vEntry)return;
  if(!confirm(`${fd(vEntry.date)} 일기를 삭제할까요?`))return;
  const d=vEntry.date;closeV();
  try{await sbDel('diary_entries?date=eq.'+d);delete entries[d];toast('삭제되었어요 ✓');renderAll();renderWeek();}
  catch(err){toast('삭제 실패: '+err.message);}
}

// ── 수정 팝업 ──
function openE(e){
  eEntry=e;
  document.getElementById('edate').textContent='✏️ '+fd(e.date)+' 수정';
  sv('eemo',e.emotion);sv('ecore',e.core);sv('etx',e.text);
  sv('edw',e.dWhat);sv('edy',e.dWhy);
  sv('emis',e.mistake);sv('eq',e.question);sv('ea',e.answer);sv('eins',e.insight);
  document.getElementById('emod').style.display='flex';
}
function closeE(){document.getElementById('emod').style.display='none';eEntry=null;}
async function saveE(){
  if(!eEntry){notice('enotice','오류가 발생했어요.','err');return;}
  const e={...eEntry,emotion:gv('eemo'),core:gv('ecore'),text:gv('etx'),dWhat:gv('edw'),dWhy:gv('edy'),mistake:gv('emis'),question:gv('eq'),answer:gv('ea'),insight:gv('eins')};
  const btn=document.getElementById('esavebtn');btn.disabled=true;btn.textContent='저장 중...';setSync('s');
  try{
    await sbRPC('upsert_diary',e2r(e));
    entries[e.date]=e;setSync('ok');toast('수정되었어요 ✓');closeE();
    renderAll();renderWeek();
  }catch(err){setSync('e');notice('enotice','저장 실패: '+err.message,'err');}
  btn.disabled=false;btn.textContent='저장하기';
}

// ── 전체 기록 (DB 기반 페이지네이션 + 검색) ──
let elist=[], allPage=1, allSearch='', PAGE_SIZE=20;
let totalEntryCount=0, searchFromDB=false;

async function fetchTotalCount(){
  try{
    const r=await fetch(SBU+'/rest/v1/diary_entries?select=date',{
      headers:{...H,'Prefer':'count=exact','Range':'0-0'}
    });
    const count=r.headers.get('Content-Range');
    if(count)totalEntryCount=parseInt(count.split('/')[1])||0;
  }catch(e){}
}

async function renderAll(){
  const listEl=document.getElementById('elist');
  const subEl=document.getElementById('asub');

  // 검색창 먼저 렌더
  const searchHTML=`<div style="margin-bottom:12px;position:relative;">
    <input type="text" id="all-search" class="linp" placeholder="🔍 날짜, 키워드로 검색..." value="${allSearch.replace(/"/g,'&quot;')}" oninput="onSearch(this.value)" style="font-size:14px;padding-right:36px;">
    ${allSearch?`<button onclick="clearSearch()" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:16px;color:var(--ink3);">✕</button>`:''}
  </div>`;

  if(allSearch&&allSearch.length>=1){
    // 검색어 있으면 DB에서 직접 조회 (10년치 전체 검색)
    listEl.innerHTML=searchHTML+'<div style="text-align:center;padding:20px;color:var(--ink3);">검색 중...</div>';
    try{
      const enc=encodeURIComponent(allSearch);
      const [r1,r2,r3]=await Promise.all([
        sbGet(`diary_entries?select=*&core=ilike.*${enc}*&order=date.desc&limit=50`),
        sbGet(`diary_entries?select=*&text=ilike.*${enc}*&order=date.desc&limit=50`),
        sbGet(`diary_entries?select=*&date=ilike.*${enc}*&order=date.desc&limit=50`)
      ]);
      // 중복 제거
      const seen=new Set();
      const merged=[...r1,...r2,...r3].filter(r=>{if(seen.has(r.date))return false;seen.add(r.date);return true;});
      merged.sort((a,b)=>String(b.date).localeCompare(String(a.date)));
      elist=merged.map(r=>r2e(r));
      if(subEl)subEl.textContent=`검색 결과 ${elist.length}개 (전체 ${totalEntryCount}개 중)`;
      if(!elist.length){listEl.innerHTML=searchHTML+'<div class="empty">검색 결과가 없어요.</div>';return;}
      renderEntryList(searchHTML);
    }catch(err){listEl.innerHTML=searchHTML+'<div class="empty">검색 오류가 발생했어요.</div>';}
    return;
  }

  // 검색 없으면 메모리 데이터 + DB 페이지네이션
  const sorted=Object.values(entries).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
  elist=sorted;
  const displayCount=totalEntryCount>sorted.length?totalEntryCount:sorted.length;
  if(subEl)subEl.textContent=`총 ${displayCount}개의 기록 (최근 180일 표시 중)`;
  if(!sorted.length){listEl.innerHTML=searchHTML+'<div class="empty">아직 기록이 없어요.<br>오늘 핵심 한 줄부터 써보세요 ✏️</div>';return;}
  renderEntryList(searchHTML);
}

function renderEntryList(searchHTML){
  const listEl=document.getElementById('elist');
  const totalPages=Math.ceil(elist.length/PAGE_SIZE);
  const start=(allPage-1)*PAGE_SIZE,end=Math.min(start+PAGE_SIZE,elist.length);
  const pageItems=elist.slice(start,end);

  const listHTML=pageItems.map((e,i)=>{
    const idx=start+i;
    return `<div class="eitem">
      <div class="eih">
        <div class="eil" onclick="openV(elist[${idx}])">
          <span class="eidate">${fd(e.date)}</span>
          <span class="eimood">${e.mood||''}</span>
        </div>
        <div class="eia">
          <button class="eibtn" onclick="event.stopPropagation();cpE(${idx})">📋</button>
          <button class="eibtn" onclick="event.stopPropagation();openE(elist[${idx}])">✏️</button>
          <button class="eibtn del" onclick="event.stopPropagation();delE('${e.date}')">🗑️</button>
        </div>
      </div>
      ${e.core?`<div class="eicore" onclick="openV(elist[${idx}])">"${e.core.replace(/</g,'&lt;')}"</div>`:''}
      ${e.emotion?`<div style="font-size:12px;color:var(--ink3);font-style:italic;margin-bottom:4px;">${e.emotion.replace(/</g,'&lt;')}</div>`:''}
      ${e.text?`<div class="eitx" onclick="openV(elist[${idx}])">${e.text.replace(/</g,'&lt;')}</div><div class="eimore" onclick="openV(elist[${idx}])">전체 보기 →</div>`:''}
      ${e.dWhat?`<div class="eidec">⚖️ ${e.dWhat.replace(/</g,'&lt;')}</div>`:''}
    </div>`;
  }).join('');

  const pageHTML=totalPages>1?`<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:14px;">
    <button onclick="changePage(-1)" ${allPage<=1?'disabled':''} style="padding:8px 14px;border-radius:8px;border:1px solid var(--line);background:var(--bg);cursor:pointer;color:var(--ink2);font-size:14px;">◀</button>
    <span style="font-size:13px;color:var(--ink3);">${allPage} / ${totalPages}</span>
    <button onclick="changePage(1)" ${allPage>=totalPages?'disabled':''} style="padding:8px 14px;border-radius:8px;border:1px solid var(--line);background:var(--bg);cursor:pointer;color:var(--ink2);font-size:14px;">▶</button>
  </div>`:'';

  listEl.innerHTML=searchHTML+`<div class="elist">${listHTML}</div>`+pageHTML;
}

let searchTimer=null;
function onSearch(v){
  allSearch=v;allPage=1;
  clearTimeout(searchTimer);
  searchTimer=setTimeout(()=>renderAll(),300); // 300ms 디바운스
}
function clearSearch(){allSearch='';allPage=1;renderAll();}
function changePage(d){
  const total=Math.ceil(elist.length/PAGE_SIZE);
  allPage=Math.max(1,Math.min(allPage+d,total));
  renderEntryList(`<div style="margin-bottom:12px;position:relative;">
    <input type="text" id="all-search" class="linp" placeholder="🔍 날짜, 키워드로 검색..." value="${allSearch.replace(/"/g,'&quot;')}" oninput="onSearch(this.value)" style="font-size:14px;padding-right:36px;">
  </div>`);
  document.getElementById('scr').scrollTop=0;
}
function cpE(i){vEntry=elist[i];copyV();vEntry=null;}
async function delE(date){
  if(!confirm(`${fd(date)} 일기를 삭제할까요?`))return;
  try{await sbDel('diary_entries?date=eq.'+date);delete entries[date];toast('삭제되었어요 ✓');renderAll();renderWeek();}
  catch(err){toast('삭제 실패: '+err.message);}
}

// ── 주간 ──
function renderWeek(){
  const dates=wdates(),today=td(),grid=document.getElementById('wgrid');
  grid.innerHTML='';
  dates.forEach(ds=>{
    const d=new Date(ds+'T00:00:00'),e=entries[ds];
    const cell=document.createElement('div');
    cell.className='dc'+(e?' has':'')+(ds===today?' td':'');
    cell.innerHTML=`<span class="dn">${DAYS[d.getDay()]}</span><span class="dd">${d.getDate()}</span><span class="dm">${e?(e.core?'✍️':'📝'):''}</span>${e?.core?`<span class="dcore">${e.core}</span>`:''}`;
    cell.onclick=()=>{document.querySelectorAll('.dc').forEach(c=>c.classList.remove('sel'));cell.classList.add('sel');showWE(ds);};
    grid.appendChild(cell);
  });
  const we=dates.map(d=>entries[d]).filter(Boolean);
  document.getElementById('scnt').textContent=we.length+'/7';
  document.getElementById('sdec').textContent=we.filter(e=>e.dWhat).length+'건';
  document.getElementById('smis').textContent=we.filter(e=>e.mistake).length+'건';
}
function showWE(ds){
  const e=entries[ds],box=document.getElementById('wdetail');
  if(!e){box.textContent='이 날은 기록이 없어요.';return;}
  let t='';
  if(e.core)t+=`✨ "${e.core}"\n\n`;
  if(e.text)t+=e.text;
  if(e.dWhat)t+=`\n\n⚖️ 결정: ${e.dWhat}`;
  if(e.dWhy)t+=`\n이유: ${e.dWhy}`;
  if(e.mistake)t+=`\n\n🔍 ${e.mistake}`;
  if(e.question)t+=`\n\n❓ ${e.question}\n→ ${e.answer||''}`;
  if(e.insight)t+=`\n\n💡 ${e.insight}`;
  box.textContent=t.trim();
}
async function genAI(){
  const dates=wdates(),we=dates.map(d=>entries[d]).filter(Boolean);
  const box=document.getElementById('aibox'),btn=document.getElementById('aibtn');
  if(!we.length){box.textContent='이번 주에 기록된 일기가 없어요.';return;}
  box.textContent='AI가 이번 주를 정리 중이에요... 잠시만 기다려주세요.';btn.disabled=true;
  const txt=we.map(e=>{
    const d=new Date(e.date+'T00:00:00');
    let l=`[${d.getMonth()+1}/${d.getDate()} ${DAYS[d.getDay()]}요일]`;
    if(e.core)l+=` 핵심: "${e.core}"`;
    if(e.dWhat)l+=`\n결정: ${e.dWhat}`;
    if(e.mistake)l+=`\n배움: ${e.mistake}`;
    if(e.text)l+=`\n${e.text.slice(0,200)}`;
    return l;
  }).join('\n\n');
  try{
    const r=await fetch('/ai-proxy',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:400,messages:[{role:'user',content:`이번 주 일기:\n\n${txt}\n\n핵심 한 줄과 결정, 배움을 중심으로 따뜻하게 3문장으로 정리하고, 다음 주를 위한 격려 한 마디 추가해주세요. 한국어로.`}]})});
    if(!r.ok){box.textContent='오류: '+(await r.text());btn.disabled=false;return;}
    const data=await r.json();
    box.textContent=data.content?.filter(c=>c.type==='text').map(c=>c.text).join('')||'정리를 가져오지 못했어요.';
  }catch(err){box.textContent='연결 오류가 발생했어요. 잠시 후 다시 시도해주세요.';console.error(err);}
  btn.disabled=false;
}

// ── 가계부 ──
const CATS_IN=['급여','사업수입','투자수익','임대수입','기타수입'];
const CATS_EX=['식비','교통','주거','보험','세금','의료','문화','쇼핑','교육','기타지출'];
const CAT_COLORS={급여:'#3B6D11',사업수입:'#2D5A8C',투자수익:'#6B3FA0',임대수입:'#8C4A2D',기타수입:'#2D6B5A',식비:'#C4622D',교통:'#8C4A2D',주거:'#1A5C8C',보험:'#6B3FA0',세금:'#A32D2D',의료:'#2D6B5A',문화:'#2D5A8C',쇼핑:'#C4622D',교육:'#3B6D11',기타지출:'#8C877E'};

let ledgerY, ledgerM, ledgerType='expense', ledgerData=[], budgets={}, editingLedger=null;
let snapAsset=0, snapDebt=0, ledgerInited=false;

function initLedger(){
  if(!ledgerInited){
    // 최초 1회만 날짜/타입 초기화
    const now=new Date();ledgerY=now.getFullYear();ledgerM=now.getMonth();
    document.getElementById('l-date').value=td();
    setType('expense');
    ledgerInited=true;
  }
  updLedgerHeader();
  updCatSelect();
  loadLedgerData();
}
function chLedgerMo(d){
  ledgerM+=d;if(ledgerM>11){ledgerM=0;ledgerY++;}if(ledgerM<0){ledgerM=11;ledgerY--;}
  updLedgerHeader();loadLedgerData();
}
function lmk(){return `m_${ledgerY}_${ledgerM+1}`;}
function updLedgerHeader(){
  document.getElementById('ledger-title').textContent=`${ledgerY}년 ${MOS[ledgerM]}`;
  document.getElementById('msub').textContent=`${ledgerY}년 ${MOS[ledgerM]} 가계부`;
}
function setType(t){
  ledgerType=t;
  document.getElementById('tbtn-in').classList.toggle('on',t==='income');
  document.getElementById('tbtn-ex').classList.toggle('on',t==='expense');
  updCatSelect();
}
function updCatSelect(){
  const sel=document.getElementById('l-cat');if(!sel)return;
  const cats=ledgerType==='income'?CATS_IN:CATS_EX;
  sel.innerHTML=cats.map(c=>`<option value="${c}">${c}</option>`).join('');
  if(editingLedger){
    const cur=ledgerData.find(r=>r.id===editingLedger);
    if(cur)sel.value=cur.category;
  }
}

let savedPrinciple=''; // 저장된 원칙 메모리에도 유지

async function loadLedgerData(){
  const key=lmk();
  try{
    const [rows,brows]=await Promise.all([
      sbGet(`ledger_entries?month_key=eq.${key}&select=*&order=entry_date.desc,created_at.desc`),
      sbGet(`monthly_budget?month_key=eq.${key}&select=*`)
    ]);
    ledgerData=rows||[];
    if(brows&&brows.length>0){
      const b=brows[0];
      budgets=b.budgets||{};
      snapAsset=b.total_asset||0;
      snapDebt=b.total_debt||0;
      const sa=document.getElementById('snap-asset');if(sa)sa.value=snapAsset||'';
      const sd=document.getElementById('snap-debt');if(sd)sd.value=snapDebt||'';
      savedPrinciple=b.principle||'';
      const mp=document.getElementById('mprinciple');
      if(mp)mp.value=savedPrinciple; // 항상 DB 값으로 복원
    }else{
      budgets={};snapAsset=0;snapDebt=0;savedPrinciple='';
      const mp=document.getElementById('mprinciple');if(mp)mp.value='';
    }
    calcNet();renderLedger();renderCatBars();renderBudgetInputs();
  }catch(err){console.error('가계부 로드 실패',err);}
}

function calcNet(){
  const a=parseFloat(document.getElementById('snap-asset')?.value)||0;
  const d=parseFloat(document.getElementById('snap-debt')?.value)||0;
  const net=a-d;snapAsset=a;snapDebt=d;
  const nv=document.getElementById('snap-net');if(nv)nv.textContent=net.toFixed(1);
  const nv2=document.getElementById('netval');if(nv2)nv2.textContent=net.toFixed(1)+' 억원';
  const pct=Math.min((net/GOAL)*100,100);
  const pe=document.getElementById('gpct');if(pe)pe.textContent=pct.toFixed(1)+'%';
  const fe=document.getElementById('pfill');if(fe)fe.style.width=pct+'%';
  const se=document.getElementById('gsub');if(se)se.textContent=`목표 400억까지 ${Math.max(GOAL-net,0).toFixed(1)}억원 남았어요`;
}

function renderLedger(){
  const totalIn=ledgerData.filter(r=>r.type==='income').reduce((a,b)=>a+b.amount,0);
  const totalEx=ledgerData.filter(r=>r.type==='expense').reduce((a,b)=>a+b.amount,0);
  const net=totalIn-totalEx;
  const si=document.getElementById('sum-income');if(si)si.textContent=totalIn.toLocaleString();
  const se=document.getElementById('sum-expense');if(se)se.textContent=totalEx.toLocaleString();
  const sn=document.getElementById('sum-net');
  if(sn){sn.textContent=(net>=0?'+':'')+net.toLocaleString();sn.style.color=net>=0?'var(--ok)':'var(--err)';}
  const lc=document.getElementById('ledger-count');if(lc)lc.textContent=`${ledgerData.length}건`;
  const list=document.getElementById('ledger-list');if(!list)return;
  if(!ledgerData.length){list.innerHTML='<div style="text-align:center;padding:20px;color:var(--ink3);font-size:13px;">이달 내역이 없어요</div>';return;}
  list.innerHTML=ledgerData.map((r,i)=>`
    <div class="ledger-item${editingLedger===r.id?' editing':''}">
      <div class="ledger-dot ${r.type==='income'?'in':'ex'}"></div>
      <div class="ledger-info">
        <div class="ledger-cat">${r.category} · <span class="ledger-date">${r.entry_date}</span></div>
        <div class="ledger-memo">${(r.memo||r.category).replace(/</g,'&lt;')}</div>
      </div>
      <div class="ledger-amt ${r.type==='income'?'in':'ex'}">${r.type==='income'?'+':'-'}${r.amount.toLocaleString()}</div>
      <div class="ledger-actions">
        <button class="ledit" onclick="editLedger(${i})">✏️</button>
        <button class="ledit del" onclick="delLedger('${r.id}')">🗑️</button>
      </div>
    </div>`).join('');
}

function renderCatBars(){
  const exData=ledgerData.filter(r=>r.type==='expense');
  const catTotals={};
  exData.forEach(r=>{catTotals[r.category]=(catTotals[r.category]||0)+r.amount;});
  const sorted=Object.entries(catTotals).sort((a,b)=>b[1]-a[1]);
  const maxVal=sorted[0]?.[1]||1;
  const bars=document.getElementById('cat-bars');if(!bars)return;
  if(!sorted.length){bars.innerHTML='<div style="text-align:center;padding:12px;color:var(--ink3);font-size:13px;">지출 내역이 없어요</div>';return;}
  bars.innerHTML=sorted.map(([cat,amt])=>{
    const budget=budgets[cat]||0;
    const pct=Math.min((amt/maxVal)*100,100);
    const overBudget=budget>0&&amt>budget;
    const color=overBudget?'var(--err)':(CAT_COLORS[cat]||'var(--accent)');
    return `<div class="cat-bar-row">
      <div class="cat-bar-name">
        <span>${cat}</span>
        <span style="color:${overBudget?'var(--err)':'var(--ink3)'};">${amt.toLocaleString()}만원${budget?` / 예산 ${budget.toLocaleString()}만원`:''}</span>
      </div>
      <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${pct}%;background:${color};"></div></div>
    </div>`;
  }).join('');
}

function renderBudgetInputs(){
  const all=[...CATS_IN,...CATS_EX];
  const el=document.getElementById('budget-inputs');if(!el)return;
  el.innerHTML=all.map(cat=>`
    <div class="budget-inp-row">
      <span style="font-size:13px;">${cat}</span>
      <input type="number" class="budget-inp" value="${budgets[cat]||''}" placeholder="0" oninput="updBudget('${cat}',this.value)">
    </div>`).join('');
}
function updBudget(cat,v){budgets[cat]=parseInt(v)||0;renderCatBars();}
function toggleBudgetEdit(){
  const el=document.getElementById('budget-edit');if(!el)return;
  const open=el.style.display==='none'||el.style.display==='';
  el.style.display=open?'block':'none';
}

async function addLedger(){
  const date=document.getElementById('l-date').value||td();
  const cat=document.getElementById('l-cat').value;
  const amount=parseInt(document.getElementById('l-amount').value)||0;
  const memo=document.getElementById('l-memo').value.trim();
  if(!amount){notice('lnotice','금액을 입력해주세요.','err');return;}

  if(editingLedger){
    try{
      await sbFetchDirect(`ledger_entries?id=eq.${editingLedger}`,{
        method:'PATCH',
        body:JSON.stringify({entry_date:date,type:ledgerType,category:cat,amount,memo,month_key:lmk()})
      });
      toast('수정되었어요 ✓');
      cancelEditLedger();
      await loadLedgerData();
    }catch(err){notice('lnotice','수정 실패: '+err.message,'err');}
    return;
  }

  try{
    await sbFetchDirect('ledger_entries',{
      method:'POST',
      body:JSON.stringify({entry_date:date,month_key:lmk(),type:ledgerType,category:cat,amount,memo})
    });
    document.getElementById('l-amount').value='';
    document.getElementById('l-memo').value='';
    notice('lnotice','추가되었어요 ✓','ok');
    await loadLedgerData();
  }catch(err){notice('lnotice','추가 실패: '+err.message,'err');}
}

function editLedger(i){
  const r=ledgerData[i];
  editingLedger=r.id;
  setType(r.type);
  document.getElementById('l-date').value=r.entry_date;
  setTimeout(()=>{const sel=document.getElementById('l-cat');if(sel)sel.value=r.category;},50);
  document.getElementById('l-amount').value=r.amount;
  document.getElementById('l-memo').value=r.memo||'';
  // 버튼 텍스트 변경 + 취소 버튼 표시
  const addBtn=document.getElementById('ledger-add-btn');
  const cancelBtn=document.getElementById('ledger-cancel-btn');
  if(addBtn)addBtn.textContent='수정 저장';
  if(cancelBtn)cancelBtn.style.display='block';
  renderLedger(); // 수정 중인 항목 하이라이트
  document.getElementById('scr').scrollTo({top:document.getElementById('ledger-list').offsetTop-100,behavior:'smooth'});
}

function cancelEditLedger(){
  editingLedger=null;
  document.getElementById('l-amount').value='';
  document.getElementById('l-memo').value='';
  document.getElementById('l-date').value=td();
  setType('expense');
  const addBtn=document.getElementById('ledger-add-btn');
  const cancelBtn=document.getElementById('ledger-cancel-btn');
  if(addBtn)addBtn.textContent='추가하기';
  if(cancelBtn)cancelBtn.style.display='none';
  renderLedger();
}

async function delLedger(id){
  if(!confirm('이 내역을 삭제할까요?'))return;
  try{
    await sbDel('ledger_entries?id=eq.'+id);
    if(editingLedger===id)cancelEditLedger();
    toast('삭제되었어요 ✓');
    await loadLedgerData();
  }catch(err){toast('삭제 실패: '+err.message);}
}

async function saveMonthly(){
  const p=document.getElementById('mprinciple')?.value||'';
  const btn=document.getElementById('monthly-save-btn');
  if(btn){btn.disabled=true;btn.textContent='저장 중...';}
  try{
    await sbRPC('upsert_monthly_budget',{
      p_month_key:lmk(),
      p_budgets:budgets,
      p_net_asset:snapAsset-snapDebt,
      p_total_asset:snapAsset,
      p_total_debt:snapDebt,
      p_principle:p
    });
    notice('mnotice','저장되었어요 ✓','ok');
    savedPrinciple=p; // 저장 성공 후 기준점 업데이트
  }catch(err){
    console.error('월간 저장 실패',err);
    notice('mnotice','저장 실패: '+err.message,'err');
  }
  if(btn){btn.disabled=false;btn.textContent='이달 저장';}
}

async function loadMonthlyData(){initLedger();}

// sbFetchDirect — POST/PATCH for ledger
async function sbFetchDirect(path,opt={}){
  const r=await fetch(SBU+'/rest/v1/'+path,{
    method:opt.method||'POST',
    headers:{...H,'Prefer':'return=minimal'},
    body:opt.body
  });
  if(!r.ok)throw new Error(await r.text());
  return true;
}

// ── 목표 연결 위젯 — 오늘/주간/월간 탭에 표시 ──
function renderGoalWidgets(){
  const wk=goalsData.wk||[];
  const mo=goalsData.mo||[];

  // ① 오늘 탭 — 이번 주 목표
  const widget=document.getElementById('daily-goals-widget');
  const items=document.getElementById('daily-goal-items');
  const pctEl=document.getElementById('daily-goal-pct');
  if(wk.length>0&&widget){
    const done=wk.filter(g=>g.done).length;
    const pct=Math.round((done/wk.length)*100);
    if(pctEl)pctEl.textContent=`${done}/${wk.length} 완료`;
    if(items)items.innerHTML=wk.map((g,i)=>`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(201,170,220,.3);">
        <div onclick="toggleGoal('wk',${i});renderGoalWidgets();" style="width:18px;height:18px;border-radius:50%;border:2px solid ${g.done?'var(--ok)':'#C9AADC'};background:${g.done?'var(--ok)':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;">
          ${g.done?'<span style="color:#fff;font-size:10px;">✓</span>':''}
        </div>
        <span style="font-size:13px;color:var(--ink);text-decoration:${g.done?'line-through':'none'};opacity:${g.done?'.5':'1'};">${g.text.replace(/</g,'&lt;')}</span>
      </div>`).join('');
    widget.style.display='block';
  } else if(widget){
    widget.style.display='none';
  }

  // ② 주간 탭 — 이번 주 목표 달성률
  const wwid=document.getElementById('weekly-goals-widget');
  const wbar=document.getElementById('weekly-goal-bar');
  const wpct=document.getElementById('weekly-goal-pct');
  const witems=document.getElementById('weekly-goal-items');
  if(wk.length>0&&wwid){
    const done=wk.filter(g=>g.done).length;
    const pct=Math.round((done/wk.length)*100);
    if(wpct)wpct.textContent=`${pct}%`;
    if(wbar)wbar.style.width=pct+'%';
    if(witems)witems.innerHTML=wk.map(g=>`
      <span style="font-size:11px;padding:3px 8px;border-radius:20px;background:${g.done?'var(--ok-bg)':'var(--line)'};color:${g.done?'var(--ok)':'var(--ink3)'};text-decoration:${g.done?'line-through':'none'};">${g.text.replace(/</g,'&lt;')}</span>`).join('');
    wwid.style.display='block';
  } else if(wwid){
    wwid.style.display='none';
  }

  // ③ 월간 탭 — 이달 목표 달성률
  const mwid=document.getElementById('monthly-goals-widget');
  const mbar=document.getElementById('monthly-goal-bar');
  const mpct=document.getElementById('monthly-goal-pct');
  const mitems=document.getElementById('monthly-goal-items');
  if(mo.length>0&&mwid){
    const done=mo.filter(g=>g.done).length;
    const pct=Math.round((done/mo.length)*100);
    if(mpct)mpct.textContent=`${pct}% 달성`;
    if(mbar)mbar.style.width=pct+'%';
    if(mitems)mitems.innerHTML=mo.map(g=>`
      <div style="display:flex;align-items:center;gap:6px;padding:3px 0;">
        <span style="color:${g.done?'var(--ok)':'var(--ink3)'};">${g.done?'✓':'○'}</span>
        <span style="font-size:12px;color:${g.done?'var(--ink3)':'var(--ink)'};text-decoration:${g.done?'line-through':'none'};">${g.text.replace(/</g,'&lt;')}</span>
      </div>`).join('');
    mwid.style.display='block';
  } else if(mwid){
    mwid.style.display='none';
  }
}

// ── 목표 ──
let goalsData={yr:[],mo:[],wk:[]};

function goalKeys(){
  const now=new Date();
  const yr=now.getFullYear();
  const mo=now.getMonth()+1;
  const wd=now.getDay();
  const weekStart=new Date(now);weekStart.setDate(now.getDate()-wd);
  const wk=`${weekStart.getFullYear()}${p2(weekStart.getMonth()+1)}${p2(weekStart.getDate())}`;
  return {
    yr:`goals_yr_${yr}`,        // 연간 — 연도 기준
    mo:`goals_mo_${yr}_${mo}`,  // 월간 — 월 기준
    wk:`goals_wk_${wk}`,        // 주간 — 주 기준
    main:`goals_${yr}_${mo}_${wk}` // 저장용 통합키
  };
}

let goalsAutoSaveTimer=null;
function schedGoalSave(){
  clearTimeout(goalsAutoSaveTimer);
  goalsAutoSaveTimer=setTimeout(saveGoals,1500);
}

async function loadGoals(){
  const now=new Date();
  const gsub=document.getElementById('gsub2');
  if(gsub)gsub.textContent=`${now.getFullYear()}년 ${MOS[now.getMonth()]} · ${Math.ceil((now.getMonth()+1)/3)}분기`;
  const keys=goalKeys();
  try{
    // 연간 목표(yr키)와 월간+주간(main키) 병렬 로드
    const [mainRows,yrRows]=await Promise.all([
      sbGet(`goals?goal_key=eq.${keys.main}&select=*`),
      sbGet(`goals?goal_key=eq.${keys.yr}&select=*`)
    ]);
    if(mainRows&&mainRows.length>0){
      const r=mainRows[0];
      goalsData.mo=r.month_goals||[];
      goalsData.wk=r.week_goals||[];
      const retro=document.getElementById('goal-retro');
      if(retro)retro.value=r.retrospect||'';
    }else{goalsData.mo=[];goalsData.wk=[];}
    // 연간 목표는 yr 전용 키에서 로드 → 주가 바뀌어도 유지
    if(yrRows&&yrRows.length>0){
      goalsData.yr=yrRows[0].year_goals||[];
    }else{goalsData.yr=[];}
    renderGoals();
    renderGoalWidgets();
  }catch(err){console.error('목표 로드 실패',err);}
}

function renderGoals(){
  renderGoalList('yr');
  renderGoalList('mo');
  renderGoalList('wk');
}

function renderGoalList(type){
  const list=document.getElementById(type+'-goals-list');if(!list)return;
  const items=goalsData[type]||[];
  const done=items.filter(g=>g.done).length;
  const pct=items.length?Math.round((done/items.length)*100):0;
  const pctEl=document.getElementById(type+'-pct');
  if(pctEl)pctEl.textContent=`${pct}% 달성`;

  if(!items.length){
    list.innerHTML='<div style="text-align:center;padding:14px;color:var(--ink3);font-size:13px;">목표를 추가해보세요</div>';
    return;
  }
  list.innerHTML=items.map((g,i)=>`
    <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--line);">
      <div onclick="toggleGoal('${type}',${i})" style="width:22px;height:22px;border-radius:50%;border:2px solid ${g.done?'var(--ok)':'var(--line)'};background:${g.done?'var(--ok)':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;">
        ${g.done?'<span style="color:#fff;font-size:12px;">✓</span>':''}
      </div>
      <span style="flex:1;font-size:14px;font-family:\'Nanum Myeongjo\',serif;color:var(--ink);text-decoration:${g.done?'line-through':'none'};opacity:${g.done?'.5':'1'};">${g.text.replace(/</g,'&lt;')}</span>
      <button onclick="delGoal('${type}',${i})" style="background:none;border:none;cursor:pointer;font-size:16px;color:var(--ink3);padding:4px;">×</button>
    </div>`).join('');
}

function addGoal(type){
  const inp=document.getElementById(type+'-inp');
  const text=inp?.value?.trim();
  if(!text)return;
  goalsData[type]=goalsData[type]||[];
  goalsData[type].push({text,done:false});
  inp.value='';
  renderGoalList(type);
  renderGoalWidgets();
  schedGoalSave();
}

function toggleGoal(type,i){
  goalsData[type][i].done=!goalsData[type][i].done;
  renderGoalList(type);
  renderGoalWidgets();
  schedGoalSave();
}

function delGoal(type,i){
  goalsData[type].splice(i,1);
  renderGoalList(type);
  renderGoalWidgets();
  schedGoalSave();
}

// Enter 키로 추가
['yr','mo','wk'].forEach(type=>{
  document.addEventListener('keydown',e=>{
    if(e.key==='Enter'&&document.activeElement?.id===type+'-inp'){
      addGoal(type);
    }
  });
});

async function saveGoals(){
  const retro=document.getElementById('goal-retro')?.value||'';
  const keys=goalKeys();
  try{
    // 연간 목표는 yr 전용 키, 월간+주간은 main 키에 저장
    await Promise.all([
      sbRPC('upsert_goals',{
        p_goal_key:keys.main,
        p_year_goals:[],
        p_month_goals:goalsData.mo,
        p_week_goals:goalsData.wk,
        p_retrospect:retro
      }),
      sbRPC('upsert_goals',{
        p_goal_key:keys.yr,
        p_year_goals:goalsData.yr,
        p_month_goals:[],
        p_week_goals:[],
        p_retrospect:''
      })
    ]);
    notice('gnotice','목표 저장되었어요 ✓','ok');
  }catch(err){notice('gnotice','저장 실패: '+err.message,'err');}
}

// ── 분기 ──
async function saveQuarterly(){
  try{
    await sbRPC('upsert_quarterly',{p_quarter_key:qk(),p_before_text:gv('qbefore'),p_after_text:gv('qafter'),p_mistakes:gv('qmistakes'),p_principles:gv('qprinciples')});
    notice('qnotice','분기 회고 저장되었어요 ✓','ok');
  }catch(err){notice('qnotice','저장 실패: '+err.message,'err');}
}
async function loadQuarterlyData(){
  try{
    const rows=await sbGet('quarterly_notes?quarter_key=eq.'+qk()+'&select=*');
    if(rows&&rows.length>0){
      const r=rows[0];sv('qbefore',r.before_text);sv('qafter',r.after_text);sv('qmistakes',r.mistakes);sv('qprinciples',r.principles);
    }
  }catch(err){console.error('분기 로드 실패',err);}
}

// ── 모바일 키보드 ──
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeV();closeE();}});
if(window.visualViewport){
  window.visualViewport.addEventListener('resize',()=>{
    const em=document.getElementById('emod');
    if(em&&em.style.display==='flex')em.style.maxHeight=window.visualViewport.height+'px';
  });
}

// ── 탭 이동 경고 제거 (저장 버튼으로 충분) ──
function setupDailyEditListeners(){} // 사용 안 함

// ── PWA Service Worker ──
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(()=>{});
}

init().then(()=>{
  setupDailyEditListeners(); // init 완료 후 편집 감지 시작
});
</script>
</body>
</html>
