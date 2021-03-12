jQuery(document).ready(function(e){

/*
*
*/
function rafAsync() {
    return new Promise(resolve => {
        requestAnimationFrame(resolve); //faster than set time out
    });
}

/*
*
*/
function checkElement(selector) {
    // Check if the element doesn't exists.
    if (document.querySelector(selector) === null) {
    // if it doesn't exist then check again.
        return rafAsync().then(() => checkElement(selector));
    } else {
    // Otherwise we have found the element so we can continue.
        return Promise.resolve(true);
    }
}

/*
*
*/
checkElement('.element').then((element) => {
    //Do whatever you want now the element is there 
});

});
