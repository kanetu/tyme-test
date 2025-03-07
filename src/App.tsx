import Home from "@features/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
};

export default App;
