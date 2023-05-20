

// button.addEventListener("click", () => {
//     serviceApi()
//         .then((users) => createMarkup(users))
//     .catch(error => console.log(error))
    
// });

// function serviceApi() {
//    return fetch("https://jsonplaceholder.typicode.com/users").then((resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     });
// }


// function createMarkup(users) {
//     const markup =  users.map(({name,username,email}) => {
//       return  `<li>
//                <p>Name:${name}</p>
//                <p>Username:${username}{</p>
//                <p>Email:${email}</p>
//                </li>`;
//     }).join('');

//     list.innerHTML = markup;
//     }


const list = document.querySelector(".list");
const button = document.querySelector(".button");

button.addEventListener('click', () => {
    serviceApi()
      .then((users) => createMarkup(users))
      .catch((error) => console.log(error));
})



function serviceApi() {
    return fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((resp) => {
    if (!resp.ok) {
     throw new Error(resp.statusText);
   }
   return (resp.json());
 });
}


    



function createMarkup(users) {
   const markup = users.map(({ id, title }) => {
            return `<li>
                    <p>${id}</p>
                    <p>${title}</p>
                    </li>`}).join('')
    list.innerHTML = markup
    }