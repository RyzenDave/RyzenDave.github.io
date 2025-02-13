console.log("======= ASYNC/AWAIT =======");

function getDataPromise() {
  return new Promise((resolve, reject) => {
    let response = {
      message: "Data fetched successfully",
      data: {
        message: "Hello World",
        statusCode: 200,
      },
    };
    if (response.data.statusCode === 200) {
      resolve(response);
    } else {
      reject("Data not found");
    }
  });
}
getDataPromise()
  .then((data) => {
    console.log("response object", data);
  })
  .catch((error) => {
    console.log("error", error);
  });

async function processDataAsync() {
  console.log("Processing data...");
  let data = await getDataPromise();
  console.log("Processing finished!, data:", data);
}

processDataAsync(data);
console.log("======= END OF SCRIPT =======");
let fetchProduct = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching product:", error);
  }
};

fetchProduct();
