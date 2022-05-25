import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'comment-movie',
  styleUrl: 'comment-movie.css',
  shadow: true,
})
export class CommentMovie {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
