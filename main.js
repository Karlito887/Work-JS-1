let getSel = x => document.querySelector(x)
let f1 = document.forms['f1']
let f2 = document.forms['f2']


f1.edit.addEventListener('click', function () {
    let contentHtml = getSel('.top-content').innerHTML
    getSel('.box-content').style.display = 'block'
    f2.htmlArea.value = contentHtml
    getSel('.style-box').style.display = 'none'

})

f2.save.addEventListener('click', function () {
    getSel('.top-content').innerHTML = f2.htmlArea.value
    getSel('.box-content').style.display = 'none'
})


f1.style.addEventListener('click', function () {
    getSel('.style-box').style.display = 'flex'
    getSel('.box-content').style.display = 'none'
})

let f3 = document.forms['form-style']


// Select Font Size
let fontSize = document.getElementsByName('customRadioInline1')
for (i = 0; i < fontSize.length; i++) {
    fontSize[i].onchange = testFontSize;
}
function testFontSize() {
    let sizeText = f3.customRadioInline1.value
    getSel('.top-content').style.fontSize = sizeText
}

// Select Font family
f3.fontFamily.addEventListener('change', function () {
    let familyText = f3.fontFamily.value
    getSel('.top-content').style.fontFamily = familyText
})

// Select color of text
f3.colorText.addEventListener('click', function () {
    getSel('.general').style.display = 'flex';
    // let colors = getSel('.general').children.length
    for (i = 0; i < getSel('.general').children.length; i++) {
        getSel('.general').children[i].onclick = function () {
            getSel('.top-content').style.color = this.className;
            getSel('.general').style.display = 'none'

        }
    }
})

// Select color of background
f3.colorBackground.addEventListener('click', function () {
    getSel('.general').style.display = 'flex';
    // let colors = getSel('.general').children.length
    for (i = 0; i < getSel('.general').children.length; i++) {
        getSel('.general').children[i].onclick = function () {
            getSel('.top-content').style.background = this.className;
            getSel('.general').style.display = 'none'
        }
    }
})

// Select type of text
f3.bold.addEventListener('click', function () {
    if (this.checked) {
        getSel('.top-content').style.fontWeight = 'bold'
    }
    else
        getSel('.top-content').style.fontWeight = 'normal'
})

f3.cursive.addEventListener('click', function () {
    if (this.checked) {
        getSel('.top-content').style.fontStyle = 'italic'
    }
    else
        getSel('.top-content').style.fontStyle = 'normal'
})


// Choosing what we want to create: table or list

f2.add.addEventListener('click', function () {
    getSel('.container-main').style.display = 'none'
    getSel('.creating').style.display = 'none'
    getSel('.table-list').style.display = 'block'
})

let f4 = document.forms['creatingTableList']

let choice = f4.TableList.value
for (i = 0; i < f4.elements.length; i++) {
    f4.elements[i].addEventListener('click', function () {
        if (this.value == 'table') {
            getSel('.create-table').style.display = 'block'
            getSel('.create-list').style.display = 'none'
        }
        else if(this.value == 'list') {
            getSel('.create-table').style.display = 'none'
            getSel('.create-list').style.display = 'block'
        }
    })
}

// Creating table
f4.crtTable.addEventListener('click', function(){
    let tagTable = document.createElement('table')
    for(i=0;i<f4.countTr.value;i++){
        let countTr = document.createElement('tr')
        tagTable.appendChild(countTr)
        for(j=0;j<f4.countTd.value;j++){
            let countTd = document.createElement('td')
            countTd.style.width = f4.widthTd.value
            countTd.style.height = f4.heightTd.value
            countTd.style.borderWidth = f4.widthBorder.value
            countTd.style.borderStyle = f4.borderType.value
            countTd.style.borderColor = f4.borderColor.value
            countTr.appendChild(countTd)
            // countTr.innerText = 'TD'
        }
    }
    getSel('.container-main').style.display = 'block'
    getSel('.table-list').style.display = 'none'
    let reserv = document.createElement('div')
    reserv.appendChild(tagTable)
    f2.htmlArea.value +=reserv.innerHTML
})


// Creating list

f4.crtList.addEventListener('click', function(){
    let tagList = document.createElement('ul')
    for(i=0;i<f4.countLi.value;i++){
        let countLi = document.createElement('li')
        tagList.appendChild(countLi)
        countLi.style.listStyle = f4.typeList.value
        countLi.innerText = 'some text'
    }
    getSel('.container-main').style.display = 'block'
    getSel('.table-list').style.display = 'none'
    let reserv2 = document.createElement('div')
    reserv2.appendChild(tagList)
    f2.htmlArea.value +=reserv2.innerHTML

})









