export const PanelProductLink = ({ url, className, children }) => (
  <a href={url} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
