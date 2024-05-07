async function fetchedData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        const tbody = document.querySelector('tbody');
        data.forEach(todo => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${todo.userId}</td>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed ? 'Yes' : 'No'}</td>
            `;
            tbody.appendChild(tr);
        });

        return data;
    } catch (e) {
        console.log(e.message);
    }
}

fetchedData();
