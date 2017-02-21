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
    console.log(len);
    // console.log(db.menu[0].name + " " + oldName + " " + db.menu[0].url +
    //   " " + oldUrl);
    // console.log(db.menu[0].name + " " + newName + " " + db.menu[0].url +
    //   " " + newUrl);
    for (var i = 0; i <= len; i++) {
      console.log(i);
      if ((db.menu[i].name === oldName) && (db.menu[i].url === oldUrl)) {
        console.log(db.menu[i].name + " " + oldName + " " + db.menu[i].url +
          " " + oldUrl);
        console.log(db.menu[i].name + " " + newName + " " + db.menu[i].url +
          " " + newUrl);
        resolve("fin");
      }
    }
    //console.log(JSON.stringify(db, undefined, 2));
  });
}
