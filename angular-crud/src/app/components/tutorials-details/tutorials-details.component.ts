import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorials-details',
  templateUrl: './tutorials-details.component.html',
  styleUrls: ['./tutorials-details.component.css']
})
export class TutorialsDetailsComponent implements OnInit {

  currentTutorial = null;
  message = '';


  constructor(private tutorialService: TutorialService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  // Get the tutorial by id
  getTutorial(id){
    this.tutorialService.get(id).subscribe(data =>{
      this.currentTutorial = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  // Update published tutorials
  updatePublished(status){
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.tutorialService.update(this.currentTutorial.id, data).subscribe(response =>{
      this.currentTutorial.published = status;
      console.log(response);
    },
    error =>{
      console.log(error);
    });
  }

  // Update a tutorial
  updateTutorial(){
    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial).subscribe(response =>{
      console.log(response);
      this.message = 'Tutorial updated successfully!';
    }, 
    error =>{
      console.log(error);
    });
  }

  // Delete a tutorial 
  deleteTutorial(){
    this.tutorialService.delete(this.currentTutorial.id).subscribe(response =>{
      console.log(response);
      this.router.navigate(['/tutorials']);
    },
    error =>{
      console.log(error);
    });
  }
}
