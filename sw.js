const CACHE='diary-v2';
const ASSETS=['/','/index.html'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>
    Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  const url=e.request.url;
  // chrome-extension, Supabase, Anthropic API 캐시 안 함
  if(url.startsWith('chrome-extension')||
     url.includes('supabase.co')||
     url.includes('anthropic.com')||
     e.request.method!=='GET'){
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached=>{
      if(cached)return cached;
      return fetch(e.request).then(res=>{
        if(res&&res.status===200){
          const clone=res.clone();
          caches.open(CACHE).then(c=>{
            try{c.put(e.request,clone);}catch(err){}
          });
        }
        return res;
      }).catch(()=>caches.match('/index.html'));
    })
  );
});
