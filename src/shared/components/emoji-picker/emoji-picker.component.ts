import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emoji-picker',
  template: `
    <emoji-mart (emojiSelect)="addEmoji($event)" emoji="point_up"></emoji-mart>
  `,
  styles: [`
    emoji-mart {
      position: absolute;
      top: 110%;
      left: 0;
    }
  `],
})
export class EmojiPickerComponent {
  @Output() emojiSelected = new EventEmitter<string>();

  addEmoji(event: any) {
    this.emojiSelected.emit(event.emoji.native);
  }
}
