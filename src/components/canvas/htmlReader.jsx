const HtmlRenderer = ({ body }) => {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
};

export default HtmlRenderer;