

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Hello, world!');
    const galleryItems = document.querySelectorAll('.nav-item');
    console.log(galleryItems);
    galleryItems.forEach((link) => {
        console.log('Hello, world!');
        console.log(link);

            /*link.addEventListener('click', (e) => {
        // Retirer la classe 'active' de tous les éléments
        navLink.forEach((elem) => {
            elem.classList.remove('active');
        });

        // Ajouter la classe 'active' à l'élément cliqué
        e.target.classList.add('active');
    });*/
    });
});