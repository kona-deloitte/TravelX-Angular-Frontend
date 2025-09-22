import { Component, OnInit } from '@angular/core';
import { Data } from '../../../services/data';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-popular-packages',
  imports: [CommonModule],
  templateUrl: './popular-packages.html',
  styleUrls: ['./popular-packages.css'],
})
export class PopularPackages implements OnInit {
  packages: any[] = [];
 
  constructor(private dataService: Data) {}
 
  ngOnInit() {
    this.packages = this.dataService.getPackages();
  }
}