
const disabledScroll = () => {
    // document.body.style.overflow = 'hidden';  for beginers, doesn't work in Safari
    document.body.dataset.scrollY = window.scrollY;

    const scrollWidth = window.innerWidth - document.body.offsetWidth;
    
   
    // console.log('window.innerWidth: ', window.innerWidth);
    // console.log('document.body.offsetWidth: ', document.body.offsetWidth);

    document.body.style.cssText = `
        position:fixed;
        top: -${window.scrollY}px;
        left:0;
        width:100%;
        overflow:hidden;
        height:100vh;
        padding-right: ${scrollWidth}px;
     `;
};

const enableScroll = () => {
    // document.body.style.overflow = ''; for beginers
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dataset.scrollY
    });
};

export default{disabledScroll, enableScroll};