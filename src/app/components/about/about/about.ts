import { Component } from '@angular/core';
import { TitleSection } from '../title-section/title-section';
import { MissionValue } from '../mission-value/mission-value';

@Component({
  selector: 'app-about',
  imports: [TitleSection, MissionValue],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
