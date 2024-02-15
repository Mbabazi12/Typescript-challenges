function titleCase(str: string) {
    let splitStr = str.toLowerCase().split(" ");
  
    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr[i].length < splitStr.length) {
        splitStr[i].charAt(0).toUpperCase();
      }
  
      str = splitStr.join(" ");
    }
  
    return str;
  }
  
  console.log(titleCase("I'm a little tea pot"));