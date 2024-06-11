$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});


$(document).ready(function() {
    $('.nav-link').on('click', function() {
        // Retirer la classe 'active' de tous les éléments
        $('.nav-link').removeClass('active');

        // Ajouter la classe 'active' à l'élément cliqué
        $(this).addClass('active');
    });
});

