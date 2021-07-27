document.addEventListener('DOMContentLoaded', () => {


    // const smothScrollElems = document.querySelectorAll('.scroll');

    // smothScrollElems.forEach(link => {
    //     link.addEventListener('click' , (event) => {

    //         event.preventDefault()
    //         const id = link.getAttribute('href').substring(1)
            

    //     document.getElementById(id).scrollIntoView({
    //         behavior: 'smooth'
    //     });
    //     })
    // })
    
    const SPEED = 0.5;
    const scrolled = event => {
        event.preventDefault();

        const target = event.target;

        if(target.matches('[href^="#"]')){
            const pageY = window.pageYOffset;

            // const hash = target.href.replace(/[^#]*(.*)/, '$1');
            const hash = target.getAttribute('href')

            if(hash === '#') return
            
            const elem = document.querySelector(hash);
            
            const coordinateElem = elem.getBoundingClientRect().top;
            
            let start = 0;

            const step  = time => {
                if(!start) start = time;

                const progress = time - start;

                const r = (coordinateElem < 0 ? Math.max(pageY - progress / SPEED , pageY + coordinateElem) :
                                                Math.min(pageY + progress / SPEED , pageY + coordinateElem ))
                
                window.scrollTo(0, r);

                if(r < pageY + coordinateElem) requestAnimationFrame(step);
            }
            requestAnimationFrame(step)

        }

    }

    document.body.addEventListener('click' ,scrolled );

    

});