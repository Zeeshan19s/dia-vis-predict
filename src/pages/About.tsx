import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, BarChart3, Brain } from "lucide-react";

const About = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">About This Project</h1>
        <p className="text-lg text-muted-foreground">
          Healthcare Decision Support System for Diabetes Prediction and Risk Analysis
        </p>
      </div>

      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl">Project Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground leading-relaxed">
            This dashboard is part of a mini-project demonstrating the application of data mining and 
            data warehousing techniques in healthcare. The project focuses on diabetes prediction and 
            risk analysis using the Pima Indians Diabetes Database.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The system combines exploratory data analysis, unsupervised learning (clustering), and 
            supervised learning (classification) to provide comprehensive insights into diabetes risk factors 
            and enable predictive healthcare decision support.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-border hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Database className="h-6 w-6 text-primary" />
              Dataset Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Source:</strong> Pima Indians Diabetes Database</p>
            <p><strong>Samples:</strong> 768 patient records</p>
            <p><strong>Features:</strong> 8 health indicators</p>
            <ul className="ml-4 space-y-1 text-muted-foreground">
              <li>• Pregnancies</li>
              <li>• Glucose</li>
              <li>• Blood Pressure</li>
              <li>• Skin Thickness</li>
              <li>• Insulin</li>
              <li>• BMI</li>
              <li>• Diabetes Pedigree Function</li>
              <li>• Age</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-border hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-primary" />
              Methodology
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-foreground">1. Data Preprocessing</p>
              <p className="text-muted-foreground">Cleaning, normalization, and feature engineering</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">2. Exploratory Data Analysis</p>
              <p className="text-muted-foreground">Statistical analysis and visualization</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">3. Clustering Analysis</p>
              <p className="text-muted-foreground">K-Means algorithm for patient segmentation</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">4. Classification</p>
              <p className="text-muted-foreground">Rule-based and ML models for prediction</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-border hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Code2 className="h-6 w-6 text-primary" />
              Technologies Used
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <strong className="text-foreground">Frontend:</strong> React, TypeScript, Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <strong className="text-foreground">Visualization:</strong> Recharts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <strong className="text-foreground">Data Analysis:</strong> Python, Pandas, Scikit-learn
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <strong className="text-foreground">UI Components:</strong> shadcn/ui, Lucide React
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-border hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-primary" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                Interactive data visualization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                Real-time risk prediction
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                Patient clustering and segmentation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                Comprehensive data insights
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                Responsive and accessible design
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-border">
  <CardHeader>
    <CardTitle className="text-2xl">Project Contributors</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      {/* Zeeshan */}
      <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
          Z
        </div>
        <div>
          <p className="font-semibold text-lg text-foreground">Zeeshan</p>
          <p className="text-sm text-muted-foreground">TY Computer Engineering Student</p>
          <p className="text-xs text-muted-foreground mt-2">
            Responsible for data analysis, model development, and dashboard implementation.
          </p>
        </div>
      </div>

      {/* Swayam Mandhani */}
      <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
          S
        </div>
        <div>
          <p className="font-semibold text-lg text-foreground">Swayam Mandhani</p>
          <p className="text-sm text-muted-foreground">TY Computer Engineering Student</p>
          <p className="text-xs text-muted-foreground mt-2">
            Responsible for frontend development, UI design, and project deployment on Vercel.
          </p>
        </div>
      </div>
    </div>
  </CardContent>
</Card>


      <Card className="border-2 border-border bg-muted">
        <CardHeader>
          <CardTitle>Project Purpose</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="text-foreground leading-relaxed">
            The primary objective of this project is to demonstrate the practical application of data mining 
            techniques in healthcare decision support systems. By analyzing historical patient data, we can:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Identify key risk factors contributing to diabetes</li>
            <li>• Segment patients into risk-based clusters for targeted interventions</li>
            <li>• Provide accurate risk predictions to support clinical decision-making</li>
            <li>• Enable early detection and preventive healthcare strategies</li>
            <li>• Improve patient outcomes through data-driven insights</li>
          </ul>
          <p className="text-xs text-muted-foreground italic mt-4">
            This project was developed as part of a Data Mining and Data Warehousing course to showcase 
            the integration of machine learning, data visualization, and web technologies in creating 
            practical healthcare solutions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
