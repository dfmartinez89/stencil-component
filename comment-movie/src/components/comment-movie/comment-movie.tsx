import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'comment-movie',
  styleUrl: 'comment-movie.css',
  shadow: true,
})
export class CommentMovie {
  @Prop() btnup: string;
  @Prop() btndown: string;
  @Prop() color: string;

  @State() score = 0;


  up() {
    this.score++;
    if (this.score>5) {
      this.reset();
    }
  }

  down() {
    this.score--;
    if (this.score<0) {
      this.reset();
    }
  }

  reset() {
    this.score = 0;
  }

  render() {
    return (
      <Host>
        <slot name="title"></slot>
        <button onClick={() => this.up()}>{this.btnup}</button>
        <div class={`score ${this.color}`}>{this.score}</div>
        <button onClick={() => this.down()}>{this.btndown}</button>
      </Host>
    );
  }

}
