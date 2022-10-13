
sections = document.querySelectorAll('.section')



function leftIn(target){

let item1 = target.querySelector('.id')
let div = target.querySelector('.anim').children


let tl = gsap.timeline()

// tl.to (target , {display: 'grid' , duration: 1})

tl.fromTo(div , { opacity: 0 , x: '-20vw'}, {x: '0', opacity :1 , stagger: .1 , duration :1})

tl.fromTo(item1 , { opacity: 0} , { opacity: 1 , duration: 1})

return tl

}



function rightIn(target){

    let item1 = target.querySelector('.id')
    let div = target.querySelector('.anim').children
    
    let tl = gsap.timeline()
    
    // tl.to (target , {display: 'grid' , duration: 1})
    
    tl.fromTo(div , { opacity: 0 , x: '20vw'}, {x: '0', opacity :1 , stagger: .1 , duration :1})
    
    tl.fromTo(item1 , { opacity: 0} , { opacity: 1 , duration: 1})
    
    return tl
    
    }


function pageleftOut(target){

    let tl = gsap.timeline()

    tl.to(target , {x: '-100vw', duration: 1.5})

    return tl
}


let master = gsap.timeline();

//master.pause()


//master.add(leftIn(sections[0]))

master.add(leftIn(sections[0]).reverse(0)) //  2 secs to Complete

master.add( pageleftOut(sections[0]))
//page2 
master.add( rightIn(sections[1]) , '<25%')

master.set('body', {'--def-color': '#000'}, '<')

master.addLabel('Page1') // Pages are 0 indexed

master.add(leftIn(sections[1]).reverse())

master.add( pageleftOut(sections[1]))
//pg 3
master.add( rightIn(sections[2]) , '<25%')

master.set('body', {'--def-color': '#fff'}, '<')

master.addLabel('Page2')

master.add(leftIn(sections[2]).reverse())

master.add( pageleftOut(sections[2]))
//pg4
master.add( rightIn(sections[3]) , '<25%')

master.set('body', {'--def-color': '#000'}, '<')

master.addLabel('Page3')

master.add(leftIn(sections[3]).reverse())

master.add( pageleftOut(sections[3]))
//pg5
master.add(rightIn(sections[4]) , '<25%')

master.set('body', {'--def-color': '#fff'}, '<')

master.addLabel('Page4')


// sections.forEach((element, index , array) => {
//     if(index < array.length - 1){
        
//     element.addEventListener('wheel' , (e) => {
//         console.log(index)

//         if(e.deltaY > 20){
//             console.log(e)
//             master.tweenTo(`Page${index + 1}`)
//         }else if(e.deltaY < -20){
//             console.log(e.deltaY)
//             if(index === 0){}else{
//             console.log(index -1)
//             master.tweenTo(`Page${index - 1}`)
//             }

//         }
//     })
// }else if( index = array.length - 1){
//     element.addEventListener('wheel', (e) =>{
//     if(e.deltaY < -20){
//         console.log(e)
//         master.tweenTo(`Page${index - 1}`)
//     }
// })
// }
    
// });

// window.addEventListener('keydown' , ()=> {
//     master.tweenTo('Page1', {duration: 3, ease: 'slow', stagger: .2})
// })

let options = {
    threshold: .4,
}

let ob = new IntersectionObserver(playAnim, options) // created

ob.observe(document.querySelector('.services'))

function playAnim(e){
    console.log(e)
}


