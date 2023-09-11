import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  selectedFile: File | null = null;
  previewImageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImageUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      // Perform the upload logic here
    }
  }

}
