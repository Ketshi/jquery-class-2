$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    success: function (response) {
        // console.log(response);

        var firstUser = response[0];
        console.log(firstUser);

        for (var i = 0; i < response.length; i++) {
            var user = response[i];
            updateUserInformation(i, user);
        }

    }

});

function updateUserInformation(index, user) {
    var $user = $('.user-profile').eq(index);
    $user.find('.user-name').text(user.name);
    $user.find('.user-phone').text(user.phone);
    $user.find('.user-company').text(user.company.name);
    $user.find('.user-website').find('a').text(user.website);
    $user.find('.user-website').find('a').attr('href', "http://" + user.website);

}




//  var $userOne = $('.user-profile').eq(0);
//        $userOne.find('.user-name').text(firstUser.name);
//        $userOne.find('.user-phone').text(firstUser.phone);
//        $userOne.find('.user-company').text(firstUser.company.name);
//        $userOne.find('.user-website').find ('a').text(firstUser.website);
//        $userOne.find('.user-website').find ('a').attr('href',"http://" + firstUser.website);
