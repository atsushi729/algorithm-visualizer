interface Link {
  href: string;
  label: string;
}

interface AnchorLinksProps {
  links: Link[];
}

const AnchorLinks = ({ links }: AnchorLinksProps) => {
  return (
    <div className="fixed right-10 top-1/4 w-35 hidden lg:block">
      <div className="bg-white p-4 shadow-lg rounded">
        <h5 className="text-xl font-bold mb-4">On this page</h5>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-blue-600 hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnchorLinks;
