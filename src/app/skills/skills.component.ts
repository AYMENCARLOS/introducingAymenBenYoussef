import {Component, OnDestroy, OnInit} from '@angular/core';
import {Skill} from './skill';
import {SkillService} from './skill.service';
import {Category} from './category';
import {Observable} from 'rxjs';
import {Language} from './language';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  providers : [SkillService],
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  categories: Category[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
    this.categories = [
      new Category(1, 'Programming'),
      new Category(2, 'DataBase'),
      new Category(3, 'Framework'),
      new Category(4, 'WebServer')
    ];
  }

  getSkills(): void {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }


  applyPercentage(percentage: number) {
    const styles = {width: percentage + '%'};
    return styles;
  }

  filterCategory(category: string) {
         return this.skills.filter(x => (x.category.includes(category)));
  }

}
