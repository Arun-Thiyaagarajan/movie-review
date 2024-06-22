import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  public showEmojiPicker: boolean = false;
  public commentsForm: FormGroup;
  public isFocused: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.commentsForm = this.formBuilder.group({
      comments: ['']
    });
  }

  ngOnInit() {
    // Initialize form with value from localStorage if available
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      const decodedComments = atob(storedComments); // decode comments
      this.commentsForm.patchValue({
        comments: decodedComments
      });
    }
  }

  public toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;    
  }

  public onInputChange() {
    // Encode comments before storing in localStorage
    const commentsToStore = btoa(this.commentsForm.value.comments);
    localStorage.setItem('comments', commentsToStore);
  }
  
  public addEmoji(emoji: string): void {
    const currentValue = this.commentsForm.get('comments')?.value || '';
    this.commentsForm.patchValue({
      comments: currentValue + emoji
    });
    this.onInputChange();
    this.showEmojiPicker = false;
  }

  public onReset() {
    localStorage.removeItem('comments');
    this.commentsForm.patchValue({
      comments: ''
    })
    this.isFocused = false;
  }

  public onFocus() {
    this.isFocused = true;
  }

  public onBlur() {
    if (this.commentsForm.get('comments')?.value === '') {
      this.isFocused = false;
    }
  }
}
