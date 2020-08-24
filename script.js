console.clear();
var local='en-US';
var months=['JAN','FEB','MAR','Apr','May','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
var country=[
  {name: 'NEW YORK',
   date: '',
   time: '',
   options: {year: 'numeric',  month: 'numeric',  day: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit', hour12: false, month: 'short', timeZone: "America/New_York"}},
  {name: 'LONDON',
   date: '',
   time: '',
   options: {year: 'numeric',  month: 'numeric',  day: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit', hour12: false, month: 'short', timeZone: "Europe/London"}},
  {name: 'BANGKOK',
   date: '',
   time: '',
   options: {year: 'numeric',  month: 'numeric',  day: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit', hour12: false, month: 'short', timeZone: "Asia/Bangkok"}},
  {name: 'TAIPEI',
   date: '',
   time: '',
   options: {year: 'numeric',  month: 'numeric',  day: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit', hour12: false, month: 'short', timeZone: "Asia/Taipei"}},
  {name: 'SYDNEY',
   date: '',
   time: '',
   options: {year: 'numeric',  month: 'numeric',  day: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit', hour12: false, month: 'short', timeZone: "Australia/Sydney"}}
];

function set(CountryName){
  switch(CountryName){
    case 'NEW YORK':
      process(country[0],'NY');
      break;
    case 'LONDON':
      process(country[1],'LD');
      break;
    case 'BANGKOK':
      process(country[2],'BK');
      break;
    case 'TAIPEI':
      process(country[3],'TW');
      break;
    case 'SYDNEY':
      process(country[4],'SN');
      break;
  }
}

function process(countryObj,idname){
  var d=new Date();
  var str=d.toLocaleString(local, countryObj.options);
  // console.log(str);
  var array=str.split(",");
  // console.log(array);
  var datestr=array[0];
  var M_D_str=datestr.split(' ');
  // console.log(M_D_str);
  var year=array[1];
  var month=M_D_str[0];
  // console.log(month)
  var date=M_D_str[1];
  var timestr=array[2];
  var timearray=timestr.split(':');
  var hour=timearray[0];
  var minute=timearray[1];
  countryObj.date=date+' '+month+'. '+year;
  countryObj.time=hour+':'+minute;
  document.querySelector("#"+idname+".name").innerHTML=countryObj.name;
  document.querySelector("#"+idname+".day").innerHTML=countryObj.date;
  document.querySelector("#"+idname+".time").innerHTML=countryObj.time;
}


function init(){
  for(var i=0;i<country.length;i++){
    set(country[i].name);
  }
}

setInterval('init()',1000);