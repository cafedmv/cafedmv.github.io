$('#donate .btn').on('click', function(event) {
  console.log($(this).find('input').val());
  var donation = $(this).find('input').val();
  if(donation==15){
      $("#paypal").attr("href", "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=22XGHRXPCW4GW&source=url");
      $("#impact").text("Give a child her first art lesson through a community art workshop. Art supplies don't cost much, and they go a long way with the right direction. Help us empower our youth!");
  }
    else if (donation==30){
    $("#paypal").attr("href", "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FBWXEKNQ7VPFW&source=url");
        $("#impact").text("Help supply materials for our next major community project. All funding will go into our community's next public piano, mural, sculpture, you name it!");
    }
    else if (donation==50){
    $("#paypal").attr("href", "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C8FP9EFS4XQDG&source=url");
        $("#impact").text("Get us one step closer to a living space to plan and host events. Having an office will allow us to focus on bringing art to the community around the clock. We also envision it as another shared space for our community to enjoy!");
    }
    else if (donation==0){
    $("#paypal").attr("href", "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YL5APXPWNFFUQ&source=url");
        $("#impact").text("The possibilities are endless, contact us so we can help make your ideas a reality!");
    }
});