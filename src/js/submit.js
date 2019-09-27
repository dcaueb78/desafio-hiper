function submitForm(e) {
  let email = $("#email").val();
  let password = $("#password").val();
  let telephone = $("#telephone").val();
  let city = $("#city").val();
  let country = $("#country").val();
  if(!email || !password || !telephone || !city || !country ){
    console.log(email, password, telephone, city, country);
    $.toast({
      text: "Digite todos os campos",
      showHideTransition: 'fade',  // It can be plain, fade or slide
      bgColor: 'red',              // Background color for toast
      textColor: '#eee',            // text color
      allowToastClose: true,       // Show the close button or not
      hideAfter: 5000,              // `false` to make it sticky or time in miliseconds to hide after
      stack: 5,                     // `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
      textAlign: 'center',            // Alignment of text i.e. left, right, center
      position: 'bottom-right'       // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values to position the toast on page
    })
    return null;
  }
  axios.post('https://desafiocaue.free.beeceptor.com/save', {
    'email': email,
    'password': password,
    'telephone': telephone,
    'city': city,
    'country': country

  })
    .then(function (response) {
      if (response.data.status == "sucess") {
        $.toast({
          text: "Cadastrado com sucesso",
          showHideTransition: 'fade',  // It can be plain, fade or slide
          bgColor: 'green',              // Background color for toast
          textColor: '#eee',            // text color
          allowToastClose: true,       // Show the close button or not
          hideAfter: 5000,              // `false` to make it sticky or time in miliseconds to hide after
          stack: 5,                     // `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
          textAlign: 'center',            // Alignment of text i.e. left, right, center
          position: 'bottom-right'       // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values to position the toast on page
        })
      } else {
        $.toast({
          text: "Erro ao cadastras",
          showHideTransition: 'fade',  // It can be plain, fade or slide
          bgColor: 'red',              // Background color for toast
          textColor: '#eee',            // text color
          allowToastClose: true,       // Show the close button or not
          hideAfter: 5000,              // `false` to make it sticky or time in miliseconds to hide after
          stack: 5,                     // `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
          textAlign: 'center',            // Alignment of text i.e. left, right, center
          position: 'bottom-right'       // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values to position the toast on page
        })
      }

    })
    .catch(function (error) {
      $.toast({
        text: "Erro ao cadastras",
        showHideTransition: 'fade',  // It can be plain, fade or slide
        bgColor: 'red',              // Background color for toast
        textColor: '#eee',            // text color
        allowToastClose: true,       // Show the close button or not
        hideAfter: 5000,              // `false` to make it sticky or time in miliseconds to hide after
        stack: 5,                     // `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
        textAlign: 'center',            // Alignment of text i.e. left, right, center
        position: 'bottom-right'       // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values to position the toast on page
      })
    })
    
}