
// CHANGEMENT DE FICHIER CSS
var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;
var style_domain = "thesitewizard.com" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line
function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// https://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration, style_domain );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
	var cookie_string = document.cookie ;
	if (cookie_string.length != 0) {
		var cookie_array = cookie_string.split( '; ' );
		for (i = 0 ; i < cookie_array.length ; i++) {
			cookie_value = cookie_array[i].match ( cookie_name + '=(.*)' );
			if (cookie_value != null) {
				return decodeURIComponent ( cookie_value[1] ) ;
			}
		}
	}
	return '' ;
}

// ////////////////////////////////////////////////////////////////////

// ouverture du burger

    document.querySelector('.close-button').style.display = "none";
    document.querySelector('ul').style.display = 'none';


document.querySelector('.open-button').addEventListener('click', function(){
    document.querySelector('.open-button').style.display = "none";
    document.querySelector('.close-button').style.display = "block";
    document.querySelector('ul').style.display = 'block';
});

// fermeture du burger

document.querySelector('.close-button').addEventListener('click', function(){
    document.querySelector('.open-button').style.display = "block";
    document.querySelector('.close-button').style.display = "none";
    document.querySelector('ul').style.display = 'none';
});

// ////////////////////////////////////////////////////////////////////
// animation du texte
function animated_text1() {
  let delay = 200,
    delay_start = 0,
    contents,
    letters;
  document.querySelectorAll(".animated-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
        elem.textContent += letter;
      }, delay_start + delay * (index_1 / 5));
    });
    delay_start += delay * letters.length / 5;
  });
}
animated_text1()


// ////////////////////////////////////////////////////////////////////
// Envoi du formulaire

// function envoi() {
//  document.contactform.action="";
//  // recherche de @ dans l'adresse
//  let address=window.document.contactform.user_mail.value;
//  let pos=address.indexOf("@");
//  if (address=="") {
//   alert("Vous devez donner une adresse e-mail.");
//  }
//  else {
//   if (pos==-1 || pos==0 || pos==address.length-1) {
//    alert("Une adresse e-mail a le format nom@domaine");
//   }
//   else // tout va bien, on envoie le formulaire
//    document.contactform.action='mailto:alixpelletierpro@gmail.com?subject="Contact Codevores"';
//  }
// }

// DESNIERES ACTUS ////////////////////
function afficheArticle(article) {

  let element = document.createElement("li")

  let lien = document.createElement("a")
  lien.href = article.url
  lien.textContent = article.title

  element.appendChild(lien)
  return element
}

let liste = document.createElement("ol")

for(let i = 0; i < 10; i++) {
  article = afficheArticle(data.items[i])
  liste.appendChild(article)
}

document.querySelector("body").appendChild(liste)
