import { Button } from "./styles";

export function ExitButton({ title, ...rest }) {
  return (
    <Button type="button" {...rest}>
      {title}
    </Button>
  );
}