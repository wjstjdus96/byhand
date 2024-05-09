import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/error/ErrorFallback";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
