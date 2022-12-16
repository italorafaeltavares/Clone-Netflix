const setupScrooling = () => {
    const container = [ ... document.querySelectorAll(".movie-container")]

    const nextBTN = [ ... document.querySelectorAll(".next-btn")]
    const prevBTN = [ ... document.querySelectorAll(".pre-btn")]

    container.forEach((item, i)=>{
        let containerDimensions = item.getBoundingClientRect()
        let containerWidth = containerDimensions.width

        nextBTN[i].addEventListener('click', ()=>{
            item.scrollLeft += containerWidth
        })

        prevBTN[i].addEventListener('click', ()=>{
            item.scrollLeft += containerWidth
        })


    })
}