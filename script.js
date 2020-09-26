(
  ()=>{



    // *js 02 : putting 'data-index' to .step , .graphic-item

    const stepElems=  document.querySelectorAll('.step');

    const graphicElems = document.querySelectorAll('.graphic-item');

    let ioIndex;

    const io = new IntersectionObserver((entries,observer)=>{
      ioIndex = entries[0].target.dataset.index *1;
      
    });


    for (let i = 0; i < stepElems.length; i++) {
      io.observe(stepElems[i]);

      stepElems[i].dataset.index = i;

      graphicElems[i].dataset.index = i;
      
    }


    // *js 06 better structure .visible

    let currentItem = graphicElems[0];

    // js 03-03

    function active(action){
      currentItem.classList.add('visible');
      if (action) {
        actions[action](true);
        
      }
    }
    function inactive(action){
      currentItem.classList.add('visible');
      if (action) {
        actions[action](false);
        
      }
    }

    // *js 06 visible .scene-img

    activate();

    // *js 04 scroll and image .visible

    window. addEventListener('scroll',()=>{
      let step;
      let boundingRect;


// *js 02-31
for (let i = 0; i < stepElems.length; i++) {

  step= stepElems[i];

  if(!step) continue;

  boundingRect = step.getBoundingClientRect();

  if(boundingRect.top > window.innerHeight *0.1 &&
    boundingRect.top < window.innerHeight *0.8){

      inactive();

      currentItem = graphicElems[step.dataset.index];

      active(currentItem.dataset.action);
    
  }

  
}
//* js 0-21
window.addEventListener('load',()=>{
  setTimeout(() => {
    scrollTo(0,0);
  }, 100);

});


    });
    active();

  })();