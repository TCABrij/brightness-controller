const select = document.querySelector('select')
const outputDiv = document.querySelector('.output-div')

select.addEventListener('change', e => {
    let mode = e.target.value

    if(mode == 'auto'){
       outputDiv.innerHTML = `
       <p class="mode">Brightness Mode selected to Auto</p>

       `
    }
    else if(mode == 'manual'){
        outputDiv.innerHTML = `
        <p class="mode">Brightness Mode selected to Manual</p>
        <div class="manual-box">
           <input type="range" value="30" min="0" max="100">
           <span class="default-value">30%<span>
        </div>
        `
        let range = document.querySelector('input')
        let span = document.querySelector('.default-value')

        range.addEventListener('change', ()=>{
            span.textContent = `${range.value}%`
        })
    }
    else{
        outputDiv.innerHTML = ``
    }
})