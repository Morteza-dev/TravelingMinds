const key = 'TravelingMinds';
var LastElm=document.getElementById('End');
var RefElm=document.getElementById('note');
//var idE=['0','1','2','3','4','5','6','7','8'];
function CreateElment(className)
{
    //debugger;
    var NewItem=document.createElement('div');
    var Childe=document.createElement('div');
    switch(className)
    {
        case 'Layout1':
            {
                NewItem.className='Layout1 div';
                break;
            }
        case 'Layout2':
            {
                NewItem.className='Layout2 div';
                break;
            }
        case 'Layout3':
            {
                NewItem.className='Layout3 div';
                break;
            }
    }
    Childe.className='close';
    Childe.onclick=function(){debugger; NewItem.remove();}
    NewItem.ondragover=function(event){event.preventDefault();}
    NewItem.ondrop=function(event,RefElm=this)
    {
        debugger;
    //try
    //{
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        var dataJson= JSON.parse(data);
        alert(dataJson.type);
        var Childe=document.createElement('div');
        Childe.className='closeTools';
        //console.log(RefElm);
        //debugger;
        if(Validator(RefElm,dataJson.size))
        {
            switch(dataJson.type)
            {
                case 'textarea':
                    {
                        debugger;
                        var NewItem=document.createElement(dataJson.type);
                        NewItem.className=dataJson.type+" "+dataJson.size;
                        setMaxLength(RefElm,NewItem,dataJson.size);
                        console.log(NewItem.maxlength);
                        //NewItem.appendChild(Childe);
                        RefElm.appendChild(NewItem);
                        NewItem.ondblclick=function(){RemoveThis(this);}
                        //Childe.onclick=function(){debugger; NewItem.remove();}
                        break;
                    }
                case 'camera':
                    {
                        var NewItem=document.createElement('div');
                        var btn=document.createElement('button');
                        var inpt=document.createElement('input');
                        NewItem.className=dataJson.type+" "+dataJson.size;
                        btn.className='btn';
                        btn.innerHTML='Browse';
                        btn.onclick=function()
                        {
                            //alert(inpt.value);
                            inpt.click();
                        }
                        inpt.className='inputfile';
                        inpt.type='file';
                        inpt.onchange=function()
                        {
                            //alert(inpt.value);
                            var path=inpt.value;
                            alert(document.getElementById('Test').src);
                            document.getElementById('Test').src='E:\Yas%20Smart%20Group\Projects\TravelingMinds\TravelingMinds\Resources\R8.jpg';
                            alert(document.getElementById('Test').src);
                            
                            
                        }
                        NewItem.appendChild(inpt);
                        NewItem.appendChild(Childe);
                        NewItem.insertBefore(btn,inpt);
                        //NewItem.insertBefore(inpt,Childe);
                        RefElm.appendChild(NewItem);
                        Childe.ondblclick=function(){RemoveThis(NewItem);}
                        break;
                    }    
                case 'pic':
                    {
                        var NewItem=document.createElement('div');
                        var inpt=document.createElement('input');
                        NewItem.className=dataJson.type+" "+dataJson.size;
                        inpt.className='inputLink';
                        inpt.type='Text';
                        inpt.placeholder='Link ...';
                        inpt.onchange=function()
                        {
                            if(ExtensionValidator(inpt.value))
                            {
                                var img=document.createElement('img');
                                img.className='imglink';
                                NewItem.insertBefore(img,inpt);
                                img.src=inpt.value;
                                inpt.style.display='none';
                                img.ondblclick=function(){RemoveThis(this); inpt.style.display='block'; inpt.value='';  }
                            }
                        }
                        NewItem.appendChild(inpt);
                       // NewItem.insertBefore(inpt,Childe);
                       NewItem.appendChild(Childe);
                        RefElm.appendChild(NewItem);
                        Childe.ondblclick=function(){RemoveThis(NewItem);}
                        //Childe.onclick=function(){debugger; NewItem.remove();}
                        break;
                    }    
            }
    
        }
        else
        {

        }
        //var NewItem=document.createElement(dataJson.type);
        //NewItem.className=dataJson.type+" "+dataJson.size;
        //RefElm.appendChild(NewItem);
   // }
    //catch
   // {
        //event.preventDefault();
        //alert('alert');
    //}
    }
    NewItem.appendChild(Childe);
    RefElm.insertBefore(NewItem,LastElm);
    /*NewItem.onclick=function()
    {
        debugger;
        alert('Test');
        var x=NewItem.innerHTML;
        document.getElementById('para').innerHTML=x;
    }*/
}


function RemoveThis(elm)
{
    elm.remove();
}


