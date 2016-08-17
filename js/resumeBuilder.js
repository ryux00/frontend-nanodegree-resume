/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append(["Nishit Mohanan "]);


 // awesomeThoughts ="AWESOME";
 // funThoughts=awesomeThoughts.replace("AWESOME","Fun");
 //  $("#main").append([funThoughts]);


 formattedName = HTMLheaderName.replace("%data%","Nishit Mohanan");
 formattedRole = HTMLheaderRole.replace("%data%","Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

