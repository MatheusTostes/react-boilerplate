import { Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { Outlet } from 'react-router-dom';
import { Typography } from './components/typography';
import { Button } from './components/ui/button';

function MainLayout() {
  return (
    <div className="">
      navigation
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative h-full overflow-auto">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Typography>AAA</Typography>} />
          <Route path="/about" element={<Button>AAAbout</Button>} />
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
