it('popcat click', async() => {
    browser.url('https://popcat.click/');

   for (var i = 0; i < 50; i++) {
         $("#app").click();
         await browser.pause(500);
    }



});
