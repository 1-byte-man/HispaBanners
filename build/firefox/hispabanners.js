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
    let banner = document.createElement('img')
    var extencion = '.png'
    var url = 'https://www.hispachan.org/banners/new/'+num+extencion
    banner.setAttribute('src', 'https://www.hispachan.org/banners/new/'+num+extencion)
    banner.setAttribute('id', 'banner')
    banner.style.cssText = `display: block; margin: 10px auto 10px auto;`
    return banner
}

function toGif(toFix){
    toFix.setAttribute('src', 'https://www.hispachan.org/banners/new/'+num+'.gif')
    toFix.setAttribute('onerror', 'toJpg(toFix)')
}

function toJpg(toFixAgain){
    toFixAgain.setAttribute('src', 'https://www.hispachan.org/banners/new/'+num+'.jpg')
    toFixAgain.setAttribute('onerror', 'console.log(toFixAgain)')
}

var banner = createBanner()
banner.setAttribute('onerror', `var copiaDeBanner = getElementById('banner');
                                console.log(copiaDeBanner);
                                var change = copiaDeBanner.getAttribute('src').replace(/png/g, 'gif');
                                console.log(change);
                                copiaDeBanner.setAttribute('src', change)`)
var container = document.querySelector('.logo')
container.appendChild(banner, container.childNodes[0])
