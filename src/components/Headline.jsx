function Headline({ children }) {
  return (
    <div className="p-8 lg:p-16 border-b-1 border-gray-600 text-center text-2xl">
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

function Title({ children }) {
  return (
    <h1
      className="text-3xl lg:text-7xl leading-snug lg:leading-tight"
      dangerouslySetInnerHTML={{ __html: children }}
    ></h1>
  );
}

function Secondary({ children }) {
  return <h3 className="font-light text-gray-400">{children}</h3>;
}

Headline.Title = Title;
Headline.Secondary = Secondary;

export default Headline;
