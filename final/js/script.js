alert('Hello everyone! I\'m very excited to tell you about myself!')

function askQuestion(){
    var p = prompt('What was your favorite section in this website?');
    if (p != null){
        document.getElementById('question').innerHTML = 'Thanks! The ' + p + ' section took a lot of effort. I\'m glad you liked it!';
    }
}