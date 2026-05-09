const CACHE='diary-v3';

self.addEventListener('install',e=>{
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  // 모든 이전 캐시 삭제
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

// 항상 네트워크 우선 — 캐시 문제 완전 방지
self.addEventListener('fetch',e=>{
  const url=e.request.url;
  if(url.startsWith('chrome-extension')||
     url.includes('supabase.co')||
     url.includes('anthropic.com')||
     e.request.method!=='GET'){
    return;
  }
  // 네트워크 실패 시에만 캐시 사용
  e.respondWith(
    fetch(e.request).catch(()=>caches.match(e.request))
  );
});
