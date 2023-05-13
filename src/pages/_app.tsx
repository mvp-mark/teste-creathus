import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "utils/api";

import "styles/globals.css";
import { Drawer } from "components/drawer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Drawer>
        <Component {...pageProps} />
      </Drawer>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
