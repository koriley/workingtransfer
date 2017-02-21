jQuery(".projectCreate").on("click", function() {

  readAFile("./projects/projects-all.json").then((project) => {
    if (project != '') {
      //console.log("ifProject");
      var proObj = JSON.parse(project);
    }
    var newHtml = [];
    var newArray = [];
    var newObject = {};
    //console.log(proObj.menu.length);
    var name = jQuery('input[name=projectName]').val();
    var url = jQuery('input[name=projectUrl]').val();

    //console.log(name);
    if (!name) {
      jQuery('#proName').addClass('error');
      return;
    } else if (!url) {
      jQuery('#proUrl').addClass('error');
      return;
    }
    if (proObj) {
      //console.log("ifporObj");
      var arrayLength = proObj.menu.length - 1;
    } else {
      arrayLength = -1;
      //  console.log("here");
    }
    //console.log(arrayLength);
    if (arrayLength >= 0) {
      //  console.log("for");
      for (var i = 0; i <= arrayLength; i++) {
        newHtml.push('<li class="project" data-url="' + proObj.menu[i].url +
          '" data-name="' + proObj.menu[i].name + '" id="' + proObj.menu[
            i].url +
          '">' + proObj.menu[i].name + '</li>');
        newArray.push({
          "name": proObj.menu[i].name,
          "url": proObj.menu[i].url
        });
      }
    }
    newArray.push({
      "name": name,
      "url": url
    });
    newHtml.push('<li class="project">' + name + '</li>');
    //console.log(newArray);
    writeObj = {
      "menu": newArray
    }
    JSON.stringify(writeObj, undefined, 2);
    //  console.log(writeObj);
    jQuery('.list').html(JSON.stringify(writeObj, undefined, 2));

    writeFile("./projects/projects-all.json", JSON.stringify(writeObj,
      undefined, 2)).then((reply) => {
      if (error) {
        alert(error);
        return;
      }

    }, (errorMessage) => {
      console.log(errorMessage);
    });
    jQuery('.projects').html(newHtml);
    jQuery('#proName').removeClass('error');
    jQuery('#proUrl').removeClass('error');
    jQuery('input[name=projectName]').val('');
    jQuery('input[name=projectUrl]').val('');
    jQuery('#creator').foundation('close');



  }, (errorMessage) => {
    console.log(errorMessage);
  });

});
