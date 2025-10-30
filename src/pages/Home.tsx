import { Database, Target, TrendingUp, Users } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">
          Diabetes Risk Analysis Dashboard
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A comprehensive healthcare decision support system for diabetes prediction and risk analysis. 
          This dashboard visualizes data mining results and provides interactive tools for assessing diabetes risk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Samples"
          value="768"
          icon={Database}
          description="Patient records analyzed"
          variant="info"
        />
        <MetricCard
          title="Model Accuracy"
          value="86%"
          icon={Target}
          description="Classification accuracy"
          variant="success"
        />
        <MetricCard
          title="Key Features"
          value="8"
          icon={TrendingUp}
          description="Health indicators tracked"
          variant="default"
        />
        <MetricCard
          title="Risk Clusters"
          value="3"
          icon={Users}
          description="Patient risk groups"
          variant="warning"
        />
      </div>

      <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-3">🔍 Key Finding</h2>
        <p className="text-lg opacity-95">
          Higher glucose levels and BMI are major diabetes indicators. Our analysis shows that patients with 
          glucose &gt; 120 mg/dL and BMI &gt; 30 have significantly elevated diabetes risk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-card-foreground">📊 Project Overview</h3>
          <p className="text-muted-foreground leading-relaxed">
            This mini-project demonstrates the application of data mining techniques for healthcare decision support. 
            It includes data preprocessing, exploratory data analysis, clustering analysis using K-Means, 
            and classification modeling for diabetes prediction.
          </p>
        </div>

        <div className="bg-card border-2 border-border rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-card-foreground">🎯 Objectives</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Identify key factors contributing to diabetes risk</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Segment patients into risk-based clusters</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Provide accurate diabetes risk predictions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Enable data-driven healthcare decisions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