function drag(ev,NameElement,Size)
{
    debugger;
    var data={type:NameElement , size:Size};
    var dataString=JSON.stringify(data);
    ev.dataTransfer.setData('text',dataString);
}
function drop(ev,RefElm=this) {
    debugger;
    try
    {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var dataJson= JSON.parse(data);
        alert(dataJson.type);
        var NewItem=document.createElement('textarea');
        NewItem.className=dataJson.type+" "+dataJson.size;
        RefElm.appendChild(NewItem);
    }
    catch
    {
        ev.preventDefault();
        alert('alert');
    }
  }
  function allowDrop(ev) 
  {
    ev.preventDefault();
  }
  function Validator(parent,size)
{
    debugger;
    console.log(parent);
    var p=parent;
    console.log(p);
    var q=p.querySelector("close");
    console.log(q);
    switch(size)
    {
        case 'size1':
            {
                if(p.getElementsByClassName("size3").length>0)
                    return false;
                else
                {
                    if(p.getElementsByClassName("size2").length==1)
                    {
                        if(p.getElementsByClassName("size1").length>0)
                        return false;
                        else
                        return true;
                    }
                    else if(p.getElementsByClassName("size2").length==0)
                    {
                        if(p.getElementsByClassName("size1").length>2)
                        return false;
                        else
                        return true;
                    }    
                }    
                break;
            }
        case 'size2':
            {
                if(p.getElementsByClassName("size3").length>0)
                    return false;
                else
                {
                    if(p.getElementsByClassName("size2").length>0)
                        return false;
                    else
                    {
                        if(p.getElementsByClassName("size1").length>1)
                            return false;
                            
                        else
                            return true;
                    }
                }    
                break;
            }
        case 'size3':
            {
                if(p.getElementsByClassName("size3").length>0)
                    return false;
                else
                {
                    if(p.getElementsByClassName("size2").length>0)
                        return false;
                    else
                    {
                        if(p.getElementsByClassName("size1").length>0)
                            return false;
                        else
                            return true;
                    }
                }
                break;
            }        
    }
}
function HideShowSidebar(elm)
{
    var dspl=document.getElementById('side').style.display;
    if(dspl==='none')
    {
        document.getElementById('side').style.display='block';
        document.getElementById('note').style.width='75%';
    }
    else
    {
        document.getElementById('side').style.display='none';
        document.getElementById('note').style.width='100%';
    }
}
function setMaxLength(RE,elm,size)
{
    var x = RE.className;
    console.log(x);
    switch(x)
    {
        case 'Layout1 div':
            {
                if(size==='size2')
                {
                    elm.setAttribute("maxlength", "352");
                }
                if(size==='size1')
                {
                    elm.setAttribute("maxlength", "176");
                }
                
                break;
            }
        case 'Layout2 div':
            {
                if(size==='size2')
                {
                    elm.setAttribute("maxlength", "528");
                }
                if(size==='size1')
                {
                    elm.setAttribute("maxlength", "264");
                }
                break;
            }
    }
}
function ExtensionValidator(link)
{
    debugger;  
       // var array = ['jpg', 'jpeg', 'gif', 'png', 'tif', 'tiff'];  
      //  var Extension = link.substring(link.lastIndexOf('.')+1 ).toLowerCase();  
      //  var test=array.indexOf(Extension)
      //  var t='jpg?size=626&ext=jpg';
      //  if (Extension.indexOf(t) <= -1) 
     //   {  
    //        alert("Please Upload only jpg , jepg , gif , png , tif and tiff extension flle");  
     //       return false;  
     //   }  
      //  else
      //      return true;

    var array = ['jpg', 'jpeg', 'gif', 'png', 'tif', 'tiff'];  
    var Extension = link.substring(link.lastIndexOf('.')+1 ).toLowerCase();
    for(var i=0; i<array.length ; i++)
    {
        if(Extension.includes(array[i])===true)
        {
            return true;
        }
        else
        {
            alert("Please Upload only jpg , jepg , gif , png , tif and tiff extension flle");
            return false;
        }
    }
}
function Publish()
{
    var parent = document.getElementById('note');
    var Container= parent.querySelectorAll(".div");
    var ListContainer=[];
    var ListValue=[];
    for(var i=0; i<Container.length; i++)
    {
        var CI={
            CN:Container[i].className,
            CU:Container[i].children.length-1
        }
        ListContainer.push(CI);
        for(var j=1; j<Container[i].children.length ; j++)
        {
            var Temp=Container[i].children;
            var elm={
                CN:Temp[j].className,
                CV:ValueOfCn(Temp[j])
            }
            ListValue.push(elm);
        }
    }
    var Data={
        title:document.getElementById('header').value,
        src:document.getElementById('mainImg').src,
        parent:ListContainer,
        childs:ListValue
    };
    var Description=JSON.stringify(Data);
    debugger;
    console.log(Data);
    console.log(Description);

    //send
}
function ValueOfCn(elm)
{
    if(elm.className.includes('pic'))
    {
        var Tmp=elm.getElementsByTagName('img');
        return Tmp[0].src;
    }
    else
    {
        return elm.value;
    }
}
