var rightClick = (event) => {
  return new Promise((resolve, reject) => {
    var clickType = event.which;
    if (clickType === 3) {
      var x = event.clientX;
      var y = event.clientY;
      var id = (event.target || event.srcElement).id;
      var myClass = (event.target || event.srcElement).className;
      //console.log("id = " + id + " class = " + myClass);
      resolve({
        "x": x,
        "y": y,
        "id": id,
        "class": myClass
      });
    } else {
      //lets look and see if any dialog boxes are floating around and kill them
      destroyDialogBox("newDialog");

    }
  });
}

/*
 * give it an object with an item array that has the name and url of the the list item.
 * Insteat of a url you can also pass javascript to run.
 *
 *  {x:12,y:43,items:[{name:edit, url:jQuery(".editDiv").show();}]}
 */

var createDialogBox = (obj) => {
  return new Promise((resolve, reject) => {
    //lets remove any instances first

    destroyDialogBox("newDialog");
    var x = obj.x + 5;
    var y = obj.y + 5;
    var body = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    var ul = document.createElement('ul');
    div.className = "newDialog"
    div.appendChild(ul);
    var len = obj.items.length - 1;
    for (var i = 0; i <= len; i++) {
      var li = document.createElement('li');
      li.innerHTML = obj.items[i].name;
      ul.appendChild(li);
    }

    div.style.background = "grey";
    div.style.position = "absolute";
    div.style.top = y + "px";
    div.style.left = x + "px";
    div.style.display = "none"
    div.style.opacity = 0.1
    body.appendChild(div);
    //console.log(len);
    unfade(div);
    resolve("cdb200");

  });
}

var destroyDialogBox = (className) => {
  return new Promise((resolve, reject) => {
    var toRemove = document.getElementsByClassName(className);
    if (toRemove.length > 0) {
      toRemove[0].parentNode.removeChild(toRemove[0]);

    }

  });
}

function unfade(element) {
  var op = 0.1; // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function() {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 5);
}
