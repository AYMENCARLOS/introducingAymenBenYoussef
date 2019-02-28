import { Component, OnInit } from '@angular/core';
import {Skill} from './skill';
import {SkillService} from './skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  providers : [SkillService],
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];


  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }


  applyPercentage(percentage: number){
    const styles ={'width': percentage +'%'};
    return styles;
  }

  filterCategory(category:string){

    return this.skills.filter(x => x.category == category);
  }
}
