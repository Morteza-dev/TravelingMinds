const key = 'TravelingMinds';
var rqst=new XMLHttpRequest();
var url='';
var interval;
var islogin=false;
const keydata = 'dataTransfer';
function isLogin()
{
    debugger;
    var Temp=String(localStorage.getItem(key));
    if(Temp=="null" || Temp=='')
    {
        islogin=false;
        setting(islogin);
    }
    else
    {
        islogin=true;
        setting(islogin);
    }
    makeComment();
}
function setting(condition)
{
    debugger;
    if(condition==true)
    {
        document.getElementById('WComment').disabled=false;
        var btn = document.getElementById('UB').getElementsByTagName('button');
        btn[0].onclick=function(){ShowSignin();}                                                   // send rqst follow
        var btn2 = document.getElementById('WriteComment').getElementsByTagName('button');
        btn2[0].onclick=function(){ShowSignin();}                                                   // send rqst comment
        document.getElementById('prfle').style.display='block';
        document.getElementById('signin').style.display='none';
        document.getElementById('sbscrb').onclick=function(){ShowSignin();}                         // send rqst follow
    }
    else
    {
        document.getElementById('WComment').disabled=true;
        var btn = document.getElementById('UB').getElementsByTagName('button');
        btn[0].onclick=function(){ShowSignin();} 
        var btn2 = document.getElementById('WriteComment').getElementsByTagName('button');
        btn2[0].onclick=function(){ShowSignin();} 
        document.getElementById('prfle').style.display='none';
        document.getElementById('signin').style.display='flex';
        document.getElementById('sbscrb').onclick=function(){ShowSignin();} 
    }
}
function change(elm)
{
    debugger;
    if(elm.innerHTML=='Create one')
    {
        elm.innerHTML='Sign in';
        var x = document.getElementById("CreateLogin").parentElement;
        var btn=document.getElementById('btnsubmit');
        btn.value='Sign Up';
        btn.onclick=function(){rqstLoginSignin('users/?$'); }
    }
    else
    {
        elm.innerHTML='Create one';
        var btn=document.getElementById('btnsubmit');
        btn.value='Sign in';
        var x = document.getElementById("CreateLogin").parentElement;
        btn.onclick=function(){rqstLoginSignin('users/login/?$');}       
    }
}
function rqstLoginSignin(Url)
{
    var UserName=document.getElementById('username').value;
    var Pass=document.getElementById('pass').value;
    rqst.open("Post", url+Url, true);
    var rspns=rqst.send('username='+UserName+'&'+'password='+Pass);
    if(rspns==true)
    {
        var Jsondata={username:UserName , pass:Pass };
        var data = JSON.stringify(Jsondata);
        document.getElementById('usernameTooltip').innerText=Jsondata.username;
        localStorage.setItem(key, data);
        islogin=true;
        settings(islogin);
    }
    else
    {
        islogin=false;
        settings(islogin);
    }
            
}
function ShowComment()
{
    debugger;
    var body=document.getElementsByTagName('body');
    body[0].style.overflowY='hidden';
    body[0].scrollTop=0;
    var page=document.getElementById('Comments');
    page.style.visibility='visible';
    makeComment();
}
function HideComment()
{
    var body=document.getElementsByTagName('body');
    body[0].style.overflowY='visible';
    var page=document.getElementById('Comments');
    page.style.visibility='hidden';
}
function ShowSignin()
{
    var body=document.getElementsByTagName('body');
    body[0].style.overflowY='hidden';
    var page=document.getElementById('SigninPage');
    page.style.visibility='visible';
}
function HideForm()
{
    var body=document.getElementsByTagName('body');
    body[0].style.overflowY='visible';
    var page=document.getElementById('SigninPage');
    page.style.visibility='hidden';
}
function showhide()
{
    var inpt = document.getElementById('pass');
    var img = document.getElementById('imgHS');
    if(inpt.type==='password')
    {
        inpt.type='text';
        img.src='../Resources/icons8-hide-24.png';
    }
    else
    {
        inpt.type='password';
        img.src='../Resources/icons8-eye-24.png';
    }
}
function makeComment()
{

    var parent = document.getElementById('ShowComents');
    var card=document.createElement('div');
    var info=document.createElement('div');
    var text=document.createElement('div');
    var img=document.createElement('img');
    var Atag=document.createElement('a');

    card.className='Card';
    info.className='Info';
    text.className='TextComment';
    text.innerHTML='Sometimes a single feature can be split into modules by abstraction layer (data, domain, etc.)';
    img.src='../Resources/images.jfif';
    Atag.innerHTML='Lewis Donovan';
    Atag.href='#';
    Atag.onclick=function(){visit(this);}

    parent.appendChild(card);
    card.appendChild(info);
    card.appendChild(text);
    info.appendChild(img);
    info.appendChild(Atag);
}
function visit(elm)
{
    //set session
    sessionStorage.setItem(keydata,this.innerHTML)
    elm.href='../HtmlFiles/Profile.html';
    elm.click();
}
function GetPost()
{
    sessionStorage.getItem(keydata);
    rqst.open('Post',url+'',true);
    rqst.send();
    var post = rqst.response;
    var des=JSON.parse(post.description);
    document.getElementById('titlePost')=post.title;
    rqst.open('Post',url+'',true);
    rqst.send('username='+post.author);
    var source=rqst.response.Image;
    document.getElementById('imgProfile').src=source;
    document.getElementById('author').innerText=post.author;
    document.getElementById('MainImg').src=des.src;

    var Main=document.getElementById('MainPost');
    var count=0;
    for(var i=0; i<des.parent.length; i++)
    {
        var child=document.createElement('div');
        child.className=des.parent[i].CN;
        Main.appendChild(child);
        for(var j=0; j<des.parent[i].CU; j++)
        {
            if(des.elm[count].CN.includes('textarea'))
            {
                var node=document.createElement('textarea');
                node.className=des.elm[count].CN;
                node.value=des.elm[count].CV;
                child.appendChild(node);
            }
            else
            {
                var node=document.createElement('img');
                node.className=des.elm[count].CN;
                node.src=des.elm[count].CV;
                child.appendChild(node);
            }
            count++;
        }
        
    }
}