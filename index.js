function highlight(htmlContent, plainText, plainTextPositions) {
    let htmlCopy = htmlContent;
    const startTag = '<mark>';
    const endTag = '</mark>';
  
    for (const position of plainTextPositions) {
      const { start, end } = position;
    
      const startPosInHTML = htmlCopy.indexOf(plainText.slice(start, end),start-1);
      const endPosInHTML = startPosInHTML + (end - start);

        htmlCopy =
        htmlCopy.slice(0, startPosInHTML) +
        startTag +
        htmlCopy.slice(startPosInHTML, endPosInHTML) +
        endTag +
        htmlCopy.slice(endPosInHTML);
    }htmlCopy
  
    return htmlCopy;
  }

  module.exports = highlight;