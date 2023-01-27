const img = document.querySelector( '.imgs2' );
const seeMore = document.querySelector( '.seeMore' );
const closes = document.querySelector(".closes");

window.onload = () =>
{
    seeMore.addEventListener( 'click', function ()
    {
        if ( seeMore )
        {
            img.style.display = 'flex';
            img.style.transform = 'translateY(0px)';
            seeMore.style.display = 'none';
            closes.style.display = 'block';
        }

    } )
    
    closes.addEventListener("click", function () {

      if (closes) {
          img.style.display = "none";
          seeMore.style.display = "block";
          closes.style.display = "none";
      }
    });
}