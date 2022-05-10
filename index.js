function OnButtonClick(){
    
    var target = document.getElementById('output');
    
    var From = document.getElementById('pw');
    
    if (From.value == 'yusers')
    {
        location = 'https://www.google.com';
    }
    else
    {
        target.innerHTML = '<p style="font-size: 10pt; color: red;">パスワードが違います。やり直してください。</p>';
    }
}

function loadTextFile(fName)
{
httpObj = createXMLHttpRequest(displayData);
if (httpObj)
{
httpObj.open("GET",fName,true);
httpObj.send(null);
}
}
function displayData()
{
if ((httpObj.readyState == 4) && (httpObj.status == 200))
{
pass = httpObj.responseText;
}else{;
pass = '';
}
}