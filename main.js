
var dataset = [
    {
        name:"LOTION PUMP",
        products:[
            {
                name:"SP-LP-001",
                image:"SP-040.jpg",
                description:"Color Customization Available\n\nThe dispensing action ensures less wastage of product & it doesn't contaminate the product inside. Highly appreciated for its smooth finishing.",
                dimension:"18mm / 20mm / 24mm / 28mm"
            },
            {
                name:"SP-LP-003",
                image:"SP-043.jpg",
                description:"Color Customization Available\n\nThe dispensing action ensures less wastage of product & it doesn't contaminate the product inside. Highly appreciated for its smooth finishing.",
                dimension:"18mm / 20mm / 24mm / 28mm"
            },
        ]

    },  

    {
        name:"CRIMP PUMP",
        products:[
            {
                name:"SP-LP-001",
                image:"SP-040.jpg",
                description:"Color Customization Available\n\nThe dispensing action ensures less wastage of product & it doesn't contaminate the product inside. Highly appreciated for its smooth finishing.",
                dimension:"18mm / 20mm / 24mm / 28mm"
            },
            {
                name:"SP-LP-003",
                image:"SP-043.jpg",
                description:"Color Customization Available\n\nThe dispensing action ensures less wastage of product & it doesn't contaminate the product inside. Highly appreciated for its smooth finishing.",
                dimension:"18mm / 20mm / 24mm / 28mm"
            },
        ]

    }
];


/* 
{
                name:"",
                image:"",
                description:"",
                dimension:""
            },
*/

function imgItemClick(e){
    var name = this.getAttribute("data-name");
    var description = this.getAttribute("data-description");
    var dimension = this.getAttribute("data-dimension");
    var src = this.getAttribute("src");

    //Open popup form HTML
    //Modal Work
    var modalForm = document.getElementById("id-modal");
    var modalName = document.getElementById("id-modal-name");
    var modalImage = document.getElementById("id-modal-image");
    var modalDescription = document.getElementById("id-modal-description");
    var modalDimension = document.getElementById("id-modal-dimension");

    modalName.innerHTML = name;
    modalImage.src = src;
    modalDescription.innerHTML = description;
    modalDimension.innerHTML = dimension;

    //console.log(modalForm);
    modalForm.style.display = "block";

}

function populateImage(root, data) {
   
    for (i=0; i<data.products.length; i++) {


        var imgContainer = document.createElement("img");
        var attrSrc = document.createAttribute("src");
        var attrName = document.createAttribute("data-name");
        var attrDescription = document.createAttribute("data-description");
        var attrDimension =  document.createAttribute("data-dimension");

        attrSrc.value = "img/" + data.products[i].image;
        attrName.value = data.products[i].name;
        attrDescription.value = data.products[i].description;
        attrDimension.value = data.products[i].dimension;

        imgContainer.setAttributeNode(attrSrc);
        imgContainer.setAttributeNode(attrName);
        imgContainer.setAttributeNode(attrDescription);
        imgContainer.setAttributeNode(attrDimension);

        imgContainer.addEventListener('click', imgItemClick);

        var itemContainer = document.createElement("div");
        var itemContainerClass = document.createAttribute("class");
        itemContainerClass.value = "product-gallery-item";
        itemContainer.setAttributeNode(itemContainerClass);
        itemContainer.appendChild(imgContainer);
        root.appendChild(itemContainer);

        
    }
}

function menuItemClick(e) {
    var root = document.getElementById("id-product-gallery-container");
    var header = document.getElementById("id-product-gallery-header");

    header.innerHTML = this.innerHTML;
    root.innerHTML= '';
    for(i=0; i<dataset.length; i++){
        if (dataset[i].name === this.innerHTML){
            populateImage(root, dataset[i]);
            break;
        }
    }
    
}

function modalCloseClick(e) {
    var modalForm = document.getElementById("id-modal");
    modalForm.style.display = "none";
}


var menuItems = document.getElementsByClassName("product-menu-item-link");
if (menuItems.length > 0){
    for(i=0; i<dataset.length; i++){
        if (dataset[i].name === menuItems[0].innerHTML){
            var root = document.getElementById("id-product-gallery-container");
            var header = document.getElementById("id-product-gallery-header");
            header.innerHTML = menuItems[0].innerHTML;
            populateImage(root, dataset[i]);
            break;
        }
    }
}



//Register Neccessary Event Listeners
for(i = 0; i<menuItems.length; i++) {
    menuItems[i].addEventListener('click', menuItemClick);
}

var modalCloseButton = document.getElementById("id-modal-close-btn");
modalCloseButton.addEventListener('click', modalCloseClick);




    