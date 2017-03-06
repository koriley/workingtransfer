// function replaceByValue(field, oldvalue, newvalue) {
//   for (var k = 0; k < json.length; ++k) {
//     if (oldvalue == json[k][field]) {
//       json[k][field] = newvalue;
//     }
//   }
//   return json;
// }

var objectUpdate = (newObject, allObjects) => {
  return new Promise((resolve, reject) => {
    var db = JSON.parse(allObjects);
    var len = db.menu.length - 1;
    var oldName = newObject.oldName;
    var newName = newObject.newName;
    var oldUrl = newObject.oldUrl;
    var newUrl = newObject.newUrl;
    var newHtml = [];
    //console.log(len);
    // console.log(db.menu[0].name + " " + oldName + " " + db.menu[0].url +
    //   " " + oldUrl);
    // console.log(db.menu[0].name + " " + newName + " " + db.menu[0].url +
    //   " " + newUrl);
    for (var i = 0; i <= len; i++) {
      //console.log(i);
      if ((db.menu[i].name === oldName) && (db.menu[i].url === oldUrl)) {
        // console.log(db.menu[i].name + " " + oldName + " " + db.menu[i].url +
        //   " " + oldUrl);
        // console.log(db.menu[i].name + " " + newName + " " + db.menu[i].url +
        //   " " + newUrl);
        db.menu[i].name = newName;
        db.menu[i].url = newUrl;
      }
    }

    writeFile("./projects/projects-all.json", JSON.stringify(db,
      undefined, 2)).then((reply) => {
      if (error) {
        alert(error);
        return;
      }

    }, (errorMessage) => {
      console.log(errorMessage);
    });
    console.log(db);
    for (var i = 0; i <= len; i++) {
      newHtml.push('<li class="project" data-url="' + db.menu[i].url +
        '" data-name="' + db.menu[i].name + '" id="' + db.menu[
          i].url +
        '">' + db.menu[i].name + '</li>');

    }
    jQuery('.projects').html(newHtml);
    //console.log(JSON.stringify(db, undefined, 2));
  });
}
