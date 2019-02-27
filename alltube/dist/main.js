var castModule=function(){"use strict";function t(t){return t===chrome.cast.ReceiverAvailability.AVAILABLE}function e(){f&&(v.classList.remove("cast_hidden"),f.classList.add("cast_hidden"))}function i(){v.classList.add("cast_hidden"),f.classList.remove("cast_hidden")}function n(t){throw i(),t.description}function s(){w.status!==chrome.cast.SessionStatus.CONNECTED&&i()}function o(t){(w=t).addMediaListener(e),w.addUpdateListener(s),0!==w.media.length&&e()}function c(){w.stop(i,n)}function a(t){throw c(),t.description}function d(t){w=t;var i=document.getElementById("video_link"),n=i.dataset.video,s=new chrome.cast.media.MediaInfo(n,"video/"+i.dataset.ext),o=new chrome.cast.media.LoadRequest(s);w.loadMedia(o,e,a)}function r(t){throw t.description}function l(){chrome.cast.requestSession(d,r)}function _(){f=document.getElementById("cast_btn_launch"),g=document.getElementById("cast_disabled"),v=document.getElementById("cast_btn_stop"),f&&(g.classList.add("cast_hidden"),f.classList.remove("cast_hidden"),f.addEventListener("click",l,!1),v.addEventListener("click",c,!1))}function u(t){throw t.code}function m(){var e=new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID),i=new chrome.cast.ApiConfig(e,o,t,chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED);chrome.cast.initialize(i,_,u)}function h(t,e){if(!t)throw e;m()}var f,g,v,w;return{init:function(){var t=document.getElementById("download_intro");t&&(t.insertAdjacentHTML("beforeend",'<img class="cast_icon" id="cast_disabled" src="img/ic_media_route_disabled_holo_light.png" alt="" title="Google Cast is not supported on this browser." /> <img class="cast_btn cast_hidden cast_icon" id="cast_btn_launch" src="img/ic_media_route_off_holo_light.png" title="Cast to ChromeCast" alt="Google Cast™" /> <img src="img/ic_media_route_on_holo_light.png" alt="Casting to ChromeCast…" title="Stop casting" id="cast_btn_stop" class="cast_btn cast_hidden cast_icon" />'),window.__onGCastApiAvailable=h)}}}();"object"==typeof window&&window.addEventListener("load",castModule.init,!1);