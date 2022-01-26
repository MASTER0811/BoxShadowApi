function shadow(){
    let className = document.querySelector(theclass);
    className.style.transition = transition
    className.style.boxShadow = boxshadow
}


function smallShadow(classname){
    let className = document.querySelector(classname)
    className.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
}

function regularShadow(classname){
    let className = document.querySelector(classname)
    className.style.boxShadow = "rgba(100, 100, 111, 0.5) 0px 7px 29px 0px"
}

function largeShadow(classname){
    let className = document.querySelector(classname)
    className.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
}
