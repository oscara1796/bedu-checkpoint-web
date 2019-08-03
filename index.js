var x = document.getElementsByClassName('breadcrumbs__link');

function clickSingleA(x)
{
    items = document.querySelectorAll('.single.active');

    if(items.length)
    {
        items[0].className = 'single';
    }

    a.className = 'single active';
}
