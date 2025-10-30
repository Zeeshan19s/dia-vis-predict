import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample clustering data - Glucose vs BMI
const clusterData = [
  // Cluster 1 - Low Risk (Green)
  { glucose: 85, bmi: 22.1, cluster: "Low Risk" },
  { glucose: 90, bmi: 24.5, cluster: "Low Risk" },
  { glucose: 88, bmi: 23.8, cluster: "Low Risk" },
  { glucose: 92, bmi: 25.2, cluster: "Low Risk" },
  { glucose: 95, bmi: 26.0, cluster: "Low Risk" },
  { glucose: 87, bmi: 24.1, cluster: "Low Risk" },
  { glucose: 93, bmi: 25.8, cluster: "Low Risk" },
  { glucose: 89, bmi: 23.5, cluster: "Low Risk" },
  { glucose: 91, bmi: 24.8, cluster: "Low Risk" },
  { glucose: 86, bmi: 22.9, cluster: "Low Risk" },

  // Cluster 2 - Medium Risk (Yellow)
  { glucose: 110, bmi: 28.5, cluster: "Medium Risk" },
  { glucose: 115, bmi: 30.2, cluster: "Medium Risk" },
  { glucose: 108, bmi: 29.1, cluster: "Medium Risk" },
  { glucose: 112, bmi: 31.0, cluster: "Medium Risk" },
  { glucose: 118, bmi: 28.8, cluster: "Medium Risk" },
  { glucose: 105, bmi: 27.5, cluster: "Medium Risk" },
  { glucose: 114, bmi: 29.8, cluster: "Medium Risk" },
  { glucose: 109, bmi: 28.2, cluster: "Medium Risk" },
  { glucose: 116, bmi: 30.5, cluster: "Medium Risk" },
  { glucose: 111, bmi: 29.3, cluster: "Medium Risk" },

  // Cluster 3 - High Risk (Red)
  { glucose: 140, bmi: 35.5, cluster: "High Risk" },
  { glucose: 155, bmi: 38.2, cluster: "High Risk" },
  { glucose: 148, bmi: 36.8, cluster: "High Risk" },
  { glucose: 162, bmi: 40.1, cluster: "High Risk" },
  { glucose: 135, bmi: 34.2, cluster: "High Risk" },
  { glucose: 152, bmi: 37.5, cluster: "High Risk" },
  { glucose: 145, bmi: 35.9, cluster: "High Risk" },
  { glucose: 158, bmi: 39.0, cluster: "High Risk" },
  { glucose: 142, bmi: 36.1, cluster: "High Risk" },
  { glucose: 150, bmi: 37.8, cluster: "High Risk" },
];

const Clustering = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Clustering Analysis</h1>
        <p className="text-lg text-muted-foreground">
          K-Means clustering visualization of patient health data
        </p>
      </div>

      <Card className="border-2 border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl">Patient Risk Clusters</CardTitle>
          <CardDescription>
            Glucose levels vs Body Mass Index (BMI) - Color-coded by risk level
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 60, left: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  type="number"
                  dataKey="glucose"
                  name="Glucose"
                  unit=" mg/dL"
                  label={{ value: "Glucose (mg/dL)", position: "bottom", offset: 40 }}
                  stroke="hsl(var(--foreground))"
                />
                <YAxis
                  type="number"
                  dataKey="bmi"
                  name="BMI"
                  label={{ value: "BMI", angle: -90, position: "insideLeft", offset: 10 }}
                  stroke="hsl(var(--foreground))"
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend
                  verticalAlign="top"
                  height={36}
                  wrapperStyle={{ paddingBottom: "20px" }}
                />
                <Scatter
                  name="Low Risk"
                  data={clusterData.filter((d) => d.cluster === "Low Risk")}
                  fill="hsl(var(--success))"
                  shape="circle"
                />
                <Scatter
                  name="Medium Risk"
                  data={clusterData.filter((d) => d.cluster === "Medium Risk")}
                  fill="hsl(var(--warning))"
                  shape="circle"
                />
                <Scatter
                  name="High Risk"
                  data={clusterData.filter((d) => d.cluster === "High Risk")}
                  fill="hsl(var(--destructive))"
                  shape="circle"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 border-success/20 bg-gradient-to-br from-success/10 to-success/5 shadow-card">
          <CardHeader>
            <CardTitle className="text-success flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-success"></span>
              Cluster 1: Low Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Patients with normal glucose levels (&lt; 100 mg/dL) and healthy BMI (&lt; 27). 
              This group shows minimal diabetes risk indicators and maintains good metabolic health.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-warning/20 bg-gradient-to-br from-warning/10 to-warning/5 shadow-card">
          <CardHeader>
            <CardTitle className="text-warning flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-warning"></span>
              Cluster 2: Medium Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Patients with moderately elevated glucose (100-120 mg/dL) and BMI (27-32). 
              Preventive measures and lifestyle changes are recommended for this group.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-gradient-to-br from-destructive/10 to-destructive/5 shadow-card">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-destructive"></span>
              Cluster 3: High Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Patients with high glucose levels (&gt; 120 mg/dL) and elevated BMI (&gt; 32). 
              This group requires immediate medical attention and intervention strategies.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-border bg-accent shadow-card">
        <CardHeader>
          <CardTitle>Understanding K-Means Clustering</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground leading-relaxed">
            K-Means clustering is an unsupervised machine learning algorithm that groups patients based on 
            health similarities. In this analysis, we used glucose levels and BMI as key features to identify 
            three distinct patient clusters.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Cluster 1</strong> indicates low risk patients with normal health indicators. 
            <strong> Cluster 2</strong> represents medium risk patients who may benefit from preventive care. 
            <strong> Cluster 3</strong> identifies high risk patients requiring immediate medical intervention.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clustering;
