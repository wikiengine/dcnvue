import { useState, useEffect } from 'react';

export function ContentHtml() {
  const [contentHtml, setContentHtml] = useState(window.contentHtml);

  useEffect(() => {
    const updateContentHtml = () => {
      setContentHtml(window.contentHtml);
    };
    window.addEventListener('contentHtmlChanged', updateContentHtml);
    return () => {
      window.removeEventListener('contentHtmlChanged', updateContentHtml);
    };
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
}