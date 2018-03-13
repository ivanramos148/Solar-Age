import './styles.css';
import { jsTemplate } from './jsTemplate';

$(document).ready(function() {
  $('#template-form').submit(function(event) {
    event.preventDefault();
    var output = jsTemplate(name);
    $('#outputName').append("<li>hello my name is " + output + "</li>");
 });
});
