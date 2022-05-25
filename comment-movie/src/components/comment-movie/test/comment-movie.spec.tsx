import { newSpecPage } from '@stencil/core/testing';
import { CommentMovie } from '../comment-movie';

describe('comment-movie', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CommentMovie],
      html: `<comment-movie></comment-movie>`,
    });
    expect(page.root).toEqualHtml(`
      <comment-movie>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </comment-movie>
    `);
  });
});
