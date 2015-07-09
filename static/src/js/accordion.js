 $(document).ready(function() {

    /* 
    Iterate through all accordions on the page and attach event handlers 
    for collapsing/expanding the content and changing the arrow icon 
    */
    $(".collapse-title").each(function() {
        $(this).on("click", function(){
            $(this).closest(".panel").find(".panel-collapse").collapse("toggle");
            $(this).closest(".panel").find(".collapse-title").toggleClass("collapsed");
        });     
    });
    
}); 