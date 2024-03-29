//fetch, async y promises

const url = "https://jsonplaceholder.typicode.com/posts";

/* const getPosts = fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
 */
const getPostAwait = async () => {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error("Hubo un error");
    }
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

getPostAwait();
