const key = 'TravelingMinds';
const keydata = 'dataTransfer';
var datapass;
var rqst=new XMLHttpRequest();
var url='';
var interval;
var islogin=false;
var dataThisPage={
    username:'',
    bio:'',
    urlImg:'',
    follow:'',
    favorite:''
};
function isLogin()
{
    debugger;
    var Temp=String(localStorage.getItem(key));
    if(Temp=='null' || Temp=='')
    {
        islogin=false;
        setting(islogin);
    }
    else
    {
        islogin=true;
        setting(islogin);
    }
}
function setting(condition)
{
    if(condition==true)
    {
        var jsonTemp= JSON.parse(localStorage.getItem(key));
        var jsonData=JSON.parse(sessionStorage.getItem(keydata));
        if(jsonTemp.username==jsonData.username)
        {
            //edit
            document.getElementById('btnEdit').style.display='block';
            document.getElementById('btnEdit').onclick=function(){Edit();};
            document.getElementById('btnFolow').style.display='none';
            var text=document.getElementById('btnEdit').getElementsByTagName('button');
            text[0].innerHTML='Edit';
            document.getElementById('EBio').style.display='none';
            document.getElementById('SBio').style.display='block';
            document.getElementById('UserNameinpt').style.display='none';
            document.getElementById('UserNameSide').style.display='block';
            document.getElementById('uimg').disabled = true;
        }
        else
        {
            document.getElementById('btnWriteStorty').onclick=function(){WriteStorty()};
            document.getElementById('btnFolow').style.display='block';
            document.getElementById('btnFolow').onclick=function(){rqstFollow();};
            document.getElementById('btnEdit').style.display='none';
            document.getElementById('EBio').style.display='none';
            document.getElementById('SBio').style.display='block';
            document.getElementById('UserNameinpt').style.display='none';
            document.getElementById('UserNameSide').style.display='block';
            document.getElementById('uimg').disabled = true;
        }
    }
    else
    {
        document.getElementById('btnWriteStorty').onclick=function(){ShowSignin();};
        document.getElementById('btnFolow').onclick=function(){ShowSignin();};
        document.getElementById('btnEdit').style.display='none';
        document.getElementById('EBio').style.display='none';
        document.getElementById('SBio').style.display='block';
        document.getElementById('UserNameinpt').style.display='none';
        document.getElementById('UserNameSide').style.display='block';
        document.getElementById('uimg').disabled = true;
    }
}
function GetData()
{

}
function rqstFollow()
{

        //rqst follow

}
function WriteStorty()
{
    // set data
}
function Edit()
{
    var text=document.getElementById('btnEdit').getElementsByTagName('button');
    if(text[0].innerHTML==='Edit')
    {
        text[0].innerHTML='Show';
        document.getElementById('EBio').style.display='block';
        document.getElementById('SBio').style.display='none';
        document.getElementById('UserNameinpt').style.display='block';
        document.getElementById('UserNameSide').style.display='none';
        document.getElementById('uimg').disabled = false;
    }
    else
    {
        text[0].innerHTML='Edit';
        document.getElementById('EBio').style.display='none';
        document.getElementById('SBio').style.display='block';
        document.getElementById('UserNameinpt').style.display='none';
        document.getElementById('UserNameSide').style.display='block';
        document.getElementById('uimg').disabled = true;
    }
}
function ChooseImg()
{
    document.getElementById('uimg').click();
}
function TtoR(element)
{
    debugger;
    var parent = element.parentElement;
    var elm=parent.getElementsByClassName('Popular');
    //var elm=document.getElementById('Popular');
    //var RB=document.getElementById('RB');
    //var LB=document.getElementById('LB');
    elm[0].scrollLeft+=310;
    //RB.style.right=pos+'px';
    //LB.style.left=pos+'px';
}

