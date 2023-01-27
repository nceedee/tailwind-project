const bar = document.querySelector( '.bar' );
const menus = document.querySelector( ".menus" );
const cancels = document.querySelector( ".cancels" );

window.onload = () =>
{
    bar.addEventListener("click", menuDisplay);
    cancels.addEventListener( 'click', menuHide );
}

function menuDisplay( e )
{
    if ( bar )
    {
        menus.style.display = "block";
        bar.style.display = 'none'
        cancels.style.display = "block";
    }
}

function menuHide( e )
{
    if ( cancels )
    {
        menus.style.display = "none";
        bar.style.display = "block";
        cancels.style.display = "none";
    }
}