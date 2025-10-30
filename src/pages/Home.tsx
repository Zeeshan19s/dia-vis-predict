import { useData } from '@/contexts/DataContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Target, TrendingUp, Users } from 'lucide-react';

const Home = () => {
  const { data } = useData();

  return (
    <div className="animate-fade-in space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground uppercase tracking-wider">
          Healthcare Decision Support System
        </p>
        <h1 className="text-4xl font-bold text-foreground">
          Diabetes Risk Analysis Dashboard
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          A comprehensive healthcare decision support system for diabetes prediction and risk analysis. 
          This dashboard visualizes data mining results and provides interactive tools for assessing diabetes risk.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300 border-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Samples
            </CardTitle>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Database className="h-6 w-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {data.length > 0 ? data.length : '768'}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Patient records analyzed
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300 border-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Model Accuracy
            </CardTitle>
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-accent" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">86%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Classification accuracy
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300 border-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Key Features
            </CardTitle>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground mt-1">
              Health indicators tracked
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300 border-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Risk Clusters
            </CardTitle>
            <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-warning" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">3</div>
            <p className="text-xs text-muted-foreground mt-1">
              Patient risk groups
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Finding Section */}
      <Card className="bg-gradient-primary border-0 shadow-card text-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2 text-white">
            🔍 Key Finding
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-white/95">
            Higher glucose levels and BMI are major diabetes indicators. Our analysis shows that patients with glucose &gt; 120 mg/dL and BMI &gt; 30 have significantly elevated diabetes risk.
          </p>
        </CardContent>
      </Card>

      {/* Project Overview and Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              📊 Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              This mini-project demonstrates the application of data mining techniques in healthcare analytics. 
              Using the PIMA Indian Diabetes dataset, we apply classification and clustering algorithms to predict 
              diabetes risk and identify patient patterns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The system enables healthcare professionals to make data-driven decisions by visualizing key health 
              metrics and providing risk assessments based on patient data.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              🎯 Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Identify key factors contributing to diabetes risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Develop predictive models for early diabetes detection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Create interactive visualizations for data exploration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Group patients into risk clusters using K-Means</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Provide actionable insights for healthcare decision-making</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
