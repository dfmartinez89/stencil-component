import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  @Prop() rating = 0;

  render() {
    return (
          <div class="body root">
            <div class="Stars form-label" style={{"--rating" :`${this.rating}`}}></div>
          </div>
    );
  }
}
