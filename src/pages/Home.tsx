import { useData } from '@/contexts/DataContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Activity, Lightbulb, Upload, BarChart3 } from 'lucide-react';

const Home = () => {
  const { data } = useData();

  return (
    <div className="animate-fade-in space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-card">
        <h1 className="text-4xl font-bold mb-3">Diabetes Risk Analysis Dashboard</h1>
        <p className="text-lg text-white/90 max-w-3xl">
          A comprehensive healthcare decision support system for diabetes prediction and risk analysis. 
          Upload datasets, visualize patterns, and predict diabetes risk using data-driven insights.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Samples
            </CardTitle>
            <Database className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {data.length > 0 ? data.length.toLocaleString() : '0'}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {data.length > 0 ? 'Dataset loaded' : 'No dataset uploaded yet'}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Model Accuracy
            </CardTitle>
            <Activity className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">86%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Based on training data
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Key Insight
            </CardTitle>
            <Lightbulb className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium leading-relaxed">
              High glucose and BMI are leading indicators of diabetes
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl">Getting Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-1">Upload Your Dataset</h3>
              <p className="text-sm text-muted-foreground">
                Navigate to the Dataset Upload page and upload a CSV file containing diabetes-related data.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-1">Explore Visualizations</h3>
              <p className="text-sm text-muted-foreground">
                Use the Visualization Studio to create interactive charts and discover patterns in your data.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-1">Predict Diabetes Risk</h3>
              <p className="text-sm text-muted-foreground">
                Input patient data in the Prediction page to assess diabetes risk levels.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Data Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Upload CSV datasets, view data summaries, and analyze key statistics including missing values 
              and column distributions.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Interactive Charts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Create bar charts, line charts, pie charts, and scatter plots to visualize relationships 
              between different health metrics.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
