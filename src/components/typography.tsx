type TypographyProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Typography = (props: TypographyProps) => {
  return (
    <p className="text-slate-600" {...props}>
      {props.children}
    </p>
  );
};
