// ==UserScript==
// @name         Klanlar - PRO BOT (VIP)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Gelişmiş bulut tabanlı Klanlar botu. Sadece lisanslı kullanıcılar içindir.
// @author       
// @match        https://*.klanlar.org/game.php?*
// @icon         https://yunti.files.wordpress.com/2019/01/turk_bayragi_02_tam35blog.gif
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // Riggs'in bulut sunucusundan (GitHub) ana beyin kodunu çeker ve çalıştırır
    $.getScript("https://cdn.jsdelivr.net/gh/yakupemrecelik/tw-pro-bot@main/riggs-bot.js");

})();
