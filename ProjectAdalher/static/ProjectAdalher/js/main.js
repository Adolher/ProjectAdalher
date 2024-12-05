console.log("You are in the Skeleton");


function chachgeTheme(x) {
    var r = document.documentElement;

    var currentBaseColour = Number(getComputedStyle(r).getPropertyValue('--base'));
    var currentContentColour_sub = Number(getComputedStyle(r).getPropertyValue('--sub_base_content'));
    var currentContrast_sub = Number(getComputedStyle(r).getPropertyValue('--sub_base_contrast'));
    var currentTextColour_add = Number(getComputedStyle(r).getPropertyValue('--add_text_colour'));

    if (x == "dark") {
        var faktor_base = (1 / 1.3);
        var faktor_content = (1 / 1.1);
        var faktor_contrats = (1 / 1.1);
    } else if (x == "light"){
        var faktor_base = 1.3;
        var faktor_content = 1.1;
        var faktor_contrats = 1.1;
    }

    var newBaseColour = currentBaseColour * faktor_base;
    var newContentColour_sub = currentContentColour_sub * faktor_content;
    var newContrast_sub = currentContrast_sub * faktor_contrats;

    if (newBaseColour < 254 && (newBaseColour - currentContrast_sub) > 0) {
        r.style.setProperty('--base', newBaseColour);
        r.style.setProperty('--sub_base_content', newContentColour_sub);
        r.style.setProperty('--sub_base_contrast', newContrast_sub);
    }

    if (newBaseColour > 127) {
        r.style.setProperty('--add_text_colour', -127);
    } else if (newBaseColour < 254) {
        r.style.setProperty('--add_text_colour', 127);
    }

}
