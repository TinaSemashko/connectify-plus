// Core
import React, { lazy } from "react";
import { Routes as Router, Route } from "react-router";

// Styled
import { Routes } from "../app/routes";

// Pages
import withSuspense from "../hoc/withSuspense";
import NotFound from "../pages/notFound";

const Home = lazy(() => import("../pages/home"));
const Contact = lazy(() => import("../pages/contact"));
const profil = lazy(() => import("../pages/profil"));
const Connection = lazy(() => import("../pages/connection"));
const Inscription = lazy(() => import("../pages/inscription"));

export const AppRoutes: React.FunctionComponent = () => (
  <Router>
    <Route path={Routes.home} element={withSuspense(Home)} />
    <Route path={Routes.profil} element={withSuspense(profil)} />
    <Route path={Routes.contact} element={withSuspense(Contact)} />
    <Route path={Routes.connection} element={withSuspense(Connection)} />
    <Route path={Routes.deconnection} element={withSuspense(Connection)} />
    <Route path={Routes.inscription} element={withSuspense(Inscription)} />
    <Route path="*" element={<NotFound />} />
  </Router>
);
