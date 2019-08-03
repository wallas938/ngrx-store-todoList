import { ITodo } from 'src/app/models/todo.interface';

export const todosMock: ITodo[] = [{
  id: 'id_' + Math.random().toString(36).substr(2),
  name: "delectus aut autem",
  status: false
},
{
  "id": 'id_' + Math.random().toString(36).substr(2),
  name: "quis ut nam facilis et officia qui",
  status: false
},
{
  "id": 'id_' + Math.random().toString(36).substr(2),
  name: "fugiat veniam minus",
  status: false
},
{
  "id": 'id_' + Math.random().toString(36).substr(2),
  name: "et porro tempora",
  status: true
},
{
  "id": 'id_' + Math.random().toString(36).substr(2),
  name: "laboriosam mollitia et enim quasi adipisci quia provident illum",
  status: false
},
{
  "id": 'id_' + Math.random().toString(36).substr(2),
  name: "qui ullam ratione quibusdam voluptatem quia omnis",
  status: false
},
{
  "id": 'id_' + Math.random().toString(36).substr(2),
  name: "illo expedita consequatur quia in",
  status: false
}]