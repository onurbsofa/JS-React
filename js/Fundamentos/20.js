//performance y multiple async await

const url = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/users";
const url3 = "https://jsonplaceholder.typicode.com/albums";

const getPostAwaitPromise = async () => {
  try {
    const incio = performance.now();

    const respuesta = await fetch(url);
    const data = await respuesta.json();
    console.log(data);

    const respuesta2 = await fetch(url2);
    const data2 = await respuesta2.json();
    console.log(data2);

    const respuesta3 = await fetch(url3);
    const data3 = await respuesta3.json();
    console.log(data3);

    const fin = performance.now();
    console.log(fin - incio);
  } catch (error) {
    console.log(error.message);
  }
};

//Promis.all
const getPostPromiseAll = async () => {
  try {
    const incio = performance.now();

    const [data, data2, data3] = await Promise.all([
      fetch(url).then((respuesta) => respuesta.json()),
      fetch(url2).then((respuesta) => respuesta.json()),
      fetch(url3).then((respuesta) => respuesta.json()),
    ]);
    console.log(data);
    console.log(data2);
    console.log(data3);

    const fin = performance.now();
    console.log(fin - incio);
  } catch (error) {
    console.log(error.message);
  }
};

getPostAwaitPromise();
getPostPromiseAll();
