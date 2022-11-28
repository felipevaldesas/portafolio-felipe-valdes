import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {


  constructor(
    private http: HttpClient
  ) { }

  projects: any = [
    {
      id: 1,
      title: 'Vet Project',
      desc: '',
      githurl: 'https://github.com/felipevaldesas/vetproject.git',
      mediumlink: '',
      imgUrl: 'assets/images/vet-project.png',
      tech: 'React 18, Javascript, CSS, HTML, Bootstrap'
    },
    {
      id: 2,
      title: 'Store Project',
      desc: '',
      githurl: 'https://github.com/felipevaldesas/storeproject.git',
      mediumlink: '',
      imgUrl: 'assets/images/store-project.png',
      tech: 'Angular 14 , TypeScript, CSS, HTML'
    },
    {
      id: 3,
      title: 'Calories Counter Project',
      desc: '',
      githurl: 'https://github.com/felipevaldesas/caloriescounter.git',
      mediumlink: '',
      imgUrl: 'assets/images/contador-calorias.png',
      tech: 'Angular 10, unsplash image api, express server'
    },


  ];
  about2 = `Software Developer with 2+ years of experience .
  Worked with agile methodologies .
  Expertise in Angular 9+ versions, Javascript, Node JS and UI with Responsive Designs .
  Have good understanding of Bootstrap, React, SpringBoot, Laravel, MongoDB, Firebase and PostMan`;

  about = `Responsible and persevering professional in constant search of new challenges. Great ability to
            acquire knowledge, adaptability and commitment to the role performed. Proactivity to search for 
            improvements and proposal of new ideas.`;
  resumeurl = 'https://drive.google.com/file/d/17xsEKX8yiVUxl6Zh-TlzxthBu7NF34Wt/view?usp=sharing';

  skillsData: any = [
    {
      id: '1',
      skill: 'ANGULAR 9+',
      progress: '75%'
    },
    {
      id: '2',
      skill: 'NODE JS',
      progress: '50%'
    },
    {
      id: '3',
      skill: 'JAVASCRIPT',
      progress: '80%'
    },
    {
      id: '4',
      skill: 'MONOGO, FIREBASE',
      progress: '50%'
    },
    {
      id: '5',
      skill: 'BOOTSTRAP',
      progress: '90%'
    },

    {
      id: '6',
      skill: 'SPRINGBOOT',
      progress: '60%'
    }
  ];


  educationData: any = [
    {
      id: '1',
      from_to_year: '2017 - 2020',
      education: 'University',
      institution: 'INACAP',
      info: 'Technology University of Chile',
      stream: 'Programmer Analyst '
    },
    {
      id: '2',
      from_to_year: '2011 - 2014',
      education: 'School',
      institution: 'COLEGIO APOQUINDO',
      info: 'Private mixed catholic school',
      stream: 'Secondary  School '
    },
    {
      id: '3',
      from_to_year: '2002 - 2011',
      education: 'School',
      institution: 'COLEGIO TABANCURA',
      info: 'Private male catholic school',
      stream: 'Primary  School '
    }
  ];
  experienceData: any = [
    {
      id: 4,
      company: ' AppCar ',
      location: 'Santiago, Chile',
      timeline: 'March 2022 - October 2022',
      role: 'Full Stack Developer',
      work: `Software development in company project. Programming of functionalities 
            in front-end (React), integrations with Ruby backend (RubyOnRails), 
            integration with DB ( PostgreSQL), among others. `
    },
    {
      id: 2,
      company: 'Nobel TI',
      location: 'Remote',
      timeline: 'Oct 2021 - March 2022',
      role: 'Full Stack Developer',
      work: `Technologies : Angular, Java, SpringBoot.
              Software development project for the State Defense Council.
              Programming of functionalities in front-end (Angular), integrations
              with Java backend (Spring), integration with DB ( SQL ), among
              others. `
    },

    {
      id: 1,
      company: 'Ai-Ware',
      location: 'Remote',
      timeline: 'Aug 2020 - Oct 2021',
      role: 'Full Stack Developer',
      work: `Technologies : Angular , Laravel , SQL.
              Main functions focused on the development of project software
              for an insurance company for the assistance of its services.
              Programming of basic front -end ( Angular ), and basic
              programming of back -end functionalities ( Laravel )
              integration with DB ( SQL ), among others.
              Created sections like templates several modules, like Product, Clients,
              Reports etc.`
    },
  ];

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  experience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'experience');
    return this.experienceData;
  }
}
