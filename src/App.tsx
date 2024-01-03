import { MyRoutes } from './Router/MyRoutes';
import { Cursor } from './Components/Cursor/Cursor';

export const App = () => {
  return (
    <div className="layout">
      <MyRoutes />
      <Cursor />
    </div>
  );
};