function TtoL(element)
{
    debugger;
    var parent = element.parentElement;
    var elm=parent.getElementsByClassName('Popular');
    //var elm=document.getElementById('Popular');
    //var RB=document.getElementById('RB');
    //var LB=document.getElementById('LB');
    elm[0].scrollLeft-=310;
  //  RB.style.right=pos+'px';
    //LB.style.left=pos+'px';
}
function load(page)
{
    function none()
    {
        document.getElementById('suggestion').style.display='none';
        document.getElementById('Posts').style.display='none';
        document.getElementById('Following').style.display='none';
        document.getElementById('Follower').style.display='none';
    }
    none();
    document.getElementById(page).style.display='block';
}
function More(part)
{
    debugger;
    switch(part)
    {
        case 'post':
            {
                MorePost();
                break;
            }
    case 'Follower':
            {
                MoreFollow('Follower');
                break;
            }
    case 'Following':
            {
                MoreFollow('Following');
                break;
            }
    }
    
}
function MorePost()
{
    parent=document.getElementById('grid');
    for(var i=0;i<9;i++)
    {
        var item=document.createElement('div');
        var imgItem=document.createElement('img');
        var TextsItem=document.createElement('div');
        var title = document.createElement('h2');
        var para =document.createElement('p');
        //  Class
        item.className='itemgrid';
        imgItem.src='../Resources/R5.jpg';
        title.innerHTML='Lorem Ipsum';
        para.innerHTML='Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.';
        // Insert
        parent.appendChild(item);
        item.appendChild(imgItem);
        item.appendChild(TextsItem);
        TextsItem.appendChild(title);
        TextsItem.appendChild(para);
    }
}
function MoreFollow(part)
{
    var parent;
    if(part=='Follower')
    {
        var Temp=document.getElementById('Follower').getElementsByClassName('gridF');
        parent=Temp[0];
    }
    else
    {
        var Temp=document.getElementById('Following').getElementsByClassName('gridF');
        parent=Temp[0];
    }

    for(var i=0;i<8;i++)
    {
        // Creat Element
        var item=document.createElement('div');
        var pic=document.createElement('img');
        var username=document.createElement('div');
        // Class
        item.className='users';
        pic.className='picF';
        pic.src='../Resources/1_3fQlbJuRmhdCsehLykpBHA.png';
        pic.alt='profile';
        username.className='UsernameF';
        username.innerHTML='Will Locket';
        // Insert
        parent.appendChild(item);
        item.appendChild(pic);
        item.appendChild(username);
    }
}
function Tags()
{
    var parent =document.getElementById('suggestion');
    var Title = document.createElement('h1');
    var Container=document.createElement('div');
    var btnL=document.createElement('div');
    var btnR=document.createElement('div');
    var btnIL=document.createElement('img');
    var btnIR=document.createElement('img');
    var post=document.createElement('div');

    Title.className='TitleS';
    Title.innerHTML='Title';
    Container.className='list';
    btnL.className='btn';
    btnR.className='btn';
    btnIR.src='../Resources/icons8-chevron-right-26.png';
    btnIL.src='../Resources/icons8-chevron-left-26.png';
    btnIR.alt='rb';
    btnIL.alt='lb';
    post.className='Popular';

    parent.appendChild(Title);
    parent.appendChild(Container);
    Container.appendChild(btnL);
    Container.appendChild(post);
    Container.appendChild(btnR);
    btnL.appendChild(btnIL);
    btnR.appendChild(btnIR);



    for(var i=0;i<4;i++)
    {
        var item=document.createElement('div');
        var div=document.createElement('div');
        var header=document.createElement('h1');
        var para=document.createElement('div');

        item.className='li';
        item.style.backgroundImage="url('..//Resources/R2.jpg')";
        item.style.backgroundPosition='center';
        item.style.backgroundRepeat='no-repeat';
        item.style.backgroundSize='cover';
        div.className='div';
        header.innerHTML='Lorem Ipsum';
        para.innerHTML='Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.';

        post.appendChild(item);
        item.appendChild(div);
        div.appendChild(header);
        div.appendChild(para);
    }
}
function Refresh()
{
    debugger;
    
}
function ShowSignin()
{
    debugger;
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