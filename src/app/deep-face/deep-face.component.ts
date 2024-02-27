import { Component, OnInit } from '@angular/core';
import { DeepfaceService } from '../services/deepface.service';

@Component({
  selector: 'app-deep-face',
  templateUrl: './deep-face.component.html',
  styleUrls: ['./deep-face.component.css']
})
export class DeepFaceComponent implements OnInit{

  selectedImage: any='';

  processedImage:any='';

  Images:any;

  constructor(private deepface_api:DeepfaceService){}

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }

  ngOnInit(): void {
    this.getFacialResponse()
    console.log("kk")

  }

  processImage(): void {
    console.log("Test",this.selectedImage)
    console.log("Image Name",this.selectedImage.name)


    if (this.selectedImage) {
      this.deepface_api.processImage(this.selectedImage, this.selectedImage.name).subscribe({
        next:(value)=> {
          this.processedImage=value.processed_image
          this.processedImage = `data:image/jpeg;base64,${value.processed_image[1]}`;
          this.Images=value.processed_image
          console.log("Test",value)
        },
        error:(err)=> {
          
        },
      })
  }
}

  getFacialResponse()
  {
    this.deepface_api.getFacialResponse().subscribe({
      next:(value)=> {
        console.log(value)
      },

      error:(err)=> {
        console.log(err)

      },
    })
  }

}
