import Link from "next/link";

interface LinkListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  text: string;
  href?: string;
}

function LinkListItem({ text, href, ...rest }: LinkListItemProps) {
  return (
    <li {...rest}>
      {
        href ? <Link href={href}>{text}</Link> : <span>{text}</span>
      }
    </li>
  );
}

export default LinkListItem;
