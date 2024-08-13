import React, {Suspense, lazy} from "react"
import { StylesProvider } from '@mui/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { I18nextProvider } from 'react-i18next';
// import GlobalStyle from './App.Styles';
import WebAppProvider from './providers/webAppProvider';
import { Layout } from './components/Layout';
import {PATHS} from "./const/paths.constants";

import i18n from './common/utils/i18n';
import Loading from "./components/Loading";
// import Unknown from "./pages/Unknown";
// import Upgrade from "./pages/Upgrade/Upgrade";
// import Items from "./pages/Items/Items";
// import Friends from "./pages/Friends/Friends";

const GlobalStyle = lazy(() => import("./App.Styles"));
const Home = lazy(() => import("./pages/Home/Home"));
const Upgrade = lazy(() => import("./pages/Upgrade/Upgrade"));
const Items = lazy(() => import("./pages/Items/Items"));
const Friends = lazy(() => import("./pages/Friends/Friends"));
const Tasks = lazy(() => import("./pages/Tasks/Tasks"));

function App() {
  return (
    <WebAppProvider>
      <I18nextProvider i18n={i18n}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route
                index
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Home />
                    </Layout>
                  </Suspense>
                }
              />
              <Route
                path={PATHS.MINE}
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Home />
                    </Layout>
                  </Suspense>
                }
              />
              <Route
                path={PATHS.UPGRADE}
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Upgrade />
                    </Layout>
                  </Suspense>
                }
              />
              <Route
                path={PATHS.ITEMS}
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Items />
                    </Layout>
                  </Suspense>
                }
              />
              <Route
                path={PATHS.FRIENDS}
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Friends />
                    </Layout>
                  </Suspense>
                }
              />
              <Route
                path={PATHS.EARN}
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Tasks />
                    </Layout>
                  </Suspense>
                }
              />
            </Routes>
          </BrowserRouter>
        </StylesProvider>
      </I18nextProvider>
    </WebAppProvider>
  )
}

export default App
