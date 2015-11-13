/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Job = require('../api/job/job.model');
var User = require('../api/user/user.model');

Job.find({}).remove(function() {
  Job.create(
  // {
  //   name : 'Head Chef',
  //   info : 'Make Delicious Asian Food'
  // }
  { title: "Chef",
    restaurant: "Chefs Exclusive",
    location: "Manama, Bahrain",
    description: "Our client is looking for an experienced pastry sous chef to join their dynamic team working in Bahrain." ,
    experience: "Excellent track record within the pasty arena.  Professional with extremely good communication skills. Fluent in English"
  },
  {
    title: "Executive Chef",
    restaurant: "Westin Reston Heights",
    location: "Reston, VA, US",
    description: "",
    experience: ""
  },
  {
    title: "Executive Chef",
    restaurant: "Iron Horse Hotel",
    location: "Milwaukee, WI, US",
    description: "We are looking for an Executive Chef to lead the culinary team of The Iron Horse Hotel. You will work with our culinary director, Michelin star chef Suzy Crofton, to create exceptional menus. The hotel features a number of award-winning outlets including Branded Bar, Smyth Restaurant and The Yard. http://www.theironhorsehotel.com/careers/",
    experience: ""
  },
  {
    title: "Chef de Cuisine",
    restaurant: "the girl & the fig, LLC",
    location: "Sonoma, CA, US",
    description: "The Chef de Cuisine is responsible for daily operations of the kitchen including management of staff, safety procedures, ordering, menu planning, meeting company’s financial goals, facilities maintenance, and continual staff training.",
    experience: "Minimum of 3 years relevant experience as a chef"
  },
  {
    title: 'Lead Cook',
    restaurant: '80 Thoreau',
    location: 'Boston, MA, US',
    description: '80 Thoreau, a fine dining restaurant, is seeking a strong Cook to join their team. This is a hands-on position for an experienced and ambitious individual. The menu is constantly evolving and a variety of French-inspired cooking and preserving techniques embellish local ingredients. ',
    experience: ''
  },
  {
    title: 'Culinary Supervisor', 
    restaurant: 'Hyatt Cambridge',
    location: 'Cambridge, MA',
    description: 'Basic understanding of a kitchen operation within the hotel. Responsible for producing a consistent, quality product that meets and exceeds the guests’ needs in a timely manner. Person has basic skills in department training and is capable of assuming department responsibilities in the absence of the Sous Chef. ', 
    experience: ''
  }
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
