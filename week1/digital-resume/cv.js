function sw(name)
{
    var e=document.getElementsByClassName(name);
    for (i=0;i<e.length;i++)
    {
        c=new String(e[i].getAttribute('class'));
        if (c.split(' ').indexOf('selected')>=0)
        {
            b=c.split(' ');
            d=new Array();
            for (f=0;f<b.length;f++)
            {
                if (b[f]!='selected')
                {
                    d.push(b[f]);
                }
            }
            e[i].setAttribute('class',d.join(' '))
        }
        else
        {
            e[i].setAttribute('class',c+' selected');
        }
    }
}
