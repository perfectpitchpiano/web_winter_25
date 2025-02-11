alert('I\'m sorry NONE OF THIS IS PERSONAL... prepare to get mildly insulted...')
function askQuestion(){
    var p = prompt('What is the worst insult this page has given you so far?');
    if (p != null){
        document.getElementById('question').innerHTML = 'HmMmMM '+ '"' + p + '"' + ' sounds like a sKiLl iSsUe!';
    }

}