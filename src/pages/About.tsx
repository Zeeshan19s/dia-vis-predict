import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Target, Users, Wrench } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">About This Project</h1>
        <p className="text-muted-foreground">
          Healthcare Decision Support System for Diabetes Prediction and Risk Analysis
        </p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            This dashboard is a comprehensive healthcare decision support system designed to assist in diabetes 
            prediction and risk analysis. It provides healthcare professionals and researchers with powerful tools 
            to visualize datasets, perform data analysis, and predict diabetes risk based on various health metrics.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The system combines interactive data visualization capabilities similar to Power BI with predictive 
            analytics to offer actionable insights into diabetes risk factors. Users can upload their own datasets, 
            explore data through multiple chart types, and get instant risk assessments based on patient data.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Development Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Developed by:</span> Zeeshan
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Role:</span> Full-Stack Developer & Healthcare Analytics Specialist
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            Technologies Used
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h3 className="font-semibold mb-2 text-secondary-foreground">Frontend Framework</h3>
              <p className="text-sm text-muted-foreground">React 18 with TypeScript</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h3 className="font-semibold mb-2 text-secondary-foreground">Styling</h3>
              <p className="text-sm text-muted-foreground">Tailwind CSS</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h3 className="font-semibold mb-2 text-secondary-foreground">Charts & Visualization</h3>
              <p className="text-sm text-muted-foreground">Recharts</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h3 className="font-semibold mb-2 text-secondary-foreground">Data Processing</h3>
              <p className="text-sm text-muted-foreground">PapaParse</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h3 className="font-semibold mb-2 text-secondary-foreground">UI Components</h3>
              <p className="text-sm text-muted-foreground">shadcn/ui</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h3 className="font-semibold mb-2 text-secondary-foreground">Icons</h3>
              <p className="text-sm text-muted-foreground">Lucide React</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <span className="text-muted-foreground">
                <strong className="text-foreground">CSV Data Upload:</strong> Import diabetes datasets for analysis
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <span className="text-muted-foreground">
                <strong className="text-foreground">Data Insights:</strong> View data summaries, missing values, and basic statistics
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <span className="text-muted-foreground">
                <strong className="text-foreground">Interactive Visualizations:</strong> Create bar charts, line charts, pie charts, and scatter plots
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <span className="text-muted-foreground">
                <strong className="text-foreground">Risk Prediction:</strong> Rule-based diabetes risk assessment with color-coded results
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <span className="text-muted-foreground">
                <strong className="text-foreground">Responsive Design:</strong> Fully functional on desktop, tablet, and mobile devices
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Project Goals & Future Scope
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Current Goals</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Provide an intuitive interface for diabetes data analysis
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Enable quick risk assessments for healthcare decision-making
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Demonstrate the power of data visualization in healthcare
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Future Enhancements</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Integration with machine learning models for improved prediction accuracy
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Backend API for data storage and user authentication
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Real-time data updates and collaborative features
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Advanced preprocessing and feature engineering tools
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Export functionality for reports and visualizations
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card bg-gradient-primary text-white">
        <CardContent className="pt-6">
          <p className="text-center text-sm">
            This project demonstrates the intersection of healthcare, data science, and modern web technologies 
            to create meaningful tools for diabetes prediction and analysis.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
