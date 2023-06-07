// Intersection Observer callback function
const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
  
      // Apply animations to text and images when intersecting
      if (isIntersecting) {
        if (target.id === "herocontent") {
          target.querySelectorAll("p, h1, a").forEach((element, index) => {
            element.style.animation = `fade-in 1s ease ${index * 0.2}s`;
            element.style.visibility = "visible"; // Show element
          });
        } else if (target.id === "heroimg") {
          target.style.animation = "slide-right 1s ease";
          target.style.visibility = "visible"; // Show element
        } else if (target.id.startsWith("statsbox")) {
          target.querySelector("h1").style.animation = "count-up 1s ease";
          target.querySelector("h1").style.visibility = "visible"; // Show element
        } else if (target.id === "contactme2") {
          target.style.animation = "scale-in 1s ease";
          target.style.visibility = "visible"; // Show element
        } else {
          target.querySelectorAll("h2, p, a").forEach((element, index) => {
            element.style.animation = `fade-in 1s ease ${index * 0.2}s`;
            element.style.visibility = "visible"; // Show element
          });
        }
  
        // Unobserve the target once it has been intersected
        observer.unobserve(target);
      }
    });
  };
  
  // Create Intersection Observer instance
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1, 
  });


  
  // Observe specific elements
  const elementsToObserve = document.querySelectorAll("#herocontent, #heroimg, .box, #statsbox0, #statsbox1, #statsbox2, #statsbox3, #contactme2");
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });



  // Select the target table element
  const table = document.querySelector('table');

  // Add a CSS class to initiate the animation
  table.classList.add('animate-table');
