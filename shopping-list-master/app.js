$(document).ready(function(){
        //alert("Ready!");
        console.log("Hello");
        //$("li, ul").click(function(event) {
        //  event.stopPropagation();
        //  console.log("event.currentTarget's text is: " + $(this).text());
//Helper Function
        $("span").click(function(event) {
          console.log("You just clicked on " + $(this).text());
        })

        $("ul").on('click', 'button.shopping-item-toggle', function(event) {
          if ($(this).parents("span, li").hasClass("shopping-item__checked")){
          	//$(this).attr("shopping-item__checked").remove();
            $(this).parents("li").removeClass("shopping-item__checked");
            $(this).find("span.shopping-item.shopping-item__checked").removeClass();
          	//$(this).closest("span").removeClass();
          }
          else {
            $(this).parents("li").addClass("shopping-item__checked");
          }
      })

        $("#js-shopping-list-form").submit(function(event) {
          	//alert("Handler for submit called");
          	console.log("text entered!");
          	var a = $("input:first").val();
          	event.preventDefault();
          	event.stopPropagation();
          
          $("ul.shopping-list").append(
            "<li> <span class='shopping-item'>" + a + "</span>" +
              "<div class='shopping-item-controls'>" +
                "<button class='shopping-item-toggle'>" +
                  "<span class='button-label'>check</span>" +
                "</button>" +
                "<button class='shopping-item-delete'>" +
                  "<span class='button-label'>delete</span>" +
                "</button>" +
              "</div>" +
            "</li>");
        })

//Delete an LI
//        $("button.shopping-item-delete").click(function(event) {
//          $(this).parents("li").remove();
//          event.stopPropagation();
//        })
//Hide an LI
        $("ul").on('click', 'button.shopping-item-delete', function(event) {
          console.log("Now Hiding");
          $(this).parents("li").hide();
        })



    //    $("button.shopping-item-delete").click(function(event) {
    //      event.stopPropagation();
    //      var a = $(this).parents().text();
    //      console.log("my parents are" + a);
    //      $(this).remove();
    //    })
});


function addtotable(){
	

}