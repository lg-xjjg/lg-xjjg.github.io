!function(){var s=["9239d54000d460da/bundle.js","3315a15b554783cf/bundle.css","assets/.DS_Store","assets/icon/.DS_Store","assets/icon/agree.png","assets/icon/bad_active.png","assets/icon/bad.png","assets/icon/camera.png","assets/icon/good_active.png","assets/icon/close.png","assets/icon/good.png","assets/icon/polling.png","assets/icon/polling_active.png","assets/icon/record.png","assets/icon/record_active.png","assets/icon/soso.png","assets/icon/soso_active.png","assets/icon/spinner.gif","assets/icon/wecord.png","assets/icon/wecord_active.png","assets/icon/weight.png","assets/icon/weight_active.png","manifest.json"];self.addEventListener("fetch",function(s){s.respondWith(self.caches.match(s.request).then(function(e){return e||self.fetch(s.request)}))}),self.addEventListener("install",function(e){e.waitUntil(self.caches.open("1.0.0").then(function(e){return e.addAll(s)}))}),self.addEventListener("activate",function(s){s.waitUntil(self.caches.keys().then(function(s){return Promise.all(s.map(function(e,n){if("1.0.0"!==s[n])return self.caches.delete(s[n])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map