"use strict";
var nam = "Joel Ford";
console.log("Name:", nam.toUpperCase());
function displayPosition(company, title, description) {
    console.log(company, title, description);
}
;
function displaySkill(skill, coolness) {
    if (coolness && true) {
        console.log("* Bam!" + skill);
    }
    else {
        console.log("* " + skill);
    }
}
displayPosition("Career: O'Henry's Coffee /", "Roaster", "\nDescription: Turning Green Beans into Brown Beans.");
console.log("\nMy Interest:");
displayPosition("* Simple Traveling", "\n* Guitar", "\n* Good Stories");
console.log("\nMy Previous Experience:");
displayPosition("* Coffee Roaster", "\n* Welder", "\n* Photography Instructor");
console.log("\nMy Skills:");
displaySkill("Guitar", true);
displaySkill("Song Writing", true);
displaySkill("Handyman", true);
displaySkill("Photography", true);
