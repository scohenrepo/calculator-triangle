import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';


@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  sizeOne: string = '';
  sizeTwo: string = '';
  sizeThree: string = '';
  typeOfTriangle: string = '';
  sizes: any = [];
  

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    console.log("Hey from Triangle");
  }

  showResult() {
    if (this.sizeOne && this.sizeTwo && this.sizeThree) {
      this.sizes.push(this.sizeOne);
      this.sizes.push(this.sizeTwo);
      this.sizes.push(this.sizeThree);
    } 
    
    this.configService.get(this.sizes).subscribe((data: any) => {
      this.typeOfTriangle = data;
      this.sizeOne = '';
      this.sizeTwo = '';
      this.sizeThree = '';
      this.sizes = [];
    })  
  }

}
