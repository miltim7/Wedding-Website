jQuery(document).ready( function($) {  

    function emailValidation(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    
    $(".open-modal").click(function(e) {
        $.ajax({
    	    type: "POST",
    	    url: '../cgi-bin/scripts.php',
    	    data: { 
    		    "action": "check_login"
    	    },
    	    success:function(r) {
                //console.log(r);
                if (r) {
                    $("#orderModal").addClass("show");
                    $(".modal-backdrop").addClass("show");                    
                }
                else {
                    location.href = "https://agafonovwedd.ru/login.php";
                }
    	    }
    	});         
    }); 
    
    $('.close').click(function(e) {
        $("#orderModal").removeClass("show");
        $(".modal-backdrop").removeClass("show");        
    }); 
    
    $(window).click(function(e) {
        if (e.target.id == "orderModal") {
            $("#orderModal").removeClass("show");
            $(".modal-backdrop").removeClass("show");   
        }   
    });     
    
    $('#send_message').click(function(e){
        //Stop form submission & check the validation
        e.preventDefault();

        $('.error').css("display", "none");
        
        $('#mail_fail').css("display", "none");
        
        $('#mail_success').css("display", "none");
  
        // Variable declaration
        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
		var phone = $('#phone').val();
        var message = $('#message').val();
        
        const form = $("#contact_form")[0];
        const formData = new FormData(form);
        formData.append('action', "contact");        
		
		$('#name,#email,#phone,#message').click(function(){
			$(this).removeClass("error_input");
		});

     	// Form field validation
        if (name.length == 0) {
            var error = true;
            $('#name').addClass("error_input");
            $('#name_error').css("display", "block");
        }
        else {
            $('#name').removeClass("error_input");
        }
        if (email.length == 0 || email.indexOf('@') == '-1') {
            var error = true;
            $('#email').addClass("error_input");
            $('#email_error').css("display", "block");
        }
        else {
            $('#email').removeClass("error_input");
        }
		if (phone.length == 0){
            var error = true;
            $('#phone').addClass("error_input");
            $('#phone_error').css("display", "block");
        }
        else {
            $('#phone').removeClass("error_input");
        }
        if (message.length == 0){
            var error = true;
            $('#message').addClass("error_input");
            $('#message_error').css("display", "block");
        }
        else {
            $('#message').removeClass("error_input");
        }
        
        // If there is no validation error, next to process the mail function
        if (error == false){
           // Disable submit button just after the form processed 1st time successfully.
            $('#send_message').attr({'disabled' : 'true', 'value' : 'Отправка...' });
            
			/* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
            
            $.ajax({
        	    type:"POST",
        	    url: '../cgi-bin/scripts.php',
                processData: false,
                contentType: false, 
        	    data: formData,
        	    success:function(r) {
                    //console.log(r);
                    if (r == 'sent') {
                        $('#submit').remove();
                        $('#mail_success').fadeIn(500);
                    }
                    else {
                        $('#mail_fail').fadeIn(500);
                        $('#send_message').removeAttr('disabled').attr('value', 'Отправить');
                    }
        	    }
        	});                     
        }
    });   
    
    $("#login_submit").on("click", function(e) {
        e.preventDefault();
        
        $('.error').css("display", "none");
       
        $('#mail_fail').css("display", "none");  
        
        // Variable declaration
        var error = false;
        
        var email = $('#email').val();
		var passwd = $('#passwd').val();

        const form = $("#login_form")[0];
        const formData = new FormData(form);
        formData.append('action', "login");        
		
		$('#email,#passwd').click(function(){
			$(this).removeClass("error_input");
		});
        
     	// Form field validation
        if (passwd.length == 0) {
            var error = true;
            $('#passwd').addClass("error_input");
            $('#password_error').css("display", "block");
        }
        else {
            $('#passwd').removeClass("error_input");
        }
        if (email.length == 0 || !emailValidation(email)) {
            var error = true;
            $('#email').addClass("error_input");
            $('#email_error').css("display", "block");
        }
        else {
            $('#email').removeClass("error_input");
        }

        if (error == false) {
            $('#login_submit').attr({'disabled' : 'true', 'value' : 'Отправка...' });

            $.ajax({
        	    type:"POST",
        	    url: '../cgi-bin/scripts.php',
                processData: false,
                contentType: false, 
        	    data: formData,
        	    success:function(r) {
                    //console.log(r);
                    if (r == 'success') {
                        location.href = "https://agafonovwedd.ru/dashboard.php";
                    }
                    else {
                        $('#mail_fail').fadeIn(500);
                        $('#login_submit').removeAttr('disabled').attr('value', 'Подтвердить');
                    }
        	    }
        	});                     
        }
    });     

    
    $("#signup_submit").on("click", function(e) { 
        e.preventDefault();
       
        $('.error').css("display", "none");
       
        $('#mail_fail').css("display", "none");  
        
        // Variable declaration
        var error = false;
        
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
		var passwd = $('#passwd').val();
		var argee = $('#argee_term').is(":checked");
		
        const form = $("#signup_form")[0];
        const formData = new FormData(form);
        formData.append('action', "signup");        
		
		$('#email, #name, #phone, #passwd').click(function(){
			$(this).removeClass("error_input");
		});
        
     	// Form field validation
        if (name.length == 0) {
            var error = true;
            $('#name').addClass("error_input");
            $('#name_error').css("display", "block");
        }
        else {
            $('#name').removeClass("error_input");
        }        
        
        if (email.length == 0 || !emailValidation(email)) {
            var error = true;
            $('#email').addClass("error_input");
            $('#email_error').css("display", "block");
        } 
        else {
            $('#email').removeClass("error_input");
        } 
        
        if (phone.length == 0) {
            var error = true;
            $('#phone').addClass("error_input");
            $('#phone_error').css("display", "block");
        }
        else {
            $('#phone').removeClass("error_input");
        }  
        
        if (passwd.length == 0) {
            var error = true;
            $('#passwd').addClass("error_input");
            $('#password_error').css("display", "block");
        }
        else {
            $('#passwd').removeClass("error_input");
        }

        if (!argee) {
            var error = true;
            $('#argee_term').addClass("error_input");
            $('#agree_error').css("display", "block");
        }
        else {
            $('#argee_term').removeClass("error_input");
        }        

        if (error == false) {
            $('#signup_submit').attr({'disabled' : 'true', 'value' : 'Отправка...' });

            $.ajax({
        	    type:"POST",
        	    url: '../cgi-bin/scripts.php',
                processData: false,
                contentType: false, 
        	    data: formData,
        	    success:function(r) {
                    //console.log(r);
                    var response = JSON.parse(r);
                    if (response.result) {
                        location.href = "https://agafonovwedd.ru/dashboard.php";
                    }
                    else {
                        $('#mail_fail').fadeIn(500);
                        $('#signup_submit').removeAttr('disabled').attr('value', 'Создать');
                    }
        	    }
        	});                     
        }
    }); 

    $('#send-order-btn').click(function(e){
        e.preventDefault();

        $('.error').css("display", "none");  
        
        $('#order_fail').css("display", "none");
        
        $('#order_success').css("display", "none");
  
        var error = false;
        var name = $('#order_name').val();
        var email = $('#order_email').val();
		var phone = $('#order_phone').val();
        var date = $('#order_date').val();
        var event = $('#event-type').val();
        var guests = $('#guests').val();
        var duration = $('#duration').val();
        var notes = $('#order_notes').val();
        var sid = $('#sid').val();
        
        var service = "";
        
        if (event === "Свадьба") {
            service = $("#wedding-service").val();
        }
        else if (event === "Корпоратив") {
            service = $("#corporate-service").val();
        }
        else if (event === "Выпускной") {
            service = $("#graduate-service").val();
        }
        else if (event === "Юбилей") {
            service = $("#birthday-service").val();
        }
        else if (event === "Другое") {
            service = $("#other-service").val();
        }          

        const form = $("#place-order")[0];
        const formData = new FormData(form);
        formData.append('action', "order");    
        formData.append('service', service);     
		
		$('#order_name, #order_email, #order_phone, #order_date, #event-type, #guests, #duration, #order_notes').click(function(){
			$(this).removeClass("error_input");
		});
		
        if (name.length == 0) {
            var error = true;
            $('#order_name').addClass("error_input");
            $('#name_error').css("display", "block");
        }
        else {
            $('#order_name').removeClass("error_input");
        }
        
        if (email.length == 0 || !emailValidation(email)) {
            var error = true;
            $('#order_email').addClass("error_input");
            $('#email_error').css("display", "block");
        }
        else {
            $('#order_email').removeClass("error_input");
        }
        
		if (phone.length == 0){
            var error = true;
            $('#order_phone').addClass("error_input");
            $('#phone_error').css("display", "block");
        }
        else {
            $('#order_phone').removeClass("error_input");
        }
        
        if (date.length == 0){
            var error = true;
            $('#order_date').addClass("error_input");
            $('#date_error').css("display", "block");
        }
        else {
            $('#order_date').removeClass("error_input");
        }
        
        if (notes.length == 0){
            var error = true;
            $('#order_notes').addClass("error_input");
            $('#notes_error').css("display", "block");
        }
        else {
            $('#order_notes').removeClass("error_input");
        }

        if (error == false){
            $('#send-order-btn').attr({'disabled' : 'true', 'value' : 'Отправка...' });

            $.ajax({
        	    type:"POST",
        	    url: '../cgi-bin/scripts.php',
                processData: false,
                contentType: false, 
        	    data: formData,
        	    success:function(r) {
                    console.log(r);
                    if (r) { 
                        $('#send-order-btn').remove();
                        $('#order_success').fadeIn(500);
                    }
                    else {
                        $('#order_fail').fadeIn(500);
                        $('#send-order-btn').removeAttr('disabled').attr('value', 'Отправить');
                    }
        	    }
        	});                     
        }
    });  

    $("#forgot_submit").on("click", function(e) {
        e.preventDefault();
        
        $('.error').css("display", "none");
       
        $('#mail_fail').css("display", "none");
        
        $('#mail_success').css("display", "none");
        
        var error = false;
        
        var email = $('#email').val();

        const form = $("#forgot_form")[0];
        const formData = new FormData(form);
        formData.append('action', "forgot-password");        
		
		$('#email').click(function(){
			$(this).removeClass("error_input");
		});
        
        if (email.length == 0 || !emailValidation(email)) {
            var error = true;
            $('#email').addClass("error_input");
            $('#email_error').css("display", "block");
        }
        else {
            $('#email').removeClass("error_input");
        }

        if (error == false) {
            $('#forgot_submit').attr({'disabled' : 'true', 'value' : 'Отправка...' });

            $.ajax({
        	    type:"POST",
        	    url: '../cgi-bin/scripts.php',
                processData: false,
                contentType: false, 
        	    data: formData,
        	    success:function(r) {
                    //console.log(r);
                    if (r == '1') {
                        $('#mail_success').fadeIn(500);
                    }
                    else {
                        $('#mail_fail').fadeIn(500);
                        $('#forgot_submit').removeAttr('disabled').attr('value', 'Подтвердить');
                    }
        	    }
        	});                     
        }
    });
    
    $("#profile_submit").on("click", function(e) {
        e.preventDefault();
       
        $('.error').css("display", "none");  
        
        $('#profile_fail').css("display", "none");
        
        $('#profile_success').css("display", "none");
  
        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
		var phone = $('#phone').val();
        var birthday = $('#birthday').val();
        var zipcode = $('#zipcode').val();
        var region = $('#region').val();
        var city = $('#city').val();
        var address = $('#address').val();

        const form = $("#profile_form")[0];
        const formData = new FormData(form);
        formData.append('action', "profile");        
		
		$('#name_error, #email_error, #phone_error').click(function(){
			$(this).removeClass("error_input");
		});
		
        if (name.length == 0) {
            var error = true;
            $('#name').addClass("error_input");
            $('#name_error').css("display", "block");
        }
        else {
            $('#name').removeClass("error_input");
        }
        
        if (email.length == 0 || !emailValidation(email)) {
            var error = true;
            $('#email').addClass("error_input");
            $('#email_error').css("display", "block");
        }
        else {
            $('#email').removeClass("error_input");
        }
        
		if (phone.length == 0){
            var error = true;
            $('#phone').addClass("error_input");
            $('#phone_error').css("display", "block");
        }
        else {
            $('#phone').removeClass("error_input");
        }

        if (error == false){
            $('#profile_submit').attr({'disabled' : 'true', 'value' : 'Отправка...' });

            $.ajax({
        	    type:"POST",
        	    url: '../cgi-bin/scripts.php',
                processData: false,
                contentType: false, 
        	    data: formData,
        	    success:function(r) {
                    //console.log(r);
                    if (!r) { 
                        $('#profile_success').fadeIn(500);
                    }
                    else {
                        $('#profile_fail').html(r).fadeIn(500);
                    }
                    $('#profile_submit').removeAttr('disabled').attr('value', 'Сохранить');
        	    }
        	});                     
        }
    }); 

    $("#new_password_submit").on("click", function(e) {
        e.preventDefault();
       
        $('.error').css("display", "none");  
        
        $('#password_fail').css("display", "none");
        
        $('#password_success').css("display", "none");
  
        var error = false;
        var password = $('#password').val();
        var new_password = $('#new_password').val();
		var new_password2 = $('#new_password2').val();

        const form = $("#password_form")[0];
        const formData = new FormData(form);
        formData.append('action', "new-password");        
		
		$('#password_error, #new_password_error, #new_password2_error').click(function(){
			$(this).removeClass("error_input");
		});
		
        if (password.length == 0) {
            var error = true;
            $('#password').addClass("error_input");
            $('#password_error').css("display", "block");
        }
        else {
            $('#password').removeClass("error_input");
        }
        
        if (new_password.length == 0) {
            var error = true;
            $('#new_password').addClass("error_input");
            $('#new_password_error').css("display", "block");
        }
        else {
            $('#new_password').removeClass("error_input");
        }
        
        if ((new_password2.length == 0) || (new_password !== new_password2)) {
            var error = true;
            $('#new_password2').addClass("error_input");
            $('#new_password2_error').css("display", "block");
        }
        else {
            $('#new_password2').removeClass("error_input");
        }        

        if (error == false){
            $('#new_password_submit').attr({'disabled' : 'true', 'value' : 'Отправка...' });

            $.ajax({
        	    type:"POST",
        	    url: '../cgi-bin/scripts.php',
                processData: false,
                contentType: false, 
        	    data: formData,
        	    success:function(r) {
                    //console.log(r);
                    if (!r) { 
                        $('#password_success').fadeIn(500);
                    }
                    else {
                        $('#password_fail').html(r).fadeIn(500);
                    }
                    $('#new_password_submit').removeAttr('disabled').attr('value', 'Сохранить');
        	    }
        	});                     
        }
    });      
    
    $(".cancel_order").on("click", function(e) {
        e.preventDefault();
        
        var orderid = $(this).attr("data-key");

        if (orderid) {
            $.ajax({
        	    type: "POST",
        	    url: '../cgi-bin/scripts.php',
        	    data: { 
        		    "action": "cancel_order",
        		    "order": orderid
        	    },
        	    success:function(r) {
                    //console.log(r);
                    document.location.reload(true);
        	    }
        	});                   
        }
    }); 
    
    $("#event-type").on("change", function(e) {
        e.preventDefault();
        
        var event = $(this).val();

        if (event === "Свадьба") {
            $("#wedding-service").css("display", "block");
            $("#corporate-service").css("display", "none");
            $("#graduate-service").css("display", "none");
            $("#birthday-service").css("display", "none");
            $("#other-service").css("display", "none");
        }
        else if (event === "Корпоратив") {
            $("#wedding-service").css("display", "none");
            $("#corporate-service").css("display", "block");
            $("#graduate-service").css("display", "none");
            $("#birthday-service").css("display", "none");
            $("#other-service").css("display", "none");
        }
        else if (event === "Выпускной") {
            $("#wedding-service").css("display", "none");
            $("#corporate-service").css("display", "none");
            $("#graduate-service").css("display", "block");
            $("#birthday-service").css("display", "none");
            $("#other-service").css("display", "none");
        }
        else if (event === "Юбилей") {
            $("#wedding-service").css("display", "none");
            $("#corporate-service").css("display", "none");
            $("#graduate-service").css("display", "none");
            $("#birthday-service").css("display", "block");
            $("#other-service").css("display", "none");
        }
        else if (event === "Другое") {
            $("#wedding-service").css("display", "none");
            $("#corporate-service").css("display", "none");
            $("#graduate-service").css("display", "none");
            $("#birthday-service").css("display", "none");
            $("#other-service").css("display", "block");
        }        
    });     

});