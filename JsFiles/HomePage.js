//var interval;
// user
const key = 'TravelingMinds';
const keydata = 'dataTransfer';
var rqst=new XMLHttpRequest();
var url='http://127.0.0.1:8000/api/';
var WY = document.getElementById('body').scrollHeight-document.getElementById('body').clientHeight;
var Tags=[];
var interval;
var islogin=true;
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
function WriteStory(elm)
{
    debugger;
    if(islogin==true)
    {
        var aTag=elm.getElementsByTagName('a');
        aTag[0].setAttribute("href", "../HtmlFiles/WriteStory.html");
        aTag[0].click();
    }
    else
    {
        var aTag=elm.getElementsByTagName('a');
        aTag[0].setAttribute("href", "#");
        ShowSignin();       
    }
}
function GetStarted(elm)
{
    debugger;
    if(islogin==true)
    {
        elm.setAttribute("href", "../HtmlFiles/WriteStory.html");
        elm.click();
    }
    else
    {
        elm.setAttribute("href", "#");
        ShowSignin();       
    }
}
//user
function isLogin()
{
    debugger;;
   var Temp=String(localStorage.getItem(key));
    if(Temp=="null" || Temp=='')
    {
        islogin=false;
        settings(islogin);
    }
    else
    {
        islogin=true;
        settings(islogin);
    }
    
}
function settings(condition)
{
    if(condition)
    {
        var write=document.getElementById('write').setAttribute("href", "../HtmlFiles/WriteStory.html");
        var profile=document.getElementById('profile').style.display='block';
        var signin=document.getElementById('signin').style.display='none';
        var GetStratedli=document.getElementById('GetStratedli').setAttribute("href", "../HtmlFiles/WriteStory.html");
        var GetStrated=document.getElementById('GetStratedh').href='../HtmlFiles/WriteStory.html';
    }
    else
    {
        debugger;
        document.getElementById('write').setAttribute("href", "#");
        document.getElementById('profile').style.display='none';
        document.getElementById('signin').style.display='block';
        document.getElementById('GetStratedli').setAttribute("href", "#");
        document.getElementById('GetStratedh').href='#';
    }
}
function LogOut()
{
    islogin=false;
    localStorage.removeItem(key);
    settings(false);
}
function change(elm)
{
    debugger;
    if(elm.innerHTML=='Create one')
    {
        elm.innerHTML='Sign in';
        var x = document.getElementById("CreateLogin").parentElement;
        //x.innerText='';
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
        //x.innerText='No account?';
        btn.onclick=function(){rqstLoginSignin('users/login/?$');}       
    }
}
//hamed
function rqstLoginSignin(Url)
{
    debugger;
    var UserName=document.getElementById('username').value;
    var Pass=document.getElementById('pass').value;
    alert(url+Url);
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
function animation()
{
    var msg=document.getElementById('msg');
    msg.style.display='block';
    var img=msg.getElementsByTagName('img');
    var status=img[0].style.display;
    if(status!='none')
    {
        img[0].style.display='none';
    }
    else
    {
        img[0].style.display='block';
    }
}
function Test()
{
    setInterval(function(){handler();},3000);
       
}
function UpdatePositionReload()
{
    WY=document.getElementById('body').scrollHeight-document.getElementById('body').clientHeight;
}
function reload()
{
    //debugger;
    var elmnt=document.getElementById('body');
    var SB = elmnt.scrollTop;
    if(SB<350)
    {
        document.getElementById('nav').style.backgroundColor='#ffbe00';
        document.getElementById('navfake').style.backgroundColor='#ffbe00';
    }
    if(SB>350)
    {
        document.getElementById('nav').style.backgroundColor='#ffffff';
        document.getElementById('navfake').style.backgroundColor='#ffffff';
    }
    //alert('Test')
    if(WY===SB)
    {
        debugger;
        document.getElementById('divLoad').style.display='flex';
        var i=0;
        setInterval(function()
        {
            i++;
            if(i===3)
            {
                handler();
                clearInterval();
            }
        },500);
    }
}
function handler()
{
    document.getElementById('divLoad').style.display='none';
    var Posts=GetAllPost();
   // var items= JSON.parse(Posts);
    for(var c=0;c<Posts.length;c++)
    {
        var Temp=JSON.parse(Posts[c].Description);
        //Elements
        var parent=document.getElementById('PaPost');
        var NewElement=document.createElement('div');
        var piccol=document.createElement('div');
        var textcol=document.createElement('div');
        var img=document.createElement('img');
        var TC1=document.createElement('div');
        var TC2=document.createElement('div');
        var TC3=document.createElement('div');
        var TC4=document.createElement('div');
        var TC1img=document.createElement('img');
        var TC1div=document.createElement('a');
        var TC4img=document.createElement('img');
        var TC4p=document.createElement('p');
        //Class and Attr
        NewElement.className='Grid2C';
        piccol.className='PC';
        textcol.className='TC';
        img.src='../Resources/0_Dbz1EbqxEDPDJtD3.jpg';
        TC1.className='TC1';
        TC2.className='TC2';
        TC3.className='TC3';
        TC4.className='TC4';
        TC1img.src='../Resources/1_U8jdJEXKjPtH6hR0joEzbA.jpeg';
        TC1img.alt='username';
        TC1img.onclick=function(){visitprofile(this);}
        TC1div.innerHTML='Pugliese in The Startup';
        TC1div.href='#';
        TC1div.onclick=function(){visit(this)};
        //TC1a.innerHTML='Pugliese in The Startup';
        //TC1a.onclick=function(){GoToMemmber(this.innerHTML)};
        TC2.innerHTML='Stop this Microservices Madness';
        TC3.innerHTML='I’m a big fan of Microservices. Does it sound weird, given the title? Well, it should not.';
        TC4img.src='../Resources/icons8-bookmark-24.png';
        TC4img.alt='icon bookmark';
        TC4p.innerHTML='Jan 19 . 6 min read';
        //insert
        parent.appendChild(NewElement);
        NewElement.appendChild(piccol);
        NewElement.insertBefore(textcol,piccol);
        piccol.appendChild(img);
        textcol.appendChild(TC4);
        textcol.insertBefore(TC3,TC4);
        textcol.insertBefore(TC2,TC3);
        textcol.insertBefore(TC1,TC2);
        TC1.appendChild(TC1div);
        TC1.insertBefore(TC1img,TC1div);
        TC4.appendChild(TC4img);
        TC4.insertBefore(TC4p,TC4img);
    }
    UpdatePositionReload();
}
function visitpost(elm)
{
    //set session
    sessionStorage.setItem(keydata, elm.innerHTML);
    elm.href='../HtmlFiles/ShowPost.html';
    elm.click();
}
function visitprofile(elm)
{
    //set session
    sessionStorage.setItem(keydata, elm.alt);
    elm.href='../HtmlFiles/Profile.html';
    elm.click();
}
function visitMyProfile()
{
    sessionStorage.setItem(key, localStorage.getItem(key));
}
function GetAllPost()
{
    rqst.open('Post',url+'articles',true);
    var rspns= rqst.send();
    if(rqst.status==200)
    {
        return rspns;
    }
    else
    {
        alert('Check Internet');
    }
}
function GetImg(name)
{
    rqst.open('Post',url+'user/?$'+true);
    return rqst.send('username='+name);
}
function GetPostByTag()
{

}
