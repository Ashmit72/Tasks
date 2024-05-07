const books=[
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"]
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"]
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6"]
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3"]
    },
    {
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7"]
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"]
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8"]
    },
    {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"]
    },
    {
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"]
    },
    {
        "title": "Alice's Adventures in Wonderland",
        "author": "Lewis Carroll",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7"]
    }
]

const newBooks=books.filter((book)=>{
  const newChapters=book.chapters.length>5?true:false;
  return newChapters
})

console.log(newBooks);