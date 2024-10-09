describe('Favorite Feature', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should highlight favorite button when tap', async () => {
        await waitFor(
            element(by.id('favoriteButton')).atIndex(0),
        ).toBeVisible();
        await element(by.id('favoriteButton')).atIndex(0).tap();
        await expect(element(by.text('Đã Thích')).atIndex(0)).toBeVisible();
    });

    it('should remove the highlight of the favorite button', async () => {
        await waitFor(
            element(by.id('favoriteButton')).atIndex(0),
        ).toBeVisible();
        await element(by.id('favoriteButton')).atIndex(0).tap();
        await element(by.id('favoriteButton')).atIndex(0).tap();
        await expect(element(by.text('Yêu Thích')).atIndex(0)).toBeVisible();
    });
});
