export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos',
    dataType: 'json'
  });
};

export const createTodo = (todo) => {
  return $.ajax ({
    method: "post",
    url: "/api/todos",
    dataType: "json",
    data: {
      todo: {
        title: todo.title,
        body: todo.body,
        done: false
      }
    }
  });
};

/*
.then(
  todos => console.log(todos),
  error => console.log(error)
);
*/
