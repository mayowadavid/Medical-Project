import Link from "next/link";

function isExternal(href) {
  if (!href) return false;
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(
    href.toString()
  );
}
// Anchor Component
function Anchor(props) {
  const {
    tag: Tag = "a",
    as,
    href,
    prefetch,
    replace,
    scroll,
    text,
    ...attr
  } = props;
  // prettier-ignore
  const link_props = {
		href, as, prefetch, replace, scroll,
	};

  if (isExternal(href) && !props.target)
    Object.assign(attr, { target: "_blank", rel: "noopener noreferrer" });
  return (
    <Link {...link_props}>
      <Tag {...attr} />
    </Link>
  );
}

export default Anchor;
