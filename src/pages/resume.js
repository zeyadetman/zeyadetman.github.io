import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = "https://www.slideshare.net/slideshow/embed_code/key/hsbLIjXmKEsnBD";
    }
  }, []);
  return (
    <a href="https://www.slideshare.net/slideshow/embed_code/key/hsbLIjXmKEsnBD">
      click here if you're not automatically redirected
    </a>
  );
};

export default Resume;
