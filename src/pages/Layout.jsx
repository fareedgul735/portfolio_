import { Link, Outlet, useLocation, useNavigate } from "react-router";
import {
  Home,
  User,
  FileText,
  Briefcase,
  BookOpen,
  Mail,
  Linkedin,
  Facebook,
  Twitter,
  ChevronRight,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Drawer } from "antd";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const routes = [
    "/home",
    "/about",
    "/resume",
    "/portfolio",
    "/blog",
    "/contact",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = routes.indexOf(location.pathname);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [location.pathname]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % routes.length;
    setCurrentIndex(nextIndex);
    navigate(routes[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
    setCurrentIndex(prevIndex);
    navigate(routes[prevIndex]);
  };

  const menuItems = [
    { path: "/home", label: "Home", icon: Home },
    { path: "/about", label: "About Me", icon: User },
    { path: "/resume", label: "Resume", icon: FileText },
    { path: "/portfolio", label: "Portfolio", icon: Briefcase },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <div
        className="d-flex vh-100"
        style={{
          backgroundColor: "#ffffffff",
        }}
      >
        <button
          className="d-flex d-lg-none bg-info align-items-center justify-content-center rounded-circle hover-scale"
          style={{
            position: "fixed",
            top: "12px",
            right: "12px",
            width: "45px",
            height: "45px",
            zIndex: 1050,
            transition: "transform 0.2s ease",
          }}
          onClick={() => setOpen(true)}
        >
          <Menu className="text-white" />
        </button>

        <Drawer
          title="Basic Drawer"
          placement="right"
          width={300}
          onClose={() => setOpen(false)}
          open={open}
        >
          <ul className="list-unstyled w-100 m-0 p-0">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  to={item.path}
                  key={item.path}
                  className="text-decoration-none w-100"
                >
                  <small
                    className={`d-flex border-bottom border-secondary align-items-center justify-content-center py-4 text-center text-white`}
                  >
                    <div className="mb-1">
                      <IconComponent
                        className={isActive ? "text-info" : "hover-info"}
                        size={24}
                      />
                    </div>
                    {item.label}
                  </small>
                </Link>
              );
            })}
          </ul>
        </Drawer>

        <div
          className="d-none d-lg-flex flex-column align-items-center py-3 position-fixed top-0 start-0 h-100"
          style={{ width: "88px", zIndex: 1000, backgroundColor: "#222" }}
        >
          <ul className="list-unstyled w-100 m-0 p-0">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  to={item.path}
                  key={item.path}
                  className="text-decoration-none  w-100"
                >
                  <small
                    className={`d-flex border-bottom border-secondary flex-column align-items-center justify-content-center py-4 text-center text-white 
                    `}
                  >
                    <div className="mb-1">
                      <IconComponent
                        className={isActive ? "text-info" : "hover-info"}
                        size={24}
                      />
                    </div>
                    {item.label}
                  </small>
                </Link>
              );
            })}
          </ul>
        </div>

        <div
          class="d-none d-lg-flex flex-column align-items-center justify-content-center p-4 position-fixed top-0  h-100"
          style={{ width: "412px", left: "88px", backgroundColor: "#2a2a2a" }}
        >
          <div
            className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center mb-3"
            style={{
              width: "180px",
              height: "180px",
              border: "8px solid #3a3a3a",
              background: "linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)",
            }}
          >
            <div
              className="w-100 h-100"
              style={{
                background:
                  "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><circle cx='100' cy='70' r='35' fill='%23ff6b4a'/><path d='M100 110 Q70 110 55 140 L55 200 L145 200 L145 140 Q130 110 100 110' fill='%23ff6b4a'/></svg>\") center/cover",
              }}
            ></div>
          </div>
          <h2 className="text-white mb-1">Alex Smith</h2>
          <p className="text-secondary mb-4">Web Designer</p>

          <div className="d-flex gap-2 mb-4">
            <a
              href="#"
              className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center p-2"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center p-2"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center p-2"
            >
              <Twitter size={18} />
            </a>
          </div>

          <div className="mb-auto">
            <button className="btn btn-outline-light rounded-pill px-4 py-2">
              Download CV
            </button>
          </div>

          <div className="text-center text-secondary mt-auto">
            <p className="mb-0">© 2025 All rights reserved.</p>
          </div>
        </div>

        <div
          className="main-container flex-grow-1 mx-auto overflow-auto"
          style={{
            height: "100vh",
            backgroundColor: "#222",
          }}
        >
          <Outlet />
        </div>
        <div
          className="parent-sky d-flex bg-secondary rounded-5 p-1 flex-column gap-2 position-fixed"
          style={{ bottom: "30px", right: "30px", zIndex: 1000 }}
        >
          <span
            className="hover-primary d-flex align-items-center justify-content-center p-2"
            onClick={handleNext}
          >
            <ChevronRight size={30} />
          </span>

          <span
            className="hover-primary rounded-circle d-flex align-items-center justify-content-center p-2"
            onClick={handlePrev}
          >
            <ChevronLeft size={30} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Layout;
