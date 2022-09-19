let х = true;
if (typeof(х) === 'string'
 || typeof(х) === 'boolean'
 || typeof(х) === 'number'
){
  console.log(typeof(х));
} else {
  console.log('Тип а не определен');
}