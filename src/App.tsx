import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "@/contexts/DataContext";
import { DashboardLayout } from "@/components/DashboardLayout";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Visualization from "./pages/Visualization";
import Clustering from "./pages/Clustering";
import Prediction from "./pages/Prediction";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// 🆕 Newly added imports for prediction form and data visualization
import PredictionForm from "./pages/PredictionForm";
import DataVisualization from "./pages/DataVisualization";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <DataProvider>
        <BrowserRouter>
          <DashboardLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/visualization" element={<Visualization />} />
              <Route path="/clustering" element={<Clustering />} />
              <Route path="/prediction" element={<Prediction />} />
              <Route path="/about" element={<About />} />
              
              {/* 🆕 Added routes for new pages */}
              <Route path="/predict" element={<PredictionForm />} />
              <Route path="/visualize" element={<DataVisualization />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DashboardLayout>
        </BrowserRouter>
      </DataProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
