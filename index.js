// document.addEventListener("DOMContentLoaded", function() {
//     const hiddenElements = document.querySelectorAll('.hidden-content');

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target); 
//                 // Stop observing once it becomes visible
//             }
//         });
//     }, { threshold: 0.1 }); // 10% of the element needs to be visible

//     hiddenElements.forEach(element => {
//         observer.observe(element);
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.hidden-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); 
                // remove class when it goes out of view
            }
        });
    }, { threshold: 0.1 }); // 10% of the element needs to be visible

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});
