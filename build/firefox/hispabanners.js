function randInt() {
    let x = Math.round(Math.random() * 261)
    if(x < 100 && x >= 10){
	   x = '0' + x.toString()
    }
    if(x < 100 && x < 10){
	   x = '00' + x.toString()
    }

    return x
}

function createBanner(){
    var num = randInt()
    var banner = document.createElement('img')
    var extencion = '.png'
    var url = `https://www.hispachan.org/banners/new/${num}${extencion}`
    banner.src = url
    banner.id = 'banner'
    banner.style.cssText = `display: block; margin: 10px auto 10px auto;`

    banner.onerror = function() {
        var ext = banner.src.split('.').pop().replace(/\//g,'')
        console.log(`Error loading banner with format: ${ext}`)
        if(ext === 'png' || ext === 'jpg') {
            banner.src = `https://www.hispachan.org/banners/new/${num}.gif`
            console.log('Banner changed to gif format')
        } else if(ext === 'gif' || ext === 'png') {
            banner.src = `https://www.hispachan.org/banners/new/${num}.jpg`
            console.log('Banner changed to jpg format')
        } else {
            banner.src = `https://www.hispachan.org/banners/new/${num}.png`
            console.log('Banner changed to png format')
        }
    }

    return banner
}

var banner = createBanner()
var container = document.querySelector('.logo')
container.appendChild(banner, container.childNodes[0])
