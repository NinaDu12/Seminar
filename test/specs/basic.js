const assert = require('assert');

describe("New webmail page", function() {
    it("Otvara li linkove u odjelu footer", function() {
        browser.url("http://www.unizd.hr/");
        browser.pause(2000);
        $("#footer").waitForDisplayed();
        browser.call(
            async () => await percySnapshot(browser, "footer", { widths: [1280] })
          );
       }); 
       


       it("Učitava li sliku", function() {
        browser.url("http://www.unizd.hr/obavijesti/view/artmid/18146/articleid/40703/godi%c5%a1nja-skup%c5%a1tina-hrvatskog-geografskog-dru%c5%a1tva-%e2%80%93-zadar-i-predavanje-mladena-klemen%c4%8di%c4%87a");
        browser.pause(2000);
        $("#dnn_ctr18146_ViewEasyDNNNewsMain_ctl00_pnlViewArticle").waitForDisplayed();
        browser.call(
            async () => await percySnapshot(browser, "dnn_ctr18146_ViewEasyDNNNewsMain_ctl00_pnlViewArticle", { widths: [1280] })
          );
       }); 
        


       it("Otvara li linkove za prijavu", function() {
        browser.url("http://www.unizd.hr/iz");
        browser.pause(2000);
        $("#dnn_LeftPane").waitForDisplayed();
        browser.call(
            async () => await percySnapshot(browser, "dnn_LeftPane", { widths: [1280] })
          );
       }); 
       


       it("Učitava li se Facebook stranica sveučilišta", function() {
        browser.url("https://www.facebook.com/unizd/");
        browser.pause(2000);
       $("#u_0_6").waitForDisplayed();

        browser.call(
            async () => await percySnapshot(browser, "u_0_6", { widths: [1280] })
          );
       }); 
       


       it("Radi li dio izdvojeno", function() {
        browser.url("http://www.unizd.hr/");
        browser.pause(2000);
        $("#dnn_izdvojenoPane").waitForDisplayed();

        browser.call(
            async () => await percySnapshot(browser, "dnn_izdvojenoPane", { widths: [1280] })
          );
       }); 
    
   
});
