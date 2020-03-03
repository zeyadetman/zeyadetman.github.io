import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    window.href.location = 'https://www.slideshare.net/slideshow/embed_code/key/hsbLIjXmKEsnBD';
  }, []);
  return (
    <a href="https://www.slideshare.net/slideshow/embed_code/key/hsbLIjXmKEsnBD">
      click here if you're not automatically redirected
    </a>
  );
};

export default Resume;
