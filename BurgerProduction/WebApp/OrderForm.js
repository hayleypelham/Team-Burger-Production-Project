const state = {}

const sync = (val, isChecked) => {
    
    console.log(isChecked)
    if(!state[val]){
        state[val] = isChecked
    } else {
        state[val] = isChecked
    }

    renderList()
}

const renderList = () => {
        const list = Object.keys(state).map(key => 
            state[key] ? `<li>${key}</li>` : null
        )
        .filter(e => e)

        console.log(state)
        
        document.getElementById('list').innerHTML = list.join('') 
}
