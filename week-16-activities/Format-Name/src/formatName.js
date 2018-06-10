var formatName = function formatName(nameList) {

    var length = nameList.length;
    var separate = "";
    var names = "";

    for (var i = 0; i < length; i++) {
        if (i === 0) {
            separate = "";
        }

        else if (i === length - 1) {
            separate = " & ";
        }

        else {
            separate = ", ";
        }
    
        names += separate + nameList[i];
    }
    console.log(names);
  };

//formatName(["Kyle", "Phil", "Josh"]);



module.exports = formatName;