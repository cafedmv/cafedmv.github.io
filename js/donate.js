$('#donate .btn').on('click', function(event) {
  console.log($(this).find('input').val());
  var donation = $(this).find('input').val();
  if(donation==10){
      $("#paypal").attr("href", "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=22XGHRXPCW4GW&source=url");
      $("#impact").text("Give a child a sketchbook. Every sketchbook helps enable more students to participate at no cost!");
      $("#impact-title").text("Become a Donor");
  }
    else if (donation==50){
    $("#paypal").attr("href", "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FBWXEKNQ7VPFW&source=url");
        $("#impact").text("Buy art supplies for five students. This donation will help fund our next art class!");
        $("#impact-title").text("Become an All-Star");
    }
    else if (donation==100){
    $("#paypal").attr("href", "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C8FP9EFS4XQDG&source=url");
        $("#impact").text("Sponsor our next community art class. This will cover all expenses necessary for an entire event for 10 kids!");
        $("#impact-title").text("Become a Community Philanthropist!");
    }
    else if (donation==0){
    $("#paypal").attr("href", "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YL5APXPWNFFUQ&source=url");
        $("#impact").text("Choose how much you want to donate!");
        $("#impact-title").text("You Name the Gift");
    }
});