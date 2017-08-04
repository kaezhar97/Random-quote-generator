
$(document).ready(function()
 {
    
    
     
    $('#getQuote').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      success: function(data) {
        
        var post = data.shift(); 
        
        $('#quote-author').html(post.title);
        $('#quote-message').html(post.content);
         /*
        var theMessage="&#8216;"
        theMessage=post.content.replace(/<\/?[^>]+(>|$)/g,""); 
        theMessage=decodeURI(theMessage);
       
        theMessage=theMessage.replace(/(&#8216;)+/g,"\'");
        theMessage=theMessage.replace(/(&#8217;)+/g,"\'");
        theMessage=theMessage.replace(/(&#8220;)+/g,"\'");
        theMessage=theMessage.replace(/(&#8221;)+/g,"\'");
        theMessage=theMessage.replace(/(&#8211;)+/g,"-");
        theMessage=theMessage.replace(/(&#038;)+/g,"&");
       theMessage=theMessage.replace(/(&#8230;)+/g,"…"); 
       
        console.log(theMessage);
        
        var theAuthor=post.title;
        theAuthor=theAuthor.replace(/(&#038;)+/g,"&");

        console.log(theAuthor);
        */
     /*   
    // Remove existing iframe
    $('#tweetBtn iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', 'quotes')
        .attr('data-size', 'large')
        .attr('target','_blank')
        .attr('data-text', theMessage + " --" + theAuthor );
    $('#tweetBtn').append(tweetBtn);
    twttr.widgets.load();
        
       */
        
  /*
    $(".twitter-share-button").on("click", function(f){   
       $('a[data-text]').each(function(){
      $(this).attr('data-text', theMessage+ " --"+theAuthor);
          $.getScript('http://platform.twitter.com/widgets.js'); 
       }); 
   });
   */
           function unescapeHTML(html) {
           return $("<div />").html(html).text();
           }
            
            var theMessage="";
            theMessage=post.content;
            theMessage=unescapeHTML(theMessage);
          //  theMessage=post.content.replace(/<\/?[^>]+(>|$)/g,""); 
            
           /*
            theMessage=theMessage.replace(/(&#8216;)+/g,"\'");
            theMessage=theMessage.replace(/(&#8217;)+/g,"\'");
            theMessage=theMessage.replace(/(&#8220;)+/g,"\'");
            theMessage=theMessage.replace(/(&#8221;)+/g,"\'");
            theMessage=theMessage.replace(/(&#8211;)+/g,"-");
            theMessage=theMessage.replace(/(&#8243;)+/g,"″");
            theMessage=theMessage.replace(/(&#038;)+/g,"&");
            theMessage=theMessage.replace(/(&#8230;)+/g,"…"); 
            theMessage=theMessage.replace(/(;)+/g,",");
            */
        console.log(theMessage);
        var theAuthor=post.title;
        theAuthor=unescapeHTML(theAuthor);
        
        console.log(theAuthor);
        
        var theTweet="";
        theTweet=theMessage+" --"+theAuthor;
        theTweet=encodeURIComponent(theTweet);
        
        document.getElementById("tweetThis").setAttribute("href","http://twitter.com/share?url=quotes;text="+theTweet+";size=l&amp;count=none");
        
        
        
      },
      cache: false
    });
 
        
      
  });
  
});