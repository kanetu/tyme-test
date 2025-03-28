import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import MarketPlace from "@/features/MarketPlace";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/globals.css";

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="main bg-[url(../../public/images/background.png)] h-max bg-cover bg-center bg-no-repeat  w-full">
                <BrowserRouter>
                    <Header />
                    <SubHeader />
                    <Routes>
                        <Route path="/" element={<MarketPlace />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    );
};

export default App;
