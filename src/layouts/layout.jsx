import { Outlet } from 'react-router-dom';
import { SiteHeader } from '../components/site-header/site-header';
import { SiteFooter } from '../components/site-footer/site-footer';

function Layout() {
  return (
    <>
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}

export { Layout };
