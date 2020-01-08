(function addBanner() {
    const FIRST_ELEMENT = 0
    const SUCCESS_STATUS = 200

    async function getJSON(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url, true)
            xhr.responseType = 'json'
            xhr.onload = () => {
                const status = xhr.status
                if (status === SUCCESS_STATUS) {
                    return resolve(xhr.response)
                }
                const err = new Error(xhr.statusText)
                err.response = xhr.response
                err.status = xhr.status
                reject(err)
            }
            xhr.send()
        })
    }

    async function getBannersAvailable() {
        const resourceURL = chrome.runtime.getURL('available.json')
        const bannersAvailable = await getJSON(resourceURL)
        return bannersAvailable
    }

    async function getRandomBannerURL() {
        const bannersAvailable = await getBannersAvailable()
        const randomNumber = Math.floor(Math.random() * bannersAvailable.length)
        return bannersAvailable[randomNumber]
    }

    async function createRandomBanner(){
        const url = await getRandomBannerURL()
        const banner = document.createElement('img')
        banner.src = url
        banner.id = 'banner'
        banner.style.cssText = 'display: block; margin: 10px auto 10px auto;'
        return banner
    }

    createRandomBanner().then((banner) => {
      const logoElement = document.getElementsByClassName('logo')[FIRST_ELEMENT]
      logoElement.insertAdjacentElement('beforebegin', banner)
    })
}())
