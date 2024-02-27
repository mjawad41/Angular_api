import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeepfaceService {

  private baseUrl = 'http://127.0.0.1:5000';

  constructor(private http:HttpClient) { }

  getFacialResponse():Observable<any>
  {
    const apiUrl = 'http://127.0.0.1:5000/user-details/1000';
    return this.http.get<any>(apiUrl);
  }

  processImage(image: File, imageName:string): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('imageName', imageName);

    return this.http.post(`${this.baseUrl}/process_image`, formData);
  }
}
