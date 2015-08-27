function varExample() {
  var myVar = 7;
  console.log('myVar after declaration', myVar);
  console.log('laterVar before declaration', laterVar);
  laterVar = 10;
  if (myVar < 20) {
    var myVar = 'foo';
    var innerVar = true;
    console.log('myVar inside block', myVar);
  }
  var laterVar;
  console.log('laterVar after declaration', laterVar);
  console.log('myVar outside block', myVar === 7);
  console.log('innerVar outside block', innerVar);
}
function letExample(value) {
  if (value) {
    var letValue = value;
    console.log('inside block', letValue);
  }
  try {
    console.log(letValue);
    console.log('let not faithfully handled');
  } catch (e) {
    console.log('letValue not accessible', e);
  }
}
varExample();
letExample(2);
