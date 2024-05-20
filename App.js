const parent = React.createElement('h1',{id:'parent'}, React.createElement('h1',{id:'child'}, 'Hello from child'))
        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(parent)

        console.log(parent)