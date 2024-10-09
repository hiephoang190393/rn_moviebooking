describe('Booking Feature', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should show movie booking screen after tap button booking in movies list screen', async () => {
        await waitFor(element(by.text('Đặt Vé')).atIndex(0)).toBeVisible();
        await element(by.text('Đặt Vé')).atIndex(0).tap();
        await expect(element(by.id('bookingButton'))).toBeVisible();
    });

    it('should show movies booked screen after tap booking button in booking screen', async () => {
        await waitFor(element(by.text('Đặt Vé')).atIndex(0)).toBeVisible();
        await element(by.text('Đặt Vé')).atIndex(0).tap();
        await waitFor(element(by.id('bookingButton'))).toBeVisible();
        await element(by.id('bookingButton')).tap();
        await expect(element(by.id('bookingButton'))).not.toExist();
    });

    it('should disable booking button when movie has been booked', async () => {
        await waitFor(element(by.text('Đặt Vé')).atIndex(0)).toBeVisible();
        await element(by.text('Đặt Vé')).atIndex(0).tap();
        await waitFor(element(by.id('bookingButton'))).toBeVisible();
        await element(by.id('bookingButton')).tap();
        await element(by.text('Danh sách phim')).tap();
        await element(by.text('Đã Đặt')).tap();
        await expect(element(by.text('Đã Đặt')).atIndex(0)).toBeVisible();
    });
});
