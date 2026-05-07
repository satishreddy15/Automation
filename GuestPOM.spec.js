import { test } from '@playwright/test';
import { Guest1 } from './Guest1';

test('Guest Dashboard Visit', async ({ page }) => {

    const guest = new Guest1(page);
    await guest.login('satish@yopmail.com', 'Satish@155');
    await guest.addGuestVisit();
    await guest.signOutGuest();
});