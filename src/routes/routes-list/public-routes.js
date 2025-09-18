import Blog from "../../pages/Blog";
import BlogDetail from "../../pages/components/blog-detail/BlogDetail";
import Appweb from "../../pages/components/Service-detail/Service-App";
import chatbot from "../../pages/components/Service-detail/Service-chatbot";
import Ecommerece from "../../pages/components/Service-detail/Service-Ecommerece";
import Maintenence from "../../pages/components/Service-detail/Service-maintinence";
import digitalmarkiting from "../../pages/components/Service-detail/Service-markiting";
import SEO from "../../pages/components/Service-detail/Service-seo";
import Software from "../../pages/components/Service-detail/Service-software";
import Serviceweb from "../../pages/components/Service-detail/Service-web";
import uxui from "../../pages/components/Service-detail/Service_ux-ui";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import OverOns from "../../pages/OverOns";
import Service from "../../pages/Service";
import Submit from "../../pages/Submit";
import NotFound from "../../pages/NotFound";
import Portfolio from "../../pages/Portfolio";
import web1 from "../../pages/components/portfolio_detail/web_1";
import App1 from "../../pages/components/portfolio_detail/App_1";
import ThankYou from "../../pages/ThankYou";
import WordPress from "../../pages/components/Service-detail/WordPress";
import OdooIntegration from "../../pages/Odoo_integration";

export const publicRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/services",
    element: Service,
  },
  {
    path: "/over-ons",
    element: OverOns,
  },
  {
    path: "/submit",
    element: Submit,
  },
  {
    path: "/web-development",
    element: Serviceweb,
  },
  {
    path: "/app-development",
    element: Appweb,
  },
  {
    path: "/ui-ux development",
    element: uxui,
  },
  {
    path: "/e-commerce development",
    element: Ecommerece,
  },
  {
    path: "/digital-markitting",
    element: digitalmarkiting,
  },
  {
    path: "/software-development",
    element: Software,
  },
  {
    path: "/chatbot-development",
    element: chatbot,
  },
  {
    path: "/maintenence",
    element: Maintenence,
  },
  {
    path: "/seo",
    element: SEO,
  },
  {
    path: "/blog",
    element: Blog,
  },
  {
    path: "/BlogDetail",
    element: BlogDetail,
  },
  {
    path: "/contact-us",
    element: Contact,
  },
  {
    path: "/portfolio",
    element: Portfolio,
  },
  {
    path: "/webdevelopment1",
    element: web1,
  },
  {
    path: "/appdevelopment",
    element: App1,
  },
   {
    path: "/wordPress_development",
    element: WordPress,
  },
   {
    path: "/odoo_integration",
    element: OdooIntegration,
  },
  {
    path: "*",
    element: NotFound,
  },
  {
  path: "/thank-you",
  element: ThankYou,
}
];
