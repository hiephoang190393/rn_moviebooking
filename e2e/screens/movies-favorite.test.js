describe('Favorite Feature', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should show movie favorite in movies favorite tab after tap button favorite', async () => {
        await waitFor(
            element(by.id('favoriteButton')).atIndex(0),
        ).toBeVisible();
        await element(by.id('favoriteButton')).atIndex(0).tap();
        await element(by.text('Phim đã thích')).tap();
        await expect(element(by.id('thumbnail'))).toBeVisible();
    });
});
