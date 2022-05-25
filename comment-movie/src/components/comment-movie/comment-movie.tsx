import { Component, Host, h, Prop, State, EventEmitter } from '@stencil/core';

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

  // @Event() didReset: EventEmitter;

  up() {
    this.score++;
  }

  down() {
    this.score--;
  }

  reset() {
    this.score = 0;
    // this.didReset.emit(true)
  }

  render() {
    return (
      <Host>
        <slot name="title"></slot>
        <button onClick={() => this.up()}>{this.btnup}</button>
        <div>{this.score}</div>
        <button onClick={() => this.down()}>{this.btndown}</button>
      </Host>
    );
  }

}
