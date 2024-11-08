import { ReduxProvider } from "../providers/redux-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReduxProvider>{children}</ReduxProvider>
    </>
  );
}
