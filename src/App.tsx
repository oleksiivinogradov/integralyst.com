import { useState, useEffect } from "react";
import { BranchSelector } from "./components/BranchSelector";
import { MainSite } from "./components/MainSite";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for popstate (browser back/forward)
    window.addEventListener("popstate", handleLocationChange);

    // Override link clicks to update state
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      if (link && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const url = new URL(link.href);
        window.history.pushState({}, "", url.pathname);
        setCurrentPath(url.pathname);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Determine which component to render based on path
  if (currentPath === "/il") {
    return <MainSite countryCode="IL" />;
  } else if (currentPath === "/us") {
    return <MainSite countryCode="US" />;
  } else if (currentPath === "/ch") {
    return <MainSite countryCode="CH" />;
  } else {
    return <BranchSelector />;
  }
}
