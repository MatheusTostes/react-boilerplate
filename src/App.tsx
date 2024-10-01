import { Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { inject } from '@vercel/analytics';
import './locale/i18n';
import { Outlet } from 'react-router-dom';
import { Typography } from './components/typography';
inject();

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
    <div className="h-full relative overflow-auto">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Typography>AAA</Typography>} />
          <Route path="/about" element={<Typography>AAAbout</Typography>} />
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
