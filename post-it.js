

function newPostIt($refs, $event){
  if(
    $refs.state.checked
    && ($event.target.id != 'postitState')
    && !$event.target.offsetParent.classList.contains('post-it')){
    $event.preventDefault()

    let target = $event.target.nodeName == 'IMG' ? $event.target.offsetParent : $event.target

    console.log(target)
    let rect = target.getBoundingClientRect();


    let leftPercent = (($event.clientX - rect.left) / rect.width * 100).toFixed(3)
    let topPercent = (($event.clientY - rect.top) / rect.height * 100).toFixed(3)

    target.style.position = 'relative'
    let newComment = document.createElement('div')
        newComment.setAttribute('x-data', '{ open: false }')
        newComment.classList.add('post-it')
        newComment.style.top = topPercent + '%'
        newComment.style.left = leftPercent + '%'
        newComment.innerHTML = `<div @click="open = true" class="close"></div>
                                <div x-show="open" @click.away="open = false" contenteditable="true"></div>`
    target.appendChild(newComment)
  }else{

  }
}