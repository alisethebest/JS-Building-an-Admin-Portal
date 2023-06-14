
// Your Code Here
const bookId = "12345"; // Replace with the actual book ID
const newTitle = "New Book Title"; // Replace with the new title

const url = `/updateBook`;
const body = {
  id: bookId,
  title: newTitle,
};

const headers = {
  "Content-Type": "application/json",
};

const requestOptions = {
  method: "PATCH",
  headers,
  body: JSON.stringify(body),
};

fetch(url, requestOptions)
  .then((response) => response.json())
  .then((updatedBook) => {
    // Handle the updated book object
    console.log(updatedBook);
  })
  .catch((error) => {
    // Handle the error
    console.error("Error:", error);
  });
