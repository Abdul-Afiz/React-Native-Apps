import AppText from "../atoms/AppText";

type errorProps = {
  error?: string;
};

const ErrorMessage = ({ error }: errorProps) => {
  if (!error) null;
  return <AppText color="red">{error}</AppText>;
};

export default ErrorMessage;
