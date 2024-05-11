import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/error/ErrorFallback";
import { HelmetProvider } from "react-helmet-async";

export const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router />
        </ErrorBoundary>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
