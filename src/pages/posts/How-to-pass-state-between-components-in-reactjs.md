---
title: How to pass state between components in reactjs (Full Code)
author: zeyadetman
categories: projects
comments: true
layout: post
date: "2018-07-25"
---

In this post, i'll explain how to pass a state between components in Reactjs.
We'll build a small 'How many books did you read?' app, in this application, we
have two main components one big called 'Library' and another small 'Book', we have 3 books in the library state and each book has its own state. check any book to count as read. [try the app here](https://zeyadetman.github.io/howmanybooks/)

**Let's begin with code:**

## Passing state from parent to child

In our Library component we have this state

```javascript {numberLines: true}
this.state = {
  reads: 0,
  books: [
    {
      name: "Zero to one",
      isbn: "9780804139298",
      author: "Peter Thiel",
      cover: "https://images.gr-assets.com/books/1414347376l/18050143.jpg",
      status: false
    },
    {
      name: "The Manager's Path",
      isbn: "9781491973899",
      author: "Camille Fournier",
      cover: "https://images.gr-assets.com/books/1484107737l/33369254.jpg",
      status: false
    },
    {
      name: "Calculus, Better Explained",
      isbn: "9781470070700",
      author: "Kalid Azad",
      cover: "https://images.gr-assets.com/books/1448590460l/27993945.jpg",
      status: false
    }
  ]
};
```

and want to create `this.state.books.length` - as a number - `Book` components each have props from the `books` array of the `Library` component's state. We have to deal with the two components.

**First** with the parent, we have to create the `Book` component `this.state.books.length` - as a number - times, and pass our diffrent values to them Like this:

[Full Code here](https://github.com/zeyadetman/howmanybooks/blob/master/src/components/Library/Library.jsx)

```javascript {numberLines: true}
{
  this.state.books.map((_book, _id) => {
    return (
      <Book
        handleCounter={this.handleCounter}
        key={_id}
        id={_book.isbn}
        name={_book.name}
        isbn={_book.isbn}
        author={_book.author}
        cover={_book.cover}
      />
    );
  });
}
```

_Note_ ignore `handleCounter` for now.

**Second** with the child `Book`, we have the values from parent, let's use them:

[Full code here](https://github.com/zeyadetman/howmanybooks/blob/master/src/components/Book/Book.jsx)

```javascript {numberLines: true}
...
render() {
	return (
		<Card>
			<Image
				src={this.props.cover}
    			alt="Book cover"
...
```

Until now we created 3 `Book` components from the parent component `Library`, and set their values from the parent state.
Easy! Right?
Great, let's begin the second part

## Passing state from child to parent

In this section, we want to handle the number of books you read by checking on each book checkbox.

In our `Book` we have this state

[Full code here](https://github.com/zeyadetman/howmanybooks/blob/master/src/components/Book/Book.jsx)

```jsx {numberLines: true}
this.state = {
  status: false,
  id: this.props.id
};
```

_Note_ don't forget to pass `props` to component's constructor.

`status` means if you read this book or not, and its default value is `false`, `id` is the id of this book and i set it by book id like we learned in the previous section.

we need to handle change of this status then update the books array in the parent state.

In our `Book` component, we'll add a checkbox that recieve the change of the book status and pass `this.handleChange` to its `onChange` event like this:

[Full code here](https://github.com/zeyadetman/howmanybooks/blob/master/src/components/Book/Book.jsx)

```js {numberLines: true}
<input type="checkbox" name="example" onChange={this.handleChange} />
```

you need to bind the function first, then update the `Book` state with the new status, after updating the child state we'll update the state of the parent `Library` like this:

[Full code here](https://github.com/zeyadetman/howmanybooks/blob/master/src/components/Book/Book.jsx)

```js {numberLines: true}
handleChange() {
		this.setState({status: !this.state.status}, this.updateLibraryCount);
    }

updateLibraryCount() {
		this.props.handleCounter(this.state);
	}
```

In `updateLibraryCount` we used `handleCounter` function of the `Library` as a prop, then passed the `Book` state to it, Now the `Library` sees the `Book` state, Great! let's use it.

[Full Code here](https://github.com/zeyadetman/howmanybooks/blob/master/src/components/Library/Library.jsx)

```js {numberLines: true}
handleCounter(_State) {
        //Get the index of this book by searching by its unique isbn
        const ObjNum = this.state.books.findIndex(
			_book => _book.isbn === _State.id
        );

        //then update its value in the Library component
		this.setState(
			{
				books: update(
					ObjNum,
					{...this.state.books[ObjNum], status: _State.status},
					this.state.books
				)
			},
			() => {
                //this is a callback to handle the new change of the book status
				//and increment the reads
				const _read = this.state.books.filter(_book =>
					_book.status === true
				).length;
				this.setState({reads: _read});
			}
		);
	}
```

I hope you're understand how to pass the state from the parent to child and vice versa, Here's the [full code](https://github.com/zeyadetman/howmanybooks), and this is the [original post on my blog](https://zeyadetman.github.io/projects/2018/07/25/How-to-pass-state-between-components-in-reactjs.html). If you have questions, feel free to ask in comments or [email](zeyadetman@gmail.com).
