
var katzLine = [];
function takeANumber(katzLine, customer){
  katzLine.push(`${customer}`);
  return ('Welcome, ' + `${customer}` + '. You are number ' + katzLine.length + ' in line.')

}

function nowServing(katzLine){
  if (katzLine.length === 0){
    return 'There is nobody waiting to be served!'
  } else {
    return ('Currently serving ' + katzLine.shift() + '.')
  }
}

function currentLine(katzLine){
  if (katzLine === 0 ){
    return ('The line is currently empty.');
  } else {
    var output = 'The line is currently:'
    for (var i=0; i<katzLine.length-1;i++){
      output += ' ' + (i+1) + '. ' + katzLine[i] + ','
    } 
    output += ' ' + (katzLine.length) + '. ' + katzLine[katzLine.length-1]
    return output
    

  }
}