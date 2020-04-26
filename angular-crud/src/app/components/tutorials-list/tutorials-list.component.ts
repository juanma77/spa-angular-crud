import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials: any;
  currentTutorial: null;
  currentIndex = -1;
  title: '';

constructor(private tutorialService: TutorialService) { 

  }

  ngOnInit() {
    this.retrieveTutorials();
  }

  // Retrieve all tutorials
  retrieveTutorials(){
    this.tutorialService.getAll().subscribe(data =>{
      this.tutorials = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  // Refresh the tutorials list
  refreshList(){
    this.retrieveTutorials();
    this.currentIndex = null;
    this.currentIndex = -1;

  }
  
  // Set the active tutorial
  setActiveTutorial(tutorial, index){
    this.currentIndex = tutorial;
    this.currentIndex = index;
  }

  // Remove all tutorials
  removeAllTutorials(){
    this.tutorialService.deleteAll().subscribe(response =>{
      console.log(response);
      this.retrieveTutorials();
    },
    error =>{
      console.log(error);
    });
  }

  // Search a tutorial by title
  searchTitle(){
    this.tutorialService.findByTitle(this.title).subscribe(data =>{
      this.tutorials = data;
      console.log(data);
    },
    error =>{
      console.log(error);
    });
  }
}
