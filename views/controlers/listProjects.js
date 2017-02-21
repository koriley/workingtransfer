//var rMouse = require("./controlers/rMouseClick");
readAFile("./projects/projects-all.json").then((project) => {
  if (project != '') {
    //console.log("readin file at start");
    var proObj = JSON.parse(project);
    //console.log(proObj);
    var newHtml = [];
    //console.log(proObj.menu.length);
    var length = proObj.menu.length - 1;

    //console.log(length);
    for (var i = 0; i <= length; i++) {
      newHtml.push('<li class="project" id = "' + proObj.menu[
        i].url + '">' + proObj.menu[i].name + '</li>');
    }
  }

  //console.log(proObj.menu[0].name)
  jQuery('.projects').html(newHtml);
  // jQuery(document).ready(function() {
  //   jQuery(".project").each(function() {
  //     jQuery(this).mousedown(function(e) {
  //       if (e.which === 3) {
  //         console.log("yep");
  //       }
  //     });
  //   });
  // });


}, (errorMessage) => {
  console.log(errorMessage);
});
