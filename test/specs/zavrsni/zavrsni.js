describe('Testing site Nacionalni park Plitvička jezera', async() => {
    /*it('Change language of the site', async() => {
        await browser.url('https://np-plitvicka-jezera.hr/');

        const lang = await $(".wpml-ls-link=IT");
        await lang.click();

        const heading = await $("h6");
        await expect(heading).toHaveText('Benvenuti sul sito ufficiale del Parco Nazionale dei Laghi di Plitvice!');
    })*/
    it('Buy ticket', async() => {
        await browser.setWindowSize(1366, 900)
        await browser.url('https://np-plitvicka-jezera.hr/');

        const cart = await $('[title="Kupite ulaznicu"]');
        await cart.click();

        const heading = await $(".sectionTitle");
        await expect(heading).toHaveText('ULAZNICE');

        const date = await $('.datePicker').$('.inputGroup');
        await date.click();
        await browser.pause(500);
        const nextMonth = await $('.picker__nav--next');
        await nextMonth.click();

        const certainDate = await $('div=11');
        await certainDate.click();
        await browser.pause(500);

        const time = await $('.timePicker').$('.inputGroup');
        await time.click();

        const certainTime = await $('li=11:00');
        await certainTime.click();
        await browser.pause(500);

        const addToCart = await $('//div[@id="tab1"]/div[2]/div[2]/div[@class="buttons"]/button');
        await addToCart.click();
        await browser.pause(500);

        const yourCart = await $("#btnSubmit");
        await yourCart.click();
        await browser.pause(500);

        const logIn = await $("#divLogin")
        logIn.isDisplayed();
        await browser.pause(500);
    })

  /*  it('Subscribe for Newsletter', async() => {
        await browser.url('https://np-plitvicka-jezera.hr/');

        const form = await $('[name="email"]');
        await form.setValue('proba.gmail.com');

        const subscribe = await $('.nl-button');
        await subscribe.click();

        const error = await $('div .error');
        await expect(error).toHaveText('proba.gmail.com nije ispravna e-mail adresa!');
    })*/
})