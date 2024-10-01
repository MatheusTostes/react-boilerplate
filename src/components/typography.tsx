import { cn } from '@/lib/utils';

type TypographyProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Typography = (props: TypographyProps) => {
  return (
    <p
      {...props}
      className={cn('font-semibold text-slate-600', props.className)}
    >
      {props.children}
    </p>
  );
};
