console.clear()
class Banner {
  constructor(element_selector, base_url) {
    this.element = document.querySelector(element_selector)
    this.url = base_url
    this.images = null
    this.styles = `display: block; margin: 10px auto 10px auto;`
    this.bindEvents()
  }
  
  bindEvents() {
    this.generate()
  }
  
  generate() {
    GetData.get(this.url).then((results) => {
      this.build(results)
    })
  }
  
  build(response) {
    let random = Math.floor(Math.random() * Object.entries(response.results).length)
    console.log(random)
    let source = response.results[random].banner_url
    let banner = document.createElement('img')
    banner.setAttribute('src', source)
    banner.style.cssText = this.styles
    this.element.appendChild(banner, this.element.childNodes[0])
    console.log(`banner generated successfully with source ${source}`)
  }
   
}

class GetData {
  static get(url) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
          if(xhr.status == 200) {
            return resolve(JSON.parse(xhr.responseText))
          } else {
            reject(xhr.status)
          }
        }
      }
    })
  }
}

const bannersURL = 'https://raw.githubusercontent.com/1-byte-man/HispaBanners/master/src/banners.json'
new Banner('.logo', bannersURL)