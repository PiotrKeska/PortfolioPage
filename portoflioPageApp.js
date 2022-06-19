
// changing first view page form slider to menu by cliking in burger (top right corner)
// show and hide menu by clicking in menu's arrow and hide about section

$('.fa-bars, .arrowInMenu').on('click', function(){
    $('.menu').toggleClass('activate');
    $('.homeView').toggleClass('hide');
    $('img').toggleClass('hide');
    $('.linkd, .gitH').removeClass('active');
})

$('.menuAbout, .aboutMeXMark').on('click', function(){
    $('.menuAboutMe').toggleClass('active');
})
$('.menuProjects, .projectsXMark').on('click', function(){
    $('.projects').toggleClass('active');
})

$('.menuSkills, .skillsXMark').on('click', function(){
    $('.skills').toggleClass('active');
})

$('.menuContact').on('click', function(){
    $('.linkd, .gitH').toggleClass('active');
})
