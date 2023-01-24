import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const isDev = import.meta.env.VITE_ENV === "development";

// TODO use infrastructure/Alerts
const handleError = (error) => {
  console.dir(error);
};

const queryOptions = {
  defaultOptions: {
    queries: {
      staleTime: isDev ? 1000 * 120 : 0,
      refetchOnWindowFocus: false,
      retry: isDev ? 0 : 1,
    },
  },
  queryCache: new QueryCache({ onError: handleError }),
  mutationCache: new MutationCache({ onError: handleError }),
};

const queryClient = new QueryClient(queryOptions);

const QueryWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* React query devtools config */}
      {isDev && (
        <ReactQueryDevtools
          position="bottom-right"
          toggleButtonProps={{ style: { width: "30px" } }}
          initialIsOpen={false}
          panelPosition="right"
        />
      )}
    </QueryClientProvider>
  );
};

export default QueryWrapper;
