// JavaScript Objects
// Bio Details
 var bio = {
   "name": "Vincent Kanimea",
   "role": "Dev / Systems Engineer",
   "contacts": {
      "mobile": "+6799331345",
      "email": "vkanimea@gmail.com",
      "github": "vkanimea",
      "twitter": "@vkanimea",
      "location": "Fiji Islands"
   },
   "welcomeMessage": "Welcome and Check out My Resume Details",
   "skills": [ "HTML", "CSS", "Javascript", "Project Management", "Researcher"],
   "bioPic": "https://avatars.githubusercontent.com/u/7506845?v=3"
};
// Education Details
 var education = {
       "schools": [
         {
          "name": "University of Auckland",
          "location": "Auckland, NZ",
          "degree": "Bachelors",
          "majors": ["CS", "IS"],
          "dates": "2010",
           "url": "https://www.auckland.ac.nz"
         },
         {
          "name": "University of Otago",
          "location": "Otago, NZ",
          "degree": "Masters",
          "majors": ["CS", "IS"],
          "dates": "2014",
           "url": "http://www.otago.ac.nz"
         },
      ],
           "onlineCourse": [
             {
                "title": "FrontEnd Web Developer Nano Degree",
                "school": "Udacity",
                 "dates": "2016",
                "url": "https://www.udacity.com/courses/"
              },
      ],
};

// Work Details
     var work = {
        "jobs": [
          {
           "employer": "ANZ Bank",
           "title": "Systems Analyst",
           "location": "Auckland, NZ",
           "dates": "2014 to 2016",
           "description": "Systems analysts are called upon when operational problems are encountered with IT systems, Typical duties include: examining current systems, talking to users (requirements gathering), producing specifications for new or modified systems liaising with other IT staff such as programmers to produce new systems implementing new systems"

          },
          {
            "employer": "Westpac",
             "title": "Systems Engineer",
             "location": "Auckland, NZ",
              "dates": "2016 to present",
              "description": "To build out, maintain, and troubleshoot our rapidly expanding infrastructure.  Been part of a talented team of engineers that demonstrate superb technical competency, delivering mission critical infrastructure and ensuring the highest levels of availability, performance and security."

          },
      ],
};

// Projects Details
  var projects = {
           "projects":  [
               {
                 "title": "Application of SE concepts for Complex System Reliability string",
                 "dates": 2016,
                 "description": "SE methods including state machines and related concepts may be applied to study systems with complex reliability states",
                 "images": [
               "http://bob-irving.com/wp-content/uploads/2014/09/if-kids-in-third-grade-can-handle-coding-so-can-you.jpg",
               "http://2.bp.blogspot.com/-j0hUIWJUArw/VHcuaOjt4QI/AAAAAAAAK_E/sxmmB6hKZtQ/s1600/1.png"
             ]
           }

          ]
   };

   // Add International Button In the Menu List and place this infront
   $("#MenuList").prepend(internationalizeButton);

  /**
  * @description Takes a name and return the international version
  * @param {string} name
  * @returns {string} International name
  */

   function inName(name) {
      name = bio.name.trim().split(" ");   //Split name based on based and place in array called name
      name[1] = name[1].toUpperCase();  // Capitalize the Surname
      name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase(); // Uppercase 1st letter in your name

      return name[0] + " " + name[1];  // return the internationalName

   }
   /**
   * @description Uses the Bio object, displays using helper.js formatted Variables in index.html
   * @param none
   * @returns Bio Display in ID header, topContacts, footerContacts as wells skills in index.html
   */

   bio.display = function() {
    // Assign Formatted Variables from helper.js HTML variables
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
   var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
   var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
   var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
   $("#header").prepend(formattedRole); // Fill in your Role
   $("#header").prepend(formattedName); // Fill in your name
   $("#header").append(formattedWelcomeMsg); // Fill in the Welcome Message
   $("#header").append(formattedBioPic);  // Fill in the your image
   $("#topContacts, #footerContacts").append(formattedContacts); // Fill in Contacts in top & Footer Contacts
   var skillsTotal = bio.skills.length;
    if (skillsTotal > 0) {   // Check if there skills in your Bio
     $("#header").append(HTMLskillsStart);
     for(var i=0; (i < skillsTotal); i++)
     {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
       }   // End of for Loop
     }; // End of If Skills Total
   };  // End of Bio Display Function
  bio.display();  // Call your Bio Display Function
  /**
  * @description Uses the Work object, displays using helper.js formatted Variables in index.html
  * @param none
  * @returns Work Display in at the end of ID workExperience in index.html
  */
  work.display = function() {
  for (job in work.jobs) {
   // Fill in the work experience
   $("#workExperience").append(HTMLworkStart);
   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
   // Concat Employer & Title
   var formattedEmployerTitle = formattedEmployer + formattedTitle;
   $(".work-entry:last").append(formattedEmployerTitle);
   // Fill in the Work Experience Job Dates
   var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
   $(".work-entry:last").append(formattedDates);
   // Fill in the Work Experience Job Description
   var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
   $(".work-entry:last").append(formattedDescription);
       }  // end for loop
  }
  work.display();
  /**
  * @description Uses the Projects object, displays using helper.js formatted Variables in index.html
  * @param none
  * @returns Project Display in at the end of ID projects in index.html
  */
 projects.display = function() {
  for (project in projects.projects) {
   // Fill in the Projects
   $("#projects").append(HTMLprojectStart);
   // Fill in the Project Title
   var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
   $(".project-entry:last").append(formattedprojectTitle);
   // Fill in the Project Date
   var formattedprojectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
   $(".project-entry:last").append(formattedprojectDate);
   // Fill in the Project Description
   var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
   $(".project-entry:last").append(formattedprojectDescription);
   // Display Project images
   for (image in projects.projects[project].images )  {
    var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    $(".project-entry:last").append(formattedprojectImage);
       }   // end for projects images loop
  }
 }
 projects.display();
 /**
 * @description Uses the education object, displays using helper.js formatted Variables in index.html
 * @param none
 * @returns education Display in at the end of ID education in for Courses taken in school and online in index.html
 */
 education.display = function() {
  $("#education").append(HTMLschoolStart);

  for (school in education.schools) {
     // Fill in the school name
     var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
     $(".education-entry:last").append(formattedSchoolName);
     // Fill in the School Degree
     var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
     $(".education-entry:last").append(formattedSchoolDegree);
     // Fill in the School Date
     var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
     $(".education-entry:last").append(formattedSchoolDates);
     // Fill in the School Location
     var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
     $(".education-entry:last").append(formattedSchoolLocation);
     // Fill in the Study Major
     var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
     $(".education-entry:last").append(formattedSchoolMajor);
  }
  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLonlineClassesStart);

  for (course in education.onlineCourse) {
      // Fill in Online Course Title
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
      $(".onlineCourse-entry:last").append(formattedOnlineTitle);
      // Fill in the Online School
      var formattedOnlineSchools = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
      $(".onlineCourse-entry:last").append(formattedOnlineSchools);
      // Fill in the Online Course Date
      var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
      $(".onlineCourse-entry:last").append(formattedOnlineDate);
      // Fill in the Online Course URL
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
      $(".onlineCourse-entry:last").append(formattedOnlineURL);
  }
 }

education.display();

// Fill in the Google Map
$('#mapDiv').append(googleMap);
