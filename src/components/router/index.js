import About from '../../pages/About';
import Error from '../../pages/Error';
import Posts from '../../pages/Posts';
import PostIdPage from '../../pages/PostIdPage';
import Login from '../../pages/Login';


export const privateRoutes = [
  { path: "about", element: <About /> },
  { path: "posts", element: <Posts /> },
  { path: "posts/:id", element: <PostIdPage /> },
  { path: "error", element: <Error /> },
];

export const publicRoutes = [
  { path: "login", element: <Login /> },
  { path: "error", element: <Error /> },
];
