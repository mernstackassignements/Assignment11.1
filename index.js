/// Javascript code function will be called on body load 


function load(){
    var p1 = document.getElementById('p1');
    /// set p1 text
    p1.innerHTML = 'The Document Object Model (DOM) is a '+
                   'programming interface for HTML and XML documents. It represents the page so that '+
                   'programs can change the document structure, style, and content. The DOM represents '+
                   'the document as nodes and objects. That way, programming languages can connect to '+
                   'the page.';
    // set p1 color               
    p1.style.color = 'purple';  
    
    var p2 = document.getElementById('p2');

    /// set p2 text
    p2.innerHTML = 'A Web page is a document. This document '+
                   'can be either displayed in the browser window or as the HTML source. But it is the same '+
                   'document in both cases. The Document Object Model (DOM) represents that same '+
                   'document so it can be manipulated. The DOM is an object-oriented representation of '+
                   'the web page, which can be modified with a scripting language such as JavaScript.';
    // set p2 color               
    p2.style.color = 'red';
    
    // set body color
    document.body.style.backgroundColor =  'lightgrey';
    
}