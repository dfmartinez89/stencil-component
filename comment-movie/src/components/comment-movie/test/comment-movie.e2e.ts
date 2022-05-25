import { newE2EPage } from '@stencil/core/testing';

describe('comment-movie', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<comment-movie></comment-movie>');

    const element = await page.find('comment-movie');
    expect(element).toHaveClass('hydrated');
  });
});
