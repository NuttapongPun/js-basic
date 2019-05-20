function multipleHello(number) {
  let text = "";
  for (let i = 0; i < number; i++) {
    text += "hello";
  }
  return text;
}

function multipleTextByCharacter(text, selectedChar) {
  /**
   * count character in given text then multiple the text by that number 
   */
  // TODO: Write code here
  let txt = "";
  for (let i = 0; i < (text.match(new RegExp(selectedChar, "g")) || []).length; i++) {
    txt += text;
  }
  return txt;
}


module.exports = { multipleHello, multipleTextByCharacter };
