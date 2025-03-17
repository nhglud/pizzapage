
async function loadMenu(menu, element) {
    try {
        const response = await fetch(menu);
        if(!response.ok) {
            throw new Error("Failed to load menu");
        }

        const obj = await response.json();
        for (let index = 0; index < obj.menu.length; index++) {
            element.innerHTML += "<div class=\"card\">" + "<img src=" + obj.menu[index].image + ">" + "</div>";
            element.innerHTML += "<div class=\"card\">" +  obj.menu[index].item + "</div>";
        }
    }   
    catch(error) {
        console.error(error.message);
    }              
}

async function loadText(text, element) {
    try {
        const response = await fetch(text);
        if(!response.ok) {
            throw new Error("Failed to load text");
        }
        
        const json = await response.json();
    
        for (let index = 0; index < json.page.length; index++) {
            element.innerHTML += json.page[index] + "<br>";
        }
    }
    catch(error) {
        console.error(error.message);
    }
}


