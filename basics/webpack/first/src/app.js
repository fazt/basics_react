import 'babel-polyfill';
import people from '../people';
import $ from 'jquery';

$('<h1>People</h1>').appendTo('body');

const ul = $('<ul></ul>').appendTo('body');

for(let person of people){
  $('<li></li>').text(person).appendTo(ul);
}
