const $log = console.log

const nodes = (n) => {
    let j = 0
    while (j < n) {
        $log('metodo de nodos')
        const gout = document.createElement('b')
        const pos = 100 * Math.random()
        const del = 8 * Math.random()
        const anim = j % 2 == 0 ? 'rain' : 'rain_2'
        gout.style.left = `${pos}%`
        gout.style.animationName = anim
        gout.style.animationDelay = `${del}s`
        gout.style.animationDuration = `${8 + Math.random() * 10}s`
        gout.textContent = '💈'
        document.querySelector('.background').appendChild(gout)
        j++
    }
}

nodes(50)